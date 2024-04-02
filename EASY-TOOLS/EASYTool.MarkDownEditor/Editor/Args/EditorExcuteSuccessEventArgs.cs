using EASYTOOLS.MarkDownEditor.Enums;
using System;

namespace EASYTOOLS.MarkDownEditor.Editor.Args
{
    public class EditorExcuteSuccessEventArgs:EventArgs
    {
        public WebScriptNotifyType Type { get; private set; }
        public string ExcuteParameter { get; private set; }
        internal EditorExcuteSuccessEventArgs()
        {

        }
        internal EditorExcuteSuccessEventArgs(WebScriptNotifyType type,string param)
        {
            Type = type;
            ExcuteParameter = param;
        }
    }
}
