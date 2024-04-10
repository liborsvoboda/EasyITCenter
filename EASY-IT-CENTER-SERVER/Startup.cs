using DocumentFormat.OpenXml.Office2013.Excel;
using EasyITCenter.ServerCoreStructure;
using EasyITCenter.ServerCoreWebPages;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.FileProviders.Physical;
using NPOI.OpenXmlFormats.Dml;
using NuGet.Protocol.Plugins;
using ServerCorePages;
using ServiceStack.Host;
using System.Diagnostics.Metrics;
using System.Linq;
using Westwind.AspNetCore.LiveReload;
using Westwind.AspNetCore.Markdown;
using static Quartz.Logging.OperationName;
using SourceBrowserIndex = Microsoft.SourceBrowser.SourceIndexServer.Models.Index;


namespace EasyITCenter {

    /// <summary>
    /// Server Startup Definitions
    /// </summary>
    public class Startup {

        /// <summary>
        /// Server Core: Main Configure of Server Services, Technologies, Modules, etc..
        /// </summary>
        /// <param name="services"></param>
        /// <returns>void.</returns>
        public void ConfigureServices(IServiceCollection services) {

            #region Server Data Segment
            //DB first for Configuration
            ServerConfigurationServices.ConfigureDatabaseContext(ref services);

            ServerConfigurationServices.ConfigureScoped(ref services);
            ServerConfigurationServices.ConfigureThirdPartyApi(ref services);
            ServerConfigurationServices.ConfigureLogging(ref services);

            #endregion Server Data Segment

            #region Server WebServer

            ServerConfigurationServices.ConfigureServerWebPages(ref services);
            ServerConfigurationServices.ConfigureFTPServer(ref services);
            if (ServerConfigSettings.WebBrowserContentEnabled) { services.AddDirectoryBrowser(); }

            services.AddSession(options => {
                options.Cookie.Name = "SessionCookie";
                options.Cookie.SameSite = SameSiteMode.Lax;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                options.Cookie.IsEssential = true;
                options.IdleTimeout = TimeSpan.FromMinutes(30);
            });

            #endregion Server WebServer

            #region Server Core & Security Web

            ServerConfigurationServices.ConfigureCookie(ref services);
            ServerConfigurationServices.ConfigureControllers(ref services);
            ServerConfigurationServices.ConfigureAuthentication(ref services);
            ServerConfigurationServices.ConfigureLetsEncrypt(ref services);
            services.AddHttpContextAccessor();
            services.AddResponseCompression();
            services.AddResponseCaching();
            services.AddMemoryCache();
            services.AddEndpointsApiExplorer();
            ServerConfigurationServices.ConfigureWebSocketLoggerMonitor(ref services);
            ServerConfigurationServices.ConfigureRSSfeed(ref services);

            #endregion Server Core & Security Web
   
            #region Server Modules

            ServerModules.ConfigureScheduler(ref services);
            ServerModules.ConfigureSwagger(ref services);
            ServerModules.ConfigureHealthCheck(ref services);
            ServerModules.ConfigureDocumentation(ref services);
            ServerModules.ConfigureLiveDataMonitor(ref services);
            ServerModules.ConfigureDBEntitySchema(ref services);
            ServerModules.ConfigureGitServer(ref services);
            ServerModules.ConfigureMarkdownAsHtmlFiles(ref services);

            var subfolder = Path.Combine(ServerRuntimeData.WebRoot_path, "EIC&ESBdocs", "SourceBrowser", "index");
            if (File.Exists(subfolder)) { services.AddSingleton(new SourceBrowserIndex(subfolder));}

            
            #endregion Server Modules

            ServerConfigurationServices.ConfigureTransient(ref services);
            ServerConfigurationServices.ConfigureSingletons(ref services);
            ServerConfigurationServices.ConfigureCentralServicesProviders(ref services);

            //https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/signalr/dotnet-client/sample/SignalRChatClient/MainWindow.xaml.cs
            //primi chat s aplikaci
            //services.AddSignalR();
            //services.AddServerSideBlazor();

        }


