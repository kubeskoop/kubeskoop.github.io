---
sidebar_position: 1

---

# Architecture

This section explains key components, data structures and relationships between them.

![architecture](/img/kubeskoop-diagnosis-architecture.png)

## Key components

### Provider

Abstraction of cloud provider, responsible for detecting network type and creating `Network`.

### Network

Cloud-specific container network. A `Network` should configure all resources that the diagnosis progress needs, including `Plugin`, `Diagnostor`, `InfraShim`, etc.

### Diagnostor

Implementation of the diagnosis algorithm. It generates the initial links and nodes on source `NetNode`  by executing `Send` action, and continuously generates new links and nodes by executing `Receive` action on later added `NetNode`, until the entire graph has been constructed.

### Plugin

Network plugin(flannel, calico, etc.). It creates the actual `NetNode` from the network config and return `NetNodeAction`.

### NetNodeManager

Create and cache `NetNodeAction`. It collects Kubernetes pod/node netstack info from `CollectorManager`, and create `NetNodeAction` from `Plugin`.

### CollectorManager

Manage collect tasks, which collect netstack info of Kubernetes pod/nodes.

### IPCache

Cache major Kubernetes objects used by diagnosis, to prevent redundant access to the API Server.

### NetNodeAction

An interface represents the network action of a `NetNode`. It should be implemented by any `NetNode` type.

### InfraShim

Assertions of infra resources. Should be implemented by cloud providers.

### service.Processor

The component stands for a service processor (like `kube-proxy`). It gets the backends of a service, and check its configuration in from netstack info.  

### (Package)assertions

Assertion utilities for diagnosis.   Including `NetstackAssertion` and `KubernetesAssertion`.

### (Package)netstack

Components and utilities of the Linux netstack. Including `Router`, `Netfilter`, `IPTables`, etc.

## Key structures

### Context

```go
type Context struct {
    Ctx *sync.Map
}
```

`Context` is used to store runtime configurations. It is responsible for binding flags for modules and providing interfaces for registration.

### Endpoint

```go
type Endpoint struct {  
   IP   string  
   Type EndpointType  
   Port uint16  
}
```

Endpoint for the network layer, including `IP`, `Port` and `Type`.

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

A data packet.

- `Encap`: If the packet is an encapsuled packet (such as an `IPIP` packet), the real packet is in this field.

- `Mark`: Used in router and iptables simulation.

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

Node in the network graph. It can be `Pod` or `Node` in Kubernetes, or can also be a network resources on the cloud. `NetNode` implements `NetNodeAction` for handle network traffic, and `Assertion` for storing assertions.

### Transmission

```go
type Transmission struct {  
   NextHop Hop  
   Link    *Link  
}
```

A transmit operation created by `Send()` or `Receive()` action of a `NetNode`. It contains `NextHop` pointing to the next `NetNode`, and `Link` to describe the transmission info.

### Hop

```go
type Hop struct {  
   Type NetNodeType  
   ID   string  
}
```

Information for a hop, used to find a `NetNode`.

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

The link between two nodes.

- `Type`: Contains `external`, `vpc`, `veth`, `ipvlan`, `local`, and more.

- `SourceAttribute`&`DestinationAttribute`: The key-value attributes of this link on source and destination nodes.

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

Information for a Pod of Kubernetes. Includes Pod's metadata and netstack info.

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

Information for a Node of Kubernetes. Includes Node's metadata and netstack info of node and pods on it.

## Suspicion

```go
type Suspicion struct {  
   Level   SuspicionLevel  
   Message string  
}
```

The problem occurred on a `NetNode`.

- `Level`: Severity of the problem. Contains `Info`, `Warning`, `Critical` and `Fatal`.

- `Message`: Problem description.
