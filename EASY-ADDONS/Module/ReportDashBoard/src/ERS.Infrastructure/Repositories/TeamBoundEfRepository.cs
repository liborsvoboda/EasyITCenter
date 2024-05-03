using ERS.Models;
using ERS.Data;

namespace ERS.Repositories
{

    public class TeamBoundEfRepository<T> : EfRepository<T> where T : class, IDbEntity
    {
        public TeamBoundEfRepository(TeamBoundDbContext dbContext) : base(dbContext) { }
    }
}
