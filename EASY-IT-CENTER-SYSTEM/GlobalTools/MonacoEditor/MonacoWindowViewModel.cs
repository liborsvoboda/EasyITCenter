using System;
using System.Threading.Tasks;
using MahApps.Metro;
using MahApps.Metro.Controls;
using Microsoft.Web.WebView2.Wpf;


namespace EasyITSystemCenter.Tools {
    /*
    public partial class MonacoWindowViewModel {
        private MonacoController _monacoController;

        public void SetWebView(IWebView2 webView) {
            webView.NavigationCompleted += OnWebViewNavigationCompleted;
            //webView.SetCurrentValue(FrameworkElement.UseLayoutRoundingProperty, true);
            //webView.SetCurrentValue(WebView2.DefaultBackgroundColorProperty, System.Drawing.Color.Transparent);
            //webView.SetCurrentValue(
            //    WebView2.SourceProperty,
            //    new Uri(System.IO.Path.Combine(App.appRuntimeData.webDataUrlPath,"MonacoEditor","index.html"))
            //);

            _monacoController = new MonacoController(webView);
        }

        private async Task InitializeEditorAsync() {
            if (_monacoController == null) {
                return;
            }

            await _monacoController.CreateAsync();
            //await _monacoController.SetThemeAsync(((Window)App.Current.).);
            await _monacoController.SetLanguageAsync(MonacoLanguage.Csharp);
            await _monacoController.SetContentAsync(
                "// This Source Code Form is subject to the terms of the MIT License.\r\n// If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.\r\n// Copyright (C) Leszek Pomianowski and WPF UI Contributors.\r\n// All Rights Reserved.\r\n\r\nnamespace Wpf.Ui.Gallery.Models.Monaco;\r\n\r\n[Serializable]\r\npublic record MonacoTheme\r\n{\r\n    public string Base { get; init; }\r\n\r\n    public bool Inherit { get; init; }\r\n\r\n    public IDictionary<string, string> Rules { get; init; }\r\n\r\n    public IDictionary<string, string> Colors { get; init; }\r\n}\r\n"
            );
        }

        private void OnWebViewNavigationCompleted(
            object sender,
            Microsoft.Web.WebView2.Core.CoreWebView2NavigationCompletedEventArgs e
        ) {
            DispatchAsync(InitializeEditorAsync);
        }

        private static DispatcherOperation<TResult> DispatchAsync<TResult>(Func<TResult> callback) {
            return App.Current.Dispatcher.InvokeAsync(callback);
        }
    }
    */
}