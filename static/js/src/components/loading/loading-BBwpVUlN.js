import{_ as s}from"../../../plugin-vue_export-helper-BCo6x5W8.js";import{a as o,g as a,l as e,F as t,q as l,r,s as i}from"../../../@vue-runtime-core-lkGMyH8G.js";import{l as n,k as d}from"../../../@vue-shared-LkD7rn4X.js";import{r as p}from"../../../@vue-reactivity-mdokXGQ5.js";const u={name:"components-loading",props:{showModal:{type:Boolean,default:!1}},setup(s){const o=p(s.showModal);return{list:["🐮","🐴","🐮","🐴","🐮","🐴","🐮","🐴"],ifShow:o,setShowModal:s=>{o.value=s}}}},c={key:0,class:"loading"},m={class:"loadEffect"};const f=s(u,[["render",function(s,p,u,f,v,h){return f.ifShow?(o(),a("div",c,[e("div",m,[(o(!0),a(t,null,l(f.list,((s,e)=>(o(),a("span",{key:e,class:n(`loading-item loading-${e}`)},d(s),3)))),128)),r(s.$slots,"default",{},void 0,!0)])])):i("",!0)}],["__scopeId","data-v-8982104a"]]);export{f as l};