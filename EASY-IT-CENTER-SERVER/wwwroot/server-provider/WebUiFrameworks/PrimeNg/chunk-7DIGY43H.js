import{a as Ae,b as Ne}from"./chunk-IYXFLF6T.js";import{a as H,b as Pe,c as Le}from"./chunk-OAU23B72.js";import{a as Me,b as Fe}from"./chunk-ZKZIXQCY.js";import{a as Oe,b as Ee}from"./chunk-VQELUIPY.js";import{a as Ie,b as De}from"./chunk-YQT5QGVL.js";import"./chunk-IL4VCBHR.js";import"./chunk-5QBES3VP.js";import{a as Ce,b as Te}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import"./chunk-QYNZB2NP.js";import"./chunk-UEO6IQ7K.js";import{a as U}from"./chunk-NYXQLOFS.js";import{a as j}from"./chunk-NH53W3CT.js";import{a as we,b as xe}from"./chunk-QGLUNQP3.js";import"./chunk-HKNDESHI.js";import"./chunk-G7VICPVK.js";import"./chunk-KL3QZRIM.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-RJKOGX2L.js";import"./chunk-KPYNJB2H.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as C,b as Se,c as Y}from"./chunk-AS5FXEGH.js";import{a as L,b as _e}from"./chunk-X2ZDE2AM.js";import{e as ce,i as ue,p as ge}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import{a as ke,b as X}from"./chunk-QLODAJMV.js";import{a as E,g as fe,h as he,k as z,q as P,r as be,w as ve,x as ye}from"./chunk-UWMVDULA.js";import{o as R,t as S}from"./chunk-N5X6XDRN.js";import{Cc as le,Eb as ie,Ec as V,Fb as oe,Fc as pe,Gb as $,Hb as J,Ib as ne,Ic as me,Jb as a,Jc as de,Na as T,Nb as D,Nc as F,Ob as O,Pb as M,Qb as ae,Sa as d,Sb as b,Ta as _,Tb as B,V as w,da as g,dc as re,ea as x,ib as h,jb as I,kb as p,kc as se,ma as v,na as y,nb as K,ob as te,rb as r,sb as s,tb as u,ua as ee,va as W,wb as q,xb as N,yb as Q,zb as f}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Ze=["list"],Be=n=>({"p-disabled":n}),et=()=>({exact:!1}),Ve=n=>({$implicit:n});function tt(n,t){if(n&1&&u(0,"span",12),n&2){let l=f(2).$implicit;p("ngClass",l.icon)("ngStyle",l.iconStyle)}}function it(n,t){n&1&&q(0)}function ot(n,t){if(n&1&&(r(0,"a",9),h(1,tt,1,2,"span",10)(2,it,1,0,"ng-container",11),s()),n&2){let l=f().$implicit,e=f();p("routerLink",l.routerLink)("queryParams",l.queryParams)("ngClass",B(17,Be,l.disabled))("routerLinkActiveOptions",l.routerLinkActiveOptions||b(19,et))("target",l.target)("tooltipOptions",l.tooltipOptions)("fragment",l.fragment)("queryParamsHandling",l.queryParamsHandling)("preserveFragment",l.preserveFragment)("skipLocationChange",l.skipLocationChange)("replaceUrl",l.replaceUrl)("state",l.state),I("tabindex",l.disabled||e.readonly?null:l.tabindex?l.tabindex:"-1")("aria-hidden",!0),d(),p("ngIf",l.icon&&!e.itemTemplate),d(),p("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",B(20,Ve,l))}}function nt(n,t){if(n&1&&u(0,"span",12),n&2){let l=f(2).$implicit;p("ngClass",l.icon)("ngStyle",l.iconStyle)}}function at(n,t){n&1&&q(0)}function rt(n,t){if(n&1&&(r(0,"a",13),h(1,nt,1,2,"span",10)(2,at,1,0,"ng-container",11),s()),n&2){let l=f(),e=l.$implicit,i=l.index,o=f();p("tooltipPosition",e.tooltipPosition)("tooltipOptions",e.tooltipOptions)("ngClass",B(10,Be,e.disabled))("target",e.target),I("href",e.url||null,T)("tabindex",e.disabled||i!==o.activeIndex&&o.readonly?null:e.tabindex?e.tabindex:"-1")("aria-hidden",!0),d(),p("ngIf",e.icon&&!o.itemTemplate),d(),p("ngTemplateOutlet",o.itemTemplate)("ngTemplateOutletContext",B(12,Ve,e))}}function st(n,t){if(n&1){let l=N();r(0,"li",6),Q("click",function(i){let o=v(l).$implicit,m=f();return y(m.onItemClick(i,o))})("mouseenter",function(){let i=v(l).index,o=f();return y(o.onItemMouseEnter(i))}),r(1,"div",7),h(2,ot,3,22,"a",8)(3,rt,3,14,"ng-template",null,1,re),s()()}if(n&2){let l=t.$implicit,e=t.index,i=ne(4),o=f();p("ngClass",o.itemClass(l,e)),I("id",o.getItemId(l,e))("aria-label",l.label)("aria-disabled",o.disabled(l))("data-pc-section","menuitem")("data-p-focused",o.isItemActive(o.getItemId(l,e)))("data-p-disabled",o.disabled(l)||!1),d(),I("data-pc-section","content"),d(),p("ngIf",o.isClickableRouterLink(l))("ngIfElse",i)}}var G=(()=>{let t=class t{get focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}constructor(e,i){this.el=e,this.cd=i,this.model=null,this.position="bottom",this.onFocus=new W,this.onBlur=new W,this.tabindex=0,this.focused=!1,this.focusedOptionIndex=-1,this.currentIndex=-3}ngOnInit(){this.id=this.id||he()}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}getItemId(e,i){return e&&e?.id?e.id:`${i}`}getItemProp(e,i){return e&&e.item?fe.getItemValue(e.item[i]):void 0}disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled}isItemActive(e){return e===this.focusedOptionIndex}onListMouseLeave(){this.currentIndex=-3,this.cd.markForCheck()}onItemMouseEnter(e){this.currentIndex=e,this.cd.markForCheck()}onItemClick(e,i){i.command&&i.command({originalEvent:e,item:i})}onListFocus(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.onBlur.emit(e)}onListKeyDown(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(),e.preventDefault();break}default:break}}onArrowDownKey(){let e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onArrowUpKey(){let e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onHomeKey(){this.changeFocusedOptionIndex(0)}onEndKey(){this.changeFocusedOptionIndex(E.find(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)}onSpaceKey(){let e=E.findSingle(this.listViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex}`}"]`),i=e&&E.findSingle(e,'[data-pc-section="action"]');i?i.click():e&&e.click()}findNextOptionIndex(e){let o=[...E.find(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(m=>m.id===e);return o>-1?o+1:0}changeFocusedOptionIndex(e){let i=E.find(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=e>=i.length?i.length-1:e<0?0:e;this.focusedOptionIndex=i[o].getAttribute("id")}findPrevOptionIndex(e){let o=[...E.find(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(m=>m.id===e);return o>-1?o-1:0}get containerClass(){return{[`p-dock p-component  p-dock-${this.position}`]:!0}}isClickableRouterLink(e){return e.routerLink&&!e.disabled}itemClass(e,i){return{"p-dock-item":!0,"p-dock-item-second-prev":this.currentIndex-2===i,"p-dock-item-prev":this.currentIndex-1===i,"p-dock-item-current":this.currentIndex===i,"p-dock-item-next":this.currentIndex+1===i,"p-dock-item-second-next":this.currentIndex+2===i,"p-focus":this.isItemActive(this.getItemId(e,i))}}};t.\u0275fac=function(i){return new(i||t)(_(ee),_(se))},t.\u0275cmp=g({type:t,selectors:[["p-dock"]],contentQueries:function(i,o,m){if(i&1&&ie(m,P,4),i&2){let c;$(c=J())&&(o.templates=c)}},viewQuery:function(i,o){if(i&1&&oe(Ze,5),i&2){let m;$(m=J())&&(o.listViewChild=m.first)}},hostAttrs:[1,"p-element"],inputs:{id:"id",style:"style",styleClass:"styleClass",model:"model",position:"position",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},decls:5,vars:13,consts:[["list",""],["elseBlock",""],[3,"ngClass","ngStyle"],[1,"p-dock-list-container"],["role","menu",1,"p-dock-list",3,"focus","blur","keydown","mouseleave","tabindex"],["role","menuitem",3,"ngClass","click","mouseenter",4,"ngFor","ngForOf"],["role","menuitem",3,"click","mouseenter","ngClass"],[1,"p-menuitem-content"],["pRipple","","class","p-dock-link","pTooltip","",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf","ngIfElse"],["pRipple","","pTooltip","",1,"p-dock-link",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-dock-action-icon",3,"ngClass","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dock-action-icon",3,"ngClass","ngStyle"],["pRipple","","pTooltip","",1,"p-dock-link",3,"tooltipPosition","tooltipOptions","ngClass","target"]],template:function(i,o){if(i&1){let m=N();r(0,"div",2)(1,"div",3)(2,"ul",4,0),Q("focus",function(A){return v(m),y(o.onListFocus(A))})("blur",function(A){return v(m),y(o.onListBlur(A))})("keydown",function(A){return v(m),y(o.onListKeyDown(A))})("mouseleave",function(){return v(m),y(o.onListMouseLeave())}),h(4,st,5,10,"li",5),s()()()}i&2&&(te(o.styleClass),p("ngClass",o.containerClass)("ngStyle",o.style),I("data-pc-name","dock"),d(2),p("tabindex",o.tabindex),I("id",o.id)("aria-orientation",o.position==="bottom"||o.position==="top"?"horizontal":"vertical")("aria-activedescendant",o.focused?o.focusedOptionId:void 0)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy)("data-pc-section","menu"),d(2),p("ngForOf",o.model))},dependencies:[le,V,pe,de,me,R,ve,ke],styles:[`@layer primeng{.p-dock{position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dock-list-container{display:flex;pointer-events:auto}.p-dock-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center}.p-dock-item{transition:all .2s cubic-bezier(.4,0,.2,1);will-change:transform}.p-dock-link{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:default}.p-dock-item-second-prev,.p-dock-item-second-next{transform:scale(1.2)}.p-dock-item-prev,.p-dock-item-next{transform:scale(1.4)}.p-dock-item-current{transform:scale(1.6);z-index:1}.p-dock-top{left:0;top:0;width:100%}.p-dock-top .p-dock-item{transform-origin:center top}.p-dock-bottom{left:0;bottom:0;width:100%}.p-dock-bottom .p-dock-item{transform-origin:center bottom}.p-dock-right{right:0;top:0;height:100%}.p-dock-right .p-dock-item{transform-origin:center right}.p-dock-right .p-dock-list{flex-direction:column}.p-dock-left{left:0;top:0;height:100%}.p-dock-left .p-dock-item{transform-origin:center left}.p-dock-left .p-dock-list{flex-direction:column}}
`],encapsulation:2,changeDetection:0});let n=t;return n})(),Re=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=w({imports:[F,S,ye,X,be,X,S]});let n=t;return n})();var Ue=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["accessibility-doc"]],decls:92,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){i&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),a(3,"Screen Reader"),s(),r(4,"p"),a(5," Dock component uses the "),r(6,"i"),a(7,"menu"),s(),a(8," role with the "),r(9,"i"),a(10,"aria-orientation"),s(),a(11," and the value to describe the menu can either be provided with "),r(12,"i"),a(13,"aria-labelledby"),s(),a(14," or "),r(15,"i"),a(16,"aria-label"),s(),a(17," props. Each list item has a "),r(18,"i"),a(19,"presentation"),s(),a(20," role whereas anchor elements have a "),r(21,"i"),a(22,"menuitem"),s(),a(23," role with "),r(24,"i"),a(25,"aria-label"),s(),a(26," referring to the label of the item and "),r(27,"i"),a(28,"aria-disabled"),s(),a(29," defined if the item is disabled. "),s(),r(30,"h3"),a(31,"Keyboard Support"),s(),r(32,"div",0)(33,"table",1)(34,"thead")(35,"tr")(36,"th"),a(37,"Key"),s(),r(38,"th"),a(39,"Function"),s()()(),r(40,"tbody")(41,"tr")(42,"td")(43,"i"),a(44,"tab"),s()(),r(45,"td"),a(46,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),s()(),r(47,"tr")(48,"td")(49,"i"),a(50,"shift"),s(),a(51," + "),r(52,"i"),a(53,"tab"),s()(),r(54,"td"),a(55,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),s()(),r(56,"tr")(57,"td")(58,"i"),a(59,"enter"),s()(),r(60,"td"),a(61,"Activates the focused menuitem."),s()(),r(62,"tr")(63,"td")(64,"i"),a(65,"space"),s()(),r(66,"td"),a(67,"Activates the focused menuitem."),s()(),r(68,"tr")(69,"td")(70,"i"),a(71,"down arrow"),s()(),r(72,"td"),a(73,"Moves focus to the next menuitem in vertical layout."),s()(),r(74,"tr")(75,"td")(76,"i"),a(77,"up arrow"),s()(),r(78,"td"),a(79,"Moves focus to the previous menuitem in vertical layout."),s()(),r(80,"tr")(81,"td")(82,"i"),a(83,"home"),s()(),r(84,"td"),a(85,"Moves focus to the first menuitem in horizontal layout."),s()(),r(86,"tr")(87,"td")(88,"i"),a(89,"end"),s()(),r(90,"td"),a(91,"Moves focus to the last menuitem in horizontal layout."),s()()()()()()())},dependencies:[C],encapsulation:2});let n=t;return n})();var pt=()=>({width:"30vw",height:"18rem"}),je=()=>({"960px":"50vw"}),mt=()=>({width:"30vw"}),dt=()=>({"max-width":"850px"});function ct(n,t){n&1&&u(0,"i",13)}function ut(n,t){n&1&&(u(0,"i",14)(1,"i",15)(2,"i",16),r(3,"span"),a(4,"Fri 13:07"),s(),u(5,"i",17)(6,"i",18))}function gt(n,t){if(n&1&&u(0,"img",19),n&2){let l=t.$implicit;p("src",l.icon,T)("alt",l.label)}}function ft(n,t){if(n&1&&u(0,"img",20),n&2){let l=t.$implicit;p("src",l.previewImageSrc,T)}}var Ge=(()=>{let t=class t{constructor(e,i,o,m){this.galleriaService=e,this.nodeService=i,this.messageService=o,this.terminalService=m,this.code={basic:`<p-menubar [model]="menubarItems">
    <ng-template pTemplate="start">
        <i class="pi pi-apple"></i>
    </ng-template>
    <ng-template pTemplate="end">
        <i class="pi pi-video"></i>
        <i class="pi pi-wifi"></i>
        <i class="pi pi-volume-up"></i>
        <span>Fri 13:07</span>
        <i class="pi pi-search"></i>
        <i class="pi pi-bars"></i>
    </ng-template>
