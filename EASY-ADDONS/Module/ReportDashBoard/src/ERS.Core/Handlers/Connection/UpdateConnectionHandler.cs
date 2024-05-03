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
    public class UpdateConnectionHandler : IRequestHandler<UpdateConnectionCommand, EasyReportConnection>
    {
        private readonly IConnectionRepository _connectionRepo;
        private readonly IConnectionUtils _connectionUtils;
        private readonly IConnectionCache _connectionCache;

        public UpdateConnectionHandler(
                IConnectionRepository connectionRepo,
                IConnectionCache connectionCache,
                IConnectionUtils connectionUtils)
        {
            _connectionRepo = connectionRepo;
            _connectionUtils = connectionUtils;
            _connectionCache = connectionCache;
        }

        public async Task<EasyReportConnection> Handle(UpdateConnectionCommand request, CancellationToken cancellationToken)
        {
            var connection = await _connectionRepo.FindSingleAsync(request.Id);

            if (connection == null) {
                throw new InvalidOperationException($"Connection {request.Id} not found");
            }

            request.CopyToConnection(connection);

            _connectionUtils.SyncConnectionModel(connection);

            await _connectionRepo.UpdateAsync(connection.Id, connection);
            await _connectionRepo.SaveChangesAsync();

            _connectionCache.Invalidate(connection);
            return connection;
        }
    }

    public class UpdateConnectionCommand : BaseConnectionCommand
    {
        public UpdateConnectionCommand() : base() { }

        public UpdateConnectionCommand(EasyReportConnection connection) : base(connection)
        {
        }
    }
}
