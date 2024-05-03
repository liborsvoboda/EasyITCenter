using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

using ERS.Models;

namespace ERS.Repositories
{
    public interface IReportRepository : IRepository<Report, string>
    {
        Task<IEnumerable<Report>> GetReportListForUserAsync(string userId, CancellationToken ct = default);

        Task<Report> GetAllowedForUserAsync(string reportId, string userId, CancellationToken ct = default);

        Task ShareReportAsync(Report report, CancellationToken ct = default);

        Task UnshareReportAsync(Report report, CancellationToken ct = default);

        Task CreateUserReportsAsync(ApplicationUser user, CancellationToken ct = default);

        Task DeleteUserReportsAsync(ApplicationUser user, CancellationToken ct = default);
    }
}
