(function(){var B=YAHOO.util.Dom,A=YAHOO.util.Event;YAHOO.widget.Editor.prototype._renderCreateLinkWindow=function(){var F='<label for="'+this.get("id")+'_createlink_url"><strong>'+this.STR_LINK_URL+':</strong> <input type="text" name="'+this.get("id")+'_createlink_url" id="'+this.get("id")+'_createlink_url" value=""></label>';F+='<label for="'+this.get("id")+'_createlink_target"><strong>&nbsp;</strong><input type="checkbox" name="'+this.get("id")+'_createlink_target" id="'+this.get("id")+'_createlink_target" value="_blank" class="createlink_target"> '+this.STR_LINK_NEW_WINDOW+"</label>";F+='<label for="'+this.get("id")+'_createlink_title"><strong>'+this.STR_LINK_TITLE+':</strong> <input type="text" name="'+this.get("id")+'_createlink_title" id="'+this.get("id")+'_createlink_title" value=""></label>';var C=document.createElement("div");C.innerHTML=F;var E=document.createElement("div");E.className="removeLink";var D=document.createElement("a");D.href="#";D.innerHTML=this.STR_LINK_PROP_REMOVE;D.title=this.STR_LINK_PROP_REMOVE;A.on(D,"click",function(G){A.stopEvent(G);this.unsubscribeAll("afterExecCommand");this.execCommand("unlink");this.closeWindow()},this,true);E.appendChild(D);C.appendChild(E);this._windows.createlink={};this._windows.createlink.body=C;C.style.display="none";this.get("panel").editor_form.appendChild(C);this.fireEvent("windowCreateLinkRender",{type:"windowCreateLinkRender",panel:this.get("panel"),body:C});return C}})();