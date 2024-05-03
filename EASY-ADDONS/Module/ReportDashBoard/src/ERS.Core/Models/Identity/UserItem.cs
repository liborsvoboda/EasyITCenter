using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace ERS.Models
{
    public class UserItem
    {
        public string Id { get; set; }

        [Display(Name = "User Name")]
        public string UserName { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }

        public string[] Roles { get; set; }

        [Display(Name = "Contact Name")]
        public string ContactName { get; set; }

        public DateTime Registered { get; set; }

        public DateTime LastLogin { get; set; }

        public UserItem()
        { 
        }

        public UserItem(ApplicationUser user, string[] roles)
        {
            Id = user.Id;
            Email = user.Email;
            UserName = user.UserName;
            Roles = roles;
            ContactName = user.ContactName;
            Registered = user.Registered;
            LastLogin = user.LastLogin;
        }
    }
}
