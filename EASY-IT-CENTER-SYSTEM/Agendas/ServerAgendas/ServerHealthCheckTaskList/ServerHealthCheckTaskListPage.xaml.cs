﻿using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
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

    public partial class ServerHealthCheckTaskListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static ServerHealthCheckTaskList selectedRecord = new ServerHealthCheckTaskList();

        public ServerHealthCheckTaskListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                try {
                    _ = DataOperations.TranslateFormFields(ListForm);

                    lbl_id.Content = Resources["id"].ToString();
                    lbl_taskName.Content = Resources["taskName"].ToString();

                    gb_type.Header = Resources["taskType"].ToString();
                    rb_driveSizeCheck.Content = Resources["driveSizeCheck"].ToString();
                    lbl_serverDrive.Content = Resources["serverDrive"].ToString();
                    lbl_sizeMb.Content = Resources["sizeMb"].ToString();
                    rb_folderExistCheck.Content = Resources["folderExistCheck"].ToString();
                    lbl_folderPath.Content = Resources["folderPath"].ToString();
                    rb_processMemoryCheck.Content = Resources["processMemoryCheck"].ToString();
                    rb_allocatedMemoryCheck.Content = Resources["allocatedMemoryCheck"].ToString();
                    rb_pingCheck.Content = Resources["pingCheck"].ToString();
                    rb_tcpPortCheck.Content = Resources["tcpPortCheck"].ToString();
                    lbl_ipAddress.Content = Resources["ipAddress"].ToString();
                    lbl_port.Content = Resources["port"].ToString();
                    rb_serverUrlPathCheck.Content = Resources["serverUrlPathCheck"].ToString();
                    rb_urlPathCheck.Content = Resources["urlPathCheck"].ToString();
                    lbl_serverUrlPath.Content = Resources["serverUrlPath"].ToString();
                    lbl_urlPath.Content = Resources["urlPath"].ToString();
                    rb_mssqlConnectionCheck.Content = Resources["mssqlConnectionCheck"].ToString();
                    rb_mysqlConnectionCheck.Content = Resources["mysqlConnectionCheck"].ToString();
                    rb_oracleConnectionCheck.Content = Resources["oracleConnectionCheck"].ToString();
                    rb_postgresConnectionCheck.Content = Resources["postgresConnectionCheck"].ToString();
                    lbl_dbSqlConnection.Content = Resources["dbSqlConnection"].ToString();

                    lbl_active.Content = Resources["active"].ToString();
                    btn_save.Content = Resources["btn_save"].ToString();
                    btn_cancel.Content = Resources["btn_cancel"].ToString();
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                DgListView.ItemsSource = await CommApi.GetApiRequest<List<ServerHealthCheckTaskList>>(ApiUrls.EasyITCenterServerHealthCheckTaskList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);

                SystemLocalEnumSets.HealthCheckTypes.AsEnumerable().ToList().ForEach(async menutype => { menutype.Value = await DBOperations.DBTranslation(menutype.Name); });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        private void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(e => {
                    string headername = e.Header.ToString();
                    if (headername == "TaskName") e.Header = Resources["taskName"].ToString();
                    else if (headername == "Active") { e.Header = Resources["active"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "Timestamp") { e.Header = Resources["timestamp"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                    else if (headername == "Type") e.Visibility = Visibility.Hidden;
                    else if (headername == "ServerDrive") e.Visibility = Visibility.Hidden;
                    else if (headername == "FolderPath") e.Visibility = Visibility.Hidden;
                    else if (headername == "DbSqlConnection") e.Visibility = Visibility.Hidden;
                    else if (headername == "IpAddress") e.Visibility = Visibility.Hidden;
                    else if (headername == "ServerUrlPath") e.Visibility = Visibility.Hidden;
                    else if (headername == "UrlPath") e.Visibility = Visibility.Hidden;
                    else if (headername == "SizeMb") e.Visibility = Visibility.Hidden;
                    else if (headername == "Port") e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    ServerHealthCheckTaskList user = e as ServerHealthCheckTaskList;
                    return user.TaskName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.UrlPath) && user.UrlPath.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.DbSqlConnection) && user.DbSqlConnection.ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new ServerHealthCheckTaskList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (ServerHealthCheckTaskList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (ServerHealthCheckTaskList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.EasyITCenterServerHealthCheckTaskList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (ServerHealthCheckTaskList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (ServerHealthCheckTaskList)DgListView.SelectedItem; }
            else { selectedRecord = new ServerHealthCheckTaskList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.TaskName = txt_taskName.Text;

                selectedRecord.ServerDrive = txt_serverDrive.Text;
                selectedRecord.FolderPath = txt_folderPath.Text;
                selectedRecord.DbSqlConnection = txt_dbSqlConnection.Text;
                selectedRecord.IpAddress = txt_ipAddress.Text;
                selectedRecord.ServerUrlPath = txt_serverUrlPath.Text;
                selectedRecord.UrlPath = txt_urlPath.Text;
                selectedRecord.SizeMb = txt_sizeMb.Value == null ? (int?)null : int.Parse(txt_sizeMb.Value.ToString());
                selectedRecord.Port = txt_port.Value == null ? (int?)null : int.Parse(txt_port.Value.ToString());

                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.Timestamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterServerHealthCheckTaskList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterServerHealthCheckTaskList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new ServerHealthCheckTaskList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (ServerHealthCheckTaskList)DgListView.SelectedItem : new ServerHealthCheckTaskList();
            SetRecord(false);
        }

        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            txt_taskName.Text = selectedRecord.TaskName;

            switch (selectedRecord.Type) {
                case "driveSize":
                    rb_driveSizeCheck.IsChecked = true;
                    break;

                case "folderExist":
                    rb_folderExistCheck.IsChecked = true;
                    break;

                case "processMemory":
                    rb_processMemoryCheck.IsChecked = true;
                    break;

                case "allocatedMemory":
                    rb_allocatedMemoryCheck.IsChecked = true;
                    break;

                case "ping":
                    rb_pingCheck.IsChecked = true;
                    break;

                case "tcpPort":
                    rb_tcpPortCheck.IsChecked = true;
                    break;

                case "serverUrlPath":
                    rb_serverUrlPathCheck.IsChecked = true;
                    break;

                case "urlPath":
                    rb_urlPathCheck.IsChecked = true;
                    break;

                case "mssqlConnection":
                    rb_mssqlConnectionCheck.IsChecked = true;
                    break;

                case "mysqlConnection":
                    rb_mysqlConnectionCheck.IsChecked = true;
                    break;

                case "oracleConnection":
                    rb_oracleConnectionCheck.IsChecked = true;
                    break;

                case "postgresConnection":
                    rb_postgresConnectionCheck.IsChecked = true;
                    break;

                default:
                    rb_driveSizeCheck.IsChecked = rb_folderExistCheck.IsChecked = rb_processMemoryCheck.IsChecked = rb_allocatedMemoryCheck.IsChecked = false;
                    rb_pingCheck.IsChecked = rb_tcpPortCheck.IsChecked = rb_serverUrlPathCheck.IsChecked = rb_urlPathCheck.IsChecked = false;
                    rb_mssqlConnectionCheck.IsChecked = rb_mysqlConnectionCheck.IsChecked = rb_oracleConnectionCheck.IsChecked = rb_postgresConnectionCheck.IsChecked = false;
                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    break;
            }

            txt_serverDrive.Text = selectedRecord.ServerDrive;
            txt_folderPath.Text = selectedRecord.FolderPath;
            txt_dbSqlConnection.Text = selectedRecord.DbSqlConnection;
            txt_ipAddress.Text = selectedRecord.IpAddress;
            txt_serverUrlPath.Text = selectedRecord.ServerUrlPath;
            txt_urlPath.Text = selectedRecord.UrlPath;
            txt_sizeMb.Value = selectedRecord.SizeMb;
            txt_port.Value = selectedRecord.Port;

            chb_active.IsChecked = (selectedRecord.Id == 0) ? bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_activeNewInputDefault").Value) : selectedRecord.Active;

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_CloseFormAfterSave").Value);
            }
        }

        private void TypeSelectionClick(object sender, RoutedEventArgs e) {
            switch (((RadioButton)sender).Name) {
                case "rb_driveSizeCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "driveSize").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Visible;
                    break;

                case "rb_folderExistCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "folderExist").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Visible;
                    break;

                case "rb_processMemoryCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "processMemory").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Visible;
                    break;

                case "rb_allocatedMemoryCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "allocatedMemory").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Visible;
                    break;

                case "rb_pingCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "ping").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_sizeMb.Visibility = txt_sizeMb.Visibility = lbl_port.Visibility = txt_port.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = Visibility.Visible;
                    break;

                case "rb_tcpPortCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "tcpPort").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_sizeMb.Visibility = txt_sizeMb.Visibility = lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = Visibility.Visible;
                    break;

                case "rb_serverUrlPathCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "serverUrlPath").Name;

                    lbl_urlPath.Visibility = txt_urlPath.Visibility = lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = Visibility.Visible;
                    break;

                case "rb_urlPathCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "urlPath").Name;

                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = Visibility.Hidden;
                    lbl_sizeMb.Visibility = txt_sizeMb.Visibility = lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Visible;
                    break;

                case "rb_mssqlConnectionCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "mssqlConnection").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Visible;
                    break;

                case "rb_mysqlConnectionCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "mysqlConnection").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Visible;
                    break;

                case "rb_oracleConnectionCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "oracleConnection").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Visible;
                    break;

                case "rb_postgresConnectionCheck":
                    selectedRecord.Type = SystemLocalEnumSets.HealthCheckTypes.First(a => a.Name == "postgresConnection").Name;

                    lbl_serverUrlPath.Visibility = txt_serverUrlPath.Visibility = lbl_urlPath.Visibility = txt_urlPath.Visibility = Visibility.Hidden;
                    lbl_ipAddress.Visibility = txt_ipAddress.Visibility = lbl_port.Visibility = txt_port.Visibility = lbl_folderPath.Visibility = txt_folderPath.Visibility = Visibility.Hidden;
                    lbl_serverDrive.Visibility = txt_serverDrive.Visibility = lbl_sizeMb.Visibility = txt_sizeMb.Visibility = Visibility.Hidden;
                    lbl_dbSqlConnection.Visibility = txt_dbSqlConnection.Visibility = Visibility.Visible;
                    break;
            }
        }
    }
}