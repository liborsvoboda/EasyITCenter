using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace EASYDATACenter.ServerCoreDefinition {

    /// <summary>
    /// Server Communication Extensions for Controlling Data
    /// </summary>
    public class CommunicationController : IHttpContextAccessor {
        private static readonly IHttpContextAccessor? _accessor;

        /// <summary>
        /// Server Request Accessory controller
        /// </summary>
        public HttpContext? HttpContext { get => _accessor.HttpContext; set => _accessor.HttpContext = value; }

        /// <summary>
        /// Extension for check Admin Role 
        /// </summary>
        public static bool CheckAdmin() {
            try {
                var context = _accessor.HttpContext;
                if (context != null && context.User != null && !context.User.IsInRole("admin")) { return false; } else return true;
            } catch { return false; }
        }
    }


    /// <summary>
    /// Custom Registering 
    /// Data are on /HealthResultService
    /// </summary>
    /// <seealso cref="IHealthCheck" />
    public class ServerProviderHealthCheck : IHealthCheck {


        /// <summary>
        /// Interface for Registering Custom  Defined Checks on Startup
        /// https://dilanlivera.dev/add-health-checks-in-aspnet-core
        /// https://medium.com/@suman.chatterjee/net-core-web-api-custom-health-check-13c6350b5f0c
        /// https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks
        /// </summary>
        /// <param name="context"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        Task<HealthCheckResult> IHealthCheck.CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default) {
            try {

                //TODO  check ping ping IP,  check URL, GROUP,  and result set result 
                var data = new Dictionary<string, object>()
               { { "AllocatedBytesInManagedMemory", null } };

                var healthyResult = new HealthCheckResult(
                status: HealthStatus.Healthy,
                description: ServerCoreDbOperations.DBTranslate("CheckWasSuccesfull"),
                data: data);

                return Task.FromResult(healthyResult);

            } catch (Exception) {
                return Task.FromResult(
                    new HealthCheckResult(context.Registration.FailureStatus, ServerCoreDbOperations.DBTranslate("CheckFailed")));
            }
        }
       
    }
}