import{a as v,b as B}from"./chunk-QUKVYQLU.js";import{a as f,b as j,c as F}from"./chunk-AS5FXEGH.js";import{a as d,b as R}from"./chunk-X2ZDE2AM.js";import{b as T,e as K,f as w,g as D,h as E,j as S,m as M,n as A,q as N,r as y,s as G}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as g}from"./chunk-N5X6XDRN.js";import{Jb as r,Nc as h,Sa as s,Sb as k,V as b,da as c,ea as x,kb as a,rb as n,sb as i,tb as l}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var O=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["accessibility-doc"]],decls:7,vars:0,consts:[["href","/inputtext"]],template:function(o,m){o&1&&(n(0,"div")(1,"app-docsectiontext")(2,"p"),r(3,"Refer to "),n(4,"a",0),r(5,"InputText"),i(),r(6," for accessibility as KeyFilter is a built-in add-on of the InputText."),i()()())},dependencies:[f],encapsulation:2});let t=e;return t})();var P=(()=>{let e=class e{constructor(){this.code={typescript:"import { KeyFilterModule } from 'primeng/keyfilter';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,m){o&1&&l(0,"app-code",0),o&2&&a("code",m.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.code={basic:`<input pInputText pKeyFilter="int" />
<input pInputText pKeyFilter="num" />
<input pInputText pKeyFilter="money" />
<input pInputText pKeyFilter="hex" />
<input pInputText pKeyFilter="alpha" />
<input pInputText pKeyFilter="alphanum" />`,html:`
<div class="card">
    <div class="flex flex-wrap gap-3 mb-4">
        <div class="flex-auto">
            <label for="integer" class="font-bold block mb-2"> Integer </label>
            <input pInputText id="integer" pKeyFilter="int" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="number" class="font-bold block mb-2"> Number </label>
            <input pInputText id="number" pKeyFilter="num" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="money" class="font-bold block mb-2"> Money </label>
            <input pInputText id="money" pKeyFilter="money" class="w-full" />
        </div>
    </div>
    <div class="flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="hex" class="font-bold block mb-2"> Hex </label>
            <input pInputText id="hex" pKeyFilter="hex" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
            <input pInputText id="alphabetic" pKeyFilter="alpha" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
            <input pInputText id="alphanumeric" pKeyFilter="alphanum" class="w-full" />
        </div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'key-filter-presets-demo',
    templateUrl: './key-filter-presets-demo.html'
})
export class KeyFilterPresetsDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["presets-doc"]],decls:34,vars:1,consts:[[1,"card"],[1,"flex","flex-wrap","gap-3","mb-4"],[1,"flex-auto"],["for","integer",1,"font-bold","block","mb-2"],["pInputText","","id","integer","pKeyFilter","int",1,"w-full"],["for","number",1,"font-bold","block","mb-2"],["pInputText","","id","number","pKeyFilter","num",1,"w-full"],["for","money",1,"font-bold","block","mb-2"],["pInputText","","id","money","pKeyFilter","money",1,"w-full"],[1,"flex","flex-wrap","gap-3"],["for","hex",1,"font-bold","block","mb-2"],["pInputText","","id","hex","pKeyFilter","hex",1,"w-full"],["for","alphabetic",1,"font-bold","block","mb-2"],["pInputText","","id","alphabetic","pKeyFilter","alpha",1,"w-full"],["for","alphanumeric",1,"font-bold","block","mb-2"],["pInputText","","id","alphanumeric","pKeyFilter","alphanum",1,"w-full"],["selector","key-filter-presets-demo",3,"code"]],template:function(o,m){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"KeyFilter provides various presets configured with the "),n(3,"i"),r(4,"pKeyFilter"),i(),r(5," property."),i()(),n(6,"div",0)(7,"div",1)(8,"div",2)(9,"label",3),r(10," Integer "),i(),l(11,"input",4),i(),n(12,"div",2)(13,"label",5),r(14," Number "),i(),l(15,"input",6),i(),n(16,"div",2)(17,"label",7),r(18," Money "),i(),l(19,"input",8),i()(),n(20,"div",9)(21,"div",2)(22,"label",10),r(23," Hex "),i(),l(24,"input",11),i(),n(25,"div",2)(26,"label",12),r(27," Alphabetic "),i(),l(28,"input",13),i(),n(29,"div",2)(30,"label",14),r(31," Alphanumeric "),i(),l(32,"input",15),i()()(),l(33,"app-code",16)),o&2&&(s(33),a("code",m.code))},dependencies:[d,f,v,y],encapsulation:2});let t=e;return t})();var $=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <label for="integer" class="font-bold block mb-2"> Integer </label>
    <input pInputText id="integer" pKeyFilter="int" class="w-full" formControlName="value"/>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <label for="integer" class="font-bold block mb-2"> Integer </label>
        <input pInputText id="integer" pKeyFilter="int" class="w-full" formControlName="value"/>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'key-filter-reactive-forms-demo',
    templateUrl: './key-filter-reactive-forms-demo.html'
})
export class KeyFilterReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(1234)
        });
    }
}`}}ngOnInit(){this.formGroup=new D({value:new E(1234)})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["reactive-forms-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["for","integer",1,"font-bold","block","mb-2"],["pInputText","","id","integer","pKeyFilter","int","formControlName","value",1,"w-full"],["selector","key-filter-reactive-forms-demo",3,"code"]],template:function(o,m){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"KeyFilter can also be used with reactive forms. In this case, the "),n(3,"i"),r(4,"formControlName"),i(),r(5," property is used to bind the component to a form control."),i()(),n(6,"div",0)(7,"form",1)(8,"label",2),r(9," Integer "),i(),l(10,"input",3),i()(),l(11,"app-code",4)),o&2&&(s(7),a("formGroup",m.formGroup),s(4),a("code",m.code))},dependencies:[d,S,T,K,w,M,A,f,v,y],encapsulation:2});let t=e;return t})();var z=(()=>{let e=class e{constructor(){this.blockSpace=/[^\s]/,this.blockChars=/^[^<>*!]+$/,this.code={basic:`<input pInputText [pKeyFilter]="blockSpace" />
<input pInputText [pKeyFilter]="blockChars" />`,html:`
<div class="card flex flex-wrap gap-3">
    <div class="flex-auto">
        <label for="blockspace" class="font-bold block mb-2"> Block Space </label>
        <input pInputText id="blockspace" pKeyFilter="int" class="w-full" />
    </div>
    <div class="flex-auto">
        <label for="block" class="font-bold block mb-2"> Block < > * ! </label>
        <input pInputText id="block" pKeyFilter="int" class="w-full" />
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'key-filter-reg-exp-demo',
    templateUrl: './key-filter-reg-exp-demo.html'
})
export class KeyFilterRegExpDemo {
    blockSpace: RegExp = /[^s]/; 
    
