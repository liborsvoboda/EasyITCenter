using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using Microsoft.Web.WebView2.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;


namespace EasyITSystemCenter.Pages {

    public partial class MltEicSrvWebAppPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();

        SystemCustomPageList systemCustomPageList = new SystemCustomPageList();
        private string serverUrl = $"http://127.0.0.1:" + SystemOperations.GetSystemLocalhostFreePort().ToString() +"/";

        public MltEicSrvWebAppPage() {
            try {

                InitializeComponent();
                
                _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);
                _ = FormOperations.TranslateFormFields(ListView);
                MainWindow.ProgressRing = Visibility.Visible;

                //Enabling By TabController After Inserted ID, Load Data On Startup Only
                IsEnabled = false;
                IsEnabledChanged += (s, e) => {
                    if (IsEnabled && systemCustomPageList == new SystemCustomPageList()) {
                        _ = LoadDataList();
                        webBrowser.CoreWebView2InitializationCompleted += WebBrowser_CoreWebView2InitializationCompleted;
                    }
                };

            } catch (Exception ex) { }
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden;
        }


        //change datasource
        public async Task<bool> LoadDataList() {
            List<SolutionUserList> userList = new List<SolutionUserList>();
            MainWindow.ProgressRing = System.Windows.Visibility.Visible;
            try {

                systemCustomPageList = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList, this.Uid.ToString(), App.UserData.Authentification.Token);

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = System.Windows.Visibility.Hidden; return true;
        }

        //INIT SPA Solution + Help 
        private async void WebBrowser_CoreWebView2InitializationCompleted(object sender, CoreWebView2InitializationCompletedEventArgs e) {
            await webBrowser.EnsureCoreWebView2Async();
            webBrowser.Source = new Uri(systemCustomPageList.IsServerUrl ? App.appRuntimeData.AppClientSettings.First(a => a.Key == "conn_apiAddress").Value +
                (systemCustomPageList.StartupUrl.StartsWith("/") ? systemCustomPageList.StartupUrl : "/" + systemCustomPageList.StartupUrl)
                : systemCustomPageList.StartupUrl);

            webBrowser.CoreWebView2.Settings.AreDefaultScriptDialogsEnabled =
                webBrowser.CoreWebView2.Settings.AreHostObjectsAllowed = webBrowser.CoreWebView2.Settings.IsBuiltInErrorPageEnabled = webBrowser.CoreWebView2.Settings.IsNonClientRegionSupportEnabled =
                webBrowser.CoreWebView2.Settings.IsWebMessageEnabled = webBrowser.CoreWebView2.Settings.IsPinchZoomEnabled = webBrowser.CoreWebView2.Settings.IsGeneralAutofillEnabled =
                webBrowser.CoreWebView2.Settings.IsZoomControlEnabled = webBrowser.CoreWebView2.Settings.IsSwipeNavigationEnabled = webBrowser.CoreWebView2.Settings.IsStatusBarEnabled =
                webBrowser.CoreWebView2.Settings.IsScriptEnabled = true;

            if (systemCustomPageList.DevModeEnabled) {
                webBrowser.CoreWebView2.Settings.AreDevToolsEnabled = webBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;
                helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;
                webBrowser.CoreWebView2.OpenDevToolsWindow();
            }
            else {
                webBrowser.CoreWebView2.Settings.AreDevToolsEnabled = webBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
                helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
            }
            if (systemCustomPageList.ShowHelpTab) {
                ti_helpEditor.Visibility = System.Windows.Visibility.Visible;
                if (systemCustomPageList.ShowHelpTab) {
                    helpBrowser.Source = new Uri(systemCustomPageList.IsServerUrl ? App.appRuntimeData.AppClientSettings.First(a => a.Key == "conn_apiAddress").Value +
                (systemCustomPageList.StartupUrl.StartsWith("/") ? systemCustomPageList.StartupUrl : "/" + systemCustomPageList.StartupUrl)
                : systemCustomPageList.HelpTabUrl);

                    if (systemCustomPageList.HelpTabShowOnly) {
                        helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
                        helpBrowser.CoreWebView2.Settings.IsScriptEnabled = false; helpBrowser.CoreWebView2.Settings.IsSwipeNavigationEnabled = false;
                        helpBrowser.CoreWebView2.Settings.IsZoomControlEnabled = false;
                    }
                }
            }

            webBrowser.CoreWebView2.ContextMenuRequested += async delegate (object sender1, CoreWebView2ContextMenuRequestedEventArgs args) {
                IList<CoreWebView2ContextMenuItem> menuList = args.MenuItems;
                CoreWebView2ContextMenuItem openConsole = webBrowser.CoreWebView2.Environment.CreateContextMenuItem(await DBOperations.DBTranslation("openConsole"), null, CoreWebView2ContextMenuItemKind.Command); openConsole.CustomItemSelected += openConsoleSelected;
                CoreWebView2ContextMenuItem openTaskManager = webBrowser.CoreWebView2.Environment.CreateContextMenuItem(await DBOperations.DBTranslation("printPage"), null, CoreWebView2ContextMenuItemKind.Command); openTaskManager.CustomItemSelected += openTaskManagerSelected;
                menuList.Add(openConsole);
                menuList.Add(openTaskManager);
            };
            MainWindow.ProgressRing = Visibility.Hidden;
        }
        private void openConsoleSelected(object sender, object e) { webBrowser.CoreWebView2.OpenDevToolsWindow(); }
        private void openTaskManagerSelected(object sender, object e) { webBrowser.CoreWebView2.ShowPrintUI(); }

    }
}