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
    [Route("ServerApi")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerApiGeneratorService : ControllerBase {

        //WebFile Generator
        //Convert MD->Html,Convert Html->Md,
        //Convert List<Any FileType>->List<Any FileType>,
        //Convert MD->Docx,List<Md>->List<Docx>
        //Generate List<Md>->Index.Md,Generate List<Md>->Index.Html,Generate List<Html>->Index.Html
        //TODO Ošetřit aby Mohli menit soubory jen ve svem ulozisti
        //TODO Udelat Aendu Dynamicke Registace Trid Pro Dynamicka API a tam se zadaji file Extensions
        //TODO VKladat Static DB Soubory 
        //TODO Vracet jako Zip
        [HttpPost("/ServerApi/GeneratorServices/GenerateDocsFile")]
        [Consumes("application/json")]
        public async Task<IActionResult> GenerateDocsFile([FromBody] MDGeneratorCreateIndexRequest webfilesrequest) {
            try {

                if (ServerApiServiceExtension.IsAdmin()) {
                    string resultMessage = DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage);

                    List<string> indexRootList = new List<string>();

                    //Corection Paths
                    webfilesrequest.WebRootFilePath = !webfilesrequest.WebRootFilePath.EndsWith("/") ? $"{webfilesrequest.WebRootFilePath}/" : webfilesrequest.WebRootFilePath;
                    webfilesrequest.WebRootFilePath = !string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName) && (!webfilesrequest.WebRootFilePath.EndsWith($"{webfilesrequest.IndexWebRootSubFolderPathName}/")) ? $"{webfilesrequest.WebRootFilePath}{webfilesrequest.IndexWebRootSubFolderPathName}/" : webfilesrequest.WebRootFilePath;

                    if (string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName)) { indexRootList.Add("");
                    } else {
                        var folderList = System.IO.Directory.GetDirectories(ServerRuntimeData.WebRoot_path + webfilesrequest.WebRootFilePath);
                        folderList.ToList().ForEach(folder => indexRootList.Add(System.IO.Path.GetFullPath(folder).Split("\\").Last() + "\\"));
                    }

                  
                    indexRootList.ForEach(rootIndex => {
                        //Modify WebRoot For Each Index
                        webfilesrequest.WebRootFilePath = $"{webfilesrequest.WebRootFilePath.Split(webfilesrequest.IndexWebRootSubFolderPathName)[0]}{webfilesrequest.IndexWebRootSubFolderPathName}{(!string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName)?"\\":"")}" + rootIndex;
                        List<string> filelist = FileOperations.GetPathFiles(ServerRuntimeData.WebRoot_path + webfilesrequest.WebRootFilePath, 
                            $"*." + webfilesrequest.FromType.ToString().ToLower(), 
                            webfilesrequest.ScanRootOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories
                        );

                        if (filelist.Count == 0) {
                            resultMessage += $"For root Index {rootIndex} NoFiles Found{Environment.NewLine}";
                        } else {

                            //Generate IndexFile For Any File Type
                            if (webfilesrequest.IndexOnly) {
                                string generatedFile = webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() ? Environment.NewLine + $"# Index {webfilesrequest.WebRootFilePath}" + Environment.NewLine : $"<H1>Index {webfilesrequest.WebRootFilePath}</H1><span>" + Environment.NewLine;
                                if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(webfilesrequest.WebRootFilePath + $"index.{webfilesrequest.ToType.ToString()}")) {
                                    resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Failed on Exist File: index.{webfilesrequest.ToType.ToString()}" : resultMessage + $"Failed on Exist File index.{webfilesrequest.ToType.ToString()}";
                                }
                                else {
                                    filelist.AsEnumerable().Where(a => (webfilesrequest.FromSuffixOnly && a.Contains(webfilesrequest.genHtmlIndexFileSuffix)) || !webfilesrequest.FromSuffixOnly).ToList().ForEach(
                                        file => {
                                            generatedFile += webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() ? $"[{Path.GetFileNameWithoutExtension(file)}]({webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]})" + Environment.NewLine :
                                        webfilesrequest.IndexInFrameList ?
                                        $"<span style='margin:10px'><iframe src='{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}' width='600px' height='400px' onclick=window.open('{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}','_blank') >{Path.GetDirectoryName(file)?.Split(Path.DirectorySeparatorChar).Last()}</iframe></span>" + Environment.NewLine
                                        : $"<p><a  style='font-size:36px;' href='{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}' target='blank'>{Path.GetDirectoryName(file)?.Split(Path.DirectorySeparatorChar).Last()}</a></p>" + Environment.NewLine;
                                        });
                                    if (webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower()) { generatedFile = DataOperations.MarkDownLineEndSpacesResolve(generatedFile); }
                                    FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"index{webfilesrequest.genHtmlIndexFileSuffix}.{webfilesrequest.ToType.ToString()}"), generatedFile);
                                }

                            }
                            else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() && webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Html.ToString().ToLower()) {
                                //Generate All Html Files 
                                filelist.ForEach(file => {
                                    if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                        resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                    }
                                    else {
                                        try { FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"{Path.GetFileNameWithoutExtension(file)}.{webfilesrequest.ToType.ToString()}"), Markdown.ParseHtmlString(System.IO.File.ReadAllText(file), false, false, false).Value?.ToString()); } catch { }
                                    }
                                });

                            }
                            else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType.ToLower() == SupportGenFileTypes.Html.ToString().ToLower() && webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower()) {
                                //Generate All Md Files 
                                filelist.ForEach(file => {
                                    if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                        resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                    }
                                    else {
                                        FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"{Path.GetFileNameWithoutExtension(file)}.{webfilesrequest.ToType.ToString()}"), new ReverseMarkdown.Converter().Convert(System.IO.File.ReadAllText(file)));
                                    }
                                });
                            }
                            else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() && webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Docx.ToString().ToLower()) {
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
                                        try {
                                            object exportedFile = Markdig.Markdown.Convert(System.IO.File.ReadAllText(file), renderer, pipeline);
                                            ((DocxDocumentRenderer)exportedFile).Document.SaveAs(Path.Combine(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"{Path.GetFileNameWithoutExtension(file)}.{webfilesrequest.ToType.ToString()}"));
                                        } catch { }
                                    }
                                });

                            }
                            else { resultMessage = DbOperations.DBTranslate("UnsupportedVariant", webfilesrequest.ServerLanguage); }
                        }
                    });

                    if (resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage)) {
                        return new ContentResult() { Content = resultMessage, StatusCode = StatusCodes.Status200OK };
                    } else { return new ContentResult() { Content = resultMessage, StatusCode = StatusCodes.Status200OK }; }

                    //ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                    //var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                    //if (data != null) { return File(zipData, "application/x-zip-compressed", "Webpages.zip"); }
                    //else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
                } else { return new ContentResult() {Content = DbOperations.DBTranslate("YouDoesNotHaveRights", webfilesrequest.ServerLanguage), StatusCode = StatusCodes.Status400BadRequest }; }
            } catch (Exception ex) {
                return new ContentResult() { Content = DataOperations.GetSystemErrMessage(ex), StatusCode = StatusCodes.Status400BadRequest }; 
            }
        }


        //TODO Udelat Vlastni System/WebBrowser s Funkcemi Download MD,List Md, Html, Atd
        [HttpPost("/ServerApi/GeneratorServices/DownloadMarkdownFromUrlToStatic")]
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
        [HttpPost("/ServerApi/GeneratorServices/ConfigureHtmlInfoHeader")]
        [Consumes("application/json")]
        public async Task<IActionResult> ConfigureHtmlInfoHeader([FromBody] WebUrlRequest request) {
            try {
                OpenGraph graph = await OpenGraph.ParseUrlAsync(request.Url);
                var response = File(Encoding.UTF8.GetBytes(graph.OriginalHtml), MimeTypes.GetMimeType("index.html"), "index.html");
                return response;
            } catch { }
            return null;
        }
    }
}