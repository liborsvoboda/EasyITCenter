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
    public class UpdateReportHandler : IRequestHandler<UpdateReportCommand, ReportRequestResponse>
    {
        private readonly IUserContextAccessor _userContextAccessor;
        private readonly IReportRepository _reportRepo;

        public UpdateReportHandler(
                IUserContextAccessor userContextAccessor,
                IReportRepository reportRepo)
        {
            _userContextAccessor = userContextAccessor;
            _reportRepo = reportRepo;
        }

        public async Task<ReportRequestResponse> Handle(UpdateReportCommand request, CancellationToken cancellationToken)
        {
            var userId = _userContextAccessor.GetContext()?.UserId;
            if (userId == null) {
                return new ReportRequestResponse(ReportRequestResult.NonAuthorized);
            }

            var report = await _reportRepo.FindSingleAsync(request.Id);
            if (report == null) {
                return new ReportRequestResponse(ReportRequestResult.NotFound);
            }

            if (report.UserId != userId) {
                return new ReportRequestResponse(ReportRequestResult.NonAuthorized);
            }

            if (request.Kind.HasValue) { 
                report.Kind = request.Kind.Value;
            }

            if (!string.IsNullOrEmpty(request.Name)) {
                report.Name = request.Name;
            }

            if (request.Description != null) {
                report.Description = request.Description;
            }

            bool sharingWasChanged = false;
            if (request.IsShared.HasValue && request.IsShared.Value != report.IsShared) {
                report.IsShared = request.IsShared.Value;
                sharingWasChanged = true;
            }

            if (!string.IsNullOrEmpty(request.QueryJson)) { 
                report.QueryJson = request.QueryJson;
            }

            await _reportRepo.UpdateAsync(report.Id, report);
            await _reportRepo.SaveChangesAsync();

            if (sharingWasChanged) {
                if (report.IsShared) {
                    await _reportRepo.ShareReportAsync(report);
                }
                else {
                    await _reportRepo.UnshareReportAsync(report);
                }
            }

            return new ReportRequestResponse(report);
        }
    }

    public class UpdateReportCommand : BaseReportCommand
    {
    }
}
