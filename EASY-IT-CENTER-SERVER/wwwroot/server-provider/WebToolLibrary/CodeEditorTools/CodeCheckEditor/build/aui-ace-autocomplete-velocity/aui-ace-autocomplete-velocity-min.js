YUI.add("aui-ace-autocomplete-velocity",function(e,t){var n=e.Lang,r=0,i=1,s=e.Base.create("aui-ace-autocomplete-velocity",e.AceEditor.TemplateProcessor,[],{getMatch:function(e){var t=this,n,s;return(s=e.lastIndexOf("#"))>=0?(e=e.substring(s),t.get("directivesMatcher").test(e)&&(n={content:e.substring(1),start:s,type:r})):(s=e.lastIndexOf("$"))>=0&&(e=e.substring(s),t.get("variablesMatcher").test(e)&&(n={content:e.substring(1),start:s,type:i})),n}},{NAME:"aui-ace-autocomplete-velocity",NS:"aui-ace-autocomplete-velocity",ATTRS:{directives:{validator:n.isArray,value:["else","elseif","foreach","if","include","macro","parse","set","stop"]},directivesMatcher:{setter:"_setRegexValue",value:/#[\w]*[^#]*$/},host:{validator:n.isObject},variables:{validator:n.isObject},variablesMatcher:{setter:"_setRegexValue",value:/\$[\w., ()"]*(?:[^$]|\\\$)*$/}}});e.AceEditor.AutoCompleteVelocity=s},"3.0.1",{requires:["aui-ace-autocomplete-templateprocessor"]});
