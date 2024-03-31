import{a as v,b as A}from"./chunk-ZKZIXQCY.js";import"./chunk-QYNZB2NP.js";import"./chunk-HKNDESHI.js";import"./chunk-KL3QZRIM.js";import{a as d,b as k,c as S}from"./chunk-AS5FXEGH.js";import{a as h,b as T}from"./chunk-X2ZDE2AM.js";import{r as C,s as I}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as M}from"./chunk-UWMVDULA.js";import{o as D,t as w}from"./chunk-N5X6XDRN.js";import{Jb as e,Nc as g,Sa as c,Sb as x,V as u,da as a,ea as b,ib as y,kb as m,rb as t,sb as i,tb as s}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";function Q(o,n){o&1&&s(0,"img",5)}function V(o,n){o&1&&s(0,"input",6)}var N=(()=>{let n=class n{constructor(){this.code={basic:`<p-menubar [model]="items">
    <ng-template pTemplate="start">
        <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />
    </ng-template>
    <ng-template pTemplate="end">
        <input type="text" pInputText placeholder="Search" class="w-full" />
    </ng-template>
</p-menubar>`,html:`
<div class="card">
    <p-menubar [model]="items">
        <ng-template pTemplate="start">
            <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />
        </ng-template>
        <ng-template pTemplate="end">
            <input type="text" pInputText placeholder="Search" class="w-full" />
        </ng-template>
    </p-menubar>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menubar-template-demo',
    templateUrl: './menubar-template-demo.html'
})
export class MenubarTemplateDemo implements OnInit {
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
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=a({type:n,selectors:[["menubar-template-demo"]],decls:14,vars:2,consts:[[1,"card"],[3,"model"],["pTemplate","start"],["pTemplate","end"],["selector","menubar-template-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/primeng.svg","height","40",1,"mr-2"],["type","text","pInputText","","placeholder","Search",1,"w-full"]],template:function(l,r){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Custom content can be placed inside the menubar using the "),t(3,"i"),e(4,"start"),i(),e(5," and "),t(6,"i"),e(7,"end"),i(),e(8," templates."),i()(),t(9,"div",0)(10,"p-menubar",1),y(11,Q,1,0,"ng-template",2)(12,V,1,0,"ng-template",3),i()(),s(13,"app-code",4)),l&2&&(c(10),m("model",r.items),c(3),m("code",r.code))},dependencies:[h,v,M,C,d],encapsulation:2});let o=n;return o})();var L=(()=>{let n=class n{constructor(){this.code={basic:'<p-menubar [model]="items"></p-menubar>',html:`
<div class="card">
    <p-menubar [model]="items"></p-menubar>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menubar-basic-demo',
    templateUrl: './menubar-basic-demo.html'
})
export class MenubarBasicDemo implements OnInit {
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
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}`}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=a({type:n,selectors:[["basic-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"model"],["selector","menubar-basic-demo",3,"code"]],template:function(l,r){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Menubar requires nested menuitems as its model."),i()(),t(3,"div",0),s(4,"p-menubar",1),i(),s(5,"app-code",2)),l&2&&(c(4),m("model",r.items),c(),m("code",r.code))},dependencies:[h,v,d],encapsulation:2});let o=n;return o})();var R=(()=>{let n=class n{constructor(){this.code={typescript:"import { MenubarModule } from 'primeng/menubar';"}}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=a({type:n,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,r){l&1&&s(0,"app-code",0),l&2&&m("code",r.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let o=n;return o})();var q=()=>["/theming"],j=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=a({type:n,selectors:[["style-doc"]],decls:45,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,r){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),t(3,"a",0),e(4,"theming"),i(),e(5," page."),i()(),t(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),i(),t(12,"th"),e(13,"Element"),i()()(),t(14,"tbody")(15,"tr")(16,"td"),e(17,"p-menubar"),i(),t(18,"td"),e(19,"Container element."),i()(),t(20,"tr")(21,"td"),e(22,"p-menu-list"),i(),t(23,"td"),e(24,"List element."),i()(),t(25,"tr")(26,"td"),e(27,"p-menuitem"),i(),t(28,"td"),e(29,"Menuitem element."),i()(),t(30,"tr")(31,"td"),e(32,"p-menuitem-text"),i(),t(33,"td"),e(34,"Label of a menuitem."),i()(),t(35,"tr")(36,"td"),e(37,"p-menuitem-icon"),i(),t(38,"td"),e(39,"Icon of a menuitem."),i()(),t(40,"tr")(41,"td"),e(42,"p-submenu-icon"),i(),t(43,"td"),e(44,"Arrow icon of a submenu."),i()()()()()),l&2&&(c(3),m("routerLink",x(1,q)))},dependencies:[D,d],encapsulation:2});let o=n;return o})();var B=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=a({type:n,selectors:[["accessibility-doc"]],decls:157,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,r){l&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Menubar component uses the "),t(6,"i"),e(7,"menubar"),i(),e(8," role and the value to describe the menu can either be provided with "),t(9,"i"),e(10,"aria-labelledby"),i(),e(11," or "),t(12,"i"),e(13,"aria-label"),i(),e(14," props. Each list item has a "),t(15,"i"),e(16,"presentation"),i(),e(17," role whereas anchor elements have a "),t(18,"i"),e(19,"menuitem"),i(),e(20," role with "),t(21,"i"),e(22,"aria-label"),i(),e(23," referring to the label of the item and "),t(24,"i"),e(25,"aria-disabled"),i(),e(26," defined if the item is disabled. A submenu within a MenuBar uses the "),t(27,"i"),e(28,"menu"),i(),e(29," role with an "),t(30,"i"),e(31,"aria-labelledby"),i(),e(32," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),t(33,"i"),e(34,"aria-haspopup"),i(),e(35,", "),t(36,"i"),e(37,"aria-expanded"),i(),e(38," and "),t(39,"i"),e(40,"aria-controls"),i(),e(41," to define the relation between the item and the submenu. "),i(),t(42,"p"),e(43," In mobile viewports, a menu icon appears with a "),t(44,"i"),e(45,"button"),i(),e(46," role along with "),t(47,"i"),e(48,"aria-haspopup"),i(),e(49,", "),t(50,"i"),e(51,"aria-expanded"),i(),e(52," and "),t(53,"i"),e(54,"aria-controls"),i(),e(55," to manage the relation between the overlay menubar and the button. The value to describe the button can be defined "),t(56,"i"),e(57,"aria-label"),i(),e(58," or "),t(59,"i"),e(60,"aria-labelledby"),i(),e(61," specified using "),t(62,"i"),e(63,"buttonProps"),i(),e(64,", by default "),t(65,"i"),e(66,"navigation"),i(),e(67," key of the "),t(68,"i"),e(69,"aria"),i(),e(70," property from the "),t(71,"a",0),e(72,"locale"),i(),e(73," API as the "),t(74,"i"),e(75,"aria-label"),i(),e(76,". "),i(),t(77,"h3"),e(78,"Keyboard Support"),i(),t(79,"div",1)(80,"table",2)(81,"thead")(82,"tr")(83,"th"),e(84,"Key"),i(),t(85,"th"),e(86,"Function"),i()()(),t(87,"tbody")(88,"tr")(89,"td")(90,"i"),e(91,"tab"),i()(),t(92,"td"),e(93,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),i()(),t(94,"tr")(95,"td")(96,"i"),e(97,"shift"),i(),e(98," + "),t(99,"i"),e(100,"tab"),i()(),t(101,"td"),e(102,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),i()(),t(103,"tr")(104,"td")(105,"i"),e(106,"enter"),i()(),t(107,"td"),e(108,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),i()(),t(109,"tr")(110,"td")(111,"i"),e(112,"space"),i()(),t(113,"td"),e(114,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),i()(),t(115,"tr")(116,"td")(117,"i"),e(118,"escape"),i()(),t(119,"td"),e(120,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),i()(),t(121,"tr")(122,"td")(123,"i"),e(124,"down arrow"),i()(),t(125,"td"),e(126,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."),i()(),t(127,"tr")(128,"td")(129,"i"),e(130,"up arrow"),i()(),t(131,"td"),e(132,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."),i()(),t(133,"tr")(134,"td")(135,"i"),e(136,"right arrow"),i()(),t(137,"td"),e(138,"If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item."),i()(),t(139,"tr")(140,"td")(141,"i"),e(142,"left arrow"),i()(),t(143,"td"),e(144,"If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu."),i()(),t(145,"tr")(146,"td")(147,"i"),e(148,"home"),i()(),t(149,"td"),e(150,"Moves focus to the first menuitem within the submenu."),i()(),t(151,"tr")(152,"td")(153,"i"),e(154,"end"),i()(),t(155,"td"),e(156,"Moves focus to the last menuitem within the submenu."),i()()()()()()())},dependencies:[d],encapsulation:2});let o=n;return o})();var O=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=b({type:n}),n.\u0275inj=u({imports:[g,T,w,A,I,S,S]});let o=n;return o})();var K=()=>["Menubar","MenuItem"],P=(()=>{let n=class n{constructor(){this.docs=[{id:"import",label:"Import",component:R},{id:"basic",label:"Basic",component:L},{id:"template",label:"Template",component:N},{id:"style",label:"Style",component:j},{id:"accessibility",label:"Accessibility",component:B}]}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=a({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Menubar Component","header","Menubar","description","Menubar is a horizontal menu component.",3,"docs","apiDocs"]],template:function(l,r){l&1&&s(0,"app-doc",0),l&2&&m("docs",r.docs)("apiDocs",x(2,K))},dependencies:[k],encapsulation:2});let o=n;return o})();var U=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=b({type:n}),n.\u0275inj=u({imports:[w.forChild([{path:"",component:P}]),w]});let o=n;return o})();var Fe=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=b({type:n}),n.\u0275inj=u({imports:[g,U,O]});let o=n;return o})();export{Fe as MenubarDemoModule};
