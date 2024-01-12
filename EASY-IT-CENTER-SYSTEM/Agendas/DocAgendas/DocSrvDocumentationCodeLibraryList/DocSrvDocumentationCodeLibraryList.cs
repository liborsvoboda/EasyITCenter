﻿using System;

namespace EasyITSystemCenter.Classes {

    public partial class DocSrvDocumentationCodeLibraryList {
        public int Id { get; set; } = 0;
        public string Name { get; set; }
        public string Description { get; set; }
        public string MdContent { get; set; } = "";
        public string HtmlContent { get; set; } = "";
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}