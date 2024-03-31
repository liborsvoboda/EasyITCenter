import{a as k,b as H}from"./chunk-ES7AWOUN.js";import"./chunk-XSSXK7EZ.js";import{a as s,b as j,c as A}from"./chunk-AS5FXEGH.js";import{a as v,b as R}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as P,q as N,z as T}from"./chunk-UWMVDULA.js";import{t as M}from"./chunk-N5X6XDRN.js";import{Fb as V,Gb as B,Hb as F,Jb as t,Lb as q,Nb as E,Nc as D,Ob as O,Pb as w,Sa as f,Sb as g,V as x,da as p,ea as b,ib as I,kb as m,rb as i,sb as o,tb as d,yb as C}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var le=()=>({breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"}),G=(()=>{let e=class e{constructor(){this.overlayVisible=!1,this.code={basic:`<p-button (click)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">
    Content
</p-overlay>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">
        Content
    </p-overlay>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-basic-demo',
    templateUrl: './overlay-basic-demo.html' 
})
export class OverlayBasicDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`}}toggle(){this.overlayVisible=!this.overlayVisible}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["basic-doc"]],decls:8,vars:4,consts:[[1,"card","flex","justify-content-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-4 surface-overlay shadow-2 border-round",3,"visibleChange","visible","responsive"],["selector","overlay-basic-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Overlay is a container to display content in an overlay window. All the options mentioned above can be used as props for this component."),o()(),i(3,"div",0)(4,"p-button",1),C("click",function(){return l.toggle()}),o(),i(5,"p-overlay",2),w("visibleChange",function(u){return O(l.overlayVisible,u)||(l.overlayVisible=u),u}),t(6," Content "),o()(),d(7,"app-code",3)),n&2&&(f(5),E("visible",l.overlayVisible),m("responsive",g(3,le)),f(2),m("code",l.code))},dependencies:[v,k,T,s],encapsulation:2});let r=e;return r})();var z=(()=>{let e=class e{constructor(){this.code={typescript:`
import { PrimeNGConfig, OverlayOptions } from 'primeng/api';

this.primengConfig.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["appendto-doc"]],decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Overlay can be mounted into its location, body or DOM element instance using this option."),o()(),d(3,"app-code",0)),n&2&&(f(3),m("code",l.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2});let r=e;return r})();var Z=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["auto-zindex-doc"]],decls:6,vars:0,template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"autoZIndex"),o(),t(5," determines whether to automatically manage layering. Its default value is 'false'."),o()())},dependencies:[s],encapsulation:2});let r=e;return r})();var W=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["base-zindex-doc"]],decls:6,vars:0,template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"baseZIndex"),o(),t(5," is base zIndex value to use in layering. Its default value is 0."),o()())},dependencies:[s],encapsulation:2});let r=e;return r})();var U=(()=>{let e=class e{constructor(){this.code={typescript:`
import { PrimeNGConfig, OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent } from 'primeng/api';
import { AnimationEvent } from '@angular/animations';

