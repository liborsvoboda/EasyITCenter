import{a as u,b as F}from"./chunk-H6W5JTHG.js";import{a as d,b as I,c as E}from"./chunk-AS5FXEGH.js";import{a as g,b as A}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as M}from"./chunk-UWMVDULA.js";import{o as w,t as C}from"./chunk-N5X6XDRN.js";import{Jb as i,Nc as D,Sa as m,Sb as x,V as v,da as s,ea as y,kb as r,nb as T,rb as n,sb as a,tb as c}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var K=()=>["/theming"],j=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["style-doc"]],decls:35,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,l){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),i(4,"theming"),a(),i(5," page."),a()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),i(11,"Name"),a(),n(12,"th"),i(13,"Element"),a()()(),n(14,"tbody")(15,"tr")(16,"td"),i(17,"p-tag"),a(),n(18,"td"),i(19,"Tag element"),a()(),n(20,"tr")(21,"td"),i(22,"p-tag-rounded"),a(),n(23,"td"),i(24,"Rounded element"),a()(),n(25,"tr")(26,"td"),i(27,"p-tag-icon"),a(),n(28,"td"),i(29,"Icon of the tag"),a()(),n(30,"tr")(31,"td"),i(32,"p-tag-value"),a(),n(33,"td"),i(34,"Value of the tag"),a()()()()()),t&2&&(m(3),r("routerLink",x(1,K)))},dependencies:[w,d],encapsulation:2});let o=e;return o})();var P=(()=>{let e=class e{constructor(){this.code={basic:'<p-tag value="New"></p-tag>',html:`
<div class="card flex justify-content-center">
    <p-tag value="New"></p-tag>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tag-basic-demo',
    templateUrl: './tag-basic-demo.html'
})
export class TagBasicDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:9,vars:1,consts:[[1,"card","flex","justify-content-center"],["value","New"],["selector","tag-basic-demo",3,"code"]],template:function(t,l){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Label of the tag is defined with the "),n(3,"i"),i(4,"value"),a(),i(5," property."),a()(),n(6,"div",0),c(7,"p-tag",1),a(),c(8,"app-code",2)),t&2&&(m(8),r("code",l.code))},dependencies:[g,d,u],encapsulation:2});let o=e;return o})();var N=(()=>{let e=class e{constructor(){this.code={basic:'<p-tag icon="pi pi-user" value="Primary"></p-tag>',html:`
<div class="card flex justify-content-center gap-2">
    <p-tag icon="pi pi-user" value="Primary"></p-tag>
    <p-tag icon="pi pi-check" severity="success" value="Success"></p-tag>
    <p-tag icon="pi pi-info-circle" severity="info" value="Info"></p-tag>
    <p-tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></p-tag>
    <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tag-icon-demo',
    templateUrl: './tag-icon-demo.html'
})
export class TagIconDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["icon-doc"]],decls:13,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["icon","pi pi-user","value","Primary"],["icon","pi pi-check","severity","success","value","Success"],["icon","pi pi-info-circle","severity","info","value","Info"],["icon","pi pi-exclamation-triangle","severity","warning","value","Warning"],["icon","pi pi-times","severity","danger","value","Danger"],["selector","tag-icon-demo",3,"code"]],template:function(t,l){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A font icon next to the value can be displayed with the "),n(3,"i"),i(4,"icon"),a(),i(5," property."),a()(),n(6,"div",0),c(7,"p-tag",1)(8,"p-tag",2)(9,"p-tag",3)(10,"p-tag",4)(11,"p-tag",5),a(),c(12,"app-code",6)),t&2&&(m(12),r("code",l.code))},dependencies:[g,d,u],encapsulation:2});let o=e;return o})();var k=(()=>{let e=class e{constructor(){this.code={typescript:"import { TagModule } from 'primeng/tag';"}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&c(0,"app-code",0),t&2&&r("code",l.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2});let o=e;return o})();var W=(()=>{let e=class e{constructor(){this.code={basic:'<p-tag value="Primary" [rounded]="true"></p-tag>',html:`
<div class="card flex justify-content-center gap-2">
    <p-tag value="Primary" [rounded]="true"></p-tag>
    <p-tag severity="success" value="Success" [rounded]="true"></p-tag>
    <p-tag severity="info" value="Info" [rounded]="true"></p-tag>
    <p-tag severity="warning" value="Warning" [rounded]="true"></p-tag>
    <p-tag severity="danger" value="Danger" [rounded]="true"></p-tag>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tag-pill-demo',
    templateUrl: './tag-pill-demo.html'
})
export class TagPillDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["pill-doc"]],decls:13,vars:6,consts:[[1,"card","flex","justify-content-center","gap-2"],["value","Primary",3,"rounded"],["severity","success","value","Success",3,"rounded"],["severity","info","value","Info",3,"rounded"],["severity","warning","value","Warning",3,"rounded"],["severity","danger","value","Danger",3,"rounded"],["selector","tag-pill-demo",3,"code"]],template:function(t,l){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Enabling "),n(3,"i"),i(4,"rounded"),a(),i(5,", displays a tag as a pill."),a()(),n(6,"div",0),c(7,"p-tag",1)(8,"p-tag",2)(9,"p-tag",3)(10,"p-tag",4)(11,"p-tag",5),a(),c(12,"app-code",6)),t&2&&(m(7),r("rounded",!0),m(),r("rounded",!0),m(),r("rounded",!0),m(),r("rounded",!0),m(),r("rounded",!0),m(),r("code",l.code))},dependencies:[g,d,u],encapsulation:2});let o=e;return o})();var V=()=>({background:"linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)"}),B=(()=>{let e=class e{constructor(){this.code={basic:`<p-tag [style]="{ 'background': 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}">
    <div class="flex align-items-center gap-2">
        <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: '18px'" />
        <span class="text-base">Italia</span>
        <i class="pi pi-times text-xs"></i>
    </div>
