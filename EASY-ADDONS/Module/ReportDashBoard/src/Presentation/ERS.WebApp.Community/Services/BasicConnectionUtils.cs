using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

using ERS.Models;
using ERS.Repositories;

namespace ERS.Services
{
    public class BasicConnectionUtils : IConnectionUtils
    {
        public BasicConnectionUtils()
        {
        }

        public virtual EasyReportConnection GetDefaultConnection()
        {
            var connection = new EasyReportConnection {
                Id = Constants.MainConnectionId,
                Type = DatabaseType.MsSqlServer,
                Name = "Default Connection",
                ConnectionString = "",
                LegacyPaging = false
            };

            return connection;
        }

        public virtual EasyReportConnection GetDemoConnection()
        {
            var connection = new EasyReportConnection {
                Id = Constants.MainConnectionId,
                Type = DatabaseType.MySql,
                Name = Constants.DemoConnectionName,
                ConnectionString = Constants.DemoDbConnectionString,
                LegacyPaging = false
            };

            return connection;
        }

        public virtual List<Report> GetDefaultReports(EasyReportConnection connection)
        {
            var resourceManager = new ResourceManager(typeof(BasicConnectionUtils));
            var resources = resourceManager.GetResources("DefaultQueries");

            var reports = new List<Report>();
            foreach (var resource in resources) {
                var reportQuery = new BasicReportQuery();

                reportQuery.Id = Guid.NewGuid().ToString();
                reportQuery.ModelId = connection.Id;

                var reportName = resource.Name;

                reportQuery.Name = reportName.Remove(reportName.LastIndexOf('.'));

                var reportDef = new StreamReader(resource.Content).ReadToEnd();

                var index1 = reportDef.IndexOf("ID:");
                var index2 = reportDef.IndexOf("DESC:");
                var index3 = reportDef.IndexOf("SQL:");

                index1 += +"ID:".Length;
                reportQuery.Id = reportDef.Substring(index1 , index2 - index1).Trim();

                index2 += "DESC:".Length + 1;
                reportQuery.Description = reportDef.Substring(index2, index3 - index2).Trim();

                index3 += "SQL:".Length + 1;
                reportQuery.SQL = reportDef
                                    .Substring(index3)
                                    .Trim()
                                    .Replace("{{LASTYEAR}}", (DateTime.Now.Year - 1).ToString())
                                    .Replace("{{THISYEAR}}", DateTime.Now.Year.ToString());

                var report = new Report {
                    Id = reportQuery.Id,
                    Name = reportQuery.Name,
                    ConnectionId = connection.Id,
                    IsShared = true,
                    QueryJson = BasicReportQuerySerializer.Serialize(reportQuery),
                    Description = reportQuery.Description
                };

                reports.Add(report);
            }


            return reports;
        }

        public void SyncConnectionModel(EasyReportConnection connection)
        {
            // We don't need it in Community edition
        }
    }
}
