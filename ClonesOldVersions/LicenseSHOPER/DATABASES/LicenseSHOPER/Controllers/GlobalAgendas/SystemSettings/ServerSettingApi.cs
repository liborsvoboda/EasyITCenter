using LicenseSHOPER.DBModel;

namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("LicenseSHOPERServerSetting")]
    public class LicenseSHOPERServerSettingApi : ControllerBase {

        [HttpGet("/LicenseSHOPERServerSetting")]
        public async Task<string> GetServerSetting() {
            List<ServerSetting> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().ServerSettings.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseSHOPERServerSetting/{key}")]
        public async Task<string> GetServerSettingKey(string key) {
            ServerSetting data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new LicenseSHOPERContext().ServerSettings.Where(a => a.Key == key).First();
            }
            return JsonSerializer.Serialize(data);
        }

        [Authorize]
        [HttpPost("/LicenseSHOPERServerSetting")]
        [Consumes("application/json")]
        public async Task<string> SetServerSettingUpdate([FromBody] List<ServerSetting> record) {
            try {
                if (Request.HttpContext.User.IsInRole("admin")) {
                    int count = 0;
                    foreach (ServerSetting item in record) {
                        var data = new LicenseSHOPERContext().ServerSettings.Update(item);
                        int result = await data.Context.SaveChangesAsync();
                        count += result;
                    }
                    if (count > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = count, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = count, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}