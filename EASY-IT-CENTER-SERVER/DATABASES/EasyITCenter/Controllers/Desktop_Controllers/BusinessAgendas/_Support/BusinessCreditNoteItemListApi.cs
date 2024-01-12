﻿namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessCreditNoteSupportList")]
    public class EasyITCenterBusinessCreditNoteSupportListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessCreditNoteSupportList/{documentNumber}")]
        public async Task<string> GetBusinessCreditNoteSupportListKey(string documentNumber) {
            List<BusinessCreditNoteSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BusinessCreditNoteSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessCreditNoteSupportList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBusinessCreditNoteSupportList([FromBody] List<BusinessCreditNoteSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.BusinessCreditNoteSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessCreditNoteSupportList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<BusinessCreditNoteSupportList> data;
                data = new EasyITCenterContext().BusinessCreditNoteSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.BusinessCreditNoteSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}