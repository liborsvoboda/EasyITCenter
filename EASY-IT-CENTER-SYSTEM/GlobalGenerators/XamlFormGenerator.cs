using EasyITSystemCenter.Classes;
using EasyITSystemCenter.GlobalOperations;
using MahApps.Metro.Controls;
using System;
using System.Collections.Generic;
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
        public static Grid StandardXamlFormViewGenerator(ref Grid rootGrid, IEnumerable<Dictionary<string,object>> dataset, SystemCustomPageList systemCustomPageList, List<SolutionMixedEnumList> solutionMixedEnumList ) {

            try {
                int rowNumber = 0;
                if (dataset != null) {
                    foreach (var field in dataset) {
                        //Detect Field Type
                        var fieldTypeResult = ProgrammaticOperations.DetectTypeValueFromObject(field.First().Value);

                        //Insert Lsabel for Each Field Without Editor
                        if (field.First().Key.ToLower() != systemCustomPageList.ColumnName.ToLower()) {
                            var fieldLabel = new Label() { Name = "lbl_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(5) };
                            fieldLabel.SetValue(Grid.RowProperty, rowNumber); fieldLabel.SetValue(Grid.ColumnProperty, 0);
                            rootGrid.Children.Add(fieldLabel);
                        }


                        if (field.First().Key.ToLower().StartsWith("inherited")) {
                            ComboBox combobox = new ComboBox() { Name = "cb_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(5), ItemsSource = solutionMixedEnumList, SelectedValuePath = "Name", DisplayMemberPath = "Translate" };
                            combobox.SetValue(Grid.RowProperty, rowNumber); combobox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(combobox);
                        }
                        if (fieldTypeResult.Item2 == "bool") {
                            CheckBox checkBox = new CheckBox() { Name = "chb_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Left, Margin = new Thickness(5), IsChecked = bool.Parse(fieldTypeResult.Item1?.ToString()) };
                            checkBox.SetValue(Grid.RowProperty, rowNumber); checkBox.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(checkBox);
                        }
                        if (fieldTypeResult.Item2 == "int") {
                            NumericUpDown numeric = new NumericUpDown() { Name = "nu_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = field.First().Key.ToLower() == "Id".ToLower() ? true : false, Value = int.Parse(fieldTypeResult.Item1.ToString()) };
                            numeric.SetValue(Grid.RowProperty, rowNumber); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                        }
                        if (fieldTypeResult.Item2 == "double") {
                            NumericUpDown numeric = new NumericUpDown() { Name = "nu_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = field.First().Key.ToLower() == "Id".ToLower() ? true : false, Value = double.Parse(fieldTypeResult.Item1.ToString()) };
                            numeric.SetValue(Grid.RowProperty, rowNumber); numeric.SetValue(Grid.ColumnProperty, 1);
                            rootGrid.Children.Add(numeric);
                        }
                        if (fieldTypeResult.Item2 == "time") {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "dp_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short, SelectedTime = TimeSpan.Parse(fieldTypeResult.Item1.ToString()), SelectedTimeFormat = TimePickerFormat.Short };
                            datePicker.SetValue(Grid.RowProperty, rowNumber); datePicker.SetValue(Grid.ColumnProperty, 1);
                        }
                        if (fieldTypeResult.Item2 == "date") {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "dp_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = false, SelectedDateFormat = DatePickerFormat.Short, SelectedDate = DateTime.Parse(fieldTypeResult.Item1.ToString()) };
                            datePicker.SetValue(Grid.RowProperty, rowNumber); datePicker.SetValue(Grid.ColumnProperty, 1);
                        }

                        if (fieldTypeResult.Item2 == "datetime") {
                            DateTimePicker datePicker = new DateTimePicker() { Name = "dp_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsTodayHighlighted = true, IsClockVisible = true, PickerVisibility = TimePartVisibility.All, SelectedDateFormat = DatePickerFormat.Short, SelectedDate = DateTime.Parse(fieldTypeResult.Item1.ToString()) };
                            datePicker.SetValue(Grid.RowProperty, rowNumber); datePicker.SetValue(Grid.ColumnProperty, 1);
                        }

                        if (fieldTypeResult.Item2 == "string") {
                            TextBox textbox = new TextBox() { Name = "txt_" + field.First().Key, VerticalAlignment = VerticalAlignment.Center, HorizontalAlignment = HorizontalAlignment.Stretch, Margin = new Thickness(2), IsReadOnly = field.First().Key.ToLower() == "Id".ToLower() ? true : false, Text = fieldTypeResult.Item1.ToString() };
                            textbox.SetValue(Grid.RowProperty, rowNumber); textbox.SetValue(Grid.ColumnProperty, 1);
                            if (field.First().Key.ToLower() == "Description".ToLower()) { rootGrid.RowDefinitions[rowNumber].Height = new GridLength(60.0, GridUnitType.Pixel); }
                            rootGrid.Children.Add(textbox);
                        }

                    };
                }
            } catch (Exception autoEx) { App.ApplicationLogging(autoEx); }
            return rootGrid;
        }

    }
}