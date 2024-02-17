using Elsa;
using Elsa.Persistence.EntityFramework.Core.Extensions;
using Elsa.Persistence.EntityFramework.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ElsaQuickstarts.Server.DashboardAndServer.Activities;
using System;

namespace ElsaQuickstarts.Server.DashboardAndServer
{
    public class Startup
    {
        public IWebHostEnvironment Environment { get; }
        public IConfiguration Configuration { get; }
        public Startup(IWebHostEnvironment environment, IConfiguration configuration)
        {
            Environment = environment;
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services) {
            var elsaSection = Configuration.GetSection("Elsa");


            services.AddElsa(elsa => elsa
                 .UseEntityFrameworkPersistence(ef => ef.UseSqlite())
                 .AddConsoleActivities()
                 .AddHttpActivities(elsaSection.GetSection("Server").Bind)
                 .AddQuartzTemporalActivities()
                 .AddActivity<SayHelloWorldActivity>()
                 .AddActivity<ReadLineActivity>()
                 .AddJavaScriptActivities()
                 .AddWorkflowsFrom<Startup>()
             );

            // Elsa API endpoints.
            services.AddElsaApiEndpoints();
            services.AddNotificationHandlersFrom<Startup>();
            // For Dashboard.
            services.AddRazorPages();

            services.AddSingleton(Console.Out);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles(); // For Dashboard.
            app.UseHttpActivities();
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                    endpoints.MapControllers();
                    endpoints.MapFallbackToPage("/_Host");
            });
        }
    }
}
