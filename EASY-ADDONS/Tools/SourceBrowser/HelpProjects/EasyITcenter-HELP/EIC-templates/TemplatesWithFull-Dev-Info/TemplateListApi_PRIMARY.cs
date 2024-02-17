using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {
    /// <summary>
    /// Universal Template For Make Any Full Backend Server One Template Has All data operation
    /// Controls for simple copy and build ANY Backend Server
    /// </summary>
    [Authorize]
    [ApiController]
    [Route("TemplateList")]
    [SwaggerTag("API Template with INSERT/UPDATE/DELETE/SELECT AND FILTERING APIs")]
    public class TemplateListApi : ControllerBase {
        /// <summary>
        /// Operation: Select All records Standard API for return all records from DB table
        /// </summary>
        /// <returns></returns>
        [HttpGet("/TemplateList")]
        [SwaggerOperation(Summary = "Get All records", Description = "Async standard select record API", OperationId = "Select all records", Tags = new[] { "TemplateListApi" })]
        public async Task<string> GetTemplateList() {
            List<TemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().TemplateLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        /// <summary>
        /// Operation: Select By sent SQL Where Condition Standard API for return records by Where
        /// condition in Query from DB table
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        [HttpGet("/TemplateList/Filter/{filter}")]
        [SwaggerOperation(Summary = "Get records by Advanced filter", Description = "Async standard select records by advanced filter API", OperationId = "Select records by Advanced filter", Tags = new[] { "TemplateListApi" })]
        public async Task<string> GetTemplateListByFilter(string filter) {
            List<TemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().TemplateLists.FromSqlRaw("SELECT * FROM TemplateList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        /// <summary>
        /// Operation: Select Unique record Standard API for return one record by primary Id key
        /// from DB table
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("/TemplateList/{id}")]
        [SwaggerOperation(Summary = "Get Record by Id", Description = "Async standard Get record by Id API", OperationId = "Get One record", Tags = new[] { "TemplateListApi" })]
        public async Task<string> GetTemplateListKey(int id) {
            TemplateList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().TemplateLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        /// <summary>
        /// Operation: Insert new record Standard API for insert new record to DB table
        /// </summary>
        /// <param name="record"></param>
        /// <returns></returns>
        [HttpPut("/TemplateList")]
        [Consumes("application/json")]
        [SwaggerOperation(Summary = "Create a new Record", Description = "Async standard Insert record API", OperationId = "Insert New Record", Tags = new[] { "TemplateListApi" })]
        public async Task<string> InsertTemplateList([FromBody] TemplateList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().TemplateLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Operation: Update record by unique Id key Standard API for update existing record in DB table
        /// </summary>
        /// <param name="record"></param>
        /// <returns></returns>
        [HttpPost("/TemplateList")]
        [Consumes("application/json")]
        [SwaggerOperation(Summary = "Update Record", Description = "Async standard Update record API", OperationId = "Update Record", Tags = new[] { "TemplateListApi" })]
        public async Task<string> UpdateTemplateList([FromBody] TemplateList record) {
            try {
                var data = new EASYDATACenterContext().TemplateLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        /// <summary>
        /// Operation: Delete record by unique Id key Standard API for delete existing record in DB table
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("/TemplateList/{id}")]
        [Consumes("application/json")]
        [SwaggerOperation(Summary = "Delete Record", Description = "Async standard Delete record API", OperationId = "Delete Record", Tags = new[] { "TemplateListApi" })]
        public async Task<string> DeleteTemplateList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                TemplateList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().TemplateLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}