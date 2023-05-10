---
sidebar_position: 2
---

# Add a new plugin

This section explains how to add a new plugin to KubeSkoop diagnose.

## Implement `Plugin`

All plugins are located in `pkg/skoop/plugin`.

A plugin should implement interface `Plugin`.

```go
type Plugin interface {
    CreatePod(pod *k8s.Pod) (model.NetNodeAction, error)
    CreateNode(node *k8s.NodeInfo) (model.NetNodeAction, error)
}
```

- `CreatePod()`: accepts `*k8s.Pod` and creates pod implementation as `NetNodeAction`.

- `CreateNode()`: accepts `*k8s.NodeInfo` and creates node implementation as `NetNodeAction`

You should provide implementations for pod and node based on your plugin.

The definition of `NetNodeAction` is as follows:

```go
type NetNodeAction interface {
    Send(dst Endpoint, protocol Protocol) ([]Transmission, error)
    Receive(upstream *Link) ([]Transmission, error)
}
```

- `Send()` represents the operation of sending a packet from the node. It accepts destination endpoint and protocol, and returns `[]Transmission` as the result.
- `Receive()` represents the operation of receiving a packet on the node. It accepts upstream as `*Link`, and returns `[]Transmission` as the result.

It's quite common to use veth pair as the network interface of pod. In this case, you can use `simpleVethPod` as implementation of pod by `newSimpleVethPod()`. For example:

```go
func (f *flannelPlugin) CreatePod(pod *k8s.Pod) (model.NetNodeAction, error) {
    return newSimpleVEthPod(pod, f.ipCache, f.podMTU, "eth0")
}
```

For node implementations, you may have to determine the type of an Endpoint (Pod, Node, Service, or External).  For general, you can use `BasePluginNode` as `NetNodeAction`, and implement `SimplePluginNode` for it.

```go
type SimplePluginNode interface {
    ToPod(upstream *model.Link, dst model.Endpoint, protocol model.Protocol, pod *v1.Pod) ([]model.Transmission, error)
    ToHost(upstream *model.Link, dst model.Endpoint, protocol model.Protocol, node *v1.Node) ([]model.Transmission, error)
    ToService(upstream *model.Link, dst model.Endpoint, protocol model.Protocol, service *v1.Service) ([]model.Transmission, error)
    ToExternal(upstream *model.Link, dst model.Endpoint, protocol model.Protocol) ([]model.Transmission, error)
    Serve(upstream *model.Link, dst model.Endpoint, protocol model.Protocol) ([]model.Transmission, error)
}
```

`SimplePluginNode` has already classified actions according to endpoint types. Take Flannel plugin as an example:

```go
func (f *flannelPlugin) CreateNode(node *k8s.NodeInfo) (model.NetNodeAction, error) {
    flannelHost, err := newFlannelHost(f.ipCache, node, f.infraShim, f.serviceProcessor, f.hostOptions)
    if err != nil {
        return nil, err
    }
    return &BasePluginNode{
        NetNode:          flannelHost.netNode,
        IPCache:          f.ipCache,
        SimplePluginNode: flannelHost,
    }, nil
}
```

During implementation, you may need to use utilities such as `IPCache` and `NetstackAssertion` to help you get the information of a resource, or check its network configuration. For more details, you can refer to the implementation of the Flannel plugin in `pkg/skoop/plugin/flannel.go`.

If you want to add any flags for your plugin, you should implement `ConfigBinder`, and register it.

```go
type CalicoConfig struct {
    PodMTU     int
    IPIPPodMTU int
    Interface  string
}

func (c *CalicoConfig) BindFlags(fs *pflag.FlagSet) {
    fs.StringVarP(&c.Interface, "calico-host-interface", "", "eth0",
        "Host interface for calico plugin.")
    fs.IntVarP(&c.PodMTU, "calico-pod-mtu", "", 1500,
        "Pod MTU for calico plugin. Pod interface MTU in BGP mode.")
    fs.IntVarP(&c.IPIPPodMTU, "calico-ipip-pod-mtu", "", 1480,
        "Pod MTU for calico plugin. Pod interface MTU in IPIP mode.")
}

func (c *CalicoConfig) Validate() error {
    return nil
}

var Calico = &CalicoConfig{}

func init() {
    ctx.RegisterConfigBinder("Calico plugin", Calico)
}
```

