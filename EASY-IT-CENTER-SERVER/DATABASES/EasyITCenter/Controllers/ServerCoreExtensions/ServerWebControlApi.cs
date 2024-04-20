namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Database Schema Diagram Controller
    /// </summary>
    /// <seealso cref="Controller"/>
    [Route("ServerControls")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerWebControlApi : ControllerBase {

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