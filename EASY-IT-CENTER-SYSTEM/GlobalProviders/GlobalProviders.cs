using Microsoft.CSharp;

namespace EasyITSystemCenter.Providers {


    /// <summary>
    /// Simple script provider that adds
    /// a few using statements to the C# scripts (.cs files)
    /// </summary>
    class ScriptProvider : CSharpCodeProvider {
        public string GetNamespace() => null;
        
        public string GetUsing() {
            return "" +
                   "using System; " +
                   "using System.Collections.Generic; " +
                   "using System.Linq; " +
                   "using System.Net; " +
                   "using System.Net.Http;" + 
                   "using System.Text;" +
                   "";
        }

        public string GetVars() => null;
    }






}