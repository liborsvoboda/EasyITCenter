﻿using EasyITCenter.Api;
using EasyITCenter.Classes;
using EasyITCenter.GlobalOperations;
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

namespace EasyITCenter.Pages {

    public partial class ProdGuidPartListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static ProdGuidPartList selectedRecord = new ProdGuidPartList();

        public ProdGuidPartListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                _ = DataOperations.TranslateFormFields(ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        //change datasource
        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try { if (MainWindow.serviceRunning) DgListView.ItemsSource = await CommApi.GetApiRequest<List<ProdGuidPartList>>(ApiUrls.EasyITCenterProdGuidPartList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token); } catch { }

            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        // set translate columns in listView
        private void DgListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(e => {
                string headername = e.Header.ToString();
                if (headername == "Name") e.Header = Resources["fname"].ToString();
                else if (headername == "WorkPlace") e.Header = Resources["workPlace"].ToString();
                else if (headername == "Number") e.Header = Resources["partNumber"].ToString();
                else if (headername == "Timestamp") e.Header = Resources["timestamp"].ToString();

                //Hide System Columns
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
                    ProdGuidPartList data = e as ProdGuidPartList;
                    return data.WorkPlace.ToString().ToLower().Contains(filter.ToLower())
                    || data.Number.ToString().ToLower().Contains(filter.ToLower())
                    || data.Name.ToString().ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch { }
        }

        public void NewRecord() {
            selectedRecord = new ProdGuidPartList();
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (ProdGuidPartList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (ProdGuidPartList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.EasyITCenterProdGuidPartList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                _ = LoadDataList(); SetRecord(false);
            }
            SetRecord(false);
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            selectedRecord = (ProdGuidPartList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) {
                selectedRecord = (ProdGuidPartList)DgListView.SelectedItem;
            }
            else { selectedRecord = new ProdGuidPartList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        //change dataset save method
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.WorkPlace = (int)txt_workPlace.Value;
                selectedRecord.Number = tb_partNumber.Text;
                selectedRecord.Name = tb_name.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Timestamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterProdGuidPartList, httpContent, null, App.UserData.Authentification.Token); ;
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterProdGuidPartList, httpContent, null, App.UserData.Authentification.Token); ; }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new ProdGuidPartList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch { }
        }

        private async void BtnSaveNext_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.WorkPlace = (int)txt_workPlace.Value;
                selectedRecord.Number = tb_partNumber.Text;
                selectedRecord.Name = tb_name.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.Timestamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterProdGuidPartList, httpContent, null, App.UserData.Authentification.Token); ; ;
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterProdGuidPartList, httpContent, null, App.UserData.Authentification.Token); ; }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new ProdGuidPartList();
                    await LoadDataList();
                    SetRecord(true);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch { }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (ProdGuidPartList)DgListView.SelectedItem : new ProdGuidPartList();
            SetRecord(false);
        }

        //change dataset prepare for working
        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;
            txt_workPlace.Value = selectedRecord.WorkPlace;
            tb_partNumber.Text = selectedRecord.Number;
            tb_name.Text = selectedRecord.Name;

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
                if (selectedRecord.Id == 0) { txt_workPlace.Value = null; txt_workPlace.Focus(); }
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_CloseFormAfterSave").Value);
            }
        }
    }
}