import{a as V}from"./chunk-NZVHRD6T.js";import{a as E,b as je}from"./chunk-H6W5JTHG.js";import{a as Ne}from"./chunk-K5J3KJF5.js";import{a as Fe}from"./chunk-5W5PG5VT.js";import{a as ke}from"./chunk-CZYOEPZS.js";import{a as Ae}from"./chunk-DP75TYTQ.js";import{a as y,b as Ke,c as ce}from"./chunk-AS5FXEGH.js";import{a as _,b as Me}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as Pe,a as N,h as Te,n as we,o as Oe,p as Ee,q as C,r as ae,w as Ve,x as De,z as O}from"./chunk-UWMVDULA.js";import{o as Ie,t as X}from"./chunk-N5X6XDRN.js";import{Ab as ge,Bb as oe,Cb as w,Cc as ye,Eb as ee,Ec as be,Fb as se,Fc as xe,Gb as B,Hb as W,Ic as Ce,Jb as r,Jc as _e,Kb as S,Na as T,Nc as L,Pc as q,Sa as p,Sb as te,Ta as g,Tb as M,Ub as fe,V as A,Vb as ie,Ya as he,_a as ve,da as f,ea as j,ib as u,jb as k,kb as l,kc as x,la as pe,ma as P,na as F,ob as Q,rb as o,sb as s,tb as d,ua as de,ub as ne,va as me,vb as re,vc as Se,wb as U,xb as $,yb as K,za as ue,zb as h}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Le=(()=>{let n=class n{constructor(){this.code={typescript:"import { CarouselModule } from 'primeng/carousel';"}}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,a){t&1&&d(0,"app-code",0),t&2&&l("code",a.code)("hideToggleCode",!0)},dependencies:[_],encapsulation:2});let i=n;return i})();var et=["itemsContainer"],tt=["indicatorContent"],it=[[["p-header"]],[["p-footer"]]],nt=["p-header","p-footer"],rt=(i,n)=>({"p-carousel p-component":!0,"p-carousel-vertical":i,"p-carousel-horizontal":n}),ot=i=>({height:i}),st=i=>({"p-carousel-prev p-link":!0,"p-disabled":i}),Re=(i,n,c)=>({"p-carousel-item p-carousel-item-cloned":!0,"p-carousel-item-active":i,"p-carousel-item-start":n,"p-carousel-item-end":c}),le=i=>({$implicit:i}),at=(i,n,c)=>({"p-carousel-item":!0,"p-carousel-item-active":i,"p-carousel-item-start":n,"p-carousel-item-end":c}),ct=i=>({"p-carousel-next p-link":!0,"p-disabled":i}),lt=i=>({"p-carousel-indicator":!0,"p-highlight":i});function pt(i,n){i&1&&U(0)}function dt(i,n){if(i&1&&(o(0,"div",12),oe(1),u(2,pt,1,0,"ng-container",13),s()),i&2){let c=h();p(2),l("ngTemplateOutlet",c.headerTemplate)}}function mt(i,n){i&1&&d(0,"ChevronLeftIcon",18),i&2&&l("styleClass","carousel-prev-icon")}function ut(i,n){i&1&&d(0,"ChevronUpIcon",18),i&2&&l("styleClass","carousel-prev-icon")}function ht(i,n){if(i&1&&(ne(0),u(1,mt,1,1,"ChevronLeftIcon",17)(2,ut,1,1,"ChevronUpIcon",17),re()),i&2){let c=h(2);p(),l("ngIf",!c.isVertical()),p(),l("ngIf",c.isVertical())}}function vt(i,n){}function gt(i,n){i&1&&u(0,vt,0,0,"ng-template")}function ft(i,n){if(i&1&&(o(0,"span",19),u(1,gt,1,0,null,13),s()),i&2){let c=h(2);p(),l("ngTemplateOutlet",c.previousIconTemplate)}}function St(i,n){if(i&1){let c=$();o(0,"button",14),K("click",function(t){P(c);let a=h();return F(a.navBackward(t))}),u(1,ht,3,2,"ng-container",15)(2,ft,2,1,"span",16),s()}if(i&2){let c=h();l("ngClass",M(5,st,c.isBackwardNavDisabled()))("disabled",c.isBackwardNavDisabled()),k("aria-label",c.ariaPrevButtonLabel()),p(),l("ngIf",!c.previousIconTemplate),p(),l("ngIf",c.previousIconTemplate)}}function yt(i,n){i&1&&U(0)}function bt(i,n){if(i&1&&(o(0,"div",4),u(1,yt,1,0,"ng-container",20),s()),i&2){let c=n.$implicit,e=n.index,t=h();l("ngClass",ie(6,Re,t.totalShiftedItems*-1===t.value.length,e===0,t.clonedItemsForStarting.length-1===e)),k("aria-hidden",t.totalShiftedItems*-1!==t.value.length)("aria-label",t.ariaSlideNumber(e))("aria-roledescription",t.ariaSlideLabel()),p(),l("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",M(10,le,c))}}function xt(i,n){i&1&&U(0)}function Ct(i,n){if(i&1&&(o(0,"div",4),u(1,xt,1,0,"ng-container",20),s()),i&2){let c=n.$implicit,e=n.index,t=h();l("ngClass",ie(6,at,t.firstIndex()<=e&&t.lastIndex()>=e,t.firstIndex()===e,t.lastIndex()===e)),k("aria-hidden",t.totalShiftedItems*-1!==t.value.length)("aria-label",t.ariaSlideNumber(e))("aria-roledescription",t.ariaSlideLabel()),p(),l("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",M(10,le,c))}}function _t(i,n){i&1&&U(0)}function It(i,n){if(i&1&&(o(0,"div",4),u(1,_t,1,0,"ng-container",20),s()),i&2){let c=n.$implicit,e=n.index,t=h();l("ngClass",ie(3,Re,t.totalShiftedItems*-1===t.numVisible,e===0,t.clonedItemsForFinishing.length-1===e)),p(),l("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",M(7,le,c))}}function Tt(i,n){i&1&&d(0,"ChevronRightIcon",18),i&2&&l("styleClass","carousel-prev-icon")}function wt(i,n){i&1&&d(0,"ChevronDownIcon",18),i&2&&l("styleClass","carousel-prev-icon")}function Ot(i,n){if(i&1&&(ne(0),u(1,Tt,1,1,"ChevronRightIcon",17)(2,wt,1,1,"ChevronDownIcon",17),re()),i&2){let c=h(2);p(),l("ngIf",!c.isVertical()),p(),l("ngIf",c.isVertical())}}function Et(i,n){}function Vt(i,n){i&1&&u(0,Et,0,0,"ng-template")}function Dt(i,n){if(i&1&&(o(0,"span",19),u(1,Vt,1,0,null,13),s()),i&2){let c=h(2);p(),l("ngTemplateOutlet",c.nextIconTemplate)}}function Pt(i,n){if(i&1){let c=$();o(0,"button",14),K("click",function(t){P(c);let a=h();return F(a.navForward(t))}),u(1,Ot,3,2,"ng-container",15)(2,Dt,2,1,"span",16),s()}if(i&2){let c=h();l("ngClass",M(5,ct,c.isForwardNavDisabled()))("disabled",c.isForwardNavDisabled()),k("aria-label",c.ariaNextButtonLabel()),p(),l("ngIf",!c.nextIconTemplate),p(),l("ngIf",c.nextIconTemplate)}}function Ft(i,n){if(i&1){let c=$();o(0,"li",4)(1,"button",22),K("click",function(t){let a=P(c).index,m=h(2);return F(m.onDotClick(t,a))}),s()()}if(i&2){let c=n.index,e=h(2);l("ngClass",M(9,lt,e._page===c)),k("data-pc-section","indicator"),p(),Q(e.indicatorStyleClass),l("ngClass","p-link")("ngStyle",e.indicatorStyle)("tabindex",e._page===c?0:-1),k("aria-label",e.ariaPageLabel(c+1))("aria-current",e._page===c?"page":void 0)}}function kt(i,n){if(i&1){let c=$();o(0,"ul",21,1),K("keydown",function(t){P(c);let a=h();return F(a.onIndicatorKeydown(t))}),u(2,Ft,2,11,"li",9),s()}if(i&2){let c=h();Q(c.indicatorsContentClass),l("ngClass","p-carousel-indicators p-reset")("ngStyle",c.indicatorsContentStyle),p(2),l("ngForOf",c.totalDotsArray())}}function Nt(i,n){i&1&&U(0)}function At(i,n){if(i&1&&(o(0,"div",23),oe(1,1),u(2,Nt,1,0,"ng-container",13),s()),i&2){let c=h();p(2),l("ngTemplateOutlet",c.footerTemplate)}}var D=(()=>{let n=class n{get page(){return this._page}set page(e){this.isCreated&&e!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),e>this._page&&e<=this.totalDots()-1?this.step(-1,e):e<this._page&&this.step(1,e)),this._page=e}get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e}get numScroll(){return this._numVisible}set numScroll(e){this._numScroll=e}get value(){return this._value}set value(e){this._value=e}constructor(e,t,a,m,v,b,Je){this.el=e,this.zone=t,this.cd=a,this.renderer=m,this.document=v,this.platformId=b,this.config=Je,this.orientation="horizontal",this.verticalViewPortHeight="300px",this.contentClass="",this.indicatorsContentClass="",this.indicatorStyleClass="",this.circular=!1,this.showIndicators=!0,this.showNavigators=!0,this.autoplayInterval=0,this.onPage=new me,this._numVisible=1,this._numScroll=1,this._oldNumScroll=0,this.prevState={numScroll:0,numVisible:0,value:[]},this.defaultNumScroll=1,this.defaultNumVisible=1,this._page=0,this.isRemainingItemsAdded=!1,this.remainingItems=0,this.swipeThreshold=20,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}ngOnChanges(e){q(this.platformId)&&(e.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(e.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),e.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}ngAfterContentInit(){this.id=Te(),q(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"previousicon":this.previousIconTemplate=e.template;break;case"nexticon":this.nextIconTemplate=e.template;break;default:this.itemTemplate=e.template;break}}),this.cd.detectChanges()}ngAfterContentChecked(){if(q(this.platformId)){let e=this.isCircular(),t=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let a=this._page;this.totalDots()!==0&&a>=this.totalDots()&&(a=this.totalDots()-1,this._page=a,this.onPage.emit({page:this.page})),t=a*this._numScroll*-1,e&&(t-=this._numVisible),a===this.totalDots()-1&&this.remainingItems>0?(t+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${t*(100/this._numVisible)}%, 0)`:`translate3d(${t*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}e&&(this.page===0?t=-1*this._numVisible:t===0&&(t=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),t!==this.totalShiftedItems&&(this.totalShiftedItems=t))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",this.renderer.appendChild(this.document.head,this.carouselStyle));let e=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions){this.responsiveOptions.sort((t,a)=>{let m=t.breakpoint,v=a.breakpoint,b=null;return m==null&&v!=null?b=-1:m!=null&&v==null?b=1:m==null&&v==null?b=0:typeof m=="string"&&typeof v=="string"?b=m.localeCompare(v,void 0,{numeric:!0}):b=m<v?-1:m>v?1:0,-1*b});for(let t=0;t<this.responsiveOptions.length;t++){let a=this.responsiveOptions[t];e+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/a.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=e}calculatePosition(){if(this.responsiveOptions){let e={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let t=window.innerWidth;for(let a=0;a<this.responsiveOptions.length;a++){let m=this.responsiveOptions[a];parseInt(m.breakpoint,10)>=t&&(e=m)}}if(this._numScroll!==e.numScroll){let t=this._page;t=Math.floor(t*this._numScroll/e.numScroll);let a=e.numScroll*this.page*-1;this.isCircular()&&(a-=e.numVisible),this.totalShiftedItems=a,this._numScroll=e.numScroll,this._page=t,this.onPage.emit({page:this.page})}this._numVisible!==e.numVisible&&(this._numVisible=e.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let e=this.totalDots();return e<=0?[]:Array(e).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(e,t){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,t),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}navBackward(e,t){(this.isCircular()||this._page!==0)&&this.step(1,t),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}onDotClick(e,t){let a=this._page;this.autoplayInterval&&this.stopAutoplay(),t>a?this.navForward(e,t):t<a&&this.navBackward(e,t)}onIndicatorKeydown(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let e=[...N.find(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=[...N.find(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]r')],t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)}onTabKey(){let e=[...N.find(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],t=e.findIndex(v=>N.getAttribute(v,"data-p-highlight")===!0),a=N.findSingle(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),m=e.findIndex(v=>v===a.parentElement);e[m].children[0].tabIndex="-1",e[t].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...N.find(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],t=N.findSingle(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(a=>a===t.parentElement)}changedFocusedIndicator(e,t){let a=[...N.find(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')];a[e].children[0].tabIndex="-1",a[t].children[0].tabIndex="0",a[t].children[0].focus()}step(e,t){let a=this.totalShiftedItems,m=this.isCircular();if(t!=null)a=this._numScroll*t*-1,m&&(a-=this._numVisible),this.isRemainingItemsAdded=!1;else{a+=this._numScroll*e,this.isRemainingItemsAdded&&(a+=this.remainingItems-this._numScroll*e,this.isRemainingItemsAdded=!1);let v=m?a+this._numVisible:a;t=Math.abs(Math.floor(v/this._numScroll))}m&&this.page===this.totalDots()-1&&e===-1?(a=-1*(this.value.length+this._numVisible),t=0):m&&this.page===0&&e===1?(a=0,t=this.totalDots()-1):t===this.totalDots()-1&&this.remainingItems>0&&(a+=this.remainingItems*-1-this._numScroll*e,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${a*(100/this._numVisible)}%, 0)`:`translate3d(${a*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a,this._page=t,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(e=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,e&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(e){let t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchEnd(e){let t=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)}changePageOnTouch(e,t){Math.abs(t)>this.swipeThreshold&&(t<0?this.navForward(e):this.navBackward(e))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria.nextPageLabel:void 0}ariaSlideNumber(e){return this.config.translation.aria?this.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}bindDocumentListeners(){q(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",e=>{this.calculatePosition()})))}unbindDocumentListeners(){q(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}};n.\u0275fac=function(t){return new(t||n)(g(de),g(ve),g(x),g(he),g(Se),g(ue),g(we))},n.\u0275cmp=f({type:n,selectors:[["p-carousel"]],contentQueries:function(t,a,m){if(t&1&&(ee(m,Oe,5),ee(m,Ee,5),ee(m,C,4)),t&2){let v;B(v=W())&&(a.headerFacet=v.first),B(v=W())&&(a.footerFacet=v.first),B(v=W())&&(a.templates=v)}},viewQuery:function(t,a){if(t&1&&(se(et,5),se(tt,5)),t&2){let m;B(m=W())&&(a.itemsContainer=m.first),B(m=W())&&(a.indicatorContent=m.first)}},hostAttrs:[1,"p-element"],inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:"circular",showIndicators:"showIndicators",showNavigators:"showNavigators",autoplayInterval:"autoplayInterval",style:"style",styleClass:"styleClass"},outputs:{onPage:"onPage"},features:[pe],ngContentSelectors:nt,decls:14,vars:23,consts:[["itemsContainer",""],["indicatorContent",""],["role","region",3,"ngClass","ngStyle"],["class","p-carousel-header",4,"ngIf"],[3,"ngClass"],[1,"p-carousel-container"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-carousel-items-content",3,"touchend","touchstart","touchmove","ngStyle"],[1,"p-carousel-items-container",3,"transitionend"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass","class","ngStyle","keydown",4,"ngIf"],["class","p-carousel-footer",4,"ngIf"],[1,"p-carousel-header"],[4,"ngTemplateOutlet"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],["class","p-carousel-prev-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-carousel-prev-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"keydown","ngClass","ngStyle"],["type","button",3,"click","ngClass","ngStyle","tabindex"],[1,"p-carousel-footer"]],template:function(t,a){if(t&1){let m=$();ge(it),o(0,"div",2),u(1,dt,3,1,"div",3),o(2,"div",4)(3,"div",5),u(4,St,3,7,"button",6),o(5,"div",7),K("touchend",function(b){return P(m),F(a.onTouchEnd(b))})("touchstart",function(b){return P(m),F(a.onTouchStart(b))})("touchmove",function(b){return P(m),F(a.onTouchMove(b))}),o(6,"div",8,0),K("transitionend",function(){return P(m),F(a.onTransitionEnd())}),u(8,bt,2,12,"div",9)(9,Ct,2,12,"div",9)(10,It,2,9,"div",9),s()(),u(11,Pt,3,7,"button",6),s(),u(12,kt,3,5,"ul",10),s(),u(13,At,3,1,"div",11),s()}t&2&&(Q(a.styleClass),l("ngClass",fe(18,rt,a.isVertical(),!a.isVertical()))("ngStyle",a.style),k("id",a.id),p(),l("ngIf",a.headerFacet||a.headerTemplate),p(),Q(a.contentClass),l("ngClass","p-carousel-content"),p(),k("aria-live",a.allowAutoplay?"polite":"off"),p(),l("ngIf",a.showNavigators),p(),l("ngStyle",M(21,ot,a.isVertical()?a.verticalViewPortHeight:"auto")),p(3),l("ngForOf",a.clonedItemsForStarting),p(),l("ngForOf",a.value),p(),l("ngForOf",a.clonedItemsForFinishing),p(),l("ngIf",a.showNavigators),p(),l("ngIf",a.showIndicators),p(),l("ngIf",a.footerFacet||a.footerTemplate))},dependencies:[ye,be,xe,_e,Ce,Ve,ke,Fe,Ae,Ne],styles:[`@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}
`],encapsulation:2,changeDetection:0});let i=n;return i})(),Ue=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=j({type:n}),n.\u0275inj=A({imports:[L,ae,De,L,ae]});let i=n;return i})();function jt(i,n){if(i&1&&(o(0,"div",4)(1,"div",5),d(2,"img",6),s(),o(3,"div")(4,"h4",7),r(5),s(),o(6,"h6",8),r(7),s(),d(8,"p-tag",9),o(9,"div",10),d(10,"p-button",11)(11,"p-button",12),s()()()),i&2){let c=n.$implicit,e=h();p(2),w("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",T),l("alt",c.name),p(3),S(c.name),p(2),S("$"+c.price),p(),l("value",c.inventoryStatus)("severity",e.getSeverity(c.inventoryStatus)),p(2),l("rounded",!0),p(),l("rounded",!0)}}var $e=(()=>{let n=class n{constructor(e,t){this.productService=e,this.cdr=t,this.code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
    <ng-template let-product pTemplate="item">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ product.name }}</h4>
                <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
        <ng-template let-product pTemplate="item">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div class="mb-3">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
                </div>
                <div>
                    <h4 class="mb-1">{{ product.name }}</h4>
                    <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                    <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'carousel-basic-demo',
    templateUrl: './carousel-basic-demo.html',
    styleUrls: ['./carousel-basic-demo.scss']
})
export class CarouselBasicDemo implements OnInit {
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"991px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1}]}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};n.\u0275fac=function(t){return new(t||n)(g(V),g(x))},n.\u0275cmp=f({type:n,selectors:[["carousel-basic-demo"]],decls:7,vars:7,consts:[[1,"card"],[3,"value","numVisible","numScroll","circular","responsiveOptions"],["pTemplate","item"],["selector","carousel-basic-demo",3,"code","extFiles"],[1,"border-1","surface-border","border-round","m-2","text-center","py-5","px-3"],[1,"mb-3"],[1,"w-6","shadow-2",3,"src","alt"],[1,"mb-1"],[1,"mt-0","mb-3"],[3,"value","severity"],[1,"mt-5","flex","align-items-center","justify-content-center","gap-2"],["icon","pi pi-search",3,"rounded"],["icon","pi pi-star-fill","severity","secondary",3,"rounded"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Carousel requires a collection of items as its value along with a template to render each item."),s()(),o(3,"div",0)(4,"p-carousel",1),u(5,jt,12,9,"ng-template",2),s()(),d(6,"app-code",3)),t&2&&(p(4),l("value",a.products)("numVisible",3)("numScroll",3)("circular",!1)("responsiveOptions",a.responsiveOptions),p(2),l("code",a.code)("extFiles",a.extFiles))},dependencies:[_,y,D,C,O,E],encapsulation:2});let i=n;return i})();var Mt=()=>["/theming"],Be=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["style-doc"]],decls:60,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),r(4,"theming"),s(),r(5," page."),s()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),r(11,"Name"),s(),o(12,"th"),r(13,"Element"),s()()(),o(14,"tbody")(15,"tr")(16,"td"),r(17,"p-carousel"),s(),o(18,"td"),r(19,"Container element."),s()(),o(20,"tr")(21,"td"),r(22,"p-carousel-header"),s(),o(23,"td"),r(24,"Header section."),s()(),o(25,"tr")(26,"td"),r(27,"p-carousel-footer"),s(),o(28,"td"),r(29,"Footer section."),s()(),o(30,"tr")(31,"td"),r(32,"p-carousel-content"),s(),o(33,"td"),r(34,"Main content element. It contains the container of the viewport."),s()(),o(35,"tr")(36,"td"),r(37,"p-carousel-container"),s(),o(38,"td"),r(39,"Container of the viewport. It contains navigation buttons and viewport."),s()(),o(40,"tr")(41,"td"),r(42,"p-carousel-items-content"),s(),o(43,"td"),r(44,"Viewport."),s()(),o(45,"tr")(46,"td"),r(47,"p-carousel-dots-container"),s(),o(48,"td"),r(49,"Container of the paginator."),s()(),o(50,"tr")(51,"td"),r(52,"p-carousel-dot-item"),s(),o(53,"td"),r(54,"Paginator element."),s()(),o(55,"tr")(56,"td"),r(57,"p-carousel-dot-icon"),s(),o(58,"td"),r(59,"Paginator element icon."),s()()()()()),t&2&&(p(3),l("routerLink",te(1,Mt)))},dependencies:[Ie,y],encapsulation:2});let i=n;return i})();function Kt(i,n){if(i&1&&(o(0,"div",4)(1,"div",5),d(2,"img",6),s(),o(3,"div")(4,"h4",7),r(5),s(),o(6,"h6",8),r(7),s(),d(8,"p-tag",9),o(9,"div",10),d(10,"p-button",11)(11,"p-button",12),s()()()),i&2){let c=n.$implicit,e=h();p(2),w("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",T),l("alt",c.name),p(3),S(c.name),p(2),S("$"+c.price),p(),l("value",c.inventoryStatus)("severity",e.getSeverity(c.inventoryStatus)),p(2),l("rounded",!0),p(),l("rounded",!0)}}var We=(()=>{let n=class n{constructor(e,t){this.productService=e,this.cdr=t,this.code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
    <ng-template let-product pTemplate="item">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ product.name }}</h4>
                <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                <div class="mt-5 flex align-items-center justify-content-center gap-2">
                <p-button icon="pi pi-search" [rounded]="true" />
                <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
            </div>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
        <ng-template let-product pTemplate="item">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div class="mb-3">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
                </div>
                <div>
                    <h4 class="mb-1">{{ product.name }}</h4>
                    <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                    <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'carousel-circular-demo',
    templateUrl: './carousel-circular-demo.html',
    styleUrls: ['./carousel-circular-demo.scss']
})
export class CarouselCircularDemo implements OnInit{
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

       this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"991px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1}]}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};n.\u0275fac=function(t){return new(t||n)(g(V),g(x))},n.\u0275cmp=f({type:n,selectors:[["carousel-circular-demo"]],decls:13,vars:7,consts:[[1,"card"],["autoplayInterval","3000",3,"value","numVisible","numScroll","circular","responsiveOptions"],["pTemplate","item"],["selector","carousel-circular-demo",3,"code","extFiles"],[1,"border-1","surface-border","border-round","m-2","text-center","py-5","px-3"],[1,"mb-3"],[1,"w-6","shadow-2",3,"src","alt"],[1,"mb-1"],[1,"mt-0","mb-3"],[3,"value","severity"],[1,"mt-5","flex","align-items-center","justify-content-center","gap-2"],["icon","pi pi-search",3,"rounded"],["icon","pi pi-star-fill","severity","secondary",3,"rounded"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"When "),o(3,"i"),r(4,"autoplayInterval"),s(),r(5," is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling "),o(6,"i"),r(7,"circular"),s(),r(8," property needs to be added which is enabled automatically in auto play mode."),s()(),o(9,"div",0)(10,"p-carousel",1),u(11,Kt,12,9,"ng-template",2),s()(),d(12,"app-code",3)),t&2&&(p(10),l("value",a.products)("numVisible",3)("numScroll",3)("circular",!0)("responsiveOptions",a.responsiveOptions),p(2),l("code",a.code)("extFiles",a.extFiles))},dependencies:[_,y,D,C,O,E],encapsulation:2});let i=n;return i})();function Lt(i,n){if(i&1&&(o(0,"div",4)(1,"div",5),d(2,"img",6),s(),o(3,"div")(4,"h4",7),r(5),s(),o(6,"h6",8),r(7),s(),d(8,"p-tag",9),o(9,"div",10),d(10,"p-button",11)(11,"p-button",12),s()()()),i&2){let c=n.$implicit,e=h();p(2),w("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",T),l("alt",c.name),p(3),S(c.name),p(2),S("$"+c.price),p(),l("value",c.inventoryStatus)("severity",e.getSeverity(c.inventoryStatus)),p(2),l("rounded",!0),p(),l("rounded",!0)}}var qe=(()=>{let n=class n{constructor(e,t){this.productService=e,this.cdr=t,this.code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
    <ng-template let-product pTemplate="item">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ product.name }}</h4>
                <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                <div class="mt-5 flex align-items-center justify-content-center gap-2">
                <p-button icon="pi pi-search" [rounded]="true" />
                <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
            </div>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
        <ng-template let-product pTemplate="item">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div class="mb-3">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
                </div>
                <div>
                    <h4 class="mb-1">{{ product.name }}</h4>
                    <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                    <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'carousel-num-scroll-demo',
    templateUrl: './carousel-num-scroll-demo.html',
    styleUrls: ['./carousel-num-scroll-demo.scss']
})
export class CarouselNumScrollDemo implements OnInit {
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
id?: string;
code?: string;
name?: string;
description?: string;
price?: number;
quantity?: number;
inventoryStatus?: string;
category?: string;
image?: string;
rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"991px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1}]}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};n.\u0275fac=function(t){return new(t||n)(g(V),g(x))},n.\u0275cmp=f({type:n,selectors:[["carousel-num-scroll-demo"]],decls:10,vars:6,consts:[[1,"card"],[3,"value","numVisible","numScroll","responsiveOptions"],["pTemplate","item"],["selector","carousel-num-scroll-demo",3,"code","extFiles"],[1,"border-1","surface-border","border-round","m-2","text-center","py-5","px-3"],[1,"mb-3"],[1,"w-6","shadow-2",3,"src","alt"],[1,"mb-1"],[1,"mt-0","mb-3"],[3,"value","severity"],[1,"mt-5","flex","align-items-center","justify-content-center","gap-2"],["icon","pi pi-search",3,"rounded"],["icon","pi pi-star-fill","severity","secondary",3,"rounded"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Number of items to scroll is specified with the "),o(3,"i"),r(4,"numScroll"),s(),r(5," option."),s()(),o(6,"div",0)(7,"p-carousel",1),u(8,Lt,12,9,"ng-template",2),s()(),d(9,"app-code",3)),t&2&&(p(7),l("value",a.products)("numVisible",3)("numScroll",1)("responsiveOptions",a.responsiveOptions),p(2),l("code",a.code)("extFiles",a.extFiles))},dependencies:[_,y,D,C,O,E],encapsulation:2});let i=n;return i})();function Rt(i,n){if(i&1&&(o(0,"div",4)(1,"div",5)(2,"div",6),d(3,"img",7),s(),o(4,"div")(5,"h4",8),r(6),s(),o(7,"h6",9),r(8),s(),d(9,"p-tag",10),o(10,"div",11),d(11,"p-button",12)(12,"p-button",13),s()()()()),i&2){let c=n.$implicit,e=h();p(3),w("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",T),l("alt",c.name),p(3),S(c.name),p(2),S("$"+c.price),p(),l("value",c.inventoryStatus)("severity",e.getSeverity(c.inventoryStatus)),p(2),l("rounded",!0),p(),l("rounded",!0)}}var ze=(()=>{let n=class n{constructor(e,t){this.productService=e,this.cdr=t,this.code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
    <ng-template let-product pTemplate="item">
        <div class="product-item">
            <div class="product-item-content">
                <div class="mb-3">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="product-image" />
                </div>
                <div>
                    <h4 class="mb-1">{{ product.name }}</h4>
                    <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                    <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
        <ng-template let-product pTemplate="item">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="mb-3">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="product-image" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ product.name }}</h4>
                        <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                        <div class="mt-5 flex align-items-center justify-content-center gap-2">
                        <p-button icon="pi pi-search" [rounded]="true" />
                        <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                    </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'carousel-responsive-demo',
    templateUrl: './carousel-responsive-demo.html',
    styleUrls: ['./carousel-responsive-demo.scss']
})
export class CarouselResponsiveDemo {
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '1220px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '1100px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1400px",numVisible:3,numScroll:3},{breakpoint:"1220px",numVisible:2,numScroll:2},{breakpoint:"1100px",numVisible:1,numScroll:1}]}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};n.\u0275fac=function(t){return new(t||n)(g(V),g(x))},n.\u0275cmp=f({type:n,selectors:[["responsive-doc"]],decls:28,vars:6,consts:[[1,"card"],[3,"value","numVisible","numScroll","responsiveOptions"],["pTemplate","item"],["selector","carousel-responsive-demo",3,"code","extFiles"],[1,"product-item"],[1,"product-item-content"],[1,"mb-3"],[1,"product-image",3,"src","alt"],[1,"mb-1"],[1,"mt-0","mb-3"],[3,"value","severity"],[1,"mt-5","flex","align-items-center","justify-content-center","gap-2"],["icon","pi pi-search",3,"rounded"],["icon","pi pi-star-fill","severity","secondary",3,"rounded"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2," Carousel supports specific configuration per screen size with the "),o(3,"i"),r(4,"responsiveOptions"),s(),r(5," property that takes an array of objects where each object defines the max-width "),o(6,"i"),r(7,"breakpoint"),s(),r(8,", "),o(9,"i"),r(10,"numVisible"),s(),r(11," for the number of items items per page and "),o(12,"i"),r(13,"numScroll"),s(),r(14," for number of items to scroll. When "),o(15,"i"),r(16,"responsiveOptions"),s(),r(17," is defined, the "),o(18,"i"),r(19,"numScroll"),s(),r(20," and "),o(21,"i"),r(22,"numVisible"),s(),r(23," properties of the Carousel are used as default when there is breakpoint that applies. "),s()(),o(24,"div",0)(25,"p-carousel",1),u(26,Rt,13,9,"ng-template",2),s()(),d(27,"app-code",3)),t&2&&(p(25),l("value",a.products)("numVisible",3)("numScroll",1)("responsiveOptions",a.responsiveOptions),p(2),l("code",a.code)("extFiles",a.extFiles))},dependencies:[_,y,D,C,O,E],encapsulation:2});let i=n;return i})();function Ut(i,n){i&1&&(o(0,"p"),r(1,"Header content"),s())}function $t(i,n){if(i&1&&(o(0,"div",6)(1,"div",7),d(2,"img",8),s(),o(3,"div")(4,"h4",9),r(5),s(),o(6,"h6",10),r(7),s(),d(8,"p-tag",11),o(9,"div",12),d(10,"p-button",13)(11,"p-button",14),s()()()),i&2){let c=n.$implicit,e=h();p(2),w("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",T),l("alt",c.name),p(3),S(c.name),p(2),S("$"+c.price),p(),l("value",c.inventoryStatus)("severity",e.getSeverity(c.inventoryStatus)),p(2),l("rounded",!0),p(),l("rounded",!0)}}function Bt(i,n){i&1&&(o(0,"p"),r(1,"Footer content"),s())}var He=(()=>{let n=class n{constructor(e,t){this.productService=e,this.cdr=t,this.code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
    <ng-template pTemplate="header">
        <p>Header content</p>
    </ng-template>
    <ng-template let-product pTemplate="item">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ product.name }}</h4>
                <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template pTemplate="footer">
        <p>Footer content</p>
    </ng-template>
</p-carousel>`,html:`<div class="card">
<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
<ng-template pTemplate="header">
    <p>Header content</p>
</ng-template>
<ng-template let-product pTemplate="item">
    <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div class="mb-3">
            <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-6 shadow-2" />
        </div>
        <div>
            <h4 class="mb-1">{{ product.name }}</h4>
            <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
            <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
            <div class="mt-5 flex align-items-center justify-content-center gap-2">
                <p-button icon="pi pi-search" [rounded]="true" />
                <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
            </div>
        </div>
    </div>
</ng-template>
<ng-template pTemplate="footer">
    <p>Footer content</p>
</ng-template>
</p-carousel>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'carousel-template-demo',
    templateUrl: './carousel-template-demo.html',
    styleUrls: ['./carousel-template-demo.scss']
})
export class CarouselTemplateDemo implements OnInit{
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"991px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1}]}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};n.\u0275fac=function(t){return new(t||n)(g(V),g(x))},n.\u0275cmp=f({type:n,selectors:[["carousel-template-demo"]],decls:15,vars:6,consts:[[1,"card"],[3,"value","numVisible","numScroll","responsiveOptions"],["pTemplate","header"],["pTemplate","item"],["pTemplate","footer"],["selector","carousel-template-demo",3,"code","extFiles"],[1,"border-1","surface-border","border-round","m-2","text-center","py-5","px-3"],[1,"mb-3"],[1,"w-6","shadow-2",3,"src","alt"],[1,"mb-1"],[1,"mt-0","mb-3"],[3,"value","severity"],[1,"mt-5","flex","align-items-center","justify-content-center","gap-2"],["icon","pi pi-search",3,"rounded"],["icon","pi pi-star-fill","severity","secondary",3,"rounded"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Custom content projection is available using the "),o(3,"i"),r(4,"header"),s(),r(5," and "),o(6,"i"),r(7,"footer"),s(),r(8," templates."),s()(),o(9,"div",0)(10,"p-carousel",1),u(11,Ut,2,0,"ng-template",2)(12,$t,12,9,"ng-template",3)(13,Bt,2,0,"ng-template",4),s()(),d(14,"app-code",5)),t&2&&(p(10),l("value",a.products)("numVisible",3)("numScroll",1)("responsiveOptions",a.responsiveOptions),p(4),l("code",a.code)("extFiles",a.extFiles))},dependencies:[_,y,D,C,O,E],encapsulation:2});let i=n;return i})();function Wt(i,n){if(i&1&&(o(0,"div",4)(1,"div",5)(2,"div",6),d(3,"img",7),s(),o(4,"div")(5,"h4",8),r(6),s(),o(7,"h6",9),r(8),s(),d(9,"p-tag",10),o(10,"div",11),d(11,"p-button",12)(12,"p-button",13),s()()()()),i&2){let c=n.$implicit,e=h();p(3),w("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",T),l("alt",c.name),p(3),S(c.name),p(2),S(c.price),p(),l("value",c.inventoryStatus)("severity",e.getSeverity(c.inventoryStatus)),p(2),l("rounded",!0),p(),l("rounded",!0)}}var Qe=(()=>{let n=class n{constructor(e,t){this.productService=e,this.cdr=t,this.code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" orientation="vertical" verticalViewPortHeight="360px" [responsiveOptions]="responsiveOptions">
    <ng-template let-product pTemplate="item">
        <div class="product-item">
            <div class="product-item-content">
                <div class="mb-3">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"[alt]="product.name" class="product-image" />
                </div>
                <div>
                    <h4 class="mb-1">{{product.name}}</h4>
                    <h6 class="mt-0 mb-3">{{product.price}}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                    <div class="mt-5 flex align-items-center justify-content-center gap-2">
                    <p-button icon="pi pi-search" [rounded]="true" />
                    <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card flex justify-content-center">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="1" orientation="vertical" verticalViewPortHeight="360px" [responsiveOptions]="responsiveOptions">
        <ng-template let-product pTemplate="item">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="mb-3">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"[alt]="product.name" class="product-image" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{product.name}}</h4>
                        <h6 class="mt-0 mb-3">{{product.price}}</h6>
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                        <div class="mt-5 flex align-items-center justify-content-center gap-2">
                                <p-button icon="pi pi-search" [rounded]="true" />
                                <p-button icon="pi pi-star-fill" [rounded]="true" severity="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'carousel-vertical-demo',
    templateUrl: './carousel-vertical-demo.html',
    styleUrls: ['./carousel-vertical-demo.scss']
})
export class CarouselVerticalDemo implements OnInit {
    products: Product[] | undefined;

    responsiveOptions: any[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};n.\u0275fac=function(t){return new(t||n)(g(V),g(x))},n.\u0275cmp=f({type:n,selectors:[["carousel-vertical-demo"]],decls:16,vars:5,consts:[[1,"card","flex","justify-content-center"],["orientation","vertical","verticalViewPortHeight","360px",3,"value","numVisible","numScroll"],["pTemplate","item"],["selector","carousel-vertical-demo",3,"code","extFiles"],[1,"product-item"],[1,"product-item-content"],[1,"mb-3"],[1,"product-image",3,"src","alt"],[1,"mb-1"],[1,"mt-0","mb-3"],[3,"value","severity"],[1,"mt-5","flex","align-items-center","justify-content-center","gap-2"],["icon","pi pi-search",3,"rounded"],["icon","pi pi-star-fill","severity","secondary",3,"rounded"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"To create a vertical Carousel, "),o(3,"i"),r(4,"orientation"),s(),r(5," needs to be set to "),o(6,"i"),r(7,"vertical"),s(),r(8," along with a "),o(9,"i"),r(10,"verticalViewPortHeight"),s(),r(11,"."),s()(),o(12,"div",0)(13,"p-carousel",1),u(14,Wt,13,9,"ng-template",2),s()(),d(15,"app-code",3)),t&2&&(p(13),l("value",a.products)("numVisible",1)("numScroll",1),p(2),l("code",a.code)("extFiles",a.extFiles))},dependencies:[_,y,D,C,O,E],encapsulation:2});let i=n;return i})();var Xe=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["accessibility-doc"]],decls:153,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),s(),o(3,"p"),r(4," Carousel uses "),o(5,"i"),r(6,"region"),s(),r(7," role and since any attribute is passed to the main container element, attributes such as "),o(8,"i"),r(9,"aria-label"),s(),r(10," and "),o(11,"i"),r(12,"aria-roledescription"),s(),r(13," can be used as well. The slides container has "),o(14,"i"),r(15,"aria-live"),s(),r(16,' attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay. '),s(),o(17,"p"),r(18," A slide has a "),o(19,"i"),r(20,"group"),s(),r(21," role with an aria-label that refers to the "),o(22,"i"),r(23,"aria.slideNumber"),s(),r(24," property of the "),o(25,"a",0),r(26,"locale"),s(),r(27," API. Similarly "),o(28,"i"),r(29,"aria.slide"),s(),r(30," is used as the "),o(31,"i"),r(32,"aria-roledescription"),s(),r(33," of the item. Inactive slides are hidden from the readers with "),o(34,"i"),r(35,"aria-hidden"),s(),r(36,". "),s(),o(37,"p"),r(38," Next and Previous navigators are button elements with "),o(39,"i"),r(40,"aria-label"),s(),r(41," attributes referring to the "),o(42,"i"),r(43,"aria.nextPageLabel"),s(),r(44," and "),o(45,"i"),r(46,"aria.firstPageLabel"),s(),r(47," properties of the "),o(48,"a",0),r(49,"locale"),s(),r(50," API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using "),o(51,"i"),r(52,"nextButtonProps"),s(),r(53," and "),o(54,"i"),r(55,"prevButtonProps"),s(),r(56,". "),s(),o(57,"p"),r(58,"Quick navigation elements are button elements with an "),o(59,"i"),r(60,"aria-label"),s(),r(61," attribute referring to the "),o(62,"i"),r(63,"aria.pageLabel"),s(),r(64," of the "),o(65,"a",0),r(66,"locale"),s(),r(67," API. Current page is marked with "),o(68,"i"),r(69,"aria-current"),s(),r(70,"."),s(),o(71,"h3"),r(72,"Next/Prev Keyboard Support"),s(),o(73,"div",1)(74,"table",2)(75,"thead")(76,"tr")(77,"th"),r(78,"Key"),s(),o(79,"th"),r(80,"Function"),s()()(),o(81,"tbody")(82,"tr")(83,"td")(84,"i"),r(85,"tab"),s()(),o(86,"td"),r(87,"Moves focus through interactive elements in the carousel."),s()(),o(88,"tr")(89,"td")(90,"i"),r(91,"enter"),s()(),o(92,"td"),r(93,"Activates navigation."),s()(),o(94,"tr")(95,"td")(96,"i"),r(97,"space"),s()(),o(98,"td"),r(99,"Activates navigation."),s()()()()(),o(100,"h3"),r(101,"Quick Navigation Keyboard Support"),s(),o(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),r(107,"Key"),s(),o(108,"th"),r(109,"Function"),s()()(),o(110,"tbody")(111,"tr")(112,"td")(113,"i"),r(114,"tab"),s()(),o(115,"td"),r(116,"Moves focus through the active slide link."),s()(),o(117,"tr")(118,"td")(119,"i"),r(120,"enter"),s()(),o(121,"td"),r(122,"Activates the focused slide link."),s()(),o(123,"tr")(124,"td")(125,"i"),r(126,"space"),s()(),o(127,"td"),r(128,"Activates the focused slide link."),s()(),o(129,"tr")(130,"td")(131,"i"),r(132,"right arrow"),s()(),o(133,"td"),r(134,"Moves focus to the next slide link."),s()(),o(135,"tr")(136,"td")(137,"i"),r(138,"left arrow"),s()(),o(139,"td"),r(140,"Moves focus to the previous slide link."),s()(),o(141,"tr")(142,"td")(143,"i"),r(144,"home"),s()(),o(145,"td"),r(146,"Moves focus to the first slide link."),s()(),o(147,"tr")(148,"td")(149,"i"),r(150,"end"),s()(),o(151,"td"),r(152,"Moves focus to the last slide link."),s()()()()()())},dependencies:[y],encapsulation:2});let i=n;return i})();var Ye=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=j({type:n}),n.\u0275inj=A({imports:[L,X,Me,ce,Ue,Pe,je,ce]});let i=n;return i})();var qt=()=>["Carousel"],Ge=(()=>{let n=class n{constructor(){this.docs=[{id:"import",label:"Import",component:Le},{id:"basic",label:"Basic",component:$e},{id:"circular",label:"Circular",component:We},{id:"numscroll",label:"Num Scroll",component:qe},{id:"custom",label:"Custom Content",component:He},{id:"responsive",label:"Responsive",component:ze},{id:"vertical",label:"Vertical",component:Qe},{id:"style",label:"Style",component:Be},{id:"accessibility",label:"Accessibility",component:Xe}]}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Carousel Component","header","Carousel","description","Carousel is a content slider featuring various customization options.",3,"docs","apiDocs"]],template:function(t,a){t&1&&d(0,"app-doc",0),t&2&&l("docs",a.docs)("apiDocs",te(2,qt))},dependencies:[Ke],styles:["[_nghost-%COMP%]     .product-item .product-item-content{border:1px solid var(--surface-d);border-radius:3px;margin:.3rem;text-align:center;padding:2rem 0}[_nghost-%COMP%]     .product-item .product-image{width:50%;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}"]});let i=n;return i})();var Ze=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=j({type:n}),n.\u0275inj=A({imports:[X.forChild([{path:"",component:Ge}]),X]});let i=n;return i})();var En=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=j({type:n}),n.\u0275inj=A({imports:[L,Ze,Ye]});let i=n;return i})();export{En as CarouselDemoModule};
