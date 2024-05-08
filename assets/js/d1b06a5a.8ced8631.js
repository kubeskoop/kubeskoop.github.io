"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[2568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(f,a(a({ref:n},s),{},{components:t})):o.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:0},a="Configuration",l={unversionedId:"guide/configuration",id:"guide/configuration",title:"Configuration",description:"KubeSkoop stores the configuration in yaml format and is loaded when the Agent starts.",source:"@site/docs/guide/configuration.md",sourceDirName:"guide",slug:"/guide/configuration",permalink:"/docs/guide/configuration",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/docs/category/guide"},next:{title:"Web Console",permalink:"/docs/guide/web-console"}},u={},c=[{value:"Configuration Hot Reload",id:"configuration-hot-reload",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"KubeSkoop stores the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," format and is loaded when the Agent starts."),(0,r.kt)("p",null,"In the provided installation methods, the configuration file is stored in the ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeskoop-config")," and mounted into the container."),(0,r.kt)("p",null,"Here's an example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"debugmode: true\nport: 9102\nenableController: true\nmetrics:\n  probes:\n  - name: info\n  - name: netdev\n  - name: io\n  - name: socketlatency\n  - name: packetloss\n  - name: sock\n  - name: tcpsummary\n  - name: tcp\n  - name: tcpext\n  - name: udp\n  - name: flow\nevent:\n  probes:\n  - name: packetloss\n  - name: tcpreset\n  sinks:\n  - name: stderr\n  - name: loki\n    args:\n      addr: loki-service\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debugmode")," controls whether debug mode is enabled. In debug mode, you will gain detailed logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," is the port that KubeSkoop exposes to the outside world to provide metrics information collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enableController")," controls whether to enable and connect to the controller."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," section is about the metrics configuration, defining the metrics probes and parameters that should be enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event")," is the event configuration, defining the metrics probes and parameters that should be turned on, as well as the event receivers.")),(0,r.kt)("h2",{id:"configuration-hot-reload"},"Configuration Hot Reload"),(0,r.kt)("p",null,"KubeSkoop agent supports hot reloading of configurations, when configuration file changes, KubeSkoop will automatically reloads it."))}d.isMDXComponent=!0}}]);