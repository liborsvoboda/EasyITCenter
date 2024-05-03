using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;


namespace ERS.Services
{
    public class EndpointUrlGenerator : IEndpointUrlGenerator
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly LinkGenerator _linkGenerator;

        public EndpointUrlGenerator(IHttpContextAccessor httpContextAccessor,
                                    LinkGenerator linkGenerator)
        {
            _httpContextAccessor = httpContextAccessor;
            _linkGenerator = linkGenerator;
        }


        public string GetActionUrl(string controller, string action, object routeValues)
        {
            return _linkGenerator.GetUriByAction(_httpContextAccessor.HttpContext,
                controller: controller,
                action: action,
                values: routeValues);
        }

        public string GetEmailConfirmationLink(string userId, string userToken)
        {
            return GetActionUrl(
                controller: "Account",
                action: "ConfirmEmail",
                routeValues: new { userId = userId, code = userToken });
        }

        public string GetResetPasswordCallbackLink(string userId, string userToken)
        {
            return GetActionUrl(
                controller: "Account",
                action: "ResetPassword",
                routeValues: new { userId = userId, code = userToken });
        }
    }
}
