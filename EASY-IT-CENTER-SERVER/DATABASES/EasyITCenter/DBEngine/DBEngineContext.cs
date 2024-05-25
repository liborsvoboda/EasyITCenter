﻿using ColorCode.Compilation.Languages;
using DocumentFormat.OpenXml.Office.Word;
using IdentityModel.OidcClient;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.VisualStudio.Services.Common;
using NPOI.SS.Formula.Functions;
using Org.BouncyCastle.Asn1.X509.Qualified;
using ReverseMarkdown.Converters;
using ServiceStack.Mvc;
using System.Data;
using System.Data.Common;

/*
 * Server Core Configuration Part
 */

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
    /// Studio Tool Here can Be added customization which are not on the server Here is Extended the
    /// Context with Insert News Functionality Customizing and implement Settings for Automatic
    /// Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas
    /// https://www.codeproject.com/Articles/5321286/Executing-Raw-SQL-Queries-using-Entity-Framework-C
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
                        SolutionFailList SolutionFailList = new SolutionFailList() 
                        { UserId = null, Source = "Server", Message = message, LogLevel = null, UserName = null };
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


        public static DataView EasyITCenterCollectionFromSql(this EasyITCenterContext EasyITCenterContext,Type type, string sql) {
            using var cmd = EasyITCenterContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection?.State != ConnectionState.Open)
                cmd.Connection?.Open();
            try {
                DataView? results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = (table.AsDataView());

                return results;
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); } finally { cmd.Connection?.Close(); }
            return new DataView();
        }


        public static List<T> EasyITCenterCollectionFromSql<T>(this EasyITCenterContext EasyITCenterContext, string sql) where T : class, new() {
            using var cmd = EasyITCenterContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection?.State != ConnectionState.Open)
                cmd.Connection?.Open();
            try {
                List<T> results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = DbOperations.BindList<T>(table).ToList();

                return results;
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); } finally { cmd.Connection?.Close(); }
            return new List<T>();
        }

        public static IQueryable Set(this EasyITCenterContext context, Type T) {
            MethodInfo method = typeof(EasyITCenterContext).GetMethod(nameof(EasyITCenterContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method.MakeGenericMethod(T);
            return method.Invoke(context, null) as IQueryable;
        }

        public static IQueryable<T> Set<T>(this EasyITCenterContext context) {
            MethodInfo method = typeof(EasyITCenterContext).GetMethod(nameof(EasyITCenterContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method.MakeGenericMethod(typeof(T));
            return method.Invoke(context, null) as IQueryable<T>;
        }


        public static object? GetDbSet(EasyITCenterContext db, Type T) {
            MethodInfo method = typeof(EasyITCenterContext).GetMethod(nameof(EasyITCenterContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method.MakeGenericMethod(T);
            return method.Invoke(Set(db, T), null);
        }


        public static DbSet<T> GetDbSet<T>(EasyITCenterContext db) where T : class {
           return db.Set<T>();
        }


        public static DbTransaction GetDbTransaction(this EasyITCenterContext source) {
            return (source as IInfrastructure<DbTransaction>).Instance;
        }

        public static DbTransaction GetDbTransaction(this IDbContextTransaction source) {
            return (source as IInfrastructure<DbTransaction>).Instance;
        }

        public static object? ExecuteScalar(this EasyITCenterContext context,
        string sql, List<DbParameter> parameters = null,
        CommandType commandType = CommandType.Text,
        int? commandTimeOutInSeconds = null) {
            Object? value;
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
               
                    if (cmd.Connection?.State != ConnectionState.Open) {
                    cmd.Connection?.Open();
                    }
                    cmd.CommandText = sql;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    value = cmd.ExecuteScalar();
                    cmd.Connection?.Close();
                }
                return value;

            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
            return new object();
            
        }


        public static int ExecuteNonQuery(this EasyITCenterContext context, string command, List<DbParameter> parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        cmd.Connection?.Open();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    int value = cmd.ExecuteNonQuery();
                    //cmd.Connection?.Close();
                    return value;
                }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
            return new int();
        }


        public static List<Dictionary<string,object>> ExecuteReader(this EasyITCenterContext context, string command, List<DbParameter> parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        cmd.Connection?.Open();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }

                    DataTable? table = new DataTable();
                    table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                    table.Load(cmd.ExecuteReader());
                    table = (table.DefaultView.Table?.AsDataView()?.Table );

                    List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
                    Dictionary<string, object> row;
                    foreach (DataRow dr in table.Rows) {
                        row = new Dictionary<string, object>();
                        foreach (DataColumn col in table.Columns) { row.Add(col.ColumnName, dr[col]); }
                        rows.Add(row);
                    }
                    cmd.Connection?.Close();
                    return rows;
                  }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetSystemErrMessage(Ex) }); }
            return null;
        }


        public static IQueryable<TSource> FromSqlRaw<TSource>(this EasyITCenterContext db, string sql, params object[] parameters) where TSource : class {
            var item = db.Set<TSource>().FromSqlRaw(sql, parameters);
            return item;
        }

    }
}