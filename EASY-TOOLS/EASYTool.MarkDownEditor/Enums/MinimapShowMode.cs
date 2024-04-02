using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace EASYTOOLS.MarkDownEditor.Enums
{
    /// <summary>
    /// Mini map show mode
    /// </summary>
    public enum MinimapShowMode
    {
        [EnumMember(Value = "always")]
        Always,

        [EnumMember(Value = "mouseover")]
        MouseOver
    }
}
