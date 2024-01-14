namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Database Schema Diagram Controller
    /// </summary>
    /// <seealso cref="Controller"/>
    [Route("ServerDbDgmlSchema")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerDbDgmlSchemaApi : Controller {
        private EasyITCenterContext Context { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="DgmlSchemaApi"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public ServerDbDgmlSchemaApi(EasyITCenterContext context) { Context = context; }

        /// <summary>
        /// Creates a DGML class diagram of most of the entities in the project wher you go to
        /// localhost/dgml See https://github.com/ErikEJ/SqlCeToolbox/wiki/EF-Core-Power-Tools
        /// </summary>
        /// <returns>a DGML class diagram</returns>
        [HttpGet]
        public IActionResult Get() {
            if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) {
                var response = File(Encoding.UTF8.GetBytes(Context.AsDgml()), "application/octet-stream", "Entities.dgml");
                return response;
            }
            else { return null; }
        }
    }
}