this.primengConfig.overlayOptions: OverlayOptions = {
    onBeforeShow: (event?: OverlayOnBeforeShowEvent) => {};    // Callback to invoke before the overlay is shown.
    onShow: (event?: OverlayOnShowEvent) => {};                // Callback to invoke when the overlay is shown.
    onBeforeHide: (event?: OverlayOnBeforeHideEvent) => {};    // Callback to invoke before the overlay is hidden.
    onHide: (event?: OverlayOnHideEvent) => {};                // Callback to invoke when the overlay is hidden.
    onAnimationStart: (event?: AnimationEvent) => {};          // Callback to invoke when the animation is started.
    onAnimationDone: (event?: AnimationEvent) => {};           // Callback to invoke when the animation is done.
};`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["events-doc"]],decls:2,vars:2,consts:[[1,"py-4"],[3,"code","hideToggleCode"]],template:function(n,l){n&1&&(i(0,"section",0),d(1,"app-code",1),o()),n&2&&(f(),m("code",l.code)("hideToggleCode",!0))},dependencies:[v],encapsulation:2});let r=e;return r})();var K=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["hide-on-escape-doc"]],decls:9,vars:0,template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"hideOnEscape"),o(),t(5," determines to hide the overlay when escape key pressed. Accepts boolean, default value is "),i(6,"i"),t(7,"false"),o(),t(8,"."),o()())},dependencies:[s],encapsulation:2});let r=e;return r})();var Q=(()=>{let e=class e{constructor(){this.code={typescript:"import { OverlayModule } from 'primeng/overlay';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&d(0,"app-code",0),n&2&&m("code",l.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2});let r=e;return r})();var L=(()=>{let e=class e{constructor(){this.code={typescript:`
import { PrimeNGConfig, OverlayOptions } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.overlayOptions: OverlayOptions = {
            mode: 'modal'
        };
    } 
}`},this.code2={basic:`import { PrimeNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primengConfig.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["mode-doc"]],decls:10,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," It has two valid values; "),i(3,"i"),t(4,"overlay"),o(),t(5," and "),i(6,"i"),t(7,"modal"),o(),t(8,". In overlay mode, a container element is opened like overlaypanel or dropdown's panel. In modal mode, the container element behaves like popup. This behaviour is similar to a dialog component. "),o()(),d(9,"app-code",0)),n&2&&(f(9),m("code",l.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2});let r=e;return r})();var pe=["docsectiontext"],J=(()=>{let e=class e{constructor(){this.code={basic:`import { PrimeNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primengConfig.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["responsive-doc"]],viewQuery:function(n,l){if(n&1&&V(pe,7),n&2){let h;B(h=F())&&(l.docsectiontext=h.first)}},inputs:{id:"id",title:"title"},decls:43,vars:2,consts:[[3,"code","hideToggleCode"],[1,"doc-section-description"],[1,"card"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"It is the option used to determine in which mode it should appear according to the given "),i(3,"i"),t(4,"media"),o(),t(5," or "),i(6,"i"),t(7,"breakpoint"),o(),t(8,"."),o()(),d(9,"app-code",0),i(10,"p",1),t(11,"Valid values of the "),i(12,"i"),t(13,"direction"),o(),t(14," property would be;"),o(),i(15,"div",2)(16,"ul")(17,"li"),t(18,"center (default)"),o(),i(19,"li"),t(20,"top"),o(),i(21,"li"),t(22,"top-start"),o(),i(23,"li"),t(24,"top-end"),o(),i(25,"li"),t(26,"bottom"),o(),i(27,"li"),t(28,"bottom-start"),o(),i(29,"li"),t(30,"bottom-end"),o(),i(31,"li"),t(32,"left"),o(),i(33,"li"),t(34,"left-start"),o(),i(35,"li"),t(36,"left-end"),o(),i(37,"li"),t(38,"right"),o(),i(39,"li"),t(40,"right-start"),o(),i(41,"li"),t(42,"right-end"),o()()()),n&2&&(f(9),m("code",l.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2});let r=e;return r})();var X=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["style-doc"]],decls:15,vars:0,template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"style"),o(),t(5," and "),i(6,"i"),t(7,"styleClass"),o(),t(8," are used to define styles that will be added to all overlay components. In addition, it can be used in "),i(9,"i"),t(10,"contentStyle"),o(),t(11," and "),i(12,"i"),t(13,"contentStyleClass"),o(),t(14," classes."),o()())},dependencies:[s],encapsulation:2});let r=e;return r})();var Y=(()=>{let e=class e{constructor(){this.code={basic:`import { PrimeNGConfig, OverlayOptions } from 'primeng/api';

this.primengConfig.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["target-doc"]],decls:24,vars:0,consts:[[1,"card"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"target"),o(),t(5," is used to detect the element that will be used to position the overlay. Valid values would be;"),o()(),i(6,"div",0)(7,"ul")(8,"li"),t(9,"@prev (default)"),o(),i(10,"li"),t(11,"@next"),o(),i(12,"li"),t(13,"@parent"),o(),i(14,"li"),t(15,"@grandparent"),o(),i(16,"li"),t(17,"Use "),i(18,"em"),t(19,"CSS selector"),o()(),i(20,"li"),t(21,"Use "),i(22,"em"),t(23,"() => HTMLElement"),o()()()())},dependencies:[s],encapsulation:2});let r=e;return r})();var se=()=>({breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"});function me(r,e){if(r&1&&t(0),r&2){let ne=e.$implicit;q(" Content - ",ne.mode," ")}}var $=(()=>{let e=class e{constructor(){this.overlayVisible=!1,this.code={basic:`<p-button (click)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">
    <ng-template pTemplate="content" let-option>
        Content - {{option.mode}}
    </ng-template>
</p-overlay>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">
        <ng-template pTemplate="content" let-option>
            Content - {{option.mode}}
        </ng-template>
    </p-overlay>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-template-demo',
    templateUrl: './overlay-template-demo.html' 
})
export class OverlayTemplateDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`}}toggle(){this.overlayVisible=!this.overlayVisible}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["overlay-template-demo"]],decls:11,vars:4,consts:[[1,"card","flex","justify-content-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-4 surface-overlay shadow-2 border-round",3,"visibleChange","visible","responsive"],["pTemplate","content"],["selector","overlay-template-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Content can be customized with the "),i(3,"i"),t(4,"content"),o(),t(5," template."),o()(),i(6,"div",0)(7,"p-button",1),C("click",function(){return l.toggle()}),o(),i(8,"p-overlay",2),w("visibleChange",function(u){return O(l.overlayVisible,u)||(l.overlayVisible=u),u}),I(9,me,1,1,"ng-template",3),o()(),d(10,"app-code",4)),n&2&&(f(8),E("visible",l.overlayVisible),m("responsive",g(3,se)),f(2),m("code",l.code))},dependencies:[v,k,N,T,s],encapsulation:2});let r=e;return r})();var _=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["transition-options-doc"]],decls:9,vars:0,template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Transition options of the show or hide animation. The default value of "),i(3,"i"),t(4,"showTransitionOptions"),o(),t(5," is '.12s cubic-bezier(0, 0, 0.2, 1)' and the default value of "),i(6,"i"),t(7,"hideTransitionOptions"),o(),t(8," is '.1s linear'."),o()())},dependencies:[s],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),o(),i(4,"p"),t(5," Overlay component uses "),i(6,"i"),t(7,"dialog"),o(),t(8," role and since any attribute is passed to the root element you may define attributes like "),i(9,"i"),t(10,"aria-label"),o(),t(11," or "),i(12,"i"),t(13,"aria-labelledby"),o(),t(14," to describe the popup contents. In addition "),i(15,"i"),t(16,"aria-modal"),o(),t(17," is added since focus is kept within the popup. "),o(),i(18,"p"),t(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),i(20,"i"),t(21,"tabIndex"),o(),t(22," would be necessary. Overlay adds "),i(23,"i"),t(24,"aria-expanded"),o(),t(25," state attribute and "),i(26,"i"),t(27,"aria-controls"),o(),t(28," to the trigger so that the relation between the trigger and the popup is defined. "),o(),i(29,"h3"),t(30,"Overlay Keyboard Support"),o(),i(31,"p"),t(32,"When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),i(33,"i"),t(34,"autofocus"),o(),t(35," to an element within the popup."),o(),i(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),t(41,"Key"),o(),i(42,"th"),t(43,"Function"),o()()(),i(44,"tbody")(45,"tr")(46,"td")(47,"i"),t(48,"tab"),o()(),i(49,"td"),t(50,"Moves focus to the next the focusable element within the popup."),o()(),i(51,"tr")(52,"td")(53,"i"),t(54,"shift"),o(),t(55," + "),i(56,"i"),t(57,"tab"),o()(),i(58,"td"),t(59,"Moves focus to the previous the focusable element within the popup."),o()(),i(60,"tr")(61,"td")(62,"i"),t(63,"escape"),o()(),i(64,"td"),t(65,"Closes the popup and moves focus to the trigger."),o()()()()(),i(66,"h3"),t(67,"Close Button Keyboard Support"),o(),i(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),t(73,"Key"),o(),i(74,"th"),t(75,"Function"),o()()(),i(76,"tbody")(77,"tr")(78,"td")(79,"i"),t(80,"enter"),o()(),i(81,"td"),t(82,"Closes the popup and moves focus to the trigger."),o()(),i(83,"tr")(84,"td")(85,"i"),t(86,"space"),o()(),i(87,"td"),t(88,"Closes the popup and moves focus to the trigger."),o()()()()()()())},dependencies:[s],encapsulation:2});let r=e;return r})();var te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[D,R,H,P,A,A]});let r=e;return r})();var ce=()=>["Overlay","OverlayOptions"],ie=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:G},{id:"template",label:"Template",component:$},{id:"options",label:"Options",children:[{id:"mode",label:"Mode",component:L},{id:"responsive",label:"Responsive",component:J},{id:"append-to",label:"AppendTo",component:z},{id:"target",label:"Target",component:Y},{id:"style",label:"Style",component:X},{id:"base-z-index",label:"BaseZIndex",component:W},{id:"auto-z-index",label:"AutoZIndex",component:Z},{id:"hide-on-escape",label:"HideOnEscape",component:K},{id:"transition-options",label:"ShowTransitionOptions and HideTransitionOptions",component:_},{id:"events",label:"Events",component:U}]},{id:"accessibility",label:"Accessibility",component:ee}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Overlay API - PrimeNG","header","Overlay API","description","This API allows overlay components to be controlled from the PrimeNGConfig. In this way, all overlay components in the application can have the same behavior.",3,"docs","apiDocs"]],template:function(n,l){n&1&&d(0,"app-doc",0),n&2&&m("docs",l.docs)("apiDocs",g(2,ce))},dependencies:[j],encapsulation:2});let r=e;return r})();var oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[M.forChild([{path:"",component:ie}]),M]});let r=e;return r})();var It=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[D,oe,te]});let r=e;return r})();export{It as OverlayDemoModule};
