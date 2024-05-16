namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Restart Api for Remote Control
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [ApiController]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerDynamicSqlApi : ControllerBase {

        [Authorize]
        [HttpPost("/ServerDynamicSqlApi/RunSqlQuery/Sql/{slq}")]
        [Consumes("application/json")]
        public async Task<string> GetDynamicSql(string sqlquery) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC " + sqlquery); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        [Authorize]
        [HttpGet("/ServerDynamicSqlApi/RunSqlQuery/ById/{id}")]
        public async Task<string> GetDynamicSqlById(int id) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC "); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpGet("/ServerDynamicSqlApi/GetSavedQueries")]
        public async Task<string> GetSavedQueries() {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC "); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpGet("/ServerDynamicSqlApi/GetSavedQueryById/{id}")]
        public async Task<string> GetSavedQueryById(int id) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC "); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpGet("/ServerDynamicSqlApi/SaveSqlQuery")]
        public async Task<string> SaveSqlQuery(string sql) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC "); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpGet("/ServerDynamicSqlApi/GetTableData")]
        public async Task<string> GetTableData(string sql) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC "); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpGet("/ServerDynamicSqlApi/GetTableSchema")]
        public async Task<string> GetTableSchema(string sql) {
            try {
                if (CommunicationController.IsAdmin()) {
                    var data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericObject>("EXEC "); ;

                    return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}