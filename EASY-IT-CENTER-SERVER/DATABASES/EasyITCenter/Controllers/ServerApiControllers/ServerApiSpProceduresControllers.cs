﻿using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Core.Metadata.Edm;
using System.Data.Common;
using EasyITCenter.ServerCoreDBSettings;
using System.Xml;
//using Korzh.DbUtils;

namespace EasyITCenter.Controllers {

    /// <summary>
    /// StoredSpocedures Central Library With Return Dynamic DataList
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase"/>
    [Authorize]
    [ApiController]
    [Route("ServerApi")]
    public class ServerApiSpProceduresControllers : ControllerBase {

        //TODO GENERIC API 
        //new EasyITCenterContext().Entry(data.GetType()).Context.Model.GetDbFunctions



        /// <summary>
        /// Generic Procedure Return Full DB Over Params 
        /// SpProcedure, tableName, userRole, userId 
        /// in List Dictionary string,string
        /// Can Provide All PRocedure Datatypes 
        /// </summary>
        /// <param name="dataset"></param>
        /// <returns></returns>
        [HttpPost("/ServerApi/DatabaseServices/SpProcedure/GetGenericDataListByParams")]
        [Consumes("application/json")]
        public async Task<string> GetSystemOperationsList(List<Dictionary<string, string>> dataset) {
            string procedureName = ""; string parameters = ""; string EntityTypeName = "";
            foreach (Dictionary<string, string> param in dataset)
            {
                if (param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).Any())
                {
                    procedureName = param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).First().Value;
                }
                else if (param.Where(a => a.Key.ToLower() == "tableName".ToLower()).Any())
                {
                    parameters += (parameters.Length > 0 ? "," : "") + $"@{param.Keys.First()} = N'{param.Values.First()}' ";
                    EntityTypeName = param.Values.First();
                }
                else { parameters += (parameters.Length > 0 ? "," : "") + $"@{param.Keys.First()} = N'{param.Values.First()}' "; }
            }

            DataView data = ((DataView)(await new EasyITCenterContext().ExecuteReaderAsync($"EXEC {procedureName} {parameters};")).DefaultView);
            return Newtonsoft.Json.JsonConvert.SerializeObject(data.Table, (Newtonsoft.Json.Formatting)Formatting.Indented);

        }


        /// <summary>
        /// Generic Procedure Return Full DB Over Params 
        /// SpProcedure, tableName, userRole, userId 
        /// in List Dictionary string,string
        /// Can Provide All PRocedure Datatypes 
        /// </summary>
        /// <param name="dataset"></param>
        /// <returns></returns>
        [HttpPost("/ServerApi/DatabaseServices/SpProcedure/SetGenericDataListByParams")]
        [Consumes("application/json")]
        public async Task<string> SetGenericDataListByParams(List<Dictionary<string, string>> dataset) {
            string procedureName = ""; string parameters = ""; string EntityTypeName = ""; List<CustomMessageList>? data = null;
            List<CustomMessageList> succesData = new List<CustomMessageList>(); succesData.Add(new CustomMessageList() { MessageList = "1" });

            try {
                foreach (Dictionary<string, string> param in dataset) {
                    if (param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).Any()) {
                        procedureName = param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).First().Value;
                    } else if (param.Where(a => a.Key.ToLower() == "tableName".ToLower()).Any()) {
                        parameters += (parameters.Length > 0 ? "," : "") + $"@{param.Keys.First()} = N'{param.Values.First()}' ";
                        EntityTypeName = param.Values.First();
                    } else { parameters += (parameters.Length > 0 ? "," : "") + $"@{param.Keys.First()} = N'{param.Values.First()}' "; }
                }

                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<CustomMessageList>($"EXEC {procedureName} {parameters};");
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() 
                { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }

            
            if (data == succesData) {
                return JsonSerializer.Serialize(new DBResultMessage() 
                { Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = null });
            } else {
                return JsonSerializer.Serialize(new DBResultMessage() 
                { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = data[0].MessageList });
            }
        }


        /// <summary>
        /// Return String Message
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpProcedure/Message/{procedureName}")]
        public async Task<string> GetSystemOperationsList(string procedureName) {
            List<CustomMessageList> data = new List<CustomMessageList>();
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<CustomMessageList>($"EXEC {procedureName};");
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        /// <summary>
        /// Return File
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpProcedure/File/{procedureName}")]
        public async Task<string> GetSystemOperationsListJson(string procedureName) {
            List<DBJsonFile>? data = null;
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<DBJsonFile>($"EXEC {procedureName};");
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }


        /// <summary>
        /// Gets Table List for Reporting
        /// TODO takova bude genericka procedura
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetTableSchema/{tableName}")]
        public async Task<string> SpGetTableSchema(string tableName) {
            try {
                List<GenericDataList> data = new List<GenericDataList>();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>($"EXEC SpGetTableSchema @tableName = N'{tableName}';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Get DB Procedure param List Definitions
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetProcedureParams/{procedureName}")]
        public async Task<string> SpGetProcedureParams(string procedureName) {
            try {
                object? data = new object();
                data = new EasyITCenterContext().ExecuteReader($"EXEC SpGetProcedureParams @procedureName = N'{procedureName}';");
                return JsonSerializer.Serialize(data.ObjectToJson(), new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Table List for Reporting
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetTableList")]
        public async Task<string> SpGetTableList() {
            try {
                List<GenericDataList> data = new();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>("EXEC SpGetTableList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Form Agendas Pages List For System Menu Definition.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetSystemPageList")]
        public async Task<string> SpGetSystemPageList() {
            try {
                List<GenericDataList> data = new();
                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<GenericDataList>("EXEC SpGetSystemPageList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Api For Logged User with Menu Datalist
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ServerApi/DatabaseServices/SpGetUserMenuList")]
        public async Task<string> SpGetUserMenuList() {
            try {
                List<SpUserMenuList> data = new List<SpUserMenuList>();

                data = new EasyITCenterContext().EasyITCenterCollectionFromSql<SpUserMenuList>("EXEC SpGetUserMenuList @userRole = N'" + User.FindFirst(ClaimTypes.Role.ToString())?.Value + "';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}