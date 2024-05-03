using System;

using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

using ERS.Services;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class CommonWebServiceBuilderExtensions
    {
        public static IServiceCollection AddCommonWebServices(this IServiceCollection services) 
        {
            services.AddScoped<IEndpointUrlGenerator, EndpointUrlGenerator>();

            return services;
        }
    }
}
