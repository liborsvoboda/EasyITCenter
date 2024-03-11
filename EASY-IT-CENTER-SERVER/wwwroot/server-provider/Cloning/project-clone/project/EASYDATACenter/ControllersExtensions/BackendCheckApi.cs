using EASYDATACenter.DBModel;

namespace EASYDATACenter.ControllersExtensions {

    /// <summary>
    /// Simple Api for Checking Avaiability
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [Route("GLOBALNETBackendCheck")]
    public class GLOBALNETBackendCheckApi : ControllerBase {

        /// <summary>
        /// Gets the backend check API.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/GLOBALNETBackendCheck")]
        public Task<string> GetBackendCheckApi() { return Task.FromResult(ServerCoreDbOperations.DBTranslate("ServerRunning", ServerConfigSettings.ServiceServerLanguage)); }
    }
}