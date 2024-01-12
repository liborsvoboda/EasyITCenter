﻿using System;

namespace EasyITCenter.Classes {

    public partial class SolutionWebsiteList {
        public int Id { get; set; } = 0;
        public string WebsiteName { get; set; } = null;
        public string Description { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}