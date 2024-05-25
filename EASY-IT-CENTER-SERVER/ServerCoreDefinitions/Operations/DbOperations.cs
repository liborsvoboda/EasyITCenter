﻿using ColorCode.Compilation.Languages;
using DocumentFormat.OpenXml.ExtendedProperties;
using EasyITCenter.DBModel;
using IdentityModel.OidcClient;
using System.Data;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// All Server Definitions of Database Operation method
    /// </summary>
    public class DbOperations {

        #region Definition for Startup And Reload Tables

        /// <summary>
        /// Method for All Server Defined Table for Local Using As Off line AutoUpdated Tables
        /// </summary>
        /// <param name="onlyThis"></param>
        public static void LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes? onlyThis = null) {
            if (ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials) {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                    foreach (ServerLocalDbDialsTypes dbTable in (ServerLocalDbDialsTypes[])Enum.GetValues(typeof(ServerLocalDbDialsTypes))) {
                        switch (onlyThis != null ? onlyThis.ToString() : dbTable.ToString()) {
                            case "SystemTranslationLists":
                                List<SystemTranslationList>? stlDataLL = new EasyITCenterContext().SystemTranslationLists.ToList();
                                int stlIndexLL = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == stlDataLL.GetType());
                                if (stlIndexLL >= 0) ServerRuntimeData.LocalDBTableList[stlIndexLL] = stlDataLL; else ServerRuntimeData.LocalDBTableList.Add(stlDataLL);
                                break;
                            case "ServerModuleAndServiceLists":
                                List<ServerModuleAndServiceList>? smlDataLL = new EasyITCenterContext().ServerModuleAndServiceLists.ToList();
                                int smlIndexLL = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == smlDataLL.GetType());
                                if (smlIndexLL >= 0) ServerRuntimeData.LocalDBTableList[smlIndexLL] = smlDataLL; else ServerRuntimeData.LocalDBTableList.Add(smlDataLL);
                                break;
                            case "WebCoreFileLists":
                                List<WebCoreFileList>? wcDataLL = new EasyITCenterContext().WebCoreFileLists.ToList();
                                int wcIndexLL = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == wcDataLL.GetType());
                                if (wcIndexLL >= 0) ServerRuntimeData.LocalDBTableList[wcIndexLL] = wcDataLL; else ServerRuntimeData.LocalDBTableList.Add(wcDataLL);
                                break;
                            case "WebGlobalPageBlockLists":
                                List<WebGlobalPageBlockList>? wgDataLL = new EasyITCenterContext().WebGlobalPageBlockLists.ToList();
                                int wgIndexLL = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == wgDataLL.GetType());
                                if (wgIndexLL >= 0) ServerRuntimeData.LocalDBTableList[wgIndexLL] = wgDataLL; else ServerRuntimeData.LocalDBTableList.Add(wgDataLL);
                                break;
                            case "ServerStaticOrMvcDefPathLists":
                                List<ServerStaticOrMvcDefPathList>? ssmDataLL = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.ToList();
                                int ssmIndexLL = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == ssmDataLL.GetType());
                                if (ssmIndexLL >= 0) ServerRuntimeData.LocalDBTableList[ssmIndexLL] = ssmDataLL; else ServerRuntimeData.LocalDBTableList.Add(ssmDataLL);
                                break;
                            case "ServerApiSecurityLists":
                                List<ServerApiSecurityList>? sasDataLL = new EasyITCenterContext().ServerApiSecurityLists.ToList();
                                int sasIndexLL = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == sasDataLL.GetType());
                                if (sasIndexLL >= 0) ServerRuntimeData.LocalDBTableList[sasIndexLL] = sasDataLL; else ServerRuntimeData.LocalDBTableList.Add(sasDataLL);
                                break;
                            default: break;
                        }
                        if (onlyThis != null) break;
                    }
                }
            }
        }

        #endregion Definition for Startup And Reload Tables

        #region Public definitions for standard using

        /// <summary>
        /// Default Operation for Call Translation
        ///  Over Local Tables Functionality
        /// </summary>
        /// <param name="word">    </param>
        /// <param name="language"></param>
        /// <returns></returns>
        public static string DBTranslate(string word, string language = "cz") {
            return ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials ? DBTranslateOffline(word, language) : DBTranslateOnline(word, language);
        }


        /// <summary>
        /// Default Operation for Call CHEckModuleExist
        ///  Over Local Tables Functionality
        /// </summary>
        /// <param name="modulePath"></param>
        /// <returns></returns>
        public static ServerModuleAndServiceList? CheckDefinedWebPageExists(string modulePath) {
            return ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials ? CheckDefinedWebPageOffline(modulePath) : CheckDefinedWebPageOnline(modulePath);
        }


        /// <summary>
        /// Default Operation For Set Ignoring App.Use Paths
        /// For MVC Tools, Static Webs And Content
        /// </summary>
        /// <param name="serverPath"></param>
        /// <returns></returns>
        public static List<ServerStaticOrMvcDefPathList>? CheckDBServerApiRule(string serverPath) {
            return ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials ? CheckDBServerApiRuleOffline(serverPath) : CheckDBServerApiRuleOnline(serverPath);
        }

        

        /// <summary>
        /// Default Operation For Working Wihth 
        /// Portal Scripts From Local Tables.
        /// </summary>
        /// <param name="specType"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static List<WebCoreFileList>? GetWebPortalJsCssScripts(string specType, string? fileName) {
            return ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials ? GetWebPortalJsCssScriptsOffline(specType, fileName) : GetWebPortalJsCssScriptsOnline(specType, fileName);
        }


        public static ServerApiSecurityList? GetServerApiSecurity(string apiPath) {
            return ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials ? GetServerApiSecurityOffline(apiPath) : GetServerApiSecurityOnline(apiPath);
        }

        /// <summary>
        /// Default Operation For Generate Web Portal
        /// Over Local Tables Functionality
        /// </summary>
        /// <param name="pagePartType"></param>
        /// <returns></returns>
        public static List<WebGlobalPageBlockList>? GetWebGlobalPageBlockLists(string pagePartType) {
            return ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials ? GetWebGlobalPageBlockListsOffline(pagePartType) : GetWebGlobalPageBlockListsOnline(pagePartType);
        }

        #endregion Public definitions for standard using

        #region Private or On-line/Off-line Definitions


        /// <summary>
        /// Get Standard Api Security Definition Offline Method
        /// </summary>
        /// <param name="modulePath"></param>
        /// <returns></returns>
        private static ServerApiSecurityList? GetServerApiSecurityOffline(string apiPath) {
            int index = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<ServerApiSecurityList>().GetType());

            return ((List<ServerApiSecurityList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.UrlSubPath?.ToLower() == apiPath.ToLower() && a.Active).FirstOrDefault();
        }

        /// <summary>
        /// Get Standard Api Security Definition Online Method
        /// </summary>
        /// <param name="modulePath"></param>
        /// <returns></returns>
        private static ServerApiSecurityList? GetServerApiSecurityOnline(string apiPath) {
            return new EasyITCenterContext().ServerApiSecurityLists.Where(a => a.UrlSubPath.ToLower() == apiPath.ToLower() && a.Active).FirstOrDefault();
        }


        /// <summary>
        /// Get WebGlobalPageBlockList Offline Method
        /// </summary>
        /// <param name="pagePartType"></param>
        /// <returns></returns>
        private static List<WebGlobalPageBlockList>? GetWebGlobalPageBlockListsOffline(string pagePartType) {
            int index = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<WebGlobalPageBlockList>().GetType());
            return ((List<WebGlobalPageBlockList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.Active && a.PagePartType.ToLower() == pagePartType.ToLower()).ToList();
        }



        /// <summary>
        ///  Get WebGlobalPageBlockList OnLine Method
        /// </summary>
        /// <param name="pagePartType"></param>
        /// <returns></returns>
        private static List<WebGlobalPageBlockList>? GetWebGlobalPageBlockListsOnline(string pagePartType) {
            return new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Active && a.PagePartType.ToLower() == pagePartType.ToLower()).ToList();
        }


        /// <summary>
        /// Default Operation For Working Wihth 
        /// Portal Scripts From Local Tables Offline
        /// </summary>
        /// <param name="specType"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        private static List<WebCoreFileList>? GetWebPortalJsCssScriptsOffline(string specType, string? fileName) {
            int index = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<WebCoreFileList>().GetType());

            if (fileName == null && specType.ToLower() == "css") {
                return ((List<WebCoreFileList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "mincss") && a.Active).ToList();
            } else if(fileName == null && specType.ToLower() == "js") {
                return ((List<WebCoreFileList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "minjs") && a.Active).ToList();
            } else if(specType.ToLower() == "css") {
                return ((List<WebCoreFileList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "mincss") && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            } else if (specType.ToLower() == "js") {
                return ((List<WebCoreFileList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "minjs") && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            } else if (specType.ToLower() == "cssfiles") {
                return ((List<WebCoreFileList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SpecificationType.ToLower() == specType.ToLower() && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            } else if (specType.ToLower() == "jsfiles") {
                return ((List<WebCoreFileList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SpecificationType.ToLower() == specType.ToLower() && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            }
            return new List<WebCoreFileList>();
        }




        /// <summary>
        /// Default Operation For Working Wihth 
        /// Portal Scripts From Local Tables. Online
        /// </summary>
        /// <param name="specType"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        private static List<WebCoreFileList>? GetWebPortalJsCssScriptsOnline(string specType, string? fileName) {
            if (fileName == null && specType.ToLower() == "css") {
                return new EasyITCenterContext().WebCoreFileLists.Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "mincss") && a.Active).ToList();
            }
            else if (fileName == null && specType.ToLower() == "js") {
                return new EasyITCenterContext().WebCoreFileLists.Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "minjs") && a.Active).ToList();
            }
            else if (specType.ToLower() == "css") {
                return new EasyITCenterContext().WebCoreFileLists.Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "mincss") && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            }
            else if (specType.ToLower() == "js") {
                return new EasyITCenterContext().WebCoreFileLists.Where(a => (a.SpecificationType.ToLower() == specType.ToLower() || a.SpecificationType.ToLower() == "minjs") && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            }
            else if (specType.ToLower() == "cssfiles") {
                return new EasyITCenterContext().WebCoreFileLists.Where(a => a.SpecificationType.ToLower() == specType.ToLower() && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            }
            else if (specType.ToLower() == "jsfiles") {
                return new EasyITCenterContext().WebCoreFileLists.Where(a => a.SpecificationType.ToLower() == specType.ToLower() && a.FileName.StartsWith(fileName.ToLower()) && a.Active).ToList();
            }
            return new List<WebCoreFileList>();
        }


        /// <summary>
        /// Get Check ServerModule from OneTime Load Server List
        /// </summary>
        /// <param name="modulePath"></param>
        /// <returns></returns>
        private static ServerModuleAndServiceList? CheckDefinedWebPageOffline(string modulePath) {
            int index = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<ServerModuleAndServiceList>().GetType());

            return ((List<ServerModuleAndServiceList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.UrlSubPath?.ToLower() == modulePath.ToLower() && a.Active).FirstOrDefault();
        }



        /// <summary>
        /// Get Check ServerModule from DB 
        /// </summary>
        /// <param name="modulePath"></param>
        /// <returns></returns>
        private static ServerModuleAndServiceList? CheckDefinedWebPageOnline(string modulePath) {
            return new EasyITCenterContext().ServerModuleAndServiceLists.Where(a => a.UrlSubPath.ToLower() == modulePath.ToLower() && a.Active).FirstOrDefault();
        }



        /// <summary>
        /// Get Ignored Static Web Or MVC Too Path In App.Use
        /// For Continue Loading of Defined Layout or Static Web
        /// Offline LocalDB Operation
        /// </summary>
        /// <param name="serverPath"></param>
        /// <returns></returns>
        private static List<ServerStaticOrMvcDefPathList>? CheckDBServerApiRuleOffline(string serverPath) {
            int index = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<ServerStaticOrMvcDefPathList>().GetType());
            serverPath = (serverPath.StartsWith("/") ? serverPath.Substring(1).ToLower() : serverPath.ToLower());

            return ((List<ServerStaticOrMvcDefPathList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => serverPath.StartsWith(a.WebRootSubPath.ToLower()) && a.IsStaticOrMvcDefOnly && a.Active).ToList();
        }



        /// <summary>
        /// Get Ignored Static Web Or MVC Too Path In App.Use
        /// For Continue Loading of Defined Layout or Static Web
        /// Online LocalDB Operation
        /// </summary>
        /// <param name="serverPath"></param>
        /// <returns></returns>
        private static List<ServerStaticOrMvcDefPathList>? CheckDBServerApiRuleOnline(string serverPath) {
            serverPath = (serverPath.StartsWith("/") ? serverPath.Substring(1).ToLower() : serverPath.ToLower());
            return new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Where(a => serverPath.StartsWith(a.WebRootSubPath.ToLower()) && a.IsStaticOrMvcDefOnly && a.Active).ToList();
        }



        /// <summary>
        /// Database LanuageList for Off-line Using Definitions
        /// </summary>
        /// <param name="word">    </param>
        /// <param name="language"></param>
        /// <returns></returns>
        private static string DBTranslateOffline(string word, string language = "cz") {
            string result;
            int index = ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<SystemTranslationList>().GetType());

            //Check Exist AND Insert New
            try {
                if (!((List<SystemTranslationList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SystemName.ToLower() == word.ToLower()).Any()) {
                    result = word;
                    //SystemTranslationList newWord = new() { SystemName = word, DescriptionCz = "", DescriptionEn = "", UserId = 1 };
                    //new EasyITCenterContext().SystemTranslationLists.Add(newWord).Context.SaveChanges();
                    LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.SystemTranslationLists);
                    return result;
                }
            } catch { }

            //Return From List
            if (language == "cz") result = ((List<SystemTranslationList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionCz).FirstOrDefault();
            else result = ((List<SystemTranslationList>)ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionEn).FirstOrDefault();

            if (string.IsNullOrWhiteSpace(result)) { result = word; }
            return result;
        }

        /// <summary>
        /// Database LanuageList for On-line Using Definitions
        /// </summary>
        /// <param name="word">    </param>
        /// <param name="language"></param>
        /// <returns></returns>
        private static string DBTranslateOnline(string word, string language = "cz") {
            string result;

            //Check Exist AND Insert New
            try {
                if (!new EasyITCenterContext().SystemTranslationLists.Where(a => a.SystemName.ToLower() == word.ToLower()).Any()) {
                    result = word;
                    SystemTranslationList newWord = new() { SystemName = word, DescriptionCz = "", DescriptionEn = "", UserId = 1 };
                    new EasyITCenterContext().SystemTranslationLists.Add(newWord).Context.SaveChanges();
                    return result;
                }
            } catch { }

            //Return From List
            if (language == "cz") result = new EasyITCenterContext().SystemTranslationLists.Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionCz).FirstOrDefault();
            else result = new EasyITCenterContext().SystemTranslationLists.Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionEn).FirstOrDefault();

            if (string.IsNullOrWhiteSpace(result)) { result = word; }
            return result;
        }

        #endregion Private or On-line/Off-line Definitions

        #region Databases Helper

        /// <summary>
        /// Extension For Using Custom Defined Tables from Database Procedures Its used as Database
        /// Context Extension as 'CollectionFromSql' Method in Database Context
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dt">The dt.</param>
        /// <returns></returns>
        public static List<T> BindList<T>(DataTable dt) {
            var fields = typeof(T).GetProperties();
            List<T> lst = new List<T>();
            foreach (DataRow dr in dt.Rows) {
                var ob = Activator.CreateInstance<T>();
                foreach (var fieldInfo in fields) {
                    foreach (DataColumn dc in dt.Columns) {
                        if (fieldInfo.Name == dc.ColumnName) {
                            object value = dr[dc.ColumnName];
                            fieldInfo.SetValue(ob, value);
                            break;
                        }
                    }
                }
                lst.Add(ob);
            }
            return lst;
        }

        #endregion Databases Helper
    }
}