using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

using MediatR;

using ERS.Models;
using ERS.Repositories;
using ERS.Services;

namespace ERS.Handlers
{
    public class GetSingleConnectionHandler : IRequestHandler<GetSingleConnectionRequest, EasyReportConnection>
    {
        private readonly IMediator _mediator;
        private readonly IReadOnlyConnectionRepository _connectionRepo;
        private readonly IConnectionCache _connectionCache;
        private readonly IConnectionUtils _connectionUtils;

        public GetSingleConnectionHandler(
                IMediator mediator,
                IReadOnlyConnectionRepository connectionRepo,
                IConnectionCache connectionCache,
                IConnectionUtils connectionUtils)
        {
            _mediator = mediator;
            _connectionRepo = connectionRepo;
            _connectionCache = connectionCache;
            _connectionUtils = connectionUtils;
        }

        public async Task<EasyReportConnection> Handle(GetSingleConnectionRequest request, CancellationToken cancellationToken)
        {
            var connection = _connectionCache.GetConnection(request.ConnectionId);
            if (connection == null) {
                connection = await _connectionRepo.FindSingleAsync(request.ConnectionId);
                if (connection == null && request.CreateDefaultIfNotExists) {
                    connection = await _mediator.Send(new CreateConnectionCommand(_connectionUtils.GetDefaultConnection()));
                }
                _connectionCache.Invalidate(connection);
            }

            return connection;
        }
    }

    public class GetSingleConnectionRequest : IRequest<EasyReportConnection>
    {
        public string ConnectionId { get; set; }

        public bool CreateDefaultIfNotExists { get; set; } = false;

        public GetSingleConnectionRequest(string connectionId, bool createDefaultIfNotExists = false)
        {
            ConnectionId = connectionId;
            CreateDefaultIfNotExists = createDefaultIfNotExists;
        }
    }
}
