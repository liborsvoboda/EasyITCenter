using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace ERS.Authorization
{
    public class NotGuestUserRequirement: IAuthorizationRequirement
    {
    }

    public class NotGuestUserHandler : AuthorizationHandler<NotGuestUserRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context,
                                                       NotGuestUserRequirement requirement)
        {
            if (!context.User.IsInRole(Constants.Roles.Guest)) {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}
