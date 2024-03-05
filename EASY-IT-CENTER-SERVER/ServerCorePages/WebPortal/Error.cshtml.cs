using Microsoft.AspNetCore.Mvc.RazorPages;
using System;

namespace ServerCorePages {

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    [IgnoreAntiforgeryToken]
    public class ErrorModel : PageModel {
        public string? RequestId { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        private readonly ILogger<ErrorModel> _logger;

        public void OnGet() {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
        }


        /// <summary>
        /// Generation Css Script Section In Server Pages
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedCssFilesForLayout() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            //Load Css Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebCoreFileLists.Where(a => (a.SpecificationType.ToLower() == "css" || a.SpecificationType.ToLower() == "mincss") && a.Active).OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();
                string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();

                if (managedFile.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && managedFile.ProviderContent?.Length > 0) { html += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin" && managedFile.UserFileContent?.Length > 0) && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }

                    if (ServerConfigSettings.ServerProviderModeEnabled && managedFile.ProviderContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Generation JS Script Section In Server Pages
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedJsFilesForLayout() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebCoreFileLists.Where(a => (a.SpecificationType.ToLower() == "js" || a.SpecificationType.ToLower() == "minjs") && a.Active).OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && managedFile.ProviderContent?.Length > 0) { html += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    if (ServerConfigSettings.ServerProviderModeEnabled && managedFile.ProviderContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Gets HeaderPreCss the managed header pre CSS for layout.
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedHeaderPreCssForLayout() {
            List<WebGlobalPageBlockList> data; string html = ""; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Active && a.PagePartType == "HeaderPreCss").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(pagePart => {
                insertedPart = "";

                if (pagePart.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }

                    if (authRole == "admin" && pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }
                }
                else {
                    if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }

                    if (authRole == "webuser" && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (authRole == "admin") {
                        if (pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                        if (pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    }
                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }
                }
                html += insertedPart;
            });
            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Gets HeaderPreCss the managed header pre CSS for layout.
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedHeaderPreScriptsForLayout() {
            List<WebGlobalPageBlockList> data; string html = ""; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Active && a.PagePartType == "HeaderPreScripts").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(pagePart => {
                insertedPart = "";

                if (pagePart.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }

                    if (authRole == "admin" && pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }
                }
                else {
                    if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }

                    if (authRole == "webuser" && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (authRole == "admin") {
                        if (pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                        if (pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    }

                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }
                }
                html += insertedPart;
            });
            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Gets HeaderPostScripts the managed header pre CSS for layout.
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedHeaderPostScriptsForLayout() {
            List<WebGlobalPageBlockList> data; string html = ""; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Active && a.PagePartType == "HeaderPostScripts").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(pagePart => {
                insertedPart = "";

                if (pagePart.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }

                    if (authRole == "admin" && pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }
                }
                else {
                    if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }

                    if (authRole == "webuser" && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (authRole == "admin") {
                        if (pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                        if (pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    }

                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }
                }
                html += insertedPart;
            });
            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Get Allowed Global Body HTML Code Its HTML Content Computed by Guest/webuser/admin
        /// Rights From DB Table WebGlobalBodyBlockList
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedBodyPartForLayout() {
            List<WebGlobalPageBlockList> data; string html = ""; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Active && a.PagePartType == "Body").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(pagePart => {
                insertedPart = "";

                if (pagePart.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }

                    if (authRole == "admin" && pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }
                }
                else {
                    if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }

                    if (authRole == "webuser" && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (authRole == "admin") {
                        if (pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                        if (pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    }

                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }
                }
                html += insertedPart;
            });
            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Get Allowed Global Footer HTML Code Its HTML Content Computed by Guest/webuser/admin
        /// Rights From DB Table WebGlobalBodyBlockList
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedFooterPartForLayout() {
            List<WebGlobalPageBlockList> data; string html = ""; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Active && a.PagePartType == "Footer").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(pagePart => {
                insertedPart = "";

                if (pagePart.RewriteLowerLevel) {
                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }
                    if (authRole == "admin" && pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }
                }
                else {
                    if (pagePart.GuestHtmlContent?.Length > 0) { insertedPart += pagePart.GuestHtmlContent + Environment.NewLine; }

                    if (authRole == "webuser" && pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                    else if (authRole == "admin") {
                        if (pagePart.UserHtmlContent?.Length > 0) { insertedPart += pagePart.UserHtmlContent + Environment.NewLine; }
                        if (pagePart.AdminHtmlContent?.Length > 0) { insertedPart += pagePart.AdminHtmlContent + Environment.NewLine; }
                    }

                    if (ServerConfigSettings.ServerProviderModeEnabled && pagePart.ProviderHtmlContent?.Length > 0) { insertedPart += pagePart.ProviderHtmlContent + Environment.NewLine; }
                }
                html += insertedPart;
            });
            result.ContentType = html;
            return result;
        }
    }
}