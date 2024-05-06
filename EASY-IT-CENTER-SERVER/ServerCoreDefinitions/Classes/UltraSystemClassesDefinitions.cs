namespace EasyITCenter.ServerCoreStructure {


    /// <summary>
    /// Supported Index Types By Files Generators
    /// </summary>
    public enum SupportGenFileTypes {
        Md,
        Html,
        Docx,
    }


    /// <summary>
    /// WebFile Generators Request Dataset
    /// </summary>
    public class MDGeneratorCreateIndexRequest {
        public string WebRootFilePath { get; set; }
        public SupportGenFileTypes FromType { get; set; }
        public SupportGenFileTypes ToType { get; set; }
        public bool ScanRootOnly { get; set; }
        public bool IndexOnly { get; set; }
        public bool RewriteAllowed { get; set; }
        public string ServerLanguage { get; set; }
    }

   
}