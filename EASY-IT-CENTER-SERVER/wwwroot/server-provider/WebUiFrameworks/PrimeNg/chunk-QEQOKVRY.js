import{b as Pe}from"./chunk-PUPRV2TB.js";import{a as C,b as Le}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import{a as Oe}from"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as S,b as Te,c as ne}from"./chunk-AS5FXEGH.js";import{a as b,b as Ae}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import{a as Ee,b as H}from"./chunk-QLODAJMV.js";import{A as oe,a as D,h as Ce,k as f,q as _e,r as Ie,w as ke,x as we,y as Me}from"./chunk-UWMVDULA.js";import{o as j,t as R}from"./chunk-N5X6XDRN.js";import{Cc as ye,Eb as ue,Ec as De,Fb as ee,Fc as be,Gb as G,Hb as J,Ib as fe,Ic as Se,Jb as s,Jc as xe,Na as le,Nc as V,Pc as ie,Qb as x,Sa as l,Sb as L,Ta as y,Tb as X,Ub as te,V as A,Ya as pe,bb as ce,da as g,dc as he,ea as T,h as ae,ib as k,jb as N,kb as d,kc as ge,ma as w,na as M,nb as me,ob as Y,rb as a,sb as r,tb as u,ua as re,ub as Q,va as q,vb as z,vc as ve,wb as Z,xb as W,yb as K,za as de,zb as v}from"./chunk-ZJD4PHQZ.js";import{a as se}from"./chunk-P2VZOJAX.js";var Xe=["container"],Ye=["list"],Ze=(n,t)=>({"p-hidden":n,"p-focus":t}),et=(n,t)=>({$implicit:n,index:t}),Ne=n=>({"p-disabled":n}),tt=()=>({exact:!1}),it=n=>({"p-speeddial-mask":!0,"p-speeddial-mask-visible":n});function ot(n,t){n&1&&u(0,"PlusIcon")}function nt(n,t){n&1&&Z(0)}function st(n,t){if(n&1&&(Q(0),k(1,nt,1,0,"ng-container",9),z()),n&2){let p=v();l(),d("ngTemplateOutlet",p.buttonTemplate)}}function at(n,t){n&1&&Z(0)}function rt(n,t){if(n&1&&(Q(0),k(1,at,1,0,"ng-container",11),z()),n&2){let p=v(),e=p.$implicit,i=p.index,o=v();l(),d("ngTemplateOutlet",o.itemTemplate)("ngTemplateOutletContext",te(2,et,e,i))}}function dt(n,t){if(n&1&&u(0,"span",15),n&2){let p=v(3).$implicit;d("ngClass",p.icon)}}function lt(n,t){if(n&1){let p=W();a(0,"a",13),K("click",function(i){w(p);let o=v(2).$implicit,c=v();return M(c.onItemClick(i,o))})("keydown.enter",function(i){w(p);let o=v(2),c=o.$implicit,m=o.index,h=v();return M(h.onItemClick(i,c,m))}),k(1,dt,1,1,"span",14),r()}if(n&2){let p=v(2).$implicit,e=v();d("routerLink",p.routerLink)("queryParams",p.queryParams)("ngClass",X(15,Ne,p.disabled))("routerLinkActiveOptions",p.routerLinkActiveOptions||L(17,tt))("fragment",p.fragment)("queryParamsHandling",p.queryParamsHandling)("preserveFragment",p.preserveFragment)("skipLocationChange",p.skipLocationChange)("replaceUrl",p.replaceUrl)("state",p.state),N("target",p.target)("tabindex",p.disabled||e.readonly||!e.visible?null:p.tabindex?p.tabindex:"0")("aria-label",p.label)("data-pc-section","action"),l(),d("ngIf",p.icon)}}function pt(n,t){if(n&1&&u(0,"span",15),n&2){let p=v(4).$implicit;d("ngClass",p.icon)}}function ct(n,t){if(n&1){let p=W();a(0,"a",17),K("click",function(i){w(p);let o=v(3).$implicit,c=v();return M(c.onItemClick(i,o))})("keydown.enter",function(i){w(p);let o=v(3),c=o.$implicit,m=o.index,h=v();return M(h.onItemClick(i,c,m))}),k(1,pt,1,1,"span",14),r()}if(n&2){let p=v(3),e=p.$implicit,i=p.index,o=v();d("ngClass",X(7,Ne,e.disabled)),N("href",e.url||null,le)("target",e.target)("data-pc-section","action")("aria-label",e.label)("tabindex",e.disabled||i!==o.activeIndex&&o.readonly||!o.visible?null:e.tabindex?e.tabindex:"0"),l(),d("ngIf",e.icon)}}function mt(n,t){if(n&1&&k(0,ct,2,9,"a",16),n&2){let p=v(3);d("ngIf",p._visible)}}function ut(n,t){if(n&1&&(Q(0),k(1,lt,2,18,"a",12)(2,mt,1,1,"ng-template",null,2,he),z()),n&2){let p=fe(3),e=v().$implicit,i=v();l(),d("ngIf",i._visible&&i.isClickableRouterLink(e))("ngIfElse",p)}}function ft(n,t){if(n&1&&(a(0,"li",10),k(1,rt,2,5,"ng-container",5)(2,ut,4,2,"ng-container",5),r()),n&2){let p=t.$implicit,e=t.index,i=v();d("ngStyle",i.getItemStyle(e))("tooltipOptions",p.tooltipOptions)("ngClass",te(8,Ze,p.visible===!1,i.focusedOptionId==i.id+"_"+e))("id",i.id+"_"+e),N("aria-controls",i.id+"_item")("data-pc-section","menuitem"),l(),d("ngIf",i.itemTemplate),l(),d("ngIf",!i.itemTemplate)}}function ht(n,t){if(n&1&&u(0,"div",3),n&2){let p=v();Y(p.maskClassName),d("ngClass",X(4,it,p.visible))("ngStyle",p.maskStyle)}}var I=(()=>{let t=class t{get visible(){return this._visible}set visible(e){this._visible=e,this._visible?this.bindDocumentClickListener():this.unbindDocumentClickListener()}get focusedOptionId(){return this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null}constructor(e,i,o,c,m){this.platformId=e,this.el=i,this.cd=o,this.document=c,this.renderer=m,this.model=null,this.direction="up",this.transitionDelay=30,this.type="linear",this.radius=0,this.mask=!1,this.disabled=!1,this.hideOnClickOutside=!0,this.rotateAnimation=!0,this.onVisibleChange=new q,this.visibleChange=new q,this.onClick=new q,this.onShow=new q,this.onHide=new q,this.isItemClicked=!1,this._visible=!1,this.focusedOptionIndex=ce(null),this.focused=!1}ngOnInit(){this.id=this.id||Ce()}ngAfterViewInit(){if(ie(this.platformId)&&this.type!=="linear"){let e=D.findSingle(this.container?.nativeElement,".p-speeddial-button"),i=D.findSingle(this.list?.nativeElement,".p-speeddial-item");if(e&&i){let o=Math.abs(e.offsetWidth-i.offsetWidth),c=Math.abs(e.offsetHeight-i.offsetHeight);this.list?.nativeElement.style.setProperty("--item-diff-x",`${o/2}px`),this.list?.nativeElement.style.setProperty("--item-diff-y",`${c/2}px`)}}}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"button":this.buttonTemplate=e.template;break;case"item":this.itemTemplate=e.template;break}})}show(){this.onVisibleChange.emit(!0),this.visibleChange.emit(!0),this._visible=!0,this.onShow.emit(),this.bindDocumentClickListener(),this.cd.markForCheck()}hide(){this.onVisibleChange.emit(!1),this.visibleChange.emit(!1),this._visible=!1,this.onHide.emit(),this.unbindDocumentClickListener(),this.cd.markForCheck()}onButtonClick(e){this.visible?this.hide():this.show(),this.onClick.emit(e),this.isItemClicked=!0}onItemClick(e,i){i.command&&i.command({originalEvent:e,item:i}),this.hide(),this.isItemClicked=!0}onKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;default:break}}onFocus(e){this.focused=!0}onBlur(e){this.focused=!1,ae.schedule(()=>this.focusedOptionIndex.set(-1))}onArrowUp(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)}onArrowDown(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)}onArrowLeft(e){let i=["left","up-right","down-left"],o=["right","up-left","down-right"];i.includes(this.direction)?this.navigateNextItem(e):o.includes(this.direction)?this.navigatePrevItem(e):this.navigatePrevItem(e)}onArrowRight(e){let i=["left","up-right","down-left"],o=["right","up-left","down-right"];i.includes(this.direction)?this.navigatePrevItem(e):o.includes(this.direction)?this.navigateNextItem(e):this.navigateNextItem(e)}onEndKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigatePrevItem(e)}onHomeKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigateNextItem(e)}onEnterKey(e){let o=[...D.find(this.container.nativeElement,'[data-pc-section="menuitem"]')].findIndex(m=>m.id===this.focusedOptionIndex);this.onItemClick(e,this.model[o]),this.onBlur(e);let c=D.findSingle(this.container.nativeElement,"button");c&&D.focus(c)}onEscapeKey(e){this.hide();let i=D.findSingle(this.container.nativeElement,"button");i&&D.focus(i)}onTogglerKeydown(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey(e);break;default:break}}onTogglerArrowUp(e){this.focused=!0,D.focus(this.list.nativeElement),this.show(),this.navigatePrevItem(e),e.preventDefault()}onTogglerArrowDown(e){this.focused=!0,D.focus(this.list.nativeElement),this.show(),this.navigateNextItem(e),e.preventDefault()}navigateNextItem(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}navigatePrevItem(e){let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}findPrevOptionIndex(e){let o=[...D.find(this.container.nativeElement,'[data-pc-section="menuitem"]')].filter(h=>!D.hasClass(D.findSingle(h,"a"),"p-disabled")),c=e===-1?o[o.length-1].id:e,m=o.findIndex(h=>h.getAttribute("id")===c);return m=e===-1?o.length-1:m-1,m}findNextOptionIndex(e){let o=[...D.find(this.container.nativeElement,'[data-pc-section="menuitem"]')].filter(h=>!D.hasClass(D.findSingle(h,"a"),"p-disabled")),c=e===-1?o[0].id:e,m=o.findIndex(h=>h.getAttribute("id")===c);return m=e===-1?0:m+1,m}changeFocusedOptionIndex(e){let o=[...D.find(this.container.nativeElement,'[data-pc-section="menuitem"]')].filter(c=>!D.hasClass(D.findSingle(c,"a"),"p-disabled"));o[e]&&this.focusedOptionIndex.set(o[e].getAttribute("id"))}calculatePointStyle(e){let i=this.type;if(i!=="linear"){let o=this.model.length,c=this.radius||o*20;if(i==="circle"){let m=2*Math.PI/o;return{left:`calc(${c*Math.cos(m*e)}px + var(--item-diff-x, 0px))`,top:`calc(${c*Math.sin(m*e)}px + var(--item-diff-y, 0px))`}}else if(i==="semi-circle"){let m=this.direction,h=Math.PI/(o-1),E=`calc(${c*Math.cos(h*e)}px + var(--item-diff-x, 0px))`,O=`calc(${c*Math.sin(h*e)}px + var(--item-diff-y, 0px))`;if(m==="up")return{left:E,bottom:O};if(m==="down")return{left:E,top:O};if(m==="left")return{right:O,top:E};if(m==="right")return{left:O,top:E}}else if(i==="quarter-circle"){let m=this.direction,h=Math.PI/(2*(o-1)),E=`calc(${c*Math.cos(h*e)}px + var(--item-diff-x, 0px))`,O=`calc(${c*Math.sin(h*e)}px + var(--item-diff-y, 0px))`;if(m==="up-left")return{right:E,bottom:O};if(m==="up-right")return{left:E,bottom:O};if(m==="down-left")return{right:O,top:E};if(m==="down-right")return{left:O,top:E}}}return{}}calculateTransitionDelay(e){let i=this.model.length;return(this.visible?e:i-e-1)*this.transitionDelay}containerClass(){return{[`p-speeddial p-component p-speeddial-${this.type}`]:!0,[`p-speeddial-direction-${this.direction}`]:this.type!=="circle","p-speeddial-opened":this.visible,"p-disabled":this.disabled}}buttonClass(){return{"p-speeddial-button p-button-rounded":!0,"p-speeddial-rotate":this.rotateAnimation&&!this.hideIcon,[this.buttonClassName]:!0}}get buttonIconClass(){return!this.visible&&this.showIcon||!this.hideIcon?this.showIcon:this.hideIcon}getItemStyle(e){let i=this.calculateTransitionDelay(e),o=this.calculatePointStyle(e);return se({transitionDelay:`${i}ms`},o)}isClickableRouterLink(e){return e.routerLink&&!this.disabled&&!e.disabled}isOutsideClicked(e){return this.container&&!(this.container.nativeElement.isSameNode(e.target)||this.container.nativeElement.contains(e.target)||this.isItemClicked)}bindDocumentClickListener(){ie(this.platformId)&&!this.documentClickListener&&this.hideOnClickOutside&&(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{this.visible&&this.isOutsideClicked(e)&&this.hide(),this.isItemClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}ngOnDestroy(){this.unbindDocumentClickListener()}};t.\u0275fac=function(i){return new(i||t)(y(de),y(re),y(ge),y(ve),y(pe))},t.\u0275cmp=g({type:t,selectors:[["p-speedDial"]],contentQueries:function(i,o,c){if(i&1&&ue(c,_e,4),i&2){let m;G(m=J())&&(o.templates=m)}},viewQuery:function(i,o){if(i&1&&(ee(Xe,5),ee(Ye,5)),i&2){let c;G(c=J())&&(o.container=c.first),G(c=J())&&(o.list=c.first)}},hostAttrs:[1,"p-element"],inputs:{id:"id",model:"model",visible:"visible",style:"style",className:"className",direction:"direction",transitionDelay:"transitionDelay",type:"type",radius:"radius",mask:"mask",disabled:"disabled",hideOnClickOutside:"hideOnClickOutside",buttonStyle:"buttonStyle",buttonClassName:"buttonClassName",maskStyle:"maskStyle",maskClassName:"maskClassName",showIcon:"showIcon",hideIcon:"hideIcon",rotateAnimation:"rotateAnimation",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onVisibleChange:"onVisibleChange",visibleChange:"visibleChange",onClick:"onClick",onShow:"onShow",onHide:"onHide"},decls:9,vars:25,consts:[["container",""],["list",""],["elseBlock",""],[3,"ngClass","ngStyle"],["pRipple","","pButton","",1,"p-button-icon-only",3,"click","keydown","icon","ngClass","disabled"],[4,"ngIf"],["role","menu",1,"p-speeddial-list",3,"focus","focusout","keydown","id","tabindex"],["class","p-speeddial-item","pTooltip","","role","menuitem",3,"ngStyle","tooltipOptions","ngClass","id",4,"ngFor","ngForOf"],[3,"ngClass","class","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet"],["pTooltip","","role","menuitem",1,"p-speeddial-item",3,"ngStyle","tooltipOptions","ngClass","id"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","class","p-speeddial-action","role","menuitem",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter",4,"ngIf","ngIfElse"],["pRipple","","role","menuitem",1,"p-speeddial-action",3,"click","keydown.enter","routerLink","queryParams","ngClass","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-speeddial-action-icon",3,"ngClass",4,"ngIf"],[1,"p-speeddial-action-icon",3,"ngClass"],["class","p-speeddial-action","role","menuitem","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],["role","menuitem","pRipple","",1,"p-speeddial-action",3,"click","keydown.enter","ngClass"]],template:function(i,o){if(i&1){let c=W();a(0,"div",3,0)(2,"button",4),K("click",function(h){return w(c),M(o.onButtonClick(h))})("keydown",function(h){return w(c),M(o.onTogglerKeydown(h))}),k(3,ot,1,0,"PlusIcon",5)(4,st,2,1,"ng-container",5),r(),a(5,"ul",6,1),K("focus",function(h){return w(c),M(o.onFocus(h))})("focusout",function(h){return w(c),M(o.onBlur(h))})("keydown",function(h){return w(c),M(o.onKeyDown(h))}),k(7,ft,3,11,"li",7),r()(),k(8,ht,1,6,"div",8)}i&2&&(Y(o.className),d("ngClass",o.containerClass())("ngStyle",o.style),N("data-pc-name","speeddial")("data-pc-section","root"),l(2),me(o.buttonStyle),d("icon",o.buttonIconClass)("ngClass",o.buttonClass())("disabled",o.disabled),N("aria-expanded",o.visible)("aria-haspopup",!0)("aria-controls",o.id+"_list")("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy)("data-pc-name","button"),l(),d("ngIf",!o.showIcon&&!o.buttonTemplate),l(),d("ngIf",o.buttonTemplate),l(),d("id",o.id+"_list")("tabindex",-1),N("aria-activedescendant",o.focused?o.focusedOptionId:void 0)("data-pc-section","menu"),l(2),d("ngForOf",o.model),l(),d("ngIf",o.mask&&o.visible))},dependencies:[ye,De,be,xe,Se,Me,ke,Ee,j,Oe],styles:[`@layer primeng{.p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}}
`],encapsulation:2,changeDetection:0});let n=t;return n})(),Fe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=T({type:t}),t.\u0275inj=A({imports:[V,oe,we,H,R,Ie,oe,H,R]});let n=t;return n})();var qe=(()=>{let t=class t{constructor(){this.code={basic:'<p-speedDial aria-label="Options"></p-speedDial>'}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["accessibility-doc"]],decls:111,vars:4,consts:[[3,"code","hideToggleCode","hideStackBlitz","hideCodeSandbox"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"h3"),s(2,"Screen Reader"),r(),a(3,"p"),s(4," SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the "),a(5,"i"),s(6,"aria-labelledby"),r(),s(7," or "),a(8,"i"),s(9,"aria-label"),r(),s(10," props. Addititonally the button includes includes "),a(11,"i"),s(12,"aria-haspopup"),r(),s(13,", "),a(14,"i"),s(15,"aria-expanded"),r(),s(16," for states along with "),a(17,"i"),s(18,"aria-controls"),r(),s(19," to define the relation between the popup and the button. "),r(),a(20,"p"),s(21,"The popup overlay uses "),a(22,"i"),s(23,"menu"),r(),s(24," role on the list and each action item has a "),a(25,"i"),s(26,"menuitem"),r(),s(27," role with an "),a(28,"i"),s(29,"aria-label"),r(),s(30," as the menuitem label. The id of the menu refers to the "),a(31,"i"),s(32,"aria-controls"),r(),s(33," of the button."),r()(),u(34,"app-code",0),a(35,"h3"),s(36,"Menu Button Keyboard Support"),r(),a(37,"div",1)(38,"table",2)(39,"thead")(40,"tr")(41,"th"),s(42,"Key"),r(),a(43,"th"),s(44,"Function"),r()()(),a(45,"tbody")(46,"tr")(47,"td")(48,"i"),s(49,"enter"),r()(),a(50,"td"),s(51,"Toggles the visibility of the menu."),r()(),a(52,"tr")(53,"td")(54,"i"),s(55,"space"),r()(),a(56,"td"),s(57,"Toggles the visibility of the menu."),r()(),a(58,"tr")(59,"td")(60,"i"),s(61,"down arrow"),r()(),a(62,"td"),s(63,"Opens the menu and moves focus to the first item."),r()(),a(64,"tr")(65,"td")(66,"i"),s(67,"up arrow"),r()(),a(68,"td"),s(69,"Opens the menu and moves focus to the last item."),r()()()()(),a(70,"h3"),s(71,"Menu Keyboard Support"),r(),a(72,"div",1)(73,"table",2)(74,"thead")(75,"tr")(76,"th"),s(77,"Key"),r(),a(78,"th"),s(79,"Function"),r()()(),a(80,"tbody")(81,"tr")(82,"td")(83,"i"),s(84,"enter"),r()(),a(85,"td"),s(86,"Activates the menuitem, closes the menu and sets focus on the menu button."),r()(),a(87,"tr")(88,"td")(89,"i"),s(90,"escape"),r()(),a(91,"td"),s(92,"Closes the menu and sets focus on the menu button."),r()(),a(93,"tr")(94,"td")(95,"i"),s(96,"arrow keys"),r()(),a(97,"td"),s(98,"Navigates between the menu items."),r()(),a(99,"tr")(100,"td")(101,"i"),s(102,"home"),r()(),a(103,"td"),s(104,"Moves focus to the first item."),r()(),a(105,"tr")(106,"td")(107,"i"),s(108,"end"),r()(),a(109,"td"),s(110,"Moves focus to the last item."),r()()()()()),i&2&&(l(34),d("code",o.code)("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[b,S],encapsulation:2});let n=t;return n})();var Ve=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:'<p-speedDial [model]="items" type="circle" [radius]="80" buttonClassName="p-button-warning"></p-speedDial>',html:`
<div class="card">
    <div style="height: 500px" class="flex align-items-center justify-content-center">
        <p-toast></p-toast>
        <p-speedDial [model]="items" type="circle" [radius]="80" buttonClassName="p-button-warning"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-circle-demo',
    templateUrl: './speed-dial-circle-demo.html',
    providers: [MessageService]
})
export class SpeedDialCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`}}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["circle-doc"]],features:[x([f])],decls:17,vars:3,consts:[[1,"card"],[1,"flex","align-items-center","justify-content-center",2,"height","500px"],["type","circle","buttonClassName","p-button-warning",3,"model","radius"],["selector","speed-dial-circle-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"Items can be displayed around the button when "),a(3,"i"),s(4,"type"),r(),s(5," is set to "),a(6,"i"),s(7,"circle"),r(),s(8,". Additional "),a(9,"i"),s(10,"radius"),r(),s(11," property defines the radius of the circle."),r()(),a(12,"div",0)(13,"div",1),u(14,"p-toast")(15,"p-speedDial",2),r()(),u(16,"app-code",3)),i&2&&(l(15),d("model",o.items)("radius",80),l(),d("code",o.code))},dependencies:[b,S,I,C],encapsulation:2});let n=t;return n})();var je=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:'<p-speedDial [model]="items" direction="up" transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined"></p-speedDial>',html:`
<div class="card">
    <div style="height: 500px" class="flex justify-content-center">
        <p-toast></p-toast>
        <p-speedDial [model]="items" direction="up" transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-custom-demo',
    templateUrl: './speed-dial-custom-demo.html',
    providers: [MessageService]
})
export class SpeedDialCustomDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`}}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["custom-doc"]],features:[x([f])],decls:11,vars:2,consts:[[1,"card"],[1,"flex","justify-content-center",2,"height","500px"],["direction","up","transitionDelay","80","showIcon","pi pi-bars","hideIcon","pi pi-times","buttonClassName","p-button-outlined",3,"model"],["selector","speed-dial-custom-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"SpeedDial sample with an outlined button, custom icons and "),a(3,"i"),s(4,"transitionDelay"),r(),s(5,"."),r()(),a(6,"div",0)(7,"div",1),u(8,"p-toast")(9,"p-speedDial",2),r()(),u(10,"app-code",3)),i&2&&(l(9),d("model",o.items),l(),d("code",o.code))},dependencies:[b,S,I,C],encapsulation:2});let n=t;return n})();var Re=(()=>{let t=class t{constructor(){this.code={typescript:"import { SpeedDialModule } from 'primeng/speeddial';"}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&u(0,"app-code",0),i&2&&d("code",o.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2});let n=t;return n})();var $e=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:`<p-speedDial [model]="items" direction="up"></p-speedDial>
<p-speedDial [model]="items" direction="down"></p-speedDial>
<p-speedDial [model]="items" direction="left"></p-speedDial>
<p-speedDial [model]="items" direction="right"></p-speedDial>`,html:`
<div class="card">
    <div style="height: 500px; position: relative;" class="speeddial-linear-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="items" direction="up"></p-speedDial>
        <p-speedDial [model]="items" direction="down"></p-speedDial>
        <p-speedDial [model]="items" direction="left"></p-speedDial>
        <p-speedDial [model]="items" direction="right"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-linear-demo',
    templateUrl: './speed-dial-linear-demo.html',
    styleUrls: ['./speed-dial-linear-demo.scss'],
    providers: [MessageService]
})
export class SpeedDialLinearDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .speeddial-linear-demo {
        .p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        .p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        .p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        .p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }
}`}}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["linear-doc"]],features:[x([f])],decls:17,vars:5,consts:[[1,"card"],[1,"speeddial-linear-demo",2,"height","500px","position","relative"],["direction","up",3,"model"],["direction","down",3,"model"],["direction","left",3,"model"],["direction","right",3,"model"],["selector","speed-dial-linear-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"SpeedDial items are defined with the "),a(3,"i"),s(4,"model"),r(),s(5," property based on MenuModel API. Default orientation of the items is linear and "),a(6,"i"),s(7,"direction"),r(),s(8," property is used to define the position of the items related to the button."),r()(),a(9,"div",0)(10,"div",1),u(11,"p-toast")(12,"p-speedDial",2)(13,"p-speedDial",3)(14,"p-speedDial",4)(15,"p-speedDial",5),r()(),u(16,"app-code",6)),i&2&&(l(12),d("model",o.items),l(),d("model",o.items),l(),d("model",o.items),l(),d("model",o.items),l(),d("code",o.code))},dependencies:[b,S,I,C],encapsulation:2});let n=t;return n})();var Be=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:'<p-speedDial [model]="items" direction="up" [mask]="true"></p-speedDial>',html:`
<div class="card">
    <div style="height: 350px; position: relative;" class="speeddial-mask-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="items" direction="up" [mask]="true"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-mask-demo',
    templateUrl: './speed-dial-mask-demo.html',
    styleUrls: ['./speed-dial-mask-demo.scss'],
    providers: [MessageService]
})
export class SpeedDialMaskDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .speeddial-mask-demo {
        .p-speeddial-direction-up {
            right: 0;
            bottom: 0;
        }
    }
}`}}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["mask-doc"]],features:[x([f])],decls:11,vars:3,consts:[[1,"card"],[1,"speeddial-mask-demo",2,"height","350px","position","relative"],["direction","up",3,"model","mask"],["selector","speed-dial-mask-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"Adding "),a(3,"i"),s(4,"mask"),r(),s(5," property displays a modal layer behind the popup items."),r()(),a(6,"div",0)(7,"div",1),u(8,"p-toast")(9,"p-speedDial",2),r()(),u(10,"app-code",3)),i&2&&(l(9),d("model",o.items)("mask",!0),l(),d("code",o.code))},dependencies:[b,S,I,C],encapsulation:2});let n=t;return n})();var Ke=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:`<p-speedDial [model]="items" radius="120" direction="up-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
<p-speedDial [model]="items" radius="120" direction="up-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
<p-speedDial [model]="items" radius="120" direction="down-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
<p-speedDial [model]="items" radius="120" direction="down-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>`,html:`
<div class="card">
    <div style="height: 500px; position: relative;" class="speeddial-circle-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="items" radius="120" direction="up-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
        <p-speedDial [model]="items" radius="120" direction="up-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
        <p-speedDial [model]="items" radius="120" direction="down-left" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
        <p-speedDial [model]="items" radius="120" direction="down-right" type="quarter-circle" buttonClassName="p-button-success"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-quarter-circle-demo',
    templateUrl: './speed-dial-quarter-circle-demo.html',
    styleUrls: ['./speed-dial-quarter-circle-demo.scss'],
    providers: [MessageService]
})
export class SpeedDialQuarterCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .speeddial-circle-demo {
        .p-speeddial-quarter-circle {
            &.p-speeddial-direction-up-left {
                right: 0;
                bottom: 0;
            }

            &.p-speeddial-direction-up-right {
                left: 0;
                bottom: 0;
            }

            &.p-speeddial-direction-down-left {
                right: 0;
                top: 0;
            }

            &.p-speeddial-direction-down-right {
                left: 0;
                top: 0;
            }
        }
    }
}`}}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["quarter-circle-doc"]],features:[x([f])],decls:17,vars:5,consts:[[1,"card"],[1,"speeddial-circle-demo",2,"height","500px","position","relative"],["radius","120","direction","up-left","type","quarter-circle","buttonClassName","p-button-success",3,"model"],["radius","120","direction","up-right","type","quarter-circle","buttonClassName","p-button-success",3,"model"],["radius","120","direction","down-left","type","quarter-circle","buttonClassName","p-button-success",3,"model"],["radius","120","direction","down-right","type","quarter-circle","buttonClassName","p-button-success",3,"model"],["selector","speed-dial-quarter-circle-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"When "),a(3,"i"),s(4,"type"),r(),s(5," is defined as "),a(6,"i"),s(7,"quarter-circle"),r(),s(8,", items are displayed in a half-circle around the button."),r()(),a(9,"div",0)(10,"div",1),u(11,"p-toast")(12,"p-speedDial",2)(13,"p-speedDial",3)(14,"p-speedDial",4)(15,"p-speedDial",5),r()(),u(16,"app-code",6)),i&2&&(l(12),d("model",o.items),l(),d("model",o.items),l(),d("model",o.items),l(),d("model",o.items),l(),d("code",o.code))},dependencies:[b,S,I,C],encapsulation:2});let n=t;return n})();var He=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:`<p-speedDial [model]="items" direction="up" [radius]="80" type="semi-circle"></p-speedDial>
<p-speedDial [model]="items" direction="down" [radius]="80" type="semi-circle"></p-speedDial>
<p-speedDial [model]="items" direction="left" [radius]="80" type="semi-circle"></p-speedDial>
<p-speedDial [model]="items" direction="right" [radius]="80" type="semi-circle"></p-speedDial>`,html:`
<div class="card">
    <div style="height: 500px; position: relative;" class="speeddial-linear-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="items" direction="up" [radius]="80" type="semi-circle"></p-speedDial>
        <p-speedDial [model]="items" direction="down" [radius]="80" type="semi-circle"></p-speedDial>
        <p-speedDial [model]="items" direction="left" [radius]="80" type="semi-circle"></p-speedDial>
        <p-speedDial [model]="items" direction="right" [radius]="80" type="semi-circle"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-semi-circle-demo',
    templateUrl: './speed-dial-semi-circle-demo.html',
    styleUrls: ['./speed-dial-semi-circle-demo.scss'],
    providers: [MessageService]
})
export class SpeedDialSemiCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .speeddial-linear-demo {
        .p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        .p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        .p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        .p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }
}`}}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["semi-circle-doc"]],features:[x([f])],decls:17,vars:9,consts:[[1,"card"],[1,"speeddial-linear-demo",2,"height","500px","position","relative"],["direction","up","type","semi-circle",3,"model","radius"],["direction","down","type","semi-circle",3,"model","radius"],["direction","left","type","semi-circle",3,"model","radius"],["direction","right","type","semi-circle",3,"model","radius"],["selector","speed-dial-semi-circle-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"When "),a(3,"i"),s(4,"type"),r(),s(5," is defined as "),a(6,"i"),s(7,"semi-circle"),r(),s(8,", items are displayed in a half-circle around the button."),r()(),a(9,"div",0)(10,"div",1),u(11,"p-toast")(12,"p-speedDial",2)(13,"p-speedDial",3)(14,"p-speedDial",4)(15,"p-speedDial",5),r()(),u(16,"app-code",6)),i&2&&(l(12),d("model",o.items)("radius",80),l(),d("model",o.items)("radius",80),l(),d("model",o.items)("radius",80),l(),d("model",o.items)("radius",80),l(),d("code",o.code))},dependencies:[b,S,I,C],encapsulation:2});let n=t;return n})();var gt=()=>["/theming"],Qe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["style-doc"]],decls:40,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"Following is the list of structural style classes, for theming classes visit "),a(3,"a",0),s(4,"theming"),r(),s(5," page."),r()(),a(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),s(11,"Name"),r(),a(12,"th"),s(13,"Element"),r()()(),a(14,"tbody")(15,"tr")(16,"td"),s(17,"p-speeddial"),r(),a(18,"td"),s(19,"Container element."),r()(),a(20,"tr")(21,"td"),s(22,"p-speed-dial-button"),r(),a(23,"td"),s(24,"Button element of speeddial."),r()(),a(25,"tr")(26,"td"),s(27,"p-speed-dial-mask"),r(),a(28,"td"),s(29,"Mask element of speeddial."),r()(),a(30,"tr")(31,"td"),s(32,"p-speed-dial-list"),r(),a(33,"td"),s(34,"List of the actions."),r()(),a(35,"tr")(36,"td"),s(37,"p-speed-dial-item"),r(),a(38,"td"),s(39,"Each action item of list."),r()()()()()),i&2&&(l(3),d("routerLink",L(1,gt)))},dependencies:[S,j],encapsulation:2});let n=t;return n})();var vt=()=>["/tooltip"],ze=(()=>{let t=class t{constructor(e){this.messageService=e,this.code={basic:`<p-speedDial [model]="leftTooltipItems" className="speeddial-right" direction="up"></p-speedDial>
<p-speedDial [model]="tooltipItems" className="speeddial-left" direction="up"></p-speedDial>`,html:`
<div class="card">
    <div style="height: 350px; position: relative;" class="speeddial-tooltip-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="leftTooltipItems" className="speeddial-right" direction="up"></p-speedDial>
        <p-speedDial [model]="tooltipItems" className="speeddial-left" direction="up"></p-speedDial>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'speed-dial-tooltip-demo',
    templateUrl: './speed-dial-tooltip-demo.html',
    styleUrls: ['./speed-dial-tooltip-demo.scss'],
    providers: [MessageService]
})
export class SpeedDialTooltipDemo implements OnInit {
    tooltipItems: MenuItem[] | undefined;

