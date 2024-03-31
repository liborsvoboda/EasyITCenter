import{a as ye,b as Ie}from"./chunk-A5TA6W7J.js";import{a as ve}from"./chunk-CZYOEPZS.js";import{a as ge}from"./chunk-DP75TYTQ.js";import{b as me,c as pe}from"./chunk-CJAHOBZA.js";import{c as he,d as X,f as Y,g as Z,h as ee}from"./chunk-XSSXK7EZ.js";import{a as f,b as xe,c as te}from"./chunk-AS5FXEGH.js";import{a as v,b as qe}from"./chunk-X2ZDE2AM.js";import{p as se}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as be,a as E,h as de,o as le,q as B,r as ue,z as fe}from"./chunk-UWMVDULA.js";import{o as ce,t as F}from"./chunk-N5X6XDRN.js";import{Ab as V,Bb as U,Cc as G,Eb as P,Fc as ne,Gb as K,Hb as R,Ic as J,Jb as o,Jc as re,Lb as oe,Nc as w,Sa as d,Sb as A,T as ie,Ta as _,Tb as D,V as T,da as p,ea as C,ib as b,jb as I,kb as c,kc as W,mb as z,nb as ae,ob as O,rb as n,sb as s,tb as l,ua as Q,ub as M,va as N,vb as k,wb as $,yb as S,zb as y}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Le=["*",[["p-header"]]],je=["*","p-header"],Oe=a=>({$implicit:a}),Te=a=>({transitionParams:a}),Ue=a=>({value:"visible",params:a}),Pe=a=>({value:"hidden",params:a});function Ke(a,t){if(a&1&&l(0,"span",11),a&2){let m=y(3);O(m.accordion.collapseIcon),c("ngClass",m.iconClass),I("aria-hidden",!0)}}function Re(a,t){if(a&1&&l(0,"ChevronDownIcon",11),a&2){let m=y(3);c("ngClass",m.iconClass),I("aria-hidden",!0)}}function Be(a,t){if(a&1&&(M(0),b(1,Ke,1,4,"span",9)(2,Re,1,2,"ChevronDownIcon",10),k()),a&2){let m=y(2);d(),c("ngIf",m.accordion.collapseIcon),d(),c("ngIf",!m.accordion.collapseIcon)}}function Qe(a,t){if(a&1&&l(0,"span",11),a&2){let m=y(3);O(m.accordion.expandIcon),c("ngClass",m.iconClass),I("aria-hidden",!0)}}function ze(a,t){if(a&1&&l(0,"ChevronRightIcon",11),a&2){let m=y(3);c("ngClass",m.iconClass),I("aria-hidden",!0)}}function $e(a,t){if(a&1&&(M(0),b(1,Qe,1,4,"span",9)(2,ze,1,2,"ChevronRightIcon",10),k()),a&2){let m=y(2);d(),c("ngIf",m.accordion.expandIcon),d(),c("ngIf",!m.accordion.expandIcon)}}function Ve(a,t){if(a&1&&(M(0),b(1,Be,3,2,"ng-container",3)(2,$e,3,2,"ng-container",3),k()),a&2){let m=y();d(),c("ngIf",m.selected),d(),c("ngIf",!m.selected)}}function We(a,t){}function Ge(a,t){a&1&&b(0,We,0,0,"ng-template")}function Je(a,t){if(a&1&&(n(0,"span",12),o(1),s()),a&2){let m=y();d(),oe(" ",m.header," ")}}function Xe(a,t){a&1&&$(0)}function Ye(a,t){a&1&&U(0,1,["*ngIf","hasHeaderFacet"])}function Ze(a,t){a&1&&$(0)}function et(a,t){if(a&1&&(M(0),b(1,Ze,1,0,"ng-container",6),k()),a&2){let m=y();d(),c("ngTemplateOutlet",m.contentTemplate)}}var tt=["*"],q=(()=>{let t=class t{get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}get iconClass(){return this.iconPos==="end"?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}constructor(e,i,r){this.el=i,this.changeDetector=r,this.cache=!0,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.iconPos="start",this.headerAriaLevel=2,this.selectedChange=new N,this._selected=!1,this.loaded=!1,this.accordion=e,this.id=de()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let i=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:i});else{if(!this.accordion.multiple)for(var r=0;r<this.accordion.tabs.length;r++)this.accordion.tabs[r].selected&&(this.accordion.tabs[r].selected=!1,this.accordion.tabs[r].selectedChange.emit(!1),this.accordion.tabs[r].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:i})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var i=0;i<this.accordion.tabs.length;i++)if(this.accordion.tabs[i]==this){e=i;break}return e}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}};t.\u0275fac=function(i){return new(i||t)(_(ie(()=>x)),_(Q),_(W))},t.\u0275cmp=p({type:t,selectors:[["p-accordionTab"]],contentQueries:function(i,r,u){if(i&1&&(P(u,le,4),P(u,B,4)),i&2){let h;K(h=R())&&(r.headerFacet=h),K(h=R())&&(r.templates=h)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:"headerAriaLevel"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:je,decls:12,vars:45,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"click","keydown","ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(i,r){i&1&&(V(Le),n(0,"div",0)(1,"div",1)(2,"a",2),S("click",function(h){return r.toggle(h)})("keydown",function(h){return r.onKeydown(h)}),b(3,Ve,3,2,"ng-container",3)(4,Ge,1,0,null,4)(5,Je,2,1,"span",5)(6,Xe,1,0,"ng-container",6)(7,Ye,1,0,"ng-content",3),s()(),n(8,"div",7)(9,"div",8),U(10),b(11,et,2,1,"ng-container",3),s()()()),i&2&&(z("p-accordion-tab-active",r.selected),c("ngClass",r.tabStyleClass)("ngStyle",r.tabStyle),I("data-pc-name","accordiontab"),d(),z("p-highlight",r.selected)("p-disabled",r.disabled),I("aria-level",r.headerAriaLevel)("data-p-disabled",r.disabled)("data-pc-section","header"),d(),ae(r.headerStyle),c("ngClass",r.headerStyleClass),I("tabindex",r.disabled?null:0)("id",r.getTabHeaderActionId(r.id))("aria-controls",r.getTabContentId(r.id))("aria-expanded",r.selected)("aria-disabled",r.disabled)("data-pc-section","headeraction"),d(),c("ngIf",!r.iconTemplate),d(),c("ngTemplateOutlet",r.iconTemplate)("ngTemplateOutletContext",D(35,Oe,r.selected)),d(),c("ngIf",!r.hasHeaderFacet),d(),c("ngTemplateOutlet",r.headerTemplate),d(),c("ngIf",r.hasHeaderFacet),d(),c("@tabContent",r.selected?D(39,Ue,D(37,Te,r.transitionOptions)):D(43,Pe,D(41,Te,r.transitionOptions))),I("id",r.getTabContentId(r.id))("aria-hidden",!r.selected)("aria-labelledby",r.getTabHeaderActionId(r.id))("data-pc-section","toggleablecontent"),d(),c("ngClass",r.contentStyleClass)("ngStyle",r.contentStyle),d(2),c("ngIf",r.contentTemplate&&(r.cache?r.loaded:r.selected)))},dependencies:[G,ne,re,J,ve,ge],styles:[`@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}
`],encapsulation:2,data:{animation:[he("tabContent",[Z("hidden",Y({height:"0",visibility:"hidden"})),Z("visible",Y({height:"*",visibility:"visible"})),ee("visible <=> hidden",[X("{{transitionParams}}")]),ee("void => *",X(0))])]},changeDetection:0});let a=t;return a})(),x=(()=>{let t=class t{get activeIndex(){return this._activeIndex}set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}constructor(e,i){this.el=e,this.changeDetector=i,this.multiple=!1,this.selectOnFocus=!1,this.onClose=new N,this.onOpen=new N,this.activeIndexChange=new N,this.tabListSubscription=null,this._headerAriaLevel=2,this.preventActiveIndexPropagation=!1,this.tabs=[]}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}isInput(e){let{tagName:i}=e.target;return i?.toLowerCase()==="input"}isTextArea(e){let{tagName:i}=e.target;return i?.toLowerCase()==="textarea"}onTabArrowDownKey(e){if(!this.isInput(e)&&!this.isTextArea(e)){let i=this.findNextHeaderAction(e.target.parentElement.parentElement.parentElement);i?this.changeFocusedTab(i):this.onTabHomeKey(e),e.preventDefault()}}onTabArrowUpKey(e){if(!this.isInput(e)&&!this.isTextArea(e)){let i=this.findPrevHeaderAction(e.target.parentElement.parentElement.parentElement);i?this.changeFocusedTab(i):this.onTabEndKey(e),e.preventDefault()}}onTabHomeKey(e){let i=this.findFirstHeaderAction();this.changeFocusedTab(i),e.preventDefault()}changeFocusedTab(e){e&&(E.focus(e),this.selectOnFocus&&this.tabs.forEach((i,r)=>{let u=this.multiple?this._activeIndex.includes(r):r===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),i.id==e.id&&(i.selected=!i.selected,this._activeIndex.includes(r)?this._activeIndex=this._activeIndex.filter(h=>h!==r):this._activeIndex.push(r))):i.id==e.id?(i.selected=!i.selected,this._activeIndex=r):i.selected=!1,i.selectedChange.emit(u),this.activeIndexChange.emit(this._activeIndex),i.changeDetector.markForCheck()}))}findNextHeaderAction(e,i=!1){let r=i?e:e.nextElementSibling,u=E.findSingle(r,'[data-pc-section="header"]');return u?E.getAttribute(u,"data-p-disabled")?this.findNextHeaderAction(u.parentElement.parentElement):E.findSingle(u,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(e,i=!1){let r=i?e:e.previousElementSibling,u=E.findSingle(r,'[data-pc-section="header"]');return u?E.getAttribute(u,"data-p-disabled")?this.findPrevHeaderAction(u.parentElement.parentElement):E.findSingle(u,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes[0];return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes,i=e[e.length-1];return this.findPrevHeaderAction(i,!0)}onTabEndKey(e){let i=this.findLastHeaderAction();this.changeFocusedTab(i),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let i=this.multiple?this._activeIndex.includes(e):e===this._activeIndex;i!==this.tabs[e].selected&&(this.tabs[e].selected=i,this.tabs[e].selectedChange.emit(i),this.tabs[e].changeDetector.markForCheck())}}isTabActive(e){return this.multiple?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,i){return e.props?e.props[i]:void 0}updateActiveIndex(){let e=this.multiple?[]:null;this.tabs.forEach((i,r)=>{if(i.selected)if(this.multiple)e.push(r);else{e=r;return}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(_(Q),_(W))},t.\u0275cmp=p({type:t,selectors:[["p-accordion"]],contentQueries:function(i,r,u){if(i&1&&P(u,q,5),i&2){let h;K(h=R())&&(r.tabList=h)}},hostAttrs:[1,"p-element"],hostBindings:function(i,r){i&1&&S("keydown",function(h){return r.onKeydown(h)})},inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:tt,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(i,r){i&1&&(V(),n(0,"div",0),U(1),s()),i&2&&(O(r.styleClass),c("ngClass","p-accordion p-component")("ngStyle",r.style))},dependencies:[G,J],encapsulation:2,changeDetection:0});let a=t;return a})(),Ce=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=T({imports:[w,ue]});let a=t;return a})();var Se=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["accessibility-doc"]],decls:103,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,r){i&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),o(3,"Screen Reader"),s(),n(4,"p"),o(5," Accordion header elements have a "),n(6,"i"),o(7,"button"),s(),o(8," role and use "),n(9,"i"),o(10,"aria-controls"),s(),o(11," to define the id of the content section along with "),n(12,"i"),o(13,"aria-expanded"),s(),o(14," for the visibility state. The value to read a header element defaults to the value of the "),n(15,"i"),o(16,"header"),s(),o(17," property and can be customized by defining an "),n(18,"i"),o(19,"aria-label"),s(),o(20," or "),n(21,"i"),o(22,"aria-labelledby"),s(),o(23," property. Each header has a "),n(24,"i"),o(25,"heading"),s(),o(26," role, for which the level is customized by "),n(27,"i"),o(28,"headerAriaLevel"),s(),o(29," and has a default level of 2 as per W3C specifications. "),s(),n(30,"p"),o(31,"The content uses "),n(32,"i"),o(33,"region"),s(),o(34," role, defines an id that matches the "),n(35,"i"),o(36,"aria-controls"),s(),o(37," of the header and "),n(38,"i"),o(39,"aria-labelledby"),s(),o(40," referring to the id of the header."),s(),n(41,"h3"),o(42,"Header Keyboard Support"),s()(),n(43,"div",0)(44,"table",1)(45,"thead")(46,"tr")(47,"th"),o(48,"Key"),s(),n(49,"th"),o(50,"Function"),s()()(),n(51,"tbody")(52,"tr")(53,"td")(54,"i"),o(55,"tab"),s()(),n(56,"td"),o(57,"Moves focus to the next the focusable element in the page tab sequence."),s()(),n(58,"tr")(59,"td")(60,"i"),o(61,"shift"),s(),o(62," + "),n(63,"i"),o(64,"tab"),s()(),n(65,"td"),o(66,"Moves focus to the previous the focusable element in the page tab sequence."),s()(),n(67,"tr")(68,"td")(69,"i"),o(70,"enter"),s()(),n(71,"td"),o(72,"Toggles the visibility of the content."),s()(),n(73,"tr")(74,"td")(75,"i"),o(76,"space"),s()(),n(77,"td"),o(78,"Toggles the visibility of the content."),s()(),n(79,"tr")(80,"td")(81,"i"),o(82,"down arrow"),s()(),n(83,"td"),o(84,"Moves focus to the next header."),s()(),n(85,"tr")(86,"td")(87,"i"),o(88,"up arrow"),s()(),n(89,"td"),o(90,"Moves focus to the previous header."),s()(),n(91,"tr")(92,"td")(93,"i"),o(94,"home"),s()(),n(95,"td"),o(96,"Moves focus to the first header."),s()(),n(97,"tr")(98,"td")(99,"i"),o(100,"end"),s()(),n(101,"td"),o(102,"Moves focus to the last header."),s()()()()()())},dependencies:[f],encapsulation:2});let a=t;return a})();var Ee=(()=>{let t=class t{constructor(){this.code={basic:`<p-accordion [activeIndex]="0">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-accordionTab>
</p-accordion>`,html:`
<div class="card flex justify-content-center">
    <p-accordion [activeIndex]="0">
        <p-accordionTab header="Header I">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>
    </p-accordion>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'accordion-basic-demo',
    templateUrl: './accordion-basic-demo.html'
})
export class AccordionBasicDemo {}`}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["basic-doc"]],decls:21,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"activeIndex"],["header","Header I"],["header","Header II"],["header","Header III"],["selector","accordion-basic-demo",3,"code"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Accordion consists of one or more "),n(3,"i"),o(4,"AccordionTab"),s(),o(5," elements which are collapsed by default. Tab to expand initially can be defined with the "),n(6,"i"),o(7,"activeIndex"),s(),o(8," property."),s()(),n(9,"div",0)(10,"p-accordion",1)(11,"p-accordionTab",2)(12,"p"),o(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s()(),n(14,"p-accordionTab",3)(15,"p"),o(16," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),s()(),n(17,"p-accordionTab",4)(18,"p"),o(19," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),s()()()(),l(20,"app-code",5)),i&2&&(d(10),c("activeIndex",0),d(10),c("code",r.code))},dependencies:[v,f,x,q],encapsulation:2});let a=t;return a})();var _e=(()=>{let t=class t{constructor(){this.activeIndex=0,this.code={basic:`<div class="flex mb-3 gap-2 justify-content-end">
        <p-button (click)="activeIndex = 0" rounded="true" label="1" styleClass="w-2rem h-2rem p-0" [outlined]="activeIndex !== 0"></p-button>
        <p-button (click)="activeIndex = 1" rounded="true" label="2" styleClass="w-2rem h-2rem p-0" [outlined]="activeIndex !== 1"></p-button>
        <p-button (click)="activeIndex = 2" rounded="true" label="3" styleClass="w-2rem h-2rem p-0" [outlined]="activeIndex !== 2"></p-button>
    </div>
    <p-accordion (activeIndexChange)="activeIndexChange($event)" [activeIndex]="activeIndex">
        <p-accordionTab header="Header I">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>
    </p-accordion>`,html:`<div class="card">
        <div class="flex mb-3 gap-2 justify-content-end">
        <p-button (click)="activeIndex = 0" rounded="true" label="1" styleClass="w-2rem h-2rem p-0" [outlined]="activeIndex !== 0"></p-button>
        <p-button (click)="activeIndex = 1" rounded="true" label="2" styleClass="w-2rem h-2rem p-0" [outlined]="activeIndex !== 1"></p-button>
        <p-button (click)="activeIndex = 2" rounded="true" label="3" styleClass="w-2rem h-2rem p-0" [outlined]="activeIndex !== 2"></p-button>
    </div>
    <p-accordion (activeIndexChange)="activeIndexChange($event)" [activeIndex]="activeIndex">
        <p-accordionTab header="Header I">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>
    </p-accordion>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'accordion-controlled-demo',
    templateUrl: './accordion-controlled-demo.html'
})
export class AccordionControlledDemo {
    activeIndex: number | undefined = 0;

