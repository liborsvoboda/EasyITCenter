using LicenseSHOPER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LicenseSHOPERDocumentTypeList")]
    public class LicenseSHOPERDocumentTypeListApi : ControllerBase {

        [HttpGet("/LicenseSHOPERDocumentTypeList")]
        public async Task<string> GetDocumentTypeList() {
            List<DocumentTypeList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().DocumentTypeLists.ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/LicenseSHOPERDocumentTypeList/Filter/{filter}")]
        public async Task<string> GetDocumentTypeListByFilter(string filter) {
            List<DocumentTypeList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().DocumentTypeLists.FromSqlRaw("SELECT * FROM DocumentTypeList WHERE 1=1 AND " + filter.Replace("+", " "))
                .AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/LicenseSHOPERDocumentTypeList/{id}")]
        public async Task<string> GetDocumentTypeListKey(int id) {
            DocumentTypeList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new LicenseSHOPERContext().DocumentTypeLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpPut("/LicenseSHOPERDocumentTypeList")]
        [Consumes("application/json")]
        public async Task<string> InsertDocumentTypeList([FromBody] DocumentTypeList record) {
            try {
                if (Request.HttpContext.User.IsInRole("admin")) {
                    //Check exist  translations
                    LanguageList languageRec = new LicenseSHOPERContext().LanguageLists.Where(a => a.SystemName == record.SystemName).FirstOrDefault();

                    //Insert translation before save new Document Type
                    if (languageRec == null) {
                        languageRec = new LanguageList() { SystemName = record.SystemName, UserId = record.UserId, DescriptionCz = record.SystemName, DescriptionEn = record.SystemName };
                        await new LicenseSHOPERContext().LanguageLists.Add(languageRec).Context.SaveChangesAsync();
                    }

                    record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                    var data = new LicenseSHOPERContext().DocumentTypeLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/LicenseSHOPERDocumentTypeList")]
        [Consumes("application/json")]
        public async Task<string> UpdateDocumentTypeList([FromBody] DocumentTypeList record) {
            try {
                if (Request.HttpContext.User.IsInRole("admin")) {
                    var data = new LicenseSHOPERContext().DocumentTypeLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/LicenseSHOPERDocumentTypeList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteDocumentTypeList(string id) {
            try {
                if (Request.HttpContext.User.IsInRole("admin")) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    DocumentTypeList record = new() { Id = int.Parse(id) };

                    var data = new LicenseSHOPERContext().DocumentTypeLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
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