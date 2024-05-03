using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERS.Models
{
    public interface IReportQuery
    {
        string Id { get; set; }

        string Name { get; set; }

        string Description { get; set; }

        string ModelId { get; set; }

        string SQL { get; set; }
    }
}
