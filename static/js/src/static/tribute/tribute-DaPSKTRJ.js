import{$ as e}from"../../../jquery-IViRahhZ.js";import{T as t,a as n,b as i,c as r}from"../../../tributejs-COWOt0o1.js";import{d as s}from"../../common/util/debounce-CNl5k4zp.js";class o{constructor({values:e=null,iframe:s=null,selectClass:c="highlight",containerClass:l="tribute-container",itemClass:a="",trigger:u="@",autocompleteMode:h=!1,selectTemplate:m=null,menuItemTemplate:p=null,searchDebounce:d=0,lookup:g="key",fillAttr:f="value",collection:T=null,menuContainer:v=null,noMatchTemplate:b=null,requireLeadingSpace:M=!0,allowSpaces:C=!1,replaceTextSuffix:A=null,positionMenu:w=!0,spaceSelectsMatch:x=!1,searchOpts:E={},menuItemLimit:L=null,menuShowMinLength:S=0}){if(this.autocompleteMode=h,this.menuSelected=0,this.searchDebounce=d,this.current={},this.inputEvent=!1,this.isActive=!1,this.menuContainer=v,this.allowSpaces=C,this.replaceTextSuffix=A,this.positionMenu=w,this.hasTrailingSpace=!1,this.spaceSelectsMatch=x,this.autocompleteMode&&(u="",C=!1),e)this.collection=[{trigger:u,iframe:s,selectClass:c,containerClass:l,itemClass:a,selectTemplate:(m||o.defaultSelectTemplate).bind(this),menuItemTemplate:(p||o.defaultMenuItemTemplate).bind(this),noMatchTemplate:(e=>"string"==typeof e?""===e.trim()?null:e:"function"==typeof e?e.bind(this):b||function(){return"<li>No Match Found!</li>"}.bind(this))(b),lookup:g,fillAttr:f,values:e,requireLeadingSpace:M,searchOpts:E,menuItemLimit:L,menuShowMinLength:S}];else{if(!T)throw new Error("[Tribute] No collection specified.");this.autocompleteMode,this.collection=T.map((e=>({trigger:e.trigger||u,iframe:e.iframe||s,selectClass:e.selectClass||c,containerClass:e.containerClass||l,itemClass:e.itemClass||a,selectTemplate:(e.selectTemplate||o.defaultSelectTemplate).bind(this),menuItemTemplate:(e.menuItemTemplate||o.defaultMenuItemTemplate).bind(this),noMatchTemplate:(e=>"string"==typeof e?""===e.trim()?null:e:"function"==typeof e?e.bind(this):b||function(){return"<li>No Match Found!</li>"}.bind(this))(b),lookup:e.lookup||g,fillAttr:e.fillAttr||f,values:e.values,requireLeadingSpace:e.requireLeadingSpace,searchOpts:e.searchOpts||E,menuItemLimit:e.menuItemLimit||L,menuShowMinLength:e.menuShowMinLength||S})))}new t(this),new n(this),new i(this),new r(this)}get isActive(){return this._isActive}set isActive(e){if(this._isActive!=e&&(this._isActive=e,this.current.element)){let t=new CustomEvent(`tribute-active-${e}`);this.current.element.dispatchEvent(t)}}static defaultSelectTemplate(e){return void 0===e?`${this.current.collection.trigger}${this.current.mentionText}`:this.range.isContentEditable(this.current.element)?'<span class="tribute-mention">'+(this.current.collection.trigger+e.original[this.current.collection.fillAttr])+"</span>":this.current.collection.trigger+e.original[this.current.collection.fillAttr]}static defaultMenuItemTemplate(e){return e.string}static inputTypes(){return["TEXTAREA","INPUT"]}triggers(){return this.collection.map((e=>e.trigger))}attach(t){if(!t)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if(void 0!==e&&t instanceof e&&(t=t.get()),t.constructor===NodeList||t.constructor===HTMLCollection||t.constructor===Array){let e=t.length;for(var n=0;n<e;++n)this._attach(t[n])}else this._attach(t)}_attach(e){e.hasAttribute("data-tribute"),this.ensureEditable(e),this.events.bind(e),e.setAttribute("data-tribute",!0)}ensureEditable(e){if(-1===o.inputTypes().indexOf(e.nodeName)){if(!e.contentEditable)throw new Error("[Tribute] Cannot bind to "+e.nodeName);e.contentEditable=!0}}createMenu(e){let t=this.range.getDocument().createElement("div"),n=this.range.getDocument().createElement("ul");return t.className=e,t.appendChild(n),this.menuContainer?this.menuContainer.appendChild(t):this.range.getDocument().body.appendChild(t)}showMenuFor(e,t){if(this.isActive&&this.current.element===e&&this.current.mentionText===this.currentMentionTextSnapshot)return;this.currentMentionTextSnapshot=this.current.mentionText,this.menu||(this.menu=this.createMenu(this.current.collection.containerClass),e.tributeMenu=this.menu,this.menuEvents.bind(this.menu)),this.isActive=!0,this.menuSelected=0,this.current.mentionText||(this.current.mentionText="");const n=e=>{if(!this.isActive)return;let n=this.search.filter(this.current.mentionText,e,{pre:this.current.collection.searchOpts.pre||"<span>",post:this.current.collection.searchOpts.post||"</span>",skip:this.current.collection.searchOpts.skip,extract:e=>{if("string"==typeof this.current.collection.lookup)return e[this.current.collection.lookup];if("function"==typeof this.current.collection.lookup)return this.current.collection.lookup(e,this.current.mentionText);throw new Error("Invalid lookup attribute, lookup must be string or function.")}});this.current.collection.menuItemLimit&&(n=n.slice(0,this.current.collection.menuItemLimit)),this.current.filteredItems=n;let i=this.menu.querySelector("ul");if(this.range.positionMenuAtCaret(t),!n.length){let e=new CustomEvent("tribute-no-match",{detail:this.menu});return this.current.element.dispatchEvent(e),void("function"==typeof this.current.collection.noMatchTemplate&&!this.current.collection.noMatchTemplate()||!this.current.collection.noMatchTemplate?this.hideMenu():"function"==typeof this.current.collection.noMatchTemplate?i.innerHTML=this.current.collection.noMatchTemplate():i.innerHTML=this.current.collection.noMatchTemplate)}i.innerHTML="";let r=this.range.getDocument().createDocumentFragment();n.forEach(((e,t)=>{let n=this.range.getDocument().createElement("li");n.setAttribute("data-index",t),n.className=this.current.collection.itemClass,n.addEventListener("mousemove",(e=>{let[t,n]=this._findLiTarget(e.target);0!==e.movementY&&this.events.setActiveLi(n)})),this.menuSelected===t&&n.classList.add(this.current.collection.selectClass),n.innerHTML=this.current.collection.menuItemTemplate(e),r.appendChild(n)})),i.appendChild(r)};"function"==typeof this.current.collection.values?this.searchDebounce?s((()=>{this.current.collection.values(this.current.mentionText,n)}),this.searchDebounce):this.current.collection.values(this.current.mentionText,n):n(this.current.collection.values)}_findLiTarget(e){if(!e)return[];const t=e.getAttribute("data-index");return t?[e,t]:this._findLiTarget(e.parentNode)}showMenuForCollection(e,t){e!==document.activeElement&&this.placeCaretAtEnd(e),this.current.collection=this.collection[t||0],this.current.externalTrigger=!0,this.current.element=e,e.isContentEditable?this.insertTextAtCursor(this.current.collection.trigger):this.insertAtCaret(e,this.current.collection.trigger),this.showMenuFor(e)}placeCaretAtEnd(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}}insertTextAtCursor(e){var t,n;(n=(t=window.getSelection()).getRangeAt(0)).deleteContents();var i=document.createTextNode(e);n.insertNode(i),n.selectNodeContents(i),n.collapse(!1),t.removeAllRanges(),t.addRange(n)}insertAtCaret(e,t){var n=e.scrollTop,i=e.selectionStart,r=e.value.substring(0,i),s=e.value.substring(e.selectionEnd,e.value.length);e.value=r+t+s,i+=t.length,e.selectionStart=i,e.selectionEnd=i,e.focus(),e.scrollTop=n}hideMenu(){this.menu&&(this.menu.style.cssText="display: none;",this.isActive=!1,this.menuSelected=0,this.current={})}selectItemAtIndex(e,t){if("number"!=typeof(e=parseInt(e))||isNaN(e))return;let n=this.current.filteredItems[e],i=this.current.collection.selectTemplate(n);null!==i&&this.replaceText(i,t,n)}replaceText(e,t,n){this.range.replaceTriggerText(e,!0,!0,t,n)}_append(e,t,n){if("function"==typeof e.values)throw new Error("Unable to append to values, as it is a function.");e.values=n?t:e.values.concat(t)}append(e,t,n){let i=parseInt(e);if("number"!=typeof i)throw new Error("please provide an index for the collection to update.");let r=this.collection[i];this._append(r,t,n)}appendCurrent(e,t){if(!this.isActive)throw new Error("No active state. Please use append instead and pass an index.");this._append(this.current.collection,e,t)}detach(t){if(!t)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if(void 0!==e&&t instanceof e&&(t=t.get()),t.constructor===NodeList||t.constructor===HTMLCollection||t.constructor===Array){let e=t.length;for(var n=0;n<e;++n)this._detach(t[n])}else this._detach(t)}_detach(e){this.events.unbind(e),e.tributeMenu&&this.menuEvents.unbind(e.tributeMenu),setTimeout((()=>{e.removeAttribute("data-tribute"),this.isActive=!1,e.tributeMenu&&e.tributeMenu.remove()}))}}export{o as T};