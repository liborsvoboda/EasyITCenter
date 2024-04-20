using DBEntitySchema.Core;
using EasyITCenter.GitServer.Settings;
using Markdig.Extensions.AutoIdentifiers;
using Markdig;
using MarkdownDocumenting.Extensions;
using Quartz.Impl;
using Quartz.Spi;
using Westwind.AspNetCore.LiveReload;
using Westwind.AspNetCore.Markdown;
using Pek.Markdig.HighlightJs;
using Docfx.MarkdigEngine.Extensions;
using Markdig.Prism;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using SourceBrowserIndex = Microsoft.SourceBrowser.SourceIndexServer.Models.Index;


namespace EasyITCenter.ServerCoreConfiguration {
   
    /// <summary>
    /// Configure Server Ad-dons and Modules
    /// </summary>
    public class ServerModules {

        /// <summary>
        /// Server Module: GitServer Startup Configuration
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureGitServer(ref IServiceCollection services) {
            if (ServerConfigSettings.GitServerEnabled) {
                    services.Configure<GitSettings>(options => {
                    options.BasePath = Path.Combine(ServerRuntimeData.Startup_path, ServerRuntimeData.DataPath,"GitServer");
                    options.GitPath = "git";
                });
            }
        }


        /// <summary>
        /// Server Module: Set Startup Path for CodeBrowser 
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureCodeBrowser(ref IServiceCollection services) {
            if (ServerConfigSettings.EnableCodeBrowser) {
                var subfolder = Path.Combine(ServerRuntimeData.WebRoot_path, "EIC&ESBCodeBrowser");
                if (File.Exists(subfolder)) { services.AddSingleton(new SourceBrowserIndex(subfolder)); }
            }
        }


        /// <summary>
        /// Server Module: Configure Automatic MDtoHtml Files Show in WebPages
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureMarkdownAsHtmlFiles(ref IServiceCollection services) {
            if (ServerConfigSettings.EnableAutoShowStaticMdAsHtml) { 
                services.AddMarkdown(config => {
                    config.ConfigureMarkdigPipeline = builder => {
                        builder.UseEmphasisExtras(Markdig.Extensions.EmphasisExtras.EmphasisExtraOptions.Default)
                            .UsePipeTables().UseGridTables().UseAutoIdentifiers(AutoIdentifierOptions.GitHub)
                            .UseAutoLinks().UseAbbreviations().UseEmojiAndSmiley(true).UseListExtras()
                            .UseAdvancedExtensions().UseAlertBlocks().UseBootstrap().UseCitations().UseDefinitionLists()
                            .UseDiagrams().UseEmphasisExtras().UseFigures().UseListExtras().UseFooters().UseFootnotes()
                            .UseGlobalization().UseMathematics().UseMediaLinks().UsePreciseSourceLocation().UseReferralLinks()
                            .UseSmartyPants().UseSyntaxHighlighting().UseTableOfContent().UseTaskLists().UseDFMCodeInfoPrefix()
                            .UseHighlightJs().UseInteractiveCode().UseXref()
                            //.UsePrism()
                            .UseUrlRewriter(link => link.Url.AsRelativeResource())
                            //.UseUrlRewriter(link => link.Url.Replace(!ServerConfigSettings.ConfigServerStartupOnHttps && ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS ? "https://" : "http://", !ServerConfigSettings.ConfigServerStartupOnHttps && ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS ? "http://" : "https://"))
                            .UseFigures().UseTaskLists().UseCustomContainers().UseGenericAttributes();//.Build();
                    };
                }); 
            }


        }
        

        /// <summary>
        /// Server Module: Configures the Scheduler Module.
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureScheduler(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleAutoSchedulerEnabled) {
                services.AddSingleton<IJobFactory, JobFactory>();
                var scheduler = new StdSchedulerFactory().GetScheduler().ConfigureAwait(false).GetAwaiter().GetResult();
                services.AddSingleton(provider => { scheduler.JobFactory = provider.GetService<IJobFactory>(); return scheduler; });
                ServerRuntimeData.ServerAutoSchedulerProvider = scheduler;
                services.AddHostedService<AutoSchedulerService>();
                ServerCoreAutoScheduler.AutoSchedulerPlanner().GetAwaiter().GetResult();
            }
        }


