using SHOPINGER.DBModel;

namespace EASYDATACenter.ControllersExtensions {

    /// <summary>
    /// Simple Api for Checking Avaiability
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [Route("SHOPINGERBackendCheck")]
    public class SHOPINGERBackendCheckApi : ControllerBase {

        /// <summary>
        /// Gets the backend check API.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/SHOPINGERBackendCheck")]
        public Task<string> GetBackendCheckApi() { return Task.FromResult(ServerCoreDbOperations.DBTranslate("ServerRunning", ServerConfigSettings.SpecialServerLanguage)); }
    }
}