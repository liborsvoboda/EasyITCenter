using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETUsedLicenseList")]
    public class GLOBALNETUsedLicenseListApi : ControllerBase {

        [HttpGet("/GLOBALNETUsedLicenseList")]
        public async Task<string> GetUsedLicenseList() {
            List<UsedLicenseList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().UsedLicenseLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETUsedLicenseList/Filter/{filter}")]
        public async Task<string> GetUsedLicenseListByFilter(string filter) {
            List<UsedLicenseList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().UsedLicenseLists.FromSqlRaw("SELECT * FROM UsedLicenseList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETUsedLicenseList/{id}")]
        public async Task<string> GetUsedLicenseListKey(int id) {
            UsedLicenseList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().UsedLicenseLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}