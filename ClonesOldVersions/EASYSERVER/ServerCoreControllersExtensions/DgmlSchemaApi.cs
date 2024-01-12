

namespace EASYDATACenter.ServerCoreDBSettings {

    /// <summary>
    /// Database Schema Diagram Controller
    /// </summary>
    /// <seealso cref="Controller"/>
    [Route("DbDgmlSchema")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class DgmlSchemaApi : Controller {


        private EASYDATACenterContext Context { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="DgmlSchemaApi"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public DgmlSchemaApi(EASYDATACenterContext context) {
            Context = context;
        }

        /// <summary>
        /// Creates a DGML class diagram of most of the entities in the project wher you go to
        /// localhost/dgml See https://github.com/ErikEJ/SqlCeToolbox/wiki/EF-Core-Power-Tools
        /// </summary>
        /// <returns>a DGML class diagram</returns>
        [HttpGet]
        public IActionResult Get() {
            if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) {
                System.IO.File.WriteAllText(Directory.GetCurrentDirectory() + "\\Entities.dgml",
                Context.AsDgml(), Encoding.UTF8);

                var file = System.IO.File.OpenRead(Directory.GetCurrentDirectory() + "\\Entities.dgml");
                var response = File(file, "application/octet-stream", "Entities.dgml");
                return response;
            } else { return null; }
        }
    }
}