﻿using System;

namespace EasyITCenter.Classes {

    public partial class SystemTranslationList {
        public int Id { get; set; } = 0;
        public string SystemName { get; set; } = null;
        public string DescriptionCz { get; set; } = null;
        public string DescriptionEn { get; set; } = null;
        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }
    }
}