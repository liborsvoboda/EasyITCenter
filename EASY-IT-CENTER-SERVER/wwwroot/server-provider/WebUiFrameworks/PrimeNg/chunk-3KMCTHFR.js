import{c as He,d as $,f as ee,h as te}from"./chunk-XSSXK7EZ.js";import{a as y,b as Be,c as ie}from"./chunk-AS5FXEGH.js";import{a as x,b as Te}from"./chunk-X2ZDE2AM.js";import{a as ve,e as D,f as be,g as Ce,h as ye,i as V,j as xe,m as ke,n as Se,p as we,q as Me}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{a as N,b as Ee,i as K,l as De,n as Pe,s as J}from"./chunk-UWMVDULA.js";import{o as _e,t as A}from"./chunk-N5X6XDRN.js";import{Cc as ue,Fb as I,Fc as he,Gb as L,Hb as R,Ic as fe,Jb as l,Kb as X,Nb as M,Nc as F,Ob as _,Pb as E,Pc as ge,Qb as de,Sa as d,Sb as z,T as oe,Ta as B,Tb as q,Ub as Q,V as H,Ya as le,da as u,ea as T,ib as se,jb as w,kb as m,kc as pe,lb as ce,ma as g,na as v,ob as ae,rb as r,sb as n,tb as h,ua as re,va as U,vc as me,xb as Y,yb as O,za as ne,zb as f}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ze=["container"],Qe=["input"],Ke=["colorSelector"],Ze=["colorHandle"],Ye=["hue"],qe=["hueHandle"],Je=(s,i)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":s,"p-colorpicker-dragging":i}),$e=s=>({"p-disabled":s}),et=(s,i)=>({"p-colorpicker-panel":!0,"p-colorpicker-overlay-panel":s,"p-disabled":i}),tt=(s,i)=>({showTransitionParams:s,hideTransitionParams:i}),it=s=>({value:"visible",params:s});function ot(s,i){if(s&1){let p=Y();r(0,"input",9,1),O("click",function(){g(p);let t=f();return v(t.onInputClick())})("keydown",function(t){g(p);let o=f();return v(o.onInputKeydown(t))})("focus",function(){g(p);let t=f();return v(t.onInputFocus())}),n()}if(s&2){let p=f();ce("background-color",p.inputBgColor),m("ngClass",q(8,$e,p.disabled))("disabled",p.disabled),w("tabindex",p.tabindex)("id",p.inputId)("data-pc-section","input")("aria-label",p.ariaLabel)}}function rt(s,i){if(s&1){let p=Y();r(0,"div",10),O("click",function(t){g(p);let o=f();return v(o.onOverlayClick(t))})("@overlayAnimation.start",function(t){g(p);let o=f();return v(o.onOverlayAnimationStart(t))})("@overlayAnimation.done",function(t){g(p);let o=f();return v(o.onOverlayAnimationEnd(t))}),r(1,"div",11)(2,"div",12,2),O("touchstart",function(t){g(p);let o=f();return v(o.onColorDragStart(t))})("touchmove",function(t){g(p);let o=f();return v(o.onDrag(t))})("touchend",function(){g(p);let t=f();return v(t.onDragEnd())})("mousedown",function(t){g(p);let o=f();return v(o.onColorMousedown(t))}),r(4,"div",13),h(5,"div",14,3),n()(),r(7,"div",15,4),O("mousedown",function(t){g(p);let o=f();return v(o.onHueMousedown(t))})("touchstart",function(t){g(p);let o=f();return v(o.onHueDragStart(t))})("touchmove",function(t){g(p);let o=f();return v(o.onDrag(t))})("touchend",function(){g(p);let t=f();return v(t.onDragEnd())}),h(9,"div",16,5),n()()()}if(s&2){let p=f();m("ngClass",Q(10,et,!p.inline,p.disabled))("@overlayAnimation",q(16,it,Q(13,tt,p.showTransitionOptions,p.hideTransitionOptions)))("@.disabled",p.inline===!0),w("data-pc-section","panel"),d(),w("data-pc-section","content"),d(),w("data-pc-section","selector"),d(2),w("data-pc-section","color"),d(),w("data-pc-section","colorHandle"),d(2),w("data-pc-section","hue"),d(2),w("data-pc-section","hueHandle")}}var nt={provide:ve,useExisting:oe(()=>S),multi:!0},S=(()=>{let i=class i{constructor(e,t,o,a,c,b,C){this.document=e,this.platformId=t,this.el=o,this.renderer=a,this.cd=c,this.config=b,this.overlayService=C,this.format="hex",this.autoZIndex=!0,this.baseZIndex=0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onChange=new U,this.onShow=new U,this.onHide=new U,this.value={h:0,s:100,b:100},this.defaultColor="ff0000",this.onModelChange=()=>{},this.onModelTouched=()=>{},this.window=this.document.defaultView}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(J.ARIA)[J.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,t){let o=t?t.pageY:e.pageY,a=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,o-a)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,t){let o=t?t.pageX:e.pageX,a=t?t.pageY:e.pageY,c=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),b=c.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),C=c.left+this.document.body.scrollLeft,P=Math.floor(100*Math.max(0,Math.min(150,o-C))/150),Xe=Math.floor(100*(150-Math.max(0,Math.min(150,a-b)))/150);this.value=this.validateHSB({h:this.value.h,s:P,b:Xe}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate())}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&K.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&K.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):N.appendChild(this.overlay,this.appendTo))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?N.absolutePosition(this.overlay,this.inputViewChild?.nativeElement):N.relativePosition(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",t=>{this.colorDragging&&this.pickColor(t),this.hueDragging&&this.pickHue(t)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){ge(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!N.isTouchDevice()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ee(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var t=6-e.length;if(t>0){for(var o=[],a=0;a<t;a++)o.push("0");o.push(e),e=o.join("")}return e}HEXtoRGB(e){let t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var t={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),a=Math.max(e.r,e.g,e.b),c=a-o;return t.b=a,t.s=a!=0?255*c/a:0,t.s!=0?e.r==a?t.h=(e.g-e.b)/c:e.g==a?t.h=2+(e.b-e.r)/c:t.h=4+(e.r-e.g)/c:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}HSBtoRGB(e){var t={r:0,g:0,b:0};let o=e.h,a=e.s*255/100,c=e.b*255/100;if(a==0)t={r:c,g:c,b:c};else{let b=c,C=(255-a)*c/255,P=(b-C)*(o%60)/60;o==360&&(o=0),o<60?(t.r=b,t.b=C,t.g=C+P):o<120?(t.g=b,t.b=C,t.r=b-P):o<180?(t.g=b,t.r=C,t.b=C+P):o<240?(t.b=b,t.r=C,t.g=b-P):o<300?(t.b=b,t.g=C,t.r=C+P):o<360?(t.r=b,t.g=C,t.b=b-P):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}RGBtoHEX(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var o in t)t[o].length==1&&(t[o]="0"+t[o]);return t.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&K.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}};i.\u0275fac=function(t){return new(t||i)(B(me),B(ne),B(re),B(le),B(pe),B(Pe),B(De))},i.\u0275cmp=u({type:i,selectors:[["p-colorPicker"]],viewQuery:function(t,o){if(t&1&&(I(ze,5),I(Qe,5),I(Ke,5),I(Ze,5),I(Ye,5),I(qe,5)),t&2){let a;L(a=R())&&(o.containerViewChild=a.first),L(a=R())&&(o.inputViewChild=a.first),L(a=R())&&(o.colorSelector=a.first),L(a=R())&&(o.colorHandle=a.first),L(a=R())&&(o.hue=a.first),L(a=R())&&(o.hueHandle=a.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",inline:"inline",format:"format",appendTo:"appendTo",disabled:"disabled",tabindex:"tabindex",inputId:"inputId",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[de([nt])],decls:4,vars:11,consts:[["container",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],[3,"ngStyle","ngClass"],["type","text","class","p-colorpicker-preview p-inputtext","readonly","readonly",3,"ngClass","disabled","backgroundColor","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview","p-inputtext",3,"click","keydown","focus","ngClass","disabled"],[3,"click","ngClass"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],[1,"p-colorpicker-color"],[1,"p-colorpicker-color-handle"],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],[1,"p-colorpicker-hue-handle"]],template:function(t,o){t&1&&(r(0,"div",6,0),se(2,ot,2,10,"input",7)(3,rt,11,18,"div",8),n()),t&2&&(ae(o.styleClass),m("ngStyle",o.style)("ngClass",Q(8,Je,!o.inline,o.colorDragging||o.hueDragging)),w("data-pc-name","colorpicker")("data-pc-section","root"),d(2),m("ngIf",!o.inline),d(),m("ngIf",o.inline||o.overlayVisible))},dependencies:[ue,he,fe],styles:[`@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}
`],encapsulation:2,data:{animation:[He("overlayAnimation",[te(":enter",[ee({opacity:0,transform:"scaleY(0.8)"}),$("{{showTransitionParams}}")]),te(":leave",[$("{{hideTransitionParams}}",ee({opacity:0}))])])]},changeDetection:0});let s=i;return s})(),Ve=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=T({type:i}),i.\u0275inj=H({imports:[F]});let s=i;return s})();var Ie=(()=>{let i=class i{constructor(){this.code={typescript:"import { ColorPickerModule } from 'primeng/colorpicker';"}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&h(0,"app-code",0),t&2&&m("code",o.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2});let s=i;return s})();var Le=(()=>{let i=class i{constructor(){this.code={basic:'<p-colorPicker [(ngModel)]="color"></p-colorPicker>',html:`
<div class="card flex justify-content-center">
    <p-colorPicker [(ngModel)]="color"></p-colorPicker>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'color-picker-basic-demo',
    templateUrl: './color-picker-basic-demo.html'
})
export class ColorPickerBasicDemo {
    color: string | undefined;
}`}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["color-picker-basic-demo"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","color-picker-basic-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker is used as a controlled input with "),r(3,"i"),l(4,"ngModel"),n(),l(5," property."),n()(),r(6,"div",0)(7,"p-colorPicker",1),E("ngModelChange",function(c){return _(o.color,c)||(o.color=c),c}),n()(),h(8,"app-code",2)),t&2&&(d(7),M("ngModel",o.color),d(),m("code",o.code))},dependencies:[x,y,D,V,S],encapsulation:2});let s=i;return s})();var Re=(()=>{let i=class i{constructor(){this.code={basic:'<p-colorPicker [(ngModel)]="color1" [inline]="true"></p-colorPicker>',html:`
<div class="card flex justify-content-center">
    <p-colorPicker [(ngModel)]="color" [inline]="true"></p-colorPicker>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'color-picker-inline-demo',
    templateUrl: './color-picker-inline-demo.html'
})
export class ColorPickerInlineDemo {
    color: string | undefined;
}`}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["color-picker-inline-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","inline"],["selector","color-picker-inline-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker is displayed as a popup by default, add "),r(3,"i"),l(4,"inline"),n(),l(5," property to customize this behavior."),n()(),r(6,"div",0)(7,"p-colorPicker",1),E("ngModelChange",function(c){return _(o.color,c)||(o.color=c),c}),n()(),h(8,"app-code",2)),t&2&&(d(7),M("ngModel",o.color),m("inline",!0),d(),m("code",o.code))},dependencies:[x,y,D,V,S],encapsulation:2});let s=i;return s})();var Fe=(()=>{let i=class i{constructor(){this.color="#6466f1",this.colorRGB={r:100,g:102,b:241},this.colorHSB={h:239,s:59,b:95},this.code={basic:`<p-colorPicker [(ngModel)]="color"></p-colorPicker>
<p-colorPicker [(ngModel)]="colorRGB" format="rgb"></p-colorPicker>
<p-colorPicker [(ngModel)]="colorHSB" format="hsb"></p-colorPicker>`,html:`
<div class="card flex flex-wrap gap-3">
    <div class="flex-1 flex flex-column align-items-center gap-3">
        <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
        <p-colorPicker [(ngModel)]="color"></p-colorPicker>
        <span>{{ color }}</span>
    </div>
    <div class="flex-1 flex flex-column align-items-center gap-3">
        <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
        <p-colorPicker [(ngModel)]="colorRGB" format="rgb"></p-colorPicker>
        <span>{{ 'r:' + colorRGB.r + ' g:' + colorRGB.g + ' b:' + colorRGB.b }}</span>
    </div>
    <div class="flex-1 flex flex-column align-items-center gap-3">
        <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
        <p-colorPicker [(ngModel)]="colorHSB" format="hsb"></p-colorPicker>
        <span>{{ 'h:' + colorHSB.h + ' s:' + colorHSB.s + ' b:' + colorHSB.b }}</span>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'color-picker-format-demo',
    templateUrl: './color-picker-format-demo.html'
})
export class ColorPickerFormatDemo {
    color: string = '#6466f1';

