﻿<%@ Page Controller="Elanat.AdminContactController" Model="Elanat.AdminContactModel" %><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="<%=Elanat.AspxHtmlValue.CurrentAdminLanguageDirection()%>">
<head>
    <title><%=model.ContactLanguage%></title>
    <script src="<%=Elanat.AspxHtmlValue.AdminPath()%>/contact/script/contact.js"></script>
    <!-- Start Client Variant -->
    <%=Elanat.AspxHtmlValue.CurrentAdminClientVariant()%>
    <!-- End Client Variant -->	
    <script src="<%=Elanat.AspxHtmlValue.SitePath()%>client/script/global.js"></script>
    <script type="text/javascript" src="<%=Elanat.AspxHtmlValue.SitePath()%>client/script/admin/admin.js" ></script>
    <script type="text/javascript" src="<%=Elanat.AspxHtmlValue.SitePath()%>client/script/page_load/admin/page_load.js" ></script>
    <%=Elanat.AspxHtmlValue.CurrentAdminStyleTag()%>
    <link rel="stylesheet" type="text/css" href="<%=Elanat.AspxHtmlValue.SitePath()%>client/style/global.css" />
    <link rel="stylesheet" type="text/css" href="<%=Elanat.AspxHtmlValue.SitePath()%>client/style/admin_global.css" />
    <%=Elanat.AspxHtmlValue.CurrentBoxTag()%>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body onload="el_RunAction(); el_PartPageLoad();">

    <div class="el_head">
        <%=model.ContactLanguage%>
    </div>
    <div class="el_part_row">
        <div id="div_ContactTitle" class="el_title" onclick="el_HidePart(this); el_SetIframeAutoHeight()">
            <%=model.ContactLanguage%>
            <div class="el_dash"></div>
        </div>
        <div class="el_item">
            <div id="div_TableBox" class="el_item">
                <%=model.ContentValue%>
            </div>
        </div>
    </div>

</body>
</html>
