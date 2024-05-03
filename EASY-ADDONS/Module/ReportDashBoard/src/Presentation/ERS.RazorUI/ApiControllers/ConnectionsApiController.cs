using System;
using System.Net;
using System.Threading.Tasks;
using System.Security.Claims;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Newtonsoft.Json;
using MediatR;

using ERS.Models;
using ERS.ViewModels;
using ERS.Services;
using ERS.Handlers;

namespace ERS.Controllers
{
    [Produces("application/json")]
    [Route("api/connections")]
    [Authorize(Policy = Constants.Policies.AllowGuest)]
    public class ConnectionsApiController : ControllerBase 
    {
        private readonly IMediator _mediator;

        public ConnectionsApiController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Check connection to the current database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConnection(string id) 
        {
            try {

                var connection = await _mediator.Send(new GetSingleConnectionRequest(id));
                
                var error = DbUtils.ConnectionStringIsValid(connection.ConnectionString, connection.Type);
                if (!string.IsNullOrEmpty(error)) {
                    throw new InvalidOperationException("Wrong format of the connection string");
                }

                return StatusCode((int)HttpStatusCode.OK, id);
            }
            catch (Exception ex) {
                return StatusCode((int)HttpStatusCode.BadRequest, JsonConvert.SerializeObject(new ConnectionApiResponse { Id = id, Error = ex.Message }));
            }
        }

        [HttpPost("{id}/resync")]
        public async Task<IActionResult> Resync(string id)
        {
            try {
                var connection = await _mediator.Send(new SyncConnectionCommand(id));

                return StatusCode((int)HttpStatusCode.OK);
            }
            catch (Exception ex) {
                return StatusCode((int)HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}