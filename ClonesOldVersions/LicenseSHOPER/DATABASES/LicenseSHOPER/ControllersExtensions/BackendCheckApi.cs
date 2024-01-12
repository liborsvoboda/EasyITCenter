using LicenseSHOPER.DBModel;

namespace EASYDATACenter.ControllersExtensions {

    /// <summary>
    /// Simple Api for Checking Avaiability
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [Route("LicenseSHOPERBackendCheck")]
    public class LicenseSHOPERBackendCheckApi : ControllerBase {

        /// <summary>
        /// Gets the backend check API.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/LicenseSHOPERBackendCheck")]
        public Task<string> GetBackendCheckApi() { return Task.FromResult(ServerCoreDbOperations.DBTranslate("ServerRunning", ServerConfigSettings.SpecialServerLanguage)); }
    }
}