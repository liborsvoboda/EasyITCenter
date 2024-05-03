
using MediatR;

using ERS.Models;

namespace ERS.Handlers
{
    public class BaseReportCommand : IRequest<ReportRequestResponse>
    {
        public string Id { get; set; }

        public string ConnectionId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
        
        public bool? IsShared { get; set; }  

        public string QueryJson { get; set; }

        public ReportKind? Kind { get; set; } = null;
    }
}
