import{g as o}from"../../common/util/guid-CEQsGVY5.js";import{c as t}from"../../../@vue-runtime-dom-Dkxbnx-0.js";import{_ as e}from"../../../plugin-vue_export-helper-BCo6x5W8.js";import{r as s}from"../../../@vue-reactivity-mdokXGQ5.js";import{a as i,g as a,j as n,k as r,F as l,q as d,l as c,s as u,x as m,y as v}from"../../../@vue-runtime-core-lkGMyH8G.js";import{k as p,n as h}from"../../../@vue-shared-LkD7rn4X.js";const g={name:"components-toast",setup(t){const e=s([]),i=(o,t)=>{const s=e.value.findIndex((t=>t.id===o));-1!==s&&e.value.splice(s,1),clearTimeout(t)};return{toastArr:e,addToast:({duration:t=3e3,durationBgColor:s="var(--global-primary-color)",showCloseBtn:a=!0,showDurationLine:n=!0,content:r})=>{const l=o(),d={id:l,hiddenTime:t,durationBgColor:s,showCloseBtn:a,showDurationLine:n,content:r},c=setTimeout((()=>{i(l,c)}),t);d.setTimeoutId=c,e.value.push(d)},closeToast:(o,t)=>{i(o,t)}}}},w={class:"absolute toast-wrap"},f={class:"flex align-items-center line-height-1 toast-content"},C={style:{"margin-right":"20px"}},y=["onClick"],T=[(o=>(m("data-v-c5ccafec"),o=o(),v(),o))((()=>c("path",{d:"M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z","p-id":"1346"},null,-1)))],k={class:"width100 duration"};const x=e(g,[["render",function(o,e,s,m,v,g){return i(),a("div",w,[n(t,{duration:550,name:"nested"},{default:r((()=>[(i(!0),a(l,null,d(m.toastArr,(o=>(i(),a("div",{class:"toast overflow-hidden",key:o.id},[c("div",f,[c("div",C,p(o.content),1),o.showCloseBtn?(i(),a("svg",{key:0,onClick:t=>m.closeToast(o.id,o.setTimeoutId),class:"icon cursor-pointer",style:{width:"1.0205078125em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},viewBox:"0 0 1045 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1345"},T,8,y)):u("",!0)]),c("div",k,[o.showDurationLine?(i(),a("div",{key:0,style:h({backgroundColor:o.durationBgColor,animationDuration:`${o.hiddenTime}ms`}),class:"duration-line"},null,4)):u("",!0)])])))),128))])),_:1})])}],["__scopeId","data-v-c5ccafec"]]);export{x as t};