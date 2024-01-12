using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Microsoft.Win32;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using OpenFileDialog = Microsoft.Win32.OpenFileDialog;

namespace EasyITSystemCenter.Pages {

    public partial class SolutionStaticFileListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static SolutionStaticFileList selectedRecord = new SolutionStaticFileList();

        private List<SolutionStaticFileList> solutionStaticFileList = new List<SolutionStaticFileList>();

        public SolutionStaticFileListPage() {
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
            try {
                solutionStaticFileList = await CommApi.GetApiRequest<List<SolutionStaticFileList>>(ApiUrls.SolutionStaticFileList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);

                DgListView.ItemsSource = solutionStaticFileList;
                DgListView.Items.Refresh();
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        // set translate columns in listView
        private async void DgListView_Translate(object sender, EventArgs ex) {
            ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                string headername = e.Header.ToString().ToLower();
                if (headername == "staticpathname") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                else if (headername == "filenamepath") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                else if (headername == "active") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; }
                else if (headername == "timestamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                else if (headername == "id") e.DisplayIndex = 0;
                else if (headername == "userid") e.Visibility = Visibility.Hidden;
                else if (headername == "staticpathid") e.Visibility = Visibility.Hidden;
                else if (headername == "content") e.Visibility = Visibility.Hidden;
            });
        }

        //change filter fields
        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    SolutionStaticFileList report = e as SolutionStaticFileList;
                    return report.FileNamePath.ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void NumberValidationTextBox(object sender, TextCompositionEventArgs e) {
            Regex regex = new Regex("[^0-9]+");
            e.Handled = regex.IsMatch(e.Text);
        }

        public void NewRecord() {
            selectedRecord = new SolutionStaticFileList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (SolutionStaticFileList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (SolutionStaticFileList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.SolutionStaticFileList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                _ = LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (SolutionStaticFileList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) {
                selectedRecord = (SolutionStaticFileList)DgListView.SelectedItem;
            }
            else { selectedRecord = new SolutionStaticFileList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        //change dataset save method
        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            try {
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) ? txt_id.Value : 0);

                if (!string.IsNullOrWhiteSpace(txt_reportPath.Text)) {
                    selectedRecord.FileNamePath = txt_reportPath.Text;
                    selectedRecord.MimeType = MimeMapping.GetMimeMapping(txt_reportPath.Text);
                    selectedRecord.Content = System.IO.File.ReadAllBytes(txt_reportPath.Text);
                }

                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.SolutionStaticFileList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.SolutionStaticFileList, httpContent, null, App.UserData.Authentification.Token); }

                if (dBResult.RecordCount > 0) {
                    selectedRecord = new SolutionStaticFileList();
                    await LoadDataList();
                    SetRecord(null);
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (SolutionStaticFileList)DgListView.SelectedItem : new SolutionStaticFileList();
            SetRecord(false);
        }

        //change dataset prepare for working
        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;

            //cb_pageName.Text = (selectedRecord.Id == 0) ? null : selectedRecord.PageTranslation;
            txt_fileNamePath.Text = selectedRecord.FileNamePath;

            txt_reportPath.Text = null;
            chb_active.IsChecked = selectedRecord.Active;
            dp_timestamp.Value = selectedRecord.TimeStamp;

            if (showForm != null && showForm == true) {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
            }
            else {
                MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_CloseFormAfterSave").Value);
            }
        }

        private void BtnBrowse_Click(object sender, RoutedEventArgs e) {
            try {
                OpenFileDialog dlg = new OpenFileDialog {
                    DefaultExt = ".rdl",
                    Filter = "Report files |*.rdl",
                    Title = Resources["fileOpenDescription"].ToString()
                };
                if (dlg.ShowDialog() == true) {
                    txt_reportPath.Text = dlg.FileName;
                    selectedRecord.MimeType = MimeMapping.GetMimeMapping(dlg.FileName);
                    selectedRecord.Content = System.IO.File.ReadAllBytes(dlg.FileName);
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnExport_Click(object sender, RoutedEventArgs e) {
            try {
                SaveFileDialog dlg = new SaveFileDialog { DefaultExt = ".rdl", Filter = "Report files |*.rdl", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) { FileOperations.ByteArrayToFile(dlg.FileName, selectedRecord.Content); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }
    }
}