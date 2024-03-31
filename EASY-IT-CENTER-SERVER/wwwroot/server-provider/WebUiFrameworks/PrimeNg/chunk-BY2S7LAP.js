import{a as y,b as R}from"./chunk-HPRJRG5U.js";import{a as U,b as L}from"./chunk-XSLH4F3Y.js";import"./chunk-LWXL4VWZ.js";import{a as N,b as O}from"./chunk-A5TA6W7J.js";import"./chunk-KL3QZRIM.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as F,c as S}from"./chunk-AS5FXEGH.js";import{a as d,b as j}from"./chunk-X2ZDE2AM.js";import{r as k,s as I}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as B,q as M,y as A}from"./chunk-UWMVDULA.js";import{o as D,t as x}from"./chunk-N5X6XDRN.js";import{Jb as t,Nc as v,Sa as c,Sb as h,V as g,da as m,ea as b,ib as E,kb as l,nb as w,rb as i,sb as n,tb as a}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var q=(()=>{let e=class e{constructor(){this.code={html:`<p-toolbar aria-label="Actions">
    Content
</p-toolbar>`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["accessibility-doc"]],decls:26,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,s){r&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),i(4,"p"),t(5," Toolbar uses "),i(6,"i"),t(7,"toolbar"),n(),t(8," role for the root element, "),i(9,"i"),t(10,"aria-orientation"),n(),t(11," is not included as it defaults to "),i(12,"i"),t(13,"horizontal"),n(),t(14,". Any valid attribute is passed to the root element so you may add additional properties like "),i(15,"i"),t(16,"aria-labelledby"),n(),t(17," and "),i(18,"i"),t(19,"aria-labelled"),n(),t(20," to define the element if required. "),n(),a(21,"app-code",0),i(22,"h3"),t(23,"Keyboard Support"),n(),i(24,"p"),t(25,"Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence."),n()()()),r&2&&(c(21),l("code",s.code)("hideToggleCode",!0))},dependencies:[d,u],encapsulation:2});let o=e;return o})();var z=(()=>{let e=class e{constructor(){this.code={basic:`<p-toolbar>
    <div class="p-toolbar-group-start">
        <button pButton icon="pi pi-plus" class="mr-2"></button>
        <button pButton icon="pi pi-print" class="mr-2"></button>
        <button pButton icon="pi pi-upload"></button>
    </div>
    <div class="p-toolbar-group-center">
        <span class="p-input-icon-left">
            <i class="pi pi-search"></i>
            <input pInputText placeholder="Search" />
        </span>
    </div>
    <div class="p-toolbar-group-end">
        <p-splitButton label="Save" icon="pi pi-check" [model]="items"></p-splitButton>
    </div>
</p-toolbar>`,html:`<div class="card">
<p-toolbar>
<div class="p-toolbar-group-start">
    <button pButton icon="pi pi-plus" class="mr-2"></button>
    <button pButton icon="pi pi-print" class="mr-2"></button>
    <button pButton icon="pi pi-upload"></button>
</div>
<div class="p-toolbar-group-center">
    <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <input pInputText placeholder="Search" />
    </span>
</div>
<div class="p-toolbar-group-end">
    <p-splitButton label="Save" icon="pi pi-check" [model]="items"></p-splitButton>
