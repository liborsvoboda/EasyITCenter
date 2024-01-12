using DBEntitySchema.Core.Entities;

namespace DBEntitySchema.Core.Repository {

    public interface IBaseRepository {

        public List<RelationEntity> GetAll();
    }
}