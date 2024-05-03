using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace Microsoft.AspNetCore.Builder
{
    public static class ApplicationBuilderExtentions
    {
        public static void AddUpdateRoles(this IApplicationBuilder app, IEnumerable<string> roles)
        {
            using (var scope = app.ApplicationServices.CreateScope()) {
                RoleManager<IdentityRole> roleManager =
                  scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

                foreach (var role in roles) {
                    if (roleManager.FindByNameAsync(role).Result == null) {
                        roleManager.CreateAsync(new IdentityRole(role)).Wait();
                    }
                }
            }
        }
    }
}
