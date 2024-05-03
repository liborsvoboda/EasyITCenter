using System.Security.Claims;
using Microsoft.AspNetCore.Http;

using ERS.Models;

namespace ERS.Services
{
    public class HttpTeamContextAccessor: ITeamContextAccessor
    {
        private TeamContext _teamContext;

        AppGlobals _appGlobals;
        IHttpContextAccessor _httpContextAccessor;
        public HttpTeamContextAccessor(AppGlobals appGlobals, IHttpContextAccessor httpContextAccessor)
        {
            _appGlobals = appGlobals;
            _httpContextAccessor = httpContextAccessor;
        }

        public TeamContext GetContext()
        {
            CreateContextIfNotExist();
            return _teamContext;
        }

        private void CreateContextIfNotExist()
        {
            if (_teamContext == null) {
                if (_appGlobals.MultiTenancy) {
                    var teamId = _httpContextAccessor.HttpContext?.User?.GetTeamId();
                    if (!string.IsNullOrEmpty(teamId)) {
                        _teamContext = new TeamContext(teamId);
                    }
                }
                else {
                    _teamContext = new TeamContext(Constants.MainTeamId);
                }
            }
        }

        public void SetContext(TeamContext context)
        {
            _teamContext = context;
        }
    }
}
