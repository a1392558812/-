import{u as e,T as o}from"../@vue-runtime-dom-Dkxbnx-0.js";import{u as a,b as r}from"../@vueuse-CzS49P4w.js";import{u as n}from"../vue-router-DBqTrJEm.js";import{g as i}from"./common/util/guid-CEQsGVY5.js";import{l as s}from"./components/left-nav-link/index-BtbB7Wjm.js";import{l as t}from"./components/layout-header/index-Ss5HOvNg.js";import{_ as l}from"../plugin-vue_export-helper-BCo6x5W8.js";import{b as u,e as h,N as f,a as d,g,c as v,s as w,l as m,j as p,k as c,O as k}from"../@vue-runtime-core-lkGMyH8G.js";import{r as S}from"../@vue-reactivity-mdokXGQ5.js";import{l as L}from"../@vue-shared-LkD7rn4X.js";const b={components:{layoutHeader:t,leftNavLink:s},setup(){const e=S(!1),o=S(!1),s=S("70px"),t=S(!1),l=S(!1),f=a(r).greater("sm"),d=u((()=>f.value?"330px":"100vw")),g=S(i()),v=n();return h((()=>v.path),(()=>{const{ifShowHeaderComponent:e}=v.meta;l.value=void 0===e||e,t.value=["/","/search"].includes(v.path)}),{immediate:!0}),{headerH:s,showNavLink:o,ifShowMenu:e,ifShowHeaderPopupBtn:t,leftSidebarW:d,ifLarger:f,ifShowHeaderComponent:l,refreshViewKey:g,toggleMenu:a=>{e.value=void 0!==a?a:!e.value,o.value=!1},toggleShowNavLink:a=>{o.value=void 0!==a?a:!o.value,e.value=!1},refreshView:()=>{g.value=i()}}}},H=()=>{e((e=>({ad8c0a8e:e.headerH})))},N=b.setup;b.setup=N?(e,o)=>(H(),N(e,o)):H;const j={id:"page",class:"overflow-hidden"};const y=l(b,[["render",function(e,a,r,n,i,s){const t=f("layout-header"),l=f("left-nav-link"),u=f("router-view");return d(),g("div",j,[n.ifShowHeaderComponent?(d(),v(t,{key:0,"if-larger":n.ifLarger,"header-h":n.headerH,"show-nav-link":n.showNavLink,"if-show-header-popup-btn":n.ifShowHeaderPopupBtn,onToggleMenu:n.toggleMenu,onToggleShowNavLink:n.toggleShowNavLink,onRefreshView:n.refreshView},null,8,["if-larger","header-h","show-nav-link","if-show-header-popup-btn","onToggleMenu","onToggleShowNavLink","onRefreshView"])):w("",!0),m("div",{class:L(["relative bg-white",n.ifShowHeaderComponent?"content":""])},[n.ifShowHeaderComponent?(d(),v(l,{key:0,"show-nav-link":n.showNavLink,"left-sidebar-w":n.leftSidebarW,"if-larger":n.ifLarger,onToggleShowNavLink:n.toggleShowNavLink,onRefreshView:n.refreshView},null,8,["show-nav-link","left-sidebar-w","if-larger","onToggleShowNavLink","onRefreshView"])):w("",!0),p(u,null,{default:c((({Component:e})=>[p(o,null,{default:c((()=>[(d(),v(k(e),{key:n.refreshViewKey,"if-larger":n.ifLarger,"header-h":n.headerH,"if-show-menu":n.ifShowMenu,"toggle-menu":n.toggleMenu,"left-sidebar-w":n.leftSidebarW},null,8,["if-larger","header-h","if-show-menu","toggle-menu","left-sidebar-w"]))])),_:2},1024)])),_:1})],2)])}],["__scopeId","data-v-26e92bbf"]]);export{y as A};