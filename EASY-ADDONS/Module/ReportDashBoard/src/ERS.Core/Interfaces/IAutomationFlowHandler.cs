using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using ERS.Models;

namespace ERS.Services
{
    public interface IAutomationFlowHandler
    {
        Task HandleAsync(TimetableRecord ttr);
    }
}
