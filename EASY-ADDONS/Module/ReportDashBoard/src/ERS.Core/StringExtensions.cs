using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace ERS
{
    public static class StringExtensions
    {

        private static Regex _fluentVarRegex = new Regex(@"\{\{(\w+)\}\}");
        public static string FillFluentTemplate(this string template, IDictionary<string, string> variables)
        {
            return _fluentVarRegex.Replace(template, match => {
                if (variables.TryGetValue(match.Groups[1].Value, out var varVal)) {
                    return varVal;
                }
                return match.Value;
            });
        }
    }
}
