import{a as u,b as q}from"./chunk-VSJFAAI6.js";import{a as L,b as P}from"./chunk-QUKVYQLU.js";import{a as f,b as O,c as A}from"./chunk-AS5FXEGH.js";import{a as d,b as V}from"./chunk-X2ZDE2AM.js";import{b as C,e as T,f as N,g as z,h as G,i as F,j as R,m as k,n as K,p as B,q as W,s as U}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as E}from"./chunk-N5X6XDRN.js";import{Jb as i,Nb as I,Nc as M,Ob as S,Pb as w,Sa as c,Sb as j,V as g,da as m,ea as b,kb as s,rb as r,sb as n,tb as p}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var H=(()=>{let e=class e{constructor(){this.code={basic:`<label for="address1">Address 1</label>
<textarea pInputTextarea id="address1" />

<span id="address2">Address 2</span>
<textarea pInputTextarea aria-labelledby="address2" />

<textarea pInputTextarea aria-label="Address Details"/>`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["accessibility-doc"]],decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,a){t&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),n(),r(4,"p"),i(5," InputTextarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via "),r(6,"i"),i(7,"label"),n(),i(8," tag combined with "),r(9,"i"),i(10,"id"),n(),i(11," prop or using "),r(12,"i"),i(13,"aria-labelledby"),n(),i(14,", "),r(15,"i"),i(16,"aria-label"),n(),i(17," props. "),n()(),p(18,"app-code",0),r(19,"h3"),i(20,"Keyboard Support"),n(),r(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),i(26,"Key"),n(),r(27,"th"),i(28,"Function"),n()()(),r(29,"tbody")(30,"tr")(31,"td")(32,"i"),i(33,"tab"),n()(),r(34,"td"),i(35,"Moves focus to the input."),n()()()()()()),t&2&&(c(18),s("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[d,f],encapsulation:2});let o=e;return o})();var J=(()=>{let e=class e{constructor(){this.code={basic:'<textarea rows="5" cols="30" pInputTextarea [autoResize]="true"></textarea>',html:`
<div class="card flex justify-content-center">
    <textarea rows="5" cols="30" pInputTextarea [autoResize]="true"></textarea>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-textarea-auto-resize-demo',
    templateUrl: './input-textarea-auto-resize-demo.html'
})
export class InputTextareaAutoResizeDemo {
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["autoresize-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["rows","5","cols","30","pInputTextarea","",3,"autoResize"],["selector","input-textarea-auto-resize-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"When "),r(3,"i"),i(4,"autoResize"),n(),i(5," is enabled, textarea grows instead of displaying a scrollbar."),n()(),r(6,"div",0),p(7,"textarea",1),n(),p(8,"app-code",2)),t&2&&(c(7),s("autoResize",!0),c(),s("code",a.code))},dependencies:[d,u,f],encapsulation:2});let o=e;return o})();var X=(()=>{let e=class e{constructor(){this.code={basic:'<textarea rows="5" cols="30" pInputTextarea [(ngModel)]="value"></textarea>',html:`
<div class="card flex justify-content-center">
    <textarea rows="5" cols="30" pInputTextarea [(ngModel)]="value"></textarea>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-textarea-basic-demo',
    templateUrl: './input-textarea-basic-demo.html'
})
export class InputTextareaBasicDemo {
    value!: string;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["rows","5","cols","30","pInputTextarea","",3,"ngModelChange","ngModel"],["selector","input-textarea-basic-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"InputTextarea is applied to an input field with "),r(3,"i"),i(4,"pInputTextarea"),n(),i(5," directive."),n()(),r(6,"div",0)(7,"textarea",1),w("ngModelChange",function(v){return S(a.value,v)||(a.value=v),v}),n()(),p(8,"app-code",2)),t&2&&(c(7),I("ngModel",a.value),c(),s("code",a.code))},dependencies:[d,C,T,F,u,f],encapsulation:2});let o=e;return o})();var Y=(()=>{let e=class e{constructor(){this.code={basic:'<textarea rows="5" cols="30" pInputTextarea [disabled]="true"></textarea>',html:`
<div class="card flex justify-content-center">
    <textarea rows="5" cols="30" pInputTextarea [disabled]="true"></textarea>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-textarea-disabled-demo',
    templateUrl: './input-textarea-disabled-demo.html'
})
export class InputTextareaDisabledDemo {
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["disabled-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["rows","5","cols","30","pInputTextarea","",3,"disabled"],["selector","input-textarea-disabled-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"When "),r(3,"i"),i(4,"disabled"),n(),i(5," is present, the element cannot be edited and focused."),n()(),r(6,"div",0),p(7,"textarea",1),n(),p(8,"app-code",2)),t&2&&(c(7),s("disabled",!0),c(),s("code",a.code))},dependencies:[d,u,f],encapsulation:2});let o=e;return o})();var Z=(()=>{let e=class e{constructor(){this.code={basic:`<span class="p-float-label">
    <textarea id="float-input" rows="5" cols="30" pInputTextarea></textarea>
    <label for="float-input">Summary</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <textarea id="float-input" rows="5" cols="30" pInputTextarea></textarea>
        <label for="float-input">Summary</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: ': 'input-textarea-floatlabel-demo',
    templateUrl: './: 'input-textarea-floatlabel-demo.html'
})
export class InputTextareaFloatlabelDemo {
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["floatlabel-doc"]],decls:9,vars:1,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["id","float-input","rows","5","cols","30","pInputTextarea",""],["for","float-input"],["selector","input-textarea-floatlabel-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"A floating label appears on top of the input field when focused."),n()(),r(3,"div",0)(4,"span",1),p(5,"textarea",2),r(6,"label",3),i(7,"Summary"),n()()(),p(8,"app-code",4)),t&2&&(c(8),s("code",a.code))},dependencies:[d,u,f],encapsulation:2});let o=e;return o})();var $=(()=>{let e=class e{constructor(){this.code={basic:'<textarea rows="5" cols="30" pInputTextarea [(ngModel)]="value" class="ng-invalid ng-dirty"></textarea>',html:`
<div class="card flex justify-content-center">
<textarea rows="5" cols="30" pInputTextarea [(ngModel)]="value" class="ng-invalid ng-dirty"></textarea>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-textarea-invalid-demo',
    templateUrl: './input-textarea-invalid-demo.html'
})
export class InputTextareaInvalidDemo {
    value!: string;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],["rows","5","cols","30","pInputTextarea","",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-textarea-invalid-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"Invalid state style is added using the "),r(3,"i"),i(4,"ng-invalid"),n(),i(5," and "),r(6,"i"),i(7,"ng-dirty"),n(),i(8," class to indicate a failed validation."),n()(),r(9,"div",0)(10,"textarea",1),w("ngModelChange",function(v){return S(a.value,v)||(a.value=v),v}),n()(),p(11,"app-code",2)),t&2&&(c(10),I("ngModel",a.value),c(),s("code",a.code))},dependencies:[d,C,T,F,u,f],encapsulation:2});let o=e;return o})();var _=(()=>{let e=class e{constructor(){this.code={typescript:"import { InputTextareaModule } from 'primeng/inputtextarea';"}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,a){t&1&&p(0,"app-code",0),t&2&&s("code",a.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2});let o=e;return o})();var ee=(()=>{let e=class e{constructor(){this.code={basic:'<textarea pKeyFilter="int" rows="5" cols="30" pInputTextarea></textarea>',html:`
<div class="card flex justify-content-center">
    <textarea pKeyFilter="int" rows="5" cols="30" pInputTextarea></textarea>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector:'input-textarea-key-filter-demo',
    templateUrl: './input-textarea-key-filter-demo.html'
})
export class InputTextareaKeyFilterDemo {
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["key-filter-doc"]],decls:9,vars:1,consts:[["href","/keyfilter"],[1,"card","flex","justify-content-center"],["pKeyFilter","int","rows","5","cols","30","pInputTextarea",""],["selector","input-textarea-key-filter-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"InputText has built-in key filtering support to block certain keys, refer to "),r(3,"a",0),i(4,"keyfilter"),n(),i(5," page for more information."),n()(),r(6,"div",1),p(7,"textarea",2),n(),p(8,"app-code",3)),t&2&&(c(8),s("code",a.code))},dependencies:[d,u,f,L],encapsulation:2});let o=e;return o})();var te=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <textarea rows="5" cols="30" pInputTextarea formControlName="text"></textarea>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <textarea rows="5" cols="30" pInputTextarea formControlName="text"></textarea>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'input-textarea-reactive-forms-demo',
    templateUrl: './input-textarea-reactive-forms-demo.html'
})
export class InputTextareaReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null)
        });
    }
}`}}ngOnInit(){this.formGroup=new z({text:new G(null)})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["rows","5","cols","30","pInputTextarea","","formControlName","text"],["selector","input-textarea-reactive-forms-demo",3,"code"]],template:function(t,a){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"InputTextarea can also be used with reactive forms. In this case, the "),r(3,"i"),i(4,"formControlName"),n(),i(5," property is used to bind the component to a form control."),n()(),r(6,"div",0)(7,"form",1),p(8,"textarea",2),n()(),p(9,"app-code",3)),t&2&&(c(7),s("formGroup",a.formGroup),c(2),s("code",a.code))},dependencies:[d,R,C,T,N,k,K,u,f],encapsulation:2});let o=e;return o})();var oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["style-doc"]],decls:14,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),i(5,"Name"),n(),r(6,"th"),i(7,"Element"),n()()(),r(8,"tbody")(9,"tr")(10,"td"),i(11,"p-inputtextarea"),n(),r(12,"td"),i(13,"Textarea element"),n()()()()())},encapsulation:2});let o=e;return o})();var ie=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[M,V,U,B,W,q,A,P,A]});let o=e;return o})();var pe=()=>["InputTextarea"],re=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:_},{id:"basic",label:"Basic",component:X},{id:"reactive-forms",label:"Reactive Forms",component:te},{id:"autoresize",label:"AutoResize",component:J},{id:"keyfilter",label:"Key Filter",component:ee},{id:"floatlabel",label:"Float Label",component:Z},{id:"invalid",label:"Invalid",component:$},{id:"disabled",label:"Disabled",component:Y},{id:"style",label:"Style",component:oe},{id:"accessibility",label:"Accessibility",component:H}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputTextarea Component","header","InputTextarea","description","InputTextarea adds styling and autoResize functionality to standard textarea element.",3,"docs","apiDocs"]],template:function(t,a){t&1&&p(0,"app-doc",0),t&2&&s("docs",a.docs)("apiDocs",j(2,pe))},dependencies:[O],encapsulation:2});let o=e;return o})();var ne=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[E.forChild([{path:"",component:re}]),E]});let o=e;return o})();var ut=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[M,ne,ie]});let o=e;return o})();export{ut as InputTextareaDemoModule};
