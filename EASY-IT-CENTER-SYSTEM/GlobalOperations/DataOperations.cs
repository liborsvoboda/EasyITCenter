using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Windows;
using System.Windows.Controls;

namespace EasyITSystemCenter.GlobalOperations {

    /// <summary>
    /// Centralized DataOperations as Cleaning dataset Language Dictionary Auto filing
    /// </summary>
    internal class DataOperations {

        /// <summary> Convert Dictionary<string,string> To Json Suportted Values Bool, Int, String
        /// </summary> <returns></returns>
        public static string ConvertDataSetToJson(Dictionary<string, string> keyList) {
            bool tempBool; int tempInt = 0;
            Dictionary<string, object> exportJsonList = new Dictionary<string, object>();
            keyList.ToList().ForEach(key => {
                string valueType = bool.TryParse(key.Value, out tempBool) ? "bool" : int.TryParse(key.Value, out tempInt) ? "int" : "string";
                exportJsonList.Add(key.Key, (valueType == "bool" ? (object)tempBool : valueType == "int" ? (object)tempInt : (object)key.Value));
            });
            return new JavaScriptSerializer().Serialize(exportJsonList);
        }

        /// <summary>
        /// !!! SYSTEM RULE: ClassList with joining fields names must be nullable before API
        /// operation !!! ClassName must contain: "Extended" WORD Extension field in Class - Dataset
        /// must be set as null before Database Operation else is joining to other dataset is valid
        /// and can be blocked by fail key Its Check Extended in ClassName - SYSTEM RULE
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static void NullSetInExtensionFields<T>(ref T dataset) {
            if (dataset.GetType().Name.ToLower().Contains("extended")) {
                foreach (PropertyInfo prop in dataset.GetType().GetProperties()) { if (prop.DeclaringType.Name.Contains("Extended")) prop.SetValue(dataset, null); }
            }
        }

        /// <summary>
        /// Globa Translator for Objects with Defined Name as: xx_translatedString
        /// Prepared for MenuItem, Label, Button
        /// </summary>
        /// <param name="parentObject"></param>
        /// <returns></returns>
        public static async Task<bool> TranslateFormFields(DependencyObject parentObject) {
            try {
                foreach (var element in FormOperations.FindVisualChildren<Label>(parentObject)) {
                    try { if (element.Name.Split('_').Length > 1 && element.Content == null) { element.Content = await DBOperations.DBTranslation(element.Name.Split('_')[1]); } } catch { }
                }
                //foreach (var element in FormOperations.FindVisualChildren<MenuItem>(parentObject)) {
                //    try { if (element.Header == null) { element.Header = await DBOperations.DBTranslation(element.Name.Split('_')[1]); } } catch { }
                //}
                foreach (var element in FormOperations.FindVisualChildren<Button>(parentObject)) {
                    try { if (element.Name.Split('_').Length > 1 && element.Content == null) { element.Content = await DBOperations.DBTranslation(element.Name.Split('_')[1]); } } catch { }
                }
                foreach (var element in FormOperations.FindVisualChildren<Button>(parentObject)) {
                    try { if (element.Name.Split('_').Length > 1 && element.Content == null) { element.Content = await DBOperations.DBTranslation(element.Name.Split('_')[1]); } } catch { }
                }
                try {
                    if (parentObject.GetType().Name == "ToolBar") { (parentObject as ToolBar).Items.OfType<Label>().ToList().ForEach(async item => {
                        try { if (item.Name.Split('_').Length > 1 && item.Content == null) { item.Content = await DBOperations.DBTranslation(item.Name.Split('_')[1]); } } catch { }
                    }); } 
                } catch { }
                try { 
                if (parentObject.GetType().Name == "ContextMenu") { (parentObject as ContextMenu).Items.OfType<MenuItem>().ToList().ForEach(async item => {
                        try { if (item.Name.Split('_').Length > 1 && item.Header == null) { item.Header = await DBOperations.DBTranslation(item.Name.Split('_')[1]); } } catch { }
                    }); }
                } catch { }
            } catch (Exception Ex) { App.ApplicationLogging(Ex); }
            return true;
        }


        /// <summary>
        /// Translate Toolbar Items Name to Tooltip Description
        /// Buttons, CheckBox, ComboBox
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="parentObject"></param>
        /// <returns></returns>
        public static async Task<bool> TranslateSubObjectsNameToToolTip<T>(T parentObject) {
            try {
                if (parentObject.GetType().Name.ToLower() == "toolbar") {
                    (parentObject as ToolBar).Items.OfType<CheckBox>().ToList().ForEach(async checkbox => {
                       try { if (checkbox.ToolTip == null) { checkbox.ToolTip = await DBOperations.DBTranslation(checkbox.Name.Split('_')[1]); } } catch { }
                    });
                    (parentObject as ToolBar).Items.OfType<Button>().ToList().ForEach(async button => {
                       try { if (button.ToolTip == null) { button.ToolTip = await DBOperations.DBTranslation(button.Name.Split('_')[1]); } } catch { }
                    });
                    (parentObject as ToolBar).Items.OfType<ComboBox>().ToList().ForEach(async combobox => {
                        try { if (combobox.ToolTip == null) { combobox.ToolTip = await DBOperations.DBTranslation(combobox.Name.Split('_')[1]); } } catch { }
                    });
                }
                if (parentObject.GetType().Name.ToLower() == "checkbox") {
                   try { if ((parentObject as CheckBox).ToolTip == null) { (parentObject as CheckBox).ToolTip = await DBOperations.DBTranslation((parentObject as CheckBox).Name.Split('_')[1]); } } catch { }
                }
                if (parentObject.GetType().Name.ToLower() == "button") {
                   try { if ((parentObject as Button).ToolTip == null) { (parentObject as Button).ToolTip = await DBOperations.DBTranslation((parentObject as Button).Name.Split('_')[1]); } } catch { }
                }
                if (parentObject.GetType().Name.ToLower() == "combobox") {
                    try { if ((parentObject as ComboBox).ToolTip == null) { (parentObject as ComboBox).ToolTip = await DBOperations.DBTranslation((parentObject as ComboBox).Name.Split('_')[1]); } } catch { }
                }
            } catch (Exception Ex) { App.ApplicationLogging(Ex); }
            return true;
        }



        /// <summary>
        /// Return Requested User or if not exist default DB parameter CamelCase Ignored
        /// </summary>
        /// <param name="parameterName"></param>
        /// <returns></returns>
        public static async Task<string> ParameterCheck(string parameterName) {
            string result = null;
            try {
                if (App.UserData.Authentification != null) {
                    result = App.ParameterList.Where(a => a.SystemName.ToLower() == parameterName.ToLower() && a.UserId == App.UserData.Authentification.Id).Select(a => a.Value).FirstOrDefault();
                }
            } catch (Exception Ex) { App.ApplicationLogging(Ex); }

            try {
                if (result == null) {
                    result = App.ParameterList.Where(a => a.SystemName.ToLower() == parameterName.ToLower() && a.UserId == null).Select(a => a.Value).FirstOrDefault();
                    if (result == null) App.ApplicationLogging(new Exception(), $"{await DBOperations.DBTranslation("Missing Server Parameter")}: {parameterName}");
                }
                return result;
            } catch { return result; }
        }


        /// <summary>
        /// Convert String To ByteArray
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static byte[] StringToByteArray(string input) {
            return Encoding.UTF8.GetBytes(input);
        }
    }
}