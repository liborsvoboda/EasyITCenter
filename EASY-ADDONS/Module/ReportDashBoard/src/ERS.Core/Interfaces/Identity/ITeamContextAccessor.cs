using ERS.Models;

namespace ERS.Services
{
    public interface ITeamContextAccessor
    {
        public TeamContext GetContext();

        public void SetContext(TeamContext context);
    }
}
