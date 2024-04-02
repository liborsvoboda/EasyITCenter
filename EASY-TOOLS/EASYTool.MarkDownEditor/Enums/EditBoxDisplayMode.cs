using System.Runtime.Serialization;

namespace EASYTOOLS.MarkDownEditor.Enums
{
    public enum EditBoxDisplayMode
    {
        /// <summary>
        /// Simultaneous display of editor and preview interface
        /// </summary>
        [EnumMember(Value = "split")]
        Split,

        /// <summary>
        /// Only Editor
        /// </summary>
        [EnumMember(Value = "editor")]
        Editor
    }
}
