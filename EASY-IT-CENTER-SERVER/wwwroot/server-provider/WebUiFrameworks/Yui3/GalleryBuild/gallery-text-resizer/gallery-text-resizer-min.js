YUI.add("gallery-text-resizer",function(a){a.namespace("Text").Resizer=a.Base.create("text-resize",a.Plugin.Base,[],{initializer:function(){var b=this.get("host");a.delegate("click",function(c){c.preventDefault();this.reset();},b,".text-resize-default",this);a.delegate("click",function(c){c.preventDefault();this.smallest();},b,".text-resize-smallest",this);a.delegate("click",function(c){c.preventDefault();this.largest();},b,".text-resize-largest",this);a.delegate("click",function(c){c.preventDefault();this.up();},b,".text-resize-up",this);a.delegate("click",function(c){c.preventDefault();this.down();},b,".text-resize-down",this);this.setSize(this._load()||this.get("baseSize"));},reset:function(){this.setSize(this.get("baseSize"));},smallest:function(){this.setSize(this.get("smallest"));},largest:function(){this.setSize(this.get("largest"));},up:function(){var b=this.get("currentSize");if(b+1<=this.get("largest")){this.setSize(++b);}},down:function(){var b=this.get("currentSize");if(b-1>=this.get("smallest")){this.setSize(--b);}},setSize:function(b){this.set("currentSize",parseFloat(b,10));this._save(b);this._update();},_update:function(){a.one(this.get("targetNode")).setStyle("fontSize",this.get("currentSize")+this.get("unit"));},_save:function(b){a.Cookie.set(this.get("cookieName"),b+this.get("unit"),{"expires":new Date("January 12, 2025"),"path":"/"});},_load:function(){return parseFloat(a.Cookie.get(this.get("cookieName")),10);}},{NS:"textResizer",ATTRS:{currentSize:{value:0},baseSize:{value:12},smallest:{value:9},largest:{value:18},unit:{value:"px"},cookieName:{value:"YUI_TEXT_RESIZER"},targetNode:{value:"body"}}});},"gallery-2011.03.11-23-49",{requires:["node","event","cookie","base-build","plugin"]});