using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Linq.Expressions;

using Microsoft.EntityFrameworkCore;

using ERS.Models;
using ERS.Data;

namespace ERS.Repositories
{
    public class ReportEfRepository : TeamBoundEfRepository<Report>, IReportRepository
    {
        protected DbSet<UserReport> UserReports;
        protected DbSet<ApplicationUser> Users;

        public ReportEfRepository(TeamBoundDbContext context): base(context)
        {
            UserReports = context.Set<UserReport>();
            Users = context.Set<ApplicationUser>();
        }

        public override async Task<Report> CreateAsync(Report item, CancellationToken ct = default)
        {
            var result = await base.CreateAsync(item, ct);
            await UserReports.AddAsync(new UserReport
            {
                UserId = result.UserId,
                Report = result
            });

            return result;
        }

        public override Task DeleteAsync(string id, CancellationToken ct = default)
        {
            UserReports.RemoveRange(UserReports.Where(r => r.ReportId == id));
            return base.DeleteAsync(id, ct);
        }

        public override Task DeleteMultipleAsync(Expression<Func<Report, bool>> filter, CancellationToken ct = default)
        {
            var reports = DbSet.Where(filter);
            var ids = reports.Select(r => r.Id);

            UserReports.RemoveRange(UserReports.Where(r => ids.Contains(r.ReportId)));
            DbSet.RemoveRange(reports);

            return Task.CompletedTask;
        }

        public Task<Report> GetAllowedForUserAsync(string reportId, string userId, CancellationToken ct = default)
        {
            return UserReports
                    .Include(ur => ur.Report)
                    .Where(r => r.UserId == userId && r.ReportId == reportId)
                    .Select(ur => ur.Report)
                    .FirstOrDefaultAsync(ct);
        }

        public async Task<IEnumerable<Report>> GetReportListForUserAsync(string userId, CancellationToken ct = default)
        {
            return await UserReports
                         .Include(ur => ur.Report)
                         .Where(ur => ur.UserId == userId)
                         .Select(ur => ur.Report)
                         .OrderBy(r => r.Name)
                         .ToListAsync(ct);
        }

        public async Task ShareReportAsync(Report report, CancellationToken ct = default)
        {
            var userIds = await Users
                                .Where(u => !UserReports.Any(ur => ur.ReportId == report.Id && ur.UserId == u.Id))
                                .Select(u => u.Id)
                                .ToListAsync(ct);


            if (userIds.Count > 0) {
                //Add pairs (user,report) for every user that can read current report
                foreach (var userId in userIds) {
                    await UserReports.AddAsync(new UserReport {
                        UserId = userId,
                        Report = report
                    }, ct);
                }

                await SaveChangesAsync();
            }
        }

        public async Task UnshareReportAsync(Report report, CancellationToken ct = default)
        {
            var userReports = UserReports.Where(r => r.ReportId == report.Id && r.UserId != report.UserId).ToArray();
            UserReports.RemoveRange(userReports);
            await SaveChangesAsync();
        }

        public async Task CreateUserReportsAsync(ApplicationUser user, CancellationToken ct = default)
        {
            var reports = await GetAllWhereAsync(report => report.IsShared, ct);
            foreach (var report in reports) {
                await UserReports.AddAsync(new UserReport
                {
                    ReportId = report.Id,
                    UserId = user.Id
                }, ct);
            }
        }

        public Task DeleteUserReportsAsync(ApplicationUser user, CancellationToken ct = default)
        {
            UserReports.RemoveRange(UserReports.Where(r => r.UserId == user.Id));
            return Task.CompletedTask;
        }
    }
}
