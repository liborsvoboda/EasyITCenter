using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERS.Services
{
    public class EmailSettings {
        public string ApiKey { get; set; }
        public string DefaultFromUser { get; set; }
        public string DefaultFromEmail { get; set; }
    }
}
