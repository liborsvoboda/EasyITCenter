using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;


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
            app.Use(async (context, next) => { if (context.Request.Path.Value == "/" && ServerConfigSettings.RedirectOnPageNotFound) { context.Request.Path = BackendServer.ServerRuntimeData.SpecialUserWebRootPath; } await next(); });

            //Check Fouded Server API Modules Right For Token or User Authentificated
            app.Use(async (context, next) => { context.Response.StatusCode = StatusCodes.Status200OK; string? requestedModulePath = context.Request.Path.Value;

                //Check API module Request is Redirected or Its First contact - Read Module and Token
                ServerWebPagesToken? serverWebPagesToken = null; string token = context.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
                if (token == null && context.Request.Headers.Authorization.ToString().Length > 0) { token = context.Request.Headers.Authorization.ToString().Substring(7); }
                ServerModuleAndServiceList? serverModule = (ServerModuleAndServiceList?)context.Items.FirstOrDefault(a => a.Key.ToString() == "ServerModule").Value;


                if (serverModule == null) { /* server API module wuthout Control go Next */ await next(); }
                else if (serverModule != null && !serverModule.RestrictedAccess) { /* server API module is Free go Next */ await next(); }
                else if (serverModule != null && serverModule.RestrictedAccess && token != null) { serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(token);
                    if (serverWebPagesToken.IsValid && serverModule.AllowedRoles != null && serverModule.AllowedRoles.Split(",").ToList().Contains(serverWebPagesToken.UserClaims.FindFirstValue(ClaimTypes.Role))) { /* Token is OK go next*/ await next(); }
                    else { /* Token is not correct denied = redirect to login again */ context.Request.Path = serverModule.RedirectPathOnError; await next(); }
                } else { /* unspecified problem = redirect to login */ context.Request.Path = serverModule.RedirectPathOnError; await next(); }
            });


            //404 Redirect Central One Page Portal not For Files
            app.Use(async (context, next) => {
                if (context.Response.StatusCode == StatusCodes.Status404NotFound && !context.Request.Path.ToString().Split("/").Last().Contains(".")) { string requestPath = context.Request.Path;







                    /*
                      string requestedModulePath = null; string requestModuleAccess = null;
                      try { requestedModulePath = context.Request.Cookies.FirstOrDefault(a => a.Key.ToString() == "RequestedModulePath").Value?.ToString(); } catch { }
                      try { requestModuleAccess = context.Request.Cookies.FirstOrDefault(a => a.Key.ToString() == "RequestedModuleAccess").Value?.ToString(); } catch { }

                      //include module && Login Module
                      ServerModuleAndServiceList? requstedModule = requestedModulePath == null ? new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.UrlSubPath.ToLower().Replace("/", "").StartsWith(requestPath.ToLower().Replace("/", ""))) :
                          new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.UrlSubPath.ToLower().Replace("/", "").StartsWith(requestedModulePath.ToLower().Replace("/", "")));

                      //include user from cookie
                      ServerWebPagesToken? serverWebPagesToken = null; string token = context.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
                      if (token != null) { serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(token); if (serverWebPagesToken.IsValid) { context.User.AddIdentities(serverWebPagesToken.UserClaims.Identities);
                              try { context.Items.Add(new KeyValuePair<object, object>("ServerWebPagesToken", serverWebPagesToken)); } catch { } } }

                      //Check Redirected Login Return to API
                      if (requstedModule != null && (!requstedModule.RestrictedAccess || ( serverWebPagesToken != null && serverWebPagesToken.IsValid && requestModuleAccess != null && requestModuleAccess.Split(",").Contains(serverWebPagesToken.UserClaims.FindFirstValue(ClaimTypes.Role))))) { 
                          try { context.Items.Add(new KeyValuePair<object, object>("ServerModule", requstedModule)); } catch { } 
                          try { context.Response.Cookies.Append("RequestedModulePath", requestedModulePath); } catch { } 
                          try { context.Response.Cookies.Append("RequestedModuleAccess", requstedModule.AllowedRoles); } catch { } 
                          context.Request.Path = requstedModule.UrlSubPath; await next();
                      } else {

                          //Redirect To Show Module or Login Page
                          if (requstedModule != null) {
                              ServerModuleAndServiceList? loginmodule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                              try { context.Items.Add(new KeyValuePair<object, object>("ServerModule", requstedModule)); } catch { }
                              try { context.Items.Add(new KeyValuePair<object, object>("LoginModule", loginmodule)); } catch { }
                              try { context.Response.Cookies.Append("RequestedModulePath", requestedModulePath); } catch { }
                              context.Request.Path = requstedModule.RedirectPathOnError; context.Response.StatusCode = StatusCodes.Status200OK; await next();
                          }
                          // Redirect To Portal Or Module Or Login Module
                          else if (ServerConfigSettings.RedirectOnPageNotFound) {
                              context.Items.Add(new KeyValuePair<object, object>("PortalRedirect", true));
                              context.Request.Path = ServerConfigSettings.RedirectPath; context.Response.StatusCode = StatusCodes.Status200OK; await next();
                          }

                          //Must be redirected to existing page everytime Vontent is Loaded by Module
                          if((context.Response.StatusCode == StatusCodes.Status200OK && context.Request.Path != BackendServer.ServerRuntimeData.SpecialUserWebRootPath) ||
                              ServerConfigSettings.RedirectOnPageNotFound ) { 
                              context.Request.Path = BackendServer.ServerRuntimeData.SpecialUserWebRootPath; context.Response.StatusCode = StatusCodes.Status200OK;
                              try { context.Items.Add(new KeyValuePair<object, object>("PortalRedirect", false)); } catch { }
                              await next();
                          }
                      }
                  */
                } else { /*Go to Portal unspecified Path */
                    context.Request.Path = BackendServer.ServerRuntimeData.SpecialUserWebRootPath; await next();
                }
                
                
            });

            app.UseExceptionHandler("/Error");
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

        }

        /// <summary>
        /// Server Core Enabling Disabling Hosted Services
        /// </summary>
        private void ServerOnStarted() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Running.ToString();

        private void ServerOnStopping() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Stopping.ToString();

        private void ServerOnStopped() => ServerRuntimeData.ServerCoreStatus = ServerStatuses.Stopped.ToString();
    }
}