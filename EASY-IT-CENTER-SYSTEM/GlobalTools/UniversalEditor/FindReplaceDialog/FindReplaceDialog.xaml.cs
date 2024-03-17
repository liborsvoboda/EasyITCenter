﻿
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Input;
using EasyITSystemCenter.Tools;

namespace EasyITSystemCenter.Dialogs
{

    /// <summary>
    /// Interaction logic for FindReplaceDialog.xaml
    /// </summary>
    public partial class FindReplaceDialog : Window
    {
        FindReplaceMgr TheVM;

        public FindReplaceDialog(FindReplaceMgr theVM)
        {
            DataContext = TheVM = theVM;
            InitializeComponent();
        }

        public FindReplaceDialog(FindReplaceMgr theVM, Options op) : this(theVM)
        {
            if (op == Options.Replace)
                tabMain.SelectedIndex = 1;
        }

        private void FindNextClick(object sender, RoutedEventArgs e)
        {
            TheVM.FindNext();
        }

        private void ReplaceClick(object sender, RoutedEventArgs e)
        {
            TheVM.Replace();
        }

        private void ReplaceAllClick(object sender, RoutedEventArgs e)
        {
            TheVM.ReplaceAll();
        }
  
        private void Window_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Escape)
                Close();
        }

        private void Exit_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void Grid_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
                DragMove();
        }
    }

    public enum Options
    {
        Find,
        Replace
    }
}
