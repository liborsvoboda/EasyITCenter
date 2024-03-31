import{a as b,b as Z}from"./chunk-LWXL4VWZ.js";import{a as X,b as Y}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import"./chunk-KL3QZRIM.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import{b as z,c as K}from"./chunk-CJAHOBZA.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as Q,c as U}from"./chunk-AS5FXEGH.js";import{a as f,b as J}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as H,k as O,q as A,y as G}from"./chunk-UWMVDULA.js";import{n as q,o as R,t as C}from"./chunk-N5X6XDRN.js";import{Fc as T,Ib as I,Jb as e,Kb as v,Na as N,Nc as k,Sa as m,Sb as _,Ta as D,V as S,da as d,dc as B,ea as y,ib as g,kb as r,ma as L,na as V,ob as M,rb as i,sb as n,tb as p,ub as j,vb as P,xb as $,yb as W,zb as x}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ee=(()=>{let t=class t{constructor(){this.code={basic:'<p-tieredMenu [model]="items"></p-tieredMenu>',html:`<div class="card flex justify-content-center">
    <p-tieredMenu [model]="items"></p-tieredMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tiered-menu-basic-demo',
    templateUrl: './tiered-menu-basic-demo.html'
})
export class TieredMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["selector","tiered-menu-basic-demo",3,"code"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"TieredMenu requires a collection of menuitems as its "),i(3,"i"),e(4,"model"),n(),e(5,"."),n()(),i(6,"div",0),p(7,"p-tieredMenu",1),n(),p(8,"app-code",2)),a&2&&(m(7),r("model",c.items),m(),r("code",c.code))},dependencies:[f,b,u],encapsulation:2});let o=t;return o})();var te=(()=>{let t=class t{constructor(){this.code={typescript:"import { TieredMenuModule } from 'primeng/tieredmenu';"}}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,c){a&1&&p(0,"app-code",0),a&2&&r("code",c.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let o=t;return o})();var ie=(()=>{let t=class t{constructor(){this.code={basic:`<button #btn type="button" pButton label="Toggle" (click)="menu.toggle($event)"></button>
<p-tieredMenu #menu [model]="items" [popup]="true"></p-tieredMenu>`,html:`<div class="card flex justify-content-center">
    <button #btn type="button" pButton label="Toggle" (click)="menu.toggle($event)"></button>
    <p-tieredMenu #menu [model]="items" [popup]="true"></p-tieredMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tiered-menu-popup-demo',
    templateUrl: './tiered-menu-popup-demo.html'
})
export class TieredMenuPopupDemo implements OnInit {
    items: MenuItem[] | undefined;
    
    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["popup-doc"]],decls:15,vars:3,consts:[["btn",""],["menu",""],[1,"card","flex","justify-content-center"],["type","button","pButton","","label","Toggle",3,"click"],[3,"model","popup"],["selector","tiered-menu-popup-demo",3,"code"]],template:function(a,c){if(a&1){let ce=$();i(0,"app-docsectiontext")(1,"p"),e(2,"Popup mode is enabled by adding "),i(3,"i"),e(4,"popup"),n(),e(5," property and calling "),i(6,"i"),e(7,"toggle"),n(),e(8," method with an event of the target."),n()(),i(9,"div",2)(10,"button",3,0),W("click",function(de){L(ce);let ue=I(13);return V(ue.toggle(de))}),n(),p(12,"p-tieredMenu",4,1),n(),p(14,"app-code",5)}a&2&&(m(12),r("model",c.items)("popup",!0),m(2),r("code",c.code))},dependencies:[f,b,G,u],encapsulation:2});let o=t;return o})();function be(o,t){if(o&1&&p(0,"p-badge",10),o&2){let s=x().$implicit;r("value",s.badge)}}function ge(o,t){if(o&1&&(i(0,"span",11),e(1),n()),o&2){let s=x().$implicit;m(),v(s.shortcut)}}function xe(o,t){o&1&&p(0,"i",12)}function ve(o,t){if(o&1&&(i(0,"a",4),p(1,"span",5),i(2,"span",6),e(3),n(),g(4,be,1,1,"p-badge",7)(5,ge,2,1,"span",8)(6,xe,1,0,"i",9),n()),o&2){let s=t.$implicit,l=t.hasSubmenu;m(),M(s.icon),m(2),v(s.label),m(),r("ngIf",s.badge),m(),r("ngIf",s.shortcut),m(),r("ngIf",l)}}var ne=(()=>{let t=class t{constructor(){this.code={basic:`<p-tieredMenu [model]="items">
        <ng-template pTemplate="item" let-item let-hasSubmenu="hasSubmenu">
        <a pRipple class="flex align-items-center p-menuitem-link">
        <span [class]="item.icon" class="p-menuitem-icon"></span>
                <span class="ml-2">{{ item.label }}</span>
                <Badge *ngIf="item.badge" styleClass="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto text-primary"></i>
            </a>
        </ng-template>
</p-tieredMenu>`,html:`<div class="card flex justify-content-center">
    <p-tieredMenu [model]="items">
    <ng-template pTemplate="item" let-item let-hasSubmenu="hasSubmenu">
    <a pRipple class="flex align-items-center p-menuitem-link">
    <span [class]="item.icon" class="p-menuitem-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <Badge *ngIf="item.badge" styleClass="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto text-primary"></i>
        </a>
    </ng-template>
    </p-tieredMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'tiered-menu-template-demo',
    templateUrl: './tiered-menu-template-demo.html'
})
export class TieredMenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file',
                                shortcut: '\u2318+N'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image',
                                shortcut: '\u2318+I'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video',
                                shortcut: '\u2318+L'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open',
                        shortcut: '\u2318+O'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print',
                        shortcut: '\u2318+P'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy',
                        shortcut: '\u2318+C'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        shortcut: '\u2318+D'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                shortcut: '\u2318+S'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack',
                        badge: '2'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp',
                        badge: '3'
                    }
                ]
            }
        ]
    }
}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file",shortcut:"\u2318+N"},{label:"Image",icon:"pi pi-image",shortcut:"\u2318+I"},{label:"Video",icon:"pi pi-video",shortcut:"\u2318+L"}]},{label:"Open",icon:"pi pi-folder-open",shortcut:"\u2318+O"},{label:"Print",icon:"pi pi-print",shortcut:"\u2318+P"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy",shortcut:"\u2318+C"},{label:"Delete",icon:"pi pi-times",shortcut:"\u2318+D"}]},{label:"Search",icon:"pi pi-search",shortcut:"\u2318+S"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack",badge:"2"},{label:"Whatsapp",icon:"pi pi-whatsapp",badge:"3"}]}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["template-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["pTemplate","item"],["selector","tiered-menu-template-demo",3,"code"],["pRipple","",1,"flex","align-items-center","p-menuitem-link"],[1,"p-menuitem-icon"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],["class","ml-auto border-1 surface-border border-round surface-100 text-xs p-1",4,"ngIf"],["class","pi pi-angle-right ml-auto text-primary",4,"ngIf"],[1,"ml-auto",3,"value"],[1,"ml-auto","border-1","surface-border","border-round","surface-100","text-xs","p-1"],[1,"pi","pi-angle-right","ml-auto","text-primary"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"TieredMenu offers item customization with the "),i(3,"i"),e(4,"item"),n(),e(5," template that receives the menuitem instance from the model as a parameter."),n()(),i(6,"div",0)(7,"p-tieredMenu",1),g(8,ve,7,6,"ng-template",2),n()(),p(9,"app-code",3)),a&2&&(m(7),r("model",c.items),m(2),r("code",c.code))},dependencies:[T,f,b,A,u,z],encapsulation:2});let o=t;return o})();var oe=(()=>{let t=class t{constructor(l){this.messageService=l,this.code={basic:`<p-tieredMenu [model]="items"></p-tieredMenu>
<p-toast/>`,html:`<div class="card flex justify-content-center">
        <p-tieredMenu [model]="items"></p-tieredMenu>
        <p-toast/>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'tiered-menu-command-demo',
    templateUrl: './tiered-menu-command-demo.html'
})
export class TieredMenuCommandDemo implements OnInit {
    constructor(private messageService: MessageService) {} 
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
          {
            label: 'File',
            icon: 'pi pi-file',
            items: [
              {
                label: 'New',
                icon: 'pi pi-plus',
                command: () => {
                  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                }
              },
              {
                label: 'Print',
                icon: 'pi pi-print',
                command: () => {
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                }
              }
            ]
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
              this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
            }
          },
          {
            separator: true
          },
          {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
              {
                label: 'Import',
                icon: 'pi pi-cloud-download',
                command: () => {
                  this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                }
              },
              {
                label: 'Export',
                icon: 'pi pi-cloud-upload',
                command: () => {
                  this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                }
              }
            ]
          }
        ];
      }
}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Search",icon:"pi pi-search",command:()=>{this.messageService.add({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{separator:!0},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{this.messageService.add({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{this.messageService.add({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]}]}};t.\u0275fac=function(a){return new(a||t)(D(O))},t.\u0275cmp=d({type:t,selectors:[["command-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"model"],["selector","tiered-menu-command-demo",3,"code"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The "),i(3,"i"),e(4,"command"),n(),e(5," property defines the callback to run when an item is activated by click or a key event."),n()(),i(6,"div",0),p(7,"p-tieredMenu",1)(8,"p-toast"),n(),p(9,"app-code",2)),a&2&&(m(7),r("model",c.items),m(2),r("code",c.code))},dependencies:[f,b,u,X],encapsulation:2});let o=t;return o})();function ye(o,t){if(o&1&&(j(0),i(1,"a",7),p(2,"span",8),i(3,"span",9),e(4),n()(),P()),o&2){let s=x().$implicit;m(),r("routerLink",s.route)("href",s.href,N),m(3),v(s.label)}}function Ee(o,t){o&1&&p(0,"span",12)}function Me(o,t){if(o&1&&(j(0),i(1,"a",10),p(2,"span"),i(3,"span",9),e(4),n(),g(5,Ee,1,0,"span",11),n(),P()),o&2){let s=x(2),l=s.$implicit,a=s.hasSubmenu;m(),r("href",l.url,N)("target",l.target),m(),M(l.icon),m(2),v(l.label),m(),r("ngIf",a)}}function Ie(o,t){o&1&&p(0,"span",12)}function Ce(o,t){if(o&1&&(i(0,"a",13),p(1,"span"),i(2,"span",9),e(3),n(),g(4,Ie,1,0,"span",11),n()),o&2){let s=x(2),l=s.$implicit,a=s.hasSubmenu;m(),M(l.icon),m(2),v(l.label),m(),r("ngIf",a)}}function we(o,t){if(o&1&&g(0,Me,6,6,"ng-container",6)(1,Ce,5,4,"ng-template",null,1,B),o&2){let s=I(2),l=x().$implicit;r("ngIf",l.url)("ngIfElse",s)}}function De(o,t){if(o&1&&g(0,ye,5,3,"ng-container",6)(1,we,3,2,"ng-template",null,0,B),o&2){let s=t.$implicit,l=I(2);r("ngIf",s.route)("ngIfElse",l)}}var ae=(()=>{let t=class t{constructor(l){this.router=l,this.code={basic:`<p-tieredMenu [model]="items">
        <ng-template pTemplate="item" let-item let-hasSubmenu="hasSubmenu">
            <ng-container *ngIf="item.route; else withoutRoute">
                <a [routerLink]="item.route" [href]="item.href" class="p-menuitem-link">
                    <span class="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </ng-container>
            <ng-template #withoutRoute>
                <ng-container *ngIf="item.url; else withoutUrl">
                    <a [href]="item.url" [target]="item.target" class="p-menuitem-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                    </a>
                </ng-container>
                <ng-template #withoutUrl>
                    <a class="p-menuitem-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                    </a>
                </ng-template>
            </ng-template>
        </ng-template>
</p-tieredMenu>`,html:`<div class="card flex justify-content-center">
        <p-tieredMenu [model]="items">
        <ng-template pTemplate="item" let-item let-hasSubmenu="hasSubmenu">
            <ng-container *ngIf="item.route; else withoutRoute">
                <a [routerLink]="item.route" [href]="item.href" class="p-menuitem-link">
                    <span class="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </ng-container>
            <ng-template #withoutRoute>
                <ng-container *ngIf="item.url; else withoutUrl">
                    <a [href]="item.url" [target]="item.target" class="p-menuitem-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                    </a>
                </ng-container>
                <ng-template #withoutUrl>
                    <a class="p-menuitem-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                    </a>
                </ng-template>
            </ng-template>
        </ng-template>
    </p-tieredMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'tiered-menu-router-demo',
    templateUrl: './tiered-menu-router-demo.html'
})
export class TieredMenuRouterDemo implements OnInit {
    constructor(private router: Router) {}
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Theming',
                        route: '/theming'
                    },
                    {
                        label: 'Colors',
                        route: '/colors'
                    }
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.dev/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }


}`}}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[{label:"Theming",route:"/theming"},{label:"Colors",route:"/colors"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[{label:"Angular",url:"https://angular.dev/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}]}};t.\u0275fac=function(a){return new(a||t)(D(q))},t.\u0275cmp=d({type:t,selectors:[["router-doc"]],decls:7,vars:2,consts:[["withoutRoute",""],["withoutUrl",""],[1,"card","flex","justify-content-center"],[3,"model"],["pTemplate","item"],["selector","tiered-menu-router-demo",3,"code"],[4,"ngIf","ngIfElse"],[1,"p-menuitem-link",3,"routerLink","href"],[1,"item.icon"],[1,"ml-2"],[1,"p-menuitem-link",3,"href","target"],["class","pi pi-angle-right ml-auto",4,"ngIf"],[1,"pi","pi-angle-right","ml-auto"],[1,"p-menuitem-link"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation."),n()(),i(3,"div",2)(4,"p-tieredMenu",3),g(5,De,3,2,"ng-template",4),n()(),p(6,"app-code",5)),a&2&&(m(4),r("model",c.items),m(2),r("code",c.code))},dependencies:[T,f,R,b,A,u],encapsulation:2});let o=t;return o})();var _e=()=>["/theming"],le=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["style-doc"]],decls:45,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,c){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),e(4,"theming"),n(),e(5," page."),n()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),n(),i(12,"th"),e(13,"Element"),n()()(),i(14,"tbody")(15,"tr")(16,"td"),e(17,"p-tieredmenu"),n(),i(18,"td"),e(19,"Container element."),n()(),i(20,"tr")(21,"td"),e(22,"p-menu-list"),n(),i(23,"td"),e(24,"List element."),n()(),i(25,"tr")(26,"td"),e(27,"p-menuitem"),n(),i(28,"td"),e(29,"Menuitem element."),n()(),i(30,"tr")(31,"td"),e(32,"p-menuitem-text"),n(),i(33,"td"),e(34,"Label of a menuitem."),n()(),i(35,"tr")(36,"td"),e(37,"p-menuitem-icon"),n(),i(38,"td"),e(39,"Icon of a menuitem."),n()(),i(40,"tr")(41,"td"),e(42,"p-submenu-icon"),n(),i(43,"td"),e(44,"Arrow icon of a submenu."),n()()()()()),a&2&&(m(3),r("routerLink",_(1,_e)))},dependencies:[R,u],encapsulation:2});let o=t;return o})();var me=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["accessibility-doc"]],decls:136,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,c){a&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),n(),i(4,"p"),e(5," TieredMenu component uses the "),i(6,"i"),e(7,"menubar"),n(),e(8," role with "),i(9,"i"),e(10,"aria-orientation"),n(),e(11,' set to "vertical" and the value to describe the menu can either be provided with '),i(12,"i"),e(13,"aria-labelledby"),n(),e(14," or "),i(15,"i"),e(16,"aria-label"),n(),e(17," props. Each list item has a "),i(18,"i"),e(19,"presentation"),n(),e(20," role whereas anchor elements have a "),i(21,"i"),e(22,"menuitem"),n(),e(23," role with "),i(24,"i"),e(25,"aria-label"),n(),e(26," referring to the label of the item and "),i(27,"i"),e(28,"aria-disabled"),n(),e(29," defined if the item is disabled. A submenu within a TieredMenu uses the "),i(30,"i"),e(31,"menu"),n(),e(32," role with an "),i(33,"i"),e(34,"aria-labelledby"),n(),e(35," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),i(36,"i"),e(37,"aria-haspopup"),n(),e(38,", "),i(39,"i"),e(40,"aria-expanded"),n(),e(41," and "),i(42,"i"),e(43,"aria-controls"),n(),e(44," to define the relation between the item and the submenu. "),n(),i(45,"p"),e(46,"In popup mode, the component implicitly manages the "),i(47,"i"),e(48,"aria-expanded"),n(),e(49,", "),i(50,"i"),e(51,"aria-haspopup"),n(),e(52," and "),i(53,"i"),e(54,"aria-controls"),n(),e(55," attributes of the target element to define the relation between the target and the popup."),n(),i(56,"h3"),e(57,"Keyboard Support"),n(),i(58,"div",0)(59,"table",1)(60,"thead")(61,"tr")(62,"th"),e(63,"Key"),n(),i(64,"th"),e(65,"Function"),n()()(),i(66,"tbody")(67,"tr")(68,"td")(69,"i"),e(70,"tab"),n()(),i(71,"td"),e(72,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),n()(),i(73,"tr")(74,"td")(75,"i"),e(76,"shift"),n(),e(77," + "),i(78,"i"),e(79,"tab"),n()(),i(80,"td"),e(81,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),n()(),i(82,"tr")(83,"td")(84,"i"),e(85,"enter"),n()(),i(86,"td"),e(87,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),n()(),i(88,"tr")(89,"td")(90,"i"),e(91,"space"),n()(),i(92,"td"),e(93,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),n()(),i(94,"tr")(95,"td")(96,"i"),e(97,"escape"),n()(),i(98,"td"),e(99,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),n()(),i(100,"tr")(101,"td")(102,"i"),e(103,"down arrow"),n()(),i(104,"td"),e(105,"Moves focus to the next menuitem within the submenu."),n()(),i(106,"tr")(107,"td")(108,"i"),e(109,"up arrow"),n()(),i(110,"td"),e(111,"Moves focus to the previous menuitem within the submenu."),n()(),i(112,"tr")(113,"td")(114,"i"),e(115,"right arrow"),n()(),i(116,"td"),e(117,"Opens a submenu if there is one available and moves focus to the first item."),n()(),i(118,"tr")(119,"td")(120,"i"),e(121,"left arrow"),n()(),i(122,"td"),e(123,"Closes a submenu and moves focus to the root item of the closed submenu."),n()(),i(124,"tr")(125,"td")(126,"i"),e(127,"home"),n()(),i(128,"td"),e(129,"Moves focus to the first menuitem within the submenu."),n()(),i(130,"tr")(131,"td")(132,"i"),e(133,"end"),n()(),i(134,"td"),e(135,"Moves focus to the last menuitem within the submenu."),n()()()()()()())},dependencies:[u],encapsulation:2});let o=t;return o})();var re=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=y({type:t}),t.\u0275inj=S({providers:[O],imports:[k,J,C,Z,H,U,K,Y,U]});let o=t;return o})();var Te=()=>["TieredMenu","MenuItem"],pe=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:te},{id:"basic",label:"Basic",component:ee},{id:"popup",label:"Popup",component:ie},{id:"template",label:"Template",component:ne},{id:"command",label:"Command",component:oe},{id:"router",label:"Router",component:ae},{id:"style",label:"Style",component:le},{id:"accessibility",label:"Accessibility",component:me}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular TieredMenu Component","header","TieredMenu","description","TieredMenu displays submenus in nested overlays.",3,"docs","apiDocs"]],template:function(a,c){a&1&&p(0,"app-doc",0),a&2&&r("docs",c.docs)("apiDocs",_(2,Te))},dependencies:[Q],encapsulation:2});let o=t;return o})();var se=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=y({type:t}),t.\u0275inj=S({imports:[C.forChild([{path:"",component:pe}]),C]});let o=t;return o})();var At=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=y({type:t}),t.\u0275inj=S({imports:[k,se,re]});let o=t;return o})();export{At as TieredMenuDemoModule};
