import{a as e}from"../../../../../@vueuse-CzS49P4w.js";import{F as o}from"../../../../../file-saver-HR8lLbwc.js";import{a as t,g as r,b as s,c as a,d as m,e as n,f as i}from"../../../../../@kangc-BdzBttPV.js";import{h as l}from"../../../../../highlight.js-DXF5yiBH.js";import{C as u}from"../../../../../codemirror-D8nsCV5x.js";import{f as d}from"../../../../common/util/methods-G0pJ8i8C.js";import{g as c}from"../../../../common/util/guid-CEQsGVY5.js";import{_ as p}from"../../../../../plugin-vue_export-helper-BCo6x5W8.js";import{r as v}from"../../../../../@vue-reactivity-mdokXGQ5.js";import{n as j,N as f,a as g,g as h,j as b}from"../../../../../@vue-runtime-core-lkGMyH8G.js";import"../../../../../__commonjsHelpers__-MdiGH4nz.js";import"../../../../../vue-CMymT-Xv.js";import"../../../../../@vue-runtime-dom-Dkxbnx-0.js";import"../../../../../@vue-shared-LkD7rn4X.js";import"../../../../../@vue-compiler-sfc-C4scNWwD.js";import"../../../../../@babel-C1NHXBkA.js";import"../../../../../markdown-it-emoji-BIwi2JNw.js";import"../../../../../@vuepress-CFVItnWI.js";import"../../../../../markdown-it-container-B5GCwLYL.js";import"../../../../../copy-to-clipboard-BKwa6wn5.js";import"../../../../../toggle-selection-DUsDmMsR.js";import"../../../../../axios-DPD4D5Qz.js";t.Codemirror=u,t.use(r,{Hljs:l}),t.use(s()),t.use(a()),t.use(m()),t.use(n()),t.use(i());const w={class:"md-preview"};const x=p({name:"view-demo-markdown-editor",components:{vMdPreview:t},setup(){const t=v("要不写点啥... ..."),r=v(null),{toggle:s}=e(r);return{text:t,mdPreview:r,leftToolbar:v("undo redo clear | h bold italic strikethrough quote | emoji | todo-list | customToolbar1 | ul ol table hr | link image code | save"),toolbar:{customToolbar1:{title:"自定义工具栏",icon:"v-md-icon-tip",menus:[{name:"menu1",text:"着重文字",action(e){e.insert((e=>{const o=e||"请输入文本";return{text:` \`${o}\` `,selected:o}}))}},{name:"menu2",text:"生成快捷目录",action(e){e.insert((()=>{t.value=`[[toc]] \n\n${t.value}`}))}}]}},onSave:e=>{o.saveAs(new Blob([e]),"my-markdown.md")},onFullscreenChange:e=>{s(e)},onUploadImage:(e,o,s)=>{d(s[0]).then((e=>{const o=`id_${c()}`;r.value.insert((()=>({text:`![image][${o}]`,selected:""}))),j().then((()=>{t.value=`${t.value} \n\n[${o}]: ${e}`}))}))}}}},[["render",function(e,o,t,r,s,a){const m=f("v-md-preview");return g(),h("div",w,[b(m,{ref:"mdPreview",toolbar:r.toolbar,modelValue:r.text,"onUpdate:modelValue":o[0]||(o[0]=e=>r.text=e),"disabled-menus":[],"default-show-toc":"",autofocus:"","left-toolbar":r.leftToolbar,height:"100vh",onUploadImage:r.onUploadImage,onFullscreenChange:r.onFullscreenChange,onSave:r.onSave},null,8,["toolbar","modelValue","left-toolbar","onUploadImage","onFullscreenChange","onSave"])])}],["__scopeId","data-v-87f0f69e"]]);export{x as default};