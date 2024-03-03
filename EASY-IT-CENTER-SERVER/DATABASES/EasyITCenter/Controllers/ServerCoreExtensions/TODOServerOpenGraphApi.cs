using OpenGraphNet;

namespace EasyITCenter.ServerCoreDBSettings {

    /// <summary>
    /// Server Email sender Api for logged Communication
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [ApiController]
    [Route("OpenGraph")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerOpenGraphApi : ControllerBase {

        /// <summary>
        /// Documentation https://ogp.me/
        /// Tool For Extend Loaded Html By Add Custom Metadata by Format OpenGraph
        /// TODO Implement Inserting Metadata or How To Use
        /// Its Description Content as Metadata for Facebokk etc
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("/OpenGraph/GetFromUrl")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetFromUrl([FromBody] WebUrlRequest request) {
            try {
                OpenGraph graph = await OpenGraph.ParseUrlAsync(request.Url);
                var response = File(Encoding.UTF8.GetBytes(graph.OriginalHtml), MimeTypes.GetMimeType("index.html"), "index.html");
                return response;
            } catch { }
            return null;
        }
    }
}