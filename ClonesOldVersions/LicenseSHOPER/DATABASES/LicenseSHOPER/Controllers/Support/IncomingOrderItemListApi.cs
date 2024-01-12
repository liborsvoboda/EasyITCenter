using LicenseSHOPER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LicenseSHOPERIncomingOrderItemList")]
    public class LicenseSHOPERIncomingOrderItemListApi : ControllerBase {

        [HttpGet("/LicenseSHOPERIncomingOrderItemList/{documentNumber}")]
        public async Task<string> GetIncomingOrderItemListKey(string documentNumber) {
            List<IncomingOrderItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new LicenseSHOPERContext().IncomingOrderItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/LicenseSHOPERIncomingOrderItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocIncomingOrderItemList([FromBody] List<IncomingOrderItemList> record) {
            try {
                int result;
                LicenseSHOPERContext data = new LicenseSHOPERContext(); data.IncomingOrderItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/LicenseSHOPERIncomingOrderItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<IncomingOrderItemList> data;
                data = new LicenseSHOPERContext().IncomingOrderItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                LicenseSHOPERContext data1 = new LicenseSHOPERContext(); data1.IncomingOrderItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}