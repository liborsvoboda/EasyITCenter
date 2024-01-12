﻿namespace EasyITSystemCenter.Api {

    /// <summary>
    /// ALL standard View AND Form API Call must end with "List" - These will automatic added for
    /// reports Definitions TODO From Table?
    /// </summary>
    public enum ApiUrls {
        /*Authentication & Check APIs*/
        EasyITCenterAuthentication,
        EasyITCenterBackendCheck,

        /*Basic/Shared APIs*/
        EasyITCenterBasicAttachmentList,
        EasyITCenterBasicCalendarList,
        EasyITCenterBasicCurrencyList,
        EasyITCenterBasicImageGalleryList,
        EasyITCenterBasicItemList,
        EasyITCenterBasicUnitList,
        EasyITCenterBasicVatList,

        /*Business Module APIs*/
        EasyITCenterBusinessAddressList,
        EasyITCenterBusinessBranchList,
        EasyITCenterBusinessCreditNoteList,
        EasyITCenterBusinessCreditNoteSupportList,
        EasyITCenterBusinessExchangeRateList,
        EasyITCenterBusinessIncomingInvoiceList,
        EasyITCenterBusinessIncomingInvoiceSupportList,
        EasyITCenterBusinessIncomingOrderList,
        EasyITCenterBusinessIncomingOrderSupportList,
        EasyITCenterBusinessMaturityList,
        EasyITCenterBusinessNotesList,
        EasyITCenterBusinessOfferList,
        EasyITCenterBusinessOfferSupportList,
        EasyITCenterBusinessOutgoingInvoiceList,
        EasyITCenterBusinessOutgoingInvoiceSupportList,
        EasyITCenterBusinessOutgoingOrderList,
        EasyITCenterBusinessOutgoingOrderSupportList,
        EasyITCenterBusinessPaymentMethodList,
        EasyITCenterBusinessPaymentStatusList,
        EasyITCenterBusinessReceiptList,
        EasyITCenterBusinessReceiptSupportList,
        EasyITCenterBusinessWarehouseList,

        /*Production Guides APIs*/
        EasyITCenterProdGuidGroupList,
        EasyITCenterProdGuidOperationList,
        EasyITCenterProdGuidPartList,
        EasyITCenterProdGuidPersonList,
        EasyITCenterProdGuidWorkList,

        /*Documentation Server Administration APIs*/
        EasyITCenterDocSrvDocumentationCodeLibraryList,
        EasyITCenterDocSrvDocumentationList,
        EasyITCenterDocSrvDocumentationGroupList,
        EasyITCenterDocSrvDocTemplateList,

        /*License Server Administration APIs*/
        EasyITCenterLicSrvLicenseActivationFailList,
        EasyITCenterLicSrvLicenseAlgorithmList,
        EasyITCenterLicSrvUsedLicenseList,

        /*Server Administartion Setting APIs*/
        EasyITCenterServerBrowsablePathList,
        EasyITCenterServerCorsDefAllowedOriginList,
        EasyITCenterServerHealthCheckTaskList,
        EasyITCenterServerLiveDataMonitorList,
        ServerModuleAndServiceList,
        EasyITCenterServerSettingList,
        EasyITCenterServerToolPanelDefinitionList,
        EasyITCenterServerToolTypeList,

        EasyITCenterSolutionEmailTemplateList,
        EasyITCenterSolutionLanguageList,
        EasyITCenterSolutionOperationList,
        EasyITCenterSolutionMixedEnumList,
        EasyITCenterSolutionMottoList,
        EasyITCenterSolutionSchedulerList,
        EasyITCenterSolutionSchedulerProcessList,
        EasyITCenterSolutionUserList,
        EasyITCenterSolutionUserRoleList,
        SolutionStaticFileList,
        SolutionWebsiteList,

        /*System Administartion Setting APIs*/
        EasyITCenterSystemCustomPageList,
        EasyITCenterSystemDocumentAdviceList,
        EasyITCenterSystemDocumentTypeList,
        EasyITCenterSystemGroupMenuList,
        EasyITCenterSystemIgnoredExceptionList,
        EasyITCenterSystemLoginHistoryList,
        EasyITCenterSystemMenuList,
        EasyITCenterSystemParameterList,
        EasyITCenterSystemReportQueueList,
        EasyITCenterSystemReportList,
        EasyITCenterSolutionFailList,
        EasyITCenterSystemTranslationList,
        EasyITCenterSystemSvgIconList,

        /*WebPortal APIs*/
        EasyITCenterWebBannedIpAddressList,
        EasyITCenterWebCodeLibraryList,
        EasyITCenterWebCoreFileList,
        EasyITCenterWebDeveloperNewsList,
        EasyITCenterWebDocumentationCodeLibraryList,
        EasyITCenterWebDocumentationList,
        EasyITCenterWebGlobalPageBlockList,
        EasyITCenterWebGroupMenuList,
        EasyITCenterWebMenuList,
        EasyITCenterWebSettingList,
        EasyITCenterWebVisitIpList,

        /*Server Special APIs*/
        ServerEmailer,

        /*Servers*/
        CoreServerRestart,
        FtpServerStart,
        FtpServerStop,

        /*StoredProceduresList Library*/
        EasyITCenterStoredProceduresList,
        EasyITCenterSystemOperations,

        /*Template Classes*/
        EasyITCenterTemplateClassList,
        EasyITCenterTemplateClassListWithParrent
    }

    /// <summary>
    /// Global API Definition of Result API calls for All Calling of Insert / Update / Delete
    /// </summary>
    public class DBResultMessage {
        public int InsertedId { get; set; } = 0;
        public string Status { get; set; }
        public int RecordCount { get; set; } = -1;
        public string ErrorMessage { get; set; }
    }
}