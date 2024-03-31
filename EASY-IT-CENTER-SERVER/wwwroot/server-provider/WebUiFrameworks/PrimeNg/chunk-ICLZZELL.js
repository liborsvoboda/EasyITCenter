import{a as g,b as N}from"./chunk-A5TA6W7J.js";import{a as E,c as B}from"./chunk-CJAHOBZA.js";import{a as d,b as G,c as M}from"./chunk-AS5FXEGH.js";import{a as f,b as U}from"./chunk-X2ZDE2AM.js";import{p as j,s as L}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as z,t as A}from"./chunk-N5X6XDRN.js";import{Ab as T,Bb as w,Cc as k,Ic as I,Jb as t,Nc as D,Sa as l,Sb as v,V as x,da as p,ea as b,kb as m,nb as y,ob as F,rb as r,sb as a,tb as s}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var se=["*"],P=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["p-avatarGroup"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style"},ngContentSelectors:se,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(i,c){i&1&&(T(),r(0,"div",0),w(1),a()),i&2&&(F(c.styleClass),m("ngClass","p-avatar-group p-component")("ngStyle",c.style))},dependencies:[k,I],styles:[`@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}
`],encapsulation:2,changeDetection:0});let o=e;return o})(),V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[D]});let o=e;return o})();var le=()=>({"background-color":"#9c27b0",color:"#ffffff"}),R=(()=>{let e=class e{constructor(){this.code={basic:`<p-avatarGroup styleClass="mb-3">
    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>
    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>
</p-avatarGroup>`,html:`
<div class="card justify-content-center">
    <p-avatarGroup styleClass="mb-3">
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle"></p-avatar>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle"></p-avatar>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle"></p-avatar>
        <p-avatar label="+2" shape="circle" size="large" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }"></p-avatar>
    </p-avatarGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-group-demo',
    templateUrl: './avatar-group-demo.html'
})
export class AvatarGroupDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-group-demo"]],decls:15,vars:4,consts:[[1,"card","justify-content-center"],["styleClass","mb-3"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png","size","large","shape","circle"],["label","+2","shape","circle","size","large"],["selector","avatar-group-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"Grouping is available by wrapping multiple Avatar components inside an "),r(3,"i"),t(4,"AvatarGroup"),a(),t(5,"."),a()(),r(6,"div",0)(7,"p-avatarGroup",1),s(8,"p-avatar",2)(9,"p-avatar",3)(10,"p-avatar",4)(11,"p-avatar",5)(12,"p-avatar",6)(13,"p-avatar",7),a()(),s(14,"app-code",8)),i&2&&(l(13),y(v(3,le)),l(),m("code",c.code))},dependencies:[f,d,g,P],encapsulation:2});let o=e;return o})();var q=()=>({"background-color":"#2196F3",color:"#ffffff"}),K=()=>({"background-color":"#9c27b0",color:"#ffffff"}),J=(()=>{let e=class e{constructor(){this.code={basic:'<p-avatar icon="pi pi-user" styleClass="mr-2" size="xlarge"></p-avatar>',html:`
<div class="grid card grid-nogutter">
    <div class="col-12 md:col-4">
    <h5>Icon</h5>
        <p-avatar icon="pi pi-user" styleClass="mr-2"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{'background-color':'#2196F3', 'color': '#ffffff'}"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{'background-color': '#9c27b0', 'color': '#ffffff'}"></p-avatar>
    </div>
    <div class="col-12 md:col-4">
    <h5>Icon - Circle</h5>
        <p-avatar icon="pi pi-user" styleClass="mr-2" shape="circle"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{'background-color':'#2196F3', 'color': '#ffffff'}" shape="circle"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{'background-color': '#9c27b0', 'color': '#ffffff'}" shape="circle"></p-avatar>
    </div>
    <div class="col-12 md:col-4">
        <h5>Icon - Badge</h5>
        <p-avatar icon="pi pi-user" pBadge value="4" severity="success" styleClass="mr-2" size="large"></p-avatar>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-icon-demo',
    templateUrl: './avatar-icon-demo.html'
})
export class AvatarIconDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-icon-demo"]],decls:24,vars:13,consts:[[1,"grid","card","grid-nogutter"],[1,"col-12","md:col-4"],["icon","pi pi-user","styleClass","mr-2","size","xlarge"],["icon","pi pi-user","styleClass","mr-2","size","large"],["icon","pi pi-user","styleClass","mr-2"],["icon","pi pi-user","styleClass","mr-2","size","xlarge","shape","circle"],["icon","pi pi-user","styleClass","mr-2","size","large","shape","circle"],["icon","pi pi-user","styleClass","mr-2","shape","circle"],["icon","pi pi-user","pBadge","","value","4","severity","success","styleClass","mr-2","size","large"],["selector","avatar-icon-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"A font icon is displayed as an Avatar with the "),r(3,"i"),t(4,"icon"),a(),t(5," property."),a()(),r(6,"div",0)(7,"div",1)(8,"h5"),t(9,"Icon"),a(),s(10,"p-avatar",2)(11,"p-avatar",3)(12,"p-avatar",4),a(),r(13,"div",1)(14,"h5"),t(15,"Icon - Circle"),a(),s(16,"p-avatar",5)(17,"p-avatar",6)(18,"p-avatar",7),a(),r(19,"div",1)(20,"h5"),t(21,"Icon - Badge"),a(),s(22,"p-avatar",8),a()(),s(23,"app-code",9)),i&2&&(l(11),y(v(9,q)),l(),y(v(10,K)),l(5),y(v(11,q)),l(),y(v(12,K)),l(5),m("code",c.code))},dependencies:[f,d,g,E],encapsulation:2});let o=e;return o})();var O=(()=>{let e=class e{constructor(){this.code={basic:'<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>',html:`
<div class="card">
    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" styleClass="mr-2" size="large" shape="circle"></p-avatar>
    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" styleClass="mr-2" shape="circle"></p-avatar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-image-demo',
    templateUrl: './avatar-image-demo.html'
})
export class AvatarImageDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-image-demo"]],decls:11,vars:1,consts:[[1,"card"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","styleClass","mr-2","size","xlarge","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","styleClass","mr-2","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","styleClass","mr-2","shape","circle"],["selector","avatar-image-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"Use the "),r(3,"i"),t(4,"image"),a(),t(5," property to display an image as an Avatar."),a()(),r(6,"div",0),s(7,"p-avatar",1)(8,"p-avatar",2)(9,"p-avatar",3),a(),s(10,"app-code",4)),i&2&&(l(10),m("code",c.code))},dependencies:[f,d,g],encapsulation:2});let o=e;return o})();var Q=(()=>{let e=class e{constructor(){this.code={html:`import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,c){i&1&&s(0,"app-code",0),i&2&&m("code",c.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let o=e;return o})();var W=()=>({"background-color":"#2196F3",color:"#ffffff"}),X=()=>({"background-color":"#9c27b0",color:"#ffffff"}),ce=()=>({"background-color":"#4caf4f",color:"#ffffff"}),Y=(()=>{let e=class e{constructor(){this.code={basic:`<div class="col-12 md:col-4">
    <h5>Label</h5>
    <p-avatar label="P" styleClass="mr-2" size="xlarge"></p-avatar>
    <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }"></p-avatar>
    <p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }"></p-avatar>
</div>
<div class="col-12 md:col-4">
    <h5>Label - Circle</h5>
    <p-avatar label="P" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
    <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }" shape="circle"></p-avatar>
    <p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" shape="circle"></p-avatar>
</div>
<div class="col-12 md:col-4">
    <h5>Label - Badge</h5>
    <p-avatar label="U" pBadge styleClass="mr-5" value="4" size="large" [style]="{ 'background-color': '#4caf4f', color: '#ffffff' }"></p-avatar>
</div>`,html:`
<div class="card grid grid-nogutter">
    <div class="col-12 md:col-4">
        <h5>Label</h5>
        <p-avatar label="P" styleClass="mr-2" size="xlarge"></p-avatar>
        <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }"></p-avatar>
        <p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }"></p-avatar>
    </div>
    <div class="col-12 md:col-4">
        <h5>Label - Circle</h5>
        <p-avatar label="P" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
        <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }" shape="circle"></p-avatar>
        <p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" shape="circle"></p-avatar>
    </div>
    <div class="col-12 md:col-4">
        <h5>Label - Badge</h5>
        <p-avatar label="U" pBadge styleClass="mr-5" value="4" size="large" [style]="{ 'background-color': '#4caf4f', color: '#ffffff' }"></p-avatar>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-label-demo',
    templateUrl: './avatar-label-demo.html'
})
export class AvatarLabelDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-label-demo"]],decls:24,vars:16,consts:[[1,"card","grid","grid-nogutter"],[1,"col-12","md:col-4"],["label","P","styleClass","mr-2","size","xlarge"],["label","V","styleClass","mr-2","size","large"],["label","U","styleClass","mr-2"],["label","P","styleClass","mr-2","size","xlarge","shape","circle"],["label","V","styleClass","mr-2","size","large","shape","circle"],["label","U","styleClass","mr-2","shape","circle"],["label","U","pBadge","","styleClass","mr-5","value","4","size","large"],["selector","avatar-label-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"A letter Avatar is defined with the "),r(3,"i"),t(4,"label"),a(),t(5," property."),a()(),r(6,"div",0)(7,"div",1)(8,"h5"),t(9,"Label"),a(),s(10,"p-avatar",2)(11,"p-avatar",3)(12,"p-avatar",4),a(),r(13,"div",1)(14,"h5"),t(15,"Label - Circle"),a(),s(16,"p-avatar",5)(17,"p-avatar",6)(18,"p-avatar",7),a(),r(19,"div",1)(20,"h5"),t(21,"Label - Badge"),a(),s(22,"p-avatar",8),a()(),s(23,"app-code",9)),i&2&&(l(11),y(v(11,W)),l(),y(v(12,X)),l(5),y(v(13,W)),l(),y(v(14,X)),l(4),y(v(15,ce)),l(),m("code",c.code))},dependencies:[f,d,g,E],encapsulation:2});let o=e;return o})();var Z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatarstyle-doc"]],decls:50,vars:0,consts:[["routerLink","/theming"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),r(3,"a",0),t(4," theming"),a(),t(5," page."),a()(),r(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),a(),r(12,"th"),t(13,"Element"),a()()(),r(14,"tbody")(15,"tr")(16,"td"),t(17,"p-avatar"),a(),r(18,"td"),t(19,"Container element."),a()(),r(20,"tr")(21,"td"),t(22,"p-avatar-image"),a(),r(23,"td"),t(24,"Container element in image mode."),a()(),r(25,"tr")(26,"td"),t(27,"p-avatar-circle"),a(),r(28,"td"),t(29,"Container element with a circle shape."),a()(),r(30,"tr")(31,"td"),t(32,"p-avatar-text"),a(),r(33,"td"),t(34,"Text of the Avatar."),a()(),r(35,"tr")(36,"td"),t(37,"p-avatar-icon"),a(),r(38,"td"),t(39,"Icon of the Avatar."),a()(),r(40,"tr")(41,"td"),t(42,"p-avatar-lg"),a(),r(43,"td"),t(44,"Container element with a large size."),a()(),r(45,"tr")(46,"td"),t(47,"p-avatar-xl"),a(),r(48,"td"),t(49,"Container element with an xlarge size."),a()()()()())},dependencies:[z,d],encapsulation:2});let o=e;return o})();var $=(()=>{let e=class e{constructor(){this.code={basic:`<p-avatar label="P" shape="circle"></p-avatar>
<p-avatar label="T"></p-avatar>`,html:`
<div class="card flex justify-content-center gap-2">
    <p-avatar label="P" shape="circle"></p-avatar>
    <p-avatar label="T"></p-avatar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-shape-demo',
    templateUrl: './avatar-shape-demo.html'
})
export class AvatarShapeDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-shape-demo"]],decls:16,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["label","P","shape","circle"],["label","T"],["selector","avatar-shape-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"Avatar comes in two different styles specified with the "),r(3,"i"),t(4,"shape"),a(),t(5," property, "),r(6,"i"),t(7,"square"),a(),t(8," is the default and "),r(9,"i"),t(10,"circle"),a(),t(11," is the alternative."),a()(),r(12,"div",0),s(13,"p-avatar",1)(14,"p-avatar",2),a(),s(15,"app-code",3)),i&2&&(l(15),m("code",c.code))},dependencies:[f,d,g],encapsulation:2});let o=e;return o})();var _=(()=>{let e=class e{constructor(){this.code={basic:`<p-avatar label="P" size="large"></p-avatar>
<p-avatar label="T" size="xlarge"></p-avatar>`,html:`
<div class="card flex justify-content-center gap-2">
    <p-avatar label="P" size="large"></p-avatar>
    <p-avatar label="T" size="xlarge"></p-avatar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-size-demo',
    templateUrl: './avatar-size-demo.html'
})
export class AvatarSizeDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-size-demo"]],decls:15,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["label","P","size","large"],["label","T","size","xlarge"],["selector","avatar-size-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"size"),a(),t(4," property defines the size of the Avatar with "),r(5,"i"),t(6,"large"),a(),t(7," and "),r(8,"i"),t(9,"xlarge"),a(),t(10," as possible values."),a()(),r(11,"div",0),s(12,"p-avatar",1)(13,"p-avatar",2),a(),s(14,"app-code",3)),i&2&&(l(14),m("code",c.code))},dependencies:[f,d,g],encapsulation:2});let o=e;return o})();var de=()=>["/badge"],ee=(()=>{let e=class e{constructor(){this.code={basic:'<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>',html:`
<div class="card flex justify-content-center">
    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" pBadge value="4" severity="danger"></p-avatar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-badge-demo',
    templateUrl: './avatar-badge-demo.html'
})
export class AvatarBadgeDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-badge-demo"]],decls:12,vars:3,consts:[["href","#",3,"routerLink"],[1,"card","flex","justify-content-center"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","pBadge","","value","4","severity","danger"],["selector","avatar-badge-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"A "),r(3,"i"),t(4,"badge"),a(),t(5," can be added to an Avatar with the "),r(6,"a",0),t(7,"Badge"),a(),t(8," directive."),a()(),r(9,"div",1),s(10,"p-avatar",2),a(),s(11,"app-code",3)),i&2&&(l(6),m("routerLink",v(2,de)),l(5),m("code",c.code))},dependencies:[z,f,d,g,E],encapsulation:2});let o=e;return o})();var te=(()=>{let e=class e{constructor(){this.code={basic:`<p-avatar size="xlarge">
    <span class="text-base">Content</span>
</p-avatar>`,html:`
<div class="card flex justify-content-center">
    <p-avatar size="xlarge">
        <span class="text-base">Content</span>
    </p-avatar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-template-demo',
    templateUrl: './avatar-template-demo.html'
})
export class AvatarTemplateDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatar-template-demo"]],decls:8,vars:1,consts:[[1,"card","flex","justify-content-center"],["size","xlarge"],[1,"text-base"],["selector","avatar-template-demo",3,"code"]],template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"p"),t(2,"Content can easily be customized with the dynamic content instead of using the built-in modes."),a()(),r(3,"div",0)(4,"p-avatar",1)(5,"span",2),t(6,"Content"),a()()(),s(7,"app-code",3)),i&2&&(l(7),m("code",c.code))},dependencies:[f,d,g],encapsulation:2});let o=e;return o})();var ae=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["avatarstyle-doc"]],decls:14,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,c){i&1&&(r(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t(5,"Name"),a(),r(6,"th"),t(7,"Element"),a()()(),r(8,"tbody")(9,"tr")(10,"td"),t(11,"p-avatar-group"),a(),r(12,"td"),t(13,"Container element."),a()()()()())},encapsulation:2});let o=e;return o})();var ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],decls:21,vars:0,template:function(i,c){i&1&&(r(0,"app-docsectiontext")(1,"h3"),t(2,"Screen Reader"),a(),r(3,"p"),t(4," Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like "),r(5,"i"),t(6,"img"),a(),t(7," along with "),r(8,"i"),t(9,"aria-labelledby"),a(),t(10," or "),r(11,"i"),t(12,"aria-label"),a(),t(13," to describe the component. In case avatars need to be tabbable, "),r(14,"i"),t(15,"tabIndex"),a(),t(16," can be added as well to implement custom key handlers. "),a(),r(17,"h3"),t(18,"Keyboard Support"),a(),r(19,"p"),t(20,"Component does not include any interactive elements."),a()())},dependencies:[d],encapsulation:2});let o=e;return o})();var re=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[D,A,U,L,j,M,N,V,B,M]});let o=e;return o})();var fe=()=>["Avatar","AvatarGroup"],oe=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Q},{id:"label",label:"Label",component:Y},{id:"icon",label:"Icon",component:J},{id:"image",label:"Image",component:O},{id:"size",label:"Sizes",component:_},{id:"avatargroup",label:"AvatarGroup",component:R},{id:"shape",label:"Shape",component:$},{id:"badge",label:"Badge",component:ee},{id:"templating",label:"Custom Content",component:te},{id:"stylingofavatar",label:"Styling of Avatar",component:Z},{id:"stylingofavatargroup",label:"Styling of AvatarGroup",component:ae},{id:"accessibility",label:"Accessibility",component:ie}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Avatar Component","header","Avatar","description","Avatar represents people using icons, labels and images.",3,"docs","apiDocs"]],template:function(i,c){i&1&&s(0,"app-doc",0),i&2&&m("docs",c.docs)("apiDocs",v(2,fe))},dependencies:[G],encapsulation:2});let o=e;return o})();var ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[A.forChild([{path:"",component:oe}]),A]});let o=e;return o})();var It=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[D,ne,re]});let o=e;return o})();export{It as AvatarDemoModule};
