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
        /*
        /// <summary>
        /// Server Root "/" Redirection to "server" Folder
        /// </summary>
        /// <returns></returns>
        [HttpGet("/")]
        public IActionResult Index() {
            return new RedirectResult("/Index");
        }
        */
    }
}