using DocumentFormat.OpenXml.Presentation;
using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using ICSharpCode.TextEditor.Actions;
using MahApps.Metro.Controls;
using Microsoft.EntityFrameworkCore.Query.Expressions;
using Microsoft.Web.WebView2.Core.DevToolsProtocolExtension;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Windows;
using System.Windows.Controls;


namespace EasyITSystemCenter.GlobalGenerators {

    /// <summary>
    /// System Online Icon Generator from custom Path Its for working with Icon over Database Dynamically
    /// </summary>
    public class XamlFormGenerators {


        /// <summary>
        /// Xaml Form Generator 300,*  : 15 Rows
        /// This Is Generator For existing ListForm with Defined Grid Cool/Rows:
        /// Form Have Basic DataView And ListForm Empty Section
        /// Buttons,Tabs with WebView2 Window Are Defined By XAML Form
        /// </summary>
        /// <param name="rootGird"></param>
        /// <returns></returns>
        public static Grid StandardXamlFormViewGenerator(ref Grid rootGrid, DataTable dataset, SystemCustomPageList systemCustomPageList, List<SolutionMixedEnumList> solutionMixedEnumList) {

            try {
                int columnNumber = 0;
                if (dataset != null) {


                    //TITLE
                    Label titleLabel = new Label() { Name = "lbl_" + systemCustomPageList.DbtableName, FontSize = 30, VerticalAlignment = VerticalAlignment.Top, HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(0), Padding = new Thickness(0) };
                    titleLabel.SetValue(Grid.RowProperty, 0); titleLabel.SetValue(Grid.ColumnProperty, 0); titleLabel.SetValue(Grid.ColumnSpanProperty, 2);
                    rootGrid.Children.Add(titleLabel);



                    foreach (var item in dataset.Columns) {
                        //Detect Field Type
                        var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber]);
                        bool columnDefined = false;

                        //DIAL TYPE 
                        if (dataset.Columns[columnNumber].ToString().ToLower().Contains("inherited")) {
                            ComboBox combobox = new ComboBox() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Right, Width = 250, Margin = new Thickness(5), ItemsSource = solutionMixedEnumList, SelectedValuePath = "Name", DisplayMemberPath = "Name" };
                            combobox.SetValue(Grid.RowProperty, columnNumber + 1); combobox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(combobox);
                            columnDefined = true;
                        }

                        if (fieldTypeResult.Item2 == "string" && !columnDefined
                            && dataset.Columns[columnNumber].ToString().ToLower() != systemCustomPageList.ColumnName.ToLower()
                            && dataset.Columns[columnNumber].ToString().ToLower() != "userid"
                            && !dataset.Columns[columnNumber].ToString().ToLower().Contains("inherited")
                            ) {
                            TextBox textbox = new TextBox() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false, /*Text = dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()*/ };
                            textbox.SetValue(Grid.RowProperty, columnNumber + 1); textbox.SetValue(Grid.ColumnProperty, 1);

                            //DESCRIPTION AREA
                            if (dataset.Columns[columnNumber].ToString().ToLower() == "Description".ToLower()) { rootGrid.RowDefinitions[columnNumber].Height = new GridLength(80, GridUnitType.Pixel); }
                            rootGrid.Children.Add(textbox);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "bool" && !columnDefined) {
                            CheckBox checkBox = new CheckBox() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(5),/* IsChecked = bool.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            checkBox.SetValue(Grid.RowProperty, columnNumber + 1); checkBox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(checkBox);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "int" && !columnDefined) {
                            NumericUpDown numeric = new NumericUpDown() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false, /*Value = int.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            numeric.SetValue(Grid.RowProperty, columnNumber + 1); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "double" && !columnDefined) {
                            NumericUpDown numeric = new NumericUpDown() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false, /*Value = double.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            numeric.SetValue(Grid.RowProperty, columnNumber + 1); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "time" && !columnDefined) {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short/*, SelectedTime = TimeSpan.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/, SelectedTimeFormat = TimePickerFormat.Short };
                            datePicker.SetValue(Grid.RowProperty, columnNumber + 1); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "date" && !columnDefined) {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = false, SelectedDateFormat = DatePickerFormat.Short/*, SelectedDate = DateTime.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            datePicker.SetValue(Grid.RowProperty, columnNumber + 1); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                            columnDefined = true;
                        }

                        if (fieldTypeResult.Item2 == "datetime" && !columnDefined
                            && !dataset.Columns[columnNumber].ToString().ToLower().StartsWith("timestamp")) {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "frm_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short/*,  SelectedDate = DateTime.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            datePicker.SetValue(Grid.RowProperty, columnNumber + 1); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                            columnDefined = true;
                        }


                        //Insert Label for Each Field Without EDITOR AND HIDDEN FIELDS
                        if (columnDefined
                            && dataset.Columns[columnNumber].ToString().ToLower() != systemCustomPageList.ColumnName.ToLower()
                            && dataset.Columns[columnNumber].ToString().ToLower() != "userid"
                            && dataset.Columns[columnNumber].ToString().ToLower() != "timestamp") {
                            Label fieldLabel = new Label() { Name = "lbl_" + dataset.Columns[columnNumber].ToString(), FontSize = 20, VerticalAlignment = VerticalAlignment.Top, HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(5) };
                            fieldLabel.SetValue(Grid.RowProperty, columnNumber + 1); fieldLabel.SetValue(Grid.ColumnProperty, 0);
                            rootGrid.Children.Add(fieldLabel);
                        }

                        columnNumber += 1;
                    };

                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            return rootGrid;
        }

        /// <summary>
        /// Control The Data Comunication Between Generic Form And Selected Record
        /// </summary>
        /// <param name="userForm"></param>
        /// <param name="selectedRecord"></param>
        /// <param name="dataToForm"></param>
        /// <param name="formConfiguration"></param>
        /// <returns></returns>
        public static string StandardXamlDataFormController(ref Grid userForm, ref DataRowView selectedRecord, ref List<Dictionary<string, string>> recordForSave, bool dataToForm, SystemCustomPageList formConfiguration) {
            int columnNo = 0; string dataForBrowser = null; recordForSave.Clear();

            if (dataToForm) {
                List<object> columnList = selectedRecord.Row.ItemArray.ToList();
                foreach (object prop in columnList) {
                    
                        bool setDone = false;
                        string fieldName = selectedRecord.Row.Table.Columns[columnNo].ToString();
                        string fieldValue = selectedRecord.Row[columnNo].ToString();
                        var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(selectedRecord.Row[columnNo]);

                    try {
                        //SPECIFIC CONDITION MUST BE FIRST
                        if (!setDone && fieldName == formConfiguration.ColumnName.ToLower()) {
                            dataForBrowser = fieldValue; setDone = true;
                        }
                        if (!setDone && fieldName.Contains("inherited")) { //Combobox
                            try { userForm.FindChild<ComboBox>($"frm_{fieldName}").SelectedValue = fieldValue; setDone = true; } catch { }
                        }
                        if (!setDone && fieldName == "timestamp") { setDone = true; }
                        //userForm.Children.AsParallel().OfType<DateTimePicker>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                        //    First().SetCurrentValue(DateTimePicker.SelectedDateProperty, DateTime.Parse(fieldValue));

                        if (!setDone && fieldName == "userid") { setDone = true; }
                        //userForm.Children.AsParallel().OfType<NumericUpDown>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                        //      First().SetCurrentValue(NumericUpDown.ValueProperty, double.Parse(fieldValue));



                        //STANDARD GENERATION PART
                        if (!setDone && new string[] { "int", "float", "double", "int32", "int64" }.Contains(fieldTypeResult.Item2)) {
                            try { userForm.FindChild<NumericUpDown>($"frm_{fieldName}").Value = double.TryParse(fieldValue, out double tmpdouble) ? double.Parse(fieldValue) as double? : null;
                                  setDone = true; } catch { }
                        }
                        else if (!setDone && new string[] { "date", "time", "datetime" }.Contains(fieldTypeResult.Item2)) {
                            try { if (userForm.FindChild<DateTimePicker>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<DateTimePicker>($"frm_{fieldName}").SelectedDate = DateTime.TryParse(fieldValue, out DateTime tmpdate) ? DateTime.Parse(fieldValue) as DateTime? : null;
                                  }
                                  setDone = true; } catch { }
                        }
                        else if (!setDone && new string[] { "bool" }.Contains(fieldTypeResult.Item2)) {
                            try { userForm.FindChild<CheckBox>($"frm_{fieldName}").IsChecked = bool.Parse(fieldValue);
                                  setDone = true; } catch { }
                        }
                        else if (!setDone && new string[] { "string" }.Contains(fieldTypeResult.Item2)) {
                            try { userForm.FindChild<TextBox>($"frm_{fieldName}").Text = fieldValue;
                                  setDone = true; } catch { }
                        }
                    } 
                    catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

                    recordForSave.Add(new Dictionary<string, string>() { { fieldName, fieldValue } });
                    columnNo += 1;
                }
            }

            //FORM TO DATA For Save BROWSER DATA NOD ADDED TO RecordForSave COLLECTION
            if (!dataToForm) {
                List<object> columnList = selectedRecord.Row.ItemArray.ToList();
                foreach (object prop in columnList) {
                    bool setDone = false;
                    string fieldName = selectedRecord.Row.Table.Columns[columnNo].ToString();
                    string fieldValue = selectedRecord.Row[columnNo].ToString();
                    var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(selectedRecord.Row[columnNo]);

                    //SPECIFIC CONDITION MUST BE FIRST
                    if (!setDone && fieldName == formConfiguration.ColumnName.ToLower()) {
                        fieldValue = null; //selectedRecord.Row[columnNo].ToString();dataForBrowser = fieldValue; 
                        setDone = true;
                    }
                    if (!setDone && fieldName.Contains("inherited")) { //Combobox
                        try { selectedRecord.Row[columnNo] = userForm.FindChild<ComboBox>($"frm_{fieldName}").SelectedValue; setDone = true; } catch { }
                        fieldValue = userForm.FindChild<ComboBox>($"frm_{fieldName}").SelectedValue.ToString();
                    }
                    if (!setDone && fieldName == "timestamp") {
                        try { selectedRecord.Row[columnNo] = DateTimeOffset.Now.DateTime;} catch { }
                        fieldValue = DateTimeOffset.Now.DateTime.ToString();
                        //userForm.Children.AsParallel().OfType<DateTimePicker>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                        //First().SetCurrentValue(DateTimePicker.SelectedDateProperty, DateTime.Parse(fieldValue));
                        setDone = true;
                    }
                    if (fieldName == "userid") {
                        try { selectedRecord.Row[columnNo] = App.UserData.Authentification.Id; } catch { }
                        fieldValue = App.UserData.Authentification.Id.ToString();
                        setDone = true;
                    }
                    //userForm.Children.AsParallel().OfType<NumericUpDown>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                    //      First().SetCurrentValue(NumericUpDown.ValueProperty, double.Parse(fieldValue));



                    //STANDARD GENERATION PART
                    if (!setDone && new string[] { "int", "float", "double", "int32", "int64" }.Contains(fieldTypeResult.Item2)) {
                        try {
                            selectedRecord.Row[columnNo] = userForm.FindChild<NumericUpDown>($"frm_{fieldName}").Value;
                            fieldValue = selectedRecord.Row[columnNo].ToString();
                            setDone = true; } catch { }
                    } else if (!setDone && new string[] { "date", "time", "datetime" }.Contains(fieldTypeResult.Item2)) {
                        try {
                            selectedRecord.Row[columnNo] = userForm.FindChild<DatePicker>($"frm_{fieldName}").SelectedDate;
                            fieldValue = selectedRecord.Row[columnNo].ToString();
                            setDone = true; } catch { }
                    } else if (!setDone && new string[] { "bool" }.Contains(fieldTypeResult.Item2)) {
                        try { selectedRecord.Row[columnNo] = userForm.FindChild<CheckBox>($"frm_{fieldName}").IsChecked;
                            fieldValue = selectedRecord.Row[columnNo].ToString();
                            setDone = true; } catch { }
                    } else if (!setDone && new string[] { "string" }.Contains(fieldTypeResult.Item2)) {
                        try { selectedRecord.Row[columnNo] = userForm.FindChild<TextBox>($"frm_{fieldName}").Text;
                            fieldValue = selectedRecord.Row[columnNo].ToString();
                            setDone = true; } catch { }
                    }

                    if (fieldName != formConfiguration.ColumnName.ToLower()) { //Browser DATA ARE INSERTED IN SAVEFORM METHOD
                        recordForSave.Add(new Dictionary<string, string>() { { fieldName, fieldValue } });
                    }
                    columnNo += 1;
                }
            }

            return dataForBrowser;
        }

    }
}