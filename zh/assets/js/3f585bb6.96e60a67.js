"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[1386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,f=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="\u7b80\u4ecb",l={unversionedId:"guide/diagnose/intro",id:"guide/diagnose/intro",title:"\u7b80\u4ecb",description:"KubeSkoop\u8fde\u901a\u6027\u8bca\u65ad\u529f\u80fd\u7b80\u4ecb\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/diagnose/intro.md",sourceDirName:"guide/diagnose",slug:"/guide/diagnose/intro",permalink:"/zh/docs/guide/diagnose/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connectivity diagnosis",permalink:"/zh/docs/category/connectivity-diagnosis"},next:{title:"\u652f\u6301\u7684\u7f51\u7edc\u63d2\u4ef6",permalink:"/zh/docs/guide/diagnose/network-plugins"}},p={},s=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u8bca\u65ad\u547d\u4ee4\u5b89\u88c5",id:"\u8bca\u65ad\u547d\u4ee4\u5b89\u88c5",level:3},{value:"\u4e00\u952e\u8bca\u65ad",id:"\u4e00\u952e\u8bca\u65ad",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"KubeSkoop\u8fde\u901a\u6027\u8bca\u65ad\u529f\u80fd\u7b80\u4ecb\u3002"),(0,o.kt)("p",null,"KubeSkoop\u8fde\u901a\u6027\u68c0\u67e5\u63d0\u4f9b\u4e86\u5bf9\u4e8e\u6301\u7eed\u6027\u7f51\u7edc\u95ee\u9898\u7684\u4e00\u952e\u8bca\u65ad\u529f\u80fd\u3002\u5b83\u80fd\u591f\u8bca\u65adKubernetes\u96c6\u7fa4\u4e2d\u5404\u79cd\u7f51\u7edc\u8bbf\u95ee\u65b9\u5f0f\u548c\u94fe\u8def(\u5982",(0,o.kt)("strong",{parentName:"p"},"Pod,Service,Node,Ingress/Egress\u6d41\u91cf"),")\uff0c\u8986\u76d6\u5b8c\u6574\u7684Linux\u534f\u8bae\u6808\u7684\u914d\u7f6e\u9519\u8bef\u573a\u666f(\u5982",(0,o.kt)("strong",{parentName:"p"},"Socket,Bridge,Veth,Netfilter,Egress"),")\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u8bca\u65ad\u591a\u79cd\u4e91\u4f9b\u5e94\u5546\u7684IaaS\u5c42\u7f51\u7edc\u9519\u8bef\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("h3",{id:"\u8bca\u65ad\u547d\u4ee4\u5b89\u88c5"},"\u8bca\u65ad\u547d\u4ee4\u5b89\u88c5"),(0,o.kt)("p",null,"\u901a\u8fc7go install\u6765\u5b89\u88c5KubeSkoop\u7684\u8bca\u65ad\u5ba2\u6237\u7aef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go install github.com/alibaba/kubeskoop/cmd/skoop\n")),(0,o.kt)("h3",{id:"\u4e00\u952e\u8bca\u65ad"},"\u4e00\u952e\u8bca\u65ad"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # \u6267\u884c\u8bca\u65ad\u547d\u4ee4\uff0c\u6307\u5b9a\u6765\u6e90\u76ee\u7684\uff0c\u901a\u8fc7--http\u6765\u8ba9\u8bca\u65ad\u7ed3\u679c\u901a\u8fc7\u672c\u5730web\u670d\u52a1\u63d0\u4f9b\nI0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # \u8bca\u65ad\u5b8c\u6210\u4f1a\u8f93\u51fa\u8bca\u65ad\u7ed3\u679c\u94fe\u63a5\n")),(0,o.kt)("p",null,"\u4e4b\u540e\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080"),"\u67e5\u770b\u8bca\u65ad\u7ed3\u679c\u3002"),(0,o.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,o.kt)("p",null,"KubeSkoop\u8fde\u901a\u6027\u8bca\u65ad\u6839\u636e\u96c6\u7fa4\u4e2d\u6240\u4f7f\u7528\u7684\u63d2\u4ef6\u548c\u6240\u4f7f\u7528\u7684\u4e91\u4f9b\u5e94\u5546\uff0c\u6784\u9020\u4ece\u6e90\u5730\u5740\u5230\u76ee\u7684\u5730\u5740\u7684\u94fe\u8def\u56fe\uff0c\u5e76\u4e14\u5bf9\u8282\u70b9\u8fdb\u884c\u7f51\u7edc\u4fe1\u606f\u7684\u91c7\u96c6\uff08\u5982iptables\u89c4\u5219\u3001\u7f51\u7edc\u8bbe\u5907\u4fe1\u606f\u3001sysctls\u7b49\uff09\u3002"),(0,o.kt)("p",null,"\u5728\u6784\u9020\u94fe\u8def\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5bf9\u56fe\u4e2d\u7684\u8282\u70b9\u548c\u8fb9\u7684\u4fe1\u606f\u8fdb\u884c\u6821\u9a8c\u548c\u6a21\u62df\u3002\u82e5\u9884\u671f\u60c5\u51b5\u4e0e\u5b9e\u9645\u60c5\u51b5\u4e0d\u7b26\uff0c\u5219\u8ba4\u4e3a\u7f51\u7edc\u914d\u7f6e\u9519\u8bef\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,o.kt)("p",null,"KubeSkoop\u7f51\u7edc\u8bca\u65ad\u53ea\u652f\u6301\u5bf9\u5df2\u5b9e\u73b0\u7684\u7f51\u7edc\u63d2\u4ef6\u8fdb\u884c\u8bca\u65ad\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/guide/diagnose/network-plugins"},"\u7f51\u7edc\u63d2\u4ef6"),"\u3002"))}d.isMDXComponent=!0}}]);