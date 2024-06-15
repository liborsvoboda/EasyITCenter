﻿using Quartz;
using Quartz.Spi;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Globalization;
using System.Linq;
using System.Threading;
using FileInfo = System.IO.FileInfo;

namespace EasyITCenter.ProviderServices {

    public class ProjectCompilerService {
        private readonly ILogger _logger;
        static string providerName = "cs";
        static string sourceFileName = "test.cs";
        static CodeSnippetTypeMember snippetMethod;


        public static bool CompileExecutableProgram(String sourceName) {
            System.IO.FileInfo sourceFile = new FileInfo(sourceName);
            CodeDomProvider provider = null;
            bool compileOk = false;

            // Select the code provider based on the input file extension.
            if (sourceFile.Extension.ToUpper(CultureInfo.InvariantCulture) == ".CS") {
                provider = CodeDomProvider.CreateProvider("CSharp");
            }
            else if (sourceFile.Extension.ToUpper(CultureInfo.InvariantCulture) == ".VB") {
                provider = CodeDomProvider.CreateProvider("VisualBasic");
            }
            else {
                Console.WriteLine("Source file must have a .cs or .vb extension");
            }

            if (provider != null) {

                // Format the executable file name.
                // Build the output assembly path using the current directory
                // and <source>_cs.exe or <source>_vb.exe.

                String exeName = String.Format(@"{0}\{1}.exe",
                    System.Environment.CurrentDirectory,
                    sourceFile.Name.Replace(".", "_"));

                CompilerParameters cp = new CompilerParameters();

                // Generate an executable instead of
                // a class library.
                cp.GenerateExecutable = true;

                // Specify the assembly file name to generate.
                cp.OutputAssembly = exeName;

                // Save the assembly as a physical file.
                cp.GenerateInMemory = false;

                // Set whether to treat all warnings as errors.
                cp.TreatWarningsAsErrors = false;

                // Invoke compilation of the source file.
                CompilerResults cr = provider.CompileAssemblyFromFile(cp,
                    sourceName);

                if (cr.Errors.Count > 0) {
                    // Display compilation errors.
                    Console.WriteLine("Errors building {0} into {1}",
                        sourceName, cr.PathToAssembly);
                    foreach (CompilerError ce in cr.Errors) {
                        Console.WriteLine("  {0}", ce.ToString());
                        Console.WriteLine();
                    }
                }
                else {
                    // Display a successful compilation message.
                    Console.WriteLine("Source {0} built into {1} successfully.",
                        sourceName, cr.PathToAssembly);
                }

                // Return the results of the compilation.
                if (cr.Errors.Count > 0) {
                    compileOk = false;
                }
                else {
                    compileOk = true;
                }
            }
            return compileOk;
        }




        //<Snippet2>
        // Build a library program graph using
        // System.CodeDom types.
        public static CodeCompileUnit CompileLibraryProgram() {
            // Create a new CodeCompileUnit to contain
            // the program graph.
            CodeCompileUnit compileUnit = new CodeCompileUnit();

            // Declare a new namespace called Samples.
            CodeNamespace samples = new CodeNamespace("Samples");
            // Add the new namespace to the compile unit.
            compileUnit.Namespaces.Add(samples);

            // Add the new namespace import for the System namespace.
            samples.Imports.Add(new CodeNamespaceImport("System"));

            // Declare a new type called Class1.
            CodeTypeDeclaration class1 = new CodeTypeDeclaration("Class1");

            // Add the new type to the namespace type collection.
            samples.Types.Add(class1);

            class1.Members.Add(snippetMethod);

            return compileUnit;
        }

    }
    
}