using System.Diagnostics;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

using ERS.Services;
using ERS.Models;

namespace ERS.Web
{
    public class HomeController : Controller 
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public HomeController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            if (_signInManager.IsSignedIn(User)) {
                return RedirectToAction("Index", "Reports");
            }

            return View();
        }

        public IActionResult Privacy() 
        {
            return View();
        }

        public IActionResult Error() 
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
