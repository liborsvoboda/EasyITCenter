using CefSharp;
using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Web.WebView2.Core;
using MtrDev.WebView2.Interop;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using WebView2.DevTools.Dom;



namespace EasyITSystemCenter.Pages {

    public partial class MltTblGenEsbSrvFormPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static List<GenericTable> selectedRecord = new List<GenericTable>();

        SystemCustomPageList systemCustomPageList = new SystemCustomPageList();
        List<object> genericTableList = new List<object>();
        private Dictionary<string, string> webElement = new Dictionary<string, string>();
        WebView2DevToolsContext devToolsContext;

        public MltTblGenEsbSrvFormPage() {
            try {

                InitializeComponent();

                _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);
                _ = FormOperations.TranslateFormFields(ListForm);

                if (!App.appRuntimeData.webServerRunning) {
                    _ = MainWindow.ShowMessageOnMainWindow(true, DBOperations.DBTranslation("WebServerNotRunningCheckClientConfiguration").GetAwaiter().GetResult());
                }
                else {

                    //Enabling By TabController After Inserted ID, Load Data On Startup Only
                    IsEnabled = false;
                    IsEnabledChanged += (s, e) => {
                        if (IsEnabled && systemCustomPageList.Id == 0) {
                            webBrowser.CoreWebView2InitializationCompleted += WebBrowser_CoreWebView2InitializationCompleted;
                            _ = webBrowser.EnsureCoreWebView2Async();
                        }
                    };
                }

                SetRecord(false);
            } catch (Exception ex) { }
            MainWindow.ProgressRing = Visibility.Hidden;
        }


        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
               
                systemCustomPageList = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList, this.Uid.ToString(), App.UserData.Authentification.Token);
               // systemCustomPageList = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList, this.Uid.ToString(), App.UserData.Authentification.Token);

                _ = FormOperations.TranslateFormFields(ListView);

            }  catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; 
            return true;
        }

        //INIT SPA Solution + Help 
        private async void WebBrowser_CoreWebView2InitializationCompleted(object sender, CoreWebView2InitializationCompletedEventArgs e) {
            try {
                await webBrowser.EnsureCoreWebView2Async();
                await LoadDataList(); if (systemCustomPageList.ShowHelpTab) { _ = helpBrowser.EnsureCoreWebView2Async(); }

                //DOM Initiate
                webElement = new Dictionary<string, string>();
                webElement.Add(systemCustomPageList.ColumnName, "text");
               

                devToolsContext = await webBrowser.CoreWebView2.CreateDevToolsContextAsync();
                var htmlDivElement = await devToolsContext.QuerySelectorAsync<HtmlDivElement>("#myDivElementId");
                await htmlDivElement.SetInnerTextAsync("Welcome!");
                await htmlDivElement.GetInnerTextAsync();



                webBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.StartupUrl);

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
                    if (systemCustomPageList.ShowHelpTab) { helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false; }
                }
                if (systemCustomPageList.ShowHelpTab) {
                    ti_helpEditor.Visibility = Visibility.Visible;
                    if (systemCustomPageList.ShowHelpTab) {
                        helpBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.HelpTabUrl);
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
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }
        private void openConsoleSelected(object sender, object e) { webBrowser.CoreWebView2.OpenDevToolsWindow(); }
        private void openTaskManagerSelected(object sender, object e) { webBrowser.CoreWebView2.ShowPrintUI(); }


        //async void WebBrowserInitializeAsync() {
        //    webBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.StartupUrl);
        //    if (systemCustomPageList.DevModeEnabled) {
        //        webBrowser.CoreWebView2.Settings.AreDevToolsEnabled = webBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;
        //        helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;
        //        webBrowser.CoreWebView2.OpenDevToolsWindow();
        //    }
        //    else {
        //        webBrowser.CoreWebView2.Settings.AreDevToolsEnabled = webBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
        //        helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
        //    }
        //    if (systemCustomPageList.ShowHelpTab) {
        //        ti_helpEditor.Visibility = Visibility.Visible;
        //        if (systemCustomPageList.ShowHelpTab) {
        //            helpBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.HelpTabUrl);
        //            if (systemCustomPageList.HelpTabShowOnly) {
        //                helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
        //                helpBrowser.CoreWebView2.Settings.IsScriptEnabled = false; helpBrowser.CoreWebView2.Settings.IsSwipeNavigationEnabled = false;
        //                helpBrowser.CoreWebView2.Settings.IsZoomControlEnabled = false;
        //            }
        //        }
        //    }
        //}
 



        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString().ToLower();
                    if (headername == "userid".ToLower()) { e.Visibility = Visibility.Hidden; }
                    else { e.Header = await DBOperations.DBTranslation(headername); }
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    SolutionWebsiteList search = e as SolutionWebsiteList;
                    return search.WebsiteName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.Description) && search.Description.ToLower().Contains(filter.ToLower());
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new List<GenericTable>();
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (List<GenericTable>)DgListView.SelectedItem;
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (List<GenericTable>)DgListView.SelectedItem;
            /*
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.SolutionWebsiteList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
            */
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (List<GenericTable>)DgListView.SelectedItem;
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (List<GenericTable>)DgListView.SelectedItem; }
            else { selectedRecord = new List<GenericTable>(); }
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                //selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                //selectedRecord.WebsiteName = txt_websiteName.Text;
                //selectedRecord.Description = txt_description.Text;

                //selectedRecord.MinimalReadAccessValue = ((SolutionUserRoleList)cb_minimalReadAccessValue.SelectedItem).MinimalAccessValue;
                //selectedRecord.MinimalWriteAccessValue = ((SolutionUserRoleList)cb_minimalWriteAccessValue.SelectedItem).MinimalAccessValue;

                //selectedRecord.UserId = App.UserData.Authentification.Id;
                //selectedRecord.Active = (bool)chb_active.IsChecked;
                //selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                /*if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.SolutionWebsiteList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.SolutionWebsiteList, httpContent, null, App.UserData.Authentification.Token); }
                
                if (dBResult.RecordCount > 0) {
                    selectedRecord = new SolutionWebsiteList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
                */
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (List<GenericTable>)DgListView.SelectedItem : new List<GenericTable>();
            SetRecord(false);
        }

        private void SetRecord(bool? showForm = null, bool copy = false) {
            /*
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            txt_websiteName.Text = selectedRecord.WebsiteName;
            txt_description.Text = selectedRecord.Description;

            cb_minimalReadAccessValue.SelectedItem = txt_id.Value == 0 ? userRoleList.FirstOrDefault() : userRoleList.FirstOrDefault(a => a.MinimalAccessValue == selectedRecord.MinimalReadAccessValue);
            cb_minimalWriteAccessValue.SelectedItem = txt_id.Value == 0 ? userRoleList.FirstOrDefault() : userRoleList.FirstOrDefault(a => a.MinimalAccessValue == selectedRecord.MinimalWriteAccessValue);

            chb_active.IsChecked = (selectedRecord.Id == 0) ? bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_activeNewInputDefault").Value) : selectedRecord.Active;
            */
            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; /*MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id;*/ MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; /*MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id;*/ MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key.ToLower() == "beh_closeformaftersave".ToLower()).Value);
            }

        }


        //TODO Library implementation
        //private void DataListDoubleClick(object sender, MouseButtonEventArgs e) {
        //    if (lb_dataList.SelectedItems.Count > 0) {
        //        //webHelp.Text = ((WebCodeLibraryList)lb_dataList.SelectedItem).Content;
        //        ti_helpEditor.IsSelected = true;
        //    }
        //}
    }
}