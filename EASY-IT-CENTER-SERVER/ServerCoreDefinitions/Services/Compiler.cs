using System;
using System.IO;
using System.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using Prometheus;

namespace DynamicRun.Builder
{
    internal class Compiler {

        Compiler compiler = new Compiler();
        Runner runner = new Runner();

        private static void Startup() {
            var sourcesPath = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "ServerCoreTools", "Compile", "PlayGround.cs");
            Console.WriteLine("Modify and Save the sources for compile and run it!");

            using (var watcher = new ObservableFileSystemWatcher(c => { c.Path = Path.Combine(ServerRuntimeData.Startup_path, ServerConfigSettings.DefaultStaticWebFilesFolder, "ServerCoreTools", "Compile", "PlayGround.cs"); })) {
                watcher.Start();
                Console.WriteLine("Press any key to exit!");
                Console.ReadLine();
            }
        }

        public byte[] Compile(string filepath)
        {
            Console.WriteLine($"Starting compilation of: '{filepath}'");

            var sourceCode = File.ReadAllText(filepath);

            using (var peStream = new MemoryStream())
            {
                var result = GenerateCode(sourceCode).Emit(peStream);

                if (!result.Success)
                {
                    Console.WriteLine("Compilation done with error.");

                    IEnumerable<Diagnostic>? failures = result.Diagnostics.Where(diagnostic => diagnostic.IsWarningAsError || diagnostic.Severity == DiagnosticSeverity.Error);

                    foreach (var diagnostic in failures)
                    {
                        Console.Error.WriteLine("{0}: {1}", diagnostic.Id, diagnostic.GetMessage());
                    }

                    return null;
                }

                Console.WriteLine("Compilation done without any error.");

                peStream.Seek(0, SeekOrigin.Begin);

                return peStream.ToArray();
            }
        }

        private static CSharpCompilation GenerateCode(string sourceCode)
        {
            var codeString = SourceText.From(sourceCode);
            var options = CSharpParseOptions.Default.WithLanguageVersion(LanguageVersion.CSharp7_3);

            var parsedSyntaxTree = SyntaxFactory.ParseSyntaxTree(codeString, options);

            var references = new MetadataReference[]
            {
                MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
                MetadataReference.CreateFromFile(typeof(Console).Assembly.Location),
                MetadataReference.CreateFromFile(typeof(System.Runtime.AssemblyTargetedPatchBandAttribute).Assembly.Location),
                MetadataReference.CreateFromFile(typeof(Microsoft.CSharp.RuntimeBinder.CSharpArgumentInfo).Assembly.Location),
            };

            return CSharpCompilation.Create("Hello.dll",
                new[] { parsedSyntaxTree }, 
                references: references, 
                options: new CSharpCompilationOptions(OutputKind.ConsoleApplication, 
                    optimizationLevel: OptimizationLevel.Release,
                    assemblyIdentityComparer: DesktopAssemblyIdentityComparer.Default));
        }
    }
}