﻿using System;

namespace EasyITCenter.Classes {

    public partial class SolutionEmailTemplateList {
        public int Id { get; set; } = 0;
        public int SystemLanguageId { get; set; } = 0;
        public string TemplateName { get; set; } = null;
        public string Variables { get; set; }
        public string Subject { get; set; }
        public string Email { get; set; }
        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        public string TemplateNameTranslation { get; set; }
        public string SystemLanguageTranslation { get; set; }
    }
}