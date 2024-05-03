using System;

using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

using ERS.Models;
using ERS.Data;
using ERS.Services;
using ERS.Repositories;
using ERS.Authorization;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class EasyReportServiceBuilderExtensions
    {
        public static IServiceCollection AddEasyReportServices(this IServiceCollection services) 
        {
            var configuration = services.BuildServiceProvider().GetRequiredService<IConfiguration>();

            services.Configure<EmailSettings>(configuration.GetSection("Email"));

            services.AddBoundDbContexts();
            services.AddRepositories();

            // Connection services
            services.AddScoped<IConnectionCache, InMemoryConnectionCache>();

            // Other application services.
            services.AddScoped<IEmailSender, SendGridEmailSender>();

            services.AddScoped<IUserContextAccessor, HttpUserContextAccessor>();
            services.AddScoped<ITeamContextAccessor, HttpTeamContextAccessor>();

            return services;
        }

        public static IServiceCollection AddBoundDbContexts(this IServiceCollection services)
        {
            return services.AddScoped<UserBoundDbContext>()
                           .AddScoped<TeamBoundDbContext>();
        }

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            return services
                .AddScoped<IReadOnlyRepository<Team, string>, EfRepository<Team>>()
                .AddScoped<IRepository<Team, string>, EfRepository<Team>>()

                .AddScoped<IReadOnlyRepository<Report, string>, ReportEfRepository>()
                .AddScoped<IReportRepository, ReportEfRepository>()

                .AddScoped<IReadOnlyConnectionRepository, ConnectionEfRepository>()
                .AddScoped<IConnectionRepository, ConnectionEfRepository>()

                .AddScoped<IReadOnlyRepository<ApplicationUser, string>, TeamBoundEfRepository<ApplicationUser>>()
                .AddScoped<IRepository<ApplicationUser, string>, TeamBoundEfRepository<ApplicationUser>>()

                .AddScoped<IReadOnlyRepository<TimetableRecord, string>, TeamBoundEfRepository<TimetableRecord>>()
                .AddScoped<IRepository<TimetableRecord, string>, TeamBoundEfRepository<TimetableRecord>>()

                .AddScoped<IReadOnlyRepository<ScheduledJobLogItem, string>, TeamBoundEfRepository<ScheduledJobLogItem>>()
                .AddScoped<IRepository<ScheduledJobLogItem, string>, TeamBoundEfRepository<ScheduledJobLogItem>>();
        }
    }
}
