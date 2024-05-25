﻿using EasyITSystemCenter.Api;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using ICSharpCode.AvalonEdit.Highlighting;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace EasyITSystemCenter.Pages {

    public partial class ServerApiSecurityListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static ServerApiSecurityList selectedRecord = new ServerApiSecurityList();

        private List<SolutionMixedEnumList> solutionMixedEnumList = new List<SolutionMixedEnumList>();
        private List<ServerApiSecurityList> ServerApiSecurityList = new List<ServerApiSecurityList>();
        private List<SolutionUserRoleList> userRoleList = new List<SolutionUserRoleList>();

        public ServerApiSecurityListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                _ = FormOperations.TranslateFormFields(ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                solutionMixedEnumList = await CommunicationManager.GetApiRequest<List<SolutionMixedEnumList>>(ApiUrls.EasyITCenterSolutionMixedEnumList, "ByGroup/ServerApiTypes", App.UserData.Authentification.Token);
                userRoleList = await CommunicationManager.GetApiRequest<List<SolutionUserRoleList>>(ApiUrls.EasyITCenterSolutionUserRoleList, null, App.UserData.Authentification.Token);
                ServerApiSecurityList = await CommunicationManager.GetApiRequest<List<ServerApiSecurityList>>(ApiUrls.EasyITCenterServerApiSecurityList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);

                solutionMixedEnumList.ForEach(async tasktype => { tasktype.Translation = await DBOperations.DBTranslation(tasktype.Name); });
                userRoleList.ForEach(async role => { role.Translation = await DBOperations.DBTranslation(role.SystemName); });
                ServerApiSecurityList.ForEach(module => {
                    module.ApiTypeTranslation = solutionMixedEnumList.FirstOrDefault(a => a.Name == module.InheritedApiType).Translation;
                });

                DgListView.ItemsSource = ServerApiSecurityList;
                DgListView.Items.Refresh();
                cb_InheritedApiType.ItemsSource = solutionMixedEnumList;
                cb_WriteAllowedRoles.ItemsSource = userRoleList.OrderBy(a => a.Translation).ToList();
                cb_ReadAllowedRoles.ItemsSource = userRoleList.OrderBy(a => a.Translation).ToList();

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString().ToLower();
                    if (headername == "name".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "ApiTypeTranslation".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                    else if (headername == "urlsubpath".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; }
                    else if (headername == "WriteRestrictedAccess".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 4; }
                    else if (headername == "ReadRestrictedAccess".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 5; }
                    else if (headername == "redirecttologinservice".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 6; }
                    else if (headername == "redirectpathonerror".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 7; }
                    else if (headername == "WriteAllowedRoles".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 8; }
                    else if (headername == "ReadAllowedRoles".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 9; }
                    else if (headername == "active".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 10; }
                    else if (headername == "timestamp".ToLower()) { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    else if (headername == "id".ToLower()) e.DisplayIndex = 0;

                    else if (headername == "userid".ToLower()) e.Visibility = Visibility.Hidden;
                    else if (headername == "description".ToLower()) e.Visibility = Visibility.Hidden;
                    else if (headername == "InheritedApiType".ToLower()) e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    ServerApiSecurityList search = e as ServerApiSecurityList;
                    return search.Name.ToLower().Contains(filter.ToLower())
                    || search.ApiTypeTranslation.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.UrlSubPath) && search.UrlSubPath.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.RedirectPathOnError) && search.RedirectPathOnError.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(search.Description) && search.Description.ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new ServerApiSecurityList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (ServerApiSecurityList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (ServerApiSecurityList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommunicationManager.DeleteApiRequest(ApiUrls.EasyITCenterServerApiSecurityList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(false, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (ServerApiSecurityList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (ServerApiSecurityList)DgListView.SelectedItem; } else { selectedRecord = new ServerApiSecurityList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);

                selectedRecord.InheritedApiType = ((SolutionMixedEnumList)cb_InheritedApiType.SelectedItem).Name;
                selectedRecord.Name = txt_name.Text;
                selectedRecord.Description = txt_description.Text;
                selectedRecord.UrlSubPath = txt_urlSubPath.Text;

                selectedRecord.WriteAllowedRoles = "";
                for (int i = 0; i < cb_WriteAllowedRoles.SelectedItems.Count; i++) { selectedRecord.WriteAllowedRoles += ((SolutionUserRoleList)cb_WriteAllowedRoles.SelectedItems[i]).SystemName + ","; }
                selectedRecord.ReadAllowedRoles = "";
                for (int i = 0; i < cb_ReadAllowedRoles.SelectedItems.Count; i++) { selectedRecord.ReadAllowedRoles += ((SolutionUserRoleList)cb_ReadAllowedRoles.SelectedItems[i]).SystemName + ","; }

                selectedRecord.WriteRestrictedAccess = (bool)chb_WriteRestrictedAccess.IsChecked;
                selectedRecord.ReadRestrictedAccess = (bool)chb_ReadRestrictedAccess.IsChecked;
                selectedRecord.RedirectPathOnError = txt_redirectPathOnError.Text;

                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommunicationManager.PutApiRequest(ApiUrls.EasyITCenterServerApiSecurityList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommunicationManager.PostApiRequest(ApiUrls.EasyITCenterServerApiSecurityList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new ServerApiSecurityList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(false, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (ServerApiSecurityList)DgListView.SelectedItem : new ServerApiSecurityList();
            SetRecord(false);
        }

        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
		
		try { cb_InheritedApiType.SelectedItem = (selectedRecord.Id == 0) ? solutionMixedEnumList.FirstOrDefault() : solutionMixedEnumList.FirstOrDefault(a => a.Name == selectedRecord.InheritedApiType);
            txt_name.Text = selectedRecord.Name;
            txt_description.Text = selectedRecord.Description;
            txt_urlSubPath.Text = selectedRecord.UrlSubPath;

            cb_WriteAllowedRoles.SelectedItems.Clear();
            if (!string.IsNullOrWhiteSpace(selectedRecord.WriteAllowedRoles)) 
                    { selectedRecord.WriteAllowedRoles.Split(',').ToList().ForEach(role => { if (!string.IsNullOrEmpty(role)) cb_WriteAllowedRoles.SelectedItems.Add(userRoleList.First(a => a.SystemName == role)); }); }

            cb_ReadAllowedRoles.SelectedItems.Clear();
            if (!string.IsNullOrWhiteSpace(selectedRecord.ReadAllowedRoles)) 
                    { selectedRecord.ReadAllowedRoles.Split(',').ToList().ForEach(role => { if (!string.IsNullOrEmpty(role)) cb_ReadAllowedRoles.SelectedItems.Add(userRoleList.First(a => a.SystemName == role)); }); }


            chb_WriteRestrictedAccess.IsChecked = selectedRecord.WriteRestrictedAccess;
            chb_ReadRestrictedAccess.IsChecked = selectedRecord.ReadRestrictedAccess;
            txt_redirectPathOnError.Text = selectedRecord.RedirectPathOnError;

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


        private void RestrictedAccessChanged(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown) {
                txt_redirectPathOnError.Text = null;
                txt_redirectPathOnError.IsEnabled = !(bool)chb_WriteRestrictedAccess.IsChecked;
                txt_redirectPathOnError.IsEnabled = !(bool)chb_ReadRestrictedAccess.IsChecked;
            }
        }
    }
}