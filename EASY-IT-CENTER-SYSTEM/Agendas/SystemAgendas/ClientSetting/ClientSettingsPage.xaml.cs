﻿using EasyITCenter.Api;
using EasyITCenter.Classes;
using EasyITCenter.GlobalClasses;
using EasyITCenter.GlobalOperations;
using EasyITCenter.SystemHelper;
using EasyITCenter.SystemStructure;
using MahApps.Metro.Controls;
using Microsoft.Win32;
using Org.BouncyCastle.Asn1;
using System;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace EasyITCenter.Pages {

    public partial class ClientSettingsPage : UserControl {
        public static DataViewSupport dataViewSupport = new DataViewSupport();
        public static SolutionSchedulerList selectedRecord = new SolutionSchedulerList();


        public ClientSettingsPage() {
            InitializeComponent();
            _ = SystemOperations.SetLanguageDictionary(Resources, App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_defaultLanguage").Value);

            try {
                SystemLocalEnumSets.languages.First(a => a.Name == "czech").Name = Resources["czech"].ToString();
                SystemLocalEnumSets.updateVariants.ToList().ForEach(updateType => updateType.Name = Resources[updateType.Name].ToString());
                SystemLocalEnumSets.sections.ToList().ForEach(section => section.Name = Resources[section.Name].ToString());

                _ = DataOperations.TranslateFormFields(ConfigForm);
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

            LoadDataList();
        }

        #region helper methods

        private class ExtensionsItem {

            public ExtensionsItem() {
                ident = null;
                isTrue = false;
                asn1OctetString = null;
            }

            public DerObjectIdentifier ident { get; set; }
            public bool isTrue { get; set; }
            public Asn1OctetString asn1OctetString { get; set; }
        }

        #endregion helper methods

        public async void LoadDataList() {
            MainWindow.ProgressRing = Visibility.Visible;
            try {
                //Generate Menu Panel
                TabMenuList.Items.Clear();
                SystemLocalEnumSets.sections.ToList().ForEach(async section => {
                    try {
                        WrapPanel tabMenuPanel = new WrapPanel() { Name = "wp_" + section.Value, Width = 850, HorizontalAlignment = HorizontalAlignment.Center, VerticalAlignment = VerticalAlignment.Center };

                        TabItem tabMenu = new TabItem() { Name = section.Value, Header = section.Name, Content = tabMenuPanel };
                        TabMenuList.Items.Add(tabMenu);
                    } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                });

                //Generate Config Fields
                App.appRuntimeData.AppClientSettings.ToList().ForEach(async configuration => {
                    try {
                        //Get Parent Object
                        WrapPanel targetGrid = ((WrapPanel)TabMenuList.Items.Cast<TabItem>().ToList().Where(a => a.Name.StartsWith(configuration.Key.Split('_')[0])).First().Content);
                        DataGrid panel = new DataGrid();

                        //Insert Label
                        Label label = new Label() {
                            Name = "lbl_" + configuration.Key,
                            Content = Resources[configuration.Key.Split('_')[1]].ToString(),
                            Width = 350,
                            HorizontalAlignment = HorizontalAlignment.Left,
                            VerticalAlignment = VerticalAlignment.Center,
                            FontSize = 16,
                            Foreground = new SolidColorBrush(Colors.White)
                        };
                        targetGrid.Children.Add(label);

                        //Insert Input By Defined Type
                        switch (bool.TryParse(configuration.Value, out bool boolcheck) ? "bit" : int.TryParse(configuration.Value, out int test) ? "int" : new[] { "sys_defaultLanguage", "sys_automaticUpdate" }.Contains(configuration.Key) ? "list" : "string") {
                            case "bit":
                                CheckBox check = new CheckBox() { Name = configuration.Key, IsChecked = bool.Parse(configuration.Value), Width = 300, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                targetGrid.Children.Add(check);
                                break;

                            case "int":
                                NumericUpDown numericUpDown = new NumericUpDown() { Name = configuration.Key, Value = int.Parse(configuration.Value), Width = 300, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                targetGrid.Children.Add(numericUpDown);
                                break;

                            case "string":
                                TextBox textbox = new TextBox() { Name = configuration.Key, Text = configuration.Value, Width = 300, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                targetGrid.Children.Add(textbox);
                                break;

                            case "list":
                                ComboBox comboBox = new ComboBox() { Name = configuration.Key, Text = configuration.Value, Width = 300, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };

                                if (configuration.Key.ToLower() == "sys_defaultlanguage") { comboBox.ItemsSource = SystemLocalEnumSets.languages; comboBox.DisplayMemberPath = "Name"; comboBox.SelectedValuePath = "Value"; comboBox.SelectedValue = configuration.Value; }
                                if (configuration.Key.ToLower() == "sys_automaticupdate") { comboBox.ItemsSource = SystemLocalEnumSets.updateVariants; comboBox.DisplayMemberPath = "Name"; comboBox.SelectedValuePath = "Value"; comboBox.SelectedValue = configuration.Value; }

                                targetGrid.Children.Add(comboBox);
                                break;
                        }
                        bool buttonInserted = false;

                        //Add Unique Functionality
                        switch (configuration.Key.ToLower()) {
                            case "conn_apiaddress":
                                Button button = new Button() { Name = "btn_" + configuration.Key, Margin = new Thickness(5), Content = Resources["test"].ToString(), Width = 150, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                button.Click += BtnTestApi_Click;
                                targetGrid.Children.Add(button);
                                buttonInserted = true;
                                break;

                            case "beh_activesystemsaver":
                                Button button1 = new Button() { Name = "btn_" + configuration.Key, Margin = new Thickness(5), Content = Resources["test"].ToString(), Width = 150, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                button1.Click += BtnShowVideo_Click;
                                targetGrid.Children.Add(button1);
                                buttonInserted = true;
                                break;

                            case "conn_reportconnectionstring":
                                Button button2 = new Button() { Name = "btn_" + configuration.Key, Margin = new Thickness(5), Content = Resources["test"].ToString(), Width = 150, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                button2.Click += BtnTestConnection_Click;
                                targetGrid.Children.Add(button2);
                                buttonInserted = true;
                                break;

                            case "conn_reportbuilderpath":
                                Button button3 = new Button() { Name = "btn_" + configuration.Key, Margin = new Thickness(5), Content = Resources["browse"].ToString(), Width = 150, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                button3.Click += BtnBrowseDesigner_Click;
                                targetGrid.Children.Add(button3);
                                buttonInserted = true;
                                break;

                            case "conn_reportingpath":
                                Button button4 = new Button() { Name = "btn_" + configuration.Key, Margin = new Thickness(5), Content = Resources["browse"].ToString(), Width = 150, HorizontalAlignment = HorizontalAlignment.Right, VerticalAlignment = VerticalAlignment.Center };
                                button4.Click += BtnBrowseReporter_Click;
                                targetGrid.Children.Add(button4);
                                buttonInserted = true;
                                break;
                        }

                        if (!buttonInserted) { targetGrid.Children.Add(new Label() { Width = 200 }); };
                    } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                });
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            MainWindow.ProgressRing = Visibility.Hidden;
        }

        private bool PrepareConfigurationForSave() {
            try {
                App.appRuntimeData.AppClientSettings.ToList().ForEach(configuration => {
                    try {
                        WrapPanel targetGrid = ((WrapPanel)TabMenuList.Items.Cast<TabItem>().ToList().Where(a => a.Name.StartsWith(configuration.Key.Split('_')[0])).First().Content);

                        targetGrid.Children.OfType<CheckBox>().ToList().ForEach(checkBox => {
                            App.appRuntimeData.AppClientSettings.Remove(checkBox.Name);
                            App.appRuntimeData.AppClientSettings.Add(checkBox.Name, checkBox.IsChecked.ToString());
                        });
                        targetGrid.Children.OfType<TextBox>().ToList().ForEach(textbox => {
                            App.appRuntimeData.AppClientSettings.Remove(textbox.Name);
                            App.appRuntimeData.AppClientSettings.Add(textbox.Name, textbox.Text);
                        });
                        targetGrid.Children.OfType<NumericUpDown>().ToList().ForEach(numeric => {
                            App.appRuntimeData.AppClientSettings.Remove(numeric.Name);
                            App.appRuntimeData.AppClientSettings.Add(numeric.Name, numeric.Value.ToString());
                        });
                        targetGrid.Children.OfType<ComboBox>().ToList().ForEach(combobox => {
                            App.appRuntimeData.AppClientSettings.Remove(combobox.Name);
                            App.appRuntimeData.AppClientSettings.Add(combobox.Name, combobox.SelectedValue.ToString());
                        });
                    } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                });

                //Runtime Application Settings Changed
                MainWindow metroWindow = Application.Current.MainWindow as MainWindow;
                metroWindow.MultiSameTabsEnabled = bool.Parse(App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_multiSameTabs").Value);

                return true;
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            return false;
        }

        private async void BtnSave_Click(object sender, RoutedEventArgs e) {
            MainWindow.ProgressRing = Visibility.Visible;
            if (PrepareConfigurationForSave()) {
                try {
                    SystemWindowDataModel.SaveTheme();
                    Exception result = FileOperations.SaveSettings();
                    if (result == null) {
                        await MainWindow.ShowMessageOnMainWindow(false, Resources["savingSuccessfull"].ToString() + Environment.NewLine + Resources["restartForApply"].ToString());
                    }
                    else { await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + result.Message + Environment.NewLine + result.StackTrace); }
                } catch (Exception ex) {
                    await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + ex.Message + Environment.NewLine + ex.StackTrace);
                }
            }
        }

        private void BtnBrowseReporter_Click(object sender, RoutedEventArgs e) {
            try {
                OpenFileDialog dlg = new OpenFileDialog { DefaultExt = ".exe", Filter = "Exe files |*.exe", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) {
                    SystemLocalEnumSets.sections.ToList().ForEach(section => {
                        WrapPanel targetGrid = ((WrapPanel)TabMenuList.Items.Cast<TabItem>().ToList().Where(a => a.Name.StartsWith("conn")).First().Content);
                        targetGrid.Children.OfType<TextBox>().ToList().ForEach(textbox => {
                            if (textbox.Name == "conn_reportingPath") { textbox.Text = dlg.FileName; };
                        });
                    });
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }

        private async void BtnTestApi_Click(object sender, RoutedEventArgs e) {
            using (HttpClient httpClient = new HttpClient()) {
                string apiAddress = null;
                try {
                    MainWindow.ProgressRing = Visibility.Visible;

                    SystemLocalEnumSets.sections.ToList().ForEach(section => {
                        WrapPanel targetGrid = ((WrapPanel)TabMenuList.Items.Cast<TabItem>().ToList().Where(a => a.Name.StartsWith("conn")).First().Content);
                        targetGrid.Children.OfType<TextBox>().ToList().ForEach(textbox => {
                            if (textbox.Name == "conn_apiAddress") { apiAddress = textbox.Text; };
                        });
                    });
                    string json = await httpClient.GetStringAsync(apiAddress + "/" + ApiUrls.EasyITCenterBackendCheck);

                    MainWindow.ProgressRing = Visibility.Hidden;
                    await MainWindow.ShowMessageOnMainWindow(false, json);
                } catch {
                    try {
                        MainWindow.ProgressRing = Visibility.Visible;
                        string json = await httpClient.GetStringAsync(apiAddress + "/" + ApiUrls.EasyITCenterBackendCheck);

                        MainWindow.ProgressRing = Visibility.Hidden;
                        await MainWindow.ShowMessageOnMainWindow(true, json);
                    } catch (Exception ex) {
                        MainWindow.ProgressRing = Visibility.Hidden;
                        await MainWindow.ShowMessageOnMainWindow(true, "Exception Error : " + ex.Message + Environment.NewLine + ex.StackTrace);
                    }
                }
            }
        }

        private void BtnExport_Click(object sender, RoutedEventArgs e) {
            if (PrepareConfigurationForSave()) {
                try {
                    SaveFileDialog dlg = new SaveFileDialog { DefaultExt = ".json", Filter = "Config file |*.json", Title = Resources["fileOpenDescription"].ToString() };
                    if (dlg.ShowDialog() == true) { FileOperations.WriteToFile(dlg.FileName, DataOperations.ConvertDataSetToJson(App.appRuntimeData.AppClientSettings)); }
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            }
        }

        private void BtnRestart_Click(object sender, RoutedEventArgs e) => App.AppRestart();

        private void BtnCheckUpdate_Click(object sender, RoutedEventArgs e) => SystemUpdater.CheckUpdate(true);

        private void BtnShowVideo_Click(object sender, RoutedEventArgs e) => new WelcomePage().Show();

        private async void BtnTestConnection_Click(object sender, RoutedEventArgs e) {
            try {
                MainWindow.ProgressRing = Visibility.Visible;

                string connection = null;
                SystemLocalEnumSets.sections.ToList().ForEach(section => {
                    WrapPanel targetGrid = ((WrapPanel)TabMenuList.Items.Cast<TabItem>().ToList().Where(a => a.Name.StartsWith("conn")).First().Content);
                    targetGrid.Children.OfType<TextBox>().ToList().ForEach(textbox => {
                        if (textbox.Name == "conn_reportConnectionString") { connection = textbox.Text; };
                    });
                }); SqlConnection cnn = new SqlConnection(connection);
                cnn.Open();
                if (cnn.State == System.Data.ConnectionState.Open) {
                    await MainWindow.ShowMessageOnMainWindow(false, Resources["connectionSucceed"].ToString());
                }
                else { await MainWindow.ShowMessageOnMainWindow(true, Resources["connectionFail"].ToString()); }
                cnn.Close();
                MainWindow.ProgressRing = Visibility.Hidden;
            } catch (Exception ex) {
                MainWindow.ProgressRing = Visibility.Hidden;
                await MainWindow.ShowMessageOnMainWindow(true, ex.Message + Environment.NewLine + ex.StackTrace);
            }
        }

        private void BtnBrowseDesigner_Click(object sender, RoutedEventArgs e) {
            try {
                OpenFileDialog dlg = new OpenFileDialog { DefaultExt = ".exe", Filter = "Exe files |*.exe", Title = Resources["fileOpenDescription"].ToString() };
                if (dlg.ShowDialog() == true) {
                    SystemLocalEnumSets.sections.ToList().ForEach(section => {
                        WrapPanel targetGrid = ((WrapPanel)TabMenuList.Items.Cast<TabItem>().ToList().Where(a => a.Name.StartsWith("conn")).First().Content);
                        targetGrid.Children.OfType<TextBox>().ToList().ForEach(textbox => {
                            if (textbox.Name == "conn_reportBuilderPath") { textbox.Text = dlg.FileName; };
                        });
                    });
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
        }
    }
}