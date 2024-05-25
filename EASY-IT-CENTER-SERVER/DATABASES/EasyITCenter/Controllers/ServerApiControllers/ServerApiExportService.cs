﻿using HtmlAgilityPack;
using System.IO.Compression;

namespace EasyITCenter.ServerCoreDBSettings {

 
    [ApiController]
    [Route("ServerApi")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerApiExportService : ControllerBase {
        private EasyITCenterContext Context { get; }

        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        public ServerApiExportService(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment, EasyITCenterContext context) {
            _hostingEnvironment = hostingEnvironment;
            Context = context;
        }

        //TODO MODIFY FOR ANY USER CAN HAVE CUSTOM PORTAL

        //[HttpGet("/ServerApi/Export/ExportWebPortal")]
        //public async Task<IActionResult> ExportWebPortal() {
        //    try {
        //        List<WebMenuList> data;
        //        using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) 
        //            { data = new EasyITCenterContext().WebMenuLists.ToList(); }

        //        FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"));
        //        FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, "Export"));
        //        FileOperations.CopyDirectory(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "metro"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "metro"));
        //        data.ForEach(menuItem => {
        //            try {
        //                HtmlWeb hw = new HtmlWeb();
        //                HtmlDocument doc = hw.Load((Request.IsHttps ? "https" : "http") + "://" + Request.Host + "/" + DataOperations.RemoveWhitespace(menuItem.Id + "-" + menuItem.Name));
        //                doc.Save(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", DataOperations.RemoveWhitespace(menuItem.Id + "-" + menuItem.Name) + ".html"), Encoding.UTF8);
        //            } catch { }
        //        });

        //        ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
        //        var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));

        //        if (data != null) { return File(zipData, "application/x-zip-compressed", "Webpages.zip"); }
        //        else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
        //    } catch (Exception ex) { return BadRequest(new { message = DataOperations.GetSystemErrMessage(ex) }); }
        //}

        /// <summary>
        /// Update Translation Table By All Tables and Field Names For Export Offline Language
        /// Dictionary CZ for System
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/ExportServices/XamlCz")]
        public async Task<IActionResult> ExportXamlCz() {
            try {
                new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>("EXEC SpOperationFillTranslationTableList;");

                List<SystemTranslationList> data = null;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().SystemTranslationLists.OrderBy(a => a.SystemName).ToList(); }

                string xmlExport = "<ResourceDictionary\r\n    xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\"\r\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"\r\n    xmlns:system=\"clr-namespace:System;assembly=mscorlib\">";

                data.ForEach(translation => {
                    if (!translation.SystemName.Any(Char.IsWhiteSpace)) { xmlExport += Environment.NewLine + "<system:String x:Key=\"" + DataOperations.FirstCharToLowerCase(translation.SystemName) + "\" xml:space=\"preserve\">" + (translation.DescriptionCz != null && translation.DescriptionCz.Length > 0 ? translation.DescriptionCz : translation.SystemName) + "</system:String>"; }
                });
                xmlExport += Environment.NewLine + "</ResourceDictionary>";

                return File(Encoding.UTF8.GetBytes(xmlExport), "application/xml", "StringResources.cs-CZ.xaml");
            } catch (Exception ex) { return BadRequest(new { message = DataOperations.GetSystemErrMessage(ex) }); }
        }

        /// <summary>
        /// Update Translation Table By All Tables and Field Names For Export Offline Language
        /// Dictionary EN for System
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/ExportServices/XamlEn")]
        public async Task<IActionResult> ExportXamlEn() {
            try {
                new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>("EXEC SpOperationFillTranslationTableList;");

                List<SystemTranslationList> data = null;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().SystemTranslationLists.OrderBy(a => a.SystemName).ToList(); }

                string xmlExport = "<ResourceDictionary\r\n    xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\"\r\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"\r\n    xmlns:system=\"clr-namespace:System;assembly=mscorlib\">";

                data.ForEach(translation => {
                    if (!translation.SystemName.Any(Char.IsWhiteSpace)) { xmlExport += Environment.NewLine + "<system:String x:Key=\"" + DataOperations.FirstCharToLowerCase(translation.SystemName) + "\" xml:space=\"preserve\">" + (translation.DescriptionEn != null && translation.DescriptionEn.Length > 0 ? translation.DescriptionEn : translation.SystemName) + "</system:String>"; }
                });
                xmlExport += Environment.NewLine + "</ResourceDictionary>";

                return File(Encoding.UTF8.GetBytes(xmlExport), "application/xml", "StringResources.xaml");
            } catch (Exception ex) { return BadRequest(new { message = DataOperations.GetSystemErrMessage(ex) }); }
        }



        /// <summary>
        /// Minimal Export of Page for Running
        /// on every Web servers Without Needs anythink
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/ExportServices/ExportStaticWebPortal")]
        public async Task<IActionResult> ExportStaticWebPortal() {
            try {

                FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Export"));
                FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, "Export"));
                FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "metro", "managed", "storage"));
                FileOperations.CopyDirectory(Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "metro", "managed", "storage"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "metro", "managed", "storage"));

                string json = System.IO.File.ReadAllText(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "metro", "managed", "storage", "globalStorage.js"));
                FileOperations.WriteToFile(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "metro", "managed", "storage", "globalStorage.js"), json.Replace("window.location.origin",ServerConfigSettings.ServerPublicUrl));

                HtmlWeb hw = new HtmlWeb();
                HtmlDocument doc = hw.Load((Request.IsHttps ? "https" : "http") + "://" + Request.Host + "/Portal");
                string index = doc.Text.Replace("../..", ServerConfigSettings.ServerPublicUrl);
                System.IO.File.WriteAllText(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "Index.html"), index);

                ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));

                return File(zipData, "application/x-zip-compressed", "Webpages.zip");
            } catch (Exception ex) { return BadRequest(new { message = DataOperations.GetSystemErrMessage(ex) }); }
        }


        /// <summary>
        /// Database Dgml Schema
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/ExportServices/DgmlDatabaseSchema")]
        public IActionResult GetDgml() {
            if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) {
                var response = File(Encoding.UTF8.GetBytes(new EasyITCenterContext().AsDgml()), MimeTypes.GetMimeType("DBschema.dgml"), "DBschema.dgml");
                return response;
            }
            else { return null; }
        }


        /// <summary>
        /// Get Full DataBase SQL Script
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/ExportServices/SqlDatabaseSchema")]
        public IActionResult Get() {
            if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) {
                var response = File(Encoding.UTF8.GetBytes(Context.AsSqlScript()), MimeTypes.GetMimeType("DBschema.sql"), "DBschema.sql");
                return response;
            }
            else { return null; }
        }
    }
}