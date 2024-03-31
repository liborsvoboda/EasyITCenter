import{a as ie,b as te}from"./chunk-A5TA6W7J.js";import{a as S,b as X}from"./chunk-5PXOZ7WL.js";import{a as K,b as Q}from"./chunk-QDQUXZXB.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as h,b as ee,c as F}from"./chunk-AS5FXEGH.js";import{a as f,b as $}from"./chunk-X2ZDE2AM.js";import{p as O}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as J,q as Z,w as Y,x as G,z as y}from"./chunk-UWMVDULA.js";import{o as N,t as _}from"./chunk-N5X6XDRN.js";import{Fb as I,Gb as U,Hb as z,Jb as i,Nb as v,Nc as H,Ob as x,Pb as g,Sa as d,Sb as A,V as w,da as u,ea as E,ib as R,kb as c,ma as M,na as D,oa as j,pa as W,rb as e,sb as t,tb as l,xb as B,yb as b,zb as q}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var re=(()=>{let r=class r{constructor(){this.sidebarVisible=!1,this.code={basic:`<p-sidebar [(visible)]="sidebarVisible">
    <h3>Sidebar</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>`,html:`
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible">
        <h3>Sidebar</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </p-sidebar>
    <p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-basic-demo',
    templateUrl: './sidebar-basic-demo.html'
})
export class SidebarBasicDemo {
    sidebarVisible: boolean = false;
}`}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["basic-doc"]],decls:14,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["selector","sidebar-basic-demo",3,"code"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sidebar is used as a container and visibility is controlled with a binding to "),e(3,"i"),i(4,"visible"),t(),i(5,"."),t()(),e(6,"div",0)(7,"p-sidebar",1),g("visibleChange",function(s){return x(o.sidebarVisible,s)||(o.sidebarVisible=s),s}),e(8,"h3"),i(9,"Sidebar"),t(),e(10,"p"),i(11," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),t()(),e(12,"p-button",2),b("click",function(){return o.sidebarVisible=!0}),t()(),l(13,"app-code",3)),n&2&&(d(7),v("visible",o.sidebarVisible),d(6),c("code",o.code))},dependencies:[f,S,y,h],encapsulation:2});let a=r;return a})();function ve(a,r){a&1&&i(0,"Header Content")}function xe(a,r){a&1&&i(0,"Body Content")}function ge(a,r){a&1&&i(0,"Footer Content")}var ne=(()=>{let r=class r{constructor(){this.sidebarVisible=!1,this.code={basic:`<p-sidebar [(visible)]="sidebarVisible">
    <ng-template pTemplate="header">Header Content</ng-template>
    <ng-template pTemplate="content">Body Content</ng-template>
    <ng-template pTemplate="footer">Footer Content</ng-template>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>`,html:`
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible">
        <ng-template pTemplate="header">Header Content</ng-template>
        <ng-template pTemplate="content">Body Content</ng-template>
        <ng-template pTemplate="footer">Footer Content</ng-template>
    </p-sidebar>
    <p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-template-demo',
    templateUrl: './sidebar-template-demo.html'
})
export class SidebarTemplateDemo {
    sidebarVisible: boolean = false;
}`}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["template-doc"]],decls:19,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"visibleChange","visible"],["pTemplate","header"],["pTemplate","content"],["pTemplate","footer"],["icon","pi pi-arrow-right",3,"click"],["selector","sidebar-template-demo",3,"code"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sidebar is customizable by "),e(3,"i"),i(4,"header"),t(),i(5,", "),e(6,"i"),i(7,"content"),t(),i(8,", "),e(9,"i"),i(10,"footer"),t(),i(11," templates."),t()(),e(12,"div",0)(13,"p-sidebar",1),g("visibleChange",function(s){return x(o.sidebarVisible,s)||(o.sidebarVisible=s),s}),R(14,ve,1,0,"ng-template",2)(15,xe,1,0,"ng-template",3)(16,ge,1,0,"ng-template",4),t(),e(17,"p-button",5),b("click",function(){return o.sidebarVisible=!0}),t()(),l(18,"app-code",6)),n&2&&(d(13),v("visible",o.sidebarVisible),d(5),c("code",o.code))},dependencies:[f,S,Z,y,h],encapsulation:2});let a=r;return a})();var ae=(()=>{let r=class r{constructor(){this.code={typescript:"import { SidebarModule } from 'primeng/sidebar';"}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,o){n&1&&l(0,"app-code",0),n&2&&c("code",o.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let a=r;return a})();var ye=()=>["/theming"],oe=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["style-doc"]],decls:75,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),e(3,"a",0),i(4,"theming"),t(),i(5," page."),t()(),e(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),i(11,"Name"),t(),e(12,"th"),i(13,"Element"),t()()(),e(14,"tbody")(15,"tr")(16,"td"),i(17,"p-sidebar"),t(),e(18,"td"),i(19,"Container element"),t()(),e(20,"tr")(21,"td"),i(22,"p-sidebar-left"),t(),e(23,"td"),i(24,"Container element of left sidebar."),t()(),e(25,"tr")(26,"td"),i(27,"p-sidebar-right"),t(),e(28,"td"),i(29,"Container element of right sidebar."),t()(),e(30,"tr")(31,"td"),i(32,"p-sidebar-top"),t(),e(33,"td"),i(34,"Container element of top sidebar."),t()(),e(35,"tr")(36,"td"),i(37,"p-sidebar-bottom"),t(),e(38,"td"),i(39,"Container element of bottom sidebar."),t()(),e(40,"tr")(41,"td"),i(42,"p-sidebar-full"),t(),e(43,"td"),i(44,"Container element of a full screen sidebar."),t()(),e(45,"tr")(46,"td"),i(47,"p-sidebar-active"),t(),e(48,"td"),i(49,"Container element when sidebar is visible."),t()(),e(50,"tr")(51,"td"),i(52,"p-sidebar-close"),t(),e(53,"td"),i(54,"Close anchor element."),t()(),e(55,"tr")(56,"td"),i(57,"p-sidebar-sm"),t(),e(58,"td"),i(59,"Small sized sidebar."),t()(),e(60,"tr")(61,"td"),i(62,"p-sidebar-md"),t(),e(63,"td"),i(64,"Medium sized sidebar."),t()(),e(65,"tr")(66,"td"),i(67,"p-sidebar-lg"),t(),e(68,"td"),i(69,"Large sized sidebar."),t()(),e(70,"tr")(71,"td"),i(72,"p-sidebar-mask"),t(),e(73,"td"),i(74,"Modal layer of the sidebar."),t()()()()()),n&2&&(d(3),c("routerLink",A(1,ye)))},dependencies:[N,h],encapsulation:2});let a=r;return a})();var le=(()=>{let r=class r{constructor(){this.sidebarVisible1=!1,this.sidebarVisible2=!1,this.sidebarVisible3=!1,this.sidebarVisible4=!1,this.code={basic:`<p-sidebar [(visible)]="sidebarVisible1" position="left">
    <h3>Left Sidebar</h3>
