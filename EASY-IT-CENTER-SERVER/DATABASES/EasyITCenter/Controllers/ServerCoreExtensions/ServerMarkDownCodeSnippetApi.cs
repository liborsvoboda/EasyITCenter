namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Database Schema Diagram Controller
    /// </summary>
    /// <seealso cref="Controller"/>
    //[Authorize]
    [Route("ServerCoreTools")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerMarkDownCodeSnippetApi : Controller {


        /// <summary>
        /// Creates a DGML class diagram of most of the entities in the project wher you go to
        /// localhost/dgml See https://github.com/ErikEJ/SqlCeToolbox/wiki/EF-Core-Power-Tools
        /// </summary>
        /// <returns>a DGML class diagram</returns>
        [HttpGet("/ServerCoreTools/GenerateMarkDownCodeSnippet")]
        public async Task<string> GenerateMarkDownCodeSnippet() {
            //if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) { //"application/octet-stream"
            string result = null;// GeneratorMarkDownCode.DirectoryMarkdownProcessorRun();
            return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = result == DBResult.success.ToString() ? DBResult.success.ToString() : DBResult.error.ToString(), RecordCount = 0, ErrorMessage = result });
            //else { return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate("massEmailNotEnabled") }); }
            //} catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

    }
}