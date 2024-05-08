﻿using Microsoft.AspNetCore.Mvc.RazorPages;
namespace ServerCorePages {

    /// <summary>
    /// Default Page for Every Web Request Here are defined
    /// Main Pages Sections THIs Page Is Alone For
    /// </summary>
    public class DeveloperModel : PageModel {
        public static ServerWebPagesToken ServerWebPagesToken;
        public static string? action;


        public void OnGet() {
            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                ServerWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (ServerWebPagesToken.IsValid) { User.AddIdentities(ServerWebPagesToken.UserClaims.Identities); }
            } else { ServerWebPagesToken = new ServerWebPagesToken(); }
        }


        public void SetAction(string? _action) {
            action = _action;
        }

        ///<summary>
        ///JS and Css Web Poertal Controls Methods For Managing 
        /// </summary>
        #region JS and Css Web Portal Controls



        /// <summary>
        /// Generation Css Script Section In Server Pages
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedCssFilesForLayout() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            //Load Css Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("css", null).OrderBy(a => a.Sequence).ToList();
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
                data = DbOperations.GetWebPortalJsCssScripts("js", null).OrderBy(a => a.Sequence).ToList();
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
                data = DbOperations.GetWebGlobalPageBlockLists("HeaderPreCss").OrderBy(a => a.Sequence).ToList();
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
                data = DbOperations.GetWebGlobalPageBlockLists("HeaderPreScripts").OrderBy(a => a.Sequence).ToList();
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
                data = DbOperations.GetWebGlobalPageBlockLists("HeaderPostScripts").OrderBy(a => a.Sequence).ToList();
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
                data = DbOperations.GetWebGlobalPageBlockLists("Body").OrderBy(a => a.Sequence).ToList();
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
                data = DbOperations.GetWebGlobalPageBlockLists("Footer").OrderBy(a => a.Sequence).ToList();
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




        #endregion JS and Css Web Portal Controls
    }
}