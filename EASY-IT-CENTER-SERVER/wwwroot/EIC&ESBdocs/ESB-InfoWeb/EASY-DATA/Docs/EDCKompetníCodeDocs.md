<a name='assembly'></a>
# EasyITCenter

## Contents

- [AuthenticateResponse](#T-EasyITCenter-ServerCoreDefinition-AuthenticateResponse 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse')
  - [Expiration](#P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Expiration 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse.Expiration')
  - [Id](#P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Id 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse.Id')
  - [Name](#P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Name 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse.Name')
  - [Role](#P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Role 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse.Role')
  - [Surname](#P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Surname 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse.Surname')
  - [Token](#P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Token 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse.Token')
- [BackendServer](#T-EasyITCenter-BackendServer 'EasyITCenter.BackendServer')
  - [ServerConfigSettings](#F-EasyITCenter-BackendServer-ServerConfigSettings 'EasyITCenter.BackendServer.ServerConfigSettings')
  - [ServerRuntimeData](#F-EasyITCenter-BackendServer-ServerRuntimeData 'EasyITCenter.BackendServer.ServerRuntimeData')
  - [BuildWebHost(args)](#M-EasyITCenter-BackendServer-BuildWebHost-System-String[]- 'EasyITCenter.BackendServer.BuildWebHost(System.String[])')
  - [Main(args)](#M-EasyITCenter-BackendServer-Main-System-String[]- 'EasyITCenter.BackendServer.Main(System.String[])')
  - [RestartServer()](#M-EasyITCenter-BackendServer-RestartServer 'EasyITCenter.BackendServer.RestartServer')
  - [ServerStartupDbDataLoading()](#M-EasyITCenter-BackendServer-ServerStartupDbDataLoading 'EasyITCenter.BackendServer.ServerStartupDbDataLoading')
  - [StartServer()](#M-EasyITCenter-BackendServer-StartServer 'EasyITCenter.BackendServer.StartServer')
- [CommunicationController](#T-EasyITCenter-ServerCoreDefinition-CommunicationController 'EasyITCenter.ServerCoreDefinition.CommunicationController')
  - [HttpContext](#P-EasyITCenter-ServerCoreDefinition-CommunicationController-HttpContext 'EasyITCenter.ServerCoreDefinition.CommunicationController.HttpContext')
  - [CheckAdmin()](#M-EasyITCenter-ServerCoreDefinition-CommunicationController-CheckAdmin 'EasyITCenter.ServerCoreDefinition.CommunicationController.CheckAdmin')
- [CustomFtpUser](#T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser')
  - [#ctor(name)](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-#ctor-System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.#ctor(System.String)')
  - [Name](#P-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-Name 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.Name')
  - [IsInGroup()](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-IsInGroup-System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.IsInGroup(System.String)')
- [CustomString](#T-EasyITCenter-ServerCoreDBSettings-CustomString 'EasyITCenter.ServerCoreDBSettings.CustomString')
- [DBResult](#T-EasyITCenter-ServerCoreDefinition-DBResult 'EasyITCenter.ServerCoreDefinition.DBResult')
- [DBResultMessage](#T-EasyITCenter-ServerCoreDefinition-DBResultMessage 'EasyITCenter.ServerCoreDefinition.DBResultMessage')
  - [ErrorMessage](#P-EasyITCenter-ServerCoreDefinition-DBResultMessage-ErrorMessage 'EasyITCenter.ServerCoreDefinition.DBResultMessage.ErrorMessage')
  - [InsertedId](#P-EasyITCenter-ServerCoreDefinition-DBResultMessage-InsertedId 'EasyITCenter.ServerCoreDefinition.DBResultMessage.InsertedId')
  - [RecordCount](#P-EasyITCenter-ServerCoreDefinition-DBResultMessage-RecordCount 'EasyITCenter.ServerCoreDefinition.DBResultMessage.RecordCount')
  - [Status](#P-EasyITCenter-ServerCoreDefinition-DBResultMessage-Status 'EasyITCenter.ServerCoreDefinition.DBResultMessage.Status')
- [DBWebApiResponses](#T-EasyITCenter-ServerCoreWebPages-DBWebApiResponses 'EasyITCenter.ServerCoreWebPages.DBWebApiResponses')
- [DatabaseContextExtensions](#T-EasyITCenter-ServerCoreDBSettings-DatabaseContextExtensions 'EasyITCenter.ServerCoreDBSettings.DatabaseContextExtensions')
- [EmailVerification](#T-EasyITCenter-ServerCoreWebPages-EmailVerification 'EasyITCenter.ServerCoreWebPages.EmailVerification')
- [ExpertDocApi](#T-EasyITCenter-Controllers-ExpertDocApi 'EasyITCenter.Controllers.ExpertDocApi')
  - [GetDocumentationGroupedList(id)](#M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList-System-Int32- 'EasyITCenter.Controllers.ExpertDocApi.GetDocumentationGroupedList(System.Int32)')
- [EasyITCenterContext](#T-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext 'EasyITCenter.ServerCoreDBSettings.EasyITCenterContext')
  - [GetApiUserId(httpContext)](#M-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext-GetApiUserId-Microsoft-AspNetCore-Http-HttpContext- 'EasyITCenter.ServerCoreDBSettings.EasyITCenterContext.GetApiUserId(Microsoft.AspNetCore.Http.HttpContext)')
  - [IsAdmin(httpContext)](#M-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext-IsAdmin-Microsoft-AspNetCore-Http-HttpContext- 'EasyITCenter.ServerCoreDBSettings.EasyITCenterContext.IsAdmin(Microsoft.AspNetCore.Http.HttpContext)')
- [EasyITCenterAuthenticationApi](#T-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi')
  - [Authenticate(username,password)](#M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-Authenticate-System-String,System-String- 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi.Authenticate(System.String,System.String)')
  - [LifetimeValidator(notBefore,expires,token,params)](#M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-LifetimeValidator-System-Nullable{System-DateTime},System-Nullable{System-DateTime},Microsoft-IdentityModel-Tokens-SecurityToken,Microsoft-IdentityModel-Tokens-TokenValidationParameters- 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi.LifetimeValidator(System.Nullable{System.DateTime},System.Nullable{System.DateTime},Microsoft.IdentityModel.Tokens.SecurityToken,Microsoft.IdentityModel.Tokens.TokenValidationParameters)')
  - [RefreshUserToken(username,token)](#M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-RefreshUserToken-System-String,EasyITCenter-ServerCoreDefinition-AuthenticateResponse- 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi.RefreshUserToken(System.String,EasyITCenter.ServerCoreDefinition.AuthenticateResponse)')
- [EasyITCenterBackendCheckApi](#T-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi 'EasyITCenter.ControllersExtensions.EasyITCenterBackendCheckApi')
  - [GetBackendCheckApi()](#M-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi-GetBackendCheckApi 'EasyITCenter.ControllersExtensions.EasyITCenterBackendCheckApi.GetBackendCheckApi')
- [HostedFtpServer](#T-EasyITCenter-ServerCoreServers-HostedFtpServer 'EasyITCenter.ServerCoreServers.HostedFtpServer')
  - [#ctor(ftpServerHost)](#M-EasyITCenter-ServerCoreServers-HostedFtpServer-#ctor-FubarDev-FtpServer-IFtpServerHost- 'EasyITCenter.ServerCoreServers.HostedFtpServer.#ctor(FubarDev.FtpServer.IFtpServerHost)')
  - [StartAsync()](#M-EasyITCenter-ServerCoreServers-HostedFtpServer-StartAsync-System-Threading-CancellationToken- 'EasyITCenter.ServerCoreServers.HostedFtpServer.StartAsync(System.Threading.CancellationToken)')
  - [StopAsync()](#M-EasyITCenter-ServerCoreServers-HostedFtpServer-StopAsync-System-Threading-CancellationToken- 'EasyITCenter.ServerCoreServers.HostedFtpServer.StopAsync(System.Threading.CancellationToken)')
- [HostedFtpServerMembershipProvider](#T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider')
  - [ValidateUser(username,password)](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUser-System-String,System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.ValidateUser(System.String,System.String)')
  - [ValidateUserAsync(username,password)](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUserAsync-System-String,System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.ValidateUserAsync(System.String,System.String)')
- [IdFilter](#T-EasyITCenter-ServerCoreDBSettings-IdFilter 'EasyITCenter.ServerCoreDBSettings.IdFilter')
- [MailRequest](#T-EasyITCenter-ServerCoreDefinition-MailRequest 'EasyITCenter.ServerCoreDefinition.MailRequest')
- [NameFilter](#T-EasyITCenter-ServerCoreDBSettings-NameFilter 'EasyITCenter.ServerCoreDBSettings.NameFilter')
- [OperatingSystem](#T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-OperatingSystem 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.OperatingSystem')
- [ProcessClass](#T-EasyITCenter-ServerCoreDefinition-ProcessClass 'EasyITCenter.ServerCoreDefinition.ProcessClass')
- [RobotsController](#T-EasyITCenter-ServerCoreDBSettings-RobotsController 'EasyITCenter.ServerCoreDBSettings.RobotsController')
- [ServerConfigSettings](#T-EasyITCenter-ServerCoreDefinition-ServerConfigSettings 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings')
  - [ConfigApiTokenTimeoutMin](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigApiTokenTimeoutMin 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigApiTokenTimeoutMin')
  - [ConfigCertificateDomain](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigCertificateDomain 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigCertificateDomain')
  - [ConfigCertificatePassword](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePassword 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigCertificatePassword')
  - [ConfigCertificatePath](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePath 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigCertificatePath')
  - [ConfigJwtLocalKey](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigJwtLocalKey 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigJwtLocalKey')
  - [ConfigMaxWebSocketBufferSizeKb](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigMaxWebSocketBufferSizeKb 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigMaxWebSocketBufferSizeKb')
  - [ConfigServerGetLetsEncrypt](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigServerGetLetsEncrypt 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigServerGetLetsEncrypt')
  - [ConfigServerStartupOnHttps](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupOnHttps 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigServerStartupOnHttps')
  - [ConfigServerStartupPort](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupPort 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigServerStartupPort')
  - [ConfigWebSocketTimeoutMin](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigWebSocketTimeoutMin 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ConfigWebSocketTimeoutMin')
  - [DatabaseConnectionString](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-DatabaseConnectionString 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.DatabaseConnectionString')
  - [DatabaseInternalCacheTimeoutMin](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCacheTimeoutMin 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.DatabaseInternalCacheTimeoutMin')
  - [DatabaseInternalCachingEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCachingEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.DatabaseInternalCachingEnabled')
  - [EmailerSMTPLoginPassword](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginPassword 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPLoginPassword')
  - [EmailerSMTPLoginUsername](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginUsername 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPLoginUsername')
  - [EmailerSMTPPort](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPPort 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPPort')
  - [EmailerSMTPServerAddress](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPServerAddress 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPServerAddress')
  - [EmailerSMTPSslIsEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPSslIsEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPSslIsEnabled')
  - [EmailerServiceEmailAddress](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerServiceEmailAddress 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.EmailerServiceEmailAddress')
  - [ModuleDataManagerEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleDataManagerEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ModuleDataManagerEnabled')
  - [ModuleDbDiagramGeneratorEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleDbDiagramGeneratorEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ModuleDbDiagramGeneratorEnabled')
  - [ModuleHealthServiceEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ModuleHealthServiceEnabled')
  - [ModuleHealthServiceRefreshIntervalSec](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceRefreshIntervalSec 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ModuleHealthServiceRefreshIntervalSec')
  - [ModuleMdDocumentationEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleMdDocumentationEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ModuleMdDocumentationEnabled')
  - [ModuleSwaggerApiDocEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleSwaggerApiDocEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ModuleSwaggerApiDocEnabled')
  - [ServerEnableWebSocketMonitor](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerEnableWebSocketMonitor 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerEnableWebSocketMonitor')
  - [ServerFtpEngineEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerFtpEngineEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerFtpEngineEnabled')
  - [ServerFtpSecurityEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerFtpSecurityEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerFtpSecurityEnabled')
  - [ServerJsWebPagesEngineEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerJsWebPagesEngineEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerJsWebPagesEngineEnabled')
  - [ServerJsWebStartupCommand](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerJsWebStartupCommand 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerJsWebStartupCommand')
  - [ServerMvcWebPagesEngineEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerMvcWebPagesEngineEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerMvcWebPagesEngineEnabled')
  - [ServerRazorWebPagesEngineEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerRazorWebPagesEngineEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerRazorWebPagesEngineEnabled')
  - [ServerTimeTokenValidationEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerTimeTokenValidationEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerTimeTokenValidationEnabled')
  - [ServerWebBrowserEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerWebBrowserEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerWebBrowserEnabled')
  - [ServerWebSocketEngineEnabled](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerWebSocketEngineEnabled 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.ServerWebSocketEngineEnabled')
  - [SpecialCoreCheckerEmailSenderActive](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialCoreCheckerEmailSenderActive 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.SpecialCoreCheckerEmailSenderActive')
  - [SpecialEnableMassEmail](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialEnableMassEmail 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.SpecialEnableMassEmail')
  - [SpecialServerLanguage](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialServerLanguage 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.SpecialServerLanguage')
  - [SpecialServerServiceName](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialServerServiceName 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.SpecialServerServiceName')
  - [SpecialUseDbLocalAutoupdatedDials](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialUseDbLocalAutoupdatedDials 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.SpecialUseDbLocalAutoupdatedDials')
  - [SpecialUserWebRootPath](#P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialUserWebRootPath 'EasyITCenter.ServerCoreDefinition.ServerConfigSettings.SpecialUserWebRootPath')
- [ServerConfigurationServices](#T-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices')
  - [ConfigureAuthentication(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureAuthentication-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureAuthentication(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureControllers(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureControllers-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureControllers(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureCookie(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCookie-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureCookie(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureDatabaseContext(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureDatabaseContext-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureDatabaseContext(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureFTPServer(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureFTPServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureFTPServer(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLetsEncrypt(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLetsEncrypt-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureLetsEncrypt(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLogging(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLogging-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureLogging(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureScopes(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureScopes-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureScopes(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureServerWebPages(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureServerWebPages-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureServerWebPages(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureSingletons(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureSingletons-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureSingletons(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureThirdPartyApi(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureThirdPartyApi-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureThirdPartyApi(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureWebSocketLoggerMonitor(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureWebSocketLoggerMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureWebSocketLoggerMonitor(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
- [ServerCoreDbOperations](#T-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations')
  - [DBTranslate(word,language)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-DBTranslate-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations.DBTranslate(System.String,System.String)')
  - [DBTranslateOffline(word,language)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOffline-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations.DBTranslateOffline(System.String,System.String)')
  - [DBTranslateOnline(word,language)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOnline-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations.DBTranslateOnline(System.String,System.String)')
  - [LoadStaticDbDials(onlyThis)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-LoadStaticDbDials-System-Nullable{EasyITCenter-ServerCoreDefinition-ServerLocalDbDials}- 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations.LoadStaticDbDials(System.Nullable{EasyITCenter.ServerCoreDefinition.ServerLocalDbDials})')
  - [WriteVisit(ipAddress,userId,userName)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-WriteVisit-System-String,System-Int32,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations.WriteVisit(System.String,System.Int32,System.String)')
  - [WriteWebVisit(ipAddress,userId,userName)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-WriteWebVisit-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreDbOperations.WriteWebVisit(System.String)')
- [ServerCoreExportApi](#T-EasyITCenter-ServerCoreDBSettings-ServerCoreExportApi 'EasyITCenter.ServerCoreDBSettings.ServerCoreExportApi')
- [ServerCoreFunctions](#T-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions')
  - [ByteArrayToFile(fileName,byteArray)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-ByteArrayToFile-System-String,System-Byte[]- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.ByteArrayToFile(System.String,System.Byte[])')
  - [CheckDirectory(directory)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CheckDirectory-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.CheckDirectory(System.String)')
  - [CheckFile(file)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CheckFile-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.CheckFile(System.String)')
  - [ClearFolder(FolderName)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-ClearFolder-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.ClearFolder(System.String)')
  - [CopyDirectory(directory)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CopyDirectory-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.CopyDirectory(System.String,System.String)')
  - [CopyFile(from,to)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CopyFile-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.CopyFile(System.String,System.String)')
  - [CreateFile(file)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CreateFile-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.CreateFile(System.String)')
  - [CreatePath(path)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CreatePath-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.CreatePath(System.String)')
  - [FileDetectEncoding(FileName)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-FileDetectEncoding-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.FileDetectEncoding(System.String)')
  - [FirstCharToLowerCase(str)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-FirstCharToLowerCase-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.FirstCharToLowerCase(System.String)')
  - [GetByteArrayFrom64Encode(strContent)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetByteArrayFrom64Encode-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.GetByteArrayFrom64Encode(System.String)')
  - [GetSelfSignedCertificate(password)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificate-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.GetSelfSignedCertificate(System.String)')
  - [GetSelfSignedCertificateFromFile()](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificateFromFile-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.GetSelfSignedCertificateFromFile(System.String)')
  - [GetSystemErrMessage(exception,msgCount)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetSystemErrMessage-System-Exception,System-Int32- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.GetSystemErrMessage(System.Exception,System.Int32)')
  - [GetUserApiErrMessage(exception,msgCount)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetUserApiErrMessage-System-Exception,System-Int32- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.GetUserApiErrMessage(System.Exception,System.Int32)')
  - [LoadSettings()](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-LoadSettings 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.LoadSettings')
  - [RandomString(length)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-RandomString-System-Int32- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.RandomString(System.Int32)')
  - [ReadFile(fileName)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-ReadFile-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.ReadFile(System.String)')
  - [RunProcess(processDefinition)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-RunProcess-EasyITCenter-ServerCoreDefinition-ProcessClass- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.RunProcess(EasyITCenter.ServerCoreDefinition.ProcessClass)')
  - [SendEmail(mailRequest,sendImmediately)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-SendEmail-EasyITCenter-ServerCoreDefinition-MailRequest,System-Boolean- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.SendEmail(EasyITCenter.ServerCoreDefinition.MailRequest,System.Boolean)')
  - [SendMassEmail(mailRequests)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-SendMassEmail-System-Collections-Generic-List{EasyITCenter-ServerCoreDefinition-MailRequest}- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.SendMassEmail(System.Collections.Generic.List{EasyITCenter.ServerCoreDefinition.MailRequest})')
  - [UnicodeToUTF8(strFrom)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-UnicodeToUTF8-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.UnicodeToUTF8(System.String)')
  - [WriteToFile(file,content)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-WriteToFile-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreFunctions.WriteToFile(System.String,System.String)')
- [ServerCoreHelpers](#T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers')
  - [AddSocketConnectionToCentalList(newWebSocket,socketAPIPath)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-AddSocketConnectionToCentalList-System-Net-WebSockets-WebSocket,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.AddSocketConnectionToCentalList(System.Net.WebSockets.WebSocket,System.String)')
  - [BindList\`\`1(dt)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-BindList``1-System-Data-DataTable- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.BindList``1(System.Data.DataTable)')
  - [CheckTokenValidityFromString(tokenString)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-CheckTokenValidityFromString-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.CheckTokenValidityFromString(System.String)')
  - [DisposeSocketConnectionsWithTimeOut()](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-DisposeSocketConnectionsWithTimeOut 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.DisposeSocketConnectionsWithTimeOut')
  - [GetValidationParameters()](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-GetValidationParameters 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.GetValidationParameters')
  - [IsValidEmail(email)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-IsValidEmail-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.IsValidEmail(System.String)')
  - [ListenClientWebSocketMessages(webSocket,socketAPIPath)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-ListenClientWebSocketMessages-System-Net-WebSockets-WebSocket,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.ListenClientWebSocketMessages(System.Net.WebSockets.WebSocket,System.String)')
  - [RemoveWhitespace(input)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-RemoveWhitespace-System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.RemoveWhitespace(System.String)')
  - [SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath,message)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-SendMessageAndUpdateWebSocketsInSpecificPath-System-String,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.SendMessageAndUpdateWebSocketsInSpecificPath(System.String,System.String)')
  - [SendMessageToClientSocket(webSocket,message)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-SendMessageToClientSocket-System-Net-WebSockets-WebSocket,System-String- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.SendMessageToClientSocket(System.Net.WebSockets.WebSocket,System.String)')
- [ServerCoreLoggerWS](#T-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS')
  - [Echo(context,webSocket)](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Echo-Microsoft-AspNetCore-Http-HttpContext,System-Net-WebSockets-WebSocket- 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS.Echo(Microsoft.AspNetCore.Http.HttpContext,System.Net.WebSockets.WebSocket)')
  - [Get()](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Get 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS.Get')
  - [GetBySocketAPIPath(id)](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-GetBySocketAPIPath-System-String- 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS.GetBySocketAPIPath(System.String)')
- [ServerCoreWebBuilderApi](#T-EasyITCenter-ServerCoreDBSettings-ServerCoreWebBuilderApi 'EasyITCenter.ServerCoreDBSettings.ServerCoreWebBuilderApi')
  - [GetWebBuilderCodePreview()](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderCodePreview-System-Int32- 'EasyITCenter.ServerCoreDBSettings.ServerCoreWebBuilderApi.GetWebBuilderCodePreview(System.Int32)')
  - [GetWebBuilderMenuPreview(id)](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderMenuPreview-System-Int32- 'EasyITCenter.ServerCoreDBSettings.ServerCoreWebBuilderApi.GetWebBuilderMenuPreview(System.Int32)')
- [ServerCoreWebUserApi](#T-EasyITCenter-ServerCoreDBSettings-ServerCoreWebUserApi 'EasyITCenter.ServerCoreDBSettings.ServerCoreWebUserApi')
  - [PostSendVerifyCode(email)](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreWebUserApi-PostSendVerifyCode-EasyITCenter-ServerCoreWebPages-EmailVerification- 'EasyITCenter.ServerCoreDBSettings.ServerCoreWebUserApi.PostSendVerifyCode(EasyITCenter.ServerCoreWebPages.EmailVerification)')
- [ServerDbDgmlSchemaApi](#T-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi')
  - [#ctor(context)](#M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-#ctor-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext- 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi.#ctor(EasyITCenter.ServerCoreDBSettings.EasyITCenterContext)')
  - [Get()](#M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-Get 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi.Get')
- [ServerDocApi](#T-EasyITCenter-Controllers-ServerDocApi 'EasyITCenter.Controllers.ServerDocApi')
  - [_hostingEnvironment](#F-EasyITCenter-Controllers-ServerDocApi-_hostingEnvironment 'EasyITCenter.Controllers.ServerDocApi._hostingEnvironment')
  - [GenerateMdBook()](#M-EasyITCenter-Controllers-ServerDocApi-GenerateMdBook 'EasyITCenter.Controllers.ServerDocApi.GenerateMdBook')
- [ServerEmailerApi](#T-EasyITCenter-ServerCoreDBSettings-ServerEmailerApi 'EasyITCenter.ServerCoreDBSettings.ServerEmailerApi')
- [ServerEnablingServices](#T-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices')
  - [EnableCors()](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableCors-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableCors(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableEndpoints()](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableEndpoints-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableEndpoints(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableLogging(app,loggerFactory)](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableLogging-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableLogging(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableWebSocket(app)](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableWebSocket-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableWebSocket(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
- [ServerLocalDbDials](#T-EasyITCenter-ServerCoreDefinition-ServerLocalDbDials 'EasyITCenter.ServerCoreDefinition.ServerLocalDbDials')
- [ServerModules](#T-EasyITCenter-ServerCoreConfiguration-ServerModules 'EasyITCenter.ServerCoreConfiguration.ServerModules')
  - [ConfigureCoreAdmin(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureCoreAdmin-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureCoreAdmin(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureDocumentation(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureDocumentation-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureDocumentation(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureHealthCheck(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureHealthCheck-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureHealthCheck(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureSwagger(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureSwagger-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureSwagger(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
- [ServerModulesEnabling](#T-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling')
  - [EnableCoreAdmin()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableCoreAdmin-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableCoreAdmin(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableDocumentation()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableDocumentation-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableDocumentation(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableSwagger()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableSwagger-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableSwagger(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
- [ServerProviderHealthCheck](#T-EasyITCenter-ServerCoreDefinition-ServerProviderHealthCheck 'EasyITCenter.ServerCoreDefinition.ServerProviderHealthCheck')
  - [Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync(context,cancellationToken)](#M-EasyITCenter-ServerCoreDefinition-ServerProviderHealthCheck-Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync-Microsoft-Extensions-Diagnostics-HealthChecks-HealthCheckContext,System-Threading-CancellationToken- 'EasyITCenter.ServerCoreDefinition.ServerProviderHealthCheck.Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync(Microsoft.Extensions.Diagnostics.HealthChecks.HealthCheckContext,System.Threading.CancellationToken)')
- [ServerRestartApi](#T-EasyITCenter-ServerCoreDBSettings-ServerRestartApi 'EasyITCenter.ServerCoreDBSettings.ServerRestartApi')
- [ServerRuntimeData](#T-EasyITCenter-ServerCoreDefinition-ServerRuntimeData 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData')
  - [CentralWebSocketList](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-CentralWebSocketList 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.CentralWebSocketList')
  - [LocalDBTableList](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-LocalDBTableList 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.LocalDBTableList')
  - [ServerArgs](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerArgs 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.ServerArgs')
  - [ServerCancelToken](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerCancelToken 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.ServerCancelToken')
  - [ServerCoreStatus](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerCoreStatus 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.ServerCoreStatus')
  - [ServerFTPProvider](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerFTPProvider 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.ServerFTPProvider')
  - [ServerRestartRequest](#F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerRestartRequest 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.ServerRestartRequest')
  - [ConfigFile](#P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ConfigFile 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.ConfigFile')
  - [DataPath](#P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-DataPath 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.DataPath')
  - [DebugMode](#P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-DebugMode 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.DebugMode')
  - [Setting_folder](#P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-Setting_folder 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.Setting_folder')
  - [Startup_path](#P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-Startup_path 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.Startup_path')
  - [UserPath](#P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-UserPath 'EasyITCenter.ServerCoreDefinition.ServerRuntimeData.UserPath')
- [ServerWebPagesConfigApi](#T-EasyITCenter-ServerCoreDBSettings-ServerWebPagesConfigApi 'EasyITCenter.ServerCoreDBSettings.ServerWebPagesConfigApi')
  - [Index()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesConfigApi-Index 'EasyITCenter.ServerCoreDBSettings.ServerWebPagesConfigApi.Index')
- [ServerWebPagesLogin](#T-EasyITCenter-ServerCoreWebPages-ServerWebPagesLogin 'EasyITCenter.ServerCoreWebPages.ServerWebPagesLogin')
- [ServerWebPagesToken](#T-EasyITCenter-ServerCoreWebPages-ServerWebPagesToken 'EasyITCenter.ServerCoreWebPages.ServerWebPagesToken')
- [SetReportFilter](#T-EasyITCenter-ServerCoreDBSettings-SetReportFilter 'EasyITCenter.ServerCoreDBSettings.SetReportFilter')
- [SitemapController](#T-EasyITCenter-ServerCoreDBSettings-SitemapController 'EasyITCenter.ServerCoreDBSettings.SitemapController')
- [Startup](#T-EasyITCenter-Startup 'EasyITCenter.Startup')
  - [Configure(app,serverLifetime)](#M-EasyITCenter-Startup-Configure-Microsoft-AspNetCore-Builder-IApplicationBuilder,Microsoft-Extensions-Hosting-IHostApplicationLifetime- 'EasyITCenter.Startup.Configure(Microsoft.AspNetCore.Builder.IApplicationBuilder,Microsoft.Extensions.Hosting.IHostApplicationLifetime)')
  - [ConfigureServices(services)](#M-EasyITCenter-Startup-ConfigureServices-Microsoft-Extensions-DependencyInjection-IServiceCollection- 'EasyITCenter.Startup.ConfigureServices(Microsoft.Extensions.DependencyInjection.IServiceCollection)')
- [SystemDocApi](#T-EasyITCenter-Controllers-SystemDocApi 'EasyITCenter.Controllers.SystemDocApi')
  - [_hostingEnvironment](#F-EasyITCenter-Controllers-SystemDocApi-_hostingEnvironment 'EasyITCenter.Controllers.SystemDocApi._hostingEnvironment')
  - [GetMdDocumentPreview()](#M-EasyITCenter-Controllers-SystemDocApi-GetMdDocumentPreview-System-Int32- 'EasyITCenter.Controllers.SystemDocApi.GetMdDocumentPreview(System.Int32)')
  - [GetMdLibraryPreview()](#M-EasyITCenter-Controllers-SystemDocApi-GetMdLibraryPreview-System-Int32- 'EasyITCenter.Controllers.SystemDocApi.GetMdLibraryPreview(System.Int32)')
- [UserConfig](#T-EasyITCenter-ServerCoreWebPages-UserConfig 'EasyITCenter.ServerCoreWebPages.UserConfig')
- [WebMessage](#T-EasyITCenter-ServerCoreWebPages-WebMessage 'EasyITCenter.ServerCoreWebPages.WebMessage')
- [WebRegistration](#T-EasyITCenter-ServerCoreWebPages-WebRegistration 'EasyITCenter.ServerCoreWebPages.WebRegistration')
- [WebSocketExtension](#T-EasyITCenter-ServerCoreDefinition-WebSocketExtension 'EasyITCenter.ServerCoreDefinition.WebSocketExtension')
- [WebSocketLogProvider](#T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogProvider 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.WebSocketLogProvider')
- [WebSocketLogger](#T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.WebSocketLogger')
  - [Log\`\`1(logLevel,eventId,state,exception,formatter)](#M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger-Log``1-Microsoft-Extensions-Logging-LogLevel,Microsoft-Extensions-Logging-EventId,``0,System-Exception,System-Func{``0,System-Exception,System-String}- 'EasyITCenter.ServerCoreDefinition.ServerCoreHelpers.WebSocketLogger.Log``1(Microsoft.Extensions.Logging.LogLevel,Microsoft.Extensions.Logging.EventId,``0,System.Exception,System.Func{``0,System.Exception,System.String})')

<a name='T-EasyITCenter-ServerCoreDefinition-AuthenticateResponse'></a>
## AuthenticateResponse `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

The authenticate response.

<a name='P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Expiration'></a>
### Expiration `property`

##### Summary

Gets or Sets the expiration.

<a name='P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Id'></a>
### Id `property`

##### Summary

Gets or Sets the id.

<a name='P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Name'></a>
### Name `property`

##### Summary

Gets or Sets the name.

<a name='P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Role'></a>
### Role `property`

##### Summary

Gets or Sets the role.

<a name='P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Surname'></a>
### Surname `property`

##### Summary

Gets or Sets the surname.

<a name='P-EasyITCenter-ServerCoreDefinition-AuthenticateResponse-Token'></a>
### Token `property`

##### Summary

Gets or Sets the token.

<a name='T-EasyITCenter-BackendServer'></a>
## BackendServer `type`

##### Namespace

EasyITCenter

##### Summary

Server Main Definition Starting Point Of Project

<a name='F-EasyITCenter-BackendServer-ServerConfigSettings'></a>
### ServerConfigSettings `constants`

##### Summary

Startup Server Initialization Server Setting Data

<a name='F-EasyITCenter-BackendServer-ServerRuntimeData'></a>
### ServerRuntimeData `constants`

##### Summary

Startup Server Initialization Server Runtime Data

<a name='M-EasyITCenter-BackendServer-BuildWebHost-System-String[]-'></a>
### BuildWebHost(args) `method`

##### Summary

Final Preparing Server HostBuilder Definition
Exit 10 Is missing or Format Problem with Configuration File

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') |  |

<a name='M-EasyITCenter-BackendServer-Main-System-String[]-'></a>
### Main(args) `method`

##### Summary

Server Startup Process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') |  |

<a name='M-EasyITCenter-BackendServer-RestartServer'></a>
### RestartServer() `method`

##### Summary

Server Restart Controller

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-ServerStartupDbDataLoading'></a>
### ServerStartupDbDataLoading() `method`

##### Summary

Server Startup DB Data loading for minimize DB Connect TO Frequency Dials Without Changes
Example: LanguageList

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-StartServer'></a>
### StartServer() `method`

##### Summary

Server Start Controller

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDefinition-CommunicationController'></a>
## CommunicationController `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

Server Communication Extensions for Controlling Data

<a name='P-EasyITCenter-ServerCoreDefinition-CommunicationController-HttpContext'></a>
### HttpContext `property`

##### Summary

Server Request Accessory controller

<a name='M-EasyITCenter-ServerCoreDefinition-CommunicationController-CheckAdmin'></a>
### CheckAdmin() `method`

##### Summary

Extension for check Admin Role

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser'></a>
## CustomFtpUser `type`

##### Namespace

EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider

##### Summary

Custom FTP user implementation

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-#ctor-System-String-'></a>
### #ctor(name) `constructor`

##### Summary

Initializes a new instance of the [CustomFtpUser](#T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser') instance.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The user name |

<a name='P-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-Name'></a>
### Name `property`

##### Summary

*Inherit from parent.*

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-IsInGroup-System-String-'></a>
### IsInGroup() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-CustomString'></a>
## CustomString `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Custom Definition for Returning string List from Stored Procedures Name is ColumnName from
Stored Procedure Result

<a name='T-EasyITCenter-ServerCoreDefinition-DBResult'></a>
## DBResult `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

Database response types definition

<a name='T-EasyITCenter-ServerCoreDefinition-DBResultMessage'></a>
## DBResultMessage `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

The DB result message.

<a name='P-EasyITCenter-ServerCoreDefinition-DBResultMessage-ErrorMessage'></a>
### ErrorMessage `property`

##### Summary

Gets or Sets the error message.

<a name='P-EasyITCenter-ServerCoreDefinition-DBResultMessage-InsertedId'></a>
### InsertedId `property`

##### Summary

Gets or Sets the inserted id.

<a name='P-EasyITCenter-ServerCoreDefinition-DBResultMessage-RecordCount'></a>
### RecordCount `property`

##### Summary

Gets or Sets the record count.

<a name='P-EasyITCenter-ServerCoreDefinition-DBResultMessage-Status'></a>
### Status `property`

##### Summary

Gets or Sets the status.

<a name='T-EasyITCenter-ServerCoreWebPages-DBWebApiResponses'></a>
## DBWebApiResponses `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

WebApi Responses

<a name='T-EasyITCenter-ServerCoreDBSettings-DatabaseContextExtensions'></a>
## DatabaseContextExtensions `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Context Extensions for All Types Procedures For Retun Data in procedure can be
Simple SELECT * XXX and you Create Same Class for returned DataSet

<a name='T-EasyITCenter-ServerCoreWebPages-EmailVerification'></a>
## EmailVerification `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

WebPages User Verification class

<a name='T-EasyITCenter-Controllers-ExpertDocApi'></a>
## ExpertDocApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList-System-Int32-'></a>
### GetDocumentationGroupedList(id) `method`

##### Summary

ExpertDocManager Group Documentation Request Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='T-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext'></a>
## EasyITCenterContext `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
Studio Tool Here can Be added customization which are not on the server Here is Extended the
Context with Insert News Functionality Customizing and implement Settings for Automatic
Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas

<a name='M-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext-GetApiUserId-Microsoft-AspNetCore-Http-HttpContext-'></a>
### GetApiUserId(httpContext) `method`

##### Summary

Return User From API Request if Exist other null

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| httpContext | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') |  |

<a name='M-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext-IsAdmin-Microsoft-AspNetCore-Http-HttpContext-'></a>
### IsAdmin(httpContext) `method`

##### Summary

Return User From API Request if Exist other null

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| httpContext | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') |  |

<a name='T-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi'></a>
## EasyITCenterAuthenticationApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-Authenticate-System-String,System-String-'></a>
### Authenticate(username,password) `method`

##### Summary

API Authenticated and Generate Token

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-LifetimeValidator-System-Nullable{System-DateTime},System-Nullable{System-DateTime},Microsoft-IdentityModel-Tokens-SecurityToken,Microsoft-IdentityModel-Tokens-TokenValidationParameters-'></a>
### LifetimeValidator(notBefore,expires,token,params) `method`

##### Summary

API Token LifeTime Validator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| notBefore | [System.Nullable{System.DateTime}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.DateTime}') |  |
| expires | [System.Nullable{System.DateTime}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.DateTime}') |  |
| token | [Microsoft.IdentityModel.Tokens.SecurityToken](#T-Microsoft-IdentityModel-Tokens-SecurityToken 'Microsoft.IdentityModel.Tokens.SecurityToken') |  |
| params | [Microsoft.IdentityModel.Tokens.TokenValidationParameters](#T-Microsoft-IdentityModel-Tokens-TokenValidationParameters 'Microsoft.IdentityModel.Tokens.TokenValidationParameters') |  |

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-RefreshUserToken-System-String,EasyITCenter-ServerCoreDefinition-AuthenticateResponse-'></a>
### RefreshUserToken(username,token) `method`

##### Summary

API Refresh User Token

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| token | [EasyITCenter.ServerCoreDefinition.AuthenticateResponse](#T-EasyITCenter-ServerCoreDefinition-AuthenticateResponse 'EasyITCenter.ServerCoreDefinition.AuthenticateResponse') |  |

<a name='T-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi'></a>
## EasyITCenterBackendCheckApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Simple Api for Checking Avaiability

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi-GetBackendCheckApi'></a>
### GetBackendCheckApi() `method`

##### Summary

Gets the backend check API.

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreServers-HostedFtpServer'></a>
## HostedFtpServer `type`

##### Namespace

EasyITCenter.ServerCoreServers

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServer-#ctor-FubarDev-FtpServer-IFtpServerHost-'></a>
### #ctor(ftpServerHost) `constructor`

##### Summary

Initializes a new instance of the [HostedFtpServer](#T-EasyITCenter-ServerCoreServers-HostedFtpServer 'EasyITCenter.ServerCoreServers.HostedFtpServer') class.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ftpServerHost | [FubarDev.FtpServer.IFtpServerHost](#T-FubarDev-FtpServer-IFtpServerHost 'FubarDev.FtpServer.IFtpServerHost') | The FTP server host that gets wrapped as a hosted service. |

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServer-StartAsync-System-Threading-CancellationToken-'></a>
### StartAsync() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServer-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider'></a>
## HostedFtpServerMembershipProvider `type`

##### Namespace

EasyITCenter.ServerCoreServers

##### Summary

Custom membership provider for Authentication Validation
Actual is Set by UserName and Password in Database

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUser-System-String,System-String-'></a>
### ValidateUser(username,password) `method`

##### Summary

FTP User Validation
Its for Open FTP and User Validation

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The username. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUserAsync-System-String,System-String-'></a>
### ValidateUserAsync(username,password) `method`

##### Summary

FTP User Validation Async
Its for Open FTP and User Validation

##### Returns

The result of the validation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The user name. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='T-EasyITCenter-ServerCoreDBSettings-IdFilter'></a>
## IdFilter `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Custom Class Definition for Filtering by record Id

<a name='T-EasyITCenter-ServerCoreDefinition-MailRequest'></a>
## MailRequest `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

Class Definition for Server Emailer
In List of this claas you can use Mass Emailer

<a name='T-EasyITCenter-ServerCoreDBSettings-NameFilter'></a>
## NameFilter `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Custom Class Definition for Filtering by string

<a name='T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-OperatingSystem'></a>
## OperatingSystem `type`

##### Namespace

EasyITCenter.ServerCoreDefinition.ServerCoreHelpers

##### Summary

Extension For Checking Operation System 
of Server Running

<a name='T-EasyITCenter-ServerCoreDefinition-ProcessClass'></a>
## ProcessClass `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

Server Process class for running external prrocesses

<a name='T-EasyITCenter-ServerCoreDBSettings-RobotsController'></a>
## RobotsController `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

robots.txt routing

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-ServerCoreDefinition-ServerConfigSettings'></a>
## ServerConfigSettings `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

The server settings.

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigApiTokenTimeoutMin'></a>
### ConfigApiTokenTimeoutMin `property`

##### Summary

Bearer Token Timeout Setting in Minutes. Connection must be Refreshed in Interval After
Timeout connection Must Login Again. It is as needed. You Can Change Key for close All
connections Immediately. Timeout is good for Webpages
Recomended: 15

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigCertificateDomain'></a>
### ConfigCertificateDomain `property`

##### Summary

Its Domain for include to Automatic Generated Certificate For Server running on HTTPS.
Domain is for Your validation Certificate Domain. Can be Changed for commercial.
Domain is Used for Lets Encrypt also
Write with Comma separator
Recommended: 127.0.0.1

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePassword'></a>
### ConfigCertificatePassword `property`

##### Summary

Password will be inserted to Server Generated Certificate for HTTPS.
Recommended: empty = Maximal Security Randomly generated 20 chars string

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePath'></a>
### ConfigCertificatePath `property`

##### Summary

Certificate file NextFrom'DATA'Path\\Filename.pfx For import External Certificate
Its Path from Data Startup Folder,example "groupware.pfx" is in Data Path
The Password must be inserted in ConfigCertificatePassword Settings
Other for ignore this Setting set empty string ""
This settings has Higest Priority before LesEncrypt enabled

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigJwtLocalKey'></a>
### ConfigJwtLocalKey `property`

##### Summary

Special Functions:Server AutoGenerated encryption Key For Securing Communication On Each
Server Restart All Tokens not will be valid and the Login Reconnect is Requested. Its
AntiHacker Security Rule
Recommended: empty = Maximal Security Randomly generated 40 chars string

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigMaxWebSocketBufferSizeKb'></a>
### ConfigMaxWebSocketBufferSizeKb `property`

##### Summary

Maximum socket message size for control Traffic
Recomended: 10

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigServerGetLetsEncrypt'></a>
### ConfigServerGetLetsEncrypt `property`

##### Summary

Setting for Automatic Obtain Lets Encrypt
more Security Setting Politics.
Recommended: true

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupOnHttps'></a>
### ConfigServerStartupOnHttps `property`

##### Summary

Setting for Server URL Services. Logically can run only one Http or Https Server has
more Security Setting Politics.
Recommended: true

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupPort'></a>
### ConfigServerStartupPort `property`

##### Summary

Set Server Startup Port on Http/HttpS/WebSocket and for All Engines, Modules, API
Controler and WebPages
Recommended: 5000

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ConfigWebSocketTimeoutMin'></a>
### ConfigWebSocketTimeoutMin `property`

##### Summary

WebSocket Timeout Connection Settings in Minutes. After timeout when not detected any
communication socket is closed Set according to your need
Recommended: 2

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-DatabaseConnectionString'></a>
### DatabaseConnectionString `property`

##### Summary

Server Database Connection string for Full Service of Database
Migration/Api/Check/Unlimited Develop !!!Warning: Check this connection for
Read/Write/Exec is enabled

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCacheTimeoutMin'></a>
### DatabaseInternalCacheTimeoutMin `property`

##### Summary

Time in Minutes for Database Valid Cache Data and Refreshing Duplicit Functionality with
Database Server
Recommended: 30

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCachingEnabled'></a>
### DatabaseInternalCachingEnabled `property`

##### Summary

Enable Disable Entity Framework Internal Cache I recommend turning it off : from Logic,
Duplicit Functionality with Database Server in complex process can generate problems
Recommended: false

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginPassword'></a>
### EmailerSMTPLoginPassword `property`

##### Summary

SMTP Password for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginUsername'></a>
### EmailerSMTPLoginUsername `property`

##### Summary

SMTP UserName for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPPort'></a>
### EmailerSMTPPort `property`

##### Summary

SMTP Port for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPServerAddress'></a>
### EmailerSMTPServerAddress `property`

##### Summary

SMTP Server Address for Login to External Mail Server Its Necessary for Correct running
Server Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPSslIsEnabled'></a>
### EmailerSMTPSslIsEnabled `property`

##### Summary

EmailerSMTPSslIsEnabled SSl Email Protocol for Login to External Mail Server Its
Necessary for Correct running Server Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-EmailerServiceEmailAddress'></a>
### EmailerServiceEmailAddress `property`

##### Summary

Service email, for info about not available service from HeatchCheck Can be used for
next Develop, automatic checking problems, missing data and all other Its Necessary for
Correct running Server Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleDataManagerEnabled'></a>
### ModuleDataManagerEnabled `property`

##### Summary

Special Function: AutoGenerated Database DataManager for working with Data Running only
in Debug mode for simple Develop, can be modified. All changes are Reflected after
restart server

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleDbDiagramGeneratorEnabled'></a>
### ModuleDbDiagramGeneratorEnabled `property`

##### Summary

Enable Automatic Database Diagram for Simple show Database structure with All bingings

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceEnabled'></a>
### ModuleHealthServiceEnabled `property`

##### Summary

Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
Over Net can Control Other Company Services Also as Central Control Point With Email
Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
Must be run for Metrics AddOn https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/monitor-app-health

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceRefreshIntervalSec'></a>
### ModuleHealthServiceRefreshIntervalSec `property`

##### Summary

Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
Over Net can Control Other Company Services Also as Central Control Point With Email
Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
Must be run for Metrics AddOn !!! run in Release mode for Good Reading of Logs without
HeathChecks Cycling info https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks https://testfully.io/blog/api-health-check-monitoring/

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleMdDocumentationEnabled'></a>
### ModuleMdDocumentationEnabled `property`

##### Summary

Enable Server Structure Documentation for Developers Using RootPath, - Block File
Browsing Is Good for Server with Documentation only Or Use for Show WebPage and Copy
"Only HTML"

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ModuleSwaggerApiDocEnabled'></a>
### ModuleSwaggerApiDocEnabled `property`

##### Summary

Special Function: Server Automatically Generate Full Documentation of API structure AND
Database Model. Plus Included API Interface for Online Testing All API Methods with
Authentication Its Automatic Solution for Third Party cooperation. All changes are
Reflected after restart server

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerEnableWebSocketMonitor'></a>
### ServerEnableWebSocketMonitor `property`

##### Summary

Server support online multi watch Logging
Its Run on Websocket and the Log Messages are
sent for All opened connections for wathing
on Path: ServerCoreMonitor
You can enable Mass Email Api

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerFtpEngineEnabled'></a>
### ServerFtpEngineEnabled `property`

##### Summary

Enable FTP File Server oppened for every connection with full rights

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerFtpSecurityEnabled'></a>
### ServerFtpSecurityEnabled `property`

##### Summary

Enable FTP Security
For access to FTP must be logged

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerJsWebPagesEngineEnabled'></a>
### ServerJsWebPagesEngineEnabled `property`

##### Summary

Enable JS WebPages support engine with Correct Configuration
React, Nodejs, etc..

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerJsWebStartupCommand'></a>
### ServerJsWebStartupCommand `property`

##### Summary

Definition of WebPage Startup npmscript command
React, Nodejs, etc..

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerMvcWebPagesEngineEnabled'></a>
### ServerMvcWebPagesEngineEnabled `property`

##### Summary

Enable Mvc WebPages support engine with Correct Configuration

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerRazorWebPagesEngineEnabled'></a>
### ServerRazorWebPagesEngineEnabled `property`

##### Summary

Enable Razor WebPages support engine with Correct Configuration for Automaping form
folder 'Pages'

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerTimeTokenValidationEnabled'></a>
### ServerTimeTokenValidationEnabled `property`

##### Summary

Enable Disable Bearer Token Timeout Validation Token can be valid EveryTime to using:
Example for machine connection Or is Control last activity

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerWebBrowserEnabled'></a>
### ServerWebBrowserEnabled `property`

##### Summary

Enable WebPages File Browsing from server Url on Server

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-ServerWebSocketEngineEnabled'></a>
### ServerWebSocketEngineEnabled `property`

##### Summary

Enable WebSocket Engine with Default Example Api Controller

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialCoreCheckerEmailSenderActive'></a>
### SpecialCoreCheckerEmailSenderActive `property`

##### Summary

Activation / Deactivation of Email Sender For Server Core Fails Checker All Catch Write
to SendEmail, In Debug mode is Written in console in Release mode is Sended email (All
incorrect server statuses are monitored) Can be writen to Database - !!! Warning for
infinite Cycling (DB shutdown example)
Recommended: true

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialEnableMassEmail'></a>
### SpecialEnableMassEmail `property`

##### Summary

Server support mass emailing as Service
You can enable Mass Email Api

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialServerLanguage'></a>
### SpecialServerLanguage `property`

##### Summary

Server Language for Translating Server internal statuses
Recommended: cz or en - other languages are not implemented

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialServerServiceName'></a>
### SpecialServerServiceName `property`

##### Summary

Server Service Name automatic figured in All IS/OS/Engines info
Recommended: EasyITCenter

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialUseDbLocalAutoupdatedDials'></a>
### SpecialUseDbLocalAutoupdatedDials `property`

##### Summary

Special Function: Using Selected Tables with AutoRefresh On change as Local DataSets,
For Optimize Traffic. For Example LanguageList - Static table with often reading
Recommended: true - functionality must be implemented in Server Code

<a name='P-EasyITCenter-ServerCoreDefinition-ServerConfigSettings-SpecialUserWebRootPath'></a>
### SpecialUserWebRootPath `property`

##### Summary

User Web Root Path for Startup 
and Any missing address Automatic Redirection
Value must start with /
Not need Regex Configuration

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices'></a>
## ServerConfigurationServices `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Server Core Configuration Settings of Security, Communications, Technologies, Modules Rules,
Rights, Conditions, Formats, Services, Logging, etc..

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureAuthentication-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureAuthentication(services) `method`

##### Summary

Server Core: Configure Server Authentication Support

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureControllers-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureControllers(services) `method`

##### Summary

Server Core: Configure Server Controllers
options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = [ValidateNever]
in Class options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
= [JsonIgnore] in Class

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCookie-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureCookie(services) `method`

##### Summary

Server Core: Configure Cookie Politics

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureDatabaseContext-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDatabaseContext(services) `method`

##### Summary

Server Core: Configure Custom Services

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureFTPServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureFTPServer(services) `method`

##### Summary

Custom Secure FTP Server

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLetsEncrypt-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLetsEncrypt(services) `method`

##### Summary

Server core: Configures LetsEncrypt using.
Certificate will be saved in DataPath

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLogging-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLogging(services) `method`

##### Summary

Server Core: Configure Server Logging

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureScopes-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureScopes(services) `method`

##### Summary

Server Core: Configure Custom Core Services

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureServerWebPages-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureServerWebPages(services) `method`

##### Summary

Configures the MVC server pages on Server format "cshtml"

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureSingletons-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureSingletons(services) `method`

##### Summary

Server Core: Configures the singletons.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureThirdPartyApi-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureThirdPartyApi(services) `method`

##### Summary

Server Core: Configure HTTP Client for work with third party API

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureWebSocketLoggerMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureWebSocketLoggerMonitor(services) `method`

##### Summary

Server core: Configures the WebSocket logger monitor.
For multi monitoring and for Example Posibilities

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='T-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations'></a>
## ServerCoreDbOperations `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

All Server Definitions of Database Operation method

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-DBTranslate-System-String,System-String-'></a>
### DBTranslate(word,language) `method`

##### Summary

Default Operation for Call Translation

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOffline-System-String,System-String-'></a>
### DBTranslateOffline(word,language) `method`

##### Summary

Database LanuageList for Off-line Using Definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOnline-System-String,System-String-'></a>
### DBTranslateOnline(word,language) `method`

##### Summary

Database LanuageList for On-line Using Definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-LoadStaticDbDials-System-Nullable{EasyITCenter-ServerCoreDefinition-ServerLocalDbDials}-'></a>
### LoadStaticDbDials(onlyThis) `method`

##### Summary

Method for All Server Defined Table for Local Using As Off line AutoUpdated Tables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| onlyThis | [System.Nullable{EasyITCenter.ServerCoreDefinition.ServerLocalDbDials}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{EasyITCenter.ServerCoreDefinition.ServerLocalDbDials}') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-WriteVisit-System-String,System-Int32,System-String-'></a>
### WriteVisit(ipAddress,userId,userName) `method`

##### Summary

Trigger User Login History

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAddress | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| userId | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |
| userName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreDbOperations-WriteWebVisit-System-String-'></a>
### WriteWebVisit(ipAddress,userId,userName) `method`

##### Summary

Trigger User Login History

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAddress | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerCoreExportApi'></a>
## ServerCoreExportApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

[Authorize]
Server Export Services

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions'></a>
## ServerCoreFunctions `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-ByteArrayToFile-System-String,System-Byte[]-'></a>
### ByteArrayToFile(fileName,byteArray) `method`

##### Summary

Write ByteArray to File

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |
| byteArray | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | The byte array. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CheckDirectory-System-String-'></a>
### CheckDirectory(directory) `method`

##### Summary

Checks the directory.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CheckFile-System-String-'></a>
### CheckFile(file) `method`

##### Summary

Checks the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-ClearFolder-System-String-'></a>
### ClearFolder(FolderName) `method`

##### Summary

Full Clear Folder

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FolderName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the folder. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CopyDirectory-System-String,System-String-'></a>
### CopyDirectory(directory) `method`

##### Summary

Copy Full directory.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CopyFile-System-String,System-String-'></a>
### CopyFile(from,to) `method`

##### Summary

Copies the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | From. |
| to | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | To. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CreateFile-System-String-'></a>
### CreateFile(file) `method`

##### Summary

Prepared Method for Create empty file

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-CreatePath-System-String-'></a>
### CreatePath(path) `method`

##### Summary

Creates the path recursively.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The path. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-FileDetectEncoding-System-String-'></a>
### FileDetectEncoding(FileName) `method`

##### Summary

Files the detect encoding.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-FirstCharToLowerCase-System-String-'></a>
### FirstCharToLowerCase(str) `method`

##### Summary

Change First Character of String

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| str | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetByteArrayFrom64Encode-System-String-'></a>
### GetByteArrayFrom64Encode(strContent) `method`

##### Summary

Separate ByteArray from 64 encode file
For inserted file types

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| strContent | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Content of the string. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificate-System-String-'></a>
### GetSelfSignedCertificate(password) `method`

##### Summary

Gets the self signed certificate For API Security HTTPS.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificateFromFile-System-String-'></a>
### GetSelfSignedCertificateFromFile() `method`

##### Summary

Set Imported Certificate from file on Server for Https 
File must has Valid path from Startup Data Path

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetSystemErrMessage-System-Exception,System-Int32-'></a>
### GetSystemErrMessage(exception,msgCount) `method`

##### Summary

Mined-ed Error Message For System Save to Database For Simple Solving Problem

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-GetUserApiErrMessage-System-Exception,System-Int32-'></a>
### GetUserApiErrMessage(exception,msgCount) `method`

##### Summary

Mined-ed Error Message For Answer in API Error Response with detailed info about problem

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-LoadSettings'></a>
### LoadSettings() `method`

##### Summary

Server Local Startup Configuration Its Running as First - Load from Congig.Json After DB
connection Before Server Start Is This configuration Replaced By Data from DB And next
Server Start. Its for situation - Bad Connection Server Start with Configuration from File

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-RandomString-System-Int32-'></a>
### RandomString(length) `method`

##### Summary

Randoms the string.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The length. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-ReadFile-System-String-'></a>
### ReadFile(fileName) `method`

##### Summary

Reads the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-RunProcess-EasyITCenter-ServerCoreDefinition-ProcessClass-'></a>
### RunProcess(processDefinition) `method`

##### Summary

Server Function For Running External Processes

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| processDefinition | [EasyITCenter.ServerCoreDefinition.ProcessClass](#T-EasyITCenter-ServerCoreDefinition-ProcessClass 'EasyITCenter.ServerCoreDefinition.ProcessClass') | The process definition. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-SendEmail-EasyITCenter-ServerCoreDefinition-MailRequest,System-Boolean-'></a>
### SendEmail(mailRequest,sendImmediately) `method`

##### Summary

System Mailer sending Emails To service email with detected fail for analyze and
corrections on the Way provide better services every time !!! This You can implement
everywhere, !!! In Debug mode is written to Console, in Release will be sent email
Empty Sender And Recipients set email for Service Recipient

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mailRequest | [EasyITCenter.ServerCoreDefinition.MailRequest](#T-EasyITCenter-ServerCoreDefinition-MailRequest 'EasyITCenter.ServerCoreDefinition.MailRequest') |  |
| sendImmediately | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-SendMassEmail-System-Collections-Generic-List{EasyITCenter-ServerCoreDefinition-MailRequest}-'></a>
### SendMassEmail(mailRequests) `method`

##### Summary

Sends the mass mail.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mailRequests | [System.Collections.Generic.List{EasyITCenter.ServerCoreDefinition.MailRequest}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{EasyITCenter.ServerCoreDefinition.MailRequest}') | The mail requests. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-UnicodeToUTF8-System-String-'></a>
### UnicodeToUTF8(strFrom) `method`

##### Summary

Unicodes to ut f8.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| strFrom | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string from. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreFunctions-WriteToFile-System-String,System-String-'></a>
### WriteToFile(file,content) `method`

##### Summary

Write String to File
Used for JsonSaving

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |
| content | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The content. |

<a name='T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers'></a>
## ServerCoreHelpers `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

System Helpers for EASY working
Here are extension for Database Model, WebSocket

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-AddSocketConnectionToCentalList-System-Net-WebSockets-WebSocket,System-String-'></a>
### AddSocketConnectionToCentalList(newWebSocket,socketAPIPath) `method`

##### Summary

Add WeSocket Connection To Central List

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newWebSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The new web socket. |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The socket path. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-BindList``1-System-Data-DataTable-'></a>
### BindList\`\`1(dt) `method`

##### Summary

Extension For Using Custom Defined Tables from Database Procedures
Its used as Database Context Extension as 'CollectionFromSql'
Method in Database Context

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dt | [System.Data.DataTable](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Data.DataTable 'System.Data.DataTable') | The dt. |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-CheckTokenValidityFromString-System-String-'></a>
### CheckTokenValidityFromString(tokenString) `method`

##### Summary

Token Validator Extension For Server WebPages

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The token string. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-DisposeSocketConnectionsWithTimeOut'></a>
### DisposeSocketConnectionsWithTimeOut() `method`

##### Summary

!! Global Method for Simple Using WebSockets
WebSocket Disposed - Cleaning monitored Sockets from Central List.
Are Closed and Disposed Only with Timeout or with closed Connection

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-GetValidationParameters'></a>
### GetValidationParameters() `method`

##### Summary

Server Token Validation Parameters definition
For Api is Used if is ON/Off for WePages is On everyTime

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-IsValidEmail-System-String-'></a>
### IsValidEmail(email) `method`

##### Summary

Determines whether [is valid email] [the specified email].

##### Returns

`true` if [is valid email] [the specified email]; otherwise, `false`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The email. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-ListenClientWebSocketMessages-System-Net-WebSockets-WebSocket,System-String-'></a>
### ListenClientWebSocketMessages(webSocket,socketAPIPath) `method`

##### Summary

Register Listening Client WebSocket Communication
Ist for Receive messages from Client

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') |  |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-RemoveWhitespace-System-String-'></a>
### RemoveWhitespace(input) `method`

##### Summary

Removes the whitespace from the String.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| input | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The input. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-SendMessageAndUpdateWebSocketsInSpecificPath-System-String,System-String-'></a>
### SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath,message) `method`

##### Summary

Sends the message and update web sockets in specific path.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The socket API path. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-SendMessageToClientSocket-System-Net-WebSockets-WebSocket,System-String-'></a>
### SendMessageToClientSocket(webSocket,message) `method`

##### Summary

Sends the message to client WebSocket.
This Is Used by "SendMessageAndUpdateWebSocketsInSpecificPath"
For Update Informaions on All Connections in Same WebSocket Path
Its Solution FOR Teminals, Group Communications, etc.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The web socket. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS'></a>
## ServerCoreLoggerWS `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

WEBSocket Template still not used Ideal for Terminal Panels, chat, controlling services

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Echo-Microsoft-AspNetCore-Http-HttpContext,System-Net-WebSockets-WebSocket-'></a>
### Echo(context,webSocket) `method`

##### Summary

WebSocket Communication Set Examle

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') | The context. |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The web socket. |

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Get'></a>
### Get() `method`

##### Summary

WebSocket Registration Connection API Example

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-GetBySocketAPIPath-System-String-'></a>
### GetBySocketAPIPath(id) `method`

##### Summary

Universal WebSocket API Definitions
for Connection Paths and Registering
To Server Central List ow WebSocket Connections

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerCoreWebBuilderApi'></a>
## ServerCoreWebBuilderApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Root Controller

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderCodePreview-System-Int32-'></a>
### GetWebBuilderCodePreview() `method`

##### Summary

WebBuilder Code Library Preview Api

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderMenuPreview-System-Int32-'></a>
### GetWebBuilderMenuPreview(id) `method`

##### Summary

WebBuilder Menu Preview Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerCoreWebUserApi'></a>
## ServerCoreWebUserApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Root Controller

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreWebUserApi-PostSendVerifyCode-EasyITCenter-ServerCoreWebPages-EmailVerification-'></a>
### PostSendVerifyCode(email) `method`

##### Summary

WebPages Verification Email

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [EasyITCenter.ServerCoreWebPages.EmailVerification](#T-EasyITCenter-ServerCoreWebPages-EmailVerification 'EasyITCenter.ServerCoreWebPages.EmailVerification') | The email. |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi'></a>
## ServerDbDgmlSchemaApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Schema Diagram Controller

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-#ctor-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext-'></a>
### #ctor(context) `constructor`

##### Summary

Initializes a new instance of the [](#!-DgmlSchemaApi 'DgmlSchemaApi') class.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [EasyITCenter.ServerCoreDBSettings.EasyITCenterContext](#T-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext 'EasyITCenter.ServerCoreDBSettings.EasyITCenterContext') | The context. |

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-Get'></a>
### Get() `method`

##### Summary

Creates a DGML class diagram of most of the entities in the project wher you go to
localhost/dgml See https://github.com/ErikEJ/SqlCeToolbox/wiki/EF-Core-Power-Tools

##### Returns

a DGML class diagram

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Controllers-ServerDocApi'></a>
## ServerDocApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='F-EasyITCenter-Controllers-ServerDocApi-_hostingEnvironment'></a>
### _hostingEnvironment `constants`

##### Summary

For wwwroot folder Update 
with detect changes 
and modify static pages

<a name='M-EasyITCenter-Controllers-ServerDocApi-GenerateMdBook'></a>
### GenerateMdBook() `method`

##### Summary

Server Inteligent Documentation Generator Api

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerEmailerApi'></a>
## ServerEmailerApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Email sender Api for logged Communication

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices'></a>
## ServerEnablingServices `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Server Core Enabling Settings of Security, API Communications, Technologies, Modules,Rules,
Rights, Rules, Rights, Conditions, Cors, Cookies, Formats, Services, Logging, etc..

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableCors-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableCors() `method`

##### Summary

Server Cors Configuration

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableEndpoints-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableEndpoints() `method`

##### Summary

Server Endpoints Configuration

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableLogging-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableLogging(app,loggerFactory) `method`

##### Summary

Enable Server Logging in Debug Mode

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder@](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder@ 'Microsoft.AspNetCore.Builder.IApplicationBuilder@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableWebSocket-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableWebSocket(app) `method`

##### Summary

Server WebSocket Configuration

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder@](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder@ 'Microsoft.AspNetCore.Builder.IApplicationBuilder@') |  |

<a name='T-EasyITCenter-ServerCoreDefinition-ServerLocalDbDials'></a>
## ServerLocalDbDials `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

Special Functions: Definition of Selected tables for Optimal Using to Data nature Its saves
traffic, increases availability and for Example implemented Language is in Develop Auto Fill
Table when is First Using Its can be used for more Dials

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerModules'></a>
## ServerModules `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Configure Server Ad-dons and Modules

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureCoreAdmin-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureCoreAdmin(services) `method`

##### Summary

Server Module: Automatic DB Data Manager for work with data directly
services.AddCoreAdmin("Admin"); is Token RoleName

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureDocumentation-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDocumentation(services) `method`

##### Summary

Server Module: Generted Developer Documentation for Defvelopers Documentation contain
full Server Structure for extremelly simple developing

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureHealthCheck-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureHealthCheck(services) `method`

##### Summary

Server Module: Automatic DB Data Manager for work with data directly
Extreme Posibilities https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureSwagger-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureSwagger(services) `method`

##### Summary

Server Module: Swagger Api Doc Generator And Online Tester Configuration

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling'></a>
## ServerModulesEnabling `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Enable Configured Server Ad-dons and Modules

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableCoreAdmin-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableCoreAdmin() `method`

##### Summary

Server Module: Enable Swagger Api Doc Generator And Online Tester

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableDocumentation-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableDocumentation() `method`

##### Summary

Server Module: Enable Generated Developer Documentation

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableSwagger-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableSwagger() `method`

##### Summary

Server Module: Enable Swagger Api Doc Generator And Online Tester

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDefinition-ServerProviderHealthCheck'></a>
## ServerProviderHealthCheck `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

Custom Registering 
Data are on /HealthResultService

##### See Also

- [Microsoft.Extensions.Diagnostics.HealthChecks.IHealthCheck](#T-Microsoft-Extensions-Diagnostics-HealthChecks-IHealthCheck 'Microsoft.Extensions.Diagnostics.HealthChecks.IHealthCheck')

<a name='M-EasyITCenter-ServerCoreDefinition-ServerProviderHealthCheck-Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync-Microsoft-Extensions-Diagnostics-HealthChecks-HealthCheckContext,System-Threading-CancellationToken-'></a>
### Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync(context,cancellationToken) `method`

##### Summary

Interface for Registering Custom  Defined Checks on Startup
https://dilanlivera.dev/add-health-checks-in-aspnet-core
https://medium.com/@suman.chatterjee/net-core-web-api-custom-health-check-13c6350b5f0c
https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Microsoft.Extensions.Diagnostics.HealthChecks.HealthCheckContext](#T-Microsoft-Extensions-Diagnostics-HealthChecks-HealthCheckContext 'Microsoft.Extensions.Diagnostics.HealthChecks.HealthCheckContext') |  |
| cancellationToken | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerRestartApi'></a>
## ServerRestartApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreDefinition-ServerRuntimeData'></a>
## ServerRuntimeData `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

The server runtime data.

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-CentralWebSocketList'></a>
### CentralWebSocketList `constants`

##### Summary

Central WebSocket List for Easy one place Using

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-LocalDBTableList'></a>
### LocalDBTableList `constants`

##### Summary

The local db table list.

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerArgs'></a>
### ServerArgs `constants`

##### Summary

Server Starup Args

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerCancelToken'></a>
### ServerCancelToken `constants`

##### Summary

Cancellation Token for Server Remote Control

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerCoreStatus'></a>
### ServerCoreStatus `constants`

##### Summary

Server Core Status

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerFTPProvider'></a>
### ServerFTPProvider `constants`

##### Summary

Server Securited FTP Provider for Remote Control

<a name='F-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ServerRestartRequest'></a>
### ServerRestartRequest `constants`

##### Summary

Server Restart Request Indicator

<a name='P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-ConfigFile'></a>
### ConfigFile `property`

##### Summary

Gets or Sets the configure file.

<a name='P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-DataPath'></a>
### DataPath `property`

##### Summary

Gets or Sets the data path.

<a name='P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-DebugMode'></a>
### DebugMode `property`

##### Summary

Gets or Sets the debug mode.

<a name='P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-Setting_folder'></a>
### Setting_folder `property`

##### Summary

Gets or Sets the setting_folder.

<a name='P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-Startup_path'></a>
### Startup_path `property`

##### Summary

Gets or Sets the startup_path.

<a name='P-EasyITCenter-ServerCoreDefinition-ServerRuntimeData-UserPath'></a>
### UserPath `property`

##### Summary

Gets or Sets the configure file.

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerWebPagesConfigApi'></a>
## ServerWebPagesConfigApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Root Controller 
Used by Server Webpages

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesConfigApi-Index'></a>
### Index() `method`

##### Summary

Server Root "/" Redirection to "server" Folder

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreWebPages-ServerWebPagesLogin'></a>
## ServerWebPagesLogin `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Custom Class For Login over Server Web Pages

<a name='T-EasyITCenter-ServerCoreWebPages-ServerWebPagesToken'></a>
## ServerWebPagesToken `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Server WebPages Communication Token Definition
for Security content

<a name='T-EasyITCenter-ServerCoreDBSettings-SetReportFilter'></a>
## SetReportFilter `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Model Extension Definitions Its API Filter, Extended Classes, Translation, etc

<a name='T-EasyITCenter-ServerCoreDBSettings-SitemapController'></a>
## SitemapController `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Sitemap.xml Routing

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-Startup'></a>
## Startup `type`

##### Namespace

EasyITCenter

##### Summary

Server Startup Definitions

<a name='M-EasyITCenter-Startup-Configure-Microsoft-AspNetCore-Builder-IApplicationBuilder,Microsoft-Extensions-Hosting-IHostApplicationLifetime-'></a>
### Configure(app,serverLifetime) `method`

##### Summary

Server Core: Main Enabling of Server Services, Technologies, Modules, etc..

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder 'Microsoft.AspNetCore.Builder.IApplicationBuilder') |  |
| serverLifetime | [Microsoft.Extensions.Hosting.IHostApplicationLifetime](#T-Microsoft-Extensions-Hosting-IHostApplicationLifetime 'Microsoft.Extensions.Hosting.IHostApplicationLifetime') |  |

<a name='M-EasyITCenter-Startup-ConfigureServices-Microsoft-Extensions-DependencyInjection-IServiceCollection-'></a>
### ConfigureServices(services) `method`

##### Summary

Server Core: Main Configure of Server Services, Technologies, Modules, etc..

##### Returns

void.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection 'Microsoft.Extensions.DependencyInjection.IServiceCollection') |  |

<a name='T-EasyITCenter-Controllers-SystemDocApi'></a>
## SystemDocApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='F-EasyITCenter-Controllers-SystemDocApi-_hostingEnvironment'></a>
### _hostingEnvironment `constants`

##### Summary

For wwwroot folder Update 
with detect changes 
and modify static pages

<a name='M-EasyITCenter-Controllers-SystemDocApi-GetMdDocumentPreview-System-Int32-'></a>
### GetMdDocumentPreview() `method`

##### Summary

Documentation Code Manager Html Preview Api
Startup Viewer

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Controllers-SystemDocApi-GetMdLibraryPreview-System-Int32-'></a>
### GetMdLibraryPreview() `method`

##### Summary

Documentation Code Manager Html Preview Api
Startup Viewer

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreWebPages-UserConfig'></a>
## UserConfig `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Custom Class For UserConfig over Server Web Pages

<a name='T-EasyITCenter-ServerCoreWebPages-WebMessage'></a>
## WebMessage `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Custom WebMessage Class For Server Web Pages

<a name='T-EasyITCenter-ServerCoreWebPages-WebRegistration'></a>
## WebRegistration `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

WebPages User Registration class

<a name='T-EasyITCenter-ServerCoreDefinition-WebSocketExtension'></a>
## WebSocketExtension `type`

##### Namespace

EasyITCenter.ServerCoreDefinition

##### Summary

WebSocket Extension Definition For 
Simple Central Control All Connection
By Connection Path and Timeout

<a name='T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogProvider'></a>
## WebSocketLogProvider `type`

##### Namespace

EasyITCenter.ServerCoreDefinition.ServerCoreHelpers

##### Summary

!!! Implemented
Server Core WebSocket System LogProvider Stream
This Is Special Serice For Remote Monitoring
On More Devices in OneTime

##### See Also

- [Microsoft.Extensions.Logging.ILoggerProvider](#T-Microsoft-Extensions-Logging-ILoggerProvider 'Microsoft.Extensions.Logging.ILoggerProvider')

<a name='T-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger'></a>
## WebSocketLogger `type`

##### Namespace

EasyITCenter.ServerCoreDefinition.ServerCoreHelpers

##### Summary

Server Core WebSocket System Logger Interface

##### See Also

- [Microsoft.Extensions.Logging.ILogger](#T-Microsoft-Extensions-Logging-ILogger 'Microsoft.Extensions.Logging.ILogger')

<a name='M-EasyITCenter-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger-Log``1-Microsoft-Extensions-Logging-LogLevel,Microsoft-Extensions-Logging-EventId,``0,System-Exception,System-Func{``0,System-Exception,System-String}-'></a>
### Log\`\`1(logLevel,eventId,state,exception,formatter) `method`

##### Summary

Used to log the entry.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logLevel | [Microsoft.Extensions.Logging.LogLevel](#T-Microsoft-Extensions-Logging-LogLevel 'Microsoft.Extensions.Logging.LogLevel') | An instance of [LogLevel](#T-Microsoft-Extensions-Logging-LogLevel 'Microsoft.Extensions.Logging.LogLevel'). |
| eventId | [Microsoft.Extensions.Logging.EventId](#T-Microsoft-Extensions-Logging-EventId 'Microsoft.Extensions.Logging.EventId') | The event's ID. An instance of [EventId](#T-Microsoft-Extensions-Logging-EventId 'Microsoft.Extensions.Logging.EventId'). |
| state | [\`\`0](#T-``0 '``0') | The event's state. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The event's exception. An instance of [Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |
| formatter | [System.Func{\`\`0,System.Exception,System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{``0,System.Exception,System.String}') | A delegate that formats |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| TState |  |
