import{a as We}from"./chunk-G7VICPVK.js";import{a as Qe}from"./chunk-Z2ZAEWPQ.js";import{a as Ye,b as ue}from"./chunk-KPYNJB2H.js";import{a as b,b as $e,c as he}from"./chunk-AS5FXEGH.js";import{a as _,b as qe}from"./chunk-X2ZDE2AM.js";import{a as Ee,e as w,f as Me,g as Fe,h as De,i as F,j as ke,m as Ve,n as Ae,p as Ne,q as Re}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{a as B,g as T,h as Pe,j as Ge,n as He,o as Be,p as je,q as Q,r as me,w as ze,x as Ue}from"./chunk-UWMVDULA.js";import{o as Ke,t as le}from"./chunk-N5X6XDRN.js";import{Ab as ye,Bb as ce,Cc as Ie,Eb as se,Ec as Oe,Fb as X,Fc as we,Gb as R,Hb as K,Ib as ae,Ic as Te,Jb as l,Jc as Le,Kb as Z,Lb as ie,Nb as L,Nc as oe,Ob as E,Pb as M,Qb as Se,Sa as d,Sb as f,T as ge,Ta as ee,Tb as P,Ub as ne,V as U,Vb as pe,Ya as _e,bb as te,da as x,dc as de,ea as Y,ib as h,jb as O,kb as c,kc as Ce,lb as be,ma as S,na as C,nb as y,ob as $,oc as ve,rb as s,sb as a,tb as g,ua as xe,ub as A,va as W,vb as N,wb as V,xb as J,yb as k,zb as u}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var gt=["headerchkbox"],xt=["filter"],_t=["lastHiddenFocusableElement"],bt=["firstHiddenFocusableElement"],yt=["scroller"],St=["list"],Ct=[[["p-header"]],[["p-footer"]]],vt=["p-header","p-footer"],re=(i,o)=>({$implicit:i,options:o}),Xe=i=>({"p-checkbox-disabled":i}),It=(i,o,r)=>({"p-highlight":i,"p-focus":o,"p-disabled":r}),Ze=i=>({options:i}),fe=i=>({height:i}),Ot=()=>({}),wt=i=>({$implicit:i}),Tt=(i,o,r)=>({"p-listbox-item":!0,"p-highlight":i,"p-focus":o,"p-disabled":r}),Lt=(i,o)=>({$implicit:i,index:o}),Et=i=>({"p-highlight":i});function Mt(i,o){i&1&&V(0)}function Ft(i,o){if(i&1&&(s(0,"div",19),ce(1),h(2,Mt,1,0,"ng-container",20),a()),i&2){let r=u();d(2),c("ngTemplateOutlet",r.headerTemplate)("ngTemplateOutletContext",ne(2,re,r.modelValue(),r.visibleOptions()))}}function Dt(i,o){i&1&&g(0,"CheckIcon",29),i&2&&(c("styleClass","p-checkbox-icon"),O("aria-hidden",!0))}function kt(i,o){}function Vt(i,o){i&1&&h(0,kt,0,0,"ng-template")}function At(i,o){if(i&1&&(s(0,"span",30),h(1,Vt,1,0,null,31),a()),i&2){let r=u(4);O("aria-hidden",!0),d(),c("ngTemplateOutlet",r.checkIconTemplate)}}function Nt(i,o){if(i&1&&(A(0),h(1,Dt,1,2,"CheckIcon",27)(2,At,2,2,"span",28),N()),i&2){let r=u(3);d(),c("ngIf",!r.checkIconTemplate),d(),c("ngIf",r.checkIconTemplate)}}function Rt(i,o){if(i&1){let r=J();s(0,"div",23),k("click",function(t){S(r);let n=u(2);return C(n.onToggleAll(t))})("keydown",function(t){S(r);let n=u(2);return C(n.onHeaderCheckboxKeyDown(t))}),s(1,"div",24)(2,"input",25,4),k("focus",function(t){S(r);let n=u(2);return C(n.onHeaderCheckboxFocus(t))})("blur",function(t){S(r);let n=u(2);return C(n.onHeaderCheckboxBlur(t))}),a()(),s(4,"div",26),h(5,Nt,3,2,"ng-container",15),a()()}if(i&2){let r=u(2);c("ngClass",P(8,Xe,r.disabled||r.toggleAllDisabled)),d(),O("data-p-hidden-accessible",!0),d(),c("disabled",r.disabled||r.toggleAllDisabled),O("checked",r.allSelected())("aria-label",r.toggleAllAriaLabel),d(2),c("ngClass",pe(10,It,r.allSelected(),r.headerCheckboxFocus,r.disabled||r.toggleAllDisabled)),O("aria-checked",r.allSelected()),d(),c("ngIf",r.allSelected())}}function Kt(i,o){i&1&&V(0)}function Pt(i,o){if(i&1&&(A(0),h(1,Kt,1,0,"ng-container",20),N()),i&2){let r=u(2);d(),c("ngTemplateOutlet",r.filterTemplate)("ngTemplateOutletContext",P(2,Ze,r.filterOptions))}}function Gt(i,o){i&1&&g(0,"SearchIcon",29),i&2&&(c("styleClass","p-listbox-filter-icon"),O("aria-hidden",!0))}function Ht(i,o){}function Bt(i,o){i&1&&h(0,Ht,0,0,"ng-template")}function jt(i,o){if(i&1&&(s(0,"span",37),h(1,Bt,1,0,null,31),a()),i&2){let r=u(4);O("aria-hidden",!0),d(),c("ngTemplateOutlet",r.filterIconTemplate)}}function zt(i,o){if(i&1){let r=J();s(0,"div",34)(1,"input",35,5),k("input",function(t){S(r);let n=u(3);return C(n.onFilterChange(t))})("keydown",function(t){S(r);let n=u(3);return C(n.onFilterKeyDown(t))})("blur",function(t){S(r);let n=u(3);return C(n.onFilterBlur(t))}),a(),h(3,Gt,1,2,"SearchIcon",27)(4,jt,2,2,"span",36),a()}if(i&2){let r=u(3);d(),c("value",r._filterValue()||"")("disabled",r.disabled)("tabindex",!r.disabled&&!r.focused?r.tabindex:-1),O("aria-owns",r.id+"_list")("aria-activedescendant",r.focusedOptionId)("placeholder",r.filterPlaceHolder)("aria-label",r.ariaFilterLabel),d(2),c("ngIf",!r.filterIconTemplate),d(),c("ngIf",r.filterIconTemplate)}}function Ut(i,o){if(i&1&&(h(0,zt,5,9,"div",32),s(1,"span",33),l(2),a()),i&2){let r=u(2);c("ngIf",r.filter),d(),O("data-p-hidden-accessible",!0),d(),ie(" ",r.filterResultMessageText," ")}}function Yt(i,o){if(i&1&&(s(0,"div",19),h(1,Rt,6,14,"div",21)(2,Pt,2,4,"ng-container",22)(3,Ut,3,3,"ng-template",null,3,de),a()),i&2){let r=ae(4),e=u();d(),c("ngIf",e.checkbox&&e.multiple&&e.showToggleAll),d(),c("ngIf",e.filterTemplate)("ngIfElse",r)}}function Wt(i,o){i&1&&V(0)}function Qt(i,o){if(i&1&&h(0,Wt,1,0,"ng-container",20),i&2){let r=o.$implicit,e=o.options;u(2);let t=ae(9);c("ngTemplateOutlet",t)("ngTemplateOutletContext",ne(2,re,r,e))}}function qt(i,o){i&1&&V(0)}function $t(i,o){if(i&1&&h(0,qt,1,0,"ng-container",20),i&2){let r=o.options,e=u(3);c("ngTemplateOutlet",e.loaderTemplate)("ngTemplateOutletContext",P(2,Ze,r))}}function Jt(i,o){i&1&&(A(0),h(1,$t,1,4,"ng-template",40),N())}function Xt(i,o){if(i&1){let r=J();s(0,"p-scroller",38,6),k("onLazyLoad",function(t){S(r);let n=u();return C(n.onLazyLoad.emit(t))}),h(2,Qt,1,5,"ng-template",39)(3,Jt,2,0,"ng-container",15),a()}if(i&2){let r=u();y(P(9,fe,r.scrollHeight)),c("items",r.visibleOptions())("itemSize",r.virtualScrollItemSize)("autoSize",!0)("tabindex",-1)("lazy",r.lazy)("options",r.virtualScrollOptions),d(3),c("ngIf",r.loaderTemplate)}}function Zt(i,o){i&1&&V(0)}function ei(i,o){if(i&1&&(A(0),h(1,Zt,1,0,"ng-container",20),N()),i&2){let r=u(),e=ae(9);d(),c("ngTemplateOutlet",e)("ngTemplateOutletContext",ne(3,re,r.visibleOptions(),f(2,Ot)))}}function ti(i,o){if(i&1&&(s(0,"span"),l(1),a()),i&2){let r=u(2).$implicit,e=u(2);d(),Z(e.getOptionGroupLabel(r.optionGroup))}}function ii(i,o){i&1&&V(0)}function ni(i,o){if(i&1&&(A(0),s(1,"li",44),h(2,ti,2,1,"span",15)(3,ii,1,0,"ng-container",20),a(),N()),i&2){let r=u(),e=r.$implicit,t=r.index,n=u().options,p=u();d(),c("ngStyle",P(5,fe,n.itemSize+"px")),O("id",p.id+"_"+p.getOptionIndex(t,n)),d(),c("ngIf",!p.groupTemplate),d(),c("ngTemplateOutlet",p.groupTemplate)("ngTemplateOutletContext",P(7,wt,e.optionGroup))}}function oi(i,o){i&1&&g(0,"CheckIcon",29),i&2&&(c("styleClass","p-checkbox-icon"),O("aria-hidden",!0))}function li(i,o){}function si(i,o){i&1&&h(0,li,0,0,"ng-template")}function ai(i,o){if(i&1&&(s(0,"span",30),h(1,si,1,0,null,31),a()),i&2){let r=u(6);O("aria-hidden",!0),d(),c("ngTemplateOutlet",r.checkIconTemplate)}}function ri(i,o){if(i&1&&(A(0),h(1,oi,1,2,"CheckIcon",27)(2,ai,2,2,"span",28),N()),i&2){let r=u(5);d(),c("ngIf",!r.checkIconTemplate),d(),c("ngIf",r.checkIconTemplate)}}function ci(i,o){if(i&1&&(s(0,"div",47)(1,"div",48),h(2,ri,3,2,"ng-container",15),a()()),i&2){let r=u(2).$implicit,e=u(2);c("ngClass",P(3,Xe,e.disabled||e.isOptionDisabled(r))),d(),c("ngClass",P(5,Et,e.isSelected(r))),d(),c("ngIf",e.isSelected(r))}}function pi(i,o){if(i&1&&(s(0,"span"),l(1),a()),i&2){let r=u(2).$implicit,e=u(2);d(),Z(e.getOptionLabel(r))}}function di(i,o){i&1&&V(0)}function mi(i,o){if(i&1){let r=J();A(0),s(1,"li",45),k("click",function(t){S(r);let n=u(),p=n.$implicit,m=n.index,I=u().options,z=u();return C(z.onOptionSelect(t,p,z.getOptionIndex(m,I)))})("dblclick",function(t){S(r);let n=u().$implicit,p=u(2);return C(p.onOptionDoubleClick(t,n))})("mousedown",function(t){S(r);let n=u().index,p=u().options,m=u();return C(m.onOptionMouseDown(t,m.getOptionIndex(n,p)))})("mouseenter",function(t){S(r);let n=u().index,p=u().options,m=u();return C(m.onOptionMouseEnter(t,m.getOptionIndex(n,p)))})("touchend",function(){S(r);let t=u(3);return C(t.onOptionTouchEnd())}),h(2,ci,3,7,"div",46)(3,pi,2,1,"span",15)(4,di,1,0,"ng-container",20),a(),N()}if(i&2){let r=u(),e=r.$implicit,t=r.index,n=u().options,p=u();d(),c("ngStyle",P(12,fe,n.itemSize+"px"))("ngClass",pe(14,Tt,p.isSelected(e),p.focusedOptionIndex()===p.getOptionIndex(t,n),p.isOptionDisabled(e)))("ariaPosInset",p.getAriaPosInset(p.getOptionIndex(t,n))),O("id",p.id+"_"+p.getOptionIndex(t,n))("aria-label",p.getOptionLabel(e))("aria-selected",p.isSelected(e))("aria-disabled",p.isOptionDisabled(e))("aria-setsize",p.ariaSetSize),d(),c("ngIf",p.checkbox&&p.multiple),d(),c("ngIf",!p.itemTemplate),d(),c("ngTemplateOutlet",p.itemTemplate)("ngTemplateOutletContext",ne(18,Lt,e,p.getOptionIndex(t,n)))}}function ui(i,o){if(i&1&&h(0,ni,4,9,"ng-container",15)(1,mi,5,21,"ng-container",15),i&2){let r=o.$implicit,e=u(2);c("ngIf",e.isOptionGroup(r)),d(),c("ngIf",!e.isOptionGroup(r))}}function hi(i,o){if(i&1&&(A(0),l(1),N()),i&2){let r=u(3);d(),ie(" ",r.emptyFilterMessageText," ")}}function fi(i,o){i&1&&V(0,null,8)}function gi(i,o){if(i&1&&(s(0,"li",49),h(1,hi,2,1,"ng-container",22)(2,fi,2,0,"ng-container",31),a()),i&2){let r=u(2);d(),c("ngIf",!r.emptyFilterTemplate&&!r.emptyTemplate)("ngIfElse",r.emptyFilter),d(),c("ngTemplateOutlet",r.emptyFilterTemplate||r.emptyTemplate)}}function xi(i,o){if(i&1&&(A(0),l(1),N()),i&2){let r=u(3);d(),ie(" ",r.emptyMessage," ")}}function _i(i,o){i&1&&V(0,null,9)}function bi(i,o){if(i&1&&(s(0,"li",49),h(1,xi,2,1,"ng-container",22)(2,_i,2,0,"ng-container",31),a()),i&2){let r=u(2);d(),c("ngIf",!r.emptyTemplate)("ngIfElse",r.empty),d(),c("ngTemplateOutlet",r.emptyTemplate)}}function yi(i,o){if(i&1){let r=J();s(0,"ul",41,7),k("focus",function(t){S(r);let n=u();return C(n.onListFocus(t))})("blur",function(t){S(r);let n=u();return C(n.onListBlur(t))})("keydown",function(t){S(r);let n=u();return C(n.onListKeyDown(t))}),h(2,ui,2,2,"ng-template",42)(3,gi,3,3,"li",43)(4,bi,3,3,"li",43),a()}if(i&2){let r=o.$implicit,e=o.options,t=u();y(e.contentStyle),c("tabindex",-1)("ngClass",e.contentStyleClass),O("aria-multiselectable",!0)("aria-activedescendant",t.focused?t.focusedOptionId:void 0)("aria-label",t.ariaLabel)("aria-multiselectable",t.multiple)("aria-disabled",t.disabled),d(2),c("ngForOf",r),d(),c("ngIf",t.hasFilter()&&t.isEmpty()),d(),c("ngIf",!t.hasFilter()&&t.isEmpty())}}function Si(i,o){i&1&&V(0)}function Ci(i,o){if(i&1&&(s(0,"div",50),ce(1,1),h(2,Si,1,0,"ng-container",20),a()),i&2){let r=u();d(2),c("ngTemplateOutlet",r.footerTemplate)("ngTemplateOutletContext",ne(2,re,r.modelValue(),r.visibleOptions()))}}function vi(i,o){if(i&1&&(s(0,"span",18),l(1),a()),i&2){let r=u();d(),ie(" ",r.emptyMessage," ")}}var Ii={provide:Ee,useExisting:ge(()=>v),multi:!0},v=(()=>{let o=class o{get options(){return this._options()}set options(e){this._options.set(e)}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}get containerClass(){return{"p-listbox p-component":!0,"p-focus":this.focused,"p-disabled":this.disabled}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get filterResultMessageText(){return T.isNotEmpty(this.visibleOptions())?this.filterMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptyFilterMessageText}get filterMessageText(){return this.filterMessage||this.config.translation.searchMessage||""}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptyFilterMessageText(){return this.emptyFilterMessage||this.config.translation.emptySearchMessage||this.config.translation.emptyFilterMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get virtualScrollerDisabled(){return!this.virtualScroll}get searchFields(){return this.filterFields||[this.optionLabel]}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?"selectAll":"unselectAll"]:void 0}constructor(e,t,n,p,m){this.el=e,this.cd=t,this.filterService=n,this.config=p,this.renderer=m,this.autoOptionFocus=!0,this.lazy=!1,this.scrollHeight="200px",this.tabindex=0,this.checkbox=!1,this.filter=!1,this.filterMatchMode="contains",this.metaKeySelection=!1,this.showToggleAll=!0,this.optionGroupChildren="items",this.optionGroupLabel="label",this.onChange=new W,this.onClick=new W,this.onDblClick=new W,this.onFilter=new W,this.onFocus=new W,this.onBlur=new W,this.onSelectAllChange=new W,this._filterValue=te(null),this.onModelChange=()=>{},this.onModelTouched=()=>{},this._selectAll=null,this._options=te(null),this.startRangeIndex=te(-1),this.focusedOptionIndex=te(-1),this.modelValue=te(null),this.visibleOptions=ve(()=>{let I=this.group?this.flatOptions(this._options()):this._options()||[];return this._filterValue()?this.filterService.filter(I,this.searchFields,this._filterValue(),this.filterMatchMode,this.filterLocale):I})}ngOnInit(){this.id=this.id||Pe(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterChange(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;case"group":this.groupTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"filter":this.filterTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"empty":this.emptyTemplate=e.template;break;case"emptyfilter":this.emptyFilterTemplate=e.template;break;case"filtericon":this.filterIconTemplate=e.template;break;case"checkicon":this.checkIconTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}writeValue(e){this.value=e,this.modelValue.set(this.value),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}flatOptions(e){return(e||[]).reduce((t,n,p)=>{t.push({optionGroup:n,group:!0,index:p});let m=this.getOptionGroupChildren(n);return m&&m.forEach(I=>t.push(I)),t},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&!this.multiple){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()])}}updateModel(e,t){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.onChange.emit({originalEvent:t,value:this.value})}removeOption(e){return this.modelValue().filter(t=>!T.equals(t,this.getOptionValue(e),this.equalityKey()))}onOptionSelect(e,t,n=-1){this.disabled||this.isOptionDisabled(t)||this.readonly||(e&&this.onClick.emit({originalEvent:e,option:t,value:this.value}),this.multiple?this.onOptionSelectMultiple(e,t):this.onOptionSelectSingle(e,t),this.optionTouched=!1,n!==-1&&this.focusedOptionIndex.set(n))}onOptionSelectMultiple(e,t){let n=this.isSelected(t),p=null;if(this.optionTouched?!1:this.metaKeySelection){let I=e.metaKey||e.ctrlKey;n?p=I?this.removeOption(t):[this.getOptionValue(t)]:(p=I?this.modelValue()||[]:[],p=[...p,this.getOptionValue(t)])}else p=n?this.removeOption(t):[...this.modelValue()||[],this.getOptionValue(t)];this.updateModel(p,e)}onOptionSelectSingle(e,t){let n=this.isSelected(t),p=!1,m=null;if(this.optionTouched?!1:this.metaKeySelection){let z=e.metaKey||e.ctrlKey;n?z&&(m=null,p=!0):(m=this.getOptionValue(t),p=!0)}else m=n?null:this.getOptionValue(t),p=!0;p&&this.updateModel(m,e)}onOptionSelectRange(e,t=-1,n=-1){if(t===-1&&(t=this.findNearestSelectedOptionIndex(n,!0)),n===-1&&(n=this.findNearestSelectedOptionIndex(t)),t!==-1&&n!==-1){let p=Math.min(t,n),m=Math.max(t,n),I=this.visibleOptions().slice(p,m+1).filter(z=>this.isValidOption(z)).map(z=>this.getOptionValue(z));this.updateModel(I,e)}}onToggleAll(e){if(!(this.disabled||this.readonly)){if(B.focus(this.headerCheckboxViewChild.nativeElement),this.selectAll!==null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let t=this.allSelected()?[]:this.visibleOptions().filter(n=>this.isValidOption(n)).map(n=>this.getOptionValue(n));this.updateModel(t,e),this.onChange.emit({originalEvent:e,value:this.value})}e.preventDefault()}}allSelected(){return this.selectAll!==null?this.selectAll:T.isNotEmpty(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}onOptionTouchEnd(){this.disabled||(this.optionTouched=!0)}onOptionMouseDown(e,t){this.changeFocusedOptionIndex(e,t)}onOptionMouseEnter(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)}onOptionDoubleClick(e,t){this.disabled||this.isOptionDisabled(t)||this.readonly||this.onDblClick.emit({originalEvent:e,option:t,value:this.value})}onFirstHiddenFocus(e){B.focus(this.listViewChild.nativeElement);let t=B.getFirstFocusableElement(this.el.nativeElement,':not([data-p-hidden-focusable="true"])');this.lastHiddenFocusableElement.nativeElement.tabIndex=T.isEmpty(t)?"-1":void 0,this.firstHiddenFocusableElement.nativeElement.tabIndex=-1}onLastHiddenFocus(e){if(e.relatedTarget===this.listViewChild.nativeElement){let n=B.getFirstFocusableElement(this.el.nativeElement,":not(.p-hidden-focusable)");B.focus(n),this.firstHiddenFocusableElement.nativeElement.tabIndex=void 0}else B.focus(this.firstHiddenFocusableElement.nativeElement);this.lastHiddenFocusableElement.nativeElement.tabIndex=-1}onFocusout(e){!this.el.nativeElement.contains(e.relatedTarget)&&this.lastHiddenFocusableElement&&this.firstHiddenFocusableElement&&(this.firstHiddenFocusableElement.nativeElement.tabIndex=this.lastHiddenFocusableElement.nativeElement.tabIndex=void 0)}onListFocus(e){this.focused=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOptionIndex.set(-1),this.startRangeIndex.set(-1),this.searchValue=""}onHeaderCheckboxFocus(e){this.headerCheckboxFocus=!0}onHeaderCheckboxBlur(){this.headerCheckboxFocus=!1}onHeaderCheckboxKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"Space":this.onToggleAll(e);break;case"Enter":this.onToggleAll(e);break;case"Tab":this.onHeaderCheckboxTabKeyDown(e);break;default:break}}onHeaderCheckboxTabKeyDown(e){B.focus(this.listViewChild.nativeElement),e.preventDefault()}onFilterChange(e){let t=e.target.value?.trim();this._filterValue.set(t),this.focusedOptionIndex.set(-1),this.startRangeIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0)}onFilterBlur(e){this.focusedOptionIndex.set(-1),this.startRangeIndex.set(-1)}onListKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onSpaceKey(e);break;case"Tab":break;case"ShiftLeft":case"ShiftRight":this.onShiftKey();break;default:if(this.multiple&&e.code==="KeyA"&&t){let n=this.visibleOptions().filter(p=>this.isValidOption(p)).map(p=>this.getOptionValue(p));this.updateModel(n,e),e.preventDefault();break}!t&&T.isPrintableCharacter(e.key)&&(this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey();break;default:break}}onArrowDownKey(e){let t=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),t),this.changeFocusedOptionIndex(e,t),e.preventDefault()}onArrowUpKey(e){let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,t,this.startRangeIndex()),this.changeFocusedOptionIndex(e,t),e.preventDefault()}onArrowLeftKey(e,t=!1){t&&this.focusedOptionIndex.set(-1)}onHomeKey(e,t=!1){if(t)e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex.set(-1);else{let n=e.metaKey||e.ctrlKey,p=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&n&&this.onOptionSelectRange(e,p,this.startRangeIndex()),this.changeFocusedOptionIndex(e,p)}e.preventDefault()}onEndKey(e,t=!1){if(t){let n=e.currentTarget,p=n.value.length;n.setSelectionRange(p,p),this.focusedOptionIndex.set(-1)}else{let n=e.metaKey||e.ctrlKey,p=this.findLastOptionIndex();this.multiple&&e.shiftKey&&n&&this.onOptionSelectRange(e,this.startRangeIndex(),p),this.changeFocusedOptionIndex(e,p)}e.preventDefault()}onPageDownKey(e){this.scrollInView(0),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onEnterKey(e){this.focusedOptionIndex()!==-1&&(this.multiple&&e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()])),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onShiftKey(){let e=this.focusedOptionIndex();this.startRangeIndex.set(e)}getOptionGroupChildren(e){return this.optionGroupChildren?T.resolveFieldData(e,this.optionGroupChildren):e.items}getOptionGroupLabel(e){return this.optionGroupLabel?T.resolveFieldData(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionLabel(e){return this.optionLabel?T.resolveFieldData(e,this.optionLabel):e.label!=null?e.label:e}getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t.getItemOptions(e).index}getOptionValue(e){return this.optionValue?T.resolveFieldData(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1}hasSelectedOption(){return T.isNotEmpty(this.modelValue())}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}changeFocusedOptionIndex(e,t){this.focusedOptionIndex()!==t&&(this.focusedOptionIndex.set(t),this.scrollInView(),this.selectOnFocus&&!this.multiple&&this.onOptionSelect(e,this.visibleOptions()[t]))}searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,p=!1;return this.focusedOptionIndex()!==-1?(n=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(m=>this.isOptionMatched(m)),n=n===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(m=>this.isOptionMatched(m)):n+this.focusedOptionIndex()):n=this.visibleOptions().findIndex(m=>this.isOptionMatched(m)),n!==-1&&(p=!0),n===-1&&this.focusedOptionIndex()===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),p}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,n=B.findSingle(this.listViewChild.nativeElement,`li[id="${t}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||this.virtualScroll&&this.scroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex())}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return T.findLastIndex(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?T.findLastIndex(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let t=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return t>-1?t+e+1:e}findNextSelectedOptionIndex(e){let t=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidSelectedOption(n)):-1;return t>-1?t+e+1:-1}findPrevSelectedOptionIndex(e){let t=this.hasSelectedOption()&&e>0?T.findLastIndex(this.visibleOptions().slice(0,e),n=>this.isValidSelectedOption(n)):-1;return t>-1?t:-1}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findPrevOptionIndex(e){let t=e>0?T.findLastIndex(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return t>-1?t:e}findNearestSelectedOptionIndex(e,t=!1){let n=-1;return this.hasSelectedOption()&&(t?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e}equalityKey(){return this.optionValue?null:this.dataKey}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionDisabled(e){return this.optionDisabled?T.resolveFieldData(e,this.optionDisabled):!1}isSelected(e){let t=this.getOptionValue(e);return this.multiple?(this.modelValue()||[]).some(n=>T.equals(n,t,this.equalityKey())):T.equals(this.modelValue(),t,this.equalityKey())}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isEmpty(){return!this._options()?.length||!this.visibleOptions()?.length}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}resetFilter(){this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value=""),this._filterValue.set(null)}ngOnDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}};o.\u0275fac=function(t){return new(t||o)(ee(xe),ee(Ce),ee(Ge),ee(He),ee(_e))},o.\u0275cmp=x({type:o,selectors:[["p-listbox"]],contentQueries:function(t,n,p){if(t&1&&(se(p,Be,5),se(p,je,5),se(p,Q,4)),t&2){let m;R(m=K())&&(n.headerFacet=m.first),R(m=K())&&(n.footerFacet=m.first),R(m=K())&&(n.templates=m)}},viewQuery:function(t,n){if(t&1&&(X(gt,5),X(xt,5),X(_t,5),X(bt,5),X(yt,5),X(St,5)),t&2){let p;R(p=K())&&(n.headerCheckboxViewChild=p.first),R(p=K())&&(n.filterViewChild=p.first),R(p=K())&&(n.lastHiddenFocusableElement=p.first),R(p=K())&&(n.firstHiddenFocusableElement=p.first),R(p=K())&&(n.scroller=p.first),R(p=K())&&(n.listViewChild=p.first)}},hostAttrs:[1,"p-element"],inputs:{id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:"autoOptionFocus",ariaLabel:"ariaLabel",selectOnFocus:"selectOnFocus",searchLocale:"searchLocale",focusOnHover:"focusOnHover",filterMessage:"filterMessage",filterFields:"filterFields",lazy:"lazy",virtualScroll:"virtualScroll",virtualScrollItemSize:"virtualScrollItemSize",virtualScrollOptions:"virtualScrollOptions",scrollHeight:"scrollHeight",tabindex:"tabindex",multiple:"multiple",style:"style",styleClass:"styleClass",listStyle:"listStyle",listStyleClass:"listStyleClass",readonly:"readonly",disabled:"disabled",checkbox:"checkbox",filter:"filter",filterBy:"filterBy",filterMatchMode:"filterMatchMode",filterLocale:"filterLocale",metaKeySelection:"metaKeySelection",dataKey:"dataKey",showToggleAll:"showToggleAll",optionLabel:"optionLabel",optionValue:"optionValue",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",optionDisabled:"optionDisabled",ariaFilterLabel:"ariaFilterLabel",filterPlaceHolder:"filterPlaceHolder",emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",group:"group",options:"options",filterValue:"filterValue",selectAll:"selectAll"},outputs:{onChange:"onChange",onClick:"onClick",onDblClick:"onDblClick",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onSelectAllChange:"onSelectAllChange"},features:[Se([Ii])],ngContentSelectors:vt,decls:16,vars:24,consts:[["firstHiddenFocusableElement",""],["buildInItems",""],["lastHiddenFocusableElement",""],["builtInFilterElement",""],["headerchkbox",""],["filterInput",""],["scroller",""],["list",""],["emptyFilter",""],["empty",""],[3,"focusout","ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","tabindex"],["class","p-listbox-header",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"items","style","itemSize","autoSize","tabindex","lazy","options","onLazyLoad",4,"ngIf"],[4,"ngIf"],["class","p-listbox-footer",4,"ngIf"],["role","status","aria-live","polite","class","p-hidden-accessible",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[1,"p-listbox-header"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-checkbox p-component",3,"ngClass","click","keydown",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"p-checkbox","p-component",3,"click","keydown","ngClass"],[1,"p-hidden-accessible"],["type","checkbox","readonly","readonly",3,"focus","blur","disabled"],["role","checkbox",1,"p-checkbox-box",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],["class","p-listbox-filter-container",4,"ngIf"],["role","status","attr.aria-live","polite",1,"p-hidden-accessible"],[1,"p-listbox-filter-container"],["type","text","role","searchbox",1,"p-listbox-filter","p-inputtext","p-component",3,"input","keydown","blur","value","disabled","tabindex"],["class","p-listbox-filter-icon",4,"ngIf"],[1,"p-listbox-filter-icon"],[3,"onLazyLoad","items","itemSize","autoSize","tabindex","lazy","options"],["pTemplate","content"],["pTemplate","loader"],["role","listbox",1,"p-listbox-list",3,"focus","blur","keydown","tabindex","ngClass"],["ngFor","",3,"ngForOf"],["class","p-listbox-empty-message","role","option",4,"ngIf"],["role","option",1,"p-listbox-item-group",3,"ngStyle"],["pRipple","","role","option",1,"p-listbox-item",3,"click","dblclick","mousedown","mouseenter","touchend","ngStyle","ngClass","ariaPosInset"],["class","p-checkbox p-component",3,"ngClass",4,"ngIf"],[1,"p-checkbox","p-component",3,"ngClass"],[1,"p-checkbox-box",3,"ngClass"],["role","option",1,"p-listbox-empty-message"],[1,"p-listbox-footer"]],template:function(t,n){if(t&1){let p=J();ye(Ct),s(0,"div",10),k("focusout",function(I){return S(p),C(n.onFocusout(I))}),s(1,"span",11,0),k("focus",function(I){return S(p),C(n.onFirstHiddenFocus(I))}),a(),h(3,Ft,3,5,"div",12)(4,Yt,5,3,"div",12),s(5,"div",13),h(6,Xt,4,11,"p-scroller",14)(7,ei,2,6,"ng-container",15)(8,yi,5,12,"ng-template",null,1,de),a(),h(10,Ci,3,5,"div",16)(11,vi,2,1,"span",17),s(12,"span",18),l(13),a(),s(14,"span",11,2),k("focus",function(I){return S(p),C(n.onLastHiddenFocus(I))}),a()()}t&2&&($(n.styleClass),c("ngClass",n.containerClass)("ngStyle",n.style),O("id",n.id),d(),c("tabindex",n.disabled?-1:n.tabindex),O("aria-hidden",!0)("data-p-hidden-focusable",!0),d(2),c("ngIf",n.headerFacet||n.headerTemplate),d(),c("ngIf",n.checkbox&&n.multiple&&n.showToggleAll||n.filter),d(),$(n.listStyleClass),be("max-height",n.virtualScroll?"auto":n.scrollHeight||"auto"),c("ngClass","p-listbox-list-wrapper")("ngStyle",n.listStyle),d(),c("ngIf",n.virtualScroll),d(),c("ngIf",!n.virtualScroll),d(3),c("ngIf",n.footerFacet||n.footerTemplate),d(),c("ngIf",n.isEmpty()),d(2),ie(" ",n.selectedMessageText," "),d(),c("tabindex",n.disabled?-1:n.tabindex),O("aria-hidden",!0)("data-p-hidden-focusable",!0))},dependencies:[Ie,Oe,we,Le,Te,Q,ze,Ye,We,Qe],styles:[`@layer primeng{.p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;-webkit-user-select:none;user-select:none}.p-listbox-header{display:flex;align-items:center}.p-listbox-filter-container{position:relative;flex:1 1 auto}.p-listbox-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-listbox-filter{width:100%}}
`],encapsulation:2,changeDetection:0});let i=o;return i})(),et=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=U({imports:[oe,me,Ue,ue,me,ue]});let i=o;return i})();var tt=(()=>{let o=class o{constructor(){this.code={basic:`<span id="lb">Options</span>
<p-listbox ariaLabelledBy="lb"></p-listbox>

