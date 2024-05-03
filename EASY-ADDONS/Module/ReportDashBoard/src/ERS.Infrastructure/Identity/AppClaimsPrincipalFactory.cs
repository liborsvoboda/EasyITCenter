using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

using ERS.Models;

namespace ERS.Data
{
    public class AppClaimsPrincipalFactory: UserClaimsPrincipalFactory<ApplicationUser, IdentityRole> 
    {
        public AppClaimsPrincipalFactory(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IOptions<IdentityOptions> optionAccessor ): base(userManager, roleManager, optionAccessor)    
        {

        }

        protected async override Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user) 
        {
            var identity = await base.GenerateClaimsAsync(user);

            identity.AddClaims(new[] {
                new Claim("TeamId", user.TeamId),
                new Claim("TimeZoneId", user.TimeZoneId ?? TimeZoneInfo.Utc.Id),
                new Claim("CultureId", user.CultureId ?? ""),
                new Claim(ClaimTypes.GivenName, !string.IsNullOrEmpty(user.ContactName) ? user.ContactName : "")
            });

            return identity;
        }
    }
}
