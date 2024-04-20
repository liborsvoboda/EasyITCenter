## Projects Legend 
    ESB = EasySYSTEMbuilder    
    EIC = EasyITcenter    
    SD = EASYBuilderDataCenter
    SP = EASYBuilder application
    I  = Install file
    DB = Database

Každá změna v EB/SP může být nasazena do druhého programu  
Každá změna IN ED/SD může být nasazena do druhého programu   

Instalační soubory projektu/programu jsou pro naprosto jednoduchou instalaci se všemi závislostmi
Dokumentaci a software pro testování najdete na

[https://groupware-solution.eu/webdav/Marketing/](https://groupware-solution.eu/webdav/Marketing/ "")
přihlášení: marketing/marketing


     VŠECHNY aplikace připraveny pro jednoduchou instalaci / Koupit více typů instalace - podle uživatelsky přívětivého instalačního souboru a licenčního serveru
    
---

### Aplikační klony FE + BE
     LicenseSrv - MultiOS licenční server s nasloucháním API GET/POST server / generování
                      Neomezené statické/dynamické KÓDY a klient pro správu
     PRŮVODKY - Implementace Windows XP+ Výrobní příručky pro produkční společnosti
                      Pro kancelářské / dotykové panely s neomezeným počtem klientů a možností tisku
     ShoPingER - Windows XP+ MultiBranch Nabídka/Objednávka/Fakturační systém s multimediálními soubory
                      Podporováno s neomezenými klienty a možnostmi tisku
     LicenceShoper - MultiOS License Server PLUS Windows XP+ MultiBranch Fakturační systém
                      [LicenseSrv + ShoPingER]

---

### ŘEŠENÍ HLAVNÍ DÍLY
     EASYBuilder vyvíjí projekt C# WPF Visual Studio s nastavením nabídky MustiVariable,
      Se všemi typy šablon datových formulářů DATAView / DATADetail / With SubDATAview /
      S SubFullDataDetail / 3D / Dokument / Video
      pro sestavení JAKÝCHKOLI informačních / multimédií / řízení / toku / podávání zpráv a dalších systémů
      PRO DALŠÍ VÝVOJ KOPÍROVÁNÍ / VLOŽENÍ ZA EXTRÉMNĚ NÍZKOU CENU 5000Kč/200EURO - LICENCE projektu

     Golden - Univerzální bezpečný multiplatformní projekt backendového serveru MultiDATABASE
                      S implementacemi RESTFULL / WEBSOCKET
          Se všemi typy šablon pro INSERT / UPDATE / DELETE / SELECT /
          PROCEDURE / SUBFORMDATA a další Jiné
          S DATABÁZÍ, šablonou tabulky, šablonou procedury, šablonou zobrazení,
          Zálohování/obnovení a další příklady
          S tabulkami, indexy, cizími klíči ve všech standardních DB
          PRO DALŠÍ VÝVOJ KOPÍROVÁNÍ / VLOŽENÍ ZA EXTRÉMNĚ NÍZKOU CENU 5000Kč/200EURO - LICENCE projektu
    
     FYI Reporting - FreeWare Full Report Designer a Viewer pro tisk všech typů dokumentů
                      / Čárové kódy, EAN, QR, grafy, dílčí sestava atd.

---

### SW   Date        Version  Speed Development Description by one man Only

    EB/SP/I  1.12.2022   1.5.78.925 Start of Developing steps describing
    EB   1.12.2022    Added Link for FyiReportink 100 Examples to 
                                        Help_Commands
    EB/SP/I  1.12.2022   1.5.78.944 Implemented DB Connection string to settings for All 
                                         Report as param, centralized
    EB/SP  1.12.2022    Implemented new TreeView Menu for much more menu 
                                        items in Menu
    SD/SP  1.12.2022    Implemented CurrencyList, UnitList, AddressList   
                                        ItemList Agendas
    EB/SP  1.12.2022    Implemented Copy menu button for copy Each record in 
                                        listview
    SD   1.12.2022               Describe existing API call to documentation
    EB/SP  2.12.2022    Changed Settings for much more application menu Types   
                                        and implemented new Menu
    EB/SP  2.12.2022 1.5.78.954 Publish new version EASYBuilder installers on 
                                        Google/WebDav/WebSite
    EB/ED/SD/SP 2.12.2022               Publish Development Info on WebSite And Marketing 
    EB/SP       3.12.2022               Repaired filtering on null values
    EB/SP       3.12.2022               Centralized load Report List Control from ApiUrl 
                                        definition List for these addresses
    SD   3.12.2022               Create TemplateList Table

    to          15.12.2022             5 Applications Created IN  14 DAYS WITH 20-40 DB 
                                       tables / Agendas in ONE MAN ONLY 

    
---

2023.07.07   FAST REcapitulation 

Exist Few Tasks For Better Settings Maily for EASY SYSTEM BUILDER (SET Full Automatic Translating for Example)
But Yesterday Will Be Regenerated Older EDC & ESB Clones Over Automatized Solutions.

EDC now MULTI Server (GroupWare Solution) Has Own System Clone As Basic Server Manager - Any Interest of This Solution (its not normal)
Server for Testing With Posible FUNCTIONalities most Than commercial Products I have Problem Find Normal Work as alone Developer

So in Week Will start The EASY-DATA-CENTER 
(Backend API from Start, but now + Media,Multi Web,FTP,Socket,DOCs,Emailing,HealthCheck, etc With Absolute News In WORLD)
example: Remote Monitoring internal logger of Server over WebSocet, Automatic Translation Table Filler by First World Using in System and much more

So News Are In Video, New Full Agenda from DB to System is Finished in 5min - Copy Similar To 5 Hours - Complicated for More Joing Example OCR
for Max 2 Days For Implmenent almost perfect Solution for HTML Editing with Allmost HTML shits and Fails in Format.

Perhaps Severu's Media Backend Generator, which will generate a RESTFUL API with a lot of other benefits,
will awaken interest and I will finally find clients instead of mocking that I can't do IT. 

PS: i Start IT on ATARI 65XE in 1989 and this Year is 33 Years from My First Program Code.

So Recap Solutions By Videos I Found Plan Implement Automatic LetsEncrypt for Server, Gihub Custom Server,
cheap EDC Server Generator, Next Few cheap Generator which i build on this Way, ESB Generator, XAML Form Builder for EASY Build 
System By Clicking on Mouse.

---

### 05.12.23 Globální Změny
> Vznikla první agenda s automaticky překládanými poli
>> Úkol, aktualizovat všechny existující aonliner agendy na automatický překlad

- Automatický Překlad sbírá pomocí funkce "TranslateFormFields"
všechny Popisky-LAbel typy a Button Tlačítka Typy a překládá je oproti
DB překladovému seznamu 

- Odpadá nutnost vupisovat typy polí
- POZOR toto je možné jen preo ONLINE AGENDY seznam je načítaný ze serveru

- Další Varianta Překladu je pomocí ruční definice popisku z názvu
- použije "fileType" pro překlad
*DBOperations.DBTranslation(lbl_fileType.Name.Split('_')[1])   

nebo přes lokální Slovníky "Languages" pro použití OffLine
* lbl_fileType.Content = Resources["fileType"].ToString()  

- Menu je Celé kromě volby Nastavení Klienta zmeněno na automatický překlad DB slovníku

- Odpadá nutnost kvůli nové online agendě importovat slovníky

- Slovníky lze Generovat z Backendu a Vložit Do projektu Systému pro Offline Použití
- Použité Jazyky CS,EN, neomezená možnost jednoduchého rozšíření Lang Tabulky

---

### Starší Zápisy

Změny ve volných chvílích při zaměstnání 12.2023 - Nestačím Zapisovat https://KlikneteZde.Cz
30.12 Generic API , nyní stačí registace názvu nové tabulky do příslušné Skupiny Dle Práv
29.12 Agenda Dynamické Moduly a Služby [custom HTML/CSS/JS API moduly] + Sekundární Zabezpečení API
28.12 Připraven Interface pro DBWebStatic FileStructure
27.12 Agenda Static WebSites - další webstránky na subdoménách url://website.domain.xx nebo url://domain.xx/website
26.12 Agenda Operace Systému - DB SP operace, Import/Export/Backup/Clone/Generate Docs/Generate DB Object atd..
24-27.12 STATIC WEB Studio  https://kliknetezde.cz/server-web/static-web-studio/ - prezentační fáze pro Global Administrátor
23.12 Předělána Agenda ServerSetting do Dynamic Form, nová nastavení automaticky přiskočí

9.1 po změnách Změna Klient Setting na Generic Form + MultiSameTab + MultiInstanceCloneByDrag

09.12.2023
ESB -  Implementován SystemMenu ToolTip Dle Param nastavení, zobrazen Popisek menu
ESB+WEB - Imlementována Agenda Správa globálních HTML, a Finálně převeden Layout do DB správy
Web je Nyní Plně v Režii DB a je Skládán z částí HTML Globální + Stánka z Editoru dle Práv v nastavené sekvenci


### 19.04.24 Globální Změny

- částečné narovnání FulText Dokumentace 
- Vytvoření Agendy Úkoly a Zápis všech poznamenaných Cílů
- rušení angličniny v dokumentaci, vracení do CZ, Je Překládána Automaticky


---