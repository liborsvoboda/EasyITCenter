﻿[Zpět](../../../index)   

```xml   
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
    xmlns:XamlExt="clr-namespace:EasyITSystemCenter.ProgramaticXamlBehaviors">

    <!--
        Default Page Styles Definitions For new IS System Agendas
        for Simple Using Selected field Types
        Default KeySet Types For Global Using

        Using Example:
        <Button Name="btn_save"
            Grid.Row="20" Grid.Column="0" Click="BtnSave_Click"
            Style="{StaticResource DefaultSystemSaveButtonStyle}" />
    -->


    <!--  Each System Page Grid Default style, Using: Style="{StaticResource DefaultSystemGridStyle}"  -->
    <Style x:Key="DefaultSystemGridStyle" TargetType="{x:Type Grid}">
        <Setter Property="HorizontalAlignment" Value="Stretch" />
        <Setter Property="VerticalAlignment" Value="Stretch" />
        <Setter Property="Background" Value="{DynamicResource AccentColorBrush}" />
        <Setter Property="Margin" Value="0" />
    </Style>



    <!--  Standard System Default Label style for input fields, Using: Style="{StaticResource DefaultSystemLabelStyle}"  -->
    <Style x:Key="DefaultSystemLabelStyle" TargetType="{x:Type Label}">
        <Setter Property="HorizontalAlignment" Value="Right" />
        <Setter Property="HorizontalContentAlignment" Value="Right" />
        <Setter Property="VerticalAlignment" Value="Top" />
    </Style>



    <!--  Standard System Default TextBox style for input fields, Using: Style="{StaticResource DefaultSystemTextBoxStyle}"  -->
    <Style x:Key="DefaultSystemTextBoxStyle" TargetType="{x:Type TextBox}">
        <Setter Property="Controls:TextBoxHelper.ClearTextButton" Value="True" />
        <Setter Property="TextWrapping" Value="Wrap" />
        <Setter Property="AcceptsReturn" Value="False" />
        <Setter Property="AcceptsTab" Value="True" />
        <Setter Property="Margin" Value="0,2,0,2" />
        <Setter Property="Controls:TextBoxHelper.IsWaitingForData" Value="True" />
        <Setter Property="Controls:TextBoxHelper.Watermark" Value="" />
    </Style>


    <!--  Global ComboBox Style With Input Field Definition, Using: Style="{StaticResource DefaultSystemComboBoxStyle}"  -->
    <Style x:Key="DefaultSystemComboBoxStyle" TargetType="{x:Type ComboBox}">
        <Setter Property="HorizontalAlignment" Value="Stretch" />
        <Setter Property="VerticalAlignment" Value="Center" />
        <Setter Property="Controls:TextBoxHelper.ClearTextButton" Value="False" />
        <Setter Property="IsTextSearchEnabled" Value="True" />
        <Setter Property="ToolTip" Value="{Binding Path=SelectedItem.Description, RelativeSource={RelativeSource Self}}" />
    </Style>



    <!--  Global PasswordBox Definition, Using: Style="{StaticResource DefaultSystemNumericStyle}"  -->
    <Style x:Key="DefaultSystemNumericStyle" TargetType="{x:Type Controls:NumericUpDown}">
        <Setter Property="HideUpDownButtons" Value="False" />
        <Setter Property="Margin" Value="0,2,0,2" />
    </Style>



    <!--  Global PasswordBox Definition, Using: Style="{StaticResource DefaultSystemPasswordStyle}"  -->
    <Style x:Key="DefaultSystemPasswordStyle" TargetType="{x:Type PasswordBox}">
        <Setter Property="Controls:TextBoxHelper.ClearTextButton" Value="True" />
        <Setter Property="PasswordChar" Value="*" />
    </Style>


    <!--  Global ListView Definition, Using: Style="{StaticResource DefaultListViewItemStyle}"  -->
    <Style x:Key="DefaultListViewItemStyle" TargetType="{x:Type ListViewItem}">
        <Setter Property="Margin" Value="5,5,5,5" />
        <Setter Property="Padding" Value="0,0,0,0" />
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="HorizontalAlignment" Value="Left" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="{x:Type ListViewItem}">
                    <Grid
                        Height="50"
                        HorizontalAlignment="Left" VerticalAlignment="Top">
                        <Border
                            x:Name="border"
                            HorizontalAlignment="Stretch" VerticalAlignment="Stretch"
                            BorderBrush="{x:Null}"
                            BorderThickness="1" CornerRadius="2.5" />
                        <StackPanel HorizontalAlignment="Stretch" VerticalAlignment="Stretch">
                            <ContentPresenter />
                        </StackPanel>
                    </Grid>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>



    <!--  Global Form Submit Button Definition, Using: Style="{StaticResource DefaultSystemSaveButtonStyle}"  -->
    <Style x:Key="DefaultSystemSaveButtonStyle" TargetType="{x:Type Button}">
        <Setter Property="HorizontalAlignment" Value="Left" />
        <Setter Property="VerticalAlignment" Value="Bottom" />
        <Setter Property="Controls:ButtonHelper.PreserveTextCase" Value="True" />
        <Setter Property="Margin" Value="44,10,0,10" />
        <Setter Property="Width" Value="200" />
        <Setter Property="Height" Value="40" />
        <Setter Property="Background" Value="{DynamicResource AccentColorBrush}" />
    </Style>


    <!--  Global Form Cancel Button Definition, Using: Style="{StaticResource DefaultSystemCancelButtonStyle}"  -->
    <Style x:Key="DefaultSystemCancelButtonStyle" TargetType="{x:Type Button}">
        <Setter Property="HorizontalAlignment" Value="Right" />
        <Setter Property="VerticalAlignment" Value="Bottom" />
        <Setter Property="Controls:ButtonHelper.PreserveTextCase" Value="True" />
        <Setter Property="Margin" Value="0,10,44,10" />
        <Setter Property="Width" Value="200" />
        <Setter Property="Height" Value="40" />
        <Setter Property="Background" Value="{DynamicResource AccentColorBrush4}" />
    </Style>


    <!--  Editor Button Definition, Using: Style="{StaticResource DefaultEditorButtonStyle}"  -->
    <Style x:Key="ExtensionsEditorButtonStyle" TargetType="{x:Type Button}">
        <Setter Property="Controls:ButtonHelper.PreserveTextCase" Value="True" />
        <Setter Property="Background" Value="DodgerBlue" />
        <Setter Property="Margin" Value="0,0,2,0" />
        <Setter Property="Cursor" Value="Hand" />
        <!--<Setter Property="ToolTipService.HasDropShadow" Value="True" />
        <Setter Property="ToolTipService.InitialShowDelay" Value="0" />
        <Setter Property="ToolTipService.Placement" Value="Bottom" />-->
    </Style>

</ResourceDictionary>
```

