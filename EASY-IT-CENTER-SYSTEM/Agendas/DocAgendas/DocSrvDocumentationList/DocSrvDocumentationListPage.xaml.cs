﻿using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.GlobalStyles;
using MahApps.Metro.Controls.Dialogs;
using Microsoft.Win32;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace EasyITSystemCenter.Pages {

    public partial class DocSrvDocumentationListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static DocSrvDocumentationList selectedRecord = new DocSrvDocumentationList();

        private List<DocSrvDocumentationList> documentationList = new List<DocSrvDocumentationList>();
        private List<DocSrvDocumentationGroupList> documentationGroupList = new List<DocSrvDocumentationGroupList>();
        private List<DocSrvDocumentationCodeLibraryList> documentationCodeLibraryList = new List<DocSrvDocumentationCodeLibraryList>();

        public DocSrvDocumentationListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                try {
                    _ = DataOperations.TranslateFormFields(ListForm);
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

                LoadParameters();
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        private async void LoadParameters() {
            DgListView.RowHeight = int.Parse(await DataOperations.ParameterCheck("DocumentationAgendasFormsRowHeight"));
        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                documentationCodeLibraryList = await CommApi.GetApiRequest<List<DocSrvDocumentationCodeLibraryList>>(ApiUrls.EasyITCenterDocSrvDocumentationCodeLibraryList, null, App.UserData.Authentification.Token);
                documentationGroupList = await CommApi.GetApiRequest<List<DocSrvDocumentationGroupList>>(ApiUrls.EasyITCenterDocSrvDocumentationGroupList, null, App.UserData.Authentification.Token);
                documentationList = await CommApi.GetApiRequest<List<DocSrvDocumentationList>>(ApiUrls.EasyITCenterDocSrvDocumentationList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);

                cb_documentationGroup.ItemsSource = documentationGroupList;
                documentationList.ForEach(item => { item.DocumentationGroupName = documentationGroupList.First(a => a.Id == item.DocumentationGroupId).Name; });

                DgListView.ItemsSource = documentationList;
                DgListView.Items.Refresh();
                lb_dataList.ItemsSource = documentationCodeLibraryList;
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        private void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(e => {
                    string headername = e.Header.ToString();
                    if (headername == "Name") { e.Header = Resources["name"].ToString(); e.DisplayIndex = 2; }
                    else if (headername == "Sequence") { e.Header = Resources["sequence"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = 3; }
                    else if (headername == "DocumentationGroupName") { e.Header = Resources["documentationGroup"].ToString(); e.DisplayIndex = 1; }
                    else if (headername == "Description") e.Header = Resources["description"].ToString();
                    else if (headername == "AutoVersion") { e.Header = Resources["autoVersion"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; }
                    else if (headername == "Active") { e.Header = Resources["active"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 2; }
                    else if (headername == "TimeStamp") { e.Header = Resources["timestamp"].ToString(); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                    else if (headername == "DocumentationGroupId") e.Visibility = Visibility.Hidden;
                    else if (headername == "MdContent") e.Visibility = Visibility.Hidden;
                    else if (headername == "HtmlContent") e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    DocSrvDocumentationList user = e as DocSrvDocumentationList;
                    return user.Name.ToLower().Contains(filter.ToLower())
                    || user.DocumentationGroupName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.MdContent) && user.MdContent.ToLower().Contains(filter.ToLower())
                    ;
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new DocSrvDocumentationList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (DocSrvDocumentationList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (DocSrvDocumentationList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.EasyITCenterDocSrvDocumentationList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (DocSrvDocumentationList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (DocSrvDocumentationList)DgListView.SelectedItem; }
            else { selectedRecord = new DocSrvDocumentationList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(false);
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) => await SaveRecord(false, false);

        private async void BtnSaveClose_Click(object sender, RoutedEventArgs e) => await SaveRecord(true, true);

        private async void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (DocSrvDocumentationList)DgListView.SelectedItem : new DocSrvDocumentationList();
            await LoadDataList();
            SetRecord(false);
        }

        private async Task<bool> SaveRecord(bool closeForm, bool asNew) {
            try {
                MainWindow.ProgressRing = Visibility.Visible;
                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) && !asNew ? txt_id.Value : 0);
                selectedRecord.DocumentationGroupId = ((DocSrvDocumentationGroupList)cb_documentationGroup.SelectedItem).Id;
                selectedRecord.Name = txt_name.Text;
                selectedRecord.Sequence = (int)txt_sequence.Value;
                selectedRecord.Description = txt_description.Text;

                selectedRecord.MdContent = md_editor.Text;
                selectedRecord.HtmlContent = html_htmlContent.Browser.GetCurrentHtml();

                selectedRecord.UserId = App.UserData.Authentification.Id;

                selectedRecord.Active = (bool)chb_active.IsChecked;
                selectedRecord.AutoVersion = (int)txt_autoversion.Value;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterDocSrvDocumentationList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterDocSrvDocumentationList, httpContent, null, App.UserData.Authentification.Token); }

                if (closeForm) { await LoadDataList(); selectedRecord = new DocSrvDocumentationList(); SetRecord(false); }
                if (dBResult.RecordCount == 0) { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden;
            return true;
        }

        private void SetRecord(bool? showForm = null, bool copy = false) {
            txt_id.Value = (copy) ? 0 : selectedRecord.Id;

            try {
                cb_documentationGroup.SelectedItem = (selectedRecord.Id == 0) ? documentationGroupList.FirstOrDefault() : documentationGroupList.FirstOrDefault(a => a.Id == selectedRecord.DocumentationGroupId);
                txt_name.Text = selectedRecord.Name;
                txt_sequence.Value = selectedRecord.Sequence;
                txt_description.Text = selectedRecord.Description;

                md_editor.Text = selectedRecord.MdContent;

                chb_active.IsChecked = (selectedRecord.Id == 0) ? bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_activeNewInputDefault").Value) : selectedRecord.Active;
                txt_autoversion.Value = selectedRecord.AutoVersion;

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

        private void Md_editor_TextChanged(object sender, TextChangedEventArgs e) {
            EASYTools.MarkdownToHtml.Markdown markdown = new EASYTools.MarkdownToHtml.Markdown();
            html_htmlContent.Browser.OpenDocument(markdown.Transform("<HEAD><META content=text/html;utf-8 http-equiv=content-type></HEAD>" + md_editor.Text));
        }

        private void DataListDoubleClick(object sender, MouseButtonEventArgs e) {
            if (lb_dataList.SelectedItems.Count > 0) { md_editor.Text += ((DocSrvDocumentationCodeLibraryList)lb_dataList.SelectedItem).MdContent; }
        }

        private async void BtnOpenInBrowser_Click(object sender, RoutedEventArgs e) {
            await SaveRecord(false, false);
            SystemOperations.StartExternalProccess(SystemLocalEnumSets.ProcessTypes.First(a => a.Value.ToLower() == "url").Value, App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + (await DataOperations.ParameterCheck("WebDocPreview")) + "/" + txt_id.Value.ToString());
        }

        private void BtnLoadFromFile_Click(object sender, RoutedEventArgs e) {
            try {
                OpenFileDialog dlg = new OpenFileDialog() { DefaultExt = ".md", Filter = "Markdown files |*.md|All files (*.*)|*.*", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) {
                    md_editor.Text = File.ReadAllText(dlg.FileName, FileOperations.FileDetectEncoding(dlg.FileName));
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private async void BtnGenerateInteliDoc_Click(object sender, RoutedEventArgs e) {
            using (HttpClient httpClient = new HttpClient()) {
                try {
                    MainWindow.ProgressRing = Visibility.Visible;
                    html_htmlContent.Browser.ToggleSourceEditor(html_htmlContent.Toolbar, true);

                    DBResultMessage dBResult;
                    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", App.UserData.Authentification.Token);
                    string json = await httpClient.GetStringAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/WebApi/WebDocumentation/GenerateMdBook");
                    dBResult = JsonConvert.DeserializeObject<DBResultMessage>(json);

                    MainWindow.ProgressRing = Visibility.Hidden;

                    if (dBResult.Status.ToLower() == "success") { await MainWindow.ShowMessageOnMainWindow(false, Resources["inteliDocsGeneratedSuccesfully"].ToString()); }
                    else { await MainWindow.ShowMessageOnMainWindow(false, Resources["inteliDocsGenerationFailed"].ToString() + Environment.NewLine + dBResult.ErrorMessage); }
                } catch (Exception ex) {
                    MainWindow.ProgressRing = Visibility.Hidden;
                    await MainWindow.ShowMessageOnMainWindow(false, "Exception Error : " + ex.Message + Environment.NewLine + ex.StackTrace);
                }
            }
        }
    }
}