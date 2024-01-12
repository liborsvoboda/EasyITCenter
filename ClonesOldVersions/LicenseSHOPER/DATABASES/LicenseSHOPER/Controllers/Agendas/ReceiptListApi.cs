﻿using LicenseSHOPER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LicenseSHOPERReceiptList")]
    public class LicenseSHOPERReceiptListApi : ControllerBase {

        [HttpGet("/LicenseSHOPERReceiptList")]
        public async Task<string> GetReceiptList() {
            List<ReceiptList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().ReceiptLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseSHOPERReceiptList/Filter/{filter}")]
        public async Task<string> GetReceiptListByFilter(string filter) {
            List<ReceiptList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().ReceiptLists.FromSqlRaw("SELECT * FROM ReceiptList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseSHOPERReceiptList/{id}")]
        public async Task<string> GetReceiptListKey(int id) {
            ReceiptList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new LicenseSHOPERContext().ReceiptLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/LicenseSHOPERReceiptList")]
        [Consumes("application/json")]
        public async Task<string> InsertReceiptList([FromBody] ReceiptList record) {
            try {
                //Increase and update Last Document Number
                DocumentAdviceList documentAdvice = new DocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new LicenseSHOPERContext().DocumentAdviceLists.Where(a => a.DocumentType == "receipt" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new LicenseSHOPERContext().DocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                //Load Receipt Status
                PaymentStatusList receiptStatus = new LicenseSHOPERContext().PaymentStatusLists.Where(a => a.Receipt).FirstOrDefault();

                //Update Invoice Identificator And Receipt Status
                OutgoingInvoiceList parentInvoice = new OutgoingInvoiceList();
                parentInvoice = new LicenseSHOPERContext().OutgoingInvoiceLists.Where(a => a.DocumentNumber == record.InvoiceNumber).First();
                if (receiptStatus != null) { parentInvoice.PaymentStatusId = receiptStatus.Id; } //Automatic Receipt status

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new LicenseSHOPERContext().ReceiptLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Insert ReceiptId to Invoice
                parentInvoice.ReceiptId = record.Id;
                var invoiceData = new LicenseSHOPERContext().OutgoingInvoiceLists.Update(parentInvoice);
                await invoiceData.Context.SaveChangesAsync();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/LicenseSHOPERReceiptList")]
        [Consumes("application/json")]
        public async Task<string> UpdateReceiptList([FromBody] ReceiptList record) {
            try {
                var data = new LicenseSHOPERContext().ReceiptLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/LicenseSHOPERReceiptList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteReceiptList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new LicenseSHOPERContext().ReceiptLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                ReceiptList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new LicenseSHOPERContext().ReceiptLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}