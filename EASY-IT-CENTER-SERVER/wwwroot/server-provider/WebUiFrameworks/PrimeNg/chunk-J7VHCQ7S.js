import{a as w,b as P,c as y}from"./chunk-AS5FXEGH.js";import{a as b,b as F}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{a as p}from"./chunk-UWMVDULA.js";import{t as x}from"./chunk-N5X6XDRN.js";import{Jb as s,Nc as v,Pc as g,Sa as j,Sb as D,Ta as h,V as m,Ya as M,da as d,ea as c,fa as A,kb as u,mb as I,rb as o,sb as r,tb as a,ua as C,vc as T,za as E}from"./chunk-ZJD4PHQZ.js";import{a as S,b as O}from"./chunk-P2VZOJAX.js";var N=(()=>{let e=class e{constructor(){this.code={typescript:"import { AnimateOnScrollModule } from 'primeng/animateonscroll';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,l){i&1&&a(0,"app-code",0),i&2&&u("code",l.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2});let t=e;return t})();var R=(()=>{let e=class e{constructor(n,i,l,U,V){this.document=n,this.platformId=i,this.host=l,this.el=U,this.renderer=V,this.once=!0,this.isObserverActive=!1}ngOnInit(){g(this.platformId)&&this.renderer.setStyle(this.host.nativeElement,"opacity",this.enterClass?"0":"")}ngAfterViewInit(){g(this.platformId)&&this.bindIntersectionObserver()}get options(){return{root:this.root,rootMargin:this.rootMargin,threshold:this.threshold}}bindIntersectionObserver(){this.observer=new IntersectionObserver(([n])=>{this.isObserverActive?n.boundingClientRect.top>0&&(n.isIntersecting?this.enter():this.leave()):n.isIntersecting&&this.enter(),this.isObserverActive=!0},this.options),setTimeout(()=>this.observer.observe(this.host.nativeElement),0),this.resetObserver=new IntersectionObserver(([n])=>{n.boundingClientRect.top>0&&!n.isIntersecting&&(this.host.nativeElement.style.opacity=this.enterClass?"0":"",p.removeMultipleClasses(this.host.nativeElement,[this.enterClass,this.leaveClass]),this.resetObserver.unobserve(this.host.nativeElement)),this.animationState=void 0},O(S({},this.options),{threshold:0}))}enter(){this.animationState!=="enter"&&this.enterClass&&(this.host.nativeElement.style.opacity="",p.removeMultipleClasses(this.host.nativeElement,this.leaveClass),p.addMultipleClasses(this.host.nativeElement,this.enterClass),this.once&&this.unbindIntersectionObserver(),this.bindAnimationEvents(),this.animationState="enter")}leave(){this.animationState!=="leave"&&this.leaveClass&&(this.host.nativeElement.style.opacity=this.enterClass?"0":"",p.removeMultipleClasses(this.host.nativeElement,this.enterClass),p.addMultipleClasses(this.host.nativeElement,this.leaveClass),this.bindAnimationEvents(),this.animationState="leave")}bindAnimationEvents(){this.animationEndListener||(this.animationEndListener=this.renderer.listen(this.host.nativeElement,"animationend",()=>{p.removeMultipleClasses(this.host.nativeElement,[this.enterClass,this.leaveClass]),!this.once&&this.resetObserver.observe(this.host.nativeElement),this.unbindAnimationEvents()}))}unbindAnimationEvents(){this.animationEndListener&&(this.animationEndListener(),this.animationEndListener=null)}unbindIntersectionObserver(){this.observer?.unobserve(this.host.nativeElement),this.resetObserver?.unobserve(this.host.nativeElement),this.isObserverActive=!1}ngOnDestroy(){this.unbindAnimationEvents(),this.unbindIntersectionObserver()}};e.\u0275fac=function(i){return new(i||e)(h(T),h(E),h(C),h(C),h(M))},e.\u0275dir=A({type:e,selectors:[["","pAnimateOnScroll",""]],hostVars:2,hostBindings:function(i,l){i&2&&I("p-animateonscroll",!0)},inputs:{enterClass:"enterClass",leaveClass:"leaveClass",root:"root",rootMargin:"rootMargin",threshold:"threshold",once:"once"}});let t=e;return t})(),z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=m({imports:[v]});let t=e;return t})();var B=(()=>{let e=class e{constructor(){this.code={basic:`<div class="flex flex-column align-items-center gap-2">
    <span class="text-xl font-medium">Scroll Down</span>
    <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
        <i class="pi pi-arrow-down"></i>
    </span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="fadein" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
    <span class="text-3xl font-bold">fade-in</span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="fadeinleft" leaveClass="fadeoutleft" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">fade-left</span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="fadeinright" leaveClass="fadeoutright" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">fade-right</span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="zoomin" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
    <span class="text-3xl font-bold">zoom</span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="flipleft" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">flip-left</span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="flipup" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">flip-y</span>
</div>
<div class="h-30rem"></div>
<div pAnimateOnScroll enterClass="scalein" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">scalein</span>
</div>`,html:`
<div class="card flex flex-column align-items-center overflow-hidden">
    <div class="flex flex-column align-items-center gap-2">
        <span class="text-xl font-medium">Scroll Down</span>
        <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
            <i class="pi pi-arrow-down"></i>
        </span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="fadein" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
        <span class="text-3xl font-bold">fade-in</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="fadeinleft" leaveClass="fadeoutleft" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">fade-left</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="fadeinright" leaveClass="fadeoutright" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">fade-right</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="zoomin" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
        <span class="text-3xl font-bold">zoom</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="flipleft" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">flip-left</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="flipup" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">flip-y</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimateOnScroll enterClass="scalein" leaveClass="fadeout" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">scalein</span>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'animate-on-scroll-basic-demo',
    templateUrl: './animate-on-scroll-basic-demo.html',
    styles: [
        \`
            :host {
                @keyframes slidedown-icon {
                    0% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(20px);
                    }

                    100% {
                        transform: translateY(0);
                    }
                }

                .slidedown-icon {
                    animation: slidedown-icon;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }

                .box {
                    background-image: radial-gradient(var(--primary-300), var(--primary-600));
                    border-radius: 50% !important;
                    color: var(--primary-color-text);
                }
            }
        \`
    ]
})
export class AnimateOnScrollBasicDemo {}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:44,vars:1,consts:[[1,"card","flex","flex-column","align-items-center","overflow-hidden"],[1,"flex","flex-column","align-items-center","gap-2"],[1,"text-xl","font-medium"],[1,"slidedown-icon","h-2rem","w-2rem","bg-primary","border-circle","inline-flex","align-items-center","justify-content-center"],[1,"pi","pi-arrow-down"],[1,"h-30rem"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000"],[1,"text-3xl","font-bold"],["pAnimateOnScroll","","enterClass","fadeinleft","leaveClass","fadeoutleft",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","fadeinright","leaveClass","fadeoutright",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","zoomin","leaveClass","fadeout",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000"],["pAnimateOnScroll","","enterClass","flipleft","leaveClass","fadeout",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","flipup","leaveClass","fadeout",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000","animation-ease-in-out"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeout",1,"flex","box","shadow-4","justify-content-center","align-items-center","h-10rem","w-10rem","sm:h-15rem","sm:w-15rem","border-round","animation-duration-1000","animation-ease-in-out"],["selector","animate-on-scroll-basic-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),s(2,"Animation classes are defined with the "),o(3,"i"),s(4,"enterClass"),r(),s(5," and "),o(6,"i"),s(7,"leaveClass"),r(),s(8," properties. This example utilizes PrimeFlex animations however any valid CSS animation is supported."),r()(),o(9,"div",0)(10,"div",1)(11,"span",2),s(12,"Scroll Down"),r(),o(13,"span",3),a(14,"i",4),r()(),a(15,"div",5),o(16,"div",6)(17,"span",7),s(18,"fade-in"),r()(),a(19,"div",5),o(20,"div",8)(21,"span",7),s(22,"fade-left"),r()(),a(23,"div",5),o(24,"div",9)(25,"span",7),s(26,"fade-right"),r()(),a(27,"div",5),o(28,"div",10)(29,"span",7),s(30,"zoom"),r()(),a(31,"div",5),o(32,"div",11)(33,"span",7),s(34,"flip-left"),r()(),a(35,"div",5),o(36,"div",12)(37,"span",7),s(38,"flip-y"),r()(),a(39,"div",5),o(40,"div",13)(41,"span",7),s(42,"scalein"),r()()(),a(43,"app-code",14)),i&2&&(j(43),u("code",l.code))},dependencies:[b,w,R],styles:["@keyframes _ngcontent-%COMP%_slidedown-icon{0%{transform:translateY(0)}50%{transform:translateY(20px)}to{transform:translateY(0)}}[_nghost-%COMP%]   .slidedown-icon[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slidedown-icon;animation-duration:3s;animation-iteration-count:infinite}[_nghost-%COMP%]   .box[_ngcontent-%COMP%]{background-image:radial-gradient(var(--primary-300),var(--primary-600));border-radius:50%!important;color:var(--primary-color-text)}"]});let t=e;return t})();var L=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:10,vars:0,template:function(i,l){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),r(),o(4,"p"),s(5,"AnimateOnScroll does not require any roles and attributes."),r(),o(6,"h3"),s(7,"Keyboard Support"),r(),o(8,"p"),s(9,"Component does not include any interactive elements."),r()()())},dependencies:[w],encapsulation:2});let t=e;return t})();var Y=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=m({imports:[v,x,F,y,z,y]});let t=e;return t})();var J=()=>["AnimateOnScroll"],k=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:B},{id:"accessibility",label:"Accessibility",component:L}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Animate On Scroll Directive","header","AnimateOnScroll","description","AnimateOnScroll AnimateOnScroll is used to apply animations to elements when entering or leaving the viewport during scrolling.",3,"docs","apiDocs"]],template:function(i,l){i&1&&a(0,"app-doc",0),i&2&&u("docs",l.docs)("apiDocs",D(2,J))},dependencies:[P],encapsulation:2});let t=e;return t})();var H=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=m({imports:[x.forChild([{path:"",component:k}]),x]});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=m({imports:[v,H,Y]});let t=e;return t})();export{Fe as AnimateOnScrollDemoModule};
