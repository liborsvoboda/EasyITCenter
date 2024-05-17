using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace EasyITSystemCenter.Pages {

    public partial class SystemCustomPageListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static SystemCustomPageList selectedRecord = new SystemCustomPageList();

        public SystemCustomPageListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                _ = DataOperations.TranslateFormFields(ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                DgListView.ItemsSource = await CommApi.GetApiRequest<List<SystemCustomPageList>>(ApiUrls.EasyITCenterSystemCustomPageList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString().ToLower();
                    if (headername == "PageName".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "Description".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                    else if (headername == "IsMultiFormType".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; }
                    else if (headername == "IsSystemWebModule".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 4; }
                    else if (headername == "IsServerUrl".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 5; }
                    else if (headername == "IsWebServer".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 6; }
                    else if (headername == "IsGraphType".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 7; }
                    else if (headername == "StartupUrl".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 8; }
                    else if (headername == "StartupSubFolder".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 9; }
                    else if (headername == "StartupCommand".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 10; }
                    else if (headername == "DevModeEnabled".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 11; }
                    else if (headername == "ShowHelpTab".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 12; }
                    else if (headername == "HelpTabShowOnly".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 13; }
                    else if (headername == "HelpTabUrl".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 14; }
                    else if (headername == "Active".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "Timestamp".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }

                    else if (headername == "Id".ToLower()) e.DisplayIndex = 0;
                    else if (headername == "UserId".ToLower()) e.Visibility = Visibility.Hidden;

                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    SystemCustomPageList search = e as SystemCustomPageList;
                    return search.PageName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.HelpTabUrl) && search.HelpTabUrl.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.Description) && search.Description.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.StartupUrl) && search.StartupUrl.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.StartupSubFolder) && search.StartupSubFolder.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.StartupCommand) && search.StartupCommand.ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new SystemCustomPageList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (SystemCustomPageList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (SystemCustomPageList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.EasyITCenterSystemCustomPageList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (SystemCustomPageList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }


        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (SystemCustomPageList)DgListView.SelectedItem; }
            else { selectedRecord = new SystemCustomPageList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }


        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.PageName = txt_pageName.Text;
                selectedRecord.Description = txt_description.Text;

                selectedRecord.IsMultiFormType = (bool)chb_isMultiFormType.IsChecked;
                selectedRecord.IsSystemWebModule = (bool)chb_isSystemWebModule.IsChecked;
                selectedRecord.IsServerUrl = (bool)chb_isServerUrl.IsChecked;
                selectedRecord.IsGraphType = (bool)chb_isGraphType.IsChecked;
                selectedRecord.StartupUrl = (bool)chb_isMultiFormType.IsChecked || (bool)chb_isGraphType.IsChecked ? txt_startupUrl.Text : null;

                selectedRecord.DevModeEnabled = (bool)chb_devModeEnabled.IsChecked;
                selectedRecord.ShowHelpTab = (bool)chb_showHelpTab.IsChecked;
                selectedRecord.HelpTabShowOnly = (bool)chb_helpTabShowOnly.IsChecked;
                selectedRecord.HelpTabUrl = txt_helpTabUrl.Text;

                selectedRecord.IsWebServer = (bool)chb_isWebServer.IsChecked;
                selectedRecord.StartupSubFolder = txt_startupSubFolder.Text;
                selectedRecord.StartupCommand = txt_startupCommand.Text;

                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterSystemCustomPageList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterSystemCustomPageList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new SystemCustomPageList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }


        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (SystemCustomPageList)DgListView.SelectedItem : new SystemCustomPageList();
            SetRecord(false);
        }


        private void SetRecord(bool? showForm = null, bool copy = false) {

            try {
                txt_id.Value = (copy) ? 0 : selectedRecord.Id;
                txt_pageName.Text = selectedRecord.PageName;
                txt_description.Text = selectedRecord.Description;

                chb_isMultiFormType.IsChecked = selectedRecord.IsMultiFormType;
                chb_isServerUrl.IsChecked = selectedRecord.IsServerUrl;
                chb_isGraphType.IsChecked = selectedRecord.IsGraphType;
                txt_startupUrl.Text = selectedRecord.StartupUrl;

                chb_devModeEnabled.IsChecked = selectedRecord.DevModeEnabled;
                chb_showHelpTab.IsChecked = selectedRecord.ShowHelpTab;
                chb_helpTabShowOnly.IsChecked = selectedRecord.HelpTabShowOnly;
                txt_helpTabUrl.Text = selectedRecord.HelpTabUrl;

                chb_isSystemWebModule.IsChecked = selectedRecord.IsSystemWebModule;
                chb_isWebServer.IsChecked = selectedRecord.IsWebServer;
                txt_startupSubFolder.Text = selectedRecord.StartupSubFolder;
                txt_startupCommand.Text = selectedRecord.StartupCommand;

                chb_active.IsChecked = (selectedRecord.Id == 0) ? bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_activeNewInputDefault").Value) : selectedRecord.Active;

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key.ToLower() == "beh_closeformaftersave".ToLower()).Value);
            }
        }


        private void MenuTypeSelected(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown) {
                switch (((CheckBox)sender).Name) {
                    case "chb_isMultiFormType":
                        chb_isGraphType.IsChecked = false;
                        if ((bool)chb_isMultiFormType.IsChecked) { chb_isWebServer.IsEnabled = chb_isSystemWebModule.IsEnabled = chb_isServerUrl.IsEnabled = txt_startupUrl.IsEnabled = chb_devModeEnabled.IsEnabled = chb_showHelpTab.IsEnabled = chb_helpTabShowOnly.IsEnabled = true; }
                        else { chb_isWebServer.IsEnabled = chb_isSystemWebModule.IsEnabled = chb_isServerUrl.IsEnabled = txt_startupUrl.IsEnabled = chb_devModeEnabled.IsEnabled = chb_showHelpTab.IsEnabled = chb_helpTabShowOnly.IsEnabled = false; }
                        chb_isSystemWebModule.IsChecked = chb_isServerUrl.IsChecked = false;
                        break;
                    case "chb_isGraphType":
                        chb_isMultiFormType.IsChecked = chb_isSystemWebModule.IsChecked = chb_isServerUrl.IsChecked = chb_isWebServer.IsChecked = chb_devModeEnabled.IsChecked = chb_showHelpTab.IsChecked = chb_helpTabShowOnly.IsChecked = false;
                        txt_startupUrl.Text = txt_startupCommand.Text = txt_startupSubFolder.Text = null;
                        chb_isWebServer.IsEnabled = chb_isSystemWebModule.IsEnabled = chb_isServerUrl.IsEnabled = txt_startupUrl.IsEnabled
                            = txt_startupCommand.IsEnabled = txt_startupSubFolder.IsEnabled = chb_devModeEnabled.IsEnabled = chb_showHelpTab.IsEnabled = chb_helpTabShowOnly.IsEnabled = false;
                        break;
                    default:
                        break;
                }
            }
        }


        private void IsServerEnabled(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown) {
                if ((bool)chb_isWebServer.IsChecked) {
                    txt_startupCommand.IsEnabled = txt_startupSubFolder.IsEnabled = true;
                } else {
                    txt_startupCommand.Text = txt_startupSubFolder.Text = null;
                    txt_startupCommand.IsEnabled = txt_startupSubFolder.IsEnabled = false;
                }
            }
        }


        private void ModuleTypeSelected(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown) {
                switch (((CheckBox)sender).Name) {
                    case "chb_isSystemWebModule":
                        chb_isServerUrl.IsChecked = false;
                        break;
                    case "chb_isServerUrl":
                        chb_isSystemWebModule.IsChecked = false;
                        break;
                    default:
                        break;
                }
            }
        }

        private void HelpTabChecked_Changed(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown) {
                txt_helpTabUrl.IsEnabled = (bool)chb_showHelpTab.IsChecked ? true : false;
                chb_helpTabShowOnly.IsEnabled = (bool)chb_showHelpTab.IsChecked ? true : false;
                if (!(bool)chb_showHelpTab.IsChecked) { chb_helpTabShowOnly.IsChecked = false; }
            }
        }
    }
}