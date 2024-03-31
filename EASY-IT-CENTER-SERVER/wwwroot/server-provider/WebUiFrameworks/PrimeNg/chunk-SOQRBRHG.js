import{a as je,b as Ae}from"./chunk-FVHWLI4A.js";import{a as Be,b as Le}from"./chunk-GATJVW4X.js";import"./chunk-7WKP5VQZ.js";import{a as Pe,b as Ee,c as De,d as Ve}from"./chunk-B4NKJZ4N.js";import"./chunk-PXBAS5CJ.js";import{c as ye,d as ae,f as oe,g as re,h as le}from"./chunk-XSSXK7EZ.js";import{a as M,b as Me,c as pe}from"./chunk-AS5FXEGH.js";import{a as I,b as Ie}from"./chunk-X2ZDE2AM.js";import{b as _e,e as be,i as Ce,p as ve,q as he,r as we,s as Te}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as Se,h as ke,q as T,r as ie,z as B}from"./chunk-UWMVDULA.js";import{t as R}from"./chunk-N5X6XDRN.js";import{Ab as me,Bb as ue,Cc as X,Eb as U,Ec as xe,Fc as W,Gb as G,Hb as K,Ib as q,Jb as p,Jc as O,Kb as te,Nb as v,Nc as H,Ob as h,Pb as k,Sa as c,Sb as ge,Tb as N,Ub as F,V as D,Wb as ne,Yb as fe,da as C,dc as J,ea as V,ib as g,jb as Q,kb as d,ma as m,mb as ee,na as u,ob as z,rb as r,sb as l,tb as b,ub as S,va as j,vb as w,wb as A,xb as _,yb as f,zb as s}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Fe=(()=>{let n=class n{constructor(){this.code={typescript:"import { StepperModule } from 'primeng/stepper';"}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(e,o){e&1&&b(0,"app-code",0),e&2&&d("code",o.code)("hideToggleCode",!0)},dependencies:[I],encapsulation:2});let t=n;return t})();var Xe=(t,n,a,i)=>({index:t,active:n,highlighted:a,class:"p-stepper-action",headerClass:"p-stepper-action",numberClass:"p-stepper-number",titleClass:"p-stepper-title",onClick:i});function Ye(t,n){t&1&&A(0)}function Ze(t,n){if(t&1&&(S(0),g(1,Ye,1,0,"ng-container",2),w()),t&2){let a=s();c(),d("ngTemplateOutlet",a.template)("ngTemplateOutletContext",ne(2,Xe,a.index,a.active,a.highlighted,a.onClick))}}function $e(t,n){if(t&1){let a=_();r(0,"p-button",3),f("click",function(e){m(a);let o=s();return u(o.onClick.emit(e,o.index))}),r(1,"span",4),p(2),l(),r(3,"span",5),p(4),l()()}if(t&2){let a=s();d("id",a.id)("tabindex",a.disabled?-1:void 0)("aria-controls",a.ariaControls),c(2),te(a.index+1),c(2),te(a.getStepProp)}}var et=(t,n,a,i)=>({index:t,active:n,highlighted:a,class:i});function tt(t,n){t&1&&A(0)}function nt(t,n){if(t&1&&(S(0),g(1,tt,1,0,"ng-container",2),w()),t&2){let a=s();c(),d("ngTemplateOutlet",a.template)("ngTemplateOutletContext",ne(2,et,a.index,a.active,a.highlighted,a.separatorClass))}}function it(t,n){if(t&1&&b(0,"span",3),t&2){let a=s();z(a.separatorClass)}}var at=(t,n,a,i,e,o)=>({index:t,active:n,highlighted:a,onClick:i,prevCallback:e,nextCallback:o});function ot(t,n){t&1&&A(0)}function rt(t,n){if(t&1&&(S(0),g(1,ot,1,0,"ng-container",2),w()),t&2){let a=s();c(),d("ngTemplateOutlet",a.template)("ngTemplateOutletContext",fe(2,at,a.index,a.active,a.highlighted,a.onClick,a.prevCallback,a.nextCallback))}}function lt(t,n){t&1&&A(0)}function pt(t,n){if(t&1&&(S(0),g(1,lt,1,0,"ng-container",3),w()),t&2){let a=s(3);c(),d("ngTemplateOutlet",a.stepperPanel)}}function ct(t,n){if(t&1&&g(0,pt,2,1,"ng-container",1),t&2){let a=s(2);d("ngIf",a.stepperPanel)}}function st(t,n){t&1&&g(0,ct,1,1,"ng-template")}var dt=["*"],He=(t,n)=>({"p-highlight":t,"p-disabled":n}),mt=t=>({"p-stepper-panel-active":t}),Ne=t=>({transitionParams:t}),ut=t=>({value:"visible",params:t}),gt=t=>({value:"hidden",params:t});function ft(t,n){t&1&&A(0)}function xt(t,n){if(t&1&&(S(0),g(1,ft,1,0,"ng-container",4),w()),t&2){let a=s();c(),d("ngTemplateOutlet",a.startTemplate)}}function _t(t,n){if(t&1&&(S(0),b(1,"p-stepperSeparator",10),w()),t&2){let a=s(),i=a.$implicit,e=a.index,o=s(2);c(),d("template",i.separatorTemplate)("separatorClass","p-stepper-separator")("stepperPanel",i)("index",e)("active",o.isStepActive(e))("highlighted",e<o.activeStep)}}function bt(t,n){if(t&1){let a=_();r(0,"li",8)(1,"p-stepperHeader",9),f("onClick",function(e){let o=m(a).index,x=s(2);return u(x.onItemClick(e,o))}),l(),g(2,_t,2,6,"ng-container",2),l()}if(t&2){let a=n.$implicit,i=n.index,e=s(2);d("key",e.getStepKey(a,i))("ngClass",F(20,He,e.isStepActive(i),e.isItemDisabled(i)))("data-pc-name",e.stepperPanel)("data-p-highlight",e.isStepActive(i))("data-p-disabled",e.isItemDisabled(i))("data-pc-index",i)("data-p-active",e.isStepActive(i)),Q("aria-current",e.isStepActive(i)?"step":void 0),c(),z("p-stepper-action"),d("id",e.getStepHeaderActionId(i))("template",a.headerTemplate)("stepperPanel",a)("getStepProp",e.getStepProp(a,"header"))("index",i)("disabled",e.isItemDisabled(i))("active",e.isStepActive(i))("highlighted",i<e.activeStep)("aria-controls",e.getStepContentId(i)),c(),d("ngIf",i!==e.stepperPanels.length-1)}}function Ct(t,n){if(t&1){let a=_();S(0),r(1,"p-stepperContent",11),f("onClick",function(e){m(a);let o=s().index,x=s(2);return u(x.onItemClick(e,o))})("nextCallback",function(e){m(a);let o=s().index,x=s(2);return u(x.nextCallback(e,o))})("prevCallback",function(e){m(a);let o=s().index,x=s(2);return u(x.prevCallback(e,o))}),l(),w()}if(t&2){let a=s(),i=a.$implicit,e=a.index,o=s(2);c(),d("id",o.getStepContentId(e))("template",i.contentTemplate)("orientation",o.orientation)("stepperPanel",i)("index",e)("active",o.isStepActive(e))("highlighted",e<o.activeStep)("ariaLabelledby",o.getStepHeaderActionId(e))}}function vt(t,n){if(t&1&&g(0,Ct,2,8,"ng-container",2),t&2){let a=n.index,i=s(2);d("ngIf",i.isStepActive(a))}}function ht(t,n){if(t&1&&(S(0),r(1,"ul",5),g(2,bt,3,23,"ng-template",6),l(),r(3,"div",7),g(4,vt,1,1,"ng-template",6),l(),w()),t&2){let a=s();c(2),d("ngForOf",a.panels)("ngForTrackBy",a.trackByFn),c(2),d("ngForOf",a.panels)("ngForTrackBy",a.trackByFn)}}function kt(t,n){if(t&1&&(S(0),b(1,"p-stepperSeparator",10),w()),t&2){let a=s(),i=a.$implicit,e=a.index,o=s(2);c(),d("template",i.separatorTemplate)("separatorClass","p-stepper-separator")("stepperPanel",i)("index",e)("active",o.isStepActive(e))("highlighted",e<o.activeStep)}}function yt(t,n){if(t&1){let a=_();r(0,"div",12)(1,"div",13)(2,"p-stepperHeader",9),f("onClick",function(e){let o=m(a).index,x=s(2);return u(x.onItemClick(e,o))}),l()(),r(3,"div",14),g(4,kt,2,6,"ng-container",2),r(5,"p-stepperContent",11),f("onClick",function(e){let o=m(a).index,x=s(2);return u(x.onItemClick(e,o))})("nextCallback",function(e){let o=m(a).index,x=s(2);return u(x.nextCallback(e,o))})("prevCallback",function(e){let o=m(a).index,x=s(2);return u(x.prevCallback(e,o))}),l()()()}if(t&2){let a=n.$implicit,i=n.index,e=s(2);d("key",e.getStepKey(a,i))("ngClass",N(30,mt,e.orientation==="vertical"&&e.isStepActive(i)))("data-pc-name","stepperpanel")("data-p-highlight",e.isStepActive(i))("data-p-disabled",e.isItemDisabled(i))("data-pc-index",i)("data-p-active",e.isStepActive(i)),Q("aria-current",e.isStepActive(i)?"step":void 0),c(),d("ngClass",F(32,He,e.isStepActive(i),e.isItemDisabled(i))),c(),z("p-stepper-action"),d("id",e.getStepHeaderActionId(i))("template",a.headerTemplate)("stepperPanel",a)("getStepProp",e.getStepProp(a,"header"))("index",i)("disabled",e.isItemDisabled(i))("active",e.isStepActive(i))("highlighted",i<e.activeStep)("aria-controls",e.getStepContentId(i)),c(),d("@tabContent",e.isStepActive(i)?N(37,ut,N(35,Ne,e.transitionOptions)):N(41,gt,N(39,Ne,e.transitionOptions))),c(),d("ngIf",i!==e.stepperPanels.length-1),c(),d("id",e.getStepContentId(i))("template",a.contentTemplate)("orientation",e.orientation)("stepperPanel",a)("index",i)("active",e.isStepActive(i))("highlighted",i<e.activeStep)("ariaLabelledby",e.getStepHeaderActionId(i))}}function St(t,n){if(t&1&&g(0,yt,6,43,"ng-template",6),t&2){let a=s();d("ngForOf",a.panels)("ngForTrackBy",a.trackByFn)}}function wt(t,n){t&1&&A(0)}function Tt(t,n){if(t&1&&(S(0),g(1,wt,1,0,"ng-container",4),w()),t&2){let a=s();c(),d("ngTemplateOutlet",a.endTemplate)}}var It=(()=>{let n=class n{constructor(){this.onClick=new j}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["p-stepperHeader"]],hostAttrs:[1,"p-element"],inputs:{id:"id",template:"template",stepperPanel:"stepperPanel",index:"index",disabled:"disabled",active:"active",highlighted:"highlighted",getStepProp:"getStepProp",ariaControls:"ariaControls"},outputs:{onClick:"onClick"},decls:3,vars:2,consts:[["buttonRef",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","tab",1,"p-stepper-action",3,"click","id","tabindex","aria-controls"],[1,"p-stepper-number"],[1,"p-stepper-title"]],template:function(e,o){if(e&1&&g(0,Ze,2,7,"ng-container",1)(1,$e,5,5,"ng-template",null,0,J),e&2){let x=q(2);d("ngIf",o.template)("ngIfElse",x)}},dependencies:[W,O],encapsulation:2});let t=n;return t})(),Mt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["p-stepperSeparator"]],hostAttrs:[1,"p-stepper-separator"],inputs:{template:"template",separatorClass:"separatorClass",stepperPanel:"stepperPanel",index:"index",active:"active",highlighted:"highlighted"},decls:3,vars:2,consts:[["span",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"]],template:function(e,o){if(e&1&&g(0,nt,2,7,"ng-container",1)(1,it,1,2,"ng-template",null,0,J),e&2){let x=q(2);d("ngIf",o.template)("ngIfElse",x)}},dependencies:[W,O],encapsulation:2});let t=n;return t})(),Pt=(()=>{let n=class n{constructor(){this.onClick=new j,this.prevCallback=new j,this.nextCallback=new j}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["p-stepperContent"]],hostVars:6,hostBindings:function(e,o){e&2&&ee("p-stepper-content",!0)("p-element",!0)("p-toggleable-content",o.orientation==="vertical")},inputs:{id:"id",orientation:"orientation",template:"template",ariaLabelledby:"ariaLabelledby",stepperPanel:"stepperPanel",index:"index",active:"active",highlighted:"highlighted"},outputs:{onClick:"onClick",prevCallback:"prevCallback",nextCallback:"nextCallback"},decls:3,vars:6,consts:[["role","tabpanel","data-pc-name","stepperpanel",3,"id"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"]],template:function(e,o){e&1&&(r(0,"div",0),g(1,rt,2,9,"ng-container",1)(2,st,1,0,null,1),l()),e&2&&(d("id",o.id),Q("data-pc-index",o.index)("data-p-active",o.active)("aria-labelledby",o.ariaLabelledby),c(),d("ngIf",o.template),c(),d("ngIf",!o.template))},dependencies:[W,O],encapsulation:2});let t=n;return t})(),E=(()=>{let n=class n{ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"header":this.headerTemplate=i.template;break;case"content":this.contentTemplate=i.template;break;case"separator":this.separatorTemplate=i.template;break}})}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["p-stepperPanel"]],contentQueries:function(e,o,x){if(e&1&&U(x,T,4),e&2){let y;G(y=K())&&(o.templates=y)}},hostAttrs:[1,"p-element"],inputs:{header:"header"},ngContentSelectors:dt,decls:1,vars:0,template:function(e,o){e&1&&(me(),ue(0))},encapsulation:2});let t=n;return t})(),L=(()=>{let n=class n{constructor(){this.activeStep=0,this.orientation="horizontal",this.linear=!1,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.onClick=new j,this.activeStepChange=new j,this.id=ke()}isStepActive(i){return this.activeStep===i}getStepProp(i){if(i?.header)return i.header;if(i?.content)return i.content}getStepKey(i,e){return this.getStepProp(i)||e}getStepHeaderActionId(i){return`${this.id}_${i}_header_action`}getStepContentId(i){return`${this.id}_${i}_content`}updateActiveStep(i,e){this.activeStep=e,this.activeStepChange.emit(this.activeStep)}onItemClick(i,e){if(this.linear){i.preventDefault();return}e!==this.activeStep&&this.updateActiveStep(i,e)}isItemDisabled(i){return this.linear&&!this.isStepActive(i)}prevCallback(i,e){e!==0&&this.updateActiveStep(i,e-1)}nextCallback(i,e){e!==this.stepperPanels.length-1&&this.updateActiveStep(i,e+1)}trackByFn(i){return i}ngAfterContentInit(){this.panels=this.stepperPanels.toArray(),this.templates.forEach(i=>{switch(i.getType()){case"start":this.startTemplate=i.template;break;case"end":this.endTemplate=i.template;break;default:break}})}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["p-stepper"]],contentQueries:function(e,o,x){if(e&1&&(U(x,E,4),U(x,T,4)),e&2){let y;G(y=K())&&(o.stepperPanels=y),G(y=K())&&(o.templates=y)}},hostVars:6,hostBindings:function(e,o){e&2&&ee("p-stepper",!0)("p-component",!0)("p-stepper-vertical",o.orientation==="vertical")},inputs:{activeStep:"activeStep",orientation:"orientation",linear:"linear",transitionOptions:"transitionOptions"},outputs:{onClick:"onClick",activeStepChange:"activeStepChange"},decls:6,vars:4,consts:[["vertical",""],["role","tablist"],[4,"ngIf"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-stepper-nav"],["ngFor","",3,"ngForOf","ngForTrackBy"],[1,"p-stepper-panels"],["role","presentation",1,"p-stepper-header",3,"key","ngClass","data-pc-name","data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],[3,"onClick","id","template","stepperPanel","getStepProp","index","disabled","active","highlighted","aria-controls"],[3,"template","separatorClass","stepperPanel","index","active","highlighted"],[3,"onClick","nextCallback","prevCallback","id","template","orientation","stepperPanel","index","active","highlighted","ariaLabelledby"],[1,"p-stepper-panel",3,"key","ngClass","data-pc-name","data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],[1,"p-stepper-header",3,"ngClass"],[1,"p-stepper-toggleable-content"]],template:function(e,o){if(e&1&&(r(0,"div",1),g(1,xt,2,1,"ng-container",2)(2,ht,5,4,"ng-container",3)(3,St,1,2,"ng-template",null,0,J)(5,Tt,2,1,"ng-container",2),l()),e&2){let x=q(4);c(),d("ngIf",o.startTemplate),c(),d("ngIf",o.orientation==="horizontal")("ngIfElse",x),c(3),d("ngIf",o.endTemplate)}},dependencies:[X,xe,W,O,Pt,It,Mt],styles:[`@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}
`],encapsulation:2,data:{animation:[ye("tabContent",[re("hidden",oe({height:"0",visibility:"hidden"})),re("visible",oe({height:"*",visibility:"visible"})),le("visible <=> hidden",[ae("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),le("void => *",ae(0))])]},changeDetection:0});let t=n;return t})(),We=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=D({imports:[H,ie,ie]});let t=n;return t})();function Et(t,n){if(t&1){let a=_();r(0,"div",6)(1,"div",7),p(2,"Content I"),l()(),r(3,"div",8)(4,"p-button",9),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}}function Dt(t,n){if(t&1){let a=_();r(0,"div",6)(1,"div",7),p(2,"Content II"),l()(),r(3,"div",10)(4,"p-button",11),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l(),r(5,"p-button",9),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}}function Vt(t,n){if(t&1){let a=_();r(0,"div",6)(1,"div",7),p(2,"Content III"),l()(),r(3,"div",12)(4,"p-button",11),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l()()}}var Oe=(()=>{let n=class n{constructor(){this.code={basic:`<p-stepper>
    <p-stepperPanel header="Header I">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
            </div>
            <div class="flex pt-4 justify-content-end">
                <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Header II">
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-4 justify-content-between">
                <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" />
                <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Header III">
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
            </div>
            <div class="flex pt-4 justify-content-start">
                <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
</p-stepper>`,html:`<div class="card flex justify-content-center">
    <p-stepper>
        <p-stepperPanel header="Header I">
            <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div class="flex pt-4 justify-content-end">
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
        <p-stepperPanel header="Header II">
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div class="flex pt-4 justify-content-between">
                    <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
        <p-stepperPanel header="Header III">
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div class="flex pt-4 justify-content-start">
                    <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
    </p-stepper>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'stepper-basic-demo',
    templateUrl: './stepper-basic-demo.html',
    styles: [
        \`
        .p-stepper {
            flex-basis: 50rem;
        } 
        \`
    ]
    
})
export class StepperBasicDemo {
}`}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["basic-doc"]],decls:18,vars:1,consts:[[1,"card","flex","justify-content-center"],["header","Header I"],["pTemplate","content"],["header","Header II"],["header","Header III"],["selector","stepper-basic-demo",3,"code"],[1,"flex","flex-column","h-12rem"],[1,"border-2","border-dashed","surface-border","border-round","surface-ground","flex-auto","flex","justify-content-center","align-items-center","font-medium"],[1,"flex","pt-4","justify-content-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-4","justify-content-between"],["label","Back","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-4","justify-content-start"]],template:function(e,o){e&1&&(r(0,"app-docsectiontext")(1,"p"),p(2," Stepper consists of one or more StepperPanel elements to encapsulate each step in the progress. The elements to navigate between the steps are not built-in for ease of customization, instead "),r(3,"i"),p(4,"prevCallback"),l(),p(5," and "),r(6,"i"),p(7,"nextCallback"),l(),p(8," events should be bound to your custom UI elements. "),l()(),r(9,"div",0)(10,"p-stepper")(11,"p-stepperPanel",1),g(12,Et,5,0,"ng-template",2),l(),r(13,"p-stepperPanel",3),g(14,Dt,6,0,"ng-template",2),l(),r(15,"p-stepperPanel",4),g(16,Vt,5,0,"ng-template",2),l()()(),b(17,"app-code",5)),e&2&&(c(17),d("code",o.code))},dependencies:[I,M,L,E,T,B],styles:[".p-stepper[_ngcontent-%COMP%]{flex-basis:50rem}"]});let t=n;return t})();function Bt(t,n){if(t&1){let a=_();r(0,"div",7)(1,"div",8),p(2,"Content I"),l()(),r(3,"div",9)(4,"p-button",10),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}}function Lt(t,n){if(t&1){let a=_();r(0,"div",7)(1,"div",8),p(2,"Content II"),l()(),r(3,"div",11)(4,"p-button",12),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l(),r(5,"p-button",10),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}}function jt(t,n){if(t&1){let a=_();r(0,"div",7)(1,"div",8),p(2,"Content III"),l()(),r(3,"div",9)(4,"p-button",13),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l()()}}var Re=(()=>{let n=class n{constructor(){this.code={basic:`<p-stepper orientation="vertical">
    <p-stepperPanel header="Header I">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
            </div>
            <div class="flex py-4">
                <p-button label="Next" (onClick)="nextCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Header II">
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
            </div>
            <div class="flex py-4 gap-2">
                <p-button label="Back" severity="secondary" (onClick)="prevCallback.emit()" />
                <p-button label="Next" (onClick)="nextCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Header III">
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
            </div>
            <div class="flex py-4">
                <p-button label="Back" (onClick)="prevCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
</p-stepper>`,html:`<div class="card">
    <p-stepper orientation="vertical">
        <p-stepperPanel header="Header I">
            <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div class="flex py-4">
                    <p-button label="Next" (onClick)="nextCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
        <p-stepperPanel header="Header II">
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div class="flex py-4 gap-2">
                    <p-button label="Back" severity="secondary" (onClick)="prevCallback.emit()" />
                    <p-button label="Next" (onClick)="nextCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
        <p-stepperPanel header="Header III">
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div class="flex py-4">
                    <p-button label="Back" (onClick)="prevCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
    </p-stepper>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'stepper-vertical-demo',
    templateUrl: './stepper-vertical-demo.html'
})
export class StepperVerticalDemo {
}`}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["vertical-doc"]],decls:21,vars:1,consts:[[1,"card"],["orientation","vertical"],["header","Header I"],["pTemplate","content"],["header","Header II"],["header","Header III"],["selector","stepper-vertical-demo",3,"code"],[1,"flex","flex-column","h-12rem"],[1,"border-2","border-dashed","surface-border","border-round","surface-ground","flex-auto","flex","justify-content-center","align-items-center","font-medium"],[1,"flex","py-4"],["label","Next",3,"onClick"],[1,"flex","py-4","gap-2"],["label","Back","severity","secondary",3,"onClick"],["label","Back",3,"onClick"]],template:function(e,o){e&1&&(r(0,"app-docsectiontext")(1,"p"),p(2,"Layout of the Stepper is configured with the "),r(3,"i"),p(4,"orientation"),l(),p(5," property that accepts "),r(6,"i"),p(7,"horizontal"),l(),p(8," and "),r(9,"i"),p(10,"vertical"),l(),p(11," as available options."),l()(),r(12,"div",0)(13,"p-stepper",1)(14,"p-stepperPanel",2),g(15,Bt,5,0,"ng-template",3),l(),r(16,"p-stepperPanel",4),g(17,Lt,6,0,"ng-template",3),l(),r(18,"p-stepperPanel",5),g(19,jt,5,0,"ng-template",3),l()()(),b(20,"app-code",6)),e&2&&(c(20),d("code",o.code))},dependencies:[I,M,L,E,T,B],encapsulation:2});let t=n;return t})();function At(t,n){if(t&1){let a=_();r(0,"div",7)(1,"div",8),p(2,"Content I"),l()(),r(3,"div",9)(4,"p-button",10),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}}function Ft(t,n){if(t&1){let a=_();r(0,"div",7)(1,"div",8),p(2,"Content II"),l()(),r(3,"div",11)(4,"p-button",12),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l(),r(5,"p-button",10),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}}function Nt(t,n){if(t&1){let a=_();r(0,"div",7)(1,"div",8),p(2,"Content III"),l()(),r(3,"div",13)(4,"p-button",12),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l()()}}var Qe=(()=>{let n=class n{constructor(){this.code={basic:`<p-stepper [linear]="true">
    <p-stepperPanel header="Header I">
        <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
            </div>
            <div class="flex pt-4 justify-content-end">
                <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Header II">
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-4 justify-content-between">
                <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" />
                <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
    <p-stepperPanel header="Header III">
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-index="index">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
            </div>
            <div class="flex pt-4 justify-content-start">
                <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" /></div
        ></ng-template>
    </p-stepperPanel>
</p-stepper>`,html:`<div class="card">
    <p-stepper [linear]="true">
        <p-stepperPanel header="Header I">
            <ng-template pTemplate="content" let-nextCallback="nextCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div class="flex pt-4 justify-content-end">
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
        <p-stepperPanel header="Header II">
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div class="flex pt-4 justify-content-between">
                    <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
        <p-stepperPanel header="Header III">
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-index="index">
                <div class="flex flex-column h-12rem">
                    <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div class="flex pt-4 justify-content-start">
                    <p-button label="Back" icon="pi pi-arrow-left" (onClick)="prevCallback.emit()" /></div
            ></ng-template>
        </p-stepperPanel>
    </p-stepper>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'stepper-linear-demo-demo',
    templateUrl: './stepper-linear-demo-demo.html'
})
export class StepperLinearDemo {
}`}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["linear-doc"]],decls:15,vars:2,consts:[[1,"card"],[3,"linear"],["header","Header I"],["pTemplate","content"],["header","Header II"],["header","Header III"],["selector","stepper-linear-demo",3,"code"],[1,"flex","flex-column","h-12rem"],[1,"border-2","border-dashed","surface-border","border-round","surface-ground","flex-auto","flex","justify-content-center","align-items-center","font-medium"],[1,"flex","pt-4","justify-content-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-4","justify-content-between"],["label","Back","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-4","justify-content-start"]],template:function(e,o){e&1&&(r(0,"app-docsectiontext")(1,"p"),p(2,"When "),r(3,"i"),p(4,"linear"),l(),p(5," property is present, current step must be completed in order to move to the next step."),l()(),r(6,"div",0)(7,"p-stepper",1)(8,"p-stepperPanel",2),g(9,At,5,0,"ng-template",3),l(),r(10,"p-stepperPanel",4),g(11,Ft,6,0,"ng-template",3),l(),r(12,"p-stepperPanel",5),g(13,Nt,5,0,"ng-template",3),l()()(),b(14,"app-code",6)),e&2&&(c(7),d("linear",!0),c(7),d("code",o.code))},dependencies:[I,M,L,E,T,B],encapsulation:2});let t=n;return t})();var de=(t,n)=>({"bg-primary border-primary":t,"surface-border":n});function Ht(t,n){if(t&1){let a=_();r(0,"button",5),f("onClick",function(){let e=m(a).onClick;return u(e.emit())}),r(1,"span",6),b(2,"i",7),l()()}if(t&2){let a=n.index,i=s();c(),d("ngClass",F(1,de,a<=i.active,a>i.active))}}function Wt(t,n){if(t&1){let a=_();r(0,"div",8)(1,"div",9),p(2,"Create your account"),l(),r(3,"div",10)(4,"p-iconField")(5,"p-inputIcon"),b(6,"i",7),l(),r(7,"input",11),k("ngModelChange",function(e){m(a);let o=s();return h(o.name,e)||(o.name=e),u(e)}),l()()(),r(8,"div",10)(9,"p-iconField")(10,"p-inputIcon"),b(11,"i",12),l(),r(12,"input",13),k("ngModelChange",function(e){m(a);let o=s();return h(o.email,e)||(o.email=e),u(e)}),l()()(),r(13,"div",10)(14,"p-password",14),k("ngModelChange",function(e){m(a);let o=s();return h(o.password,e)||(o.password=e),u(e)}),l()()(),r(15,"div",15)(16,"p-button",16),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}if(t&2){let a=s();c(7),v("ngModel",a.name),c(5),v("ngModel",a.email),c(2),v("ngModel",a.password),d("toggleMask",!0)}}function Ot(t,n){if(t&1){let a=_();r(0,"button",5),f("onClick",function(){let e=m(a).onClick;return u(e.emit())}),r(1,"span",6),b(2,"i",17),l()()}if(t&2){let a=n.index,i=s();c(),d("ngClass",F(1,de,a<=i.active,a>i.active))}}function Rt(t,n){if(t&1){let a=_();r(0,"div",18)(1,"div",9),p(2,"Choose your interests"),l(),r(3,"div",19)(4,"p-toggleButton",20),k("ngModelChange",function(e){m(a);let o=s();return h(o.option1,e)||(o.option1=e),u(e)}),l(),r(5,"p-toggleButton",21),k("ngModelChange",function(e){m(a);let o=s();return h(o.option2,e)||(o.option2=e),u(e)}),l(),r(6,"p-toggleButton",22),k("ngModelChange",function(e){m(a);let o=s();return h(o.option3,e)||(o.option3=e),u(e)}),l(),r(7,"p-toggleButton",23),k("ngModelChange",function(e){m(a);let o=s();return h(o.option4,e)||(o.option4=e),u(e)}),l(),r(8,"p-toggleButton",24),k("ngModelChange",function(e){m(a);let o=s();return h(o.option5,e)||(o.option5=e),u(e)}),l(),r(9,"p-toggleButton",25),k("ngModelChange",function(e){m(a);let o=s();return h(o.option6,e)||(o.option6=e),u(e)}),l(),r(10,"p-toggleButton",26),k("ngModelChange",function(e){m(a);let o=s();return h(o.option7,e)||(o.option7=e),u(e)}),l(),r(11,"p-toggleButton",27),k("ngModelChange",function(e){m(a);let o=s();return h(o.option8,e)||(o.option8=e),u(e)}),l(),r(12,"p-toggleButton",28),k("ngModelChange",function(e){m(a);let o=s();return h(o.option9,e)||(o.option9=e),u(e)}),l(),r(13,"p-toggleButton",29),k("ngModelChange",function(e){m(a);let o=s();return h(o.option10,e)||(o.option10=e),u(e)}),l()()(),r(14,"div",30)(15,"p-button",31),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l(),r(16,"p-button",16),f("onClick",function(){let e=m(a).nextCallback;return u(e.emit())}),l()()}if(t&2){let a=s();c(4),v("ngModel",a.option1),c(),v("ngModel",a.option2),c(),v("ngModel",a.option3),c(),v("ngModel",a.option4),c(),v("ngModel",a.option5),c(),v("ngModel",a.option6),c(),v("ngModel",a.option7),c(),v("ngModel",a.option8),c(),v("ngModel",a.option9),c(),v("ngModel",a.option10)}}function Qt(t,n){if(t&1){let a=_();r(0,"button",5),f("onClick",function(){let e=m(a).onClick;return u(e.emit())}),r(1,"span",6),b(2,"i",32),l()()}if(t&2){let a=n.index,i=s();c(),d("ngClass",F(1,de,a<=i.active,a>i.active))}}function zt(t,n){if(t&1){let a=_();r(0,"div",18)(1,"div",9),p(2,"Account created successfully"),l(),r(3,"div",33),b(4,"img",34),l()(),r(5,"div",35)(6,"p-button",31),f("onClick",function(){let e=m(a).prevCallback;return u(e.emit())}),l()()}}var ze=(()=>{let n=class n{constructor(){this.active=0,this.name=null,this.email=null,this.password=null,this.option1=!1,this.option2=!1,this.option3=!1,this.option4=!1,this.option5=!1,this.option6=!1,this.option7=!1,this.option8=!1,this.option9=!1,this.option10=!1,this.code={basic:`<p-stepper [(activeStep)]="active">
    <p-stepperPanel>
        <ng-template pTemplate="header" let-onClick="onClick" let-index="index">
            <button class="bg-transparent border-none inline-flex flex-column gap-2" (onClick)="onClick.emit()">
                <span
                    class="border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center"
                    [ngClass]="{
                        'bg-primary border-primary': index <= active,
                        'surface-border': index > active
                    }"
                >
                    <i class="pi pi-user"></i>
                </span>
            </button>
        </ng-template>
        <ng-template pTemplate="content" let-nextCallback="nextCallback">
            <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                <div class="text-center mt-3 mb-3 text-xl font-semibold">Create your account</div>
                <div class="field p-fluid">
                    <p-iconField>
                        <p-inputIcon>
                            <i class="pi pi-user"></i>
                        </p-inputIcon>
                        <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" />
                    </p-iconField>
                </div>
                <div class="field p-fluid">
                    <p-iconField>
                        <p-inputIcon>
                            <i class="pi pi-envelope"></i>
                        </p-inputIcon>
                        <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" />
                    </p-iconField>
                </div>
                <div class="field p-fluid">
                    <p-password [(ngModel)]="password" [toggleMask]="true" placeholder="Password" />
                </div>
            </div>
            <div class="flex pt-4 justify-content-end">
                <p-button (onClick)="nextCallback.emit()" label="Next" icon="pi pi-arrow-right" iconPos="right" />
            </div>
        </ng-template>
    </p-stepperPanel>
    <p-stepperPanel>
        <ng-template pTemplate="header" let-onClick="onClick" let-index="index">
            <button class="bg-transparent border-none inline-flex flex-column gap-2" (onClick)="onClick.emit()">
                <span
                    class="border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center"
                    [ngClass]="{
                        'bg-primary border-primary': index <= active,
                        'surface-border': index > active
                    }"
                >
                    <i class="pi pi-star"></i>
                </span>
            </button>
        </ng-template>
        <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback">
            <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
                <div class="flex flex-wrap justify-content-center gap-3">
                    <p-toggleButton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                    <p-toggleButton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                    <p-toggleButton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                    <p-toggleButton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                    <p-toggleButton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                    <p-toggleButton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                    <p-toggleButton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                    <p-toggleButton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                    <p-toggleButton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                    <p-toggleButton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                </div>
            </div>
            <div class="flex pt-4 justify-content-between">
                <p-button (onClick)="prevCallback.emit()" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                <p-button (onClick)="nextCallback.emit()" label="Next" icon="pi pi-arrow-right" iconPos="right" />
            </div>
        </ng-template>
    </p-stepperPanel>
    <p-stepperPanel>
        <ng-template pTemplate="header" let-onClick="onClick" let-index="index">
            <button class="bg-transparent border-none inline-flex flex-column gap-2" (onClick)="onClick.emit()">
                <span
                    class="border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center"
                    [ngClass]="{
                        'bg-primary border-primary': index <= active,
                        'surface-border': index > active
                    }"
                >
                    <i class="pi pi-id-card"></i>
                </span>
            </button>
        </ng-template>
        <ng-template pTemplate="content" let-prevCallback="prevCallback">
            <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                <div class="text-center mt-3 mb-3 text-xl font-semibold">Account created successfully</div>
                <div class="text-center">
                    <img alt="logo" src="https://primefaces.org/cdn/primeng/images/stepper/content.svg" />
                </div>
            </div>
            <div class="flex pt-4 justify-content-start">
                <p-button (onClick)="prevCallback.emit()" label="Back" severity="secondary" icon="pi pi-arrow-left" />
            </div>
        </ng-template>
    </p-stepperPanel>
</p-stepper>`,html:`<div class="card flex justify-content-center">
    <p-stepper [(activeStep)]="active">
        <p-stepperPanel>
            <ng-template pTemplate="header" let-onClick="onClick" let-index="index">
                <button class="bg-transparent border-none inline-flex flex-column gap-2" (onClick)="onClick.emit()">
                    <span
                        class="border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center"
                        [ngClass]="{
                            'bg-primary border-primary': index <= active,
                            'surface-border': index > active
                        }"
                    >
                        <i class="pi pi-user"></i>
                    </span>
                </button>
            </ng-template>
            <ng-template pTemplate="content" let-nextCallback="nextCallback">
                <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                    <div class="text-center mt-3 mb-3 text-xl font-semibold">Create your account</div>
                    <div class="field p-fluid">
                        <p-iconField>
                            <p-inputIcon>
                                <i class="pi pi-user"></i>
                            </p-inputIcon>
                            <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" />
                        </p-iconField>
                    </div>
                    <div class="field p-fluid">
                        <p-iconField>
                            <p-inputIcon>
                                <i class="pi pi-envelope"></i>
                            </p-inputIcon>
                            <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" />
                        </p-iconField>
                    </div>
                    <div class="field p-fluid">
                        <p-password [(ngModel)]="password" [toggleMask]="true" placeholder="Password" />
                    </div>
                </div>
                <div class="flex pt-4 justify-content-end">
                    <p-button (onClick)="nextCallback.emit()" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-stepperPanel>
        <p-stepperPanel>
            <ng-template pTemplate="header" let-onClick="onClick" let-index="index">
                <button class="bg-transparent border-none inline-flex flex-column gap-2" (onClick)="onClick.emit()">
                    <span
                        class="border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center"
                        [ngClass]="{
                            'bg-primary border-primary': index <= active,
                            'surface-border': index > active
                        }"
                    >
                        <i class="pi pi-star"></i>
                    </span>
                </button>
            </ng-template>
            <ng-template pTemplate="content" let-prevCallback="prevCallback" let-nextCallback="nextCallback">
                <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
                    <div class="flex flex-wrap justify-content-center gap-3">
                        <p-toggleButton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                        <p-toggleButton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                        <p-toggleButton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                        <p-toggleButton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                        <p-toggleButton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                        <p-toggleButton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                        <p-toggleButton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                        <p-toggleButton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                        <p-toggleButton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                        <p-toggleButton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                    </div>
                </div>
                <div class="flex pt-4 justify-content-between">
                    <p-button (onClick)="prevCallback.emit()" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    <p-button (onClick)="nextCallback.emit()" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-stepperPanel>
        <p-stepperPanel>
            <ng-template pTemplate="header" let-onClick="onClick" let-index="index">
                <button class="bg-transparent border-none inline-flex flex-column gap-2" (onClick)="onClick.emit()">
                    <span
                        class="border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center"
                        [ngClass]="{
                            'bg-primary border-primary': index <= active,
                            'surface-border': index > active
                        }"
                    >
                        <i class="pi pi-id-card"></i>
                    </span>
                </button>
            </ng-template>
            <ng-template pTemplate="content" let-prevCallback="prevCallback">
                <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-3 mb-3 text-xl font-semibold">Account created successfully</div>
                    <div class="text-center">
                        <img alt="logo" src="https://primefaces.org/cdn/primeng/images/stepper/content.svg" />
                    </div>
                </div>
                <div class="flex pt-4 justify-content-start">
                    <p-button (onClick)="prevCallback.emit()" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                </div>
            </ng-template>
        </p-stepperPanel>
    </p-stepper>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'stepper-template-demo',
    templateUrl: './stepper-template-demo.html',
    styles: [
        \`
        .p-stepper {
            flex-basis: 40rem;
        } 
        \`
    ]
})
export class StepperTemplateDemo {
    active: number | undefined = 0;

    name: string | undefined = null;

    email: string | undefined = null;

    password: string | undefined = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;
}`}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["template-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"activeStepChange","activeStep"],["pTemplate","header"],["pTemplate","content"],["selector","stepper-template-demo",3,"code"],[1,"bg-transparent","border-none","inline-flex","flex-column","gap-2",3,"onClick"],[1,"border-round","border-2","w-3rem","h-3rem","inline-flex","align-items-center","justify-content-center",3,"ngClass"],[1,"pi","pi-user"],[1,"flex","flex-column","gap-2","mx-auto",2,"min-height","16rem","max-width","20rem"],[1,"text-center","mt-3","mb-3","text-xl","font-semibold"],[1,"field","p-fluid"],["pInputText","","id","input","type","text","placeholder","Name",3,"ngModelChange","ngModel"],[1,"pi","pi-envelope"],["pInputText","","id","email","type","email","placeholder","Email",3,"ngModelChange","ngModel"],["placeholder","Password",3,"ngModelChange","ngModel","toggleMask"],[1,"flex","pt-4","justify-content-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"pi","pi-star"],[1,"flex","flex-column","gap-2","mx-auto",2,"min-height","16rem","max-width","24rem"],[1,"flex","flex-wrap","justify-content-center","gap-3"],["onLabel","Nature","offLabel","Nature",3,"ngModelChange","ngModel"],["onLabel","Art","offLabel","Art",3,"ngModelChange","ngModel"],["onLabel","Music","offLabel","Music",3,"ngModelChange","ngModel"],["onLabel","Design","offLabel","Design",3,"ngModelChange","ngModel"],["onLabel","Photography","offLabel","Photography",3,"ngModelChange","ngModel"],["onLabel","Movies","offLabel","Movies",3,"ngModelChange","ngModel"],["onLabel","Sports","offLabel","Sports",3,"ngModelChange","ngModel"],["onLabel","Gaming","offLabel","Gaming",3,"ngModelChange","ngModel"],["onLabel","Traveling","offLabel","Traveling",3,"ngModelChange","ngModel"],["onLabel","Dancing","offLabel","Dancing",3,"ngModelChange","ngModel"],[1,"flex","pt-4","justify-content-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"pi","pi-id-card"],[1,"text-center"],["alt","logo","src","https://primefaces.org/cdn/primeng/images/stepper/content.svg"],[1,"flex","pt-4","justify-content-start"]],template:function(e,o){e&1&&(r(0,"app-docsectiontext")(1,"p"),p(2,"Stepper provides various templating options to customize the default UI design."),l()(),r(3,"div",0)(4,"p-stepper",1),k("activeStepChange",function(y){return h(o.active,y)||(o.active=y),y}),r(5,"p-stepperPanel"),g(6,Ht,3,4,"ng-template",2)(7,Wt,17,4,"ng-template",3),l(),r(8,"p-stepperPanel"),g(9,Ot,3,4,"ng-template",2)(10,Rt,17,10,"ng-template",3),l(),r(11,"p-stepperPanel"),g(12,Qt,3,4,"ng-template",2)(13,zt,7,0,"ng-template",3),l()()(),b(14,"app-code",4)),e&2&&(c(4),v("activeStep",o.active),c(10),d("code",o.code))},dependencies:[X,I,M,L,E,T,_e,be,Ce,B,Be,De,Pe,we,je],styles:[".p-stepper[_ngcontent-%COMP%]{flex-basis:40rem}"]});let t=n;return t})();var Ue=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["accessibility-doc"]],decls:56,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(e,o){e&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),p(3,"Screen Reader"),l(),r(4,"p"),p(5," Stepper container is defined with the "),r(6,"i"),p(7,"tablist"),l(),p(8," role, as any attribute is passed to the container element "),r(9,"i"),p(10,"aria-labelledby"),l(),p(11," can be optionally used to specify an element to describe the Stepper. Each stepper header has a "),r(12,"i"),p(13,"tab"),l(),p(14," role and "),r(15,"i"),p(16,"aria-controls"),l(),p(17," to refer to the corresponding stepper content element. The content element of each stepper has "),r(18,"i"),p(19,"tabpanel"),l(),p(20," role, an id to match the "),r(21,"i"),p(22,"aria-controls"),l(),p(23," of the header and "),r(24,"i"),p(25,"aria-labelledby"),l(),p(26," reference to the header as the accessible name. "),l(),r(27,"h3"),p(28,"Tab Header Keyboard Support"),l(),r(29,"div",0)(30,"table",1)(31,"thead")(32,"tr")(33,"th"),p(34,"Key"),l(),r(35,"th"),p(36,"Function"),l()()(),r(37,"tbody")(38,"tr")(39,"td")(40,"i"),p(41,"tab"),l()(),r(42,"td"),p(43,"Moves focus through the header."),l()(),r(44,"tr")(45,"td")(46,"i"),p(47,"enter"),l()(),r(48,"td"),p(49,"Activates the focused stepper header."),l()(),r(50,"tr")(51,"td")(52,"i"),p(53,"space"),l()(),r(54,"td"),p(55,"Activates the focused stepper header."),l()()()()()()())},dependencies:[M],encapsulation:2});let t=n;return t})();var Ut=()=>["Stepper","StepperPanel"],Ge=(()=>{let n=class n{constructor(){this.docs=[{id:"import",label:"Import",component:Fe},{id:"basic",label:"Basic",component:Oe},{id:"vertical",label:"Vertical",component:Re},{id:"linear",label:"Linear",component:Qe},{id:"template",label:"Template",component:ze},{id:"accessibility",label:"Accessibility",component:Ue}]}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=C({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Stepper Component","header","Stepper","description","The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.",3,"docs","apiDocs"]],template:function(e,o){e&1&&b(0,"app-doc",0),e&2&&d("docs",o.docs)("apiDocs",ge(2,Ut))},dependencies:[Me],encapsulation:2});let t=n;return t})();var Ke=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=D({imports:[R.forChild([{path:"",component:Ge}]),R]});let t=n;return t})();var qe=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=D({imports:[H,Ie,pe,We,R,ve,he,Se,Le,Ve,Ee,Te,Ae,pe]});let t=n;return t})();var di=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=D({imports:[H,Ke,qe]});let t=n;return t})();export{di as StepperDemoModule};
