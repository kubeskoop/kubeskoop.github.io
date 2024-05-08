"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,k=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="\u5feb\u901f\u4e0a\u624b",p={unversionedId:"quick-start",id:"quick-start",title:"\u5feb\u901f\u4e0a\u624b",description:"\u4f60\u53ef\u4ee5\u901a\u8fc7skoopbundle.yaml\u6587\u4ef6\u5feb\u901f\u90e8\u7f72KubeSkoop\u3001Prometheus\u3001Grafana\u548cLoki\u81f3\u4f60\u7684\u96c6\u7fa4\u3002\u5e76\u901a\u8fc7Web\u63a7\u5236\u53f0\u4f7f\u7528KubeSkoop\u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/docs/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/zh/docs/intro"},next:{title:"Getting Started",permalink:"/zh/docs/category/getting-started"}},l={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"skoopbundle.yaml"),"\u6587\u4ef6\u5feb\u901f\u90e8\u7f72KubeSkoop\u3001Prometheus\u3001Grafana\u548cLoki\u81f3\u4f60\u7684\u96c6\u7fa4\u3002\u5e76\u901a\u8fc7Web\u63a7\u5236\u53f0\u4f7f\u7528KubeSkoop\u7684\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"skoopbundle.yaml"),"\u4ee5\u6700\u5c0f\u526f\u672c\u548c\u9ed8\u8ba4\u914d\u7f6e\u542f\u52a8\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5b89\u88c5KubeSkoop\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/getting-started/installation"},"\u5b89\u88c5"),"\u3002")),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u5b8c\u6210\u5e76\u542f\u52a8\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"webconsole"),"\u670d\u52a1\u6765\u8bbf\u95eeKubeSkoop Web\u63a7\u5236\u53f0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n kubeskoop webconsole\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u9700\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"webconsole"),"\u670d\u52a1\u66f4\u6539\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," \u6216",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"\u7c7b\u578b\uff0c\u4ee5\u4fbf\u4ece\u96c6\u7fa4\u5916\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u63a7\u5236\u53f0\u7684\u9ed8\u8ba4\u7528\u6237\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"\uff0c\u5bc6\u7801\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"kubeskoop"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Web Console",src:n(769).Z,width:"3650",height:"3114"})),(0,o.kt)("p",null,"\u606d\u559c\uff01\u4f60\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u4e86KubeSkoop\u3002\u5173\u4e8e\u63a7\u5236\u53f0\u7684\u66f4\u591a\u529f\u80fd\uff0c\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/guide/web-console"},"Web\u63a7\u5236\u53f0"),"\u3002"))}d.isMDXComponent=!0},769:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_console-ec3d3d3111bc350301e6b305903bc1cd.jpg"}}]);