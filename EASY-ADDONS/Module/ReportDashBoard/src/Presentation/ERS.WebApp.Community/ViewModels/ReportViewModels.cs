using System;
using System.Collections.Generic;
using ERS.Models;

namespace ERS.ViewModels
{
    public class ReportViewModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ConnectionId { get; set; }

        public string Sql { get; set; }

        public ReportKind Kind { get; set; } = ReportKind.SQL;

        public bool? IsShared { get; set; }

        public bool? IsAlien { get; set; }

        public bool IsReadOnly { get; set; }

        public ReportViewModel()
        {
        }

        public ReportViewModel(Report report) 
        {
            Id = report.Id;
            Name = report.Name;
            Description = report.Description;
            ConnectionId = report.ConnectionId;
            IsShared = report.IsShared;
            Sql = report.GetSql();
            ConnectionId = report.ConnectionId;
        }


        public ReportViewModel(Report report, string userId, List<string> userRoles)
            :this(report)
        {
            IsAlien = report.UserId != userId;
            IsReadOnly = report.UserId != userId || userRoles.Contains(Constants.Roles.Consumer);
        }
    }

    public class FetchDataViewModel
    { 
        public string ReportId { get; set; }
    }
}
