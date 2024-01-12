﻿using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("GLOBALNETIgnoredExceptionList")]
    public class GLOBALNETIgnoredExceptionListApi : ControllerBase {

        [HttpGet("/GLOBALNETIgnoredExceptionList")]
        public async Task<string> GetIgnoredExceptionList() {
            List<IgnoredExceptionList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().IgnoredExceptionLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETIgnoredExceptionList/Filter/{filter}")]
        public async Task<string> GetIgnoredExceptionListByFilter(string filter) {
            List<IgnoredExceptionList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().IgnoredExceptionLists.FromSqlRaw("SELECT * FROM IgnoredExceptionList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETIgnoredExceptionList/{id}")]
        public async Task<string> GetIgnoredExceptionListKey(int id) {
            IgnoredExceptionList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().IgnoredExceptionLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [Authorize]
        [HttpPut("/GLOBALNETIgnoredExceptionList")]
        [Consumes("application/json")]
        public async Task<string> InsertIgnoredExceptionList([FromBody] IgnoredExceptionList record) {
            try {
                if (CommunicationController.IsAdmin()) {
                    record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                    var data = new EASYDATACenterContext().IgnoredExceptionLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/GLOBALNETIgnoredExceptionList")]
        [Consumes("application/json")]
        public async Task<string> UpdateIgnoredExceptionList([FromBody] IgnoredExceptionList record) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EASYDATACenterContext().IgnoredExceptionLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/GLOBALNETIgnoredExceptionList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteIgnoredExceptionList(string id) {
            try {
                if (CommunicationController.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    IgnoredExceptionList record = new() { Id = int.Parse(id) };

                    var data = new EASYDATACenterContext().IgnoredExceptionLists.Remove(record);
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