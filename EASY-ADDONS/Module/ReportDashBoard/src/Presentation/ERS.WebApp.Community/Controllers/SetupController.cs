using System;
using System.Threading.Tasks;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using MediatR;

using ERS.Models;
using ERS.ViewModels;
using ERS.Handlers;

namespace ERS.Web
{
    [Route("[controller]/[action]")]
    public class SetupController : Controller
    {
        private readonly AppGlobals _appGlobals;
        private readonly IMediator _mediatr;
        private readonly UserManager<Models.ApplicationUser> _userManager;
        private readonly SignInManager<Models.ApplicationUser> _signInManager;

        public SetupController(
                AppGlobals appGlobals,
                IMediator mediatr,
                UserManager<Models.ApplicationUser> userManager,
                SignInManager<Models.ApplicationUser> signInManager)
        {
            _appGlobals = appGlobals;
            _mediatr = mediatr;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [TempData]
        public string FlashStatusJson { get; set; }

        public IActionResult Index(string returnUrl)
        {
            if (_appGlobals.NeedSetup) {
                return RedirectToAction(nameof(Team), new { ReturnUrl = returnUrl });
            }
            else {
                return RedirectToAction("Account", "Login");
            }
        }
        
        
        /// <summary>
        /// Shows a "Create Team" form
        /// </summary>
        /// <param name="returnUrl"></param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Team(string returnUrl = null)
        {
            if (!_appGlobals.NeedSetup) {
                return this.RedirectToLocal(returnUrl);
            }
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        /// <summary>
        /// Processes "Create Team" form. 
        /// Creates a new team and adds an admin of this team
        /// </summary>
        /// <param name="model">All properties of the new team and its admin</param>
        /// <param name="returnUrl">A return URL on successful operation</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Team(SetupViewModel model, string returnUrl = null)
        {
            if (!_appGlobals.NeedSetup) {
                return this.RedirectToLocal(returnUrl);
            }

            ViewData["ReturnUrl"] = returnUrl;

            if (ModelState.IsValid) {
                var response = await _mediatr.Send(new SetupTeamCommand {
                    TeamName = model.CompanyName,
                    Email = model.Email,
                    Password = model.Password
                });

                if (response.IdentityResult.Succeeded) {
                    if (response.Warnings.Count > 0) {
                        FlashStatusJson = FlashStatus.Warning(response.Warnings[0]).ToJson();
                    }
                    await _signInManager.SignInAsync(response.User, isPersistent: false);
                    return RedirectToAction(nameof(Connection));
                }

                this.AddErrors(response.IdentityResult);
            }

            // If we got this far, something failed, redisplay the form
            return View(model);
        }

        public async Task<IActionResult> Connection()
        {
            await CheckCurrentUserAsync();
            return RedirectToAction(nameof(ConnectionController.EditConnection), "Connection");
        }

        /// <summary>
        /// Checks the existance of the currently logged in user
        /// and performs a sign out if the user does not really exists
        /// (it might occur when the app uses an old cookie)
        /// </summary>
        /// <returns></returns>
        private async Task CheckCurrentUserAsync()
        {
            if (_signInManager.IsSignedIn(User)) {
                var user = await _userManager.GetUserAsync(User);
                if (user == null) {
                    await _signInManager.SignOutAsync();
                }
            }
        }
    }
}
