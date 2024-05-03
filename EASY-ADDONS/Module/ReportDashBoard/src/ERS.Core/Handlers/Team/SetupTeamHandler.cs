using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using System.Threading;

using MediatR;

using ERS.Models;
using ERS.Repositories;
using ERS.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System.Text.RegularExpressions;
using System.Linq;

namespace ERS.Handlers
{
    public class SetupTeamHandler : IRequestHandler<SetupTeamCommand, SetupTeamCommandResponse>
    {
        private readonly AppGlobals _appGlobals;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IRepository<Team, string> _teamRepository;
        private readonly IEndpointUrlGenerator _endpointUrlGenerator;
        private readonly IEmailSender _emailSender;
        private readonly IResourceManager _resourceManager;

        private readonly ILogger<SetupTeamHandler> _logger;

        public SetupTeamHandler(
                AppGlobals appGlobals,
                UserManager<ApplicationUser> userManager,
                IRepository<Team, string> teamRepository,
                IEndpointUrlGenerator endpointUrlGenerator,
                IResourceManager resourceManager,
                IEmailSender emailSender,
                ILogger<SetupTeamHandler> logger)
        {
            _appGlobals = appGlobals;
            _userManager = userManager;
            _teamRepository = teamRepository;
            _endpointUrlGenerator = endpointUrlGenerator;
            _emailSender = emailSender;
            _resourceManager = resourceManager;
            _logger = logger;
        }

        public async Task<SetupTeamCommandResponse> Handle(SetupTeamCommand request, CancellationToken cancellationToken)
        {
            string teamId, teamMoniker,teamName;
            Team dbTeam;

            if (_appGlobals.MultiTenancy) {
                //in multi-tenancy mode we check if this team exists 
                //and return an error if the moniker is taken already
                teamId = Guid.NewGuid().ToString();
                teamMoniker = request.TeamMoniker;

                if (string.IsNullOrEmpty(teamMoniker)) {
                    return new SetupTeamCommandResponse {
                        IdentityResult = IdentityResult.Failed(new IdentityError {
                            Code = "TeamMonikerEmpty",
                            Description = "The team moniker (subdomain) must not be empty"
                        })
                    };
                }

                dbTeam = _teamRepository.AsQueryable().FirstOrDefault(t => t.Moniker == teamMoniker);
                if (dbTeam != null) {
                    return new SetupTeamCommandResponse {
                        IdentityResult = IdentityResult.Failed(new IdentityError {
                            Code = "TeamMonikerExists",
                            Description = "This team subdomain already exists"
                        })
                    };
                }
            }
            else {
                teamId = Constants.MainTeamId;
                teamMoniker = Constants.MainTeamMoniker;
                dbTeam = await _teamRepository.FindSingleAsync(teamId);
            }
            teamName = !string.IsNullOrEmpty(request.TeamName) ? request.TeamName : "Team";

            if (dbTeam == null) {
                dbTeam = new Team {
                    Id = teamId,
                    Name = teamName,
                    Moniker = teamMoniker
                };

                await _teamRepository.CreateAsync(dbTeam);
                await _teamRepository.SaveChangesAsync();
            }

            if (!string.IsNullOrEmpty(request.Email)) {
                var contactName = request.ContactName ?? "Admin";

                var user = new ApplicationUser {
                    UserName = request.Email,
                    Email = request.Email,
                    ContactName = contactName,
                    Registered = DateTime.UtcNow,
                    LastLogin = DateTime.UtcNow,
                    TeamId = dbTeam.Id,
                };

                var identityResult = await _userManager.CreateAsync(user, request.Password);
                var response = new SetupTeamCommandResponse {
                    IdentityResult = identityResult,
                    Team = dbTeam,
                    User = user
                };

                if (identityResult.Succeeded) {
                    _logger.LogInformation($"New team created: {dbTeam.Name} ({dbTeam.Moniker})");
                    _logger.LogInformation($"New team admin created: " + user.Email);

                    await _userManager.AddToRoleAsync(user, Constants.Roles.Admin);
                    await _userManager.AddToRoleAsync(user, Constants.Roles.Owner);


                    var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var confirmationUrl = _endpointUrlGenerator.GetEmailConfirmationLink(user.Id, emailConfirmationToken);

                    var content = _resourceManager.GetResourceAsString("TeamRegistrationMessage");
                    if (content != null) {
                        content = content.FillFluentTemplate(new Dictionary<string, string> {
                            { "ServiceName", Constants.ServiceName },
                            { "ContactName", contactName },
                            { "AccountConfirmationUrl", confirmationUrl },
                            { "ServiceContactUrl", Constants.ServiceContactUrl }
                        });
                        var message = new EmailMessage(content);

                        var emailResult = await _emailSender.SendEmailAsync(request.Email, message);
                        if (emailResult.Failed) {
                            response.Warnings.Add(TextResources.ErrorOnEmailSending);
                        }
                    }
                    _appGlobals.NeedSetup = false;
                }
                else {
                    //if operation failed - we remove the team (in MultiTenancy mode only)
                    if (_appGlobals.MultiTenancy && dbTeam != null) {
                        await _teamRepository.DeleteAsync(dbTeam.Id);
                    }
                }
                return response;
            }
            else {
                //if user email is not specified we create only team
                await _teamRepository.SaveChangesAsync();
                return new SetupTeamCommandResponse {
                    IdentityResult = IdentityResult.Success,
                    Team = dbTeam,
                    User = null
                };
            }
        }

        private string GetTeamMoniker(string teamName)
        {
            string notAllowedCharacters = "\\W";

            var regex = new Regex(notAllowedCharacters);

            var result = regex.Replace(teamName.ToLower(), "");
            return !string.IsNullOrEmpty(result) ? result : "team01";
        }
    }

    public class SetupTeamCommandResponse
    { 
        public IdentityResult IdentityResult { get; set; }  
        public List<string> Warnings { get; set; } = new List<string>();
        public Team Team { get; set; }
        public ApplicationUser User { get; set; }

        public bool Succeeded => IdentityResult.Succeeded;

    }

    public class SetupTeamCommand : IRequest<SetupTeamCommandResponse>
    {
        public string TeamName { get; set; }

        public string TeamMoniker { get; set; }

        public string ContactName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }    
    }
}
