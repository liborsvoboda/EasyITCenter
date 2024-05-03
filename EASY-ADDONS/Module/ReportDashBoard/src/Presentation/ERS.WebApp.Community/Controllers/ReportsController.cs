using System;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

using MediatR;

using ERS.Models;
using ERS.Handlers;

using ERS.Services;
using ERS.ViewModels;

namespace ERS.Web
{
    [Authorize(Policy = Constants.Policies.AllowGuest)]
    public class ReportsController : Controller
    {
        private readonly IMediator _mediator;

        public ReportsController(IMediator mediatr)
        {
            _mediator = mediatr;
        }

        public async Task<IActionResult> Index()
        {
            var result = await _mediator.Send(new GetConnectionsRequest());

            var connectionString = result.Connections.FirstOrDefault()?.ConnectionString;

            if (string.IsNullOrWhiteSpace(connectionString)) {
                //if there is no proper connection defined
                return RedirectToAction("Connection", "Setup");
            }

            var model = new SelectList(result.Connections, "Id", "Name");

            return View(model);
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAllReportsAsync()
        {
            var result = await _mediator.Send(new GetReportsRequest());

            var viewModel = result.Reports
                    .Select(r => new ReportViewModel(r, result.UserId, result.UserRoles));

            return Ok(viewModel);
        }

        [HttpGet]
        public async Task<IActionResult> LoadReportAsync(string id)
        {
            var response = await _mediator.Send(new GetSingleReportRequest(id));

            return ReportRequestResponseToActionResult(response);
        }

        [HttpPost]
        [Authorize(Roles = Constants.Roles.ManagersStr)]
        public async Task<IActionResult> NewReportAsync([FromBody] ReportViewModel reportModel)
        {
            var reportId = Guid.NewGuid().ToString();
            var response = await _mediator.Send(new CreateReportCommand {
                Id = reportId,
                ConnectionId = Constants.MainConnectionId,
                Name = reportModel.Name,  
                Description = reportModel.Description,
                Kind = ReportKind.SQL,
                IsShared = reportModel.IsShared.HasValue ? reportModel.IsShared.Value : false,
                QueryJson = ReportUtils.GetQueryJson(reportId, Constants.MainConnectionId, reportModel.Name, reportModel.Description, reportModel.Sql)
            });

            return Ok(new ReportViewModel(response.Report));
        }

        [HttpPut]
        [Authorize(Roles = Constants.Roles.ManagersStr)]
        public async Task<IActionResult> SaveReportAsync([FromBody] ReportViewModel reportModel)
        {
            var response = await _mediator.Send(new UpdateReportCommand {
                Id = reportModel.Id,
                Name = reportModel.Name,
                Description = reportModel.Description,
                IsShared = reportModel.IsShared,
                QueryJson = ReportUtils.GetQueryJson(reportModel.Id, Constants.MainConnectionId, reportModel.Name, reportModel.Description, reportModel.Sql)
            });

            return ReportRequestResponseToActionResult(response);
        }

        [HttpDelete]
        [Authorize(Roles = Constants.Roles.ManagersStr)]
        public async Task<IActionResult> DeleteReportAsync(string id)
        {
            var response = await _mediator.Send(new DeleteReportCommand(id));

            return ReportRequestResponseToActionResult(response);
        }

        protected IActionResult ReportRequestResponseToActionResult(ReportRequestResponse response)
        {
            switch (response.Result) {
                case ReportRequestResult.NonAuthorized:
                    return StatusCode(StatusCodes.Status401Unauthorized);
                case ReportRequestResult.NotFound:
                    return NotFound();
                default:
                    return response.Report != null 
                            ? Ok(new ReportViewModel(response.Report))
                            : Ok(new { Success = true });
            }
        }


        [HttpPost]
        public async Task<IActionResult> FetchDataAsync([FromBody] FetchDataViewModel model)
        {
            var response = await _mediator.Send(new GetSingleReportRequest(model.ReportId, true));

            if (response.Report == null) {
                return NotFound(new { Message = $"Can't find report: {model.ReportId}" });
            }
            var report = response.Report;

            var sql = report.GetSql();

            if (!sql.ToLowerInvariant().TrimStart().StartsWith("select")) {
                return BadRequest(new { Message = "Can't execute non-SELECT queries" });
            }

            var dbConnection = DbUtils.CreateDbConnection(report.Connection.Type);
            dbConnection.ConnectionString = report.Connection.ConnectionString;

            dbConnection.Open();

            try {
                var command = dbConnection.CreateCommand();
                command.CommandText = report.GetSql();
                command.CommandType = CommandType.Text;

                var reader = await command.ExecuteReaderAsync();

                return Ok(await MapResultAsync(reader));
            }
            catch (Exception ex)  {
                return BadRequest(ex.Message);
            }          
        }

        private async Task<object> MapResultAsync(DbDataReader dataReader) 
        {
            var columns = new List<object>();
            var rows = new List<List<object>>();

            var schema = dataReader.GetSchemaTable();
            foreach (DataRow row in schema.Rows) {
                columns.Add(new {
                    Id = (string)row["ColumnName"],
                    Label = (string)row["ColumnName"],
                    Type = GetDataTypeBySystemType((Type)row["DataType"])
                });
            }

            while (await dataReader.ReadAsync()) {
                var row = new List<object>();

                for (int i = 0; i < dataReader.FieldCount; i++)
                    row.Add(dataReader.GetValue(i));

                rows.Add(row);
            }

            return new {
                Cols = columns,
                Rows = rows
            };
        }

        private DataType GetDataTypeBySystemType(Type systemType)
        {
            if (systemType == typeof(bool) || systemType == typeof(bool?))
                return DataType.Bool;
            else if (systemType == typeof(Guid))
                return DataType.Guid;
            else if (systemType == typeof(byte) || systemType == typeof(char) || systemType == typeof(sbyte) || systemType == typeof(byte?) || systemType == typeof(char?) || systemType == typeof(sbyte?))
                return DataType.Byte;
            else if (systemType == typeof(DateTime) || systemType == typeof(DateTime?)
                     || systemType == typeof(DateTimeOffset) || systemType == typeof(DateTimeOffset?))
                return DataType.DateTime;
            else if (systemType == typeof(TimeSpan) || systemType == typeof(TimeSpan?))
                return DataType.Time;
            else if (systemType == typeof(decimal) || systemType == typeof(decimal?))
                return DataType.Currency;
            else if (systemType == typeof(double) || systemType == typeof(Single) || systemType == typeof(float) || systemType == typeof(double?) || systemType == typeof(Single?) || systemType == typeof(float?))
                return DataType.Float;
            else if (systemType == typeof(short) || systemType == typeof(ushort) || systemType == typeof(short?) || systemType == typeof(ushort?))
                return DataType.Word;
            else if (systemType == typeof(int) || systemType == typeof(uint) || systemType == typeof(int?) || systemType == typeof(uint?))
                return DataType.Int32;
            else if (systemType == typeof(long) || systemType == typeof(ulong) || systemType == typeof(long?) || systemType == typeof(ulong?))
                return DataType.Int64;
            else if (systemType == typeof(string))
                return DataType.String;
            else
                return DataType.Unknown;
        }
    }
}
