using DocumentFormat.OpenXml.Presentation;
using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using ICSharpCode.TextEditor.Actions;
using MahApps.Metro.Controls;
using Microsoft.EntityFrameworkCore.Query.Expressions;
using Microsoft.Web.WebView2.Core.DevToolsProtocolExtension;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
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

                    rootGrid.Children.Clear();

                    //TITLE
                    Label titleLabel = new Label() { Name = "lbl_" + systemCustomPageList.DbtableName, FontSize = 30, VerticalAlignment = VerticalAlignment.Top, 
                        HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(0), Padding = new Thickness(0) 
                    };
                    titleLabel.SetValue(Grid.RowProperty, 0); titleLabel.SetValue(Grid.ColumnProperty, 0); titleLabel.SetValue(Grid.ColumnSpanProperty, 2);
                    rootGrid.Children.Add(titleLabel);



                    foreach (var item in dataset.Columns) {
                        string fieldName = dataset.Columns[columnNumber].ToString().ToLower();
                        //Detect Field Type
                        var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber]); bool columnDefined = false;

                        //DIAL TYPE 
                        if (fieldName.Contains("inherited")) {
                            ComboBox combobox = new ComboBox() { Name = "frm_" + dataset.Columns[columnNumber].ToString().ToLower(), VerticalAlignment = VerticalAlignment.Center, 
                                HorizontalAlignment = HorizontalAlignment.Right, Width = 250, Margin = new Thickness(5), ItemsSource = solutionMixedEnumList, 
                                SelectedValuePath = "Name", DisplayMemberPath = "Translation" 
                            };
                            combobox.SetValue(Grid.RowProperty, columnNumber + 1); combobox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(combobox);
                            columnDefined = true;
                        }

                        if (fieldTypeResult.Item2 == "string" && !columnDefined
                            && fieldName != systemCustomPageList.ColumnName.ToLower() && !fieldName.Contains("inherited") ) {
                            TextBox textbox = new TextBox() { Name = "frm_" + fieldName, VerticalAlignment = VerticalAlignment.Stretch, 
                                HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsUndoEnabled = true
                                ,AcceptsReturn = fieldName == "Description".ToLower() ? true : false, TextWrapping = TextWrapping.Wrap, 
                                VerticalScrollBarVisibility = ScrollBarVisibility.Auto  
                            };
                            textbox.SetValue(Grid.RowProperty, columnNumber + 1); textbox.SetValue(Grid.ColumnProperty, 1);

                            //DESCRIPTION AREA
                            if (fieldName == "Description".ToLower()) { rootGrid.RowDefinitions[columnNumber + 1].Height = new GridLength(80, GridUnitType.Pixel); }
                            rootGrid.Children.Add(textbox);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "bool" && !columnDefined) {
                            CheckBox checkBox = new CheckBox() { Name = "frm_" + fieldName, VerticalAlignment = VerticalAlignment.Center, 
                                HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(0,5,5,5), Padding = new Thickness(0) 
                            };
                            checkBox.SetValue(Grid.RowProperty, columnNumber + 1); checkBox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(checkBox);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "int" && fieldName != "userid" && !columnDefined) {
                            NumericUpDown numeric = new NumericUpDown() { Name = "frm_" + fieldName, 
                                VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2)
                                , IsReadOnly = fieldName.ToLower() == "id".ToLower() ? true : false 
                            };
                            numeric.SetValue(Grid.RowProperty, columnNumber + 1); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "double" && fieldName != "userid" && !columnDefined) {
                            NumericUpDown numeric = new NumericUpDown() { Name = "frm_" + fieldName, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false, /*Value = double.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            numeric.SetValue(Grid.RowProperty, columnNumber + 1); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "time" && !columnDefined) {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "frm_" + fieldName, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short/*, SelectedTime = TimeSpan.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/, SelectedTimeFormat = TimePickerFormat.Short };
                            datePicker.SetValue(Grid.RowProperty, columnNumber + 1); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                            columnDefined = true;
                        }
                        if (fieldTypeResult.Item2 == "date" && !columnDefined) {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "frm_" + fieldName, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = false, SelectedDateFormat = DatePickerFormat.Short/*, SelectedDate = DateTime.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            datePicker.SetValue(Grid.RowProperty, columnNumber + 1); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                            columnDefined = true;
                        }

                        if (fieldTypeResult.Item2 == "datetime" && !columnDefined && !fieldName.StartsWith("timestamp")) {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "frm_" + fieldName, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short/*,  SelectedDate = DateTime.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString())*/ };
                            datePicker.SetValue(Grid.RowProperty, columnNumber + 1); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                            columnDefined = true;
                        }


                        //Insert Label for Each Field Without EDITOR AND HIDDEN FIELDS
                        if (columnDefined
                            && fieldName != systemCustomPageList.ColumnName.ToLower() && fieldName != "userid" && fieldName != "timestamp") {
                            Label fieldLabel = new Label() { Name = "lbl_" + fieldName, FontSize = 20, 
                                VerticalAlignment = VerticalAlignment.Stretch, VerticalContentAlignment = VerticalAlignment.Top, 
                                HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(5,0,5,5), Padding = new Thickness(0)
                            };
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
        /// <param name="recordForSave"></param>
        /// <param name="dataToForm"></param>
        /// <param name="systemCustomPageSetting"></param>
        /// <param name="newRec"></param>
        /// <param name="copy"></param>
        /// <returns></returns>
        public static string StandardXamlFillDataToForm(ref Grid userForm, ref DataRowView selectedRecord, ref List<Dictionary<string, string>> recordForSave, bool dataToForm, SystemCustomPageList systemCustomPageSetting,bool newRec, bool copy) {
            int index = 0; string dataForBrowser = null; recordForSave.Clear();

            // DATA TO FORM
            if (dataToForm) {
                var columnList = selectedRecord.Row.Table.Columns;
                foreach (object prop in columnList) {

                    bool setDone = false;
                    string fieldName = ((DataColumn)prop).ColumnName.ToLower();
                    string fieldValue = selectedRecord.Row.ItemArray[index].ToString();
                    if (newRec) { fieldValue = null; }
                    var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(selectedRecord.Row.ItemArray[index]);

                    try {

                        #region SpecialFieldsConditions

                        //SPECIFIC CONDITION MUST BE FIRST
                        if (!setDone && systemCustomPageSetting.ColumnName != null && fieldName == systemCustomPageSetting.ColumnName.ToLower()) {
                            dataForBrowser = fieldValue; setDone = true;
                        }
                        //0 ID for Copy
                        if (!setDone && (copy || newRec) && systemCustomPageSetting.ColumnName != null && fieldName == "Id".ToLower()) {
                            try {
                                fieldValue = "0";
                                if (userForm.FindChild<NumericUpDown>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<NumericUpDown>($"frm_{fieldName}").Value = int.Parse(fieldValue); setDone = true;
                                }
                            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                        }
                        if (!setDone && fieldName.Contains("inherited")) { //Combobox
                            try {
                                if (userForm.FindChild<ComboBox>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<ComboBox>($"frm_{fieldName}").SelectedValue = fieldValue; setDone = true;
                                }
                            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                        }
                        if (!setDone && fieldName == "timestamp") { setDone = true; }
                        //userForm.Children.AsParallel().OfType<DateTimePicker>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                        //    First().SetCurrentValue(DateTimePicker.SelectedDateProperty, DateTime.Parse(fieldValue));

                        if (!setDone && fieldName == "userid") { setDone = true; }
                        //userForm.Children.AsParallel().OfType<NumericUpDown>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                        //      First().SetCurrentValue(NumericUpDown.ValueProperty, double.Parse(fieldValue));


                        #endregion SpecialFieldsConditions

                        //STANDARD GENERATION PART
                        if (!setDone && new string[] { "int", "float", "double", "numeric", "int32", "int64" }.Contains(fieldTypeResult.Item2)) {
                            try {
                                if (userForm.FindChild<NumericUpDown>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<NumericUpDown>($"frm_{fieldName}").Value = fieldValue == null ? null : double.Parse(fieldValue) as double?;
                                    setDone = true;
                                }
                            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                        }
                        else if (!setDone && new string[] { "date", "time", "datetime" }.Contains(fieldTypeResult.Item2)) {
                            try {
                                if (userForm.FindChild<DateTimePicker>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<DateTimePicker>($"frm_{fieldName}").SelectedDate = fieldValue == null ? null : DateTime.Parse(fieldValue) as DateTime?;
                                }
                                setDone = true;
                            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                        }
                        else if (!setDone && new string[] { "bool" }.Contains(fieldTypeResult.Item2)) {
                            try {
                                if (userForm.FindChild<CheckBox>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<CheckBox>($"frm_{fieldName}").IsChecked = fieldValue == null ? false : bool.Parse(fieldValue);
                                    setDone = true;
                                }
                            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

                        }
                        else if (!setDone && new string[] { "string" }.Contains(fieldTypeResult.Item2)) {
                            try {
                                if (userForm.FindChild<TextBox>($"frm_{fieldName}") != null) {
                                    userForm.FindChild<TextBox>($"frm_{fieldName}").Text = fieldValue;
                                    setDone = true;
                                }
                            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                        }
                    } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }

                    if (setDone) {
                        recordForSave.Add(new Dictionary<string, string>() { { fieldName, fieldValue } });
                    }
                    index += 1;
                }
            }

            return dataForBrowser;
        }



        //FORM TO DATA For Save BROWSER DATA NOD ADDED TO RecordForSave COLLECTION

        //(string)cb_templateName.SelectedValue;  - inherited value

        //if (!dataToForm) {
        /*List<object> columnList = selectedRecord.ItemArray.ToList();
        foreach (object prop in columnList) {
            bool setDone = false;
            string fieldName = selectedRecord.Table.Columns[columnNo].ToString();
            string fieldValue = selectedRecord[columnNo].ToString();
            var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(selectedRecord[columnNo]);

            //SPECIFIC CONDITION MUST BE FIRST
            if (!setDone && fieldName == formConfiguration.ColumnName.ToLower()) {
                fieldValue = null; //selectedRecord[columnNo].ToString();dataForBrowser = fieldValue; 
                setDone = true;
            }
            if (!setDone && fieldName.Contains("inherited")) { //Combobox
                try { selectedRecord[columnNo] = userForm.FindChild<ComboBox>($"frm_{fieldName}").SelectedValue; setDone = true; } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                fieldValue = userForm.FindChild<ComboBox>($"frm_{fieldName}").SelectedValue.ToString();
            }
            if (!setDone && fieldName == "timestamp") {
                try { selectedRecord[columnNo] = DateTimeOffset.Now.DateTime; } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                fieldValue = DateTimeOffset.Now.DateTime.ToString();
                //userForm.Children.AsParallel().OfType<DateTimePicker>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
                //First().SetCurrentValue(DateTimePicker.SelectedDateProperty, DateTime.Parse(fieldValue));
                setDone = true;
            }
            if (fieldName == "userid") {
                try { selectedRecord[columnNo] = App.UserData.Authentification.Id; } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
                fieldValue = App.UserData.Authentification.Id.ToString();
                setDone = true;
            }
            //userForm.Children.AsParallel().OfType<NumericUpDown>().Where(a => a.Name.ToLower().Split('_')[1] == fieldName).
            //      First().SetCurrentValue(NumericUpDown.ValueProperty, double.Parse(fieldValue));



            //STANDARD GENERATION PART
            if (!setDone && new string[] { "int", "float", "double", "int32", "int64" }.Contains(fieldTypeResult.Item2)) {
                try {
                    selectedRecord[columnNo] = userForm.FindChild<NumericUpDown>($"frm_{fieldName}").Value;
                    fieldValue = selectedRecord[columnNo].ToString();
                    setDone = true;
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            }
            else if (!setDone && new string[] { "date", "time", "datetime" }.Contains(fieldTypeResult.Item2)) {
                try {
                    selectedRecord[columnNo] = userForm.FindChild<DatePicker>($"frm_{fieldName}").SelectedDate;
                    fieldValue = selectedRecord[columnNo].ToString();
                    setDone = true;
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            }
            else if (!setDone && new string[] { "bool" }.Contains(fieldTypeResult.Item2)) {
                try {
                    selectedRecord[columnNo] = userForm.FindChild<CheckBox>($"frm_{fieldName}").IsChecked;
                    fieldValue = selectedRecord[columnNo].ToString();
                    setDone = true;
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            }
            else if (!setDone && new string[] { "string" }.Contains(fieldTypeResult.Item2)) {
                try {
                    selectedRecord[columnNo] = userForm.FindChild<TextBox>($"frm_{fieldName}").Text;
                    fieldValue = selectedRecord[columnNo].ToString();
                    setDone = true;
                } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            }

            if (fieldName != formConfiguration.ColumnName.ToLower()) { //Browser DATA ARE INSERTED IN SAVEFORM METHOD
                recordForSave.Add(new Dictionary<string, string>() { { fieldName, fieldValue } });
            }*/

    }
}