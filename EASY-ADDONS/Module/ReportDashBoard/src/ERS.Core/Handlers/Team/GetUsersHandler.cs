using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Identity;

using MediatR;

using ERS.Models;
using ERS.Repositories;

namespace ERS.Handlers
{
    public class GetUsersHandler : IRequestHandler<GetUsersRequest, GetUsersResponse>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IRepository<ApplicationUser, string> _userRepo;

        public GetUsersHandler(
            UserManager<ApplicationUser> userManager,
            IRepository<ApplicationUser, string> userRepository)
        {
            _userManager = userManager; 
            _userRepo = userRepository;
        }

        public async Task<GetUsersResponse> Handle(GetUsersRequest request, CancellationToken cancellationToken)
        {
            var response = new GetUsersResponse();
            var users = _userRepo.AsQueryable()
                    .OrderBy(u => u.Registered)
                    .ToList();

            foreach (var user in users) {
                var roles = await _userManager.GetRolesAsync(user);
                if (roles.Contains(Constants.Roles.Guest))
                    continue;

                response.Users.Add(new UserItem(user, roles.ToArray()));
            }

            return response;
        }
    }

    public class GetUsersRequest : IRequest<GetUsersResponse>
    {
    }

    public class GetUsersResponse
    {
        public IList<UserItem> Users { get; set; } = new List<UserItem>();
    }
}
