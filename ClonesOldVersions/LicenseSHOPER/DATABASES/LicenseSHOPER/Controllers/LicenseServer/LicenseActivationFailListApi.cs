using LicenseSHOPER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LicenseSHOPERLicenseActivationFailList")]
    public class LicenseSHOPERLicenseActivationFailListApi : ControllerBase {

        [HttpGet("/LicenseSHOPERLicenseActivationFailList")]
        public async Task<string> GetLicenseActivationFailList() {
            List<LicenseActivationFailList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().LicenseActivationFailLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseSHOPERLicenseActivationFailList/Filter/{filter}")]
        public async Task<string> GetLicenseActivationFailListByFilter(string filter) {
            List<LicenseActivationFailList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new LicenseSHOPERContext().LicenseActivationFailLists.FromSqlRaw("SELECT * FROM LicenseActivationFailList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseSHOPERLicenseActivationFailList/{id}")]
        public async Task<string> GetLicenseActivationFailListKey(int id) {
            LicenseActivationFailList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new LicenseSHOPERContext().LicenseActivationFailLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}