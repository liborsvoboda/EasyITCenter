﻿using EasyITCenter.Services;

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Restart Api for Remote Control
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [Route("ServerGenericAuthApi/[controller]")]
    [ApiController]
    public abstract class StdAuthGenericProviderApi<DbEntity, Tentity, TKey> : ControllerBase where DbEntity : EasyITCenterContext where Tentity : class where TKey : notnull {
        private readonly IGenericApiServiceAsync<DbEntity, Tentity> db;

        public StdAuthGenericProviderApi(IGenericApiServiceAsync<DbEntity, Tentity> repo) => db = repo;

        [HttpGet]
        public async Task<string> GetGenericList() {
            try {
                var data = new List<Tentity>();
                data = await db.GetListAsync();
                return JsonSerializer.Serialize(data);
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpGet("Filter/{filter}")]
        public async Task<string> GetGenericListByFilter(string filter) {
            try {
                var data = new List<Tentity>(); string tableName = typeof(Tentity).Name;
                data = await db.GetFromSqlAsync($"SELECT * FROM {tableName} WHERE 1=1 AND " + filter.Replace("+", " "));
                return JsonSerializer.Serialize(data);
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpGet("{id}")]
        public async Task<string> GetGenericListByKey(int id) {
            try {
                Tentity? data = null;
                data = await db.GetByIdAsync(id);
                return JsonSerializer.Serialize(data);
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPut]
        [Consumes("application/json")]
        public async Task<string> InsertGenericList([FromBody] Tentity record) {
            try {
                var data = await db.AddAsync(record);
                int result = await data.Context.SaveChangesAsync();

                int recId = 0;
                try { recId = DataOperations.ConvertGenericClassToStandard(record).Id; } catch { }
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = recId, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost]
        [Consumes("application/json")]
        public async Task<string> UpdateGenericList([FromBody] Tentity record) {
            try {
                var data = await db.UpdateAsync(record);
                int result = await data.Context.SaveChangesAsync();

                int recId = 0;
                try { recId = DataOperations.ConvertGenericClassToStandard(record).Id; } catch { }
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = recId, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteGenericList(int id) {
            try {
                var data = await db.DeleteAsync(id);
                int result = await data.Context.SaveChangesAsync();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}