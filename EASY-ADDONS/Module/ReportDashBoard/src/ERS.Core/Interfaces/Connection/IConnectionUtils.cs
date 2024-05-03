using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using ERS.Models;

namespace ERS.Services
{
    public interface IConnectionUtils
    {
        List<Report> GetDefaultReports(EasyReportConnection connection);

        EasyReportConnection GetDefaultConnection();

        EasyReportConnection GetDemoConnection();

        void SyncConnectionModel(EasyReportConnection connection);
    }
}
