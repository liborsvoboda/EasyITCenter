using EASYDATACenter.DBModel;
using IdentityModel.OidcClient;

namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("GLOBALNETMottoList")]
    public class GLOBALNETMottoListApi : ControllerBase {

       
        [HttpGet("/GLOBALNETMottoList")]
        public async Task<string> GetMottoList() {
            List<MottoList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().MottoLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        
        [HttpGet("/GLOBALNETMottoList/Filter/{filter}")]
        public async Task<string> GetMottoListByFilter(string filter) {
            List<MottoList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().MottoLists.FromSqlRaw("SELECT * FROM MottoList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [HttpGet("/GLOBALNETMottoList/{id}")]
        public async Task<string> GetMottoListKey(int id) {
            MottoList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().MottoLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [Authorize]
        [HttpPut("/GLOBALNETMottoList")]
        [Consumes("application/json")]
        public async Task<string> InsertMottoList([FromBody] MottoList record) {
            try {
                if (CommunicationController.IsAdmin()) {
                    record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                    var data = new EASYDATACenterContext().MottoLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                } else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/GLOBALNETMottoList")]
        [Consumes("application/json")]
        public async Task<string> UpdateMottoList([FromBody] MottoList record) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EASYDATACenterContext().MottoLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                } else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/GLOBALNETMottoList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteMottoList(string id) {
            try {
                if (CommunicationController.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    MottoList record = new() { Id = int.Parse(id) };

                    var data = new EASYDATACenterContext().MottoLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                } else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}