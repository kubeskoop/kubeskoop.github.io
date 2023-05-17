"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[1180],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=o,f=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a="Supported Network Plugins",l={unversionedId:"guide/diagnose/network-plugins",id:"guide/diagnose/network-plugins",title:"Supported Network Plugins",description:"The following network plugins are implemented by KubeSkoop connectivity diagnosis.",source:"@site/docs/guide/diagnose/network-plugins.md",sourceDirName:"guide/diagnose",slug:"/guide/diagnose/network-plugins",permalink:"/docs/guide/diagnose/network-plugins",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/guide/diagnose/intro"},next:{title:"Specifying Cloud Provider",permalink:"/docs/guide/diagnose/cloud-providers"}},p={},s=[{value:"Flannel",id:"flannel",level:2},{value:"Calico",id:"calico",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-network-plugins"},"Supported Network Plugins"),(0,o.kt)("p",null,"The following network plugins are implemented by KubeSkoop connectivity diagnosis."),(0,o.kt)("h2",{id:"flannel"},"Flannel"),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"host-gw")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vxlan")," are supported for Flannel cluster, and will auto detect which type should be used in diagnose."),(0,o.kt)("h2",{id:"calico"},"Calico"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BGP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IPIP")," mode are supported for Flannel cluster, and will auto detect which type should be used in diagnose."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("strong",{parentName:"p"},"Calico API Server")," should be installed in cluster to run connectivity diagnosis. For more information please see ",(0,o.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/maintenance/install-apiserver"},"Calico documentation"),"."))}d.isMDXComponent=!0}}]);