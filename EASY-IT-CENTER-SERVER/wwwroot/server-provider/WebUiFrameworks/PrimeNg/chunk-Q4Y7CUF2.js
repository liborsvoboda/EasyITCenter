import{a as h,b as F}from"./chunk-XSLH4F3Y.js";import"./chunk-LWXL4VWZ.js";import{a as S,b as P}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import"./chunk-KL3QZRIM.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as v,b as j,c as A}from"./chunk-AS5FXEGH.js";import{a as f,b as R}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{k as d}from"./chunk-UWMVDULA.js";import{o as U,t as I}from"./chunk-N5X6XDRN.js";import{Jb as o,Nc as M,Qb as C,Sa as l,Sb as T,Ta as y,V as E,da as b,ea as w,kb as s,rb as e,sb as t,tb as u,yb as m}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var L=(()=>{let n=class n{constructor(){this.code={basic:`<p-splitButton 
    [buttonProps]="{'aria-label': 'Default Action'}" 
    [menuButtonProps]="{'aria-label': 'More Options'}"
></p-splitButton>`}}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=b({type:n,selectors:[["accessibility-doc"]],decls:143,vars:4,consts:[[3,"code","hideToggleCode","hideStackBlitz","hideCodeSandbox"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),t(),e(3,"p"),o(4," SplitButton component renders two native button elements, main button uses the label property to define "),e(5,"i"),o(6,"aria-label"),t(),o(7," by default which can be customized with "),e(8,"i"),o(9,"buttonProps"),t(),o(10,". Dropdown button requires an explicit definition to describe it using "),e(11,"i"),o(12,"menuButtonProps"),t(),o(13," option and also includes "),e(14,"i"),o(15,"aria-haspopup"),t(),o(16,", "),e(17,"i"),o(18,"aria-expanded"),t(),o(19," for states along with "),e(20,"i"),o(21,"aria-controls"),t(),o(22," to define the relation between the popup and the button. "),t(),e(23,"p"),o(24,"The popup overlay uses "),e(25,"i"),o(26,"menu"),t(),o(27," role on the list and each action item has a "),e(28,"i"),o(29,"menuitem"),t(),o(30," role with an "),e(31,"i"),o(32,"aria-label"),t(),o(33," as the menuitem label. The id of the menu refers to the "),e(34,"i"),o(35,"aria-controls"),t(),o(36," of the dropdown button."),t()(),u(37,"app-code",0),e(38,"h3"),o(39,"Main Button Keyboard Support"),t(),e(40,"div",1)(41,"table",2)(42,"thead")(43,"tr")(44,"th"),o(45,"Key"),t(),e(46,"th"),o(47,"Function"),t()()(),e(48,"tbody")(49,"tr")(50,"td")(51,"i"),o(52,"enter"),t()(),e(53,"td"),o(54,"Activates the button."),t()(),e(55,"tr")(56,"td")(57,"i"),o(58,"space"),t()(),e(59,"td"),o(60,"Activates the button."),t()()()()(),e(61,"h3"),o(62,"Menu Button Keyboard Support"),t(),e(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),o(68,"Key"),t(),e(69,"th"),o(70,"Function"),t()()(),e(71,"tbody")(72,"tr")(73,"td")(74,"i"),o(75,"enter"),t()(),e(76,"td"),o(77,"Toggles the visibility of the menu."),t()(),e(78,"tr")(79,"td")(80,"i"),o(81,"space"),t()(),e(82,"td"),o(83,"Toggles the visibility of the menu."),t()(),e(84,"tr")(85,"td")(86,"i"),o(87,"down arrow"),t()(),e(88,"td"),o(89,"Opens the menu and moves focus to the first item."),t()(),e(90,"tr")(91,"td")(92,"i"),o(93,"up arrow"),t()(),e(94,"td"),o(95,"Opens the menu and moves focus to the last item."),t()()()()(),e(96,"h3"),o(97,"Menu Keyboard Support"),t(),e(98,"div",1)(99,"table",2)(100,"thead")(101,"tr")(102,"th"),o(103,"Key"),t(),e(104,"th"),o(105,"Function"),t()()(),e(106,"tbody")(107,"tr")(108,"td")(109,"i"),o(110,"enter"),t()(),e(111,"td"),o(112,"Actives the menuitem, closes the menu and sets focus on the menu button."),t()(),e(113,"tr")(114,"td")(115,"i"),o(116,"escape"),t()(),e(117,"td"),o(118,"Closes the menu and sets focus on the menu button."),t()(),e(119,"tr")(120,"td")(121,"i"),o(122,"down arrow"),t()(),e(123,"td"),o(124,"Moves focus to the next item, if it is the last one then first item receives the focus."),t()(),e(125,"tr")(126,"td")(127,"i"),o(128,"up arrow"),t()(),e(129,"td"),o(130,"Moves focus to the previous item, if it is the first one then last item receives the focus."),t()(),e(131,"tr")(132,"td")(133,"i"),o(134,"home"),t()(),e(135,"td"),o(136,"Moves focus to the first item."),t()(),e(137,"tr")(138,"td")(139,"i"),o(140,"end"),t()(),e(141,"td"),o(142,"Moves focus to the last item."),t()()()()()),a&2&&(l(37),s("code",i.code)("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[f,v],encapsulation:2});let r=n;return r})();var N=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items"></p-splitButton>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-basic-demo',
    templateUrl: './split-button-basic-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonBasicDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["basic-doc"]],features:[C([d])],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],["label","Save","icon","pi pi-plus",3,"onClick","model"],["selector","split-button-basic-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton has a default action button and a collection of additional options defined by the "),e(3,"i"),o(4,"model"),t(),o(5," property based on MenuModel API."),t()(),e(6,"div",0),u(7,"p-toast"),e(8,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t()(),u(9,"app-code",2)),a&2&&(l(8),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var z=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [disabled]="true"></p-splitButton>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [disabled]="true"></p-splitButton>
    
</div>

<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [menuButtonDisabled]="true"></p-splitButton>
    
</div>
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [buttonDisabled]="true"></p-splitButton>
    
</div>
`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-disabled-demo',
    templateUrl: './split-button-disabled-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonDisabledDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["disabled-doc"]],features:[C([d])],decls:29,vars:7,consts:[[1,"card","flex","justify-content-center"],["label","Save","icon","pi pi-plus",3,"onClick","model","disabled"],["label","Save","icon","pi pi-plus",3,"onClick","model","menuButtonDisabled"],["label","Save","icon","pi pi-plus",3,"onClick","model","buttonDisabled"],["selector","split-button-disabled-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"When "),e(3,"i"),o(4,"disabled"),t(),o(5," is present, the element cannot be edited and focused."),t(),e(6,"p"),o(7,"You can now use "),e(8,"i"),o(9,"menuButtonDisabled"),t(),o(10," and "),e(11,"i"),o(12,"buttonDisabled"),t(),o(13," to disable menu icon button and the main button."),t(),e(14,"p"),o(15,"also , you can set the default "),e(16,"i"),o(17,"disabled"),t(),o(18," attribute to true , so you can disable both buttons."),t()(),e(19,"div",0),u(20,"p-toast"),e(21,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t()(),e(22,"div",0),u(23,"p-toast"),e(24,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t()(),e(25,"div",0),u(26,"p-toast"),e(27,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t()(),u(28,"app-code",4)),a&2&&(l(21),s("model",i.items)("disabled",!0),l(3),s("model",i.items)("menuButtonDisabled",!0),l(3),s("model",i.items)("buttonDisabled",!0),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var O=(()=>{let n=class n{constructor(){this.code={typescript:"import { SplitButtonModule } from 'primeng/splitbutton';"}}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=b({type:n,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,i){a&1&&u(0,"app-code",0),a&2&&s("code",i.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let r=n;return r})();var W=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items"></p-splitButton>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-nested-demo',
    templateUrl: './split-button-nested-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonNestedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }
}`},this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["nested-doc"]],features:[C([d])],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],["label","Save","icon","pi pi-plus",3,"onClick","model"],["selector","split-button-nested-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton has a default action button and a collection of additional options defined by the "),e(3,"i"),o(4,"model"),t(),o(5," property based on MenuModel API."),t()(),e(6,"div",0),u(7,"p-toast"),e(8,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t()(),u(9,"app-code",2)),a&2&&(l(8),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var H=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined mr-2 mb-2"></p-splitButton>
<p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-secondary mr-2 mb-2"></p-splitButton>
<p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-success mr-2 mb-2"></p-splitButton>
<p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-info mr-2 mb-2"></p-splitButton>
<p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-warning mr-2 mb-2"></p-splitButton>
<p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-help mr-2 mb-2"></p-splitButton>
<p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-danger mr-2 mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast></p-toast>
    <p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-secondary mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-success mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-info mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-warning mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-help mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-outlined p-button-danger mr-2 mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-outlined-demo',
    templateUrl: './split-button-outlined-demo.html',
    providers: [MessageService]
})
export class SplitButtonOutlinedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["outlined-doc"]],features:[C([d])],decls:13,vars:8,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["label","Primary","styleClass","p-button-outlined mr-2 mb-2",3,"onClick","model"],["label","Secondary","styleClass","p-button-outlined p-button-secondary mr-2 mb-2",3,"onClick","model"],["label","Success","styleClass","p-button-outlined p-button-success mr-2 mb-2",3,"onClick","model"],["label","Info","styleClass","p-button-outlined p-button-info mr-2 mb-2",3,"onClick","model"],["label","Warning","styleClass","p-button-outlined p-button-warning mr-2 mb-2",3,"onClick","model"],["label","Help","styleClass","p-button-outlined p-button-help mr-2 mb-2",3,"onClick","model"],["label","Danger","styleClass","p-button-outlined p-button-danger mr-2 mb-2",3,"onClick","model"],["selector","split-button-outlined-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Outlined buttons display a border without a background initially."),t()(),e(3,"div",0),u(4,"p-toast"),e(5,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(6,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(7,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t(),e(8,"p-splitButton",4),m("onClick",function(){return i.save("info")}),t(),e(9,"p-splitButton",5),m("onClick",function(){return i.save("info")}),t(),e(10,"p-splitButton",6),m("onClick",function(){return i.save("info")}),t(),e(11,"p-splitButton",7),m("onClick",function(){return i.save("info")}),t()(),u(12,"app-code",8)),a&2&&(l(5),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var K=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Primary" [model]="items" (onClick)="save('info')" styleClass="p-button-raised mr-2 mb-2"></p-splitButton>
<p-splitButton label="Secondary" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-secondary mr-2 mb-2"></p-splitButton>
<p-splitButton label="Success" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-success mr-2 mb-2"></p-splitButton>
<p-splitButton label="Info" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-info mr-2 mb-2"></p-splitButton>
<p-splitButton label="Warning" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-warning mr-2 mb-2"></p-splitButton>
<p-splitButton label="Help" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-help mr-2 mb-2"></p-splitButton>
<p-splitButton label="Danger" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-danger mr-2 mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast></p-toast>
    <p-splitButton label="Primary" [model]="items" (onClick)="save('info')" styleClass="p-button-raised mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Secondary" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-secondary mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Success" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-success mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Info" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-info mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Warning" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-warning mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Help" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-help mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Danger" [model]="items" (onClick)="save('info')" styleClass="p-button-raised p-button-danger mr-2 mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-raised-demo',
    templateUrl: './split-button-raised-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonRaisedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["raised-doc"]],features:[C([d])],decls:13,vars:8,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["label","Primary","styleClass","p-button-raised mr-2 mb-2",3,"onClick","model"],["label","Secondary","styleClass","p-button-raised p-button-secondary mr-2 mb-2",3,"onClick","model"],["label","Success","styleClass","p-button-raised p-button-success mr-2 mb-2",3,"onClick","model"],["label","Info","styleClass","p-button-raised p-button-info mr-2 mb-2",3,"onClick","model"],["label","Warning","styleClass","p-button-raised p-button-warning mr-2 mb-2",3,"onClick","model"],["label","Help","styleClass","p-button-raised p-button-help mr-2 mb-2",3,"onClick","model"],["label","Danger","styleClass","p-button-raised p-button-danger mr-2 mb-2",3,"onClick","model"],["selector","split-button-raised-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Raised buttons display a shadow to indicate elevation."),t()(),e(3,"div",0),u(4,"p-toast"),e(5,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(6,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(7,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t(),e(8,"p-splitButton",4),m("onClick",function(){return i.save("info")}),t(),e(9,"p-splitButton",5),m("onClick",function(){return i.save("info")}),t(),e(10,"p-splitButton",6),m("onClick",function(){return i.save("info")}),t(),e(11,"p-splitButton",7),m("onClick",function(){return i.save("info")}),t()(),u(12,"app-code",8)),a&2&&(l(5),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var J=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-success p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-info p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-warning p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-help p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-danger p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Plain" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-plain p-button-text mr-2 mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast></p-toast>
    <p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-success p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-info p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-warning p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-help p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-danger p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Plain" [model]="this.items" (onClick)="save('info')" styleClass="p-button-raised p-button-plain p-button-text mr-2 mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-raised-text-demo',
    templateUrl: './split-button-raised-text-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonRaisedTextDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["raised-text-doc"]],features:[C([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["label","Primary","styleClass","p-button-raised p-button-text mr-2 mb-2",3,"onClick","model"],["label","Secondary","styleClass","p-button-raised p-button-secondary p-button-text mr-2 mb-2",3,"onClick","model"],["label","Success","styleClass","p-button-raised p-button-success p-button-text mr-2 mb-2",3,"onClick","model"],["label","Info","styleClass","p-button-raised p-button-info p-button-text mr-2 mb-2",3,"onClick","model"],["label","Warning","styleClass","p-button-raised p-button-warning p-button-text mr-2 mb-2",3,"onClick","model"],["label","Help","styleClass","p-button-raised p-button-help p-button-text mr-2 mb-2",3,"onClick","model"],["label","Danger","styleClass","p-button-raised p-button-danger p-button-text mr-2 mb-2",3,"onClick","model"],["label","Plain","styleClass","p-button-raised p-button-plain p-button-text mr-2 mb-2",3,"onClick","model"],["selector","split-button-raised-text-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Text buttons can be displayed as raised as well for elevation."),t()(),e(3,"div",0),u(4,"p-toast"),e(5,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(6,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(7,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t(),e(8,"p-splitButton",4),m("onClick",function(){return i.save("info")}),t(),e(9,"p-splitButton",5),m("onClick",function(){return i.save("info")}),t(),e(10,"p-splitButton",6),m("onClick",function(){return i.save("info")}),t(),e(11,"p-splitButton",7),m("onClick",function(){return i.save("info")}),t(),e(12,"p-splitButton",8),m("onClick",function(){return i.save("info")}),t()(),u(13,"app-code",9)),a&2&&(l(5),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var Q=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded mr-2 mb-2"></p-splitButton>
<p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-secondary mr-2 mb-2"></p-splitButton>
<p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-success mr-2 mb-2"></p-splitButton>
<p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-info mr-2 mb-2"></p-splitButton>
<p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-warning mr-2 mb-2"></p-splitButton>
<p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-help mr-2 mb-2"></p-splitButton>
<p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-danger mr-2 mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast></p-toast>
    <p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-secondary mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-success mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-info mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-warning mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-help mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-rounded p-button-danger mr-2 mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-rounded-demo',
    templateUrl: './split-button-rounded-demo.html',
    providers: [MessageService]
})
export class SplitButtonRoundedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["rounded-doc"]],features:[C([d])],decls:13,vars:8,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["label","Primary","styleClass","p-button-rounded mr-2 mb-2",3,"onClick","model"],["label","Secondary","styleClass","p-button-rounded p-button-secondary mr-2 mb-2",3,"onClick","model"],["label","Success","styleClass","p-button-rounded p-button-success mr-2 mb-2",3,"onClick","model"],["label","Info","styleClass","p-button-rounded p-button-info mr-2 mb-2",3,"onClick","model"],["label","Warning","styleClass","p-button-rounded p-button-warning mr-2 mb-2",3,"onClick","model"],["label","Help","styleClass","p-button-rounded p-button-help mr-2 mb-2",3,"onClick","model"],["label","Danger","styleClass","p-button-rounded p-button-danger mr-2 mb-2",3,"onClick","model"],["selector","split-button-rounded-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Rounded buttons have a circular border radius."),t()(),e(3,"div",0),u(4,"p-toast"),e(5,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(6,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(7,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t(),e(8,"p-splitButton",4),m("onClick",function(){return i.save("info")}),t(),e(9,"p-splitButton",5),m("onClick",function(){return i.save("info")}),t(),e(10,"p-splitButton",6),m("onClick",function(){return i.save("info")}),t(),e(11,"p-splitButton",7),m("onClick",function(){return i.save("info")}),t()(),u(12,"app-code",8)),a&2&&(l(5),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var V=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items"></p-splitButton>
<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" styleClass="p-button-secondary mb-2"></p-splitButton>
<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('success')" [model]="items" styleClass="p-button-success mb-2"></p-splitButton>
<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" styleClass="p-button-info mb-2"></p-splitButton>
<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('warn')" [model]="items" styleClass="p-button-warning mb-2"></p-splitButton>
<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" styleClass="p-button-help mb-2"></p-splitButton>
<p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('error')" [model]="items" styleClass="p-button-danger mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast></p-toast>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items"></p-splitButton>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" styleClass="p-button-secondary mb-2"></p-splitButton>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('success')" [model]="items" styleClass="p-button-success mb-2"></p-splitButton>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" styleClass="p-button-info mb-2"></p-splitButton>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('warn')" [model]="items" styleClass="p-button-warning mb-2"></p-splitButton>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" styleClass="p-button-help mb-2"></p-splitButton>
    <p-splitButton label="Save" icon="pi pi-plus" (onClick)="save('error')" [model]="items" styleClass="p-button-danger mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-severity-demo',
    templateUrl: './split-button-severity-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonSeverityDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["severity-doc"]],features:[C([d])],decls:13,vars:8,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["label","Save","icon","pi pi-plus",3,"onClick","model"],["label","Save","icon","pi pi-plus","styleClass","p-button-secondary mb-2",3,"onClick","model"],["label","Save","icon","pi pi-plus","styleClass","p-button-success mb-2",3,"onClick","model"],["label","Save","icon","pi pi-plus","styleClass","p-button-info mb-2",3,"onClick","model"],["label","Save","icon","pi pi-plus","styleClass","p-button-warning mb-2",3,"onClick","model"],["label","Save","icon","pi pi-plus","styleClass","p-button-help mb-2",3,"onClick","model"],["label","Save","icon","pi pi-plus","styleClass","p-button-danger mb-2",3,"onClick","model"],["selector","split-button-severity-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Severity defines the type of button."),t()(),e(3,"div",0),u(4,"p-toast"),e(5,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(6,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(7,"p-splitButton",3),m("onClick",function(){return i.save("success")}),t(),e(8,"p-splitButton",4),m("onClick",function(){return i.save("info")}),t(),e(9,"p-splitButton",5),m("onClick",function(){return i.save("warn")}),t(),e(10,"p-splitButton",6),m("onClick",function(){return i.save("info")}),t(),e(11,"p-splitButton",7),m("onClick",function(){return i.save("error")}),t()(),u(12,"app-code",8)),a&2&&(l(5),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var q=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Small" [model]="this.items" (onClick)="save('info')" styleClass="p-button-sm mr-2 mb-2"></p-splitButton>
<p-splitButton label="Normal" [model]="this.items" (onClick)="save('info')" styleClass="mr-2 mb-2"></p-splitButton>
<p-splitButton label="Large" [model]="this.items" (onClick)="save('info')" styleClass="p-button-lg mr-2 mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Small" [model]="this.items" (onClick)="save('info')" styleClass="p-button-sm mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Normal" [model]="this.items" (onClick)="save('info')" styleClass="mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Large" [model]="this.items" (onClick)="save('info')" styleClass="p-button-lg mr-2 mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-sizes-demo',
    templateUrl: './split-button-sizes-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonSizesDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["sizes-doc"]],features:[C([d])],decls:15,vars:4,consts:[[1,"card","flex","justify-content-center"],["label","Small","styleClass","p-button-sm mr-2 mb-2",3,"onClick","model"],["label","Normal","styleClass","mr-2 mb-2",3,"onClick","model"],["label","Large","styleClass","p-button-lg mr-2 mb-2",3,"onClick","model"],["selector","split-button-sizes-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton provides "),e(3,"i"),o(4,"small"),t(),o(5," and "),e(6,"i"),o(7,"large"),t(),o(8," sizes as alternatives to the standard."),t()(),e(9,"div",0),u(10,"p-toast"),e(11,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(12,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(13,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t()(),u(14,"app-code",4)),a&2&&(l(11),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var ee=()=>["/theming"],Y=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=b({type:n,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Following is the list of structural style classes, for theming classes visit "),e(3,"a",0),o(4,"theming"),t(),o(5," page."),t()(),e(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),o(11,"Name"),t(),e(12,"th"),o(13,"Element"),t()()(),e(14,"tbody")(15,"tr")(16,"td"),o(17,"p-splitbutton"),t(),e(18,"td"),o(19,"Container element."),t()(),e(20,"tr")(21,"td"),o(22,"p-splitbutton-menubutton"),t(),e(23,"td"),o(24,"Dropdown button."),t()(),e(25,"tr")(26,"td"),o(27,"p-menu"),t(),e(28,"td"),o(29,"Overlay menu."),t()()()()()),a&2&&(l(3),s("routerLink",T(1,ee)))},dependencies:[v,U],encapsulation:2});let r=n;return r})();var G=(()=>{let n=class n{constructor(p){this.messageService=p,this.code={basic:`<p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text mr-2 mb-2"></p-splitButton>
