import{a as g,b as A}from"./chunk-E6QRPVYT.js";import"./chunk-RJKOGX2L.js";import{a as f,b as w,c as S}from"./chunk-AS5FXEGH.js";import{a as d,b as M}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as b}from"./chunk-N5X6XDRN.js";import{Jb as t,Nc as v,Sa as s,Sb as D,V as u,da as r,ea as y,kb as m,rb as i,sb as o,tb as c}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var T=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["accessibility-doc"]],decls:45,vars:0,consts:[[1,"doc-section-description"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(p,l){p&1&&(i(0,"div")(1,"app-docsectiontext")(2,"div",0)(3,"h3"),t(4,"Screen Reader"),o(),i(5,"p"),t(6," Chip uses the "),i(7,"i"),t(8,"label"),o(),t(9," property as the default "),i(10,"i"),t(11,"aria-label"),o(),t(12,", since any attribute is passed to the root element "),i(13,"i"),t(14,"aria-labelledby"),o(),t(15," or "),i(16,"i"),t(17,"aria-label"),o(),t(18," can be used to override the default behavior. Removable chips have a "),i(19,"i"),t(20,"tabindex"),o(),t(21," and focusable with the tab key. "),o(),i(22,"h3"),t(23,"Keyboard Support"),o(),i(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),t(29,"Key"),o(),i(30,"th"),t(31,"Function"),o()()(),i(32,"tbody")(33,"tr")(34,"td")(35,"i"),t(36,"backspace"),o()(),i(37,"td"),t(38,"Hides removable."),o()(),i(39,"tr")(40,"td")(41,"i"),t(42,"enter"),o()(),i(43,"td"),t(44,"Hides removable."),o()()()()()()()())},dependencies:[f],encapsulation:2});let n=e;return n})();var I=(()=>{let e=class e{constructor(){this.code={basic:'<p-chip label="Action"></p-chip>',html:`
<div class="card flex align-items-center gap-2 flex-wrap">
    <p-chip label="Action"></p-chip>
    <p-chip label="Comedy"></p-chip>
    <p-chip label="Mystery"></p-chip>
    <p-chip label="Thriller" [removable]="true"></p-chip>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'chip-basic-demo',
    templateUrl: './chip-basic-demo.html'
})
export class ChipBasicDemo {}`}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["chip-basic-demo"]],decls:18,vars:2,consts:[[1,"card","flex","align-items-center","gap-2","flex-wrap"],["label","Action"],["label","Comedy"],["label","Mystery"],["label","Thriller",3,"removable"],["selector","chip-basic-demo",3,"code"]],template:function(p,l){p&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," A basic chip with a text is created with the "),i(3,"i"),t(4,"label"),o(),t(5," property. In addition when "),i(6,"i"),t(7,"removable"),o(),t(8," is added, a delete icon is displayed to remove a chip, the optional "),i(9,"i"),t(10,"onRemove"),o(),t(11," event is available to get notified when a chip is hidden. "),o()(),i(12,"div",0),c(13,"p-chip",1)(14,"p-chip",2)(15,"p-chip",3)(16,"p-chip",4),o(),c(17,"app-code",5)),p&2&&(s(16),m("removable",!0),s(),m("code",l.code))},dependencies:[d,f,g],encapsulation:2});let n=e;return n})();var F=(()=>{let e=class e{constructor(){this.code={basic:'<p-chip label="Apple" icon="pi pi-apple"></p-chip>',html:`
<div class="card flex align-items-center gap-2 flex-wrap">
    <p-chip label="Apple" icon="pi pi-apple"></p-chip>
    <p-chip label="Facebook" icon="pi pi-facebook"></p-chip>
    <p-chip label="Google" icon="pi pi-google"></p-chip>
    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true"></p-chip>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'chip-icon-demo',
    templateUrl: './chip-icon-demo.html'
})
export class ChipIconDemo {}`}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["chip-icon-demo"]],decls:12,vars:2,consts:[[1,"card","flex","align-items-center","gap-2","flex-wrap"],["label","Apple","icon","pi pi-apple"],["label","Facebook","icon","pi pi-facebook"],["label","Google","icon","pi pi-google"],["label","Microsoft","icon","pi pi-microsoft",3,"removable"],["selector","chip-icon-demo",3,"code"]],template:function(p,l){p&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A font icon next to the label can be displayed with the "),i(3,"i"),t(4,"icon"),o(),t(5," property."),o()(),i(6,"div",0),c(7,"p-chip",1)(8,"p-chip",2)(9,"p-chip",3)(10,"p-chip",4),o(),c(11,"app-code",5)),p&2&&(s(10),m("removable",!0),s(),m("code",l.code))},dependencies:[d,f,g],encapsulation:2});let n=e;return n})();var j=(()=>{let e=class e{constructor(){this.code={basic:'<p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image"></p-chip>',html:`
<div class="card flex align-items-center gap-2 flex-wrap">
    <p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image"></p-chip>
    <p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image"></p-chip>
    <p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image"></p-chip>
    <p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true"></p-chip>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'chip-image-demo',
    templateUrl: './chip-image-demo.html'
})
export class ChipImageDemo {}`}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["chip-image-demo"]],decls:12,vars:2,consts:[[1,"card","flex","align-items-center","gap-2","flex-wrap"],["label","Amy Elsner","image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","alt","Avatar image"],["label","Asiya Javayant","image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","alt","Avatar image"],["label","Onyama Limba","image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","alt","Avatar image"],["label","Xuxue Feng","image","https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png","alt","Avatar image",3,"removable"],["selector","chip-image-demo",3,"code"]],template:function(p,l){p&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"image"),o(),t(5," property is used to display an image like an avatar."),o()(),i(6,"div",0),c(7,"p-chip",1)(8,"p-chip",2)(9,"p-chip",3)(10,"p-chip",4),o(),c(11,"app-code",5)),p&2&&(s(10),m("removable",!0),s(),m("code",l.code))},dependencies:[d,f,g],encapsulation:2});let n=e;return n})();var k=(()=>{let e=class e{constructor(){this.code={typescript:"import { ChipModule } from 'primeng/chip';"}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(p,l){p&1&&c(0,"app-code",0),p&2&&m("code",l.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2});let n=e;return n})();var R=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["style-doc"]],decls:29,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(p,l){p&1&&(i(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t(5,"Name"),o(),i(6,"th"),t(7,"Element"),o()()(),i(8,"tbody")(9,"tr")(10,"td"),t(11,"p-chip"),o(),i(12,"td"),t(13,"Container element."),o()(),i(14,"tr")(15,"td"),t(16,"p-chip-image"),o(),i(17,"td"),t(18,"Container element in image mode."),o()(),i(19,"tr")(20,"td"),t(21,"p-chip-text"),o(),i(22,"td"),t(23,"Text of the chip."),o()(),i(24,"tr")(25,"td"),t(26,"pi-chip-remove-icon"),o(),i(27,"td"),t(28,"Remove icon."),o()()()()())},encapsulation:2});let n=e;return n})();var N=(()=>{let e=class e{constructor(){this.code={basic:`<p-chip styleClass="pl-0 pr-3">
    <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
    <span class="ml-2 font-medium">PRIME</span>
</p-chip>`,html:`<div class="card flex align-items-center">
    <p-chip styleClass="pl-0 pr-3">
            <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
    </p-chip>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'chip-template-demo',
    templateUrl: './chip-template-demo.html'
})
export class ChipTemplateDemo {}`}}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["chip-template-demo"]],decls:10,vars:1,consts:[[1,"card","flex","align-items-center"],["styleClass","pl-0 pr-3"],[1,"bg-primary","border-circle","w-2rem","h-2rem","flex","align-items-center","justify-content-center"],[1,"ml-2","font-medium"],["selector","chip-template-demo",3,"code"]],template:function(p,l){p&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Content can easily be customized with the dynamic content instead of using the built-in modes."),o()(),i(3,"div",0)(4,"p-chip",1)(5,"span",2),t(6,"P"),o(),i(7,"span",3),t(8,"PRIME"),o()()(),c(9,"app-code",4)),p&2&&(s(9),m("code",l.code))},dependencies:[d,f,g],encapsulation:2});let n=e;return n})();var P=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({imports:[v,b,M,S,A,S]});let n=e;return n})();var O=()=>["Chip"],B=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:k},{id:"basic",label:"Basic",component:I},{id:"icon",label:"Icon",component:F},{id:"image",label:"Image",component:j},{id:"custom",label:"Custom Content",component:N},{id:"style",label:"Style",component:R},{id:"accessibility",label:"Accessibility",component:T}]}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=r({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Chip Component","header","Chip","description","Chip represents entities using icons, labels and images.",3,"docs","apiDocs"]],template:function(p,l){p&1&&c(0,"app-doc",0),p&2&&m("docs",l.docs)("apiDocs",D(2,O))},dependencies:[w],styles:["[_nghost-%COMP%]     .p-chip.custom-chip{background:var(--primary-color);color:var(--primary-color-text)}"]});let n=e;return n})();var U=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({imports:[b.forChild([{path:"",component:B}]),b]});let n=e;return n})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({imports:[v,U,P]});let n=e;return n})();export{Ie as ChipDemoModule};
