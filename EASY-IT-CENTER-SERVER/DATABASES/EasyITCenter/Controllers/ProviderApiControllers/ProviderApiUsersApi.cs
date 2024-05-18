using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing.Template;
using System.Data.Entity.Core.Metadata.Edm;
using System.Net.Http;
using System.Net.Http.Headers;

namespace EasyITCenter.Controllers {


    [Authorize]
    [ApiController]
    [Route("/ProviderApi/Users")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ProviderApiUsersApi : ControllerBase {

        //TODO Prepare for User folder - copy  MD BOOK , change for user definition any folder


        /// <summary>
        /// For wwwroot folder Update with detect changes and modify static pages
        /// </summary>
        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;

        public ProviderApiUsersApi(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

    }
}