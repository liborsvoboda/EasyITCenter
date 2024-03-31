import{a as h,b as dt,c as q}from"./chunk-AS5FXEGH.js";import{a as g,b as ut}from"./chunk-X2ZDE2AM.js";import{a as pt,e as M,i as O,p as at,q as st,r as N,s as z}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as mt,q as F,r as Y,z as ct}from"./chunk-UWMVDULA.js";import{o as lt,t as P}from"./chunk-N5X6XDRN.js";import{Eb as X,Ec as ot,Fc as K,Gb as Z,Hb as $,Jb as a,Jc as rt,Nb as b,Nc as A,Ob as C,Pb as T,Qb as tt,Sa as m,Sb as et,T as G,Ta as H,V as I,Vb as nt,da as u,ea as S,ib as w,jb as W,kb as s,kc as it,ma as v,na as _,rb as r,sb as p,tb as d,ub as R,va as L,vb as U,wb as J,xb as D,yb as E,zb as f}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ft=(()=>{let e=class e{constructor(){this.code={typescript:"import { InputOtpModule } from 'primeng/inputotp';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,o){n&1&&d(0,"app-code",0),n&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2});let i=e;return i})();var kt=(i,e,l)=>({$implicit:i,events:e,index:l});function It(i,e){if(i&1){let l=D();R(0),r(1,"input",2),E("input",function(n){v(l);let o=f().$implicit,k=f();return _(k.onInput(n,o-1))})("focus",function(n){v(l);let o=f(2);return _(o.onInputFocus(n))})("blur",function(n){v(l);let o=f(2);return _(o.onInputBlur(n))})("paste",function(n){v(l);let o=f(2);return _(o.onPaste(n))})("keydown",function(n){v(l);let o=f(2);return _(o.onKeyDown(n))}),p(),U()}if(i&2){let l=f().$implicit,t=f();m(),s("value",t.getModelValue(l))("maxLength",1)("type",t.inputType)("inputmode",t.inputMode)("variant",t.variant)("readonly",t.readonly)("disabled",t.disabled)("invalid",t.invalid)("tabindex",t.tabindex)("unstyled",t.unstyled)}}function St(i,e){i&1&&J(0)}function Dt(i,e){if(i&1&&(R(0),w(1,St,1,0,"ng-container",3),U()),i&2){let l=f().$implicit,t=f();m(),s("ngTemplateOutlet",t.inputTemplate)("ngTemplateOutletContext",nt(2,kt,t.getToken(l-1),t.getTemplateEvents(l-1),l))}}function Et(i,e){if(i&1&&(R(0),w(1,It,2,10,"ng-container",1)(2,Dt,2,6,"ng-container",1),U()),i&2){let l=f();m(),s("ngIf",!l.inputTemplate),m(),s("ngIf",l.inputTemplate)}}var At={provide:pt,useExisting:G(()=>y),multi:!0},y=(()=>{let e=class e{get inputMode(){return this.integerOnly?"numeric":"text"}get inputType(){return this.mask?"password":"text"}constructor(t){this.cd=t,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.variant=null,this.tabindex=null,this.length=4,this.mask=!1,this.integerOnly=!1,this.onChange=new L,this.onFocus=new L,this.onBlur=new L,this.tokens=[],this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"input":this.inputTemplate=t.template;break;default:this.inputTemplate=t.template;break}})}getToken(t){return this.tokens[t]}getTemplateEvents(t){return{input:n=>this.onInput(n,t),keydown:n=>this.onKeyDown(n),focus:n=>this.onFocus.emit(n),blur:n=>this.onBlur.emit(n),paste:n=>this.onPaste(n)}}onInput(t,n){this.tokens[n]=t.target.value,this.updateModel(t),t.inputType==="deleteContentBackward"?this.moveToPrev(t):(t.inputType==="insertText"||t.inputType==="deleteContentForward")&&this.moveToNext(t)}updateModel(t){let n=this.tokens.join("");this.onModelChange(n),this.onChange.emit({originalEvent:t,value:n})}writeValue(t){t?Array.isArray(t)&&t.length>0?this.value=t.slice(0,this.length):this.value=t.toString().split("").slice(0,this.length):this.value=t,this.updateTokens(),this.cd.markForCheck()}updateTokens(){this.value!==null&&this.value!==void 0?Array.isArray(this.value)?this.tokens=[...this.value]:this.tokens=this.value.toString().split(""):this.tokens=[]}getModelValue(t){return this.tokens[t-1]||""}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}moveToPrev(t){let n=this.findPrevInput(t.target);n&&(n.focus(),n.select())}moveToNext(t){let n=this.findNextInput(t.target);n&&(n.focus(),n.select())}findNextInput(t){let n=t.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)}findPrevInput(t){let n=t.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)}onInputFocus(t){t.target.select(),this.onFocus.emit(t)}onInputBlur(t){this.onBlur.emit(t)}onKeyDown(t){switch(t.keyCode){case 37:this.moveToPrev(t),t.preventDefault();break;case 38:case 40:t.preventDefault();break;case 8:t.target.value.length===0&&(this.moveToPrev(t),t.preventDefault());break;case 39:this.moveToNext(t),t.preventDefault();break;default:this.integerOnly&&!(t.keyCode>=48&&t.keyCode<=57||t.keyCode>=96&&t.keyCode<=105)&&t.preventDefault();break}}onPaste(t){let n=t.clipboardData.getData("text");if(n.length){let o=n.substring(0,this.length+1);(!this.integerOnly||!isNaN(o))&&(this.tokens=o.split(""),this.updateModel(t))}t.preventDefault()}getRange(t){return Array.from({length:t},(n,o)=>o+1)}trackByFn(t){return t}};e.\u0275fac=function(n){return new(n||e)(H(it))},e.\u0275cmp=u({type:e,selectors:[["p-inputOtp"]],contentQueries:function(n,o,k){if(n&1&&X(k,F,4),n&2){let c;Z(c=$())&&(o.templates=c)}},hostAttrs:[1,"p-inputotp","p-component"],inputs:{invalid:"invalid",disabled:"disabled",readonly:"readonly",variant:"variant",tabindex:"tabindex",length:"length",mask:"mask",integerOnly:"integerOnly"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[tt([At])],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["type","text","pInputText","",1,"p-inputotp-input",3,"input","focus","blur","paste","keydown","value","maxLength","type","inputmode","variant","readonly","disabled","invalid","tabindex","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&w(0,Et,3,2,"ng-container",0),n&2&&s("ngForOf",o.getRange(o.length))("ngForTrackBy",o.trackByFn)},dependencies:[ot,K,rt,N],encapsulation:2,changeDetection:0});let i=e;return i})(),ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({imports:[A,Y,z,Y]});let i=e;return i})();var xt=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputOtp [(ngModel)]="value"></p-inputOtp>',html:`<div class="card flex justify-content-center">
    <p-inputOtp [(ngModel)]="value"></p-inputOtp>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-otp-basic-demo',
    templateUrl: './input-otp-basic-demo.html'
})
export class InputOtpBasicDemo {
    value : any
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","input-otp-basic-demo",3,"code"]],template:function(n,o){n&1&&(r(0,"app-docsectiontext")(1,"p"),a(2,"Two-way value binding is defined using "),r(3,"i"),a(4,"ngModel"),p(),a(5,". The number of characters is defined with the "),r(6,"i"),a(7,"length"),p(),a(8," property, which is set to 4 by default."),p()(),r(9,"div",0)(10,"p-inputOtp",1),T("ngModelChange",function(c){return C(o.value,c)||(o.value=c),c}),p()(),d(11,"app-code",2)),n&2&&(m(10),b("ngModel",o.value),m(),s("code",o.code))},dependencies:[g,h,M,O,y],encapsulation:2});let i=e;return i})();var yt=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputOtp [(ngModel)]="value" [mask]="true"></p-inputOtp>',html:`<div class="card flex justify-content-center">
    <p-inputOtp [(ngModel)]="value" [mask]="true"></p-inputOtp>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-otp-mask-demo',
    templateUrl: './input-otp-mask-demo.html'
})
export class InputOtpMaskDemo {
    value: any;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["mask-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","mask"],["selector","input-otp-mask-demo",3,"code"]],template:function(n,o){n&1&&(r(0,"app-docsectiontext")(1,"p"),a(2,"Enable the "),r(3,"i"),a(4,"mask"),p(),a(5," option to hide the values in the input fields."),p()(),r(6,"div",0)(7,"p-inputOtp",1),T("ngModelChange",function(c){return C(o.value,c)||(o.value=c),c}),p()(),d(8,"app-code",2)),n&2&&(m(7),b("ngModel",o.value),s("mask",!0),m(),s("code",o.code))},dependencies:[g,h,M,O,y],encapsulation:2});let i=e;return i})();var vt=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputOtp [(ngModel)]="value" [integerOnly]="true"></p-inputOtp>',html:`<div class="card flex justify-content-center">
    <p-inputOtp [(ngModel)]="value" [integerOnly]="true"></p-inputOtp>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-otp-integer-only-demo',
    templateUrl: './input-otp-integer-only-demo.html'
})
export class InputOtpIntegerOnlyDemo {
    value : any
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["integer-only-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","integerOnly"],["selector","input-otp-integer-only-demo",3,"code"]],template:function(n,o){n&1&&(r(0,"app-docsectiontext")(1,"p"),a(2,"When "),r(3,"i"),a(4,"integerOnly"),p(),a(5," is present, only integers can be accepted as input."),p()(),r(6,"div",0)(7,"p-inputOtp",1),T("ngModelChange",function(c){return C(o.value,c)||(o.value=c),c}),p()(),d(8,"app-code",2)),n&2&&(m(7),b("ngModel",o.value),s("integerOnly",!0),m(),s("code",o.code))},dependencies:[g,h,M,O,y],encapsulation:2});let i=e;return i})();function Nt(i,e){if(i&1){let l=D();r(0,"input",4),E("input",function(n){let o=v(l).events;return _(o.input(n))}),p()}if(i&2){let l=e.$implicit;s("maxLength",1),W("value",l)}}var _t=(()=>{let e=class e{constructor(){this.code={basic:`<p-inputOtp [(ngModel)]="value">
    <ng-template pTemplate="input" let-token let-events="events">
        <input pInputText class="custom-otp-input" (input)="events.input($event)" type="text" [attr.value]="token" [maxLength]="1" />
    </ng-template>
</p-inputOtp>`,html:`<div class="card flex justify-content-center">
    <p-inputOtp [(ngModel)]="value">
        <ng-template pTemplate="input" let-token let-events="events">
            <input pInputText class="custom-otp-input" (input)="events.input($event)" type="text" [attr.value]="token" [maxLength]="1" />
        </ng-template>
    </p-inputOtp>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-otp-template-demo',
    templateUrl: './input-otp-template-demo.html',
    styles: [
        \`
        .custom-otp-input {
            width: 45px;
            font-size: 36px;
            border: 0 none;
            appearance: none;
            text-align: center;
            transition: all 0.2s;
            background: transparent;
            border-bottom: 2px solid var(--surface-500);
            border-radius: 0px;
            margin: 0 0.2rem;
        }

        .custom-otp-input:focus {
            outline: 0 none;
            box-shadow: none;
            border-bottom-color: var(--primary-color);
        } 
        \`
    ],
})

export class InputOtpTemplateDemo {
    value: any;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["template-doc"]],decls:8,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["pTemplate","input"],["selector","input-otp-template-demo",3,"code"],["pInputText","","type","text",1,"custom-otp-input",3,"input","maxLength"]],template:function(n,o){n&1&&(r(0,"app-docsectiontext")(1,"p"),a(2,"Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design."),p()(),r(3,"div",0)(4,"p-inputOtp",1),T("ngModelChange",function(c){return C(o.value,c)||(o.value=c),c}),w(5,Nt,1,2,"ng-template",2),p()(),d(6,"app-code",3),a(7,", ")),n&2&&(m(4),b("ngModel",o.value),m(2),s("code",o.code))},dependencies:[g,h,M,O,y,F,N],styles:[".custom-otp-input[_ngcontent-%COMP%]{width:45px;font-size:36px;border:0 none;appearance:none;text-align:center;transition:all .2s;background:transparent;border-bottom:2px solid var(--surface-500);border-radius:0;margin:0 .2rem}.custom-otp-input[_ngcontent-%COMP%]:focus{outline:0 none;box-shadow:none;border-bottom-color:var(--primary-color)}"]});let i=e;return i})();function Pt(i,e){i&1&&(r(0,"div",12),d(1,"i",13),p())}function Vt(i,e){if(i&1){let l=D();r(0,"input",10),E("input",function(n){let o=v(l).events;return _(o.input(n))}),p(),w(1,Pt,2,0,"div",11)}if(i&2){let l=e.$implicit,t=e.index;s("maxLength",1),W("value",l),m(),s("ngIf",t===3)}}var bt=(()=>{let e=class e{constructor(){this.code={basic:`<div class="flex flex-column align-items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
    <p-inputOtp [(ngModel)]="value" [length]="6" style="gap: 0">
        <ng-template pTemplate="input" let-token let-events="events" let-index="index">
            <input pInputText type="text" [maxLength]="1" (input)="events.input($event)" [attr.value]="token" class="custom-otp-input" />
            <div *ngIf="index === 3" class="px-3">
                <i class="pi pi-minus"></i>
            </div>
        </ng-template>
    </p-inputOtp>
    <div class="flex justify-content-between mt-5 align-self-stretch">
        <p-button label="Resend Code" [link]="true" class="p-0"></p-button>
        <p-button label="Submit Code"></p-button>
    </div>
</div>`,html:`<div class="card flex justify-content-center">
    <div class="flex flex-column align-items-center">
        <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
        <p class="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
        <p-inputOtp [(ngModel)]="value" [length]="6" style="gap: 0">
            <ng-template pTemplate="input" let-token let-events="events" let-index="index">
                <input pInputText type="text" [maxLength]="1" (input)="events.input($event)" [attr.value]="token" class="custom-otp-input" />
                <div *ngIf="index === 3" class="px-3">
                    <i class="pi pi-minus"></i>
                </div>
            </ng-template>
        </p-inputOtp>
        <div class="flex justify-content-between mt-5 align-self-stretch">
            <p-button label="Resend Code" [link]="true" class="p-0"></p-button>
            <p-button label="Submit Code"></p-button>
        </div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-otp-sample-demo',
    templateUrl: './input-otp-sample-demo.html',
    styles: [
        \`
        .custom-otp-input {
            width: 48px;
            height: 48px;
            font-size: 24px;
            appearance: none;
            text-align: center;
            transition: all 0.2s;
            border-radius: 0;
            border: 1px solid var(--surface-400);
            background: transparent;
            outline-offset: -2px;
            outline-color: transparent;
            border-right: 0 none;
            transition: outline-color 0.3s;
            color: var(--text-color);
        }

        .custom-otp-input:focus {
            outline: 2px solid var(--primary-color);
        }

        .custom-otp-input:first-child,
        .custom-otp-input:nth-child(5) {
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }

        .custom-otp-input:nth-child(3),
        .custom-otp-input:last-child {
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
            border-right-width: 1px;
            border-right-style: solid;
            border-color: var(--surface-400);
        }
        \`
    ],
})
export class InputOtpSampleDemo {
    value: any;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["sample-doc"]],decls:15,vars:4,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-column","align-items-center"],[1,"font-bold","text-xl","mb-2"],[1,"text-color-secondary","block","mb-5"],[2,"gap","0",3,"ngModelChange","ngModel","length"],["pTemplate","input"],[1,"flex","justify-content-between","mt-5","align-self-stretch"],["label","Resend Code",1,"p-0",3,"link"],["label","Submit Code"],["selector","input-otp-sample-demo",3,"code"],["pInputText","","type","text",1,"custom-otp-input",3,"input","maxLength"],["class","px-3",4,"ngIf"],[1,"px-3"],[1,"pi","pi-minus"]],template:function(n,o){n&1&&(r(0,"app-docsectiontext")(1,"p"),a(2,"A sample UI implementation with templating and additional elements."),p()(),r(3,"div",0)(4,"div",1)(5,"div",2),a(6,"Authenticate Your Account"),p(),r(7,"p",3),a(8,"Please enter the code sent to your phone."),p(),r(9,"p-inputOtp",4),T("ngModelChange",function(c){return C(o.value,c)||(o.value=c),c}),w(10,Vt,2,3,"ng-template",5),p(),r(11,"div",6),d(12,"p-button",7)(13,"p-button",8),p()()(),d(14,"app-code",9)),n&2&&(m(9),b("ngModel",o.value),s("length",6),m(3),s("link",!0),m(2),s("code",o.code))},dependencies:[K,g,h,M,O,y,F,N,ct],styles:[".custom-otp-input[_ngcontent-%COMP%]{width:48px;height:48px;font-size:24px;appearance:none;text-align:center;transition:all .2s;border-radius:0;border:1px solid var(--surface-400);background:transparent;outline-offset:-2px;outline-color:transparent;border-right:0 none;transition:outline-color .3s;color:var(--text-color)}.custom-otp-input[_ngcontent-%COMP%]:focus{outline:2px solid var(--primary-color)}.custom-otp-input[_ngcontent-%COMP%]:first-child, .custom-otp-input[_ngcontent-%COMP%]:nth-child(5){border-top-left-radius:12px;border-bottom-left-radius:12px}.custom-otp-input[_ngcontent-%COMP%]:nth-child(3), .custom-otp-input[_ngcontent-%COMP%]:last-child{border-top-right-radius:12px;border-bottom-right-radius:12px;border-right-width:1px;border-right-style:solid;border-color:var(--surface-400)}"]});let i=e;return i})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["accessibility-doc"]],decls:44,vars:0,consts:[["routerLink","/inputtext"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){n&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),a(3,"Screen Reader"),p(),r(4,"p"),a(5,"Input OTP uses a set of InputText components, refer to the "),r(6,"a",0),a(7,"InputText"),p(),a(8," component for more information about the screen reader support."),p()(),r(9,"h3"),a(10,"Keyboard Support"),p(),r(11,"div",1)(12,"table",2)(13,"thead")(14,"tr")(15,"th"),a(16,"Key"),p(),r(17,"th"),a(18,"Function"),p()()(),r(19,"tbody")(20,"tr")(21,"td")(22,"i"),a(23,"tab"),p()(),r(24,"td"),a(25,"Moves focus to the input otp."),p()(),r(26,"tr")(27,"td")(28,"i"),a(29,"right arrow"),p()(),r(30,"td"),a(31,"Moves focus to the next input element."),p()(),r(32,"tr")(33,"td")(34,"i"),a(35,"left arrow"),p()(),r(36,"td"),a(37,"Moves focus to the previous input element."),p()(),r(38,"tr")(39,"td")(40,"i"),a(41,"backspace"),p()(),r(42,"td"),a(43,"Deletes the input and moves focus to the previous input element."),p()()()()()())},dependencies:[lt,h],encapsulation:2});let i=e;return i})();var Bt=()=>["InputOtp"],Tt=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:ft},{id:"basic",label:"Basic",component:xt},{id:"mask",label:"Mask",component:yt},{id:"integeronly",label:"Integer Only",component:vt},{id:"template",label:"Template",component:_t},{id:"sample",label:"Sample",component:bt},{id:"accessibility",label:"Accessibility",component:Ct}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Otp Input Component","header","InputOtp","description","Input Otp is used to enter one time passwords.",3,"docs","apiDocs"]],template:function(n,o){n&1&&d(0,"app-doc",0),n&2&&s("docs",o.docs)("apiDocs",et(2,Bt))},dependencies:[dt],encapsulation:2});let i=e;return i})();var Mt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({imports:[P.forChild([{path:"",component:Tt}]),P]});let i=e;return i})();var Ot=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({imports:[A,P,ut,q,at,st,ht,z,mt,q]});let i=e;return i})();var Ge=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({imports:[A,Mt,Ot]});let i=e;return i})();export{Ge as InputOtpDemoModule};
