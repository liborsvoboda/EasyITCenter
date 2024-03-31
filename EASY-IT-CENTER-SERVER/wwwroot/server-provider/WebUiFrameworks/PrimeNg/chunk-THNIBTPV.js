import{a as $e,b as Ze}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as Re,d as je,e as Ae,f as Fe,w as Be}from"./chunk-DMJDKY6C.js";import"./chunk-COPROXXV.js";import"./chunk-UMPZYH6V.js";import"./chunk-24SD7D6H.js";import"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-ORJYCDDT.js";import"./chunk-KL3QZRIM.js";import{a as Ne}from"./chunk-NZVHRD6T.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-RJKOGX2L.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import{a as Ve}from"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import{c as ke,d as te,f as Z,g as U,h as ie}from"./chunk-XSSXK7EZ.js";import{a as S,b as He,c as ne}from"./chunk-AS5FXEGH.js";import{a as T,b as ze}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as Le,a as I,b as Ee,i as H,k as $,l as Ie,n as De,q as j,r as ee,w as Oe,x as Me,z as O}from"./chunk-UWMVDULA.js";import{o as Pe,t as A}from"./chunk-N5X6XDRN.js";import{Ab as ue,Bb as fe,Cb as X,Cc as Ce,Eb as he,Fc as N,Gb as ge,Hb as ve,Ib as _,Ic as _e,Jb as a,Jc as Te,Kb as L,Na as q,Nb as ye,Nc as R,Ob as be,Pb as xe,Pc as z,Qa as le,Qb as Se,Sa as p,Sb as V,Ta as y,Ub as J,V as D,Ya as se,_a as ce,da as d,ea as k,ib as b,jb as G,kb as c,kc as B,ma as u,na as f,nb as pe,ob as me,rb as o,sb as r,tb as m,ua as re,va as Y,vc as we,wb as de,xb as x,yb as v,za as ae,zb as g}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ot=["*"],rt=(n,e)=>({showTransitionParams:n,hideTransitionParams:e}),at=(n,e)=>({value:n,params:e});function lt(n,e){n&1&&de(0)}function st(n,e){n&1&&m(0,"TimesIcon",8),n&2&&c("styleClass","p-overlaypanel-close-icon")}function ct(n,e){}function pt(n,e){n&1&&b(0,ct,0,0,"ng-template")}function mt(n,e){if(n&1&&(o(0,"span",9),b(1,pt,1,0,null,3),r()),n&2){let s=g(3);p(),c("ngTemplateOutlet",s.closeIconTemplate)}}function dt(n,e){if(n&1){let s=x();o(0,"button",5),v("click",function(t){u(s);let l=g(2);return f(l.onCloseClick(t))})("keydown.enter",function(){u(s);let t=g(2);return f(t.hide())}),b(1,st,1,1,"TimesIcon",6)(2,mt,2,1,"span",7),r()}if(n&2){let s=g(2);G("aria-label",s.ariaCloseLabel),p(),c("ngIf",!s.closeIconTemplate),p(),c("ngIf",s.closeIconTemplate)}}function ut(n,e){if(n&1){let s=x();o(0,"div",1),v("click",function(t){u(s);let l=g();return f(l.onOverlayClick(t))})("@animation.start",function(t){u(s);let l=g();return f(l.onAnimationStart(t))})("@animation.done",function(t){u(s);let l=g();return f(l.onAnimationEnd(t))}),o(1,"div",2),v("click",function(t){u(s);let l=g();return f(l.onContentClick(t))})("mousedown",function(t){u(s);let l=g();return f(l.onContentClick(t))}),fe(2),b(3,lt,1,0,"ng-container",3),r(),b(4,dt,3,3,"button",4),r()}if(n&2){let s=g();me(s.styleClass),c("ngClass","p-overlaypanel p-component")("ngStyle",s.style)("@animation",J(13,at,s.overlayVisible?"open":"close",J(10,rt,s.showTransitionOptions,s.hideTransitionOptions))),G("aria-modal",s.overlayVisible)("aria-label",s.ariaLabel)("aria-labelledBy",s.ariaLabelledBy),p(3),c("ngTemplateOutlet",s.contentTemplate),p(),c("ngIf",s.showCloseIcon)}}var M=(()=>{let e=class e{constructor(i,t,l,h,C,P,E,Q){this.document=i,this.platformId=t,this.el=l,this.renderer=h,this.cd=C,this.zone=P,this.config=E,this.overlayService=Q,this.dismissable=!0,this.appendTo="body",this.autoZIndex=!0,this.baseZIndex=0,this.focusOnShow=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onShow=new Y,this.onHide=new Y,this.overlayVisible=!1,this.render=!1,this.isOverlayAnimationInProgress=!1,this.selfClick=!1}ngAfterContentInit(){this.templates?.forEach(i=>{switch(i.getType()){case"content":this.contentTemplate=i.template;break;case"closeicon":this.closeIconTemplate=i.template;break;default:this.contentTemplate=i.template;break}this.cd.markForCheck()})}bindDocumentClickListener(){if(z(this.platformId)&&!this.documentClickListener&&this.dismissable){let i=I.isIOS()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,i,l=>{!this.container?.contains(l.target)&&this.target!==l.target&&!this.target.contains(l.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(i,t){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(i,t)&&(this.destroyCallback=()=>{this.show(null,t||i.currentTarget||i.target)}),this.hide()):this.show(i,t))}show(i,t){t&&i&&i.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=t||i.currentTarget||i.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(i){this.overlayService.add({originalEvent:i,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(i){let t=i.target;this.selfClick=i.offsetX<t.clientWidth&&i.offsetY<t.clientHeight}hasTargetChanged(i,t){return this.target!=null&&this.target!==(t||i.currentTarget||i.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):I.appendChild(this.container,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&H.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),I.absolutePosition(this.container,this.target);let i=I.getOffset(this.container),t=I.getOffset(this.target),l=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),h=0;i.left<t.left&&(h=t.left-i.left-parseFloat(l)*2),this.container?.style.setProperty("--overlayArrowLeft",`${h}px`),i.top<t.top&&(I.addClass(this.container,"p-overlaypanel-flipped"),this.showCloseIcon&&this.renderer.setStyle(this.container,"margin-top","-30px"))}onAnimationStart(i){i.toState==="open"&&(this.container=i.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(i){switch(i.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&H.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let i=I.findSingle(this.container,"[autofocus]");i&&this.zone.runOutsideAngular(()=>{setTimeout(()=>i.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(i){this.hide(),i.preventDefault()}onEscapeKeydown(i){this.hide()}onWindowResize(){this.overlayVisible&&!I.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){if(z(this.platformId)&&!this.documentResizeListener){let i=this.document.defaultView;this.documentResizeListener=this.renderer.listen(i,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){z(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Ee(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&H.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}};e.\u0275fac=function(t){return new(t||e)(y(we),y(ae),y(re),y(se),y(B),y(ce),y(De),y(Ie))},e.\u0275cmp=d({type:e,selectors:[["p-overlayPanel"]],contentQueries:function(t,l,h){if(t&1&&he(h,j,4),t&2){let C;ge(C=ve())&&(l.templates=C)}},hostAttrs:[1,"p-element"],hostBindings:function(t,l){t&1&&v("keydown.escape",function(C){return l.onEscapeKeydown(C)},!1,le)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:"dismissable",showCloseIcon:"showCloseIcon",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:"autoZIndex",ariaCloseLabel:"ariaCloseLabel",baseZIndex:"baseZIndex",focusOnShow:"focusOnShow",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},ngContentSelectors:ot,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-overlaypanel-content",3,"click","mousedown"],[4,"ngTemplateOutlet"],["type","button","class","p-overlaypanel-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],["type","button","pRipple","",1,"p-overlaypanel-close","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-overlaypanel-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-overlaypanel-close-icon"]],template:function(t,l){t&1&&(ue(),b(0,ut,5,16,"div",0)),t&2&&c("ngIf",l.render)},dependencies:[Ce,N,Te,_e,Oe,Ve],styles:[`@layer primeng{.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}}
`],encapsulation:2,data:{animation:[ke("animation",[U("void",Z({transform:"scaleY(0.8)",opacity:0})),U("close",Z({opacity:0})),U("open",Z({transform:"translateY(0)",opacity:1})),ie("void => open",te("{{showTransitionParams}}")),ie("open => close",te("{{hideTransitionParams}}"))])]},changeDetection:0});let n=e;return n})(),Ue=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k({type:e}),e.\u0275inj=D({imports:[R,Me,ee,ee]});let n=e;return n})();var We=(()=>{let e=class e{constructor(){this.code={basic:`<p-overlayPanel #op>
    <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
</p-overlayPanel>
<p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>`,html:`
<div class="card flex justify-content-center">
    <p-overlayPanel #op>
        <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
    </p-overlayPanel>
    <p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-panel-basic-demo',
    templateUrl: './overlay-panel-basic-demo.html'
})
export class OverlayPanelBasicDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:18,vars:1,consts:[["op",""],[1,"card","flex","justify-content-center"],["src","https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg","alt","product"],["icon","pi pi-image","label","Show",3,"click"],["selector","overlay-panel-basic-demo",3,"code"]],template:function(t,l){if(t&1){let h=x();o(0,"app-docsectiontext")(1,"p"),a(2,"OverlayPanel is accessed via its reference and visibility is controlled using "),o(3,"i"),a(4,"toggle"),r(),a(5,", "),o(6,"i"),a(7,"show"),r(),a(8," and "),o(9,"i"),a(10,"hide"),r(),a(11," methods with an event of the target."),r()(),o(12,"div",1)(13,"p-overlayPanel",null,0),m(15,"img",2),r(),o(16,"p-button",3),v("click",function(P){u(h);let E=_(14);return f(E.toggle(P))}),r()(),m(17,"app-code",4)}t&2&&(p(17),c("code",l.code))},dependencies:[T,M,O,S],encapsulation:2});let n=e;return n})();var Ke=(()=>{let e=class e{constructor(){this.code={typescript:"import { OverlayPanelModule } from 'primeng/overlaypanel';"}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&m(0,"app-code",0),t&2&&c("code",l.code)("hideToggleCode",!0)},dependencies:[T],encapsulation:2});let n=e;return n})();var ft=()=>["/theming"],Qe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),a(4,"theming"),r(),a(5," page."),r()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),a(11,"Name"),r(),o(12,"th"),a(13,"Element"),r()()(),o(14,"tbody")(15,"tr")(16,"td"),a(17,"p-overlaypanel"),r(),o(18,"td"),a(19,"Container element."),r()(),o(20,"tr")(21,"td"),a(22,"p-overlaypanel-content"),r(),o(23,"td"),a(24,"Content of the panel."),r()(),o(25,"tr")(26,"td"),a(27,"p-overlaypanel-close"),r(),o(28,"td"),a(29,"Close icon."),r()()()()()),t&2&&(p(3),c("routerLink",V(1,ft)))},dependencies:[Pe,S],encapsulation:2});let n=e;return n})();var gt=()=>({width:"450px"});function vt(n,e){if(n&1&&(o(0,"div",7)(1,"div",8),m(2,"img",9),r(),o(3,"div",10)(4,"span",11),a(5),r(),o(6,"span",12),a(7),r()(),o(8,"span",13),a(9),r()()),n&2){let s=g();p(2),X("src","https://primefaces.org/cdn/primeng/images/demo/product/",s.selectedProduct.image,"",q),c("alt",s.selectedProduct.name),p(3),L(s.selectedProduct.name),p(2),L("$"+s.selectedProduct.price),p(2),L(s.selectedProduct.category)}}function yt(n,e){n&1&&(o(0,"tr")(1,"th",17),a(2,"Name"),m(3,"p-sortIcon",18),r(),o(4,"th"),a(5,"Image"),r(),o(6,"th",19),a(7,"Price "),m(8,"p-sortIcon",20),r()())}function bt(n,e){if(n&1&&(o(0,"tr",21)(1,"td"),a(2),r(),o(3,"td"),m(4,"img",22),r(),o(5,"td"),a(6),r()()),n&2){let s=e.$implicit,i=e.$implicit;c("pSelectableRow",s),p(2),L(i.name),p(2),X("src","https://primefaces.org/cdn/primeng/images/demo/product/",i.image,"",q),c("alt",i.image),p(2),L(i.price)}}function xt(n,e){if(n&1){let s=x();o(0,"p-table",14),xe("selectionChange",function(t){u(s);let l=g();return be(l.selectedProduct,t)||(l.selectedProduct=t),f(t)}),v("onRowSelect",function(t){u(s);let l=g(),h=_(8);return f(l.onRowSelect(t,h))}),b(1,yt,9,0,"ng-template",15)(2,bt,7,6,"ng-template",16),r()}if(n&2){let s=g();c("value",s.products),ye("selection",s.selectedProduct),c("paginator",!0)("rows",5)}}var Ye=(()=>{let e=class e{constructor(i,t,l){this.productService=i,this.messageService=t,this.cdr=l,this.code={basic:`<p-toast></p-toast>
<p-button (click)="op.toggle($event)" icon="pi pi-search" [label]="selectedProduct ? selectedProduct.name : 'Select a Product'"></p-button>
<div *ngIf="selectedProduct" class="p-5 surface-card shadow-2 border-round">
    <div class="relative">
        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ selectedProduct.image }}" [alt]="selectedProduct.name" />
    </div>
    <div class="flex align-items-center justify-content-between mt-3 mb-2">
        <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
        <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
    </div>
    <span class="text-600">{{ selectedProduct.category }}</span>
</div>
<p-overlayPanel #op [style]="{ width: '450px' }" [showCloseIcon]="true">
    <ng-template pTemplate="content">
        <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" (onRowSelect)="onRowSelect($event, op)" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Name<p-sortIcon field="name"></p-sortIcon></th>
                    <th>Image</th>
                    <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-rowData let-product>
                <tr [pSelectableRow]="rowData">
                    <td>{{ product.name }}</td>
                    <td><img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.image" class="w-5rem shadow-2" /></td>
                    <td>{{ product.price }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-overlayPanel>`,html:`<div class="card flex flex-column align-items-center gap-3">
<p-toast></p-toast>
<p-button (click)="op.toggle($event)" icon="pi pi-search" [label]="selectedProduct ? selectedProduct.name : 'Select a Product'"></p-button>
<div *ngIf="selectedProduct" class="p-5 surface-card shadow-2 border-round">
    <div class="relative">
        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ selectedProduct.image }}" [alt]="selectedProduct.name" />
    </div>
    <div class="flex align-items-center justify-content-between mt-3 mb-2">
        <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
        <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
    </div>
    <span class="text-600">{{ selectedProduct.category }}</span>
</div>
<p-overlayPanel #op [style]="{ width: '450px' }" [showCloseIcon]="true">
    <ng-template pTemplate="content">
        <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" (onRowSelect)="onRowSelect($event, op)" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Name<p-sortIcon field="name"></p-sortIcon></th>
                    <th>Image</th>
                    <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-rowData let-product>
                <tr [pSelectableRow]="rowData">
                    <td>{{ product.name }}</td>
                    <td><img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.image" class="w-5rem shadow-2" /></td>
                    <td>{{ product.price }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-overlayPanel>
</div>`,typescript:`
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface TableRowSelectEvent {
    originalEvent?: Event;
    data?: any;
    type?: string;
    index?: number;
}

@Component({
    selector: 'overlay-panel-data-table-demo',
    templateUrl: './overlay-panel-data-table-demo.html',
    providers: [ MessageService, ProductService ]
})
export class OverlayPanelDataTableDemo implements OnInit {

    constructor(private productService: ProductService, private messageService: MessageService, private cdr: ChangeDetectorRef) {}
    
    products: Product[] | undefined;

    selectedProduct: Product | undefined;

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
            this.selectedProduct = products[0];
            this.cdr.markForCheck()
        });
    }

    onRowSelect(event: TableRowSelectEvent, op: OverlayPanel) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
        op.hide();
    }
}`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(i=>{this.products=i,this.selectedProduct=i[0],this.cdr.markForCheck()})}onRowSelect(i,t){this.messageService.add({severity:"info",summary:"Product Selected",detail:i.data.name}),t.hide()}};e.\u0275fac=function(t){return new(t||e)(y(Ne),y($),y(B))},e.\u0275cmp=d({type:e,selectors:[["data-table-doc"]],features:[Se([$])],decls:11,vars:8,consts:[["op",""],[1,"card","flex","flex-column","align-items-center","gap-3"],["icon","pi pi-search",3,"click","label"],["class","p-5 surface-card shadow-2 border-round",4,"ngIf"],[3,"showCloseIcon"],["pTemplate","content"],["selector","overlay-panel-data-table-demo",3,"code","extFiles"],[1,"p-5","surface-card","shadow-2","border-round"],[1,"relative"],[3,"src","alt"],[1,"flex","align-items-center","justify-content-between","mt-3","mb-2"],[1,"text-900","font-medium","text-xl"],[1,"text-900","text-xl","ml-3"],[1,"text-600"],["selectionMode","single","responsiveLayout","scroll",3,"selectionChange","onRowSelect","value","selection","paginator","rows"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],[3,"pSelectableRow"],[1,"w-5rem","shadow-2",3,"src","alt"]],template:function(t,l){if(t&1){let h=x();o(0,"app-docsectiontext")(1,"p"),a(2,"An example that displays a DataTable inside a popup to select an item."),r()(),o(3,"div",1),m(4,"p-toast"),o(5,"p-button",2),v("click",function(P){u(h);let E=_(8);return f(E.toggle(P))}),r(),b(6,vt,10,6,"div",3),o(7,"p-overlayPanel",4,0),b(9,xt,3,4,"ng-template",5),r()(),m(10,"app-code",6)}t&2&&(p(5),c("label",l.selectedProduct?l.selectedProduct.name:"Select a Product"),p(),c("ngIf",l.selectedProduct),p(),pe(V(7,gt)),c("showCloseIcon",!0),p(3),c("code",l.code)("extFiles",l.extFiles))},dependencies:[N,T,M,j,O,Re,je,Fe,Ae,$e,S],encapsulation:2});let n=e;return n})();function St(n,e){n&1&&(o(0,"h4"),a(1,"Custom Content"),r())}var qe=(()=>{let e=class e{constructor(){this.code={basic:`<p-overlayPanel #op>
    <ng-template pTemplate="content">
        <h4>Custom Content</h4>
    </ng-template>
</p-overlayPanel>
<p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>`,html:`
<div class="card flex justify-content-center">
    <p-overlayPanel #op>
        <ng-template pTemplate="content">
            <h4>Custom Content</h4>
        </ng-template>
    </p-overlayPanel>
    <p-button (click)="op.toggle($event)" icon="pi pi-image" label="Show"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-panel-template-demo',
    templateUrl: './overlay-panel-template-demo.html'
})
export class OverlayPanelTemplateDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["template-doc"]],decls:12,vars:1,consts:[["op",""],[1,"card","flex","justify-content-center"],["pTemplate","content"],["icon","pi pi-image","label","Show",3,"click"],["selector","overlay-panel-template-demo",3,"code"]],template:function(t,l){if(t&1){let h=x();o(0,"app-docsectiontext")(1,"p"),a(2,"Content of the OverlayPanel is defined by "),o(3,"i"),a(4,"content"),r(),a(5," template."),r()(),o(6,"div",1)(7,"p-overlayPanel",null,0),b(9,St,2,0,"ng-template",2),r(),o(10,"p-button",3),v("click",function(P){u(h);let E=_(8);return f(E.toggle(P))}),r()(),m(11,"app-code",4)}t&2&&(p(11),c("code",l.code))},dependencies:[T,M,j,O,S],encapsulation:2});let n=e;return n})();var Ge=(()=>{let e=class e{constructor(){this.code={basic:`<p-button (click)="op.show($event, targetEl)" icon="pi pi-image" label="Show"></p-button>
<div #targetEl class="mt-5 w-10rem h-5rem border-1 surface-border border-round flex align-items-center justify-content-center">
    <span>Target Element</span>
</div>
<p-overlayPanel #op>
    <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
</p-overlayPanel>`,html:`
<div class="card flex flex-column align-items-center gap-3">
    <p-button (click)="op.show($event, targetEl)" icon="pi pi-image" label="Show"></p-button>
    <div #targetEl class="mt-5 w-10rem h-5rem border-1 surface-border border-round flex align-items-center justify-content-center">
        <span>Target Element</span>
    </div>
    <p-overlayPanel #op>
        <img src="https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg" alt="product" />
    </p-overlayPanel>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-panel-target-demo',
    templateUrl: './overlay-panel-target-demo.html'
})
export class OverlayPanelTargetDemo {}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["target-doc"]],decls:18,vars:1,consts:[["targetEl",""],["op",""],[1,"card","flex","flex-column","align-items-center","gap-3"],["icon","pi pi-image","label","Show",3,"click"],[1,"mt-5","w-10rem","h-5rem","border-1","surface-border","border-round","flex","align-items-center","justify-content-center"],["src","https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg","alt","product"],["selector","overlay-panel-target-demo",3,"code"]],template:function(t,l){if(t&1){let h=x();o(0,"app-docsectiontext")(1,"p")(2,"i"),a(3,"show"),r(),a(4," method takes two parameters, first one is the event and it is mandatory. By default the target component to align the overlay is the event target, if you'd like to align it to another element, provide it as the second parameter "),o(5,"i"),a(6,"target"),r(),a(7,". "),r()(),o(8,"div",2)(9,"p-button",3),v("click",function(P){u(h);let E=_(11),Q=_(15);return f(Q.show(P,E))}),r(),o(10,"div",4,0)(12,"span"),a(13,"Target Element"),r()(),o(14,"p-overlayPanel",null,1),m(16,"img",5),r()(),m(17,"app-code",6)}t&2&&(p(17),c("code",l.code))},dependencies:[T,M,O,S],encapsulation:2});let n=e;return n})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,l){t&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),a(3,"Screen Reader"),r(),o(4,"p"),a(5," OverlayPanel component uses "),o(6,"i"),a(7,"dialog"),r(),a(8," role and since any attribute is passed to the root element you may define attributes like "),o(9,"i"),a(10,"aria-label"),r(),a(11," or "),o(12,"i"),a(13,"aria-labelledby"),r(),a(14," to describe the popup contents. In addition "),o(15,"i"),a(16,"aria-modal"),r(),a(17," is added since focus is kept within the popup. "),r(),o(18,"p"),a(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),o(20,"i"),a(21,"tabIndex"),r(),a(22," would be necessary. OverlayPanel adds "),o(23,"i"),a(24,"aria-expanded"),r(),a(25," state attribute and "),o(26,"i"),a(27,"aria-controls"),r(),a(28," to the trigger so that the relation between the trigger and the popup is defined. "),r(),o(29,"h3"),a(30,"OverlayPanel Keyboard Support"),r(),o(31,"p"),a(32,"When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),o(33,"i"),a(34,"autofocus"),r(),a(35," to an element within the popup."),r(),o(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),a(41,"Key"),r(),o(42,"th"),a(43,"Function"),r()()(),o(44,"tbody")(45,"tr")(46,"td")(47,"i"),a(48,"tab"),r()(),o(49,"td"),a(50,"Moves focus to the next the focusable element within the popup."),r()(),o(51,"tr")(52,"td")(53,"i"),a(54,"shift"),r(),a(55," + "),o(56,"i"),a(57,"tab"),r()(),o(58,"td"),a(59,"Moves focus to the previous the focusable element within the popup."),r()(),o(60,"tr")(61,"td")(62,"i"),a(63,"escape"),r()(),o(64,"td"),a(65,"Closes the popup and moves focus to the trigger."),r()()()()(),o(66,"h3"),a(67,"Close Button Keyboard Support"),r(),o(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),a(73,"Key"),r(),o(74,"th"),a(75,"Function"),r()()(),o(76,"tbody")(77,"tr")(78,"td")(79,"i"),a(80,"enter"),r()(),o(81,"td"),a(82,"Closes the popup and moves focus to the trigger."),r()(),o(83,"tr")(84,"td")(85,"i"),a(86,"space"),r()(),o(87,"td"),a(88,"Closes the popup and moves focus to the trigger."),r()()()()()()())},dependencies:[S],encapsulation:2});let n=e;return n})();var Je=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k({type:e}),e.\u0275inj=D({imports:[R,ze,A,Ue,Le,Be,Ze,ne,ne]});let n=e;return n})();var wt=()=>["OverlayPanel"],et=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Ke},{id:"basic",label:"Basic",component:We},{id:"target",label:"Target",component:Ge},{id:"template",label:"Template",component:qe},{id:"datatable",label:"DataTable",component:Ye},{id:"style",label:"Style",component:Qe},{id:"accessibility",label:"Accessibility",component:Xe}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular OverlayPanel Component","header","OverlayPanel","description","OverlayPanel, also known as Popover, is a container component that can overlay other components on page.",3,"docs","apiDocs"]],template:function(t,l){t&1&&m(0,"app-doc",0),t&2&&c("docs",l.docs)("apiDocs",V(2,wt))},dependencies:[He],encapsulation:2});let n=e;return n})();var tt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k({type:e}),e.\u0275inj=D({imports:[A.forChild([{path:"",component:et}]),A]});let n=e;return n})();var $i=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k({type:e}),e.\u0275inj=D({imports:[R,tt,Je]});let n=e;return n})();export{$i as OverlayPanelDemoModule};
