using Microsoft.EntityFrameworkCore;

using ERS.Services;
using ERS.Models;

namespace ERS.Data
{
    public class UserBoundDbContext : EasyReportDbContext
    {
        private IUserContextAccessor _userContextAccessor;

        public UserBoundDbContext(IUserContextAccessor userContextAccessor, DbContextOptions<EasyReportDbContext> options)
            : base(options)
        {
            _userContextAccessor = userContextAccessor;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure entity filters
            modelBuilder.Entity<UserReport>().HasQueryFilter(ur => ur.UserId == _userContextAccessor.GetContext().UserId);
        }
    }
}