</p-sidebar>

<p-sidebar [(visible)]="sidebarVisible2" position="right">
    <h3>Right Sidebar</h3>
</p-sidebar>

<p-sidebar [(visible)]="sidebarVisible3" position="top">
    <h3>Top Sidebar</h3>
</p-sidebar>

<p-sidebar [(visible)]="sidebarVisible4" position="bottom">
    <h3>Bottom Sidebar</h3>
</p-sidebar>

<p-button type="button" class="mr-2" (click)="sidebarVisible1 = true" icon="pi pi-arrow-right"></p-button>
<p-button type="button" class="mr-2" (click)="sidebarVisible2 = true" icon="pi pi-arrow-left"></p-button>
<p-button type="button" class="mr-2" (click)="sidebarVisible3 = true" icon="pi pi-arrow-down"></p-button>
<p-button type="button" class="mr-2" (click)="sidebarVisible4 = true" icon="pi pi-arrow-up"></p-button>`,html:`
<div class="card flex flex-wrap justify-content-center gap-2">
    <p-sidebar [(visible)]="sidebarVisible1" position="left">
        <h3>Left Sidebar</h3>
    </p-sidebar>

    <p-sidebar [(visible)]="sidebarVisible2" position="right">
        <h3>Right Sidebar</h3>
    </p-sidebar>

    <p-sidebar [(visible)]="sidebarVisible3" position="top">
        <h3>Top Sidebar</h3>
    </p-sidebar>

    <p-sidebar [(visible)]="sidebarVisible4" position="bottom">
        <h3>Bottom Sidebar</h3>
    </p-sidebar>

    <p-button type="button" class="mr-2" (click)="sidebarVisible1 = true" icon="pi pi-arrow-right"></p-button>
    <p-button type="button" class="mr-2" (click)="sidebarVisible2 = true" icon="pi pi-arrow-left"></p-button>
    <p-button type="button" class="mr-2" (click)="sidebarVisible3 = true" icon="pi pi-arrow-down"></p-button>
    <p-button type="button" class="mr-2" (click)="sidebarVisible4 = true" icon="pi pi-arrow-up"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-position-demo',
    templateUrl: './sidebar-position-demo.html'
})
export class SidebarPositionDemo {
    sidebarVisible1: boolean = false;
    
