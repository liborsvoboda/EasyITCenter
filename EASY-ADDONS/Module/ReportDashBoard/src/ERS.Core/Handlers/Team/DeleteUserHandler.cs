using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

using MediatR;

using ERS.Models;
using ERS.Repositories;
using ERS.Services;
using Microsoft.AspNetCore.Identity;

namespace ERS.Handlers
{
    public class DeleteUserHandler : IRequestHandler<DeleteUserCommand, Unit>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IReportRepository _reportRepo;

        public DeleteUserHandler(
                UserManager<ApplicationUser> userManager,
                IReportRepository reportRepo)
        {
            _userManager = userManager;
            _reportRepo = reportRepo;
        }

        public async Task<Unit> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByIdAsync(request.UserId);

            if (user != null) {
                //Delete all links for the current user
                await _reportRepo.DeleteUserReportsAsync(user);
                await _reportRepo.SaveChangesAsync();

                //Delete all reports created by this user
                await _reportRepo.DeleteMultipleAsync(report => report.UserId == request.UserId);
                await _reportRepo.SaveChangesAsync();

                await _userManager.DeleteAsync(user);
            }

            return Unit.Value;
        }
    }

    public class DeleteUserCommand : IRequest<Unit>
    {
        public string UserId { get; set; }

        public DeleteUserCommand(string id) => UserId = id;
    }
}
