using EasyITCenter.ServerCoreStructure;
using EasyITCenter.ServerCoreWebPages;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.FileProviders.Physical;
using ServerCorePages;
using System.Diagnostics.Metrics;
using System.Linq;
using EasyData.Services;
using EasyITCenter.ServerCoreConfiguration;
using SQLitePCL;
using Microsoft.AspNetCore.Http;


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
            ServerModules.ConfigureCodeBrowser(ref services);
            ServerModules.ConfigureReportDesigner(ref services);


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


            if (ServerConfigSettings.ConfigServerStartupOnHttps) {
                app.UseForwardedHeaders(new ForwardedHeadersOptions { ForwardedHeaders = ForwardedHeaders.All });
                app.UseCertificateForwarding();
            }



            //Aplied new Working Style For Files Makdow, Html, Editor, Images,
            app.Use(async (HttpContext context, Func<Task> next) => { await next();
                string requestPath = context.Request.Path.ToString().ToLower(); bool redirected = false;

                //Excluded Urls For Server Browsing From Page Settings, redirected Defined paths
                if (DbOperations.CheckDBServerApiRule(requestPath)?.Count() > 0
                || (!string.IsNullOrEmpty(System.IO.Path.GetExtension(context.Request.Path)))
                || context.Response.StatusCode == StatusCodes.Status301MovedPermanently || context.Response.StatusCode == StatusCodes.Status302Found
                ) {return;}

                //Include TOKEN
                context = CoreOperations.IncludeCookieTokenToRequest(context);

                //Check Server Api Security if ok aLLOWE go to NEXT PROCESSES
                ServerApiSecurityList? serverApiSecurity = DbOperations.GetServerApiSecurity(requestPath);
                if (serverApiSecurity != null) {
                    if (context.User.Identity != null && context.User.FindFirstValue(ClaimTypes.PrimarySid) == null
                    && ((context.Request.Method == "GET" && serverApiSecurity.ReadRestrictedAccess) || (context.Request.Method == "POST" && serverApiSecurity.WriteRestrictedAccess))) {
                        if (serverApiSecurity.RedirectPathOnError?.Length == 0) { redirected = true; context.Request.Path = "/ServerControls/401UnauthorizedPage"; await next(); }
                        else {
                            ServerModuleAndServiceList? loginmodule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "LoginModule").Value != null) { context.Items.Remove("LoginModule"); }
                            try { context.Items.Add(new KeyValuePair<object, object?>("LoginModule", loginmodule)); } catch { }
                            try { context.Response.Cookies.Append("RequestedModulePath", requestPath); } catch { }
                            redirected = true; context.Request.Path = "/ServerModules"; await next();
                        }
                    }
                    else if (context.User.Identity != null && context.User.FindFirstValue(ClaimTypes.PrimarySid) != null
                        && ((context.Request.Method == "GET" && serverApiSecurity.ReadRestrictedAccess && serverApiSecurity.ReadAllowedRoles != null && !serverApiSecurity.ReadAllowedRoles.ToLower().Split(",").Contains(context.User.FindFirstValue(ClaimTypes.Role).ToLower()))
                        || (context.Request.Method != "GET" && serverApiSecurity.WriteRestrictedAccess && serverApiSecurity.WriteAllowedRoles != null && !serverApiSecurity.WriteAllowedRoles.ToLower().Split(",").Contains(context.User.FindFirstValue(ClaimTypes.Role).ToLower()))
                        )) {
                        if (serverApiSecurity.RedirectPathOnError?.Length == 0) { redirected = true; context.Request.Path = "/ServerControls/401UnauthorizedPage"; await next(); }
                        else {
                            ServerModuleAndServiceList? loginmodule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "LoginModule").Value != null) { context.Items.Remove("LoginModule"); }
                            try { context.Items.Add(new KeyValuePair<object, object?>("LoginModule", loginmodule)); } catch { }
                            try { context.Response.Cookies.Append("RequestedModulePath", requestPath); } catch { }
                            redirected = true; context.Request.Path = "/ServerModules"; await next();

                        } 
                    }
                    
                }
                else if (context.Response.StatusCode == StatusCodes.Status200OK) { return; }
                // ALLOVE All 200 AFTER SECURITY CHECK - DYNAMIC MODULES AND ALL OTHER MUST BE 404



                //Verify Request For Detect Layout, Redirection, Module, Correct File Path, WebMenu Selection
                RouteLayoutTypes routeLayout = RouteLayoutTypes.EmptyLayout; RoutingActionTypes commandType = RoutingActionTypes.None; string fileValidUrl = context.Request.Path;
                context = CoreOperations.ChechUrlRequestValidOrAuthorized(context);
                try { routeLayout = ((RouteLayoutTypes)context.Items.FirstOrDefault(a => a.Key.ToString() == "RouteLayoutTypes").Value); } catch { }
                try { commandType = ((RoutingActionTypes)context.Items.FirstOrDefault(a => a.Key.ToString() == "ComandType").Value); } catch { }
                try { fileValidUrl = ((string)context.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }



                //Start DocPortal by Link Without index.md
                if (!redirected && routeLayout == RouteLayoutTypes.DocPortalLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) { redirected = true; context.Request.Path = "/DocPortal"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //Show MarkDownFile in Layout by missing .md extension
                else if (!redirected && routeLayout == RouteLayoutTypes.EditorHtmlFileLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) { redirected = true; context.Request.Path = "/ServerCoreTools/EditorHtmlFile"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //Show MarkDownFile in Layout by missing .md extension
                else if (!redirected && routeLayout == RouteLayoutTypes.ViewerMarkDownFileLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) { redirected = true; context.Request.Path = "/ServerCoreTools/ViewerMarkDownFile"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //Show Report File in Layout by .frx extension
                else if (!redirected && routeLayout == RouteLayoutTypes.ViewerReportFileLayout) { redirected = true; context.Request.Path = "/ServerCoreTools/ViewerReportFile"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //Show Portal in Layout
                else if (!redirected && routeLayout == RouteLayoutTypes.PortalLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) { redirected = true; context.Request.Path = "/Portal"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //Show ServerModules
                else if (!redirected && routeLayout == RouteLayoutTypes.ServerModulesLayout && context.Request.Path.ToString().ToLower() != fileValidUrl) { redirected = true; context.Request.Path = "/ServerModules"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                //Others Type Detected
                else if (!redirected && context.Request.Path.ToString().ToLower() != fileValidUrl) { redirected = true; context.Request.Path = fileValidUrl; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }


                if (!redirected && commandType == RoutingActionTypes.Return) { return; }
                else if (!redirected && commandType == RoutingActionTypes.Next) { context.Request.Path = fileValidUrl; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                else if (!redirected && commandType == RoutingActionTypes.Next && context.Request.Path.ToString().ToLower() == fileValidUrl) { return; }

            });

            //https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-7.0
            //HOSTOVANI


            // HERE HAS CONTENT Response Injection + MY INJECTION  CONTENT
            //app.Run(async (context) => {
            //    if (context.Response.StatusCode == StatusCodes.Status401Unauthorized) { context.Response.Redirect("/ServerControls/401UnauthorizedPage"); }
            //    if (context.Response.StatusCode == StatusCodes.Status404NotFound) { context.Response.Redirect("/ServerControls/404NonExistPage"); }
            //});


            //app.UseExceptionHandler("/Error");
            app.UseRouting();

            app.UseDefaultFiles(new DefaultFilesOptions() { DefaultFileNames = new List<string> { "index.html" } });
            ServerModulesEnabling.EnableMarkdownAsHtmlFiles(ref app);

            app.UseHsts();

            //TODO define over Administration
            var staticFilesProvider = new FileExtensionContentTypeProvider();
            staticFilesProvider.Mappings[".javascript"] = "application/javascript"; staticFilesProvider.Mappings[".style"] = "text/css";
            staticFilesProvider.Mappings[".data"] = "text/json"; staticFilesProvider.Mappings[".code"] = "text/cs";
            staticFilesProvider.Mappings[".design"] = "text/xaml"; staticFilesProvider.Mappings[".archive"] = "application/zip";
            staticFilesProvider.Mappings[".docu"] = "text/markdown";

            if (ServerConfigSettings.ConfigServerStartupOnHttps) { app.UseHttpsRedirection(); }
            //app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true, ContentTypeProvider = staticFilesProvider, HttpsCompression = HttpsCompressionMode.Compress, DefaultContentType = "text/html" });

            //TODO Websites and subdomains
            List<SolutionWebsiteList> websites;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                websites = new EasyITCenterContext().SolutionWebsiteLists.Where(a => a.Active).ToList();
            }
            websites.ForEach(website => {
                app.UseStaticFiles(new StaticFileOptions {
                    ServeUnknownFileTypes = true,
                    FileProvider = new StaticFilesFileProviderService(app.ApplicationServices),
                    RequestPath = "/server-users/" + website.WebsiteName + ".",
                    HttpsCompression = HttpsCompressionMode.Compress,
                    DefaultContentType = "text/html",
                    ContentTypeProvider = staticFilesProvider
                });
            });

            //CodeBrowser
            if (ServerConfigSettings.EnableCodeBrowser) {
                app.UseStaticFiles(new StaticFileOptions {
                    RequestPath = "/EIC&ESBCodeBrowser", FileProvider = new PhysicalFileProvider(Path.Combine(ServerRuntimeData.WebRoot_path, "EIC&ESBCodeBrowser"), ExclusionFilters.Sensitive & ~ExclusionFilters.DotPrefixed)
                });
            }

            app.UseStaticFiles();

            app.UseCookiePolicy();
            app.UseSession();
            app.UseResponseCaching();
            app.UseResponseCompression();
            app.UseAuthentication();
            app.UseAuthorization();
            ServerModulesEnabling.EnableSwagger(ref app);
            ServerModulesEnabling.EnableLiveDataMonitor(ref app);
            ServerModulesEnabling.EnableDBEntitySchema(ref app);
            ServerModulesEnabling.EnableReportDesigner(ref app);
            ServerEnablingServices.EnableCors(ref app);
            ServerEnablingServices.EnableWebSocket(ref app);
            ServerEnablingServices.EnableEndpoints(ref app);
            ServerModulesEnabling.EnableDocumentation(ref app);
            ServerEnablingServices.EnableRssFeed(ref app);

            if (ServerConfigSettings.WebBrowserContentEnabled) { //Browsable Path Definitions
                List<ServerStaticOrMvcDefPathList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) 
                    { data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Where(a => a.IsBrowsable && a.Active).ToList(); }
                data.ForEach(path => {
                    try {
                        app.UseFileServer(new FileServerOptions { 
                            FileProvider = new PhysicalFileProvider(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder) + FileOperations.ConvertSystemFilePathFromUrl(path.WebRootSubPath)),
                            RequestPath = path.WebRootSubPath.StartsWith("/") ? path.WebRootSubPath : "/" + path.WebRootSubPath,EnableDirectoryBrowsing = true
                        });
                        if (!string.IsNullOrWhiteSpace(path.AliasPath)) { app.UseFileServer(new FileServerOptions { FileProvider = new PhysicalFileProvider(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder) + FileOperations.ConvertSystemFilePathFromUrl(path.WebRootSubPath)),
                                RequestPath = !string.IsNullOrWhiteSpace(path.AliasPath) ? (path.AliasPath.StartsWith("/") ? path.AliasPath : "/" + path.AliasPath) :"", EnableDirectoryBrowsing = true
                            });
                        }
                    } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
                });
            }

            if (ServerConfigSettings.WebMvcPagesEngineEnabled) { app.UseMvcWithDefaultRoute(); }

            try {
                app.UsePathBase(ServerConfigSettings.RedirectPath);
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
            
            if (ServerConfigSettings.BrowserLinkEnabled) { app.UseBrowserLink(); }
            if (ServerConfigSettings.ModuleWebDataManagerEnabled) { app.UseEasyData(); }
            
        }

        /// <summary>
        /// Server Core Enabling Disabling Hosted Services
        /// </summary>
        private void ServerOnStarted() => ServerRuntimeData.ServerCoreStatus = ServerStatusTypes.Running.ToString();
        private void ServerOnStopping() => ServerRuntimeData.ServerCoreStatus = ServerStatusTypes.Stopping.ToString();
        private void ServerOnStopped() => ServerRuntimeData.ServerCoreStatus = ServerStatusTypes.Stopped.ToString();
    }
}