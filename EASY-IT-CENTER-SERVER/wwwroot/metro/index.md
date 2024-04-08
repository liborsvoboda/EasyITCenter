# Kód Jádra **EasyITcenter** a **EasySYSTEMbuilder**
TOTO JE DOKUMENTACE JÁDRA SERVER EIC a SYSTÉMU ESB = Duo které jinde Nenajdete

Zde je Kód Projektu EasyITcenter a EasySYSTEMbuilder   
Struktury, Logiky a Rozložení pro pochopení snadnosti vývoje  

**Aktuální verzi [EasyITcenter](http://KlikneteZde.cz) můžete vidět online.**  
**Další informace o projektech EIC a ESB na Portálu [KlikneteZde.cz](http://KlikneteZde.cz)**


# Dokumentace **EasyITcenter** to je Groupware 
**EASY-IT-CENTER [EIC] Multi Server** je NETCORE6 C# Visual Studio Projekt zaměřený na 
extrémně snadný a rychlý vývoj Backend API serveru pomocí připravených Šablon Formulářů.
Má Zaimplemenotváno Spousty modolů a funkcionalit pro jalékoliv UT použití již nyní bez nutnosti dalšího Vývoje.
Jekompatibilní se všemi typy Operačních Systémů, Všemi Typy Databází.
Umožnuje Multiplikované Použití: tzn. pro každý účel lze z jedné Instance řídit Neomezeně Databází, služeb ATD.
Má Implementovány různé druhy serverů pro centralizaci IT do 1 řešení. Chybějící budou doimplementovány [vlastní mail server]
Je chystán ONLINE vývoj s možností okamžit akutalizace, customizace, sdílení AGEND s celým světem, bezstarostným vývojem
kontrolovaným portálem. 

#### Implementovaný Multi Web Server s Funcionalitou   
Portál je Implementovaný na FrameWorku Metro4 pro snadný vývoj libovolné aplikace
online přímo z editoru či Systému ESB. Není nutný žádný Build, Veškeré použité technologie
nástroje jsou čistě statické. Lze je tedy bez problému spustit na libovolné web Serveru
a IHNED fungují. Na tom stojí LOGIKA řešení. Stačí vám pouze HTML,CSS,JS a dokážete vše

**Web Server Slouží k provozu** z úložiště DB,souborové,ftp
- 1x Generovaného Web Portál: s možností přenosu do Statické Stránky pro tvorbu dalšího portálu
- s Neomezeným počtem další statických webů, stránek, aplikací, Dashbordů, Galeríí, Dokumentací a všeho co si jen dokážete představit...
s jednoduchým vývojem z editorů, Visual Studia, Systému ESB, Web Portálu, Notepadu, čeho chcete..
bez jakéhokoliv buildování a nasazování na server, to již provádíte přímo pouhou editací souborů...
- Vývojem App,Stránek,atd.. z Module Editoru

**pro vývoj pouhým editorem máte připraveno ihned k použití:**
- original Dokumentace Použitých technologii ve **VŠECH JAZYCÍCH**  
do posledního DETAILU: **nyní již pochopíte všechny možnosti celých řešení**

- Globální Knihovna kódů pro snadný vývoj kopírováním šablon,již obsahuje veškeré příklady nutné pro vývoj
- XX Html Editory pro editace a tvorbu Stránek Online, k implementaci atd..
- XX Code Editory pro komplexní vývoj Webu z Editoru, Vývoj všech typů Webových Aplikací
- Database Editory SQLite pro možnost samostatného webu s interní DB
- Inteligentní Online Code Editory s InteliSense
- XX Statické UI Frameworky pro Tvorbu Webů,Portálů,Intranetů,Aplikací v různých designech
- XX Statické UI DashBordy  pro Tvorbu Webů,Portálů,Intranetů,Aplikací v různých designech
- X Statické Generátory Dokumentací
- Static Filemanager , Soubory jsou řešeny přes API
- XX Statické Grafické nástroje Galerie,Animace,HighLight,Mermaid,Diagramy,Background Player,Video Galerie,...
- XX Statické Prohlížeče nejrůznějších formátů souborů, Panorama, Office, 3D, Grafy, XML, PDF, MD,..
- XX Další Knihovny Stylů CSS pro dodatečné implemetace Animací, Objektů, Celků, Webů
- XX Javascript Knihovny pro implementaci všemožných funkcionalit do portálu
- XX šablony aplikací: Vue,React,Next, a všechny ostatní.. cca 50 typů
- XX Generátory statických webových stránek - Celých webových stránek nebo jen listů webových stránek
  technoligií Drag&Drop

s možností si přidávat pouhým zkopírováním Cokoliv dalšího z Github a internetu


## Kódová Struktura Projektu EIC

* Řešení EIC je dokonale rozčleněno do přehledných definic a použití pro dalí jednoduchý vývoj čehokoliv.
* Vychází z Globální Logiky vše musí být jen 1x a provázat celý systém tak aby toto správně používal.
* Tzn. když někde něco nastavíte bude to platné a nestane se že se to někde neprojeví. 
* Systém tedy ani nemá žádný zbytečný kód navíc, duplicitní, nebo jiné běžné chyby.

1. Třídy, jsou definice použitých datových typů, které jsou použity jako proměnné hodnoty celého řešení
Ty jsou rozděleny podle významu do následujících definic:  
[Definice Nastavení Jádra Serveru](/ServerCoreDefinitions/Classes/ServerConfigurationDefinitions.md)   
[Definice Komunikací Jádra Serveru](/ServerCoreDefinitions/Classes/ServerCoreClassesDefinitions.md)   
[Runtime Definice Jádra Serveru](/ServerCoreDefinitions/Classes/ServerCoreRuntimeDefinitions.md)   
[WebSocket Definice](/ServerCoreDefinitions/Classes/WebSocketClassesDefinitions.md)   

a nechtěné nutné bordely externích modulů:   
[Definice modulu SiteMap](/ServerCoreDefinitions/Classes/ServerCoreWebSitemapClasses.md)   

---

2. Interfaces,je definice různých typů modulů, řešení a jejich funkcionalit v řešení   
Ty jsou rozděleny podle významu do následujících Funkcionalit:  
[AutoScheduler](/ServerCoreDefinitions/Interfaces/AutoScheduledTasksDefs.md)   
[NET,DB,SW,HW,Service,atd.. Monitoring](/ServerCoreDefinitions/Interfaces/HealthCheckNotifycationsDefs.md)   
[Rozšíření API Auth Info pro Databáze](/ServerCoreDefinitions/Interfaces/HttpRequestsFullUserInfoDefs.md)   
[Static SubDomain Websites](/ServerCoreDefinitions/Interfaces/WebsitesStaticFileDbProvider.md)   
[WebSocket Server Monitor](/ServerCoreDefinitions/Interfaces/AutoScheduledTasksDefs.md)   

---

# Ostatní funkcionality serveru jsou API    
Jsou již samostatné API tzn: API = Nějaké ŘEŠENÍ např: Hromadné Odeslání Emailu, uložení Faktury   

a takto si můžete přidávat co chcete. Vždy má vlastní 1xDefinicu, TZN. nikdy nic jiného se nedá pokazit.   
I to je v systému zjednodušeno na pouhou Registraci Tabulky - Já to nepoužívám, často mi chyběla Definice pro kontrolu
než jsem si vpoměl že je jen zaregistrována, protože registace jseou společné. pro men je Čistější Existující Definice.

To znamená naprostou čistotu a přehlednost kódu    
Bežný Vývoj API k DB se vyvýjí jen pouhým zkopírováním a přejmenováním Tabulky RESTFULL Šablony
Speciální Funkcionality si pak musíte do této šablony Zaimplementovat: např: Odeslání SMS po uložení záznamu   

* Zde je ukázka nového API pouhou Registrací Tabulky:   
[Registrace API s Autorizací](/Database/StdAuthGenericProviderApi.md)  
[Registrace otevřené API](/Database/StdFreeGenericProviderApi.md)  

Takto snadno lze vyvíjet libovolný API server který potřebujete pro každý systém, internet, aplikaci  

--- 

3. Databáze, Komunikace s libovolnou DB se nastavuje pomocí Šablon. Na systémy, Apikace, Web, Nadstavby   
stačí 1 Šablona REST FULL zajištující vše: INSERT,UPDATE,DELETE,SELECT-ALL,SELECT-ID,SELECT-FILTER   
i tak jsou nachystány další šablony pro FULL DB využití PROCEDURY,MULTI-SAVE,SUBFORMS,IMAGES,FILES.
Zde je jejich Přehled:

[Šablona pro SP proceduru s návratem Generické Tabulky](/APITemplates/TemplateAnySProcedureDataListApi.md)  
[Šablona pro SP proceduru s návratem Jediné Hodnoty](/APITemplates/TemplateAnySProcedureFieldApi.md)  
[Šablona Implementace Autorizace Baasic/JWT](/APITemplates/TemplateAuthApi.md)  
[Šabona API Publikace Obrázků/Souborů](/APITemplates/TemplateImageApi.md)  
[RestFull Šablona API sta49 na v 95% Požadavků](/APITemplates/TemplateListApi.md)  
[Šablona Ukládání Seznamu Dat](/APITemplates/TemplateRangeApi.md)  
[Šablona pro ukládání se Sub Položkami](/APITemplates/TemplateSubRangeListApi.md)  

----

4. A Nyní Nám zbývá Internet Byť se zdá jak je rozsáhlý , vše je jíz nachystáno až až.
I tak je stále co vyvíjet. V řešení Byly odbourány technlogie buildování, takže nyní jsou 
Tvorba a úpravy na webu prováděny přímo z editoru. Nejjednodušší je Typu editace v MS Wordu.
To je Například Novinky na aktuálním portálu. Ke všemu se dají velmi snadno vytvořit nádherné generátory.

Nicméne zde je ukázka CsHTML souborů Razor/MVC, které již neslouží jako soubory kódu,
ale jako zpostředkující šablony Datové Toky a Učité Datové Segmenty kódů. Tím se Dostal Portál
na úrovceň Jediné Webové Stránky proněnující se v cokoliv vás napadne. Chová se tedy jako by byla poskladaná
Ajaxovými částmi.

A Zde Zmíněné Layouty a Multi Endopinty Pro Moduly a Specifické Soubory:

[Čistá Šablona pro Libovolný Obsah Dokumentu](/ServerCorePages/Shared/CleanLayout.md)  
[Šablona pro integrovaný Github Server](/ServerCorePages/Shared/GithubLayout.md)  
[Šablona pro Integrovaný MarkDown Viewer](/ServerCorePages/Shared/MarkDownLayout.md)  
[Šablona pro Metro4 Stránky](/ServerCorePages/Shared/MetroLayout.md)  
[Šablona pro Moduláž Dokumentů Multijazyčná](/ServerCorePages/Shared/MultiLangLayout.md)  
[Šablona pro Moduláž Dokumentů Více Modulární](/ServerCorePages/Shared/CentralLayout.md)  
[Šablona pro další jiné Typy Modulací](/ServerCorePages/Shared/GlobalLayout.md)  

Modulacemi je myšleno, že se má načíst stránka, ale v systému existuje 1 nebo více modulů: HTML/JS/CSS
který odpovídá Čestě Dotazu, tak Dojde k jeho připojení do Obsahu, například Automatický Překladač
pro Statické Stránky. TZN. včechny robrazené stránky se dopní překladačem a ten je přeloží bez práec
do detekovaného zajyku Browseru což můžete Vidět na Tomto dokument portále. A takto můžete dělat Cokoliv

A Zde Kondové Body Ztn. Pevné Body, Kde každý může být jinak modulovaný a řízený,
Nyní stačí zatím 3 pro WEb Portal, Statické Stránky, Různé Dokumenty A Moduly.


[Globální Výchozí Endpoint](/ServerCorePages/Index.md)  
[Integrovaný Web DB Manažer](/ServerCorePages/EasyData.md)   
[Integrovaný MarkDown Převodník na Html](/ServerCorePages/Markdown.md)   
[Neaktivní, bude Upraven pro Monitoring](/ServerCorePages/Error.md)    

A to je celé Jádro přes 20 Serverů, 1000+ Objektů pro WEby
v Řešení Multi Sever, Multi System, Multi web, Multi Lang, NoBuilD,EASY Code, EASY Dev, EASY IT

a Ji6 Brzy V7voj Projekt; P59mo Online na CHystaném Web PORTÁLU a vším CO dané Projekty Umožnují  

----    

 
# Dokumentace **EasySYSTEMbuilder** to je GroupWare
Krátký Úvod pro seznámení s Projektem Easy SYSTEM buider a jeho významu a přínosem pro celý svět.

**Aktuální verzi [EasySYSTEMBuilder](http://KlikneteZde.cz:8000) můžete vyzkoušet online.**  
**Další informace o projektech EIC a ESB na Portálu [KlikneteZde.cz](http://KlikneteZde.cz)**

## **Co je EasySYSTEMbuilder?**
**EASY-SYSTEM-BUILDER [ESB]** je C# WPF Visual Studio Projekt zaměřený na 
extrémně snadný a rychlý vývoj JAKÉHOKOLI SYSTÉMU pomocí připravených Šablon Formulářů.

ESB je tak Univerzální SYSTÉMOVÁ ŠABLONA pro další vývoj pouze pomocí grafických Formulářů
a brzy již v Grafickém Studiu, kde se vám FORMULÁŘ i sám Vygeneruje
na základě struktury Dat dané Tabulky [Faktury,seznam adres] a vy jen doladíte.

Systémové šablony jsou stále stejné a vy tedy nemusíte nic než nastavit správně nová políčka.
Vše ostatní je součástí šablony, která obsahuje Obsluhující funkcionality.

**Systém jako takový není totiž Nic jiného než Seznam Formulářů s rozdílnými Daty**.
A přesně takto je postaven **EasySYSTEMbuilder**. 

Dokonale nastavené Jádro systému, spravuje vše další potřebné k plnohodnotnému chodu.
Systém disponuje všemi běžnými funkcionalitami, **Tiskem**, **správou** ,**MultiJazyčností,** **MultiMedia**, **3D**, i jako **Centrální Klient více Serverů najednou** tedy více systémů a mnohem Více. 

Tento Systém je plně kompatibilní s každým možným typem Systému.
Ať už **Informační, Dotykový, Nadstavba, Controling, Reporting, Monitor Hardware, Dotykové Kiosky,
Plánovací či Řidící či Monitorovací Terminály a Systémy, Výrobní Terminály** 
a již Bzy i jako **Ovladací Panely výrobních Strojů SIEMENS**.

A to Zdaleka není jedniná Výhoda. Jen na [Github.com](https://github.com/search?q=C%23%20WPF&type=repositories) máte stovku ne-li 
Tisíce téměř hotových nástrojů, funkcionalit, editorů, prohlížečů, designů, příkladů, nápadů řešení,
která vás posunou Vpřed. 

---

## Kódová Struktura Projektu ESB

 Vy budete Sice Pouze Vytvářet Formuláře ,Tak zašnu šablonami. Následně představím zase podobnou Strukturu
Jádra, protže takové rozložení se ukázalo jako naprosto správné a vše v něm má své jasně dané místo

Šablony jsou Dvojího dhuru: Unikátní jako Editory, provádějící různé operace, např stříhání videa a náročné Operace.
A pak ty Obyčejné Jako Informační systém, růůzné Datové Systémy, Dotykové Panely, Informační Panely atd.
Systém již obsahuje přes 100 formulářů z toho je více než 80% systémových, tedy Kopy/Vložit úprava políček.

1. **Zde je Pák ukázek Unikátnívh Formulářů:**   

[Multi Šablona s cca 10 grafy Form](/ESBTemplates/MultiMedia/GraphsPage.xaml.md)  
[Multi Šablona s cca 10 grafy Funkce](/ESBTemplates/MultiMedia/GraphsPage.xaml.cs.md)   

[Prohlížeč Multi Typů Formátů Dokumentů Form](/ESBTemplates/MultiMedia/TemplateDocumentViewPage.xaml.md)  
[Prohlížeč Multi Typů Formátů Dokumentů Funkce](/ESBTemplates/MultiMedia/TemplateDocumentViewPage.xaml.cs.md)   

[Přehrávač Videí Form](/ESBTemplates/MultiMedia/TemplateVideoPage.xaml.md)  
[Přehrávač Videí Funkce](/ESBTemplates/MultiMedia/TemplateVideoPage.xaml.cs.md)   

[Prohlížeč 3D Formátů Form](/ESBTemplates/MultiMedia/TemplateSTLPage.xaml.md)  
[Prohlížeč 3D Formátů Funkce](/ESBTemplates/MultiMedia/TemplateSTLPage.xaml.cs.md)   

[Web Prohlížeč Form](/ESBTemplates/MultiMedia/TemplateWebViewPage.xaml.md)    
[Web Prohlížeč Funkce](/ESBTemplates/MultiMedia/TemplateWebViewPage.xaml.cs.md)   

2. **a Zde Systémové Formuláře:**  
všimněte si že Fnkční soubor, je skoro vždy stejný - protože se pořád dělá to samé   

[Šablona Data Pohledu a Editace Form](/ESBTemplates/System/TemplateClassListAutoDBTranslationPage.xaml.md)    
[Šablona Data Pohledu a Editace  Funkce](/ESBTemplates/System/TemplateClassListAutoDBTranslationPage.xaml.cs.md)   

[Šablona Data Pohledu Form](/ESBTemplates/System/TemplateClassListAutoDBTranslationViewPage.xaml.md)    
[Šablona Data Pohledu Funkce](/ESBTemplates/System/TemplateClassListAutoDBTranslationViewPage.xaml.cs.md)   

[Šablona Data Pohledu a Editace s Podičem Form](/ESBTemplates/System/TemplateClassListAutoDBTranslationWithParentPage.xaml.md)    
[Šablona Data Pohledu a Editace s Podičem Funkce](/ESBTemplates/System/TemplateClassListAutoDBTranslationWithParentPage.xaml.cs.md)   

[Šablona Data Pohledu a Editace Form](/ESBTemplates/System/TemplateClassListAutoDBTranslationPage.xaml.md)    
[Šablona Data Pohledu a Editace  Funkce](/ESBTemplates/System/TemplateClassListAutoDBTranslationPage.xaml.cs.md)   

[Šablona Data Pohledu a Editace s Celým Rodič Form + Form](/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubPage.xaml.cs.md)    
[Šablona Data Pohledu a Editace s Celým Rodič Form + Funkce](/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubPage.xaml.cs.md)   

[Šablona Data Pohledu s Celým Rodičem Form](/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubViewPage.xaml.md)    
[Šablona Data Pohledu s Celým Rodičem Funkce](/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubViewPage.xaml.cs.md)   


A tím jsme Vyčerpali Předbolby pro 90% Všech Systémů na Celé Planetě

3. **Nyní Komunikační Modul**   
Stačí 1 Definice pro RESTFULL s číselníkem API volání a je HOTOVO
je potřeba přidávat jen nová api do seznamu.

[Číselník API Endpointů](/ApiModule/APIClasses.md)    
[Definice API Funkcí](/ApiModule/ApiFunctions.md)   

Tyto 2 Definice zajišŤují kopletní Komunikaci Celého Systému.


4. **Datové Definice Jadra Systému, které je již hotové**   
Datové Definice jádra a Modulů, Doplňků

[DDatasety Systému](/GlobalClasses/GlobalClasses.cs.md)    
[Číselníky Systému - Bude přesunuto do DB](/GlobalClasses/GlobalEnumSetDefinitions.cs.md)   
[Unikatní Kolekce - Galerie](/GlobalClasses/PhotoCollectionClasses.cs.md)   
[Dynamickla Kolekce](/GlobalClasses/ConcurrentObservableList.cs.md)

Tyto Datové Definice stačí pro provoz Systému o více jak 100 Agendách

5. **Generátory**   
Lze Implemetovat nespočet Generátorů Zde jsou zatím první z nich,
a jsou plně kompatibilní s Webovou Technologií METRO a zobrazují se tedy i na Webu 

[Generátor Ikon](/GlobalGenerators/IconMaker.cs.md)  
[Generator Obrázků](/GlobalGenerators/ImageElementGenerator.cs.md)   


5. **Systémové Funkcionality - Operace**   
Stajně jako u Projektu Serveru jsou zde rozloženy Funkcionality podle povahy.  
Dobře se s nimi pracuje, a hned je jasné kde je hledat.   

[Komunikační Operace](/GlobalOperations/CommOperations.cs.md)  
[Datové Operace](/GlobalOperations/DataOperations.cs.md)  
[Databázové Operace](/GlobalOperations/DBOperations.cs.md)  
[Formulářové Operace](/GlobalOperations/FormOperations.cs.md)  
[Souborové Operace](/GlobalOperations/FileOperations.cs.md)  
[Matematické Operace](/GlobalOperations/MathTypeOperations.cs.md)  
[Media Operace](/GlobalOperations/MediaOperations.cs.md)  
[Systémové Operace](/GlobalOperations/SystemOperations.cs.md)  
[Operace Modulů](/GlobalOperations/ToolsOperations.cs.md)  

Když si je prohlédnete zjistíte že jich není moc, zato dohromady
dokážou zajistit Tvorbu či provedení Čehokoliv. 
A to je cílem řešení.


6. **Globální Styly - Vzhledy Polí a Formulářů**   
Je Definováno pomocí pár Gobálních Stylů. I když Systém Aktuáln nabízí Více jak 500 různých 
Datových polí a Objektů, Aktuálně jich využívá cca 30 a to včetně Médií.
Je to totiž proto, že Multimediální Povaha Celého Systému Dokáže pracovat s Desítkami
Typů Objektů pomocí jednihé Objektu. A tím se vše neskutečně zjednodušilo.


[Doplňující Definice Vlastích Polí](/GlobalStylesLibrary/ObjectDefinitionsLibrary/CustomObjectDefaultKeySetStyles.xaml.md)  
[Globální Definice Metro Stylu](/GlobalStylesLibrary/ObjectDefinitionsLibrary/MetroObjectDefaultStyles.xaml.md)  
[Standartní Definice](/GlobalStylesLibrary/ObjectDefinitionsLibrary/StandardObjectDefaultStyles.xaml.md)  

programátorské definice Stylů:
[Kombinování Stylů](/GlobalStylesLibrary/GlobalUsingStyleExtensions.cs.md)  
[Styly pro programovou Aplikaci](/GlobalStylesLibrary/GlobalProgramaticStyleDefinitions.cs.md)  

a ještě styly Externích Nástrojů:
[MarkDown Styly](/GlobalStylesLibrary/Tools/Markdown/MarkdownStylesLibrary.xaml.md)  
[Knihovna Stylů pro Moduly a Nástroje](/GlobalStylesLibrary/Tools/ToolsStylesLibrary.xaml.md)  

Toto stačí Pro jednotný a přitom bohatý Vzhled Celého Systémů.
Chcete přece aby systém vypadal stejně sa ne každy formulář jinak :)



7. **Jazyky Systému**   
Systém je multijazyčný. Nyní s Automatickou správou systému - tzn. vše nové se uloží do databáze
s výchozím nastavením názvu a pověřená Osoba až uvidí název při otevření fomuláře 
otevře slovník a název přepíše pro všechny jazyky. Tím je zajišťen Kompletní Překlad Systému.
Navíc Tentýž slovník následně používá i Server. Slovníky se jen vyexportují ze serveru 
do Systému i pro možnost Offline použití - můžete pracovat i když nejede Server.
Ono se to pak dodatečně Uloží :)

[Čsský Slovník](/Languages/StringResources.cs-CZ.xaml.md)  
[Anglický Slovník](/Languages/StringResources.xaml.md)  

A to je Celá Struktura Systému.

8. **SYSTÉMOVÉ JÁDRO Centrální BOD systému**
A Zde si můžete prohlédnout jak Vypadá Jádro systému, které vše Ovladá z 1 Bodu.
Zde se spojují všechny formuláře, moduly, Data, Dotazy a Výsledky, a řídí se jejich zpracování

[Centrální Formulář](/SystemWindow.xaml.md)  
[Centrální Systém](/SystemWindow.xaml.md)  


A to je vše. Je to Jednoduché a Pokud Vám to nepřipadá rád pro vás Cokoliv Vyvinu.
Vy ani vše znát nemusíte, k vývoji stačí Šablony - již do týdne trochu šikovný ITčkář dodá 
první agendy. A Pak to půjde Samo až z toho bude mít zábavu. Nevěříte? 
Vyzkoušejte Možnosti a Uvidíte sami. Plná Verze s Editací vbez Možnosti Vývoje je v sekci Ke Stažení

Svoboda Libor
33 Vývoje shrnuto v EIC a ESB projektech










