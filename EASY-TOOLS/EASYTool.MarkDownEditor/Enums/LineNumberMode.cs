using System.Runtime.Serialization;

namespace EASYTOOLS.MarkDownEditor.Enums
{
    /// <summary>
    /// Editor line number mode
    /// </summary>
    public enum LineNumberMode
    {
        /// <summary>
        /// Open
        /// </summary>
        [EnumMember(Value ="on")]
        On,

        /// <summary>
        /// Close
        /// </summary>
        [EnumMember(Value = "off")]
        Off
    }
}