    blockChars: RegExp = /^[^<>*!]+$/;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["reg-exp-demo"]],decls:13,vars:3,consts:[[1,"card","flex","flex-wrap","gap-3"],[1,"flex-auto"],["for","blockspace",1,"font-bold","block","mb-2"],["pInputText","","id","blockspace",1,"w-full",3,"pKeyFilter"],["for","block",1,"font-bold","block","mb-2"],["pInputText","","id","block",1,"w-full",3,"pKeyFilter"],["selector","key-filter-reg-exp-demo",3,"code"]],template:function(o,m){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"In addition to the presets, a regular expression can be configured for customization."),i()(),n(3,"div",0)(4,"div",1)(5,"label",2),r(6," Block Space "),i(),l(7,"input",3),i(),n(8,"div",1)(9,"label",4),r(10," Block < > * ! "),i(),l(11,"input",5),i()(),l(12,"app-code",6)),o&2&&(s(7),a("pKeyFilter",m.blockSpace),s(4),a("pKeyFilter",m.blockChars),s(),a("code",m.code))},dependencies:[d,f,v,y],encapsulation:2});let t=e;return t})();var q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=b({imports:[h,R,N,F,B,G,F]});let t=e;return t})();var Q=()=>["KeyFilter"],J=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:P},{id:"presets",label:"Presets",component:V},{id:"regex",label:"Regex",component:z},{id:"reactive-forms",label:"Reactive Forms",component:$},{id:"accessibility",label:"Accessibility",component:O}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular KeyFilter Component","header","KeyFilter","description","KeyFilter is a built-in feature of InputText to restrict user input based on a regular expression.",3,"docs","apiDocs"]],template:function(o,m){o&1&&l(0,"app-doc",0),o&2&&a("docs",m.docs)("apiDocs",k(2,Q))},dependencies:[j],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=b({imports:[g.forChild([{path:"",component:J}]),g]});let t=e;return t})();var Ge=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=b({imports:[h,L,q]});let t=e;return t})();export{Ge as KeyFilterDemoModule};
