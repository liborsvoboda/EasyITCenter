﻿using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace EasyITSystemCenter.Pages {

    public partial class SystemParameterListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static SystemParameterList selectedRecord = new SystemParameterList();

        //Param types list
        private readonly ObservableCollection<ReportSelection> ParamTypes = new ObservableCollection<ReportSelection>() {
                                                               new ReportSelection() { Name = "bit" },new ReportSelection() { Name = "string" },new ReportSelection() { Name = "int" },new ReportSelection() { Name = "numeric" },
            new ReportSelection() { Name = "date" },new ReportSelection() { Name = "dateFormat" },new ReportSelection() { Name = "time" },new ReportSelection() { Name = "timeFormat" },new ReportSelection() { Name = "datetime" },new ReportSelection() { Name = "datetimeFormat" },
                                                             };

        private List<SystemParameterList> parameterList = new List<SystemParameterList>();

        public SystemParameterListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                _ = DataOperations.TranslateFormFields(ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            cb_type.ItemsSource = ParamTypes;

            _ = LoadDataList();
            SetRecord(false);
        }

        //change datasource
        public async Task<bool> LoadDataList() {
            List<SolutionUserList> userList = new List<SolutionUserList>();
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                parameterList = await CommApi.GetApiRequest<List<SystemParameterList>>(ApiUrls.EasyITCenterSystemParameterList, App.UserData.Authentification.Id.ToString(), App.UserData.Authentification.Token);
                userList = await CommApi.GetApiRequest<List<SolutionUserList>>(ApiUrls.EasyITCenterSolutionUserList, null, App.UserData.Authentification.Token);

                parameterList.ForEach(async param => {
                    param.Translation = await DBOperations.DBTranslation(param.SystemName);
                    param.User = userList.Where(a => a.Id == param.UserId).Select(a => a.Username).FirstOrDefault();
                });

                DgListView.ItemsSource = parameterList;
                DgListView.Items.Refresh();
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        // set translate columns in listView
        private void DgListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(e => {
                string headername = e.Header.ToString();
                if (headername == "SystemName") { e.Header = Resources["systemName"].ToString(); e.DisplayIndex = 1; }
                else if (headername == "Translation") { e.Header = Resources["translation"].ToString(); e.DisplayIndex = 2; }
                else if (headername == "Value") { e.Header = Resources["value"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; }
                else if (headername == "Type") { e.Header = Resources["type"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; }
                else if (headername == "Description") { e.Header = Resources["description"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; }
                else if (headername == "User") { e.Header = Resources["userName"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; }
                else if (headername == "TimeStamp") { e.Header = Resources["timestamp"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                else if (headername == "Id") e.DisplayIndex = 0;
                else if (headername == "UserId") e.Visibility = Visibility.Hidden;
            });
        }

        //change filter fields
        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    SystemParameterList param = e as SystemParameterList;
                    return param.SystemName.ToLower().Contains(filter.ToLower())
                    || param.Value.ToLower().Contains(filter.ToLower())
                    || param.Type.ToLower().Contains(filter.ToLower())
                    || param.Type.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(param.Description) && param.Description.ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new SystemParameterList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (SystemParameterList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (SystemParameterList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.EasyITCenterSystemParameterList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                _ = LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (SystemParameterList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) {
                selectedRecord = (SystemParameterList)DgListView.SelectedItem;
            }
            else { selectedRecord = new SystemParameterList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        //change dataset save method
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.SystemName = txt_systemName.Text;
                selectedRecord.Value = txt_value.Text;
                selectedRecord.Type = ((ReportSelection)cb_type.SelectedItem).Name;
                selectedRecord.Description = txt_description.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                selectedRecord.User = null;
                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterSystemParameterList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterSystemParameterList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    // Refresh User Params
                    App.ParameterList = await CommApi.GetApiRequest<List<SystemParameterList>>(ApiUrls.EasyITCenterSystemParameterList, null, null);

                    selectedRecord = new SystemParameterList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (SystemParameterList)DgListView.SelectedItem : new SystemParameterList();
            SetRecord(false);
        }

        //change dataset prepare for working
        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;

            desc_translation.Content = selectedRecord.Translation;
            txt_systemName.Text = selectedRecord.SystemName;
            txt_value.Text = selectedRecord.Value;
            cb_type.Text = selectedRecord.Type;
            txt_description.Text = selectedRecord.Description;

            //Only for Admin: Owner/UserId Selection Allow Editing Server Default Values
            if (App.UserData.Authentification.Role == "Admin" || selectedRecord.UserId == App.UserData.Authentification.Id)
                btn_save.IsEnabled = true;
            else btn_save.IsEnabled = false;

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key.ToLower() == "beh_closeformaftersave".ToLower()).Value);
            }
        }

        private void Value_TextChanged(object sender, TextChangedEventArgs e) => btn_save.IsEnabled = false;

        private void Type_SelectionChanged(object sender, SelectionChangedEventArgs e) => btn_save.IsEnabled = false;

        private void Check_Click(object sender, RoutedEventArgs e) {
            try {
                btn_save.IsEnabled = false;
                var test = MathTypeOperations.CheckTypeValue((string)cb_type.SelectedValue, txt_value.Text);
                btn_save.IsEnabled = test.Item2 && (App.UserData.Authentification.Role == "Admin" || selectedRecord.UserId == App.UserData.Authentification.Id);
                lbl_paramCheckResult.Content = (string)test.Item1;
            } catch { }
        }
    }
}