using LicenseSHOPER.DBModel;

namespace EASYDATACenter.ControllersExtensions {

    [Authorize]
    [ApiController]
    [Route("LicenseSHOPERGetTableList")]
    public class LicenseSHOPERCustomStringListApi : ControllerBase {

        [HttpGet("/LicenseSHOPERGetTableList")]
        public async Task<string> GetTableList() {
            List<CustomString> data = new();
            data = new LicenseSHOPERContext().LicenseSHOPERCollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}