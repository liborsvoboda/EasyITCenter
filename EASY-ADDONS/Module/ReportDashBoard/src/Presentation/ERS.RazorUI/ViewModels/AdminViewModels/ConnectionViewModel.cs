using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

using ERS.Models;
using ERS.Services;

namespace ERS.ViewModels
{
    public class ConnectionViewModel
    {
        public string Id { get; set; } 

        [Display(Name = "Database type")]
        public DatabaseType Type { get; set; }

        public string TypeName { get; set; }

        [Required]
        [Display(Name = "Connection name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Connection string")]
        public string ConnectionString { get; set; }

        [Required]
        [Display(Name = "Use legacy paging")]
        public bool LegacyPaging { get; set; } = false;

        public string Schemas { get; set; } = "";

        [Display(Name = "Replace to singular names")]
        public bool ReplaceToSingularNames { get; set; } = true;

        [Display(Name = "Split tables on multi reference")]
        public bool SplitTablesOnMultiReference { get; set; } = true;

        [Display(Name = "Prettify names")]
        public bool PrettifyNames { get; set; } = true;

        [Display(Name = "Hide key fields")]
        public bool HideKeyFields { get; set; } = true;

        [Display(Name = "Sort by name")]
        public bool SortByName { get; set; } = true;

        public ConnectionViewModel()
        { 
        }

        public ConnectionViewModel(EasyReportConnection connection)
        {
            var loaderOptions = connection.LoaderOptions;

            Id = connection.Id;
            Type = connection.Type;
            TypeName = DbUtils.GetDatabaseTypeName(connection.Type);
            Name = connection.Name;
            ConnectionString = connection.ConnectionString;
            LegacyPaging = connection.LegacyPaging;
            Schemas = loaderOptions.Schemas;
            SplitTablesOnMultiReference = loaderOptions.SplitTablesOnMultiReference;
            HideKeyFields = loaderOptions.HideKeyFields;
            PrettifyNames = loaderOptions.PrettifyNames;
            ReplaceToSingularNames = loaderOptions.ReplaceToSingularNames;
            SortByName = loaderOptions.SortByName;
        }

        public ConnectionViewModel(EasyReportConnectionItem connectionItem)
        {
            Id = connectionItem.Id;
            Name = connectionItem.Name;
            Type = connectionItem.Type;
            TypeName = DbUtils.GetDatabaseTypeName(connectionItem.Type);
        }

        public ConnectionLoaderOptions GetLoaderOptions()
        { 
            return new ConnectionLoaderOptions {
                Schemas = Schemas,
                SplitTablesOnMultiReference = SplitTablesOnMultiReference,
                HideKeyFields = HideKeyFields,
                PrettifyNames = PrettifyNames,
                ReplaceToSingularNames = ReplaceToSingularNames,
                SortByName = SortByName
            };
        }
    }
}
