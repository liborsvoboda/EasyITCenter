import{a as me}from"./chunk-2BMKZP7B.js";import{a as ce,w as re}from"./chunk-DMJDKY6C.js";import"./chunk-COPROXXV.js";import"./chunk-UMPZYH6V.js";import"./chunk-24SD7D6H.js";import"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-ORJYCDDT.js";import"./chunk-KL3QZRIM.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import{a as oe}from"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as y,b as de,c as E}from"./chunk-AS5FXEGH.js";import{a as x,b as se}from"./chunk-X2ZDE2AM.js";import{r as le,s as pe}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as K,q as v,r as U,y as ae}from"./chunk-UWMVDULA.js";import{o as ne,t as D}from"./chunk-N5X6XDRN.js";import{Ab as $,Bb as L,Cc as Z,Eb as H,Fc as ee,Gb as J,Hb as W,Ic as te,Jb as i,Jc as ie,Kb as I,Nc as C,Sa as m,Sb as F,Ta as w,Tb as O,V as h,da as s,ea as _,ib as u,jb as k,kb as r,kc as X,ma as T,na as S,ob as z,rb as n,sb as a,tb as d,ub as G,va as B,vb as Y,wb as P,xb as M,yb as A,zb as f}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Se=[[["","pInplaceDisplay",""]],[["","pInplaceContent",""]]],Ie=["[pInplaceDisplay]","[pInplaceContent]"],De=t=>({"p-inplace p-component":!0,"p-inplace-closable":t}),Ee=t=>({"p-disabled":t});function we(t,e){t&1&&P(0)}function ke(t,e){if(t&1){let c=M();n(0,"div",3),A("click",function(o){T(c);let p=f();return S(p.onActivateClick(o))})("keydown",function(o){T(c);let p=f();return S(p.onKeydown(o))}),L(1),u(2,we,1,0,"ng-container",4),a()}if(t&2){let c=f();r("ngClass",O(2,Ee,c.disabled)),m(2),r("ngTemplateOutlet",c.displayTemplate)}}function Me(t,e){t&1&&P(0)}function Ae(t,e){if(t&1){let c=M();n(0,"button",9),A("click",function(o){T(c);let p=f(3);return S(p.onDeactivateClick(o))}),a()}if(t&2){let c=f(3);r("icon",c.closeIcon),k("aria-label",c.closeAriaLabel)}}function Fe(t,e){t&1&&d(0,"TimesIcon")}function Ve(t,e){}function je(t,e){t&1&&u(0,Ve,0,0,"ng-template")}function Ne(t,e){if(t&1){let c=M();n(0,"button",10),A("click",function(o){T(c);let p=f(3);return S(p.onDeactivateClick(o))}),u(1,Fe,1,0,"TimesIcon",6)(2,je,1,0,null,4),a()}if(t&2){let c=f(3);r("ngClass","p-button-icon-only"),k("aria-label",c.closeAriaLabel),m(),r("ngIf",!c.closeIconTemplate),m(),r("ngTemplateOutlet",c.closeIconTemplate)}}function qe(t,e){if(t&1&&(G(0),u(1,Ae,1,2,"button",7)(2,Ne,3,4,"button",8),Y()),t&2){let c=f(2);m(),r("ngIf",c.closeIcon),m(),r("ngIf",!c.closeIcon)}}function Be(t,e){if(t&1&&(n(0,"div",5),L(1,1),u(2,Me,1,0,"ng-container",4)(3,qe,3,2,"ng-container",6),a()),t&2){let c=f();m(2),r("ngTemplateOutlet",c.contentTemplate),m(),r("ngIf",c.closable)}}var b=(()=>{let e=class e{constructor(l){this.cd=l,this.active=!1,this.closable=!1,this.disabled=!1,this.onActivate=new B,this.onDeactivate=new B}ngAfterContentInit(){this.templates?.forEach(l=>{switch(l.getType()){case"display":this.displayTemplate=l.template;break;case"closeicon":this.closeIconTemplate=l.template;break;case"content":this.contentTemplate=l.template;break}})}onActivateClick(l){this.preventClick||this.activate(l)}onDeactivateClick(l){this.preventClick||this.deactivate(l)}activate(l){this.disabled||(this.active=!0,this.onActivate.emit(l),this.cd.markForCheck())}deactivate(l){this.disabled||(this.active=!1,this.hover=!1,this.onDeactivate.emit(l),this.cd.markForCheck())}onKeydown(l){l.code==="Enter"&&(this.activate(l),l.preventDefault())}};e.\u0275fac=function(o){return new(o||e)(w(X))},e.\u0275cmp=s({type:e,selectors:[["p-inplace"]],contentQueries:function(o,p,Te){if(o&1&&H(Te,v,4),o&2){let Q;J(Q=W())&&(p.templates=Q)}},hostAttrs:[1,"p-element"],inputs:{active:"active",closable:"closable",disabled:"disabled",preventClick:"preventClick",style:"style",styleClass:"styleClass",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel"},outputs:{onActivate:"onActivate",onDeactivate:"onDeactivate"},ngContentSelectors:Ie,decls:3,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-inplace-display","tabindex","0","role","button",3,"ngClass","click","keydown",4,"ngIf"],["class","p-inplace-content",4,"ngIf"],["tabindex","0","role","button",1,"p-inplace-display",3,"click","keydown","ngClass"],[4,"ngTemplateOutlet"],[1,"p-inplace-content"],[4,"ngIf"],["type","button","pButton","",3,"icon","click",4,"ngIf"],["type","button","pButton","",3,"ngClass","click",4,"ngIf"],["type","button","pButton","",3,"click","icon"],["type","button","pButton","",3,"click","ngClass"]],template:function(o,p){o&1&&($(Se),n(0,"div",0),u(1,ke,3,4,"div",1)(2,Be,4,2,"div",2),a()),o&2&&(z(p.styleClass),r("ngClass",O(7,De,p.closable))("ngStyle",p.style),k("aria-live","polite"),m(),r("ngIf",!p.active),m(),r("ngIf",p.active))},dependencies:[Z,ee,ie,te,ae,oe],styles:[`@layer primeng{.p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}}
`],encapsulation:2,changeDetection:0});let t=e;return t})(),V=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[C,K,U,K,U]});let t=e;return t})();var ue=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["accessibility-doc"]],decls:80,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,p){o&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),a(),n(4,"p"),i(5,"Inplace component defines "),n(6,"i"),i(7,"aria-live"),a(),i(8,' as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.'),a(),n(9,"p"),i(10," Display element uses "),n(11,"i"),i(12,"button"),a(),i(13," role in view mode by default, "),n(14,"i"),i(15,"displayProps"),a(),i(16," can be used for customizations like adding "),n(17,"i"),i(18,"aria-label"),a(),i(19," or "),n(20,"i"),i(21,"aria-labelledby"),a(),i(22," attributes to describe the content of the view mode or even overriding the default role. "),a(),n(23,"p"),i(24," Closable inplace components displays a button with an "),n(25,"i"),i(26,"aria-label"),a(),i(27," that refers to the "),n(28,"i"),i(29,"aria.close"),a(),i(30," property of the "),n(31,"a",0),i(32,"locale"),a(),i(33," API by default, you may use"),n(34,"i"),i(35,"closeButtonProps"),a(),i(36," to customize the element and override the default "),n(37,"i"),i(38,"aria-label"),a(),i(39,". "),a(),n(40,"h3"),i(41,"View Mode Keyboard Support"),a(),n(42,"div",1)(43,"table",2)(44,"thead")(45,"tr")(46,"th"),i(47,"Key"),a(),n(48,"th"),i(49,"Function"),a()()(),n(50,"tbody")(51,"tr")(52,"td")(53,"i"),i(54,"enter"),a()(),n(55,"td"),i(56,"Switches to content."),a()()()()(),n(57,"h3"),i(58,"Close Button Keyboard Support"),a(),n(59,"div",1)(60,"table",2)(61,"thead")(62,"tr")(63,"th"),i(64,"Key"),a(),n(65,"th"),i(66,"Function"),a()()(),n(67,"tbody")(68,"tr")(69,"td")(70,"i"),i(71,"enter"),a()(),n(72,"td"),i(73,"Switches to display."),a()(),n(74,"tr")(75,"td")(76,"i"),i(77,"space"),a()(),n(78,"td"),i(79,"Switches to display."),a()()()()()()())},dependencies:[y],encapsulation:2});let t=e;return t})();function Pe(t,e){t&1&&(n(0,"span"),i(1,"View Content"),a())}function Le(t,e){t&1&&(n(0,"span"),i(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a())}var fe=(()=>{let e=class e{constructor(){this.code={basic:`<p-inplace>
    <ng-template pTemplate="display">
        <span>View Content</span>
    </ng-template>
    <ng-template pTemplate="content">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
    </ng-template>
</p-inplace>`,html:`
<div class="card">
    <p-inplace>
        <ng-template pTemplate="display">
            <span>View Content</span>
        </ng-template>
        <ng-template pTemplate="content">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </ng-template>
    </p-inplace>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'inplace-basic-demo',
    templateUrl: './inplace-basic-demo.html'
})
export class InplaceBasicDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:16,vars:1,consts:[[1,"card"],["pTemplate","display"],["pTemplate","content"],["selector","inplace-basic-demo",3,"code"]],template:function(o,p){o&1&&(n(0,"app-docsectiontext")(1,"p")(2,"i"),i(3,"Inplace"),a(),i(4," component requires "),n(5,"i"),i(6,"display"),a(),i(7," and "),n(8,"i"),i(9,"content"),a(),i(10," templates to define the content of each state."),a()(),n(11,"div",0)(12,"p-inplace"),u(13,Pe,2,0,"ng-template",1)(14,Le,2,0,"ng-template",2),a()(),d(15,"app-code",3)),o&2&&(m(15),r("code",p.code))},dependencies:[x,y,b,v],encapsulation:2});let t=e;return t})();function Oe(t,e){t&1&&(n(0,"div",4),d(1,"span",5),n(2,"span",6),i(3,"View Data"),a()())}function Ue(t,e){t&1&&(n(0,"tr")(1,"th"),i(2,"Vin"),a(),n(3,"th"),i(4,"Year"),a(),n(5,"th"),i(6,"Brand"),a(),n(7,"th"),i(8,"Color"),a()())}function Ke(t,e){if(t&1&&(n(0,"tr")(1,"td"),i(2),a(),n(3,"td"),i(4),a(),n(5,"td"),i(6),a(),n(7,"td"),i(8),a()()),t&2){let c=e.$implicit;m(2),I(c.vin),m(2),I(c.year),m(2),I(c.brand),m(2),I(c.color)}}function Re(t,e){if(t&1&&(n(0,"p-table",7),u(1,Ue,9,0,"ng-template",8)(2,Ke,9,4,"ng-template",9),a()),t&2){let c=f();r("value",c.cars)}}var ge=(()=>{let e=class e{constructor(l){this.carService=l,this.code={basic:`<p-inplace>
    <ng-template pTemplate="display">
        <div class="inline-flex align-items-center">
            <span class="pi pi-table" style="vertical-align: middle"></span>
            <span class="ml-2">View Data</span>
        </div>
    </ng-template>
    <ng-template pTemplate="content">
        <p-table [value]="cars" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th>Vin</th>
                    <th>Year</th>
                    <th>Brand</th>
                    <th>Color</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-car>
                <tr>
                    <td>{{ car.vin }}</td>
                    <td>{{ car.year }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.color }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-inplace>`,html:`
<div class="card">
    <p-inplace>
        <ng-template pTemplate="display">
            <div class="inline-flex align-items-center">
                <span class="pi pi-table" style="vertical-align: middle"></span>
                <span class="ml-2">View Data</span>
            </div>
        </ng-template>
        <ng-template pTemplate="content">
            <p-table [value]="cars" responsiveLayout="scroll">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Vin</th>
                        <th>Year</th>
                        <th>Brand</th>
                        <th>Color</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-car>
                    <tr>
                        <td>{{ car.vin }}</td>
                        <td>{{ car.year }}</td>
                        <td>{{ car.brand }}</td>
                        <td>{{ car.color }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </ng-template>
    </p-inplace>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';

@Component({
    selector: 'inplace-data-demo',
    templateUrl: './inplace-data-demo.html'
})
export class InplaceDataDemo {
    cars: Car[] | undefined;

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    } 
}`,service:["CarService"]},this.extFiles=[{path:"src/domain/car.ts",content:`
export interface Car {
    id?;
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}`}]}ngOnInit(){this.carService.getCarsSmall().then(l=>this.cars=l)}};e.\u0275fac=function(o){return new(o||e)(w(me))},e.\u0275cmp=s({type:e,selectors:[["data-doc"]],decls:5,vars:2,consts:[[1,"card"],["pTemplate","display"],["pTemplate","content"],["selector","inplace-data-demo",3,"code","extFiles"],[1,"inline-flex","align-items-center"],[1,"pi","pi-table",2,"vertical-align","middle"],[1,"ml-2"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"]],template:function(o,p){o&1&&(n(0,"div",0)(1,"p-inplace"),u(2,Oe,4,0,"ng-template",1)(3,Re,3,1,"ng-template",2),a()(),d(4,"app-code",3)),o&2&&(m(4),r("code",p.code)("extFiles",p.extFiles))},dependencies:[x,b,v,ce],encapsulation:2});let t=e;return t})();function Qe(t,e){t&1&&(n(0,"div",4),d(1,"span",5),n(2,"span",6),i(3,"View Picture"),a()())}function ze(t,e){t&1&&d(0,"img",7)}var ve=(()=>{let e=class e{constructor(){this.code={basic:`<p-inplace>
    <ng-template pTemplate="display">
        <div class="inline-flex align-items-center">
            <span class="pi pi-image" style="vertical-align: middle"></span>
            <span class="ml-2">View Picture</span>
        </div>
    </ng-template>
    <ng-template pTemplate="content">
        <img src="https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg" alt="Nature" />
    </ng-template>
</p-inplace>`,html:`
<div class="card">
    <p-inplace>
        <ng-template pTemplate="display">
            <div class="inline-flex align-items-center">
                <span class="pi pi-image" style="vertical-align: middle"></span>
                <span class="ml-2">View Picture</span>
            </div>
        </ng-template>
        <ng-template pTemplate="content">
            <img src="https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg" alt="Nature" />
        </ng-template>
    </p-inplace>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'inplace-image-demo',
    templateUrl: './inplace-image-demo.html'
})
export class InplaceImageDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["image-doc"]],decls:8,vars:1,consts:[[1,"card"],["pTemplate","display"],["pTemplate","content"],["selector","inplace-image-demo",3,"code"],[1,"inline-flex","align-items-center"],[1,"pi","pi-image",2,"vertical-align","middle"],[1,"ml-2"],["src","https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg","alt","Nature"]],template:function(o,p){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Any content such as an image can be placed inside an Inplace."),a()(),n(3,"div",0)(4,"p-inplace"),u(5,Qe,4,0,"ng-template",1)(6,ze,1,0,"ng-template",2),a()(),d(7,"app-code",3)),o&2&&(m(7),r("code",p.code))},dependencies:[x,y,b,v],encapsulation:2});let t=e;return t})();var xe=(()=>{let e=class e{constructor(){this.code={typescript:"import { InplaceModule } from 'primeng/inplace';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,p){o&1&&d(0,"app-code",0),o&2&&r("code",p.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2});let t=e;return t})();function Ge(t,e){t&1&&(n(0,"span"),i(1,"Click to Edit"),a())}function Ye(t,e){t&1&&d(0,"input",5)}var ye=(()=>{let e=class e{constructor(){this.code={basic:`<p-inplace closable="closable">
    <ng-template pTemplate="display">
        <span>Click to Edit</span>
    </ng-template>
    <ng-template pTemplate="content">
        <input type="text" value="PrimeNG" pInputText />
    </ng-template>
</p-inplace>`,html:`
<div class="card">
    <p-inplace closable="closable">
        <ng-template pTemplate="display">
            <span>Click to Edit</span>
        </ng-template>
        <ng-template pTemplate="content">
            <input type="text" value="PrimeNG" pInputText />
        </ng-template>
    </p-inplace>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'inplace-input-demo',
    templateUrl: './inplace-input-demo.html'
})
export class InplaceInputDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["input-doc"]],decls:11,vars:1,consts:[[1,"card"],["closable","closable"],["pTemplate","display"],["pTemplate","content"],["selector","inplace-input-demo",3,"code"],["type","text","value","PrimeNG","pInputText",""]],template:function(o,p){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Inplace can be used within a form to display a value as read only before making it editable. The "),n(3,"i"),i(4,"closable"),a(),i(5," property adds a close button next to the content to switch back to read only mode."),a()(),n(6,"div",0)(7,"p-inplace",1),u(8,Ge,2,0,"ng-template",2)(9,Ye,1,0,"ng-template",3),a()(),d(10,"app-code",4)),o&2&&(m(10),r("code",p.code))},dependencies:[x,y,b,v,le],encapsulation:2});let t=e;return t})();var $e=()=>["/theming"],he=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,p){o&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),i(4,"theming"),a(),i(5," page."),a()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),i(11,"Name"),a(),n(12,"th"),i(13,"Element"),a()()(),n(14,"tbody")(15,"tr")(16,"td"),i(17,"p-inplace"),a(),n(18,"td"),i(19,"Container element"),a()(),n(20,"tr")(21,"td"),i(22,"p-inplace-display"),a(),n(23,"td"),i(24,"Display container"),a()(),n(25,"tr")(26,"td"),i(27,"p-inplace-content"),a(),n(28,"td"),i(29,"Content container"),a()()()()()),o&2&&(m(3),r("routerLink",F(1,$e)))},dependencies:[ne,y],encapsulation:2});let t=e;return t})();var _e=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[C,D,se,E,V,pe,re,E]});let t=e;return t})();var He=()=>["Inplace"],be=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:xe},{id:"basic",label:"Basic",component:fe},{id:"input",label:"Input",component:ye},{id:"image",label:"Image",component:ve},{id:"data",label:"Data",component:ge},{id:"style",label:"Style",component:he},{id:"accessibility",label:"Accessibility",component:ue}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Inplace Component","header","Inplace","description","Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.",3,"docs","apiDocs"]],template:function(o,p){o&1&&d(0,"app-doc",0),o&2&&r("docs",p.docs)("apiDocs",F(2,He))},dependencies:[de],encapsulation:2});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[D.forChild([{path:"",component:be}]),D]});let t=e;return t})();var ui=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[C,Ce,V,E,_e]});let t=e;return t})();export{ui as InplaceDemoModule};
