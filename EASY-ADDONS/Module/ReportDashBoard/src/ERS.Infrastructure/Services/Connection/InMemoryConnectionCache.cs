using Microsoft.Extensions.Caching.Memory;

using ERS.Models;

namespace ERS.Services
{
    public class InMemoryConnectionCache: IConnectionCache
    {
        private readonly IMemoryCache _cache;

        public InMemoryConnectionCache(IMemoryCache cache)
        {
            _cache = cache;
        }

        public EasyReportConnection GetConnection(string id)
        {
            return _cache.TryGetValue(id, out var connection) 
                ? (EasyReportConnection)connection
                : null;
        }

        public void Invalidate(EasyReportConnection connection)
        {
            if (connection != null) {
                _cache.Remove(connection.Id);

                _cache.Set(connection.Id, connection);
            }
        }
    }
}
