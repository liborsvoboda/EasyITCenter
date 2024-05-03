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
    public class GetSingleReportHandler : IRequestHandler<GetSingleReportRequest, ReportRequestResponse>
    {
        private readonly IMediator _mediatr;
        private readonly IUserContextAccessor _userContextAccessor;
        private readonly IReportRepository _reportRepo;

        public GetSingleReportHandler(
                IMediator mediator,
                IUserContextAccessor userContextAccessor,
                IReportRepository reportRepo)
        {
            _mediatr = mediator;
            _userContextAccessor = userContextAccessor;
            _reportRepo = reportRepo;
        }

        public async Task<ReportRequestResponse> Handle(GetSingleReportRequest request, CancellationToken cancellationToken)
        {
            var userId = _userContextAccessor.GetContext()?.UserId;
            if (userId == null) {
                return new ReportRequestResponse(ReportRequestResult.NonAuthorized);
            }
            var report = await _reportRepo.GetAllowedForUserAsync(request.ReportId, userId);

            if (report == null) {
                return new ReportRequestResponse(ReportRequestResult.NotFound);
            }

            if (request.IncludeConnection) {
                report.Connection = await _mediatr.Send(new GetSingleConnectionRequest(report.ConnectionId));
                if (report.Connection == null) {
                    return new ReportRequestResponse(ReportRequestResult.NotFound);
                }
            }

            return new ReportRequestResponse(report);
        }
    }

    public class GetSingleReportRequest : IRequest<ReportRequestResponse>
    {
        public string ReportId { get; set; }

        public bool IncludeConnection { get; set; } = false;

        public GetSingleReportRequest(string id, bool includeConnection = false)
        {
            ReportId = id;
            IncludeConnection = includeConnection;
        }
    }
}