    sidebarVisible2: boolean = false;
    
    sidebarVisible3: boolean = false;
    
    sidebarVisible4: boolean = false;
}`}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["position-doc"]],decls:36,vars:5,consts:[[1,"card","flex","flex-wrap","justify-content-center","gap-2"],["position","left",3,"visibleChange","visible"],["position","right",3,"visibleChange","visible"],["position","top",3,"visibleChange","visible"],["position","bottom",3,"visibleChange","visible"],["type","button","icon","pi pi-arrow-right",1,"mr-2",3,"click"],["type","button","icon","pi pi-arrow-left",1,"mr-2",3,"click"],["type","button","icon","pi pi-arrow-down",1,"mr-2",3,"click"],["type","button","icon","pi pi-arrow-up",1,"mr-2",3,"click"],["selector","sidebar-position-demo",3,"code"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sidebar location is configured with the "),e(3,"i"),i(4,"position"),t(),i(5," property that can take "),e(6,"i"),i(7,"left"),t(),i(8,", "),e(9,"i"),i(10,"right"),t(),i(11,", "),e(12,"i"),i(13,"top"),t(),i(14," and "),e(15,"i"),i(16,"bottom"),t(),i(17," as a value."),t()(),e(18,"div",0)(19,"p-sidebar",1),g("visibleChange",function(s){return x(o.sidebarVisible1,s)||(o.sidebarVisible1=s),s}),e(20,"h3"),i(21,"Left Sidebar"),t()(),e(22,"p-sidebar",2),g("visibleChange",function(s){return x(o.sidebarVisible2,s)||(o.sidebarVisible2=s),s}),e(23,"h3"),i(24,"Right Sidebar"),t()(),e(25,"p-sidebar",3),g("visibleChange",function(s){return x(o.sidebarVisible3,s)||(o.sidebarVisible3=s),s}),e(26,"h3"),i(27,"Top Sidebar"),t()(),e(28,"p-sidebar",4),g("visibleChange",function(s){return x(o.sidebarVisible4,s)||(o.sidebarVisible4=s),s}),e(29,"h3"),i(30,"Bottom Sidebar"),t()(),e(31,"p-button",5),b("click",function(){return o.sidebarVisible1=!0}),t(),e(32,"p-button",6),b("click",function(){return o.sidebarVisible2=!0}),t(),e(33,"p-button",7),b("click",function(){return o.sidebarVisible3=!0}),t(),e(34,"p-button",8),b("click",function(){return o.sidebarVisible4=!0}),t()(),l(35,"app-code",9)),n&2&&(d(19),v("visible",o.sidebarVisible1),d(3),v("visible",o.sidebarVisible2),d(3),v("visible",o.sidebarVisible3),d(3),v("visible",o.sidebarVisible4),d(7),c("code",o.code))},dependencies:[f,S,y,h],encapsulation:2});let a=r;return a})();var se=(()=>{let r=class r{constructor(){this.sidebarVisible=!1,this.code={basic:`<p-sidebar [(visible)]="sidebarVisible" [fullScreen]="true">
    <h3>Full Screen Sidebar</h3>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-th-large"></p-button>`,html:`
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible" [fullScreen]="true">
        <h3>Full Screen Sidebar</h3>
    </p-sidebar>
    <p-button (click)="sidebarVisible = true" icon="pi pi-th-large"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-full-screen-demo',
    templateUrl: './sidebar-full-screen-demo.html'
})
export class SidebarFullScreenDemo {
    sidebarVisible: boolean = false;
}`}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["full-screen-doc"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"visibleChange","visible","fullScreen"],["icon","pi pi-th-large",3,"click"],["selector","sidebar-full-screen-demo",3,"code"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sidebar can cover the whole page when "),e(3,"i"),i(4,"fullScreen"),t(),i(5," property is enabled."),t()(),e(6,"div",0)(7,"p-sidebar",1),g("visibleChange",function(s){return x(o.sidebarVisible,s)||(o.sidebarVisible=s),s}),e(8,"h3"),i(9,"Full Screen Sidebar"),t()(),e(10,"p-button",2),b("click",function(){return o.sidebarVisible=!0}),t()(),l(11,"app-code",3)),n&2&&(d(7),v("visible",o.sidebarVisible),c("fullScreen",!0),d(4),c("code",o.code))},dependencies:[f,S,y,h],encapsulation:2});let a=r;return a})();var pe=(()=>{let r=class r{constructor(){this.sidebarVisible=!1,this.code={basic:`<p-sidebar [(visible)]="sidebarVisible" styleClass="w-30rem">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>`,html:`
<div class="card flex justify-content-center">
    <p-sidebar [(visible)]="sidebarVisible" styleClass="w-30rem">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </p-sidebar>
    <p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-size-demo',
    templateUrl: './sidebar-size-demo.html'
})
export class SidebarSizeDemo {
    sidebarVisible: boolean = false;
}`}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["size-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-content-center"],["styleClass","w-30rem",3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["selector","sidebar-size-demo",3,"code"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sidebar dimension can be defined with "),e(3,"i"),i(4,"style"),t(),i(5," or "),e(6,"i"),i(7,"styleClass"),t(),i(8," properties which can also be responsive when used with a CSS utility library like PrimeFlex."),t()(),e(9,"div",0)(10,"p-sidebar",1),g("visibleChange",function(s){return x(o.sidebarVisible,s)||(o.sidebarVisible=s),s}),e(11,"p"),i(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),t()(),e(13,"p-button",2),b("click",function(){return o.sidebarVisible=!0}),t()(),l(14,"app-code",3)),n&2&&(d(10),v("visible",o.sidebarVisible),d(4),c("code",o.code))},dependencies:[f,S,y,h],encapsulation:2});let a=r;return a})();var Se=["sidebarRef"];function Le(a,r){if(a&1){let fe=B();e(0,"div",6)(1,"div",7)(2,"span",8),j(),e(3,"svg",9),l(4,"path",10),e(5,"mask",11),l(6,"path",12),t(),e(7,"g",13),l(8,"path",14),t(),l(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21)(16,"path",22)(17,"path",23)(18,"path",24),t(),W(),e(19,"span",25),i(20,"Your Logo"),t()(),e(21,"span")(22,"p-button",26),b("click",function(n){M(fe);let o=q();return D(o.closeCallback(n))}),t()()(),e(23,"div",27)(24,"ul",28)(25,"li")(26,"div",29)(27,"span",30),i(28,"FAVORITES"),t(),l(29,"i",31),t(),e(30,"ul",32)(31,"li")(32,"a",33),l(33,"i",34),e(34,"span",30),i(35,"Dashboard"),t()()(),e(36,"li")(37,"a",33),l(38,"i",35),e(39,"span",30),i(40,"Bookmarks"),t()()(),e(41,"li")(42,"a",36),l(43,"i",37),e(44,"span",30),i(45,"Reports"),t(),l(46,"i",38),t(),e(47,"ul",39)(48,"li")(49,"a",36),l(50,"i",37),e(51,"span",30),i(52,"Revenue"),t(),l(53,"i",38),t(),e(54,"ul",39)(55,"li")(56,"a",33),l(57,"i",40),e(58,"span",30),i(59,"View"),t()()(),e(60,"li")(61,"a",33),l(62,"i",41),e(63,"span",30),i(64,"Search"),t()()()()(),e(65,"li")(66,"a",33),l(67,"i",37),e(68,"span",30),i(69,"Expenses"),t()()()()(),e(70,"li")(71,"a",33),l(72,"i",42),e(73,"span",30),i(74,"Team"),t()()(),e(75,"li")(76,"a",33),l(77,"i",43),e(78,"span",30),i(79,"Messages"),t(),e(80,"span",44),i(81,"3"),t()()(),e(82,"li")(83,"a",33),l(84,"i",45),e(85,"span",30),i(86,"Calendar"),t()()(),e(87,"li")(88,"a",33),l(89,"i",46),e(90,"span",30),i(91,"Settings"),t()()()()()(),e(92,"ul",28)(93,"li")(94,"div",29)(95,"span",30),i(96,"APPLICATION"),t(),l(97,"i",31),t(),e(98,"ul",32)(99,"li")(100,"a",33),l(101,"i",47),e(102,"span",30),i(103,"Projects"),t()()(),e(104,"li")(105,"a",33),l(106,"i",48),e(107,"span",30),i(108,"Performance"),t()()(),e(109,"li")(110,"a",33),l(111,"i",46),e(112,"span",30),i(113,"Settings"),t()()()()()()(),e(114,"div",49),l(115,"hr",50),e(116,"a",51),l(117,"p-avatar",52),e(118,"span",53),i(119,"Amy Elsner"),t()()()()}}var de=(()=>{let r=class r{constructor(){this.sidebarVisible=!1,this.code={basic:`<p-sidebar #sidebarRef [(visible)]="sidebarVisible">
    <ng-template pTemplate="headless">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                <span class="inline-flex align-items-center gap-2">
                    <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                        <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color)" />
                        <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                            <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color-text)" />
                        </mask>
                        <g mask="url(#mask0_1_36)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--primary-color)" />
                        </g>
                        <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--primary-color-text)" />
                        <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--primary-color-text)" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                            fill="var(--primary-color-text)"
                        />
                        <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                        <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                            fill="var(--primary-color-text)"
                        />
                        <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--primary-color-text)" />
                        <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--primary-color-text)" />
                        <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--primary-color-text)" />
                        <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--primary-color-text)" />
                    </svg>
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-2rem w-2rem"></p-button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterClass="hidden"
                            enterActiveClass="slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="slideup"
                            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    pRipple
                                    pStyleClass="@next"
                                    enterClass="hidden"
                                    enterActiveClass="slidedown"
                                    leaveToClass="hidden"
                                    leaveActiveClass="slideup"
                                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a
                                            pRipple
                                            pStyleClass="@next"
                                            enterClass="hidden"
                                            enterActiveClass="slidedown"
                                            leaveToClass="hidden"
                                            leaveActiveClass="slideup"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterClass="hidden"
                            enterActiveClass="slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="slideup"
                            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a pRipple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </ng-template>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>`,html:`<div class="card flex justify-content-center">
