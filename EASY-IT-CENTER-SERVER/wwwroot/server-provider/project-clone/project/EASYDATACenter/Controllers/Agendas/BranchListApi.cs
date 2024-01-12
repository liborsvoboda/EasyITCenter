﻿using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETBranchList")]
    public class GLOBALNETBranchListApi : ControllerBase {

        [HttpGet("/GLOBALNETBranchList")]
        public async Task<string> GetBranchList() {
            List<BranchList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().BranchLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETBranchList/Filter/{filter}")]
        public async Task<string> GetBranchListByFilter(string filter) {
            List<BranchList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().BranchLists.FromSqlRaw("SELECT * FROM BranchList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETBranchList/Active")]
        public async Task<string> GetActiveBranch() {
            BranchList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().BranchLists.Where(a => a.Active == true).First(); }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETBranchList/{id}")]
        public async Task<string> GetBranchListKey(int id) {
            BranchList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().BranchLists.Where(a => a.Id == id).First(); }
            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/GLOBALNETBranchList")]
        [Consumes("application/json")]
        public async Task<string> InsertBranchList([FromBody] BranchList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().BranchLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/GLOBALNETBranchList")]
        [Consumes("application/json")]
        public async Task<string> UpdateBranchList([FromBody] BranchList record) {
            try {
                var data = new EASYDATACenterContext().BranchLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/GLOBALNETBranchList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteBranchList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                BranchList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().BranchLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}