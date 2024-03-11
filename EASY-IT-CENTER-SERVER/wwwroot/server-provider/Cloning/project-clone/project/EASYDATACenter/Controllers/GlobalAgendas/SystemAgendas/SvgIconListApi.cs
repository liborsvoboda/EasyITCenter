using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GlobalNETSvgIconList")]
    public class GlobalNETSvgIconListApi : ControllerBase {

        [HttpGet("/GlobalNETSvgIconList")]
        public async Task<string> GetSvgIconList() {
            List<SvgIconList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().SvgIconLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GlobalNETSvgIconList/Filter/{filter}")]
        public async Task<string> GetSvgIconListByFilter(string filter) {
            List<SvgIconList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().SvgIconLists.FromSqlRaw("SELECT * FROM SvgIconList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GlobalNETSvgIconList/{iconName}")]
        public async Task<string> GetSvgIconListKey(string iconName) {
            SvgIconList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().SvgIconLists.Where(a => a.Name == iconName).First();
            }

            return JsonSerializer.Serialize(data);
        }

    }
}