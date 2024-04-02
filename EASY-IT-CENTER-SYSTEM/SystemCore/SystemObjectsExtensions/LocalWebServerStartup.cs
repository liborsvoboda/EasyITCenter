using System.IO;
using System;
using Owin;
using Microsoft.Owin;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Extensions;


namespace EasyITSystemCenter {

    /// <summary>
    /// Local WebServwer Startup
    /// </summary>
    public class Startup {

        public void Configuration(IAppBuilder appBuilder) {
            string dir = AppDomain.CurrentDomain.RelativeSearchPath; 
            appBuilder.UseStaticFiles("/AddOn/WebData").UseFileServer(
                new FileServerOptions {
                    EnableDefaultFiles = true,
                    FileSystem = new PhysicalFileSystem(App.appRuntimeData.webDataPath),
                    EnableDirectoryBrowsing = true, 
                    RequestPath = new PathString(string.Empty)
                });
            appBuilder.UseStageMarker(PipelineStage.MapHandler);

        }
    }
}