<p-sidebar #sidebarRef [(visible)]="sidebarVisible">
    <ng-template pTemplate="headless">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                <span class="inline-flex align-items-center gap-2">
                    <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                        <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color)" />
                        <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                            <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color-text)" />
                        </mask>
                        <g mask="url(#mask0_1_36)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--primary-color)" />
                        </g>
                        <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--primary-color-text)" />
                        <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--primary-color-text)" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                            fill="var(--primary-color-text)"
                        />
                        <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                        <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                            fill="var(--primary-color-text)"
                        />
                        <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--primary-color-text)" />
                        <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--primary-color-text)" />
                        <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--primary-color-text)" />
                        <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--primary-color-text)" />
                    </svg>
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-2rem w-2rem"></p-button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterClass="hidden"
                            enterActiveClass="slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="slideup"
                            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    pRipple
                                    pStyleClass="@next"
                                    enterClass="hidden"
                                    enterActiveClass="slidedown"
                                    leaveToClass="hidden"
                                    leaveActiveClass="slideup"
                                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a
                                            pRipple
                                            pStyleClass="@next"
                                            enterClass="hidden"
                                            enterActiveClass="slidedown"
                                            leaveToClass="hidden"
                                            leaveActiveClass="slideup"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterClass="hidden"
                            enterActiveClass="slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="slideup"
                            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a pRipple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </ng-template>
