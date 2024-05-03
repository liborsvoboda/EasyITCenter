using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

using ERS.Services;

namespace Microsoft.AspNetCore.Builder
{
    public class SetRoleMiddleware
    {
        private readonly RequestDelegate _next;

        public SetRoleMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext httpContext)
        {
            var userContext = httpContext.RequestServices.GetRequiredService<IUserContextAccessor>().GetContext();
            if (userContext != null) {
                httpContext.Response.OnStarting(() =>
                {
                    var options = new CookieOptions()
                    {
                        Path = "/",
                        IsEssential = true,
                        HttpOnly = false,
                        Secure = false,
                        SameSite = SameSiteMode.Strict
                    };
                    httpContext.Response.Cookies.Append("user-roles", string.Join(',', userContext.Roles), options);

                    return Task.CompletedTask;
                });
              
            }

            return _next(httpContext);
        }
    }
}
