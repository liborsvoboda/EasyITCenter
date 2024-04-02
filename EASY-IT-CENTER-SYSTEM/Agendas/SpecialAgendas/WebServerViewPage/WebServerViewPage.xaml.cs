using CefSharp;
using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Web.WebView2.Core;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Media.Animation;

namespace EasyITSystemCenter.Pages {

    public partial class WebServerViewPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();

        private string serverUrl = $"http://127.0.0.1:" + SystemOperations.GetSystemLocalhostFreePort().ToString() +"/";

        public WebServerViewPage() {
            try {

                InitializeComponent();
                InitializeAsync();

                
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

                MainWindow.ProgressRing = System.Windows.Visibility.Visible;

                IsEnabled = false;
                IsEnabledChanged += (s, e) => { _ = LoadDataList(); };
                
            } catch (Exception ex) { }
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden;
        }


        //change datasource
        public async Task<bool> LoadDataList() {
            List<SolutionUserList> userList = new List<SolutionUserList>();
            MainWindow.ProgressRing = System.Windows.Visibility.Visible;
            try {

                SystemCustomPageList multiWebView = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList, this.Uid.ToString(), App.UserData.Authentification.Token);

                
                //webViewer.BeginInit();
                webViewer.Source = new Uri(multiWebView.IsServerUrl ? App.appRuntimeData.AppClientSettings.First(a => a.Key == "conn_apiAddress").Value +
                    (multiWebView.StartupUrl.StartsWith("/") ? multiWebView.StartupUrl : "/" + multiWebView.StartupUrl)
                    : multiWebView.StartupUrl);
                webViewer.Initialized += WebViewer_Initialized;
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden; return true;
        }


        private void WebViewer_Initialized(object sender, EventArgs e) {
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden;
        }

        async void InitializeAsync() {
            webViewer.WebMessageReceived += WebMessageReceived;
            webViewer.CoreWebView2InitializationCompleted += WebViewOnCoreWebView2InitializationCompleted;
            await webViewer.EnsureCoreWebView2Async();
        }

        private void WebViewOnCoreWebView2InitializationCompleted(object sender, CoreWebView2InitializationCompletedEventArgs e) {
            //webViewer.CoreWebView2.OpenDevToolsWindow();
        }

        private void WebMessageReceived(object sender, CoreWebView2WebMessageReceivedEventArgs e) {
            webViewer.CoreWebView2.PostWebMessageAsString(e.WebMessageAsJson);
        }

    }
}