using System;
using System.Collections.Generic;
using System.Text;

namespace ERS.Models
{
    public class EasyReportConnectionItem
    {
        public string Id { get; set; }

        public DatabaseType Type { get; set; }

        public string Name { get; set; }

        public string TeamId { get; set; }

        public virtual Team Team { get; set; }

        public EasyReportConnectionItem()
        { 
        }

        public EasyReportConnectionItem(EasyReportConnection connection)
        {
            Id = connection.Id;
            Type = connection.Type;
            Name = connection.Name;
            TeamId = connection.TeamId;
            Team = connection.Team;
        }
    }
}
