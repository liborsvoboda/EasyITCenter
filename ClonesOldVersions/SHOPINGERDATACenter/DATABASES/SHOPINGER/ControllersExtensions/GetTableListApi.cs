using SHOPINGER.DBModel;

namespace EASYDATACenter.ControllersExtensions {

    [Authorize]
    [ApiController]
    [Route("SHOPINGERGetTableList")]
    public class SHOPINGERCustomStringListApi : ControllerBase {

        [HttpGet("/SHOPINGERGetTableList")]
        public async Task<string> GetTableList() {
            List<CustomString> data = new();
            data = new SHOPINGERContext().SHOPINGERCollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}