import{a as n}from"./components/async-tribute/index-DLEqibP5.js";import{t as e}from"./components/tribute/index-CP1KAHSp.js";import{_ as t}from"../../../../../plugin-vue_export-helper-BCo6x5W8.js";import{N as s,a as i,g as o,j as m,x as r,y as a,l as u,P as l}from"../../../../../@vue-runtime-core-lkGMyH8G.js";import"../../../../assets/images/mention-function/01-BuR_gzQs.js";import"../../../../assets/images/mention-function/02-B8GIfYyc.js";import"../../../../assets/images/mention-function/03-CklHmpUC.js";import"../../../../assets/images/mention-function/04-DvrsfXdw.js";import"./components/vue-tribute.vue_vue_type_script_lang-Diz8e1AZ.js";import"../../../../../jquery-IViRahhZ.js";import"../../../../../__commonjsHelpers__-MdiGH4nz.js";import"../../../../../tributejs-COWOt0o1.js";import"../../../../static/tribute/index-C6blBvLc.js";import"../../../../static/tribute/tribute-DaPSKTRJ.js";import"../../../../common/util/debounce-CNl5k4zp.js";import"../../../../../@vue-reactivity-mdokXGQ5.js";import"../../../../../@vue-shared-LkD7rn4X.js";import"./components/tribute-utill-DskoVJ8f.js";import"../../../../components/toast/index-6aw5lF3o.js";import"../../../../common/util/guid-CEQsGVY5.js";import"../../../../../@vue-runtime-dom-Dkxbnx-0.js";const p={name:"view-demo-mention-function",components:{asyncTribute:n,tribute:e},setup:()=>({})},c={class:"width100 overflow-y-auto tribute-main"},d=(n=>(r("data-v-dd084223"),n=n(),a(),n))((()=>u("pre",{class:"overflow-y-auto pre"},[l("      {\n        // 开始查找的符号或字符串\n        trigger: '@',\n\n        // 异步加载时间（自己新添的）\n        searchDebounce:0,\n\n        // @提到的目标元素\n        iframe: null,\n\n        // 在弹出菜单中为活动项添加的类\n        selectClass: 'highlight',\n\n        // 菜单容器class\n        containerClass: 'tribute-container',\n\n        // 菜单列表item的类\n        itemClass: '',\n\n        // select插入回调\n        selectTemplate: function (item) {\n          return '@' + item.original.value;\n        },\n\n        // menu中item模板\n        menuItemTemplate: function (item) {\n          return item.string;\n        },\n\n        // 无匹配模板显示该模板\n        // 默认隐藏\n        noMatchTemplate: null,\n\n        // 为菜单指定另一个父容器\n        // 容器必须是菜单正确显示的定位元素，即“position:relative`\n        // /默认容器是body\n        menuContainer: document.body,\n\n        // 对象中要搜索的列（接受函数或字符串）\n        lookup: 'key',\n\n        // 默认情况下包含要插入内容的列\n        fillAttr: 'value',\n\n        // emmmmmmm,values\n        values: [],\n\n        // 当您的值函数为异步时，将显示一个可选的加载模板\n        loadingItemTemplate: null,\n\n        // 指定触发器字符串之前是否需要空格\n        requireLeadingSpace: true,\n\n        // 指定是否允许在@中间使用空格\n        allowSpaces: false,\n\n        // 可选地为替换文本指定自定义后缀\n        // （如果未定义，则默认为空白）\n        replaceTextSuffix: '\\n',\n\n        // 确定menu何时被定为. 设为flase且与menuContainer结合使用创建行内menu\n        // (defaults to true)\n        positionMenu: true,\n\n        // 按下空格键时，选择当前匹配项\n        spaceSelectsMatch: false,\n\n        // turn tribute into an autocomplete自动填充\n        autocompleteMode: false,\n\n        // Customize the elements used to wrap matched strings within the results list\n        // 在结果列表中自定义用于包装匹配字符串的元素\n        // defaults to "),u("span"),l(" if undefined\n        searchOpts: {\n          pre: '"),u("span",null,"',\n          post: '"),l("',\n          skip: false // true will skip local search, useful if doing server-side search\n        },\n\n        // Limits the number of items in the menu\n        menuItemLimit: 25,\n\n        // specify the minimum number of characters that must be typed before menu appears\n        menuShowMinLength: 0\n      }\n    ")],-1)));const f=t(p,[["render",function(n,e,t,r,a,u){const l=s("tribute"),p=s("asyncTribute");return i(),o("div",c,[m(l,{class:"tribute"}),m(p,{class:"tribute"}),d])}],["__scopeId","data-v-dd084223"]]);export{f as default};