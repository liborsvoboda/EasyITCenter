﻿using CodeBehind;

namespace Elanat
{
    public partial class ActionGetPatchInformationController : CodeBehindController
    {
		public ActionGetPatchInformationModel model = new ActionGetPatchInformationModel();
		
        public void PageLoad(HttpContext context)
        {
            if (string.IsNullOrEmpty(context.Request.Query["patch_directory_path"]))
            {
                Write("false");

                IgnoreViewAndModel = true;

                return;
            }

            // Check File Exist
            if (!File.Exists(StaticObject.ServerMapPath(StaticObject.SitePath + "add_on/patch/" + context.Request.Query["patch_directory_path"] + "/catalog.xml")))
            {
                Write("false");

                IgnoreViewAndModel = true;

                return;
            }


            Write(model.GetInformation(context.Request.Query["patch_directory_path"]));

            View(model);
        }
    }
}