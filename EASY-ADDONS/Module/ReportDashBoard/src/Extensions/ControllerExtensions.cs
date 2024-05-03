using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ERS
{
    public static class ControllerExtensions
    {
        public static void AddErrors(this Controller controller, IdentityResult result)
        {
            foreach (var error in result.Errors) {
                controller.ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        public static IActionResult RedirectToLocal(this Controller controller, string returnUrl, 
                            string defaultControllerName = "Home", string defaultActionName = "Index")
        {
            if (controller.Url.IsLocalUrl(returnUrl)) {
                return controller.Redirect(returnUrl);
            }
            else {
                return controller.RedirectToAction(defaultActionName, defaultControllerName);
            }
        }

        public static IActionResult RedirectToSetup(this Controller controller)
        {
            return controller.RedirectToAction("Index", "Setup");
        }
    }
}
