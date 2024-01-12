using HtmlAgilityPack;
using System.IO.Compression;

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Root Controller Used by Server Webpages
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerWebPagesExtensionsApi : ControllerBase {

        /// <summary>
        /// Server Root "/" Redirection to "server" Folder
        /// </summary>
        /// <returns></returns>
        [HttpGet("/")]
        public IActionResult Index() {
            return new RedirectResult("/Index");
        }
    }


    [ApiController]
    [Route("ServerCoreExport")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerWebPagesExportApi : ControllerBase {

        /// <summary>
        /// For wwwroot folder Update with detect changes and modify static pages
        /// </summary>
        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;

        public ServerWebPagesExportApi(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet("/ServerCoreExport/ExportStaticWebPages")]
        public async Task<IActionResult> ExportStaticWebPages() {
            try {
                List<WebMenuList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().WebMenuLists.ToList(); }

                FileOperations.ClearFolder(Path.Combine(ServerRuntimeData.Startup_path, "Export"));
                FileOperations.CreatePath(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"));
                FileOperations.CopyDirectory(Path.Combine(ServerRuntimeData.Startup_path, "wwwroot", "metro"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", "metro"));
                data.ForEach(menuItem => {
                    try {
                        HtmlWeb hw = new HtmlWeb();
                        HtmlDocument doc = hw.Load((Request.IsHttps ? "https" : "http") + "://" + Request.Host + "/" + DataOperations.RemoveWhitespace(menuItem.Id + "-" + menuItem.Name));
                        doc.Save(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages", DataOperations.RemoveWhitespace(menuItem.Id + "-" + menuItem.Name) + ".html"), Encoding.UTF8);
                    } catch { }
                });

                ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));

                if (data != null) { return File(zipData, "application/x-zip-compressed", "Webpages.zip"); }
                else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
            } catch (Exception ex) { return BadRequest(new { message = DataOperations.GetSystemErrMessage(ex) }); }
        }

        /// <summary>
        /// Update Translation Table By All Tables and Field Names For Export Offline Language
        /// Dictionary CZ for System
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerCoreExport/XamlCz")]
        public async Task<IActionResult> ExportXamlCz() {
            try {
                new EasyITCenterContext().EasyITCenterCollectionFromSql<CustomString>("EXEC SpOperationFillTranslationTableList;");

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
        [HttpGet("/ServerCoreExport/XamlEn")]
        public async Task<IActionResult> ExportXamlEn() {
            try {
                new EasyITCenterContext().EasyITCenterCollectionFromSql<CustomString>("EXEC SpOperationFillTranslationTableList;");

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
    }
}