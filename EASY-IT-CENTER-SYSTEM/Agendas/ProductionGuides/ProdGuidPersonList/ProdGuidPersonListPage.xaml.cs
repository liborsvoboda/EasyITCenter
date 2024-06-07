﻿using EasyITSystemCenter.Api;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
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

    public partial class ProdGuidPersonListPage : UserControl//, INotifyPropertyChanged
    {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static ProdGuidPersonList selectedRecord = new ProdGuidPersonList();

        private List<ProdGuidGroupList> GroupList = new List<ProdGuidGroupList>();
        private string LastCorrectSearch = "";
        private bool messageShown = false;

        public ProdGuidPersonListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                _ = FormOperations.TranslateFormFields(ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        //change datasource
        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try { if (MainWindow.serviceRunning) GroupList = await CommunicationManager.GetApiRequest<List<ProdGuidGroupList>>(ApiUrls.EasyITCenterProdGuidGroupList, null, App.UserData.Authentification.Token); } catch { }

            List<ProdGuidPersonList> data = new List<ProdGuidPersonList>();
            try { if (MainWindow.serviceRunning) data = await CommunicationManager.GetApiRequest<List<ProdGuidPersonList>>(ApiUrls.EasyITCenterProdGuidPersonList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token); } catch { }

            List<ExtendedPersonList> extendedData = new List<ExtendedPersonList>();
            data.ForEach(record => {
                extendedData.Add(new ExtendedPersonList() {
                    Id = record.Id,
                    Group = GroupList.Where(a => a.Id == record.GroupId).First().Name,
                    PersonalNumber = record.PersonalNumber,
                    Name = record.Name,
                    SurName = record.SurName,
                    TimeStamp = record.TimeStamp,
                    UserId = record.UserId,
                    GroupId = record.GroupId
                });
            });
            DgListView.ItemsSource = extendedData;
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        // set translate columns in listView
        private void DgListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(e => {
                string headername = e.Header.ToString();
                if (headername == "Value") e.Header = Resources["name"].ToString();
                else if (headername == "Group") e.Header = Resources["group"].ToString();
                else if (headername == "PersonalNumber") e.Header = Resources["personalNumber"].ToString();
                else if (headername == "Surname") e.Header = Resources["surname"].ToString();
                else if (headername == "TimeStamp") e.Header = Resources["timestamp"].ToString();

                //Hide System Columns
                else if (headername == "Id") e.DisplayIndex = 0;
                else if (headername == "GroupId") e.Visibility = Visibility.Hidden;
                else if (headername == "UserId") e.Visibility = Visibility.Hidden;
            });
        }

        //change filter fields
        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    ExtendedPersonList data = e as ExtendedPersonList;
                    return data.PersonalNumber.ToString().ToLower().Contains(filter.ToLower())
                    || data.Group.ToString().ToLower().Contains(filter.ToLower())
                    || data.Name.ToString().ToLower().Contains(filter.ToLower())
                    || data.SurName.ToString().ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch { }
        }

        public void NewRecord() {
            selectedRecord = new ProdGuidPersonList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (ProdGuidPersonList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (ProdGuidPersonList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommunicationManager.DeleteApiRequest(ApiUrls.EasyITCenterProdGuidPersonList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                _ = LoadDataList(); SetRecord(false);
            }
            SetRecord(false);
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            selectedRecord = (ProdGuidPersonList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) {
                selectedRecord = (ProdGuidPersonList)DgListView.SelectedItem;
            }
            else { selectedRecord = new ProdGuidPersonList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        //change dataset save method
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);
                selectedRecord.GroupId = GroupList.Where(a => a.Name == tb_group.Text).FirstOrDefault().Id;
                selectedRecord.PersonalNumber = (int)txt_personalNumber.Value;
                selectedRecord.Name = tb_name.Text;
                selectedRecord.SurName = tb_surname.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommunicationManager.PutApiRequest(ApiUrls.EasyITCenterProdGuidPersonList, httpContent, null, App.UserData.Authentification.Token); ;
                }
                else { dBResult = await CommunicationManager.PostApiRequest(ApiUrls.EasyITCenterProdGuidPersonList, httpContent, null, App.UserData.Authentification.Token); ; }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new ProdGuidPersonList();
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
                selectedRecord.GroupId = GroupList.Where(a => a.Name == tb_group.Text).FirstOrDefault().Id;
                selectedRecord.PersonalNumber = (int)txt_personalNumber.Value;
                selectedRecord.Name = tb_name.Text;
                selectedRecord.SurName = tb_surname.Text;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) { dBResult = await CommunicationManager.PutApiRequest(ApiUrls.EasyITCenterProdGuidPersonList, httpContent, null, App.UserData.Authentification.Token); ; }
                else { dBResult = await CommunicationManager.PostApiRequest(ApiUrls.EasyITCenterProdGuidPersonList, httpContent, null, App.UserData.Authentification.Token); ; }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new ProdGuidPersonList();
                    await LoadDataList();
                    SetRecord(true);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch { }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (ProdGuidPersonList)DgListView.SelectedItem : new ProdGuidPersonList();
            SetRecord(false);
        }

        //change dataset prepare for working
        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;

            tb_group.Text = selectedRecord.GroupId > 0 ? GroupList.Where(a => a.Id == selectedRecord.GroupId).FirstOrDefault().Name : null;
            txt_personalNumber.Value = selectedRecord.PersonalNumber;
            tb_name.Text = selectedRecord.Name;
            tb_surname.Text = selectedRecord.SurName;

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
                if (selectedRecord.Id == 0) { txt_personalNumber.Value = null; }
                tb_group.Focus();
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key.ToLower() == "beh_closeformaftersave".ToLower()).Value);
            }
        }

        //Searched Items Part
        private void Tb_group_GotFocus(object sender, RoutedEventArgs e) => UpdateSearchResults();

        private async void UpdateSearchResults() {
            try {
                lv_groupSearchResults.Visibility = Visibility.Visible;
                List<ProdGuidGroupList> tempGroupList = GroupList.Where(a => a.Name.ToLower().Contains(!string.IsNullOrWhiteSpace(tb_group.Text) ? tb_group.Text.ToLower() : "")).ToList();
                if (tempGroupList.Count() == 0 && !messageShown) {
                    messageShown = true;
                    var result = await MainWindow.ShowMessageOnMainWindow(true, Resources["groupNotExist"].ToString());
                    if (result == MessageDialogResult.Affirmative) { messageShown = false; }
                    tb_group.Text = LastCorrectSearch; tb_group.CaretIndex = tb_group.Text.Length;
                }
                else {
                    lv_groupSearchResults.ItemsSource = tempGroupList;
                    if (lv_groupSearchResults.Items.Count == 1) {
                        tb_group.Text = ((ProdGuidGroupList)lv_groupSearchResults.Items[0]).Name;
                        lv_groupSearchResults.Visibility = Visibility.Hidden; txt_personalNumber.Focus(); txt_personalNumber.SelectAll();
                    }
                    else { lv_groupSearchResults.Visibility = Visibility.Visible; }
                    LastCorrectSearch = tb_group.Text;
                }
            } catch { }
        }

        private void PersonListPage_KeyDown(object sender, KeyEventArgs e) {
            if (e.Key == Key.Up && lv_groupSearchResults.Visibility == Visibility.Visible) { lv_groupSearchResults.Focus(); }
            if (e.Key == Key.Down && lv_groupSearchResults.Visibility == Visibility.Visible) { lv_groupSearchResults.Focus(); }
            if (e.Key != Key.Down && e.Key != Key.Up && e.Key != Key.Enter && lv_groupSearchResults.Visibility == Visibility.Visible) { tb_group.Focus(); }
        }

        private void SelectGroup_Enter(object sender, KeyEventArgs e) {
            if ((e.Key == Key.Enter) && lv_groupSearchResults.Visibility == Visibility.Visible) {
                tb_group.Text = lv_groupSearchResults.SelectedIndex == -1 ? null : ((ProdGuidGroupList)lv_groupSearchResults.SelectedItem).Name;
                lv_groupSearchResults.Visibility = Visibility.Hidden; txt_personalNumber.Focus(); txt_personalNumber.SelectAll();
            }
        }

        private void MouseSelectGroup_Click(object sender, MouseButtonEventArgs e) {
            tb_group.Text = lv_groupSearchResults.SelectedIndex == -1 ? null : ((ProdGuidGroupList)lv_groupSearchResults.SelectedItem).Name;
            lv_groupSearchResults.Visibility = Visibility.Hidden; txt_personalNumber.Focus(); txt_personalNumber.SelectAll();
        }
    }
}