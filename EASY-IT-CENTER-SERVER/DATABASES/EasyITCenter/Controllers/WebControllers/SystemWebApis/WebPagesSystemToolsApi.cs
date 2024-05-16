﻿using Humanizer;

namespace EasyITCenter.ServerCoreDBSettings {

    [ApiController]
    [Route("WebApi/WebPages")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class WebPagesSystemToolsApi : ControllerBase {
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;

        public WebPagesSystemToolsApi(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        /// <summary>
        /// Saving Minified File API Allowed Only In Savig Time Api 
        /// Is Hidden Its Called Back From external minifier Tool
        /// </summary>
        /// <param name="rec">The record.</param>
        /// <returns></returns>
        [HttpPost("/WebApi/WebPages/WebAdmin/SaveNewMinifiedFile")]
        [Consumes("application/json")]
        public async Task<string> SaveNewMinifiedFile([FromBody] MinifiedFile rec) {
            try {
                if (CommunicationController.IsAdmin()) {
                    WebCoreFileList data = new();
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().WebCoreFileLists.Where(a => a.FileName == rec.FileName && a.SpecificationType == rec.SpecificationType).First(); }

                    if (data != null) {
                        WebCoreFileList minFile = new() { FileName = data.FileName, Sequence = data.Sequence, SpecificationType = data.SpecificationType, MetroPath = data.MetroPath };
                        
                        if (ToolsOperations.SaveWebSourceFile(ref _hostingEnvironment, ref minFile)) {
                            var resData = new EasyITCenterContext().WebCoreFileLists.Update(data);
                            int result = await resData.Context.SaveChangesAsync();
                        }
                        return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = string.Empty });
                    }
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetSystemErrMessage(ex) }); }
            return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.UnauthorizedRequest.ToString() });
        }





    }
}