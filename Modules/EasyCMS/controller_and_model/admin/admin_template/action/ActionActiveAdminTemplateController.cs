﻿using CodeBehind;

namespace Elanat
{
    public partial class ActionActiveAdminTemplateController : CodeBehindController
    {
        public void PageLoad(HttpContext context)
        {
            if (string.IsNullOrEmpty(context.Request.Query["admin_template_id"]))
            {
                Write("false");
                return;
            }

            if (!context.Request.Query["admin_template_id"].ToString().IsNumber())
            {
                Write("false");
                return;
            }

            DataUse.AdminTemplate duat = new DataUse.AdminTemplate();
            duat.Active(context.Request.Query["admin_template_id"].ToString());
            Write("true");


            // Refill Value
            StaticObject.SetAdminTemplate();


            // Add Reference
            ReferenceClass rc = new ReferenceClass();
			rc.StartEvent("active_admin_template", context.Request.Query["admin_template_id"].ToString());
        }
    }
}