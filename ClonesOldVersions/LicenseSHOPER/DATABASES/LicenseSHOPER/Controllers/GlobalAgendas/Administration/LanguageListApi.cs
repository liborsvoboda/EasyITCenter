using LicenseSHOPER.DBModel;

namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("LicenseSHOPERLanguageList")]
    public class LicenseSHOPERLanguageListApi : ControllerBase {

        [HttpGet("/LicenseSHOPERLanguageList")]
        public async Task<string> GetLanguageList() {
            List<LanguageList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().LanguageLists.ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/LicenseSHOPERLanguageList/Filter/{filter}")]
        public async Task<string> GetLanguageListByFilter(string filter) {
            List<LanguageList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().LanguageLists.FromSqlRaw("SELECT * FROM LanguageList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/LicenseSHOPERLanguageList/{id}")]
        public async Task<string> GetLanguageListKey(int id) {
            LanguageList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new LicenseSHOPERContext().LanguageLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpPut("/LicenseSHOPERLanguageList")]
        [Consumes("application/json")]
        public async Task<string> InsertLanguageList([FromBody] LanguageList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new LicenseSHOPERContext().LanguageLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Server LocalFile
                ServerCoreDbOperations.LoadStaticDbDials(ServerLocalDbDials.LanguageList);

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/LicenseSHOPERLanguageList")]
        [Consumes("application/json")]
        public async Task<string> UpdateLanguageList([FromBody] LanguageList record) {
            try {
                if (Request.HttpContext.User.IsInRole("admin")) {
                    var data = new LicenseSHOPERContext().LanguageLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();

                    //Server LocalFile
                    ServerCoreDbOperations.LoadStaticDbDials(ServerLocalDbDials.LanguageList);

                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/LicenseSHOPERLanguageList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteLanguageList(string id) {
            try {
                if (Request.HttpContext.User.IsInRole("admin")) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    LanguageList record = new() { Id = int.Parse(id) };

                    var data = new LicenseSHOPERContext().LanguageLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();

                    //Server LocalFile
                    ServerCoreDbOperations.LoadStaticDbDials(ServerLocalDbDials.LanguageList);

                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}