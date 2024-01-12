using EASYDATACenter.ServerCoreDefinition;
using FubarDev.FtpServer;
using FubarDev.FtpServer.AccountManagement;
using FubarDev.FtpServer.FileSystem.DotNet;
using LettuceEncrypt;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


/*
 * Server Core Configuration Part
 */
namespace EASYDATACenter.ServerCoreConfiguration {

    /// <summary>
    /// Server Core Configuration Settings of Security, Communications, Technologies, Modules Rules,
    /// Rights, Conditions, Formats, Services, Logging, etc..
    /// </summary>
    public class ServerConfigurationServices {

        /// <summary>
        /// Custom Secure FTP Server
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureFTPServer(ref IServiceCollection services) {
            if (ServerConfigSettings.ServerFtpEngineEnabled) {
                services.AddFtpServer(
                                    builder => {
                                        if (!ServerConfigSettings.ServerFtpSecurityEnabled) { builder.EnableAnonymousAuthentication(); }
                                        builder
                                       .UseDotNetFileSystem()
                                       .DisableChecks()
                                       .UseSingleRoot();
                                       });

                services.Configure<FtpServerOptions>(opt => opt.ServerAddress = "*");
                services.Configure<DotNetFileSystemOptions>(opt => opt.RootPath = "/FTPServer");
                services.AddSingleton<IMembershipProvider, HostedFtpServerMembershipProvider>();
                services.AddHostedService<HostedFtpServer>();

                using (var serviceProvider = services.BuildServiceProvider()) {
                    BackendServer.ServerRuntimeData.ServerFTPProvider = serviceProvider.GetRequiredService<IFtpServerHost>();
                }
            }
        }

        /// <summary>
        /// Server Core: Configure Cookie Politics
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureCookie(ref IServiceCollection services) {
            services.Configure<CookiePolicyOptions>(options => {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Controllers
        /// options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = [ValidateNever]
        /// in Class options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        /// = [JsonIgnore] in Class
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureControllers(ref IServiceCollection services) {
            services.AddRouting(options => options.LowercaseUrls = true);

            services.AddControllersWithViews(options => {
                options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true;
            }).AddNewtonsoftJson(options => {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                options.SerializerSettings.Formatting = Formatting.Indented;
            }).AddJsonOptions(x => {
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                x.JsonSerializerOptions.WriteIndented = true;
                x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Logging
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureLogging(ref IServiceCollection services) {
            if (BackendServer.ServerRuntimeData.DebugMode) {

                services.AddLogging(builder => {
                    builder.AddConsole().AddDebug().SetMinimumLevel(LogLevel.Debug)
                    .AddEventLog(setting => { setting.LogName = ServerConfigSettings.SpecialServerServiceName; })
                    .AddFilter<ConsoleLoggerProvider>(category: null, level: LogLevel.Debug)
                    .AddFilter<DebugLoggerProvider>(category: null, level: LogLevel.Debug);
                });
            }
            services.AddHttpLogging(logging => {
                logging.LoggingFields = HttpLoggingFields.All;
                logging.RequestHeaders.Add("sec-ch-ua"); logging.ResponseHeaders.Add("RequestJsonFormatNotCorrectly");
                logging.MediaTypeOptions.AddText("application/javascript");
                logging.RequestBodyLogLimit = logging.ResponseBodyLogLimit = 4096;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Authentication Support
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureAuthentication(ref IServiceCollection services) {
            services.AddAuthentication(x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x => {
                x.BackchannelHttpHandler = new HttpClientHandler { ServerCertificateCustomValidationCallback = delegate { return true; } };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = ServerCoreHelpers.GetValidationParameters();
                if (ServerConfigSettings.ServerTimeTokenValidationEnabled) { x.TokenValidationParameters.LifetimeValidator = GLOBALNETAuthenticationApi.LifetimeValidator; }

                x.Events = new JwtBearerEvents {
                    OnAuthenticationFailed = context => {
                        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException)) {
                            context.Response.Headers.Add("IS-TOKEN-EXPIRED", "true");
                        }
                        return Task.CompletedTask;
                    }
                };
            });
        }

        /// <summary>
        /// Configures the MVC server pages on Server format "cshtml" 
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureServerWebPages(ref IServiceCollection services) {

            if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) {

                //services.AddIdentityCore<PagesIdentityUser>().AddUserStore<PagesIdentityUser>()
                //    .AddDefaultTokenProviders().AddClaimsPrincipalFactory<PagesClaimsFactory>();
                //services.AddScoped<IUserClaimsPrincipalFactory<PagesIdentityUser>, PagesClaimsFactory>();

                services.AddMvc().AddRazorPagesOptions(opt => {
                    opt.RootDirectory = "/ServerCorePages";
                });
                //services.AddRazorPages(); 
            }

            if (ServerConfigSettings.ServerMvcWebPagesEngineEnabled) {
                services.AddMvc(options => {
                    options.EnableEndpointRouting = false;
                    options.AllowEmptyInputInBodyModelBinding = true;
                });
            }
        }

        /// <summary>
        /// Server core: Configures LetsEncrypt using.
        /// Certificate will be saved in DataPath
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureLetsEncrypt(ref IServiceCollection services) {
            if (ServerConfigSettings.ConfigServerGetLetsEncrypt) { 
                services.AddLettuceEncrypt( option => {
                    List<string> domainList = ServerConfigSettings.ConfigCertificateDomain.Contains(',') 
                    ? ServerConfigSettings.ConfigCertificateDomain.Split(',').ToList() 
                    : ServerConfigSettings.ConfigCertificateDomain.Split(';').ToList();

                    domainList.ForEach(domain => { if (string.IsNullOrWhiteSpace(domain)) domainList.Remove(domain); });
                    option.DomainNames = domainList.ToArray();
                    option.EmailAddress = ServerConfigSettings.EmailerServiceEmailAddress;
                    option.AcceptTermsOfService = true;
                }).PersistDataToDirectory(new DirectoryInfo(Path.Combine(BackendServer.ServerRuntimeData.Startup_path, BackendServer.ServerRuntimeData.DataPath)), ServerConfigSettings.ConfigCertificatePassword);
            }
        }

        /// <summary>
        /// Server core: Configures the WebSocket logger monitor.
        /// For multi monitoring and for Example Posibilities
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureWebSocketLoggerMonitor(ref IServiceCollection services) {
            if (ServerConfigSettings.ServerEnableWebSocketMonitor) { services.AddSingleton<ILoggerProvider, ServerCoreHelpers.WebSocketLogProvider>(); }
        }

        /// <summary>
        /// Server Core: Configure HTTP Client for work with third party API
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureThirdPartyApi(ref IServiceCollection services) {
            //services.AddHttpClient();
        }

        /// <summary>
        /// Server Core: Configure Custom Core Services
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureScopes(ref IServiceCollection services) {
            //services.AddScoped<IUserService, UserService>();
        }

        /// <summary>
        /// Server Core: Configure Custom Services
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDatabaseContext(ref IServiceCollection services) {
            if (BackendServer.ServerRuntimeData.DebugMode) {
                services.AddDatabaseDeveloperPageExceptionFilter();
            }
            services.AddDbContext<EASYDATACenterContext>(opt => opt.UseSqlServer(ServerConfigSettings.DatabaseConnectionString)
            .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
        }
    }
}