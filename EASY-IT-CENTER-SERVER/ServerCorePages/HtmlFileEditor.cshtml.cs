using EasyITCenter.ServerCoreStructure;
using Westwind.AspNetCore.Markdown;
using Microsoft.AspNetCore.Mvc.RazorPages;
namespace ServerCorePages {

    /// <summary>
    /// Default Page for Every Web Request Here are defined
    /// Main Pages Sections THIs Page Is Alone For
    /// </summary>
    public class HtmlFileEditorModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;
        public static string? action;
        public static string result;

        /// <summary>
        /// Checking Cookie TOKEN FROM Metro for User/UserRole checking on Server Side This Is Use
        /// For User Checking In Razor/MVC Server Web Pages This is Use For User Role and his Rights
        /// If is Logged Checking Has Loaded User Claims with Full Token Info
        /// </summary>
        public void OnGet() {

            try {//Standalone Load File From Url Request
                string? requestedUrlPath = "";
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }
                string? filePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var fileContent = System.IO.File.ReadAllText(filePath);
                this.Content(fileContent);
                MarkDownModel.result = Markdown.ParseHtmlString(fileContent)?.Value.ToString();
            } catch {
                string? requestedUrlPath = "";
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }
                string? filePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var fileContent = System.IO.File.ReadAllText(filePath);
                this.Content(fileContent);
                MarkDownModel.result = fileContent.ToString();
            }

            //Standalone Check Token
            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }

    }
}