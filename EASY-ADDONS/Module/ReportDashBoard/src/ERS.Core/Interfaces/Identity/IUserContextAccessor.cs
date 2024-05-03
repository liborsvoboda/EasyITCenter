using ERS.Models;

namespace ERS.Services
{
    public interface IUserContextAccessor
    {
        public UserContext GetContext();

        public void SetContext(UserContext userContext);
    }
}
