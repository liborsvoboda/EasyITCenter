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
    public class CreateConnectionHandler : IRequestHandler<CreateConnectionCommand, EasyReportConnection>
    {
        private readonly IConnectionRepository _connectionRepo;
        private readonly IConnectionUtils _connectionUtils;
        private readonly IConnectionCache _connectionCache;
        private readonly ITeamContextAccessor _teamContextAccesor;

        private static SemaphoreSlim semaphoreSlim = new SemaphoreSlim(1, 1);

        public CreateConnectionHandler(
                IConnectionRepository connectionRepo,
                IConnectionCache connectionCache,
                IConnectionUtils connectionUtils,
                ITeamContextAccessor teamContextAccesor)
        {
            _connectionRepo = connectionRepo;
            _connectionUtils = connectionUtils;
            _connectionCache = connectionCache;
            _teamContextAccesor = teamContextAccesor;
        }

        public async Task<EasyReportConnection> Handle(CreateConnectionCommand request, CancellationToken cancellationToken)
        {
            await semaphoreSlim.WaitAsync();
            try {
                //one more check if the connection we want to add doesn't exist already
                var connection = request.Id != null ? await _connectionRepo.FindSingleAsync(request.Id) : null;
                if (connection == null) {
                    connection = new EasyReportConnection();
                    request.CopyToConnection(connection);

                    if (string.IsNullOrEmpty(connection.Id)) {
                        connection.Id = Guid.NewGuid().ToString();
                    }

                    connection.TeamId = _teamContextAccesor.GetContext().TeamId;

                    _connectionUtils.SyncConnectionModel(connection);

                    await _connectionRepo.CreateAsync(connection);
                    await _connectionRepo.SaveChangesAsync();

                    _connectionCache.Invalidate(connection);
                }

                return connection;
            }
            finally {
                semaphoreSlim.Release();
            }
        }
    }

    public class CreateConnectionCommand : BaseConnectionCommand
    {        public CreateConnectionCommand(): base() { }

        public CreateConnectionCommand(EasyReportConnection connection) : base(connection) 
        { 
        }
    }
}
