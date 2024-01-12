﻿using EasyITCenter.Api;
using EasyITCenter.Classes;
using EasyITCenter.GlobalClasses;
using EasyITCenter.GlobalOperations;
using EasyITCenter.GlobalStyles;
using ICSharpCode.AvalonEdit.Highlighting;
using MahApps.Metro.Controls.Dialogs;
using Microsoft.Win32;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace EasyITCenter.Pages {

    public partial class WebCoreFileListPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static WebCoreFileList selectedRecord = new WebCoreFileList();

        private List<WebCoreFileList> WebCoreFileList = new List<WebCoreFileList>();
        private int FoundedPositionIndex = 0; private int ReplacePositionIndex = 0;

        public WebCoreFileListPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                _ = DataOperations.TranslateFormFields(ListForm);

                lb_id.Header = DBOperations.DBTranslation("id").GetAwaiter().GetResult();
                lb_fname.Header = DBOperations.DBTranslation("fname").GetAwaiter().GetResult();

                LoadParameters();
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            _ = LoadDataList();
            SetRecord(false);
        }

        private async void LoadParameters() {
            DgListView.RowHeight = int.Parse(await DataOperations.ParameterCheck("WebAgendasFormsRowHeight"));
        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                WebCoreFileList = await CommApi.GetApiRequest<List<WebCoreFileList>>(ApiUrls.EasyITCenterWebCoreFileList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);

                DgListView.ItemsSource = WebCoreFileList;
                DgListView.Items.Refresh();
                cb_specificationType.ItemsSource = SystemLocalEnumSets.SpecificationScriptTypes;
                lb_dataList.ItemsSource = WebCoreFileList;
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }

        private async void DgListView_Translate(object sender, EventArgs ex) {
            try {
                ((DataGrid)sender).Columns.ToList().ForEach(async e => {
                    string headername = e.Header.ToString();
                    if (headername == "FileName") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 1; }
                    else if (headername == "SpecificationType") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 2; }
                    else if (headername == "Sequence") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 3; }
                    else if (headername == "MetroPath") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 4; }
                    else if (headername == "RewriteLowerLevel") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 5; }
                    else if (headername == "IsUniquePath") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 6; }
                    else if (headername == "AutoUpdateOnSave") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 7; }
                    else if (headername == "Active") { e.Header = await DBOperations.DBTranslation(headername); e.DisplayIndex = 8; }
                    else if (headername == "TimeStamp") { e.Header = await DBOperations.DBTranslation(headername); e.CellStyle = ProgramaticStyles.gridTextRightAligment; e.DisplayIndex = DgListView.Columns.Count - 1; }
                    else if (headername == "Id") e.DisplayIndex = 0;
                    else if (headername == "UserId") e.Visibility = Visibility.Hidden;
                    else if (headername == "Description") e.Visibility = Visibility.Hidden;
                    else if (headername == "GuestFileContent") e.Visibility = Visibility.Hidden;
                    else if (headername == "UserFileContent") e.Visibility = Visibility.Hidden;
                    else if (headername == "AdminFileContent") e.Visibility = Visibility.Hidden;
                    else if (headername == "ProviderContent") e.Visibility = Visibility.Hidden;
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void Filter(string filter) {
            try {
                if (filter.Length == 0) { dataViewSupport.FilteredValue = null; DgListView.Items.Filter = null; return; }
                dataViewSupport.FilteredValue = filter;
                DgListView.Items.Filter = (e) => {
                    WebCoreFileList user = e as WebCoreFileList;
                    return user.FileName.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.GuestFileContent) && user.GuestFileContent.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.UserFileContent) && user.UserFileContent.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.AdminFileContent) && user.AdminFileContent.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.ProviderContent) && user.ProviderContent.ToLower().Contains(filter.ToLower())
                    || user.MetroPath.ToLower().Contains(filter.ToLower())
                    || !string.IsNullOrEmpty(user.Description) && user.Description.ToLower().Contains(filter.ToLower());
                };
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        public void NewRecord() {
            selectedRecord = new WebCoreFileList();
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        public void EditRecord(bool copy) {
            selectedRecord = (WebCoreFileList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true, copy);
        }

        public async void DeleteRecord() {
            selectedRecord = (WebCoreFileList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            MessageDialogResult result = await MainWindow.ShowMessageOnMainWindow(false, Resources["deleteRecordQuestion"].ToString() + " " + selectedRecord.Id.ToString(), true);
            if (result == MessageDialogResult.Affirmative) {
                DBResultMessage dBResult = await CommApi.DeleteApiRequest(ApiUrls.EasyITCenterWebCoreFileList, selectedRecord.Id.ToString(), App.UserData.Authentification.Token);
                if (dBResult.RecordCount == 0) await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage);
                await LoadDataList(); SetRecord(false);
            }
        }

        private void DgListView_MouseDoubleClick(object sender, MouseButtonEventArgs e) {
            if (DgListView.SelectedItems.Count == 0) return;
            selectedRecord = (WebCoreFileList)DgListView.SelectedItem;
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void DgListView_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            if (DgListView.SelectedItems.Count > 0) { selectedRecord = (WebCoreFileList)DgListView.SelectedItem; }
            else { selectedRecord = new WebCoreFileList(); }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            //SetRecord(false);
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) => await SaveRecord(false, false);

        private async void BtnSaveClose_Click(object sender, RoutedEventArgs e) => await SaveRecord(true, false);

        private async void BtnSaveAsNew_Click(object sender, RoutedEventArgs e) => await SaveRecord(false, true);

        private void BtnCancel_Click(object sender, RoutedEventArgs e) {
            selectedRecord = (DgListView.SelectedItems.Count > 0) ? (WebCoreFileList)DgListView.SelectedItem : new WebCoreFileList();
            SetRecord(false);
        }

        private void BtnLoadFromFile_Click(object sender, RoutedEventArgs e) {
            try {
                OpenFileDialog dlg = new OpenFileDialog() { DefaultExt = ".html", Filter = "Html files |*.html|All files (*.*)|*.*", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) {
                    if (GuestHtmlContent.IsSelected) { GuestHtmlContentEditor.Text = File.ReadAllText(dlg.FileName, FileOperations.FileDetectEncoding(dlg.FileName)); }
                    if (UserHtmlContent.IsSelected) { UserHtmlContentEditor.Text = File.ReadAllText(dlg.FileName, FileOperations.FileDetectEncoding(dlg.FileName)); }
                    if (AdminHtmlContent.IsSelected) { AdminHtmlContentEditor.Text = File.ReadAllText(dlg.FileName, FileOperations.FileDetectEncoding(dlg.FileName)); }
                    if (ProviderHtmlContent.IsSelected) { ProviderHtmlContentEditor.Text = File.ReadAllText(dlg.FileName, FileOperations.FileDetectEncoding(dlg.FileName)); }
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private async void BtnOpenInBrowser_Click(object sender, RoutedEventArgs e) {
            await SaveRecord(false, false);
            SystemOperations.StartExternalProccess(SystemLocalEnumSets.ProcessTypes.First(a => a.Value.ToLower() == "url").Value, App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + (await DataOperations.ParameterCheck("WebBuilderMenuPreview")) + "/" + txt_id.Value.ToString());
        }

        private async void SetRecord(bool? showForm = null, bool copy = false) {
            try {
                txt_id.Value = (copy) ? 0 : selectedRecord.Id;

                txt_sequence.Value = selectedRecord.Sequence;
                int index = 0;
                cb_specificationType.SelectedItem = selectedRecord.Id == 0 || SystemLocalEnumSets.SpecificationScriptTypes.FirstOrDefault(a => a.Name == selectedRecord.SpecificationType) == null ? SystemLocalEnumSets.SpecificationScriptTypes.First() : SystemLocalEnumSets.SpecificationScriptTypes.FirstOrDefault(a => a.Name == selectedRecord.SpecificationType);
                txt_metroPath.Text = selectedRecord.MetroPath;
                chb_rewriteLowerLevel.IsChecked = selectedRecord.RewriteLowerLevel;
                chb_isUniquePath.IsChecked = selectedRecord.IsUniquePath;
                chb_autoUpdateOnSave.IsChecked = selectedRecord.AutoUpdateOnSave;

                txt_fileName.Text = selectedRecord.FileName;
                txt_description.Text = selectedRecord.Description;
                chb_active.IsChecked = selectedRecord.Active;

                GuestHtmlContentEditor.Text = selectedRecord.GuestFileContent;
                UserHtmlContentEditor.Text = selectedRecord.UserFileContent;
                AdminHtmlContentEditor.Text = selectedRecord.AdminFileContent;
                ProviderHtmlContentEditor.Text = selectedRecord.ProviderContent;

                if (showForm != null && showForm == true) {
                    MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = false;
                    ListView.Visibility = Visibility.Hidden; ListForm.Visibility = Visibility.Visible; dataViewSupport.FormShown = true;
                }
                else {
                    MainWindow.DataGridSelected = true; MainWindow.DataGridSelectedIdListIndicator = selectedRecord.Id != 0; MainWindow.dataGridSelectedId = selectedRecord.Id; MainWindow.DgRefresh = true;
                    ListForm.Visibility = Visibility.Hidden; ListView.Visibility = Visibility.Visible; dataViewSupport.FormShown = showForm == null && !bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "beh_CloseFormAfterSave").Value);
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private async Task<bool> SaveRecord(bool closeForm, bool asNew) {
            try {
                MainWindow.ProgressRing = Visibility.Visible;

                DBResultMessage dBResult;
                selectedRecord.Id = (int)((txt_id.Value != null) && !asNew ? txt_id.Value : 0);

                selectedRecord.Sequence = int.Parse(txt_sequence.Value.ToString());
                selectedRecord.SpecificationType = ((Language)cb_specificationType.SelectedItem).Name;
                selectedRecord.MetroPath = txt_metroPath.Text;
                selectedRecord.FileName = txt_fileName.Text;
                selectedRecord.Description = txt_description.Text;

                selectedRecord.RewriteLowerLevel = (bool)chb_rewriteLowerLevel.IsChecked;
                selectedRecord.AutoUpdateOnSave = (bool)chb_autoUpdateOnSave.IsChecked;

                selectedRecord.IsUniquePath = (bool)chb_isUniquePath.IsChecked;
                selectedRecord.Active = chb_active.IsChecked.Value;

                selectedRecord.GuestFileContent = GuestHtmlContentEditor.Text;
                selectedRecord.UserFileContent = UserHtmlContentEditor.Text;
                selectedRecord.AdminFileContent = AdminHtmlContentEditor.Text;
                selectedRecord.ProviderContent = ProviderHtmlContentEditor.Text;

                selectedRecord.UserId = App.UserData.Authentification.Id;
                selectedRecord.TimeStamp = DateTimeOffset.Now.DateTime;

                string json = JsonConvert.SerializeObject(selectedRecord);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                if (selectedRecord.Id == 0) {
                    dBResult = await CommApi.PutApiRequest(ApiUrls.EasyITCenterWebCoreFileList, httpContent, null, App.UserData.Authentification.Token);
                }
                else { dBResult = await CommApi.PostApiRequest(ApiUrls.EasyITCenterWebCoreFileList, httpContent, null, App.UserData.Authentification.Token); }

                if (closeForm) {
                    await LoadDataList(); selectedRecord = new WebCoreFileList(); SetRecord(false);
                }
                if (dBResult.RecordCount == 0) { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden;
            return true;
        }

        //Include Template on end in Editor
        private void DataListDoubleClick(object sender, MouseButtonEventArgs e) {
            if (lb_dataList.SelectedItems.Count > 0) { selectedRecord = (WebCoreFileList)lb_dataList.SelectedItem; }
            dataViewSupport.SelectedRecordId = selectedRecord.Id;
            SetRecord(true);
        }

        private void HighlightCodeChanged(object sender, SelectionChangedEventArgs e) {
            if (GuestHtmlContent.IsSelected) { GuestHtmlContentEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinition(((ListBoxItem)code_selector.SelectedValue).Content.ToString()); }
            if (UserHtmlContent.IsSelected) { UserHtmlContentEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinition(((ListBoxItem)code_selector.SelectedValue).Content.ToString()); }
            if (AdminHtmlContent.IsSelected) { AdminHtmlContentEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinition(((ListBoxItem)code_selector.SelectedValue).Content.ToString()); }
            if (ProviderHtmlContent.IsSelected) { ProviderHtmlContentEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinition(((ListBoxItem)code_selector.SelectedValue).Content.ToString()); }
        }

        private async void BtnOpenMinifiTool_Click(object sender, RoutedEventArgs e) {
            SystemOperations.StartExternalProccess(SystemLocalEnumSets.ProcessTypes.First(a => a.Value.ToLower() == "url").Value, App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + (await DataOperations.ParameterCheck("WebBuilderExternalAutoMinifiTool")));
        }

        private void MetroPathInputSpaceCheck(object sender, TextChangedEventArgs e) {
            FormOperations.RemoveDisabledSpacesFromTextInput(ref sender, ref e);
        }

        private void FileNameSpaceCheck(object sender, TextChangedEventArgs e) {
            FormOperations.RemoveDisabledSpacesFromTextInput(ref sender, ref e);
        }

        private void CaseSensitiveChange(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown && btn_searchText != null) { btn_searchText.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0; }
        }

        private void CodeSearchTextChanged(object sender, TextChangedEventArgs e) {
            btn_searchText.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0; SearchTextInEditor();
        }

        private void SearchText_Click(object sender, RoutedEventArgs e) {
            SearchTextInEditor();
        }

        private void SelectedOnlyChange(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown && btn_codeReplace != null) { btn_codeReplace.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0; }
        }

        private void CodeReplaceTextChanged(object sender, TextChangedEventArgs e) {
            btn_codeReplace.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0;
        }

        private void SearchTextInEditor() {
            if (GuestHtmlContent.IsSelected) { ToolsOperations.AvalonEditorFindText(txt_codeSearch.Text, ref FoundedPositionIndex, ref GuestHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked); }
            if (UserHtmlContent.IsSelected) { ToolsOperations.AvalonEditorFindText(txt_codeSearch.Text, ref FoundedPositionIndex, ref UserHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked); }
            if (AdminHtmlContent.IsSelected) { ToolsOperations.AvalonEditorFindText(txt_codeSearch.Text, ref FoundedPositionIndex, ref AdminHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked); }
            if (ProviderHtmlContent.IsSelected) { ToolsOperations.AvalonEditorFindText(txt_codeSearch.Text, ref FoundedPositionIndex, ref ProviderHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked); }
            if (FoundedPositionIndex == 0) { btn_searchText.IsEnabled = false; }
        }

        private void CodeReplaceClick(object sender, RoutedEventArgs e) {
            if (GuestHtmlContent.IsSelected) { ToolsOperations.AvalonEditorReplaceText(txt_codeSearch.Text, txt_codeReplace.Text, ref ReplacePositionIndex, ref GuestHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked, (bool)chb_selectedOnly.IsChecked); }
            if (UserHtmlContent.IsSelected) { ToolsOperations.AvalonEditorReplaceText(txt_codeSearch.Text, txt_codeReplace.Text, ref ReplacePositionIndex, ref UserHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked, (bool)chb_selectedOnly.IsChecked); }
            if (AdminHtmlContent.IsSelected) { ToolsOperations.AvalonEditorReplaceText(txt_codeSearch.Text, txt_codeReplace.Text, ref ReplacePositionIndex, ref AdminHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked, (bool)chb_selectedOnly.IsChecked); }
            if (ProviderHtmlContent.IsSelected) { ToolsOperations.AvalonEditorReplaceText(txt_codeSearch.Text, txt_codeReplace.Text, ref ReplacePositionIndex, ref ProviderHtmlContentEditor, (bool)chb_caseSensitiveIgnore.IsChecked, (bool)chb_selectedOnly.IsChecked); }
            if (ReplacePositionIndex == 0) { btn_codeReplace.IsEnabled = false; }
        }
    }
}