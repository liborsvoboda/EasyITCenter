# Definice Databází   

Je použit Entity Framework 6, tím jsou tedy podporovány všechny standardní Typy Databází   

**Jasná a Jednoduchá Globální Struktura**    
Api se nabízí jako Služby, plánované úlohy, Procesy, Operace, Generátory, Exporty   

- GlobalApi: Api Definované Pro Uživatele
- Server Api: Je Serverová Unikátní API
- SystemApi: Jsou Api využité Systémem
- WebApi: Jsou unikátní Api pro centrální Ovládání WebServeru

**Uživatel**
Každý Užiatel může mít svo vlastní SQLServer  Databázi a SQLFile Databázi pro testování    
Může vyvíjet svůj vlastní SubServer a SubSystém odvozené z řešení EIC & ESB  




# TODO

1] Přesunout datové Definice dio lok8ln9 tabulky a agendy Dynamické Datové Definice
a z tama je používat jak na serveru tak v systému - převádět je viz JsonSerilize: TypickáTabulka

GenericTable ConvertGenericClassToStandard

2] vztvo5it proceduru na hromadné změny v tabulkách 

jako přidání sloupce, změna typu, nahrazení stringu


