﻿using IdentityModel.OidcClient;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Xml.Serialization;

namespace EasyITCenter.ControllersExtensions {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("WebApi")]
    public class ServerToolsMinifierApi : Controller {

        private Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        public ServerToolsMinifierApi(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }


        /// <summary>
        /// Minifi FileList And Save As Minify to FilePath
        /// </summary>
        /// <param name="filelist"></param>
        /// <returns></returns>
        [HttpGet("/WebApi/ServerToolsMinifier/MinifyAndSaveMinToPath"), DisableRequestSizeLimit]
        public async Task<string> MinifyAndSaveMinToPath(WebFileList filelist) {
            try {
                filelist.WebFile.ForEach(file => {
                    if (file.WebFileName.ToLower().Split(".").Last() == "js") {
                        file.WebFileContent = NUglify.Uglify.Js(file.WebFileContent).Code;
                    } else if (file.WebFileName.ToLower().Split(".").Last() == "css") {
                        file.WebFileContent = NUglify.Uglify.Css(file.WebFileContent).Code;
                    }

                    System.IO.File.WriteAllText(System.IO.Path.Combine(_hostingEnvironment.WebRootPath,
                        (file.WebFileName.ToLower().Contains(".min.") ? file.WebFileNamePath : file.WebFileNamePath.Replace(file.WebFileNamePath.Split(".").Last(), ".min." + file.WebFileNamePath.Split(".").Last()))),
                        file.WebFileContent);
                });

                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.success.ToString(), RecordCount = filelist.WebFile.Count(), ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "error:" + DataOperations.GetUserApiErrMessage(ex) }); }
        }



        /// <summary>
        /// Minify FileList and Return Back Without Rename
        /// </summary>
        /// <param name="filelist"></param>
        /// <returns></returns>
        [HttpGet("/WebApi/ServerToolsMinifier/MinifyAndReturn"), DisableRequestSizeLimit]
        public async Task<string> MinifyAndReturn(WebFileList filelist) {
            string mimeType = null; byte[] loadedfile; string minFile = null; byte[] fileByteArray = null;
            try {
                filelist.WebFile.ForEach(file => {
                    if (file.WebFileName.ToLower().Split(".").Last() == "js") {
                        file.WebFileContent = NUglify.Uglify.Js(file.WebFileContent).Code;
                    }
                    else if (file.WebFileName.ToLower().Split(".").Last() == "css") {
                        file.WebFileContent = NUglify.Uglify.Css(file.WebFileContent).Code;
                    }
                });

                return JsonSerializer.Serialize(filelist, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) {return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "error:" + DataOperations.GetUserApiErrMessage(ex) }); }
        }



    }
}