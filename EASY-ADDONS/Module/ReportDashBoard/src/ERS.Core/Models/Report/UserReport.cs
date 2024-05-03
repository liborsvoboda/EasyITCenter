
namespace ERS.Models
{
    public class UserReport 
    { 
        public string ReportId { get; set; }

        public virtual Report Report { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

    }
}
