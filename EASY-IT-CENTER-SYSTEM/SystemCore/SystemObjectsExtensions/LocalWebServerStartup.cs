using System.IO;
using System;
using Owin;
using Microsoft.Owin;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Extensions;
using EasyITSystemCenter.GlobalClasses;
using System.Linq;
using Microsoft.Owin.StaticFiles.ContentTypes;

namespace EasyITSystemCenter {

    /// <summary>
    /// Local WebServwer Startup
    /// </summary>
    public class Startup {

        public void Configuration(IAppBuilder appBuilder) {

            var staticFilesProvider = new FileExtensionContentTypeProvider();
            staticFilesProvider.Mappings[".javascript"] = "application/javascript"; staticFilesProvider.Mappings[".style"] = "text/css";
            staticFilesProvider.Mappings[".data"] = "text/json"; staticFilesProvider.Mappings[".code"] = "text/cs";
            staticFilesProvider.Mappings[".design"] = "text/xaml"; staticFilesProvider.Mappings[".archive"] = "application/zip";
            staticFilesProvider.Mappings[".docu"] = "text/markdown"; 

            appBuilder.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true, ContentTypeProvider = staticFilesProvider, DefaultContentType = "text/html" }).UseFileServer(
            new FileServerOptions {
                EnableDefaultFiles = true,
                FileSystem = new PhysicalFileSystem(App.appRuntimeData.webDataPath),
                EnableDirectoryBrowsing = bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerEnableBrowse").Value),
                RequestPath = new PathString(string.Empty),
                DefaultFilesOptions = { DefaultFileNames = { "index.html","index.md", "help.html", "help.md", "example.html", "example.md" } }
            });
            appBuilder.UseStageMarker(PipelineStage.MapHandler);

        }
    }
}
