using System;
using System.Collections.Generic;
using System.Data.Common;

using Microsoft.Data.Sqlite;
using Microsoft.Data.SqlClient;

using Npgsql;
using MySql.Data.MySqlClient;
using Oracle.ManagedDataAccess.Client;

using ERS.Models;

namespace ERS.Services
{
    public static class DbUtils 
    {
        public static List<Database> Databases = new List<Database> {
            new Database { Id = DatabaseType.MsSqlServer, Name = "MS SQL Server"},
            new Database { Id = DatabaseType.MySql, Name = "MySQL"},
            new Database { Id = DatabaseType.PostgreSql, Name = "PostgreSQL"},
            new Database { Id = DatabaseType.Oracle, Name = "Oracle Database"},
            new Database { Id = DatabaseType.SqLite, Name = "SQLite"}
        };
        

        public static string ConnectionStringIsValid(string сonnectionString, DatabaseType dbType) 
        {
            try {
                var connection = CreateDbConnection(dbType);
                connection.ConnectionString = сonnectionString;
                connection.Open();
                connection.Close();

                return "";
            }
            catch (Exception ex) {
                return ex.Message;
            }
        }

        public static DbConnection CreateDbConnection(DatabaseType dbType) 
        {
            switch (dbType) {
                case DatabaseType.MsSqlServer:
                    return new SqlConnection();

                case DatabaseType.MySql:
                    return new MySqlConnection();

                case DatabaseType.PostgreSql:
                    return new NpgsqlConnection();

                case DatabaseType.SqLite:
                    return new SqliteConnection();

                case DatabaseType.Oracle:
                    return new OracleConnection();

                default:
                    throw new Exception("Unknown connection type");
            }
        }

        public static string GetDatabaseTypeName(DatabaseType dbType) 
        {      
            var currentDB = Databases.Find(db => db.Id == dbType);

            return (currentDB != null) ? currentDB.Name : "Unknown";
        }
    }
    public class Database
    {
        public DatabaseType Id { get; set; }

        public string Name { get; set; }
    }
}
