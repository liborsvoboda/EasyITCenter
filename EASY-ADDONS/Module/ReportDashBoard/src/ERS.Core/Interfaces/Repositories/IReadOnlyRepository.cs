using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace ERS.Repositories
{
    public interface IReadOnlyRepository<TModel, TKey>
    {
        IQueryable<TModel> AsQueryable();

        Task<List<TModel>> ToListAsync(CancellationToken ct = default);

        Task<IEnumerable<TModel>> GetAllWhereAsync(Expression<Func<TModel, bool>> filter, CancellationToken ct = default);

        Task<IEnumerable<TModel>> GetAllWhereInAsync(IList<string> list, CancellationToken ct = default);

        Task<TModel> GetSingleAsync(TKey id, CancellationToken ct = default);

        Task<TModel> FindSingleAsync(TKey id, CancellationToken ct = default);
    }
}
