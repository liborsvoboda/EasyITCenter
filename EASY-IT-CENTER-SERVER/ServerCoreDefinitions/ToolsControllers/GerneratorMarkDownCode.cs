using MarkdownSnippets;

namespace EasyITCenter.ToolsControllers {

    /// <summary>
    /// Server Tool Generation Markdown Documentation From Project Codes
    /// in Advanced Document Format
    /// https://github.com/punker76/MarkdownSnippets/tree/main/docs
    /// </summary>
    internal class GeneratorMarkDownCode {


        /// <summary>
        /// Server Tool Generation Markdown Read All Code Snippets
        /// Read All Comments from Cs Project files
        /// </summary>
        internal static IEnumerable<Snippet> ReadingFiles() {
          IEnumerable<string> files = Directory.EnumerateFiles(ServerRuntimeData.ContentRootPath, "*.cs", SearchOption.TopDirectoryOnly);
          IEnumerable<Snippet> snippets = FileSnippetExtractor.Read(files);
            return snippets;
        }


        /// <summary>
        /// Server Tool Automatic Generate Advanced 
        /// MarkDownCode Documentation 
        /// </summary>
        internal static string DirectoryMarkdownProcessorRun() {
            try {
                var processor = new DirectoryMarkdownProcessor(
                    "MdCodeDocs", readOnly: false, //linkFormat: LinkFormat.Tfs, tocLevel: 3,
                    maxWidth: 300, //tocExcludes: new string[] { },
                    //urlPrefix: "", scanForSnippets: true, newLine: Environment.NewLine,
                    directoryIncludes: _ => true,
                    markdownDirectoryIncludes: _ => true,
                    snippetDirectoryIncludes: _ => true,
                    writeHeader: false, convention: DocumentConvention.InPlaceOverwrite,
                    header: "GENERATED FILE - Source File: {relativePath}"//,
                    //validateContent: true, omitSnippetLinks: true, treatMissingAsWarning: true
                    );

                processor.AddSnippets(ReadingFiles().ToList());
                processor.Run();
                return DBResult.success.ToString();
            } 
            catch (Exception ex) { 
                CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(ex) });
                return DataOperations.GetSystemErrMessage(ex);
            }
        }

    }
}