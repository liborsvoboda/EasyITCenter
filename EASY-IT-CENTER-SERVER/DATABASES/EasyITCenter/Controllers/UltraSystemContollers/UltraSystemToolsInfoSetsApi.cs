using HtmlAgilityPack;
using Markdig.Renderers.Docx;
using Markdig;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging.Abstractions;
using SharpCompress.Common;
using System.IO.Compression;
using Westwind.AspNetCore.Markdown;
using Pek.Markdig.HighlightJs;
using Markdown = Westwind.AspNetCore.Markdown.Markdown;

namespace EasyITCenter.ServerCoreDBSettings {


    /// <summary>
    ///  WebPages Knihovna API pro Nastroje 
    /// </summary>
    [Authorize]
    [ApiController]
    [Route("UltraSystemControl")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class UltraSystemToolsInfoSetsApi : ControllerBase {


        [HttpGet("/WebApi/WebDocumentation/WebToolList")]
        public async Task<string> GetWebToolList() {
            try {
                //if (CommunicationController.IsAdmin()) {
                List<ServerToolPanelDefinitionList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().ServerToolPanelDefinitionLists.Include(a => a.ToolType)
                            .Where(a => a.ToolType.Id == 9).OrderBy(a => a.ToolType.Sequence).ToList();
                }

                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetSystemErrMessage(ex) }); }
        }

    }
}