using System.Reflection;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;


namespace EasyITSystemCenter.Pages {

    public partial class ConfigEditorPage : UserControl {


        public ConfigEditorPage()
        {
            InitializeComponent();
            Loaded += Shell_Loaded;
           
        }




        void Shell_Loaded(object sender, RoutedEventArgs e)
        {
           
            var appVer = Assembly.GetExecutingAssembly().GetName().Version;

        }

        private void ChangeEditorColors()
        {
            //TODO: Make configurable (v2 ?)
            //codeEditor.UpdateSyntaxHighlighter();
        }

        public class AccentColorMenuData
        {
            public string Name { get; set; }
            public Brush ColorBrush { get; set; }
        }

  
        private void AutoFlushOnCheckedChanged(object sender, RoutedEventArgs e)
        {

        }

 
              private void NewFileClicked(object sender, RoutedEventArgs e)
        {

         
        }

        private const string NewFileTemplate = "## Here is your newly created hosts file.\n## Right clicking the editor gives you cool options, try it now.\n## And if you select some text and right click, you can quickly create a new file out of the selection.\n\n## Thanks for using Easy Hosts! Please rate this release or suggest features at:\n## http://easyhosts.codeplex.com";
    }
}