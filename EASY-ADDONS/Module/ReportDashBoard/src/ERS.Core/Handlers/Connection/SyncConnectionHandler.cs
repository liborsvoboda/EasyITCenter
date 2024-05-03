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
    public class SyncConnectionHandler : IRequestHandler<SyncConnectionCommand, EasyReportConnection>
    {
        private readonly IConnectionRepository _connectionRepo;
        private readonly IConnectionUtils _connectionUtils;
        private readonly IConnectionCache _connectionCache;

        public SyncConnectionHandler(
                IConnectionRepository connectionRepo,
                IConnectionCache connectionCache,
                IConnectionUtils connectionUtils)
        {
            _connectionRepo = connectionRepo;
            _connectionUtils = connectionUtils;
            _connectionCache = connectionCache;
        }

        public async Task<EasyReportConnection> Handle(SyncConnectionCommand request, CancellationToken cancellationToken)
        {
            var connection = await _connectionRepo.FindSingleAsync(request.ConnectionId);

            if (connection == null) {
                throw new InvalidOperationException(string.Format(TextResources.ErrorNoConnection, request.ConnectionId));
            }

            _connectionUtils.SyncConnectionModel(connection);
            await _connectionRepo.UpdateAsync(connection.Id, connection);
            await _connectionRepo.SaveChangesAsync();

            _connectionCache.Invalidate(connection);
            return connection;
        }
    }

    public class SyncConnectionCommand : IRequest<EasyReportConnection>
    {
        public string ConnectionId { get; set; }

        public SyncConnectionCommand(string connectionId) => ConnectionId = connectionId;
    }
}
