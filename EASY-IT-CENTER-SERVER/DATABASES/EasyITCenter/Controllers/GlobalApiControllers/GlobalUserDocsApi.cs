using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing.Template;
using System.Data.Entity.Core.Metadata.Edm;
using System.Net.Http;
using System.Net.Http.Headers;

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("/GlobalUser/Documentation")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class GlobalUserDocsApi : ControllerBase {

        //TODO Prepare for User folder - copy  MD BOOK , change for user definition any folder


        /// <summary>
        /// For wwwroot folder Update with detect changes and modify static pages
        /// </summary>
        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;

        public GlobalUserDocsApi(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        /// <summary>
        /// Server Inteligent Documentation Generator Api StratupPath is WebFolder On Development is
        /// need WebRootPath WegbRootPath is Development Folder
        /// </summary>
        [HttpGet("/GlobalUser/Documentation/GenerateMdBook")]
        public async Task<string> GenerateMdBook() {
            try {
                if (CommunicationController.IsAdmin()) {

                    List<DocSrvDocTemplateList> templates; List<DocSrvDocumentationList> data;

                    //DOCS PORTAL
                    FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Docs")); FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, "Docs"));
                    FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src")); FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src"));
                    FileOperations.CreatePath(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src")); FileOperations.ClearFolder(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src"));

                   
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().DocSrvDocumentationLists.Where(a => a.DocumentationGroup.Active && a.Active)
                        .Include(a => a.DocumentationGroup).OrderBy(a => a.DocumentationGroup.Sequence)
                           .ThenBy(a => a.Sequence).ThenBy(a => a.Name).ToList();
                    }

                    string lastDocGroup = "", summary = "" + Environment.NewLine, docDescription = "", summaryTitle = "";

                    summaryTitle += "# Globální Řešení EIC & ESB   " + Environment.NewLine + Environment.NewLine;
                    summaryTitle += "- [Stručný Úvod EIC & ESB](../../../md-templates/EIC&ESBDocs/Solution-FastInfo)   " + Environment.NewLine;
                    summaryTitle += "- [Portál Dokumentace EIC & ESB](../../md-book/book)   " + Environment.NewLine;
                    summaryTitle += "- [DEV Portal Šablony, Kódy, Příklady](../../md-templates/book)   " + Environment.NewLine;
                    summaryTitle += "- [Průvodce kódem EIC & ESB](../../../md-templates/EIC&ESBCodeBrowser/index)   " + Environment.NewLine;
                    summaryTitle += "- [Server Info EIC](../../../EIC&ESBDocs/EIC-InfoWeb)   " + Environment.NewLine;
                    summaryTitle += "- [Systém Info ESB](../../../EIC&ESBDocs/ESB-InfoWeb)   " + Environment.NewLine;
                    summaryTitle += "- [Členění EIC](../../../EIC&ESBDocs/EIC-XmlWeb)   " + Environment.NewLine;
                    summaryTitle += "- [Členění ESB](../../../EIC&ESBDocs/ESB-XmlWeb)   " + Environment.NewLine;
                    summaryTitle += "- [Galerie EIC](../../../EIC&ESBDocs/EIC-Gallery)   " + Environment.NewLine;
                    summaryTitle += "- [Galerie ESB](../../../EIC&ESBDocs/ESB-Gallery)   " + Environment.NewLine;
                    summaryTitle += "- [Generická Nápověda](../../../EIC&ESBDocs/ITHelpIdeasDoc)   " + Environment.NewLine;
                    summaryTitle += "- [Web Portal z Editoru](../../../Portal)   " + Environment.NewLine;
                    summaryTitle += "- [Ke Stažení](../../../Downloads)   " + Environment.NewLine;
                    summaryTitle += Environment.NewLine + Environment.NewLine;
                    summary = summaryTitle;

                    if (data.Any()) {

                        data.ForEach(documentation => {
                            if (lastDocGroup != documentation.DocumentationGroup.Name) {
                                if (lastDocGroup != "") { summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine; }
                                summary += "# " + documentation.DocumentationGroup.Name + "  " + Environment.NewLine + Environment.NewLine + "    ```markdown  " + Environment.NewLine; lastDocGroup = documentation.DocumentationGroup.Name;
                            }

                            summary += "- [" + "Ver." + documentation.AutoVersion + ": " + documentation.Name + "](" + DataOperations.RemoveWhitespace(documentation.Name) + ".md" + ")   " + Environment.NewLine;

                            docDescription = "# Úvod   " + documentation.DocumentationGroup.Name + "  " + Environment.NewLine + Environment.NewLine + documentation.DocumentationGroup.Description + Environment.NewLine + documentation.Description + Environment.NewLine + Environment.NewLine;
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, "Docs", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), docDescription + documentation.MdContent, Encoding.UTF8);
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), docDescription + documentation.MdContent, Encoding.UTF8);

                            //Dev wwwroot not bin/net6/wwwroot
                            System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), docDescription + documentation.MdContent, Encoding.UTF8);
                        }); summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine;




                        System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src", "SUMMARY.md"), summary, Encoding.UTF8);
                        System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src", "SUMMARY.md"), summary, Encoding.UTF8);

                        RunProcessRequest process = new RunProcessRequest();
                        if (CoreOperations.GetOperatingSystemInfo.IsWindows()) {
                            process = new RunProcessRequest() { Command = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "generate-mdbook.bat"), Arguments = "", WorkingDirectory = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book") };
                            process = new RunProcessRequest() { Command = Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "generate-mdbook.bat"), Arguments = "", WorkingDirectory = Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book") };
                        }
                        else {
                            process = new RunProcessRequest() { Command = "/bin/bash", Arguments = string.Format(" \"{0}\"", Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "generate-mdbook.sh")) };
                            process = new RunProcessRequest() { Command = "/bin/bash", Arguments = string.Format(" \"{0}\"", Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "generate-mdbook.sh")) };
                        }

                        CoreOperations.RunSystemProcess(process);
                    }

                    //TEMPLATES PORTAL
                    FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Docs", "Templates"));
                    FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-templates", "src"));
                    FileOperations.CreatePath(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-templates", "src"));

                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        templates = new EasyITCenterContext().DocSrvDocTemplateLists.Where(a => a.Group.Active)
                            .Include(a => a.Group).OrderBy(a => a.Group.Sequence)
                            .ThenBy(a => a.Sequence).ThenBy(a => a.Name).ToList();
                        }

                    summary = summaryTitle; lastDocGroup = ""; docDescription = "";
                    if (data.Any()) {

                        data.ForEach(documentation => {
                            if (lastDocGroup != documentation.DocumentationGroup.Name) {
                                if (lastDocGroup != "") { summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine; }
                                summary += "# " + documentation.DocumentationGroup.Name + "  " + Environment.NewLine + Environment.NewLine + "    ```markdown  " + Environment.NewLine; lastDocGroup = documentation.DocumentationGroup.Name;
                            }

                            summary += "- [" + "Ver." + documentation.AutoVersion + ": " + documentation.Name + "](" + DataOperations.RemoveWhitespace(documentation.Name) + ".md" + ")   " + Environment.NewLine;

                            docDescription = "# Úvod   " + documentation.DocumentationGroup.Name + "  " + Environment.NewLine + Environment.NewLine + documentation.DocumentationGroup.Description + Environment.NewLine + documentation.Description + Environment.NewLine + Environment.NewLine;
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, "Docs", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), docDescription + documentation.MdContent, Encoding.UTF8);
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-templates", "src", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), docDescription + documentation.MdContent, Encoding.UTF8);

                            //Dev wwwroot not bin/net6/wwwroot
                            System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-templates", "src", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), docDescription + documentation.MdContent, Encoding.UTF8);
                        }); summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine;




                        System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-templates", "src", "SUMMARY.md"), summary, Encoding.UTF8);
                        System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-templates", "src", "SUMMARY.md"), summary, Encoding.UTF8);

                        RunProcessRequest process = new RunProcessRequest();
                        if (CoreOperations.GetOperatingSystemInfo.IsWindows()) {
                            process = new RunProcessRequest() { Command = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-templates", "generate-mdbook.bat"), Arguments = "", WorkingDirectory = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-templates") };
                            process = new RunProcessRequest() { Command = Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-templates", "generate-mdbook.bat"), Arguments = "", WorkingDirectory = Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-templates") };
                        }
                        else {
                            process = new RunProcessRequest() { Command = "/bin/bash", Arguments = string.Format(" \"{0}\"", Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-templates", "generate-mdbook.sh")) };
                            process = new RunProcessRequest() { Command = "/bin/bash", Arguments = string.Format(" \"{0}\"", Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-templates", "generate-mdbook.sh")) };
                        }

                        CoreOperations.RunSystemProcess(process);
                    }
                }
                    return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = string.Empty });
                
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}