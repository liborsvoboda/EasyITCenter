using Quartz;

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Restart Api for Remote Control
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerAutoSchedulerApi : ControllerBase {
        private readonly ILogger logger;

        public ServerAutoSchedulerApi(ILogger<ServerManagementApi> _logger) => logger = _logger;

        [HttpGet("/ServerManagement/GetServerSchedulerJobs")]
        public async Task<string> GetServerSchedulerJobs() {
            try {
                if (CommunicationController.IsAdmin()) {
                    IReadOnlyCollection<string>? result = null; //(qua....ServerSchedulerService.Scheduler.GetJobGroupNames());
                    if (!result.Any()) {
                        return JsonSerializer.Serialize(result.ToList(), new JsonSerializerOptions() {
                            ReferenceHandler = ReferenceHandler.IgnoreCycles,
                            WriteIndented = true,
                            DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                        });
                    }
                    else {
                        return JsonSerializer.Serialize(string.Empty, new JsonSerializerOptions() {
                            ReferenceHandler = ReferenceHandler.IgnoreCycles,
                            WriteIndented = true,
                            DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                        });
                    }
                }
                else { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) }); }
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpGet("/ServerManagement/ServerSchedulerAddTask")]
        public async Task<IActionResult> ServerSchedulerAddTask(string jobName, int timeInterval, string email, string command, string type, string data, bool log) {
            try {
                JobDataMap jobData = new(); jobData.Add("name", jobName); jobData.Add("type", type); jobData.Add("email", email); jobData.Add("command", command); jobData.Add("log", log);

                if (CommunicationController.IsAdmin()) {
                    //IJobDetail job = JobBuilder.Create().OfType(typeof(ScheduledJobForExecute))
                    //    .WithIdentity(jobName).SetJobData(jobData).Build();
                    //ITrigger trigger = TriggerBuilder.Create().WithIdentity(jobName).ForJob(job).StartNow().WithSimpleSchedule(x => x.WithIntervalInSeconds(timeInterval).RepeatForever()).Build();

                    //await ServerRuntimeData.ServerSchedulerService.Scheduler.ScheduleJob(job, trigger);

                    return Ok(JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.success.ToString(), ErrorMessage = string.Empty }));
                }
                else { return BadRequest(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DbOperations.DBTranslate("YouDoesNotHaveRights") }); }
            } catch (Exception ex) { return BadRequest(new DBResultMessage() { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}