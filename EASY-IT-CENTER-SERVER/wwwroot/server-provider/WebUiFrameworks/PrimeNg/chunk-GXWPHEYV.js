import{a as v,b as $}from"./chunk-X6SQGNMF.js";import"./chunk-5W5PG5VT.js";import"./chunk-CZYOEPZS.js";import{a as d,b as _,c as A}from"./chunk-AS5FXEGH.js";import{a as u,b as U}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as H,q as k,w as B,x as R,y as j}from"./chunk-UWMVDULA.js";import{o as N,t as I}from"./chunk-N5X6XDRN.js";import{Fc as L,Jb as t,Kb as O,Lb as F,Nc as C,Sa as r,Sb as y,V as h,da as s,ea as g,ib as E,kb as l,ob as D,rb as i,sb as n,tb as c,yb as T,zb as w}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var q=(()=>{let e=class e{constructor(){this.code={basic:'<p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>',html:`
<div class="card">
    <p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tab-menu-active-demo',
    templateUrl: './tab-menu-active-demo.html'
})
export class TabMenuActiveDemo implements OnInit {
    items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];

        this.activeItem = this.items[0];
    }
}`}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],this.activeItem=this.items[0]}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["active-doc"]],decls:9,vars:3,consts:[[1,"card"],[3,"model","activeItem"],["selector","tab-menu-active-demo",3,"code"]],template:function(m,a){m&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"By default item that matches the active route is highlighted, alternatively "),i(3,"i"),t(4,"activeItem"),n(),t(5," property can be used choose the initial active item."),n()(),i(6,"div",0),c(7,"p-tabMenu",1),n(),c(8,"app-code",2)),m&2&&(r(7),l("model",a.items)("activeItem",a.activeItem),r(),l("code",a.code))},dependencies:[u,v,d],encapsulation:2});let o=e;return o})();var K=(()=>{let e=class e{constructor(){this.code={basic:'<p-tabMenu [model]="items"></p-tabMenu>',html:`
<div class="card">
    <p-tabMenu [model]="items"></p-tabMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tab-menu-basic-demo',
    templateUrl: './tab-menu-basic-demo.html'
})
export class TabMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}]}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"model"],["selector","tab-menu-basic-demo",3,"code"]],template:function(m,a){m&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"TabMenu requires a collection of menuitems as its model."),n()(),i(3,"div",0),c(4,"p-tabMenu",1),n(),c(5,"app-code",2)),m&2&&(r(4),l("model",a.items),r(),l("code",a.code))},dependencies:[u,v,d],encapsulation:2});let o=e;return o})();var P=(()=>{let e=class e{constructor(){this.code={basic:`<button type="button" pButton pRipple label="Activate Last" (click)="activateLast()" class="mb-3"></button>
<p-tabMenu [model]="items" [activeItem]="activeItem" (activeItemChange)="onActiveItemChange($event)"></p-tabMenu>`,html:`
<div class="card">
    <button type="button" pButton pRipple label="Activate Last" (click)="activateLast()" class="mb-3"></button>
    <p-tabMenu [model]="items" [activeItem]="activeItem" (activeItemChange)="onActiveItemChange($event)"></p-tabMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tab-menu-controlled-demo',
    templateUrl: './tab-menu-controlled-demo.html'
})
export class TabMenuControlledDemo implements OnInit {
    items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];

        this.activeItem = this.items[0];
    }

    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }

    activateLast() {
        this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabMenuDemo } from './tabmenudemo';

@NgModule({
    imports: [CommonModule, TabMenuModule, ButtonModule, RippleModule],
    declarations: [TabMenuDemo]
})
export class TabMenuDemoModule {}`}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],this.activeItem=this.items[0]}onActiveItemChange(p){this.activeItem=p}activateLast(){this.activeItem=this.items[this.items.length-1]}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["controlled-doc"]],decls:13,vars:3,consts:[[1,"card"],["type","button","pButton","","pRipple","","label","Activate Last",1,"mb-3",3,"click"],[3,"activeItemChange","model","activeItem"],["selector","tab-menu-controlled-demo",3,"code"]],template:function(m,a){m&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"For controlled mode, use "),i(3,"i"),t(4,"activeItem"),n(),t(5," property along with "),i(6,"i"),t(7,"activeItemChange"),n(),t(8," event are needed to manage the active item."),n()(),i(9,"div",0)(10,"button",1),T("click",function(){return a.activateLast()}),n(),i(11,"p-tabMenu",2),T("activeItemChange",function(ee){return a.onActiveItemChange(ee)}),n()(),c(12,"app-code",3)),m&2&&(r(11),l("model",a.items)("activeItem",a.activeItem),r(),l("code",a.code))},dependencies:[u,v,j,B,d],encapsulation:2});let o=e;return o})();var z=(()=>{let e=class e{constructor(){this.code={typescript:"import { TabMenuModule } from 'primeng/tabmenu';"}}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(m,a){m&1&&c(0,"app-code",0),m&2&&l("code",a.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let o=e;return o})();var te=()=>["/theming"],G=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["style-doc"]],decls:45,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(m,a){m&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),t(4,"theming"),n(),t(5," page."),n()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),n(),i(12,"th"),t(13,"Element"),n()()(),i(14,"tbody")(15,"tr")(16,"td"),t(17,"p-tabmenu"),n(),i(18,"td"),t(19,"Container element."),n()(),i(20,"tr")(21,"td"),t(22,"p-tabmenu-nav"),n(),i(23,"td"),t(24,"List element of headers."),n()(),i(25,"tr")(26,"td"),t(27,"p-tabmenuitem"),n(),i(28,"td"),t(29,"Menuitem element."),n()(),i(30,"tr")(31,"td"),t(32,"p-menuitem-link"),n(),i(33,"td"),t(34,"Link inside a menuitem."),n()(),i(35,"tr")(36,"td"),t(37,"p-menuitem-text"),n(),i(38,"td"),t(39,"Label of a menuitem."),n()(),i(40,"tr")(41,"td"),t(42,"p-menuitem-icon"),n(),i(43,"td"),t(44,"Icon of a menuitem."),n()()()()()),m&2&&(r(3),l("routerLink",y(1,te)))},dependencies:[N,d],encapsulation:2});let o=e;return o})();var J=(()=>{let e=class e{constructor(){this.code={basic:'<p-tabMenu [scrollable]="true" [model]="items" [activeItem]="activeItem"></p-tabMenu>',html:`
<div class="card">
    <p-tabMenu [scrollable]="true" [model]="items" [activeItem]="activeItem"></p-tabMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tab-menu-scrollable-demo',
    templateUrl: './tab-menu-scrollable-demo.html'
})
export class TabMenuScrollableDemo implements OnInit {
    items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = Array.from({ length: 50 }, (_, i) => ({ label: \`Tab \${i + 1}\`}));
        this.activeItem = this.items[0];
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabMenuDemo } from './tabmenudemo';

@NgModule({
    imports: [CommonModule, TabMenuModule],
    declarations: [TabMenuDemo]
})
export class TabMenuDemoModule {}`}}ngOnInit(){this.items=Array.from({length:50},(p,m)=>({label:`Tab ${m+1}`})),this.activeItem=this.items[0]}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["scrollable-doc"]],decls:12,vars:4,consts:[[1,"card"],[3,"scrollable","model","activeItem"],["selector","tab-menu-scrollable-demo",3,"code"]],template:function(m,a){m&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Setting "),i(3,"i"),t(4,"scrollable"),n(),t(5," property to "),i(6,"i"),t(7,"true"),n(),t(8," enables scrolling if content overflows."),n()(),i(9,"div",0),c(10,"p-tabMenu",1),n(),c(11,"app-code",2)),m&2&&(r(10),l("scrollable",!0)("model",a.items)("activeItem",a.activeItem),r(),l("code",a.code))},dependencies:[u,v,d],encapsulation:2});let o=e;return o})();function ie(o,e){if(o&1&&(i(0,"span"),t(1),n()),o&2){let b=w().$implicit;D(b.shortcutClass),r(),O(b.shortcut)}}function ne(o,e){if(o&1&&c(0,"p-badge",7),o&2){let b=w().$implicit;l("value",b.badge)("severity",b.badgeSeverity)}}function oe(o,e){if(o&1&&(i(0,"a",4)(1,"div"),c(2,"span"),i(3,"span"),t(4),n()(),i(5,"div"),E(6,ie,2,3,"span",5)(7,ne,1,2,"p-badge",6),n()()),o&2){let b=e.$implicit;r(2),D(b.icon),r(2),F(" ",b.label,""),r(2),l("ngIf",b.shortcut),r(),l("ngIf",b.badge)}}var Q=(()=>{let e=class e{constructor(){this.code={basic:`<p-tabMenu [model]="items" [activeItem]="activeItem">
    <ng-template pTemplate="item" let-item>
        <a class="p-menuitem-link flex justify-content-between align-items-center p-3">
            <div>
                <span [class]="item.icon"></span>
                <span> {{ item.label }}</span>
            </div>
            <div>
                <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{ item.shortcut }}</span>
                <p-badge *ngIf="item.badge" [value]="item.badge" [severity]="item.badgeSeverity"></p-badge>
            </div>
        </a>
    </ng-template>
</p-tabMenu>`,html:`
<div class="card">
    <p-tabMenu [model]="items" [activeItem]="activeItem">
        <ng-template pTemplate="item" let-item>
            <a class="p-menuitem-link flex justify-content-between align-items-center p-3">
                <div>
                    <span [class]="item.icon"></span>
                    <span> {{ item.label }}</span>
                </div>
                <div>
                    <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{ item.shortcut }}</span>
                    <p-badge *ngIf="item.badge" [value]="item.badge" [severity]="item.badgeSeverity"></p-badge>
                </div>
            </a>
        </ng-template>
    </p-tabMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tab-menu-template-demo',
    templateUrl: './tab-menu-template-demo.html'
})
export class TabMenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];

        this.activeItem = this.items[0];
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabMenuDemo } from './tabmenudemo';

