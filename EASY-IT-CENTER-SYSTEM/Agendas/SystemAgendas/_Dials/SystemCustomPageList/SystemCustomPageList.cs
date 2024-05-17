using System;

namespace EasyITSystemCenter.Classes {

    public partial class SystemCustomPageList {

        public int Id { get; set; } = 0;
        public string PageName { get; set; } = null;
        public string Description { get; set; }
        public bool IsSystemWebModule { get; set; }
        public string StartupUrl { get; set; }
        public bool DevModeEnabled { get; set; }
        public bool ShowHelpTab { get; set; }
        public bool HelpTabShowOnly { get; set; }
        public string HelpTabUrl { get; set; }

        public string DbtableName { get; set; }
        public string ColumnName { get; set; }
        public string SetDataJscommand { get; set; }
        public string GetDataJscommand { get; set; }

        public bool IsMultiFormType { get; set; }
        public bool IsServerUrl { get; set; }
        public bool IsWebServer { get; set; }
        public string StartupSubFolder { get; set; }
        public string StartupCommand { get; set; }
        public bool IsGraphType { get; set; }
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

    }
}