## Implement `Network`

`Network` are located in `pkg/skoop/network`.

```go
type Network interface {
    Diagnose(ctx *ctx.Context, src model.Endpoint, dst model.Endpoint) ([]model.Suspicion, *model.PacketPath, error)
}
```

- `Diagnose()`: accepts `*ctx.Context`, source and destination as `*model.Endpoint`. Returns `[]model.Suspicion` and `*model.PacketPath`.

`Network` are cloud provider specified, and these implementations are located in `pkg/skoop/network/<provider name>/`.

If your plugins are supported on this provider, you should add `Network`implementation for it. Network type `generic` stands for any cloud provider, so you should at least include your plugin's `Network` implementation in it.

`Plugin`, `NetNodeManager`, `NetworkPolicy`, `service.Processor` and `Diagnostor` are configured during the creation of `Network`.  For example:

```go
func NewFlannelNetwork(ctx *ctx.Context) (network.Network, error) {
    serviceProcessor := service.NewKubeProxyServiceProcessor(ctx)

    plgn, err := plugin.NewFlannelPlugin(ctx, serviceProcessor, nil)
    if err != nil {
        return nil, err
    }

    collectorManager, err := manager.NewSimplePodCollectorManager(ctx)
    if err != nil {
        return nil, err
    }

    netNodeManager, err := nodemanager.NewNetNodeManager(ctx, plgn, collectorManager)
    if err != nil {
        return nil, err
    }

    networkPolicy, err := plugin.NewNetworkPolicy(false, false, ctx.ClusterConfig().IPCache, ctx.KubernetesClient(), serviceProcessor)
    if err != nil {
        return nil, err
    }

    diagnostor, err := skoop.NewDefaultDiagnostor(ctx, netNodeManager, networkPolicy)
    if err != nil {
        return nil, err
    }

    return &flannelNetwork{
        plugin:           plgn,
        diagnostor:       diagnostor,
        collectorManager: collectorManager,
        netNodeManager:   netNodeManager,
    }, nil
}
```

## Add new plugin type and create it in `Provider`

Plugin types are defined in `pkg/skoop/context/cluster.go`. You should add a new type here.

```go
const (
    NetworkPluginFlannel  = "flannel"
    NetworkPluginCalico   = "calico"
    NetworkPluginTerway   = "terway"
    // add your new plugin type here
)
```

After this, you also need to create your plugin in supported cloud providers at `pkg/skoop/provider/<provider name>.go`. For example:

```go
func (g genericProvider) CreateNetwork(ctx *context.Context) (network.Network, error) {
    switch ctx.ClusterConfig().NetworkPlugin {
    case context.NetworkPluginFlannel:
        return generic.NewFlannelNetwork(ctx)
    case context.NetworkPluginCalico:
        return generic.NewCalicoNetwork(ctx)
    // add your plugin type
    default:
        return nil, fmt.Errorf("not support cni type %q", ctx.ClusterConfig().NetworkPlugin)
    }
}
```

Now, you can make your plugin work by adding `--network plugin <your plugin name>` to the CLI command.

## Add plugin auto detection

You can add plugin auto detection in`DetectNetworkPlugin()` in `pkg/utils/k8s.go` by listing the DaemonSet in the cluster.

```go
func DetectNetworkPlugin(k8sCli *kubernetes.Clientset) (networkMode string, err error) {
    dss, err := k8sCli.AppsV1().DaemonSets("").List(context.Background(), metav1.ListOptions{})
    if err != nil {
        return "", err
    }
    for _, ds := range dss.Items {
        switch ds.Name {
        case "kube-flannel-ds":
            return "flannel", nil
        case "calico-node":
            return "calico", nil
        case "terway-eniip":
            return "terway-eniip", nil
        }
    }
    return "", nil
}
```

## Add e2e tests

Finally, you should add plugin specific tests in `test/skoop/e2e/testcase/plugins.go`, and add your plugin to `test/skoop/e2e/testcase/testcases.go`.
