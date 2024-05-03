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
    public class CreateUserHandler : IRequestHandler<CreateUserCommand, UserRequestResponse>
    {
        private readonly AppGlobals _appGlobals;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITeamContextAccessor _teamContextAccessor;
        private readonly IReportRepository _reportRepo;
        private readonly IEndpointUrlGenerator _endpointUrlGenerator;
        private readonly IEmailSender _emailSender;
        private readonly IResourceManager _resourceManager;

        private readonly ILogger<SetupTeamHandler> _logger;

        public CreateUserHandler(
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

        public async Task<UserRequestResponse> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var teamId = _teamContextAccessor.GetContext()?.TeamId;

            if (teamId == null && request.Roles.Contains(Constants.Roles.Guest)) { 
                teamId = request.TeamId;
                //set context for all other operations
                _teamContextAccessor.SetContext(new TeamContext(teamId));
            }

            if (teamId == null) {
                new UserRequestResponse(false, "Non-authorized to perform this operation");
            }

            var user = new ApplicationUser {
                Id = request.Id ?? Guid.NewGuid().ToString(),
                TeamId = teamId,
                UserName = request.Email,
                Email = request.Email,
                ContactName = request.ContactName,
                Registered = DateTime.UtcNow,
                LastLogin = DateTime.UtcNow,
            };

            var identityResult = request.Password != null
                ? await _userManager.CreateAsync(user, request.Password)
                : await _userManager.CreateAsync(user);

            var response = new UserRequestResponse(identityResult, user);

            if (identityResult.Succeeded) {
                _logger.LogInformation($"New user created: " + user.Email);

                foreach (var role in request.Roles) {
                    await _userManager.AddToRoleAsync(user, role);
                }

                //Add pairs userId - reportId for current User
                await _reportRepo.CreateUserReportsAsync(user);
                await _reportRepo.SaveChangesAsync();

                if (request.SendEmail) {
                    var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var confirmationUrl = _endpointUrlGenerator.GetEmailConfirmationLink(user.Id, emailConfirmationToken);

                    var content = _resourceManager.GetResourceAsString("UserRegistrationMessage");
                    if (content != null) {
                        content = content.FillFluentTemplate(new Dictionary<string, string> {
                            { "ServiceName", Constants.ServiceName },
                            { "ContactName", request.ContactName },
                            { "Login", request.Email },
                            { "Password", request.Password },
                            { "AccountConfirmationUrl", confirmationUrl },
                            { "ServiceContactUrl", Constants.ServiceContactUrl }
                        });
                        var message = new EmailMessage(content);

                        var emailResult = await _emailSender.SendEmailAsync(request.Email, message);
                        response.EmailWasSent = emailResult.Succeeded;
                        if (emailResult.Failed) {
                            response.Warnings.Add(TextResources.ErrorOnEmailSending);
                        }
                    }
                    else {
                        response.Warnings.Add(string.Format(TextResources.ErrorNoMessageTemplate, "UserRegistrationMessage"));
                    }
                }
            }

            return response;
        }

        private string GetTeamMoniker(string teamName)
        {
            string notAllowedCharacters = "\\W";

            var regex = new Regex(notAllowedCharacters);

            var result = regex.Replace(teamName.ToLower(), "");
            return !string.IsNullOrEmpty(result) ? result : "team01";
        }
    }

    public class CreateUserCommand : BaseUserCommand
    {
        public bool SendEmail { get; set; } = true;

        //it's necessary only when we add the guest user
        public string TeamId { get; set; }
    }
}
