﻿namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("/WebApi/WebDocumentation")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerDocApi : ControllerBase {

        /// <summary>
        /// For wwwroot folder Update with detect changes and modify static pages
        /// </summary>
        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;

        public ServerDocApi(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        /// <summary>
        /// Server Inteligent Documentation Generator Api StratupPath is WebFolder On Development is
        /// need WebRootPath WegbRootPath is Development Folder
        /// </summary>
        [HttpGet("/WebApi/WebDocumentation/GenerateMdBook")]
        public async Task<string> GenerateMdBook() {
            try {
                if (CommunicationController.IsAdmin()) {
                    List<DocSrvDocumentationList> data;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().DocSrvDocumentationLists.Where(a => a.DocumentationGroup.Active && a.Active)
                            .Include(a => a.DocumentationGroup)
                            .OrderBy(a => a.Sequence).ToList()
                            .OrderBy(a => a.DocumentationGroup.Sequence).ToList();
                    }

                    if (data.Any()) {
                        FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Docs"));
                        FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, "Docs"));

                        FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src"));
                        FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src"));

                        FileOperations.CreatePath(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src"));
                        FileOperations.ClearFolder(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src"));

                        string lastDocGroup = "", summary = "";
                        data.ForEach(documentation => {
                            if (lastDocGroup != documentation.DocumentationGroup.Name) {
                                if (lastDocGroup != "") { summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine; }
                                summary += "### " + documentation.DocumentationGroup.Name + "  " + Environment.NewLine + Environment.NewLine + "    ```markdown  " + Environment.NewLine; lastDocGroup = documentation.DocumentationGroup.Name;
                            }

                            summary += "[" + "Ver." + documentation.AutoVersion + ": " + documentation.Name + "](./" + DataOperations.RemoveWhitespace(documentation.Name) + ".md" + ")   " + Environment.NewLine;

                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, "Docs", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), documentation.MdContent, Encoding.UTF8);
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), documentation.MdContent, Encoding.UTF8);

                            //Dev wwwroot not bin/net6/wwwroot
                            System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src", DataOperations.RemoveWhitespace(documentation.Name) + ".md"), documentation.MdContent, Encoding.UTF8);
                        }); summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine;
                        System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src", "SUMMARY.md"), summary, Encoding.UTF8);
                        System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src", "SUMMARY.md"), summary, Encoding.UTF8);

                        ProcessClass process = new ProcessClass();
                        if (CoreOperations.GetOperatingSystemInfo.IsWindows()) {
                            process = new ProcessClass() { Command = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "generate-mdbook.bat"), Arguments = "", WorkingDirectory = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book") };
                            process = new ProcessClass() { Command = Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "generate-mdbook.bat"), Arguments = "", WorkingDirectory = Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book") };
                        }
                        else {
                            process = new ProcessClass() { Command = "/bin/bash", Arguments = string.Format(" \"{0}\"", Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "generate-mdbook.sh")) };
                            process = new ProcessClass() { Command = "/bin/bash", Arguments = string.Format(" \"{0}\"", Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "generate-mdbook.sh")) };
                        }

                        CoreOperations.RunSystemProcess(process);
                    }
                    return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}