<p-listbox ariaLabel="City"></p-listbox>`}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["accessibility-doc"]],decls:141,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,n){t&1&&(s(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),a(),s(4,"p"),l(5," Value to describe the component can be provided "),s(6,"i"),l(7,"ariaLabelledBy"),a(),l(8," or "),s(9,"i"),l(10,"ariaLabel"),a(),l(11," props. The list element has a "),s(12,"i"),l(13,"listbox"),a(),l(14," role with the "),s(15,"i"),l(16,"aria-multiselectable"),a(),l(17," attribute that sets to true when multiple selection is enabled. Each list item has an "),s(18,"i"),l(19,"option"),a(),l(20," role with "),s(21,"i"),l(22,"aria-selected"),a(),l(23," and "),s(24,"i"),l(25,"aria-disabled"),a(),l(26," as their attributes. "),a()(),g(27,"app-code",0),s(28,"h3"),l(29,"Keyboard Support"),a(),s(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),l(35,"Key"),a(),s(36,"th"),l(37,"Function"),a()()(),s(38,"tbody")(39,"tr")(40,"td")(41,"i"),l(42,"tab"),a()(),s(43,"td"),l(44,"Moves focus to the first selected option, if there is none then first option receives the focus."),a()(),s(45,"tr")(46,"td")(47,"i"),l(48,"up arrow"),a()(),s(49,"td"),l(50,"Moves focus to the previous option."),a()(),s(51,"tr")(52,"td")(53,"i"),l(54,"down arrow"),a()(),s(55,"td"),l(56,"Moves focus to the next option."),a()(),s(57,"tr")(58,"td")(59,"i"),l(60,"enter"),a()(),s(61,"td"),l(62,"Toggles the selected state of the focused option."),a()(),s(63,"tr")(64,"td")(65,"i"),l(66,"space"),a()(),s(67,"td"),l(68,"Toggles the selected state of the focused option."),a()(),s(69,"tr")(70,"td")(71,"i"),l(72,"home"),a()(),s(73,"td"),l(74,"Moves focus to the first option."),a()(),s(75,"tr")(76,"td")(77,"i"),l(78,"end"),a()(),s(79,"td"),l(80,"Moves focus to the last option."),a()(),s(81,"tr")(82,"td")(83,"i"),l(84,"shift"),a(),l(85," + "),s(86,"i"),l(87,"down arrow"),a()(),s(88,"td"),l(89,"Moves focus to the next option and toggles the selection state."),a()(),s(90,"tr")(91,"td")(92,"i"),l(93,"shift"),a(),l(94," + "),s(95,"i"),l(96,"up arrow"),a()(),s(97,"td"),l(98,"Moves focus to the previous option and toggles the selection state."),a()(),s(99,"tr")(100,"td")(101,"i"),l(102,"shift"),a(),l(103," + "),s(104,"i"),l(105,"space"),a()(),s(106,"td"),l(107,"Selects the items between the most recently selected option and the focused option."),a()(),s(108,"tr")(109,"td")(110,"i"),l(111,"control"),a(),l(112," + "),s(113,"i"),l(114,"shift"),a(),l(115," + "),s(116,"i"),l(117,"home"),a()(),s(118,"td"),l(119,"Selects the focused options and all the options up to the first one."),a()(),s(120,"tr")(121,"td")(122,"i"),l(123,"control"),a(),l(124," + "),s(125,"i"),l(126,"shift"),a(),l(127," + "),s(128,"i"),l(129,"end"),a()(),s(130,"td"),l(131,"Selects the focused options and all the options down to the last one."),a()(),s(132,"tr")(133,"td")(134,"i"),l(135,"control"),a(),l(136," + "),s(137,"i"),l(138,"a"),a()(),s(139,"td"),l(140,"Selects all options."),a()()()()()()),t&2&&(d(27),c("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[_,b],encapsulation:2});let i=o;return i})();var Oi=()=>({width:"15rem"}),wi=()=>({"max-height":"220px"}),it=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [style]="{'width':'15rem'}" [listStyle]="{'max-height': '220px'}"></p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [style]="{'width':'15rem'}" [listStyle]="{'max-height': '220px'}"></p-listbox>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-basic-demo',
    templateUrl: './listbox-basic-demo.html'
})
export class ListboxBasicDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["basic-doc"]],decls:42,vars:8,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name",3,"ngModelChange","options","ngModel","listStyle"],["selector","listbox-basic-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2," Listbox is used as a controlled component with "),s(3,"i"),l(4,"ngModel"),a(),l(5," property along with an "),s(6,"i"),l(7,"options"),a(),l(8," collection. Label and value of an option are defined with the "),s(9,"i"),l(10,"optionLabel"),a(),l(11," and "),s(12,"i"),l(13,"optionValue"),a(),l(14," properties respectively. Default property name for the "),s(15,"i"),l(16,"optionLabel"),a(),l(17," is "),s(18,"i"),l(19,"label"),a(),l(20," and "),s(21,"i"),l(22,"value"),a(),l(23," for the "),s(24,"i"),l(25,"optionValue"),a(),l(26,". If "),s(27,"i"),l(28,"optionValue"),a(),l(29," is omitted and the object has no "),s(30,"i"),l(31,"value"),a(),l(32," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no "),s(33,"i"),l(34,"optionLabel"),a(),l(35," and "),s(36,"i"),l(37,"optionValue"),a(),l(38," would be necessary. "),a()(),s(39,"div",0)(40,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCity,m)||(n.selectedCity=m),m}),a()(),g(41,"app-code",2)),t&2&&(d(40),y(f(6,Oi)),c("options",n.cities),L("ngModel",n.selectedCity),c("listStyle",f(7,wi)),d(),c("code",n.code))},dependencies:[_,v,w,F,b],encapsulation:2});let i=o;return i})();var Ti=()=>({width:"15rem"}),Li=()=>({"max-height":"220px"}),nt=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-disabled-demo',
    templateUrl: './listbox-disabled-demo.html'
})
export class ListboxDisabledDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["disabled-doc"]],decls:9,vars:9,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name",3,"ngModelChange","options","ngModel","disabled","listStyle"],["selector","listbox-disabled-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"When "),s(3,"i"),l(4,"disabled"),a(),l(5," is present, the element cannot be edited and focused."),a()(),s(6,"div",0)(7,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCity,m)||(n.selectedCity=m),m}),a()(),g(8,"app-code",2)),t&2&&(d(7),y(f(7,Ti)),c("options",n.cities),L("ngModel",n.selectedCity),c("disabled",!0)("listStyle",f(8,Li)),d(),c("code",n.code))},dependencies:[_,v,w,F,b],encapsulation:2});let i=o;return i})();var Ei=()=>({width:"15rem"}),Mi=()=>({"max-height":"220px"}),ot=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [filter]="true" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [filter]="true" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-filter-demo',
    templateUrl: './listbox-filter-demo.html'
})
export class ListboxFilterDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["filter-doc"]],decls:9,vars:9,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name",3,"ngModelChange","options","ngModel","filter","listStyle"],["selector","listbox-filter-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"ListBox provides built-in filtering that is enabled by adding the "),s(3,"i"),l(4,"filter"),a(),l(5," property."),a()(),s(6,"div",0)(7,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCity,m)||(n.selectedCity=m),m}),a()(),g(8,"app-code",2)),t&2&&(d(7),y(f(7,Ei)),c("options",n.cities),L("ngModel",n.selectedCity),c("filter",!0)("listStyle",f(8,Mi)),d(),c("code",n.code))},dependencies:[_,v,w,F,b],encapsulation:2});let i=o;return i})();var Fi=()=>({width:"15rem"}),Di=()=>({"max-height":"250px"});function ki(i,o){if(i&1&&(s(0,"div",4),g(1,"img",5),s(2,"span"),l(3),a()()),i&2){let r=o.$implicit;d(),$("mr-2 flag flag-"+r.value),d(2),Z(r.label)}}var lt=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }">
    <ng-template let-group pTemplate="group">
        <div class="flex align-items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }">
        <ng-template let-group pTemplate="group">
            <div class="flex align-items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-listbox>
</div>`,typescript:`
import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

interface Country {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-group-demo',
    templateUrl: './listbox-group-demo.html'
})
export class ListboxGroupDemo {
    groupedCities!: SelectItemGroup[];

    selectedCountry!: Country;

    constructor() {
        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }
}`},this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["group-doc"]],decls:7,vars:9,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","options","group","ngModel","listStyle"],["pTemplate","group"],["selector","listbox-group-demo",3,"code"],[1,"flex","align-items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"Options can be grouped when a nested data structures is provided."),a()(),s(3,"div",0)(4,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCountry,m)||(n.selectedCountry=m),m}),h(5,ki,4,3,"ng-template",2),a()(),g(6,"app-code",3)),t&2&&(d(4),y(f(7,Fi)),c("options",n.groupedCities)("group",!0),L("ngModel",n.selectedCountry),c("listStyle",f(8,Di)),d(2),c("code",n.code))},dependencies:[_,v,Q,w,F,b],encapsulation:2});let i=o;return i})();var st=(()=>{let o=class o{constructor(){this.code={typescript:"import { ListboxModule } from 'primeng/listbox';"}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&g(0,"app-code",0),t&2&&c("code",n.code)("hideToggleCode",!0)},dependencies:[_],encapsulation:2});let i=o;return i})();var Vi=()=>({width:"15rem"}),Ai=()=>({"max-height":"220px"}),at=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="ng-invalid ng-dirty" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="ng-invalid ng-dirty" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>
</div>`,typescript:`
import { Component, ngOnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-invalid-demo',
    templateUrl: './listbox-invalid-demo.html'
})
export class ListboxInvalidDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["listbox-invalid-demo"]],decls:12,vars:8,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name",1,"ng-invalid","ng-dirty",3,"ngModelChange","options","ngModel","listStyle"],["selector","listbox-invalid-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"Invalid state style is added using the "),s(3,"i"),l(4,"ng-invalid"),a(),l(5," and "),s(6,"i"),l(7,"ng-dirty"),a(),l(8," class to indicate a failed validation."),a()(),s(9,"div",0)(10,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCity,m)||(n.selectedCity=m),m}),a()(),g(11,"app-code",2)),t&2&&(d(10),y(f(6,Vi)),c("options",n.cities),L("ngModel",n.selectedCity),c("listStyle",f(7,Ai)),d(),c("code",n.code))},dependencies:[_,v,w,F,b],encapsulation:2});let i=o;return i})();var Ni=()=>({width:"15rem"}),Ri=()=>({"max-height":"220px"}),rt=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [style]="{'width':'15rem'}" [multiple]="true" [metaKeySelection]="false" [listStyle]="{'max-height': '220px'}"></p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [style]="{'width':'15rem'}" [multiple]="true" [metaKeySelection]="false" [listStyle]="{'max-height': '220px'}"></p-listbox>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-multiple-demo',
    templateUrl: './listbox-multiple-demo.html'
})
export class ListboxMultipleDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["multiple-doc"]],decls:12,vars:10,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name",3,"ngModelChange","options","ngModel","multiple","metaKeySelection","listStyle"],["selector","listbox-multiple-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2," ListBox allows choosing a single item by default, enable "),s(3,"i"),l(4,"multiple"),a(),l(5," property to choose more than one. When the optional "),s(6,"i"),l(7,"metaKeySelection"),a(),l(8," is present, behavior is changed in a way that selecting a new item requires meta key to be present. "),a()(),s(9,"div",0)(10,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCities,m)||(n.selectedCities=m),m}),a()(),g(11,"app-code",2)),t&2&&(d(10),y(f(8,Ni)),c("options",n.cities),L("ngModel",n.selectedCities),c("multiple",!0)("metaKeySelection",!1)("listStyle",f(9,Ri)),d(),c("code",n.code))},dependencies:[_,v,w,F,b],encapsulation:2});let i=o;return i})();var Ki=()=>({width:"15rem"}),Pi=()=>({"max-height":"220px"}),ct=(()=>{let o=class o{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-listbox [options]="cities" formControlName="selectedCity" optionLabel="name" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-listbox [options]="cities" formControlName="selectedCity" optionLabel="name" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}"></p-listbox>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-reactive-forms-demo',
    templateUrl: './listbox-reactive-forms-demo.html'
})
export class ListboxReactiveFormsDemo implements OnInit {
    cities!: City[];

