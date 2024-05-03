using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

using MediatR;

using ERS.Models;
using ERS.ViewModels;
using ERS.Services;
using ERS.Handlers;

namespace ERS.Web
{
    [Authorize(Roles = Constants.Roles.Admin)]
    [Route("Admin/Connection")]
    public class ConnectionController : Controller 
    {
        private readonly IMediator _mediator;

        [TempData]
        public string FlashStatusJson { get; set; }

        public ConnectionController(IMediator mediatr)
        {
            _mediator = mediatr;
        }

        [HttpGet("")]
        public async Task<IActionResult> EditConnection(bool useDemo = false, string returnUrl = null) 
        {
            var connection = await _mediator.Send(new GetSingleConnectionRequest(Constants.MainConnectionId, true));

            if (useDemo) {
                await _mediator.Send(new UseDemoConnectionCommand {
                    ConnectionId = connection.Id
                });
            }

            var viewModel = new ConnectionViewModel(connection);

            ViewBag.Databases = new SelectList(DbUtils.Databases, "Id", "Name");
            return View(viewModel);
        }

        [HttpPost("")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditConnection(ConnectionViewModel model, string returnUrl = null) 
        {
            var error = DbUtils.ConnectionStringIsValid(model.ConnectionString, model.Type);

            if (ModelState.IsValid && string.IsNullOrEmpty(error)) {
                var connection = await _mediator.Send(new UpdateConnectionCommand {
                    Id = Constants.MainConnectionId,
                    Name = model.Name,
                    ConnectionString = model.ConnectionString,
                    LegacyPaging = model.LegacyPaging,
                    Type = model.Type,
                    LoaderOptions = model.GetLoaderOptions()
                });

                FlashStatusJson = new FlashStatus {
                    Message = "Connection saved!"
                }.ToJson();

                return returnUrl != null
                   ? this.RedirectToLocal(returnUrl)
                   : RedirectToAction(nameof(EditConnection));
            }
            else {
                if (!string.IsNullOrEmpty(error)) {
                    ModelState.AddModelError("connectionError", "Can't connect to the database: " + error);
                }

                ViewBag.Databases = new SelectList(DbUtils.Databases, "Id", "Name");
                return View(model);
            }
        }
    }
}