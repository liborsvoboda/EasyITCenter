using System;
using System.Collections.Generic;
using System.Text;

using ERS.Models;

namespace ERS.Services
{
    public interface IConnectionCache
    {
        public void Invalidate(EasyReportConnection connection);

        public EasyReportConnection GetConnection(string id);
    }
}
