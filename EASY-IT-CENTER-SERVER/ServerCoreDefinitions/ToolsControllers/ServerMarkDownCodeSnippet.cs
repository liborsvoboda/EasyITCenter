using MarkdownSnippets;
using OpenGraphNet;

namespace EasyITCenter.ToolsControllers {

    /// <summary>
    /// Server Email sender Api for logged Communication
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [ApiController]
    [Route("ServerServices")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerMarkDownCodeSnippet : ControllerBase {

        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        public ServerMarkDownCodeSnippet(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }


        /// <summary>
        /// Documentation https://ogp.me/
        /// Tool For Extend Loaded Html By Add Custom Metadata by Format OpenGraph
        /// TODO Implement Inserting Metadata or How To Use
        /// Its Description Content as Metadata for Facebokk etc
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpGet("/ServerServices/GenerateCodeMarkdown")]
        public async Task<IActionResult> GenerateCodeMarkdown([FromBody] WebUrlRequest request) {
            try {
                var files = Directory.EnumerateFiles(_hostingEnvironment.ContentRootPath, "*.cs", SearchOption.AllDirectories);
                var snippets = FileSnippetExtractor.Read(files);
                return null;
            } catch { }
            return null;
        }
    }
}