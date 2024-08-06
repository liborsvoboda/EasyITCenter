declare var $:any;

export class AutoCompleteView{

    private selectedClassName = 'ace_autocomplete_selected';

    public wrap;
    public listElement;

    public commentsElement;

    constructor(public editor,public autoComplete){
        this.wrap = document.createElement('div');
        this.listElement = document.createElement('ul');
        this.wrap.className = 'ace_autocomplete';
        this.wrap.style.display = 'none';
        this.listElement.style.listStyleType = 'none';
        this.wrap.style.position = 'fixed';
        this.wrap.style.zIndex = '1000';
        this.wrap.appendChild(this.listElement);

        this.commentsElement = document.createElement("div");
        this.commentsElement.className = "ace_autocomplete_comments";
        this.wrap.appendChild(this.commentsElement);
    }

    show() {
        return this.wrap.style.display = 'block';
    };

    hide (){
        return this.wrap.style.display = 'none';
    };

    setPosition (coords) {
        var bottom, editorBottom, top;
        top = coords.pageY + 20;
        editorBottom = $(this.editor.container).offset().top + $(this.editor.container).height();
        bottom = top + $(this.wrap).height();
        if (bottom < editorBottom) {
            this.wrap.style.top = top + 'px';
            return this.wrap.style.left = coords.pageX + 'px';
        } else {
            this.wrap.style.top = (top - $(this.wrap).height() - 20) + 'px';
            return this.wrap.style.left = coords.pageX + 'px';
        }
    };

    current () {
        var child, children, i;
        children = this.listElement.childNodes;
        for (i in children) {
            child = children[i];
            if (child.className === this.selectedClassName) return child;
        }
        return null;
    };

    focusNext () {
        var curr, focus;
        curr = this.current();
        focus = curr.nextSibling;
        if (focus) {
            curr.className = '';
            focus.className = this.selectedClassName;
            this.onFocusSet(focus);
            return this.adjustPosition();
        }
        else
            this.onFocusSet(null);
    };

    focusPrev () {
        var curr, focus;
        curr = this.current();
        focus = curr.previousSibling;
        if (focus) {
            curr.className = '';
            focus.className = this.selectedClassName;
            this.onFocusSet(focus);
            return this.adjustPosition();
        }
        else 
            this.onFocusSet(null);
    };

    ensureFocus () {
        if (!this.current()) {
            if (this.listElement.firstChild) {
                this.listElement.firstChild.className = this.selectedClassName;
                this.onFocusSet(this.listElement.firstChild);
                return this.adjustPosition();
            }
            else
                this.onFocusSet(null);
        }
        
    };

    onFocusSet(focus) {
        if (focus == null) {
            this.commentsElement.style.display = "none";
            return;
        }

        let doc = focus.getAttribute("data-doc");
        if (doc != null && doc != "") {
            this.commentsElement.innerHTML = doc;
            this.commentsElement.style.display = "block";
        }
        else 
            this.commentsElement.style.display = "none";
    }

    adjustPosition() {
        var elm, elmOuterHeight, newMargin, pos, preMargin, wrapHeight;
        elm = this.current();
        if (elm) {
            newMargin = '';
            wrapHeight = $(this.wrap).height();
            elmOuterHeight = $(elm).outerHeight();
            preMargin = parseInt( $(this.listElement).css("margin-top").replace('px', ''), 10 );
            pos = $(elm).position();
            if (pos.top >= (wrapHeight - elmOuterHeight)) {
                newMargin = (preMargin - elmOuterHeight) + 'px';
                $(this.listElement).css("margin-top", newMargin);
            }
            if (pos.top < 0) {
                newMargin = (-pos.top + preMargin) + 'px';
                return $(this.listElement).css("margin-top", newMargin);
            }
        }
    };


}