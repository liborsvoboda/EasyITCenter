using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;

using MediatR;

using ERS.Models;

namespace ERS.Handlers
{
    public class BaseUserCommand : IRequest<UserRequestResponse>
    {
        public string Id { get; set; }

        public string Email { get; set; }

        public string ContactName { get; set; }

        public string Password { get; set; }

        public string[] Roles { get; set; } = new string[] { Constants.Roles.Consumer };
    }

    public class UserRequestResponse
    {
        public IdentityResult IdentityResult { get; set; }
        public List<string> Warnings { get; set; } = new List<string>();
        public ApplicationUser User { get; set; }
        public bool EmailWasSent { get; set; } = false;

        public bool Succeeded => IdentityResult.Succeeded;

        public UserRequestResponse(IdentityResult identityResult, ApplicationUser user) 
        {
            IdentityResult = identityResult;
            User = user;
        }

        public UserRequestResponse(bool success, params string[] errors)
        {
            IdentityResult = success 
                    ? IdentityResult.Success 
                    : IdentityResult.Failed(errors.Select((err, idx) => new IdentityError { Code = "ERR"+idx, Description = err }).ToArray());
        }
    }
}
