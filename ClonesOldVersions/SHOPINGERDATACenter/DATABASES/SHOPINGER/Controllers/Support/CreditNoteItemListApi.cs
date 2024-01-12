using SHOPINGER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("SHOPINGERCreditNoteItemList")]
    public class SHOPINGERCreditNoteItemListApi : ControllerBase {

        [HttpGet("/SHOPINGERCreditNoteItemList/{documentNumber}")]
        public async Task<string> GetCreditNoteItemListKey(string documentNumber) {
            List<CreditNoteItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new SHOPINGERContext().CreditNoteItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/SHOPINGERCreditNoteItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocCreditNoteItemList([FromBody] List<CreditNoteItemList> record) {
            try {
                int result;
                SHOPINGERContext data = new SHOPINGERContext(); data.CreditNoteItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/SHOPINGERCreditNoteItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<CreditNoteItemList> data;
                data = new SHOPINGERContext().CreditNoteItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                SHOPINGERContext data1 = new SHOPINGERContext(); data1.CreditNoteItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}