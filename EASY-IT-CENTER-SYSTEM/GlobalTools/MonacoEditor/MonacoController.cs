using Microsoft.CodeAnalysis.CSharp;
using Microsoft.Web.WebView2.Wpf;
using System.Threading.Tasks;


namespace EasyITSystemCenter.Tools {

    public class MonacoController {

        /*
        private const string EditorContainerSelector = "#root";
        private const string EditorObject = "wpfUiMonacoEditor";
        private readonly IWebView2 _webView;

        public MonacoController(IWebView2 webView) { _webView = webView; }

        public async Task CreateAsync() {
            _ = await _webView.ExecuteScriptAsync(
           $"const {EditorObject} = monaco.editor.create(document.querySelector('{EditorContainerSelector}'));window.onresize = () => {EditorObject}.layout();");
        }

        public async Task SetThemeAsync(bool dark) {
            // TODO: Parse theme from object
            const string uiThemeName = "wpf-ui-app-theme";
            var baseMonacoTheme =  !dark ? "vs" : "vs-dark";

            _ = await _webView.ExecuteScriptAsync($"monaco.editor.defineTheme('{uiThemeName}',base:'{baseMonacoTheme}',inherit: true," +
                "rules: [{ background: 'FFFFFF00' }],colors: {'editor.background': '#FFFFFF00','minimap.background': '#FFFFFF00',}});"+
                "monaco.editor.setTheme('{uiThemeName}');");
        }

        public async Task SetLanguageAsync(MonacoLanguage monacoLanguage) {
            var monagoLanguage = monacoLanguage;

            await _webView.ExecuteScriptAsync(
                "monaco.editor.setModelLanguage(" + EditorObject + $".getModel(), \"{monagoLanguage}\");"
            );
        }

        public async Task SetContentAsync(string contents) {
            var literalContents = SymbolDisplay.FormatLiteral(contents, false);

            await _webView.ExecuteScriptAsync(EditorObject + $".setValue(\"{literalContents}\");");
        }

        public async void ExecuteScript(string script) {
            if (_webView == null) {
                return;
            }
            await _webView.ExecuteScriptAsync(script);
        }

        */
    }
}