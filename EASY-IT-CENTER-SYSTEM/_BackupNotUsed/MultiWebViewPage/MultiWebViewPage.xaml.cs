using CefSharp;
using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Controls;

//WebView Has Problem
namespace EasyITSystemCenter.Pages {


    public partial class MultiWebViewPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();


        public MultiWebViewPage() {

             try {
                InitializeComponent();
                _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

                _ = LoadDataList();
            } catch (Exception ex) { }

        }


        //change datasource
        public async Task<bool> LoadDataList() {
            List<SolutionUserList> userList = new List<SolutionUserList>();
            MainWindow.ProgressRing = System.Windows.Visibility.Visible;
            try {

                SystemCustomPageList multiWebView = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList , "1012" , App.UserData.Authentification.Token);

                /*
                webViewer.BeginInit();
                webViewer.Address = multiWebView.IsServerUrl ? App.appRuntimeData.AppClientSettings.First(a => a.Key == "conn_apiAddress").Value + 
                    (multiWebView.Parameter.StartsWith("/") ? multiWebView.Parameter : "/" + multiWebView.Parameter)
                    : multiWebView.Parameter;


                webViewer.FrameLoadStart += WebViewer_FrameLoadStart;
                webViewer.FrameLoadEnd += WebViewer_FrameLoadEnd;
                webViewer.LifeSpanHandler = new MyCustomLifeSpanHandler();
                */
                
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden; return true;
        }

        /*
        private void WebViewer_FrameLoadStart(object sender, FrameLoadStartEventArgs e) {
            MainWindow.ProgressRing = System.Windows.Visibility.Visible;
        }


        private void WebViewer_FrameLoadEnd(object sender, FrameLoadEndEventArgs e) {
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden;
        }

        
        private class MyCustomLifeSpanHandler : ILifeSpanHandler {

            public bool DoClose(IWebBrowser chromiumWebBrowser, IBrowser browser) {
                return true;
            }

            public void OnAfterCreated(IWebBrowser chromiumWebBrowser, IBrowser browser) {
            }

            public void OnBeforeClose(IWebBrowser chromiumWebBrowser, IBrowser browser) {
            }

            public bool OnBeforePopup(IWebBrowser chromiumWebBrowser, IBrowser browser, IFrame frame, string targetUrl, string targetFrameName, WindowOpenDisposition targetDisposition, bool userGesture, IPopupFeatures popupFeatures, IWindowInfo windowInfo, IBrowserSettings browserSettings, ref bool noJavascriptAccess, out IWebBrowser newBrowser) {
                browser.MainFrame.LoadUrl(targetUrl);
                newBrowser = null;
                return true;
            }
        }
        */
    }
}