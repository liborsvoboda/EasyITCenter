
using ERS.Models;

namespace ERS.Handlers
{
    public class ReportRequestResponse
    {
        public ReportRequestResult Result { get; set; } = ReportRequestResult.Success;
        public Report Report { get; set; }

        public ReportRequestResponse(Report report)
        {
            Report = report;
        }

        public ReportRequestResponse(ReportRequestResult status)
        {
            Report = null;
            Result = status;
        }

        public bool Succeeded => (Result == ReportRequestResult.Success);
    }

    public enum ReportRequestResult
    {
        Success = 0,
        NotFound = 11,
        NonAuthorized = 12
    }
}
