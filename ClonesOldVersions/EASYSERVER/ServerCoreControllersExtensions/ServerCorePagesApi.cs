using YamlDotNet.Core.Tokens;

namespace EASYDATACenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    //[Route("[controller]/[action]")]
    public class ServerCorePagesApi : ControllerBase {

        [HttpGet("/logout")]
        [HttpPost("/logout")]
        public IActionResult Logout() {
            return new RedirectResult("/Dashboard");
        }

    }
}