import{a as q,b as G}from"./chunk-KPQQ7URC.js";import{a as J,b as W}from"./chunk-XDIIGL3G.js";import{a as v,b as z}from"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import{a as N,b as B}from"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-KL3QZRIM.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as V,c as _}from"./chunk-AS5FXEGH.js";import{a as w,b as K}from"./chunk-X2ZDE2AM.js";import{e as k,i as O}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as U,z as $}from"./chunk-UWMVDULA.js";import{o as E,t as b}from"./chunk-N5X6XDRN.js";import{Cb as A,Jb as e,Na as F,Nb as D,Nc as S,Ob as M,Pb as T,Sa as m,Sb as f,V as C,da as c,ea as x,kb as l,nb as j,rb as i,sb as t,tb as d,yb as g}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var H=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["accessibility-doc"]],decls:112,vars:0,consts:[["href","/configuration/#locale"],["routerLink","/dropdown"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,o){r&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),i(4,"p"),e(5,"Paginator is placed inside a "),i(6,"i"),e(7,"nav"),t(),e(8," element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below."),t(),i(9,"p"),e(10," First, previous, next and last page navigators elements with "),i(11,"i"),e(12,"aria-label"),t(),e(13," attributes referring to the "),i(14,"i"),e(15,"aria.firstPageLabel"),t(),e(16,", "),i(17,"i"),e(18,"aria.prevPageLabel"),t(),e(19,", "),i(20,"i"),e(21,"aria.nextPageLabel"),t(),e(22," and "),i(23,"i"),e(24,"aria.lastPageLabel"),t(),e(25,"properties of the "),i(26,"a",0),e(27,"locale"),t(),e(28," API respectively. "),t(),i(29,"p"),e(30," Page links are also button elements with an "),i(31,"i"),e(32,"aria-label"),t(),e(33," attribute derived from the "),i(34,"i"),e(35,"aria.pageLabel"),t(),e(36," of the "),i(37,"a",0),e(38,"locale"),t(),e(39," API. Current page is marked with "),i(40,"i"),e(41,"aria-current"),t(),e(42,' set to "page" as well. '),t(),i(43,"p"),e(44,"Current page report uses "),i(45,"i"),e(46,'aria-live="polite"'),t(),e(47," to instruct screen reader about the changes to the pagination state."),t(),i(48,"p"),e(49," Rows per page dropdown internally uses a dropdown component, refer to the "),i(50,"a",1),e(51,"dropdown"),t(),e(52," documentation for accessibility details. Additionally, the dropdown uses an "),i(53,"i"),e(54,"aria-label"),t(),e(55,"from the "),i(56,"i"),e(57,"aria.rowsPerPage"),t(),e(58," property of the "),i(59,"a",0),e(60,"locale"),t(),e(61," API. "),t(),i(62,"p"),e(63,"Jump to page input is an "),i(64,"i"),e(65,"input"),t(),e(66," element with an "),i(67,"i"),e(68,"aria-label"),t(),e(69," that refers to the "),i(70,"i"),e(71,"aria.jumpToPage"),t(),e(72," property of the "),i(73,"a",0),e(74,"locale"),t(),e(75," API."),t(),i(76,"h3"),e(77,"Keyboard Support"),t(),i(78,"div",2)(79,"table",3)(80,"thead")(81,"tr")(82,"th"),e(83,"Key"),t(),i(84,"th"),e(85,"Function"),t()()(),i(86,"tbody")(87,"tr")(88,"td")(89,"i"),e(90,"tab"),t()(),i(91,"td"),e(92,"Moves focus through the paginator elements."),t()(),i(93,"tr")(94,"td")(95,"i"),e(96,"enter"),t()(),i(97,"td"),e(98,"Executes the paginator element action."),t()(),i(99,"tr")(100,"td")(101,"i"),e(102,"space"),t()(),i(103,"td"),e(104,"Executes the paginator element action."),t()()()()(),i(105,"h3"),e(106,"Rows Per Page Dropdown Keyboard Support"),t(),i(107,"p"),e(108,"Refer to the "),i(109,"a",1),e(110,"dropdown"),t(),e(111," documentation for more details about keyboard support."),t()()())},dependencies:[u,E],encapsulation:2});let a=n;return a})();var ae=()=>[10,20,30],Q=(()=>{let n=class n{constructor(){this.first=0,this.rows=10,this.code={basic:'<p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>',html:`
<div class="card flex justify-content-center">
    <p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>`,typescript:`
import { Component } from '@angular/core';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'paginator-basic-demo',
    templateUrl: './paginator-basic-demo.html'
})
export class PaginatorBasicDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }
}`}}onPageChange(s){this.first=s.first,this.rows=s.rows}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["basic-doc"]],decls:24,vars:6,consts:[[1,"card","flex","justify-content-center"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions"],["selector","paginator-basic-demo",3,"code"]],template:function(r,o){r&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Paginator is used as a controlled component with "),i(3,"i"),e(4,"first"),t(),e(5,", "),i(6,"i"),e(7,"rows"),t(),e(8," and "),i(9,"i"),e(10,"onPageChange"),t(),e(11," properties to manage the first index and number of records to display per page. Total number of records need to be with "),i(12,"i"),e(13,"totalRecords"),t(),e(14," property. Default template includes a dropdown to change the "),i(15,"i"),e(16,"rows"),t(),e(17," so "),i(18,"i"),e(19,"rowsPerPageOptions"),t(),e(20," is also necessary for the dropdown options. "),t()(),i(21,"div",0)(22,"p-paginator",1),g("onPageChange",function(p){return o.onPageChange(p)}),t()(),d(23,"app-code",2)),r&2&&(m(22),l("first",o.first)("rows",o.rows)("totalRecords",120)("rowsPerPageOptions",f(5,ae)),m(),l("code",o.code))},dependencies:[w,u,v],encapsulation:2});let a=n;return a})();var X=(()=>{let n=class n{constructor(){this.first=0,this.rows=10,this.code={basic:`<p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
<img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature{{ first + 1 }}.jpg" class="max-w-full"/>`,html:`
<div class="card flex flex-column gap-3 justify-content-center align-items-center">
    <p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
    <img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature{{ first + 1 }}.jpg" class="max-w-full"/>
</div>`,typescript:`
import { Component } from '@angular/core';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'paginator-images-demo',
    templateUrl: './paginator-images-demo.html'
})
export class PaginatorImagesDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }
}`}}onPageChange(s){this.first=s.first,this.rows=s.rows}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["images-doc"]],decls:7,vars:8,consts:[[1,"card","flex","flex-column","gap-3","justify-content-center","align-items-center"],[3,"onPageChange","first","rows","totalRecords","showJumpToPageDropdown","showPageLinks"],[1,"max-w-full",3,"src"],["selector","paginator-images-demo",3,"code"]],template:function(r,o){r&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Sample image gallery implementation using paginator."),t()(),i(3,"div",0)(4,"p-paginator",1),g("onPageChange",function(p){return o.onPageChange(p)}),t(),d(5,"img",2),t(),d(6,"app-code",3)),r&2&&(m(4),l("first",o.first)("rows",1)("totalRecords",120)("showJumpToPageDropdown",!0)("showPageLinks",!1),m(),A("src","https://primefaces.org/cdn/primeng/images/demo/nature/nature",o.first+1,".jpg",F),m(),l("code",o.code))},dependencies:[w,u,v],encapsulation:2});let a=n;return a})();var Y=(()=>{let n=class n{constructor(){this.code={typescript:"import { PaginatorModule } from 'primeng/paginator';"}}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,o){r&1&&d(0,"app-code",0),r&2&&l("code",o.code)("hideToggleCode",!0)},dependencies:[w],encapsulation:2});let a=n;return a})();var se=()=>["/theming"],Z=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["style-doc"]],decls:60,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,o){r&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),e(4,"theming"),t(),e(5," page."),t()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),t(),i(12,"th"),e(13,"Element"),t()()(),i(14,"tbody")(15,"tr")(16,"td"),e(17,"p-paginator"),t(),i(18,"td"),e(19,"Container element."),t()(),i(20,"tr")(21,"td"),e(22,"p-paginator-first"),t(),i(23,"td"),e(24,"First page element."),t()(),i(25,"tr")(26,"td"),e(27,"p-paginator-prev"),t(),i(28,"td"),e(29,"Previous page element."),t()(),i(30,"tr")(31,"td"),e(32,"p-paginator-pages"),t(),i(33,"td"),e(34,"Container of page links."),t()(),i(35,"tr")(36,"td"),e(37,"p-paginator-page"),t(),i(38,"td"),e(39,"A page link."),t()(),i(40,"tr")(41,"td"),e(42,"p-paginator-next"),t(),i(43,"td"),e(44,"Next page element."),t()(),i(45,"tr")(46,"td"),e(47,"p-paginator-last"),t(),i(48,"td"),e(49,"Last page element."),t()(),i(50,"tr")(51,"td"),e(52,"p-paginator-rpp-options"),t(),i(53,"td"),e(54,"Rows per page dropdown."),t()(),i(55,"tr")(56,"td"),e(57,"p-paginator-page-options"),t(),i(58,"td"),e(59,"Jump to per page dropdown."),t()()()()()),r&2&&(m(3),l("routerLink",f(1,se)))},dependencies:[u,E],encapsulation:2});let a=n;return a})();var le=()=>[10,20,30],pe=()=>({width:"10rem"}),ee=(()=>{let n=class n{constructor(){this.first1=0,this.rows1=10,this.first2=0,this.rows2=10,this.first3=0,this.rows3=10,this.totalRecords=120,this.options=[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:120,value:120}],this.code={basic:`<div class="flex align-items-center justify-content-center">
    <div>
        <p-button icon="pi pi-star" styleClass="p-button-outlined"></p-button>
    </div>
    <div class="flex-1">
        <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false"></p-paginator>
    </div>
    <div class="justify-content-end">
        <p-button icon="pi pi-search"></p-button>
    </div>
</div>

<div class="flex align-items-center justify-content-end">
    <span class="mx-1 text-color">Items per page: </span>
    <p-dropdown [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0"></p-dropdown>
    <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false" ></p-paginator>
</div>

<div class="flex align-items-center justify-content-start">
    <div class="flex justify-content-center align-items-center gap-3">
        <span>Items per page: </span>
        <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30"></p-slider>
    </div>
    <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords" [showFirstLastIcon]="false" 
        [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}" ></p-paginator>
</div>`,html:`
<div class="card flex flex-column gap-3">
    <div class="flex align-items-center justify-content-center">
        <div>
            <p-button icon="pi pi-star" styleClass="p-button-outlined"></p-button>
        </div>
        <div class="flex-1">
            <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false"></p-paginator>
        </div>
        <div class="justify-content-end">
            <p-button icon="pi pi-search"></p-button>
        </div>
    </div>
    <p-divider></p-divider>
    <div class="flex align-items-center justify-content-end">
        <span class="mx-1 text-color">Items per page: </span>
        <p-dropdown [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0"></p-dropdown>
        <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true" 
            currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false"></p-paginator>
    </div>
    <p-divider></p-divider>
    <div class="flex align-items-center justify-content-start">
        <div class="flex justify-content-center align-items-center gap-3">
            <span>Items per page: </span>
            <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30"></p-slider>
        </div>
        <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords"
            [showFirstLastIcon]="false" [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}"></p-paginator>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'paginator-template-demo',
    templateUrl: './paginator-template-demo.html'
})
export class PaginatorTemplateDemo {
    first1: number = 0;

    rows1: number = 10;

    first2: number = 0;

    rows2: number = 10;

    first3: number = 0;

    rows3: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    onPageChange1(event: PageEvent) {
        this.first1 = event.first;
        this.rows1 = event.rows;
    }

    onPageChange2(event: PageEvent) {
        this.first2 = event.first;
        this.rows2 = event.rows;
    }

    onPageChange3(event: PageEvent) {
        this.first3 = event.first;
        this.rows3 = event.rows;
    }
}`}}onPageChange1(s){this.first1=s.first,this.rows1=s.rows}onPageChange2(s){this.first2=s.first,this.rows2=s.rows}onPageChange3(s){this.first3=s.first,this.rows3=s.rows}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["template-doc"]],decls:25,vars:27,consts:[[1,"card","flex","flex-column","gap-3"],[1,"flex","align-items-center","justify-content-center"],["icon","pi pi-star","styleClass","p-button-outlined"],[1,"flex-1"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions","showFirstLastIcon"],[1,"justify-content-end"],["icon","pi pi-search"],[1,"flex","align-items-center","justify-content-end"],[1,"mx-1","text-color"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],["currentPageReportTemplate","{first} - {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showCurrentPageReport","showPageLinks","showFirstLastIcon"],[1,"flex","align-items-center","justify-content-start"],[1,"flex","justify-content-center","align-items-center","gap-3"],[3,"ngModelChange","ngModel","min","max","step"],["currentPageReportTemplate","{first} - {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showFirstLastIcon","showCurrentPageReport"],["selector","paginator-template-demo",3,"code"]],template:function(r,o){r&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Templating allows overriding the default content of the UI elements by defining callbacks using the element name."),t()(),i(3,"div",0)(4,"div",1)(5,"div"),d(6,"p-button",2),t(),i(7,"div",3)(8,"p-paginator",4),g("onPageChange",function(p){return o.onPageChange1(p)}),t()(),i(9,"div",5),d(10,"p-button",6),t()(),d(11,"p-divider"),i(12,"div",7)(13,"span",8),e(14,"Items per page: "),t(),i(15,"p-dropdown",9),T("ngModelChange",function(p){return M(o.rows2,p)||(o.rows2=p),p}),g("ngModelChange",function(){return o.first2=0}),t(),i(16,"p-paginator",10),g("onPageChange",function(p){return o.onPageChange2(p)}),t()(),d(17,"p-divider"),i(18,"div",11)(19,"div",12)(20,"span"),e(21,"Items per page: "),t(),i(22,"p-slider",13),T("ngModelChange",function(p){return M(o.rows3,p)||(o.rows3=p),p}),g("ngModelChange",function(){return o.first3=0}),t()(),i(23,"p-paginator",14),g("onPageChange",function(p){return o.onPageChange3(p)}),t()()(),d(24,"app-code",15)),r&2&&(m(8),l("first",o.first1)("rows",o.rows1)("totalRecords",120)("rowsPerPageOptions",f(25,le))("showFirstLastIcon",!1),m(7),l("options",o.options),D("ngModel",o.rows2),m(),l("first",o.first2)("rows",o.rows2)("totalRecords",120)("showCurrentPageReport",!0)("showPageLinks",!1)("showFirstLastIcon",!1),m(6),j(f(26,pe)),D("ngModel",o.rows3),l("min",10)("max",120)("step",30),m(),l("first",o.first3)("rows",o.rows3)("totalRecords",o.totalRecords)("showFirstLastIcon",!1)("showCurrentPageReport",!0),m(),l("code",o.code))},dependencies:[w,u,v,N,k,O,$,q,J],encapsulation:2});let a=n;return a})();var I=()=>[10,20,30],te=(()=>{let n=class n{constructor(){this.first=0,this.rows=10,this.code={basic:`<div class="flex-auto">
    <p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>
<div class="flex-auto">
    <p-paginator locale="en-US" (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>
<div class="flex-auto">
    <p-paginator locale="fa-IR" (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>
`,html:`
<div class="card flex justify-content-center">
    <p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>
<div class="card flex justify-content-center">
    <p-paginator locale="en-US" (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>
<div class="card flex justify-content-center">
    <p-paginator locale="fa-IR" (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]"></p-paginator>
</div>
`,typescript:`
import { Component } from '@angular/core';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'paginator-locale-demo',
    templateUrl: './paginator-locale-demo.html'
})
export class PaginatorLocaleDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }
}`}}onPageChange(s){this.first=s.first,this.rows=s.rows}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["locale-doc"]],decls:20,vars:16,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","locale-user",1,"block","font-bold","mb-2"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions"],["for","locale-us",1,"block","font-bold","mb-2"],["locale","en-US",3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions"],["for","locale-indian",1,"block","font-bold","mb-2"],["locale","fa-IR",3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions"],["selector","paginator-locale-demo",3,"code"]],template:function(r,o){r&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Localization information such as page numbers and rows per page options are defined with the "),i(3,"i"),e(4,"locale"),t(),e(5," property which defaults to the user locale."),t()(),i(6,"div",0)(7,"div",1)(8,"label",2),e(9,"User Locale"),t(),i(10,"p-paginator",3),g("onPageChange",function(p){return o.onPageChange(p)}),t()(),i(11,"div",1)(12,"label",4),e(13,"United States Locale"),t(),i(14,"p-paginator",5),g("onPageChange",function(p){return o.onPageChange(p)}),t()(),i(15,"div",1)(16,"label",6),e(17,"Persian Locale"),t(),i(18,"p-paginator",7),g("onPageChange",function(p){return o.onPageChange(p)}),t()()(),d(19,"app-code",8)),r&2&&(m(10),l("first",o.first)("rows",o.rows)("totalRecords",120)("rowsPerPageOptions",f(13,I)),m(4),l("first",o.first)("rows",o.rows)("totalRecords",120)("rowsPerPageOptions",f(14,I)),m(4),l("first",o.first)("rows",o.rows)("totalRecords",120)("rowsPerPageOptions",f(15,I)),m(),l("code",o.code))},dependencies:[w,u,v],encapsulation:2});let a=n;return a})();var ie=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=x({type:n}),n.\u0275inj=C({imports:[S,K,_,z,U,G,W,b,B,_]});let a=n;return a})();var me=()=>["Paginator"],ne=(()=>{let n=class n{constructor(){this.docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:Q},{id:"locale",label:"Locale",component:te},{id:"template",label:"Template",component:ee},{id:"images",label:"Images",component:X},{id:"style",label:"Style",component:Z},{id:"accessibility",label:"Accessibility",component:H}]}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=c({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Paginator Component","header","Paginator","description","Paginator displays data in paged format and provides navigation between pages.",3,"docs","apiDocs"]],template:function(r,o){r&1&&d(0,"app-doc",0),r&2&&l("docs",o.docs)("apiDocs",f(2,me))},dependencies:[V],styles:[".image-gallery[_ngcontent-%COMP%]{text-align:center;padding:1rem}"]});let a=n;return a})();var oe=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=x({type:n}),n.\u0275inj=C({imports:[b.forChild([{path:"",component:ne}]),b]});let a=n;return a})();var mt=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=x({type:n}),n.\u0275inj=C({imports:[S,oe,ie]});let a=n;return a})();export{mt as PaginatorDemoModule};
