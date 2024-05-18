namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Routing Rulles
    /// </summary>
    [AllowAnonymous]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerApiGlobalApiRulesControllers : ControllerBase {


        /// <summary>
        /// StartUp Web Redirection
        /// </summary>
        /// <returns></returns>
        [HttpGet("/")]
        public IActionResult Index() {
            return ServerConfigSettings.RedirectOnPageNotFound ?
                new RedirectResult(ServerConfigSettings.RedirectPath) : 
                new RedirectResult(ServerConfigSettings.RedirectPath.StartsWith("/") ? ServerConfigSettings.RedirectPath : "/" + ServerConfigSettings.RedirectPath);
        }



        [HttpGet("/ServerControls/NonExistPage")]
        public ContentResult NonExistPage() {

            string nonExistPageFinal = new EasyITCenterContext().ServerModuleAndServiceLists.
                Where(a => a.Name.ToLower() == "NonExistPage".ToLower()).FirstOrDefault().CustomHtmlContent;
            if (nonExistPageFinal != null) {
                base.StatusCode(StatusCodes.Status404NotFound);
                return base.Content(nonExistPageFinal, "text/html");
            } else {
                base.StatusCode(StatusCodes.Status404NotFound); 
                return base.Content("Missing \"NonExistPage\" Template 404 in Server Modules.");
            }
        }




    }
}