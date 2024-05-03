using CommandLine.Text;
using EasyITCenter.ServerCoreStructure;
using FastReport;
using FastReport.Web;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Palmmedia.ReportGenerator.Core.Reporting;
using ServiceStack;
using static ServerCorePages.ViewerReportFileModel;
namespace ServerCorePages {


    /// <summary>
    /// HTML Editor TINYMCE
    /// </summary>
    public class ViewerReportFileModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;
        public static string result;
        public ReportList reportList = new ReportList();


        public class ReportList {
            public WebReport WebReport { get; set; } = new WebReport();
            public List<string> ReportNameList { get; set; } = new List<string>();
            public List<WebReport> ReportContent { get; set; } = new List<WebReport>();
        }


        public void OnGet() {


            //Standalone Check Token
            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }


            //Show Examples OR TODO DB Report
            string? requestedUrlPath = ""; string fileContent = null;
            try {
                try { requestedUrlPath = ((string?)this.HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }
                if (requestedUrlPath != null && requestedUrlPath.ToLower().EndsWith(".frx")) { /*TODO LOAD FROM DB BY UNIQUE NAME AFTER SELECT DELETE FROM DB*/}

                else {//Show Examples
                    var exampleFiles = FileOperations.GetPathFiles(Path.Combine(ServerRuntimeData.WebRoot_path, "ServerCoreTools", "Viewers", "Report", "Example"), "*.frx", SearchOption.TopDirectoryOnly);

                    string param = this.Request.Query.FirstOrDefault(a => a.Key == "ReportId").Value;
                    int? reportId = param != null && int.TryParse(param, out int intParam) ? intParam : null;

                    exampleFiles.ForEach(example => {
                        try {
                            if (reportList.WebReport == null && reportId != null) { reportList.WebReport = new WebReport(); reportList.WebReport.Report.Load(exampleFiles[(int)reportId]); }
                            else if (reportList.WebReport == null) { reportList.WebReport = new WebReport(); reportList.WebReport.Report.Load(example); }

                            var test = new WebReport(); test.Report.Load(exampleFiles[(int)reportId]); reportList.ReportContent.Add(test);
                        } catch (Exception ex) { }

                        reportList.ReportNameList.Add(Path.GetFileName(example)); 
                    });
                }

                //Example Show from File
                //var webReport = new WebReport();
                //webReport.Report.Load("path/to/report.frx");
                //return View(webReport);

                //Example Save
                //Stream reportForSave = Request.Body; string pathToSave = Path.Combine(webRootPath, "DesignedReports", reportName);
                //if (!Directory.Exists(pathToSave)) { Directory.CreateDirectory(Path.GetDirectoryName(pathToSave)); }
                //using (FileStream file = new FileStream(pathToSave, FileMode.Create)) { reportForSave.CopyToAsync(file); }

            } catch { }


        }


        /// <summary>
        /// Change Report By Selection
        /// </summary>
        /// <param name="reportName"></param>
        public bool LoadSelectedReport(int reportIndex) {
            try {
                reportList.WebReport = reportList.ReportContent[reportIndex];
            } catch { }
            return true;

        }

    }
}