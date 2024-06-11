

var message = "This is some html text to <strong>translate</strong>!";
string targetLanguage = "fr";
string sourceLanguage = null; // automatically detected
var client = Google.Cloud.Translation.V2.TranslationClient.Create();
var response = client.TranslateHtml(message, targetLanguage, sourceLanguage);
Console.WriteLine(response.TranslatedText);
// C&#39;est un texte html à <strong>traduire</strong> !

Google translation
You'll find more options to control the translation in the documentation:
 https://cloud.google.com/translate/docs/


XAML TO WEB
https://learn.microsoft.com/en-us/dotnet/desktop/wpf/app-development
/wpf-xaml-browser-applications-overview?view=netframeworkdesktop-4.8&redirectedfrom=MSDN#communicating_with_the_host_web_page


XAML IN DB/FILE
https://learn.microsoft.com/en-us/dotnet/desktop/wpf/app-development
/wpf-application-resource-content-and-data-files?view=netframeworkdesktop-4.8

https://learn.microsoft.com/en-us/dotnet/framework/deployment/
https://learn.microsoft.com/en-us/dotnet/framework/deployment/

https://learn.microsoft.com/en-us/dotnet/framework/deployment/
deployment-guide-for-developers#deployment-options-for-your-app

IDENTITY
https://learn.microsoft.com/en-us/aspnet/core/security/
authentication/social/?view=aspnetcore-3.1&tabs=visual-studio

https://docs.duendesoftware.com/identityserver/v7/overview/terminology/

netcore hosted web
https://weblog.west-wind.com/posts/2023/Nov/27/Embed-a-minimal-ASPNET
-Web-Server-into-a-Desktop-Application

WPF METRO MahAppsMetroThemesSample /AccentStyleWindow.xaml.cs VICE THEME 
https://github.com/punker76/code-samples/blob/main/MahAppsMetroThemesSample/AccentStyleWindow.xaml.cs