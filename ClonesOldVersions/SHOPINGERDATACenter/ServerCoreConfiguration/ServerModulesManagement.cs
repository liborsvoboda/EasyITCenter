using EASYDATACenter;
using SHOPINGER.DBModel;
using MarkdownDocumenting.Extensions;
using Microsoft.Extensions.DependencyInjection;
using NetTopologySuite.Index.HPRtree;

namespace EASYDATACenter.ServerCoreConfiguration {

    /// <summary>
    /// Configure Server Ad-dons and Modules
    /// </summary>
    public class ServerModules {
       
        /// <summary>
        /// Server Module: Automatic DB Data Manager for work with data directly
        /// services.AddCoreAdmin("Admin"); is Token RoleName
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureCoreAdmin(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleDataManagerEnabled) { services.AddCoreAdmin(); }
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
        /// Server Module: Automatic DB Data Manager for work with data directly
        /// Extreme Posibilities https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureHealthCheck(ref IServiceCollection services) {
            if (ServerConfigSettings.ModuleHealthServiceEnabled && !BackendServer.ServerRuntimeData.DebugMode) {
                services.AddHealthChecks()
                .AddSqlServer(ServerConfigSettings.DatabaseConnectionString, null, "Config DB Connection Check")
                .AddDbContextCheck<SHOPINGERContext>("Imported DB Schema available");

                List<HealthCheckTaskList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new SHOPINGERContext().HealthCheckTaskLists.ToList();
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
                                services.AddHealthChecks().AddPingHealthCheck(option => { option.AddHost(item.IpAddress,10); }, item.TaskName);
                                break;
                            case "tcpPort":
                                services.AddHealthChecks().AddTcpHealthCheck(option => { option.AddHost(item.IpAddress,item.Port.Value); },item.TaskName);
                                break;
                            case "serverUrlPath":
                                services.AddHealthChecks().AddUrlGroup(new Uri(ServerConfigSettings.ConfigServerStartupOnHttps ? $"https://localhost:{ServerConfigSettings.ConfigServerStartupPort}" + item.ServerUrlPath : $"http://localhost:{ServerConfigSettings.ConfigServerStartupPort}" + item.ServerUrlPath), item.TaskName);
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
                                services.AddHealthChecks().AddOracle(item.DbSqlConnection,"select * from v$version", item.TaskName);
                                break;
                            case "postgresConnection":
                                services.AddHealthChecks().AddNpgSql(item.DbSqlConnection, "SELECT 1;",null, item.TaskName);
                                break;
                        }
                    } catch (Exception Ex) { ServerCoreFunctions.SendEmail(new MailRequest() { Content = ServerCoreFunctions.GetSystemErrMessage(Ex) }); }
                };

                services.AddHealthChecksUI(setup => {
                    setup.SetHeaderText(ServerConfigSettings.SpecialServerServiceName + " Health Check Service");
                    setup.AddHealthCheckEndpoint("Monitored Tasks", (ServerConfigSettings.ConfigServerStartupOnHttps) ? $"https://localhost:{ServerConfigSettings.ConfigServerStartupPort}" + "/HealthResultService" : $"http://localhost:{ServerConfigSettings.ConfigServerStartupPort}" + "/HealthResultService");
                    setup.DisableDatabaseMigrations();
                    setup.SetApiMaxActiveRequests(200);
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
                services.AddSwaggerGen(c => {
                    c.AddSecurityDefinition("Basic", new OpenApiSecurityScheme { Name = "Authorization", Type = SecuritySchemeType.Http, Scheme = "basic", In = ParameterLocation.Header, Description = "Basic Authorization header for getting Bearer Token." });
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Basic" } }, new List<string>() } });
                    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme { Description = "JWT Authorization header using the Bearer scheme for All safe APIs.", Name = "Authorization", In = ParameterLocation.Header, Scheme = "bearer", Type = SecuritySchemeType.Http, BearerFormat = "JWT" });
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } }, new List<string>() } });

                    c.SchemaGeneratorOptions = new SchemaGeneratorOptions { SchemaIdSelector = type => type.FullName };
                    c.SwaggerDoc(Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString(), new OpenApiInfo {
                        Title = ServerConfigSettings.SpecialServerServiceName + " Server API",
                        Version = Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString(),
                        Description = BackendServer.SwaggerModuleDescription,
                        Contact = new OpenApiContact { Name = "Libor Svoboda", Email = ServerConfigSettings.EmailerServiceEmailAddress, Url = new Uri("https://groupware-solution.eu/contactus") },
                        License = new OpenApiLicense { Name = ServerConfigSettings.SpecialServerServiceName + " Server License", Url = new Uri("https://www.groupware-solution.eu/") }
                    });

                    var xmlFile = Path.Combine(AppContext.BaseDirectory, $"{ServerConfigSettings.SpecialServerServiceName}.xml");
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
        /// Server Module: Enable Swagger Api Doc Generator And Online Tester
        /// </summary>
        internal static void EnableCoreAdmin(ref IApplicationBuilder app) {
            app.UseCoreAdminCustomTitle("Data Management");
            //app.UseCoreAdminCustomAuth((o) => { o.; return CommunicationController.CheckAdmin(o); });
            if (ServerConfigSettings.ModuleDataManagerEnabled) { app.UseCoreAdminCustomUrl("CoreAdmin"); }
        }

        /// <summary>
        /// Server Module: Enable Generated Developer Documentation
        /// </summary>
        internal static void EnableDocumentation(ref IApplicationBuilder app) {
            if (ServerConfigSettings.ModuleMdDocumentationEnabled) {
                app.UseDocumentation(builder => {
                    builder.HighlightJsStyle = "/metro/css/material-darker.css";
                    builder.GetMdlStyle = "/metro/css/material.min.css";
                    builder.NavBarStyle = MarkdownDocumenting.Elements.NavBarStyle.Default;

                    builder.RootPathHandling = HandlingType.HandleWithHighOrder;
                    builder.IndexDocument = ("EASYDATACenterFullCodeDocs");

                    if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", ServerConfigSettings.SpecialServerLanguage), "/DashBoard"));
                    if (ServerConfigSettings.ModuleHealthServiceEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GithubInteli", ServerConfigSettings.SpecialServerLanguage), "/Tools/EDC_ESB_InteliHelp/book/"));

                    if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", ServerConfigSettings.SpecialServerLanguage), "/DashBoard"));
                    if (ServerConfigSettings.ServerWebBrowserEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ServerFiles", ServerConfigSettings.SpecialServerLanguage), "/server"));
                    if (ServerConfigSettings.ModuleSwaggerApiDocEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("AutoGeneratedApiDocsWithTesting", ServerConfigSettings.SpecialServerLanguage), "/AdminApiDocs"));
                    if (ServerConfigSettings.ModuleDataManagerEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DataManagementForDevMode", ServerConfigSettings.SpecialServerLanguage), "/CoreAdmin"));
                    if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DbDgmlSchema", ServerConfigSettings.SpecialServerLanguage), "/DbDgmlSchema"));
                    if (ServerConfigSettings.ModuleHealthServiceEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ConfiguredServerHeathCheckService(>200)", ServerConfigSettings.SpecialServerLanguage), "/ServerHealthService"));

                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("Groupware-Solution.Eu", ServerConfigSettings.SpecialServerLanguage), "https://Groupware-Solution.Eu"));
                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHub", ServerConfigSettings.SpecialServerLanguage), "https://github.com/liborsvoboda"));
                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHubInteli", ServerConfigSettings.SpecialServerLanguage), "/Tools/EDC_ESB_InteliHelp/book/"));
                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("OnlineExamples", ServerConfigSettings.SpecialServerLanguage), "https://KlikneteZde.Cz"));
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
                    c.RoutePrefix = "AdminApiDocs";
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
                    c.SupportedSubmitMethods(SubmitMethod.Get, SubmitMethod.Head, SubmitMethod.Post);
                    c.UseRequestInterceptor("(request) => { return request; }");
                    c.UseResponseInterceptor("(response) => { return response; }");
                });
            }
        }


    }
}