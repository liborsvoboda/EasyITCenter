using MahApps.Metro.Controls;
using Microsoft.Web.WebView2.Wpf;
using System.Windows;
using System.Windows.Controls;

namespace EASYTOOLS.MarkDownEditor.Editor
{
    [TemplatePart(Name = "MainWebView", Type = typeof(WebView2))]
    [TemplatePart(Name = "ContextMenuFlyout", Type = typeof(WindowButtonCommands))]
    public partial class MarkDownEditor : Control
    {


        public WebView2 MainWebView;
        private WindowButtonCommands _contextMenuFlyout;



        public MarkDownEditor()
        {
            this.DefaultStyleKey = typeof(MarkDownEditor);
        }

        protected void OnApplyTemplate()
        {
            MainWebView = GetTemplateChild("MainWebView") as WebView2;
            MainWebView.WebMessageReceived += MainWebView_WebMessageReceived; 

            _contextMenuFlyout = GetTemplateChild("ContextMenuFlyout") as WindowButtonCommands;

            base.OnApplyTemplate();
        }

      
    }
}
