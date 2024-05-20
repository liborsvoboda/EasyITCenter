using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using MahApps.Metro.Controls.Dialogs;
using Microsoft.Web.WebView2.Core;
using Prism.Modularity;
using SimpleBrowser;
using System;
using System.Collections.Generic;
using System.Data;
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
        public static DataRowView selectedRecord = null;

        DataTable definedDataList = new DataTable();
        SystemCustomPageList systemCustomPageList = new SystemCustomPageList();
        List<SolutionMixedEnumList> solutionMixedEnumList = new List<SolutionMixedEnumList>();
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

                    IsEnabled = false;
                    IsEnabledChanged += (s, e) => {
                        if (IsEnabled/* && systemCustomPageList.Id == 0*/) {
                            UuidFromMainFormLoad();
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

                if (systemCustomPageList.Id == 0) {
                    systemCustomPageList = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList, this.Uid.ToString(), App.UserData.Authentification.Token);
                }

                //Initiate Existing WebViewForms When Generated
                webBrowser.CoreWebView2InitializationCompleted += WebBrowser_CoreWebView2InitializationCompleted;
                _ = webBrowser.EnsureCoreWebView2Async(); if (systemCustomPageList.ShowHelpTab) { _ = helpBrowser.EnsureCoreWebView2Async(); }

                _ = FormOperations.TranslateFormFields(ListView);

            }  catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; 
            return true;
        }

        //Start Loading and Generaing Process
        private async void UuidFromMainFormLoad() {
            try {
                //Load Agenda Data
                //await webBrowser.EnsureCoreWebView2Async();
                await LoadDataList(); 
                /*if (systemCustomPageList.ShowHelpTab) { _ = helpBrowser.EnsureCoreWebView2Async(); }*/

                //Load DefinedForm Data + Inherider Dial
                await GetGenericTableData();



                //DOM Initiate
                //webElement = new Dictionary<string, string>();
                //webElement.Add(systemCustomPageList.ColumnName, "text");
                //devToolsContext = await webBrowser.CoreWebView2.CreateDevToolsContextAsync();
                //var htmlDivElement = await devToolsContext.QuerySelectorAsync<HtmlDivElement>("#myDivElementId");
                //await htmlDivElement.SetInnerTextAsync("Welcome!");
                //await htmlDivElement.GetInnerTextAsync();



                MainWindow.ProgressRing = Visibility.Hidden;
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

     
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
                bool status = false;
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    DataRowView search = e as DataRowView;
                    return search.ToJson().ToLower().Contains(filter.ToLower());
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }



        public void NewRecord() {
            selectedRecord = null;
            dataViewSupport.SelectedRecordId = int.Parse(selectedRecord?.Row.ItemArray[0].ToString());
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (DataRowView)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = int.Parse(selectedRecord?.Row.ItemArray[0].ToString());
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (DataRowView)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = int.Parse(selectedRecord?.Row.ItemArray[0].ToString());

            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + int.Parse(selectedRecord?.Row.ItemArray[0].ToString()), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.SolutionWebsiteList, selectedRecord?.Row.ItemArray[0].ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }

        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (DataRowView)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = int.Parse(selectedRecord?.Row.ItemArray[0].ToString());
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (DataRowView)DgListView.SelectedItem; }
            else { selectedRecord = null; }
            dataViewSupport.SelectedRecordId = int.Parse(selectedRecord?.Row.ItemArray[0].ToString());
            SetRecord(false);
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                

                //CYCLE SAVE RECORD BY SAVE CLICK 


                string json = Newtonsoft.Json.JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                /*if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.SolutionWebsiteList, httpContent, null, App.UserData.Authentification.Token);
                } else { dBResult = await CommApi.PostApiRequest(ApiUrls.SolutionWebsiteList, httpContent, null, App.UserData.Authentification.Token); }
               if (dBResult.RecordCount > 0) { selectedRecord = new SolutionWebsiteList(); await LoadDataList(); SetRecord(null);
                } else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); } */
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (DataRowView)DgListView.SelectedItem : null;
            SetRecord(false);
        }

        private void SetRecord(bool? showForm = null, bool copy = false) {
            try {
                //CYCLE UPDATE FORM VALUES BY SELECTWEDOTHER RECORD 







            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = int.Parse(selectedRecord?.Row.ItemArray[0].ToString()) != 0;
                MainWindow.dataGridSelectedId = selectedRecord == null ? 0 : int.Parse(selectedRecord?.Row.ItemArray[0].ToString()); MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = int.Parse(selectedRecord?.Row.ItemArray[0].ToString()) != 0;
                MainWindow.dataGridSelectedId = selectedRecord == null ? 0 : int.Parse(selectedRecord?.Row.ItemArray[0].ToString()); MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key.ToLower() == "beh_closeformaftersave".ToLower()).Value);
            }

        }



        /// <summary>
        /// Generic API Request
        /// </summary>
        /// <returns></returns>
        private async Task<bool> GetGenericTableData() {

            List<Dictionary<string, string>> parameters = new List<Dictionary<string, string>>();
            parameters.Add(new Dictionary<string, string>() { { "SpProcedure", "SpGetTableDataList" } });
            parameters.Add(new Dictionary<string, string>() { { "tableName", systemCustomPageList.DbtableName } });
            parameters.Add(new Dictionary<string, string>() { { "userRole", App.UserData.Authentification.Role } });
            parameters.Add(new Dictionary<string, string>() { { "userId", App.UserData.Authentification.Id.ToString() } });

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(parameters);
            StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            DataTable genericTableList = await CommApi.PostCustomListApiRequest(ApiUrls.ServerApi, httpContent, "DatabaseServices/SpProcedure/GetGenericDataListbyParams", App.UserData.Authentification.Token);
            definedDataList = genericTableList;
            DgListView.ItemsSource = genericTableList.DefaultView;

            await LoadInheritedDataList();

            //Generate User Form 
            userForm = GlobalGenerators.XamlFormGenerators.StandardXamlFormViewGenerator(ref userForm, definedDataList, systemCustomPageList, solutionMixedEnumList);
            userForm.UpdateLayout();

            return true;

        }



        private void WebBrowser_CoreWebView2InitializationCompleted(object sender, CoreWebView2InitializationCompletedEventArgs e) {
            try {

                webBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.StartupUrl);

                if (systemCustomPageList.DevModeEnabled) {
                    webBrowser.CoreWebView2.Settings.AreDevToolsEnabled = webBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;
                    helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;

                } else {

                    webBrowser.CoreWebView2.Settings.AreDevToolsEnabled = webBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
                    if (systemCustomPageList.ShowHelpTab) { helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false; }
                }
            } catch { } try {

                if (systemCustomPageList.ShowHelpTab) {
                    ti_helpEditor.Visibility = Visibility.Visible;
                    if (systemCustomPageList.ShowHelpTab) {
                        helpBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.HelpTabUrl);
                        if (systemCustomPageList.HelpTabShowOnly) {
                            helpBrowser.CoreWebView2.Settings.AreDevToolsEnabled = helpBrowser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
                        }
                    }
                }
            } catch { } try {

                webBrowser.CoreWebView2.ContextMenuRequested += async delegate (object sender1, CoreWebView2ContextMenuRequestedEventArgs args) {
                    IList<CoreWebView2ContextMenuItem> menuList = args.MenuItems;
                    CoreWebView2ContextMenuItem openConsole = webBrowser.CoreWebView2.Environment.CreateContextMenuItem(await DBOperations.DBTranslation("openConsole"), null, CoreWebView2ContextMenuItemKind.Command); openConsole.CustomItemSelected += openConsoleSelected;
                    CoreWebView2ContextMenuItem openTaskManager = webBrowser.CoreWebView2.Environment.CreateContextMenuItem(await DBOperations.DBTranslation("printPage"), null, CoreWebView2ContextMenuItemKind.Command); openTaskManager.CustomItemSelected += openTaskManagerSelected;
                    menuList.Add(openConsole);
                    menuList.Add(openTaskManager);
                };
            } catch { }
        }



        private void openConsoleSelected(object sender, object e) { webBrowser.CoreWebView2.OpenDevToolsWindow(); }
        private void openTaskManagerSelected(object sender, object e) { webBrowser.CoreWebView2.ShowPrintUI(); }
        private async Task<bool> LoadInheritedDataList() {
            if (systemCustomPageList?.InheritedSetName?.Length > 0) {
                solutionMixedEnumList = await CommApi.GetApiRequest<List<SolutionMixedEnumList>>(ApiUrls.EasyITCenterSolutionMixedEnumList, "ByGroup/" + systemCustomPageList.InheritedSetName, App.UserData.Authentification.Token);
            }
            return true;
        }

    }
}