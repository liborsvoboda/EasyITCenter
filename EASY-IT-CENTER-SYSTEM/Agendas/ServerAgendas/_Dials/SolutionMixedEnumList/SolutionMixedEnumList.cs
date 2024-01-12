﻿using System;

namespace EasyITSystemCenter.Classes {

    public partial class SolutionMixedEnumList {
        public int Id { get; set; } = 0;
        public string ItemsGroup { get; set; } = null;
        public string Name { get; set; } = null;
        public string Description { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        public string Translation { get; set; } = null;
    }
}