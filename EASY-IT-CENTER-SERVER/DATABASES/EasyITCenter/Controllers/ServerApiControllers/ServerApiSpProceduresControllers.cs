using NPOI.SS.Formula.Functions;
using System.Collections.Generic;

namespace EasyITCenter.Controllers {

    /// <summary>
    /// StoredSpocedures Central Library With Return Dynamic DataList
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase"/>
    [Authorize]
    [ApiController]
    [Route("ServerApi")]
    public class ServerApiSpProceduresControllers : ControllerBase {

        //TODO GENERIC API GetSystemOperationsList(IEnumerable<T> dataset)

        /// <summary>
        /// Return String Message
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpPost("/ServerApi/DatabaseServices/SpProcedure/Generic")]
        public async Task<string> GetSystemOperationsList(List<Dictionary<string,string>> dataset) {
            try {
                string procedureName = "";
                List<string> strList = new List<string>();
                foreach (Dictionary<string, string> param in dataset) {
                    if (param.Where(a => a.Key.ToLower() == "SpProcedure").Any()) { }
                    string result = string.Join(", ", param.Select(m => m.Key + ":" + m.Value).ToArray());
                    strList.Add(result);
                }

                List<SystemOperationMessage> data = new List<SystemOperationMessage>();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<SystemOperationMessage>($"EXEC {procedureName};");
            }
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }


        /// <summary>
        /// Return String Message
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpProcedure/Message/{procedureName}")]
        public async Task<string> GetSystemOperationsList(string procedureName) {
            List<SystemOperationMessage> data = new List<SystemOperationMessage>();
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<SystemOperationMessage>($"EXEC {procedureName};");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        /// <summary>
        /// Return File
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpProcedure/Json/{procedureName}")]
        public async Task<string> GetSystemOperationsListJson(string procedureName) {
            List<DBJsonFile> data = null;
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<DBJsonFile>($"EXEC {procedureName};");
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }


        /// <summary>
        /// Gets Table List for Reporting
        /// TODO takova bude genericka procedura
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetTableSchema/{tableName}")]
        public async Task<string> SpGetTableSchema(string tableName) {
            try {
                List<GenericDataList> data = new List<GenericDataList>();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>($"EXEC SpGetTableSchema @tableName = N'{tableName}';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Table List for Reporting
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetTableList")]
        public async Task<string> SpGetTableList() {
            try {
                List<GenericDataList> data = new();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>("EXEC SpGetTableList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Form Agendas Pages List For System Menu Definition.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetSystemPageList")]
        public async Task<string> SpGetSystemPageList() {
            try {
                List<GenericDataList> data = new();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>("EXEC SpGetSystemPageList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Api For Logged User with Menu Datalist
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetUserMenuList")]
        public async Task<string> SpGetUserMenuList() {
            try {
                List<SpUserMenuList> data = new List<SpUserMenuList>();

                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<SpUserMenuList>("EXEC SpGetUserMenuList @userRole = N'" + User.FindFirst(ClaimTypes.Role.ToString())?.Value + "';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}