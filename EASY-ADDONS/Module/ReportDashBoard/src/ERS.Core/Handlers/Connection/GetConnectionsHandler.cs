using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

using MediatR;

using ERS.Models;
using ERS.Repositories;

namespace ERS.Handlers
{
    public class GetConnectionsHandler : IRequestHandler<GetConnectionsRequest, GetConnectionsResponse>
    {
        private readonly IReadOnlyConnectionRepository _connectionRepo;

        public GetConnectionsHandler(IReadOnlyConnectionRepository connectionRepo)
        {
            _connectionRepo = connectionRepo;
        }

        public async Task<GetConnectionsResponse> Handle(GetConnectionsRequest request, CancellationToken cancellationToken)
        {
            return new GetConnectionsResponse {
                Connections = await _connectionRepo.ToListAsync()
            };
        }
    }

    public class GetConnectionsRequest : IRequest<GetConnectionsResponse>
    {
    }

    public class GetConnectionsResponse
    {
        public IEnumerable<EasyReportConnection> Connections { get; set; }
    }
}
