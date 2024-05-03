using ERS.Models;
using ERS.Data;

namespace ERS.Repositories
{
    public class UserBoundEfRepository<T>: EfRepository<T> where T : class, IDbEntity
    {
        public UserBoundEfRepository(UserBoundDbContext dbContext) : base(dbContext) { }
    }
}
