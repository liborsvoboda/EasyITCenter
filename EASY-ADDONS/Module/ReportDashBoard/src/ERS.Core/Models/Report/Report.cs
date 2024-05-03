using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ERS.Models
{
    public enum ReportKind
    { 
        SQL = 0,
        EasyQuery = 1
    }

    public class Report : ITeamEntity
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string QueryJson { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public string TeamId { get; set; }

        public virtual Team Team { get; set; }

        public string ConnectionId { get; set; }

        public virtual EasyReportConnection Connection { get; set; }

        public bool IsShared { get; set; }

        public ReportKind Kind { get; set; } = ReportKind.SQL;
    }
}
