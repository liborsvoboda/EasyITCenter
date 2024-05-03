using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERS.Models
{
    public class BasicReportQuery : IReportQuery
    {
        public string Id { get; set; }

        public string ModelId { get; set; }

        public string Description { get; set; }

        public string Name { get; set; }

        public string SQL { get; set; }
    }
}
