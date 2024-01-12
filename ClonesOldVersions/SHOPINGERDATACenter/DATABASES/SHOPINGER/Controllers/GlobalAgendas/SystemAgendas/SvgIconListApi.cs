﻿using SHOPINGER.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("SHOPINGERSvgIconList")]
    public class SHOPINGERSvgIconListApi : ControllerBase {

        [HttpGet("/SHOPINGERSvgIconList")]
        public async Task<string> GetSvgIconList() {
            List<SvgIconList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new SHOPINGERContext().SvgIconLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/SHOPINGERSvgIconList/Filter/{filter}")]
        public async Task<string> GetSvgIconListByFilter(string filter) {
            List<SvgIconList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new SHOPINGERContext().SvgIconLists.FromSqlRaw("SELECT * FROM SvgIconList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/SHOPINGERSvgIconList/{iconName}")]
        public async Task<string> GetSvgIconListKey(string iconName) {
            SvgIconList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new SHOPINGERContext().SvgIconLists.Where(a => a.Name == iconName).First();
            }

            return JsonSerializer.Serialize(data);
        }

    }
}