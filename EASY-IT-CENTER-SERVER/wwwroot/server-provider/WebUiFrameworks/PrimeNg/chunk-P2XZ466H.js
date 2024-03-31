import{a as S,b as I}from"./chunk-DWVF3PYJ.js";import"./chunk-KL3QZRIM.js";import"./chunk-XSSXK7EZ.js";import{a as d,b as D,c as v}from"./chunk-AS5FXEGH.js";import{a as h,b as C}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as M,t as b}from"./chunk-N5X6XDRN.js";import{Ib as y,Jb as e,Nc as w,Sa as c,Sb as g,V as f,da as l,ea as x,kb as a,rb as n,sb as t,tb as s}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var A=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=l({type:i,selectors:[["accessibility-doc"]],decls:116,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(m,p){m&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),n(4,"p"),e(5," ContextMenu component uses the "),n(6,"i"),e(7,"menubar"),t(),e(8," role with "),n(9,"i"),e(10,"aria-orientation"),t(),e(11,' set to "vertical" and the value to describe the menu can either be provided with '),n(12,"i"),e(13,"aria-labelledby"),t(),e(14," or "),n(15,"i"),e(16,"aria-label"),t(),e(17," props. Each list item has a "),n(18,"i"),e(19,"presentation"),t(),e(20," role whereas anchor elements have a "),n(21,"i"),e(22,"menuitem"),t(),e(23," role with "),n(24,"i"),e(25,"aria-label"),t(),e(26," referring to the label of the item and "),n(27,"i"),e(28,"aria-disabled"),t(),e(29," defined if the item is disabled. A submenu within a ContextMenu uses the "),n(30,"i"),e(31,"menu"),t(),e(32," role with an "),n(33,"i"),e(34,"aria-labelledby"),t(),e(35," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),n(36,"i"),e(37,"aria-haspopup"),t(),e(38,", "),n(39,"i"),e(40,"aria-expanded"),t(),e(41," and "),n(42,"i"),e(43,"aria-controls"),t(),e(44," to define the relation between the item and the submenu. "),t(),n(45,"h3"),e(46,"Keyboard Support"),t(),n(47,"div",0)(48,"table",1)(49,"thead")(50,"tr")(51,"th"),e(52,"Key"),t(),n(53,"th"),e(54,"Function"),t()()(),n(55,"tbody")(56,"tr")(57,"td")(58,"i"),e(59,"tab"),t()(),n(60,"td"),e(61,"When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence."),t()(),n(62,"tr")(63,"td")(64,"i"),e(65,"enter"),t()(),n(66,"td"),e(67,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),t()(),n(68,"tr")(69,"td")(70,"i"),e(71,"space"),t()(),n(72,"td"),e(73,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),t()(),n(74,"tr")(75,"td")(76,"i"),e(77,"escape"),t()(),n(78,"td"),e(79,"Closes the context menu."),t()(),n(80,"tr")(81,"td")(82,"i"),e(83,"down arrow"),t()(),n(84,"td"),e(85,"If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu."),t()(),n(86,"tr")(87,"td")(88,"i"),e(89,"up arrow"),t()(),n(90,"td"),e(91,"If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu."),t()(),n(92,"tr")(93,"td")(94,"i"),e(95,"right arrow"),t()(),n(96,"td"),e(97,"Opens a submenu if there is one available and moves focus to the first item."),t()(),n(98,"tr")(99,"td")(100,"i"),e(101,"left arrow"),t()(),n(102,"td"),e(103,"Closes a submenu and moves focus to the root item of the closed submenu."),t()(),n(104,"tr")(105,"td")(106,"i"),e(107,"home"),t()(),n(108,"td"),e(109,"Moves focus to the first menuitem within the submenu."),t()(),n(110,"tr")(111,"td")(112,"i"),e(113,"end"),t()(),n(114,"td"),e(115,"Moves focus to the last menuitem within the submenu."),t()()()()()()())},dependencies:[d],encapsulation:2});let o=i;return o})();var k=(()=>{let i=class i{constructor(){this.code={basic:`<img #img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature3.jpg" alt="Logo" aria-haspopup="true" class="max-w-full">
<p-contextMenu [target]="img" [model]="items"></p-contextMenu>`,html:`
<div class="card flex justify-content-center">
    <img #img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature3.jpg" alt="Logo" aria-haspopup="true" class="max-w-full">
    <p-contextMenu [target]="img" [model]="items"></p-contextMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'context-menu-basic-demo',
    templateUrl: './context-menu-basic-demo.html'
})
export class ContextMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'View', icon: 'pi pi-fw pi-search' },
            { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"View",icon:"pi pi-fw pi-search"},{label:"Delete",icon:"pi pi-fw pi-trash"}]}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=l({type:i,selectors:[["context-menu-basic-demo"]],decls:11,vars:3,consts:[["img",""],[1,"card","flex","justify-content-center"],["src","https://primefaces.org/cdn/primeng/images/demo/nature/nature3.jpg","alt","Logo","aria-haspopup","true",1,"max-w-full"],[3,"target","model"],["selector","context-menu-basic-demo",3,"code"]],template:function(m,p){if(m&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"ContextMenu can be attached to a particular element whose local template variable name is defined using the "),n(3,"i"),e(4,"target"),t(),e(5," property."),t()(),n(6,"div",1),s(7,"img",2,0)(9,"p-contextMenu",3),t(),s(10,"app-code",4)),m&2){let B=y(8);c(9),a("target",B)("model",p.items),c(),a("code",p.code)}},dependencies:[h,S,d],encapsulation:2});let o=i;return o})();var j=(()=>{let i=class i{constructor(){this.code={basic:'<p-contextMenu [model]="items" [global]="true"></p-contextMenu>',html:`
<div class="card text-center">
    <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
    <p-contextMenu [model]="items" [global]="true"></p-contextMenu>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'context-menu-document-demo',
    templateUrl: './context-menu-document-demo.html'
})
export class ContextMenuDocumentDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                separator: true
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ContextMenuDemo } from './contextmenudemo';

@NgModule({
    imports: [CommonModule, ContextMenuModule],
    declarations: [ContextMenuDemo]
})
export class ContextMenuDemoModule {}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=l({type:i,selectors:[["context-menu-document-demo"]],decls:14,vars:3,consts:[[1,"card","text-center"],[1,"mb-0"],[3,"model","global"],["selector","context-menu-document-demo",3,"code"]],template:function(m,p){m&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Setting "),n(3,"i"),e(4,"global"),t(),e(5," property to "),n(6,"i"),e(7,"true"),t(),e(8," attaches the context menu to the document."),t()(),n(9,"div",0)(10,"p",1),e(11,"Right-Click anywhere on this page to view the global ContextMenu."),t(),s(12,"p-contextMenu",2),t(),s(13,"app-code",3)),m&2&&(c(12),a("model",p.items)("global",!0),c(),a("code",p.code))},dependencies:[h,S,d],encapsulation:2});let o=i;return o})();var N=(()=>{let i=class i{constructor(){this.code={typescript:"import { ContextMenuModule } from 'primeng/contextmenu';"}}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=l({type:i,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(m,p){m&1&&s(0,"app-code",0),m&2&&a("code",p.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let o=i;return o})();var V=()=>["/theming"],T=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=l({type:i,selectors:[["style-doc"]],decls:45,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(m,p){m&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),e(4,"theming"),t(),e(5," page."),t()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),t(),n(12,"th"),e(13,"Element"),t()()(),n(14,"tbody")(15,"tr")(16,"td"),e(17,"p-contextmenu"),t(),n(18,"td"),e(19,"Container element."),t()(),n(20,"tr")(21,"td"),e(22,"p-menu-list"),t(),n(23,"td"),e(24,"List element."),t()(),n(25,"tr")(26,"td"),e(27,"p-menuitem"),t(),n(28,"td"),e(29,"Menuitem element."),t()(),n(30,"tr")(31,"td"),e(32,"p-menuitem-text"),t(),n(33,"td"),e(34,"Label of a menuitem."),t()(),n(35,"tr")(36,"td"),e(37,"p-menuitem-icon"),t(),n(38,"td"),e(39,"Icon of a menuitem."),t()(),n(40,"tr")(41,"td"),e(42,"p-submenu-icon"),t(),n(43,"td"),e(44,"Arrow icon of a submenu."),t()()()()()),m&2&&(c(3),a("routerLink",g(1,V)))},dependencies:[M,d],encapsulation:2});let o=i;return o})();var L=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=x({type:i}),i.\u0275inj=f({imports:[w,C,b,I,v,v]});let o=i;return o})();var J=()=>["ContextMenu","MenuItem"],O=(()=>{let i=class i{constructor(){this.docs=[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:k},{id:"document",label:"Document",component:j},{id:"style",label:"Style",component:T},{id:"accessibility",label:"Accessibility",component:A}]}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=l({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ContextMenu Component","header","ContextMenu","description","ContextMenu displays an overlay menu on right click of its target.",3,"docs","apiDocs"]],template:function(m,p){m&1&&s(0,"app-doc",0),m&2&&a("docs",p.docs)("apiDocs",g(2,J))},dependencies:[D],encapsulation:2});let o=i;return o})();var R=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=x({type:i}),i.\u0275inj=f({imports:[b.forChild([{path:"",component:O}]),b]});let o=i;return o})();var Me=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=x({type:i}),i.\u0275inj=f({imports:[w,R,L]});let o=i;return o})();export{Me as ContextMenuDemoModule};
