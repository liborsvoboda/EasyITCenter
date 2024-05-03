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
    public class DeleteConnectionHandler : IRequestHandler<DeleteConnectionCommand, EasyReportConnection>
    {
        private readonly IConnectionRepository _connectionRepo;
        private readonly IConnectionUtils _connectionUtils;
        private readonly IConnectionCache _connectionCache;

        public DeleteConnectionHandler(
                IConnectionRepository connectionRepo,
                IConnectionCache connectionCache,
                IConnectionUtils connectionUtils)
        {
            _connectionRepo = connectionRepo;
            _connectionUtils = connectionUtils;
            _connectionCache = connectionCache;
        }

        public async Task<EasyReportConnection> Handle(DeleteConnectionCommand request, CancellationToken cancellationToken)
        {
            var connection = await _connectionRepo.FindSingleAsync(request.Id);

            if (connection == null) {
                throw new InvalidOperationException($"Connection {request.Id} not found");
            }

            _connectionCache.Invalidate(connection);

            await _connectionRepo.DeleteAsync(connection.Id, cancellationToken);
            await _connectionRepo.SaveChangesAsync(cancellationToken);
            return connection;
        }
    }

    public class DeleteConnectionCommand : IRequest<EasyReportConnection>
    {
        public string Id { get; set; }

        public DeleteConnectionCommand(string id) => Id = id;
    }
}
