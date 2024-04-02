using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.FileProviders;
using NuGet.Protocol.Plugins;
using Westwind.AspNetCore.LiveReload;

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
            ServerModules.ConfigureGitSevrer(ref services);

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

            
            //Root Server Page To Default Path, Other Is Taken From Static Files
            app.Use(async (context, next) => { await next();

                /*Declaration & Check Module Redirect*/
                ServerWebPagesToken? serverWebPagesToken = null; string requestedModulePath = null; ServerModuleAndServiceList? serverModule = DbOperations.CheckServerModuleExists(context.Request.Path.Value);
                try { requestedModulePath = context.Request.Cookies.FirstOrDefault(a => a.Key.ToString() == "RequestedModulePath").Value?.ToString(); } catch { }



                //TODO implement ALL WebSites to This Expression BY LOCAL TABLE
                //Static Folders = Not Redirected to WebPortal  
                if (context.Response.StatusCode == StatusCodes.Status200OK &&
                   context.Request.Path.ToString().ToLower().StartsWith("/server") || context.Request.Path.ToString().ToLower().StartsWith("/metro")) {
                    return;

                //200 Run Next Existed Backend API Calls Request Without Checked Modules
                } else if (context.Response.StatusCode == StatusCodes.Status200OK && (context.Request.Path.Value != "/" || context.Request.Path.Value.ToLower() != BackendServer.ServerRuntimeData.SpecialUserWebRootPath.ToLower() || serverModule == null)) {
                    return;

                //301 Solve Missing / on last Folder in Path
                } else if (context.Response.StatusCode == StatusCodes.Status301MovedPermanently) {
                    return;

                //404 Template For Defined Other WebPages
                } else if (context.Response.StatusCode == StatusCodes.Status404NotFound &&
                   (context.Request.Path.ToString().ToLower().StartsWith("/server") || context.Request.Path.ToString().ToLower().StartsWith("/metro"))
                && !context.Request.Path.ToString().Split("/").Last().Contains(".")) {

                    //Check missing .html extension
                    if (!context.Request.Path.ToString().EndsWith("/") && File.Exists(ServerRuntimeData.WebRoot_path + context.Request.Path.ToString() + ".html")) {
                        context.Response.StatusCode = 200; context.Request.Path = context.Request.Path.ToString() + ".html"; 
                        await next.Invoke(); return;

                        //Static Bad path to NonExistPage
                    } else {
                        context.Request.Path = "/ServerControls/NonExistPage";
                        await next.Invoke(); return;
                    }
                }
                //404 For Files
                else if (context.Response.StatusCode == StatusCodes.Status404NotFound && context.Request.Path.ToString().Split("/").Last().Contains(".")) { return; }


                /*Check Authorized and Set from valid Token*/
                string token = context.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
                if (token == null && context.Request.Headers.Authorization.ToString().Length > 0) { token = context.Request.Headers.Authorization.ToString().Substring(7); }
                if (token != null) {
                    serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(token);
                    if (serverWebPagesToken.IsValid) { context.User.AddIdentities(serverWebPagesToken.UserClaims.Identities); try { context.Items.Add(new KeyValuePair<object, object>("ServerWebPagesToken", serverWebPagesToken)); } catch { } }
                }

                //Goto Portal RooT Page Or Allowed Module 
                if (context.Request.Path.Value == "/" || context.Request.Path.ToString().ToLower() == BackendServer.ServerRuntimeData.SpecialUserWebRootPath.ToLower()
                || (serverModule != null && (!serverModule.RestrictedAccess || (serverModule.RestrictedAccess && serverWebPagesToken != null && serverWebPagesToken.IsValid && serverModule.AllowedRoles.Split(",").ToList().Contains(serverWebPagesToken.UserClaims.FindFirstValue(ClaimTypes.Role)))))
                ) {
                    if (serverModule != null) { try { context.Items.Add(new KeyValuePair<object, object>("ServerModule", serverModule)); } catch { } }

                    context.Response.StatusCode = StatusCodes.Status200OK; context.Request.Path = BackendServer.ServerRuntimeData.SpecialUserWebRootPath;
                    await next.Invoke(); //FOR Goto procces over index page

                } //Module Go For Login
                else if (serverModule != null && serverModule.RestrictedAccess) {
                    ServerModuleAndServiceList? loginmodule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                    if (serverModule != null) { try { context.Items.Add(new KeyValuePair<object, object>("ServerModule", serverModule)); } catch { } }
                    try { context.Items.Add(new KeyValuePair<object, object>("ServerModule", serverModule)); } catch { }
                    try { context.Items.Add(new KeyValuePair<object, object>("LoginModule", loginmodule)); } catch { }
                    try { context.Response.Cookies.Append("IsLoginRequest", "correct"); } catch { }
                    try { context.Response.Cookies.Append("RequestedModulePath", serverModule.UrlSubPath); } catch { }

                    context.Response.StatusCode = StatusCodes.Status200OK; context.Request.Path = BackendServer.ServerRuntimeData.SpecialUserWebRootPath;
                    await next.Invoke(); //FOR Goto procces over index page

                } //Go to Allowed Redirect 404 Page
                else if (context.Response.StatusCode != 200 && ServerConfigSettings.RedirectOnPageNotFound) {
                    context.Response.StatusCode = StatusCodes.Status200OK; context.Request.Path = ServerConfigSettings.RedirectPath;
                    await next.Invoke(); //FOR Goto procces over index page

                } //Go to 404 Page
                else if (context.Response.StatusCode != 200 && !ServerConfigSettings.RedirectOnPageNotFound) {
                    context.Request.Path = "/ServerControls/NonExistPage";
                    await next.Invoke(); //FOR Goto procces over NonExistPage page

                } //Not Defined
                else { return; }
            });
               

            //app.UseExceptionHandler("/Error");
            app.UseRouting();
            app.UseDefaultFiles();
            app.UseHsts();


            //TODO define over Administration
            var staticFilesProvider = new FileExtensionContentTypeProvider();
            staticFilesProvider.Mappings[".jscript"] = "application/javascript"; staticFilesProvider.Mappings[".style"] = "text/css";
            staticFilesProvider.Mappings[".data"] = "text/json"; staticFilesProvider.Mappings[".code"] = "text/cs";
            staticFilesProvider.Mappings[".design"] = "text/xaml"; staticFilesProvider.Mappings[".archive"] = "application/zip";

            
            if (ServerConfigSettings.ConfigServerStartupOnHttps) { app.UseHttpsRedirection(); }
            app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true, ContentTypeProvider = staticFilesProvider, HttpsCompression = HttpsCompressionMode.Compress, DefaultContentType = "text/html" });


            List<SolutionWebsiteList> websites;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                websites = new EasyITCenterContext().SolutionWebsiteLists.Where(a => a.Active).ToList();
            }
            websites.ForEach(website => {
                app.UseStaticFiles(new StaticFileOptions { 
                    ServeUnknownFileTypes = true, FileProvider = new WebsitesStaticFileDbProvider(app.ApplicationServices), 
                    RequestPath = "/" + website.WebsiteName+ ".", HttpsCompression = HttpsCompressionMode.Compress,
                    DefaultContentType = "text/html"
                });
            });

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
            
            try { app.UsePathBase(BackendServer.ServerRuntimeData.SpecialUserWebRootPath); 
            } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }

            
            if (ServerConfigSettings.BrowserLinkEnabled) { app.UseBrowserLink(); }
            if (ServerConfigSettings.ModuleWebDataManagerEnabled) {app.UseEasyData();}


            ILoggerFactory? ter = new LoggerFactory();

        }

        /// <summary>
        /// Server Core Enabling Disabling Hosted Services
        /// </summary>
        private void ServerOnStarted() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Running.ToString();

        private void ServerOnStopping() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Stopping.ToString();

        private void ServerOnStopped() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Stopped.ToString();
    }
}