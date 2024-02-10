﻿using CodeBehind;

namespace Elanat
{
    public partial class SiteCommentTitleController : CodeBehindController
    {
        public SiteCommentTitleModel model = new SiteCommentTitleModel();

        public void PageLoad(HttpContext context)
        {
            model.TitleValue = context.Request.Query["title_value"];
            model.TitleCssClass = context.Request.Query["title_css_class"];


            model.SetValue();


            model.SetImportantField();

            View(model);
        }
    }
}