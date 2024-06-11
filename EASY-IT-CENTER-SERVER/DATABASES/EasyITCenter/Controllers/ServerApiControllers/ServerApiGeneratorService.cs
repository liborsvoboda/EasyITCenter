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
using DocumentFormat.OpenXml.Drawing.Diagrams;
using Prometheus;
using System.Data.Entity.Core.Metadata.Edm;


namespace EasyITCenter.ServerCoreDBSettings {

    #region Generators Classes

    /// <summary>
    /// WebFile Generators Request Dataset
    /// </summary>
    public class MDGeneratorCreateIndexRequest {
        public string WebRootFilePath { get; set; }

        /// <summary>
        /// //TODO Generate Full Content to One Page For  Direct Search
        /// Is Subfolder for WebrootFilePath AS multiple RootIndex
        /// </summary>
        public string IndexWebRootSubFolderPathName { get; set; } = null;
        public string FromType { get; set; }
        public string ToType { get; set; }
        public bool ScanRootOnly { get; set; }
        public bool IndexOnly { get; set; }
        public bool RewriteAllowed { get; set; }
        public string ServerLanguage { get; set; } = "cz";
        public bool IndexInFrameList { get; set; } = false;
        public string genHtmlIndexFileSuffix { get; set; }
        public bool FromSuffixOnly { get; set; } = false;
    }

    /// <summary>
    /// Summary MDbook Generator Request
    /// Generate Central Index MD Book on Existing folder structure
    /// Generate Fulltext MDBook Library and cleand Processed Structure
    /// Link All File Types, Images and Video Are Shown
    /// </summary>
    public class MDDocBookGeneratorRequest {
        public string WebRootFilePath { get; set; }
        public bool CentralIndexOnly { get; set; }
        public bool MdBookLibrary { get; set; }
        public bool LinkAllFileTypes { get; set; }
        public bool ProcessRootPathOnly { get; set; }
        public bool OveriteExisting { get; set; }
        public bool CleanProcessed { get; set; }
    }


    #endregion

