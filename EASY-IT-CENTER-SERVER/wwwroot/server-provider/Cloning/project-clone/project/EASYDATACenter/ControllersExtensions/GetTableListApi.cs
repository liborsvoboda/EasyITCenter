using EASYDATACenter.DBModel;

namespace EASYDATACenter.ControllersExtensions {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETGetTableList")]
    public class GLOBALNETCustomStringListApi : ControllerBase {

        [HttpGet("/GLOBALNETGetTableList")]
        public async Task<string> GetTableList() {
            List<CustomString> data = new();
            data = new EASYDATACenterContext().EASYDATACenterCollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}