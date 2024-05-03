using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

using ERS.Models;
using ERS.Data;
using System.Threading;

namespace ERS.Repositories
{
    public class EfRepository<T> : IRepository<T, string> where T: class, IDbEntity
    {
        protected readonly DbSet<T> DbSet;
        protected readonly EasyReportDbContext _dbContext;

        protected EasyReportDbContext DbContext => _dbContext;

        public EfRepository(EasyReportDbContext dbContext)
        {
            _dbContext = dbContext;

            DbSet = dbContext.Set<T>();
        }

        protected virtual void BeforeInsert(T item)
        {
        }

        protected virtual IQueryable<T> ApplyFilter(IQueryable<T> filter)
        {
            return filter;
        }

        protected virtual IQueryable<T> AddIncludes(IQueryable<T> queryable)
        {
            return queryable;
        }

        public Task<List<T>> ToListAsync(CancellationToken ct = default)
        {
            return AsQueryable().ToListAsync(ct);
        }

        public IQueryable<T> AsQueryable()
        {
            return ApplyFilter(AddIncludes(DbSet).AsQueryable());
        }
        
        public async Task<IEnumerable<T>> GetAllWhereAsync(Expression<Func<T, bool>> filter, CancellationToken ct = default)
        {
            return await AsQueryable().Where(filter).ToListAsync(ct);
        }

        public async Task<IEnumerable<T>> GetAllWhereInAsync(IList<string> list, CancellationToken ct = default)
        {
            return await AsQueryable()
                        .Where(ent => list.Contains(ent.Id))
                        .ToListAsync(ct);
        }        

        public virtual Task<T> GetSingleAsync(string id, CancellationToken ct = default) 
        {
            return AsQueryable().FirstAsync(ent => ent.Id == id, ct);
        }

        public virtual Task<T> FindSingleAsync(string id, CancellationToken ct = default)
        {
            return AsQueryable().FirstOrDefaultAsync(ent => ent.Id == id, ct);
        }

        public virtual async Task<T> CreateAsync(T item, CancellationToken ct = default)
        {
            BeforeInsert(item);
            await DbSet.AddAsync(item, ct);
            return item;
        }

        public virtual Task<T> UpdateAsync(string id, T item, CancellationToken ct = default)
        {
            item.Id = id;
            _dbContext.Update(item);
            return Task.FromResult(item);
        }

        public virtual async Task DeleteAsync(string id, CancellationToken ct = default)
        {
            var item = await FindSingleAsync(id, ct);
            if (item != null) {
                DbSet.Remove(item);
            }
        }

        public virtual Task DeleteMultipleAsync(Expression<Func<T, bool>> filter, CancellationToken ct = default)
        {
            _dbContext.RemoveRange(   
                AsQueryable()
                .Where(filter)
                .AsEnumerable()
            );

            return Task.CompletedTask;
        }
       
        public async Task SaveChangesAsync(CancellationToken ct = default)
        {
            await _dbContext.SaveChangesAsync(ct);
        }

        public void CancelChanges()
        {
            _dbContext.ChangeTracker.Clear();
        }
    }
}
