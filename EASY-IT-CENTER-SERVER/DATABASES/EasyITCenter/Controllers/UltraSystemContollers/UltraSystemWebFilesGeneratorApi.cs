using HtmlAgilityPack;
using Markdig.Renderers.Docx;
using Markdig;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging.Abstractions;
using SharpCompress.Common;
using System.IO.Compression;
using Westwind.AspNetCore.Markdown;
using Pek.Markdig.HighlightJs;
using Markdown = Westwind.AspNetCore.Markdown.Markdown;
using OpenGraphNet;

namespace EasyITCenter.ServerCoreDBSettings {


    /// <summary>
    ///  WebPages Knihovna API pro Nastroje 
    /// </summary>
    [Authorize]
    [ApiController]
    [Route("UltraSystemControl")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class UltraSystemWebFilesGeneratorApi : ControllerBase {

        //WebFile Generator
        //Convert MD->Html,Convert Html->Md,
        //Convert List<MD>->List<Html>,Convert List<Html>->List<Md>,
        //Convert MD->Docx,List<Md>->List<Docx>
        //Generate List<Md>->Index.Md,Generate List<Md>->Index.Html
        //TODO Ošetřit aby Mohli menit soubory jen ve svem ulozisti
        //TODO Udelat Aendu Dynamicke Registace Trid Pro Dynamicka API a tam se zadaji file Extensions
        //TODO VKladat Static DB Soubory 
        //TODO Vracet jako Zip
        [HttpPost("/UltraSystemControl/WebFilesGenerator")]
        [Consumes("application/json")]
        public async Task<IActionResult> WebFilesGenerator([FromBody] MDGeneratorCreateIndexRequest webfilesrequest) {
            try {

                if (CommunicationController.IsAdmin()) {
                    string resultMessage = DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage);

                    List<string> filelist = FileOperations.GetPathFiles(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), "*." + webfilesrequest.FromType.ToString().ToLower(), webfilesrequest.ScanRootOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories);

                    if (filelist.Count == 0) { 
                        return BadRequest(new { message = DbOperations.DBTranslate("NoFiles Found", webfilesrequest.ServerLanguage) }); 
                    } else {

                        //Generate Index Md Or Index Html
                        if (webfilesrequest.IndexOnly) {
                            string generatedFile = webfilesrequest.ToType == SupportGenFileTypes.Md ? Environment.NewLine + $"# Index {webfilesrequest.WebRootFilePath}" + Environment.NewLine : $"<H1>Index {webfilesrequest.WebRootFilePath}</H1>" + Environment.NewLine;
                            filelist.ForEach(file => generatedFile += webfilesrequest.ToType == SupportGenFileTypes.Md ? $"[{file}]({file})" + Environment.NewLine : $"<a href='{file}'>{file}</a>" + Environment.NewLine);

                            if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"index.{webfilesrequest.ToType.ToString()}"))) {
                                return BadRequest(new { message = DbOperations.DBTranslate("RewriteFilesIsNotAllowed", webfilesrequest.ServerLanguage) });
                            }
                            else {
                                if (webfilesrequest.ToType == SupportGenFileTypes.Md) { generatedFile = DataOperations.MarkDownLineEndSpacesResolve(generatedFile); }
                                FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"index.{webfilesrequest.ToType.ToString()}"), generatedFile);
                            }

                        }
                        else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType == SupportGenFileTypes.Md && webfilesrequest.ToType == SupportGenFileTypes.Html) {
                            //Generate All Html Files 
                            filelist.ForEach(file => {
                                if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                    resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                }
                                else {
                                    FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"index.{webfilesrequest.ToType.ToString()}"), Markdown.ParseFromFile(System.IO.File.ReadAllText(file)));
                                }
                            });

                        }
                        else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType == SupportGenFileTypes.Html && webfilesrequest.ToType == SupportGenFileTypes.Md) {
                            //Generate All Md Files 
                            filelist.ForEach(file => {
                                if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                    resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                }
                                else {
                                    FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"index.{webfilesrequest.ToType.ToString()}"), new ReverseMarkdown.Converter().Convert(System.IO.File.ReadAllText(file)));
                                }
                            });
                        }
                        else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType == SupportGenFileTypes.Md && webfilesrequest.ToType == SupportGenFileTypes.Docx) {
                            //Generate All Docx Files 
                            var document = DocxTemplateHelper.Standard;
                            var styles = new DocumentStyles();
                            var renderer = new DocxDocumentRenderer(document, styles, NullLogger<DocxDocumentRenderer>.Instance);
                            var pipeline = new MarkdownPipelineBuilder().UseEmphasisExtras().UseAbbreviations().UseAdvancedExtensions().UseBootstrap()
                                .UseDiagrams().UseEmphasisExtras().UseEmojiAndSmiley(true).UseDefinitionLists().UseTableOfContent().UseTaskLists()
                                .UseSmartyPants().UsePipeTables().UseMediaLinks().UseMathematics().UseListExtras().UseHighlightJs()
                                .UseGridTables().UseGlobalization().UseGenericAttributes().UseFootnotes().UseFooters().UseSyntaxHighlighting().UseFigures().Build();

                            filelist.ForEach(file => {
                            if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                            }
                            else {
                                    object exportedFile = Markdig.Markdown.Convert(System.IO.File.ReadAllText(file), renderer, pipeline);
                                    ((DocxDocumentRenderer)exportedFile).Document.SaveAs(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"index.{webfilesrequest.ToType.ToString()}"));
                                }
                            });

                        } else { resultMessage = DbOperations.DBTranslate("UnsupportedVariant", webfilesrequest.ServerLanguage); }
                    }

                    if (resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage)) { 
                        return new OkResult();
                    } else { return BadRequest(new { message = resultMessage }); }

                    //ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                    //var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                    //if (data != null) { return File(zipData, "application/x-zip-compressed", "Webpages.zip"); }
                    //else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
                } else { return BadRequest(new { message = DbOperations.DBTranslate("YouDoesNotHaveRights", webfilesrequest.ServerLanguage) }); }
            } catch (Exception ex) {
                return BadRequest(new { message = DataOperations.GetSystemErrMessage(ex) }); 
            }
        }


        //TODO Udelat Vlastni System/WebBrowser s Funkcemi Download MD,List Md, Html, Atd
        //BUDE TO tedy NetCore WebView2
        [HttpPost("/UltraSystemControl/DownloadMarkdownFromUrlToStatic")]
        public async Task<string> DownloadMarkdownFromUrlToStatic(string markdownUrl) {
            /*
            var basePath = ServerRuntimeData.WebRoot_path;
            string relativePath = HttpContext.Request.Path;
            if (relativePath == null) return NotFound();
            //relativePath = GetSystemFileSystemPath(relativePath).Substring(1);
            string? pageFile = Path.Combine(basePath, relativePath);
            //TODO CanCheck Database MarkDown
            if (!System.IO.File.Exists(pageFile)) return NotFound();
            var markdown = await System.IO.File.ReadAllTextAsync(pageFile);
            if (string.IsNullOrEmpty(markdown)) return NotFound();
            */

            string MdAsHtml = await Markdown.ParseFromUrlAsync(markdownUrl, true, false, false);
            return MdAsHtml;
        }


        /// <summary>
        /// Documentation https://ogp.me/
        /// Tool For Extend Loaded Html By Add Custom Metadata by Format OpenGraph
        /// TODO Implement Inserting Metadata or How To Use
        /// Its Description Content as Metadata for Facebokk etc
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("/OpenGraph/GetFromUrl")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetFromUrl([FromBody] WebUrlRequest request) {
            try {
                OpenGraph graph = await OpenGraph.ParseUrlAsync(request.Url);
                var response = File(Encoding.UTF8.GetBytes(graph.OriginalHtml), MimeTypes.GetMimeType("index.html"), "index.html");
                return response;
            } catch { }
            return null;
        }
    }
}