</div>
</p-toolbar>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'toolbar-basic-demo',
    templateUrl: './toolbar-basic-demo.html'
})
export class ToolbarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:25,vars:2,consts:[[1,"card"],[1,"p-toolbar-group-start"],["pButton","","icon","pi pi-plus",1,"mr-2"],["pButton","","icon","pi pi-print",1,"mr-2"],["pButton","","icon","pi pi-upload"],[1,"p-toolbar-group-center"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","placeholder","Search"],[1,"p-toolbar-group-end"],["label","Save","icon","pi pi-check",3,"model"],["selector","toolbar-basic-demo",3,"code"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Toolbar is a grouping component for buttons and other content. Its content can be placed inside the "),i(3,"i"),t(4,"start"),n(),t(5,", "),i(6,"i"),t(7,"center"),n(),t(8," and "),i(9,"i"),t(10,"end"),n(),t(11," sections."),n()(),i(12,"div",0)(13,"p-toolbar")(14,"div",1),a(15,"button",2)(16,"button",3)(17,"button",4),n(),i(18,"div",5)(19,"span",6),a(20,"i",7)(21,"input",8),n()(),i(22,"div",9),a(23,"p-splitButton",10),n()()(),a(24,"app-code",11)),r&2&&(c(23),l("model",s.items),c(),l("code",s.code))},dependencies:[d,u,y,A,U,k],encapsulation:2});let o=e;return o})();var K=(()=>{let e=class e{constructor(){this.code={typescript:"import { ToolbarModule } from 'primeng/toolbar';"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,s){r&1&&a(0,"app-code",0),r&2&&l("code",s.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2});let o=e;return o})();var W=()=>["/theming"],P=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["style-doc"]],decls:35,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),t(4,"theming"),n(),t(5," page."),n()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),n(),i(12,"th"),t(13,"Element"),n()()(),i(14,"tbody")(15,"tr")(16,"td"),t(17,"p-toolbar"),n(),i(18,"td"),t(19,"Main container element."),n()(),i(20,"tr")(21,"td"),t(22,"p-toolbar-group-start"),n(),i(23,"td"),t(24,"Start content container."),n()(),i(25,"tr")(26,"td"),t(27,"p-toolbar-group-center"),n(),i(28,"td"),t(29,"Center content container."),n()(),i(30,"tr")(31,"td"),t(32,"p-toolbar-group-end"),n(),i(33,"td"),t(34,"End content container."),n()()()()()),r&2&&(c(3),l("routerLink",h(1,W)))},dependencies:[u,D],encapsulation:2});let o=e;return o})();var X=()=>({"border-radius":"3rem","background-image":"linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))"});function Y(o,e){o&1&&a(0,"img",6)}function Z(o,e){o&1&&(i(0,"div",7)(1,"button",8),a(2,"i",9),n(),i(3,"button",8),a(4,"i",10),n(),i(5,"button",8),a(6,"i",11),n()())}function $(o,e){o&1&&(i(0,"div",12),a(1,"p-avatar",13),i(2,"span",14),t(3,"Amy Elsner"),n()())}var G=(()=>{let e=class e{constructor(){this.code={basic:`<p-toolbar styleClass="bg-gray-900 shadow-2" [style]="{ 'border-radius': '3rem', 'background-image': 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }">
        <ng-template pTemplate="start">
            <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" />
        </ng-template>
        <ng-template pTemplate="center">
            <div class="flex flex-wrap align-items-center gap-3">
                <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-home text-2xl"></i></button>
                <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-user text-2xl"></i></button>
                <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-search text-2xl"></i></button>
            </div>
        </ng-template>
        <ng-template pTemplate="end">
            <div class="flex align-items-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold text-bluegray-50">Amy Elsner</span>
            </div>
        </ng-template>
</p-toolbar>`,html:`<div class="card">
<p-toolbar styleClass="bg-gray-900 shadow-2" [style]="{ 'border-radius': '3rem', 'background-image': 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }">
    <ng-template pTemplate="start">
        <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" />
    </ng-template>
    <ng-template pTemplate="center">
        <div class="flex flex-wrap align-items-center gap-3">
            <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-home text-2xl"></i></button>
            <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-user text-2xl"></i></button>
            <button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"><i class="pi pi-search text-2xl"></i></button>
        </div>
    </ng-template>
    <ng-template pTemplate="end">
        <div class="flex align-items-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold text-bluegray-50">Amy Elsner</span>
        </div>
    </ng-template>
</p-toolbar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'toolbar-template-demo',
    templateUrl: './toolbar-template-demo.html'
})
export class ToolbarTemplateDemo {
   
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["template-doc"]],decls:18,vars:4,consts:[[1,"card"],["styleClass","bg-gray-900 shadow-2"],["pTemplate","start"],["pTemplate","center"],["pTemplate","end"],["selector","toolbar-template-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/primeng.svg"],[1,"flex","flex-wrap","align-items-center","gap-3"],[1,"p-link","inline-flex","justify-content-center","align-items-center","text-white","h-3rem","w-3rem","border-circle","hover:bg-white-alpha-10","transition-all","transition-duration-200"],[1,"pi","pi-home","text-2xl"],[1,"pi","pi-user","text-2xl"],[1,"pi","pi-search","text-2xl"],[1,"flex","align-items-center","gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","text-bluegray-50"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Content can also be placed using the "),i(3,"i"),t(4,"start"),n(),t(5,", "),i(6,"i"),t(7,"center"),n(),t(8," and "),i(9,"i"),t(10,"end"),n(),t(11," templates."),n()(),i(12,"div",0)(13,"p-toolbar",1),E(14,Y,1,0,"ng-template",2)(15,Z,7,0,"ng-template",3)(16,$,4,0,"ng-template",4),n()(),a(17,"app-code",5)),r&2&&(c(13),w(h(3,X)),c(4),l("code",s.code))},dependencies:[d,u,y,M,N],encapsulation:2});let o=e;return o})();var H=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[v,j,S,R,x,B,L,I,O,S]});let o=e;return o})();var _=()=>["Toolbar"],J=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:z},{id:"template",label:"Template",component:G},{id:"style",label:"Style",component:P},{id:"accessibility",label:"Accessibility",component:q}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Toolbar Component","header","Toolbar","description","Toolbar is a grouping component for buttons and other content.",3,"docs","apiDocs"]],template:function(r,s){r&1&&a(0,"app-doc",0),r&2&&l("docs",s.docs)("apiDocs",h(2,_))},dependencies:[F],encapsulation:2});let o=e;return o})();var Q=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[x.forChild([{path:"",component:J}]),x]});let o=e;return o})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[v,Q,H]});let o=e;return o})();export{Qe as ToolbarDemoModule};
