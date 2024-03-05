@ECHO OFF
REM INTELIGENT SEARCH DOCUMENTATION
REM SUMMARY.DM IS Primary fIle with links to all other Files
REM Which are Inserted as Menu Items
REM All files must be in 'src' folder
e:
cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp
del book /Q /S
mdbook.exe build