        /// <summary>
        /// Server Core: Main Enabling of Server Services, Technologies, Modules, etc..
        /// </summary>
        /// <param name="app">           </param>
        /// <param name="serverLifetime"></param>
        public void Configure(IApplicationBuilder app, IHostApplicationLifetime serverLifetime) {
            serverLifetime.ApplicationStarted.Register(ServerOnStarted);
            serverLifetime.ApplicationStopping.Register(ServerOnStopping);
            serverLifetime.ApplicationStopped.Register(ServerOnStopped);

            ServerEnablingServices.EnableLogging(ref app);
            ServerModulesEnabling.EnableSwagger(ref app);
            ServerModulesEnabling.EnableLiveDataMonitor(ref app);
            ServerModulesEnabling.EnableDBEntitySchema(ref app);

            if (ServerConfigSettings.ConfigServerStartupOnHttps) {
                app.UseForwardedHeaders(new ForwardedHeadersOptions { ForwardedHeaders = ForwardedHeaders.All });
                app.UseCertificateForwarding();
            }

            //Aplied new Working Style For Files Makdow, Html, Editor, Images,
            //etc Its Need Nes Style For Exclude Folders from this Control
            //Root Server Page To Default Path, Other Is Taken From Static Files
            app.Use(async (HttpContext context, Func<Task> next) => { await next(); string requestPath = context.Request.Path.ToString().ToLower();bool redirected =false;

                //Excluded Urls For Server Browsing From Page Settings TODO move to Local Dials + New Agenda
                if (requestPath.StartsWith("/downloads") || requestPath.StartsWith("/server-web") || requestPath.StartsWith("/server-doc") || requestPath.StartsWith("/metro")) { return; }


                //Redirect on Start Before Docs Module
                //if (context.Request.Path.ToString() == "/" && ServerConfigSettings.RedirectOnPageNotFound) { context.Response.Redirect(ServerConfigSettings.RedirectPath); context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //else { await next(); }


                //Verify Request For Detect Layout, Redirection, Module, Correct File Path, WebMenu Selection
                RouteLayout routeLayout = RouteLayout.EmptyLayout; RoutingResult commandType = RoutingResult.None; string fileValidUrl = context.Request.Path;
                context = CoreOperations.ChechUrlRequestValidOrAuthorized(context);
                try { routeLayout = ((RouteLayout)context.Items.FirstOrDefault(a => a.Key.ToString() == "RouteLayout").Value); } catch { }
                try { commandType = ((RoutingResult)context.Items.FirstOrDefault(a => a.Key.ToString() == "ComandType").Value); } catch { }
                try { fileValidUrl = ((string)context.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }


                //Start DocPortal by Link Without index.md
                if (routeLayout == RouteLayout.DocPortalLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) 
                { redirected = true; context.Request.Path = "/DocPortal"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }

                //Show MarkDownFile in Layout by missing .md extension
                else if (routeLayout == RouteLayout.MarkDownFileLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) 
                { redirected = true; context.Request.Path = "/MarkDownFile"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }

                //Show Portal in Layout by missing .md extension
                else if (routeLayout == RouteLayout.PortalLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) 
                { redirected = true; context.Request.Path = "/Portal"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }

                //Others Type Detected
                else if (context.Request.Path.ToString().ToLower() != fileValidUrl)
                { redirected = true; context.Request.Path = fileValidUrl; context.Response.StatusCode = StatusCodes.Status200OK; }


                if (commandType == RoutingResult.Return) { return; }
                else if (!redirected && commandType == RoutingResult.Next && context.Request.Path.ToString().ToLower() != fileValidUrl) {
                    context.Request.Path = fileValidUrl;
                    context.Response.StatusCode = StatusCodes.Status200OK;
                    await next(); 
                    return;
                }
                else if (commandType == RoutingResult.Next && context.Request.Path.ToString().ToLower() == fileValidUrl) { return; }
            });


            //app.UseExceptionHandler("/Error");
            app.UseRouting();

            app.UseDefaultFiles(new DefaultFilesOptions() { DefaultFileNames = new List<string> { "index.html" } });
            ServerModulesEnabling.EnableMarkdownAsHtmlFiles(ref app);

            app.UseHsts();

            //TODO define over Administration
            var staticFilesProvider = new FileExtensionContentTypeProvider();
            staticFilesProvider.Mappings[".jscript"] = "application/javascript"; staticFilesProvider.Mappings[".style"] = "text/css";
            staticFilesProvider.Mappings[".data"] = "text/json"; staticFilesProvider.Mappings[".code"] = "text/cs";
            staticFilesProvider.Mappings[".design"] = "text/xaml"; staticFilesProvider.Mappings[".archive"] = "application/zip";
            staticFilesProvider.Mappings[".docu"] = "text/markdown";

            if (ServerConfigSettings.ConfigServerStartupOnHttps) { app.UseHttpsRedirection(); }
            app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true, ContentTypeProvider = staticFilesProvider, HttpsCompression = HttpsCompressionMode.Compress, DefaultContentType = "text/html" });


