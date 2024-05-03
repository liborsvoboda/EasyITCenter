using System;
using System.ComponentModel.DataAnnotations;

namespace ERS.ViewModels
{
    public class CrontabExpressionAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var str = Convert.ToString(value);

            try {
                NCrontab.CrontabSchedule.Parse(str);
            }
            catch (NCrontab.CrontabException ex) {
                ErrorMessage = ex.Message;
                return new ValidationResult(ErrorMessage);
            }

            return ValidationResult.Success;
        }
    }
}
