﻿using CodeBehind;

namespace Elanat
{
    public partial class SiteContentReplyStateOrProvinceController : CodeBehindController
    {
        public SiteContentReplyStateOrProvinceModel model = new SiteContentReplyStateOrProvinceModel();

        public void PageLoad(HttpContext context)
        {
            model.StateOrProvinceValue = context.Request.Query["state_or_province_value"];
            model.StateOrProvinceCssClass = context.Request.Query["state_or_province_css_class"];
            model.StateOrProvinceAttribute = context.Request.Query["state_or_province_attribute"];


            model.SetValue();


            model.SetImportantField();

            View(model);
        }
    }
}