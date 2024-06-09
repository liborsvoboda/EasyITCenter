namespace EasyITCenter.ControllersExtensions {

    /// <summary>
    /// Softwasre Triggers For Web and System Login/Visit History View
    /// </summary>
    internal class SoftwareTriggers {

        /// <summary>
        /// Trigger User Login History
        /// </summary>
        /// <param name="ipAddress"></param>
        /// <param name="userId">   </param>
        /// <param name="userName"> </param>
        public static async void WriteVisit(string ipAddress, int userId, string? userName) {
            // Save new visit
            if (!string.IsNullOrWhiteSpace(userName)) {
                SystemLoginHistoryList record = new() { IpAddress = ipAddress, UserId = userId, UserName = userName, TimeStamp = DateTimeOffset.Now.DateTime };
                EntityEntry<SystemLoginHistoryList>? result = new EasyITCenterContext().SystemLoginHistoryLists.Add(record);
                await result.Context.SaveChangesAsync();
            }
        }

        /// <summary>
        /// Trigger Web IP Hosts History List
        /// TODO MOVE to app.use AS Agenda Definition 
        /// </summary>
        /// <param name="ipAddress"></param>
        public static async void WriteWebVisit(string ipAddress) {
            // Save new visit
            WebVisitIpList record = new() { WebHostIp = ipAddress, TimeStamp = DateTimeOffset.Now.DateTime };
            EntityEntry<WebVisitIpList>? result = new EasyITCenterContext().WebVisitIpLists.Add(record);
            await result.Context.SaveChangesAsync();
        }
    }
}