using System;
using System.Threading.Tasks;

using System.Linq.Expressions;
using System.Threading;

namespace ERS.Repositories
{
    public interface IRepository<TModel, TKey> : IReadOnlyRepository<TModel, TKey>
    {
        Task<TModel> CreateAsync(TModel item, CancellationToken ct = default);

        Task<TModel> UpdateAsync(TKey id, TModel item, CancellationToken ct = default);

        Task DeleteAsync(TKey id, CancellationToken ct = default);
        
        Task DeleteMultipleAsync(Expression<Func<TModel, bool>> filter, CancellationToken ct = default);
       
        Task SaveChangesAsync(CancellationToken ct = default);

        void CancelChanges();
    }
}
