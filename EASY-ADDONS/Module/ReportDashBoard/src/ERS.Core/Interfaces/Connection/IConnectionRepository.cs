using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using ERS.Models;

namespace ERS.Repositories
{
    public interface IReadOnlyConnectionRepository : IReadOnlyRepository<EasyReportConnection, string>
    {
    }

    public interface IConnectionRepository: IRepository<EasyReportConnection, string>
    {
        Task<List<EasyReportConnectionItem>> ToItemListAsync(CancellationToken ct = default);
    }
}
