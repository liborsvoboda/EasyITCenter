using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("GLOBALNETTemplateAnySProcedureData")]
    public class GLOBALNETTemplateAnySProcedureDataListApi : ControllerBase {
    
        [HttpGet("/GLOBALNETTemplateAnySProcedureData")]
        public async Task<string> GetTemplateAnySProcedureDataList() {
            List<CustomString> data = new();
            data = new EASYDATACenterContext().CollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}