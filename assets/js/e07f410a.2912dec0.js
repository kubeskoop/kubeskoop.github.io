"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[2465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=o,m=d["".concat(l,".").concat(c)]||d[c]||k[c]||n;return r?a.createElement(m,p(p({ref:t},u),{},{components:r})):a.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<n;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={},p="KubeSkoop exporter \u53ef\u89c6\u5316\u914d\u7f6e",i={unversionedId:"guide/exporter/exporter-visualization-guide",id:"guide/exporter/exporter-visualization-guide",title:"KubeSkoop exporter \u53ef\u89c6\u5316\u914d\u7f6e",description:"\u4f7f\u7528 Prometheus & Grafana \u8fdb\u884c\u6307\u6807\u7684\u53ef\u89c6\u5316",source:"@site/docs/guide/exporter/exporter-visualization-guide.md",sourceDirName:"guide/exporter",slug:"/guide/exporter/exporter-visualization-guide",permalink:"/docs/guide/exporter/exporter-visualization-guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KubeSkoop exporter \u529f\u80fd\u7b80\u4ecb",permalink:"/docs/guide/exporter/exporter-description"},next:{title:"\u5b89\u88c5 KubeSkoop exporter",permalink:"/docs/guide/exporter/exporter_installation"}},l={},s=[{value:"\u4f7f\u7528 Prometheus &amp; Grafana \u8fdb\u884c\u6307\u6807\u7684\u53ef\u89c6\u5316",id:"\u4f7f\u7528-prometheus--grafana-\u8fdb\u884c\u6307\u6807\u7684\u53ef\u89c6\u5316",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6eKubeSkoop exporter\u6307\u6807\u76d1\u63a7",id:"\u914d\u7f6ekubeskoop-exporter\u6307\u6807\u76d1\u63a7",level:3},{value:"\u5bfc\u5165\u9884\u5b9a\u4e49\u9ed8\u8ba4\u5927\u76d8",id:"\u5bfc\u5165\u9884\u5b9a\u4e49\u9ed8\u8ba4\u5927\u76d8",level:3},{value:"\u4f7f\u7528 Grafana &amp; Loki \u67e5\u770b\u53ef\u89c6\u5316\u7684\u7f51\u7edc\u4e8b\u4ef6",id:"\u4f7f\u7528-grafana--loki-\u67e5\u770b\u53ef\u89c6\u5316\u7684\u7f51\u7edc\u4e8b\u4ef6",level:2},{value:"\u5b89\u88c5 Grafana Loki",id:"\u5b89\u88c5-grafana-loki",level:3},{value:"\u914d\u7f6ekubeskoopp exporter\u4e8b\u4ef6\u6d41",id:"\u914d\u7f6ekubeskoopp-exporter\u4e8b\u4ef6\u6d41",level:3},{value:"\u901a\u8fc7Grafana",id:"\u901a\u8fc7grafana",level:4}],u={toc:s},d="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeskoop-exporter-\u53ef\u89c6\u5316\u914d\u7f6e"},"KubeSkoop exporter \u53ef\u89c6\u5316\u914d\u7f6e"),(0,o.kt)("h2",{id:"\u4f7f\u7528-prometheus--grafana-\u8fdb\u884c\u6307\u6807\u7684\u53ef\u89c6\u5316"},"\u4f7f\u7528 Prometheus & Grafana \u8fdb\u884c\u6307\u6807\u7684\u53ef\u89c6\u5316"),(0,o.kt)("p",null,"KubeSkoop exporter\u63d0\u4f9b\u4e86\u6807\u51c6\u7684Prometheus\u683c\u5f0f\u7684\u6307\u6807\u8f93\u51fa\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u5c06KubeSkoop exporter\u7684\u76d1\u63a7\u4fe1\u606f\u96c6\u6210\u5230\u5df2\u6709\u7684\u76d1\u63a7\u7cfb\u7edf\u4e2d\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e")," \u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u5c31\u7eea\u7684\u76d1\u63a7\u670d\u52a1\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},"\u5b89\u88c5")," \u642d\u5efa\u53ef\u89c6\u5316\u7684\u76d1\u63a7\u670d\u52a1\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"Prometheus \u7684\u5b89\u88c5"))," \u5b8c\u6210Prometheus\u7684\u90e8\u7f72\u5b89\u88c5\u3002"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://prometheus.io/docs/visualization/grafana/"},"Grafana \u7684\u5b89\u88c5"))," \u5b8c\u6210Grafana\u7684\u5b89\u88c5\u5e76\u914d\u7f6e\u4e0ePrometheus\u7684\u8fde\u63a5\u3002"),(0,o.kt)("h3",{id:"\u914d\u7f6ekubeskoop-exporter\u6307\u6807\u76d1\u63a7"},"\u914d\u7f6eKubeSkoop exporter\u6307\u6807\u76d1\u63a7"),(0,o.kt)("p",null,"KubeSkoop exporter\u652f\u6301\u8fd0\u884c\u5728kubernetes\u4e2d\u7684prometheus\u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\uff0c\u5728\u5b89\u88c5\u5b8c\u6210prometheus\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"Status->Targets"),"\u9875\u9762\uff0c\u5728\u641c\u7d22\u680f\u4e2d\u8f93\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"skoop-exporter"),"\uff0c\u67e5\u770b\u5df2\u7ecf\u5c31\u7eea\u7684\u5b9e\u4f8b:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"prometheus-exporter-targets",src:r(5592).Z,width:"1269",height:"836"})),(0,o.kt)("p",null,"\u5728KubeSkoop exporter\u5b9e\u4f8b\u88abprometheus\u6b63\u5e38\u6355\u83b7\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5b8c\u6210\u6307\u6807\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u5165Grafana\u7684\u63a7\u5236\u53f0\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"Configuration->Data sources->Add data source"),"\u540e\u9009\u62e9Prometheus\uff0c\u5c06\u5df2\u7ecf\u5c31\u7eea\u7684prometheus\u5b9e\u4f8b\u7684\u5730\u5740\u6dfb\u52a0\u5230Grafana\u7684\u6570\u636e\u6e90\u8ba2\u9605\u4e2d:\n",(0,o.kt)("img",{alt:"grafana-prometheus-datasource",src:r(4098).Z,width:"1269",height:"1182"})),(0,o.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u4e00\u4e2a\u5927\u76d8\uff0c\u6216\u8005\u5728\u5df2\u6709\u5927\u76d8\u4e2d\u9009\u62e9\u65b0\u5efa\u4e00\u4e2a\u9762\u677f\uff0c\u5728\u9762\u677f\u7684\u914d\u7f6e\u4e2d\u9009\u53d6\u6570\u636e\u6e90\u4e3a",(0,o.kt)("strong",{parentName:"li"},"1"),"\u4e2d\u914d\u7f6e\u7684\u6570\u636e\u6e90\uff0c\u5e76\u5728Metric browser\u4e2d\u8f93\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"inspector"),"\uff0c\u5373\u53ef\u770b\u5230\u8054\u60f3\u540e\u7684KubeSkoop exporter\u6307\u6807\uff0c\u9009\u53d6\u5176\u4e2d\u9700\u8981\u7684\u4fe1\u606f\uff0c\u4ee5",(0,o.kt)("inlineCode",{parentName:"li"},"inspector_pod_netdevrxbytes"),"\u4e3a\u4f8b\uff0c\u8f93\u5165\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728\u9762\u677f\u4e2d\u770b\u5230\u83b7\u53d6\u5230\u7684\u6570\u636e\u3002\n",(0,o.kt)("img",{alt:"grafana-prometheus-panel",src:r(1634).Z,width:"1281",height:"1244"})),(0,o.kt)("li",{parentName:"ol"},"\u5728\u6307\u6807\u7684\u53ef\u89c6\u5316\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u6307\u6807\u7684\u56fe\u4f8b\u548c\u5355\u4f4d\u7b49\u4fe1\u606f\uff0c\u5176\u4e2d\uff0c\u56fe\u4f8b\u652f\u6301\u914d\u7f6ePod\u7684Namepace\uff0cip\uff0clabel\u7b49\u4fe1\u606f\uff0c\u5728\u9762\u677f\u7684",(0,o.kt)("strong",{parentName:"li"},"Legend"),"\u4e2d\u53ef\u4ee5\u914d\u7f6e\u8fd9\u4e9b\u652f\u6301\u7684\u56fe\u4f8b\u3002")),(0,o.kt)("h3",{id:"\u5bfc\u5165\u9884\u5b9a\u4e49\u9ed8\u8ba4\u5927\u76d8"},"\u5bfc\u5165\u9884\u5b9a\u4e49\u9ed8\u8ba4\u5927\u76d8"),(0,o.kt)("p",null,"KubeSkoop exporter\u63d0\u4f9b\u8ddf\u968f\u7248\u672c\u66f4\u65b0\u7684\u9ed8\u8ba4Grafana\u5927\u76d8\u914d\u7f6e\u6587\u4ef6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/resource/kubeskoop-exporter-dashboard.json -o dashboard.json\n")),(0,o.kt)("p",null,"\u767b\u9646Grafana\u63a7\u5236\u53f0\u540e\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"Dashboards->Import->Upload JSON file"),"\uff0c\u9009\u62e9\u4fdd\u5b58\u597d\u7684\u6587\u4ef6\u4e0a\u4f20\u540e\uff0c\u9009\u53d6prometheus\u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"Import"),"\u5bfc\u5165\uff0c\u5373\u53ef\u67e5\u770b\u5230\u9ed8\u8ba4\u5927\u76d8\u3002\u901a\u8fc7\u9009\u53d6\u4e0d\u540c\u7684\u9762\u677f\u7ec4\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u4e0d\u540c\u7c7b\u522b\u7684\u76d1\u63a7\u6307\u6807\u4fe1\u606f:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"default_dashboard",src:r(8155).Z,width:"1275",height:"1181"})),(0,o.kt)("h2",{id:"\u4f7f\u7528-grafana--loki-\u67e5\u770b\u53ef\u89c6\u5316\u7684\u7f51\u7edc\u4e8b\u4ef6"},"\u4f7f\u7528 Grafana & Loki \u67e5\u770b\u53ef\u89c6\u5316\u7684\u7f51\u7edc\u4e8b\u4ef6"),(0,o.kt)("h3",{id:"\u5b89\u88c5-grafana-loki"},"\u5b89\u88c5 Grafana Loki"),(0,o.kt)("p",null,"\u6309\u7167\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u4e0d\u540c\u573a\u666f\u4e0b\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://grafana.com/docs/loki/latest/installation/helm/"},"Grafana Loki\u7684\u5b89\u88c5")),"\u3002"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u68c0\u67e5Grafana Loki\u7684\u53ef\u7528\u6027:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://[Grafana Loki\u5b9e\u4f8b\u7684\u5730\u5740]:3100/ready\n")),(0,o.kt)("h3",{id:"\u914d\u7f6ekubeskoopp-exporter\u4e8b\u4ef6\u6d41"},"\u914d\u7f6ekubeskoopp exporter\u4e8b\u4ef6\u6d41"),(0,o.kt)("h4",{id:"\u901a\u8fc7grafana"},"\u901a\u8fc7Grafana"),(0,o.kt)("p",null,"\u901a\u8fc7Grafana\u53ef\u4ee5\u5c06KubeSkoop exporter\u63a8\u9001\u5230Grafana Loki\u7684\u4e8b\u4ef6\u8fdb\u884c\u53ef\u89c6\u5316\uff0c\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u53ef\u4ee5\u5b9e\u73b0\u5b9e\u73b0\u53ef\u89c6\u5316\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"Configuration->Data sources->Add data source"),"\u540e\u9009\u62e9Loki\uff0c\u5c06Grafana Loki\u670d\u52a1\u7684\u5730\u5740\u6dfb\u52a0\u5230Grafana\u7684\u6570\u636e\u6e90\u8ba2\u9605\u4e2d\uff0c\u53ef\u4ee5\u662fip\u5730\u5740\u548c\u57df\u540d\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a3100\uff1a\n",(0,o.kt)("img",{alt:"grafana-loki-datasource",src:r(712).Z,width:"1270",height:"1223"})),(0,o.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u4e00\u4e2a\u5927\u76d8\uff0c\u6216\u8005\u5728\u5df2\u6709\u5927\u76d8\u4e2d\u9009\u62e9\u65b0\u5efa\u4e00\u4e2a\u9762\u677f\uff0c\u5728\u9762\u677f\u7684\u914d\u7f6e\u4e2d\u9009\u53d6\u6570\u636e\u6e90\u4e3a",(0,o.kt)("strong",{parentName:"li"},"1"),"\u4e2d\u914d\u7f6e\u7684\u6570\u636e\u6e90\uff0c\u5e76\u5728Label browser\u4e2d\u8fc7\u6ee4\u9700\u8981\u7684\u4e8b\u4ef6\u4fe1\u606f\uff1a\n",(0,o.kt)("img",{alt:"grafana-loki-panel",src:r(2920).Z,width:"859",height:"899"})),(0,o.kt)("li",{parentName:"ol"},"\u5728\u4e8b\u4ef6\u9762\u677f\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://grafana.com/docs/loki/latest/logql/log_queries/"},"LogQL")),"\u67e5\u8be2\u7279\u5b9a\u7684\u4e8b\u4ef6\uff0c\u70b9\u51fb\u4e8b\u4ef6\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u8be6\u7ec6\u7684\u73b0\u573a\u4fe1\u606f:\n",(0,o.kt)("img",{alt:"grafana-loki-detail",src:r(1262).Z,width:"1012",height:"1009"}))))}k.isMDXComponent=!0},712:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/datasource-loki-d7ff6339eb7ad8d21ca94e8512b3f0bd.png"},4098:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/datasource-prometheus-4137cd87e2ab78d077a037ae25edd11d.png"},8155:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/default_dashboard-2e01e23fce6b2db3cbc8970063625d06.png"},1262:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/loki-event-detail-1c679fc8eaf474fa4e738419f5040a61.png"},2920:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/panel-loki-123334670d81bf6afb01e02a5419247d.png"},1634:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/panel-prometheus-70571452ae7ae5e47e69df21ea61c7e1.png"},5592:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-targets-79992dda552754f6e02cc14467af8789.png"}}]);