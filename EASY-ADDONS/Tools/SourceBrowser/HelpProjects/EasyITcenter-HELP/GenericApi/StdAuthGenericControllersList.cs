using EasyITCenter.Services;

//System Controllers Definitions
namespace EasyITCenter.ServerCoreDBSettings {
    /* Example
    API URL is: http://localhost:8000/ServerGenericAuthApi/SystemParameterList
    [Authorize]
    [Authorize(Roles="members,admin")]
    [Route("ServerGenericAuthApi/[controller]")]
    [ApiController]
    public class SystemParameterListController : AuthGenericProviderApi<EasyITCenterContext, SystemParameterList, int> {
        public SystemParameterListController(IRepositoryAsync<EasyITCenterContext, SystemParameterList> repo) : base(repo) { }
    }*/

    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class SolutionWebsiteListController : StdAuthGenericProviderApi<EasyITCenterContext, SolutionWebsiteList, int> {

        public SolutionWebsiteListController(IRepositoryAsync<EasyITCenterContext, SolutionWebsiteList> repo) : base(repo) {
        }
    }

    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class SolutionStaticFileListController : StdAuthGenericProviderApi<EasyITCenterContext, SolutionStaticFileList, int> {

        public SolutionStaticFileListController(IRepositoryAsync<EasyITCenterContext, SolutionStaticFileList> repo) : base(repo) {
        }
    }


    /*
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class SolutionStaticFilePathListController : StdAuthGenericProviderApi<EasyITCenterContext, SolutionStaticFilePathList, int> {

        public SolutionStaticFilePathListController(IRepositoryAsync<EasyITCenterContext, SolutionStaticFilePathList> repo) : base(repo) {
        }
    }
    */

    [Authorize(Roles = "admin")]
    [Route("[controller]")]
    [ApiController]
    public class ServerModuleAndServiceListController : StdAuthGenericProviderApi<EasyITCenterContext, ServerModuleAndServiceList, int> {

        public ServerModuleAndServiceListController(IRepositoryAsync<EasyITCenterContext, ServerModuleAndServiceList> repo) : base(repo) {
        }
    }


    [Authorize(Roles = "admin")]
    [Route("[controller]")]
    [ApiController]
    public class SystemModuleListController : StdAuthGenericProviderApi<EasyITCenterContext, SystemModuleList, int> {

        public SystemModuleListController(IRepositoryAsync<EasyITCenterContext, SystemModuleList> repo) : base(repo) {
        }
    }

    
}