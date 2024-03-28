using LicenseVerify;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NuGet.Packaging;
using System.Runtime.InteropServices;

[assembly: AssemblyVersion("2.0.*")]

namespace EasyITCenter {

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
                CheckLicense();
                ServerRuntimeData.ServerCancelToken = new CancellationTokenSource();
                FileOperations.LoadOrCreateSettings();

                var hostBuilder = BuildWebHost(ServerRuntimeData.ServerArgs);
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) {
                    hostBuilder.UseWindowsService(options => {
                        options.ServiceName = ServerConfigSettings.ConfigCoreServerRegisteredName;
                    });
                }

                //Load StartupDBdata
                if (ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials) ServerStartupDbDataLoading();

                //Start Server
                await hostBuilder.Build().RunAsync(ServerRuntimeData.ServerCancelToken.Token);
            } catch (Exception Ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
        }

        /// <summary>
        /// Final Preparing Server HostBuilder Definition Exit 10 Is missing or Format Problem with
        /// Configuration File
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        private static IHostBuilder BuildWebHost(string[] args) {
            try {
                LoadConfigurationFromFile();
                LoadConfigurationFromDb();
            } catch (Exception ex) {
                CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(ex) });
                Environment.Exit(10);
            }
            
            return Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => {
                if (ServerConfigSettings.ConfigServerStartupOnHttps) {
                    webBuilder.ConfigureKestrel(options => {
                        options.AddServerHeader = true;

                        //TODO umoznuje naslouchat i na více portech soucasne
                        //options.ListenAnyIP(500);
                        options.ListenAnyIP(ServerConfigSettings.ConfigServerStartupHttpsPort, opt => {
                            opt.Protocols = HttpProtocols.Http1AndHttp2;
                            opt.KestrelServerOptions.AllowAlternateSchemes = true;

                            if (!ServerConfigSettings.ConfigServerGetLetsEncrypt) {
                                opt.UseHttps(ServerConfigSettings.ConfigCertificatePath.Length > 0
                                    ? CoreOperations.GetSelfSignedCertificateFromFile(ServerConfigSettings.ConfigCertificatePath)
                                        : CoreOperations.GetSelfSignedCertificate(ServerConfigSettings.ConfigCertificatePassword),
                                      httpsOptions => {
                                          httpsOptions.SslProtocols = System.Security.Authentication.SslProtocols.Tls12 | System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls | System.Security.Authentication.SslProtocols.Ssl2 | System.Security.Authentication.SslProtocols.Ssl3;
                                          httpsOptions.ClientCertificateMode = ClientCertificateMode.NoCertificate;
                                          httpsOptions.AllowAnyClientCertificate();
                                      });
                            }
                            //if (ServerRuntimeData.DebugMode) { opt.UseConnectionLogging(); }
                        });
                    });
                }
                
                webBuilder.UseWebRoot(ServerConfigSettings.DefaultStaticWebFilesFolder);
                webBuilder.UseStaticWebAssets();
                webBuilder.UseStartup<Startup>();

                //TODO umoznuje naslouchat na vice portech soucasne i s ruznymi protokoly 
                //webBuilder.UseUrls(new string[] { "http://*:5000", "https://*:5001" });

                if (ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS) {
                    webBuilder.UseUrls($"https://*:{ServerConfigSettings.ConfigServerStartupHttpsPort}",$"http://*:{ServerConfigSettings.ConfigServerStartupHttpPort}");
                }
                else {
                    webBuilder.UseUrls(ServerConfigSettings.ConfigServerStartupOnHttps ? $"https://*:{ServerConfigSettings.ConfigServerStartupHttpsPort}" : $"http://*:{ServerConfigSettings.ConfigServerStartupHttpPort}");
                }
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
        /// Server Startup DB Data loading for minimize DB Connect TO Frequency Dials Without
        /// Changes With Full Auto Filling Non Exist Records
        /// Example: LanguageList
        /// </summary>
        private static void ServerStartupDbDataLoading() { DbOperations.LoadOrRefreshStaticDbDials(); }

        /// <summary>
        /// Checking Valid License on StartUp
        /// </summary>
        private static void CheckLicense() {
            bool licenseStatus = LicenseControlller.VerifyLicense(out LicenseData licenseModel, true);
            if (string.IsNullOrEmpty(licenseModel.Status)) { Console.WriteLine("Missing License file in \"Data\" folder"); }
            Console.WriteLine("License Info: " + JsonSerializer.Serialize(licenseModel));
            if (!licenseStatus) { Console.WriteLine("Server will be in 30 second ShutDown"); Thread.Sleep(30 * 1000); Environment.Exit(5); }
        }

        /// <summary>
        /// Server Core: Load Configuration From Config File In Startup Folder/Data/config.json
        /// </summary>
        private static void LoadConfigurationFromFile() {
            try {
                //Load From Config File
                string json = File.ReadAllText(Path.Combine(ServerRuntimeData.Setting_folder, ServerRuntimeData.ConfigFile), FileOperations.FileDetectEncoding(Path.Combine(ServerRuntimeData.Setting_folder, ServerRuntimeData.ConfigFile)));
                Dictionary<string, object> exportServerSettingList = new Dictionary<string, object>();
                exportServerSettingList.AddRange(JsonSerializer.Deserialize<Dictionary<string, object>>(json).ToList());

                exportServerSettingList.ToList().ForEach(configItem => {
                    foreach (PropertyInfo property in _serverConfigSettings.GetType().GetProperties()) {
                        if (configItem.Key == property.Name) {
                            try { property.SetValue(_serverConfigSettings, Convert.ChangeType(configItem.Value.ToString(), property.GetValue(ServerConfigSettings).GetType())); } catch { }
                        }
                    }
                });
            } catch (Exception ex) {
                CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(ex) }, true);
                Environment.Exit(10);
            }
        }

        /// <summary>
        /// Server Core: Load Configuration From Database First Must be From File With DB
        /// Connection, Others File Settings than DBconnection is Optional
        /// </summary>
        private static void LoadConfigurationFromDb() {
            try {
                //Load Configuration From Database
                List<ServerSettingList> ConfigData = new EasyITCenterContext().ServerSettingLists.ToList();
                foreach (PropertyInfo property in _serverConfigSettings.GetType().GetProperties()) {
                    if (ConfigData.FirstOrDefault(a => a.Key == property.Name) != null) {
                        property.SetValue(_serverConfigSettings, Convert.ChangeType(ConfigData.First(a => a.Key == property.Name).Value, property.PropertyType), null);
                    }
                }
            } catch (Exception ex) {
                CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(ex) });
                Environment.Exit(20);
            }
        }
    }
}