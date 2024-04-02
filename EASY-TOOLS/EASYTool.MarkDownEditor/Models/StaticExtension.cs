using System;
using System.Linq;
using System.Runtime.Serialization;


namespace EASYTOOLS.MarkDownEditor.Models
{
    internal static class StaticExtension
    {
        public static string ToEnumString<T>(this T type) where T : Enum
        {
            var enumType = typeof(T);
            var name = Enum.GetName(enumType, type);
            var enumMemberAttribute = ((EnumMemberAttribute[])enumType.GetField(name).GetCustomAttributes(typeof(EnumMemberAttribute), true)).Single();
            return enumMemberAttribute.Value;
        }
    }
}
