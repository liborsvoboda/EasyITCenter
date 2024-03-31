import{a as G,b as he}from"./chunk-UT7HFFJ3.js";import{a as T,b as me}from"./chunk-KPYNJB2H.js";import{a as g,b as ue,c as K}from"./chunk-AS5FXEGH.js";import{a as S,b as ce}from"./chunk-X2ZDE2AM.js";import{a as le,s as de}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as pe,q as _,z as ae}from"./chunk-UWMVDULA.js";import{o as re,t as P}from"./chunk-N5X6XDRN.js";import{Cc as b,Ec as ne,Fb as q,Gb as W,Hb as Q,Ic as se,Jb as s,Kb as w,Lb as O,Nc as N,Qb as oe,Sa as a,Sb as h,T as Z,Ta as A,Tb as f,V as k,da as u,ea as M,ib as v,jb as R,kb as p,kc as B,ma as z,mb as te,na as I,nb as C,ob as ie,rb as n,sb as l,tb as d,ua as ee,va as U,xb as H,yb as F}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Fe=["inputfield"],Oe=i=>({"ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default":!0,"ui-state-disabled":i}),Ve=i=>({"ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default":!0,"ui-state-disabled":i}),Ae={provide:le,useExisting:Z(()=>je),multi:!0},je=(()=>{let e=class e{get step(){return this._step}set step(t){if(this._step=t,this._step!=null){let o=this.step.toString().split(/[,]|[.]/);this.calculatedPrecision=o[1]?o[1].length:void 0}}constructor(t,o){this.el=t,this.cd=o,this.onChange=new U,this.onFocus=new U,this.onBlur=new U,this._step=1,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.keyPattern=/[0-9\+\-]/,this.negativeSeparator="-"}ngOnInit(){this.formatInput&&(this.localeDecimalSeparator=1.1.toLocaleString().substring(1,2),this.localeThousandSeparator=1e3.toLocaleString().substring(1,2),this.thousandRegExp=new RegExp(`[${this.thousandSeparator||this.localeThousandSeparator}]`,"gim"),this.decimalSeparator&&this.thousandSeparator&&this.decimalSeparator===this.thousandSeparator&&console.warn("thousandSeparator and decimalSeparator cannot have the same value."))}repeat(t,o,r){let m=o||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(t,40,r)},m),this.spin(t,r)}spin(t,o){let r=this.step*o,m,y=this.getPrecision();this.value?m=typeof this.value=="string"?this.parseValue(this.value):this.value:m=0,y?this.value=parseFloat(this.toFixed(m+r,y)):this.value=m+r,this.maxlength!==void 0&&this.value.toString().length>this.maxlength&&(this.value=m),this.min!==void 0&&this.value<this.min&&(this.value=this.min),this.max!==void 0&&this.value>this.max&&(this.value=this.max),this.formatValue(),this.onModelChange(this.value),this.onChange.emit(t)}getPrecision(){return this.precision===void 0?this.calculatedPrecision:this.precision}toFixed(t,o){let r=Math.pow(10,o||0);return String(Math.round(t*r)/r)}onUpButtonMousedown(t){this.disabled||(this.inputfieldViewChild.nativeElement.focus(),this.repeat(t,null,1),this.updateFilledState(),t.preventDefault())}onUpButtonMouseup(t){this.disabled||this.clearTimer()}onUpButtonMouseleave(t){this.disabled||this.clearTimer()}onDownButtonMousedown(t){this.disabled||(this.inputfieldViewChild.nativeElement.focus(),this.repeat(t,null,-1),this.updateFilledState(),t.preventDefault())}onDownButtonMouseup(t){this.disabled||this.clearTimer()}onDownButtonMouseleave(t){this.disabled||this.clearTimer()}onInputKeydown(t){t.which==38?(this.spin(t,1),t.preventDefault()):t.which==40&&(this.spin(t,-1),t.preventDefault())}onInputChange(t){this.onChange.emit(t)}onInput(t){this.value=this.parseValue(t.target.value),this.onModelChange(this.value),this.updateFilledState()}onInputBlur(t){this.focus=!1,this.formatValue(),this.onModelTouched(),this.onBlur.emit(t)}onInputFocus(t){this.focus=!0,this.onFocus.emit(t)}parseValue(t){let o,r=this.getPrecision();return t.trim()===""?o=null:(this.formatInput&&(t=t.replace(this.thousandRegExp,"")),r?(t=this.formatInput?t.replace(this.decimalSeparator||this.localeDecimalSeparator,"."):t.replace(",","."),o=parseFloat(t)):o=parseInt(t,10),isNaN(o)?o=null:(this.max!==null&&o>this.max&&(o=this.max),this.min!==null&&o<this.min&&(o=this.min))),o}formatValue(){let t=this.value,o=this.getPrecision();t!=null?(this.formatInput&&(t=t.toLocaleString(void 0,{maximumFractionDigits:20}),this.decimalSeparator&&this.thousandSeparator&&(t=t.split(this.localeDecimalSeparator),o&&t[1]&&(t[1]=(this.decimalSeparator||this.localeDecimalSeparator)+t[1]),this.thousandSeparator&&t[0].length>3&&(t[0]=t[0].replace(new RegExp(`[${this.localeThousandSeparator}]`,"gim"),this.thousandSeparator)),t=t.join(""))),this.formattedValue=t.toString()):this.formattedValue=null,this.inputfieldViewChild&&this.inputfieldViewChild.nativeElement&&(this.inputfieldViewChild.nativeElement.value=this.formattedValue)}clearTimer(){this.timer&&clearInterval(this.timer)}writeValue(t){this.value=t,this.formatValue(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}updateFilledState(){this.filled=this.value!==void 0&&this.value!=null}};e.\u0275fac=function(o){return new(o||e)(A(ee),A(B))},e.\u0275cmp=u({type:e,selectors:[["p-spinner"]],viewQuery:function(o,r){if(o&1&&q(Fe,5),o&2){let m;W(m=Q())&&(r.inputfieldViewChild=m.first)}},hostAttrs:[1,"p-element"],hostVars:4,hostBindings:function(o,r){o&2&&te("ui-inputwrapper-filled",r.filled)("ui-inputwrapper-focus",r.focus)},inputs:{min:"min",max:"max",maxlength:"maxlength",size:"size",placeholder:"placeholder",inputId:"inputId",disabled:"disabled",readonly:"readonly",tabindex:"tabindex",required:"required",name:"name",ariaLabelledBy:"ariaLabelledBy",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",formatInput:"formatInput",decimalSeparator:"decimalSeparator",thousandSeparator:"thousandSeparator",precision:"precision",step:"step"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[oe([Ae])],decls:7,vars:28,consts:[["inputfield",""],[1,"ui-spinner","ui-widget","ui-corner-all"],["type","text",3,"keydown","blur","input","change","focus","value","disabled","readonly","ngStyle","ngClass"],["type","button","tabindex","-1",3,"mouseleave","mousedown","mouseup","ngClass","disabled"],[1,"ui-spinner-button-icon","pi","pi-caret-up","ui-clickable"],[1,"ui-spinner-button-icon","pi","pi-caret-down","ui-clickable"]],template:function(o,r){if(o&1){let m=H();n(0,"span",1)(1,"input",2,0),F("keydown",function(x){return z(m),I(r.onInputKeydown(x))})("blur",function(x){return z(m),I(r.onInputBlur(x))})("input",function(x){return z(m),I(r.onInput(x))})("change",function(x){return z(m),I(r.onInputChange(x))})("focus",function(x){return z(m),I(r.onInputFocus(x))}),l(),n(3,"button",3),F("mouseleave",function(x){return z(m),I(r.onUpButtonMouseleave(x))})("mousedown",function(x){return z(m),I(r.onUpButtonMousedown(x))})("mouseup",function(x){return z(m),I(r.onUpButtonMouseup(x))}),d(4,"span",4),l(),n(5,"button",3),F("mouseleave",function(x){return z(m),I(r.onDownButtonMouseleave(x))})("mousedown",function(x){return z(m),I(r.onDownButtonMousedown(x))})("mouseup",function(x){return z(m),I(r.onDownButtonMouseup(x))}),d(6,"span",5),l()()}o&2&&(a(),ie(r.inputStyleClass),p("value",r.formattedValue||null)("disabled",r.disabled)("readonly",r.readonly)("ngStyle",r.inputStyle)("ngClass","ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all"),R("id",r.inputId)("name",r.name)("aria-valumin",r.min)("aria-valuemax",r.max)("aria-valuenow",r.value)("aria-labelledby",r.ariaLabelledBy)("size",r.size)("maxlength",r.maxlength)("tabindex",r.tabindex)("placeholder",r.placeholder)("required",r.required),a(2),p("ngClass",f(24,Oe,r.disabled))("disabled",r.disabled||r.readonly),R("readonly",r.readonly),a(2),p("ngClass",f(26,Ve,r.disabled))("disabled",r.disabled||r.readonly),R("readonly",r.readonly))},dependencies:[b,se],styles:[`@layer primeng{.ui-spinner{display:inline-block;overflow:visible;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{vertical-align:middle;padding-right:1.5em}.ui-spinner-button{cursor:default;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;vertical-align:middle;width:1.5em}.ui-spinner .ui-spinner-button-icon{position:absolute;top:50%;left:50%;margin-top:-.5em;margin-left:-.5em;width:1em}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-fluid .ui-spinner{width:100%}.ui-fluid .ui-spinner .ui-spinner-input{padding-right:2em;width:100%}.ui-fluid .ui-spinner .ui-spinner-button{width:1.5em}.ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon{left:.7em}}
`],encapsulation:2,changeDetection:0});let i=e;return i})(),fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=M({type:e}),e.\u0275inj=k({imports:[N,de]});let i=e;return i})();var $e=()=>({width:"200px",height:"200px"}),Be=i=>({"surface-ground":i});function Ne(i,e){if(i&1&&(n(0,"div",4),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,Be,t.odd)),a(),w(c)}}var ge=(()=>{let e=class e{constructor(){this.code={basic:`<p-scroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex justify-content-center">
    <p-scroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroller-basic-demo',
    templateUrl: './scroller-basic-demo.html',
    styleUrls: ['./scroller-basic-demo.scss']
})
export class ScrollerBasicDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>`Item #${o}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["basic-doc"]],decls:28,vars:6,consts:[[1,"card","flex","justify-content-center"],["scrollHeight","200px","styleClass","border-1 surface-border",3,"items","itemSize"],["pTemplate","item"],["selector","scroller-basic-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2," Scroller requires "),n(3,"i"),s(4,"items"),l(),s(5," as the data to display, "),n(6,"i"),s(7,"itemSize"),l(),s(8," for the dimensions of an item and "),n(9,"i"),s(10,"item"),l(),s(11," template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using "),n(12,"i"),s(13,"scrollWidth"),l(),s(14,", "),n(15,"i"),s(16,"scrollHeight"),l(),s(17," properties directly or with CSS "),n(18,"i"),s(19,"width"),l(),s(20," and "),n(21,"i"),s(22,"height"),l(),s(23," styles. "),l()(),n(24,"div",0)(25,"p-scroller",1),v(26,Ne,2,4,"ng-template",2),l()(),d(27,"app-code",3)),o&2&&(a(25),C(h(5,$e)),p("items",r.items)("itemSize",50),a(2),p("code",r.code))},dependencies:[b,S,g,T,_],encapsulation:2,changeDetection:0});let i=e;return i})();var J=()=>({width:"200px",height:"200px"}),X=i=>({"surface-ground":i});function Pe(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,X,t.odd)),a(),w(c)}}function Ue(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,X,t.odd)),a(),w(c)}}function Re(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,X,t.odd)),a(),w(c)}}var ye=(()=>{let e=class e{constructor(){this.code={basic:`<p-scroller [items]="items" [itemSize]="50" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>

<p-scroller [items]="items" [itemSize]="50" [delay]="150" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>

<p-scroller [items]="items" [itemSize]="50" [delay]="500" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex flex-wrap justify-content-center gap-3">
    <div>
        <span class="font-bold block mb-2">No Delay</span>
        <p-scroller [items]="items" [itemSize]="50" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
            <ng-template pTemplate="item" let-item let-options="options">
                <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
            </ng-template>
        </p-scroller>
    </div>
    <div>
        <span class="font-bold block mb-2">150ms</span>
        <p-scroller [items]="items" [itemSize]="50" [delay]="150" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
            <ng-template pTemplate="item" let-item let-options="options">
                <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
            </ng-template>
        </p-scroller>
    </div>
    <div>
        <span class="font-bold block mb-2">500ms</span>
        <p-scroller [items]="items" [itemSize]="50" [delay]="500" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
            <ng-template pTemplate="item" let-item let-options="options">
                <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
            </ng-template>
        </p-scroller>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroller-delay-demo',
    templateUrl: './scroller-delay-demo.html',
    styleUrls: ['./scroller-delay-demo.scss']
})
export class ScrollerDelayDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>`Item #${o}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["delay-doc"]],decls:23,vars:18,consts:[[1,"card","flex","flex-wrap","justify-content-center","gap-3"],[1,"font-bold","block","mb-2"],["styleClass","border-1 surface-border",3,"items","itemSize"],["pTemplate","item"],["styleClass","border-1 surface-border",3,"items","itemSize","delay"],["selector","scroller-delay-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"Scroll delay is adjusted by using "),n(3,"i"),s(4,"delay"),l(),s(5," property."),l()(),n(6,"div",0)(7,"div")(8,"span",1),s(9,"No Delay"),l(),n(10,"p-scroller",2),v(11,Pe,2,4,"ng-template",3),l()(),n(12,"div")(13,"span",1),s(14,"150ms"),l(),n(15,"p-scroller",4),v(16,Ue,2,4,"ng-template",3),l()(),n(17,"div")(18,"span",1),s(19,"500ms"),l(),n(20,"p-scroller",4),v(21,Re,2,4,"ng-template",3),l()()(),d(22,"app-code",5)),o&2&&(a(10),C(h(15,J)),p("items",r.items)("itemSize",50),a(5),C(h(16,J)),p("items",r.items)("itemSize",50)("delay",150),a(5),C(h(17,J)),p("items",r.items)("itemSize",50)("delay",500),a(2),p("code",r.code))},dependencies:[b,S,g,T,_],encapsulation:2});let i=e;return i})();var He=()=>({width:"200px",height:"200px"}),qe=i=>({"surface-ground":i});function We(i,e){if(i&1&&(n(0,"div",4),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,qe,t.odd)),a(),w(c)}}var xe=(()=>{let e=class e{constructor(){this.code={basic:`<p-scroller [items]="items" [itemSize]="50" scrollHeight="200px" orientation="horizontal" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" style="writing-mode: vertical-lr; width: 50px;" [ngClass]="{ 'surface-ground': options.odd }">{{ item }}</div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex justify-content-center">
    <p-scroller [items]="items" [itemSize]="50" scrollHeight="200px" orientation="horizontal" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" style="writing-mode: vertical-lr; width: 50px;" [ngClass]="{ 'surface-ground': options.odd }">{{ item }}</div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroller-horizontal-demo',
    templateUrl: './scroller-horizontal-demo.html',
    styleUrls: ['./scroller-horizontal-demo.scss']
})
export class ScrollerHorizontalDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {    
    .p-scroller-viewport {
        flex: none;
    }

