using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.Extensions.DependencyInjection;
using MediatR;

namespace ERS.Handlers
{
    public static class HandlersServiceCollectionExtensions
    {
        public static IServiceCollection RegisterMediatorHandlers(this IServiceCollection services)
        {
            return services
                .AddMediatR(typeof(HandlersServiceCollectionExtensions).Assembly);
        }
    }
}
