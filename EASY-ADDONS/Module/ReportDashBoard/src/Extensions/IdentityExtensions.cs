using System.Collections.Generic;
using System.Linq;

namespace System.Security.Claims 
{
    public static class IdentityExtensions 
    {      
        public static string GetTeamId(this ClaimsPrincipal principal) 
        {
            if (principal == null) {
                throw new ArgumentNullException(nameof(principal));
            }

            return principal.FindFirstValue("TeamId");
        }

        public static string GetUserTimeZone(this ClaimsPrincipal principal)
        {
            if (principal == null) {
                throw new ArgumentNullException(nameof(principal));
            }

            return principal.FindFirstValue("TimeZoneId");
        }

        public static string GetUserCultureId(this ClaimsPrincipal principal)
        {
            if (principal == null) {
                throw new ArgumentNullException(nameof(principal));
            }

            return principal.FindFirstValue("CultureId");
        }

        public static string GetUserId(this ClaimsPrincipal principal) 
        {
            if (principal == null) {
                throw new ArgumentNullException(nameof(principal));
            }

            return principal.FindFirstValue(ClaimTypes.NameIdentifier);
        }

        public static string GetUserEmail(this ClaimsPrincipal principal)
        {
            if (principal == null) {
                throw new ArgumentNullException(nameof(principal));
            }

            return principal.FindFirstValue(ClaimTypes.Email);
        }

        public static IEnumerable<string> GetRoles(this ClaimsPrincipal principal) 
        {
            return principal.Claims
                    .Where(c => c.Type == ClaimTypes.Role)
                    .Select(c => c.Value);
        }

        public static string GetContactName(this ClaimsPrincipal principal) 
        {
            if (principal == null) {
                throw new ArgumentNullException(nameof(principal));
            }

            return principal.FindFirstValue(ClaimTypes.GivenName);
        }
    }
}
