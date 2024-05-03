using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.AspNetCore.Razor.TagHelpers;

using ERS.Models;
using ERS.Services;

namespace ERS.RazorUI.TagHelpers
{
    [HtmlTargetElement("local-datetime", TagStructure = TagStructure.WithoutEndTag)]
    public class LocalDateTimeTagHelper: TagHelper
    {


        public DateTime Value { get; set; }


        private readonly UserContext _userContext;

        public LocalDateTimeTagHelper(IUserContextAccessor userContextAccessor)
        {
            _userContext = userContextAccessor.GetContext();
        }


        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = null;
            output.TagMode = TagMode.StartTagAndEndTag;

            var timeZone = _userContext?.TimeZone ?? TimeZoneInfo.Utc;
            var culture = _userContext?.Culture ?? new System.Globalization.CultureInfo("en-US");

            output.PostContent.SetContent(Value.Ticks != 0
                                        ? TimeZoneInfo.ConvertTimeFromUtc(Value, timeZone)
                                                      .ToString("g", culture)
                                        : "Never");
        }


    }
}
