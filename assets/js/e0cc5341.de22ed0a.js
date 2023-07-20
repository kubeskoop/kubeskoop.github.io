"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[9635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},r="Show/Save Diagnosis Result",s={unversionedId:"guide/diagnose/diagnosis-result",id:"guide/diagnose/diagnosis-result",title:"Show/Save Diagnosis Result",description:"KubeSkoop connectivity diagnosis supports multiple output formats, and provide Web UI to view diagnosis result interactively.",source:"@site/docs/guide/diagnose/diagnosis-result.md",sourceDirName:"guide/diagnose",slug:"/guide/diagnose/diagnosis-result",permalink:"/docs/guide/diagnose/diagnosis-result",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Specifying Cloud Provider",permalink:"/docs/guide/diagnose/cloud-providers"},next:{title:"Command line arguments",permalink:"/docs/guide/diagnose/command-line-arguments"}},l={},p=[{value:"Web UI",id:"web-ui",level:2},{value:"Output format",id:"output-format",level:2},{value:"d2",id:"d2",level:3},{value:"svg",id:"svg",level:3},{value:"json",id:"json",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"showsave-diagnosis-result"},"Show/Save Diagnosis Result"),(0,o.kt)("p",null,"KubeSkoop connectivity diagnosis supports multiple output formats, and provide Web UI to view diagnosis result interactively."),(0,o.kt)("p",null,"By default, when diagnosis finished, it will print simple link info and diagnose result to standard output. You can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--http")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--format")," to view result via Web UI, or save it into a specified format."),(0,o.kt)("h2",{id:"web-ui"},"Web UI"),(0,o.kt)("p",null,"Web UI are provided to view diagnosis result interactivity, by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--http")," argument to enable it. When diagnosis finished, it will start an HTTP server on the specified address, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"--http-address")," argument. Default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"--http-address")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service\nI0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output\n")),(0,o.kt)("p",null,"Open the diagnosis result ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")," through browser\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diagnose_web",src:n(7530).Z,width:"1509",height:"888"})),(0,o.kt)("h2",{id:"output-format"},"Output format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"d2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"svg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," are supported as output format, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"--format")," to specify which one you want to use. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"--output")," to specify output filename. When set output filename to ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", it will print the result to standard output. File will be saved into ",(0,o.kt)("inlineCode",{parentName:"p"},"output.d2/svg/json")," by default."),(0,o.kt)("h3",{id:"d2"},"d2"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"d2")," as the output format. For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"d2")," syntax, please see ",(0,o.kt)("a",{parentName:"p",href:"https://d2lang.com/tour/introl"},"documentation"),"."),(0,o.kt)("p",null,"This format only contains link graph, and will not contain diagnose result."),(0,o.kt)("h3",{id:"svg"},"svg"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"svg")," as the output format. ",(0,o.kt)("inlineCode",{parentName:"p"},"svg")," are generated via d2 file."),(0,o.kt)("p",null,"This format only contains link graph, and will not contain diagnose result."),(0,o.kt)("h3",{id:"json"},"json"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," as the output format. It contains details about nodes and edges in link graph, and also contains diagnose result on them."))}c.isMDXComponent=!0},7530:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/intro_diagnose_web-5cc33839caa1aeb8aa1b88f317a73e75.jpg"}}]);