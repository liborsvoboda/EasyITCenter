using CefSharp;
using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Web.WebView2.Core;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;



namespace EasyITSystemCenter.Pages {

    public partial class GenTblFrmWebPage : UserControl {

        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static Object selectedRecord = new Object();

        SystemCustomPageList systemCustomPageList = new SystemCustomPageList();

        public GenTblFrmWebPage() {
            try {

                InitializeComponent();

                _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);
                _ = DataOperations.TranslateFormFields(ListForm);

                if (!App.appRuntimeData.webServerRunning) {
                    _ = MainWindow.ShowMessageOnMainWindow(true, DBOperations.DBTranslation("WebServerNotRunningCheckClientConfiguration").GetAwaiter().GetResult());
                }
                else {

                    //Enabling By TabController After Inserted ID, Load Data On Startup Only
                    IsEnabled = false;
                    IsEnabledChanged += (s, e) => {
                        if (IsEnabled && systemCustomPageList == new SystemCustomPageList()) {
                            _ = LoadDataList();
                            WebBrowserInitializeAsync();
                        }

                    };
                }

                SetRecord(false);
            } catch (Exception ex) { }
            MainWindow.ProgressRing = Visibility.Hidden;
        }


        //change datasource
        public async Task<bool> LoadDataList() {

            MainWindow.ProgressRing = Visibility.Visible;
            try {
               
                systemCustomPageList = await CommApi.GetApiRequest<SystemCustomPageList>(ApiUrls.EasyITCenterSystemCustomPageList, this.Uid.ToString(), App.UserData.Authentification.Token);
                

                //webBrowser.CoreWebView2.OpenDefaultDownloadDialog();
                //webBrowser.CoreWebView2.OpenDevToolsWindow();
                //webBrowser.CoreWebView2.OpenTaskManagerWindow();
                //webBrowser.CoreWebView2.ShowPrintUI();
                //webBrowser.CoreWebView2.CapturePreviewAsync(CoreWebView2CapturePreviewImageFormat.Png);
                //webBrowser.CoreWebView2.ExecuteScriptWithResultAsync("");
                //webBrowser.CoreWebView2.ExecuteScriptAsync("");

            } 

            catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; 
            return true;
        }


        async void WebBrowserInitializeAsync() {
            webBrowser.Source = new Uri(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value + App.appRuntimeData.webDataUrlPath + systemCustomPageList.StartupUrl);
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
        }


        //private void WebMessageReceived(object sender, CoreWebView2WebMessageReceivedEventArgs e) {
        //    webBrowser.CoreWebView2.PostWebMessageAsString(e.WebMessageAsJson);
        //}



        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString().ToLower();
                    if (headername == "websitename".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "description".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                    else if (headername == "MinimalReadAccessRole".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; }
                    else if (headername == "MinimalWriteAccessRole".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 4; }

                    else if (headername == "active".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "timestamp".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    else if (headername == "id".ToLower()) e.DisplayIndex = 0;
                    else if (headername == "userid".ToLower()) e.Visibility = Visibility.Hidden;
                    else if (headername == "MinimalReadAccessValue".ToLower()) e.Visibility = Visibility.Hidden;
                    else if (headername == "MinimalWriteAccessValue".ToLower()) e.Visibility = Visibility.Hidden;
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
            selectedRecord = new SolutionWebsiteList();
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (SolutionWebsiteList)DgListView.SelectedItem;
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (SolutionWebsiteList)DgListView.SelectedItem;
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
            selectedRecord = (SolutionWebsiteList)DgListView.SelectedItem;
            //dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (SolutionWebsiteList)DgListView.SelectedItem; }
            else { selectedRecord = new SolutionWebsiteList(); }
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
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (SolutionWebsiteList)DgListView.SelectedItem : new SolutionWebsiteList();
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