﻿using CodeBehind;

namespace Elanat
{
    public partial class ActionInactiveSiteController : CodeBehindController
    {
        public void PageLoad(HttpContext context)
        {
            if (string.IsNullOrEmpty(context.Request.Query["site_id"]))
            {
                Write("false");
                return;
            }

            if (!context.Request.Query["site_id"].ToString().IsNumber())
            {
                Write("false");
                return;
            }

            DataUse.Site dus = new DataUse.Site();
            dus.Inactive(context.Request.Query["site_id"].ToString());
            Write("true");
				
				
			// Add Reference
			ReferenceClass rc = new ReferenceClass();
			rc.StartEvent("inactive_site", context.Request.Query["site_id"].ToString());
        }
    }
}