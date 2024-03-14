using ICSharpCode.AvalonEdit.Folding;
using ICSharpCode.AvalonEdit.Search;
using EasyITSystemCenter.Api;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using EasyITSystemCenter.Tools;
using ICSharpCode.AvalonEdit.Highlighting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Xml;
using System.Windows.Input;
using System.Windows.Threading;
using ICSharpCode.AvalonEdit.CodeCompletion;
using Microsoft.Win32;
using System.ComponentModel.Design;



namespace EasyITSystemCenter.Pages {

    public partial class UniversalCodeEditorPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static TemplateClassList selectedRecord = new TemplateClassList();

        private ServerModuleAndServiceList systemWebCodeEditor = new ServerModuleAndServiceList();
        private List<ServerModuleAndServiceList> serverModuleAndServiceList = new List<ServerModuleAndServiceList>();

        IHighlightingDefinition customHighlighting;
        HighlightingManager highlightingManager = HighlightingManager.Instance;
        CompletionWindow completionWindow;
        string currentFileName;
        string lightThemeName = App.appRuntimeData.AppClientSettings.First(a => a.Key == "appe_toolLightThemeName").Value;
        string darkThemeName = App.appRuntimeData.AppClientSettings.First(a => a.Key == "appe_toolDarkThemeName").Value;


        public UniversalCodeEditorPage() {

            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);
            InitializeTextMarkerService();

            try {

                DirectoryInfo highlightFiles = new DirectoryInfo(Path.Combine(App.appRuntimeData.startupPath, "Data", "HighLights"));
                highlightFiles.GetFiles().ToList().ForEach(file => {
                    try {
                        //using (Stream s = new FileStream(file.FullName, FileMode.Open)) {
                        //HighlightingLoader.LoadXshd(XmlReader.Create(new Uri(file.FullName).ToString()));
                        //    customHighlighting = HighlightingLoader.Load(new XmlTextReader(s), HighlightingManager.Instance);
                        //    highlightingManager.RegisterHighlighting(file.Name.Split('.')[0], new string[] { ".cool" }, customHighlighting);
                        //}
                    } catch(Exception ex) { }
                });
                highlightingComboBox.ItemsSource = AvaloniaEdit.Highlighting.HighlightingManager.Instance.HighlightingDefinitions;
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            try { 
                this.SetValue(TextOptions.TextFormattingModeProperty, TextFormattingMode.Display);
                propertyGridComboBox.SelectedIndex = 2;
                codeEditor.Options.HighlightCurrentLine = true;

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }


            try {
                SearchPanel.Install(codeEditor);

                //FoldingManager foldingManager = FoldingManager.Install(codeEditor.TextArea);
                //BraceFoldingStrategy foldingStrategy = new BraceFoldingStrategy();
                //foldingStrategy.UpdateFoldings(foldingManager, codeEditor.Document);

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            try {
                codeEditor.TextArea.TextEntering += codeEditor_TextArea_TextEntering;
                codeEditor.TextArea.TextEntered += codeEditor_TextArea_TextEntered;
                DispatcherTimer foldingUpdateTimer = new DispatcherTimer();
                foldingUpdateTimer.Interval = TimeSpan.FromSeconds(2);
                foldingUpdateTimer.Tick += delegate { UpdateFoldings(); };
                foldingUpdateTimer.Start();

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
                   


                }    

            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden; return true;
        }


        void openFileClick(object sender, RoutedEventArgs e) {
            OpenFileDialog dlg = new OpenFileDialog();
            dlg.CheckFileExists = true;
            if (dlg.ShowDialog() ?? false) {
                currentFileName = dlg.FileName;
                codeEditor.Load(dlg.FileName);
                codeEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinitionByExtension(Path.GetExtension(currentFileName));
            }
        }

        void saveFileClick(object sender, EventArgs e) {
            if (currentFileName == null) {
                SaveFileDialog dlg = new SaveFileDialog();
                dlg.DefaultExt = ".txt";
                if (dlg.ShowDialog() ?? false) {
                    currentFileName = dlg.FileName;
                } else { return; }
            }
            codeEditor.Save(currentFileName);
        }

        void propertyGridComboBoxSelectionChanged(object sender, RoutedEventArgs e) {
            if (propertyGrid == null)
                return;
            switch (propertyGridComboBox.SelectedIndex) {
                case 0:
                    propertyGrid.SelectedObject = codeEditor;
                    break;
                case 1:
                    propertyGrid.SelectedObject = codeEditor.TextArea;
                    break;
                case 2:
                    propertyGrid.SelectedObject = codeEditor.Options;
                    break;
            }
        }

       

        void codeEditor_TextArea_TextEntered(object sender, TextCompositionEventArgs e) {
            if (e.Text == ".") {
                // open code completion after the user has pressed dot:
                completionWindow = new CompletionWindow(codeEditor.TextArea);
                // provide AvalonEdit with the data:
                IList<ICompletionData> data = completionWindow.CompletionList.CompletionData;
                data.Add(new MyCompletionData("Item1"));
                data.Add(new MyCompletionData("Item2"));
                data.Add(new MyCompletionData("Item3"));
                data.Add(new MyCompletionData("Another item"));
                completionWindow.Show();
                completionWindow.Closed += delegate {
                    completionWindow = null;
                };
            }
        }

        void codeEditor_TextArea_TextEntering(object sender, TextCompositionEventArgs e) {
            if (e.Text.Length > 0 && completionWindow != null) {
                if (!char.IsLetterOrDigit(e.Text[0])) {
                    // Whenever a non-letter is typed while the completion window is open,
                    // insert the currently selected element.
                    completionWindow.CompletionList.RequestInsertion(e);
                }
            }
            // do not set e.Handled=true - we still want to insert the character that was typed
        }

        #region Folding
        FoldingManager foldingManager;
        object foldingStrategy;

        void HighlightingComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e) {
            //if () {
                codeEditor.SyntaxHighlighting = HighlightingManager.Instance.GetDefinition(((ComboBox)sender).SelectedValue.ToString());
                //foldingManager = FoldingManager.Install(codeEditor.TextArea);

                //FoldingManager foldingManager = FoldingManager.Install(codeEditor.TextArea);
                //BraceFoldingStrategy foldingStrategy = new BraceFoldingStrategy();
                //foldingStrategy.UpdateFoldings(foldingManager, codeEditor.Document);
            //}
            if (codeEditor.SyntaxHighlighting == null) {
                foldingStrategy = null;
            }
            else {
                    switch (codeEditor.SyntaxHighlighting.Name) {
                        case "XML":
                            foldingStrategy = new XmlFoldingStrategy();
                            codeEditor.TextArea.IndentationStrategy = new ICSharpCode.AvalonEdit.Indentation.DefaultIndentationStrategy();
                            break;
                        case "C#":
                            foldingStrategy = new XmlFoldingStrategy();
                            codeEditor.TextArea.IndentationStrategy = new ICSharpCode.AvalonEdit.Indentation.DefaultIndentationStrategy();
                            break;
                        case "C++":
                        case "PHP":
                        case "Java":
                            codeEditor.TextArea.IndentationStrategy = new ICSharpCode.AvalonEdit.Indentation.CSharp.CSharpIndentationStrategy(codeEditor.Options);
                            foldingStrategy = new BraceFoldingStrategy();
                            break;
                        default:
                            codeEditor.TextArea.IndentationStrategy = new ICSharpCode.AvalonEdit.Indentation.DefaultIndentationStrategy();
                            foldingStrategy = null;
                            break;
                    }
                    if (foldingStrategy != null) {
                        if (foldingManager == null)
                            foldingManager = FoldingManager.Install(codeEditor.TextArea);
                        UpdateFoldings();
                    }
                    else {
                        if (foldingManager != null) {
                            FoldingManager.Uninstall(foldingManager);
                            foldingManager = null;
                        }
                    }
                }
            }