    leftTooltipItems: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.tooltipItems = [
            {
                tooltipOptions: {
                    tooltipLabel: 'Add'
                },
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Update'
                },
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Delete'
                },
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Upload'
                },
                icon: 'pi pi-upload'
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Angular Website'
                },
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];

        this.leftTooltipItems = [
            {
                tooltipOptions: {
                    tooltipLabel: 'Add',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Update',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Delete',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                tooltipOptions: {
                    tooltipLabel: 'Upload',
                    tooltipPosition: 'left'
                }
            },
            {
                tooltipOptions: {
                    tooltipLabel: 'Angular Website',
                    tooltipPosition: 'left'
                },
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .speeddial-tooltip-demo {
        .p-speeddial-direction-up {
            &.speeddial-left {
                left: 0;
                bottom: 0;
            }

            &.speeddial-right {
                right: 0;
                bottom: 0;
            }
        }
    }
}`}}ngOnInit(){this.tooltipItems=[{tooltipOptions:{tooltipLabel:"Add"},icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{tooltipOptions:{tooltipLabel:"Update"},icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{tooltipOptions:{tooltipLabel:"Delete"},icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{tooltipOptions:{tooltipLabel:"Upload"},icon:"pi pi-upload"},{tooltipOptions:{tooltipLabel:"Angular Website"},icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}],this.leftTooltipItems=[{tooltipOptions:{tooltipLabel:"Add",tooltipPosition:"left"},icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{tooltipOptions:{tooltipLabel:"Update",tooltipPosition:"left"},icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{tooltipOptions:{tooltipLabel:"Delete",tooltipPosition:"left"},icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",tooltipOptions:{tooltipLabel:"Upload",tooltipPosition:"left"}},{tooltipOptions:{tooltipLabel:"Angular Website",tooltipPosition:"left"},icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}};t.\u0275fac=function(i){return new(i||t)(y(f))},t.\u0275cmp=g({type:t,selectors:[["tooltip-doc"]],features:[x([f])],decls:12,vars:5,consts:[["href","#",3,"routerLink"],[1,"card"],[1,"speeddial-tooltip-demo",2,"height","350px","position","relative"],["className","speeddial-right","direction","up",3,"model"],["className","speeddial-left","direction","up",3,"model"],["selector","speed-dial-tooltip-demo",3,"code"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),s(2,"Items display a tooltip on hover when a standalone "),a(3,"a",0),s(4,"Tooltip"),r(),s(5," is present with a target that matches the items."),r()(),a(6,"div",1)(7,"div",2),u(8,"p-toast")(9,"p-speedDial",3)(10,"p-speedDial",4),r()(),u(11,"app-code",5)),i&2&&(l(3),d("routerLink",L(4,vt)),l(6),d("model",o.leftTooltipItems),l(),d("model",o.tooltipItems),l(),d("code",o.code))},dependencies:[b,S,I,j,C],encapsulation:2});let n=t;return n})();var We=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=T({type:t}),t.\u0275inj=A({imports:[V,Ae,ne,Fe,Pe,Le,H,ne]});let n=t;return n})();var yt=()=>["SpeedDial"],Ge=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:Re},{id:"linear",label:"Linear",component:$e},{id:"circle",label:"Circle",component:Ve},{id:"semicircle",label:"Semi Circle",component:He},{id:"quartercircle",label:"Quarter Circle",component:Ke},{id:"tooltip",label:"Tooltip",component:ze},{id:"mask",label:"Mask",component:Be},{id:"custom",label:"Custom",component:je},{id:"style",label:"Style",component:Qe},{id:"accessibility",label:"Accessibility",component:qe}]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Speed Dial Component","header","Speed Dial","description","SpeedDial is a floating button with a popup menu.",3,"docs","apiDocs"]],template:function(i,o){i&1&&u(0,"app-doc",0),i&2&&d("docs",o.docs)("apiDocs",L(2,yt))},dependencies:[Te],styles:["[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-down{left:calc(50% - 2rem);top:0}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-left{right:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-right{left:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-circle{top:calc(50% - 2rem);left:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-down{left:calc(50% - 2rem);top:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-left{right:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-right{left:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-left{right:0;bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-right{left:0;bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-left{right:0;top:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-right{left:0;top:0}[_nghost-%COMP%]     .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-left{left:0;bottom:0}[_nghost-%COMP%]     .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-right{right:0;bottom:0}[_nghost-%COMP%]     .speeddial-delay-demo .p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-mask-demo .p-speeddial-direction-up{right:0;bottom:0}"]});let n=t;return n})();var Je=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=T({type:t}),t.\u0275inj=A({imports:[R.forChild([{path:"",component:Ge}]),R]});let n=t;return n})();var ao=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=T({type:t}),t.\u0275inj=A({imports:[V,Je,We]});let n=t;return n})();export{ao as SpeedDialDemoModule};
