Imports System
Imports System.Globalization
Imports System.Reflection
Imports System.Resources
Imports System.Runtime.InteropServices
Imports System.Windows

' Obecné informace o sestavení se řídí přes následující 
' sadu atributů. Změnou hodnot těchto atributů se upraví informace
' přidružené k sestavení.

' Zkontrolujte hodnoty atributů sestavení.

<Assembly: AssemblyTitle("EasySYSTEMbuilderHelp")>
<Assembly: AssemblyDescription("")>
<Assembly: AssemblyCompany("")>
<Assembly: AssemblyProduct("EasySYSTEMbuilderHelp")>
<Assembly: AssemblyCopyright("Copyright ©  2024")>
<Assembly: AssemblyTrademark("")>
<Assembly: ComVisible(false)>

'Pokud chcete začít vytvářet aplikace, které se dají lokalizovat, nastavte
'<UICulture>JazykováVerzeVeKteréPíšeteKód</UICulture> v souboru .vbproj
'uvnitř <PropertyGroup>.  Pokud například používáte jazykovou verzi US english
've zdrojových souborech, nastavte <UICulture> na "en-US".  Pak zrušte komentář
'pro atribut NeutralResourceLanguage.  Aktualizujte hodnotu "en-US" na dalším řádku,
'aby se shodovala s nastavením UICulture v souboru projektu.

'<Assembly: NeutralResourcesLanguage("en-US", UltimateResourceFallbackLocation.Satellite)>


'Atribut ThemeInfo popisuje, kde se nacházejí zdrojové slovníky pro konkrétní motiv nebo obecné zdrojové slovníky.
'První parametr: kde se nachází slovníky prostředků pro konkrétní motiv
'(používá se, pokud se prostředek nenajde na stránce
' nebo ve zdrojových slovnících aplikace)

'Druhý parametr: kde se nachází obecné slovníky prostředků
'(používá se, pokud se prostředek nenajde na stránce
'v aplikaci nebo jakýchkoliv zdrojových slovnících konkrétního motivu)
<Assembly: ThemeInfo(ResourceDictionaryLocation.None, ResourceDictionaryLocation.SourceAssembly)>



'Následující GUID se používá pro ID knihovny typů (typelib), pokud je tento projekt vystavený pro COM.
<Assembly: Guid("aae06206-6653-4132-93a9-6f8e2357cc1b")>

' Informace o verzi sestavení se skládá z těchto čtyř hodnot:
'
'      Hlavní verze
'      Podverze
'      Číslo sestavení
'      Revize
'
' Můžete zadat všechny hodnoty nebo nastavit výchozí číslo buildu a revize
' pomocí zástupného znaku * takto:
' <Assembly: AssemblyVersion("1.0.*")>

<Assembly: AssemblyVersion("1.0.0.0")>
<Assembly: AssemblyFileVersion("1.0.0.0")>
