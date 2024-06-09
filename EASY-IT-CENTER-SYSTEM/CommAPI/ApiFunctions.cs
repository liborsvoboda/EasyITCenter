﻿using EasyITSystemCenter.GlobalClasses;
using EasyITSystemCenter.GlobalOperations;
using System;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;


namespace EasyITSystemCenter.Api {


    /// <summary>
    /// Centralizes Api Comminucation
    /// TODO: Add Socket Communication
    /// </summary>
    internal class CommunicationManager {

        public static async Task<AuthentificationResponse> BasicAuthApiRequest(ApiUrls apiUrl, string userName = null, string password = null) {
            object response = new object();
            using (HttpClient httpClient = new HttpClient()) {
                try {
                    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.UTF8.GetBytes(userName + ":" + password)));
                    StringContent requestContent = new StringContent("", Encoding.UTF8, "application/json");
                    HttpResponseMessage json = await httpClient.PostAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + apiUrl, requestContent);
                    response = JsonSerializer.Deserialize<object>(await json.Content.ReadAsStringAsync(), App.appRuntimeData.JsonSerializeOptions);
                    return JsonSerializer.Deserialize<AuthentificationResponse>(response.ToString(), App.appRuntimeData.JsonSerializeOptions);
                } catch (Exception ex) {
                    _ = await MainWindow.ShowMessageOnMainWindow(false, response.ObjectToJson() + Environment.NewLine + apiUrl + Environment.NewLine + ex.StackTrace + Environment.NewLine + ex.Message, false);
                    return new AuthentificationResponse() { Token = null, Expiration = null }; 
                }
            }
        }

        public static async Task<T> GetApiRequest<T>(ApiUrls apiUrl, string UrlPathExtension = null, string token = null) where T : new() {
            string json;
            using (HttpClient httpClient = new HttpClient()) {
                try {
                    if (token != null) { httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token); }
                    json = await httpClient.GetStringAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + apiUrl + (!string.IsNullOrWhiteSpace(UrlPathExtension) ? "/" + UrlPathExtension : ""));
                    return JsonSerializer.Deserialize<T>(json, App.appRuntimeData.JsonSerializeOptions);
                } catch (Exception ex) {
                    if (ex.Message.Contains("401 (Unauthorized)")) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, apiUrl + Environment.NewLine + await DBOperations.DBTranslation("UnAuthconnectionWasDisconnected") + Environment.NewLine + ex.Message, false);
                        ((MainWindow)App.Current.MainWindow).ShowLoginDialog();
                    }
                    return new T();
                }
            }
        }

        public static async Task<DBResultMessage> PostApiRequest(ApiUrls apiUrl, HttpContent body, string UrlPathExtension = null, string token = null) {
            using (HttpClient httpClient = new HttpClient()) {
                DBResultMessage result;
                try {
                    if (token != null) { httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token); }
                    HttpResponseMessage json = await httpClient.PostAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + apiUrl + (!string.IsNullOrWhiteSpace(UrlPathExtension) ? "/" + UrlPathExtension : ""), body);
                    result = JsonSerializer.Deserialize<DBResultMessage>(await json.Content.ReadAsStringAsync(), App.appRuntimeData.JsonSerializeOptions);
                    if (result != null && result.ErrorMessage == null) { result.ErrorMessage = await json.Content.ReadAsStringAsync(); }
                    else if (result == null && json.StatusCode == System.Net.HttpStatusCode.Unauthorized) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, apiUrl + Environment.NewLine + await DBOperations.DBTranslation("UnAuthconnectionWasDisconnected") + Environment.NewLine + result.ErrorMessage, false);
                        ((MainWindow)App.Current.MainWindow).ShowLoginDialog();
                        result = new DBResultMessage() { RecordCount = 0, ErrorMessage = System.Net.HttpStatusCode.Unauthorized.ToString(), Status = "error" };
                    }
                } catch (Exception ex) { result = new DBResultMessage() { RecordCount = 0, ErrorMessage = ex.Message + Environment.NewLine + ex.StackTrace, Status = "error" }; }
                return result;
            }
        }

        public static async Task<DBResultMessage> PutApiRequest(ApiUrls apiUrl, HttpContent body, string UrlPathExtension = null, string token = null) {
            using (HttpClient httpClient = new HttpClient()) {
                DBResultMessage result;
                try {
                    if (token != null) { httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token); }
                    HttpResponseMessage json = await httpClient.PutAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + apiUrl + (!string.IsNullOrWhiteSpace(UrlPathExtension) ? "/" + UrlPathExtension : ""), body);
                    result = JsonSerializer.Deserialize<DBResultMessage>(await json.Content.ReadAsStringAsync(), App.appRuntimeData.JsonSerializeOptions);
                    if (result != null && result.ErrorMessage == null) { result.ErrorMessage = await json.Content.ReadAsStringAsync(); }
                    else if (result == null && json.StatusCode == System.Net.HttpStatusCode.Unauthorized) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, apiUrl + Environment.NewLine + await DBOperations.DBTranslation("UnAuthconnectionWasDisconnected") + Environment.NewLine + result.ErrorMessage, false);
                        ((MainWindow)App.Current.MainWindow).ShowLoginDialog();
                        result = new DBResultMessage() { RecordCount = 0, ErrorMessage = System.Net.HttpStatusCode.Unauthorized.ToString(), Status = "error" };
                    }
                } catch (Exception ex) { result = new DBResultMessage() { RecordCount = 0, ErrorMessage = ex.Message + Environment.NewLine + ex.StackTrace, Status = "error" }; }
                return result;
            }
        }

        public static async Task<DBResultMessage> DeleteApiRequest(ApiUrls apiUrl, string UrlPathExtension = null, string token = null) {
            using (HttpClient httpClient = new HttpClient()) {
                DBResultMessage result;
                try {
                    if (token != null) { httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token); }
                    HttpResponseMessage json = await httpClient.DeleteAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + apiUrl + (!string.IsNullOrWhiteSpace(UrlPathExtension) ? "/" + UrlPathExtension : ""));
                    result = JsonSerializer.Deserialize<DBResultMessage>(await json.Content.ReadAsStringAsync(), App.appRuntimeData.JsonSerializeOptions);
                    if (result != null && result.ErrorMessage == null) { result.ErrorMessage = await json.Content.ReadAsStringAsync(); }
                    else if (result == null && json.StatusCode == System.Net.HttpStatusCode.Unauthorized) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, apiUrl + Environment.NewLine + await DBOperations.DBTranslation("UnAuthconnectionWasDisconnected") + Environment.NewLine + result.ErrorMessage, false);
                        ((MainWindow)App.Current.MainWindow).ShowLoginDialog();
                        result = new DBResultMessage() { RecordCount = 0, ErrorMessage = System.Net.HttpStatusCode.Unauthorized.ToString(), Status = "error" };
                    }
                } catch (Exception ex) { result = new DBResultMessage() { RecordCount = 0, ErrorMessage = ex.Message + Environment.NewLine + ex.StackTrace, Status = "error" }; }
                return result;
            }
        }

        public static async Task<bool> CheckApiConnection() {
            using (HttpClient httpClient = new HttpClient()) {
                try {
                    string json = await httpClient.GetStringAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + ApiUrls.EasyITCenterBackendCheck);
                    return true;
                } catch { return false; }
            }
        }



        public static async Task<DataTable> EicServerPostGenericDatalistListApiRequest(ApiUrls apiUrl, HttpContent body, string UrlPathExtension = null, string token = null) {
            using (HttpClient httpClient = new HttpClient()) {
                DataTable result = new DataTable();
                try {
                    if (token != null) { httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token); }
                    HttpResponseMessage json = await httpClient.PostAsync(App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + "/" + apiUrl + (!string.IsNullOrWhiteSpace(UrlPathExtension) ? "/" + UrlPathExtension : ""), body);
                    result = JsonSerializer.Deserialize<DataTable>(await json.Content.ReadAsStringAsync(), App.appRuntimeData.JsonSerializeOptions);
                } catch (Exception ex) { }
                return result;
            }
        }


        /// <summary>
        /// Centralizeds Definition For Use Direct Different GET Requests
        /// for Check, Simple Html Download, API messages, etc..
        /// Implemented Automatic Correction, Formates, Login,Logging
        /// TODO: COPY It To Server For NEW ADENDA AUTOMATED API PROCESSES + Scheduling
        /// TODO: Nev Agenda Saved Auth Connections
        /// TODO: Pupetier Downloader
        /// TODO: Same Solution For WebSocket
        /// </summary>
        /// <param name="UrlPrefix"></param>
        /// <param name="UrlOrSubPath"></param>
        /// <param name="UrlPathExtension"></param>
        /// <returns></returns>
        public static async Task<string> ApiManagerGetRequest(UrlSourceTypes UrlPrefix, string UrlOrSubPath = null, string UrlPathExtension = null) {
            using (HttpClient httpClient = new HttpClient()) {
                try {
                    //PREPARE URL SUB PATH +URL EXTENSION OR FULL ADDRESS
                    string requestUrl = UrlPrefix != UrlSourceTypes.WebUrl ? $"{(!string.IsNullOrWhiteSpace(UrlOrSubPath) && !UrlOrSubPath.StartsWith("/") ? "/" : "")}" +
                        $"{UrlOrSubPath}{(!string.IsNullOrWhiteSpace(UrlPathExtension) && !UrlPathExtension.StartsWith("/") ? "/" : "")}{UrlPathExtension}"
                        : $"{UrlOrSubPath}{(!string.IsNullOrWhiteSpace(UrlPathExtension) && !UrlPathExtension.StartsWith("/") ? "/" : "")}{UrlPathExtension}";

                    if (UrlPrefix == UrlSourceTypes.EicWebServer) {
                        requestUrl = App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + requestUrl;
                    } else if (UrlPrefix == UrlSourceTypes.EicWebServerAuth) {
                        httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", App.UserData.Authentification.Token);
                        requestUrl = App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + requestUrl;
                    } else if (UrlPrefix == UrlSourceTypes.EsbWebServer) {
                        string webServerUrl = App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value;
                        requestUrl = new Uri($"{webServerUrl}{(!string.IsNullOrWhiteSpace(webServerUrl) && !webServerUrl.EndsWith("/") ? "/" : "")}" +
                            $"{(!string.IsNullOrWhiteSpace(requestUrl) && requestUrl.StartsWith("/") ? requestUrl.Substring(1) : requestUrl)}").ToString();
                    } else {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, $"Selected Definition {UrlPrefix} is Not Implemented.{Environment.NewLine} You can Write to Software Support With Implementation Request");
                    }

                    //TODO Nev Agenda Saved Auth Connections
                    //if (urlPrefix == UrlSourceTypes.ExternalAuthApi) { httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", App.UserData.Authentification.Token); }

                    string json = await httpClient.GetStringAsync(requestUrl);

                    return json;
                } catch (Exception ex) {
                    if (ex.Message.Contains("401 (Unauthorized)")) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, $"Call type: GET prefix:{UrlPrefix} url:{UrlOrSubPath}{Environment.NewLine}{await DBOperations.DBTranslation("UnAuthconnectionWasDisconnected")}{Environment.NewLine}{SystemOperations.GetExceptionMessagesAll(ex)}", false);
                        App.ApplicationLogging(ex);
                    }
                    return SystemOperations.GetExceptionMessagesAll(ex);
                }
            }
        }



        public static async Task<T> ApiManagerPostRequest<T>(UrlSourceTypes UrlPrefix, string UrlOrSubPath = null, HttpContent htmlContent = null, string UrlPathExtension = null) where T : new() {
            HttpResponseMessage json;
            using (HttpClient httpClient = new HttpClient()) {
                try {
                    string requestUrl = UrlPrefix != UrlSourceTypes.WebUrl ? $"{(!string.IsNullOrWhiteSpace(UrlOrSubPath) && !UrlOrSubPath.StartsWith("/") ? "/" : "")}{UrlOrSubPath}" +
                        $"{(!string.IsNullOrWhiteSpace(UrlPathExtension) && !UrlPathExtension.StartsWith("/") ? "/" : "")}{UrlPathExtension}"
                        : $"{UrlOrSubPath}{(!string.IsNullOrWhiteSpace(UrlPathExtension) && !UrlPathExtension.StartsWith("/") ? "/" : "")}{UrlPathExtension}";

                    if (UrlPrefix == UrlSourceTypes.EicWebServer) {
                        requestUrl = App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + requestUrl;
                    } else if (UrlPrefix == UrlSourceTypes.EicWebServerAuth) {
                        httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", App.UserData.Authentification.Token);
                        requestUrl = App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + requestUrl;
                    } else if (UrlPrefix == UrlSourceTypes.EsbWebServer) {
                        string webServerUrl = App.appRuntimeData.AppClientSettings.First(a => a.Key == "sys_localWebServerUrl").Value;
                        requestUrl = new Uri($"{webServerUrl}{(!string.IsNullOrWhiteSpace(webServerUrl) && !webServerUrl.EndsWith("/") ? "/" : "")}" +
                            $"{(!string.IsNullOrWhiteSpace(requestUrl) && requestUrl.StartsWith("/")? requestUrl.Substring(1):requestUrl)}").ToString();
                    }
                    else if (UrlPrefix == UrlSourceTypes.EicWebServerGenericGetTableApi) {
                        httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", App.UserData.Authentification.Token);
                        requestUrl = App.appRuntimeData.AppClientSettings.First(b => b.Key == "conn_apiAddress").Value + $"/{ApiUrls.ServerApi}/DatabaseServices/SpProcedure/GetGenericDataListbyParams";
                    } else {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, $"Selected Definition {UrlPrefix} is Not Implemented.{Environment.NewLine} You can Write to Software Support With Implementation Request");
                    }

                    json = await httpClient.PostAsync(requestUrl, htmlContent);
                    T result = JsonSerializer.Deserialize<T>(await json.Content.ReadAsStringAsync(), App.appRuntimeData.JsonSerializeOptions);
                    if (json.StatusCode == System.Net.HttpStatusCode.Unauthorized) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, $"Call type: POST prefix:{UrlPrefix} url:{UrlOrSubPath}{Environment.NewLine}{await DBOperations.DBTranslation("UnAuthconnectionWasDisconnected")}", false);
                    } else if (json.StatusCode != System.Net.HttpStatusCode.OK) {
                        _ = await MainWindow.ShowMessageOnMainWindow(false, $"Call type: POST prefix:{UrlPrefix} url:{UrlOrSubPath} Error: {Environment.NewLine}{json}", false);
                    }
                    return result;
                } catch (Exception ex) {
                    _ = await MainWindow.ShowMessageOnMainWindow(false, $"Call type: POST prefix:{UrlPrefix} url:{UrlOrSubPath}{Environment.NewLine}{SystemOperations.GetExceptionMessagesAll(ex)}", false);
                    App.ApplicationLogging(ex);
                    return new T();
                }
            }
        }
    }
}