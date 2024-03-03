using MarkdownSnippets;

namespace EasyITCenter.ToolsControllers {

  /// <summary>
  /// Server Tool Generation Markdown Documentation From Project Codes
  /// </summary>
    internal class ProjectMarkDown {


        /// <summary>
        /// Server Tool Generation Markdown Read All Code Snippets
        /// </summary>
        internal void ReadingFiles() {
            var files = Directory.EnumerateFiles(ServerRuntimeData.ContentRootPath, "*.cs", SearchOption.AllDirectories);
            var snippets = FileSnippetExtractor.Read(files);
        }


        internal void DirectoryMarkdownProcessorRun() {

            var processor = new DirectoryMarkdownProcessor(
                "targetDirectory",
                directoryIncludes: _ => true,
                markdownDirectoryIncludes: _ => true,
                snippetDirectoryIncludes: _ => true);
            processor.Run();
        }

        internal void DirectoryMarkdownProcessorRunMaxWidth() {

            var processor = new DirectoryMarkdownProcessor(
                "targetDirectory",
                maxWidth: 80,
                directoryIncludes: _ => true,
                markdownDirectoryIncludes: _ => true,
                snippetDirectoryIncludes: _ => true);
            processor.Run();

        }

    }
}