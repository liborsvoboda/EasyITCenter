using LicenseGenerator;
using System.IO.Compression;

namespace EasyITCenter.ControllersExtensions {

    [Authorize]
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerCoreWebLicGenerator : ControllerBase {


        [HttpGet("/LicenseRequest/Trial/{product}")]
        public async Task<IActionResult> TrialLicenseGenerator(string product) {
            try {
                string authId = User.FindFirst(ClaimTypes.PrimarySid.ToString()).Value;
                SolutionUserList user = new EasyITCenterContext().SolutionUserLists.Where(a => a.Id == int.Parse(authId)).First();
                //ItemList item = new EASYDATACenterContext().ItemLists.Where(a => a.PartNumber == product).First();
                //if (item != null) {
                LicenseData licenseData = new LicenseData() {
                    Product = product,//item.PartNumber,
                    LicenseOwner = user.UserName,
                    ExpireDate = DateTime.Now.Date.AddDays(30)
                };
                var data = LicenseControlller.GenerateLicense(licenseData).ToArray();

                if (data != null) { return File(data, "application/xml", "license.lic"); }
                else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }


        [HttpGet("/LicenseRequest/FullVersion/{product}")]
        public async Task<IActionResult> FullVersionLicenseGenerator(string product) {
            try {
                string authId = User.FindFirst(ClaimTypes.PrimarySid.ToString()).Value;
                SolutionUserList user = new EasyITCenterContext().SolutionUserLists.Where(a => a.Id == int.Parse(authId)).First();
                BasicItemList item = new EasyITCenterContext().BasicItemLists.Where(a => a.PartNumber == product).First();
                if (item != null) {
                    LicenseData licenseData = new LicenseData() {
                        Product = item.PartNumber,
                        LicenseOwner = user.UserName,
                        ExpireDate = null
                    };
                    var data = LicenseControlller.GenerateLicense(licenseData).ToArray();

                    FileOperations.CreatePath(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License"));
                    FileOperations.ClearFolder(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                    FileOperations.ByteArrayToFile(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License", "license.lic"), data);
                    ZipFile.CreateFromDirectory(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License"), System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License.zip"));
                    data = await System.IO.File.ReadAllBytesAsync(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License.zip"));

                    if (data != null) { return File(data, "application/x-zip-compressed", "License.zip"); }
                    else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
                }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }
    }
}