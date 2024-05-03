using ERS.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERS.Models
{
    public static class ReportUtils
    {
        public static string GetSql(this Report report)
        {

            if (!string.IsNullOrEmpty(report.QueryJson)) {
                var reportQuery = new BasicReportQuery();
                var querySerializer = new BasicReportQuerySerializer(reportQuery);
                querySerializer.DeserializeFromJsonString(report.QueryJson);
                return reportQuery.SQL;
            }
            else {
                return "";
            }
        }

        public static string GetQueryJson(string id, string connectionId, string name, string description, string sql)
        {
            var query = new BasicReportQuery {
                Id = id,
                ModelId = connectionId,
                Name = name,
                Description = description,
                SQL = sql
            };

            var querySerializer = new BasicReportQuerySerializer(query);

            return querySerializer.SerializeToJsonString();
        }
    }
}
