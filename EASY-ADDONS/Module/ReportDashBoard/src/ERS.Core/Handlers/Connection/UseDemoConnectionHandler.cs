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
    public class UseDemoConnectionHandler : IRequestHandler<UseDemoConnectionCommand>
    {
        private readonly IMediator _mediator;
        private readonly IConnectionRepository _connectionRepo;
        private readonly IConnectionUtils _connectionUtils;

        public UseDemoConnectionHandler(
                IMediator mediator,
                IConnectionRepository connectionRepo,
                IReportRepository reportRepo,
                IConnectionUtils connectionUtils)
        {
            _mediator = mediator;
            _connectionRepo = connectionRepo;
            _connectionUtils = connectionUtils;
        }

        public async Task<Unit> Handle(UseDemoConnectionCommand request, CancellationToken cancellationToken)
        {
            EasyReportConnection connection;

            if (request.ConnectionId == null) {
                connection = await _mediator.Send(new CreateConnectionCommand(_connectionUtils.GetDemoConnection()), cancellationToken);
            }
            else {
                connection = await _mediator.Send(new UpdateConnectionCommand(_connectionUtils.GetDemoConnection()), cancellationToken);
            }

            var reports = _connectionUtils.GetDefaultReports(connection);
            if (reports.Count > 0) {
                foreach (var report in reports) {
                    var response = await _mediator.Send(new GetSingleReportRequest(report.Id));

                    if (!response.Succeeded) {
                        await _mediator.Send(new CreateReportCommand {
                            Id = report.Id,
                            ConnectionId = connection.Id,
                            Name = report.Name,
                            Description = report.Description,
                            IsShared = report.IsShared,
                            Kind = report.Kind,
                            QueryJson = report.QueryJson
                        });
                    }
                }
            }

            return Unit.Value;
        }
    }



    public class UseDemoConnectionCommand : IRequest<Unit>
    {
        public string ConnectionId { get; set; }
    }
}
