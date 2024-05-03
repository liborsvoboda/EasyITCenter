using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using System.Threading;
using System.Text.RegularExpressions;
using System.Linq;

using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

using MediatR;

using ERS;
using ERS.Models;
using ERS.Repositories;
using ERS.Services;

namespace ERS.Handlers
{
    public class UpdateUserHandler : IRequestHandler<UpdateUserCommand, UserRequestResponse>
    {
        private readonly AppGlobals _appGlobals;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITeamContextAccessor _teamContextAccessor;
        private readonly IReportRepository _reportRepo;
        private readonly IEndpointUrlGenerator _endpointUrlGenerator;
        private readonly IEmailSender _emailSender;
        private readonly IResourceManager _resourceManager;

        private readonly ILogger<SetupTeamHandler> _logger;

        public UpdateUserHandler(
                AppGlobals appGlobals,
                UserManager<ApplicationUser> userManager,
                ITeamContextAccessor teamContextAccessor,
                IReportRepository reportRepository,
                IEndpointUrlGenerator endpointUrlGenerator,
                IResourceManager resourceManager,
                IEmailSender emailSender,
                ILogger<SetupTeamHandler> logger)
        {
            _appGlobals = appGlobals;
            _userManager = userManager;
            _teamContextAccessor = teamContextAccessor;
            _reportRepo = reportRepository;
            _endpointUrlGenerator = endpointUrlGenerator;
            _emailSender = emailSender;
            _resourceManager = resourceManager;
            _logger = logger;
        }

        public async Task<UserRequestResponse> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {
            var teamId = _teamContextAccessor.GetContext().TeamId;

            var user = await _userManager.FindByIdAsync(request.Id);
            if (user == null) {
                return new UserRequestResponse(false, "Can't find user " + request.Id);
            }

            if (!string.IsNullOrEmpty(request.Password)) {
                //TODO: send an email when admin changes the password of a user
                user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, request.Password);
            }

            if (user.Email != request.Email) {
                var setEmailResult = await _userManager.SetEmailAsync(user, request.Email);
                if (!setEmailResult.Succeeded) {
                    return new UserRequestResponse(setEmailResult, user);
                }
            }

            user.ContactName = request.ContactName;

            var currentRoles = (await _userManager.GetRolesAsync(user)).ToList();

            foreach (var role in currentRoles) {
                if (!request.Roles.Contains(role)) {
                    await _userManager.RemoveFromRoleAsync(user, role);
                }
            }

            foreach (var role in request.Roles) {
                if (!currentRoles.Contains(role)) {
                    await _userManager.AddToRoleAsync(user, role);
                }
            }

            var identityResult = await _userManager.UpdateAsync(user);

            return new UserRequestResponse(identityResult, user);
        }

        private string GetTeamMoniker(string teamName)
        {
            string notAllowedCharacters = "\\W";

            var regex = new Regex(notAllowedCharacters);

            var result = regex.Replace(teamName.ToLower(), "");
            return !string.IsNullOrEmpty(result) ? result : "team01";
        }
    }

    public class UpdateUserCommand : BaseUserCommand
    {
    }
}