    .p-horizontal-scroll {
        .p-scroller-content {
            display: flex;
            flex-direction: row;
        }
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>`Item #${o}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["horizontal-doc"]],decls:16,vars:6,consts:[[1,"card","flex","justify-content-center"],["scrollHeight","200px","orientation","horizontal","styleClass","border-1 surface-border",3,"items","itemSize"],["pTemplate","item"],["selector","scroller-horizontal-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"writing-mode","vertical-lr","width","50px",3,"ngClass"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"Setting "),n(3,"i"),s(4,"orientation"),l(),s(5," to "),n(6,"i"),s(7,"horizontal"),l(),s(8," enables scrolling horizontally. In this case, the "),n(9,"i"),s(10,"itemSize"),l(),s(11," should refer to the width of an item."),l()(),n(12,"div",0)(13,"p-scroller",1),v(14,We,2,4,"ng-template",2),l()(),d(15,"app-code",3)),o&2&&(a(13),C(h(5,He)),p("items",r.items)("itemSize",50),a(2),p("code",r.code))},dependencies:[b,S,g,T,_],encapsulation:2,changeDetection:0});let i=e;return i})();var Qe=()=>({width:"200px",height:"200px"}),Ge=()=>[50,100],Ke=i=>({"surface-ground":i});function Je(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit;a(),w(c)}}function Xe(i,e){if(i&1&&(n(0,"div",4),v(1,Je,2,1,"div",5),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,Ke,t.odd)),a(),p("ngForOf",c)}}var ve=(()=>{let e=class e{constructor(t){this.cd=t,this.code={basic:`<p-scroller [items]="items" [itemSize]="[50, 100]" orientation="both" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground' : options.odd }" style="height: 50px;">
            <div *ngFor="let el of item" style="width: 100px">{{ el }}</div>
        </div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex justify-content-center">
    <p-scroller [items]="items" [itemSize]="[50, 100]" orientation="both" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground' : options.odd }" style="height: 50px;">
                <div *ngFor="let el of item" style="width: 100px">{{ el }}</div>
            </div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroller-grid-demo',
    templateUrl: './scroller-grid-demo.html',
    styleUrls: ['./scroller-grid-demo.scss']
})
export class ScrollerGridDemo implements OnInit {
    items!: string[][];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>Array.from({length:1e3}).map((r,m)=>`Item #${o}_${m}`)),this.cd.markForCheck()}};e.\u0275fac=function(o){return new(o||e)(A(B))},e.\u0275cmp=u({type:e,selectors:[["grid-doc"]],decls:16,vars:7,consts:[[1,"card","flex","justify-content-center"],["orientation","both","styleClass","border-1 surface-border",3,"items","itemSize"],["pTemplate","item"],["selector","scroller-grid-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"height","50px",3,"ngClass"],["style","width: 100px",4,"ngFor","ngForOf"],[2,"width","100px"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"Scrolling can be enabled vertically and horizontally when "),n(3,"i"),s(4,"orientation"),l(),s(5," is set as "),n(6,"i"),s(7,"both"),l(),s(8,". In this mode, "),n(9,"i"),s(10,"itemSize"),l(),s(11," should be an array where first value is the height of an item and second is the width."),l()(),n(12,"div",0)(13,"p-scroller",1),v(14,Xe,2,4,"ng-template",2),l()(),d(15,"app-code",3)),o&2&&(a(13),C(h(5,Qe)),p("items",r.items)("itemSize",h(6,Ge)),a(2),p("code",r.code))},dependencies:[b,ne,S,g,T,_],encapsulation:2,changeDetection:0});let i=e;return i})();var Se=(()=>{let e=class e{constructor(){this.code={typescript:"import { ScrollerModule } from 'primeng/scroller';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,r){o&1&&d(0,"app-code",0),o&2&&p("code",r.code)("hideToggleCode",!0)},dependencies:[S],encapsulation:2});let i=e;return i})();var Ye=()=>({width:"200px",height:"200px"}),Ze=i=>({"surface-ground":i});function et(i,e){if(i&1&&(n(0,"div",4),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,Ze,t.odd)),a(),w(c)}}var Ce=(()=>{let e=class e{constructor(t){this.cd=t,this.lazyLoading=!0,this.code={basic:`<p-scroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" [loading]="lazyLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex justify-content-center">
    <p-scroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" [loading]="lazyLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface LazyEvent {
    first: number;
    last: number;
}

@Component({
    selector: 'scroller-lazy-load-demo',
    templateUrl: './scroller-lazy-load-demo.html',
    styleUrls: ['./scroller-lazy-load-demo.scss']
})
export class ScrollerLazyLoadDemo implements OnInit {
    items!: string[];

    lazyLoading: boolean = true;

    loadLazyTimeout: any;

    ngOnInit() {
        this.items = Array.from({ length: 1000 });
    }

    onLazyLoad(event: LazyEvent) {
        this.lazyLoading = true;

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const lazyItems = [...this.items];

            for (let i = first; i < last; i++) {
                lazyItems[i] = \`Item #\${i}\`;
            }

            this.items = lazyItems;
            this.lazyLoading = false;
        }, Math.random() * 1000 + 250);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3})}onLazyLoad(t){this.lazyLoading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{let{first:o,last:r}=t,m=[...this.items];for(let y=o;y<r;y++)m[y]=`Item #${y}`;this.items=m,this.lazyLoading=!1,this.cd.markForCheck()},Math.random()*1e3+250)}};e.\u0275fac=function(o){return new(o||e)(A(B))},e.\u0275cmp=u({type:e,selectors:[["lazy-load-doc"]],decls:13,vars:10,consts:[[1,"card","flex","justify-content-center"],["styleClass","border-1 surface-border",3,"onLazyLoad","items","itemSize","showLoader","delay","loading","lazy"],["pTemplate","item"],["selector","scroller-lazy-load-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2," Lazy mode is handy to deal with large datasets where instead of loading the entire data, small chunks of data are loaded on demand by invoking onLazyLoad callback everytime scrolling requires a new chunk. To implement lazy loading, enable "),n(3,"i"),s(4,"lazy"),l(),s(5," attribute, initialize your data as a placeholder with a length and finally implement a method callback using "),n(6,"i"),s(7,"onLazyLoad"),l(),s(8," that actually loads a chunk from a datasource. onLazyLoad gets an event object that contains information about the chunk of data to load such as the index and number of items to load. Notice that a new template called loadingItem is also required to display as a placeholder while the new items are being loaded. "),l()(),n(9,"div",0)(10,"p-scroller",1),F("onLazyLoad",function(y){return r.onLazyLoad(y)}),v(11,et,2,4,"ng-template",2),l()(),d(12,"app-code",3)),o&2&&(a(10),C(h(9,Ye)),p("items",r.items)("itemSize",50)("showLoader",!0)("delay",250)("loading",r.lazyLoading)("lazy",!0),a(2),p("code",r.code))},dependencies:[b,S,g,T,_],encapsulation:2,changeDetection:0});let i=e;return i})();var be=()=>({width:"200px",height:"200px"}),Y=i=>({"surface-ground":i});function it(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,Y,t.odd)),a(),w(c)}}function ot(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,Y,t.odd)),a(),w(c)}}function nt(i,e){if(i&1&&(n(0,"div",6),d(1,"p-skeleton",7),l()),i&2){let c=e.options;p("ngClass",f(2,Y,c.odd)),a(),p("width",c.even?"60%":"50%")}}var we=(()=>{let e=class e{constructor(){this.code={basic:`<p-scroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground' : options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex justify-content-center">
    <p-scroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground' : options.odd }" style="height: 50px;">{{ item }}</div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroller-loader-demo',
    templateUrl: './scroller-loader-demo.html',
    styleUrls: ['./scroller-loader-demo.scss']
})
export class ScrollerLoaderDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    p-skeleton {
        width: 100%;
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>`Item #${o}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["loader-doc"]],decls:21,vars:15,consts:[["href","/skeleton",1,""],[1,"card","flex","flex-wrap","justify-content-center","gap-3"],["styleClass","border-1 surface-border",3,"items","itemSize","showLoader","delay"],["pTemplate","item"],["pTemplate","loader"],["selector","scroller-loader-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"height","50px",3,"ngClass"],["height","1.3rem",3,"width"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"Busy state is enabled by adding "),n(3,"i"),s(4,"showLoader"),l(),s(5," property which blocks the UI with a modal by default. Alternatively, "),n(6,"i"),s(7,"loader"),l(),s(8," template can be used to customize items e.g. with "),n(9,"a",0),s(10,"Skeleton"),l(),s(11,"."),l()(),n(12,"div",1)(13,"div")(14,"p-scroller",2),v(15,it,2,4,"ng-template",3),l()(),n(16,"div")(17,"p-scroller",2),v(18,ot,2,4,"ng-template",3)(19,nt,2,4,"ng-template",4),l()()(),d(20,"app-code",5)),o&2&&(a(14),C(h(13,be)),p("items",r.items)("itemSize",50)("showLoader",!0)("delay",250),a(3),C(h(14,be)),p("items",r.items)("itemSize",50)("showLoader",!0)("delay",250),a(3),p("code",r.code))},dependencies:[b,S,g,T,_,G],encapsulation:2,changeDetection:0});let i=e;return i})();var _e=(()=>{let e=class e{constructor(){this.code={html:`
<ng-template pTemplate="item" let-item let-scrollOptions="options">
    // item: Current item.
    // scrollOptions.index: Index of the item.
    // scrollOptions.count: Total numbers of items.
    // scrollOptions.first: Whether this is the first item.
    // scrollOptions.last: Whether this is the last item.
    // scrollOptions.even: Whether the index is even.
    // scrollOptions.odd: Whether the index is odd.
</ng-template>
<ng-template pTemplate="loader" let-scrollOptions="options">
    // scrollOptions.index: Index of the item.
    // scrollOptions.count: Total numbers of items.
    // scrollOptions.first: Whether this is the first item.
    // scrollOptions.last: Whether this is the last item.
    // scrollOptions.even: Whether the index is even.
    // scrollOptions.odd: Whether the index is odd.
    // scrollOptions.numCols: Total number of columns in a row in 'both' orientation mode in view.
</ng-template>
<ng-template pTemplate="loadericon" let-scrollOptions="options">
    // scrollOptions.styleClass: Style class of the default icon.
</ng-template>`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["options-doc"]],decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"The properties of scroller component can be used like an object in it."),l()(),d(3,"app-code",0)),o&2&&(a(3),p("code",r.code)("hideToggleCode",!0))},dependencies:[S,g],encapsulation:2});let i=e;return i})();var st=()=>["/theming"],Te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),s(4,"theming"),l(),s(5," page."),l()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),s(11,"Name"),l(),n(12,"th"),s(13,"Element"),l()()(),n(14,"tbody")(15,"tr")(16,"td"),s(17,"p-scroller"),l(),n(18,"td"),s(19,"Container element."),l()(),n(20,"tr")(21,"td"),s(22,"p-scroller-content"),l(),n(23,"td"),s(24,"Content element."),l()(),n(25,"tr")(26,"td"),s(27,"p-scroller-loader"),l(),n(28,"td"),s(29,"Loader element."),l()()()()()),o&2&&(a(3),p("routerLink",h(1,st)))},dependencies:[re,g],encapsulation:2});let i=e;return i})();var lt=()=>({width:"200px",height:"200px"}),De=i=>({"surface-ground":i});function rt(i,e){if(i&1&&(n(0,"div",5)(1,"div",6),s(2),l(),n(3,"div",6),s(4),l(),n(5,"div",6),s(6),l(),n(7,"div",6),s(8),l(),n(9,"div",6),s(10),l(),n(11,"div",6),s(12),l(),n(13,"div",6),s(14),l()()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(8,De,t.odd)),a(2),O("Item: ",c,""),a(2),O("Index: ",t.index,""),a(2),O("Count: ",t.count,""),a(2),O("First: ",t.first,""),a(2),O("Last: ",t.last,""),a(2),O("Even: ",t.even,""),a(2),O("Odd: ",t.odd,"")}}function at(i,e){if(i&1&&(n(0,"div",7)(1,"div",6),d(2,"p-skeleton",8),l(),n(3,"div",6),d(4,"p-skeleton",9),l(),n(5,"div",6),d(6,"p-skeleton",8),l(),n(7,"div",6),d(8,"p-skeleton",9),l(),n(9,"div",6),d(10,"p-skeleton",8),l(),n(11,"div",6),d(12,"p-skeleton",9),l(),n(13,"div",6),d(14,"p-skeleton",8),l()()),i&2){let c=e.options;p("ngClass",f(1,De,c.odd))}}var ze=(()=>{let e=class e{constructor(){this.code={basic:`<p-scroller class="custom-loading" [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex flex-column align-items-strech" [ngClass]="{'surface-ground': options.odd}">
            <div class="flex align-items-center px-2" style="height: 25px">Item: {{item}}</div>
            <div class="flex align-items-center px-2" style="height: 25px">Index: {{options.index}}</div>
            <div class="flex align-items-center px-2" style="height: 25px">Count: {{options.count}}</div>
            <div class="flex align-items-center px-2" style="height: 25px">First: {{options.first}}</div>
            <div class="flex align-items-center px-2" style="height: 25px">Last: {{options.last}}</div>
            <div class="flex align-items-center px-2" style="height: 25px">Even: {{options.even}}</div>
            <div class="flex align-items-center px-2" style="height: 25px">Odd: {{options.odd}}</div>
        </div>
    </ng-template>
    <ng-template pTemplate="loader" let-options="options">
        <div class="flex flex-column align-items-strech" [ngClass]="{'surface-ground': options.odd}">
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
        </div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex justify-content-center">
    <p-scroller class="custom-loading" [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex flex-column align-items-strech" [ngClass]="{'surface-ground': options.odd}">
                <div class="flex align-items-center px-2" style="height: 25px">Item: {{item}}</div>
                <div class="flex align-items-center px-2" style="height: 25px">Index: {{options.index}}</div>
                <div class="flex align-items-center px-2" style="height: 25px">Count: {{options.count}}</div>
                <div class="flex align-items-center px-2" style="height: 25px">First: {{options.first}}</div>
                <div class="flex align-items-center px-2" style="height: 25px">Last: {{options.last}}</div>
                <div class="flex align-items-center px-2" style="height: 25px">Even: {{options.even}}</div>
                <div class="flex align-items-center px-2" style="height: 25px">Odd: {{options.odd}}</div>
            </div>
        </ng-template>
        <ng-template pTemplate="loader" let-options="options">
            <div class="flex flex-column align-items-strech" [ngClass]="{'surface-ground': options.odd}">
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex align-items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            </div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scroller-template-demo',
    templateUrl: './scroller-template-demo.html',
    styleUrls: ['./scroller-template-demo.scss']
})
export class ScrollerTemplateDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    p-skeleton {
        width: 100%;
    }
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>`Item #${o}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["template-doc"]],decls:22,vars:8,consts:[[1,"card","flex","justify-content-center"],["styleClass","border-1 surface-border",3,"items","itemSize","showLoader","delay"],["pTemplate","item"],["pTemplate","loader"],["selector","scroller-template-demo",3,"code"],[1,"flex","flex-column","align-items-strech",3,"ngClass"],[1,"flex","align-items-center","px-2",2,"height","25px"],[1,"flex","flex-column","align-items-stretch",3,"ngClass"],["width","60%","height","1.2rem"],["width","50%","height","1.2rem"]],template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"Scroller content is customizable by using "),n(3,"i"),s(4,"ng-template"),l(),s(5,". Valid values are "),n(6,"i"),s(7,"content"),l(),s(8,", "),n(9,"i"),s(10,"item"),l(),s(11,", "),n(12,"i"),s(13,"loader"),l(),s(14," and "),n(15,"i"),s(16,"loadericon"),l()()(),n(17,"div",0)(18,"p-scroller",1),v(19,rt,15,10,"ng-template",2)(20,at,15,3,"ng-template",3),l()(),d(21,"app-code",4)),o&2&&(a(18),C(h(7,lt)),p("items",r.items)("itemSize",25*7)("showLoader",!0)("delay",250),a(3),p("code",r.code))},dependencies:[b,S,g,T,_,G],encapsulation:2,changeDetection:0});let i=e;return i})();var pt=["sc"],mt=()=>({width:"200px",height:"200px"}),dt=i=>({"surface-ground":i});function ct(i,e){if(i&1&&(n(0,"div",6),s(1),l()),i&2){let c=e.$implicit,t=e.options;p("ngClass",f(2,dt,t.odd)),a(),w(c)}}var Ie=(()=>{let e=class e{constructor(){this.items=[],this.code={basic:`<p-button label="Reset" (click)="reset()"></p-button>
<p-scroller #sc [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
    <ng-template pTemplate="item" let-item let-options="options">
        <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
    </ng-template>
</p-scroller>`,html:`
<div class="card flex flex-column align-items-center gap-3">
    <p-button label="Reset" (click)="reset()"></p-button>
    <p-scroller #sc [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border-1 surface-border" [style]="{'width': '200px', 'height': '200px'}">
        <ng-template pTemplate="item" let-item let-options="options">
            <div class="flex align-items-center p-2" [ngClass]="{ 'surface-ground': options.odd }" style="height: 50px;">{{ item }}</div>
        </ng-template>
    </p-scroller>
</div>`,typescript:`
import { Component, OnInit, ViewChild } from '@angular/core';
import { Scroller } from 'primeng/scroller';

@Component({
    selector: 'scroller-programmatic-demo',
    templateUrl: './scroller-programmatic-demo.html'
})
export class ScrollerProgrammaticDemo implements OnInit {
    @ViewChild('sc') sc!: Scroller;

    items: string[] = [];

    ngOnInit(): void {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }

    reset() {
        this.sc.scrollToIndex(0, 'smooth');
    } 
}`}}ngOnInit(){this.items=Array.from({length:1e3}).map((t,o)=>`Item #${o}`)}reset(){this.sc.scrollToIndex(0,"smooth")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["programmatic-doc"]],viewQuery:function(o,r){if(o&1&&q(pt,5),o&2){let m;W(m=Q())&&(r.sc=m.first)}},decls:12,vars:6,consts:[["sc",""],[1,"card","flex","flex-column","align-items-center","gap-3"],["label","Reset",3,"click"],["scrollHeight","200px","styleClass","border-1 surface-border",3,"items","itemSize"],["pTemplate","item"],["selector","scroller-programmatic-demo",3,"code"],[1,"flex","align-items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(o,r){if(o&1){let m=H();n(0,"app-docsectiontext")(1,"p"),s(2,"Scrolling to a specific index can be done with the "),n(3,"i"),s(4,"scrollToIndex"),l(),s(5," function."),l()(),n(6,"div",1)(7,"p-button",2),F("click",function(){return z(m),I(r.reset())}),l(),n(8,"p-scroller",3,0),v(10,ct,2,4,"ng-template",4),l()(),d(11,"app-code",5)}o&2&&(a(8),C(h(5,mt)),p("items",r.items)("itemSize",50),a(3),p("code",r.code))},dependencies:[b,S,g,T,_,ae],encapsulation:2});let i=e;return i})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["accessibility-doc"]],decls:9,vars:0,template:function(o,r){o&1&&(n(0,"app-docsectiontext")(1,"h3"),s(2,"Screen Reader"),l(),n(3,"p"),s(4,"Scroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element."),l(),n(5,"h4"),s(6,"Keyboard Support"),l(),n(7,"p"),s(8,"Component does not include any built-in interactive elements."),l()())},dependencies:[g],encapsulation:2});let i=e;return i})();var Le=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=M({type:e}),e.\u0275inj=k({imports:[N,P,ce,K,me,he,fe,pe,K]});let i=e;return i})();var ut=()=>["Scroller"],ke=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Se},{id:"basic",label:"Basic",component:ge},{id:"horizontal",label:"Horizontal",component:xe},{id:"grid",label:"Grid",component:ve},{id:"programmatic",label:"Programmatic",component:Ie},{id:"loader",label:"Loader",component:we},{id:"template",label:"Template",component:ze},{id:"delay",label:"Delay",component:ye},{id:"lazy-load",label:"Lazy Load",component:Ce},{id:"scroll-options",label:"Scroll Options",component:_e},{id:"style",label:"Style",component:Te},{id:"accessibility",label:"Accessibility",component:Ee}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Scroller Component","header","Scroller","description","Scroller is a performance-approach to handle huge data efficiently.",3,"docs","apiDocs"]],template:function(o,r){o&1&&d(0,"app-doc",0),o&2&&p("docs",r.docs)("apiDocs",h(2,ut))},dependencies:[ue],styles:["[_nghost-%COMP%]     .p-scroller-viewport{flex:none}[_nghost-%COMP%]     .p-horizontal-scroll .p-scroller-content{display:flex;flex-direction:row}[_nghost-%COMP%]     p-skeleton{width:100%}"]});let i=e;return i})();var Me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=M({type:e}),e.\u0275inj=k({imports:[P.forChild([{path:"",component:ke}]),P]});let i=e;return i})();var Ri=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=M({type:e}),e.\u0275inj=k({imports:[N,Le,Me]});let i=e;return i})();export{Ri as ScrollerDemoModule};
