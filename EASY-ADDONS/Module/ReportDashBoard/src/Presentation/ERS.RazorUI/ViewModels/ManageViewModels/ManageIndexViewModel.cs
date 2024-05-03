using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ERS.ViewModels
{
    public class ManageIndexViewModel
    {
        public string Username { get; set; }

        public bool IsEmailConfirmed { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Display(Name = "Contact name")]
        public string ContactName { get; set; }

        [Phone]
        [Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }

        [Display(Name = "Time zone")]
        public string TimeZoneId { get; set; }
        
        [Display(Name = "Culture")]
        public string CultureId { get; set; }
    }
}
