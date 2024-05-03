using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERS
{
    public static class Constants
    {

        /// <summary>
        /// The default ID for the team. It's used wen there is one of it (if MutiTenancy = false)
        /// </summary>
        public const string MainTeamId = "MainTeam";

        public const string MainTeamMoniker = "main-team";

        /// <summary>
        /// The default ID for the connection. It's used wen there is one of it (in Community edition)
        /// </summary>
        public const string MainConnectionId = "MainConnection";

        /// <summary>
        /// Indicates whether the quest access is allowed (works only together with MultiTenancy = false)
        /// </summary>
        public static bool AllowGuestAccess = false;

        //The service name and the URL to 'Contact us' page
        public const string ServiceName = "Easy.Report";
        public const string ServiceContactUrl = "https://korzh.com/support";

        public const string DemoConnectionName = "NorthWind MySQL DB";

        //The connection string to the demo DB (used to test the service)
        public const string DemoDbConnectionString = "Server=demodb.korzh.com;Port=6603;Database=nwind;Uid=equser;Pwd=ILoveEasyQuery;SslMode=none";

        public static class Roles
        {
            public const string Guest = "guest";

            public const string Consumer = "consumer";

            public const string Manager = "manager";

            public const string Admin = "admin";

            public const string Owner = "owner";

            public static readonly string[] All = new string[] { Guest, Consumer, Manager, Admin, Owner };

            public static readonly string[] Managers = new string[] { Manager, Admin, Owner };

            public const string ManagersStr = "manager,admin,owner";
        }

        public static class Policies
        {
            public const string Default = "Default";

            public const string AllowGuest = "AllowGuest";
        }
    }
}
