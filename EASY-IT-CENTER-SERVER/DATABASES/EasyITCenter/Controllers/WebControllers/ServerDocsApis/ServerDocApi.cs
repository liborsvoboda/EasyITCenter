﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing.Template;
using System.Data.Entity.Core.Metadata.Edm;
using System.Net.Http;
using System.Net.Http.Headers;

namespace EasyITCenter.Controllers {

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

                    List<DocSrvDocTemplateList> templates; List<DocSrvDocumentationList> data;

                    //DOCS PORTAL
                    FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Docs"), true); 
                    FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src"), true); 
                    FileOperations.CreatePath(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src"), true);

                   
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().DocSrvDocumentationLists.Where(a => a.DocumentationGroup.Active && a.Active)
                        .Include(a => a.DocumentationGroup).OrderBy(a => a.DocumentationGroup.Sequence)
                           .ThenBy(a => a.Sequence).ThenBy(a => a.Name).ToList();
                    }

                    string lastDocGroup = "", summary = "" + Environment.NewLine, docDescription = "";
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

                        //ADD TEMPLATES PART
                        lastDocGroup = ""; docDescription = "";
                        using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                            templates = new EasyITCenterContext().DocSrvDocTemplateLists.Where(a => a.Group.Active)
                                .Include(a => a.Group).OrderBy(a => a.Group.Sequence)
                                .ThenBy(a => a.Sequence).ThenBy(a => a.Name).ToList();
                        }

                        templates.ForEach(documentation => {
                            if (lastDocGroup != documentation.Group.Name) {
                                if (lastDocGroup != "") { summary += "    ```  " + Environment.NewLine + Environment.NewLine + "---" + Environment.NewLine; }
                                summary += "# " + documentation.Group.Name + "  " + Environment.NewLine + Environment.NewLine + "    ```markdown  " + Environment.NewLine; lastDocGroup = documentation.Group.Name;
                            }

                            summary += "- [" + documentation.Name + "](" + DataOperations.RemoveDiacritism(DataOperations.RemoveWhitespace(documentation.Name)) + ".md" + ")   " + Environment.NewLine;

                            docDescription = "# Úvod   " + documentation.Group.Name + "  " + Environment.NewLine + Environment.NewLine + documentation.Group.Description + Environment.NewLine + documentation.Description + Environment.NewLine + Environment.NewLine;
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, "Docs", DataOperations.RemoveDiacritism(DataOperations.RemoveWhitespace(documentation.Name)) + ".md"), docDescription + documentation.Template, Encoding.UTF8);
                            System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "server-doc", "md-book", "src", DataOperations.RemoveDiacritism(DataOperations.RemoveWhitespace(documentation.Name)) + ".md"), docDescription + documentation.Template, Encoding.UTF8);
                            System.IO.File.WriteAllText(Path.Combine(_hostingEnvironment.WebRootPath, "server-doc", "md-book", "src", DataOperations.RemoveDiacritism(DataOperations.RemoveWhitespace(documentation.Name) + ".md")), docDescription + documentation.Template, Encoding.UTF8);
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
                }
                return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}