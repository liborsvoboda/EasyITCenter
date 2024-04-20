﻿[Zpět](../../../)   

```xml   
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
    xmlns:common="clr-namespace:EasyITSystemCenter.SystemStructure"
    xmlns:dragablz="clr-namespace:Dragablz;assembly=Dragablz">

    <!--  Central Metro Styles Definitions Library  -->



    <Style BasedOn="{StaticResource MahAppsTabablzControlStyle}" TargetType="{x:Type dragablz:TabablzControl}">
        <Setter Property="AdjacentHeaderItemOffset" Value="-12" />
        <Setter Property="NewItemFactory" Value="{x:Static common:SystemWindowDataModel.NewItemFactory}" />
        <Setter Property="ShowDefaultAddButton" Value="False" />
        <Setter Property="ShowDefaultCloseButton" Value="True" />
        <Setter Property="HeaderMemberPath" Value="Header" />
        <Setter Property="FixedHeaderCount" Value="0" />
    </Style>



    <Rectangle
        x:Key="AppThemeMenuIcon"
        Width="16" Height="16"
        x:Shared="False"
        Fill="{Binding ColorBrush, Mode=OneWay}"
        Stroke="{Binding BorderColorBrush, Mode=OneWay}"
        StrokeThickness="1" />



    <Rectangle
        x:Key="AccentMenuIcon"
        Width="20" Height="25"
        x:Shared="False"
        Fill="{Binding ColorBrush, Mode=OneWay}" />



    <Style
        x:Key="AppThemeMenuItemStyle"
        BasedOn="{StaticResource MetroMenuItem}"
        TargetType="{x:Type MenuItem}">
        <Setter Property="Command" Value="{Binding ChangeAccentCommand}" />
        <Setter Property="Icon" Value="{StaticResource AppThemeMenuIcon}" />
        <Setter Property="Header" Value="{Binding NameDisplay, Mode=OneWay}" />
    </Style>



    <Style
        x:Key="AccentColorMenuItemStyle"
        BasedOn="{StaticResource MetroMenuItem}"
        TargetType="{x:Type MenuItem}">
        <Setter Property="Command" Value="{Binding ChangeAccentCommand}" />
        <Setter Property="Icon" Value="{StaticResource AccentMenuIcon}" />
        <Setter Property="Header" Value="{Binding NameDisplay, Mode=OneWay}" />
    </Style>



    <Style BasedOn="{StaticResource MetroMenuItem}" TargetType="MenuItem">
        <Setter Property="FontSize" Value="14" />
        <Setter Property="FontWeight" Value="Medium" />
        <Setter Property="Margin" Value="0,0,0,0" />
        <Setter Property="Padding" Value="5,7,5,0" />
        <Setter Property="HorizontalAlignment" Value="Center" />
        <Setter Property="HorizontalContentAlignment" Value="Center" />
        <Setter Property="VerticalAlignment" Value="Center" />
        <Setter Property="VerticalContentAlignment" Value="Center" />
        <Setter Property="Cursor" Value="Hand" />
    </Style>



    <Style BasedOn="{StaticResource MetroButton}" TargetType="{x:Type Button}">
        <Setter Property="Controls:ButtonHelper.PreserveTextCase" Value="True" />
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="Background" Value="{DynamicResource AccentColorBrush}" />
    </Style>



    <Style BasedOn="{StaticResource MetroTextBox}" TargetType="{x:Type TextBox}">
        <Setter Property="Controls:TextBoxHelper.ClearTextButton" Value="True" />
        <Setter Property="AcceptsReturn" Value="False" />
        <Setter Property="AcceptsTab" Value="False" />
        <Setter Property="Controls:TextBoxHelper.IsWaitingForData" Value="True" />
    </Style>



    <Style BasedOn="{StaticResource MetroComboBox}" TargetType="{x:Type ComboBox}">
        <Setter Property="Controls:TextBoxHelper.ClearTextButton" Value="False" />
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="SelectedItem" Value="null" />
        <Setter Property="Background" Value="LightYellow" />
        <Setter Property="IsTextSearchEnabled" Value="True" />
        <Setter Property="ToolTip" Value="{Binding Path=SelectedItem.Description, RelativeSource={RelativeSource Self}}" />
    </Style>



    <Style BasedOn="{StaticResource MetroCheckBox}" TargetType="{x:Type CheckBox}">
        <Style.Resources>
            <SolidColorBrush x:Key="HighlightBrush" Color="{DynamicResource AccentColor}" />
        </Style.Resources>
    </Style>



    <!--
        Each System Page DataGrid Default style Only bindings can be defined on each Page
        
        ToDo:  Global Automatic Translation with definitions of column styles and names - logical field sequence
    -->
    <Style BasedOn="{StaticResource MetroDataGrid}" TargetType="{x:Type DataGrid}">
        <Setter Property="HorizontalAlignment" Value="Left" />
        <Setter Property="VerticalAlignment" Value="Top" />
        <Setter Property="AutoGenerateColumns" Value="True" />
        <Setter Property="SelectionMode" Value="Single" />
        <Setter Property="IsReadOnly" Value="True" />
        <Setter Property="AutoGenerateColumns" Value="True" />
        <!--<Setter Property="AlternatingRowBackground" Value="LightGray" />-->
        <!--  EXIST MORE DEfinition ideal to graphics set  -->
    </Style>


    <Style TargetType="{x:Type Controls:Tile}">
        <Style.Triggers>
            <Trigger Property="IsMouseOver" Value="True">
                <Setter Property="Effect">
                    <Setter.Value>
                        <DropShadowEffect />
                    </Setter.Value>
                </Setter>
                <Setter Property="Background" Value="{StaticResource MetroDataGrid.MouseOverHighlightBrush}" />
            </Trigger>
        </Style.Triggers>
    </Style>
</ResourceDictionary>
```