    activeIndexChange(index : number){
        this.activeIndex = index
    }
}`}}activeIndexChange(e){this.activeIndex=e}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["controlled-doc"]],decls:25,vars:5,consts:[[1,"card"],[1,"flex","mb-3","gap-2","justify-content-end"],["rounded","true","label","1","styleClass","w-2rem h-2rem p-0",3,"click","outlined"],["rounded","true","label","2","styleClass","w-2rem h-2rem p-0",3,"click","outlined"],["rounded","true","label","3","styleClass","w-2rem h-2rem p-0",3,"click","outlined"],[3,"activeIndexChange","activeIndex"],["header","Header I"],[1,"m-0"],["header","Header II"],["header","Header III"],["selector","accordion-controlled-demo",3,"code"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Tabs can be controlled programmatically using the "),n(3,"i"),o(4,"activeIndex"),s(),o(5," property of the accordion in general or the "),n(6,"i"),o(7,"selected"),s(),o(8," property of p-accordionTab individually."),s()(),n(9,"div",0)(10,"div",1)(11,"p-button",2),S("click",function(){return r.activeIndex=0}),s(),n(12,"p-button",3),S("click",function(){return r.activeIndex=1}),s(),n(13,"p-button",4),S("click",function(){return r.activeIndex=2}),s()(),n(14,"p-accordion",5),S("activeIndexChange",function(h){return r.activeIndexChange(h)}),n(15,"p-accordionTab",6)(16,"p",7),o(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s()(),n(18,"p-accordionTab",8)(19,"p",7),o(20," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),s()(),n(21,"p-accordionTab",9)(22,"p",7),o(23," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),s()()()(),l(24,"app-code",10)),i&2&&(d(11),c("outlined",r.activeIndex!==0),d(),c("outlined",r.activeIndex!==1),d(),c("outlined",r.activeIndex!==2),d(),c("activeIndex",r.activeIndex),d(10),c("code",r.code))},dependencies:[v,f,x,q,fe],encapsulation:2});let a=t;return a})();var Ae=(()=>{let t=class t{constructor(){this.code={basic:`<p-accordion [activeIndex]="0">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-accordionTab>
    <p-accordionTab [disabled]="true" header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-accordionTab>
