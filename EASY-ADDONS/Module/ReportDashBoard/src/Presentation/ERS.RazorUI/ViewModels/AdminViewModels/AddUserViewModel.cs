using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ERS.ViewModels
{
    public class AddUserViewModel 
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Contact Name")]
        public string ContactName { get; set; }

        [Display(Name = "Role")]
        public string Role { get; set; }
        
    }
}
