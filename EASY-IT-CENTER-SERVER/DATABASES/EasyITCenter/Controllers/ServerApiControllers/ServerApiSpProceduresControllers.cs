namespace EasyITCenter.Controllers {

    /// <summary>
    /// StoredSpocedures Central Library With Return Dynamic DataList
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase"/>
    [Authorize]
    [ApiController]
    [Route("EasyITCenterStoredProceduresList")]
    public class ServerApiSpProceduresControllers : ControllerBase {

        /// <summary>
        /// Gets Table List for Reporting
        /// </summary>
        /// <returns></returns>
        [HttpGet("/EasyITCenterStoredProceduresList/SpGetAllTableList")]
        public async Task<string> SpGetAllTableList() {
            try {
                List<GenericObject> data = new();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC SpGetAllTableList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Form Agendas Pages List For System Menu Definition.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/EasyITCenterStoredProceduresList/SpGetSystemPageList")]
        public async Task<string> SpGetSystemPageList() {
            try {
                List<GenericObject> data = new();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC SpGetSystemPageList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Api For Logged User with Menu Datalist
        /// </summary>
        /// <returns></returns>
        [HttpGet("/EasyITCenterStoredProceduresList/SpGetUserMenuList")]
        public async Task<string> SpGetUserMenuList() {
            try {
                List<SpUserMenuList> data = new List<SpUserMenuList>();

                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<SpUserMenuList>("EXEC SpGetUserMenuList @userRole = N'" + User.FindFirst(ClaimTypes.Role.ToString())?.Value + "';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Return String Message
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/EasyITCenterStoredProceduresList/Message/{procedureName}")]
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
        [HttpGet("/EasyITCenterStoredProceduresList/Json/{procedureName}")]
        public async Task<string> GetSystemOperationsListJson(string procedureName) {
            List<DBJsonFile> data = null;
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<DBJsonFile>($"EXEC {procedureName};");
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}