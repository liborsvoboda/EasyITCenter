<a name='assembly'></a>
# EasyITCenter

## Contents

- [ApiUrls](#T-EasyITCenter-Api-ApiUrls 'EasyITCenter.Api.ApiUrls')
- [App](#T-EasyITCenter-App 'EasyITCenter.App')
  - [#ctor()](#M-EasyITCenter-App-#ctor 'EasyITCenter.App.#ctor')
  - [SystemRuntimeData](#F-EasyITCenter-App-SystemRuntimeData 'EasyITCenter.App.SystemRuntimeData')
  - [TiltReceiptDoc](#F-EasyITCenter-App-TiltReceiptDoc 'EasyITCenter.App.TiltReceiptDoc')
  - [AppQuitRequest(silent)](#M-EasyITCenter-App-AppQuitRequest-System-Boolean- 'EasyITCenter.App.AppQuitRequest(System.Boolean)')
  - [AppRestart()](#M-EasyITCenter-App-AppRestart 'EasyITCenter.App.AppRestart')
  - [ApplicationLogging(ex,customMessage)](#M-EasyITCenter-App-ApplicationLogging-System-Exception,System-String- 'EasyITCenter.App.ApplicationLogging(System.Exception,System.String)')
  - [ApplicationQuit()](#M-EasyITCenter-App-ApplicationQuit 'EasyITCenter.App.ApplicationQuit')
  - [CurrentDomain_FirstChanceException(sender,e)](#M-EasyITCenter-App-CurrentDomain_FirstChanceException-System-Object,System-Runtime-ExceptionServices-FirstChanceExceptionEventArgs- 'EasyITCenter.App.CurrentDomain_FirstChanceException(System.Object,System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs)')
  - [InitializeComponent()](#M-EasyITCenter-App-InitializeComponent 'EasyITCenter.App.InitializeComponent')
  - [Main()](#M-EasyITCenter-App-Main 'EasyITCenter.App.Main')
  - [OnStartup(e)](#M-EasyITCenter-App-OnStartup-System-Windows-StartupEventArgs- 'EasyITCenter.App.OnStartup(System.Windows.StartupEventArgs)')
  - [RootAppKeyDownController(sender,e)](#M-EasyITCenter-App-RootAppKeyDownController-System-Object,System-Windows-Input-KeyEventArgs- 'EasyITCenter.App.RootAppKeyDownController(System.Object,System.Windows.Input.KeyEventArgs)')
- [AppVersion](#T-EasyITCenter-Classes-AppVersion 'EasyITCenter.Classes.AppVersion')
- [Authentification](#T-EasyITCenter-GlobalClasses-Authentification 'EasyITCenter.GlobalClasses.Authentification')
- [BasicAttachmentListPage](#T-EasyITCenter-Pages-BasicAttachmentListPage 'EasyITCenter.Pages.BasicAttachmentListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicAttachmentListPage-InitializeComponent 'EasyITCenter.Pages.BasicAttachmentListPage.InitializeComponent')
- [BasicCalendarListPage](#T-EasyITCenter-Pages-BasicCalendarListPage 'EasyITCenter.Pages.BasicCalendarListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicCalendarListPage-InitializeComponent 'EasyITCenter.Pages.BasicCalendarListPage.InitializeComponent')
- [BasicCurrencyListPage](#T-EasyITCenter-Pages-BasicCurrencyListPage 'EasyITCenter.Pages.BasicCurrencyListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicCurrencyListPage-InitializeComponent 'EasyITCenter.Pages.BasicCurrencyListPage.InitializeComponent')
- [BasicImageGalleryListPage](#T-EasyITCenter-Pages-BasicImageGalleryListPage 'EasyITCenter.Pages.BasicImageGalleryListPage')
  - [ClearGallery()](#M-EasyITCenter-Pages-BasicImageGalleryListPage-ClearGallery 'EasyITCenter.Pages.BasicImageGalleryListPage.ClearGallery')
  - [GrayscaleClick(sender,e)](#M-EasyITCenter-Pages-BasicImageGalleryListPage-GrayscaleClick-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.BasicImageGalleryListPage.GrayscaleClick(System.Object,System.Windows.RoutedEventArgs)')
  - [ImageChangesCancelClick(sender,e)](#M-EasyITCenter-Pages-BasicImageGalleryListPage-ImageChangesCancelClick-System-Object,System-Windows-Input-MouseButtonEventArgs- 'EasyITCenter.Pages.BasicImageGalleryListPage.ImageChangesCancelClick(System.Object,System.Windows.Input.MouseButtonEventArgs)')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicImageGalleryListPage-InitializeComponent 'EasyITCenter.Pages.BasicImageGalleryListPage.InitializeComponent')
  - [LoadFromServer()](#M-EasyITCenter-Pages-BasicImageGalleryListPage-LoadFromServer-System-Int32- 'EasyITCenter.Pages.BasicImageGalleryListPage.LoadFromServer(System.Int32)')
  - [RefreshViewPhoto(selectedPhotoId)](#M-EasyITCenter-Pages-BasicImageGalleryListPage-RefreshViewPhoto-System-Nullable{System-Int32}- 'EasyITCenter.Pages.BasicImageGalleryListPage.RefreshViewPhoto(System.Nullable{System.Int32})')
  - [SaveImageToServer(onlyThis)](#M-EasyITCenter-Pages-BasicImageGalleryListPage-SaveImageToServer-System-Nullable{System-Int32}- 'EasyITCenter.Pages.BasicImageGalleryListPage.SaveImageToServer(System.Nullable{System.Int32})')
- [BasicItemListPage](#T-EasyITCenter-Pages-BasicItemListPage 'EasyITCenter.Pages.BasicItemListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicItemListPage-InitializeComponent 'EasyITCenter.Pages.BasicItemListPage.InitializeComponent')
- [BasicUnitListPage](#T-EasyITCenter-Pages-BasicUnitListPage 'EasyITCenter.Pages.BasicUnitListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicUnitListPage-InitializeComponent 'EasyITCenter.Pages.BasicUnitListPage.InitializeComponent')
- [BasicVatListPage](#T-EasyITCenter-Pages-BasicVatListPage 'EasyITCenter.Pages.BasicVatListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BasicVatListPage-InitializeComponent 'EasyITCenter.Pages.BasicVatListPage.InitializeComponent')
- [BusinessAddressListPage](#T-EasyITCenter-Pages-BusinessAddressListPage 'EasyITCenter.Pages.BusinessAddressListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessAddressListPage-InitializeComponent 'EasyITCenter.Pages.BusinessAddressListPage.InitializeComponent')
- [BusinessBranchListPage](#T-EasyITCenter-Pages-BusinessBranchListPage 'EasyITCenter.Pages.BusinessBranchListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessBranchListPage-InitializeComponent 'EasyITCenter.Pages.BusinessBranchListPage.InitializeComponent')
- [BusinessCreditNoteListPage](#T-EasyITCenter-Pages-BusinessCreditNoteListPage 'EasyITCenter.Pages.BusinessCreditNoteListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessCreditNoteListPage-InitializeComponent 'EasyITCenter.Pages.BusinessCreditNoteListPage.InitializeComponent')
- [BusinessExchangeRateListPage](#T-EasyITCenter-Pages-BusinessExchangeRateListPage 'EasyITCenter.Pages.BusinessExchangeRateListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessExchangeRateListPage-InitializeComponent 'EasyITCenter.Pages.BusinessExchangeRateListPage.InitializeComponent')
- [BusinessIncomingInvoiceListPage](#T-EasyITCenter-Pages-BusinessIncomingInvoiceListPage 'EasyITCenter.Pages.BusinessIncomingInvoiceListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessIncomingInvoiceListPage-InitializeComponent 'EasyITCenter.Pages.BusinessIncomingInvoiceListPage.InitializeComponent')
- [BusinessIncomingOrderListPage](#T-EasyITCenter-Pages-BusinessIncomingOrderListPage 'EasyITCenter.Pages.BusinessIncomingOrderListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessIncomingOrderListPage-InitializeComponent 'EasyITCenter.Pages.BusinessIncomingOrderListPage.InitializeComponent')
- [BusinessMaturityListPage](#T-EasyITCenter-Pages-BusinessMaturityListPage 'EasyITCenter.Pages.BusinessMaturityListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessMaturityListPage-InitializeComponent 'EasyITCenter.Pages.BusinessMaturityListPage.InitializeComponent')
- [BusinessNotesListPage](#T-EasyITCenter-Pages-BusinessNotesListPage 'EasyITCenter.Pages.BusinessNotesListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessNotesListPage-InitializeComponent 'EasyITCenter.Pages.BusinessNotesListPage.InitializeComponent')
- [BusinessOfferListPage](#T-EasyITCenter-Pages-BusinessOfferListPage 'EasyITCenter.Pages.BusinessOfferListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessOfferListPage-InitializeComponent 'EasyITCenter.Pages.BusinessOfferListPage.InitializeComponent')
- [BusinessOutgoingInvoiceListPage](#T-EasyITCenter-Pages-BusinessOutgoingInvoiceListPage 'EasyITCenter.Pages.BusinessOutgoingInvoiceListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessOutgoingInvoiceListPage-InitializeComponent 'EasyITCenter.Pages.BusinessOutgoingInvoiceListPage.InitializeComponent')
- [BusinessOutgoingOrderListPage](#T-EasyITCenter-Pages-BusinessOutgoingOrderListPage 'EasyITCenter.Pages.BusinessOutgoingOrderListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessOutgoingOrderListPage-InitializeComponent 'EasyITCenter.Pages.BusinessOutgoingOrderListPage.InitializeComponent')
- [BusinessPaymentMethodListPage](#T-EasyITCenter-Pages-BusinessPaymentMethodListPage 'EasyITCenter.Pages.BusinessPaymentMethodListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessPaymentMethodListPage-InitializeComponent 'EasyITCenter.Pages.BusinessPaymentMethodListPage.InitializeComponent')
- [BusinessPaymentStatusListPage](#T-EasyITCenter-Pages-BusinessPaymentStatusListPage 'EasyITCenter.Pages.BusinessPaymentStatusListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessPaymentStatusListPage-InitializeComponent 'EasyITCenter.Pages.BusinessPaymentStatusListPage.InitializeComponent')
- [BusinessReceiptListPage](#T-EasyITCenter-Pages-BusinessReceiptListPage 'EasyITCenter.Pages.BusinessReceiptListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessReceiptListPage-InitializeComponent 'EasyITCenter.Pages.BusinessReceiptListPage.InitializeComponent')
- [BusinessWarehouseListPage](#T-EasyITCenter-Pages-BusinessWarehouseListPage 'EasyITCenter.Pages.BusinessWarehouseListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-BusinessWarehouseListPage-InitializeComponent 'EasyITCenter.Pages.BusinessWarehouseListPage.InitializeComponent')
- [ClientSettingsPage](#T-EasyITCenter-Pages-ClientSettingsPage 'EasyITCenter.Pages.ClientSettingsPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ClientSettingsPage-InitializeComponent 'EasyITCenter.Pages.ClientSettingsPage.InitializeComponent')
- [Config](#T-EasyITCenter-Classes-Config 'EasyITCenter.Classes.Config')
- [CrashReporterSettings](#T-EasyITCenter-SystemConfiguration-CrashReporterSettings 'EasyITCenter.SystemConfiguration.CrashReporterSettings')
  - [_ReportCrash](#F-EasyITCenter-SystemConfiguration-CrashReporterSettings-_ReportCrash 'EasyITCenter.SystemConfiguration.CrashReporterSettings._ReportCrash')
- [DBOperations](#T-EasyITCenter-GlobalOperations-DBOperations 'EasyITCenter.GlobalOperations.DBOperations')
  - [DBTranslation(systemName,notCreateNew,comaList,lang)](#M-EasyITCenter-GlobalOperations-DBOperations-DBTranslation-System-String,System-Boolean,System-Boolean,System-String- 'EasyITCenter.GlobalOperations.DBOperations.DBTranslation(System.String,System.Boolean,System.Boolean,System.String)')
  - [LoadOrRefreshUserData()](#M-EasyITCenter-GlobalOperations-DBOperations-LoadOrRefreshUserData 'EasyITCenter.GlobalOperations.DBOperations.LoadOrRefreshUserData')
  - [LoadStartupDBData()](#M-EasyITCenter-GlobalOperations-DBOperations-LoadStartupDBData 'EasyITCenter.GlobalOperations.DBOperations.LoadStartupDBData')
  - [SaveSystemFailMessage(message,logLevel)](#M-EasyITCenter-GlobalOperations-DBOperations-SaveSystemFailMessage-System-String,System-String- 'EasyITCenter.GlobalOperations.DBOperations.SaveSystemFailMessage(System.String,System.String)')
  - [SetNonUserDataOnSuccessStartUp()](#M-EasyITCenter-GlobalOperations-DBOperations-SetNonUserDataOnSuccessStartUp 'EasyITCenter.GlobalOperations.DBOperations.SetNonUserDataOnSuccessStartUp')
- [DBResultMessage](#T-EasyITCenter-Api-DBResultMessage 'EasyITCenter.Api.DBResultMessage')
- [DataOperations](#T-EasyITCenter-GlobalOperations-DataOperations 'EasyITCenter.GlobalOperations.DataOperations')
  - [NullSetInExtensionFields\`\`1()](#M-EasyITCenter-GlobalOperations-DataOperations-NullSetInExtensionFields``1-``0@- 'EasyITCenter.GlobalOperations.DataOperations.NullSetInExtensionFields``1(``0@)')
  - [ParameterCheck(parameterName)](#M-EasyITCenter-GlobalOperations-DataOperations-ParameterCheck-System-String- 'EasyITCenter.GlobalOperations.DataOperations.ParameterCheck(System.String)')
- [DataViewSupport](#T-EasyITCenter-Classes-DataViewSupport 'EasyITCenter.Classes.DataViewSupport')
- [DocSrvDocumentationCodeLibraryListPage](#T-EasyITCenter-Pages-DocSrvDocumentationCodeLibraryListPage 'EasyITCenter.Pages.DocSrvDocumentationCodeLibraryListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-DocSrvDocumentationCodeLibraryListPage-InitializeComponent 'EasyITCenter.Pages.DocSrvDocumentationCodeLibraryListPage.InitializeComponent')
- [DocSrvDocumentationGroupListPage](#T-EasyITCenter-Pages-DocSrvDocumentationGroupListPage 'EasyITCenter.Pages.DocSrvDocumentationGroupListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-DocSrvDocumentationGroupListPage-InitializeComponent 'EasyITCenter.Pages.DocSrvDocumentationGroupListPage.InitializeComponent')
- [DocSrvDocumentationListPage](#T-EasyITCenter-Pages-DocSrvDocumentationListPage 'EasyITCenter.Pages.DocSrvDocumentationListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-DocSrvDocumentationListPage-InitializeComponent 'EasyITCenter.Pages.DocSrvDocumentationListPage.InitializeComponent')
- [DocumentItemList](#T-EasyITCenter-GlobalClasses-DocumentItemList 'EasyITCenter.GlobalClasses.DocumentItemList')
- [FileOperations](#T-EasyITCenter-GlobalOperations-FileOperations 'EasyITCenter.GlobalOperations.FileOperations')
  - [CopyFiles(sourcePath,destinationPath)](#M-EasyITCenter-GlobalOperations-FileOperations-CopyFiles-System-String,System-String- 'EasyITCenter.GlobalOperations.FileOperations.CopyFiles(System.String,System.String)')
  - [CreateFile(file)](#M-EasyITCenter-GlobalOperations-FileOperations-CreateFile-System-String- 'EasyITCenter.GlobalOperations.FileOperations.CreateFile(System.String)')
  - [FileDetectEncoding(FileName)](#M-EasyITCenter-GlobalOperations-FileOperations-FileDetectEncoding-System-String- 'EasyITCenter.GlobalOperations.FileOperations.FileDetectEncoding(System.String)')
  - [LoadSettings()](#M-EasyITCenter-GlobalOperations-FileOperations-LoadSettings 'EasyITCenter.GlobalOperations.FileOperations.LoadSettings')
  - [SaveSettings()](#M-EasyITCenter-GlobalOperations-FileOperations-SaveSettings 'EasyITCenter.GlobalOperations.FileOperations.SaveSettings')
  - [VncServerIniFile(path)](#M-EasyITCenter-GlobalOperations-FileOperations-VncServerIniFile-System-String- 'EasyITCenter.GlobalOperations.FileOperations.VncServerIniFile(System.String)')
- [GeneratedInternalTypeHelper](#T-XamlGeneratedNamespace-GeneratedInternalTypeHelper 'XamlGeneratedNamespace.GeneratedInternalTypeHelper')
  - [AddEventHandler()](#M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-AddEventHandler-System-Reflection-EventInfo,System-Object,System-Delegate- 'XamlGeneratedNamespace.GeneratedInternalTypeHelper.AddEventHandler(System.Reflection.EventInfo,System.Object,System.Delegate)')
  - [CreateDelegate()](#M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-CreateDelegate-System-Type,System-Object,System-String- 'XamlGeneratedNamespace.GeneratedInternalTypeHelper.CreateDelegate(System.Type,System.Object,System.String)')
  - [CreateInstance()](#M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-CreateInstance-System-Type,System-Globalization-CultureInfo- 'XamlGeneratedNamespace.GeneratedInternalTypeHelper.CreateInstance(System.Type,System.Globalization.CultureInfo)')
  - [GetPropertyValue()](#M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-GetPropertyValue-System-Reflection-PropertyInfo,System-Object,System-Globalization-CultureInfo- 'XamlGeneratedNamespace.GeneratedInternalTypeHelper.GetPropertyValue(System.Reflection.PropertyInfo,System.Object,System.Globalization.CultureInfo)')
  - [SetPropertyValue()](#M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-SetPropertyValue-System-Reflection-PropertyInfo,System-Object,System-Object,System-Globalization-CultureInfo- 'XamlGeneratedNamespace.GeneratedInternalTypeHelper.SetPropertyValue(System.Reflection.PropertyInfo,System.Object,System.Object,System.Globalization.CultureInfo)')
- [GlobalEmailTemplateListPage](#T-EasyITCenter-Pages-GlobalEmailTemplateListPage 'EasyITCenter.Pages.GlobalEmailTemplateListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-GlobalEmailTemplateListPage-InitializeComponent 'EasyITCenter.Pages.GlobalEmailTemplateListPage.InitializeComponent')
- [GlobalLanguageListPage](#T-EasyITCenter-Pages-GlobalLanguageListPage 'EasyITCenter.Pages.GlobalLanguageListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-GlobalLanguageListPage-InitializeComponent 'EasyITCenter.Pages.GlobalLanguageListPage.InitializeComponent')
- [GlobalMottoListPage](#T-EasyITCenter-Pages-GlobalMottoListPage 'EasyITCenter.Pages.GlobalMottoListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-GlobalMottoListPage-InitializeComponent 'EasyITCenter.Pages.GlobalMottoListPage.InitializeComponent')
- [GlobalRuntimeMonitor](#T-EasyITCenter-GlobalClasses-GlobalRuntimeMonitor 'EasyITCenter.GlobalClasses.GlobalRuntimeMonitor')
- [GlobalUserListPage](#T-EasyITCenter-Pages-GlobalUserListPage 'EasyITCenter.Pages.GlobalUserListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-GlobalUserListPage-InitializeComponent 'EasyITCenter.Pages.GlobalUserListPage.InitializeComponent')
- [GlobalUserRoleListPage](#T-EasyITCenter-Pages-GlobalUserRoleListPage 'EasyITCenter.Pages.GlobalUserRoleListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-GlobalUserRoleListPage-InitializeComponent 'EasyITCenter.Pages.GlobalUserRoleListPage.InitializeComponent')
- [GraphsPage](#T-EasyITCenter-Pages-GraphsPage 'EasyITCenter.Pages.GraphsPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-GraphsPage-InitializeComponent 'EasyITCenter.Pages.GraphsPage.InitializeComponent')
- [HardwareOperations](#T-EasyITCenter-GlobalOperations-HardwareOperations 'EasyITCenter.GlobalOperations.HardwareOperations')
  - [ApplicationKeyboardMaping(e)](#M-EasyITCenter-GlobalOperations-HardwareOperations-ApplicationKeyboardMaping-System-Windows-Input-KeyEventArgs- 'EasyITCenter.GlobalOperations.HardwareOperations.ApplicationKeyboardMaping(System.Windows.Input.KeyEventArgs)')
- [IconMaker](#T-EasyITCenter-GlobalGenerators-IconMaker 'EasyITCenter.GlobalGenerators.IconMaker')
  - [Icon(color,iconPath)](#M-EasyITCenter-GlobalGenerators-IconMaker-Icon-System-Windows-Media-Color,System-String- 'EasyITCenter.GlobalGenerators.IconMaker.Icon(System.Windows.Media.Color,System.String)')
- [Language](#T-EasyITCenter-Classes-Language 'EasyITCenter.Classes.Language')
- [LicSrvLicenseActivationFailListPage](#T-EasyITCenter-Pages-LicSrvLicenseActivationFailListPage 'EasyITCenter.Pages.LicSrvLicenseActivationFailListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-LicSrvLicenseActivationFailListPage-InitializeComponent 'EasyITCenter.Pages.LicSrvLicenseActivationFailListPage.InitializeComponent')
- [LicSrvLicenseAlgorithmListPage](#T-EasyITCenter-Pages-LicSrvLicenseAlgorithmListPage 'EasyITCenter.Pages.LicSrvLicenseAlgorithmListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-LicSrvLicenseAlgorithmListPage-InitializeComponent 'EasyITCenter.Pages.LicSrvLicenseAlgorithmListPage.InitializeComponent')
- [LicSrvUsedLicenseListPage](#T-EasyITCenter-Pages-LicSrvUsedLicenseListPage 'EasyITCenter.Pages.LicSrvUsedLicenseListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-LicSrvUsedLicenseListPage-InitializeComponent 'EasyITCenter.Pages.LicSrvUsedLicenseListPage.InitializeComponent')
- [MainWindow](#T-EasyITCenter-MainWindow 'EasyITCenter.MainWindow')
  - [#ctor()](#M-EasyITCenter-MainWindow-#ctor 'EasyITCenter.MainWindow.#ctor')
  - [_hackyIsFirstWindow](#F-EasyITCenter-MainWindow-_hackyIsFirstWindow 'EasyITCenter.MainWindow._hackyIsFirstWindow')
  - [DataGridSelected](#P-EasyITCenter-MainWindow-DataGridSelected 'EasyITCenter.MainWindow.DataGridSelected')
  - [DataGridSelectedIdListIndicator](#P-EasyITCenter-MainWindow-DataGridSelectedIdListIndicator 'EasyITCenter.MainWindow.DataGridSelectedIdListIndicator')
  - [DgRefresh](#P-EasyITCenter-MainWindow-DgRefresh 'EasyITCenter.MainWindow.DgRefresh')
  - [DownloadShow](#P-EasyITCenter-MainWindow-DownloadShow 'EasyITCenter.MainWindow.DownloadShow')
  - [DownloadStatus](#P-EasyITCenter-MainWindow-DownloadStatus 'EasyITCenter.MainWindow.DownloadStatus')
  - [OperationRunning](#P-EasyITCenter-MainWindow-OperationRunning 'EasyITCenter.MainWindow.OperationRunning')
  - [ProgressRing](#P-EasyITCenter-MainWindow-ProgressRing 'EasyITCenter.MainWindow.ProgressRing')
  - [RunReleaseMode](#P-EasyITCenter-MainWindow-RunReleaseMode 'EasyITCenter.MainWindow.RunReleaseMode')
  - [ServerLoggerSource](#P-EasyITCenter-MainWindow-ServerLoggerSource 'EasyITCenter.MainWindow.ServerLoggerSource')
  - [ServiceRunning](#P-EasyITCenter-MainWindow-ServiceRunning 'EasyITCenter.MainWindow.ServiceRunning')
  - [ServiceStatus](#P-EasyITCenter-MainWindow-ServiceStatus 'EasyITCenter.MainWindow.ServiceStatus')
  - [ShowSystemLogger](#P-EasyITCenter-MainWindow-ShowSystemLogger 'EasyITCenter.MainWindow.ShowSystemLogger')
  - [SystemLogger](#P-EasyITCenter-MainWindow-SystemLogger 'EasyITCenter.MainWindow.SystemLogger')
  - [UserLogged](#P-EasyITCenter-MainWindow-UserLogged 'EasyITCenter.MainWindow.UserLogged')
  - [VncRunning](#P-EasyITCenter-MainWindow-VncRunning 'EasyITCenter.MainWindow.VncRunning')
  - [AddOrRemoveTab(headerName,tabPage,tagText)](#M-EasyITCenter-MainWindow-AddOrRemoveTab-System-String,System-Object,System-String- 'EasyITCenter.MainWindow.AddOrRemoveTab(System.String,System.Object,System.String)')
  - [BtnKeyboardClick(sender,e)](#M-EasyITCenter-MainWindow-BtnKeyboardClick-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.BtnKeyboardClick(System.Object,System.Windows.RoutedEventArgs)')
  - [BtnShowLoggerClick(sender,e)](#M-EasyITCenter-MainWindow-BtnShowLoggerClick-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.BtnShowLoggerClick(System.Object,System.Windows.RoutedEventArgs)')
  - [Btn_LaunchHelp_Click(sender,e)](#M-EasyITCenter-MainWindow-Btn_LaunchHelp_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.Btn_LaunchHelp_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [Btn_LaunchMetroTheme_Click(sender,e)](#M-EasyITCenter-MainWindow-Btn_LaunchMetroTheme_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.Btn_LaunchMetroTheme_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [Btn_about_click(sender,e)](#M-EasyITCenter-MainWindow-Btn_about_click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.Btn_about_click(System.Object,System.Windows.RoutedEventArgs)')
  - [CbFilterDropDownClosed(sender,e)](#M-EasyITCenter-MainWindow-CbFilterDropDownClosed-System-Object,System-EventArgs- 'EasyITCenter.MainWindow.CbFilterDropDownClosed(System.Object,System.EventArgs)')
  - [CbPrintReportsSelected(sender,e)](#M-EasyITCenter-MainWindow-CbPrintReportsSelected-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.MainWindow.CbPrintReportsSelected(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
  - [FilterField_SelectionChanged(sender,e)](#M-EasyITCenter-MainWindow-FilterField_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.MainWindow.FilterField_SelectionChanged(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
  - [InitializeComponent()](#M-EasyITCenter-MainWindow-InitializeComponent 'EasyITCenter.MainWindow.InitializeComponent')
  - [LoadUserMenu()](#M-EasyITCenter-MainWindow-LoadUserMenu 'EasyITCenter.MainWindow.LoadUserMenu')
  - [MainGrid_IsDraggingChanged(sender,e)](#M-EasyITCenter-MainWindow-MainGrid_IsDraggingChanged-System-Object,System-Windows-RoutedPropertyChangedEventArgs{System-Boolean}- 'EasyITCenter.MainWindow.MainGrid_IsDraggingChanged(System.Object,System.Windows.RoutedPropertyChangedEventArgs{System.Boolean})')
  - [MainWindow_Closing(sender,e)](#M-EasyITCenter-MainWindow-MainWindow_Closing-System-Object,System-ComponentModel-CancelEventArgs- 'EasyITCenter.MainWindow.MainWindow_Closing(System.Object,System.ComponentModel.CancelEventArgs)')
  - [MainWindow_KeyDown(sender,e)](#M-EasyITCenter-MainWindow-MainWindow_KeyDown-System-Object,System-Windows-Input-KeyEventArgs- 'EasyITCenter.MainWindow.MainWindow_KeyDown(System.Object,System.Windows.Input.KeyEventArgs)')
  - [MainWindow_Loaded(sender,e)](#M-EasyITCenter-MainWindow-MainWindow_Loaded-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.MainWindow_Loaded(System.Object,System.Windows.RoutedEventArgs)')
  - [MainWindow_MouseLeave()](#M-EasyITCenter-MainWindow-MainWindow_MouseLeave-System-Object,System-Windows-Input-MouseEventArgs- 'EasyITCenter.MainWindow.MainWindow_MouseLeave(System.Object,System.Windows.Input.MouseEventArgs)')
  - [Menu_action_Click(sender,e)](#M-EasyITCenter-MainWindow-Menu_action_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.Menu_action_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [Mi_filter_Click(sender,e)](#M-EasyITCenter-MainWindow-Mi_filter_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.Mi_filter_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [Mi_logout_Click(sender,e)](#M-EasyITCenter-MainWindow-Mi_logout_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.Mi_logout_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [RemoveFilterItem_Click(sender,e)](#M-EasyITCenter-MainWindow-RemoveFilterItem_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.MainWindow.RemoveFilterItem_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [SetServiceStop()](#M-EasyITCenter-MainWindow-SetServiceStop 'EasyITCenter.MainWindow.SetServiceStop')
  - [ShowLoginDialog()](#M-EasyITCenter-MainWindow-ShowLoginDialog 'EasyITCenter.MainWindow.ShowLoginDialog')
  - [ShowMessageOnMainWindow(error,message,confirm)](#M-EasyITCenter-MainWindow-ShowMessageOnMainWindow-System-Boolean,System-String,System-Boolean- 'EasyITCenter.MainWindow.ShowMessageOnMainWindow(System.Boolean,System.String,System.Boolean)')
  - [StringToFilter(filterBox,advancedFilter)](#M-EasyITCenter-MainWindow-StringToFilter-System-Windows-Controls-ComboBox,System-String- 'EasyITCenter.MainWindow.StringToFilter(System.Windows.Controls.ComboBox,System.String)')
  - [SystemLoggerSourceChanged_Click(sender,e)](#M-EasyITCenter-MainWindow-SystemLoggerSourceChanged_Click-System-Object,System-EventArgs- 'EasyITCenter.MainWindow.SystemLoggerSourceChanged_Click(System.Object,System.EventArgs)')
  - [SystemTimerController(sender,e)](#M-EasyITCenter-MainWindow-SystemTimerController-System-Object,System-Timers-ElapsedEventArgs- 'EasyITCenter.MainWindow.SystemTimerController(System.Object,System.Timers.ElapsedEventArgs)')
  - [TabPanelOnSelectionChange(sender,e)](#M-EasyITCenter-MainWindow-TabPanelOnSelectionChange-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.MainWindow.TabPanelOnSelectionChange(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
  - [TiltOpenForm(translateHeader)](#M-EasyITCenter-MainWindow-TiltOpenForm-System-String- 'EasyITCenter.MainWindow.TiltOpenForm(System.String)')
- [MathTypeOperations](#T-EasyITCenter-GlobalOperations-MathTypeOperations 'EasyITCenter.GlobalOperations.MathTypeOperations')
  - [CheckTypeValue()](#M-EasyITCenter-GlobalOperations-MathTypeOperations-CheckTypeValue-System-String,System-String- 'EasyITCenter.GlobalOperations.MathTypeOperations.CheckTypeValue(System.String,System.String)')
- [MediaOperations](#T-EasyITCenter-GlobalOperations-MediaOperations 'EasyITCenter.GlobalOperations.MediaOperations')
  - [ArrayToImage(array)](#M-EasyITCenter-GlobalOperations-MediaOperations-ArrayToImage-System-Byte[]- 'EasyITCenter.GlobalOperations.MediaOperations.ArrayToImage(System.Byte[])')
  - [GetImageImmediatelly(path)](#M-EasyITCenter-GlobalOperations-MediaOperations-GetImageImmediatelly-System-String- 'EasyITCenter.GlobalOperations.MediaOperations.GetImageImmediatelly(System.String)')
  - [SaveAppScreenShot(MainWindow)](#M-EasyITCenter-GlobalOperations-MediaOperations-SaveAppScreenShot-EasyITCenter-MainWindow- 'EasyITCenter.GlobalOperations.MediaOperations.SaveAppScreenShot(EasyITCenter.MainWindow)')
- [MyCustomLifeSpanHandler](#T-EasyITCenter-Pages-TemplateWebViewPage-MyCustomLifeSpanHandler 'EasyITCenter.Pages.TemplateWebViewPage.MyCustomLifeSpanHandler')
  - [OnBeforePopup(chromiumWebBrowser,browser,frame,targetUrl,targetFrameName,targetDisposition,userGesture,popupFeatures,windowInfo,browserSettings,noJavascriptAccess,newBrowser)](#M-EasyITCenter-Pages-TemplateWebViewPage-MyCustomLifeSpanHandler-OnBeforePopup-CefSharp-IWebBrowser,CefSharp-IBrowser,CefSharp-IFrame,System-String,System-String,CefSharp-WindowOpenDisposition,System-Boolean,CefSharp-IPopupFeatures,CefSharp-IWindowInfo,CefSharp-IBrowserSettings,System-Boolean@,CefSharp-IWebBrowser@- 'EasyITCenter.Pages.TemplateWebViewPage.MyCustomLifeSpanHandler.OnBeforePopup(CefSharp.IWebBrowser,CefSharp.IBrowser,CefSharp.IFrame,System.String,System.String,CefSharp.WindowOpenDisposition,System.Boolean,CefSharp.IPopupFeatures,CefSharp.IWindowInfo,CefSharp.IBrowserSettings,System.Boolean@,CefSharp.IWebBrowser@)')
- [ProdGuidGroupListPage](#T-EasyITCenter-Pages-ProdGuidGroupListPage 'EasyITCenter.Pages.ProdGuidGroupListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ProdGuidGroupListPage-InitializeComponent 'EasyITCenter.Pages.ProdGuidGroupListPage.InitializeComponent')
- [ProdGuidOperationListPage](#T-EasyITCenter-Pages-ProdGuidOperationListPage 'EasyITCenter.Pages.ProdGuidOperationListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ProdGuidOperationListPage-InitializeComponent 'EasyITCenter.Pages.ProdGuidOperationListPage.InitializeComponent')
- [ProdGuidPartListPage](#T-EasyITCenter-Pages-ProdGuidPartListPage 'EasyITCenter.Pages.ProdGuidPartListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ProdGuidPartListPage-InitializeComponent 'EasyITCenter.Pages.ProdGuidPartListPage.InitializeComponent')
- [ProdGuidPersonListPage](#T-EasyITCenter-Pages-ProdGuidPersonListPage 'EasyITCenter.Pages.ProdGuidPersonListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ProdGuidPersonListPage-InitializeComponent 'EasyITCenter.Pages.ProdGuidPersonListPage.InitializeComponent')
- [ProdGuidWorkListPage](#T-EasyITCenter-Pages-ProdGuidWorkListPage 'EasyITCenter.Pages.ProdGuidWorkListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ProdGuidWorkListPage-InitializeComponent 'EasyITCenter.Pages.ProdGuidWorkListPage.InitializeComponent')
- [ReportSelection](#T-EasyITCenter-Classes-ReportSelection 'EasyITCenter.Classes.ReportSelection')
- [Resources](#T-EasyITCenter-Properties-Resources 'EasyITCenter.Properties.Resources')
  - [Culture](#P-EasyITCenter-Properties-Resources-Culture 'EasyITCenter.Properties.Resources.Culture')
  - [ResourceManager](#P-EasyITCenter-Properties-Resources-ResourceManager 'EasyITCenter.Properties.Resources.ResourceManager')
  - [no_photo](#P-EasyITCenter-Properties-Resources-no_photo 'EasyITCenter.Properties.Resources.no_photo')
- [ScreenSaverPage](#T-EasyITCenter-Pages-ScreenSaverPage 'EasyITCenter.Pages.ScreenSaverPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ScreenSaverPage-InitializeComponent 'EasyITCenter.Pages.ScreenSaverPage.InitializeComponent')
- [ServerBrowsablePathListPage](#T-EasyITCenter-Pages-ServerBrowsablePathListPage 'EasyITCenter.Pages.ServerBrowsablePathListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ServerBrowsablePathListPage-InitializeComponent 'EasyITCenter.Pages.ServerBrowsablePathListPage.InitializeComponent')
- [ServerHealthCheckTaskListPage](#T-EasyITCenter-Pages-ServerHealthCheckTaskListPage 'EasyITCenter.Pages.ServerHealthCheckTaskListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ServerHealthCheckTaskListPage-InitializeComponent 'EasyITCenter.Pages.ServerHealthCheckTaskListPage.InitializeComponent')
- [ServerSettingKeys](#T-EasyITCenter-Classes-ServerSettingKeys 'EasyITCenter.Classes.ServerSettingKeys')
- [ServerSettingListPage](#T-EasyITCenter-Pages-ServerSettingListPage 'EasyITCenter.Pages.ServerSettingListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ServerSettingListPage-InitializeComponent 'EasyITCenter.Pages.ServerSettingListPage.InitializeComponent')
- [ServerToolPanelDefinitionListPage](#T-EasyITCenter-Pages-ServerToolPanelDefinitionListPage 'EasyITCenter.Pages.ServerToolPanelDefinitionListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ServerToolPanelDefinitionListPage-InitializeComponent 'EasyITCenter.Pages.ServerToolPanelDefinitionListPage.InitializeComponent')
- [ServerToolPanelListPage](#T-EasyITCenter-Pages-ServerToolPanelListPage 'EasyITCenter.Pages.ServerToolPanelListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ServerToolPanelListPage-InitializeComponent 'EasyITCenter.Pages.ServerToolPanelListPage.InitializeComponent')
- [ServerToolTypeListPage](#T-EasyITCenter-Pages-ServerToolTypeListPage 'EasyITCenter.Pages.ServerToolTypeListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-ServerToolTypeListPage-InitializeComponent 'EasyITCenter.Pages.ServerToolTypeListPage.InitializeComponent')
- [SpTableList](#T-EasyITCenter-GlobalClasses-SpTableList 'EasyITCenter.GlobalClasses.SpTableList')
- [SupportPage](#T-EasyITCenter-Pages-SupportPage 'EasyITCenter.Pages.SupportPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SupportPage-InitializeComponent 'EasyITCenter.Pages.SupportPage.InitializeComponent')
- [SystemCustomPageListPage](#T-EasyITCenter-Pages-SystemCustomPageListPage 'EasyITCenter.Pages.SystemCustomPageListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemCustomPageListPage-InitializeComponent 'EasyITCenter.Pages.SystemCustomPageListPage.InitializeComponent')
- [SystemDocumentAdviceListPage](#T-EasyITCenter-Pages-SystemDocumentAdviceListPage 'EasyITCenter.Pages.SystemDocumentAdviceListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemDocumentAdviceListPage-InitializeComponent 'EasyITCenter.Pages.SystemDocumentAdviceListPage.InitializeComponent')
- [SystemDocumentTypeListPage](#T-EasyITCenter-Pages-SystemDocumentTypeListPage 'EasyITCenter.Pages.SystemDocumentTypeListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemDocumentTypeListPage-InitializeComponent 'EasyITCenter.Pages.SystemDocumentTypeListPage.InitializeComponent')
- [SystemFailListPage](#T-EasyITCenter-Pages-SystemFailListPage 'EasyITCenter.Pages.SystemFailListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemFailListPage-InitializeComponent 'EasyITCenter.Pages.SystemFailListPage.InitializeComponent')
- [SystemGroupMenuListPage](#T-EasyITCenter-Pages-SystemGroupMenuListPage 'EasyITCenter.Pages.SystemGroupMenuListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemGroupMenuListPage-InitializeComponent 'EasyITCenter.Pages.SystemGroupMenuListPage.InitializeComponent')
- [SystemIgnoredExceptionListPage](#T-EasyITCenter-Pages-SystemIgnoredExceptionListPage 'EasyITCenter.Pages.SystemIgnoredExceptionListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemIgnoredExceptionListPage-InitializeComponent 'EasyITCenter.Pages.SystemIgnoredExceptionListPage.InitializeComponent')
- [SystemLoggerHelper](#T-EasyITCenter-SystemHelper-SystemLoggerHelper 'EasyITCenter.SystemHelper.SystemLoggerHelper')
- [SystemLoggerWebSocketClass](#T-EasyITCenter-SystemHelper-SystemLoggerWebSocketClass 'EasyITCenter.SystemHelper.SystemLoggerWebSocketClass')
- [SystemLoginHistoryListPage](#T-EasyITCenter-Pages-SystemLoginHistoryListPage 'EasyITCenter.Pages.SystemLoginHistoryListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemLoginHistoryListPage-InitializeComponent 'EasyITCenter.Pages.SystemLoginHistoryListPage.InitializeComponent')
- [SystemMenuListPage](#T-EasyITCenter-Pages-SystemMenuListPage 'EasyITCenter.Pages.SystemMenuListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemMenuListPage-InitializeComponent 'EasyITCenter.Pages.SystemMenuListPage.InitializeComponent')
- [SystemMonitorPage](#T-EasyITCenter-Pages-SystemMonitorPage 'EasyITCenter.Pages.SystemMonitorPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemMonitorPage-InitializeComponent 'EasyITCenter.Pages.SystemMonitorPage.InitializeComponent')
- [SystemOperations](#T-EasyITCenter-GlobalOperations-SystemOperations 'EasyITCenter.GlobalOperations.SystemOperations')
  - [FilterToString(filterBox)](#M-EasyITCenter-GlobalOperations-SystemOperations-FilterToString-System-Windows-Controls-ComboBox- 'EasyITCenter.GlobalOperations.SystemOperations.FilterToString(System.Windows.Controls.ComboBox)')
  - [FirstLetterToLower(str)](#M-EasyITCenter-GlobalOperations-SystemOperations-FirstLetterToLower-System-String- 'EasyITCenter.GlobalOperations.SystemOperations.FirstLetterToLower(System.String)')
  - [GetExceptionMessages(exception,msgCount)](#M-EasyITCenter-GlobalOperations-SystemOperations-GetExceptionMessages-System-Exception,System-Int32- 'EasyITCenter.GlobalOperations.SystemOperations.GetExceptionMessages(System.Exception,System.Int32)')
  - [GetExceptionMessagesAll(exception,msgCount)](#M-EasyITCenter-GlobalOperations-SystemOperations-GetExceptionMessagesAll-System-Exception,System-Int32- 'EasyITCenter.GlobalOperations.SystemOperations.GetExceptionMessagesAll(System.Exception,System.Int32)')
  - [IncreaseFileVersionBuild()](#M-EasyITCenter-GlobalOperations-SystemOperations-IncreaseFileVersionBuild 'EasyITCenter.GlobalOperations.SystemOperations.IncreaseFileVersionBuild')
  - [RandomString(length)](#M-EasyITCenter-GlobalOperations-SystemOperations-RandomString-System-Int32- 'EasyITCenter.GlobalOperations.SystemOperations.RandomString(System.Int32)')
  - [RemoveAppNamespaceFromString(stringForRemoveNamespace)](#M-EasyITCenter-GlobalOperations-SystemOperations-RemoveAppNamespaceFromString-System-String- 'EasyITCenter.GlobalOperations.SystemOperations.RemoveAppNamespaceFromString(System.String)')
  - [SendMailWithMailTo(address,subject,body,attach)](#M-EasyITCenter-GlobalOperations-SystemOperations-SendMailWithMailTo-System-String,System-String,System-String,System-String- 'EasyITCenter.GlobalOperations.SystemOperations.SendMailWithMailTo(System.String,System.String,System.String,System.String)')
  - [SendMailWithServerSetting(message)](#M-EasyITCenter-GlobalOperations-SystemOperations-SendMailWithServerSetting-System-String- 'EasyITCenter.GlobalOperations.SystemOperations.SendMailWithServerSetting(System.String)')
  - [SetLanguageDictionary(Resources,languageDefault)](#M-EasyITCenter-GlobalOperations-SystemOperations-SetLanguageDictionary-System-Windows-ResourceDictionary,System-String- 'EasyITCenter.GlobalOperations.SystemOperations.SetLanguageDictionary(System.Windows.ResourceDictionary,System.String)')
  - [StartExternalProccess(type,processCommand,startupPath,arguments)](#M-EasyITCenter-GlobalOperations-SystemOperations-StartExternalProccess-System-String,System-String,System-String,System-String- 'EasyITCenter.GlobalOperations.SystemOperations.StartExternalProccess(System.String,System.String,System.String,System.String)')
- [SystemParameterListPage](#T-EasyITCenter-Pages-SystemParameterListPage 'EasyITCenter.Pages.SystemParameterListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemParameterListPage-InitializeComponent 'EasyITCenter.Pages.SystemParameterListPage.InitializeComponent')
- [SystemReportListPage](#T-EasyITCenter-Pages-SystemReportListPage 'EasyITCenter.Pages.SystemReportListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemReportListPage-InitializeComponent 'EasyITCenter.Pages.SystemReportListPage.InitializeComponent')
- [SystemReportQueueListPage](#T-EasyITCenter-Pages-SystemReportQueueListPage 'EasyITCenter.Pages.SystemReportQueueListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemReportQueueListPage-InitializeComponent 'EasyITCenter.Pages.SystemReportQueueListPage.InitializeComponent')
- [SystemStatuses](#T-EasyITCenter-GlobalClasses-SystemStatuses 'EasyITCenter.GlobalClasses.SystemStatuses')
- [SystemSvgIconListPage](#T-EasyITCenter-Pages-SystemSvgIconListPage 'EasyITCenter.Pages.SystemSvgIconListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemSvgIconListPage-InitializeComponent 'EasyITCenter.Pages.SystemSvgIconListPage.InitializeComponent')
- [SystemTranslatedTableList](#T-EasyITCenter-GlobalClasses-SystemTranslatedTableList 'EasyITCenter.GlobalClasses.SystemTranslatedTableList')
- [SystemTranslationListPage](#T-EasyITCenter-Pages-SystemTranslationListPage 'EasyITCenter.Pages.SystemTranslationListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-SystemTranslationListPage-InitializeComponent 'EasyITCenter.Pages.SystemTranslationListPage.InitializeComponent')
- [SystemWindowDataModel](#T-EasyITCenter-SystemStructure-SystemWindowDataModel 'EasyITCenter.SystemStructure.SystemWindowDataModel')
  - [#ctor()](#M-EasyITCenter-SystemStructure-SystemWindowDataModel-#ctor 'EasyITCenter.SystemStructure.SystemWindowDataModel.#ctor')
- [TemplateClassListPage](#T-EasyITCenter-Pages-TemplateClassListPage 'EasyITCenter.Pages.TemplateClassListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateClassListPage-InitializeComponent 'EasyITCenter.Pages.TemplateClassListPage.InitializeComponent')
- [TemplateClassListViewPage](#T-EasyITCenter-Pages-TemplateClassListViewPage 'EasyITCenter.Pages.TemplateClassListViewPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateClassListViewPage-InitializeComponent 'EasyITCenter.Pages.TemplateClassListViewPage.InitializeComponent')
- [TemplateClassListWithParentPage](#T-EasyITCenter-Pages-TemplateClassListWithParentPage 'EasyITCenter.Pages.TemplateClassListWithParentPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateClassListWithParentPage-InitializeComponent 'EasyITCenter.Pages.TemplateClassListWithParentPage.InitializeComponent')
- [TemplateClassListWithSubPage](#T-EasyITCenter-Pages-TemplateClassListWithSubPage 'EasyITCenter.Pages.TemplateClassListWithSubPage')
  - [#ctor()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-#ctor 'EasyITCenter.Pages.TemplateClassListWithSubPage.#ctor')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateClassListWithSubPage-dataViewSupport 'EasyITCenter.Pages.TemplateClassListWithSubPage.dataViewSupport')
  - [BtnCancel_Click(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnCancel_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.BtnCancel_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [BtnItemDelete_Click(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnItemDelete_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.BtnItemDelete_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [BtnItemInsert_Click(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnItemInsert_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.BtnItemInsert_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [BtnSave_Click(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnSave_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.BtnSave_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [ClearItemsFields()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-ClearItemsFields 'EasyITCenter.Pages.TemplateClassListWithSubPage.ClearItemsFields')
  - [Customer_KeyDown(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-Customer_KeyDown-System-Object,System-Windows-Input-KeyEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.Customer_KeyDown(System.Object,System.Windows.Input.KeyEventArgs)')
  - [DeleteRecord()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-DeleteRecord 'EasyITCenter.Pages.TemplateClassListWithSubPage.DeleteRecord')
  - [DgListView_MouseDoubleClick(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgListView_MouseDoubleClick-System-Object,System-Windows-Input-MouseButtonEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.DgListView_MouseDoubleClick(System.Object,System.Windows.Input.MouseButtonEventArgs)')
  - [DgListView_SelectionChanged(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgListView_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.DgListView_SelectionChanged(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
  - [DgListView_Translate(sender,ex)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgListView_Translate-System-Object,System-EventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.DgListView_Translate(System.Object,System.EventArgs)')
  - [DgSubListView_Translate(sender,ex)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgSubListView_Translate-System-Object,System-EventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.DgSubListView_Translate(System.Object,System.EventArgs)')
  - [EditRecord()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-EditRecord-System-Boolean- 'EasyITCenter.Pages.TemplateClassListWithSubPage.EditRecord(System.Boolean)')
  - [Filter(filter)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-Filter-System-String- 'EasyITCenter.Pages.TemplateClassListWithSubPage.Filter(System.String)')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-InitializeComponent 'EasyITCenter.Pages.TemplateClassListWithSubPage.InitializeComponent')
  - [LoadDataList()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-LoadDataList 'EasyITCenter.Pages.TemplateClassListWithSubPage.LoadDataList')
  - [NewRecord()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-NewRecord 'EasyITCenter.Pages.TemplateClassListWithSubPage.NewRecord')
  - [NotesChanged(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-NotesChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.NotesChanged(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
  - [PartNumberGotFocus(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-PartNumberGotFocus-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.PartNumberGotFocus(System.Object,System.Windows.RoutedEventArgs)')
  - [PartNumber_KeyDown(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-PartNumber_KeyDown-System-Object,System-Windows-Input-KeyEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.PartNumber_KeyDown(System.Object,System.Windows.Input.KeyEventArgs)')
  - [SelectCustomer_Enter(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SelectCustomer_Enter-System-Object,System-Windows-Input-KeyEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.SelectCustomer_Enter(System.Object,System.Windows.Input.KeyEventArgs)')
  - [SelectGotFocus(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SelectGotFocus-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.SelectGotFocus(System.Object,System.Windows.RoutedEventArgs)')
  - [SelectPartNumber_Enter(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SelectPartNumber_Enter-System-Object,System-Windows-Input-KeyEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.SelectPartNumber_Enter(System.Object,System.Windows.Input.KeyEventArgs)')
  - [SetCustomer()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetCustomer 'EasyITCenter.Pages.TemplateClassListWithSubPage.SetCustomer')
  - [SetPartNumber()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetPartNumber 'EasyITCenter.Pages.TemplateClassListWithSubPage.SetPartNumber')
  - [SetRecord(showForm,copy)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetRecord-System-Boolean,System-Boolean- 'EasyITCenter.Pages.TemplateClassListWithSubPage.SetRecord(System.Boolean,System.Boolean)')
  - [SetSubListsNonActiveOnNewItem()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetSubListsNonActiveOnNewItem-System-Boolean- 'EasyITCenter.Pages.TemplateClassListWithSubPage.SetSubListsNonActiveOnNewItem(System.Boolean)')
  - [UpdateCustomerSearchResults()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-UpdateCustomerSearchResults 'EasyITCenter.Pages.TemplateClassListWithSubPage.UpdateCustomerSearchResults')
  - [UpdatePartNumberSearchResults()](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-UpdatePartNumberSearchResults 'EasyITCenter.Pages.TemplateClassListWithSubPage.UpdatePartNumberSearchResults')
  - [dgSubListView_SelectionChanged(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubPage-dgSubListView_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubPage.dgSubListView_SelectionChanged(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
- [TemplateClassListWithSubViewPage](#T-EasyITCenter-Pages-TemplateClassListWithSubViewPage 'EasyITCenter.Pages.TemplateClassListWithSubViewPage')
  - [#ctor()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-#ctor 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.#ctor')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateClassListWithSubViewPage-dataViewSupport 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.dataViewSupport')
  - [BtnCancel_Click(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-BtnCancel_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.BtnCancel_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [BtnSave_Click(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-BtnSave_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.BtnSave_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [DeleteRecord()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DeleteRecord 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.DeleteRecord')
  - [DgListView_MouseDoubleClick(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgListView_MouseDoubleClick-System-Object,System-Windows-Input-MouseButtonEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.DgListView_MouseDoubleClick(System.Object,System.Windows.Input.MouseButtonEventArgs)')
  - [DgListView_SelectionChanged(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgListView_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.DgListView_SelectionChanged(System.Object,System.Windows.Controls.SelectionChangedEventArgs)')
  - [DgListView_Translate(sender,ex)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgListView_Translate-System-Object,System-EventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.DgListView_Translate(System.Object,System.EventArgs)')
  - [DgSubListView_Translate(sender,ex)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgSubListView_Translate-System-Object,System-EventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.DgSubListView_Translate(System.Object,System.EventArgs)')
  - [EditRecord()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-EditRecord-System-Boolean- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.EditRecord(System.Boolean)')
  - [Filter(filter)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-Filter-System-String- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.Filter(System.String)')
  - [Fixed_Checked(sender,e)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-Fixed_Checked-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.Fixed_Checked(System.Object,System.Windows.RoutedEventArgs)')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-InitializeComponent 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.InitializeComponent')
  - [LoadDataList()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-LoadDataList 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.LoadDataList')
  - [LoadSubDataList()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-LoadSubDataList 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.LoadSubDataList')
  - [NewRecord()](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-NewRecord 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.NewRecord')
  - [SetRecord(showForm,copy)](#M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-SetRecord-System-Boolean,System-Boolean- 'EasyITCenter.Pages.TemplateClassListWithSubViewPage.SetRecord(System.Boolean,System.Boolean)')
- [TemplateDocumentViewPage](#T-EasyITCenter-Pages-TemplateDocumentViewPage 'EasyITCenter.Pages.TemplateDocumentViewPage')
  - [#ctor()](#M-EasyITCenter-Pages-TemplateDocumentViewPage-#ctor 'EasyITCenter.Pages.TemplateDocumentViewPage.#ctor')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateDocumentViewPage-dataViewSupport 'EasyITCenter.Pages.TemplateDocumentViewPage.dataViewSupport')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateDocumentViewPage-InitializeComponent 'EasyITCenter.Pages.TemplateDocumentViewPage.InitializeComponent')
- [TemplateSTLPage](#T-EasyITCenter-Pages-TemplateSTLPage 'EasyITCenter.Pages.TemplateSTLPage')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateSTLPage-dataViewSupport 'EasyITCenter.Pages.TemplateSTLPage.dataViewSupport')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateSTLPage-InitializeComponent 'EasyITCenter.Pages.TemplateSTLPage.InitializeComponent')
- [TemplateSettingsPage](#T-EasyITCenter-Pages-TemplateSettingsPage 'EasyITCenter.Pages.TemplateSettingsPage')
  - [#ctor()](#M-EasyITCenter-Pages-TemplateSettingsPage-#ctor 'EasyITCenter.Pages.TemplateSettingsPage.#ctor')
  - [Languages](#F-EasyITCenter-Pages-TemplateSettingsPage-Languages 'EasyITCenter.Pages.TemplateSettingsPage.Languages')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateSettingsPage-dataViewSupport 'EasyITCenter.Pages.TemplateSettingsPage.dataViewSupport')
  - [BtnApiTest_Click(sender,e)](#M-EasyITCenter-Pages-TemplateSettingsPage-BtnApiTest_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateSettingsPage.BtnApiTest_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [BtnSave_Click(sender,e)](#M-EasyITCenter-Pages-TemplateSettingsPage-BtnSave_Click-System-Object,System-Windows-RoutedEventArgs- 'EasyITCenter.Pages.TemplateSettingsPage.BtnSave_Click(System.Object,System.Windows.RoutedEventArgs)')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateSettingsPage-InitializeComponent 'EasyITCenter.Pages.TemplateSettingsPage.InitializeComponent')
- [TemplateVideoPage](#T-EasyITCenter-Pages-TemplateVideoPage 'EasyITCenter.Pages.TemplateVideoPage')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateVideoPage-dataViewSupport 'EasyITCenter.Pages.TemplateVideoPage.dataViewSupport')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateVideoPage-InitializeComponent 'EasyITCenter.Pages.TemplateVideoPage.InitializeComponent')
- [TemplateWebViewPage](#T-EasyITCenter-Pages-TemplateWebViewPage 'EasyITCenter.Pages.TemplateWebViewPage')
  - [#ctor()](#M-EasyITCenter-Pages-TemplateWebViewPage-#ctor 'EasyITCenter.Pages.TemplateWebViewPage.#ctor')
  - [dataViewSupport](#F-EasyITCenter-Pages-TemplateWebViewPage-dataViewSupport 'EasyITCenter.Pages.TemplateWebViewPage.dataViewSupport')
  - [InitializeComponent()](#M-EasyITCenter-Pages-TemplateWebViewPage-InitializeComponent 'EasyITCenter.Pages.TemplateWebViewPage.InitializeComponent')
- [TiltTargets](#T-EasyITCenter-GlobalClasses-TiltTargets 'EasyITCenter.GlobalClasses.TiltTargets')
- [UpdateVariant](#T-EasyITCenter-GlobalClasses-UpdateVariant 'EasyITCenter.GlobalClasses.UpdateVariant')
- [UserData](#T-EasyITCenter-GlobalClasses-UserData 'EasyITCenter.GlobalClasses.UserData')
- [WebBannedIpAddressListPage](#T-EasyITCenter-Pages-WebBannedIpAddressListPage 'EasyITCenter.Pages.WebBannedIpAddressListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WebBannedIpAddressListPage-InitializeComponent 'EasyITCenter.Pages.WebBannedIpAddressListPage.InitializeComponent')
- [WebCodeLibraryListPage](#T-EasyITCenter-Pages-WebCodeLibraryListPage 'EasyITCenter.Pages.WebCodeLibraryListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WebCodeLibraryListPage-InitializeComponent 'EasyITCenter.Pages.WebCodeLibraryListPage.InitializeComponent')
- [WebGroupMenuListPage](#T-EasyITCenter-Pages-WebGroupMenuListPage 'EasyITCenter.Pages.WebGroupMenuListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WebGroupMenuListPage-InitializeComponent 'EasyITCenter.Pages.WebGroupMenuListPage.InitializeComponent')
- [WebMenuListPage](#T-EasyITCenter-Pages-WebMenuListPage 'EasyITCenter.Pages.WebMenuListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WebMenuListPage-InitializeComponent 'EasyITCenter.Pages.WebMenuListPage.InitializeComponent')
- [WebSettingListPage](#T-EasyITCenter-Pages-WebSettingListPage 'EasyITCenter.Pages.WebSettingListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WebSettingListPage-InitializeComponent 'EasyITCenter.Pages.WebSettingListPage.InitializeComponent')
- [WebVisitIpListPage](#T-EasyITCenter-Pages-WebVisitIpListPage 'EasyITCenter.Pages.WebVisitIpListPage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WebVisitIpListPage-InitializeComponent 'EasyITCenter.Pages.WebVisitIpListPage.InitializeComponent')
- [WelcomePage](#T-EasyITCenter-Pages-WelcomePage 'EasyITCenter.Pages.WelcomePage')
  - [InitializeComponent()](#M-EasyITCenter-Pages-WelcomePage-InitializeComponent 'EasyITCenter.Pages.WelcomePage.InitializeComponent')

<a name='T-EasyITCenter-Api-ApiUrls'></a>
## ApiUrls `type`

##### Namespace

EasyITCenter.Api

##### Summary

ALL standard View AND Form API Call must end with "List" - These will automatic added for reports Definitions
TODO From Table?

<a name='T-EasyITCenter-App'></a>
## App `type`

##### Namespace

EasyITCenter

##### Summary

App

<a name='M-EasyITCenter-App-#ctor'></a>
### #ctor() `constructor`

##### Summary

Application Global Exceptions Controls Definitions

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-App-SystemRuntimeData'></a>
### SystemRuntimeData `constants`

##### Summary

Global Application Startup Settings
Central Parameters / Languages / User / Configure
TODO must centalize to Globall APP class

<a name='F-EasyITCenter-App-TiltReceiptDoc'></a>
### TiltReceiptDoc `constants`

##### Summary

Tilt Document types definitions

<a name='M-EasyITCenter-App-AppQuitRequest-System-Boolean-'></a>
### AppQuitRequest(silent) `method`

##### Summary

System or Quit

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| silent | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |

<a name='M-EasyITCenter-App-AppRestart'></a>
### AppRestart() `method`

##### Summary

System Restart Controller

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-App-ApplicationLogging-System-Exception,System-String-'></a>
### ApplicationLogging(ex,customMessage) `method`

##### Summary

Full Application System logging
Running If is AppSystemTimer is Enabled for disable other processes exceptions
Full Application logging to file if enabled and to DB for solving by Developers
Supported Custom Message
Here Is Filling Local System Logger for Developers
Logging to Database Are All non Developer working

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ex | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| customMessage | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-App-ApplicationQuit'></a>
### ApplicationQuit() `method`

##### Summary

MainWindow Closing Handler for Cleaning TempData, disable AddOns / Tool and Third Party Software
Closing Third Party processes

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-App-CurrentDomain_FirstChanceException-System-Object,System-Runtime-ExceptionServices-FirstChanceExceptionEventArgs-'></a>
### CurrentDomain_FirstChanceException(sender,e) `method`

##### Summary

FullSystem Logging
Every Exception types are monitored for
maximize correct running
all processes, System addOns, systems, communications, threads, network
All detail of application system add all used possibilities

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs 'System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs') |  |

<a name='M-EasyITCenter-App-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-App-Main'></a>
### Main() `method`

##### Summary

Application Entry Point.

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-App-OnStartup-System-Windows-StartupEventArgs-'></a>
### OnStartup(e) `method`

##### Summary

Connected Starting Video

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| e | [System.Windows.StartupEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.StartupEventArgs 'System.Windows.StartupEventArgs') |  |

<a name='M-EasyITCenter-App-RootAppKeyDownController-System-Object,System-Windows-Input-KeyEventArgs-'></a>
### RootAppKeyDownController(sender,e) `method`

##### Summary

Keyboard Pointer to Central Keyboard Reaction Definitions

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') |  |

<a name='T-EasyITCenter-Classes-AppVersion'></a>
## AppVersion `type`

##### Namespace

EasyITCenter.Classes

##### Summary

Program version Class

<a name='T-EasyITCenter-GlobalClasses-Authentification'></a>
## Authentification `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Class for User Authentication information

<a name='T-EasyITCenter-Pages-BasicAttachmentListPage'></a>
## BasicAttachmentListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicAttachmentListPage

<a name='M-EasyITCenter-Pages-BasicAttachmentListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BasicCalendarListPage'></a>
## BasicCalendarListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicCalendarListPage

<a name='M-EasyITCenter-Pages-BasicCalendarListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BasicCurrencyListPage'></a>
## BasicCurrencyListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicCurrencyListPage

<a name='M-EasyITCenter-Pages-BasicCurrencyListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BasicImageGalleryListPage'></a>
## BasicImageGalleryListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicImageGalleryListPage

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-ClearGallery'></a>
### ClearGallery() `method`

##### Summary

Phycical clear local storage and form

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-GrayscaleClick-System-Object,System-Windows-RoutedEventArgs-'></a>
### GrayscaleClick(sender,e) `method`

##### Summary

Images Effect Part

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-ImageChangesCancelClick-System-Object,System-Windows-Input-MouseButtonEventArgs-'></a>
### ImageChangesCancelClick(sender,e) `method`

##### Summary

Image Graphics Changes Controllers

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.MouseButtonEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.MouseButtonEventArgs 'System.Windows.Input.MouseButtonEventArgs') |  |

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-LoadFromServer-System-Int32-'></a>
### LoadFromServer() `method`

##### Summary

Last proccess

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-RefreshViewPhoto-System-Nullable{System-Int32}-'></a>
### RefreshViewPhoto(selectedPhotoId) `method`

##### Summary



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| selectedPhotoId | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | selectedPhotoId -1 is Select Last |

<a name='M-EasyITCenter-Pages-BasicImageGalleryListPage-SaveImageToServer-System-Nullable{System-Int32}-'></a>
### SaveImageToServer(onlyThis) `method`

##### Summary

null For Full Folder else No of dbId, 0 = new

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| onlyThis | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') |  |

<a name='T-EasyITCenter-Pages-BasicItemListPage'></a>
## BasicItemListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicItemListPage

<a name='M-EasyITCenter-Pages-BasicItemListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BasicUnitListPage'></a>
## BasicUnitListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicUnitListPage

<a name='M-EasyITCenter-Pages-BasicUnitListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BasicVatListPage'></a>
## BasicVatListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BasicVatListPage

<a name='M-EasyITCenter-Pages-BasicVatListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessAddressListPage'></a>
## BusinessAddressListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessAddressListPage

<a name='M-EasyITCenter-Pages-BusinessAddressListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessBranchListPage'></a>
## BusinessBranchListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessBranchListPage

<a name='M-EasyITCenter-Pages-BusinessBranchListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessCreditNoteListPage'></a>
## BusinessCreditNoteListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessCreditNoteListPage

<a name='M-EasyITCenter-Pages-BusinessCreditNoteListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessExchangeRateListPage'></a>
## BusinessExchangeRateListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessExchangeRateListPage

<a name='M-EasyITCenter-Pages-BusinessExchangeRateListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessIncomingInvoiceListPage'></a>
## BusinessIncomingInvoiceListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessIncomingInvoiceListPage

<a name='M-EasyITCenter-Pages-BusinessIncomingInvoiceListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessIncomingOrderListPage'></a>
## BusinessIncomingOrderListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessIncomingOrderListPage

<a name='M-EasyITCenter-Pages-BusinessIncomingOrderListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessMaturityListPage'></a>
## BusinessMaturityListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessMaturityListPage

<a name='M-EasyITCenter-Pages-BusinessMaturityListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessNotesListPage'></a>
## BusinessNotesListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessNotesListPage

<a name='M-EasyITCenter-Pages-BusinessNotesListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessOfferListPage'></a>
## BusinessOfferListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessOfferListPage

<a name='M-EasyITCenter-Pages-BusinessOfferListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessOutgoingInvoiceListPage'></a>
## BusinessOutgoingInvoiceListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessOutgoingInvoiceListPage

<a name='M-EasyITCenter-Pages-BusinessOutgoingInvoiceListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessOutgoingOrderListPage'></a>
## BusinessOutgoingOrderListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessOutgoingOrderListPage

<a name='M-EasyITCenter-Pages-BusinessOutgoingOrderListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessPaymentMethodListPage'></a>
## BusinessPaymentMethodListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessPaymentMethodListPage

<a name='M-EasyITCenter-Pages-BusinessPaymentMethodListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessPaymentStatusListPage'></a>
## BusinessPaymentStatusListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessPaymentStatusListPage

<a name='M-EasyITCenter-Pages-BusinessPaymentStatusListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessReceiptListPage'></a>
## BusinessReceiptListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessReceiptListPage

<a name='M-EasyITCenter-Pages-BusinessReceiptListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-BusinessWarehouseListPage'></a>
## BusinessWarehouseListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

BusinessWarehouseListPage

<a name='M-EasyITCenter-Pages-BusinessWarehouseListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ClientSettingsPage'></a>
## ClientSettingsPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ClientSettingsPage

<a name='M-EasyITCenter-Pages-ClientSettingsPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Classes-Config'></a>
## Config `type`

##### Namespace

EasyITCenter.Classes

##### Summary

Client configuration Definition

<a name='T-EasyITCenter-SystemConfiguration-CrashReporterSettings'></a>
## CrashReporterSettings `type`

##### Namespace

EasyITCenter.SystemConfiguration

##### Summary

Libreria condivisa

<a name='F-EasyITCenter-SystemConfiguration-CrashReporterSettings-_ReportCrash'></a>
### _ReportCrash `constants`

##### Summary

FirstRun

<a name='T-EasyITCenter-GlobalOperations-DBOperations'></a>
## DBOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

##### Summary

Centralised DBFunctions as Load DB Congig, System Dials (Language, Params)
Another Db functions As Saving System Loging, Language Dictionary Autofiling

<a name='M-EasyITCenter-GlobalOperations-DBOperations-DBTranslation-System-String,System-Boolean,System-Boolean,System-String-'></a>
### DBTranslation(systemName,notCreateNew,comaList,lang) `method`

##### Summary

Centralised Method for Translating by DB Dictionary Service insert the news words for
translate (After translate request) to Database Automaticaly with Empty Translate.
Service return translate if is possible or requested word send back CamelCase ignored

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| systemName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| notCreateNew | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |
| comaList | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |
| lang | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-DBOperations-LoadOrRefreshUserData'></a>
### LoadOrRefreshUserData() `method`

##### Summary

Centralised Method for Refresh All UserData
params, for correct App running.
Thinking for remove and new Load
Actualy limited by DebugingHelpSetting
Itr user After Succes User Login

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-GlobalOperations-DBOperations-LoadStartupDBData'></a>
### LoadStartupDBData() `method`

##### Summary

Startup Load System Parameters ,Languages, System Controlling, Server Setting

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-GlobalOperations-DBOperations-SaveSystemFailMessage-System-String,System-String-'></a>
### SaveSystemFailMessage(message,logLevel) `method`

##### Summary

Save Exception to DB Fail List (System Log)
Write to System Logger

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| logLevel | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-DBOperations-SetNonUserDataOnSuccessStartUp'></a>
### SetNonUserDataOnSuccessStartUp() `method`

##### Summary

SYSTEM: Set NonUser Startup Data for Correct Prepare System 
Its for All Status Possible - NODB,OS,IS,Network,etc.
For check ANY possible problems out of System

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Api-DBResultMessage'></a>
## DBResultMessage `type`

##### Namespace

EasyITCenter.Api

##### Summary

Global API Definition of Result API calls 
for All Calling of Insert / Update / Delete

<a name='T-EasyITCenter-GlobalOperations-DataOperations'></a>
## DataOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

##### Summary

Centralized DataOperations as Cleaning dataset
Language Dictionary Auto filing

<a name='M-EasyITCenter-GlobalOperations-DataOperations-NullSetInExtensionFields``1-``0@-'></a>
### NullSetInExtensionFields\`\`1() `method`

##### Summary

!!! SYSTEM RULE: ClassList with joining fields names must be nullable before API operation
!!! ClassName must contain: "Extended" WORD
Extension field in Class - Dataset must be set as null before Database Operation
else is joining to other dataset is valid and can be blocked by fail key
Its Check Extended in ClassName - SYSTEM RULE

##### Returns



##### Parameters

This method has no parameters.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='M-EasyITCenter-GlobalOperations-DataOperations-ParameterCheck-System-String-'></a>
### ParameterCheck(parameterName) `method`

##### Summary

Return Requested User or if not exist default DB parameter
CamelCase Ignored

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| parameterName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-Classes-DataViewSupport'></a>
## DataViewSupport `type`

##### Namespace

EasyITCenter.Classes

##### Summary

Actual List Item informations for Controls each Page in MainView

<a name='T-EasyITCenter-Pages-DocSrvDocumentationCodeLibraryListPage'></a>
## DocSrvDocumentationCodeLibraryListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

DocSrvDocumentationCodeLibraryListPage

<a name='M-EasyITCenter-Pages-DocSrvDocumentationCodeLibraryListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-DocSrvDocumentationGroupListPage'></a>
## DocSrvDocumentationGroupListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

DocSrvDocumentationGroupListPage

<a name='M-EasyITCenter-Pages-DocSrvDocumentationGroupListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-DocSrvDocumentationListPage'></a>
## DocSrvDocumentationListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

DocSrvDocumentationListPage

<a name='M-EasyITCenter-Pages-DocSrvDocumentationListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalClasses-DocumentItemList'></a>
## DocumentItemList `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Univessal Document List (Item) for Offer,Order,Invoice

<a name='T-EasyITCenter-GlobalOperations-FileOperations'></a>
## FileOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

<a name='M-EasyITCenter-GlobalOperations-FileOperations-CopyFiles-System-String,System-String-'></a>
### CopyFiles(sourcePath,destinationPath) `method`

##### Summary

Prepared Method for Files Copy

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourcePath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| destinationPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-FileOperations-CreateFile-System-String-'></a>
### CreateFile(file) `method`

##### Summary

Prepared Method for Create empty file

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-FileOperations-FileDetectEncoding-System-String-'></a>
### FileDetectEncoding(FileName) `method`

##### Summary

Prepared Method for Get Information of File encoding
UTF8,WIN1250,etc

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-FileOperations-LoadSettings'></a>
### LoadSettings() `method`

##### Summary

Application Startup Check and configure Data Structure in folder ProgramData
And required files, load client configuration config.json

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-GlobalOperations-FileOperations-SaveSettings'></a>
### SaveSettings() `method`

##### Summary

Function for saving Application Configuration
This is client configuration only

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-GlobalOperations-FileOperations-VncServerIniFile-System-String-'></a>
### VncServerIniFile(path) `method`

##### Summary

Generate ini file for start vns server
default password: groupware

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-XamlGeneratedNamespace-GeneratedInternalTypeHelper'></a>
## GeneratedInternalTypeHelper `type`

##### Namespace

XamlGeneratedNamespace

##### Summary

GeneratedInternalTypeHelper

<a name='M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-AddEventHandler-System-Reflection-EventInfo,System-Object,System-Delegate-'></a>
### AddEventHandler() `method`

##### Summary

AddEventHandler

##### Parameters

This method has no parameters.

<a name='M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-CreateDelegate-System-Type,System-Object,System-String-'></a>
### CreateDelegate() `method`

##### Summary

CreateDelegate

##### Parameters

This method has no parameters.

<a name='M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-CreateInstance-System-Type,System-Globalization-CultureInfo-'></a>
### CreateInstance() `method`

##### Summary

CreateInstance

##### Parameters

This method has no parameters.

<a name='M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-GetPropertyValue-System-Reflection-PropertyInfo,System-Object,System-Globalization-CultureInfo-'></a>
### GetPropertyValue() `method`

##### Summary

GetPropertyValue

##### Parameters

This method has no parameters.

<a name='M-XamlGeneratedNamespace-GeneratedInternalTypeHelper-SetPropertyValue-System-Reflection-PropertyInfo,System-Object,System-Object,System-Globalization-CultureInfo-'></a>
### SetPropertyValue() `method`

##### Summary

SetPropertyValue

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-GlobalEmailTemplateListPage'></a>
## GlobalEmailTemplateListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

GlobalEmailTemplateListPage

<a name='M-EasyITCenter-Pages-GlobalEmailTemplateListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-GlobalLanguageListPage'></a>
## GlobalLanguageListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

GlobalLanguageListPage

<a name='M-EasyITCenter-Pages-GlobalLanguageListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-GlobalMottoListPage'></a>
## GlobalMottoListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

GlobalMottoListPage

<a name='M-EasyITCenter-Pages-GlobalMottoListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalClasses-GlobalRuntimeMonitor'></a>
## GlobalRuntimeMonitor `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

!!!SYSTEM 
Global Runtime Monitor Definition For One Point monitoring
For Processes and each other Definition For optimize
the System Running

TODO
- move All Central Definitions Here
- create Monitor Window for managing

<a name='T-EasyITCenter-Pages-GlobalUserListPage'></a>
## GlobalUserListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

GlobalUserListPage

<a name='M-EasyITCenter-Pages-GlobalUserListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-GlobalUserRoleListPage'></a>
## GlobalUserRoleListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

GlobalUserRoleListPage

<a name='M-EasyITCenter-Pages-GlobalUserRoleListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-GraphsPage'></a>
## GraphsPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

GraphsPage

<a name='M-EasyITCenter-Pages-GraphsPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalOperations-HardwareOperations'></a>
## HardwareOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

<a name='M-EasyITCenter-GlobalOperations-HardwareOperations-ApplicationKeyboardMaping-System-Windows-Input-KeyEventArgs-'></a>
### ApplicationKeyboardMaping(e) `method`

##### Summary

Application Keyboard controller

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') |  |

<a name='T-EasyITCenter-GlobalGenerators-IconMaker'></a>
## IconMaker `type`

##### Namespace

EasyITCenter.GlobalGenerators

##### Summary

System Online Icon Generator from custom Path
Its for working with Icon over Database Dynamically

<a name='M-EasyITCenter-GlobalGenerators-IconMaker-Icon-System-Windows-Media-Color,System-String-'></a>
### Icon(color,iconPath) `method`

##### Summary

Generate Custom Icon from Defined Path

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| color | [System.Windows.Media.Color](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Media.Color 'System.Windows.Media.Color') | The color. |
| iconPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The icon path. |

<a name='T-EasyITCenter-Classes-Language'></a>
## Language `type`

##### Namespace

EasyITCenter.Classes

##### Summary

Language definition support

<a name='T-EasyITCenter-Pages-LicSrvLicenseActivationFailListPage'></a>
## LicSrvLicenseActivationFailListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

LicSrvLicenseActivationFailListPage

<a name='M-EasyITCenter-Pages-LicSrvLicenseActivationFailListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-LicSrvLicenseAlgorithmListPage'></a>
## LicSrvLicenseAlgorithmListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

LicSrvLicenseAlgorithmListPage

<a name='M-EasyITCenter-Pages-LicSrvLicenseAlgorithmListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-LicSrvUsedLicenseListPage'></a>
## LicSrvUsedLicenseListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

LicSrvUsedLicenseListPage

<a name='M-EasyITCenter-Pages-LicSrvUsedLicenseListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-MainWindow'></a>
## MainWindow `type`

##### Namespace

EasyITCenter

##### Summary

MainWindow

<a name='M-EasyITCenter-MainWindow-#ctor'></a>
### #ctor() `constructor`

##### Summary

System Core AND ALL shared functionalities

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-MainWindow-_hackyIsFirstWindow'></a>
### _hackyIsFirstWindow `constants`

##### Summary

MainControls Screen Variables

<a name='P-EasyITCenter-MainWindow-DataGridSelected'></a>
### DataGridSelected `property`

##### Summary

Indicator for Enable New DataGrid Button

<a name='P-EasyITCenter-MainWindow-DataGridSelectedIdListIndicator'></a>
### DataGridSelectedIdListIndicator `property`

##### Summary

[DataGrid](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.DataGrid 'System.Windows.Controls.DataGrid') have selected record indicator

<a name='P-EasyITCenter-MainWindow-DgRefresh'></a>
### DgRefresh `property`

##### Summary

Indicator for enable Refresh Button Indicator

<a name='P-EasyITCenter-MainWindow-DownloadShow'></a>
### DownloadShow `property`

##### Summary

Indicator for show Downloading area

<a name='P-EasyITCenter-MainWindow-DownloadStatus'></a>
### DownloadStatus `property`

##### Summary

Downloading of update status variable

<a name='P-EasyITCenter-MainWindow-OperationRunning'></a>
### OperationRunning `property`

##### Summary

Indicator for mark operation status for any programmatic operations

<a name='P-EasyITCenter-MainWindow-ProgressRing'></a>
### ProgressRing `property`

##### Summary

ProgressRing Visibility indicator

<a name='P-EasyITCenter-MainWindow-RunReleaseMode'></a>
### RunReleaseMode `property`

<a name='P-EasyITCenter-MainWindow-ServerLoggerSource'></a>
### ServerLoggerSource `property`

##### Summary

System Logger Source Status and Controller
This is status of Settings System Logger Source

<a name='P-EasyITCenter-MainWindow-ServiceRunning'></a>
### ServiceRunning `property`

##### Summary

Service Status description

<a name='P-EasyITCenter-MainWindow-ServiceStatus'></a>
### ServiceStatus `property`

##### Summary

Service Status public Variable

<a name='P-EasyITCenter-MainWindow-ShowSystemLogger'></a>
### ShowSystemLogger `property`

##### Summary

System Logger Activator by Setted Parametr
Can be setted for All Apps or Every User individually

<a name='P-EasyITCenter-MainWindow-SystemLogger'></a>
### SystemLogger `property`

##### Summary

System Online Logger for EASY developing

<a name='P-EasyITCenter-MainWindow-UserLogged'></a>
### UserLogged `property`

##### Summary

User Logged Status

<a name='P-EasyITCenter-MainWindow-VncRunning'></a>
### VncRunning `property`

<a name='M-EasyITCenter-MainWindow-AddOrRemoveTab-System-String,System-Object,System-String-'></a>
### AddOrRemoveTab(headerName,tabPage,tagText) `method`

##### Summary

Tabs Pages control for Insert/Move/Change Pages

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| headerName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| tabPage | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| tagText | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-MainWindow-BtnKeyboardClick-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnKeyboardClick(sender,e) `method`

##### Summary

System tools controllers

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-BtnShowLoggerClick-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnShowLoggerClick(sender,e) `method`

##### Summary

Show System On line Logger

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-Btn_LaunchHelp_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### Btn_LaunchHelp_Click(sender,e) `method`

##### Summary

Help button controller for Show Help File

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-Btn_LaunchMetroTheme_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### Btn_LaunchMetroTheme_Click(sender,e) `method`

##### Summary

Show Metro Theme possibilities

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-Btn_about_click-System-Object,System-Windows-RoutedEventArgs-'></a>
### Btn_about_click(sender,e) `method`

##### Summary

about applications information

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-CbFilterDropDownClosed-System-Object,System-EventArgs-'></a>
### CbFilterDropDownClosed(sender,e) `method`

##### Summary

Full dynamic apply sett ed filter

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') |  |

<a name='M-EasyITCenter-MainWindow-CbPrintReportsSelected-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### CbPrintReportsSelected(sender,e) `method`

##### Summary

Print Report Selection Controller

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-FilterField_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### FilterField_SelectionChanged(sender,e) `method`

##### Summary

Full dynamic set sign DataGrid advanced filter type

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-MainWindow-LoadUserMenu'></a>
### LoadUserMenu() `method`

##### Summary

Load UserMenu After Login
And Sort

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-MainWindow-MainGrid_IsDraggingChanged-System-Object,System-Windows-RoutedPropertyChangedEventArgs{System-Boolean}-'></a>
### MainGrid_IsDraggingChanged(sender,e) `method`

##### Summary

Dragging and separate to more Applications: TabPanel drag Controller - not Used

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedPropertyChangedEventArgs{System.Boolean}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedPropertyChangedEventArgs 'System.Windows.RoutedPropertyChangedEventArgs{System.Boolean}') |  |

<a name='M-EasyITCenter-MainWindow-MainWindow_Closing-System-Object,System-ComponentModel-CancelEventArgs-'></a>
### MainWindow_Closing(sender,e) `method`

##### Summary

Applications Close Request Controller

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.ComponentModel.CancelEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.ComponentModel.CancelEventArgs 'System.ComponentModel.CancelEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-MainWindow_KeyDown-System-Object,System-Windows-Input-KeyEventArgs-'></a>
### MainWindow_KeyDown(sender,e) `method`

##### Summary

MainWindow Keyboard pointer to Keyboard Central Application controller

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-MainWindow_Loaded-System-Object,System-Windows-RoutedEventArgs-'></a>
### MainWindow_Loaded(sender,e) `method`

##### Summary

Application Loaded Start Backend timer for check server
set Theme

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-MainWindow_MouseLeave-System-Object,System-Windows-Input-MouseEventArgs-'></a>
### MainWindow_MouseLeave() `method`

##### Summary

Writing Last User action for monitoring Free Time
Used by: SceenSaver

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-MainWindow-Menu_action_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### Menu_action_Click(sender,e) `method`

##### Summary

THIS IS AUTOMATIC INCLUDE DATALIST VIEW MENU in FORMAT  APIcallPage
open or select existed TabPanel VERTICAL MENU -  Copy and CHANGE ONLY Page Name AND Report CALL  as /XXXX

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-Mi_filter_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### Mi_filter_Click(sender,e) `method`

##### Summary

Full dynamic Show/Hidden DataGrid advanced Filter Menu

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-Mi_logout_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### Mi_logout_Click(sender,e) `method`

##### Summary

Application Logout button Controller

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-RemoveFilterItem_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### RemoveFilterItem_Click(sender,e) `method`

##### Summary

Full dynamic Remove Item from DataGrid advanced Filter

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-SetServiceStop'></a>
### SetServiceStop() `method`

##### Summary

Server is unavailable All operations are blocked

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-MainWindow-ShowLoginDialog'></a>
### ShowLoginDialog() `method`

##### Summary

Application Login Dialog

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-MainWindow-ShowMessageOnMainWindow-System-Boolean,System-String,System-Boolean-'></a>
### ShowMessageOnMainWindow(error,message,confirm) `method`

##### Summary

Central Application Message Dialog for All Info / Error / other messages for User

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| error | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| confirm | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |

<a name='M-EasyITCenter-MainWindow-StringToFilter-System-Windows-Controls-ComboBox,System-String-'></a>
### StringToFilter(filterBox,advancedFilter) `method`

##### Summary

Full dynamic build filter on selected page from saved advanced filter

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filterBox | [System.Windows.Controls.ComboBox](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.ComboBox 'System.Windows.Controls.ComboBox') |  |
| advancedFilter | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-MainWindow-SystemLoggerSourceChanged_Click-System-Object,System-EventArgs-'></a>
### SystemLoggerSourceChanged_Click(sender,e) `method`

##### Summary

System Logger Source Selector
Server Logger has Source From Client Settings by WebSocket URL

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') | The [EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') instance containing the event data. |

<a name='M-EasyITCenter-MainWindow-SystemTimerController-System-Object,System-Timers-ElapsedEventArgs-'></a>
### SystemTimerController(sender,e) `method`

##### Summary

Backend System Timer for check server connection

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Timers.ElapsedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Timers.ElapsedEventArgs 'System.Timers.ElapsedEventArgs') |  |

<a name='M-EasyITCenter-MainWindow-TabPanelOnSelectionChange-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### TabPanelOnSelectionChange(sender,e) `method`

##### Summary

Tab click selection change reload ID and Pointers for ListView Buttons

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The sender. |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') | The [SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-MainWindow-TiltOpenForm-System-String-'></a>
### TiltOpenForm(translateHeader) `method`

##### Summary

Tilts: Standardized Opening or create Tilt documents

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| translateHeader | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-GlobalOperations-MathTypeOperations'></a>
## MathTypeOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

<a name='M-EasyITCenter-GlobalOperations-MathTypeOperations-CheckTypeValue-System-String,System-String-'></a>
### CheckTypeValue() `method`

##### Summary

Global DataTypes Chwecker with Bool Result
Used on System Parameters

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalOperations-MediaOperations'></a>
## MediaOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

<a name='M-EasyITCenter-GlobalOperations-MediaOperations-ArrayToImage-System-Byte[]-'></a>
### ArrayToImage(array) `method`

##### Summary

Cresate Bitmap Image from DB array to Image for show preview

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| array | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') |  |

<a name='M-EasyITCenter-GlobalOperations-MediaOperations-GetImageImmediatelly-System-String-'></a>
### GetImageImmediatelly(path) `method`

##### Summary

Important Closing connections of openned files by Form and binding
this is solution for close oppened file after load
Solution for All Files

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-MediaOperations-SaveAppScreenShot-EasyITCenter-MainWindow-'></a>
### SaveAppScreenShot(MainWindow) `method`

##### Summary

ScreenShot Function For Application Menu Tool

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| MainWindow | [EasyITCenter.MainWindow](#T-EasyITCenter-MainWindow 'EasyITCenter.MainWindow') | The main window. |

<a name='T-EasyITCenter-Pages-TemplateWebViewPage-MyCustomLifeSpanHandler'></a>
## MyCustomLifeSpanHandler `type`

##### Namespace

EasyITCenter.Pages.TemplateWebViewPage

<a name='M-EasyITCenter-Pages-TemplateWebViewPage-MyCustomLifeSpanHandler-OnBeforePopup-CefSharp-IWebBrowser,CefSharp-IBrowser,CefSharp-IFrame,System-String,System-String,CefSharp-WindowOpenDisposition,System-Boolean,CefSharp-IPopupFeatures,CefSharp-IWindowInfo,CefSharp-IBrowserSettings,System-Boolean@,CefSharp-IWebBrowser@-'></a>
### OnBeforePopup(chromiumWebBrowser,browser,frame,targetUrl,targetFrameName,targetDisposition,userGesture,popupFeatures,windowInfo,browserSettings,noJavascriptAccess,newBrowser) `method`

##### Summary

Block open New Solo Window Frame as popup

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| chromiumWebBrowser | [CefSharp.IWebBrowser](#T-CefSharp-IWebBrowser 'CefSharp.IWebBrowser') |  |
| browser | [CefSharp.IBrowser](#T-CefSharp-IBrowser 'CefSharp.IBrowser') |  |
| frame | [CefSharp.IFrame](#T-CefSharp-IFrame 'CefSharp.IFrame') |  |
| targetUrl | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| targetFrameName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| targetDisposition | [CefSharp.WindowOpenDisposition](#T-CefSharp-WindowOpenDisposition 'CefSharp.WindowOpenDisposition') |  |
| userGesture | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |
| popupFeatures | [CefSharp.IPopupFeatures](#T-CefSharp-IPopupFeatures 'CefSharp.IPopupFeatures') |  |
| windowInfo | [CefSharp.IWindowInfo](#T-CefSharp-IWindowInfo 'CefSharp.IWindowInfo') |  |
| browserSettings | [CefSharp.IBrowserSettings](#T-CefSharp-IBrowserSettings 'CefSharp.IBrowserSettings') |  |
| noJavascriptAccess | [System.Boolean@](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean@ 'System.Boolean@') |  |
| newBrowser | [CefSharp.IWebBrowser@](#T-CefSharp-IWebBrowser@ 'CefSharp.IWebBrowser@') |  |

<a name='T-EasyITCenter-Pages-ProdGuidGroupListPage'></a>
## ProdGuidGroupListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ProdGuidGroupListPage

<a name='M-EasyITCenter-Pages-ProdGuidGroupListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ProdGuidOperationListPage'></a>
## ProdGuidOperationListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ProdGuidOperationListPage

<a name='M-EasyITCenter-Pages-ProdGuidOperationListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ProdGuidPartListPage'></a>
## ProdGuidPartListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ProdGuidPartListPage

<a name='M-EasyITCenter-Pages-ProdGuidPartListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ProdGuidPersonListPage'></a>
## ProdGuidPersonListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ProdGuidPersonListPage

<a name='M-EasyITCenter-Pages-ProdGuidPersonListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ProdGuidWorkListPage'></a>
## ProdGuidWorkListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ProdGuidWorkListPage

<a name='M-EasyITCenter-Pages-ProdGuidWorkListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Classes-ReportSelection'></a>
## ReportSelection `type`

##### Namespace

EasyITCenter.Classes

##### Summary

Report naming support

<a name='T-EasyITCenter-Properties-Resources'></a>
## Resources `type`

##### Namespace

EasyITCenter.Properties

##### Summary

Třída prostředků se silnými typy pro vyhledávání lokalizovaných řetězců atp.

<a name='P-EasyITCenter-Properties-Resources-Culture'></a>
### Culture `property`

##### Summary

Potlačí vlastnost CurrentUICulture aktuálního vlákna pro všechna
  vyhledání prostředků pomocí třídy prostředků se silnými typy.

<a name='P-EasyITCenter-Properties-Resources-ResourceManager'></a>
### ResourceManager `property`

##### Summary

Vrací instanci ResourceManager uloženou v mezipaměti použitou touto třídou.

<a name='P-EasyITCenter-Properties-Resources-no_photo'></a>
### no_photo `property`

##### Summary

Vyhledává lokalizovaný prostředek typu System.Drawing.Bitmap.

<a name='T-EasyITCenter-Pages-ScreenSaverPage'></a>
## ScreenSaverPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ScreenSaverPage

<a name='M-EasyITCenter-Pages-ScreenSaverPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ServerBrowsablePathListPage'></a>
## ServerBrowsablePathListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ServerBrowsablePathListPage

<a name='M-EasyITCenter-Pages-ServerBrowsablePathListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ServerHealthCheckTaskListPage'></a>
## ServerHealthCheckTaskListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ServerHealthCheckTaskListPage

<a name='M-EasyITCenter-Pages-ServerHealthCheckTaskListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Classes-ServerSettingKeys'></a>
## ServerSettingKeys `type`

##### Namespace

EasyITCenter.Classes

##### Summary

Server Configuration definition for Backend API  EASYDATACenter

<a name='T-EasyITCenter-Pages-ServerSettingListPage'></a>
## ServerSettingListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ServerSettingListPage

<a name='M-EasyITCenter-Pages-ServerSettingListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ServerToolPanelDefinitionListPage'></a>
## ServerToolPanelDefinitionListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ServerToolPanelDefinitionListPage

<a name='M-EasyITCenter-Pages-ServerToolPanelDefinitionListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ServerToolPanelListPage'></a>
## ServerToolPanelListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ServerToolPanelListPage

<a name='M-EasyITCenter-Pages-ServerToolPanelListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-ServerToolTypeListPage'></a>
## ServerToolTypeListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

ServerToolTypeListPage

<a name='M-EasyITCenter-Pages-ServerToolTypeListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalClasses-SpTableList'></a>
## SpTableList `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Generated Class TableList 
from Stored Procedure SystemSpGetTableList

<a name='T-EasyITCenter-Pages-SupportPage'></a>
## SupportPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SupportPage

<a name='M-EasyITCenter-Pages-SupportPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemCustomPageListPage'></a>
## SystemCustomPageListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemCustomPageListPage

<a name='M-EasyITCenter-Pages-SystemCustomPageListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemDocumentAdviceListPage'></a>
## SystemDocumentAdviceListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemDocumentAdviceListPage

<a name='M-EasyITCenter-Pages-SystemDocumentAdviceListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemDocumentTypeListPage'></a>
## SystemDocumentTypeListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemDocumentTypeListPage

<a name='M-EasyITCenter-Pages-SystemDocumentTypeListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemFailListPage'></a>
## SystemFailListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemFailListPage

<a name='M-EasyITCenter-Pages-SystemFailListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemGroupMenuListPage'></a>
## SystemGroupMenuListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemGroupMenuListPage

<a name='M-EasyITCenter-Pages-SystemGroupMenuListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemIgnoredExceptionListPage'></a>
## SystemIgnoredExceptionListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemIgnoredExceptionListPage

<a name='M-EasyITCenter-Pages-SystemIgnoredExceptionListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-SystemHelper-SystemLoggerHelper'></a>
## SystemLoggerHelper `type`

##### Namespace

EasyITCenter.SystemHelper

##### Summary

System Logger Helper
Defined Central WebSocket Monitor Controller

<a name='T-EasyITCenter-SystemHelper-SystemLoggerWebSocketClass'></a>
## SystemLoggerWebSocketClass `type`

##### Namespace

EasyITCenter.SystemHelper

##### Summary

System Logger WebSocket Monitor Controller Class Definition
For Centralized Using

<a name='T-EasyITCenter-Pages-SystemLoginHistoryListPage'></a>
## SystemLoginHistoryListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemLoginHistoryListPage

<a name='M-EasyITCenter-Pages-SystemLoginHistoryListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemMenuListPage'></a>
## SystemMenuListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemMenuListPage

<a name='M-EasyITCenter-Pages-SystemMenuListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemMonitorPage'></a>
## SystemMonitorPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemMonitorPage

<a name='M-EasyITCenter-Pages-SystemMonitorPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalOperations-SystemOperations'></a>
## SystemOperations `type`

##### Namespace

EasyITCenter.GlobalOperations

##### Summary

Centralised System Functions for work with
Types, methods, Formats, Logic, supported methods

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-FilterToString-System-Windows-Controls-ComboBox-'></a>
### FilterToString(filterBox) `method`

##### Summary

SYSTEM Advanced Filter Conversion for API
return existing filter for saving to string in selected Page

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filterBox | [System.Windows.Controls.ComboBox](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.ComboBox 'System.Windows.Controls.ComboBox') |  |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-FirstLetterToLower-System-String-'></a>
### FirstLetterToLower(str) `method`

##### Summary

Change First Character of String

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| str | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string. |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-GetExceptionMessages-System-Exception,System-Int32-'></a>
### GetExceptionMessages(exception,msgCount) `method`

##### Summary

Mining All Exception Information For Central System Logger
Ignore Some selected Fails is possible by Ignored Exception Settings

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-GetExceptionMessagesAll-System-Exception,System-Int32-'></a>
### GetExceptionMessagesAll(exception,msgCount) `method`

##### Summary

Mining All Exception Information For Local System Logger
EveryTime Show All fails for Best Developing On Expert Level

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-IncreaseFileVersionBuild'></a>
### IncreaseFileVersionBuild() `method`

##### Summary

Automatic Increase version System
Ideal for small systems with more release in 1 day
Increase Windows Correct 3 position for Widows Installation
In Debug is increase last 4 position

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-RandomString-System-Int32-'></a>
### RandomString(length) `method`

##### Summary

Generate Random String with defined length

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The length. |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-RemoveAppNamespaceFromString-System-String-'></a>
### RemoveAppNamespaceFromString(stringForRemoveNamespace) `method`

##### Summary

Its Solution for this is a solution for demanding and multiplied servers
Or Running SHARP and Test System By One Backend Server Service
API Urls with Namespaces in Name are for Backend model with More Same Database Schemas
Backend Databases count in One Server Service is Unlimited

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stringForRemoveNamespace | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-SendMailWithMailTo-System-String,System-String,System-String,System-String-'></a>
### SendMailWithMailTo(address,subject,body,attach) `method`

##### Summary

System Mail sending

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| address | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| subject | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| body | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| attach | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-SendMailWithServerSetting-System-String-'></a>
### SendMailWithServerSetting(message) `method`

##### Summary

Email Sender for send Direct Email by Server Configuration for Testing

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-SetLanguageDictionary-System-Windows-ResourceDictionary,System-String-'></a>
### SetLanguageDictionary(Resources,languageDefault) `method`

##### Summary

Settings Local Application Translation dictionaries (Resources Files) for Pages
Will be replaced by DBDictionary, but for Offline Running must be possible

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Resources | [System.Windows.ResourceDictionary](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.ResourceDictionary 'System.Windows.ResourceDictionary') |  |
| languageDefault | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-GlobalOperations-SystemOperations-StartExternalProccess-System-String,System-String,System-String,System-String-'></a>
### StartExternalProccess(type,processCommand,startupPath,arguments) `method`

##### Summary

System External Process Starter for Conrtalized Using
Return the processId when is started or null

TODO
- create process Monitor
- save the monitored procceses to System Monitor
- must be refactored actual status

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| type | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| processCommand | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| startupPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The startup path. |
| arguments | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The arguments. |

<a name='T-EasyITCenter-Pages-SystemParameterListPage'></a>
## SystemParameterListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemParameterListPage

<a name='M-EasyITCenter-Pages-SystemParameterListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemReportListPage'></a>
## SystemReportListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemReportListPage

<a name='M-EasyITCenter-Pages-SystemReportListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-SystemReportQueueListPage'></a>
## SystemReportQueueListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemReportQueueListPage

<a name='M-EasyITCenter-Pages-SystemReportQueueListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalClasses-SystemStatuses'></a>
## SystemStatuses `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

!!SYSTEM Global Definition for System Statuses

SYSTEM Running mode
In debug mode is disabled the System Logger
Visual Studio Debugger difficult operation has problem
If you want you can enable SystemLogger by change to: DebugWithSystemLogger

Its Used as String EveryWhere
Its good Soution for Centarized Statuses of System
Errors Are Saved In SystemLogger or Database

<a name='T-EasyITCenter-Pages-SystemSvgIconListPage'></a>
## SystemSvgIconListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemSvgIconListPage

<a name='M-EasyITCenter-Pages-SystemSvgIconListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalClasses-SystemTranslatedTableList'></a>
## SystemTranslatedTableList `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Class for Using as customized list the List of API urls
for Central using in the system
One Api is One: Dataview / Right / Report Posibility / Menu Item / Page
Exist rules for automatic processing in System Core Logic for simple Developing

<a name='T-EasyITCenter-Pages-SystemTranslationListPage'></a>
## SystemTranslationListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

SystemTranslationListPage

<a name='M-EasyITCenter-Pages-SystemTranslationListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-SystemStructure-SystemWindowDataModel'></a>
## SystemWindowDataModel `type`

##### Namespace

EasyITCenter.SystemStructure

<a name='M-EasyITCenter-SystemStructure-SystemWindowDataModel-#ctor'></a>
### #ctor() `constructor`

##### Summary

Its Solution For MultiInstance Application
If The InterTab Is Enabled Can be Dragged Tab To the New Application

##### Parameters

This constructor has no parameters.

<a name='T-EasyITCenter-Pages-TemplateClassListPage'></a>
## TemplateClassListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

TemplateClassListPage

<a name='M-EasyITCenter-Pages-TemplateClassListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateClassListViewPage'></a>
## TemplateClassListViewPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

TemplateClassListViewPage

<a name='M-EasyITCenter-Pages-TemplateClassListViewPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateClassListWithParentPage'></a>
## TemplateClassListWithParentPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

TemplateClassListWithParentPage

<a name='M-EasyITCenter-Pages-TemplateClassListWithParentPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateClassListWithSubPage'></a>
## TemplateClassListWithSubPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

This standartized Template is only for list view od Data table
Called from MainWindow.cs on open New Tab

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initialize page with loading Dictionary and start loding data
 Manual work needed Translate All XAML fields by Resources
 Runned on start

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-Pages-TemplateClassListWithSubPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data and selected record for All Pages
 this method is for global working with pages Called from MainWindow.cs for Control of Button Menu and Selections (Report,Filter and more)
 All is setted as global Classes for All Pages and Work is Fully automatized by System core

 HERE you Define All Data Variables For This Form

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnCancel_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnCancel_Click(sender,e) `method`

##### Summary

Standartized method for cancel of Editing. Hide Detail and Dataview List is Shown
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnItemDelete_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnItemDelete_Click(sender,e) `method`

##### Summary

Standartized method for Direct Delete SubRecord to SubListView
Manual work needed, set correct data set for SubRecord
This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnItemInsert_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnItemInsert_Click(sender,e) `method`

##### Summary

Standartized method for Direct Insert SubRecord to SubListView
Manual work needed, set correct data set for SubRecord
This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-BtnSave_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnSave_Click(sender,e) `method`

##### Summary

Standartized method for Save Record And return to Dataview.
Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction FORM to SELECTED RECORD
By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-ClearItemsFields'></a>
### ClearItemsFields() `method`

##### Summary

Standartized Method for Clear SubRecord Input Fields with custom Dataset
For Correct Using must be Fields changed for used dataset

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-Customer_KeyDown-System-Object,System-Windows-Input-KeyEventArgs-'></a>
### Customer_KeyDown(sender,e) `method`

##### Summary

Standartized method for Keyboard control of SelectBox
This is full automatic, not needed manual work

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-DeleteRecord'></a>
### DeleteRecord() `method`

##### Summary

Standartized Method on All Pages with Forms for New Record
ALL Needed changes Are done By Replace CLASSNAME not needed manual work
Dynamicaly Called Only from MainWindow.cs on Delete button Click
Show MainWindow Standartized Message with info About Delete and After confirm Send DeleteApiRequest
Reload Datalist and cancel Selected Record

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgListView_MouseDoubleClick-System-Object,System-Windows-Input-MouseButtonEventArgs-'></a>
### DgListView_MouseDoubleClick(sender,e) `method`

##### Summary

Standartized method for selecting and opening Detail Form. This is only View Page, that is only for Select record
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.MouseButtonEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.MouseButtonEventArgs 'System.Windows.Input.MouseButtonEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgListView_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### DgListView_SelectionChanged(sender,e) `method`

##### Summary

Standartized method for select one record only.
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') | The [SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgListView_Translate-System-Object,System-EventArgs-'></a>
### DgListView_Translate(sender,ex) `method`

##### Summary

Standartized method for translating column names of DatagidView (List Data)
Manual Changing is needed for set Translate of Column Names via Dictionary Items
Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
Runned On Page Loading

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| ex | [System.EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-DgSubListView_Translate-System-Object,System-EventArgs-'></a>
### DgSubListView_Translate(sender,ex) `method`

##### Summary

Standartized method for translating column names of SubDatagidView (List Data)
Manual Changing is needed for set Translate of Column Names via Dictionary Items
Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
Runned On Page Loading

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| ex | [System.EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-EditRecord-System-Boolean-'></a>
### EditRecord() `method`

##### Summary

Standartized Method on All Pages with Forms for New Record
ALL Needed changes Are done By Replace CLASSNAME not needed manual work
Dynamicaly Called Only from MainWindow.cs on Edit button Click
Only Set Record And Hide Dataview and Show Detail with selected Record

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-Filter-System-String-'></a>
### Filter(filter) `method`

##### Summary

Standartized method for searching match in setted columns. Searched value is from the simple 'Search Input' for DatagidView (List Data)
Manual Changing is needed of filtered columns by Search Value
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working with pages Called from MainWindow.cs
Dynamicaly Called Only from MainWindow.cs when Search value Inserted

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filter | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-LoadDataList'></a>
### LoadDataList() `method`

##### Summary

Standartized Method for Loading data.
 Manual Changing is needed for simple form is All changed By CLASNAME Chage, but If you need More API data for selection Here are Defined All incoming Data
 Loading is same centralized only change ClasName For Diferent Dataset

 After all data for DatagridView (List Data) are loaded The ProgressRing is hidden
 This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
 this method is for global working with pages Called from MainWindow.cs on Refresh button click
 Runned on Pageloading or Filter or View Change

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-NewRecord'></a>
### NewRecord() `method`

##### Summary

Standartized Method on All Pages with Forms for New Record
ALL Needed changes Are done By Replace CLASSNAME not needed manual work
Dynamicaly Called Only from MainWindow.cs on New button Click
Only Set Record And Hide Dataview and Show Detail

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-NotesChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### NotesChanged(sender,e) `method`

##### Summary

Standartized Maximal Simle Code with Reaction and Fill input After ParentComboboxSelection

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-PartNumberGotFocus-System-Object,System-Windows-RoutedEventArgs-'></a>
### PartNumberGotFocus(sender,e) `method`

##### Summary

Standartized method indicate start loading all data of SubRecord after Selected in Combobox
This is full automatic, not needed manual work

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-PartNumber_KeyDown-System-Object,System-Windows-Input-KeyEventArgs-'></a>
### PartNumber_KeyDown(sender,e) `method`

##### Summary

Standartized method for Keyboard control of SelectBox
This is full automatic, not needed manual work

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SelectCustomer_Enter-System-Object,System-Windows-Input-KeyEventArgs-'></a>
### SelectCustomer_Enter(sender,e) `method`

##### Summary

Standartized methods with Indicate Customer Selection and Start Filling Input
This is full automatic, not needed manual work

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SelectGotFocus-System-Object,System-Windows-RoutedEventArgs-'></a>
### SelectGotFocus(sender,e) `method`

##### Summary

Standartized method indicate start loading all data of SubRecord after Selected in Combobox
This is full automatic, not needed manual work

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SelectPartNumber_Enter-System-Object,System-Windows-Input-KeyEventArgs-'></a>
### SelectPartNumber_Enter(sender,e) `method`

##### Summary

Standartized method for select one record only.
This is full automatic, not needed manual work
This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.Input.KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') | The [KeyEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.KeyEventArgs 'System.Windows.Input.KeyEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetCustomer'></a>
### SetCustomer() `method`

##### Summary

Standartized methods For Filling Input after Selection
This is full automatic, not needed manual work

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetPartNumber'></a>
### SetPartNumber() `method`

##### Summary

Standartized methods For Filling Input after Selection
This is full automatic, not needed manual work

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetRecord-System-Boolean,System-Boolean-'></a>
### SetRecord(showForm,copy) `method`

##### Summary

Standartized method for ¨Set New Record/ Edit Record / Copy Record And return to Dataview.
 Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction Selected record to FORM
 By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
 this method is for global working page its local control From XAML

 In this type Form Here Are loaded Data for SublistView (on knows selected record for correct join)

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| showForm | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | if set to `true` [show form]. |
| copy | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | if set to `true` [copy]. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-SetSubListsNonActiveOnNewItem-System-Boolean-'></a>
### SetSubListsNonActiveOnNewItem() `method`

##### Summary

Standartized Method for Load All SubData which is needed for Working with SubRecord
For Correct Using must be changed for actual datasets

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-UpdateCustomerSearchResults'></a>
### UpdateCustomerSearchResults() `method`

##### Summary

Standartized method Filling Customer Input by Selected Value
This is full automatic, not needed manual work

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-UpdatePartNumberSearchResults'></a>
### UpdatePartNumberSearchResults() `method`

##### Summary

Standartized method Filling Customer Input by Selected Value
This is full automatic, not needed manual work

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubPage-dgSubListView_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### dgSubListView_SelectionChanged(sender,e) `method`

##### Summary

Standartized method for select one record only.
This is full automatic, not needed manual work
This is on page With Sublist ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') | The [SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') instance containing the event data. |

<a name='T-EasyITCenter-Pages-TemplateClassListWithSubViewPage'></a>
## TemplateClassListWithSubViewPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

This standartized Template is only for list view od Data table
Called from MainWindow.cs on open New Tab

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initialize page with loading Dictionary and start loding data
 Manual work needed Translate All XAML fields by Resources
 Runned on start

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-Pages-TemplateClassListWithSubViewPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data and selected record for All Pages
 this method is for global working with pages Called from MainWindow.cs for Control of Button Menu and Selections (Report,Filter and more)
 All is setted as global Classes for All Pages and Work is Fully automatized by System core

 HERE you Define All Data Variables For This Form

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-BtnCancel_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnCancel_Click(sender,e) `method`

##### Summary

Standartized method for cancel of Editing. Hide Detail and Dataview List is Shown
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-BtnSave_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnSave_Click(sender,e) `method`

##### Summary

Standartized method for Save Record And return to Dataview.
Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction FORM to SELECTED RECORD
By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DeleteRecord'></a>
### DeleteRecord() `method`

##### Summary

Standartized Method on All Pages with Forms for New Record
ALL Needed changes Are done By Replace CLASSNAME not needed manual work
Dynamicaly Called Only from MainWindow.cs on Delete button Click
Show MainWindow Standartized Message with info About Delete and After confirm Send DeleteApiRequest
Reload Datalist and cancel Selected Record

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgListView_MouseDoubleClick-System-Object,System-Windows-Input-MouseButtonEventArgs-'></a>
### DgListView_MouseDoubleClick(sender,e) `method`

##### Summary

Standartized method for selecting and opening Detail Form. This is only View Page, that is only for Select record
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.Input.MouseButtonEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Input.MouseButtonEventArgs 'System.Windows.Input.MouseButtonEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgListView_SelectionChanged-System-Object,System-Windows-Controls-SelectionChangedEventArgs-'></a>
### DgListView_SelectionChanged(sender,e) `method`

##### Summary

Standartized method for select one record only.
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.Controls.SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') | The [SelectionChangedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.Controls.SelectionChangedEventArgs 'System.Windows.Controls.SelectionChangedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgListView_Translate-System-Object,System-EventArgs-'></a>
### DgListView_Translate(sender,ex) `method`

##### Summary

Standartized method for translating column names of DatagidView (List Data)
Manual Changing is needed for set Translate of Column Names via Dictionary Items
Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
Runned On Page Loading

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| ex | [System.EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-DgSubListView_Translate-System-Object,System-EventArgs-'></a>
### DgSubListView_Translate(sender,ex) `method`

##### Summary

Standartized method for translating column names of SubDatagidView (List Data)
Manual Changing is needed for set Translate of Column Names via Dictionary Items
Here you can set Format(Date,time, etc),Index position, Hide Column, Translate, change grahics Style
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working with page internal reaction on DatagrigView DataFiling on Start Page
Runned On Page Loading

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| ex | [System.EventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventArgs 'System.EventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-EditRecord-System-Boolean-'></a>
### EditRecord() `method`

##### Summary

Standartized Method on All Pages with Forms for New Record
ALL Needed changes Are done By Replace CLASSNAME not needed manual work
Dynamicaly Called Only from MainWindow.cs on Edit button Click
Only Set Record And Hide Dataview and Show Detail with selected Record

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-Filter-System-String-'></a>
### Filter(filter) `method`

##### Summary

Standartized method for searching match in setted columns. Searched value is from the simple 'Search Input' for DatagidView (List Data)
Manual Changing is needed of filtered columns by Search Value
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working with pages Called from MainWindow.cs
Dynamicaly Called Only from MainWindow.cs when Search value Inserted

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filter | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-Fixed_Checked-System-Object,System-Windows-RoutedEventArgs-'></a>
### Fixed_Checked(sender,e) `method`

##### Summary

Standartized method for Loading Data for Selected Record
This is full automatic, not needed manual work
This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
this method is for global working page its local control From XAML

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-LoadDataList'></a>
### LoadDataList() `method`

##### Summary

Standartized Method for Loading data.
 Manual Changing is needed for simple form is All changed By CLASNAME Chage, but If you need More API data for selection Here are Defined All incoming Data
 Loading is same centralized only change ClasName For Diferent Dataset

 After all data for DatagridView (List Data) are loaded The ProgressRing is hidden
 This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
 this method is for global working with pages Called from MainWindow.cs on Refresh button click
 Runned on Pageloading or Filter or View Change

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-LoadSubDataList'></a>
### LoadSubDataList() `method`

##### Summary

Standartized Method for Loading SubData.
 Manual Changing is needed for simple form is All changed By CLASNAME Chage, but If you need More API data for selection Here are Defined All incoming Data
 Loading is same centralized only change ClasName For Diferent Dataset

 After all data for DatagridView (List Data) are loaded The ProgressRing is hidden
 This is on Every page ('View' and 'Form' Types) without 'Setting' Type (Name=Setting and Tag=Setting in XAML part)
 this method is for global working with pages Called from MainWindow.cs on Refresh button click
 Runned on Pageloading or Filter or View Change

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-NewRecord'></a>
### NewRecord() `method`

##### Summary

Standartized Method on All Pages with Forms for New Record
ALL Needed changes Are done By Replace CLASSNAME not needed manual work
Dynamicaly Called Only from MainWindow.cs on New button Click
Only Set Record And Hide Dataview and Show Detail

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Pages-TemplateClassListWithSubViewPage-SetRecord-System-Boolean,System-Boolean-'></a>
### SetRecord(showForm,copy) `method`

##### Summary

Standartized method for ¨Set New Record/ Edit Record / Copy Record And return to Dataview.
 Manual work need, Here is Join Betwen XAML inputs and Selected Record Dataset (dataset for Detail): Direction Selected record to FORM
 By ClasName Replacing All other changes are automaticaly (API,DatasetType), just must define and control Each Field Of Dataset
 this method is for global working page its local control From XAML

 In this type Form Here Are loaded Data for SublistView (on knows selected record for correct join)

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| showForm | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | if set to `true` [show form]. |
| copy | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | if set to `true` [copy]. |

<a name='T-EasyITCenter-Pages-TemplateDocumentViewPage'></a>
## TemplateDocumentViewPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

Template Page For View document, pictures, text and and much more file formats opened in WebViewer

<a name='M-EasyITCenter-Pages-TemplateDocumentViewPage-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initialize page with loading Dictionary and direct show example file

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-Pages-TemplateDocumentViewPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data for global vorking with pages

<a name='M-EasyITCenter-Pages-TemplateDocumentViewPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateSTLPage'></a>
## TemplateSTLPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

TemplateSTLPage

<a name='F-EasyITCenter-Pages-TemplateSTLPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data for global vorking with pages

<a name='M-EasyITCenter-Pages-TemplateSTLPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateSettingsPage'></a>
## TemplateSettingsPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

TemplateSettingsPage

<a name='M-EasyITCenter-Pages-TemplateSettingsPage-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initialize page with loading Dictionary and start loding data
 Manual work needed Translate All XAML fields by Resources
 Runned on start

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-Pages-TemplateSettingsPage-Languages'></a>
### Languages `constants`

##### Summary

Define Collection For Combobox

<a name='F-EasyITCenter-Pages-TemplateSettingsPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data for global vorking with pages

<a name='M-EasyITCenter-Pages-TemplateSettingsPage-BtnApiTest_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnApiTest_Click(sender,e) `method`

##### Summary

Customized GET Call

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') |  |

<a name='M-EasyITCenter-Pages-TemplateSettingsPage-BtnSave_Click-System-Object,System-Windows-RoutedEventArgs-'></a>
### BtnSave_Click(sender,e) `method`

##### Summary

Standartized method for Direct Save Record
Manual work needed, set correct data set for SubRecord

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The source of the event. |
| e | [System.Windows.RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') | The [RoutedEventArgs](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Windows.RoutedEventArgs 'System.Windows.RoutedEventArgs') instance containing the event data. |

<a name='M-EasyITCenter-Pages-TemplateSettingsPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateVideoPage'></a>
## TemplateVideoPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

TemplateVideoPage

<a name='F-EasyITCenter-Pages-TemplateVideoPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data for global vorking with pages

<a name='M-EasyITCenter-Pages-TemplateVideoPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-TemplateWebViewPage'></a>
## TemplateWebViewPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

Template Page For internet pages document, pictures, text and and much more file formats opened in WebViewer

<a name='M-EasyITCenter-Pages-TemplateWebViewPage-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initialize page with loading Dictionary and direct show example file

##### Parameters

This constructor has no parameters.

<a name='F-EasyITCenter-Pages-TemplateWebViewPage-dataViewSupport'></a>
### dataViewSupport `constants`

##### Summary

Standartized declaring static page data for global vorking with pages

<a name='M-EasyITCenter-Pages-TemplateWebViewPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-GlobalClasses-TiltTargets'></a>
## TiltTargets `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Tilt Document Types Definitions

<a name='T-EasyITCenter-GlobalClasses-UpdateVariant'></a>
## UpdateVariant `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Global class for using Name/Value - Example Reports, Language and others

<a name='T-EasyITCenter-GlobalClasses-UserData'></a>
## UserData `type`

##### Namespace

EasyITCenter.GlobalClasses

##### Summary

Basic user data for login

<a name='T-EasyITCenter-Pages-WebBannedIpAddressListPage'></a>
## WebBannedIpAddressListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WebBannedIpAddressListPage

<a name='M-EasyITCenter-Pages-WebBannedIpAddressListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-WebCodeLibraryListPage'></a>
## WebCodeLibraryListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WebCodeLibraryListPage

<a name='M-EasyITCenter-Pages-WebCodeLibraryListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-WebGroupMenuListPage'></a>
## WebGroupMenuListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WebGroupMenuListPage

<a name='M-EasyITCenter-Pages-WebGroupMenuListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-WebMenuListPage'></a>
## WebMenuListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WebMenuListPage

<a name='M-EasyITCenter-Pages-WebMenuListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-WebSettingListPage'></a>
## WebSettingListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WebSettingListPage

<a name='M-EasyITCenter-Pages-WebSettingListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-WebVisitIpListPage'></a>
## WebVisitIpListPage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WebVisitIpListPage

<a name='M-EasyITCenter-Pages-WebVisitIpListPage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Pages-WelcomePage'></a>
## WelcomePage `type`

##### Namespace

EasyITCenter.Pages

##### Summary

WelcomePage

<a name='M-EasyITCenter-Pages-WelcomePage-InitializeComponent'></a>
### InitializeComponent() `method`

##### Summary

InitializeComponent

##### Parameters

This method has no parameters.