</p-accordion>`,html:`
<div class="card flex justify-content-center">
    <p-accordion [activeIndex]="0">
        <p-accordionTab header="Header I">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab [disabled]="true" header="Header II">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>        
    </p-accordion>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'accordion-disabled-demo',
    templateUrl: './accordion-disabled-demo.html'
})
export class AccordionDisabledDemo {}`}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["disabled-doc"]],decls:18,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"activeIndex"],["header","Header I"],["header","Header II",3,"disabled"],["header","Header III"],["selector","accordion-disabled-demo",3,"code"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Enabling "),n(3,"i"),o(4,"disabled"),s(),o(5," property of an AccordionTab prevents user interaction."),s()(),n(6,"div",0)(7,"p-accordion",1)(8,"p-accordionTab",2)(9,"p"),o(10," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s()(),n(11,"p-accordionTab",3)(12,"p"),o(13," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),s()(),n(14,"p-accordionTab",4)(15,"p"),o(16," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),s()()()(),l(17,"app-code",5)),i&2&&(d(7),c("activeIndex",0),d(4),c("disabled",!0),d(6),c("code",r.code))},dependencies:[v,f,x,q],encapsulation:2});let a=t;return a})();var De=(()=>{let t=class t{constructor(){this.code={typescript:"import { AccordionModule } from 'primeng/accordion';"}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,r){i&1&&l(0,"app-code",0),i&2&&c("code",r.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2});let a=t;return a})();var it=()=>[0],we=(()=>{let t=class t{constructor(){this.code={basic:`<p-accordion [multiple]="true" [activeIndex]="[0]">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-accordionTab>
</p-accordion>`,html:`
<div class="card flex justify-content-center">
    <p-accordion [multiple]="true" [activeIndex]="[0]">
        <p-accordionTab header="Header I">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>
    </p-accordion>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'accordion-multiple-demo',
    templateUrl: './accordion-multiple-demo.html'
})
export class AccordionMultipleDemo {}`}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["multiple-doc"]],decls:21,vars:4,consts:[[1,"card","flex","justify-content-center"],[3,"multiple","activeIndex"],["header","Header I"],["header","Header II"],["header","Header III"],["selector","accordion-multiple-demo",3,"code"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Only one tab at a time can be active by default, enabling "),n(3,"i"),o(4,"multiple"),s(),o(5," property changes this behavior to allow multiple tabs. In this case "),n(6,"i"),o(7,"activeIndex"),s(),o(8," needs to be an array."),s()(),n(9,"div",0)(10,"p-accordion",1)(11,"p-accordionTab",2)(12,"p"),o(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s()(),n(14,"p-accordionTab",3)(15,"p"),o(16," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),s()(),n(17,"p-accordionTab",4)(18,"p"),o(19," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),s()()()(),l(20,"app-code",5)),i&2&&(d(10),c("multiple",!0)("activeIndex",A(3,it)),d(10),c("code",r.code))},dependencies:[v,f,x,q],encapsulation:2});let a=t;return a})();var at=()=>["/theming"],He=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),o(4,"theming"),s(),o(5," page."),s()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),o(11,"Name"),s(),n(12,"th"),o(13,"Element"),s()()(),n(14,"tbody")(15,"tr")(16,"td"),o(17,"p-accordion"),s(),n(18,"td"),o(19,"Container element"),s()(),n(20,"tr")(21,"td"),o(22,"p-accordion-header"),s(),n(23,"td"),o(24,"Header of a tab."),s()(),n(25,"tr")(26,"td"),o(27,"p-accordion-content"),s(),n(28,"td"),o(29,"Content of a tab."),s()()()()()),i&2&&(d(3),c("routerLink",A(1,at)))},dependencies:[f,ce],encapsulation:2});let a=t;return a})();function ot(a,t){a&1&&(n(0,"span",5),l(1,"p-avatar",6),n(2,"span",7),o(3,"Amy Elsner"),s(),l(4,"p-badge",8),s())}function nt(a,t){a&1&&(n(0,"span",5),l(1,"p-avatar",9),n(2,"span",7),o(3,"Onyama Limba"),s(),l(4,"p-badge",10),s())}function rt(a,t){a&1&&(n(0,"span",5),l(1,"p-avatar",11),n(2,"span",7),o(3,"Ioni Bowcher"),s(),l(4,"p-badge",12),s())}var Ne=(()=>{let t=class t{constructor(){this.code={basic:`<p-accordion class="w-full">
        <p-accordionTab>
            <ng-template pTemplate="header">
                <span class="flex align-items-center gap-2 w-full">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold white-space-nowrap">Amy Elsner</span>
                    <p-badge value="3" class="ml-auto" />
                </span>
            </ng-template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </p-accordionTab>
        <p-accordionTab>
            <ng-template pTemplate="header">
                <span class="flex align-items-center gap-2 w-full">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                    <span class="font-bold white-space-nowrap">Onyama Limba</span>
                    <p-badge value="4" class="ml-auto" />
                </span>
            </ng-template>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordionTab>
        <p-accordionTab>
            <ng-template pTemplate="header">
                <span class="flex align-items-center gap-2 w-full">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
                    <span class="font-bold white-space-nowrap">Ioni Bowcher</span>
                    <p-badge value="2" class="ml-auto" />
                </span>
            </ng-template>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordionTab>
