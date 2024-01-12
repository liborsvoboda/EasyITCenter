﻿using SHOPINGER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("SHOPINGEROutgoingOrderItemList")]
    public class SHOPINGEROutgoingOrderItemListApi : ControllerBase {

        [HttpGet("/SHOPINGEROutgoingOrderItemList/{documentNumber}")]
        public async Task<string> GetOutgoingOrderItemListKey(string documentNumber) {
            List<OutgoingOrderItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new SHOPINGERContext().OutgoingOrderItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/SHOPINGEROutgoingOrderItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocOutgoingOrderItemList([FromBody] List<OutgoingOrderItemList> record) {
            try {
                int result;
                SHOPINGERContext data = new SHOPINGERContext(); data.OutgoingOrderItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/SHOPINGEROutgoingOrderItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<OutgoingOrderItemList> data;
                data = new SHOPINGERContext().OutgoingOrderItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                SHOPINGERContext data1 = new SHOPINGERContext(); data1.OutgoingOrderItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}