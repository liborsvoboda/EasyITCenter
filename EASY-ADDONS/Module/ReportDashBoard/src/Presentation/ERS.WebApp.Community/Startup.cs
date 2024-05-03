using System.Globalization;
using System.Linq;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Localization;

using ERS.Data;
using ERS.Models;
using ERS.Handlers;
using ERS.Services;
using ERS.Authorization;

namespace ERS.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            Env = env;
            Globals = new AppGlobals();

            ConnectionString = Configuration.GetConnectionString("EasyReportDB");

            //it's possible to turn on a "guest access" feature.
            //guest users will not be able to edit anything - only view the shared reports
            Globals.AllowGuestAccess = Configuration.GetValue<bool>("AllowGuestAccess");

            //if this option is turned on, there is a special action that allows admin user to add a demo connection
            //(a connnection to the public NWind database) for testing purposes
            //it's better to remove this functionality if you use this template for your own solution
            Globals.AllowAddDemoConnection = Configuration.GetValue<bool>("AllowAddDemoConnection");
        }

        public AppGlobals Globals { get; }

        public string ConnectionString { get; }

        public IConfiguration Configuration { get; }

        public IWebHostEnvironment Env { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(Globals);

            services.AddDbContext<EasyReportDbContext>(options =>
                    // Setting the provider (SQL Server) and the connection string
                    options.UseSqlite(ConnectionString,
                        // We want to maintain the migrations in this project since the Infractructure project 
                        // (where our DbContext is actually defined) can be shared among several different solutions
                        b => b.MigrationsAssembly(typeof(Startup).Assembly.GetName().Name))
            );

            services.AddBoundDbContexts();

            services.Configure<CookiePolicyOptions>(options => {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddIdentity<ApplicationUser, IdentityRole>(opts =>
            {
                //Weaker password validation on development stage
                if (Env.EnvironmentName == Environments.Development) {
                    opts.Password.RequiredLength = 5;
                    opts.Password.RequireNonAlphanumeric = false;
                    opts.Password.RequireDigit = false;
                }
                else {
                    opts.Password.RequiredLength = 6;
                    opts.Password.RequireNonAlphanumeric = false;
                    opts.Password.RequireDigit = true;
                }

                opts.Password.RequireLowercase = false;
                opts.Password.RequireUppercase = false;
            })
                .AddEntityFrameworkStores<EasyReportDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthorization(options =>
            {
                options.AddPolicy(Constants.Policies.Default, policy =>
                    policy.AddRequirements(new NotGuestUserRequirement())
                );

                options.AddPolicy(Constants.Policies.AllowGuest,
                    policy => policy.RequireAuthenticatedUser());

                options.DefaultPolicy = options.GetPolicy(Constants.Policies.Default);
            });

            services.AddSingleton<IAuthorizationHandler, NotGuestUserHandler>();

            services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, AppClaimsPrincipalFactory>();

            services.AddDistributedMemoryCache();
            services.AddSession();

            var mvcBuilder = services.AddMvc().AddNewtonsoftJson();

            if (Env.IsDevelopment()) {
                //to make it possible to refresh pages/views while the applications is running
                mvcBuilder.AddRazorRuntimeCompilation();
            }

            services.AddSingleton<IResourceManager, ResourceManager<Startup>>();
            services.AddScoped<IConnectionUtils, BasicConnectionUtils>();

            services.AddCommonWebServices();
            services.AddEasyReportServices();
            services.RegisterMediatorHandlers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseStaticFiles();

            app.UseCookiePolicy();

            app.UseRequestLocalization(new RequestLocalizationOptions {
                DefaultRequestCulture = new RequestCulture("en-US"),
                SupportedCultures = CultureInfo.GetCultures(CultureTypes.AllCultures),
                SupportedUICultures = CultureInfo.GetCultures(CultureTypes.AllCultures)
            });

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseSession();

            app.UseMiddleware<SetRoleMiddleware>();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
                endpoints.MapRazorPages();
                endpoints.MapDefaultControllerRoute();
            });

            app.ApplyPendingMigrations();
            app.AddUpdateRoles(Constants.Roles.All);

            Globals.NeedSetup = app.CheckIfSetupIsNeeded();
        }
    }

    public static class EasyReportProStartupExtensions
    {
        public static IApplicationBuilder ApplyPendingMigrations(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.CreateScope()) {
                using (var dbContext = scope.ServiceProvider.GetRequiredService<EasyReportDbContext>()) {
                    dbContext.Database.Migrate();
                }
            }

            return app;
        }

        public static bool CheckIfSetupIsNeeded(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            using (var context = scope.ServiceProvider.GetService<EasyReportDbContext>()) {
                return !context.Users.Any();
            }
        }
    }
}
