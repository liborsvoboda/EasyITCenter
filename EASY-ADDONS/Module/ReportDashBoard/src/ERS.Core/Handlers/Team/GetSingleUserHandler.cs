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
    public class GetSingleUsersHandler : IRequestHandler<GetSingleUserRequest, UserItem>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IRepository<ApplicationUser, string> _userRepo;

        public GetSingleUsersHandler(
            UserManager<ApplicationUser> userManager,
            IRepository<ApplicationUser, string> userRepository)
        {
            _userManager = userManager; 
            _userRepo = userRepository;
        }

        public async Task<UserItem> Handle(GetSingleUserRequest request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByIdAsync(request.UserId);

            var roles = await _userManager.GetRolesAsync(user);
            return new UserItem(user, roles.ToArray());
        }
    }

    public class GetSingleUserRequest : IRequest<UserItem>
    {
        public string UserId { get; set; }

        public GetSingleUserRequest(string id) => UserId = id;
    }
}
