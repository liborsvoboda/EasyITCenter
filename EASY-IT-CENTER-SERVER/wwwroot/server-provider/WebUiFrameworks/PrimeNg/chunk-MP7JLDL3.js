import{a as y,b as T}from"./chunk-QDQUXZXB.js";import{a as v,b as M,c as b}from"./chunk-AS5FXEGH.js";import{a as u,b as E}from"./chunk-X2ZDE2AM.js";import{r as D,s as A}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as w,y as h}from"./chunk-UWMVDULA.js";import{t as g}from"./chunk-N5X6XDRN.js";import{Jb as t,Nc as C,Sa as x,Sb as S,V as p,da as r,ea as c,kb as m,rb as n,sb as s,tb as a}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var B=(()=>{let e=class e{constructor(){this.code={basic:`<button pButton label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled"></button>
<input type="text" pInputText class="block mt-3" />`,html:`
<div class="card flex flex-column align-items-center">
    <button pButton label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled"></button>
    <input type="text" pInputText class="block mt-3">
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'style-class-toggle-class-demo',
    templateUrl: './style-class-toggle-class-demo.html'
})
export class StyleClassToggleClassDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["toggle-class-doc"]],decls:26,vars:1,consts:[[1,"card","flex","flex-column","align-items-center"],["pButton","","label","Toggle p-disabled","pStyleClass","@next","toggleClass","p-disabled"],["type","text","pInputText","",1,"block","mt-3"],["selector","style-class-toggle-class-demo",3,"code"]],template:function(i,d){i&1&&(n(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"StyleClass"),s(),t(4," has two modes, "),n(5,"i"),t(6,"toggleClass"),s(),t(7," to simply add-remove a class and enter/leave animations. The target element to change the styling is defined with the "),n(8,"i"),t(9,"selector"),s(),t(10," property that accepts any valid CSS selector or keywords including "),n(11,"i"),t(12,"@next"),s(),t(13,", "),n(14,"i"),t(15,"prev"),s(),t(16,", "),n(17,"i"),t(18,"parent"),s(),t(19,", "),n(20,"i"),t(21,"grandparent"),s()()(),n(22,"div",0),a(23,"button",1)(24,"input",2),s(),a(25,"app-code",3)),i&2&&(x(25),m("code",d.code))},dependencies:[u,v,y,h,D],encapsulation:2});let o=e;return o})();var I=(()=>{let e=class e{constructor(){this.code={typescript:"import { StyleClassModule } from 'primeng/styleclass';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,d){i&1&&a(0,"app-code",0),i&2&&m("code",d.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let o=e;return o})();var j=(()=>{let e=class e{constructor(){this.code={basic:`<div>
    <button pButton label="Show" class="mr-2" pStyleClass=".box" enterFromClass="hidden" enterActiveClass="fadein"></button>
    <button pButton label="Hide" pStyleClass=".box" leaveActiveClass="fadeout" leaveToClass="hidden"></button>
</div>

<div class="hidden animation-duration-500 box">
    <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
</div>`,html:`
<div class="card flex flex-column align-items-center">
    <div>
        <button pButton label="Show" class="mr-2" pStyleClass=".box" enterFromClass="hidden" enterActiveClass="fadein"></button>
        <button pButton label="Hide" pStyleClass=".box" leaveActiveClass="fadeout" leaveToClass="hidden"></button>
    </div>

    <div class="hidden animation-duration-500 box">
        <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: './style-class-animation-demo',
    templateUrl: './style-class-animation-demo.html'
})
export class StyleClassAnimationDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["animation-doc"]],decls:38,vars:1,consts:[[1,"card","flex","flex-column","align-items-center"],["pButton","","label","Show","pStyleClass",".box","enterFromClass","hidden","enterActiveClass","fadein",1,"mr-2"],["pButton","","label","Hide","pStyleClass",".box","leaveActiveClass","fadeout","leaveToClass","hidden"],[1,"hidden","animation-duration-500","box"],[1,"flex","bg-green-500","text-white","align-items-center","justify-content-center","py-3","border-round-md","mt-3","font-bold","shadow-2","w-8rem","h-8rem"],["selector","style-class-animation-demo",3,"code"]],template:function(i,d){i&1&&(n(0,"app-docsectiontext")(1,"p"),t(2," Classes to apply during enter and leave animations are specified using the "),n(3,"i"),t(4,"enterFromClass"),s(),t(5,", "),n(6,"i"),t(7,"enterActiveClass"),s(),t(8,", "),n(9,"i"),t(10,"enterToClass"),s(),t(11,", "),n(12,"i"),t(13,"leaveFromClass"),s(),t(14,", "),n(15,"i"),t(16,"leaveActiveClass"),s(),t(17,","),n(18,"i"),t(19,"leaveToClass"),s(),t(20,"properties. In addition in case the target is an overlay, "),n(21,"i"),t(22,"hideOnOutsideClick"),s(),t(23," would be handy to hide the target if outside of the popup is clicked, or enable "),n(24,"i"),t(25,"hideOnEscape"),s(),t(26," to close the popup by listening "),n(27,"i"),t(28,"escape"),s(),t(29," key. "),s()(),n(30,"div",0)(31,"div"),a(32,"button",1)(33,"button",2),s(),n(34,"div",3)(35,"div",4),t(36,"Content"),s()()(),a(37,"app-code",5)),i&2&&(x(37),m("code",d.code))},dependencies:[u,v,y,h],encapsulation:2});let o=e;return o})();var k=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=p({imports:[C,g,E,b,T,w,A,b]});let o=e;return o})();var q=()=>["StyleClass"],N=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:I},{id:"toggleclass",label:"Toggle Class",component:B},{id:"animation",label:"Animation",component:j}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular StyleClass Component","header","StyleClass","description","StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.",3,"docs","apiDocs"]],template:function(i,d){i&1&&a(0,"app-doc",0),i&2&&m("docs",d.docs)("apiDocs",S(2,q))},dependencies:[M],encapsulation:2});let o=e;return o})();var H=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=p({imports:[g.forChild([{path:"",component:N}]),g]});let o=e;return o})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=p({imports:[C,H,k]});let o=e;return o})();export{Ce as StyleClassDemoModule};