        void UpdateFoldings() {
            if (foldingStrategy is BraceFoldingStrategy) {
                ((BraceFoldingStrategy)foldingStrategy).UpdateFoldings(foldingManager, codeEditor.Document);
            }
            if (foldingStrategy is XmlFoldingStrategy) {
                ((XmlFoldingStrategy)foldingStrategy).UpdateFoldings(foldingManager, codeEditor.Document);
            }
        }
        #endregion

        private void saveAsFileClick(object sender, RoutedEventArgs e) {
                SaveFileDialog dlg = new SaveFileDialog(); //dlg.DefaultExt = ".txt";
                if (dlg.ShowDialog() ?? false) {
                    currentFileName = dlg.FileName;
                }
                else { return; }
        }



        ITextMarkerService textMarkerService;

        void InitializeTextMarkerService() {
            var textMarkerService = new TextMarkerService(codeEditor.Document);
            codeEditor.TextArea.TextView.BackgroundRenderers.Add(textMarkerService);
            codeEditor.TextArea.TextView.LineTransformers.Add(textMarkerService);
            IServiceContainer services = (IServiceContainer)codeEditor.Document.ServiceProvider.GetService(typeof(IServiceContainer));
            if (services != null)
                services.AddService(typeof(ITextMarkerService), textMarkerService);
            this.textMarkerService = textMarkerService;
        }

        void RemoveAllClick(object sender, RoutedEventArgs e) {
            textMarkerService.RemoveAll(m => true);
        }

        void RemoveSelectedClick(object sender, RoutedEventArgs e) {
            textMarkerService.RemoveAll(IsSelected);
        }

        void AddMarkerFromSelectionClick(object sender, RoutedEventArgs e) {
            ITextMarker marker = textMarkerService.Create(codeEditor.SelectionStart, codeEditor.SelectionLength);
            marker.MarkerTypes = TextMarkerTypes.SquigglyUnderline;
            marker.MarkerColor = Colors.Red;
        }

        bool IsSelected(ITextMarker marker) {
            int selectionEndOffset = codeEditor.SelectionStart + codeEditor.SelectionLength;
            if (marker.StartOffset >= codeEditor.SelectionStart && marker.StartOffset <= selectionEndOffset)
                return true;
            if (marker.EndOffset >= codeEditor.SelectionStart && marker.EndOffset <= selectionEndOffset)
                return true;
            return false;
        }


        /// <summary>
        /// UniversalEditor Theme Controls
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void btnTheme_Click(object sender, RoutedEventArgs e) {

            if (btn_theme.Background == (Brush)new BrushConverter().ConvertFromString(lightThemeName)) {
                codeEditor.Background = (Brush)new BrushConverter().ConvertFromString(lightThemeName);
                btn_theme.Background = (Brush)new BrushConverter().ConvertFromString(darkThemeName);
            }
            else {
                codeEditor.Background = (Brush)new BrushConverter().ConvertFromString(darkThemeName);
                btn_theme.Background = (Brush)new BrushConverter().ConvertFromString(lightThemeName);
            }
        }
    }

}
