using EasyITCenter.ServerCoreStructure;
using Westwind.AspNetCore.Markdown;
using Microsoft.AspNetCore.Mvc.RazorPages;
namespace ServerCorePages {

    /// <summary>
    /// Default Page for Every Web Request Here are defined
    /// Main Pages Sections THIs Page Is Alone For
    /// </summary>
    public class IndexModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;
        public static string? action;
        public static string result;

        public void OnGet() {

            string? requestedUrlPath = ""; string result = "";
            try {//Standalone Load File From Url Request

                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }
                string? filePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var fileContent = System.IO.File.ReadAllText(filePath);
                result = Markdown.ParseHtmlString(fileContent)?.Value.ToString();
            } catch {
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }
                string? filePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var fileContent = System.IO.File.ReadAllText(filePath);
                result = fileContent.ToString();
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