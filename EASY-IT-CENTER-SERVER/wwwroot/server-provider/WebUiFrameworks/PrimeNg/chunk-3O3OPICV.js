import{a as m,b as R,c as b}from"./chunk-AS5FXEGH.js";import{a as y,b as w}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{w as v,x as M}from"./chunk-UWMVDULA.js";import{o as S,t as h}from"./chunk-N5X6XDRN.js";import{Jb as o,Nc as x,Sa as g,Sb as D,V as f,da as p,ea as u,kb as a,rb as n,sb as r,tb as d}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var k=(()=>{let e=class e{constructor(){this.code={basic:'<div pRipple class="card styled-box-green shadow-2">Green</div>',html:`
<div class="card card-container flex justify-content-center align-items-center">
    <div pRipple class="card styled-box-green shadow-2">Green</div>
    <div pRipple class="card styled-box-orange shadow-2">Orange</div>
    <div pRipple class="card styled-box-purple shadow-2">Purple</div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    templateUrl: './ripple-custom-demo.html',
    styleUrls: ['./ripple-custom-demo.scss']
})
export class RippleCustomDemo {
}`,scss:`
:host ::ng-deep .card-container {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        &.styled-box-green {
            .p-ink {
                background: rgba(#4baf50, 0.3);
            }
        }

        &.styled-box-orange {
            .p-ink {
                background: rgba(#ffc106, 0.3);
            }
        }

        &.styled-box-purple {
            .p-ink {
                background: rgba(#9c27b0, 0.3);
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["custom-doc"]],decls:11,vars:1,consts:[[1,"card","card-container","flex","justify-content-center","align-items-center"],["pRipple","",1,"card","styled-box-green","shadow-2"],["pRipple","",1,"card","styled-box-orange","shadow-2"],["pRipple","",1,"card","styled-box-purple","shadow-2"],["selector","ripple-custom-demo",3,"code"]],template:function(i,s){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Styling Demo Content."),r()(),n(3,"div",0)(4,"div",1),o(5,"Green"),r(),n(6,"div",2),o(7,"Orange"),r(),n(8,"div",3),o(9,"Purple"),r()(),d(10,"app-code",4)),i&2&&(g(10),a("code",s.code))},dependencies:[y,m,v],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e{constructor(){this.code={basic:'<div pRipple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">Default</div>',html:`
<div class="card card-container flex justify-content-center align-items-center">
    <div pRipple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">Default</div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    templateUrl: './ripple-default-demo.html',
    styleUrls: ['./ripple-default-demo.scss']
})
export class RippleDefaultDemo {
}`,scss:`
:host ::ng-deep .card-container {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;

        &:last-child {
            margin-right: 0;
        }
    }
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["default-doc"]],decls:7,vars:1,consts:[[1,"card","card-container","flex","justify-content-center","align-items-center"],["pRipple","",1,"card","text-primary","bg-primary","flex","select-none","justify-content-center","align-items-center","shadow-2"],["selector","ripple-default-demo",3,"code"]],template:function(i,s){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Default Demo Content."),r()(),n(3,"div",0)(4,"div",1),o(5,"Default"),r()(),d(6,"app-code",2)),i&2&&(g(6),a("code",s.code))},dependencies:[y,m,v],encapsulation:2});let t=e;return t})();var A=(()=>{let e=class e{constructor(){this.code={typescript:"import { RippleModule } from 'primeng/ripple';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,s){i&1&&d(0,"app-code",0),i&2&&a("code",s.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2});let t=e;return t})();var U=()=>["/theming"],T=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,s){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),o(4,"theming"),r(),o(5," page."),r()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),o(11,"Name"),r(),n(12,"th"),o(13,"Element"),r()()(),n(14,"tbody")(15,"tr")(16,"td"),o(17,"p-ripple"),r(),n(18,"td"),o(19,"Host element."),r()(),n(20,"tr")(21,"td"),o(22,"p-ink"),r(),n(23,"td"),o(24,"Ripple element."),r()(),n(25,"tr")(26,"td"),o(27,"p-ink-active"),r(),n(28,"td"),o(29,"Ripple element during animating."),r()()()()()),i&2&&(g(3),a("routerLink",D(1,U)))},dependencies:[S,m],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],decls:12,vars:0,template:function(i,s){i&1&&(n(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),r(),n(3,"p"),o(4,"Ripple element has the "),n(5,"i"),o(6,"aria-hidden"),r(),o(7," attribute as true so that it gets ignored by the screen readers."),r(),n(8,"h3"),o(9,"Keyboard Support"),r(),n(10,"p"),o(11,"Component does not include any interactive elements."),r()())},dependencies:[m],encapsulation:2});let t=e;return t})();var O=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[x,h,w,b,M,b]});let t=e;return t})();var P=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:A},{id:"default",label:"Default",component:j},{id:"custom",label:"Custom",component:k},{id:"style",label:"Style",component:T},{id:"accessibility",label:"Accessibility",component:F}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular Ripple Component","header","Ripple","description","Ripple directive adds ripple effect to the host element.",3,"docs"]],template:function(i,s){i&1&&d(0,"app-doc",0),i&2&&a("docs",s.docs)},dependencies:[R],styles:["[_nghost-%COMP%]     .card-container .card{width:75px;height:75px;display:flex;align-items:center;justify-content:center;margin-right:1rem;-webkit-user-select:none;user-select:none;padding:0}[_nghost-%COMP%]     .card-container .card.primary-box{background-color:var(--primary-color);padding:0;color:var(--primary-color-text)}[_nghost-%COMP%]     .card-container .card.styled-box-green .p-ink{background:#4baf504d}[_nghost-%COMP%]     .card-container .card.styled-box-orange .p-ink{background:#ffc1064d}[_nghost-%COMP%]     .card-container .card.styled-box-purple .p-ink{background:#9c27b04d}[_nghost-%COMP%]     .card-container .card:last-child{margin-right:0}"]});let t=e;return t})();var N=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[h.forChild([{path:"",component:P}]),h]});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[x,N,O]});let t=e;return t})();export{Ce as RippleDemoModule};
