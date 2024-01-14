using System.Xml.Serialization;

namespace EasyITCenter.ControllersExtensions {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("WebApi")]
    public class ServerCorePostFileRotatorApi : Controller {


        /// <summary>
        ///  WebApi ContentTool SubmitRotator
        /// </summary>
        /// <param name="filename"></param>
        /// <returns></returns>
        [HttpGet("/WebApi/GetApiFileRotator/{filename}"), DisableRequestSizeLimit]
        public async Task<IActionResult> GetApiFileRotator(string filename) {
            try {
                 byte[] fileArray = ServerRuntimeData.FileRotatorRuntineLibrary.FirstOrDefault(a => a.Key.ToString() == filename).Value as byte[];

                ServerRuntimeData.FileRotatorRuntineLibrary.Remove(filename);
                return File(fileArray, MimeTypes.GetMimeType(filename), filename);
            }  catch (Exception ex) { return BadRequest(new string[] { "error:" + DataOperations.GetUserApiErrMessage(ex), "application/json" }); }  
        }



        /// <summary>
        /// WebApi ConentTool WebBuilder File Responser
        /// </summary>
        /// <returns></returns>
        [HttpPost("/WebApi/PostApiFileRotator"), DisableRequestSizeLimit]
        public async Task<IActionResult> PostApiFileRotator(List<IFormFile> files) {
            string mimeType = null; byte[] loadedfile; string stringFile = null; byte[] fileByteArray = null;
            try {
                foreach (var formFile in Request.Form.Files) {
                    mimeType = MimeTypes.GetMimeType(formFile.FileName);
                    using (var ms = new MemoryStream()) {
                        formFile.CopyTo(ms);
                        fileByteArray = ms.ToArray();
                        stringFile = Convert.ToBase64String(fileByteArray);
                    }
                }

                string uniqueFilename = DataOperations.RandomString(20) + "." + mimeType.Split("/")[1];
                IDictionary<object, object> detail = new Dictionary<object, object> {
                    { "filename", uniqueFilename },
                    //{ "url", $"{Request.Scheme}://{Request.Host.Value}" + "/WebApi/GetApiFileRotator" },
                    { "url", "/WebApi/GetApiFileRotator/" + uniqueFilename },
                    { "name", "image" },
                    { "size", stringFile.Length },
                    { "image", fileByteArray },
                    { "file",  File(fileByteArray, mimeType, DataOperations.RandomString(20) + "." + mimeType.Split("/")[1]) }
                }; 
                
                ServerRuntimeData.FileRotatorRuntineLibrary.Add(uniqueFilename, fileByteArray);
                return Ok(JsonSerializer.Serialize(detail));
            } catch (Exception ex) { return BadRequest(new string[] { "error:" + DataOperations.GetUserApiErrMessage(ex), "application/json" }); }
        }


        /// <summary>
        /// WebApi ConentTool WebBuilder File Responser
        /// </summary>
        /// <returns></returns>
        [HttpPost("/WebApi/PutApiFileRotator"), DisableRequestSizeLimit]
        public async Task<IActionResult> PutApiFileRotator(List<IFormFile> files) {
            string mimeType = null; byte[] loadedfile; string stringFile = null; byte[] fileByteArray = null;
            try {
                return Ok(JsonSerializer.Serialize("Why"));
            } catch (Exception ex) { return BadRequest(new string[] { "error:" + DataOperations.GetUserApiErrMessage(ex), "application/json" }); }
        }
        
    }
}