    colorRGB: any = { r: 100, g: 102, b: 241 };

    colorHSB: any = { h: 239, s: 59, b: 95 };
}`}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["color-picker-format-demo"]],decls:35,vars:7,consts:[[1,"card","flex","flex-wrap","gap-3"],[1,"flex-1","flex","flex-column","align-items-center","gap-3"],["for","cp-hex",1,"font-bold","block","mb-2"],[3,"ngModelChange","ngModel"],["for","cp-rgb",1,"font-bold","block","mb-2"],["format","rgb",3,"ngModelChange","ngModel"],["for","cp-hsb",1,"font-bold","block","mb-2"],["format","hsb",3,"ngModelChange","ngModel"],["selector","color-picker-format-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"Default color format to use in value binding is "),r(3,"i"),l(4,"hex"),n(),l(5," and other possible values can be "),r(6,"i"),l(7,"rgb"),n(),l(8," and "),r(9,"i"),l(10,"hsb"),n(),l(11," using the "),r(12,"i"),l(13,"format"),n(),l(14," property."),n()(),r(15,"div",0)(16,"div",1)(17,"label",2),l(18," HEX "),n(),r(19,"p-colorPicker",3),E("ngModelChange",function(c){return _(o.color,c)||(o.color=c),c}),n(),r(20,"span"),l(21),n()(),r(22,"div",1)(23,"label",4),l(24," RGB "),n(),r(25,"p-colorPicker",5),E("ngModelChange",function(c){return _(o.colorRGB,c)||(o.colorRGB=c),c}),n(),r(26,"span"),l(27),n()(),r(28,"div",1)(29,"label",6),l(30," HSB "),n(),r(31,"p-colorPicker",7),E("ngModelChange",function(c){return _(o.colorHSB,c)||(o.colorHSB=c),c}),n(),r(32,"span"),l(33),n()()(),h(34,"app-code",8)),t&2&&(d(19),M("ngModel",o.color),d(2),X(o.color),d(4),M("ngModel",o.colorRGB),d(2),X("r:"+o.colorRGB.r+" g:"+o.colorRGB.g+" b:"+o.colorRGB.b),d(4),M("ngModel",o.colorHSB),d(2),X("h:"+o.colorHSB.h+" s:"+o.colorHSB.s+" b:"+o.colorHSB.b),d(),m("code",o.code))},dependencies:[x,y,D,V,S],encapsulation:2});let s=i;return s})();var Ge=(()=>{let i=class i{constructor(){this.code={basic:'<p-colorPicker [(ngModel)]="color" [disabled]="true"></p-colorPicker>',html:`
<div class="card flex justify-content-center">
    <p-colorPicker [(ngModel)]="color" [disabled]="true"></p-colorPicker>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'color-picker-disabled-demo',
    templateUrl: './color-picker-disabled-demo.html'
})
export class ColorPickerDisabledDemo {
    color: string | undefined;
}`}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["color-picker-disabled-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","disabled"],["selector","color-picker-disabled-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"When "),r(3,"i"),l(4,"disabled"),n(),l(5," is present, the element cannot be edited and focused."),n()(),r(6,"div",0)(7,"p-colorPicker",1),E("ngModelChange",function(c){return _(o.color,c)||(o.color=c),c}),n()(),h(8,"app-code",2)),t&2&&(d(7),M("ngModel",o.color),m("disabled",!0),d(),m("code",o.code))},dependencies:[x,y,D,V,S],encapsulation:2});let s=i;return s})();var lt=()=>["/theming"],Oe=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["style-doc"]],decls:65,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"Following is the list of structural style classes, for theming classes visit "),r(3,"a",0),l(4,"theming"),n(),l(5," page."),n()(),r(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),l(11,"Name"),n(),r(12,"th"),l(13,"Element"),n()()(),r(14,"tbody")(15,"tr")(16,"td"),l(17,"p-colorpicker"),n(),r(18,"td"),l(19,"Container element."),n()(),r(20,"tr")(21,"td"),l(22,"p-colorpicker-overlay"),n(),r(23,"td"),l(24,"Container element in overlay mode."),n()(),r(25,"tr")(26,"td"),l(27,"p-colorpicker-preview"),n(),r(28,"td"),l(29,"Preview input in overlay mode."),n()(),r(30,"tr")(31,"td"),l(32,"p-colorpicker-panel"),n(),r(33,"td"),l(34,"Panel element of the colorpicker."),n()(),r(35,"tr")(36,"td"),l(37,"p-colorpicker-content"),n(),r(38,"td"),l(39,"Wrapper that contains color and hue sections."),n()(),r(40,"tr")(41,"td"),l(42,"p-colorpicker-color-selector"),n(),r(43,"td"),l(44,"Color selector container."),n()(),r(45,"tr")(46,"td"),l(47,"p-colorpicker-color"),n(),r(48,"td"),l(49,"Color element."),n()(),r(50,"tr")(51,"td"),l(52,"p-colorpicker-color-handle"),n(),r(53,"td"),l(54,"Handle of the color element."),n()(),r(55,"tr")(56,"td"),l(57,"p-colorpicker-hue"),n(),r(58,"td"),l(59,"Hue slider."),n()(),r(60,"tr")(61,"td"),l(62,"p-colorpicker-hue-handle"),n(),r(63,"td"),l(64,"Handle of the hue slider."),n()()()()()),t&2&&(d(3),m("routerLink",z(1,lt)))},dependencies:[_e,y],encapsulation:2});let s=i;return s})();var Ae=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["accessibility-doc"]],decls:98,vars:0,consts:[["href","https://github.com/w3c/aria/issues/930"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-column"],[1,"mb-1"]],template:function(t,o){t&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),n(),r(4,"p"),l(5," Specification does not cover a color picker "),r(6,"a",0),l(7,"yet"),n(),l(8," and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats. "),n()(),r(9,"h3"),l(10,"Closed State Keyboard Support of Popup ColorPicker"),n(),r(11,"div",1)(12,"table",2)(13,"thead")(14,"tr")(15,"th"),l(16,"Key"),n(),r(17,"th"),l(18,"Function"),n()()(),r(19,"tbody")(20,"tr")(21,"td")(22,"i"),l(23,"tab"),n()(),r(24,"td"),l(25,"Moves focus to the color picker button."),n()(),r(26,"tr")(27,"td")(28,"i"),l(29,"space"),n()(),r(30,"td"),l(31,"Opens the popup and moves focus to the color slider."),n()()()()(),r(32,"h3"),l(33,"Popup Keyboard Support"),n(),r(34,"div",1)(35,"table",2)(36,"thead")(37,"tr")(38,"th"),l(39,"Key"),n(),r(40,"th"),l(41,"Function"),n()()(),r(42,"tbody")(43,"tr")(44,"td")(45,"i"),l(46,"enter"),n()(),r(47,"td"),l(48,"Selects the color and closes the popup."),n()(),r(49,"tr")(50,"td")(51,"i"),l(52,"space"),n()(),r(53,"td"),l(54,"Selects the color and closes the popup."),n()(),r(55,"tr")(56,"td")(57,"i"),l(58,"escape"),n()(),r(59,"td"),l(60,"Closes the popup, moves focus to the input."),n()()()()(),r(61,"h3"),l(62,"Color Picker Slider"),n(),r(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),l(68,"Key"),n(),r(69,"th"),l(70,"Function"),n()()(),r(71,"tbody")(72,"tr")(73,"td")(74,"i"),l(75,"arrow keys"),n()(),r(76,"td"),l(77,"Changes color."),n()()()()(),r(78,"h3"),l(79,"Hue Slider"),n(),r(80,"div",1)(81,"table",2)(82,"thead")(83,"tr")(84,"th"),l(85,"Key"),n(),r(86,"th"),l(87,"Function"),n()()(),r(88,"tbody")(89,"tr")(90,"td")(91,"span",3)(92,"i",4),l(93,"up arrow"),n(),r(94,"i"),l(95,"down arrow"),n()()(),r(96,"td"),l(97,"Changes hue."),n()()()()()())},dependencies:[y],encapsulation:2});let s=i;return s})();var Ne=(()=>{let i=class i{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-colorPicker formControlName="color"></p-colorPicker>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-colorPicker formControlName="color"></p-colorPicker>
    </form>
</div>`,typescript:`
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'color-picker-reactive-forms-demo',
    templateUrl: './color-picker-reactive-forms-demo.html'
})
export class ColorPickerReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            color: new FormControl()
        });
    }
}`}}ngOnInit(){this.formGroup=new Ce({color:new ye})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","color"],["selector","color-picker-reactive-forms-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker can also be used with reactive forms. In this case, the "),r(3,"i"),l(4,"formControlName"),n(),l(5," property is used to bind the component to a form control."),n()(),r(6,"div",0)(7,"form",1),h(8,"p-colorPicker",2),n()(),h(9,"app-code",3)),t&2&&(d(7),m("formGroup",o.formGroup),d(2),m("code",o.code))},dependencies:[x,y,xe,D,be,ke,Se,S],encapsulation:2});let s=i;return s})();var je=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=T({type:i}),i.\u0275inj=H({imports:[F,A,Te,ie,we,Me,Ve,ie]});let s=i;return s})();var st=()=>["ColorPicker"],We=(()=>{let i=class i{constructor(){this.docs=[{id:"import",label:"Import",component:Ie},{id:"basic",label:"Basic",component:Le},{id:"reactive-forms",label:"Reactive Forms",component:Ne},{id:"inline",label:"Inline",component:Re},{id:"format",label:"Format",component:Fe},{id:"disabled",label:"Disabled",component:Ge},{id:"style",label:"Style",component:Oe},{id:"accessibility",label:"Accessibility",component:Ae}]}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ColorPicker Component","header","ColorPicker","description","ColorPicker is an input component to select a color.",3,"docs","apiDocs"]],template:function(t,o){t&1&&h(0,"app-doc",0),t&2&&m("docs",o.docs)("apiDocs",z(2,st))},dependencies:[Be],encapsulation:2});let s=i;return s})();var Ue=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=T({type:i}),i.\u0275inj=H({imports:[A.forChild([{path:"",component:We}]),A]});let s=i;return s})();var Mi=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=T({type:i}),i.\u0275inj=H({imports:[F,Ue,je]});let s=i;return s})();export{Mi as ColorPickerDemoModule};
