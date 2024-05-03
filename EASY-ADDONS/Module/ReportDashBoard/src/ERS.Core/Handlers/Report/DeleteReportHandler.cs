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
    public class DeleteReportHandler : IRequestHandler<DeleteReportCommand, ReportRequestResponse>
    {
        private readonly IUserContextAccessor _userContextAccessor;
        private readonly ITeamContextAccessor _teamContextAccessor;
        private readonly IReportRepository _reportRepo;

        public DeleteReportHandler(
                IUserContextAccessor userContextAccessor,
                ITeamContextAccessor teamContextAccessor,
                IReportRepository reportRepo)
        {
            _userContextAccessor = userContextAccessor;
            _teamContextAccessor = teamContextAccessor;
            _reportRepo = reportRepo;
        }

        public async Task<ReportRequestResponse> Handle(DeleteReportCommand request, CancellationToken cancellationToken)
        {
            var userId = _userContextAccessor.GetContext()?.UserId;
            if (userId == null) {
                return new ReportRequestResponse(ReportRequestResult.NonAuthorized);
            }

            var report = await _reportRepo.FindSingleAsync(request.ReportId);
            if (report == null) {
                return new ReportRequestResponse(ReportRequestResult.NotFound);
            }
            if (report.UserId != userId) {
                return new ReportRequestResponse(ReportRequestResult.NonAuthorized);
            }

            await _reportRepo.DeleteAsync(report.Id);
            await _reportRepo.SaveChangesAsync();

            return new ReportRequestResponse(report);
        }
    }

    public class DeleteReportCommand : IRequest<ReportRequestResponse>
    {
        public string ReportId { get; set; }

        public DeleteReportCommand(string reportId) => ReportId = reportId;
    }
}
