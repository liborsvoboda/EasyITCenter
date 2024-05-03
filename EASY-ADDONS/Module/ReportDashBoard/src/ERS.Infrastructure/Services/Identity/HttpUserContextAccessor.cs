using System;
using System.Globalization;
using System.Security.Claims;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;

using ERS.Models;

namespace ERS.Services
{
    public class HttpUserContextAccessor : IUserContextAccessor
    {

        private UserContext _userContext;

        private readonly IHttpContextAccessor _httpContextAccessor;
        public HttpUserContextAccessor(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public UserContext GetContext()
        {
            CreateContextIfNotExist();
            return _userContext;
        }

        private void CreateContextIfNotExist()
        {
            if (_userContext == null) {
                var httpContext = _httpContextAccessor.HttpContext;
                var userId = httpContext.User?.GetUserId();
                var email = httpContext.User?.GetUserEmail();
                var roles = httpContext.User?.GetRoles();
                var locale = httpContext.Features.Get<IRequestCultureFeature>();
                var timeZoneId = httpContext.User?.GetUserTimeZone() ?? TimeZoneInfo.Utc.Id;
                _userContext = new UserContext(userId, email, roles) {
                    TimeZone = TimeZoneInfo.FindSystemTimeZoneById(timeZoneId),
                    Culture = GetCultureByHttpContext(httpContext)
                };                    
            }
        }

        private CultureInfo GetCultureByHttpContext(HttpContext httpContext)
        {
            var cultureId = httpContext.User?.GetUserCultureId();
            var locale = httpContext.Features.Get<IRequestCultureFeature>();
            if (string.IsNullOrEmpty(cultureId))
                return locale.RequestCulture.UICulture;

            try {
                return CultureInfo.GetCultureInfo(cultureId);
            }
            catch (CultureNotFoundException) {
                return locale.RequestCulture.UICulture;
            }

        }

        public void SetContext(UserContext userContext)
        {
            _userContext = userContext;
        }
    }
}
