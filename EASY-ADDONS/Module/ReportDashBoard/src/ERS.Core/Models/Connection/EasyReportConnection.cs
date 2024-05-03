using Newtonsoft.Json.Linq;
using System.Collections;
using System.Collections.Generic;

namespace ERS.Models
{
    public class EasyReportConnection : IDbEntity 
    {
        public string Id { get; set; }

        public DatabaseType Type { get; set; } = DatabaseType.MsSqlServer;

        public string Name { get; set; }

        public string ConnectionString { get; set; }

        public string ModelXml { get; set; } = "";

        public string TeamId { get; set; }

        public string SettingsJson { get; set; } = "{}";

        public virtual Team Team { get; set; }

        public virtual List<Report> Reports { get; set; } = new List<Report>();

        public bool LegacyPaging {
            get {
                if (!string.IsNullOrEmpty(SettingsJson)) {
                    var settings = JObject.Parse(SettingsJson);
                    if (settings.TryGetValue("sqlFormats", out var formats)) {
                        if (((JObject)formats).TryGetValue("legacyPaging", out var legacyPaging)) {
                            return legacyPaging.ToObject<bool>();
                        }
                    }
                }

                return false;
            }
            set {
                JObject settings = !string.IsNullOrEmpty(SettingsJson)
                    ? JObject.Parse(SettingsJson)
                    : new JObject();

                if (!settings.ContainsKey("sqlFormats")) {
                    settings["sqlFormats"] = new JObject() {
                        ["legacyPaging"] = value
                    };
                }
                else {
                    settings["sqlFormats"]["legacyPaging"] = value;
                }

                SettingsJson = settings.ToString();
            }
        }


        public ConnectionLoaderOptions LoaderOptions
        {
            get {
                if (!string.IsNullOrEmpty(SettingsJson)) {
                    var settings = JObject.Parse(SettingsJson);
                    if (settings.TryGetValue("loaderOptions", out var options)) {
                        return options.ToObject<ConnectionLoaderOptions>();
                    }
                }

                return new ConnectionLoaderOptions();
            }
            set {
                JObject settings = !string.IsNullOrEmpty(SettingsJson)
                   ? JObject.Parse(SettingsJson)
                   : new JObject();

                settings["loaderOptions"] = JObject.FromObject(value);
                SettingsJson = settings.ToString();
            }        
        }
    }

    public class ConnectionLoaderOptions
    {
        public string Schemas { get; set; } = "";

        public bool ReplaceToSingularNames { get; set; } = true;

        public bool SplitTablesOnMultiReference { get; set; } = true;

        public bool PrettifyNames { get; set; } = true;

        public bool HideKeyFields { get; set; } = true;

        public bool SortByName { get; set; } = true;
    }

    public enum DatabaseType 
    {
        MsSqlServer = 0,
        MySql = 1,
        PostgreSql = 2,
        SqLite = 3,
        Oracle = 4
    }
}
