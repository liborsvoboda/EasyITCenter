﻿using System;
using System.Windows.Media.Imaging;

namespace EasyITCenter.Classes {

    public partial class ServerToolPanelDefinitionList {
        public int Id { get; set; } = 0;
        public int ToolTypeId { get; set; }
        public string SystemName { get; set; } = null;
        public string Type { get; set; } = null;
        public string Command { get; set; } = null;
        public string IconName { get; set; } = null;
        public string IconColor { get; set; } = null;
        public string BackgroundColor { get; set; } = null;
        public string Description { get; set; } = null;

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        public string Translation { get; set; } = null;
        public BitmapImage BitmapImage { get; set; }
        public string ToolTypeName { get; set; }
    }
}