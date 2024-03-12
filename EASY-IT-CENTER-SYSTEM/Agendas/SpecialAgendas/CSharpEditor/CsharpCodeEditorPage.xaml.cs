using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.Providers;
using ICSharpCode.AvalonEdit.Highlighting;
using Microsoft.CodeAnalysis;
using Microsoft.Win32;
using Newtonsoft.Json;
using RoslynPad.Editor;
using RoslynPad.Roslyn;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;



namespace EasyITSystemCenter.Pages {

    public partial class CsharpCodeEditorPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();

        private ServerModuleAndServiceList systemWebCodeEditor = new ServerModuleAndServiceList();
        private List<ServerModuleAndServiceList> serverModuleAndServiceList = new List<ServerModuleAndServiceList>();
        //private readonly ObservableCollection<DocumentViewModel> _documents;
        private readonly RoslynHost _host;

        private int FoundedPositionIndex = 0; private int ReplacePositionIndex = 0;

        public CsharpCodeEditorPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {

                string _documents = null;//new ObservableCollection<DocumentViewModel>();
               // Items.ItemsSource = _documents;

                        _host = new CustomRoslynHost(additionalAssemblies: new[]
                        {
                            Assembly.Load("RoslynPad.Roslyn.Windows"),
                            Assembly.Load("RoslynPad.Editor.Windows")
                        }, RoslynHostReferences.NamespaceDefault.With(assemblyReferences: new[]
                        {
                    typeof(object).Assembly,
                    typeof(System.Text.RegularExpressions.Regex).Assembly,
                    typeof(Enumerable).Assembly,
                }));

                AddNewDocument();


                _ = DataOperations.TranslateFormFields(ListForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }


            _ = LoadDataList();

        }

        public async Task<bool> LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {

                serverModuleAndServiceList = await CommApi.GetApiRequest<List<ServerModuleAndServiceList>>(ApiUrls.ServerModuleAndServiceList, (dataViewSupport.AdvancedFilter == null) ? null : "Filter/" + WebUtility.UrlEncode(dataViewSupport.AdvancedFilter.Replace("[!]", "").Replace("{!}", "")), App.UserData.Authentification.Token);
                systemWebCodeEditor = serverModuleAndServiceList.FirstOrDefault(a => a.Name == "SystemCsharpEditor");
                if (systemWebCodeEditor == null) { await MainWindow.ShowMessageOnMainWindow(true, "Missing HtmlBodyOnly Module: 'SystemCsharpEditor'"); }
                else { 
                   //CsharpCodeEditor.Text = systemWebCodeEditor.CustomHtmlContent;

                    //CsharpCodeEditor.FontFamily = new FontFamily("Consolas");
                    //CsharpCodeEditor.FontSize = 12;
                    ////CsharpCodeEditor.OpenFile(fileName);
                    //CsharpCodeEditor.Completion = completion;


                }    

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }


        private void HighlightCodeChanged(object sender, SelectionChangedEventArgs e) {
            CsharpCodeEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinition(((ListBoxItem)code_selector.SelectedValue).Content.ToString());
        }

        private void CaseSensitiveChange(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown && btn_searchText != null) { btn_searchText.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0; }
        }

        private void SelectedOnlyChange(object sender, RoutedEventArgs e) {
            if (dataViewSupport.FormShown && btn_codeReplace != null) { btn_codeReplace.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0; }
        }

        private void CodeReplaceTextChanged(object sender, TextChangedEventArgs e) {
            btn_codeReplace.IsEnabled = true; FoundedPositionIndex = ReplacePositionIndex = 0;
        }


        private async void BtnOpenInBrowser_Click(object sender, RoutedEventArgs e) {
            try {
              // systemWebCodeEditor.CustomHtmlContent = CsharpCodeEditor.Text;
                string json = JsonConvert.SerializeObject(systemWebCodeEditor);
                StringContent httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                DBResultMessage dBResult = await CommApi.PostApiRequest(ApiUrls.ServerModuleAndServiceList, httpContent, null, App.UserData.Authentification.Token);

                if (dBResult.RecordCount > 0) {
                    SystemOperations.StartExternalProccess(SystemLocalEnumSets.ProcessTypes.First(a => a.Value.ToLower() == "url").Value, App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + systemWebCodeEditor.UrlSubPath);
                } else { await MainWindow.ShowMessageOnMainWindow(false, "Exception Error : " + dBResult.ErrorMessage); }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void BtnLoadFromFile_Click(object sender, RoutedEventArgs e) {
            try {
                OpenFileDialog dlg = new OpenFileDialog() { DefaultExt = ".*", Filter = "All files (*.*)|*.*", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) {
                    //CsharpCodeEditor.Text = File.ReadAllText(dlg.FileName, FileOperations.FileDetectEncoding(dlg.FileName));
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private void AddNewDocument() {
            _documents.Add(new DocumentViewModel(_host, previous));
        }

        private async void OnItemLoaded(object sender, EventArgs e) {
            if (!(sender is RoslynCodeEditor editor && editor.DataContext is DocumentViewModel viewModel)) return;

            editor.Loaded -= OnItemLoaded;
            editor.Focus();

            var workingDirectory = Directory.GetCurrentDirectory();

            var previous = viewModel.LastGoodPrevious;
            if (previous != null) {
                editor.CreatingDocument += (o, args) =>
                {
                    args.DocumentId = _host.AddRelatedDocument(previous.Id, new DocumentCreationArgs(
                        args.TextContainer, workingDirectory, SourceCodeKind.Script, args.ProcessDiagnostics,
                        args.TextContainer.UpdateText));
                };
            }

            var documentId = await editor.InitializeAsync(_host, new ClassificationHighlightColors(),
                workingDirectory, string.Empty, SourceCodeKind.Script).ConfigureAwait(true);

            viewModel.Initialize(documentId);
        }

        private async void OnEditorKeyDown(object sender, KeyEventArgs e) {
            if (e.Key == Key.Enter) {
                if (!(sender is RoslynCodeEditor editor && editor.DataContext is DocumentViewModel viewModel)) return;

                if (editor.IsCompletionWindowOpen) {
                    return;
                }

                e.Handled = true;

                if (viewModel.IsReadOnly) return;

                viewModel.Text = editor.Text;
                if (await viewModel.TrySubmitAsync().ConfigureAwait(true)) {
                    AddNewDocument(viewModel);
                }
            }
        }

        // TODO: workaround for GetSolutionAnalyzerReferences bug (should be added once per Solution)
        private class CustomRoslynHost : RoslynHost {
            private bool _addedAnalyzers;

            public CustomRoslynHost(IEnumerable<Assembly>? additionalAssemblies = null, RoslynHostReferences? references = null, ImmutableArray<string>? disabledDiagnostics = null) : base(additionalAssemblies, references, disabledDiagnostics) {
            }

            protected override IEnumerable<AnalyzerReference> GetSolutionAnalyzerReferences() {
                if (!_addedAnalyzers) {
                    _addedAnalyzers = true;
                    return base.GetSolutionAnalyzerReferences();
                }

                return Enumerable.Empty<AnalyzerReference>();
            }
        }
    }
}