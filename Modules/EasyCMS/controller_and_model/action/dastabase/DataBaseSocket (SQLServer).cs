﻿using System.Data.SqlClient;

namespace Elanat
{
    public class DataBaseSocket : IDisposable
    {
        public DataBaseConnector dbc = new DataBaseConnector();
        public string ErrorMessage = "";

        /// <param name="command">command = "select * from el_user where user_id=@id" | ParametersName = "@id" | ParametersValue = 1;</param>
        public SqlDataReader GetCommand(string command, List<string> ParametersName = null, List<string> ParametersValue = null)
        {
            SqlDataReader dr = dbc.GetCommand(command, ParametersName, ParametersValue);
            ErrorMessage = dbc.ErrorMessage;
            return dr;
        }

        // Overload
        public SqlDataReader GetCommand(string command, string ParameterName, string ParameterValue)
        {
            SqlDataReader dr = dbc.GetCommand(command, ParameterName, ParameterValue);
            ErrorMessage = dbc.ErrorMessage;
            return dr;
        }

        /// <param name="command">command = "select * from el_user where user_id=@id" | ParametersName = "@id" | ParametersValue = 1;</param>
        public void SetCommand(string command, List<string> ParametersName = null, List<string> ParametersValue = null)
        {
            dbc.SetCommand(command, ParametersName, ParametersValue);
            ErrorMessage = dbc.ErrorMessage;
        }

        // Overload
        public void SetCommand(string command, string ParameterName, string ParameterValue)
        {
            dbc.SetCommand(command, ParameterName, ParameterValue);
            ErrorMessage = dbc.ErrorMessage;
        }

        public SqlDataReader GetProcedure(string ProcedureName, List<string> ParametersName = null, List<string> ParametersValue = null, bool ProcedureRoleAccessCheck = true)
        {
            SqlDataReader dr = dbc.GetProcedure(ProcedureName, ParametersName, ParametersValue, ProcedureRoleAccessCheck);
            ErrorMessage = dbc.ErrorMessage;
            return dr;
        }

        // Overload
        public SqlDataReader GetProcedure(string ProcedureName, string ParameterName, string ParameterValue, bool ProcedureRoleAccessCheck = true)
        {
            SqlDataReader dr = dbc.GetProcedure(ProcedureName, ParameterName, ParameterValue, ProcedureRoleAccessCheck);
            ErrorMessage = dbc.ErrorMessage;
            return dr;
        }

        public void SetProcedure(string ProcedureName, List<string> ParametersName = null, List<string> ParametersValue = null, bool ProcedureRoleAccessCheck = true)
        {
            dbc.SetProcedure(ProcedureName, ParametersName, ParametersValue, ProcedureRoleAccessCheck);
            ErrorMessage = dbc.ErrorMessage;
        }

        // Overload
        public void SetProcedure(string ProcedureName, string ParameterName, string ParameterValue, bool ProcedureRoleAccessCheck = true)
        {
            dbc.SetProcedure(ProcedureName, ParameterName, ParameterValue, ProcedureRoleAccessCheck);
            ErrorMessage = dbc.ErrorMessage;
        }

        public void Close()
        {
            dbc.Close();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
                Close();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }

    public class DataBaseDataReader
    {
        public SqlDataReader dr = null;
    }
}