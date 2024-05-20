
APLICATION INSIGHT
https://learn.microsoft.com/cs-cz/azure/azure-monitor/app/opentelemetry-enable?tabs=aspnetcore

UDELAT AGENDU GRAFY A JEJICH DEFINICE s moznosti vytvorit LAYOUT A PROCEDURA KTERA BUDE GENEROVAT
data z spoustena splanovacem uloh 
https://blog.medhat.ca/2023/01/visualizing-data-with-chartjs-in-aspnet.html
https://github.com/medhatelmasry/ChartJsRazor/tree/main
https://github.com/JetLightStudio/NetCoreCharts
https://github.com/mattosaurus/ChartJSCore



WebView Easy DEv
https://www.vbforums.com/showthread.php?902658-Visual-Basic-NET-Using-a-WebView2-to-Render-UI-for-Desktop-Applications
https://github.com/michael-russin/webview2-control/tree/master
https://github.com/R2D221/WebView2.DOM
https://github.com/ChromiumDotNet/WebView2.DevTools.Dom
https://github.com/ProKn1fe/WebView2.Runtime


6200 Repositories Microsoft
https://github.com/microsoft


řešení pupetier
https://github.com/khachornchit/puppeteer/tree/master/examples



rozpracováno Profi MarkDown Editor
WebCodeLibraryEditor 
WebConfiguratorList - Hosting Agendas

---  

MS WPF Příklady https://github.com/microsoft/WPF-Samples

6000 repozitářů
MS Repository https://github.com/orgs/microsoft/repositories?page=11


PARADA NA JS NASTROJE
https://kandi.openweaver.com/search/codesnippet?q=Editor

REACTIVE C# STROJE STEP7 moře klientů
https://github.com/ChrisPulman?tab=repositories
https://github.com/ChrisPulman/MQTTnet.Rx


https://nugetmusthaves.com/Package/Gorgon.Editor.API
HLEDAT ZDE  hitova reseni na vse

a ZDE HLEDAT HOTOVA Řešení
https://www.nuget.org/


CSHTML editor 
https://www.c-sharpcorner.com/article/inserting-rich-text-editor-in-asp-net-mvc-6/

FluentRibbon - Multimenu pro Editory
https://fluentribbon.github.io/documentation/

EASYDATA FOR WPF
https://korzh.com/easyquery/docs/getting-started/wpf

UZASNA SBIRKA ZNALOSTI netcore sOUPIS VSEHO MOZNEHO
https://github.com/korzh/awesome-dotnet-core?tab=readme-ov-file#graphics


wpf netcore SPR8VA dOKUMENTŮ
https://github.com/dotnet/Open-XML-SDK


nOVÝ rEPORTING  - GENEROVANI REPORTU - NUTNO VYtvořit Editor
https://github.com/FastReports/FastReport?tab=readme-ov-file
https://github.com/FastReports/FastReport.Documentation
https://www.fast-report.com/public_download/docs/FRNet/online/en/UserManual/en-US/PreviewPrintExport.html

westwind scripting umi spoustet kod primo
westwing.htmpackager exportuje html stanku jako Cely staticky zipfile


Rozčlenit nástroje na:
- Dokumentace
- Obrázek
- Online Tool
- Github

110Repos
https://github.com/RickStrahl?tab=repositories

Kompletní WorkFlow
https://github.com/optimajet

až buje injection udělat Float panel s exportem html do MD na webu 


---
### Plánované ůlohy system WINDOWS a Správa Počítače

přidat agendu správa Počítače a v ní je možnost přidat   
otevřtít nástroje ze systému

např:   
    // Create a new task
    const string taskName = "Test";
    Task t = TaskService.Instance.AddTask(taskName,
        new TimeTrigger() {
            StartBoundary = DateTime.Now + TimeSpan.FromHours(1),
            Enabled = false
        },
        new ExecAction("notepad.exe", "c:\\test.log", "C:\\"));

    //https://nugetmusthaves.com/Package?page=3&q=editor  EDITORY

    // https://github.com/dahall/TaskScheduler/wiki/Examples#Complex-example  
    //zaimplmentovat

    // Edit task and re-register if user clicks Ok
    TaskEditDialog editorForm = new TaskEditDialog();
    editorForm.Editable = true;
    editorForm.RegisterTaskOnAccept = true;
    editorForm.Initialize(t);
    // ** The four lines above can be replaced by using the full constructor
    // TaskEditDialog editorForm = new TaskEditDialog(t, true, true);
    editorForm.ShowDialog();

