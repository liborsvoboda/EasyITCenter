import{a as O,b as Me}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import{c as De,d as oe,f as re,g as ae,h as ce}from"./chunk-XSSXK7EZ.js";import{a as C,b as Ie,c as se}from"./chunk-AS5FXEGH.js";import{a as D,b as Pe}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as Z,a as w,b as we,d as x,i as te,k as S,l as je,n as ke,q as F,r as ie,s as ne,y as $,z as R}from"./chunk-UWMVDULA.js";import{o as Te,t as V}from"./chunk-N5X6XDRN.js";import{Cc as ye,Eb as ge,Fb as ve,Fc as _e,Gb as H,Hb as z,Ib as ee,Ic as Ce,Jb as a,Jc as Ee,Kb as M,Nc as B,Qa as ue,Qb as L,Sa as l,Sb as N,Ta as f,Tb as Y,Ub as xe,V as j,Ya as he,da as u,dc as A,ea as k,ib as h,jb as W,kb as m,kc as be,ma as y,na as _,ob as T,rb as o,sb as r,tb as d,ua as fe,ub as G,va as q,vb as J,vc as Se,wb as X,xb as I,yb as v,zb as p}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Qe=(t,e)=>({showTransitionParams:t,hideTransitionParams:e}),Ke=t=>({value:"open",params:t}),Le=t=>({$implicit:t});function Ue(t,e){t&1&&X(0)}function qe(t,e){if(t&1&&(G(0),h(1,Ue,1,0,"ng-container",8),J()),t&2){let c=p(2);l(),m("ngTemplateOutlet",c.headlessTemplate)("ngTemplateOutletContext",Y(2,Le,c.confirmation))}}function We(t,e){t&1&&X(0)}function Ge(t,e){if(t&1&&(G(0),h(1,We,1,0,"ng-container",8),J()),t&2){let c=p(3);l(),m("ngTemplateOutlet",c.contentTemplate)("ngTemplateOutletContext",Y(2,Le,c.confirmation))}}function Je(t,e){if(t&1&&d(0,"i",14),t&2){let c=p(4);T(c.confirmation==null?null:c.confirmation.icon),m("ngClass","p-confirm-popup-icon")}}function Xe(t,e){if(t&1&&(h(0,Je,1,3,"i",12),o(1,"span",13),a(2),r()),t&2){let c=p(3);m("ngIf",c.confirmation==null?null:c.confirmation.icon),l(2),M(c.confirmation==null?null:c.confirmation.message)}}function et(t,e){if(t&1&&d(0,"i"),t&2){let c=p(4);T(c.confirmation==null?null:c.confirmation.rejectIcon)}}function tt(t,e){}function it(t,e){t&1&&h(0,tt,0,0,"ng-template",null,3,A)}function nt(t,e){if(t&1){let c=I();o(0,"button",15),v("click",function(){y(c);let i=p(3);return _(i.reject())}),h(1,et,1,2,"i",16)(2,it,2,0,null,17),r()}if(t&2){let c=p(3);T((c.confirmation==null?null:c.confirmation.rejectButtonStyleClass)||"p-button-text"),m("label",c.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),W("aria-label",c.rejectButtonLabel),l(),m("ngIf",c.confirmation==null?null:c.confirmation.rejectIcon)("ngIfElse",c.rejecticon),l(),m("ngTemplateOutlet",c.rejectIconTemplate)}}function ot(t,e){if(t&1&&d(0,"i"),t&2){let c=p(4);T(c.confirmation==null?null:c.confirmation.acceptIcon)}}function rt(t,e){}function at(t,e){t&1&&h(0,rt,0,0,"ng-template",null,4,A)}function ct(t,e){if(t&1){let c=I();o(0,"button",15),v("click",function(){y(c);let i=p(3);return _(i.accept())}),h(1,ot,1,2,"i",16)(2,at,2,0,null,17),r()}if(t&2){let c=p(3);T(c.confirmation==null?null:c.confirmation.acceptButtonStyleClass),m("label",c.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),W("aria-label",c.acceptButtonLabel),l(),m("ngIf",c.confirmation==null?null:c.confirmation.acceptIcon)("ngIfElse",c.accepticon),l(),m("ngTemplateOutlet",c.acceptIconTemplate)}}function st(t,e){if(t&1&&(o(0,"div",9,1),h(2,Ge,2,4,"ng-container",7)(3,Xe,3,2,"ng-template",null,2,A),r(),o(5,"div",10),h(6,nt,3,8,"button",11)(7,ct,3,8,"button",11),r()),t&2){let c=ee(4),n=p(2);l(2),m("ngIf",n.contentTemplate)("ngIfElse",c),l(4),m("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),l(),m("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function mt(t,e){if(t&1){let c=I();o(0,"div",6),v("click",function(i){y(c);let s=p();return _(s.onOverlayClick(i))})("@animation.start",function(i){y(c);let s=p();return _(s.onAnimationStart(i))})("@animation.done",function(i){y(c);let s=p();return _(s.onAnimationEnd(i))}),h(1,qe,2,4,"ng-container",7)(2,st,8,4,"ng-template",null,0,A),r()}if(t&2){let c=ee(3),n=p();T(n.styleClass),m("ngClass","p-confirm-popup p-component")("ngStyle",n.style)("@animation",Y(10,Ke,xe(7,Qe,n.showTransitionOptions,n.hideTransitionOptions))),l(),m("ngIf",n.headlessTemplate)("ngIfElse",c)}}var P=(()=>{let e=class e{get visible(){return this._visible}set visible(n){this._visible=n,this.cd.markForCheck()}constructor(n,i,s,g,b,K,Ze){this.el=n,this.confirmationService=i,this.renderer=s,this.cd=g,this.config=b,this.overlayService=K,this.document=Ze,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(U=>{if(!U){this.hide();return}U.key===this.key&&(this.confirmation=U,this.confirmation.accept&&(this.confirmation.acceptEvent=new q,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new q,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}ngAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"content":this.contentTemplate=n.template;break;case"rejecticon":this.rejectIconTemplate=n.template;break;case"accepticon":this.acceptIconTemplate=n.template;break;case"headless":this.headlessTemplate=n.template;break}})}onEscapeKeydown(n){this.confirmation&&this.confirmation.closeOnEscape&&this.reject()}onAnimationStart(n){if(n.toState==="open"){this.container=n.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let i=this.getElementToFocus();i&&i.focus()}}onAnimationEnd(n){switch(n.toState){case"void":this.onContainerDestroy();break}}getElementToFocus(){switch(this.defaultFocus){case"accept":return w.findSingle(this.container,".p-confirm-popup-accept");case"reject":return w.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&te.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;w.absolutePosition(this.container,this.confirmation?.target);let n=w.getOffset(this.container),i=w.getOffset(this.confirmation?.target),s=0;n.left<i.left&&(s=i.left-n.left),this.container.style.setProperty("--overlayArrowLeft",`${s}px`),n.top<i.top&&w.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(n){this.overlayService.add({originalEvent:n,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let n=w.isIOS()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,n,s=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let g=this.confirmation.target;this.container!==s.target&&!this.container?.contains(s.target)&&g!==s.target&&!g.contains(s.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!w.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new we(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&te.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(ne.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(ne.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(f(fe),f(x),f(he),f(be),f(ke),f(je),f(Se))},e.\u0275cmp=u({type:e,selectors:[["p-confirmPopup"]],contentQueries:function(i,s,g){if(i&1&&ge(g,F,4),i&2){let b;H(b=z())&&(s.templates=b)}},hostAttrs:[1,"p-element"],hostBindings:function(i,s){i&1&&v("keydown.escape",function(b){return s.onEscapeKeydown(b)},!1,ue)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticon",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirm-popup-content"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"label","ngClass","class","click",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[3,"ngClass"],["type","button","pButton","",3,"click","label","ngClass"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"]],template:function(i,s){i&1&&h(0,mt,4,12,"div",5),i&2&&m("ngIf",s.visible)},dependencies:[ye,_e,Ee,Ce,$],styles:[`@layer primeng{.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}}
`],encapsulation:2,data:{animation:[De("animation",[ae("void",re({transform:"scaleY(0.8)",opacity:0})),ae("open",re({transform:"translateY(0)",opacity:1})),ce("void => open",oe("{{showTransitionParams}}")),ce("open => void",oe("{{hideTransitionParams}}"))])]},changeDetection:0});let t=e;return t})(),Be=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=k({type:e}),e.\u0275inj=j({imports:[B,Z,ie,ie]});let t=e;return t})();var Re=(()=>{let e=class e{constructor(n,i){this.confirmationService=n,this.messageService=i,this.code={basic:`<p-toast></p-toast>
    <p-confirmPopup></p-confirmPopup>
    <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
<p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" severity="danger"></p-button>`,html:`<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <p-confirmPopup></p-confirmPopup>
    <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
    <p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" severity="danger"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
        
@Component({
    selector: 'confirm-popup-basic-demo',
    templateUrl: './confirm-popup-basic-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
    
    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger p-button-sm',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`}}confirm1(n){this.confirmationService.confirm({target:n.target,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}confirm2(n){this.confirmationService.confirm({target:n.target,message:"Do you want to delete this record?",icon:"pi pi-info-circle",acceptButtonStyleClass:"p-button-danger p-button-sm",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}};e.\u0275fac=function(i){return new(i||e)(f(x),f(S))},e.\u0275cmp=u({type:e,selectors:[["confirm-popup-basic-demo"]],features:[L([x,S])],decls:15,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["icon","pi pi-check","label","Confirm",3,"click"],["icon","pi pi-times","label","Delete","severity","danger",3,"click"],["selector","confirm-popup-basic-demo",3,"code"]],template:function(i,s){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"ConfirmPopup is defined using "),o(3,"i"),a(4,"p-confirmPopup"),r(),a(5," tag and an instance of "),o(6,"i"),a(7,"ConfirmationService"),r(),a(8," is required to display it bycalling confirm method."),r()(),o(9,"div",0),d(10,"p-toast")(11,"p-confirmPopup"),o(12,"p-button",1),v("click",function(b){return s.confirm1(b)}),r(),o(13,"p-button",2),v("click",function(b){return s.confirm2(b)}),r()(),d(14,"app-code",3)),i&2&&(l(14),m("code",s.code))},dependencies:[D,P,R,O,C],encapsulation:2});let t=e;return t})();var Oe=(()=>{let e=class e{constructor(){this.code={typescript:"import { ConfirmPopupModule } from 'primeng/confirmpopup';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,s){i&1&&d(0,"app-code",0),i&2&&m("code",s.code)("hideToggleCode",!0)},dependencies:[D],encapsulation:2});let t=e;return t})();var lt=()=>["/theming"],Ae=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["style-doc"]],decls:40,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,s){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),a(4,"theming"),r(),a(5," page."),r()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),a(11,"Name"),r(),o(12,"th"),a(13,"Element"),r()()(),o(14,"tbody")(15,"tr")(16,"td"),a(17,"p-confirm-popup"),r(),o(18,"td"),a(19,"Container element"),r()(),o(20,"tr")(21,"td"),a(22,"p-confirm-popup-content"),r(),o(23,"td"),a(24,"Content element."),r()(),o(25,"tr")(26,"td"),a(27,"p-confirm-popup-icon"),r(),o(28,"td"),a(29,"Message icon."),r()(),o(30,"tr")(31,"td"),a(32,"p-confirm-popup-message"),r(),o(33,"td"),a(34,"Message text."),r()(),o(35,"tr")(36,"td"),a(37,"p-confirm-popup-footer"),r(),o(38,"td"),a(39,"Footer element for buttons."),r()()()()()),i&2&&(l(3),m("routerLink",N(1,lt)))},dependencies:[Te,C],encapsulation:2});let t=e;return t})();var Ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["accessibility-doc"]],decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,s){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),a(3,"Screen Reader"),r(),o(4,"p"),a(5," ConfirmPopup component uses "),o(6,"i"),a(7,"alertdialog"),r(),a(8," role and since any attribute is passed to the root element you may define attributes like "),o(9,"i"),a(10,"aria-label"),r(),a(11," or "),o(12,"i"),a(13,"aria-labelledby"),r(),a(14," to describe the popup contents. In addition "),o(15,"i"),a(16,"aria-modal"),r(),a(17," is added since focus is kept within the popup. "),r(),o(18,"p"),a(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),o(20,"i"),a(21,"tabIndex"),r(),a(22," would be necessary. ConfirmPopup adds "),o(23,"i"),a(24,"aria-expanded"),r(),a(25," state attribute and "),o(26,"i"),a(27,"aria-controls"),r(),a(28," to the trigger so that the relation between the trigger and the popup is defined. "),r(),o(29,"h3"),a(30,"Overlay Keyboard Support"),r(),o(31,"p"),a(32,"When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),o(33,"i"),a(34,"autofocus"),r(),a(35," to an element within the popup."),r(),o(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),a(41,"Key"),r(),o(42,"th"),a(43,"Function"),r()()(),o(44,"tbody")(45,"tr")(46,"td")(47,"i"),a(48,"tab"),r()(),o(49,"td"),a(50,"Moves focus to the next the focusable element within the popup."),r()(),o(51,"tr")(52,"td")(53,"i"),a(54,"shift"),r(),a(55," + "),o(56,"i"),a(57,"tab"),r()(),o(58,"td"),a(59,"Moves focus to the previous the focusable element within the popup."),r()(),o(60,"tr")(61,"td")(62,"i"),a(63,"escape"),r()(),o(64,"td"),a(65,"Closes the popup and moves focus to the trigger."),r()()()()(),o(66,"h3"),a(67,"Buttons Keyboard Support"),r(),o(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),a(73,"Key"),r(),o(74,"th"),a(75,"Function"),r()()(),o(76,"tbody")(77,"tr")(78,"td")(79,"i"),a(80,"enter"),r()(),o(81,"td"),a(82,"Triggers the action, closes the popup and moves focus to the trigger."),r()(),o(83,"tr")(84,"td")(85,"i"),a(86,"space"),r()(),o(87,"td"),a(88,"Triggers the action, closes the popup and moves focus to the trigger."),r()()()()()()())},dependencies:[C],encapsulation:2});let t=e;return t})();function dt(t,e){if(t&1&&(o(0,"div",4),d(1,"i",5),o(2,"p"),a(3),r()()),t&2){let c=e.$implicit;l(),T(c.icon),l(2),M(c.message)}}var He=(()=>{let e=class e{constructor(n,i){this.confirmationService=n,this.messageService=i,this.code={basic:`<p-toast></p-toast>
    <p-confirmPopup>
        <ng-template pTemplate="content" let-message>
            <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border p-3 mb-3">
                <i [class]="message.icon" class="text-6xl text-primary-500"></i>
                <p>{{ message.message }}</p>
            </div>
        </ng-template>
    </p-confirmPopup>
<p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>`,html:`<div class="card flex justify-content-center gap-2">
        <p-toast></p-toast>
        <p-confirmPopup>
            <ng-template pTemplate="content" let-message>
                <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border p-3 mb-3">
                    <i [class]="message.icon" class="text-6xl text-primary-500"></i>
                    <p>{{ message.message }}</p>
                </div>
            </ng-template>
        </p-confirmPopup>
    <p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
        
@Component({
    selector: 'confirm-popup-template-demo',
    templateUrl: './confirm-popup-template-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupTemplateDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
    
    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Please confirm to proceed moving forward.',
            icon: 'pi pi-exclamation-circle',
            acceptIcon: 'pi pi-check mr-1',
            rejectIcon: 'pi pi-times mr-1',
            rejectButtonStyleClass: 'p-button-danger p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`}}confirm(n){this.confirmationService.confirm({target:n.target,message:"Please confirm to proceed moving forward.",icon:"pi pi-exclamation-circle",acceptIcon:"pi pi-check mr-1",rejectIcon:"pi pi-times mr-1",rejectButtonStyleClass:"p-button-danger p-button-sm",acceptButtonStyleClass:"p-button-outlined p-button-sm",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}};e.\u0275fac=function(i){return new(i||e)(f(x),f(S))},e.\u0275cmp=u({type:e,selectors:[["confirm-popup-template-demo"]],features:[L([x,S])],decls:12,vars:1,consts:[[1,"card","flex","justify-content-center"],["pTemplate","content"],["icon","pi pi-check","label","Confirm",3,"click"],["selector","confirm-popup-template-demo",3,"code"],[1,"flex","flex-column","align-items-center","w-full","gap-3","border-bottom-1","surface-border","p-3","mb-3"],[1,"text-6xl","text-primary-500"]],template:function(i,s){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Content section can be customized using "),o(3,"i"),a(4,"content"),r(),a(5," template."),r()(),o(6,"div",0),d(7,"p-toast"),o(8,"p-confirmPopup"),h(9,dt,4,3,"ng-template",1),r(),o(10,"p-button",2),v("click",function(b){return s.confirm(b)}),r()(),d(11,"app-code",3)),i&2&&(l(11),m("code",s.code))},dependencies:[D,P,F,R,O,C],encapsulation:2});let t=e;return t})();function ft(t,e){if(t&1){let c=I();o(0,"div",5)(1,"span"),a(2),r(),o(3,"div",6)(4,"button",7),v("click",function(){y(c);let i=p();return _(i.accept())}),r(),o(5,"button",8),v("click",function(){y(c);let i=p();return _(i.reject())}),r()()()}if(t&2){let c=e.$implicit;l(2),M(c.message)}}var ze=(()=>{let e=class e{constructor(n,i){this.confirmationService=n,this.messageService=i,this.code={basic:`<p-toast></p-toast>
    <p-confirmPopup #confirmPopupRef>
        <ng-template pTemplate="headless" let-message let-test>
            <div class="bg-gray-900 text-white border-round p-3">
                <span>{{ message.message }}</span>
                <div class="flex align-items-center gap-2 mt-3">
                    <button (click)="accept()" pButton label="Save" class="p-button-sm p-button-outlined"></button>
                    <button (click)="reject()" pButton label="Cancel" class="p-button-sm p-button-text"></button>
                </div>
            </div>
        </ng-template>
    </p-confirmPopup>
<p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>`,html:`<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <p-confirmPopup #confirmPopupRef>
        <ng-template pTemplate="headless" let-message let-test>
            <div class="bg-gray-900 text-white border-round p-3">
                <span>{{ message.message }}</span>
                <div class="flex align-items-center gap-2 mt-3">
                    <button (click)="accept()" pButton label="Save" class="p-button-sm p-button-outlined"></button>
                    <button (click)="reject()" pButton label="Cancel" class="p-button-sm p-button-text"></button>
                </div>
            </div>
        </ng-template>
    </p-confirmPopup>
<p-button (click)="confirm($event)" icon="pi pi-check" label="Confirm"></p-button>`,typescript:`
import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';

@Component({
    selector: 'confirm-popup-headless-demo',
    templateUrl: './confirm-popup-headless-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupHeadlessDemo {
   constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

    accept() {
        this.confirmPopup.accept();
    }

    reject() {
        this.confirmPopup.reject();
    }

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure? You cannot undo this.',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`}}accept(){this.confirmPopup.accept()}reject(){this.confirmPopup.reject()}confirm(n){this.confirmationService.confirm({target:n.target,message:"Are you sure? You cannot undo this.",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}};e.\u0275fac=function(i){return new(i||e)(f(x),f(S))},e.\u0275cmp=u({type:e,selectors:[["confirm-popup-headless-demo"]],viewQuery:function(i,s){if(i&1&&ve(P,5),i&2){let g;H(g=z())&&(s.confirmPopup=g.first)}},features:[L([x,S])],decls:12,vars:1,consts:[["confirmPopupRef",""],[1,"card","flex","justify-content-center"],["pTemplate","headless"],["icon","pi pi-check","label","Confirm",3,"click"],["selector","confirm-popup-headless-demo",3,"code"],[1,"bg-gray-900","text-white","border-round","p-3"],[1,"flex","align-items-center","gap-2","mt-3"],["pButton","","label","Save",1,"p-button-sm","p-button-outlined",3,"click"],["pButton","","label","Cancel",1,"p-button-sm","p-button-text",3,"click"]],template:function(i,s){if(i&1){let g=I();o(0,"app-docsectiontext")(1,"p")(2,"i"),a(3,"Headless"),r(),a(4," mode allows you to customize the entire user interface instead of the default elements."),r()(),o(5,"div",1),d(6,"p-toast"),o(7,"p-confirmPopup",null,0),h(9,ft,6,1,"ng-template",2),r(),o(10,"p-button",3),v("click",function(K){return y(g),_(s.confirm(K))}),r()(),d(11,"app-code",4)}i&2&&(l(11),m("code",s.code))},dependencies:[D,P,F,$,R,O,C],encapsulation:2});let t=e;return t})();var Ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=k({type:e}),e.\u0275inj=j({imports:[B,Pe,V,Be,Z,Me,se,se]});let t=e;return t})();var ut=()=>["ConfirmPopup","Confirmation","ConfirmationService"],Ye=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Oe},{id:"basic",label:"Basic",component:Re},{id:"template",label:"Template",component:He},{id:"headless",label:"Headless",component:ze},{id:"style",label:"Style",component:Ae},{id:"accessibility",label:"Accessibility",component:Ve}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ConfirmPopup Component","header","ConfirmPopup","description","ConfirmPopup displays a confirmation overlay displayed relatively to its target.",3,"docs","apiDocs"]],template:function(i,s){i&1&&d(0,"app-doc",0),i&2&&m("docs",s.docs)("apiDocs",N(2,ut))},dependencies:[Ie],encapsulation:2});let t=e;return t})();var $e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=k({type:e}),e.\u0275inj=j({imports:[V.forChild([{path:"",component:Ye}]),V]});let t=e;return t})();var Ri=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=k({type:e}),e.\u0275inj=j({imports:[B,$e,Ne]});let t=e;return t})();export{Ri as ConfirmPopupDemoModule};