    /// <summary>
    ///  WebPages Knihovna API pro Nastroje 
    /// </summary>
    [Authorize]
    [ApiController]
    [Route("ServerApi")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerApiGeneratorService : ControllerBase {


        /// <summary>
        /// Summary MDbook Generator Request
        /// Generate Central Index MD Book on Existing folder structure
        /// Generate Fulltext MDBook Library and cleand Processed Structure
        /// </summary>
        /// <param name="webfilesrequest"></param>
        /// <returns></returns>
        [HttpPost("/ServerApi/GeneratorServices/MDDocBookGeneratorRequest")]
        [Consumes("application/json")]
        public async Task<IActionResult> MDDocBookGeneratorRequest([FromBody] MDDocBookGeneratorRequest webfilesrequest) {
            try {
                string resultMessage = DbOperations.DBTranslate("ProcessSucessfullyCompleted", ServerConfigSettings.ServiceServerLanguage);

                List<string> indexRootList = new List<string>(); int docCounter = 0; bool mdBookPrepared = false;

                //Corection Paths
                webfilesrequest.WebRootFilePath = !webfilesrequest.WebRootFilePath.EndsWith("/") ? $"{webfilesrequest.WebRootFilePath}/" : webfilesrequest.WebRootFilePath;
                var folderList = System.IO.Directory.GetDirectories(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath));
                folderList.ToList().ForEach(folder => indexRootList.Add(System.IO.Path.GetFullPath(folder).Split("\\").Last() + "\\"));

                string generatedFile = Environment.NewLine + (webfilesrequest.CentralIndexOnly ? $"# MD Docs Generated Index    " : $"# MD Docs Generated Library    ") + Environment.NewLine + Environment.NewLine + "[[toc]]" + Environment.NewLine + Environment.NewLine;
                indexRootList.ForEach(rootfolder => {

                    generatedFile += webfilesrequest.CentralIndexOnly ? $"### {rootfolder}    " + Environment.NewLine + Environment.NewLine
                    : $"    ```   {Environment.NewLine}{Environment.NewLine}  ---    {Environment.NewLine}";

                    List<string> filelist = FileOperations.GetPathFiles(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + rootfolder, $"*.md", webfilesrequest.ProcessRootPathOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories);

                    //PREPARE MD BOOK FOLDER FOR FILES
                    if (!mdBookPrepared && webfilesrequest.MdBookLibrary) { 
                        mdBookPrepared = true;
                    FileOperations.DeleteDirectory(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + "md-book");
                FileOperations.CopyDirectory(Path.Combine(ServerRuntimeData.DistributedPackagesPath, "md-book"), ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + "md-book"); }

                    filelist.Where(a => !a.Contains(Path.Combine(Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + "md-book"))).ToList().ForEach(file => {
                        generatedFile += $"- [{Path.GetFileNameWithoutExtension(file)}](.{(webfilesrequest.CentralIndexOnly ? file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1] : "/" + Path.GetFileName(file))})   " + Environment.NewLine + Environment.NewLine;
                    });

                    //Generate File With Other File Types 
                    if (webfilesrequest.LinkAllFileTypes) {
                        filelist = FileOperations.GetPathFiles(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + rootfolder, $"*.*", SearchOption.AllDirectories);
                        docCounter += 1; string newdoc = $"# List of Founded Other Files {rootfolder}" + Environment.NewLine + Environment.NewLine;

                        filelist.Where(a => !Path.GetExtension(a.ToLower()).Contains(".md")).ToList().ForEach(file => {
                            if (new string[] { "png", "jpg", "jpeg", "tiff", "bmp" }.Contains((Path.GetExtension(file).Substring(1).ToLower()))) {
                                newdoc += $"   ![{Path.GetFileNameWithoutExtension(file)}](.{(webfilesrequest.CentralIndexOnly ? file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1] : "/" + Path.GetFileName(file))})   " + Environment.NewLine + Environment.NewLine;
                            } else if (new string[] { "avi", "mpg", "mpeg", "mp3", "mp4" }.Contains((Path.GetExtension(file).Substring(1).ToLower()))) {
                                newdoc += $"   @[{Path.GetFileNameWithoutExtension(file)}](.{(webfilesrequest.CentralIndexOnly ? file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1] : "/" + Path.GetFileName(file))})   " + Environment.NewLine + Environment.NewLine;
                            } else {
                                newdoc += $"   [{Path.GetFileNameWithoutExtension(file)}](.{(webfilesrequest.CentralIndexOnly ? file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1] : "/" + Path.GetFileName(file))})   " + Environment.NewLine + Environment.NewLine;
                            }
                        });
                        generatedFile += $"- [{docCounter}](./{docCounter}.md)   " + Environment.NewLine + Environment.NewLine;
                        FileOperations.WriteToFile(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"{(webfilesrequest.MdBookLibrary ? "md-book/src/" : "")}{docCounter}.md", newdoc);
                    }
                });
                //Save Index File
                FileOperations.WriteToFile((ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + $"{(webfilesrequest.MdBookLibrary ? "md-book/src/summary.md" : "index.md")}").Replace("/","\\"), generatedFile);

                //COPY MD-BROWSER TOOL AFTER FILE PROCESSES
                if (webfilesrequest.CentralIndexOnly) {
                    FileOperations.CopyFiles(Path.Combine(ServerRuntimeData.DistributedPackagesPath, "md-browser"), ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), webfilesrequest.OveriteExisting);
                }

                //SUMMARY MOVE FILES AND CLEAN STRUCTURE


                if (webfilesrequest.MdBookLibrary) {
                    indexRootList.ForEach(rootfolder => {
                        List<string> filelist = FileOperations.GetPathFiles(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + rootfolder, "*.*", webfilesrequest.ProcessRootPathOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories);
                        filelist.ForEach(file => {
                            FileOperations.CopyFile(file, ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + "md-book/src/" + Path.GetFileName(file));
                        });
                        if (webfilesrequest.CleanProcessed && rootfolder.Length > 2) { FileOperations.DeleteDirectory(rootfolder); }
                    });

                    //TODO RUN BOOK PROCESS     
                    RunProcessRequest process = new RunProcessRequest() {
                        Command = (ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + "md-book/" + "generate-mdbook.bat").Replace("/", "\\"),
                        WorkingDirectory = (ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath) + "md-book/").Replace("/", "\\")
                    };
                    string result = await CoreOperations.RunSystemProcess(process);
                }




                //ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                //var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                //if (data != null) { return File(zipData, "application/x-zip-compressed", "Webpages.zip"); }
                //else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
                if (resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", ServerConfigSettings.ServiceServerLanguage)) {
                    return new ContentResult() { Content = resultMessage, StatusCode = StatusCodes.Status200OK };
                }
                else { return new ContentResult() { Content = resultMessage, StatusCode = StatusCodes.Status200OK }; }
            } catch (Exception ex) { return new ContentResult() { Content = DataOperations.GetSystemErrMessage(ex), StatusCode = StatusCodes.Status200OK }; }
        }


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
                        var folderList = System.IO.Directory.GetDirectories(Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath));
                        folderList.ToList().ForEach(folder => indexRootList.Add(System.IO.Path.GetFullPath(folder).Split("\\").Last() + "\\"));
                    }

                  
                    indexRootList.ForEach(rootIndex => {
                        //Modify WebRoot For Each Index
                        webfilesrequest.WebRootFilePath = $"{webfilesrequest.WebRootFilePath.Split(webfilesrequest.IndexWebRootSubFolderPathName)[0]}{webfilesrequest.IndexWebRootSubFolderPathName}{(!string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName)?"\\":"")}" + rootIndex;
                        List<string> filelist = FileOperations.GetPathFiles(Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath),
                            $"*.{webfilesrequest.FromType.ToString().ToLower()}", webfilesrequest.ScanRootOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories
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
                } else { return new ContentResult() {Content = DbOperations.DBTranslate("YouDoesNotHaveRights", webfilesrequest.ServerLanguage), StatusCode = StatusCodes.Status200OK }; }
            } catch (Exception ex) {
                return new ContentResult() { Content = DataOperations.GetSystemErrMessage(ex), StatusCode = StatusCodes.Status200OK }; 
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