@NgModule({
    imports: [CommonModule, TabMenuModule],
    declarations: [TabMenuDemo]
})
export class TabMenuDemoModule {}`}}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],this.activeItem=this.items[0]}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["tab-menu-template-demo"]],decls:10,vars:3,consts:[[1,"card"],[3,"model","activeItem"],["pTemplate","item"],["selector","tab-menu-template-demo",3,"code"],[1,"p-menuitem-link","flex","justify-content-between","align-items-center","p-3"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[3,"value","severity"]],template:function(m,a){m&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"TabMenu supports templating via the "),i(3,"i"),t(4,"item"),n(),t(5," template which gets the menuitem instance and the index."),n()(),i(6,"div",0)(7,"p-tabMenu",1),E(8,oe,8,5,"ng-template",2),n()(),c(9,"app-code",3)),m&2&&(r(7),l("model",a.items)("activeItem",a.activeItem),r(2),l("code",a.code))},dependencies:[L,u,v,k,d],encapsulation:2});let o=e;return o})();var V=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["accessibility-doc"]],decls:80,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(m,a){m&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),i(4,"p"),t(5," TabMenu component uses the "),i(6,"i"),t(7,"menubar"),n(),t(8," role and the value to describe the menu can either be provided with "),i(9,"i"),t(10,"aria-labelledby"),n(),t(11," or "),i(12,"i"),t(13,"aria-label"),n(),t(14," props. Each list item has a "),i(15,"i"),t(16,"presentation"),n(),t(17," role whereas anchor elements have a "),i(18,"i"),t(19,"menuitem"),n(),t(20," role with "),i(21,"i"),t(22,"aria-label"),n(),t(23," referring to the label of the item and "),i(24,"i"),t(25,"aria-disabled"),n(),t(26," defined if the item is disabled. "),n(),i(27,"h3"),t(28,"Keyboard Support"),n(),i(29,"div",0)(30,"table",1)(31,"thead")(32,"tr")(33,"th"),t(34,"Key"),n(),i(35,"th"),t(36,"Function"),n()()(),i(37,"tbody")(38,"tr")(39,"td")(40,"i"),t(41,"tab"),n()(),i(42,"td"),t(43,"Adds focus to the active tab header when focus moves in to the component, if there is already a focused tab header moves the focus out of the component based on the page tab sequence."),n()(),i(44,"tr")(45,"td")(46,"i"),t(47,"enter"),n()(),i(48,"td"),t(49,"Activates the focused tab header."),n()(),i(50,"tr")(51,"td")(52,"i"),t(53,"space"),n()(),i(54,"td"),t(55,"Activates the focused tab header."),n()(),i(56,"tr")(57,"td")(58,"i"),t(59,"right arrow"),n()(),i(60,"td"),t(61,"Moves focus to the next header."),n()(),i(62,"tr")(63,"td")(64,"i"),t(65,"left arrow"),n()(),i(66,"td"),t(67,"Moves focus to the previous header."),n()(),i(68,"tr")(69,"td")(70,"i"),t(71,"home"),n()(),i(72,"td"),t(73,"Moves focus to the first header."),n()(),i(74,"tr")(75,"td")(76,"i"),t(77,"end"),n()(),i(78,"td"),t(79,"Moves focus to the last header."),n()()()()()()())},dependencies:[d],encapsulation:2});let o=e;return o})();var W=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[C,U,I,$,H,R,A,A]});let o=e;return o})();var me=()=>["TabMenu","MenuItem"],X=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:z},{id:"basic",label:"Basic",component:K},{id:"active",label:"Active Item",component:q},{id:"controlled",label:"Controlled",component:P},{id:"scrollable",label:"Scrollable",component:J},{id:"template",label:"Template",component:Q},{id:"style",label:"Style",component:G},{id:"accessibility",label:"Accessibility",component:V}]}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular TabMenu Component","header","TabMenu","description","TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.",3,"docs","apiDocs"]],template:function(m,a){m&1&&c(0,"app-doc",0),m&2&&l("docs",a.docs)("apiDocs",y(2,me))},dependencies:[_],encapsulation:2});let o=e;return o})();var Y=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[I.forChild([{path:"",component:X}]),I]});let o=e;return o})();var lt=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[C,Y,W]});let o=e;return o})();export{lt as TabMenuDemoModule};
