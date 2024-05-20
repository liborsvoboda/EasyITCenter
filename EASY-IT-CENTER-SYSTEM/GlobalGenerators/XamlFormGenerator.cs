using EasyITSystemCenter.Classes;
using MahApps.Metro.Controls;
using System;
using System.Collections.Generic;
using System.Data;
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
        public static Grid StandardXamlFormViewGenerator(ref Grid rootGrid, DataTable dataset, SystemCustomPageList systemCustomPageList, List<SolutionMixedEnumList> solutionMixedEnumList ) {

            try {
                int columnNumber = 0;
                if (dataset != null) {
                    foreach (var item in dataset.Columns) {



                        //Detect Field Type
                        //   var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(field[coulumnNumber].ColumnName);

                        //Insert Lsabel for Each Field Without Editor
                        if (dataset.Columns[columnNumber].ToString().ToLower() != systemCustomPageList.ColumnName.ToLower()) {
                            var fieldLabel = new Label() { Name = "lbl_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(5) };
                            fieldLabel.SetValue(Grid.RowProperty, columnNumber); fieldLabel.SetValue(Grid.ColumnProperty, 0);
                            rootGrid.Children.Add(fieldLabel);
                        }

                        //DIAL TYPE 
                        if (dataset.Columns[columnNumber].ToString().StartsWith("inherited")) {
                            ComboBox combobox = new ComboBox() { Name = "cb_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(5), ItemsSource = solutionMixedEnumList, SelectedValuePath = "Name", DisplayMemberPath = "Translate" };
                            combobox.SetValue(Grid.RowProperty, columnNumber); combobox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(combobox);
                        }
                        if (dataset.Columns[columnNumber].DataType.Name.ToLower() == "bool") {
                            CheckBox checkBox = new CheckBox() { Name = "chb_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(5), IsChecked = bool.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()) };
                            checkBox.SetValue(Grid.RowProperty, columnNumber); checkBox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(checkBox);
                        }
                        if (dataset.Columns[columnNumber].DataType.Name.ToLower() == "int32" || dataset.Columns[columnNumber].DataType.Name.ToLower() == "int" ) {
                            NumericUpDown numeric = new NumericUpDown() { Name = "nu_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false, Value = int.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()) };
                            numeric.SetValue(Grid.RowProperty, columnNumber); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                        }
                        if (dataset.Columns[columnNumber].DataType.Name.ToLower() == "int64" || dataset.Columns[columnNumber].DataType.Name.ToLower() == "float" || dataset.Columns[columnNumber].DataType.Name.ToLower() == "long") {
                            NumericUpDown numeric = new NumericUpDown() { Name = "nu_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false, Value = double.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()) };
                            numeric.SetValue(Grid.RowProperty, columnNumber); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                        }
                        if (dataset.Columns[columnNumber].DataType.Name.ToLower() == "time") {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "dp_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short, SelectedTime = TimeSpan.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()), SelectedTimeFormat = TimePickerFormat.Short };
                            datePicker.SetValue(Grid.RowProperty, columnNumber); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                        }
                        if (dataset.Columns[columnNumber].DataType.Name.ToLower() == "date") {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "dp_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = false, SelectedDateFormat = DatePickerFormat.Short, SelectedDate = DateTime.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()) };
                            datePicker.SetValue(Grid.RowProperty, columnNumber); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                        }

                        if (dataset.Columns[columnNumber].DataType.Name.ToLower() == "datetime") {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "dp_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short,  SelectedDate = DateTime.Parse(dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString()) };
                            datePicker.SetValue(Grid.RowProperty, columnNumber); datePicker.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(datePicker);
                        }

                        if (dataset.Columns[columnNumber].ToString().ToLower() != systemCustomPageList.ColumnName.ToLower() && dataset.Columns[columnNumber].DataType.Name.ToLower() == "string") {
                            TextBox textbox = new TextBox() { Name = "txt_" + dataset.Columns[columnNumber].ToString(), VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = dataset.Columns[columnNumber].ToString().ToLower() == "id".ToLower() ? true : false,   Text = dataset.Columns[columnNumber].Table.Select()[columnNumber].ItemArray[columnNumber].ToString() };
                            textbox.SetValue(Grid.RowProperty, columnNumber); textbox.SetValue(Grid.ColumnProperty, 1);

                            //DESCRIPTION AREA
                            if (dataset.Columns[columnNumber].ToString() == "Description".ToLower()) { rootGrid.RowDefinitions[columnNumber].Height = new GridLength(60, GridUnitType.Pixel); }
                            rootGrid.Children.Add(textbox);
                        }
                        columnNumber += 1;
                    };
                    
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            return rootGrid;
        }

    }
}