</p-tag>`,html:`
<div class="card flex justify-content-center">
    <p-tag [style]="{ 'background': 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}">
        <div class="flex align-items-center gap-2">
            <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: '18px'" />
            <span class="text-base">Italia</span>
            <i class="pi pi-times text-xs"></i>
        </div>
    </p-tag>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tag-template-demo',
    templateUrl: './tag-template-demo.html'
})
export class TagTemplateDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["tag-template-demo"]],decls:11,vars:4,consts:[[1,"card","flex","justify-content-center"],[1,"flex","align-items-center","gap-2"],["alt","Country","src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",1,"flag","flag-it",2,"width","'18px'"],[1,"text-base"],[1,"pi","pi-times","text-xs"],["selector","tag-template-demo",3,"code"]],template:function(t,l){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Children of the component are passed as the content for templating."),a()(),n(3,"div",0)(4,"p-tag")(5,"div",1),c(6,"img",2),n(7,"span",3),i(8,"Italia"),a(),c(9,"i",4),a()()(),c(10,"app-code",5)),t&2&&(m(4),T(x(3,V)),m(6),r("code",l.code))},dependencies:[g,d,u],encapsulation:2});let o=e;return o})();var U=(()=>{let e=class e{constructor(){this.code={basic:'<p-tag severity="success" value="Success"></p-tag>',html:`
<div class="card flex justify-content-center gap-2">
    <p-tag value="Primary"></p-tag>
    <p-tag severity="success" value="Success"></p-tag>
    <p-tag severity="info" value="Info"></p-tag>
    <p-tag severity="warning" value="Warning"></p-tag>
    <p-tag severity="danger" value="Danger"></p-tag>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tag-severity-demo',
    templateUrl: './tag-severity-demo.html'
})
export class TagSeverityDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["severity-doc"]],decls:22,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["value","Primary"],["severity","success","value","Success"],["severity","info","value","Info"],["severity","warning","value","Warning"],["severity","danger","value","Danger"],["selector","tag-severity-demo",3,"code"]],template:function(t,l){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Severity defines the color of the tag, possible values are "),n(3,"i"),i(4,"success"),a(),i(5,", "),n(6,"i"),i(7,"info"),a(),i(8,", "),n(9,"i"),i(10,"warning"),a(),i(11," and "),n(12,"i"),i(13,"danger"),a(),i(14," in addition to the default theme color."),a()(),n(15,"div",0),c(16,"p-tag",1)(17,"p-tag",2)(18,"p-tag",3)(19,"p-tag",4)(20,"p-tag",5),a(),c(21,"app-code",6)),t&2&&(m(21),r("code",l.code))},dependencies:[g,d,u],encapsulation:2});let o=e;return o})();var L=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["accessibility-doc"]],decls:16,vars:0,template:function(t,l){t&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),a(),n(4,"p"),i(5," Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,"),n(6,"i"),i(7,"aria-live"),a(),i(8," may be utilized as well. In case badges need to be tabbable, "),n(9,"i"),i(10,"tabIndex"),a(),i(11," can be added to implement custom key handlers. "),a(),n(12,"h3"),i(13,"Keyboard Support"),a(),n(14,"p"),i(15,"Component does not include any interactive elements."),a()()())},dependencies:[d],encapsulation:2});let o=e;return o})();var R=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[D,C,A,E,F,M,E]});let o=e;return o})();var G=()=>["Tag"],z=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:k},{id:"basic",label:"Basic",component:P},{id:"severity",label:"Severity",component:U},{id:"pill",label:"Pill",component:W},{id:"icon",label:"Icon",component:N},{id:"template",label:"Template",component:B},{id:"style",label:"Style",component:j},{id:"accessibility",label:"Accessibility",component:L}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Tag Component","header","Tag","description","Tag component is used to categorize content.",3,"docs","apiDocs"]],template:function(t,l){t&1&&c(0,"app-doc",0),t&2&&r("docs",l.docs)("apiDocs",x(2,G))},dependencies:[I],encapsulation:2});let o=e;return o})();var q=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[C.forChild([{path:"",component:z}]),C]});let o=e;return o})();var qe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[D,q,R]});let o=e;return o})();export{qe as TagDemoModule};
