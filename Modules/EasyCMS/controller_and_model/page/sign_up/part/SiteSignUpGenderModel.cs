﻿using CodeBehind;

namespace Elanat
{
    public partial class SiteSignUpGenderModel : CodeBehindModel
    {
        public string GenderLanguage { get; set; }
        public string FemaleLanguage { get; set; }
        public string MaleLanguage { get; set; }
        public string UnknownLanguage { get; set; }

        public bool GenderMaleValue { get; set; } = false;
        public bool GenderFemaleValue { get; set; } = false;
        public bool GenderUnknownValue { get; set; } = false;

        public void SetValue()
        {
            // Set Language
            AddOnsLanguage aol = new AddOnsLanguage(StaticObject.GetCurrentSiteGlobalLanguage(), StaticObject.SitePath + "page/sign_up/");
            GenderLanguage = aol.GetAddOnsLanguage("gender");
            FemaleLanguage = aol.GetAddOnsLanguage("female");
            MaleLanguage = aol.GetAddOnsLanguage("male");
            UnknownLanguage = aol.GetAddOnsLanguage("unknown");


            GenderUnknownValue = true;
        }
    }
}