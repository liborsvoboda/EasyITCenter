using System.Runtime.Serialization;

namespace EASYTOOLS.MarkDownEditor.Enums
{
    public enum WebScriptErrorType
    {
        [EnumMember(Value = "excuteAction")]
        ExcuteAction,

        [EnumMember(Value = "defineTheme")]
        DefineTheme,

        [EnumMember(Value = "setTheme")]
        SetTheme,

        [EnumMember(Value = "unknown")]
        Unknown
    }
}