</p-accordion>`,html:`<div class="card flex justify-content-center">
    <p-accordion class="w-full">
    <p-accordionTab>
        <ng-template pTemplate="header">
            <span class="flex align-items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold white-space-nowrap">Amy Elsner</span>
                <p-badge value="3" class="ml-auto" />
            </span>
        </ng-template>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-accordionTab>
    <p-accordionTab>
        <ng-template pTemplate="header">
            <span class="flex align-items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/onyamalimba.png" shape="circle" />
                <span class="font-bold white-space-nowrap">Onyama Limba</span>
                <p-badge value="4" class="ml-auto" />
            </span>
        </ng-template>
        <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
</p-accordionTab>
<p-accordionTab>
    <ng-template pTemplate="header">
        <span class="flex align-items-center gap-2 w-full">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/ionibowcher.png" shape="circle" />
            <span class="font-bold white-space-nowrap">Ioni Bowcher</span>
            <p-badge value="2" class="ml-auto" />
        </span>
    </ng-template>
    <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
    </p>
</p-accordionTab>
</p-accordion>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'accordion-template-demo',
    templateUrl: './accordion-template-demo.html'
})
export class AccordionTemplateDemo {}`}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["template-doc"]],decls:24,vars:1,consts:[[1,"card","flex","justify-content-center"],[1,"w-full"],["pTemplate","header"],[1,"m-0"],["selector","accordion-template-demo",3,"code"],[1,"flex","align-items-center","gap-2","w-full"],["image","https://primefaces.org/cdn/primeng/images/avatar/amyelsner.png","shape","circle"],[1,"font-bold","white-space-nowrap"],["value","3",1,"ml-auto"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","shape","circle"],["value","4",1,"ml-auto"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png","shape","circle"],["value","2",1,"ml-auto"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"AccordionTab is customized "),n(3,"i"),o(4,"header"),s(),o(5," and "),n(6,"i"),o(7,"content"),s(),o(8," templates."),s()(),n(9,"div",0)(10,"p-accordion",1)(11,"p-accordionTab"),b(12,ot,5,0,"ng-template",2),n(13,"p",3),o(14," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s()(),n(15,"p-accordionTab"),b(16,nt,5,0,"ng-template",2),n(17,"p",3),o(18," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),s()(),n(19,"p-accordionTab"),b(20,rt,5,0,"ng-template",2),n(21,"p",3),o(22," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),s()()()(),l(23,"app-code",4)),i&2&&(d(23),c("code",r.code))},dependencies:[v,f,x,q,B,ye,me],encapsulation:2});let a=t;return a})();var Me=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=T({imports:[w,qe,te,Ce,be,F,Ie,pe,se,te]});let a=t;return a})();var st=()=>["Accordion","AccordionTab"],ke=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:Ee},{id:"multiple",label:"Multiple",component:we},{id:"disabled",label:"Disabled",component:Ae},{id:"controlled",label:"Controlled",component:_e},{id:"template",label:"Template",component:Ne},{id:"style",label:"Style",component:He},{id:"accessibility",label:"Accessibility",component:Se}]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Accordion Component","header","Accordion","description","Accordion groups a collection of contents in tabs.",3,"docs","apiDocs"]],template:function(i,r){i&1&&l(0,"app-doc",0),i&2&&c("docs",r.docs)("apiDocs",A(2,st))},dependencies:[xe],styles:["[_nghost-%COMP%]     .p-accordion p{line-height:1.5;margin:0}"]});let a=t;return a})();var Fe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=T({imports:[F.forChild([{path:"",component:ke}]),F]});let a=t;return a})();var Li=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=T({imports:[w,Fe,Me]});let a=t;return a})();export{Li as AccordionDemoModule};
