using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO.Compression;

namespace EasyITCenter.ServerCoreDBSettings {


    /// <summary>
    /// Server Root Controller Used by Server Webpages
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [AllowAnonymous]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerWebPagesRouteApi : ControllerBase {

        /// <summary>
        /// StartUp Web Redirection
        /// </summary>
        /// <returns></returns>
        [HttpGet("/")]
        public IActionResult Index() {
            return ServerConfigSettings.RedirectOnPageNotFound ?
                new RedirectResult(ServerConfigSettings.RedirectPath) : new RedirectResult("/Portal");
        }

    }
}