    formGroup!: FormGroup;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.formGroup = new FormGroup({
            selectedCity: new FormControl<City | null>(null)
        });
    } 
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.formGroup=new Fe({selectedCity:new De(null)})}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["reactive-forms-doc"]],decls:10,vars:8,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","selectedCity","optionLabel","name",3,"options","listStyle"],["selector","listbox-reactive-forms-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"Listbox can also be used with reactive forms. In this case, the "),s(3,"i"),l(4,"formControlName"),a(),l(5," property is used to bind the component to a form control."),a()(),s(6,"div",0)(7,"form",1),g(8,"p-listbox",2),a()(),g(9,"app-code",3)),t&2&&(d(7),c("formGroup",n.formGroup),d(),y(f(6,Ki)),c("options",n.cities)("listStyle",f(7,Pi)),d(),c("code",n.code))},dependencies:[_,v,ke,w,Me,Ve,Ae,b],encapsulation:2});let i=o;return i})();var Gi=()=>["/theming"],pt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["style-doc"]],decls:40,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"Following is the list of structural style classes, for theming classes visit "),s(3,"a",0),l(4,"theming"),a(),l(5," page."),a()(),s(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),l(11,"Name"),a(),s(12,"th"),l(13,"Element"),a()()(),s(14,"tbody")(15,"tr")(16,"td"),l(17,"p-listbox"),a(),s(18,"td"),l(19,"Container element."),a()(),s(20,"tr")(21,"td"),l(22,"p-listbox-list"),a(),s(23,"td"),l(24,"List container."),a()(),s(25,"tr")(26,"td"),l(27,"p-listbox-item"),a(),s(28,"td"),l(29,"An item in the list."),a()(),s(30,"tr")(31,"td"),l(32,"p-listbox-header"),a(),s(33,"td"),l(34,"Header element."),a()(),s(35,"tr")(36,"td"),l(37,"p-listbox-filter-container"),a(),s(38,"td"),l(39,"Container of filter input in header."),a()()()()()),t&2&&(d(3),c("routerLink",f(1,Gi)))},dependencies:[Ke,b],encapsulation:2});let i=o;return i})();var Hi=()=>({width:"15rem"}),Bi=()=>({"max-height":"250px"}),ji=()=>({"max-height":"220px"});function zi(i,o){if(i&1&&(s(0,"div",4),g(1,"img",5),s(2,"div"),l(3),a()()),i&2){let r=o.$implicit;d(),$("flag flag-"+r.code.toLowerCase()),d(2),Z(r.name)}}var dt=(()=>{let o=class o{constructor(){this.code={basic:`<p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}">
    <ng-template let-country pTemplate="item">
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [listStyle]="{ 'max-height': '250px' }" [style]="{ width: '15rem' }" [listStyle]="{'max-height': '220px'}">
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-listbox>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface Country {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-template-demo',
    templateUrl: './listbox-template-demo.html'
})
export class ListboxTemplateDemo implements OnInit {
    countries!: Country[];

    selectedCountry!: Country;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`}}ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["template-doc"]],decls:10,vars:10,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name",3,"ngModelChange","options","ngModel","listStyle"],["pTemplate","item"],["selector","listbox-template-demo",3,"code"],[1,"flex","align-items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2,"Custom content for an option is displayed with the "),s(3,"i"),l(4,"pTemplate"),a(),l(5," property that takes an option as a parameter."),a()(),s(6,"div",0)(7,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedCountry,m)||(n.selectedCountry=m),m}),h(8,zi,4,3,"ng-template",2),a()(),g(9,"app-code",3)),t&2&&(d(7),y(f(7,Hi)),c("options",n.countries),L("ngModel",n.selectedCountry),c("listStyle",f(8,Bi))("listStyle",f(9,ji)),d(2),c("code",n.code))},dependencies:[_,v,Q,w,F,b],encapsulation:2});let i=o;return i})();var Ui=()=>({width:"15rem"}),Yi=()=>({"max-height":"220px"}),mt=(()=>{let o=class o{constructor(){this.items=Array.from({length:1e5},(e,t)=>({label:`Item #${t}`,value:t})),this.selectAll=!1,this.code={basic:`<p-listbox
    [options]="items"
    [(ngModel)]="selectedItems"
    [selectAll]="selectAll"
    optionLabel="label"
    [style]="{ width: '15rem' }"
    [virtualScroll]="true"
    [filter]="true"
    [virtualScrollItemSize]="43"
    [multiple]="true"
    [checkbox]="true"
    [showToggleAll]="false"
    [metaKeySelection]="false"
    [showToggleAll]="true"
    (onSelectAllChange)="onSelectAllChange($event)"
    (onChange)="onChange($event)"
    [listStyle]="{ 'max-height': '220px' }"
></p-listbox>`,html:`
<div class="card flex justify-content-center">
    <p-listbox
        [options]="items"
        [(ngModel)]="selectedItems"
        [selectAll]="selectAll"
        optionLabel="label"
        [style]="{ width: '15rem' }"
        [virtualScroll]="true"
        [filter]="true"
        [virtualScrollItemSize]="43"
        [multiple]="true"
        [checkbox]="true"
        [showToggleAll]="false"
        [metaKeySelection]="false"
        [showToggleAll]="true"
        (onSelectAllChange)="onSelectAllChange($event)"
        (onChange)="onChange($event)"
        [listStyle]="{ 'max-height': '220px' }"
    ></p-listbox>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'listbox-virtual-scroll-demo',
    templateUrl: './listbox-virtual-scroll-demo.html'
})
export class ListboxVirtualScrollDemo {
    items = Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))

    selectedItems!: any[];

    selectAll = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.items] : [];
        this.selectAll = event.checked;
        event.updateModel(this.selectedItems, event.originalEvent)
    }

    onChange(event) {
        const { originalEvent, value } = event
        if(value) this.selectAll = value.length === this.items.length;
    }

}`}}onSelectAllChange(e){this.selectedItems=e.checked?[...this.items]:[],this.selectAll=e.checked}onChange(e){let{value:t}=e;t&&(this.selectAll=t.length===this.items.length)}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["virtual-scroll-doc"]],decls:12,vars:17,consts:[[1,"card","flex","justify-content-center"],["optionLabel","label",3,"ngModelChange","onSelectAllChange","onChange","options","ngModel","selectAll","virtualScroll","filter","virtualScrollItemSize","multiple","checkbox","showToggleAll","metaKeySelection","listStyle"],["selector","listbox-virtual-scroll-demo",3,"code"]],template:function(t,n){t&1&&(s(0,"app-docsectiontext")(1,"p"),l(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),s(3,"i"),l(4,"virtualScroll"),a(),l(5," property to true and defining "),s(6,"i"),l(7,"virtualScrollItemSize"),a(),l(8," to specify the height of an item. "),a()(),s(9,"div",0)(10,"p-listbox",1),M("ngModelChange",function(m){return E(n.selectedItems,m)||(n.selectedItems=m),m}),k("onSelectAllChange",function(m){return n.onSelectAllChange(m)})("onChange",function(m){return n.onChange(m)}),a()(),g(11,"app-code",2)),t&2&&(d(10),y(f(15,Ui)),c("options",n.items),L("ngModel",n.selectedItems),c("selectAll",n.selectAll)("virtualScroll",!0)("filter",!0)("virtualScrollItemSize",43)("multiple",!0)("checkbox",!0)("showToggleAll",!1)("metaKeySelection",!1)("showToggleAll",!0)("listStyle",f(16,Yi)),d(),c("code",n.code))},dependencies:[_,v,w,F,b],encapsulation:2});let i=o;return i})();var ut=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=U({imports:[oe,qe,le,et,Ne,Re,he,he]});let i=o;return i})();var Wi=()=>["Listbox"],ht=(()=>{let o=class o{constructor(){this.docs=[{id:"import",label:"Import",component:st},{id:"basic",label:"Basic",component:it},{id:"reactive-forms",label:"Reactive Forms",component:ct},{id:"multiple",label:"Multiple",component:rt},{id:"template",label:"Template",component:dt},{id:"group",label:"Group",component:lt},{id:"filter",label:"Filter",component:ot},{id:"invalid",label:"Invalid",component:at},{id:"disabled",label:"Disabled",component:nt},{id:"virtualscroll",label:"Virtual Scroll",component:mt},{id:"style",label:"Style",component:pt},{id:"accessibility",label:"Accessibility",component:tt}]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Listbox Component","header","Listbox","description","Listbox is used to select one or more values from a list of items.",3,"docs","apiDocs"]],template:function(t,n){t&1&&g(0,"app-doc",0),t&2&&c("docs",n.docs)("apiDocs",f(2,Wi))},dependencies:[$e],encapsulation:2});let i=o;return i})();var ft=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=U({imports:[le.forChild([{path:"",component:ht}]),le]});let i=o;return i})();var Po=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=U({imports:[oe,ft,ut]});let i=o;return i})();export{Po as ListboxDemoModule};
