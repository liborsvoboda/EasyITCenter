
using MediatR;

using ERS.Models;

namespace ERS.Handlers
{
    public class BaseConnectionCommand : IRequest<EasyReportConnection>
    {
        public string Id { get; set; }

        public DatabaseType? Type { get; set; }

        public string Name { get; set; }    

        public string ConnectionString { get; set; }

        public bool? LegacyPaging { get; set; }  

        public ConnectionLoaderOptions LoaderOptions { get; set; }

        public BaseConnectionCommand()
        { 
        }

        public BaseConnectionCommand(EasyReportConnection connection)
        {
            Id = connection.Id;
            Type = connection.Type;
            Name = connection.Name;
            ConnectionString = connection.ConnectionString;
            LegacyPaging = connection.LegacyPaging;
            LoaderOptions = connection.LoaderOptions;
        }

        public void CopyToConnection(EasyReportConnection connection)
        {
            if (Id != null) {
                connection.Id = Id;
            }

            if (Type.HasValue) {
                connection.Type = Type.Value;
            }

            if (Name != null) {
                connection.Name = Name;
            }

            if (ConnectionString != null) {
                connection.ConnectionString = ConnectionString;
            }

            if (LegacyPaging.HasValue) {
                connection.LegacyPaging = LegacyPaging.Value;
            }

            if (LoaderOptions != null) {
                connection.LoaderOptions = LoaderOptions;
            }
        }
    }
}