</p-sidebar>
<p-button (click)="sidebarVisible = true" icon="pi pi-arrow-right"></p-button>
</div>`,typescript:`
import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
    selector: 'sidebar-headless-demo',
    templateUrl: './sidebar-headless-demo.html'
})
export class SidebarHeadlessDemo {
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}`}}closeCallback(p){this.sidebarRef.close(p)}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["headless-doc"]],viewQuery:function(n,o){if(n&1&&I(Se,5),n&2){let m;U(m=z())&&(o.sidebarRef=m.first)}},decls:11,vars:2,consts:[["sidebarRef",""],[1,"card","flex","justify-content-center"],[3,"visibleChange","visible"],["pTemplate","headless"],["icon","pi pi-arrow-right",3,"click"],["selector","sidebar-headless-demo",3,"code"],[1,"flex","flex-column","h-full"],[1,"flex","align-items-center","justify-content-between","px-4","pt-3","flex-shrink-0"],[1,"inline-flex","align-items-center","gap-2"],["width","33","height","35","viewBox","0 0 33 35","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--primary-color)"],["id","mask0_1_36","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--primary-color-text)"],["mask","url(#mask0_1_36)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--primary-color-text)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--primary-color-text)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--primary-color-text)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--primary-color-text)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--primary-color-text)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--primary-color-text)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--primary-color-text)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--primary-color-text)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--primary-color-text)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--primary-color-text)"],[1,"font-semibold","text-2xl","text-primary"],["type","button","icon","pi pi-times","rounded","true","outlined","true","styleClass","h-2rem w-2rem",3,"click"],[1,"overflow-y-auto"],[1,"list-none","p-3","m-0"],["pRipple","","pStyleClass","@next","enterClass","hidden","enterActiveClass","slidedown","leaveToClass","hidden","leaveActiveClass","slideup",1,"p-3","flex","align-items-center","justify-content-between","text-600","cursor-pointer","p-ripple"],[1,"font-medium"],[1,"pi","pi-chevron-down"],[1,"list-none","p-0","m-0","overflow-hidden"],["pRipple","",1,"flex","align-items-center","cursor-pointer","p-3","border-round","text-700","hover:surface-100","transition-duration-150","transition-colors","p-ripple"],[1,"pi","pi-home","mr-2"],[1,"pi","pi-bookmark","mr-2"],["pRipple","","pStyleClass","@next","enterClass","hidden","enterActiveClass","slidedown","leaveToClass","hidden","leaveActiveClass","slideup",1,"flex","align-items-center","cursor-pointer","p-3","border-round","text-700","hover:surface-100","transition-duration-150","transition-colors","p-ripple"],[1,"pi","pi-chart-line","mr-2"],[1,"pi","pi-chevron-down","ml-auto"],[1,"list-none","py-0","pl-3","pr-0","m-0","hidden","overflow-y-hidden","transition-all","transition-duration-400","transition-ease-in-out"],[1,"pi","pi-table","mr-2"],[1,"pi","pi-search","mr-2"],[1,"pi","pi-users","mr-2"],[1,"pi","pi-comments","mr-2"],[1,"inline-flex","align-items-center","justify-content-center","ml-auto","bg-primary","border-circle",2,"min-width","1.5rem","height","1.5rem"],[1,"pi","pi-calendar","mr-2"],[1,"pi","pi-cog","mr-2"],[1,"pi","pi-folder","mr-2"],[1,"pi","pi-chart-bar","mr-2"],[1,"mt-auto"],[1,"mb-3","mx-3","border-top-1","border-none","surface-border"],["pRipple","",1,"m-3","flex","align-items-center","cursor-pointer","p-3","gap-2","border-round","text-700","hover:surface-100","transition-duration-150","transition-colors","p-ripple"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"]],template:function(n,o){if(n&1){let m=B();e(0,"app-docsectiontext")(1,"p")(2,"i"),i(3,"Headless"),t(),i(4," mode allows you to customize the entire user interface instead of the default elements."),t()(),e(5,"div",1)(6,"p-sidebar",2,0),g("visibleChange",function(P){return M(m),x(o.sidebarVisible,P)||(o.sidebarVisible=P),D(P)}),R(8,Le,120,0,"ng-template",3),t(),e(9,"p-button",4),b("click",function(){return M(m),D(o.sidebarVisible=!0)}),t()(),l(10,"app-code",5)}n&2&&(d(6),v("visible",o.sidebarVisible),d(4),c("code",o.code))},dependencies:[f,S,Z,y,h,ie,Y,K],encapsulation:2});let a=r;return a})();var me=(()=>{let r=class r{constructor(){this.code={html:`<p-button 
    icon="pi pi-arrow-right" 
    (click)="sidebarVisible = true" 
    aria-controls="{{sidebarVisible ? 'sidebar' : null}}" 
    aria-expanded="{{sidebarVisible ? true : false}}"
