using Microsoft.AspNetCore.Mvc.RazorPages;
using EasyITCenter.ServerCoreStructure;
using Westwind.AspNetCore.Markdown;
namespace ServerCorePages {

    public class MarkdownModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;
        public static string result;

        public void OnGet() {

            try {
                string? requestedUrlPath = "";
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "RequestedUrlPath").Value); } catch { }
                string? markdownFilePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var markdown = System.IO.File.ReadAllText(markdownFilePath);
                MarkdownModel.result = Markdown.ParseHtmlString(markdown)?.Value.ToString();
            } catch {
                string? requestedUrlPath = "";
                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "RequestedUrlPath").Value); } catch { }
                string? markdownFilePath = System.IO.Path.Combine(ServerRuntimeData.WebRoot_path) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var markdown = System.IO.File.ReadAllText(markdownFilePath);
                MarkdownModel.result = markdown.ToString();
            }


            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                MarkdownModel.serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            } else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}