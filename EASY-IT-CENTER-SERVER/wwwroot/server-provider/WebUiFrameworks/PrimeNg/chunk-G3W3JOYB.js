import{a as f,b as ce,c as K}from"./chunk-AS5FXEGH.js";import{a as h,b as pe}from"./chunk-X2ZDE2AM.js";import{a as $,e as b,f as ee,g as te,h as oe,i as M,j as ie,m as ne,n as ae,p as re,q as se}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as de,z as me}from"./chunk-UWMVDULA.js";import{o as le,t as L}from"./chunk-N5X6XDRN.js";import{Cc as J,Fc as Q,Ic as Z,Jb as i,Kb as Y,Nb as g,Nc as R,Ob as y,Pb as C,Qb as O,Sa as m,Sb as F,T as j,Ta as A,V as E,Ya as V,da as p,ea as T,ib as P,jb as _,kb as d,kc as q,lb as G,oa as z,ob as U,rb as n,sb as a,tb as c,ua as B,va as I,vc as H,yb as N,zb as X}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";function Ne(s,e){if(s&1&&(z(),n(0,"text",5),i(1),a()),s&2){let W=X();_("x",50)("y",57)("fill",W.textColor)("name",W.name),m(),Y(W.valueToDisplay())}}var Le={provide:$,useExisting:j(()=>v),multi:!0},v=(()=>{let e=class e{constructor(r,o,t,u){this.document=r,this.renderer=o,this.cd=t,this.el=u,this.tabindex=0,this.valueColor="var(--primary-color, Black)",this.rangeColor="var(--surface-border, LightGray)",this.textColor="var(--text-color-secondary, Black)",this.valueTemplate="{value}",this.size=100,this.step=1,this.min=0,this.max=100,this.strokeWidth=14,this.showValue=!0,this.readonly=!1,this.onChange=new I,this.radius=40,this.midX=50,this.midY=50,this.minRadians=4*Math.PI/3,this.maxRadians=-Math.PI/3,this.value=0,this.onModelChange=()=>{},this.onModelTouched=()=>{}}mapRange(r,o,t,u,l){return(r-o)*(l-u)/(t-o)+u}onClick(r){!this.disabled&&!this.readonly&&this.updateValue(r.offsetX,r.offsetY)}updateValue(r,o){let t=r-this.size/2,u=this.size/2-o,l=Math.atan2(u,t),Ae=-Math.PI/2-Math.PI/6;this.updateModel(l,Ae)}updateModel(r,o){let t;if(r>this.maxRadians)t=this.mapRange(r,this.minRadians,this.maxRadians,this.min,this.max);else if(r<o)t=this.mapRange(r+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max);else return;let u=Math.round((t-this.min)/this.step)*this.step+this.min;this.value=u,this.onModelChange(this.value),this.onChange.emit(this.value)}onMouseDown(r){if(!this.disabled&&!this.readonly){let o=this.document.defaultView||"window";this.windowMouseMoveListener=this.renderer.listen(o,"mousemove",this.onMouseMove.bind(this)),this.windowMouseUpListener=this.renderer.listen(o,"mouseup",this.onMouseUp.bind(this)),r.preventDefault()}}onMouseUp(r){!this.disabled&&!this.readonly&&(this.windowMouseMoveListener&&(this.windowMouseMoveListener(),this.windowMouseUpListener=null),this.windowMouseUpListener&&(this.windowMouseUpListener(),this.windowMouseMoveListener=null),r.preventDefault())}onTouchStart(r){if(!this.disabled&&!this.readonly){let o=this.document.defaultView||"window";this.windowTouchMoveListener=this.renderer.listen(o,"touchmove",this.onTouchMove.bind(this)),this.windowTouchEndListener=this.renderer.listen(o,"touchend",this.onTouchEnd.bind(this)),r.preventDefault()}}onTouchEnd(r){!this.disabled&&!this.readonly&&(this.windowTouchMoveListener&&this.windowTouchMoveListener(),this.windowTouchEndListener&&this.windowTouchEndListener(),this.windowTouchMoveListener=null,this.windowTouchEndListener=null,r.preventDefault())}onMouseMove(r){!this.disabled&&!this.readonly&&(this.updateValue(r.offsetX,r.offsetY),r.preventDefault())}onTouchMove(r){if(!this.disabled&&!this.readonly&&r instanceof TouchEvent&&r.touches.length===1){let o=this.el.nativeElement.children[0].getBoundingClientRect(),t=r.targetTouches.item(0);if(t){let u=t.clientX-o.left,l=t.clientY-o.top;this.updateValue(u,l)}}}updateModelValue(r){r>this.max?this.value=this.max:r<this.min?this.value=this.min:this.value=r,this.onModelChange(this.value),this.onChange.emit(this.value)}onKeyDown(r){if(!this.disabled&&!this.readonly)switch(r.code){case"ArrowRight":case"ArrowUp":{r.preventDefault(),this.updateModelValue(this._value+1);break}case"ArrowLeft":case"ArrowDown":{r.preventDefault(),this.updateModelValue(this._value-1);break}case"Home":{r.preventDefault(),this.updateModelValue(this.min);break}case"End":{r.preventDefault(),this.updateModelValue(this.max);break}case"PageUp":{r.preventDefault(),this.updateModelValue(this._value+10);break}case"PageDown":{r.preventDefault(),this.updateModelValue(this._value-10);break}}}writeValue(r){this.value=r,this.cd.markForCheck()}registerOnChange(r){this.onModelChange=r}registerOnTouched(r){this.onModelTouched=r}setDisabledState(r){this.disabled=r,this.cd.markForCheck()}containerClass(){return{"p-knob p-component":!0,"p-disabled":this.disabled}}rangePath(){return`M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`}valuePath(){return`M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`}zeroRadians(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)}valueRadians(){return this.mapRange(this._value,this.min,this.max,this.minRadians,this.maxRadians)}minX(){return this.midX+Math.cos(this.minRadians)*this.radius}minY(){return this.midY-Math.sin(this.minRadians)*this.radius}maxX(){return this.midX+Math.cos(this.maxRadians)*this.radius}maxY(){return this.midY-Math.sin(this.maxRadians)*this.radius}zeroX(){return this.midX+Math.cos(this.zeroRadians())*this.radius}zeroY(){return this.midY-Math.sin(this.zeroRadians())*this.radius}valueX(){return this.midX+Math.cos(this.valueRadians())*this.radius}valueY(){return this.midY-Math.sin(this.valueRadians())*this.radius}largeArc(){return Math.abs(this.zeroRadians()-this.valueRadians())<Math.PI?0:1}sweep(){return this.valueRadians()>this.zeroRadians()?0:1}valueToDisplay(){return this.valueTemplate.replace("{value}",this._value.toString())}get _value(){return this.value!=null?this.value:this.min}};e.\u0275fac=function(o){return new(o||e)(A(H),A(V),A(q),A(B))},e.\u0275cmp=p({type:e,selectors:[["p-knob"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",valueColor:"valueColor",rangeColor:"rangeColor",textColor:"textColor",valueTemplate:"valueTemplate",name:"name",size:"size",step:"step",min:"min",max:"max",strokeWidth:"strokeWidth",disabled:"disabled",showValue:"showValue",readonly:"readonly"},outputs:{onChange:"onChange"},features:[O([Le])],decls:5,vars:24,consts:[[3,"ngClass","ngStyle"],["viewBox","0 0 100 100","role","slider",3,"click","keydown","mousedown","mouseup","touchstart","touchend"],[1,"p-knob-range"],[1,"p-knob-value"],["text-anchor","middle","class","p-knob-text",4,"ngIf"],["text-anchor","middle",1,"p-knob-text"]],template:function(o,t){o&1&&(n(0,"div",0),z(),n(1,"svg",1),N("click",function(l){return t.onClick(l)})("keydown",function(l){return t.onKeyDown(l)})("mousedown",function(l){return t.onMouseDown(l)})("mouseup",function(l){return t.onMouseUp(l)})("touchstart",function(l){return t.onTouchStart(l)})("touchend",function(l){return t.onTouchEnd(l)}),c(2,"path",2)(3,"path",3),P(4,Ne,2,5,"text",4),a()()),o&2&&(U(t.styleClass),d("ngClass",t.containerClass())("ngStyle",t.style),_("data-pc-name","knob")("data-pc-section","root"),m(),G("width",t.size+"px")("height",t.size+"px"),_("aria-valuemin",t.min)("aria-valuemax",t.max)("aria-valuenow",t._value)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("tabindex",t.readonly||t.disabled?-1:t.tabindex)("data-pc-section","svg"),m(),_("d",t.rangePath())("stroke-width",t.strokeWidth)("stroke",t.rangeColor),m(),_("d",t.valuePath())("stroke-width",t.strokeWidth)("stroke",t.valueColor),m(),d("ngIf",t.showValue))},dependencies:[J,Q,Z],styles:[`@keyframes dash-frame{to{stroke-dashoffset:0}}@layer primeng{.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}}
`],encapsulation:2,changeDetection:0});let s=e;return s})(),ue=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[R]});let s=e;return s})();var he=(()=>{let e=class e{constructor(){this.code={typescript:"import { KnobModule } from 'primeng/knob';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&c(0,"app-code",0),o&2&&d("code",t.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let s=e;return s})();var fe=(()=>{let e=class e{constructor(){this.code={basic:'<p-knob [(ngModel)]="value"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-basic-demo',
    templateUrl: './knob-basic-demo.html'
})
export class KnobBasicDemo {
    value!: number;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","knob-basic-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Knob is an input component and used with the standard "),n(3,"i"),i(4,"ngModel"),a(),i(5," directive."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var ve=(()=>{let e=class e{constructor(){this.value=10,this.code={basic:'<p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-min-max-demo',
    templateUrl: './knob-min-max-demo.html'
})
export class KnobMinMaxDemo {
    value: number = 10;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["min-max-doc"]],decls:12,vars:4,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","min","max"],["selector","knob-min-max-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Boundaries are configured with the "),n(3,"i"),i(4,"min"),a(),i(5," and "),n(6,"i"),i(7,"max"),a(),i(8," properties whose defaults are 0 and 100 respectively."),a()(),n(9,"div",0)(10,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(11,"app-code",2)),o&2&&(m(10),g("ngModel",t.value),d("min",-50)("max",50),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var be=(()=>{let e=class e{constructor(){this.code={basic:'<p-knob [(ngModel)]="value" [step]="10"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [step]="10"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-step-demo',
    templateUrl: './knob-step-demo.html'
})
export class KnobStepDemo {
    value!: number;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["step-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","step"],["selector","knob-step-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Size of each movement is defined with the "),n(3,"i"),i(4,"step"),a(),i(5," property."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),d("step",10),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var ge=(()=>{let e=class e{constructor(){this.value=60,this.code={basic:'<p-knob [(ngModel)]="value" valueTemplate="{value}%"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" valueTemplate="{value}%"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-template-demo',
    templateUrl: './knob-template-demo.html'
})
export class KnobTemplateDemo {
    value: number = 60;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["template-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["valueTemplate","{value}%",3,"ngModelChange","ngModel"],["selector","knob-template-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Label is a string template that can be customized with the "),n(3,"i"),i(4,"valueTemplate"),a(),i(5," property having 60 as the placeholder ."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var ye=(()=>{let e=class e{constructor(){this.value=40,this.code={basic:'<p-knob [(ngModel)]="value" [strokeWidth]="5"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [strokeWidth]="5"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-stroke-demo',
    templateUrl: './knob-stroke-demo.html'
})
export class KnobStrokeDemo {
    value: number = 40;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["stroke-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","strokeWidth"],["selector","knob-stroke-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"The border size is specified with the "),n(3,"i"),i(4,"strokeWidth"),a(),i(5," property as a number in pixels."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),d("strokeWidth",5),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var Ce=(()=>{let e=class e{constructor(){this.value=60,this.code={basic:'<p-knob [(ngModel)]="value" [size]="200"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [size]="200"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-size-demo',
    templateUrl: './knob-size-demo.html'
})
export class KnobSizeDemo {
    value: number = 60;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["size-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","size"],["selector","knob-size-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Diameter of the knob is defined in pixels using the "),n(3,"i"),i(4,"size"),a(),i(5," property."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),d("size",200),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var Me=(()=>{let e=class e{constructor(){this.value=50,this.code={basic:'<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-color-demo',
    templateUrl: './knob-color-demo.html'
})
export class KnobColorDemo {
    value: number = 50;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["color-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-content-center"],["valueColor","SlateGray","rangeColor","MediumTurquoise",3,"ngModelChange","ngModel"],["selector","knob-color-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Colors are customized with the "),n(3,"i"),i(4,"textColor"),a(),i(5,", "),n(6,"i"),i(7,"rangeColor"),a(),i(8," and "),n(9,"i"),i(10,"valueColor"),a(),i(11," properties."),a()(),n(12,"div",0)(13,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(14,"app-code",2)),o&2&&(m(13),g("ngModel",t.value),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var xe=(()=>{let e=class e{constructor(){this.value=50,this.code={basic:'<p-knob [(ngModel)]="value" [readonly]="true"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [readonly]="true"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-readonly-demo',
    templateUrl: './knob-readonly-demo.html'
})
export class KnobReadonlyDemo {
    value: number = 50;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["readonly-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","readonly"],["selector","knob-readonly-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"When "),n(3,"i"),i(4,"readonly"),a(),i(5," present, value cannot be edited."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),d("readonly",!0),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var ke=(()=>{let e=class e{constructor(){this.value=75,this.code={basic:'<p-knob [(ngModel)]="value" [disabled]="true"></p-knob>',html:`
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [disabled]="true"></p-knob>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-disabled-demo',
    templateUrl: './knob-disabled-demo.html'
})
export class KnobDisabledDemo {
    value: number = 75;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","disabled"],["selector","knob-disabled-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"When "),n(3,"i"),i(4,"disabled"),a(),i(5," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."),a()(),n(6,"div",0)(7,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a()(),c(8,"app-code",2)),o&2&&(m(7),g("ngModel",t.value),d("disabled",!0),m(),d("code",t.code))},dependencies:[b,M,h,f,v],encapsulation:2});let s=e;return s})();var Fe=()=>["/theming"],Se=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),i(4,"theming"),a(),i(5," page."),a()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),i(11,"Name"),a(),n(12,"th"),i(13,"Element"),a()()(),n(14,"tbody")(15,"tr")(16,"td"),i(17,"p-knob"),a(),n(18,"td"),i(19,"Container element."),a()(),n(20,"tr")(21,"td"),i(22,"p-knob-text"),a(),n(23,"td"),i(24,"Text element."),a()(),n(25,"tr")(26,"td"),i(27,"p-knob-value"),a(),n(28,"td"),i(29,"Value element."),a()()()()()),o&2&&(m(3),d("routerLink",F(1,Fe)))},dependencies:[le,f],encapsulation:2});let s=e;return s})();var we=(()=>{let e=class e{constructor(){this.code={basic:`<span id="label_number">Number</span>
<p-knob ariaLabelledBy="label_number"></p-knob>

<p-knob ariaLabel="Number"></p-knob>`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],decls:84,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-column"],[1,"mb-1"]],template:function(o,t){o&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),a(),n(4,"p"),i(5," Knob element component uses "),n(6,"i"),i(7,"slider"),a(),i(8," role in addition to the "),n(9,"i"),i(10,"aria-valuemin"),a(),i(11,", "),n(12,"i"),i(13,"aria-valuemax"),a(),i(14," and "),n(15,"i"),i(16,"aria-valuenow"),a(),i(17," attributes. Value to describe the component can be defined using "),n(18,"i"),i(19,"ariaLabelledBy"),a(),i(20," and "),n(21,"i"),i(22,"ariaLabel"),a(),i(23," props. "),a()(),c(24,"app-code",0),n(25,"h3"),i(26,"Keyboard Support"),a(),n(27,"div",1)(28,"table",2)(29,"thead")(30,"tr")(31,"th"),i(32,"Key"),a(),n(33,"th"),i(34,"Function"),a()()(),n(35,"tbody")(36,"tr")(37,"td")(38,"i"),i(39,"tab"),a()(),n(40,"td"),i(41,"Moves focus to the slider."),a()(),n(42,"tr")(43,"td")(44,"span",3)(45,"i",4),i(46,"left arrow"),a(),n(47,"i"),i(48,"down arrow"),a()()(),n(49,"td"),i(50,"Decrements the value."),a()(),n(51,"tr")(52,"td")(53,"span",3)(54,"i",4),i(55,"right arrow"),a(),n(56,"i"),i(57,"up arrow"),a()()(),n(58,"td"),i(59,"Increments the value."),a()(),n(60,"tr")(61,"td")(62,"i"),i(63,"home"),a()(),n(64,"td"),i(65,"Set the minimum value."),a()(),n(66,"tr")(67,"td")(68,"i"),i(69,"end"),a()(),n(70,"td"),i(71,"Set the maximum value."),a()(),n(72,"tr")(73,"td")(74,"i"),i(75,"page up"),a()(),n(76,"td"),i(77,"Increments the value by 10 steps."),a()(),n(78,"tr")(79,"td")(80,"i"),i(81,"page down"),a()(),n(82,"td"),i(83,"Decrements the value by 10 steps."),a()()()()()()),o&2&&(m(24),d("code",t.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[h,f],encapsulation:2});let s=e;return s})();var De=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-knob formControlName="value"></p-knob>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-knob formControlName="value"></p-knob>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'knob-reactive-forms-demo',
    templateUrl: './knob-reactive-forms-demo.html'
})
export class KnobReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(32)
        });
    }
}`}}ngOnInit(){this.formGroup=new te({value:new oe(32)})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value"],["selector","knob-reactive-forms-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Knob can also be used with reactive forms. In this case, the "),n(3,"i"),i(4,"formControlName"),a(),i(5," property is used to bind the component to a form control."),a()(),n(6,"div",0)(7,"form",1),c(8,"p-knob",2),a()(),c(9,"app-code",3)),o&2&&(m(7),d("formGroup",t.formGroup),m(2),d("code",t.code))},dependencies:[ie,b,ee,ne,ae,h,f,v],encapsulation:2});let s=e;return s})();var Ee=(()=>{let e=class e{constructor(){this.value=0,this.code={basic:`<p-knob [(ngModel)]="value" size="150" readonly="true"></p-knob>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>`,html:`<div class="card flex flex-column align-items-center gap-2">
<p-knob [(ngModel)]="value" size="150" readonly="true"></p-knob>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'knob-reactive-demo',
    templateUrl: './knob-reactive-demo.html'
})
export class KnobReactiveDemo {
    value: number = 0;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["reactive-doc"]],decls:9,vars:4,consts:[[1,"card","flex","flex-column","align-items-center","gap-2"],["size","150","readonly","true",3,"ngModelChange","ngModel"],[1,"flex","gap-2"],["icon","pi pi-plus",3,"click","disabled"],["icon","pi pi-minus",3,"click","disabled"],["selector","knob-reactive-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Knob can be controlled with custom controls as well."),a()(),n(3,"div",0)(4,"p-knob",1),C("ngModelChange",function(l){return y(t.value,l)||(t.value=l),l}),a(),n(5,"div",2)(6,"p-button",3),N("click",function(){return t.value=t.value+1}),a(),n(7,"p-button",4),N("click",function(){return t.value=t.value-1}),a()()(),c(8,"app-code",5)),o&2&&(m(4),g("ngModel",t.value),m(2),d("disabled",t.value>=100),m(),d("disabled",t.value<=0),m(),d("code",t.code))},dependencies:[b,M,me,h,f,v],encapsulation:2});let s=e;return s})();var Te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[R,L,re,se,de,pe,K,ue,K]});let s=e;return s})();var We=()=>["Knob"],_e=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:he},{id:"basic",label:"Basic",component:fe},{id:"reactive-forms",label:"Reactive Forms",component:De},{id:"minmax",label:"Min/Max",component:ve},{id:"step",label:"Step",component:be},{id:"template",label:"Template",component:ge},{id:"stroke",label:"Stroke",component:ye},{id:"size",label:"Size",component:Ce},{id:"color",label:"Color",component:Me},{id:"reactive",label:"Reactive",component:Ee},{id:"readonly",label:"ReadOnly",component:xe},{id:"disabled",label:"Disabled",component:ke},{id:"style",label:"Style",component:Se},{id:"accessibility",label:"Accessibility",component:we}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Knob Component","header","Knob","description","Knob is a form component to define number inputs with a dial.",3,"docs","apiDocs"]],template:function(o,t){o&1&&c(0,"app-doc",0),o&2&&d("docs",t.docs)("apiDocs",F(2,We))},dependencies:[ce],encapsulation:2});let s=e;return s})();var Re=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[L.forChild([{path:"",component:_e}]),L]});let s=e;return s})();var yo=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=E({imports:[R,Re,Te]});let s=e;return s})();export{yo as KnobDemoModule};
