using Microsoft.EntityFrameworkCore;

using ERS.Models;
using ERS.Services;

namespace ERS.Data
{
    public class TeamBoundDbContext : EasyReportDbContext
    {
        private ITeamContextAccessor _teamContextAccessor;

        public TeamBoundDbContext(ITeamContextAccessor teamContextAccessor, DbContextOptions<EasyReportDbContext> options)
            : base(options)
        {
            _teamContextAccessor = teamContextAccessor;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure entity filters
            modelBuilder.Entity<ApplicationUser>().HasQueryFilter(u => u.TeamId == _teamContextAccessor.GetContext().TeamId);
            modelBuilder.Entity<TimetableRecord>().HasQueryFilter(u => u.TeamId == _teamContextAccessor.GetContext().TeamId);
            modelBuilder.Entity<ScheduledJobLogItem>().HasQueryFilter(u => u.TeamId == _teamContextAccessor.GetContext().TeamId);
            modelBuilder.Entity<EasyReportConnection>().HasQueryFilter(c => c.TeamId == _teamContextAccessor.GetContext().TeamId);
            modelBuilder.Entity<Report>().HasQueryFilter(r => r.TeamId == _teamContextAccessor.GetContext().TeamId);
            modelBuilder.Entity<Team>().HasQueryFilter(r => r.Id == _teamContextAccessor.GetContext().TeamId);
        }
    }
}
