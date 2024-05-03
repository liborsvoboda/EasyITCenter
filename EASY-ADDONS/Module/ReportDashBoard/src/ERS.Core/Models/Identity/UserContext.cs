using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace ERS.Models
{
    public class UserContext
    {
        public string UserId { get; set; }

        public string Email { get; set; }

        public List<string> Roles { get; set; }

        public TimeZoneInfo TimeZone { get; set; } = TimeZoneInfo.Utc;

        public CultureInfo Culture { get; set; } = new CultureInfo("en-US");

        public UserContext(string userId)
        {
            UserId = userId;
            Email = "";
            Roles = new List<string>();
        }
        public UserContext(string userId, string email, IEnumerable<string> roles)
        {
            UserId = userId;
            Email = email;
            Roles = roles.ToList();
        }
    }
}
