using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

using MediatR;

using ERS.Models;
using ERS.Repositories;
using ERS.Services;

namespace ERS.Handlers
{
    public class CreateReportHandler : IRequestHandler<CreateReportCommand, ReportRequestResponse>
    {
        private readonly IUserContextAccessor _userContextAccessor;
        private readonly ITeamContextAccessor _teamContextAccessor;
        private readonly IReportRepository _reportRepo;

        public CreateReportHandler(
                IUserContextAccessor userContextAccessor,
                ITeamContextAccessor teamContextAccessor,
                IReportRepository reportRepo)
        {
            _userContextAccessor = userContextAccessor;
            _teamContextAccessor = teamContextAccessor;
            _reportRepo = reportRepo;
        }

        public async Task<ReportRequestResponse> Handle(CreateReportCommand request, CancellationToken cancellationToken)
        {
            var userId = _userContextAccessor.GetContext()?.UserId;

            if (userId == null) {
                return new ReportRequestResponse(ReportRequestResult.NonAuthorized);
            }

            var teamId = _teamContextAccessor.GetContext().TeamId;

            var report = new Report {
                Id = request.Id ?? Guid.NewGuid().ToString(),
                UserId = userId,
                TeamId = teamId,
                ConnectionId = request.ConnectionId,
                IsShared = request.IsShared.HasValue ? request.IsShared.Value : false,
                Kind = request.Kind.HasValue ? request.Kind.Value : ReportKind.SQL,
                QueryJson = request.QueryJson,
                Name = request.Name,
                Description = request.Description
            };

            await _reportRepo.CreateAsync(report);
            await _reportRepo.SaveChangesAsync();

            if (report.IsShared) {
                await _reportRepo.ShareReportAsync(report);
            }

            return new ReportRequestResponse(report);
        }
    }

    public class CreateReportCommand : BaseReportCommand
    { 
    }
}
