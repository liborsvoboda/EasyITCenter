import{a as ie,d as Ve,f as Ke,g as ne,h as Be,i as Ue}from"./chunk-EYXVECVR.js";import{a as Pe}from"./chunk-6KDLFDDH.js";import{a as Fe}from"./chunk-HKNDESHI.js";import{a as Le}from"./chunk-G7VICPVK.js";import{a as U}from"./chunk-NZVHRD6T.js";import{b as ke}from"./chunk-H6W5JTHG.js";import{a as T,b as Ae,c as te}from"./chunk-AS5FXEGH.js";import{a as C,b as Me}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as De,a as S,g as y,h as Ie,j as Oe,n as we,q as k,r as ee,w as Ce,x as Te,y as Ee}from"./chunk-UWMVDULA.js";import{o as Se,t as N}from"./chunk-N5X6XDRN.js";import{Cb as K,Cc as xe,Eb as pe,Ec as ve,Fb as X,Fc as _e,Gb as Q,Hb as H,Ib as me,Ic as ye,Jb as t,Jc as be,Kb as b,Na as A,Nc as B,Pc as Z,Sa as a,Sb as w,Ta as x,Tb as ue,Ub as fe,V as D,Vb as Y,Ya as ce,da as _,dc as he,ea as L,ib as m,jb as h,kb as d,kc as P,ma as I,na as O,ob as de,rb as s,sb as l,tb as u,ua as le,ub as G,va as M,vb as J,vc as ge,wb as V,xb as q,yb as F,za as ae,zb as g}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Ze=["listelement"],et=["filter"],tt=(r,o,c)=>({"p-orderlist p-component":!0,"p-orderlist-striped":r,"p-orderlist-controls-left":o,"p-orderlist-controls-right":c}),it=r=>({options:r}),nt=(r,o,c)=>({"p-highlight":r,"p-disabled":o,"p-focus":c}),rt=(r,o)=>({$implicit:r,index:o});function ot(r,o){r&1&&u(0,"AngleUpIcon"),r&2&&h("data-pc-section","moveupicon")}function st(r,o){}function lt(r,o){r&1&&m(0,st,0,0,"ng-template")}function at(r,o){r&1&&u(0,"AngleDoubleUpIcon"),r&2&&h("data-pc-section","movetopicon")}function ct(r,o){}function dt(r,o){r&1&&m(0,ct,0,0,"ng-template")}function pt(r,o){r&1&&u(0,"AngleDownIcon"),r&2&&h("data-pc-section","movedownicon")}function mt(r,o){}function ut(r,o){r&1&&m(0,mt,0,0,"ng-template")}function ft(r,o){r&1&&u(0,"AngleDoubleDownIcon"),r&2&&h("data-pc-section","movebottomicon")}function ht(r,o){}function gt(r,o){r&1&&m(0,ht,0,0,"ng-template")}function xt(r,o){if(r&1&&(s(0,"div",15),t(1),l()),r&2){let c=g(2);a(),b(c.header)}}function vt(r,o){r&1&&V(0)}function _t(r,o){if(r&1&&(s(0,"div",13),m(1,xt,2,1,"div",14)(2,vt,1,0,"ng-container",7),l()),r&2){let c=g();h("data-pc-section","header"),a(),d("ngIf",!c.headerTemplate),a(),d("ngTemplateOutlet",c.headerTemplate)}}function yt(r,o){r&1&&V(0)}function bt(r,o){if(r&1&&(G(0),m(1,yt,1,0,"ng-container",18),J()),r&2){let c=g(2);a(),d("ngTemplateOutlet",c.filterTemplate)("ngTemplateOutletContext",ue(2,it,c.filterOptions))}}function St(r,o){r&1&&u(0,"SearchIcon",23),r&2&&(d("styleClass","p-orderlist-filter-icon"),h("data-pc-section","filterIcon"))}function It(r,o){}function Ot(r,o){r&1&&m(0,It,0,0,"ng-template")}function wt(r,o){if(r&1&&(s(0,"span",24),m(1,Ot,1,0,null,7),l()),r&2){let c=g(3);h("data-pc-section","filterIcon"),a(),d("ngTemplateOutlet",c.filterIconTemplate)}}function Ct(r,o){if(r&1){let c=q();s(0,"div",19)(1,"input",20,2),F("keyup",function(i){I(c);let n=g(2);return O(n.onFilterKeyup(i))}),l(),m(3,St,1,2,"SearchIcon",21)(4,wt,2,2,"span",22),l()}if(r&2){let c=g(2);h("data-pc-section","filter"),a(),d("disabled",c.disabled),h("placeholder",c.filterPlaceholder)("aria-label",c.ariaFilterLabel),a(2),d("ngIf",!c.filterIconTemplate),a(),d("ngIf",c.filterIconTemplate)}}function Tt(r,o){if(r&1&&(s(0,"div",16),m(1,bt,2,4,"ng-container",17)(2,Ct,5,6,"ng-template",null,1,he),l()),r&2){let c=me(3),e=g();h("data-pc-section","filterContainer"),a(),d("ngIf",e.filterTemplate)("ngIfElse",c)}}function Et(r,o){r&1&&V(0)}function Dt(r,o){if(r&1){let c=q();s(0,"li",26),F("click",function(i){I(c);let n=g(),p=n.$implicit,f=n.index,v=g();return O(v.onItemClick(i,p,f,v.id+"_"+f))})("touchend",function(){I(c);let i=g(2);return O(i.onItemTouchEnd())})("mousedown",function(){I(c);let i=g().index,n=g();return O(n.onOptionMouseDown(i))}),m(1,Et,1,0,"ng-container",18),l()}if(r&2){let c=g(),e=c.$implicit,i=c.index,n=g();d("id",n.id+"_"+i)("ngClass",Y(10,nt,n.isSelected(e),n.disabled,n.id+"_"+i===n.focusedOptionId()))("cdkDragData",e)("cdkDragDisabled",!n.dragdrop),h("aria-selected",n.isSelected(e))("data-pc-section","item")("data-p-highlight",n.isSelected(e))("data-p-focused",n.id+"_"+i===n.focusedOptionId()),a(),d("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",fe(14,rt,e,i))}}function Lt(r,o){if(r&1&&m(0,Dt,2,17,"li",25),r&2){let c=o.$implicit,e=g();d("ngIf",e.isItemVisible(c))}}function Ft(r,o){r&1&&V(0)}function Pt(r,o){if(r&1&&(s(0,"li",28),m(1,Ft,1,0,"ng-container",7),l()),r&2){let c=g(2);h("data-pc-section","emptyMessage"),a(),d("ngTemplateOutlet",c.emptyMessageTemplate)}}function kt(r,o){r&1&&V(0)}function Mt(r,o){if(r&1&&(s(0,"li",28),m(1,kt,1,0,"ng-container",7),l()),r&2){let c=g(2);h("data-pc-section","emptyMessage"),a(),d("ngTemplateOutlet",c.emptyFilterMessageTemplate)}}function At(r,o){if(r&1&&(G(0),m(1,Pt,2,2,"li",27)(2,Mt,2,2,"li",27),J()),r&2){let c=g();a(),d("ngIf",!c.filterValue||!c.emptyFilterMessageTemplate),a(),d("ngIf",c.filterValue)}}var j=(()=>{let o=class o{set selection(e){this.d_selection=e}get selection(){return this.d_selection}set value(e){this._value=e,this.filterValue&&this.filter()}get value(){return this._value}get moveUpAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveUp:void 0}get moveTopAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveTop:void 0}get moveDownAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveDown:void 0}get moveBottomAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveBottom:void 0}constructor(e,i,n,p,f,v,$){this.document=e,this.platformId=i,this.renderer=n,this.el=p,this.cd=f,this.filterService=v,this.config=$,this.metaKeySelection=!1,this.dragdrop=!1,this.controlsPosition="left",this.filterMatchMode="contains",this.breakpoint="960px",this.disabled=!1,this.trackBy=(oe,R)=>R,this.selectionChange=new M,this.onReorder=new M,this.onSelectionChange=new M,this.onFilterEvent=new M,this.onFocus=new M,this.onBlur=new M,this.d_selection=[],this.id=Ie(),this.focused=!1,this.focusedOptionIndex=-1}ngOnInit(){this.responsive&&this.createStyle(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterKeyup(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;case"empty":this.emptyMessageTemplate=e.template;break;case"emptyfilter":this.emptyFilterMessageTemplate=e.template;break;case"filter":this.filterTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"moveupicon":this.moveUpIconTemplate=e.template;break;case"movetopicon":this.moveTopIconTemplate=e.template;break;case"movedownicon":this.moveDownIconTemplate=e.template;break;case"movebottomicon":this.moveBottomIconTemplate=e.template;break;case"filtericon":this.filterIconTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.movedUp||this.movedDown){let e=S.find(this.listViewChild?.nativeElement,"li.p-highlight"),i;e.length>0&&(this.movedUp?i=e[0]:i=e[e.length-1],S.scrollInView(this.listViewChild?.nativeElement,i)),this.movedUp=!1,this.movedDown=!1}}onItemClick(e,i,n,p){this.itemTouched=!1;let f=n||y.findIndexInList(this.focusedOption,this.value),v=y.findIndexInList(i,this.d_selection),$=v!==-1,oe=this.itemTouched?!1:this.metaKeySelection;if(p&&(this.focusedOptionIndex=p),oe){let R=e.metaKey||e.ctrlKey;$&&R?this.d_selection=this.d_selection.filter((se,Ye)=>Ye!==v):(this.d_selection=R?this.d_selection?[...this.d_selection]:[]:[],y.insertIntoOrderedArray(i,f,this.d_selection,this.value))}else $?this.d_selection=this.d_selection.filter((R,se)=>se!==v):(this.d_selection=this.d_selection?[...this.d_selection]:[],y.insertIntoOrderedArray(i,f,this.d_selection,this.value));this.selectionChange.emit(this.d_selection),this.onSelectionChange.emit({originalEvent:e,value:this.d_selection})}onFilterKeyup(e){this.filterValue=e.target.value.trim().toLocaleLowerCase(this.filterLocale),this.filter(),this.onFilterEvent.emit({originalEvent:e,value:this.visibleOptions})}filter(){let e=this.filterBy.split(",");this.visibleOptions=this.filterService.filter(this.value,e,this.filterValue,this.filterMatchMode,this.filterLocale)}resetFilter(){this.filterValue=null,this.filterViewChild&&(this.filterViewChild.nativeElement.value="")}isItemVisible(e){if(this.filterValue&&this.filterValue.trim().length){for(let i=0;i<this.visibleOptions.length;i++)if(e==this.visibleOptions[i])return!0}else return!0}onItemTouchEnd(){this.itemTouched=!0}isSelected(e){return y.findIndexInList(e,this.d_selection)!==-1}isEmpty(){return this.filterValue?!this.visibleOptions||this.visibleOptions.length===0:!this.value||this.value.length===0}moveUp(){if(this.selection){for(let e=0;e<this.selection.length;e++){let i=this.selection[e],n=y.findIndexInList(i,this.value);if(n!=0&&this.value instanceof Array){let p=this.value[n],f=this.value[n-1];this.value[n-1]=p,this.value[n]=f}else break}this.dragdrop&&this.filterValue&&this.filter(),this.movedUp=!0,this.onReorder.emit(this.selection)}}moveTop(){if(this.selection){for(let e=this.selection.length-1;e>=0;e--){let i=this.selection[e],n=y.findIndexInList(i,this.value);if(n!=0&&this.value instanceof Array){let p=this.value.splice(n,1)[0];this.value.unshift(p)}else break}this.dragdrop&&this.filterValue&&this.filter(),this.onReorder.emit(this.selection),this.listViewChild.nativeElement.scrollTop=0}}moveDown(){if(this.selection){for(let e=this.selection.length-1;e>=0;e--){let i=this.selection[e],n=y.findIndexInList(i,this.value);if(this.value instanceof Array&&n!=this.value.length-1){let p=this.value[n],f=this.value[n+1];this.value[n+1]=p,this.value[n]=f}else break}this.dragdrop&&this.filterValue&&this.filter(),this.movedDown=!0,this.onReorder.emit(this.selection)}}moveBottom(){if(this.selection){for(let e=0;e<this.selection.length;e++){let i=this.selection[e],n=y.findIndexInList(i,this.value);if(this.value instanceof Array&&n!=this.value.length-1){let p=this.value.splice(n,1)[0];this.value.push(p)}else break}this.dragdrop&&this.filterValue&&this.filter(),this.onReorder.emit(this.selection),this.listViewChild.nativeElement.scrollTop=this.listViewChild?.nativeElement.scrollHeight}}onDrop(e){let i=e.previousIndex,n=e.currentIndex;i!==n&&(this.visibleOptions&&(this.filterValue&&(i=y.findIndexInList(e.item.data,this.value),n=y.findIndexInList(this.visibleOptions[n],this.value)),ie(this.visibleOptions,e.previousIndex,e.currentIndex)),ie(this.value,i,n),this.changeFocusedOptionIndex(n),this.onReorder.emit([e.item.data]))}onListFocus(e){let i=S.findSingle(this.listViewChild.nativeElement,'[data-p-highlight="true"]')||S.findSingle(this.listViewChild.nativeElement,'[data-pc-section="item"]');if(i){let n=y.findIndexInList(i,this.listViewChild.nativeElement.children);this.focused=!0;let p=this.focusedOptionIndex!==-1?this.focusedOptionIndex:i?n:-1;this.changeFocusedOptionIndex(p)}this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOption=null,this.focusedOptionIndex=-1,this.onBlur.emit(e)}onItemKeydown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"KeyA":e.ctrlKey&&(this.d_selection=[...this.value],this.selectionChange.emit(this.d_selection));default:break}}onOptionMouseDown(e){this.focused=!0,this.focusedOptionIndex=e}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.shiftKey&&this.onEnterKey(e),e.preventDefault()}onArrowUpKey(e){let i=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.shiftKey&&this.onEnterKey(e),e.preventDefault()}onHomeKey(e){if(e.ctrlKey&&e.shiftKey){let i=this.getVisibleOptions(),n=y.findIndexInList(this.focusedOption,i);this.d_selection=[...this.value].slice(0,n+1),this.selectionChange.emit(this.d_selection)}else this.changeFocusedOptionIndex(0);e.preventDefault()}onEndKey(e){if(e.ctrlKey&&e.shiftKey){let i=this.getVisibleOptions(),n=y.findIndexInList(this.focusedOption,i);this.d_selection=[...this.value].slice(n,i.length-1),this.selectionChange.emit(this.d_selection)}else this.changeFocusedOptionIndex(S.find(this.listViewChild.nativeElement,'[data-pc-section="item"]').length-1);e.preventDefault()}onEnterKey(e){this.onItemClick(e,this.focusedOption),e.preventDefault()}onSpaceKey(e){if(e.preventDefault(),e.shiftKey&&this.selection&&this.selection.length>0){let i=this.getVisibleOptions(),n=this.getLatestSelectedVisibleOptionIndex(i);if(n!==-1){let p=y.findIndexInList(this.focusedOption,i);this.d_selection=[...i.slice(Math.min(n,p),Math.max(n,p)+1)],this.selectionChange.emit(this.d_selection),this.onSelectionChange.emit({originalEvent:e,value:this.d_selection});return}}this.onEnterKey(e)}findNextOptionIndex(e){let n=[...S.find(this.listViewChild.nativeElement,'[data-pc-section="item"]')].findIndex(p=>p.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[...S.find(this.listViewChild.nativeElement,'[data-pc-section="item"]')].findIndex(p=>p.id===e);return n>-1?n-1:0}getLatestSelectedVisibleOptionIndex(e){let i=[...this.d_selection].reverse().find(n=>e.includes(n));return i!==void 0?e.indexOf(i):-1}getVisibleOptions(){return this.visibleOptions&&this.visibleOptions.length>0?this.visibleOptions:this.value&&this.value.length>0?this.value:null}getFocusedOption(e){return e===-1?null:this.visibleOptions&&this.visibleOptions.length?this.visibleOptions[e]:this.value&&this.value.length?this.value[e]:null}changeFocusedOptionIndex(e){let i=S.find(this.listViewChild.nativeElement,'[data-pc-section="item"]'),n=e>=i.length?i.length-1:e<0?0:e;this.focusedOptionIndex=i[n]?i[n].getAttribute("id"):-1,this.focusedOption=this.getFocusedOption(n),this.scrollInView(this.focusedOptionIndex)}scrollInView(e){let i=S.findSingle(this.listViewChild.nativeElement,`[data-pc-section="item"][id="${e}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}findNextItem(e){let i=e.nextElementSibling;return i?!S.hasClass(i,"p-orderlist-item")||S.isHidden(i)?this.findNextItem(i):i:null}findPrevItem(e){let i=e.previousElementSibling;return i?!S.hasClass(i,"p-orderlist-item")||S.isHidden(i)?this.findPrevItem(i):i:null}moveDisabled(){if(this.disabled||!this.selection.length)return!0}focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}createStyle(){if(Z(this.platformId)&&!this.styleElement){this.renderer.setAttribute(this.el.nativeElement.children[0],this.id,""),this.styleElement=this.renderer.createElement("style"),this.renderer.setAttribute(this.styleElement,"type","text/css"),this.renderer.appendChild(this.document.head,this.styleElement);let e=`
                    @media screen and (max-width: ${this.breakpoint}) {
                        .p-orderlist[${this.id}] {
                            flex-direction: column;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls {
                            padding: var(--content-padding);
                            flex-direction: row;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls .p-button {
                            margin-right: var(--inline-spacing);
                            margin-bottom: 0;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls .p-button:last-child {
                            margin-right: 0;
                        }
                    }
                `;this.renderer.setProperty(this.styleElement,"innerHTML",e)}}destroyStyle(){Z(this.platformId)&&this.styleElement&&(this.renderer.removeChild(this.document,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.destroyStyle()}};o.\u0275fac=function(i){return new(i||o)(x(ge),x(ae),x(ce),x(le),x(P),x(Oe),x(we))},o.\u0275cmp=_({type:o,selectors:[["p-orderList"]],contentQueries:function(i,n,p){if(i&1&&pe(p,k,4),i&2){let f;Q(f=H())&&(n.templates=f)}},viewQuery:function(i,n){if(i&1&&(X(Ze,5),X(et,5)),i&2){let p;Q(p=H())&&(n.listViewChild=p.first),Q(p=H())&&(n.filterViewChild=p.first)}},hostAttrs:[1,"p-element"],inputs:{header:"header",style:"style",styleClass:"styleClass",tabindex:"tabindex",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",listStyle:"listStyle",responsive:"responsive",filterBy:"filterBy",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",metaKeySelection:"metaKeySelection",dragdrop:"dragdrop",controlsPosition:"controlsPosition",ariaFilterLabel:"ariaFilterLabel",filterMatchMode:"filterMatchMode",breakpoint:"breakpoint",stripedRows:"stripedRows",disabled:"disabled",trackBy:"trackBy",selection:"selection",value:"value"},outputs:{selectionChange:"selectionChange",onReorder:"onReorder",onSelectionChange:"onSelectionChange",onFilterEvent:"onFilterEvent",onFocus:"onFocus",onBlur:"onBlur"},decls:21,vars:43,consts:[["listelement",""],["builtInFilterElement",""],["filter",""],[3,"ngClass","ngStyle"],[1,"p-orderlist-controls"],["type","button","pButton","","pRipple","",1,"p-button-icon-only",3,"click","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[1,"p-orderlist-list-container"],["class","p-orderlist-header",4,"ngIf"],["class","p-orderlist-filter-container",4,"ngIf"],["cdkDropList","","role","listbox","aria-multiselectable","true",1,"p-orderlist-list",3,"cdkDropListDropped","focus","blur","keydown","id","ngStyle","tabindex"],["ngFor","",3,"ngForTrackBy","ngForOf"],[1,"p-orderlist-header"],["class","p-orderlist-title",4,"ngIf"],[1,"p-orderlist-title"],[1,"p-orderlist-filter-container"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-orderlist-filter"],["type","text","role","textbox",1,"p-orderlist-filter-input","p-inputtext","p-component",3,"keyup","disabled"],[3,"styleClass",4,"ngIf"],["class","p-orderlist-filter-icon",4,"ngIf"],[3,"styleClass"],[1,"p-orderlist-filter-icon"],["pRipple","","cdkDrag","","role","option","class","p-orderlist-item",3,"id","ngClass","cdkDragData","cdkDragDisabled","click","touchend","mousedown",4,"ngIf"],["pRipple","","cdkDrag","","role","option",1,"p-orderlist-item",3,"click","touchend","mousedown","id","ngClass","cdkDragData","cdkDragDisabled"],["class","p-orderlist-empty-message",4,"ngIf"],[1,"p-orderlist-empty-message"]],template:function(i,n){if(i&1){let p=q();s(0,"div",3)(1,"div",4)(2,"button",5),F("click",function(){return I(p),O(n.moveUp())}),m(3,ot,1,1,"AngleUpIcon",6)(4,lt,1,0,null,7),l(),s(5,"button",5),F("click",function(){return I(p),O(n.moveTop())}),m(6,at,1,1,"AngleDoubleUpIcon",6)(7,dt,1,0,null,7),l(),s(8,"button",5),F("click",function(){return I(p),O(n.moveDown())}),m(9,pt,1,1,"AngleDownIcon",6)(10,ut,1,0,null,7),l(),s(11,"button",5),F("click",function(){return I(p),O(n.moveBottom())}),m(12,ft,1,1,"AngleDoubleDownIcon",6)(13,gt,1,0,null,7),l()(),s(14,"div",8),m(15,_t,3,3,"div",9)(16,Tt,4,3,"div",10),s(17,"ul",11,0),F("cdkDropListDropped",function(v){return I(p),O(n.onDrop(v))})("focus",function(v){return I(p),O(n.onListFocus(v))})("blur",function(v){return I(p),O(n.onListBlur(v))})("keydown",function(v){return I(p),O(n.onItemKeydown(v))}),m(19,Lt,1,1,"ng-template",12)(20,At,3,2,"ng-container",6),l()()()}i&2&&(de(n.styleClass),d("ngClass",Y(39,tt,n.stripedRows,n.controlsPosition==="left",n.controlsPosition==="right"))("ngStyle",n.style),h("data-pc-section","root"),a(),h("data-pc-section","controls"),a(),d("disabled",n.moveDisabled()),h("aria-label",n.moveUpAriaLabel)("data-pc-section","moveUpButton"),a(),d("ngIf",!n.moveUpIconTemplate),a(),d("ngTemplateOutlet",n.moveUpIconTemplate),a(),d("disabled",n.moveDisabled()),h("aria-label",n.moveTopAriaLabel)("data-pc-section","moveTopButton"),a(),d("ngIf",!n.moveTopIconTemplate),a(),d("ngTemplateOutlet",n.moveTopIconTemplate),a(),d("disabled",n.moveDisabled()),h("aria-label",n.moveDownAriaLabel)("data-pc-section","moveDownButton"),a(),d("ngIf",!n.moveDownIconTemplate),a(),d("ngTemplateOutlet",n.moveDownIconTemplate),a(),d("disabled",n.moveDisabled()),h("aria-label",n.moveBottomAriaLabel)("data-pc-section","moveBottomButton"),a(),d("ngIf",!n.moveBottomIconTemplate),a(),d("ngTemplateOutlet",n.moveBottomIconTemplate),a(),h("data-pc-section","container"),a(),d("ngIf",n.header||n.headerTemplate),a(),d("ngIf",n.filterBy),a(),d("id",n.id+"_list")("ngStyle",n.listStyle)("tabindex",n.tabindex),h("data-pc-section","list")("aria-activedescendant",n.focused?n.focusedOptionId():void 0)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),a(2),d("ngForTrackBy",n.trackBy)("ngForOf",n.value),a(),d("ngIf",n.isEmpty()&&(n.emptyMessageTemplate||n.emptyFilterMessageTemplate)))},dependencies:[xe,ve,_e,be,ye,Ee,Ce,Ke,Ve,Be,Ue,Pe,Fe,Le],styles:[`@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}
`],encapsulation:2,changeDetection:0});let r=o;return r})(),je=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=L({type:o}),o.\u0275inj=D({imports:[B,De,ee,Te,ne,ee,ne]});let r=o;return r})();var Vt=()=>({height:"25rem"});function Kt(r,o){if(r&1&&(s(0,"div",4),u(1,"img",5),s(2,"div",6)(3,"span",7),t(4),l(),s(5,"div",8),u(6,"i",9),s(7,"span"),t(8),l()()(),s(9,"span",10),t(10),l()()),r&2){let c=o.$implicit;a(),K("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",A),d("alt",c.name),a(3),b(c.name),a(4),b(c.category),a(2),b("$"+c.price)}}var $e=(()=>{let o=class o{constructor(e,i){this.productService=e,this.cdr=i,this.code={basic:`<p-orderList [value]="products" [listStyle]="{ height: '25rem' }" header="Products">
    <ng-template let-product pTemplate="item">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-4rem shadow-2 flex-shrink-0 border-round" />
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold text-900">{{ '$' + product.price }}</span>
        </div>
    </ng-template>
</p-orderList>`,html:`
<div class="card xl:flex xl:justify-content-center">
    <p-orderList [value]="products" [listStyle]="{ height: '25rem' }" header="Products">
        <ng-template let-product pTemplate="item">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-4rem shadow-2 flex-shrink-0 border-round" />
                <div class="flex-1 flex flex-column gap-2">
                    <span class="font-bold">{{ product.name }}</span>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag text-sm"></i>
                        <span>{{ product.category }}</span>
                    </div>
                </div>
                <span class="font-bold text-900">{{ '$' + product.price }}</span>
            </div>
        </ng-template>
    </p-orderList>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'orderlist-basic-demo',
    templateUrl: './orderlist-basic-demo.html'
})
export class OrderlistBasicDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
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
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(i){return new(i||o)(x(U),x(P))},o.\u0275cmp=_({type:o,selectors:[["basic-doc"]],decls:13,vars:5,consts:[[1,"card","xl:flex","xl:justify-content-center"],["header","Products",3,"value","listStyle"],["pTemplate","item"],["selector","orderlist-basic-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-2","align-items-center","gap-3"],[1,"w-4rem","shadow-2","flex-shrink-0","border-round",3,"src","alt"],[1,"flex-1","flex","flex-column","gap-2"],[1,"font-bold"],[1,"flex","align-items-center","gap-2"],[1,"pi","pi-tag","text-sm"],[1,"font-bold","text-900"]],template:function(i,n){i&1&&(s(0,"app-docsectiontext")(1,"p"),t(2,"OrderList is used as a controlled input with "),s(3,"i"),t(4,"value"),l(),t(5," properties. Content of a list item needs to be defined with the "),s(6,"i"),t(7,"pTemplate"),l(),t(8," property that receives an object in the list as parameter."),l()(),s(9,"div",0)(10,"p-orderList",1),m(11,Kt,11,6,"ng-template",2),l()(),u(12,"app-code",3)),i&2&&(a(10),d("value",n.products)("listStyle",w(4,Vt)),a(2),d("code",n.code)("extFiles",n.extFiles))},dependencies:[C,T,j,k],encapsulation:2});let r=o;return r})();var Bt=()=>({"max-height":"30rem"});function Ut(r,o){if(r&1&&(s(0,"div",4),u(1,"img",5),s(2,"div",6)(3,"span",7),t(4),l(),s(5,"div",8),u(6,"i",9),s(7,"span"),t(8),l()()(),s(9,"span",10),t(10),l()()),r&2){let c=o.$implicit;a(),K("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",A),d("alt",c.name),a(3),b(c.name),a(4),b(c.category),a(2),b("$"+c.price)}}var qe=(()=>{let o=class o{constructor(e,i){this.productService=e,this.cdr=i,this.code={basic:`<p-orderList [value]="products" [listStyle]="{ 'max-height': '30rem' }" header="Products" [dragdrop]="true">
    <ng-template let-product pTemplate="item">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-4rem shadow-2 flex-shrink-0 border-round" />
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold text-900">{{ '$' + product.price }}</span>
        </div>
    </ng-template>
</p-orderList>`,html:`
<div class="card xl:flex xl:justify-content-center">
    <p-orderList [value]="products" [listStyle]="{ 'max-height': '30rem' }" header="Products" [dragdrop]="true">
        <ng-template let-product pTemplate="item">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-4rem shadow-2 flex-shrink-0 border-round" />
                <div class="flex-1 flex flex-column gap-2">
                    <span class="font-bold">{{ product.name }}</span>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag text-sm"></i>
                        <span>{{ product.category }}</span>
                    </div>
                </div>
                <span class="font-bold text-900">{{ '$' + product.price }}</span>
            </div>
        </ng-template>
    </p-orderList>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'orderlist-drag-drop-demo',
    templateUrl: './orderlist-drag-drop-demo.html'
})
export class OrderlistDragDropDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
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
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(i){return new(i||o)(x(U),x(P))},o.\u0275cmp=_({type:o,selectors:[["drag-drop-doc"]],decls:10,vars:6,consts:[[1,"card","xl:flex","xl:justify-content-center"],["header","Products",3,"value","listStyle","dragdrop"],["pTemplate","item"],["selector","orderlist-drag-drop-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-2","align-items-center","gap-3"],[1,"w-4rem","shadow-2","flex-shrink-0","border-round",3,"src","alt"],[1,"flex-1","flex","flex-column","gap-2"],[1,"font-bold"],[1,"flex","align-items-center","gap-2"],[1,"pi","pi-tag","text-sm"],[1,"font-bold","text-900"]],template:function(i,n){i&1&&(s(0,"app-docsectiontext")(1,"p"),t(2,"Items can be reordered using drag and drop by enabling "),s(3,"i"),t(4,"dragdrop"),l(),t(5," property."),l()(),s(6,"div",0)(7,"p-orderList",1),m(8,Ut,11,6,"ng-template",2),l()(),u(9,"app-code",3)),i&2&&(a(7),d("value",n.products)("listStyle",w(5,Bt))("dragdrop",!0),a(2),d("code",n.code)("extFiles",n.extFiles))},dependencies:[C,T,j,k],encapsulation:2});let r=o;return r})();var jt=()=>({"max-height":"30rem"});function Rt(r,o){if(r&1&&(s(0,"div",4),u(1,"img",5),s(2,"div",6)(3,"span",7),t(4),l(),s(5,"div",8),u(6,"i",9),s(7,"span"),t(8),l()()(),s(9,"span",10),t(10),l()()),r&2){let c=o.$implicit;a(),K("src","https://primefaces.org/cdn/primeng/images/demo/product/",c.image,"",A),d("alt",c.name),a(3),b(c.name),a(4),b(c.category),a(2),b("$"+c.price)}}var Qe=(()=>{let o=class o{constructor(e,i){this.productService=e,this.cdr=i,this.code={basic:`<p-orderList [value]="products" [listStyle]="{ 'max-height': '30rem' }" header="Products" filterBy="name" filterPlaceholder="Filter by name">
    <ng-template let-product pTemplate="item">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-4rem shadow-2 flex-shrink-0 border-round" />
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold text-900">{{ '$' + product.price }}</span>
        </div>
    </ng-template>
</p-orderList>`,html:`
<div class="card xl:flex xl:justify-content-center">
    <p-orderList [value]="products" [listStyle]="{ 'max-height': '30rem' }" header="Products" filterBy="name" filterPlaceholder="Filter by name">
        <ng-template let-product pTemplate="item">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
                <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-4rem shadow-2 flex-shrink-0 border-round" />
                <div class="flex-1 flex flex-column gap-2">
                    <span class="font-bold">{{ product.name }}</span>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag text-sm"></i>
                        <span>{{ product.category }}</span>
                    </div>
                </div>
                <span class="font-bold text-900">{{ '$' + product.price }}</span>
            </div>
        </ng-template>
    </p-orderList>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'orderlist-filter-demo',
    templateUrl: './orderlist-filter-demo.html'
})
export class OrderlistFilterDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
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
}`}]}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(i){return new(i||o)(x(U),x(P))},o.\u0275cmp=_({type:o,selectors:[["filter-doc"]],decls:10,vars:5,consts:[[1,"card","xl:flex","xl:justify-content-center"],["header","Products","filterBy","name","filterPlaceholder","Filter by name",3,"value","listStyle"],["pTemplate","item"],["selector","orderlist-filter-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-2","align-items-center","gap-3"],[1,"w-4rem","shadow-2","flex-shrink-0","border-round",3,"src","alt"],[1,"flex-1","flex","flex-column","gap-2"],[1,"font-bold"],[1,"flex","align-items-center","gap-2"],[1,"pi","pi-tag","text-sm"],[1,"font-bold","text-900"]],template:function(i,n){i&1&&(s(0,"app-docsectiontext")(1,"p"),t(2,"Filter value is checked against the property of an object configured with the "),s(3,"i"),t(4,"filterBy"),l(),t(5," property"),l()(),s(6,"div",0)(7,"p-orderList",1),m(8,Rt,11,6,"ng-template",2),l()(),u(9,"app-code",3)),i&2&&(a(7),d("value",n.products)("listStyle",w(4,jt)),a(2),d("code",n.code)("extFiles",n.extFiles))},dependencies:[C,T,j,k],encapsulation:2});let r=o;return r})();var He=(()=>{let o=class o{constructor(){this.code={typescript:"import { OrderListModule } from 'primeng/orderlist';"}}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=_({type:o,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&u(0,"app-code",0),i&2&&d("code",n.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2});let r=o;return r})();var Nt=()=>["/theming"],We=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=_({type:o,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(s(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),s(3,"a",0),t(4,"theming"),l(),t(5," page."),l()(),s(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),l(),s(12,"th"),t(13,"Element"),l()()(),s(14,"tbody")(15,"tr")(16,"td"),t(17,"p-orderlist"),l(),s(18,"td"),t(19,"Container element."),l()(),s(20,"tr")(21,"td"),t(22,"p-orderlist-list"),l(),s(23,"td"),t(24,"List container."),l()(),s(25,"tr")(26,"td"),t(27,"p-orderlist-item"),l(),s(28,"td"),t(29,"An item in the list."),l()()()()()),i&2&&(a(3),d("routerLink",w(1,Nt)))},dependencies:[T,Se],encapsulation:2});let r=o;return r})();var ze=(()=>{let o=class o{constructor(){this.code={html:`<span id="lb">Options</span>        
<p-orderList ariaLabelledBy="lb"></p-orderList>

<p-orderList ariaLabel="City"></p-orderList>`}}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=_({type:o,selectors:[["accessibility-doc"]],decls:231,vars:2,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(s(0,"app-docsectiontext")(1,"h3"),t(2,"Screen Reader"),l(),s(3,"p"),t(4," Value to describe the source listbox and target listbox can be provided with "),s(5,"i"),t(6,"sourceListProps"),l(),t(7," and "),s(8,"i"),t(9,"targetListProps"),l(),t(10," by passing "),s(11,"i"),t(12,"aria-labelledby"),l(),t(13," or "),s(14,"i"),t(15,"aria-label"),l(),t(16," props. The list elements has a "),s(17,"i"),t(18,"listbox"),l(),t(19," role with the "),s(20,"i"),t(21,"aria-multiselectable"),l(),t(22," attribute. Each list item has an "),s(23,"i"),t(24,"option"),l(),t(25," role with "),s(26,"i"),t(27,"aria-selected"),l(),t(28," and "),s(29,"i"),t(30,"aria-disabled"),l(),t(31," as their attributes. "),l(),s(32,"p"),t(33," Controls buttons are "),s(34,"i"),t(35,"button"),l(),t(36," elements with an "),s(37,"i"),t(38,"aria-label"),l(),t(39," that refers to the "),s(40,"i"),t(41,"aria.moveTop"),l(),t(42,", "),s(43,"i"),t(44,"aria.moveUp"),l(),t(45,", "),s(46,"i"),t(47,"aria.moveDown"),l(),t(48,", "),s(49,"i"),t(50,"aria.moveBottom"),l(),t(51,","),s(52,"i"),t(53,"aria.moveTo"),l(),t(54,", "),s(55,"i"),t(56,"aria.moveAllTo"),l(),t(57,", "),s(58,"i"),t(59,"aria.moveFrom"),l(),t(60," and "),s(61,"i"),t(62,"aria.moveAllFrom"),l(),t(63," properties of the "),s(64,"a",0),t(65,"locale"),l(),t(66," API by default, alternatively you may use"),s(67,"i"),t(68,"moveTopButtonProps"),l(),t(69,", "),s(70,"i"),t(71,"moveUpButtonProps"),l(),t(72,", "),s(73,"i"),t(74,"moveDownButtonProps"),l(),t(75,", "),s(76,"i"),t(77,"moveToButtonProps"),l(),t(78,", "),s(79,"i"),t(80,"moveAllToButtonProps"),l(),t(81,", "),s(82,"i"),t(83,"moveFromButtonProps"),l(),t(84,", "),s(85,"i"),t(86,"moveFromButtonProps"),l(),t(87," and "),s(88,"i"),t(89,"moveAllFromButtonProps"),l(),t(90," to customize the buttons like overriding the default "),s(91,"i"),t(92,"aria-label"),l(),t(93," attributes. "),l(),u(94,"app-code",1),s(95,"h3"),t(96,"OrderList Keyboard Support"),l(),s(97,"div",2)(98,"table",3)(99,"thead")(100,"tr")(101,"th"),t(102,"Key"),l(),s(103,"th"),t(104,"Function"),l()()(),s(105,"tbody")(106,"tr")(107,"td")(108,"i"),t(109,"tab"),l()(),s(110,"td"),t(111,"Moves focus to the first selected option, if there is none then first option receives the focus."),l()(),s(112,"tr")(113,"td")(114,"i"),t(115,"up arrow"),l()(),s(116,"td"),t(117,"Moves focus to the previous option."),l()(),s(118,"tr")(119,"td")(120,"i"),t(121,"down arrow"),l()(),s(122,"td"),t(123,"Moves focus to the next option."),l()(),s(124,"tr")(125,"td")(126,"i"),t(127,"enter"),l()(),s(128,"td"),t(129,"Toggles the selected state of the focused option."),l()(),s(130,"tr")(131,"td")(132,"i"),t(133,"space"),l()(),s(134,"td"),t(135,"Toggles the selected state of the focused option."),l()(),s(136,"tr")(137,"td")(138,"i"),t(139,"home"),l()(),s(140,"td"),t(141,"Moves focus to the first option."),l()(),s(142,"tr")(143,"td")(144,"i"),t(145,"end"),l()(),s(146,"td"),t(147,"Moves focus to the last option."),l()(),s(148,"tr")(149,"td")(150,"i"),t(151,"shift"),l(),t(152," + "),s(153,"i"),t(154,"down arrow"),l()(),s(155,"td"),t(156,"Moves focus to the next option and toggles the selection state."),l()(),s(157,"tr")(158,"td")(159,"i"),t(160,"shift"),l(),t(161," + "),s(162,"i"),t(163,"up arrow"),l()(),s(164,"td"),t(165,"Moves focus to the previous option and toggles the selection state."),l()(),s(166,"tr")(167,"td")(168,"i"),t(169,"shift"),l(),t(170," + "),s(171,"i"),t(172,"space"),l()(),s(173,"td"),t(174,"Selects the items between the most recently selected option and the focused option."),l()(),s(175,"tr")(176,"td")(177,"i"),t(178,"control"),l(),t(179," + "),s(180,"i"),t(181,"shift"),l(),t(182," + "),s(183,"i"),t(184,"home"),l()(),s(185,"td"),t(186,"Selects the focused options and all the options up to the first one."),l()(),s(187,"tr")(188,"td")(189,"i"),t(190,"control"),l(),t(191," + "),s(192,"i"),t(193,"shift"),l(),t(194," + "),s(195,"i"),t(196,"end"),l()(),s(197,"td"),t(198,"Selects the focused options and all the options down to the first one."),l()(),s(199,"tr")(200,"td")(201,"i"),t(202,"control"),l(),t(203," + "),s(204,"i"),t(205,"a"),l()(),s(206,"td"),t(207,"Selects all options."),l()()()()(),s(208,"h3"),t(209,"Buttons Keyboard Support"),l(),s(210,"div",2)(211,"table",3)(212,"thead")(213,"tr")(214,"th"),t(215,"Key"),l(),s(216,"th"),t(217,"Function"),l()()(),s(218,"tbody")(219,"tr")(220,"td")(221,"i"),t(222,"enter"),l()(),s(223,"td"),t(224,"Executes button action."),l()(),s(225,"tr")(226,"td")(227,"i"),t(228,"space"),l()(),s(229,"td"),t(230,"Executes button action."),l()()()()()()),i&2&&(a(94),d("code",n.code)("hideToggleCode",!0))},dependencies:[C,T],encapsulation:2});let r=o;return r})();var Ge=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=L({type:o}),o.\u0275inj=D({imports:[B,Me,te,je,N,ke,te]});let r=o;return r})();var $t=()=>["OrderList"],Je=(()=>{let o=class o{constructor(){this.docs=[{id:"import",label:"Import",component:He},{id:"basic",label:"Basic",component:$e},{id:"filter",label:"Filter",component:Qe},{id:"dragdrop",label:"DragDrop",component:qe},{id:"style",label:"Style",component:We},{id:"accessibility",label:"Accessibility",component:ze}]}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=_({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular OrderList Component","header","OrderList","description","OrderList is used to sort a collection.",3,"docs","apiDocs"]],template:function(i,n){i&1&&u(0,"app-doc",0),i&2&&d("docs",n.docs)("apiDocs",w(2,$t))},dependencies:[Ae],styles:[".product-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem;width:100%}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:1rem}.product-item[_ngcontent-%COMP%]   .product-list-detail[_ngcontent-%COMP%]{flex:1 1 0}.product-item[_ngcontent-%COMP%]   .product-list-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.product-item[_ngcontent-%COMP%]   .product-category-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:.5rem}.product-item[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{vertical-align:middle;line-height:1}@media screen and (max-width: 576px){.product-item[_ngcontent-%COMP%]{flex-wrap:wrap}.product-item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;text-align:center}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 0 1rem;width:100px}}"]});let r=o;return r})();var Xe=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=L({type:o}),o.\u0275inj=D({imports:[N.forChild([{path:"",component:Je}]),N]});let r=o;return r})();var _n=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=L({type:o}),o.\u0275inj=D({imports:[B,Xe,Ge]});let r=o;return r})();export{_n as OrderListDemoModule};
