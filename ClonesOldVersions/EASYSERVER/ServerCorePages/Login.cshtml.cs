using EASYDATACenter.DBModel;
using EASYDATACenter.ServerCoreDefinition;
using k8s.KubeConfigModels;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class LoginModel : PageModel {
        private string _token;
        private readonly ILogger<LoginModel> _logger;
        public LoginModel(ILogger<LoginModel> logger) {
            _logger = logger;
        }
        
        //[HttpPost]
        //public ActionResult<bool> YourAction(ServerWebPagesLogin model) {
        //    return true;
        //}

        public void OnGet() {
          //  _token = ViewData.Token
        }
    }
}