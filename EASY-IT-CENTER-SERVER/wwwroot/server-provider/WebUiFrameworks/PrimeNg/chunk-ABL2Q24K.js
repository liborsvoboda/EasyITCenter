import{a as A,b as R}from"./chunk-5QBES3VP.js";import{a as E,b as N}from"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as j,b as k,c as g}from"./chunk-AS5FXEGH.js";import{a as b,b as L}from"./chunk-X2ZDE2AM.js";import{e as I,i as D,p as x,r as B,s as z}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as S,y as F}from"./chunk-UWMVDULA.js";import{t as u}from"./chunk-N5X6XDRN.js";import{Jb as r,Nb as C,Nc as y,Ob as T,Pb as M,Sa as h,Sb as w,V as m,da as c,ea as l,kb as s,rb as n,sb as o,tb as p}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var P=(()=>{let e=class e{constructor(){this.code={typescript:"import { FocusTrapModule } from 'primeng/focustrap';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,a){i&1&&p(0,"app-code",0),i&2&&s("code",a.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{constructor(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.code={basic:`<div pFocusTrap class="card flex align-items-center justify-content-center flex-wrap gap-3">
    <div>
        <h4>Input</h4>
        <input id="input" type="text" size="30" pInputText>
    </div>
    <div>
        <h4>Float Label</h4>
        <span class="p-float-label">
            <input id="float-input" type="text" size="30" pInputText> 
            <label for="float-input">Username</label>
        </span>
    </div>
</div>`,html:`
<div pFocusTrap class="card flex align-items-center justify-content-center flex-wrap gap-3">
    <div>
        <h4>Input</h4>
        <input id="input" type="text" size="30" pInputText>
    </div>
    <div>
        <h4>Float Label</h4>
        <span class="p-float-label">
            <input id="float-input" type="text" size="30" pInputText> 
            <label for="float-input">Username</label>
        </span>
    </div>
    <div>
        <h4>Disabled Input</h4>
        <input id="disabled-input" type="text" size="30" pInputText [disabled]="true" />
    </div>
    <div>
        <h4>Input with tabindex -1</h4>
        <input type="text" size="30" pInputText tabindex="-1" />
    </div>
    <div>
        <h4>Button</h4>
        <button pButton type="button" icon="pi pi-check" label="Check"></button>
    </div>
    <div>
        <h4>Dropdown</h4>
        <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [showClear]="true"></p-dropdown>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'focus-trap-basic-demo',
    templateUrl: './focus-trap-basic-demo.html'
})
export class FocusTrapBasicDemo {
    selectedCity: string | undefined;

    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["focus-trap-basic-demo"]],decls:35,vars:5,consts:[["pFocusTrap","",1,"card","flex","align-items-center","justify-content-center","flex-wrap","gap-3"],["id","input","type","text","size","30","pInputText",""],[1,"p-float-label"],["id","float-input","type","text","size","30","pInputText",""],["for","float-input"],["id","disabled-input","type","text","size","30","pInputText","",3,"disabled"],["type","text","size","30","pInputText","","tabindex","-1"],["pButton","","type","button","icon","pi pi-check","label","Check"],["placeholder","Select a City","optionLabel","name",3,"ngModelChange","options","ngModel","showClear"],["selector","focus-trap-basic-demo",3,"code"]],template:function(i,a){i&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"FocusTrap is applied to a container element with the "),n(3,"i"),r(4,"pFocusTrap"),o(),r(5," directive."),o()(),n(6,"div",0)(7,"div")(8,"h4"),r(9,"Input"),o(),p(10,"input",1),o(),n(11,"div")(12,"h4"),r(13,"Float Label"),o(),n(14,"span",2),p(15,"input",3),n(16,"label",4),r(17,"Username"),o()()(),n(18,"div")(19,"h4"),r(20,"Disabled Input"),o(),p(21,"input",5),o(),n(22,"div")(23,"h4"),r(24,"Input with tabindex -1"),o(),p(25,"input",6),o(),n(26,"div")(27,"h4"),r(28,"Button"),o(),p(29,"button",7),o(),n(30,"div")(31,"h4"),r(32,"Dropdown"),o(),n(33,"p-dropdown",8),M("ngModelChange",function(v){return T(a.selectedCity,v)||(a.selectedCity=v),v}),o()()(),p(34,"app-code",9)),i&2&&(h(21),s("disabled",!0),h(12),s("options",a.cities),C("ngModel",a.selectedCity),s("showClear",!0),h(),s("code",a.code))},dependencies:[b,j,I,D,F,B,E,A],encapsulation:2});let t=e;return t})();var Y=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=m({imports:[y,u,L,g,x,S,z,N,R,g]});let t=e;return t})();var G=()=>["FocusTrap"],W=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:P},{id:"basic",label:"Basic",component:U}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Focus Trap Component","header","Focus Trap","description","Focus Trap keeps focus within a certain DOM element while tabbing.",3,"docs","apiDocs"]],template:function(i,a){i&1&&p(0,"app-doc",0),i&2&&s("docs",a.docs)("apiDocs",w(2,G))},dependencies:[k],encapsulation:2});let t=e;return t})();var O=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=m({imports:[u.forChild([{path:"",component:W}]),u]});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=m({imports:[y,O,x,Y]});let t=e;return t})();export{Fe as FocusTrapDemoModule};
