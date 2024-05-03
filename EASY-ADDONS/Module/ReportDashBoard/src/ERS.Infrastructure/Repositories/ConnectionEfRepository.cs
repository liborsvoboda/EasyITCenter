using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using ERS.Models;
using ERS.Data;

namespace ERS.Repositories
{
    public class ConnectionEfRepository : TeamBoundEfRepository<EasyReportConnection>, IConnectionRepository, IReadOnlyConnectionRepository
    {
        private readonly IReportRepository _reportRepo;

        public ConnectionEfRepository(TeamBoundDbContext dbContext, IReportRepository reportRepo) : base(dbContext) 
        {
            _reportRepo = reportRepo;
        }

        public Task<List<EasyReportConnectionItem>> ToItemListAsync(CancellationToken ct = default)
        {
            return DbSet.Select(c => new EasyReportConnectionItem
            {
                Id = c.Id,
                Name = c.Name,
                Type = c.Type,
                Team = c.Team,
                TeamId = c.TeamId
            }).ToListAsync(ct);
        }

        public override async Task DeleteAsync(string id, CancellationToken ct = default)
        {
            await _reportRepo.DeleteMultipleAsync(r => r.ConnectionId == id, ct);

            var item = await FindSingleAsync(id, ct);
            if (item != null) {
                DbSet.Remove(item);
            }
        }
    }
}
