using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ERS.ViewModels
{
    public class EmailAddressesAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var addresses = Convert.ToString(value).Split(',');
            var attr = new EmailAddressAttribute();

            foreach (var addr in addresses) {
                if (!attr.IsValid(addr)) {
                    ErrorMessage = $"'{addr}' is not a valid email";
                    return new ValidationResult(ErrorMessage);
                }
            }

            return ValidationResult.Success;
        }
    }
}