</p-menubar>
<div class="dock-window dock-advanced">
    <p-dock [model]="dockItems" position="bottom">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.icon" [alt]="item.label" width="100%" />
        </ng-template>
    </p-dock>

    <p-toast></p-toast>

    <p-dialog [(visible)]="displayFinder" [breakpoints]="{ '960px': '50vw' }" [style]="{ width: '30vw', height: '18rem' }" [draggable]="false" [resizable]="false">
        <p-tree [value]="nodes"></p-tree>
    </p-dialog>

    <p-dialog [maximizable]="true" [(visible)]="displayTerminal" [breakpoints]="{ '960px': '50vw' }" [style]="{ width: '30vw' }" [draggable]="false" [resizable]="false">
        <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $"></p-terminal>
    </p-dialog>

    <p-galleria
        [(value)]="images"
        [showThumbnails]="false"
        [showThumbnailNavigators]="false"
        [showItemNavigators]="true"
        [(visible)]="displayGalleria"
        [circular]="true"
        [responsiveOptions]="responsiveOptions"
        [containerStyle]="{ 'max-width': '850px' }"
        [circular]="true"
        [fullScreen]="true"
    >
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,html:`
<div class="card">
    <p-menubar [model]="menubarItems">
        <ng-template pTemplate="start">
            <i class="pi pi-apple"></i>
        </ng-template>
        <ng-template pTemplate="end">
            <i class="pi pi-video"></i>
            <i class="pi pi-wifi"></i>
            <i class="pi pi-volume-up"></i>
            <span>Fri 13:07</span>
            <i class="pi pi-search"></i>
            <i class="pi pi-bars"></i>
        </ng-template>
    </p-menubar>
    <div class="dock-window dock-advanced">
        <p-dock [model]="dockItems" position="bottom">
            <ng-template pTemplate="item" let-item>
                <img [src]="item.icon" [alt]="item.label" width="100%" />
            </ng-template>
        </p-dock>

        <p-toast></p-toast>

        <p-dialog [(visible)]="displayFinder" [breakpoints]="{ '960px': '50vw' }" [style]="{ width: '30vw', height: '18rem' }" [draggable]="false" [resizable]="false">
            <p-tree [value]="nodes"></p-tree>
        </p-dialog>

        <p-dialog [maximizable]="true" [(visible)]="displayTerminal" [breakpoints]="{ '960px': '50vw' }" [style]="{ width: '30vw' }" [draggable]="false" [resizable]="false">
            <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $"></p-terminal>
        </p-dialog>

        <p-galleria
            [(value)]="images"
            [showThumbnails]="false"
            [showThumbnailNavigators]="false"
            [showItemNavigators]="true"
            [(visible)]="displayGalleria"
            [circular]="true"
            [responsiveOptions]="responsiveOptions"
            [containerStyle]="{ 'max-width': '850px' }"
            [circular]="true"
            [fullScreen]="true"
        >
            <ng-template pTemplate="item" let-item>
                <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
            </ng-template>
        </p-galleria>
    </div>
</div>`,typescript:`
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { NodeService } from '../../service/nodeservice';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'dock-advanced-demo',
    templateUrl: './dock-advanced-demo.html',
    styleUrls: ['./dock-advanced-demo.scss'],
    providers: [MessageService, TerminalService]
})
export class DockAdvancedDemo implements OnInit {
    displayTerminal: boolean | undefined;

    displayFinder: boolean | undefined;

    displayGalleria: boolean | undefined;

    dockItems: MenuItem[] | undefined;

    menubarItems: any[] | undefined;

    responsiveOptions: any[] | undefined;

    images: any[] | undefined;

    nodes: any[] | undefined;

    subscription: Subscription | undefined;

    constructor(private galleriaService: PhotoService, private nodeService: NodeService, private messageService: MessageService, private terminalService: TerminalService) {}

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Finder',
                tooltipOptions: {
                    tooltipLabel: 'Finder',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
                command: () => {
                    this.displayFinder = true;
                }
            },
            {
                label: 'Terminal',
                tooltipOptions: {
                    tooltipLabel: 'Terminal',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg',
                command: () => {
                    this.displayTerminal = true;
                }
            },
            {
                label: 'App Store',
                tooltipOptions: {
                    tooltipLabel: 'App Store',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
                }
            },
            {
                label: 'Safari',
                tooltipOptions: {
                    tooltipLabel: 'Safari',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/safari.svg',
                command: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Safari has stopped working' });
                }
            },
            {
                label: 'Photos',
                tooltipOptions: {
                    tooltipLabel: 'Photos',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
                command: () => {
                    this.displayGalleria = true;
                }
            },
            {
                label: 'GitHub',
                tooltipOptions: {
                    tooltipLabel: 'GitHub',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg'
            },
            {
                label: 'Trash',
                tooltipOptions: {
                    tooltipLabel: 'Trash',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Empty Trash' });
                }
            }
        ];

        this.menubarItems = [
            {
                label: 'Finder',
                styleClass: 'menubar-root'
            },
            {
                label: 'File',
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
                label: 'Quit'
            }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        this.subscription = this.terminalService.commandHandler.subscribe((command) => this.commandHandler(command));

        this.galleriaService.getImages().then((data) => (this.images = data));
        this.nodeService.getFiles().then((data) => (this.nodes = data));
    }

    commandHandler(text: any) {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            this.terminalService.sendResponse(response as string);
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}`,scss:`
:host ::ng-deep {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('https://primefaces.org/cdn/primeng/images/dock/window.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }

    .dock-advanced {
        .p-dialog-mask,
        .p-toast {
            position: absolute;
        }

        .p-dialog {
            .p-dialog-header {
                padding: .2rem;
            }

            .p-dialog-content {
                padding: 0;
            }

            p {
                margin-top: 0;
            }

            .p-terminal {
                background-color: #212121;
                color: #ffffff;
                border: 0 none;
                min-height: 18rem;
                height: 100%;

                .p-terminal-command {
                    color: #80CBC4;
                }

                .p-terminal-prompt {
                    color: #FFD54F;
                }

                .p-terminal-response {
                    color: #9FA8DA;
                }
            }

            .p-tree {
                height: 100%;
                border-radius: 0;
                border-left-width: 0;
                border-right-width: 0;
                border-bottom-width: 0;
            }
        }

        .p-toast {
            top: 20px;
        }
    }

    .p-menubar {
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 0;

        .p-menuitem:first-child {
            font-weight: bold;
            padding: 0 1rem;
        }

        .p-menuitem-link {
            padding: 0.5rem .75rem;
        }

        .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
            padding: 0.5rem .75rem;

            > .p-submenu-icon {
                display: none;
            }
        }

        .p-menubar-end {
            span, i {
                padding: 0 .75rem;
            }
        }
    }
}

.dark-tooltip {
    .p-tooltip {
        .p-tooltip-arrow {
            border-top-color: var(--surface-900);
        }

        .p-tooltip-text {
            background-color: var(--surface-900);
        }
    }
}`,service:["PhotoService","NodeService"]}}ngOnInit(){this.dockItems=[{label:"Finder",tooltipOptions:{tooltipLabel:"Finder",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/finder.svg",command:()=>{this.displayFinder=!0}},{label:"Terminal",tooltipOptions:{tooltipLabel:"Terminal",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/terminal.svg",command:()=>{this.displayTerminal=!0}},{label:"App Store",tooltipOptions:{tooltipLabel:"App Store",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/appstore.svg",command:()=>{this.messageService.add({severity:"error",summary:"An unexpected error occurred while signing in.",detail:"UNTRUSTED_CERT_TITLE"})}},{label:"Safari",tooltipOptions:{tooltipLabel:"Safari",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/safari.svg",command:()=>{this.messageService.add({severity:"warn",summary:"Safari has stopped working"})}},{label:"Photos",tooltipOptions:{tooltipLabel:"Photos",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/photos.svg",command:()=>{this.displayGalleria=!0}},{label:"GitHub",tooltipOptions:{tooltipLabel:"GitHub",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/github.svg"},{label:"Trash",tooltipOptions:{tooltipLabel:"Trash",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/trash.png",command:()=>{this.messageService.add({severity:"info",summary:"Empty Trash"})}}],this.menubarItems=[{label:"Finder",styleClass:"menubar-root"},{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit"}],this.responsiveOptions=[{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.subscription=this.terminalService.commandHandler.subscribe(e=>this.commandHandler(e)),this.galleriaService.getImages().then(e=>this.images=e),this.nodeService.getFiles().then(e=>this.nodes=e)}commandHandler(e){let i,o=e.indexOf(" "),m=o!==-1?e.substring(0,o):e;switch(m){case"date":i="Today is "+new Date().toDateString();break;case"greet":i="Hola "+e.substring(o+1)+"!";break;case"random":i=Math.floor(Math.random()*100);break;default:i="Unknown command: "+m;break}i&&this.terminalService.sendResponse(i)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(_(j),_(U),_(z),_(H))},t.\u0275cmp=g({type:t,selectors:[["dock-advanced-demo"]],features:[ae([z,H,j,U])],decls:30,vars:32,consts:[[1,"card"],[3,"model"],["pTemplate","start"],["pTemplate","end"],[1,"dock-window","dock-advanced"],["position","bottom",3,"model"],["pTemplate","item"],[3,"visibleChange","visible","breakpoints","draggable","resizable"],[3,"value"],[3,"visibleChange","maximizable","visible","breakpoints","draggable","resizable"],["welcomeMessage","Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')","prompt","primeng $"],[3,"valueChange","visibleChange","value","showThumbnails","showThumbnailNavigators","showItemNavigators","visible","circular","responsiveOptions","containerStyle","fullScreen"],["selector","dock-advanced-demo",3,"code"],[1,"pi","pi-apple"],[1,"pi","pi-video"],[1,"pi","pi-wifi"],[1,"pi","pi-volume-up"],[1,"pi","pi-search"],[1,"pi","pi-bars"],["width","100%",3,"src","alt"],[2,"width","100%","display","block",3,"src"]],template:function(i,o){i&1&&(r(0,"app-docsectiontext")(1,"p"),a(2," Dock requires a collection of menuitems as its "),r(3,"i"),a(4,"model"),s(),a(5,". Default location is "),r(6,"i"),a(7,"bottom"),s(),a(8," and other sides are also available when defined with the "),r(9,"i"),a(10,"position"),s(),a(11," property. Content of the dock component is defined by "),r(12,"i"),a(13,"item"),s(),a(14," template. "),s()(),r(15,"div",0)(16,"p-menubar",1),h(17,ct,1,0,"ng-template",2)(18,ut,7,0,"ng-template",3),s(),r(19,"div",4)(20,"p-dock",5),h(21,gt,1,2,"ng-template",6),s(),u(22,"p-toast"),r(23,"p-dialog",7),M("visibleChange",function(c){return O(o.displayFinder,c)||(o.displayFinder=c),c}),u(24,"p-tree",8),s(),r(25,"p-dialog",9),M("visibleChange",function(c){return O(o.displayTerminal,c)||(o.displayTerminal=c),c}),u(26,"p-terminal",10),s(),r(27,"p-galleria",11),M("valueChange",function(c){return O(o.images,c)||(o.images=c),c})("visibleChange",function(c){return O(o.displayGalleria,c)||(o.displayGalleria=c),c}),h(28,ft,1,1,"ng-template",6),s()()(),u(29,"app-code",12)),i&2&&(d(16),p("model",o.menubarItems),d(4),p("model",o.dockItems),d(3),K(b(27,pt)),D("visible",o.displayFinder),p("breakpoints",b(28,je))("draggable",!1)("resizable",!1),d(),p("value",o.nodes),d(),K(b(29,mt)),p("maximizable",!0),D("visible",o.displayTerminal),p("breakpoints",b(30,je))("draggable",!1)("resizable",!1),d(2),D("value",o.images),p("showThumbnails",!1)("showThumbnailNavigators",!1)("showItemNavigators",!0),D("visible",o.displayGalleria),p("circular",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",b(31,dt))("circular",!0)("fullScreen",!0),d(2),p("code",o.code))},dependencies:[L,G,P,Me,Ce,Ie,Oe,Pe,Ae,C],encapsulation:2});let n=t;return n})();function ht(n,t){if(n&1){let l=N();r(0,"p-radioButton",7),M("ngModelChange",function(i){v(l);let o=f();return O(o.position,i)||(o.position=i),y(i)}),s()}if(n&2){let l=t.$implicit,e=f();p("name",l.label)("value",l.value)("label",l.label),D("ngModel",e.position),p("inputId",e.label)}}function bt(n,t){if(n&1&&u(0,"img",8),n&2){let l=t.$implicit;p("src",l.icon,T)("alt",l.label)}}var We=(()=>{let t=class t{constructor(){this.position="top",this.positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}],this.code={basic:`<p-dock [model]="items" [position]="position">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.icon" [alt]="item.label" width="100%" />
    </ng-template>
</p-dock>`,html:`
<div class="card">
    <div class="flex flex-wrap gap-3 mb-5">
        <p-radioButton *ngFor="let option of positionOptions" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
    </div>
    <div class="dock-window">
        <p-dock [model]="items" [position]="position">
            <ng-template pTemplate="item" let-item>
                <img [src]="item.icon" [alt]="item.label" width="100%" />
            </ng-template>
        </p-dock>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'dock-basic-demo',
    templateUrl: './dock-basic-demo.html'
})
export class BasicDoc implements OnInit {
    items: MenuItem[] | undefined;

    position: string = 'top';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('https://primefaces.org/cdn/primeng/images/dock/window.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }
}`}}ngOnInit(){this.items=[{label:"Finder",icon:"https://primefaces.org/cdn/primeng/images/dock/finder.svg"},{label:"App Store",icon:"https://primefaces.org/cdn/primeng/images/dock/appstore.svg"},{label:"Photos",icon:"https://primefaces.org/cdn/primeng/images/dock/photos.svg"},{label:"Trash",icon:"https://primefaces.org/cdn/primeng/images/dock/trash.png"}]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["dock-basic-demo"]],decls:22,vars:4,consts:[[1,"card"],[1,"flex","flex-wrap","gap-3","mb-5"],[3,"name","value","label","ngModel","inputId","ngModelChange",4,"ngFor","ngForOf"],[1,"dock-window"],[3,"model","position"],["pTemplate","item"],["selector","dock-basic-demo",3,"code"],[3,"ngModelChange","name","value","label","ngModel","inputId"],["width","100%",3,"src","alt"]],template:function(i,o){i&1&&(r(0,"app-docsectiontext")(1,"p"),a(2," Dock requires a collection of menuitems as its "),r(3,"i"),a(4,"model"),s(),a(5,". Default location is "),r(6,"i"),a(7,"bottom"),s(),a(8," and other sides are also available when defined with the "),r(9,"i"),a(10,"position"),s(),a(11," property. Content of the dock component is defined by "),r(12,"i"),a(13,"item"),s(),a(14," template. "),s()(),r(15,"div",0)(16,"div",1),h(17,ht,1,5,"p-radioButton",2),s(),r(18,"div",3)(19,"p-dock",4),h(20,bt,1,2,"ng-template",5),s()()(),u(21,"app-code",6)),i&2&&(d(17),p("ngForOf",o.positionOptions),d(2),p("model",o.items)("position",o.position),d(2),p("code",o.code))},dependencies:[V,L,G,P,ce,ue,we,C],encapsulation:2});let n=t;return n})();var Ke=(()=>{let t=class t{constructor(){this.code={typescript:"import { DockModule } from 'primeng/dock';"}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&u(0,"app-code",0),i&2&&p("code",o.code)("hideToggleCode",!0)},dependencies:[L],encapsulation:2});let n=t;return n})();var vt=()=>["/theming"],qe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){i&1&&(r(0,"app-docsectiontext")(1,"p"),a(2,"Following is the list of structural style classes, for theming classes visit "),r(3,"a",0),a(4,"theming"),s(),a(5," page."),s()(),r(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),a(11,"Name"),s(),r(12,"th"),a(13,"Element"),s()()(),r(14,"tbody")(15,"tr")(16,"td"),a(17,"p-dock"),s(),r(18,"td"),a(19,"Container element."),s()(),r(20,"tr")(21,"td"),a(22,"p-dock-list"),s(),r(23,"td"),a(24,"List of items."),s()(),r(25,"tr")(26,"td"),a(27,"p-dock-item"),s(),r(28,"td"),a(29,"Each items in list."),s()()()()()),i&2&&(d(3),p("routerLink",b(1,vt)))},dependencies:[R,C],encapsulation:2});let n=t;return n})();var Qe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=w({imports:[F,_e,S,Re,ge,xe,Fe,Te,De,Ee,Le,Ne,Y,Y]});let n=t;return n})();var yt=()=>["Dock","MenuItem"],$e=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:Ke},{id:"basic",label:"Basic",component:We},{id:"advanced",label:"Advanced",component:Ge},{id:"style",label:"Style",component:qe},{id:"accessibility",label:"Accessibility",component:Ue}]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Dock Component","header","Dock","description","Dock is a navigation component consisting of menuitems.",3,"docs","apiDocs"]],template:function(i,o){i&1&&u(0,"app-doc",0),i&2&&p("docs",o.docs)("apiDocs",b(2,yt))},dependencies:[Se],styles:["[_nghost-%COMP%]     .dock-window{width:100%;height:450px;position:relative;background-image:url(https://primefaces.org/cdn/primeng/images/dock/window.jpg);background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]     .p-dock{z-index:1000}[_nghost-%COMP%]     .dock-advanced .p-dialog-mask, [_nghost-%COMP%]     .dock-advanced .p-toast{position:absolute}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-dialog-header{padding:.2rem}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-dialog-content{padding:0}[_nghost-%COMP%]     .dock-advanced .p-dialog p{margin-top:0}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-terminal{background-color:#212121;color:#fff;border:0 none;min-height:18rem;height:100%}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-terminal .p-terminal-command{color:#80cbc4}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-terminal .p-terminal-prompt{color:#ffd54f}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-terminal .p-terminal-response{color:#9fa8da}[_nghost-%COMP%]     .dock-advanced .p-dialog .p-tree{height:100%;border-radius:0;border-left-width:0;border-right-width:0;border-bottom-width:0}[_nghost-%COMP%]     .dock-advanced .p-toast{top:20px}[_nghost-%COMP%]     .p-menubar{padding-top:0;padding-bottom:0;border-radius:0}[_nghost-%COMP%]     .p-menubar .menubar-root{font-weight:700;padding:0 1rem}[_nghost-%COMP%]     .p-menubar .p-menuitem-link{padding:.5rem .75rem}[_nghost-%COMP%]     .p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link{padding:.5rem .75rem}[_nghost-%COMP%]     .p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon{display:none}[_nghost-%COMP%]     .p-menubar .p-menubar-end span, [_nghost-%COMP%]     .p-menubar .p-menubar-end i{padding:0 .75rem}.dark-tooltip[_ngcontent-%COMP%]   .p-tooltip[_ngcontent-%COMP%]   .p-tooltip-arrow[_ngcontent-%COMP%]{border-top-color:var(--surface-900)}.dark-tooltip[_ngcontent-%COMP%]   .p-tooltip[_ngcontent-%COMP%]   .p-tooltip-text[_ngcontent-%COMP%]{background-color:var(--surface-900)}"]});let n=t;return n})();var Je=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=w({imports:[S.forChild([{path:"",component:$e}]),S]});let n=t;return n})();var qi=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=x({type:t}),t.\u0275inj=w({imports:[F,Je,Qe]});let n=t;return n})();export{qi as DockDemoModule};
