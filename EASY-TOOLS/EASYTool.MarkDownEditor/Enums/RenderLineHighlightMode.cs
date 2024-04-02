using System.Runtime.Serialization;

namespace EASYTOOLS.MarkDownEditor.Enums
{
    /// <summary>
    /// Current line highlight mode
    /// </summary>
    public enum RenderLineHighlightMode
    {
        [EnumMember(Value = "none")]
        None,

        [EnumMember(Value = "gutter")]
        Gutter,

        [EnumMember(Value = "line")]
        Line,

        [EnumMember(Value = "all")]
        All
    }
}
