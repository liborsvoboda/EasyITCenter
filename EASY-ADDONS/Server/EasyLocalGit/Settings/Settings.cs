using System.IO;
using System.Reflection;

namespace EasyGitServer.Settings {

    public class OrchardCore {
        public class Setup {
            public string DefaultCulture { get; set; }
            public string SupportedCultures { get; set; } = "[\"en\", \"cs\", \"de\"]";
        }


        public class Password {
            public bool RequireDigit { get; set; } = true;
            public bool RequireLowercase { get; set; } = true;
            public bool RequireUppercase { get; set; } = true;
            public bool RequireNonAlphanumeric { get; set; } = false;
            public int RequiredUniqueChars { get; set; } = 3;
            public int RequiredLength { get; set; } = 6;
        }

    }

    public class GitSettings {
        public string BasePath { get; set; }
        public string GitPath { get; set; }
    }
  
}