            List<SolutionWebsiteList> websites;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                websites = new EasyITCenterContext().SolutionWebsiteLists.Where(a => a.Active).ToList();
            }
            websites.ForEach(website => {
                app.UseStaticFiles(new StaticFileOptions {
                    ServeUnknownFileTypes = true,
                    FileProvider = new WebsitesStaticFileDbProvider(app.ApplicationServices),
                    RequestPath = "/" + website.WebsiteName + ".",
                    HttpsCompression = HttpsCompressionMode.Compress,
                    DefaultContentType = "text/html",
                    ContentTypeProvider = staticFilesProvider
                });
            });

            //TODO staticbrowser
            app.UseStaticFiles(new StaticFileOptions {
                RequestPath = "/EIC&ESBdocs/SourceBrowser/index",
                FileProvider = new PhysicalFileProvider(Path.Combine(ServerRuntimeData.WebRoot_path, "EIC&ESBdocs", "SourceBrowser", "index"), ExclusionFilters.Sensitive & ~ExclusionFilters.DotPrefixed),});

            app.UseStaticFiles();

            app.UseCookiePolicy();
            app.UseSession();
            app.UseResponseCaching();
            app.UseResponseCompression();
            app.UseAuthentication();
            app.UseAuthorization();

            ServerEnablingServices.EnableCors(ref app);
            ServerEnablingServices.EnableWebSocket(ref app);
            ServerEnablingServices.EnableEndpoints(ref app);
            ServerModulesEnabling.EnableDocumentation(ref app);
            ServerEnablingServices.EnableRssFeed(ref app);

            if (ServerConfigSettings.WebBrowserContentEnabled) {
                //These commented setting enable full browsing
                //app.UseDirectoryBrowser(); app.UseFileServer(enableDirectoryBrowsing: true);

                List<ServerBrowsablePathList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().ServerBrowsablePathLists.Where(a => a.Active).ToList();
                }

                data.ForEach(path => {
                    try {
                        app.UseFileServer(new FileServerOptions {
                            FileProvider = new PhysicalFileProvider(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, path.WebRootPath)),
                            RequestPath = "/" + (path.AliasPath != null && path.AliasPath.Length > 0 ? path.AliasPath : path.WebRootPath),
                            EnableDirectoryBrowsing = true,
                        }); ;
                    } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
                });
            }

            if (ServerConfigSettings.WebMvcPagesEngineEnabled) { app.UseMvcWithDefaultRoute(); }

            try {
                app.UsePathBase(ServerConfigSettings.RedirectPath);
            } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
            
            if (ServerConfigSettings.BrowserLinkEnabled) { app.UseBrowserLink(); }
            if (ServerConfigSettings.ModuleWebDataManagerEnabled) { app.UseEasyData(); }
        }

        /// <summary>
        /// Server Core Enabling Disabling Hosted Services
        /// </summary>
        private void ServerOnStarted() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Running.ToString();
        private void ServerOnStopping() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Stopping.ToString();
        private void ServerOnStopped() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Stopped.ToString();
    }
}