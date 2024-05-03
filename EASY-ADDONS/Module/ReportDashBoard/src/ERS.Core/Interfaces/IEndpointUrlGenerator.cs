using System;
using System.Collections.Generic;
using System.Text;

namespace ERS.Services
{
    public interface IEndpointUrlGenerator
    {
        string GetActionUrl(string controller, string action, object parameters);


        string GetEmailConfirmationLink(string userId, string userToken);

        string GetResetPasswordCallbackLink(string userId, string code);
    }
}
