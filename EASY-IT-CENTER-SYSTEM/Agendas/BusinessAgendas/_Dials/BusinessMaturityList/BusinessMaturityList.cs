﻿using System;

namespace EasyITSystemCenter.Classes {

    public partial class BusinessMaturityList {
        public int Id { get; set; } = 0;
        public string Name { get; set; } = null;
        public int Value { get; set; } = 1;
        public bool Default { get; set; }
        public string Description { get; set; } = null;
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}