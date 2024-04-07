using EasyITCenter.ServerCoreStructure;
using Westwind.AspNetCore.Markdown;
using Microsoft.AspNetCore.Mvc.RazorPages;
namespace ServerCorePages {

    /// <summary>
    /// Default Page for Every Web Request Here are defined
    /// Main Pages Sections THIs Page Is Alone For
    /// </summary>
    public class IndexModel : PageModel {
        public static ServerWebPagesToken ServerWebPagesToken;
        public static string? action;
        public static string result;


        //HERE IS FIRST TOUCH OF REQUEST CHECK REQUEST SOLVE BETWEN HTML / MARKDOWN / PORTAL 


        /// <summary>
        /// Checking Cookie TOKEN FROM Metro for User/UserRole checking on Server Side This Is Use
        /// For User Checking In Razor/MVC Server Web Pages This is Use For User Role and his Rights
        /// If is Logged Checking Has Loaded User Claims with Full Token Info
        /// </summary>
        public void OnGet() {

            try {
                string? requestedUrlPath = "";
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "CorectedUrlPath").Value); } catch { }
                string? markdownFilePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                if (!System.IO.File.Exists(markdownFilePath)) { markdownFilePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(ServerConfigSettings.RedirectPath); }
                var markdown = System.IO.File.ReadAllText(markdownFilePath);
                this.Content(markdown);
            } catch {
                string? requestedUrlPath = "";
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "CorectedUrlPath").Value); } catch { }
                string? markdownFilePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var markdown = System.IO.File.ReadAllText(markdownFilePath);
                MarkdownModel.result = markdown.ToString();
            }




            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                ServerWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (ServerWebPagesToken.IsValid) { User.AddIdentities(ServerWebPagesToken.UserClaims.Identities); }
            }
            else { ServerWebPagesToken = new ServerWebPagesToken(); }
        }

    }
}