---   


Takto Vypadá vývoj v EIS&ESB IT Řešení pro všechny.  
Právě mě napadl následující popis Řešení Dokumentace

IT Řešení a Dokumentace [EIC&ESB](https://kliknetezde.cz)

### Požadavek implementace Řešení Media Dokument Flow  
Návrh a zaevidování řešení pro centrální řízení a politiku Dokumentů jako Word, Excel, PDF, HTML   
s publikací v agendě Dokumenty a na internetu.  

Je to Globální IT Řešení pro všechny.

**Řešení bude obsahovat**   

- tvorbu a agendu dokumentů v systému pro všechny uživatele.    
- Automatické verzování při uložení   
- možnost sdílení s vybranými uživateli nebo se všemi.  
- možnost sledování uživateli, zazílá notifikace o nové verzi  
- Automatické čištění starší verze při uložení   

1. XAML podporuje vše i AUDIO/Video/3D - vyřešit HTML Exportem    
   Ale vyžaduje upravit editor na DRAGDROP   
   s double klikem pro přepis textu   
2. Nebo Vest Dokumentaci V MD Editoru a exportovat do všech formátů
   tvorba je již vyřešena v MD dokumentaci

- Nastavení Složky s Dokumenty jako Webová Publikace   
  tím se provede export do veřejné Webové složky s menu obsahem   
  všech dokumentů
- Automaticky Tisk, Export   

**NÁSLEDNĚ ROZŠÍŘIT**   

- TODO přidat možnost sdílení [nova agenda] jako "iframe" s automatickou aktualizací a genorováním vlastní URL pouze pro Dokument = řešení pomocí ServerHTML Module nová Page s vlastníAPI
  bude tak i řešení pro RSS, NEWS, InfoKanal, WebSocket, Email,Export   


**ZDE Postup Implementace:**   
*https://learn.microsoft.com/en-us/archive/blogs/llobo/
udělat agendu dokument flow se sdílením, verzováním, sledováním notifikací o nové verzi (postal tem kdo ma zapnuto sledování)
exportem do XLS,doc, pdf, Image, html, print, copy*

- umí to typ DocumentFlow
- jeho editor je XAMLPAD/XAMLPADX - lze zobrazovat i na webu   
a dělat tak i Web stránky   

**Odhadovaná Pracnost MAX 1 týden**   

---  

 a navazujici napad rozsireni SYSTEMU o 

# Implementace XML Editoru pro cokoliv   
https://github.com/microsoft/XmlNotepad  

a PŘIDRUŽIT I VŠECHNY IMPLEMENTOVANE generatory   
jako generovani dokumentace z XML, XML->HTML, XML->MD     

----    

microsot knihovna ukazek řešení XAML
https://learn.microsoft.com/en-us/previous-versions/dotnet/netframework-3.5/bb400848(v=vs.90)

----

rozsireni pro metro WPF
https://rehansaeed.com/wpf-metro-part4-elysium-extra/

orchestra dalsi framework example csv editor,log viewer,gant,flexgrid
https://github.com/WildGums/Orchestra

napr csvtexteditor jde nahrat i jako balicek viz:
https://github.com/WildGums/CsvTextEditor

SPRAVA PROJEKTU PANOVE
naji spoustu  WPF objektu třeba instalovani balicku přimo z APP
PRAVE PRO RIZENI PROEKTU: ANALYTICS,DEPENDENCY GRAPH,ATD

project management a dalsi xamltools umi dat vsechny definice stylu fo jednoho jako default, takze takto by mohlo jit menit styly
viz: https://github.com/WildGums/XAMLTools
https://github.com/orgs/WildGums/repositories?type=all

----

lokalni telemetrie jednou provzdy i s dashboardem
https://github.com/dotnet/aspire/tree/main/src/Grafana

aspire řešení pro distribuci balíčků včetně dasboardu
https://github.com/dotnet/aspire/tree/main
včetně metrik a všeho
samostatné řešení
a do vlastniho projektu se nahraji opentelemetry balicky pro sledovani

viz:
https://medium.com/@asimmon/net-aspire-dashboard-is-the-best-tool-to-visualize-your-opentelemetry-data-during-local-development-88f8e182c528

----


media knihovny 204repos Avalonia/animace atd
https://github.com/wieslawsoltes?tab=repositories

405 repos
https://github.com/jsuarezruiz?tab=repositories

----


Change Password to encrypt
isValid = BCrypt.Net.BCrypt.Verify(word, hashedWordFromDB);


