using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("TemplateAnySProcedureData")]
    public class TemplateAnySProcedureDataListApi : ControllerBase {
    
        [HttpGet("/TemplateAnySProcedureData")]
        public async Task<string> GetTemplateAnySProcedureDataList() {
            List<CustomString> data = new();
            data = new EASYDATACenterContext().CollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}