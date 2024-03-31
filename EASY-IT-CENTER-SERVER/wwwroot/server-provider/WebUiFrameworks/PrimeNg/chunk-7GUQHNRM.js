import{a as M,b as Z}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as v,b as X}from"./chunk-ATLOMAZF.js";import{b as Y}from"./chunk-A5TA6W7J.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import{b as K,c as z}from"./chunk-CJAHOBZA.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as W,c as N}from"./chunk-AS5FXEGH.js";import{a as f,b as Q}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as J,k as g,q as V,y as H}from"./chunk-UWMVDULA.js";import{o as O,t as k}from"./chunk-N5X6XDRN.js";import{Fc as G,Ib as q,Jb as e,Kb as L,Lb as F,Na as P,Nc as _,Qb as D,Sa as r,Sb as A,Ta as C,V as y,da as d,ea as S,ib as E,jb as j,kb as m,ma as U,na as B,ob as w,rb as i,sb as n,tb as l,xb as R,yb as $,zb as x}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ee=(()=>{let t=class t{constructor(){this.code={basic:'<p-menu [model]="items"></p-menu>',html:`
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menu-basic-demo',
    templateUrl: './menu-basic-demo.html'
})
export class MenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Delete",icon:"pi pi-fw pi-trash"}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-basic-demo",3,"code"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Menu requires a collection of menuitems as its "),i(3,"i"),e(4,"model"),n(),e(5,"."),n()(),i(6,"div",0),l(7,"p-menu",1),n(),l(8,"app-code",2)),a&2&&(r(7),m("model",c.items),r(),m("code",c.code))},dependencies:[f,v,u],encapsulation:2});let o=t;return o})();function xe(o,t){if(o&1&&(i(0,"span"),e(1),n()),o&2){let s=x(2).$implicit;w(s.shortcutClass),r(),L(s.shortcut)}}function be(o,t){if(o&1&&l(0,"p-badge",9),o&2){let s=x(2).$implicit;m("value",s.badge)("severity",s.badgeSeverity)}}function ye(o,t){if(o&1&&(i(0,"a",6)(1,"div"),l(2,"span"),i(3,"span"),e(4),n()(),i(5,"div"),E(6,xe,2,3,"span",7)(7,be,1,2,"p-badge",8),n()()),o&2){let s=x().$implicit;m("routerLink",s.routerLink),j("tabindex",-1),r(2),w(s.icon),r(2),F(" ",s.label,""),r(2),m("ngIf",s.shortcut),r(),m("ngIf",s.badge)}}function Se(o,t){if(o&1&&(i(0,"span"),e(1),n()),o&2){let s=x(2).$implicit;w(s.shortcutClass),r(),L(s.shortcut)}}function Ce(o,t){if(o&1&&l(0,"p-badge",9),o&2){let s=x(2).$implicit;m("value",s.badge)("severity",s.badgeSeverity)}}function De(o,t){if(o&1&&(i(0,"a",10)(1,"div"),l(2,"span"),i(3,"span"),e(4),n()(),i(5,"div"),E(6,Se,2,3,"span",7)(7,Ce,1,2,"p-badge",8),n()()),o&2){let s=x().$implicit;j("tabindex",-1)("href",s.url,P)("target","blank"),r(2),w(s.icon),r(2),F(" ",s.label,""),r(2),m("ngIf",s.shortcut),r(),m("ngIf",s.badge)}}function Me(o,t){if(o&1&&E(0,ye,8,7,"a",4)(1,De,8,8,"a",5),o&2){let s=t.$implicit;m("ngIf",!(s!=null&&s.url)),r(),m("ngIf",s==null?null:s.url)}}var te=(()=>{let t=class t{constructor(){this.code={basic:`<p-menu [model]="items">
    <ng-template pTemplate="item" let-item>
        <a *ngIf="!item?.url" [attr.tabindex]="-1" class="p-menuitem-link flex justify-content-between align-items-center p-3" [routerLink]="item.routerLink">
            <div>
                <span [class]="item.icon"></span>
                <span> {{ item.label }}</span>
            </div>
            <div>
                <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{ item.shortcut }}</span>
                <p-badge *ngIf="item.badge" [value]="item.badge" [severity]="item.badgeSeverity"></p-badge>
            </div>
        </a>
        <a *ngIf="item?.url" [attr.tabindex]="-1" class="p-menuitem-link flex justify-content-between align-items-center p-3" [attr.href]="item.url">
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
</p-menu>`,html:`
<div class="card flex justify-content-center">
    <p-menu [model]="items">
        <ng-template pTemplate="item" let-item>
            <a *ngIf="!item?.url" [attr.tabindex]="-1" class="p-menuitem-link flex justify-content-between align-items-center p-3" [routerLink]="item.routerLink">
                <div>
                    <span [class]="item.icon"></span>
                    <span> {{ item.label }}</span>
                </div>
                <div>
                    <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{ item.shortcut }}</span>
                    <p-badge *ngIf="item.badge" [value]="item.badge" [severity]="item.badgeSeverity"></p-badge>
                </div>
            </a>
            <a *ngIf="item?.url" [attr.tabindex]="-1" class="p-menuitem-link flex justify-content-between align-items-center p-3" [attr.href]="item.url">
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
    </p-menu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menu-custom-content-demo',
    templateUrl: './menu-custom-content-demo.html'
})
export class MenuCustomContentDemo implements OnInit {
    items: MenuItem[] | undefined;
    
    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: '<span class="text-xl font-bold">Refresh</span>',
                        escape: false,
                        icon: 'pi pi-refresh',
                        iconClass: 'text-xl'
                    },
                    {
                        label: '<span class="text-xl font-bold">Delete</span>',
                        escape: false,
                        icon: 'pi pi-times',
                        iconClass: 'text-xl'
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Refresh",icon:"pi pi-refresh",shortcut:"\u2318+U",shortcutClass:"p-1 font-medium border-round text-sm surface-ground"},{label:"Delete",icon:"pi pi-times",shortcut:"\u2318+B",shortcutClass:"p-1 font-medium border-round text-sm surface-ground"}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",badge:"2",badgeSeverity:"success",url:"http://angular.io"},{label:"File Upload",icon:"pi pi-upload",routerLink:"/fileupload",badge:"2"}]}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["custom-content-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["pTemplate","item"],["selector","menu-custom-content-demo",3,"code"],["class","p-menuitem-link flex justify-content-between align-items-center p-3",3,"routerLink",4,"ngIf"],["class","p-menuitem-link flex justify-content-between align-items-center p-3",4,"ngIf"],[1,"p-menuitem-link","flex","justify-content-between","align-items-center","p-3",3,"routerLink"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[3,"value","severity"],[1,"p-menuitem-link","flex","justify-content-between","align-items-center","p-3"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Label of a menuitem both supports simple strings and html values as well. By default, html values are escaped, use "),i(3,"i"),e(4,"escape"),n(),e(5," property to allow html."),n()(),i(6,"div",0)(7,"p-menu",1),E(8,Me,2,2,"ng-template",2),n()(),l(9,"app-code",3)),a&2&&(r(7),m("model",c.items),r(2),m("code",c.code))},dependencies:[G,f,O,v,V,u,K],encapsulation:2});let o=t;return o})();var oe=(()=>{let t=class t{constructor(p){this.messageService=p,this.code={basic:`<p-toast></p-toast>
<p-menu [model]="items"></p-menu>`,html:`
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'menu-command-demo',
    templateUrl: './menu-command-demo.html',
    providers: [MessageService]
})
export class MenuCommandDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                }
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`}}ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}};t.\u0275fac=function(a){return new(a||t)(C(g))},t.\u0275cmp=d({type:t,selectors:[["command-doc"]],features:[D([g])],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-command-demo",3,"code"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The function to invoke when an item is clicked is defined using the "),i(3,"i"),e(4,"command"),n(),e(5," property."),n()(),i(6,"div",0),l(7,"p-toast")(8,"p-menu",1),n(),l(9,"app-code",2)),a&2&&(r(8),m("model",c.items),r(),m("code",c.code))},dependencies:[f,v,M,u],encapsulation:2});let o=t;return o})();var ae=(()=>{let t=class t{constructor(p){this.messageService=p,this.code={basic:`<p-toast></p-toast>
<p-menu [model]="items"></p-menu>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-menu [model]="items"></p-menu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'menu-group-demo',
    templateUrl: './menu-group-demo.html',
    providers: [MessageService]
})
export class MenuGroupDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.delete();
                        }
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}};t.\u0275fac=function(a){return new(a||t)(C(g))},t.\u0275cmp=d({type:t,selectors:[["menu-group-demo"]],features:[D([g])],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-group-demo",3,"code"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Menu supports one level of nesting by defining children with "),i(3,"i"),e(4,"items"),n(),e(5," property."),n()(),i(6,"div",0),l(7,"p-toast")(8,"p-menu",1),n(),l(9,"app-code",2)),a&2&&(r(8),m("model",c.items),r(),m("code",c.code))},dependencies:[f,v,M,u],encapsulation:2});let o=t;return o})();var me=(()=>{let t=class t{constructor(){this.code={typescript:"import { MenuModule } from 'primeng/menu';"}}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,c){a&1&&l(0,"app-code",0),a&2&&m("code",c.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let o=t;return o})();var re=(()=>{let t=class t{constructor(){this.code={basic:'<p-menu [model]="items"></p-menu>',html:`
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menu-navigation-demo',
    templateUrl: './menu-navigation-demo.html'
})
export class MenuNavigationDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},
                {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
                {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
            ]
        }];
    }
}`}}ngOnInit(){this.items=[{label:"File",items:[{label:"New",icon:"pi pi-plus",url:"https://primeng.org"},{label:"Open",icon:"pi pi-download",routerLink:["/menu"]},{label:"Recent Files",icon:"pi pi-download",routerLink:["/pagename"],queryParams:{recent:"true"}}]}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["navigation-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-navigation-demo",3,"code"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Navigation is specified using url property for external links and with "),i(3,"i"),e(4,"routerLink"),n(),e(5," for internal ones. If a menuitem has an active route, "),i(6,"i"),e(7,"p-menuitem-link-active"),n(),e(8," style class is added as an indicator. Active route link can be configured with "),i(9,"i"),e(10,"routerLinkActiveOptions"),n(),e(11," property of MenuItem API. "),n()(),i(12,"div",0),l(13,"p-menu",1),n(),l(14,"app-code",2)),a&2&&(r(13),m("model",c.items),r(),m("code",c.code))},dependencies:[f,v,u],encapsulation:2});let o=t;return o})();var se=(()=>{let t=class t{constructor(p){this.messageService=p,this.code={basic:`<p-toast></p-toast>
<p-menu #menu [model]="items" [popup]="true"></p-menu>
<button pButton type="button" (click)="menu.toggle($event)" icon="pi pi-bars" label="Show"></button>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-menu #menu [model]="items" [popup]="true"></p-menu>
    <button pButton type="button" (click)="menu.toggle($event)" icon="pi pi-bars" label="Show"></button>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'menu-popup-demo',
    templateUrl: './menu-popup-demo.html',
    providers: [MessageService]
})
export class MenuPopupDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.delete();
                        }
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}};t.\u0275fac=function(a){return new(a||t)(C(g))},t.\u0275cmp=d({type:t,selectors:[["popup-doc"]],features:[D([g])],decls:18,vars:3,consts:[["menu",""],[1,"card","flex","justify-content-center"],[3,"model","popup"],["pButton","","type","button","icon","pi pi-bars","label","Show",3,"click"],["selector","menu-popup-demo",3,"code"]],template:function(a,c){if(a&1){let fe=R();i(0,"app-docsectiontext")(1,"p"),e(2,"Popup mode is enabled by setting "),i(3,"i"),e(4,"popup"),n(),e(5," property to "),i(6,"i"),e(7,"true"),n(),e(8," and calling "),i(9,"i"),e(10,"toggle"),n(),e(11," method with an event of the target."),n()(),i(12,"div",1),l(13,"p-toast")(14,"p-menu",2,0),i(16,"button",3),$("click",function(ge){U(fe);let ve=q(15);return B(ve.toggle(ge))}),n()(),l(17,"app-code",4)}a&2&&(r(14),m("model",c.items)("popup",!0),r(3),m("code",c.code))},dependencies:[f,v,M,H,u],encapsulation:2});let o=t;return o})();var Ie=()=>["/theming"],pe=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["style-doc"]],decls:40,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),e(4,"theming"),n(),e(5," page."),n()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),n(),i(12,"th"),e(13,"Element"),n()()(),i(14,"tbody")(15,"tr")(16,"td"),e(17,"p-menu"),n(),i(18,"td"),e(19,"Container element."),n()(),i(20,"tr")(21,"td"),e(22,"p-menu-list"),n(),i(23,"td"),e(24,"List element."),n()(),i(25,"tr")(26,"td"),e(27,"p-menuitem"),n(),i(28,"td"),e(29,"Menuitem element."),n()(),i(30,"tr")(31,"td"),e(32,"p-menuitem-text"),n(),i(33,"td"),e(34,"Label of a menuitem."),n()(),i(35,"tr")(36,"td"),e(37,"p-menuitem-icon"),n(),i(38,"td"),e(39,"Icon of a menuitem."),n()()()()()),a&2&&(r(3),m("routerLink",A(1,Ie)))},dependencies:[O,u],encapsulation:2});let o=t;return o})();var le=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["accessibility-doc"]],decls:112,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,c){a&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),n(),i(4,"p"),e(5," Menu component uses the "),i(6,"i"),e(7,"menu"),n(),e(8," role and the value to describe the menu can either be provided with "),i(9,"i"),e(10,"aria-labelledby"),n(),e(11," or "),i(12,"i"),e(13,"aria-label"),n(),e(14," props. Each list item has a "),i(15,"i"),e(16,"presentation"),n(),e(17," role whereas anchor elements have a "),i(18,"i"),e(19,"menuitem"),n(),e(20," role with "),i(21,"i"),e(22,"aria-label"),n(),e(23," referring to the label of the item and "),i(24,"i"),e(25,"aria-disabled"),n(),e(26," defined if the item is disabled. A submenu within a Menu uses the "),i(27,"i"),e(28,"group"),n(),e(29," role with an "),i(30,"i"),e(31,"aria-labelledby"),n(),e(32," defined as the id of the submenu root menuitem label. "),n(),i(33,"p"),e(34,"In popup mode, the component implicitly manages the "),i(35,"i"),e(36,"aria-expanded"),n(),e(37,", "),i(38,"i"),e(39,"aria-haspopup"),n(),e(40," and "),i(41,"i"),e(42,"aria-controls"),n(),e(43," attributes of the target element to define the relation between the target and the popup."),n(),i(44,"h3"),e(45,"Keyboard Support"),n(),i(46,"div",0)(47,"table",1)(48,"thead")(49,"tr")(50,"th"),e(51,"Key"),n(),i(52,"th"),e(53,"Function"),n()()(),i(54,"tbody")(55,"tr")(56,"td")(57,"i"),e(58,"tab"),n()(),i(59,"td"),e(60,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),n()(),i(61,"tr")(62,"td")(63,"i"),e(64,"shift"),n(),e(65," + "),i(66,"i"),e(67,"tab"),n()(),i(68,"td"),e(69,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),n()(),i(70,"tr")(71,"td")(72,"i"),e(73,"enter"),n()(),i(74,"td"),e(75,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),n()(),i(76,"tr")(77,"td")(78,"i"),e(79,"space"),n()(),i(80,"td"),e(81,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),n()(),i(82,"tr")(83,"td")(84,"i"),e(85,"escape"),n()(),i(86,"td"),e(87,"If menu is in overlay mode, popup gets closes and focus moves to target."),n()(),i(88,"tr")(89,"td")(90,"i"),e(91,"down arrow"),n()(),i(92,"td"),e(93,"Moves focus to the next menuitem."),n()(),i(94,"tr")(95,"td")(96,"i"),e(97,"up arrow"),n()(),i(98,"td"),e(99,"Moves focus to the previous menuitem."),n()(),i(100,"tr")(101,"td")(102,"i"),e(103,"home"),n()(),i(104,"td"),e(105,"Moves focus to the first menuitem."),n()(),i(106,"tr")(107,"td")(108,"i"),e(109,"end"),n()(),i(110,"td"),e(111,"Moves focus to the last menuitem."),n()()()()()()())},dependencies:[u],encapsulation:2});let o=t;return o})();var Ee=()=>["Menu","MenuItem"],ce=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:me},{id:"basic",label:"Basic",component:ee},{id:"group",label:"Group",component:ae},{id:"popup",label:"Popup",component:se},{id:"custom",label:"Custom Content",component:te},{id:"navigation",label:"Navigation",component:re},{id:"command",label:"Command",component:oe},{id:"style",label:"Style",component:pe},{id:"accessibility",label:"Accessibility",component:le}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Menu Component","header","Menu","description","Menu is a navigation / command component that supports dynamic and static positioning.",3,"docs","apiDocs"]],template:function(a,c){a&1&&l(0,"app-doc",0),a&2&&m("docs",c.docs)("apiDocs",A(2,Ee))},dependencies:[W],encapsulation:2});let o=t;return o})();var de=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=S({type:t}),t.\u0275inj=y({imports:[_,Q,k,X,Z,J,Y,N,z,N]});let o=t;return o})();var ue=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=S({type:t}),t.\u0275inj=y({imports:[k.forChild([{path:"",component:ce}]),k]});let o=t;return o})();var Ut=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=S({type:t}),t.\u0275inj=y({imports:[_,ue,de]});let o=t;return o})();export{Ut as MenuDemoModule};