        /// <summary>
        /// Server Module: Generted Developer Documentation for Defvelopers Documentation contain
        /// full Server Structure for extremelly simple developing
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDocumentation(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleMdDocumentationEnabled) { services.AddDocumentation(); }
        }


        /// <summary>
        /// Module Entity Schema Design Generator
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDBEntitySchema(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleDBEntitySchemaEnabled) { services.AddDBEntitySchema(ServerConfigSettings.DatabaseConnectionString); }
        }


        
        /// <summary>
        /// Server Module: Generted Developer Documentation for Defvelopers Documentation contain
        /// full Server Structure for extremelly simple developing
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureLiveDataMonitor(ref IServiceCollection services) {
            if (ServerConfigSettings.WebLiveDataMonitorEnabled) {
                try {
                    List<ServerLiveDataMonitorList> data;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().ServerLiveDataMonitorLists.Where(a => a.Active).ToList();
                    }
                    if (data != null) {
                        foreach (ServerLiveDataMonitorList monitor in data) {
                            services.AddLiveReload(config => {
                                try {
                                    if (FileOperations.CheckDirectory(Path.Combine(ServerRuntimeData.Startup_path, monitor.RootPath.StartsWith("/") ? monitor.RootPath.Substring(1) : monitor.RootPath))) {
                                        config.LiveReloadEnabled = true;
                                        config.ServerRefreshTimeout = 1000;
                                        config.FolderToMonitor = Path.Combine(ServerRuntimeData.Startup_path, monitor.RootPath.StartsWith("/") ? monitor.RootPath.Substring(1) : monitor.RootPath);
                                        if (monitor.FileExtensions.Length > 0) { config.ClientFileExtensions = monitor.FileExtensions; }
                                    }
                                    else { CoreOperations.SendEmail(new MailRequest() { Content = "Path For Live Data Monitoring not Exist" + System.IO.Path.Combine(ServerRuntimeData.Startup_path, monitor.RootPath.StartsWith("/") ? monitor.RootPath.Substring(1) : monitor.RootPath) }); }
                                } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
                            });
                        }
                    } else { services.AddLiveReload(); }
            } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
            }
        }

        /// <summary>
        /// Server Module: Automatic DB Data Manager for work with data directly Extreme
        /// Posibilities https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureHealthCheck(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleHealthServiceEnabled) {
                services.AddHealthChecks()
                .AddSqlServer(ServerConfigSettings.DatabaseConnectionString, null, "Kontrola p�ipojen� k DB ")
                .AddDbContextCheck<EasyITCenterContext>("Importovan� DB Schema");

                List<ServerHealthCheckTaskList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().ServerHealthCheckTaskLists.Where(a => a.Active).ToList();
                }

                foreach (var item in data) {
                    try {
                        switch (item.Type) {
                            case "driveSize":
                                services.AddHealthChecks().AddDiskStorageHealthCheck(diskOptions => { diskOptions.AddDrive(driveName: item.ServerDrive, item.SizeMb.Value); }, item.TaskName);
                                break;

                            case "folderExist":
                                services.AddHealthChecks().AddFolder(folderOption => { folderOption.AddFolder(item.FolderPath); }, item.TaskName);
                                break;

                            case "processMemory":
                                services.AddHealthChecks().AddProcessAllocatedMemoryHealthCheck(item.SizeMb.Value, item.TaskName);
                                break;

                            case "allocatedMemory":
                                services.AddHealthChecks().AddWorkingSetHealthCheck(item.SizeMb.Value * 1024 * 1024, item.TaskName);
                                break;

                            case "ping":
                                services.AddHealthChecks().AddPingHealthCheck(option => { option.AddHost(item.IpAddress, 10); }, item.TaskName);
                                break;

                            case "tcpPort":
                                services.AddHealthChecks().AddTcpHealthCheck(option => { option.AddHost(item.IpAddress, item.Port.Value); }, item.TaskName);
                                break;

                            case "serverUrlPath":
                                services.AddHealthChecks().AddUrlGroup(new Uri(ServerConfigSettings.ConfigServerStartupOnHttps ? $"https://localhost:{ServerConfigSettings.ConfigServerStartupHttpsPort}" + item.ServerUrlPath : $"http://localhost:{ServerConfigSettings.ConfigServerStartupHttpPort}" + item.ServerUrlPath), item.TaskName);
                                if (ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS) { services.AddHealthChecks().AddUrlGroup(new Uri($"http://localhost:{ServerConfigSettings.ConfigServerStartupHttpPort}" + item.ServerUrlPath), item.TaskName + "_HTTP"); }
                                break;

                            case "urlPath":
                                services.AddHealthChecks().AddUrlGroup(new Uri(item.UrlPath), item.TaskName);
                                break;

                            case "mssqlConnection":
                                services.AddHealthChecks().AddSqlServer(item.DbSqlConnection, null, item.TaskName);
                                break;

                            case "mysqlConnection":
                                services.AddHealthChecks().AddMySql(item.DbSqlConnection, item.TaskName);
                                break;

                            case "oracleConnection":
                                services.AddHealthChecks().AddOracle(item.DbSqlConnection, "select * from v$version", item.TaskName);
                                break;

                            case "postgresConnection":
                                services.AddHealthChecks().AddNpgSql(item.DbSqlConnection, "SELECT 1;", null, item.TaskName);
                                break;
                        }
                    } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
                };
                services.AddHealthChecksUI(setup => {
                    setup.SetHeaderText(ServerConfigSettings.ConfigCoreServerRegisteredName + "IT Dohledov� Centrum");
                    setup.AddHealthCheckEndpoint("IT:  NET | HW | SW | OS | DB  Monitoring", ServerConfigSettings.ConfigServerStartupOnHttps ? $"https://localhost:{ServerConfigSettings.ConfigServerStartupHttpsPort}" + "/HealthResultService" : $"http://localhost:{ServerConfigSettings.ConfigServerStartupHttpPort}" + "/HealthResultService");
                    setup.DisableDatabaseMigrations();
                    setup.SetApiMaxActiveRequests(200);
                    setup.SetMinimumSecondsBetweenFailureNotifications(10);
                    setup.SetEvaluationTimeInSeconds(ServerConfigSettings.ModuleHealthServiceRefreshIntervalSec);
                    setup.MaximumHistoryEntriesPerEndpoint(10);
                }).AddInMemoryStorage(optionsBuilder => { optionsBuilder.EnableSensitiveDataLogging(false); });
            }
        }



        /// <summary>
        /// Server Module: Swagger Api Doc Generator And Online Tester Configuration
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureSwagger(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleSwaggerApiDocEnabled) {
                //services.AddSwaggerSchemaBuilder(c => c.CamelCase = true);
                
                 services.AddSwaggerGen(c => {
                    c.AddSecurityDefinition("Basic", new OpenApiSecurityScheme { Name = "Authorization", Type = SecuritySchemeType.Http, Scheme = "basic", In = ParameterLocation.Header, Description = "Basic Authorization header for getting Bearer Token." });
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Basic" } }, new List<string>() } });
                    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme { Description = "JWT Authorization header using the Bearer scheme for All safe APIs.", Name = "Authorization", In = ParameterLocation.Header, Scheme = "bearer", Type = SecuritySchemeType.Http, BearerFormat = "JWT" });
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } }, new List<string>() } });
                    
                    c.SchemaGeneratorOptions = new SchemaGeneratorOptions { SchemaIdSelector = type => type.FullName };
                    c.SwaggerDoc(Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString(), new OpenApiInfo {
                        Title = ServerConfigSettings.ConfigCoreServerRegisteredName + " Server API",
                        Version = Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString(),
                        TermsOfService = new Uri(ServerConfigSettings.ServerPublicUrl),
                        Description = BackendServer.SwaggerModuleDescription,
                        Contact = new OpenApiContact { Name = "Libor Svoboda", Email = ServerConfigSettings.EmailerServiceEmailAddress, Url = new Uri("https://groupware-solution.eu/contactus") },
                        License = new OpenApiLicense { Name = ServerConfigSettings.ConfigCoreServerRegisteredName + " Server License", Url = new Uri("https://www.groupware-solution.eu/") }
                    });

                    var xmlFile = Path.Combine(AppContext.BaseDirectory, $"{ServerConfigSettings.ConfigCoreServerRegisteredName}.xml");
                    if (File.Exists(xmlFile)) c.IncludeXmlComments(xmlFile, true);

                    //c.InferSecuritySchemes();
                    c.UseOneOfForPolymorphism();
                    //c.UseInlineDefinitionsForEnums();
                    c.DescribeAllParametersInCamelCase();
                    c.EnableAnnotations(true, true);
                    c.UseAllOfForInheritance();
                    c.SupportNonNullableReferenceTypes();
                    //c.UseAllOfToExtendReferenceSchemas();
                    c.DocInclusionPredicate((docName, description) => true);
                    c.CustomSchemaIds(type => type.FullName);
                    c.ResolveConflictingActions(x => x.First());
                });

            }
        }

    }


    /// <summary>
    /// Enable Configured Server Ad-dons and Modules
    /// </summary>
    public class ServerModulesEnabling {


        /// <summary>
        /// Server Module: Enable Automatic MDtoHtml Files Show in WebPages
        /// </summary>
        /// <param name="app"></param>
        internal static void EnableMarkdownAsHtmlFiles(ref IApplicationBuilder app) {
            if (ServerConfigSettings.EnableAutoShowStaticMdAsHtml) { app.UseMarkdown(); }
        }


        /// <summary>
        /// Server Module: Enable Generated Developer Documentation
        /// </summary>
        internal static void EnableDocumentation(ref IApplicationBuilder app) {
            if (ServerConfigSettings.ModuleMdDocumentationEnabled) {
                app.UseDocumentation(builder => {
                    builder.HighlightJsStyle = "../../ServerCoreTools/JsCssLibrary/Docs/material-darker.css";
                    builder.GetMdlStyle = "../../ServerCoreTools/JsCssLibrary/Docs/material.min.css";
                    builder.NavBarStyle = MarkdownDocumenting.Elements.NavBarStyle.Default;
                    builder.RootPathHandling = HandlingType.Handle;
                    builder.SetIndexDocument(new EasyITCenterContext().DocSrvDocumentationLists.OrderBy(a => a.DocumentationGroup.Sequence)
                    .ThenBy(a => a.Sequence).ThenBy(a => a.Name).FirstOrDefault().Name.Replace(" ", ""));

                    //if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", ServerConfigSettings.ServiceServerLanguage), "/DashBoard"));
                    //if (ServerConfigSettings.ModuleHealthServiceEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GithubInteli", ServerConfigSettings.ServiceServerLanguage), "/Tools/EDC_ESB_InteliHelp/book/"));

                    //if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", ServerConfigSettings.ServiceServerLanguage), "/"));
                    //if (ServerConfigSettings.ServerWebBrowserEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ServerFiles", ServerConfigSettings.ServiceServerLanguage), "/server"));
                    //if (ServerConfigSettings.ModuleSwaggerApiDocEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("AutoGeneratedApiDocsWithTesting", ServerConfigSettings.ServiceServerLanguage), "/AdminApiDocs"));
                    //if (ServerConfigSettings.ModuleDataManagerEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DataManagementForDevMode", ServerConfigSettings.ServiceServerLanguage), "/CoreAdmin"));
                    //if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DbDgmlSchema", ServerConfigSettings.ServiceServerLanguage), "/DbDgmlSchema"));
                    //if (ServerConfigSettings.ModuleHealthServiceEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ConfiguredServerHeathCheckService(>200)", ServerConfigSettings.ServiceServerLanguage), "/ServerHealthService"));

                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("Groupware-Solution.Eu", ServerConfigSettings.ServiceServerLanguage), "https://Groupware-Solution.Eu"));
                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHub", ServerConfigSettings.ServiceServerLanguage), "https://github.com/liborsvoboda"));
                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHubInteli", ServerConfigSettings.ServiceServerLanguage), "/Tools/EDC_ESB_InteliHelp/book/"));
                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("OnlineExamples", ServerConfigSettings.ServiceServerLanguage), "https://KlikneteZde.Cz"));
                });
            }
        }

        /// <summary>
        /// Server Module: Enable Swagger Api Doc Generator And Online Tester
        /// </summary>
        internal static void EnableSwagger(ref IApplicationBuilder app) {
            if (ServerConfigSettings.ModuleSwaggerApiDocEnabled) {
                app.UseSwagger();
                app.UseSwaggerUI(c => {
                    c.RoutePrefix = ServerConfigSettings.ModuleSwaggerApiDocPath.StartsWith("/") ? ServerConfigSettings.ModuleSwaggerApiDocPath.Substring(1) : ServerConfigSettings.ModuleSwaggerApiDocPath;
                    c.DocumentTitle = BackendServer.SwaggerModuleDescription;
                    c.SwaggerEndpoint("/swagger/" + Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString() + "/swagger.json", "Server API version " + Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString());
                    c.DocExpansion(DocExpansion.None);
                    c.EnableTryItOutByDefault();
                    c.DisplayRequestDuration();
                    //c.EnableDeepLinking();
                    c.EnableFilter();
                    //c.DisplayOperationId();
                    c.DefaultModelExpandDepth(1);
                    c.DefaultModelRendering(ModelRendering.Model);
                    c.DefaultModelsExpandDepth(1);
                    //c.EnablePersistAuthorization();
                    //c.EnableValidator();
                    //c.ShowCommonExtensions();
                    //c.ShowExtensions();
                    c.SupportedSubmitMethods(SubmitMethod.Get,SubmitMethod.Put, SubmitMethod.Delete, SubmitMethod.Head, SubmitMethod.Post);
                    c.UseRequestInterceptor("(request) => { return request; }");
                    c.UseResponseInterceptor("(response) => { return response; }");
                });
            }
        }
        
        /// <summary>
        /// Server Module: Enable Live Data Monitor
        /// </summary>
        internal static void EnableLiveDataMonitor(ref IApplicationBuilder app) { if (ServerConfigSettings.WebLiveDataMonitorEnabled) { app.UseLiveReload(); } }


        /// <summary>
        /// Server Module: Enable DBEntitySchema Web Page
        /// </summary>
        internal static void EnableDBEntitySchema(ref IApplicationBuilder app) {
            if (ServerConfigSettings.ModuleDBEntitySchemaEnabled) { 
                app.UseDBEntitySchema(cfg => { 
                cfg.PathMatch = ServerConfigSettings.ModuleDBEntitySchemaPath.StartsWith("/") 
                    ? ServerConfigSettings.ModuleDBEntitySchemaPath 
                    : "/" + ServerConfigSettings.ModuleDBEntitySchemaPath; }); 
            } 
        }


    }

}