var e,r;function n(){return r?e:(r=1,e=e=>{const r=e.renderer.rules.fence;e.renderer.rules.fence=(...e)=>{const n=r(...e),s=n.slice(n.indexOf("<code>"),n.indexOf("</code>")).split("\n"),c=`<div class="line-numbers-wrapper">${[...Array(s.length-1)].map(((e,r)=>`<span class="line-number">${r+1}</span><br>`)).join("")}</div>`;return n.replace("\x3c!--beforeend--\x3e",`${c}\x3c!--beforeend--\x3e`).replace("extra-class","line-numbers-mode")}})}export{n as r};