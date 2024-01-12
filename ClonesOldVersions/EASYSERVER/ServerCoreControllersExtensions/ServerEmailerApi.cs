using EASYDATACenter.DBModel;

namespace EASYDATACenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Email sender Api for logged Communication
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerEmailerApi : ControllerBase {


        [HttpGet("/ServerEmailer/{message}")]
        public async Task<string> GetServerEmailer(string message) {
            try {
                string result = null;
                if (!string.IsNullOrWhiteSpace(message)) result = ServerCoreFunctions.SendEmail( new MailRequest() { Content = message }, true);

                return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(result) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpPost("/ServerEmailer")]
        [Consumes("application/json")]
        public async Task<string> PostServerEmailer([FromBody] MailRequest message) {
            try {
                string? result = null;
                if (!string.IsNullOrWhiteSpace(message.Content)) result = ServerCoreFunctions.SendEmail(message, true) ;
                
                return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate(result) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpPost("/ServerEmailer/Mass")]
        [Consumes("application/json")]
        public async Task<string> PostServerMassEmailer([FromBody] List<MailRequest> messages) {
            try {
                if (ServerConfigSettings.SpecialEnableMassEmail) {
                    ServerCoreFunctions.SendMassEmail(messages);
                    return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate("emailsSent") });
                } else { return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = ServerCoreDbOperations.DBTranslate("massEmailNotEnabled") }); }
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}