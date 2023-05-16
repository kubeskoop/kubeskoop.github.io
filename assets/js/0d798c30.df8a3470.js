"use strict";(self.webpackChunkkubeskoop_io=self.webpackChunkkubeskoop_io||[]).push([[6088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=i,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Architecture",l={unversionedId:"contribute/diagnose/architecture",id:"contribute/diagnose/architecture",title:"Architecture",description:"This section explains key components, data structures and relationships between them.",source:"@site/docs/contribute/diagnose/architecture.md",sourceDirName:"contribute/diagnose",slug:"/contribute/diagnose/architecture",permalink:"/docs/contribute/diagnose/architecture",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connectivity diagnosis",permalink:"/docs/category/connectivity-diagnosis-1"},next:{title:"Add a new plugin",permalink:"/docs/contribute/diagnose/new-plugin"}},p={},s=[{value:"Key components",id:"key-components",level:2},{value:"Provider",id:"provider",level:3},{value:"Network",id:"network",level:3},{value:"Diagnostor",id:"diagnostor",level:3},{value:"Plugin",id:"plugin",level:3},{value:"NetNodeManager",id:"netnodemanager",level:3},{value:"CollectorManager",id:"collectormanager",level:3},{value:"IPCache",id:"ipcache",level:3},{value:"NetNodeAction",id:"netnodeaction",level:3},{value:"InfraShim",id:"infrashim",level:3},{value:"service.Processor",id:"serviceprocessor",level:3},{value:"(Package)assertions",id:"packageassertions",level:3},{value:"(Package)netstack",id:"packagenetstack",level:3},{value:"Key structures",id:"key-structures",level:2},{value:"Context",id:"context",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"Packet",id:"packet",level:3},{value:"NetNode",id:"netnode",level:3},{value:"Transmission",id:"transmission",level:3},{value:"Hop",id:"hop",level:3},{value:"Link",id:"link",level:3},{value:"k8s.Pod",id:"k8spod",level:3},{value:"k8s.NodeInfo",id:"k8snodeinfo",level:3},{value:"Suspicion",id:"suspicion",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"This section explains key components, data structures and relationships between them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"architecture",src:n(9714).Z,width:"2065",height:"1247"})),(0,i.kt)("h2",{id:"key-components"},"Key components"),(0,i.kt)("h3",{id:"provider"},"Provider"),(0,i.kt)("p",null,"Abstraction of cloud provider, responsible for detecting network type and creating ",(0,i.kt)("inlineCode",{parentName:"p"},"Network"),"."),(0,i.kt)("h3",{id:"network"},"Network"),(0,i.kt)("p",null,"Cloud-specific container network. A ",(0,i.kt)("inlineCode",{parentName:"p"},"Network")," should configure all resources that the diagnosis progress needs, including ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Diagnostor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"InfraShim"),", etc."),(0,i.kt)("h3",{id:"diagnostor"},"Diagnostor"),(0,i.kt)("p",null,"Implementation of the diagnosis algorithm. It generates the initial links and nodes on source ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),"  by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"Send")," action, and continuously generates new links and nodes by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"Receive")," action on later added ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),", until the entire graph has been constructed."),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"Network plugin(flannel, calico, etc.). It creates the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode")," from the network config and return ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNodeAction"),"."),(0,i.kt)("h3",{id:"netnodemanager"},"NetNodeManager"),(0,i.kt)("p",null,"Create and cache ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNodeAction"),". It collects Kubernetes pod/node netstack info from ",(0,i.kt)("inlineCode",{parentName:"p"},"CollectorManager"),", and create ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNodeAction")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin"),"."),(0,i.kt)("h3",{id:"collectormanager"},"CollectorManager"),(0,i.kt)("p",null,"Manage collect tasks, which collect netstack info of Kubernetes pod/nodes."),(0,i.kt)("h3",{id:"ipcache"},"IPCache"),(0,i.kt)("p",null,"Cache major Kubernetes objects used by diagnosis, to prevent redundant access to the API Server."),(0,i.kt)("h3",{id:"netnodeaction"},"NetNodeAction"),(0,i.kt)("p",null,"An interface represents the network action of a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),". It should be implemented by any ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode")," type."),(0,i.kt)("h3",{id:"infrashim"},"InfraShim"),(0,i.kt)("p",null,"Assertions of infra resources. Should be implemented by cloud providers."),(0,i.kt)("h3",{id:"serviceprocessor"},"service.Processor"),(0,i.kt)("p",null,"The component stands for a service processor (like ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-proxy"),"). It gets the backends of a service, and check its configuration in from netstack info.  "),(0,i.kt)("h3",{id:"packageassertions"},"(Package)assertions"),(0,i.kt)("p",null,"Assertion utilities for diagnosis.   Including ",(0,i.kt)("inlineCode",{parentName:"p"},"NetstackAssertion")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"KubernetesAssertion"),"."),(0,i.kt)("h3",{id:"packagenetstack"},"(Package)netstack"),(0,i.kt)("p",null,"Components and utilities of the Linux netstack. Including ",(0,i.kt)("inlineCode",{parentName:"p"},"Router"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Netfilter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IPTables"),", etc."),(0,i.kt)("h2",{id:"key-structures"},"Key structures"),(0,i.kt)("h3",{id:"context"},"Context"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Context struct {\n    Ctx *sync.Map\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Context")," is used to store runtime configurations. It is responsible for binding flags for modules and providing interfaces for registration."),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Endpoint struct {  \n   IP   string  \n   Type EndpointType  \n   Port uint16  \n}\n")),(0,i.kt)("p",null,"Endpoint for the network layer, including ",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Type"),"."),(0,i.kt)("h3",{id:"packet"},"Packet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Packet struct {\n    Src      net.IP\n    Sport    uint16\n    Dst      net.IP\n    Dport    uint16\n    Protocol Protocol\n    Encap    *Packet\n    Mark     uint32\n}\n")),(0,i.kt)("p",null,"A data packet."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Encap"),": If the packet is an encapsuled packet (such as an ",(0,i.kt)("inlineCode",{parentName:"p"},"IPIP")," packet), the real packet is in this field.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Mark"),": Used in router and iptables simulation."))),(0,i.kt)("h3",{id:"netnode"},"NetNode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type NetNode struct {  \n   Type       NetNodeType  \n   ID         string  \n   Actions    map[*Link]*Action  \n   Suspicions []Suspicion  \n   initiative *Action  \n}\n")),(0,i.kt)("p",null,"Node in the network graph. It can be ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," in Kubernetes, or can also be a network resources on the cloud. ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode")," implements ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNodeAction")," for handle network traffic, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Assertion")," for storing assertions."),(0,i.kt)("h3",{id:"transmission"},"Transmission"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Transmission struct {  \n   NextHop Hop  \n   Link    *Link  \n}\n")),(0,i.kt)("p",null,"A transmit operation created by ",(0,i.kt)("inlineCode",{parentName:"p"},"Send()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Receive()")," action of a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),". It contains ",(0,i.kt)("inlineCode",{parentName:"p"},"NextHop")," pointing to the next ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," to describe the transmission info."),(0,i.kt)("h3",{id:"hop"},"Hop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Hop struct {  \n   Type NetNodeType  \n   ID   string  \n}\n")),(0,i.kt)("p",null,"Information for a hop, used to find a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),"."),(0,i.kt)("h3",{id:"link"},"Link"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Link struct {  \n   Type                 LinkType  \n   Source               NetNodeAction  \n   Destination          NetNodeAction  \n   Packet               *Packet  \n   SourceAttribute      LinkAttribute  \n   DestinationAttribute LinkAttribute  \n\n   Level int // for print  \n}\n\ntype LinkAttribute interface {  \n   GetAttrs() map[string]string  \n}\n")),(0,i.kt)("p",null,"The link between two nodes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Type"),": Contains ",(0,i.kt)("inlineCode",{parentName:"p"},"external"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vpc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"veth"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ipvlan"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),", and more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SourceAttribute"),"&",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationAttribute"),": The key-value attributes of this link on source and destination nodes."))),(0,i.kt)("h3",{id:"k8spod"},"k8s.Pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type PodMeta struct {\n    Namespace   string\n    PodName     string\n    NodeName    string\n    HostNetwork bool\n}\n\ntype Pod struct {\n    model.NetNode\n    netstack.NetNS\n    PodMeta\n}\n")),(0,i.kt)("p",null,"Information for a Pod of Kubernetes. Includes Pod's metadata and netstack info."),(0,i.kt)("h3",{id:"k8snodeinfo"},"k8s.NodeInfo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type NodeInfo struct {\n    netstack.NetNS\n    SubNetNSInfo []netstack.NetNSInfo\n    NodeMeta\n}\n\ntype NodeNetworkStackDump struct {\n    Pods  []PodNetInfo         `json:"pods"`\n    Netns []netstack.NetNSInfo `json:"netns"`\n}\n\ntype NodeMeta struct {\n    NodeName string\n}\n')),(0,i.kt)("p",null,"Information for a Node of Kubernetes. Includes Node's metadata and netstack info of node and pods on it."),(0,i.kt)("h2",{id:"suspicion"},"Suspicion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Suspicion struct {  \n   Level   SuspicionLevel  \n   Message string  \n}\n")),(0,i.kt)("p",null,"The problem occurred on a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetNode"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Level"),": Severity of the problem. Contains ",(0,i.kt)("inlineCode",{parentName:"p"},"Info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Warning"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Critical")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Fatal"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Message"),": Problem description."))))}u.isMDXComponent=!0},9714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubeskoop-diagnosis-architecture-292d0ac237991a38316e763904911553.png"}}]);