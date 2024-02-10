﻿using CodeBehind;

namespace Elanat
{
    public partial class ActionActiveCategoryController : CodeBehindController
    {
        public void PageLoad(HttpContext context)
        {
            if (string.IsNullOrEmpty(context.Request.Query["category_id"]))
            {
                Write("false");
                return;
            }

            if (!context.Request.Query["category_id"].ToString().IsNumber())
            {
                Write("false");
                return;
            }

            DataUse.Category duc = new DataUse.Category();
            duc.Active(context.Request.Query["category_id"].ToString());


            // Re Create Category Map 
            ListClass.Site lis = new ListClass.Site();
            lis.FillSiteGlobalNameListItem();

            CategoryMap cm = new CategoryMap();

            foreach (ListItem item in lis.SiteGlobalNameListItem)
                cm.CreateCategoryMap(item.Text, item.Value);


            Write("true");
				
				
			// Add Reference
			ReferenceClass rc = new ReferenceClass();
			rc.StartEvent("active_category", context.Request.Query["category_id"].ToString());
        }
    }
}