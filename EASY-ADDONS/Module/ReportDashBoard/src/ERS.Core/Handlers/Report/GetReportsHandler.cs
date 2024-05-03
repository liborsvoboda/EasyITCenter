using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System.Linq;

using MediatR;

using ERS.Models;
using ERS.Repositories;
using ERS.Services;

namespace ERS.Handlers
{
    public class GetReportsHandler : IRequestHandler<GetReportsRequest, GetReportsResponse>
    {
        private readonly IReportRepository _reportRepo;
        private readonly IUserContextAccessor _userContextAccessor;
        public GetReportsHandler(
            IReportRepository reportRepo,
            IUserContextAccessor userContextAccessor)
        {
            _reportRepo = reportRepo;
            _userContextAccessor = userContextAccessor;
        }

        public async Task<GetReportsResponse> Handle(GetReportsRequest request, CancellationToken cancellationToken)
        {
            var userContext = _userContextAccessor.GetContext();
            var userId = userContext.UserId;
            var userRoles = userContext.Roles;
            var reports = await _reportRepo.GetReportListForUserAsync(userId);

            return new GetReportsResponse {
                Reports = reports,
                UserId = userId,
                UserRoles = userRoles
            };
        }
    }

    public class GetReportsRequest : IRequest<GetReportsResponse>
    {
    }

    public class GetReportsResponse
    { 
        public string UserId { get; set; }

        public List<string> UserRoles { get; set; }

        public IEnumerable<Report> Reports { get; set; }
    }
}
