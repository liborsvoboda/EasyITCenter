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
[Definice Nastavení Jádra Serveru](./EIC/ServerCoreDefinitions/Classes/ServerConfigurationDefinitions.md)   
[Definice Komunikací Jádra Serveru](./EIC/ServerCoreDefinitions/Classes/ServerCoreClassesDefinitions.md)   
[Runtime Definice Jádra Serveru](./EIC/ServerCoreDefinitions/Classes/ServerCoreRuntimeDefinitions.md)   
[WebSocket Definice](./EIC/ServerCoreDefinitions/Classes/WebSocketClassesDefinitions.md)   

a nechtěné nutné bordely externích modulů:   
[Definice modulu SiteMap](./EIC/ServerCoreDefinitions/Classes/ServerCoreWebSitemapClasses.md)   

---

2. Interfaces,je definice různých typů modulů, řešení a jejich funkcionalit v řešení   
Ty jsou rozděleny podle významu do následujících Funkcionalit:  
[AutoScheduler](./EIC/ServerCoreDefinitions/Interfaces/AutoScheduledTasksDefs.md)   
[NET,DB,SW,HW,Service,atd.. Monitoring](./EIC/ServerCoreDefinitions/Interfaces/HealthCheckNotifycationsDefs.md)   
[Rozšíření API Auth Info pro Databáze](./EIC/ServerCoreDefinitions/Interfaces/HttpRequestsFullUserInfoDefs.md)   
[Static SubDomain Websites](./EIC/ServerCoreDefinitions/Interfaces/WebsitesStaticFileDbProvider.md)   
[WebSocket Server Monitor](./EIC/ServerCoreDefinitions/Interfaces/AutoScheduledTasksDefs.md)   

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
[Registrace API s Autorizací](./EIC/Database/StdAuthGenericProviderApi.md)  
[Registrace otevřené API](./EIC/Database/StdFreeGenericProviderApi.md)  

Takto snadno lze vyvíjet libovolný API server který potřebujete pro každý systém, internet, aplikaci  

--- 

3. Databáze, Komunikace s libovolnou DB se nastavuje pomocí Šablon. Na systémy, Apikace, Web, Nadstavby   
stačí 1 Šablona REST FULL zajištující vše: INSERT,UPDATE,DELETE,SELECT-ALL,SELECT-ID,SELECT-FILTER   
i tak jsou nachystány další šablony pro FULL DB využití PROCEDURY,MULTI-SAVE,SUBFORMS,IMAGES,FILES.
Zde je jejich Přehled:

[Šablona pro SP proceduru s návratem Generické Tabulky](./EIC/APITemplates/TemplateAnySProcedureDataListApi.md)  
[Šablona pro SP proceduru s návratem Jediné Hodnoty](./EIC/APITemplates/TemplateAnySProcedureFieldApi.md)  
[Šablona Implementace Autorizace Baasic/JWT](./EIC/APITemplates/TemplateAuthApi.md)  
[Šabona API Publikace Obrázků/Souborů](./EIC/APITemplates/TemplateImageApi.md)  
[RestFull Šablona API sta49 na v 95% Požadavků](./EIC/APITemplates/TemplateListApi.md)  
[Šablona Ukládání Seznamu Dat](./EIC/APITemplates/TemplateRangeApi.md)  
[Šablona pro ukládání se Sub Položkami](./EIC/APITemplates/TemplateSubRangeListApi.md)  

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

[Čistá Šablona pro Libovolný Obsah Dokumentu](./EIC/ServerCorePages/Shared/CleanLayout.md)  
[Šablona pro integrovaný Github Server](./EIC/ServerCorePages/Shared/GithubLayout.md)  
[Šablona pro Integrovaný MarkDown Viewer](./EIC/ServerCorePages/Shared/MarkDownLayout.md)  
[Šablona pro Metro4 Stránky](./EIC/ServerCorePages/Shared/MetroLayout.md)  
[Šablona pro Moduláž Dokumentů Multijazyčná](./EIC/ServerCorePages/Shared/MultiLangLayout.md)  
[Šablona pro Moduláž Dokumentů Více Modulární](./EIC/ServerCorePages/Shared/CentralLayout.md)  
[Šablona pro další jiné Typy Modulací](./EIC/ServerCorePages/Shared/GlobalLayout.md)  

Modulacemi je myšleno, že se má načíst stánka ale v systému byl vytvořen modul: HTML/JS/CSS
který odpovídá Čestě Dotazu, tak Dojde k jeho připojení do Obsahu, například Automatický Překladač
pro Statické Stránky. TZN. včechny robrazené stránky se dopní překladačem a ten je přeloží bez práec
do detekovaného zajyku Browseru což můžete Vidět na Tomto dokument portále. A takto můžete dělat Cokoliv

A Zde Kondové Body Ztn. Pevné Body, Kde každý může být jinak modulovaný a řízený,
Nyní stačí zatím 3 pro WEb Portal, Statické Stránky, Různé Dokumenty A Moduly.


[Globální Výchozí Endpoint](./EIC/ServerCorePages/Index.md)  
[Integrovaný Web DB Manažer](./EIC/ServerCorePages/EasyData.md)   
[Integrovaný MarkDown Převodník na Html](./EIC/ServerCorePages/Markdown.md)   
[Neaktivní, bude Upraven pro Monitoring](./EIC/ServerCorePages/Error.md)    

A to je celé Jádro přes 20 Serverů, 1000+ Objektů pro WEby
v Řešení Multi Sever, Multi System, Multi web, Multi Lang, NoBuilD,EASY Code, EASY Dev, EASY IT

a Ji6 Brzy V7voj Projekt; P59mo Online na CHystaném Web PORTÁLU a vším CO dané Projekty Umožnují  

----    

 


