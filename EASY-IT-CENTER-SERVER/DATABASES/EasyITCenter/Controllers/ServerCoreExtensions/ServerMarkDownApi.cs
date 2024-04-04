using EasyITCenter.ToolsControllers;
using Microsoft.Extensions.Hosting.Internal;
using Westwind.AspNetCore.Markdown;

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Database Schema Diagram Controller
    /// </summary>
    /// <seealso cref="Controller"/>
    //[Authorize]
    [Route("ServerCoreTools")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerMarkDownApi : Controller {

        private readonly IWebHostEnvironment hostingEnvironment;
        public ServerMarkDownApi(IWebHostEnvironment hostingEnvironment) {
            this.hostingEnvironment = hostingEnvironment;
        }

        [Route("ServerCoreTools/MarkdownFromUrl/{url}")]
        public async Task<IActionResult> MarkdownFromUrl(string markdownUrl) {
            var basePath = ServerRuntimeData.WebRoot_path;
            string relativePath = HttpContext.Request.Path;
            if (relativePath == null) return NotFound();

            //relativePath = GetSystemFileSystemPath(relativePath).Substring(1);
            string? pageFile = Path.Combine(basePath, relativePath);

            //TODO CanCheck Database MarkDown
            if (!System.IO.File.Exists(pageFile)) return NotFound();

            var markdown = await System.IO.File.ReadAllTextAsync(pageFile);
            if (string.IsNullOrEmpty(markdown)) return NotFound();

            ViewBag.MarkdownText = Markdown.ParseHtmlStringFromFile(markdown,true,false,false);
            return View("Markdown");
        }


       
    }
}