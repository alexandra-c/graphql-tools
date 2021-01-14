(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(258)),b={},l={unversionedId:"api/classes/loaders/module/src.moduleloader",id:"api/classes/loaders/module/src.moduleloader",isDocsHomePage:!1,title:"src.moduleloader",description:"Class: ModuleLoader",source:"@site/docs/api/classes/loaders/module/src.moduleloader.md",slug:"/api/classes/loaders/module/src.moduleloader",permalink:"/docs/api/classes/loaders/module/src.moduleloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/loaders/module/src.moduleloader.md",version:"current",sidebar:"someSidebar",previous:{title:"src.mocklist",permalink:"/docs/api/classes/mock/src.mocklist"},next:{title:"src.prismaloader",permalink:"/docs/api/classes/loaders/prisma/src.prismaloader"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],s={toc:o};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-moduleloader"},"Class: ModuleLoader"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../../../modules/loaders_module_src"}),"loaders/module/src"),".ModuleLoader"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"This loader loads documents and type definitions from a Node module")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const schema = await loadSchema('module:someModuleName#someNamedExport', {\n  loaders: [new ModuleLoader()],\n})\n")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ModuleLoader"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/modules/utils#universalloader"}),Object(c.b)("em",{parentName:"a"},"UniversalLoader")))),Object(c.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders/module/src.moduleloader#constructor"}),"constructor"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders/module/src.moduleloader#canload"}),"canLoad")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders/module/src.moduleloader#canloadsync"}),"canLoadSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders/module/src.moduleloader#load"}),"load")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders/module/src.moduleloader#loadsync"}),"loadSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/loaders/module/src.moduleloader#loaderid"}),"loaderId"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ModuleLoader"),"(): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"src.moduleloader"}),Object(c.b)("em",{parentName:"a"},"ModuleLoader"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"src.moduleloader"}),Object(c.b)("em",{parentName:"a"},"ModuleLoader"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"canload"},"canLoad"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"canLoad"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"boolean"),"\\",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"boolean"),"\\",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L47"}),"packages/loaders/module/src/index.ts:47")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"canloadsync"},"canLoadSync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"canLoadSync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L51"}),"packages/loaders/module/src/index.ts:51")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"load"},"load"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"load"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/utils#singlefileoptions"}),Object(c.b)("em",{parentName:"a"},"SingleFileOptions")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../../../interfaces/utils/src.source"}),Object(c.b)("em",{parentName:"a"},"Source")),"\\",">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/utils#singlefileoptions"}),Object(c.b)("em",{parentName:"a"},"SingleFileOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../../../interfaces/utils/src.source"}),Object(c.b)("em",{parentName:"a"},"Source")),"\\",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L55"}),"packages/loaders/module/src/index.ts:55")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadsync"},"loadSync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadSync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/utils#singlefileoptions"}),Object(c.b)("em",{parentName:"a"},"SingleFileOptions")),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../../../interfaces/utils/src.source"}),Object(c.b)("em",{parentName:"a"},"Source"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/utils#singlefileoptions"}),Object(c.b)("em",{parentName:"a"},"SingleFileOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../../../interfaces/utils/src.source"}),Object(c.b)("em",{parentName:"a"},"Source"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L69"}),"packages/loaders/module/src/index.ts:69")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loaderid"},"loaderId"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loaderId"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L43"}),"packages/loaders/module/src/index.ts:43")))}d.isMDXComponent=!0},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,O=p["".concat(b,".").concat(m)]||p[m]||i[m]||c;return a?n.a.createElement(O,l(l({ref:t},s),{},{components:a})):n.a.createElement(O,l({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var s=2;s<c;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);