
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using ERS.Models;

namespace ERS.Data
{
    public class EasyReportDbContext : IdentityDbContext<ApplicationUser>
    {
        public EasyReportDbContext(DbContextOptions<EasyReportDbContext> options)
            : base(options)
        {
        }

        public DbSet<EasyReportConnection> Connections { get; set; }

        public DbSet<Report> Reports { get; set; }

        public DbSet<UserReport> UserReports { get; set; }

        public DbSet<Team> Teams { get; set; }

        public DbSet<TimetableRecord> Timetable { get; set; }

        public DbSet<ScheduledJobLogItem> ScheduledJobLogs { get; set; }


        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            builder.Entity<UserReport>().HasKey(ur => new { ur.ReportId, ur.UserId });

            builder.Entity<Report>()
                   .HasOne(r => r.Connection)
                   .WithMany(c => c.Reports)
                   .HasForeignKey(r => r.ConnectionId);

            builder.Entity<ScheduledJobLogItem>()
                   .HasIndex(l => l.TimetableRecordId);

            builder.Entity<ApplicationUser>()
                   .Ignore(u => u.TimeZone);

            builder.Entity<TimetableRecord>()
                   .Ignore(u => u.TimeZone);

            builder.Entity<EasyReportConnection>()
                   .Ignore(c => c.LegacyPaging)
                   .Ignore(c => c.LoaderOptions);
        }
    }
}
