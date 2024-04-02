using System.Runtime.Serialization;

namespace EASYTOOLS.MarkDownEditor.Enums
{
    /// <summary>
    /// Editor scroll bar display mode
    /// </summary>
    public enum ScrollbarDisplayMode
    {
        [EnumMember(Value = "auto")]
        Auto,

        [EnumMember(Value = "visible")]
        Visible,

        [EnumMember(Value = "hidden")]
        Hidden
    }
}
