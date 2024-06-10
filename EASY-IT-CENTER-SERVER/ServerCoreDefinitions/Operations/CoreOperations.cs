﻿using EasyITCenter.ServerCoreWebPages;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.IdentityModel.Tokens;
using NUglify.Helpers;
using ServiceStack;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Mail;
using System.Runtime.InteropServices;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// Specific Server Core Operations Library
    /// </summary>
    public static class CoreOperations {


        //TODO CAN BE INSERTED CUSTOM KEYS FOR Machines o Other HERE WILL BE VALIDATED: NEW AGENDA 
        public static HttpContext IncludeCookieTokenToRequest(HttpContext context) {
            ServerWebPagesToken? serverWebPagesToken = null;
            string token = context.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;

            if (token == null && context.Request.Headers.Authorization.ToString().Length > 0) { token = context.Request.Headers.Authorization.ToString().Substring(7); }
            if (token != null) {
                serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(token);
                if (serverWebPagesToken.IsValid) {
                    context.User.AddIdentities(serverWebPagesToken.UserClaims.Identities);
                    try { context.Items.Add(new KeyValuePair<object, object>("ServerWebPagesToken", serverWebPagesToken)); } catch { } }
            }
            return context;
        }

        /// <summary>
        /// Selection Layout Between Static File / MarkDown / Or Portal
        /// Resolve Routing Logic Layout Selection 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public static HttpContext ChechUrlRequestValidOrAuthorized(HttpContext context) {
            RouteLayoutTypes routeLayout = RouteLayoutTypes.EmptyLayout; RoutingActionTypes routingResult = RoutingActionTypes.None;
            string routePath = context.Request.Path.ToString().ToLower(); string? validPath = null;
            try {

                /*301,302,404 Ignore Files*/
                if (context.Response.StatusCode != StatusCodes.Status200OK && context.Request.Path.ToString().Split("/").Last().Contains(".")) {
                    routeLayout = RouteLayoutTypes.EmptyLayout; validPath = routePath; routingResult = RoutingActionTypes.Return;
                }

                //Check Server Module
                ServerModuleAndServiceList serverModule = DbOperations.CheckDefinedWebPageExists(routePath);
                if (serverModule != null) {
                    if (context.Items.FirstOrDefault(a => a.Key.ToString() == "ServerModule").Value != null) { context.Items.Remove("ServerModule"); }
                    try { context.Items.Add(new KeyValuePair<object, object>("ServerModule", serverModule)); } catch { }

                    string? userRole = context.User.Claims?.FirstOrDefault(a => a.Type.ToString() == ClaimTypes.Role.ToString())?.Value;
                    if (!serverModule.RestrictedAccess
                        || (serverModule.RestrictedAccess && userRole != null && serverModule.AllowedRoles != null && serverModule.AllowedRoles.Split(",").ToList().Contains(userRole))) {
                        /*Go To Server Module*/
                        routeLayout = RouteLayoutTypes.ServerModulesLayout; validPath = routePath; routingResult = RoutingActionTypes.Return;
                    } else if (serverModule.RestrictedAccess && (userRole == null || userRole != null && (string.IsNullOrWhiteSpace(serverModule.AllowedRoles) ||
                        (!string.IsNullOrWhiteSpace(serverModule.AllowedRoles) && !serverModule.AllowedRoles.Split(",").ToList().Contains(userRole))))) {
                        ServerModuleAndServiceList? loginmodule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                        if (context.Items.FirstOrDefault(a => a.Key.ToString() == "LoginModule").Value != null) { context.Items.Remove("LoginModule"); }
                        try { context.Items.Add(new KeyValuePair<object, object?>("LoginModule", loginmodule)); } catch { }
                        try { if (serverModule.UrlSubPath != null) { context.Response.Cookies.Append("RequestedModulePath", serverModule.UrlSubPath); } } catch { }
                    }
                    routeLayout = RouteLayoutTypes.ServerModulesLayout;
                    if (routePath != "/ServerModules") { validPath = "/ServerModules"; routingResult = RoutingActionTypes.Next;
                    } else { validPath = routePath; routingResult = RoutingActionTypes.Return; }
                }

                #region Solve Controlled Static Files
                //Startup Redirect To Static File
                if (validPath == null && context.Response.StatusCode == StatusCodes.Status200OK && routePath == "/"
                    && routePath != ServerConfigSettings.RedirectPath && ServerConfigSettings.RedirectOnPageNotFound && ServerConfigSettings.RedirectPath.ToLower() != "/portal") {
                    routeLayout = RouteLayoutTypes.StaticFileLayout; /*enable change for md */ routePath = ServerConfigSettings.RedirectPath; routingResult = RoutingActionTypes.Next;
                }


                //Check Portal Startup Or Id Or MenuName //Here check Menu Items
                try {
                    int webMenuId = 0; webMenuId = int.TryParse(routePath.Split("/").Last().Split("-")[0], out int checkInt) ? checkInt : 0;
                    if (
                        /*Portal started*/ (routePath == "/" && ServerConfigSettings.RedirectOnPageNotFound && ServerConfigSettings.RedirectPath.ToLower() == "/portal") || routePath == "/portal" ||
                        /*Portal run*/ (new EasyITCenterContext().WebMenuLists.Where(a => a.Id == webMenuId || a.Name.ToLower() == routePath.Substring(1)).Any())
                    ) { routeLayout = RouteLayoutTypes.PortalLayout; validPath = ServerConfigSettings.RedirectPath; routingResult = RoutingActionTypes.Next; }
                } catch { }
                #endregion

                //Check Server Defined Modules
                //TODO vytvořit agendu nastroju a k nim templaty v ni budou i editory a nastroje Kazdy Layout bude mit svoji Page
                if (validPath == null && routePath.StartsWith("/server-web/github", StringComparison.OrdinalIgnoreCase)) { routeLayout = RouteLayoutTypes.GitHubLayout; validPath = routePath; routingResult = RoutingActionTypes.Return; }
                if (validPath == null && routePath.StartsWith("/easydata", StringComparison.OrdinalIgnoreCase)) { routeLayout = RouteLayoutTypes.MetroLayout; validPath = routePath; routingResult = RoutingActionTypes.Return; }


                //Check DocPortal index.md Type EveryTime
                if (ServerConfigSettings.EnableAutoShowStaticMdAsHtml) {
                    if ((routePath.EndsWith("/") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + "index.md"))
                        || (!routePath.EndsWith("/") && !context.Request.Path.ToString().Split("/").Last().Contains(".") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + Path.DirectorySeparatorChar + "index.md"))
                        ) {
                        validPath = File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + "index.md") ? routePath + "index.md" : routePath + "/index.md";
                        routeLayout = RouteLayoutTypes.DocPortalLayout; routingResult = RoutingActionTypes.Next;
                    }
                }

                //Check MarkDown Type missing .md for Show in Markdown Layout
                if (ServerConfigSettings.EnableAutoShowStaticMdAsHtml) {
                    if (!routePath.EndsWith("/") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + ".md")) { validPath = routePath + ".md"; routeLayout = RouteLayoutTypes.ViewerMarkDownFileLayout; routingResult = RoutingActionTypes.Next; }
                }


                //Check Report By extension '.frx' for Show
                if (routePath.EndsWith(".frx") || routePath.EndsWith(".fpx")) { routeLayout = RouteLayoutTypes.ViewerReportFileLayout; validPath = routePath; routingResult = RoutingActionTypes.Next; }


                //Check Html By missing '.html' for Open In HTML Editor
                if (!routePath.EndsWith("/") && !context.Request.Path.ToString().Split("/").Last().Contains(".") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + ".html")) { routeLayout = RouteLayoutTypes.EditorHtmlFileLayout; validPath = routePath + ".html"; routingResult = RoutingActionTypes.Next; }


                //Check Index.html & Html file
                if (validPath == null) {
                    if (routePath.EndsWith(".html") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath))) {
                        routeLayout = RouteLayoutTypes.StaticFileLayout; validPath = routePath; routingResult = RoutingActionTypes.Next;
                    }

                    if ((routePath.EndsWith("/") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + "index.html"))
                        || (!routePath.EndsWith("/") && !context.Request.Path.ToString().Split("/").Last().Contains(".") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + Path.DirectorySeparatorChar + "index.html"))
                        ) {
                        if (!routePath.ToLower().EndsWith(".html")) {
                            validPath = !routePath.ToLower().EndsWith(".html") && !routePath.ToLower().EndsWith("index") && !routePath.EndsWith('/')
                            ? routePath + "/index.html" : routePath + "index.html";
                            routeLayout = RouteLayoutTypes.StaticFileLayout; routingResult = RoutingActionTypes.Next;
                        }
                    }
                }

                //Any Validation Founded
                if (validPath == null && context.Items.FirstOrDefault(a => a.Key.ToString() == "ComandType").Value == null) {
                    routeLayout = DataOperations.GenericToEnum<RouteLayoutTypes>(DbOperations.CheckDefinedWebPageExists("/DefaultWebPages/404NonExistPage").InheritedLayoutType);
                    validPath = "/ServerControls/404NonExistPage"; routingResult = RoutingActionTypes.Next;
                }
            } catch (Exception Ex) {
                routeLayout = RouteLayoutTypes.PortalLayout; validPath = routePath; routingResult = RoutingActionTypes.Return;
                CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) });
            }

            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "RouteLayoutTypes").Value == null) { context.Items.Add("RouteLayoutTypes", routeLayout); }
            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value == null) { context.Items.Add("FileValidUrl", validPath); }
            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "ComandType").Value != null) { context.Items.Remove("ComandType"); context.Items.Add("ComandType", RoutingActionTypes.Return); }
            else { context.Items.Add("ComandType", routingResult); }

            return context;
        }




        /// <summary>
        /// Sends the mass mail.
        /// </summary>
        /// <param name="mailRequests">The mail requests.</param>
        public static void SendMassEmail(List<SendMailRequest> mailRequests) {
            mailRequests.ForEach(mailRequest => { SendEmail(mailRequest, true); });
        }

        /// <summary>
        /// System Mailer sending Emails To service email with detected fail for analyze and
        /// corrections on the Way provide better services every time !!! This You can implement
        /// everywhere, !!! In Debug mode is written to Console, in Release will be sent email Empty
        /// Sender And Recipients set email for Service Recipient
        /// </summary>
        /// <param name="mailRequest">    </param>
        /// <param name="sendImmediately"></param>
        public static string SendEmail(SendMailRequest mailRequest, bool sendImmediately = false) {
            try {
                if ((!ServerRuntimeData.DebugMode && !ServerConfigSettings.ConfigLogWarnPlusToDbEnabled) || sendImmediately) {
                    if (ServerConfigSettings.ServiceCoreCheckerEmailSenderActive || sendImmediately) {
                        MailMessage Email = new() { From = new MailAddress(mailRequest.Sender ?? ServerConfigSettings.EmailerSMTPLoginUsername) };

                        if (mailRequest.Recipients != null && mailRequest.Recipients.Any()) { mailRequest.Recipients.ForEach(email => { Email.To.Add(email); }); }
                        else { Email.To.Add(ServerConfigSettings.EmailerServiceEmailAddress); }

                        Email.Subject = mailRequest.Subject ?? ServerConfigSettings.ConfigCoreServerRegisteredName;
                        Email.Body = mailRequest.Content;
                        Email.IsBodyHtml = true;

                        SmtpClient MailClient = new(ServerConfigSettings.EmailerSMTPServerAddress, ServerConfigSettings.EmailerSMTPPort) {
                            Credentials = new NetworkCredential(ServerConfigSettings.EmailerSMTPLoginUsername, ServerConfigSettings.EmailerSMTPLoginPassword),
                            EnableSsl = ServerConfigSettings.EmailerSMTPSslIsEnabled,
                            Host = ServerConfigSettings.EmailerSMTPServerAddress,
                            Port = ServerConfigSettings.EmailerSMTPPort
                        };
                        MailClient.Timeout = 5000;
                        MailClient.SendAsync(Email, Guid.NewGuid().ToString());
                    }
                }
                else {
                    if (ServerConfigSettings.ConfigLogWarnPlusToDbEnabled && mailRequest.Content != null &&
                        !ServerRuntimeData.ServerRestartRequest && ServerRuntimeData.ServerCoreStatus == ServerStatusTypes.Running.ToString()) {
                        SolutionFailList SolutionFailList = new SolutionFailList() { UserId = null, Source = "Server", Message = mailRequest.Content, LogLevel = null, UserName = null };
                        new EasyITCenterContext().SolutionFailLists.Add(SolutionFailList).Context.SaveChanges();
                        Console.WriteLine(mailRequest.Content); Debug.WriteLine(mailRequest.Content);
                    }
                }
                return DBResult.success.ToString();
            } catch (Exception ex) {
                return DBResult.error.ToString();
            }
        }

        /// <summary>
        /// Gets the self signed certificate For API Security HTTPS.
        /// </summary>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        public static X509Certificate2 GetSelfSignedCertificate(string password) {
            var commonName = ServerConfigSettings.ConfigCertificateDomain;
            var rsaKeySize = 2048;
            var years = 10;
            var hashAlgorithm = HashAlgorithmName.SHA256;

            using (var rsa = RSA.Create(rsaKeySize)) {
                var request = new CertificateRequest($"cn={commonName}", rsa, hashAlgorithm, RSASignaturePadding.Pkcs1);

                SubjectAlternativeNameBuilder subjectAlternativeNameBuilder = new();
                subjectAlternativeNameBuilder.AddDnsName(Assembly.GetExecutingAssembly().GetName().FullName);

                X509BasicConstraintsExtension extension = new();

                request.CertificateExtensions.Add(
                  new X509KeyUsageExtension(X509KeyUsageFlags.DataEncipherment | X509KeyUsageFlags.KeyEncipherment | X509KeyUsageFlags.DigitalSignature | X509KeyUsageFlags.KeyCertSign, false)
                );

                request.CertificateExtensions.Add(
                  new X509EnhancedKeyUsageExtension(
                    new OidCollection { new Oid("1.3.6.1.5.5.7.3.1"), new Oid("1.3.6.1.5.5.7.3.2") }, false)
                );

                var notAfter = DateTimeOffset.Now.AddYears(years);
                var certificate = request.CreateSelfSigned(DateTimeOffset.Now.AddDays(-1), notAfter);
                if (GetOperatingSystemInfo.IsWindows()) { certificate.FriendlyName = Assembly.GetExecutingAssembly().GetName().FullName; }

                try { //Saving Autogenerate Certificate
                    byte[] exportedData = certificate.Export(X509ContentType.Pfx, password);
                    File.WriteAllBytes(System.IO.Path.Combine(ServerRuntimeData.Startup_path, ServerRuntimeData.DataPath, "ServerAutoCertificate.pfx"), exportedData);
                } catch { }

                return new X509Certificate2(certificate.Export(X509ContentType.Pfx, password), password, X509KeyStorageFlags.Exportable);
            }
        }

        /// <summary>
        /// Set Imported Certificate from file on Server for Https File must has Valid path from
        /// Startup Data Path
        /// </summary>
        /// <returns></returns>
        public static X509Certificate2 GetSelfSignedCertificateFromFile(string FileNameFromDataPath) {
            byte[]? certificate = null;
            string? password = null;
            try {
                certificate = File.ReadAllBytes(System.IO.Path.Combine(ServerRuntimeData.Startup_path, ServerRuntimeData.DataPath, FileNameFromDataPath));
                password = ServerConfigSettings.ConfigCertificatePassword;
                return new X509Certificate2(certificate, password);
            } catch (Exception Ex) { SendEmail(new SendMailRequest() { Content = "Incorrect Certificate Path or Password, " + DataOperations.GetSystemErrMessage(Ex) }); }
            return GetSelfSignedCertificate(ServerConfigSettings.ConfigCertificatePassword);
        }

        /// <summary>
        /// Calls the GET API URL with string Response
        /// </summary>
        /// <param name="url">The URL.</param>
        /// <returns></returns>
        public static async Task<string> CallGetApiUrl(string url) {
            HttpClient httpClient = new HttpClient();
            return await httpClient.GetStringAsync(url);
        }

        /// <summary>
        /// Server Function For Running External Processes
        /// </summary>
        /// <param name="processDefinition">The process definition.</param>
        /// <returns></returns>
        public async static Task<string> RunSystemProcess(RunProcessRequest processDefinition) {
            string resultOutput = "", resultError = "";

            try {
                using (Process proc = new Process()) {
                    proc.StartInfo.FileName = processDefinition.Command;
                    if (GetOperatingSystemInfo.IsWindows()) { proc.StartInfo.WorkingDirectory = processDefinition.WorkingDirectory + "\\" ?? null; }
                    proc.StartInfo.Arguments = processDefinition.Arguments ?? null;
                    //proc.StartInfo.LoadUserProfile = false;
                    proc.StartInfo.CreateNoWindow = true;
                    proc.StartInfo.UseShellExecute = false;
                    proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                    proc.StartInfo.RedirectStandardOutput = true;
                    proc.StartInfo.RedirectStandardError = true;
                    proc.StartInfo.Verb = (Environment.OSVersion.Version.Major >= 6) ? "runas" : "";
                    proc.Start();

                    resultOutput += proc.StandardOutput.ReadToEndAsync();
                    resultError += proc.StandardError.ReadToEndAsync();

                    if (processDefinition.WaitForExit) {
                        await proc.WaitForExitAsync();
                        return resultOutput + Environment.NewLine + resultError;
                    }
                    else { return resultOutput + Environment.NewLine + resultError; }
                }

            } catch (Exception ex) { resultError += ex.StackTrace + Environment.NewLine + ex.Message;
                CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(ex) });
            }
            return resultOutput + Environment.NewLine + resultError;
        }

        /// <summary>
        /// Server Token Validation Parameters definition For Api is Used if is ON/Off for Api is On everyTime
        /// </summary>
        /// <returns></returns>
        public static TokenValidationParameters ValidAndGetTokenParameters() {
            return new TokenValidationParameters {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(ServerConfigSettings.ConfigJwtLocalKey)),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = ServerConfigSettings.ConfigTimeTokenValidationEnabled,
                ClockSkew = TimeSpan.FromMinutes(ServerConfigSettings.ConfigApiTokenTimeoutMin),
            };
        }

        /// <summary>
        /// Token Validator Extension For Server WebPages
        /// </summary>
        /// <param name="tokenString">The token string.</param>
        /// <returns></returns>
        public static ServerWebPagesToken CheckTokenValidityFromString(string tokenString) {
            try {
                JwtSecurityTokenHandler? tokenForChek = new JwtSecurityTokenHandler();
                ClaimsPrincipal userClaims = tokenForChek.ValidateToken(tokenString, ValidAndGetTokenParameters(), out SecurityToken refreshedToken);
                ServerWebPagesToken validation = new() { Data = new() { { "Token", tokenString } }, UserClaims = userClaims, stringToken = tokenString, Token = refreshedToken, IsValid = refreshedToken != null, userRole = userClaims.FindFirstValue(ClaimTypes.Role) };
                return validation;
            } catch { }
            return new ServerWebPagesToken();
        }


        /// <summary>
        /// Extension For Checking Operation System of Server Running
        /// </summary>
        public static class GetOperatingSystemInfo {
            public static bool IsWindows() => RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            public static bool IsMacOS() => RuntimeInformation.IsOSPlatform(OSPlatform.OSX);
            public static bool IsLinux() => RuntimeInformation.IsOSPlatform(OSPlatform.Linux);
        }


        /// <summary>
        /// Scan Registered Routes List
        /// You Can Check Pfysical API Path
        /// Data are stored in ServerRuntimeData.ServerRegisteredRoutesList
        /// </summary>
        /// <param name="patchForCheck"></param>
        /// <param name="updateList"></param>
        public static bool GetServerRegisteredRoutesList(string patchForCheck, bool updateList = false) {
            try {
                if (updateList || ServerRuntimeData.ServerRegisteredRoutesList == null) { //a=>a.AttributeRouteInfo.Name action
                    var RouteGroups = ((IReadOnlyList<ActionDescriptor>)ServerRuntimeData.ActionRouterProvider.ActionDescriptors.Items).GroupBy(a => a.AttributeRouteInfo?.Template).ToJson();

                    
                    ServerRuntimeData.ServerRegisteredRoutesList = ServerRuntimeData.ActionRouterProvider.ActionDescriptors.Items.ToArray().ToList();
                    //.Select(a => a.JoinAsString("/")).ToList();

                    return RouteGroups.Contains(patchForCheck);
                }
            } catch { }
            return false;
        }
    }
}