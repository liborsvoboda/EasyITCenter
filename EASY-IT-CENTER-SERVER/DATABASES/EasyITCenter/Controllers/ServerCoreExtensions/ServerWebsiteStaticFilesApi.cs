using System.Net.Http.Headers;

namespace UploadFilesServer.Controllers {

    [Route("/WebApi/StaticFiles")]
    [ApiController]
    public class ServerWebsiteStaticFilesApi : ControllerBase {
        private readonly ILogger<ServerWebsiteStaticFilesApi> _logger;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ServerWebsiteStaticFilesApi(ILogger<ServerWebsiteStaticFilesApi> logger,
                              IHttpContextAccessor httpContextAccessor) {
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Upload() {
            try {
                var file = Request.Form.Files[0];
                string folderName = Path.Combine(Directory.GetCurrentDirectory(), "Images");
                if (!Directory.Exists(folderName)) {
                    Directory.CreateDirectory(folderName);
                    _logger.LogInformation("New folder created:" + folderName);
                }

                if (file.Length > 0) {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(folderName, fileName);
                    _logger.LogInformation("Temp file path before creation:" + fullPath);
                    using (var stream = new FileStream(fullPath, FileMode.Create)) {
                        file.CopyTo(stream);
                    }

                    string schema = Request.Scheme;
                    string imageUrl = schema + "://" + _httpContextAccessor.HttpContext.Request.Host.Value + "/Images/" + fileName;
                    _logger.LogInformation("File upload success, created image url:" + imageUrl);
                    return Ok(new { imageUrl });
                }
                else {
                    _logger.LogInformation("Bad request");
                    return BadRequest();
                }
            } catch (Exception ex) {
                _logger.LogInformation("Error in creating file:" + ex);
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}