<p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-secondary mr-2 mb-2"></p-splitButton>
<p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-success mr-2 mb-2"></p-splitButton>
<p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-info mr-2 mb-2"></p-splitButton>
<p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-warning mr-2 mb-2"></p-splitButton>
<p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-help mr-2 mb-2"></p-splitButton>
<p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-danger mr-2 mb-2"></p-splitButton>
<p-splitButton label="Plain" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-plain mr-2 mb-2"></p-splitButton>`,html:`
<div class="card flex justify-content-center flex-wrap gap-3">
    <p-toast></p-toast>
    <p-splitButton label="Primary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Secondary" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-secondary mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Success" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-success mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Info" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-info mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Warning" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-warning mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Help" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-help mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Danger" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-danger mr-2 mb-2"></p-splitButton>
    <p-splitButton label="Plain" [model]="this.items" (onClick)="save('info')" styleClass="p-button-text p-button-plain mr-2 mb-2"></p-splitButton>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'split-button-text-demo',
    templateUrl: './split-button-text-demo.html',
    providers: [MessageService]
})
export class SplitButtonTextDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
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
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`},this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Installation",icon:"pi pi-cog",routerLink:["/installation"]}]}save(p){this.messageService.add({severity:p,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}};n.\u0275fac=function(a){return new(a||n)(y(d))},n.\u0275cmp=b({type:n,selectors:[["text-doc"]],features:[C([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["label","Primary","styleClass","p-button-text mr-2 mb-2",3,"onClick","model"],["label","Secondary","styleClass","p-button-text p-button-secondary mr-2 mb-2",3,"onClick","model"],["label","Success","styleClass","p-button-text p-button-success mr-2 mb-2",3,"onClick","model"],["label","Info","styleClass","p-button-text p-button-info mr-2 mb-2",3,"onClick","model"],["label","Warning","styleClass","p-button-text p-button-warning mr-2 mb-2",3,"onClick","model"],["label","Help","styleClass","p-button-text p-button-help mr-2 mb-2",3,"onClick","model"],["label","Danger","styleClass","p-button-text p-button-danger mr-2 mb-2",3,"onClick","model"],["label","Plain","styleClass","p-button-text p-button-plain mr-2 mb-2",3,"onClick","model"],["selector","split-button-text-demo",3,"code"]],template:function(a,i){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Text buttons are displayed as textual elements."),t()(),e(3,"div",0),u(4,"p-toast"),e(5,"p-splitButton",1),m("onClick",function(){return i.save("info")}),t(),e(6,"p-splitButton",2),m("onClick",function(){return i.save("info")}),t(),e(7,"p-splitButton",3),m("onClick",function(){return i.save("info")}),t(),e(8,"p-splitButton",4),m("onClick",function(){return i.save("info")}),t(),e(9,"p-splitButton",5),m("onClick",function(){return i.save("info")}),t(),e(10,"p-splitButton",6),m("onClick",function(){return i.save("info")}),t(),e(11,"p-splitButton",7),m("onClick",function(){return i.save("info")}),t(),e(12,"p-splitButton",8),m("onClick",function(){return i.save("info")}),t()(),u(13,"app-code",9)),a&2&&(l(5),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("model",i.items),l(),s("code",i.code))},dependencies:[f,v,h,S],encapsulation:2});let r=n;return r})();var X=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=w({type:n}),n.\u0275inj=E({imports:[M,R,A,F,P,A]});let r=n;return r})();var te=()=>["SplitButton"],Z=(()=>{let n=class n{constructor(){this.docs=[{id:"import",label:"Import",component:O},{id:"basic",label:"Basic",component:N},{id:"nested",label:"Nested",component:W},{id:"severity",label:"Severity",component:V},{id:"raised",label:"Raised",component:K},{id:"rounded",label:"Rounded",component:Q},{id:"text",label:"Text",component:G},{id:"raisedtext",label:"Raised Text",component:J},{id:"outlined",label:"Outlined",component:H},{id:"sizes",label:"Sizes",component:q},{id:"disabled",label:"Disabled",component:z},{id:"style",label:"Style",component:Y},{id:"accessibility",label:"Accessibility",component:L}]}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=b({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular SplitButton Component","header","SplitButton","description","SplitButton groups a set of commands in an overlay with a default action item.",3,"docs","apiDocs"]],template:function(a,i){a&1&&u(0,"app-doc",0),a&2&&s("docs",i.docs)("apiDocs",T(2,te))},dependencies:[j],encapsulation:2});let r=n;return r})();var $=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=w({type:n}),n.\u0275inj=E({imports:[I.forChild([{path:"",component:Z}]),I]});let r=n;return r})();var Et=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=w({type:n}),n.\u0275inj=E({imports:[M,$,X]});let r=n;return r})();export{Et as SplitButtonDemoModule};
