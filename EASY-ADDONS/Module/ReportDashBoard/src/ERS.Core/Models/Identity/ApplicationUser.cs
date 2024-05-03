using System;
using System.Globalization;
using Microsoft.AspNetCore.Identity;

namespace ERS.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser, ITeamEntity
    {
        public string ContactName { get; set; }

        public string CompanyName { get; set; }

        public string TeamId { get; set; }

        public virtual Team Team { get; set;}

        public DateTime Registered { get; set; }

        public DateTime LastLogin { get; set;  }

        public string TimeZoneId { get; set; } = TimeZoneInfo.Utc.Id;

        public string CultureId { get; set; } = null;

        public TimeZoneInfo TimeZone => TimeZoneId != null ? TimeZoneInfo.FindSystemTimeZoneById(TimeZoneId) : TimeZoneInfo.Utc;

        public CultureInfo Culture => CultureId != null ? new CultureInfo(CultureId) : null;
    }
}
