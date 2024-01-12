using LicenseSHOPER.DBModel;
using NuGet.Packaging;

[assembly: AssemblyVersion("2.0.*")]
namespace EASYDATACenter {

    /// <summary>
    /// Server Main Definition Starting Point Of Project
    /// </summary>
    public class BackendServer {
        private static ServerConfigSettings _serverConfigSettings = new();
        private static readonly ServerRuntimeData _serverRuntimeData = new();
        internal static readonly string SwaggerModuleDescription = "Full Backend Server DB & API & WebSocket model";

        /// <summary>
        /// Startup Server Initialization Server Setting Data
        /// </summary>
        public static readonly ServerConfigSettings ServerConfigSettings = _serverConfigSettings;

        /// <summary>
        /// Startup Server Initialization Server Runtime Data
        /// </summary>
        public static readonly ServerRuntimeData ServerRuntimeData = _serverRuntimeData;

        /// <summary>
        /// Server Startup Process
        /// </summary>
        /// <param name="args"></param>
        public static async Task Main(string[] args) {
            ServerRuntimeData.ServerArgs = args;

            await StartServer();

            //Restart Server Control
            while (ServerRuntimeData.ServerRestartRequest) {
                ServerRuntimeData.ServerRestartRequest = false;
                await StartServer();
            }
        }


        /// <summary>
        /// Server Restart Controller
        /// </summary>
        public static void RestartServer() {
            ServerRuntimeData.ServerRestartRequest = true;
            ServerRuntimeData.ServerCancelToken.Cancel();
        }

        /// <summary>
        /// Server Start Controller
        /// </summary>
        private static async Task StartServer() {

            try {
                ServerRuntimeData.ServerCancelToken = new CancellationTokenSource();

                var hostBuilder = BuildWebHost(ServerRuntimeData.ServerArgs);
                hostBuilder.UseWindowsService(options => {
                    options.ServiceName = ServerConfigSettings.SpecialServerServiceName;
                });

                //Load StartupDBdata
                if (ServerConfigSettings.SpecialUseDbLocalAutoupdatedDials) ServerStartupDbDataLoading();

                //Start Server
                await hostBuilder.Build().RunAsync(ServerRuntimeData.ServerCancelToken.Token);
            } catch (Exception Ex) { ServerCoreFunctions.SendEmail(new MailRequest() { Content = ServerCoreFunctions.GetSystemErrMessage(Ex) }); }
        }


        /// <summary>
        /// Final Preparing Server HostBuilder Definition
        /// Exit 10 Is missing or Format Problem with Configuration File
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        private static IHostBuilder BuildWebHost(string[] args) {
            //Load Configuration File/DB
            try {
                ServerCoreFunctions.LoadSettings();
                string json = File.ReadAllText(Path.Combine(ServerRuntimeData.Setting_folder, ServerRuntimeData.ConfigFile), ServerCoreFunctions.FileDetectEncoding(Path.Combine(ServerRuntimeData.Setting_folder, ServerRuntimeData.ConfigFile)));

                Dictionary<string, object> exportServerSettingList = new Dictionary<string, object>();
                exportServerSettingList.AddRange(JsonSerializer.Deserialize<Dictionary<string, object>>(json).ToList());

                exportServerSettingList.ToList().ForEach(configItem => {
                    foreach (PropertyInfo property in _serverConfigSettings.GetType().GetProperties()) {
                        if (configItem.Key == property.Name) {
                            try { property.SetValue(_serverConfigSettings, Convert.ChangeType(configItem.Value.ToString(), property.GetValue(ServerConfigSettings).GetType())); } catch { }
                        }
                    }
                });

                //Load Configuration From Database
                List<ServerSetting> ConfigData = new LicenseSHOPERContext().ServerSettings.ToList();
                foreach (PropertyInfo property in _serverConfigSettings.GetType().GetProperties()) {
                    if (ConfigData.FirstOrDefault(a => a.Key == property.Name) != null)
                        property.SetValue(_serverConfigSettings, Convert.ChangeType(ConfigData.First(a => a.Key == property.Name).Value, property.PropertyType), null);
                }
            } catch (Exception ex) {
                ServerCoreFunctions.SendEmail(new MailRequest() { Content = ServerCoreFunctions.GetSystemErrMessage(ex) });
                Environment.Exit(10);
            }

            return Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => {

                if (ServerConfigSettings.ConfigServerStartupOnHttps) {
                    webBuilder.ConfigureKestrel(options => {
                        options.ListenAnyIP(ServerConfigSettings.ConfigServerStartupPort, opt => {
                            opt.Protocols = HttpProtocols.Http1AndHttp2;
                            opt.KestrelServerOptions.AllowAlternateSchemes = true;

                            if (!ServerConfigSettings.ConfigServerGetLetsEncrypt) {
                                opt.UseHttps(ServerCoreFunctions.GetSelfSignedCertificate(ServerConfigSettings.ConfigCertificatePassword), httpsOptions => {
                                    httpsOptions.SslProtocols = System.Security.Authentication.SslProtocols.Tls12 | System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls | System.Security.Authentication.SslProtocols.Ssl2 | System.Security.Authentication.SslProtocols.Ssl3;
                                    httpsOptions.ClientCertificateMode = ClientCertificateMode.NoCertificate;
                                    httpsOptions.AllowAnyClientCertificate();
                                });
                            }
                            //opt.UseConnectionLogging();
                        });
                    });
                }

                webBuilder.UseStartup<Startup>();
                webBuilder.UseUrls(ServerConfigSettings.ConfigServerStartupOnHttps ? $"https://*:{ServerConfigSettings.ConfigServerStartupPort}" : $"http://*:{ServerConfigSettings.ConfigServerStartupPort}");
                
                if (ServerConfigSettings.ConfigServerStartupOnHttps && ServerConfigSettings.ConfigServerGetLetsEncrypt) {
                    webBuilder.UseKestrel(options => {
                        var appServices = options.ApplicationServices;

                        options.ConfigureHttpsDefaults(h => {
                            h.SslProtocols = System.Security.Authentication.SslProtocols.Tls12 | System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls | System.Security.Authentication.SslProtocols.Ssl2 | System.Security.Authentication.SslProtocols.Ssl3;
                            h.ClientCertificateMode = ClientCertificateMode.RequireCertificate;
                            h.UseLettuceEncrypt(appServices);
                        });
                    });
                }

            });
        }

        /// <summary>
        /// Server Startup DB Data loading for minimize DB Connect TO Frequency Dials Without Changes
        /// Example: LanguageList
        /// </summary>
        private static void ServerStartupDbDataLoading() {
            ServerCoreDbOperations.LoadStaticDbDials();
        }
    }
}