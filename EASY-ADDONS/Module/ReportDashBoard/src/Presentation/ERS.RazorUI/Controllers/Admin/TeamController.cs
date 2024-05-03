using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

using Newtonsoft.Json;
using MediatR;

using ERS.Models;
using ERS.Services;
using ERS.Repositories;
using ERS.ViewModels;
using ERS.Handlers;

namespace ERS.Web
{
    [Authorize(Roles = Constants.Roles.Admin)]
    [Route("Admin/Team")]
    public class TeamController : Controller 
    {
        private readonly IMediator _mediator;
        private readonly RoleManager<IdentityRole> _roleManager;

        [TempData]
        public string FlashStatusJson { get; set; }

        public TeamController(IMediator mediator, RoleManager<IdentityRole> roleManager)
        {
            _mediator = mediator;
            _roleManager = roleManager;
        }

        public async Task<IActionResult> Index() 
        {
            var response = await _mediator.Send(new GetUsersRequest());

            var users = response.Users.ToList();

            return View("Users", users);
        }


        [HttpGet("AddUser")]
        public async Task<IActionResult> AddUser(string returnUrl = null) 
        {
            ViewBag.Roles = new SelectList(await GetAvailableRolesAsync(), "Name", "Name");
            return View();
        }

        [HttpPost("AddUser")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddUser([FromServices] IOptions<IdentityOptions> identityOptions, 
                                    AddUserViewModel model, string returnUrl = null) 
        {
            if (ModelState.IsValid) {
                var password = IdentityUtils.GeneratePassword(identityOptions.Value.Password);

                var response = await _mediator.Send(new CreateUserCommand {
                    Email = model.Email,
                    ContactName = model.ContactName,
                    Password = password,
                    Roles = new string[] { model.Role }
                });

                if (response.IdentityResult.Succeeded) {
                    if (response.Warnings.Count > 0) {
                        FlashStatusJson = FlashStatus.Warning(response.Warnings[0]).ToJson();
                    }

                    if (response.EmailWasSent) {
                        FlashStatusJson = new FlashStatus {
                            Kind = FlashStatusKind.Dialog,
                            Message = "A new user has been added!",
                            Info = $"The confirmation message was sent to '{model.Email}'. "
                                            + "If the email does not arrive in 5-10 minutes, please ask your colleague to check the Spam (or Junk) folder "
                                            + "and to remove the message from there using 'Not Spam' ('Not Junk') button."
                        }.ToJson();
                    }
                    return RedirectToAction(nameof(Index));
                }

                this.AddErrors(response.IdentityResult);           
            }

            ViewBag.Roles = new SelectList(await GetAvailableRolesAsync(), "Name", "Name");

            return View(model);
        }

        [HttpGet("EditUser/{id}")]
        public async Task<IActionResult> EditUser(string id, string returnUrl = null) 
        {
            var userItem = await _mediator.Send(new GetSingleUserRequest(id));

            if (userItem == null) {
                return StatusCode((int)HttpStatusCode.NotFound, $"User {id} not found");
            }

            var model = new UserInfoViewModel {
                Id = userItem.Id,
                UserName = userItem.UserName,
                Email = userItem.Email,
                ContactName = userItem.ContactName,
                Role = userItem.Roles.FirstOrDefault(),
            };

            ViewBag.Roles = new SelectList(await GetAvailableRolesAsync(), "Name", "Name");
            return View(model);
        }

        [HttpPost("EditUser/{id}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditUser(string id, UserInfoViewModel model) 
        {
            try {
                if (ModelState.IsValid) {
                    var request = new UpdateUserCommand {
                        Id = id,
                        ContactName = model.ContactName,
                        Email = model.Email,
                        Roles = new string[] { model.Role }
                    };

                    if (!string.IsNullOrEmpty(model.Password) && !string.IsNullOrEmpty(model.ConfirmPassword)) {
                        if (model.Password != model.ConfirmPassword) {
                            throw new TeamActionException("Passwords don't match");
                        }

                        request.Password = model.Password;
                    }

                    var response = await _mediator.Send(request);

                    if (response.Succeeded) {
                        return RedirectToAction(nameof(Index));
                    }
                    else {
                        this.AddErrors(response.IdentityResult);
                    }
                }
            }
            catch (Exception ex) {
                ModelState.AddModelError(ex.GetType().Name, ex.Message);
            }

            ViewBag.Roles = new SelectList(await GetAvailableRolesAsync(), "Name", "Name");
            return View();
        }

        [HttpGet("DeleteUser")]
        public async Task<IActionResult> DeleteUser(string id) 
        {
            var userItem = await _mediator.Send(new GetSingleUserRequest(id));

            if (userItem == null) {
                return StatusCode((int)HttpStatusCode.NotFound, $"User {id} not found or you don't have access");
            }

            return View(userItem);
        }

        [HttpPost("DeleteUser")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteUser(UserItem model) 
        {
            await _mediator.Send(new DeleteUserCommand(model.Id));            
            return RedirectToAction(nameof(Index));
        }

        private Task<List<IdentityRole>> GetAvailableRolesAsync() 
        {
            return _roleManager.Roles
                .Where(role => role.Name != Constants.Roles.Owner && role.Name != Constants.Roles.Guest)
                .ToListAsync();
        }
    }

    public class TeamActionException : Exception
    {
        public TeamActionException(string message) : base(message)
        {
        }
    }
}