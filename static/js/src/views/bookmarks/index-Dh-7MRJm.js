import{$ as s}from"../../../jquery-IViRahhZ.js";import{a as o}from"../../common/axios/index-CK6lisJl.js";import{h as t}from"../../common/util/methods-G0pJ8i8C.js";import{l as e}from"../../common/props/left-sidebar-props/index-Cvo_KCZG.js";import{t as r}from"../../common/util/throttle-BBe9B4-6.js";import{b as a}from"./components/bookmarks/item-B1fzGpH9.js";import{_ as i}from"../../../plugin-vue_export-helper-BCo6x5W8.js";import{r as l}from"../../../@vue-reactivity-mdokXGQ5.js";import{e as n,N as m,U as p,m as c,a as d,g as h,l as u,s as f,j as k,n as v,x as j,y as b}from"../../../@vue-runtime-core-lkGMyH8G.js";import{l as x,k as w}from"../../../@vue-shared-LkD7rn4X.js";import"../../../__commonjsHelpers__-MdiGH4nz.js";import"../../../axios-DPD4D5Qz.js";import"../../../nprogress-DbBgBvvH.js";import"./components/bookmarks/item.vue_vue_type_script_lang-CM8iY4Sg.js";const y={name:"view-bookmarks",components:{bookMarksItem:a},props:{...e},setup(){const e=l(""),a=l(!1),i=l(!1),m=l({}),p=s=>new Promise((o=>{[Object.prototype.hasOwnProperty.call(s,"child"),Object.prototype.hasOwnProperty.call(s,"ifShow"),Object.prototype.hasOwnProperty.call(s,"ifRender")].includes(!1)||(s.ifRender=!0,s.ifShow=!i.value,s.child.forEach(((o,t)=>{p(s.child[t]).then()}))),o("end")}));return o.get("./bookmarks.html").then((s=>{e.value=s.data})),n(e,(()=>v().then((()=>{m.value=t(s(".html-str").children("dl").children("dt"),!0,!0),a.value=!0})))),{str:e,ifDestroy:a,htmlJson:m,ifShowAll:i,spreadOut:()=>r((()=>{p(m.value).then((s=>{i.value=!i.value}))}),200)}}},_=s=>(j("data-v-09774746"),s=s(),b(),s),g={class:"bg-white width100 height100 flex flex-direction-column bookmarks"},O={class:"width100"},P=["innerHTML"],S=_((()=>u("span",{class:"tips-btn"}," 【 Ctrl + F 即可进行搜索 】 ",-1))),H=_((()=>u("a",{class:"tips-btn",href:"./bookmarks.html",download:"./bookmarks.html"}," 【 下载 】 ",-1))),L={style:{padding:"0 20px 120px 20px"},class:"flex-shrink-0 flex-1 overflow-auto"};const M=i(y,[["render",function(s,o,t,e,r,a){const i=m("book-marks-item"),l=p("loading");return c((d(),h("div",g,[u("div",O,[e.ifDestroy?f("",!0):(d(),h("div",{key:0,class:"width100 display-none html-str",innerHTML:e.str},null,8,P)),u("div",{class:x("tips "+(s.ifLarger?"":"flex flex-direction-column"))},[S,H,u("span",{class:"tips-btn cursor-pointer",onClick:o[0]||(o[0]=(...s)=>e.spreadOut&&e.spreadOut(...s))},w(` 【 ${e.ifShowAll?"关闭":""}全部展开 】 `),1)],2)]),u("div",L,[k(i,{data:e.htmlJson},null,8,["data"])])])),[[l,""===e.str]])}],["__scopeId","data-v-09774746"]]);export{M as default};