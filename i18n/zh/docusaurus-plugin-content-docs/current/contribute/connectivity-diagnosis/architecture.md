---
sidebar_position: 1

---

# 架构

本节将对关键组件、数据结构以及组件间的关系进行解释。

![architecture](/img/kubeskoop-diagnosis-architecture.jpg)

## 关键组件

### Provider

云提供商的抽象，负责探测集群的网络类型，以及创建`Network`。

### Network

云提供商特定的网络。`Network`中应当对诊断过程中需要的所有资源进行配置，包括`Plugin`、`Diagnostor`、`InfraShim`等。

### Diagnostor

诊断算法的实现。该算法会在通过在源`NetNode`上执行`Send`动作，获得初始的链路信息。随后，将会在随后生成出的`NetNode`上执行`Receive`动作，不断产生新的链路和节点，直到整张链路图被构造完成。

### Plugin

网络插件（flannel、calico等）。负责从网络配置中创建出实际的`NetNode`，作为`NetNodeAction`返回。

### NetNodeManager

创建并缓存`NetNodeAction`。通过`CollectorManager`采集Kubernetes pod/node网络栈信息后，通过`Plugin`创建出`NetNodeAction`。

### CollectorManager

管理Kubernetes pod/nodes网络栈信息的采集任务。

### IPCache

缓存被诊断过程使用的主要Kubernetes对象，防止对API Server的冗余访问。

### NetNodeAction

代表`NetNode`上的网络动作的接口。任何`NetNode`都应当实现该接口。

### InfraShim

对基础设施提供的资源的断言。该部分应当根据不同的云提供商实现。

### service.Processor

代表处理Service的组件（如`kube-proxy`）。它获得service的后端端点，并且根据网络栈信息来检查它们是否配置正确。

### (包)assertions

用于诊断中的断言。包括`NetstackAssertion`和`KubernetesAssertion`。

### (包)netstack

与Linux网络栈相关的组件和实用工具。包括`Router`、`Netfilter`、`IPTables`等。

## 关键数据结构

### Context

```go
type Context struct {
    Ctx *sync.Map
}
```

`Context` 用于存储运行时配置。除此之外，它同时负责为各个模块绑定其所需的命令行参数，以及提供模块注册用的接口。

### Endpoint

```go
type Endpoint struct {
   IP   string
   Type EndpointType
   Port uint16
}
```

网络层面的端点，包括`IP`、`Port`、和`Type`。

### Packet

```go
type Packet struct {
    Src      net.IP
    Sport    uint16
    Dst      net.IP
    Dport    uint16
    Protocol Protocol
    Encap    *Packet
    Mark     uint32
}
```

一个数据包。

- `Encap`: 如果是一个被封装过的数据包（比如`IPIP`数据包），被封装的真实数据包储存于该字段。

- `Mark`: 用于路由以及iptables模拟。

### NetNode

```go
type NetNode struct {
   Type       NetNodeType
   ID         string
   Actions    map[*Link]*Action
   Suspicions []Suspicion
   initiative *Action
}
```

网络链路图中的节点。它可以是Kubernets中的`Pod`或`Node`，也可以是云上的网络资源等。`NetNode`实现了`NetNodeAction`接口来处理网络流量，以及`Assertion`接口用来在节点上储存断言信息。

### Transmission

```go
type Transmission struct {
   NextHop Hop
   Link    *Link
}
```

`NetNode`上`Send()`或者`Receive()`动作创建出的一次传输请求。其中包括指向下一个`NetNode`的`NetHop`，以及描述了本次传输信息的`Link`。

### Hop

```go
type Hop struct {
   Type NetNodeType
   ID   string
}
```

某一跳的信息，用于定位到某个`NetNode`。

### Link

```go
type Link struct {
   Type                 LinkType
   Source               NetNodeAction
   Destination          NetNodeAction
   Packet               *Packet
   SourceAttribute      LinkAttribute
   DestinationAttribute LinkAttribute

   Level int // for print
}

type LinkAttribute interface {
   GetAttrs() map[string]string
}
```

两个节点之间的传输链路。

- `Type`: 包括 `external`, `vpc`, `veth`, `ipvlan`, `local`等。

- `SourceAttribute`&`DestinationAttribute`: 在源节点和目的节点上，用于描述该条链路信息的键值对。

### k8s.Pod

```go
type PodMeta struct {
    Namespace   string
    PodName     string
    NodeName    string
    HostNetwork bool
}

type Pod struct {
    model.NetNode
    netstack.NetNS
    PodMeta
}
```

Kubernetes上的Pod信息。包括Pod的元数据和网络栈数据。

### k8s.NodeInfo

```go
type NodeInfo struct {
    netstack.NetNS
    SubNetNSInfo []netstack.NetNSInfo
    NodeMeta
}

type NodeNetworkStackDump struct {
    Pods  []PodNetInfo         `json:"pods"`
    Netns []netstack.NetNSInfo `json:"netns"`
}

type NodeMeta struct {
    NodeName string
}
```

Kubernetes上的Node信息。包括Node的元数据，Node和Node上Pod的网络栈数据。

## Suspicion

```go
type Suspicion struct {
   Level   SuspicionLevel
   Message string
}
```

在 `NetNode`上出现的问题。

- `Level`: 问题的严重程度。包括`Info`、`Warning`、`Critical` 和 `Fatal`。

- `Message`: 问题描述。