></p-button>
<p-sidebar 
    [(visible)]="sidebarVisible" 
    id="sidebar"
    (onHide)="sidebarVisible = false"
    role="region"
>
    content
</p-sidebar>`}}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["accessibility-doc"]],decls:86,vars:2,consts:[[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){n&1&&(e(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),t(),e(3,"p"),i(4," Sidebar component uses "),e(5,"i"),i(6,"complementary"),t(),i(7," role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like "),e(8,"i"),i(9,"aria-labelledby"),t(),i(10," can be added. In addition "),e(11,"i"),i(12,"aria-modal"),t(),i(13," is added since focus is kept within the sidebar when opened. "),t(),e(14,"p"),i(15,"It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e(16,"i"),i(17,"tabIndex"),t(),i(18," would be necessary."),t(),e(19,"p"),i(20,"Trigger element also requires "),e(21,"i"),i(22,"aria-expanded"),t(),i(23," and "),e(24,"i"),i(25,"aria-controls"),t(),i(26," to be handled explicitly."),t(),l(27,"app-code",0),e(28,"h3"),i(29,"Overlay Keyboard Support"),t(),e(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),i(35,"Key"),t(),e(36,"th"),i(37,"Function"),t()()(),e(38,"tbody")(39,"tr")(40,"td")(41,"i"),i(42,"tab"),t()(),e(43,"td"),i(44,"Moves focus to the next the focusable element within the sidebar."),t()(),e(45,"tr")(46,"td")(47,"i"),i(48,"shift"),t(),i(49," + "),e(50,"i"),i(51,"tab"),t()(),e(52,"td"),i(53,"Moves focus to the previous the focusable element within the sidebar."),t()(),e(54,"tr")(55,"td")(56,"i"),i(57,"escape"),t()(),e(58,"td"),i(59,"Closes the dialog if "),e(60,"i"),i(61,"closeOnEscape"),t(),i(62," is true."),t()()()()(),e(63,"h3"),i(64,"Close Button Keyboard Support"),t(),e(65,"div",1)(66,"table",2)(67,"thead")(68,"tr")(69,"th"),i(70,"Key"),t(),e(71,"th"),i(72,"Function"),t()()(),e(73,"tbody")(74,"tr")(75,"td")(76,"i"),i(77,"enter"),t()(),e(78,"td"),i(79,"Closes the sidebar."),t()(),e(80,"tr")(81,"td")(82,"i"),i(83,"space"),t()(),e(84,"td"),i(85,"Closes the sidebar."),t()()()()()()),n&2&&(d(27),c("code",o.code)("hideToggleCode",!0))},dependencies:[f,h],encapsulation:2});let a=r;return a})();var ce=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=E({type:r}),r.\u0275inj=w({imports:[H,O,$,_,X,J,F,te,G,Q,F]});let a=r;return a})();var Ve=()=>["Sidebar"],ue=(()=>{let r=class r{constructor(){this.docs=[{id:"import",label:"Import",component:ae},{id:"basic",label:"Basic",component:re},{id:"position",label:"Position",component:le},{id:"fullscreen",label:"Full Screen",component:se},{id:"size",label:"Size",component:pe},{id:"template",label:"Template",component:ne},{id:"headless",label:"Headless",component:de},{id:"style",label:"Style",component:oe},{id:"accessibility",label:"Accessibility",component:me}]}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=u({type:r,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Sidebar Component","header","Sidebar","description","Sidebar is a panel component displayed as an overlay at the edges of the screen.",3,"docs","apiDocs"]],template:function(n,o){n&1&&l(0,"app-doc",0),n&2&&c("docs",o.docs)("apiDocs",A(2,Ve))},dependencies:[ee],encapsulation:2});let a=r;return a})();var be=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=E({type:r}),r.\u0275inj=w({imports:[_.forChild([{path:"",component:ue}]),_]});let a=r;return a})();var Di=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=E({type:r}),r.\u0275inj=w({imports:[H,be,ce]});let a=r;return a})();export{Di as SidebarDemoModule};
