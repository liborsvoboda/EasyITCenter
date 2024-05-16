using System;

namespace EasyITSystemCenter.Classes {

    public partial class SystemCustomPageList {
        public int Id { get; set; } = 0;
        public string PageName { get; set; } = null;
        public string Description { get; set; }
        public bool IsSystemWebModule { get; set; }
        public bool IsMultiFormType { get; set; }
        public bool IsServerUrl { get; set; }
        public string StartupUrl { get; set; } = null;
        public bool IsWebServer { get; set; }
        public string StartupSubFolder { get; set; } = null;
        public string StartupCommand { get; set; } = null;
        public bool IsGraphType { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}