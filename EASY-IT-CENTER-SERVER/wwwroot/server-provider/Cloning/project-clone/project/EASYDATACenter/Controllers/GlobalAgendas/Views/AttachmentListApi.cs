using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETBasicAttachmentList")]
    public class GLOBALNETBasicAttachmentListApi : ControllerBase {

        [HttpGet("/GLOBALNETBasicAttachmentList")]
        public async Task<string> GetBasicAttachmentList() {
            List<ViewBasicAttachmentList> data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().ViewBasicAttachmentLists.ToList(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETBasicAttachmentList/Filter/{filter}")]
        public async Task<string> GetBasicAttachmentListByFilter(string filter) {
            List<ViewBasicAttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ViewBasicAttachmentLists.FromSqlRaw("SELECT * FROM ViewBasicAttachmentList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETBasicAttachmentList/{id}")]
        public async Task<string> GetBasicAttachmentListByKey(int id) {
            BasicAttachmentList data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().BasicAttachmentLists.Where(a => a.Id == id).First(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETBasicAttachmentList/{type}/{parentId}")]
        public async Task<string> GetBasicAttachmentListKey(string type, int parentId) {
            List<BasicAttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().BasicAttachmentLists.Where(a => a.ParentType == type && a.ParentId == parentId).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/GLOBALNETBasicAttachmentList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBasicAttachmentList([FromBody] List<BasicAttachmentList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.BasicAttachmentLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpDelete("/GLOBALNETBasicAttachmentList/{type}/{parentId}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string type, int parentId) {
            try {
                List<BasicAttachmentList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().BasicAttachmentLists.Where(a => a.ParentType == type && a.ParentId == parentId).ToList(); }

                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.BasicAttachmentLists.RemoveRange(data);
                int result = data1.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}