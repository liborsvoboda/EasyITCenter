using System.Data;

/*
 * Server Core Configuration Part
 */

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
    /// Studio Tool Here can Be added customization which are not on the server Here is Extended the
    /// Context with Insert News Functionality Customizing and implement Settings for Automatic
    /// Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas
    /// </summary>
    public partial class EasyITCenterContext : ScaffoldContext {
        private static ILogger<EasyITCenterContext> _logger;

        public EasyITCenterContext(ILogger<EasyITCenterContext> logger) => _logger = logger;

        public EasyITCenterContext() {
        }

        public EasyITCenterContext(DbContextOptions<ScaffoldContext> options)
            : base(options) {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.ConfigureLoggingCacheTime(TimeSpan.FromMinutes(ServerConfigSettings.DatabaseInternalCacheTimeoutMin));
                optionsBuilder.EnableServiceProviderCaching(ServerConfigSettings.DatabaseInternalCachingEnabled);
                optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
                optionsBuilder.EnableSensitiveDataLogging(false); //everytime must be disabled other problem on release

                optionsBuilder.UseSqlServer(ServerConfigSettings.DatabaseConnectionString,
                      x => x.MigrationsHistoryTable("MigrationsHistory", "dbo"));

                if (ServerRuntimeData.DebugMode) {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => {
                        builder.AddEventLog().AddConsole();
                    }
                    )).LogTo(message => { Debug.WriteLine(message); }).LogTo(Console.WriteLine);
                }
                else if (ServerConfigSettings.ConfigLogWarnPlusToDbEnabled) {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => {
                        builder.SetMinimumLevel(LogLevel.Warning).AddEventLog();
                    })).EnableSensitiveDataLogging(false).LogTo(message => {
                        SolutionFailList SolutionFailList = new SolutionFailList() { UserId = null, Source = "Server", Message = message, LogLevel = null, UserName = null };
                        new EasyITCenterContext().SolutionFailLists.Add(SolutionFailList).Context.SaveChanges();
                    }, LogLevel.Warning);
                }
            }
        }
    }

    /// <summary>
    /// Database Context Extensions for All Types Procedures For Retun Data in procedure can be
    /// Simple SELECT * XXX and you Create Same Class for returned DataSet
    /// </summary>
    public static class DatabaseContextExtensions {

        public static List<T> EasyITCenterCollectionFromSql<T>(this EasyITCenterContext dbContext, string sql) where T : class, new() {
            using var cmd = dbContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection.State != ConnectionState.Open)
                cmd.Connection.Open();
            try {
                List<T> results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = DbOperations.BindList<T>(table).ToList();

                return results;
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); } finally { cmd.Connection.Close(); }
            return new List<T>();
        }
    }
}