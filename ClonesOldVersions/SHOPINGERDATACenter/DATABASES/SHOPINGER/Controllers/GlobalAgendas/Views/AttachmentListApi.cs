﻿using SHOPINGER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("SHOPINGERAttachmentList")]
    public class SHOPINGERAttachmentListApi : ControllerBase {

        [HttpGet("/SHOPINGERAttachmentList")]
        public async Task<string> GetAttachmentList() {
            List<ViewAttachmentList> data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new SHOPINGERContext().ViewAttachmentLists.ToList(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/SHOPINGERAttachmentList/Filter/{filter}")]
        public async Task<string> GetAttachmentListByFilter(string filter) {
            List<ViewAttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new SHOPINGERContext().ViewAttachmentLists.FromSqlRaw("SELECT * FROM ViewAttachmentList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/SHOPINGERAttachmentList/{id}")]
        public async Task<string> GetAttachmentListByKey(int id) {
            AttachmentList data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new SHOPINGERContext().AttachmentLists.Where(a => a.Id == id).First(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/SHOPINGERAttachmentList/{type}/{parentId}")]
        public async Task<string> GetAttachmentListKey(string type, int parentId) {
            List<AttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new SHOPINGERContext().AttachmentLists.Where(a => a.ParentType == type && a.ParentId == parentId).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/SHOPINGERAttachmentList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocAttachmentList([FromBody] List<AttachmentList> record) {
            try {
                int result;
                SHOPINGERContext data = new SHOPINGERContext(); data.AttachmentLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpDelete("/SHOPINGERAttachmentList/{type}/{parentId}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string type, int parentId) {
            try {
                List<AttachmentList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new SHOPINGERContext().AttachmentLists.Where(a => a.ParentType == type && a.ParentId == parentId).ToList(); }

                SHOPINGERContext data1 = new SHOPINGERContext(); data1.AttachmentLists.RemoveRange(data);
                int result = data1.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}