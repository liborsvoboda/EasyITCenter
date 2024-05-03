using System;
using System.Linq;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using MediatR;

using ERS.Services;
using ERS.Repositories;
using ERS.Models;
using ERS.ViewModels;
using ERS.Handlers;

namespace ERS.Web
{
    [Authorize]
    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly AppGlobals _appGlobals;
        private readonly IMediator _mediator;
        private readonly UserManager<Models.ApplicationUser> _userManager;
        private readonly SignInManager<Models.ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IEmailSender _emailSender;
        private readonly IResourceManager _resourceManager;
        private readonly ILogger _logger;

        public AccountController(
                AppGlobals appGlobals,
                IMediator mediator,
                UserManager<Models.ApplicationUser> userManager,
                SignInManager<Models.ApplicationUser> signInManager,
                RoleManager<IdentityRole> roleManager,
                IResourceManager resourceManager,
                IEmailSender emailSender,
                ILogger<AccountController> logger)
        {
            _appGlobals = appGlobals;
            _mediator = mediator;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _emailSender = emailSender;
            _resourceManager = resourceManager;
            _logger = logger;
        }

        [TempData]
        public string FlashStatusJson { get; set; }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string returnUrl = null) 
        {
            if (_signInManager.IsSignedIn(User))
                return RedirectToAction("Index", "Home");

            if (_appGlobals.NeedSetup)
                return this.RedirectToSetup();           


            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> LoginAsGuest(string returnUrl = null)
        {
            if (_signInManager.IsSignedIn(User))
                return RedirectToAction("Index", "Home");

            if (!_appGlobals.AllowGuestAccess)
                return RedirectToAction("Login", "Account");

            var adminUser = (await _userManager.GetUsersInRoleAsync(Constants.Roles.Owner)).FirstOrDefault();
            await CreateGuestUserIfNotExistsAsync(HttpContext, adminUser.TeamId);

            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            var guestUsers = await _userManager.GetUsersInRoleAsync(Constants.Roles.Guest);
            await _signInManager.SignInAsync(guestUsers.First(), true);

            return this.RedirectToLocal(returnUrl);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null) 
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid) {
                var user = await _userManager.FindByNameAsync(model.Email);
                if (user == null) {
                    ModelState.AddModelError(string.Empty, TextResources.ErrorInvalidLoginAttempt);
                    return View(model);
                }

                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(user, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded) {
                    user.LastLogin = DateTime.UtcNow;
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);
                    _logger.LogInformation($"User {user.Email} has logged in.");

                    return this.RedirectToLocal(returnUrl);
                }
                if (result.RequiresTwoFactor) {
                    return RedirectToAction(nameof(LoginWith2fa), new { returnUrl, model.RememberMe });
                }
                if (result.IsLockedOut) {
                    _logger.LogWarning("User account is locked: " + user.Email);
                    return RedirectToAction(nameof(Lockout));
                }
                else {
                    ModelState.AddModelError(string.Empty, TextResources.ErrorInvalidLoginAttempt);
                    return View(model);
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> LoginWith2fa(bool rememberMe, string returnUrl = null) 
        {
            if (_appGlobals.NeedSetup)
                return this.RedirectToSetup();

            // Ensure the user has gone through the username & password screen first
            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();

            if (user == null) {
                throw new ApplicationException($"Unable to load two-factor authentication user.");
            }

            var model = new LoginWith2faViewModel { RememberMe = rememberMe };
            ViewData["ReturnUrl"] = returnUrl;

            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginWith2fa(LoginWith2faViewModel model, bool rememberMe, string returnUrl = null) 
        {
            if (!ModelState.IsValid) {
                return View(model);
            }

            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null) {
                throw new ApplicationException($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            var authenticatorCode = model.TwoFactorCode.Replace(" ", string.Empty).Replace("-", string.Empty);

            var result = await _signInManager.TwoFactorAuthenticatorSignInAsync(authenticatorCode, rememberMe, model.RememberMachine);

            if (result.Succeeded) {
                _logger.LogInformation("User with ID {UserId} logged in with 2fa.", user.Id);
                return this.RedirectToLocal(returnUrl);
            }
            else if (result.IsLockedOut) {
                _logger.LogWarning("User with ID {UserId} account locked out.", user.Id);
                return RedirectToAction(nameof(Lockout));
            }
            else {
                _logger.LogWarning("Invalid authenticator code entered for user with ID {UserId}.", user.Id);
                ModelState.AddModelError(string.Empty, "Invalid authenticator code.");
                return View();
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> LoginWithRecoveryCode(string returnUrl = null) 
        {
            // Ensure the user has gone through the username & password screen first
            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null) {
                throw new ApplicationException($"Unable to load two-factor authentication user.");
            }

            ViewData["ReturnUrl"] = returnUrl;

            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginWithRecoveryCode(LoginWithRecoveryCodeViewModel model, string returnUrl = null) 
        {
            if (!ModelState.IsValid) {
                return View(model);
            }

            var user = await _signInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null) {
                throw new ApplicationException($"Unable to load two-factor authentication user.");
            }

            var recoveryCode = model.RecoveryCode.Replace(" ", string.Empty);

            var result = await _signInManager.TwoFactorRecoveryCodeSignInAsync(recoveryCode);

            if (result.Succeeded) {
                _logger.LogInformation("User with ID {UserId} logged in with a recovery code.", user.Id);
                return this.RedirectToLocal(returnUrl);
            }
            if (result.IsLockedOut) {
                _logger.LogWarning("User with ID {UserId} account locked out.", user.Id);
                return RedirectToAction(nameof(Lockout));
            }
            else {
                _logger.LogWarning("Invalid recovery code entered for user with ID {UserId}", user.Id);
                ModelState.AddModelError(string.Empty, "Invalid recovery code entered.");
                return View();
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Lockout() 
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [AllowAnonymous]
        public async Task<IActionResult> Logout() 
        {
            if (User.Identity.IsAuthenticated) {
                await _signInManager.SignOutAsync();
                _logger.LogInformation("User logged out.");
            }

            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public IActionResult ExternalLogin(string provider, string returnUrl = null) 
        {
            // Request a redirect to the external login provider.
            var redirectUrl = Url.Action(nameof(ExternalLoginCallback), "Account", new { returnUrl });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return Challenge(properties, provider);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ExternalLoginCallback(string returnUrl = null, string remoteError = null) 
        {
            if (remoteError != null) {
                FlashStatusJson = FlashStatus.Error($"Error from external provider: {remoteError}").ToJson();

                return RedirectToAction(nameof(Login));
            }
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null) {
                return RedirectToAction(nameof(Login));
            }

            // Sign in the user with this external login provider if the user already has a login.
            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
            if (result.Succeeded) {
                _logger.LogInformation("User logged in with {Name} provider.", info.LoginProvider);
                return this.RedirectToLocal(returnUrl);
            }
            if (result.IsLockedOut) {
                return RedirectToAction(nameof(Lockout));
            }
            else {
                // If the user does not have an account, then ask the user to create an account.
                ViewData["ReturnUrl"] = returnUrl;
                ViewData["LoginProvider"] = info.LoginProvider;
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                return View("ExternalLogin", new ExternalLoginViewModel { Email = email });
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ExternalLoginConfirmation(ExternalLoginViewModel model, string returnUrl = null) 
        {
            if (ModelState.IsValid) {
                // Get the information about the user from the external login provider
                var info = await _signInManager.GetExternalLoginInfoAsync();
                if (info == null) {
                    throw new ApplicationException("Error loading external login information during confirmation.");
                }
                var user = new Models.ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await _userManager.CreateAsync(user);
                if (result.Succeeded) {
                    result = await _userManager.AddLoginAsync(user, info);
                    if (result.Succeeded) {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        _logger.LogInformation("User created an account using {Name} provider.", info.LoginProvider);
                        return this.RedirectToLocal(returnUrl);
                    }
                }
                this.AddErrors(result);
            }

            ViewData["ReturnUrl"] = returnUrl;
            return View(nameof(ExternalLogin), model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code) 
        {
            if (userId == null || code == null) {
                return RedirectToAction("Index", "Home");
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) {
                throw new ApplicationException($"Unable to load user with ID '{userId}'.");
            }

          
            var result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded) {
                return View("EmailConfirmed");
            }

            return View("Error");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ForgotPassword() 
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordViewModel model) 
        {
            if (ModelState.IsValid) {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null) {
                    return RedirectToAction(nameof(ForgotPasswordConfirmation));
                }

                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                var resetPasswordUrl = Url.ResetPasswordCallbackLink(user.Id, code, Request.Scheme);
             
                var content = _resourceManager.GetResourceAsString("ResetPasswordMessage");
                if (content != null) {
                    content = content.FillFluentTemplate(new Dictionary<string, string> {
                        { "ContactName", user.ContactName },
                        { "Url", resetPasswordUrl}
                    });

                    var message = new EmailMessage(content);

                    var emailResult = await _emailSender.SendEmailAsync(model.Email, message);
                    if (emailResult.Failed) {
                        FlashStatusJson = FlashStatus.Error(TextResources.ErrorOnEmailSending).ToJson();
                    }
                }

                return RedirectToAction(nameof(ForgotPasswordConfirmation));
            }

            // If we got this far, something failed, so, redisplay the page
            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ForgotPasswordConfirmation() 
        {
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ResetPassword(string code = null) 
        {
            if (code == null) {
                throw new ApplicationException("A code must be supplied for password reset.");
            }
            var model = new ResetPasswordViewModel { Code = code };
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model) 
        {
            if (!ModelState.IsValid) {
                return View(model);
            }
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null) {
                // Don't reveal that the user does not exist
                return RedirectToAction(nameof(ResetPasswordConfirmation));
            }
            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
            if (result.Succeeded) {
                return RedirectToAction(nameof(ResetPasswordConfirmation));
            }
            this.AddErrors(result);
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult ResetPasswordConfirmation() 
        {
            return View();
        }


        [HttpGet]
        [AllowAnonymous]
        public IActionResult AccessDenied() 
        {
            return View();
        }

        private async Task CreateGuestUserIfNotExistsAsync(HttpContext httpContext, string teamId)
        {
            if (_appGlobals.AllowGuestAccess) {
                var guestUser = (await _userManager.GetUsersInRoleAsync(Constants.Roles.Guest)).FirstOrDefault();
                if (guestUser == null) {
                    var commandResponse = await _mediator.Send(new CreateUserCommand {
                        Id = teamId + "-guest",
                        TeamId = teamId,
                        Email = "guest@" + teamId,
                        ContactName = "Guest",
                        Roles = new string[] { Constants.Roles.Guest, Constants.Roles.Consumer },
                        SendEmail = false
                    });

                    if (!commandResponse.Succeeded) {
                        throw new InvalidOperationException("Can't create the guest user.\n Reason: " 
                                                                + commandResponse.IdentityResult.ToString());
                    }
                }
            }
        }
    }
}