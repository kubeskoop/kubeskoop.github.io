---
sidebar_position: 2
---

# 添加新插件

本节阐述了如何为KubeSkoop诊断添加新的插件支持。

## 实现 `Plugin`

所有插件的实现都位于`pkg/skoop/plugin`。

插件应当实现`Plugin`接口。

```go
type Plugin interface {
    CreatePod(pod *k8s.Pod) (model.NetNodeAction, error)
    CreateNode(node *k8s.NodeInfo) (model.NetNodeAction, error)
}
```

- `CreatePod()`: 接受`*k8s.Pod`作为参数，创建对应的Pod实现，作为`NetNodeAction`类型返回。

- `CreateNode()`: 接受`*k8s.NodeInfo`作为参数，创建对应的Node实现，作为`NetNodeAction`返回。

你应当根据你的插件，为Pod和Node提供相应的实现。

`NetNodeAction`的定义如下：

```go
type NetNodeAction interface {
    Send(dst Endpoint, protocol Protocol) ([]Transmission, error)
    Receive(upstream *Link) ([]Transmission, error)
}
```

- `Send()`代表从节点上发送一个数据包。接受目的端点以及协议作为参数，并返回`[]Transsmision`作为结果。
- `Receive()`代表在节点上接受一个数据包。接受`*Link`类型的上游作为参数，并返回`[]Transsmision`作为结果。

使用veth网卡对作为Pod的网络接口是一种很常见的情况。在这种情况下，你可以通过调用`newSimpleVethPod()`，直接使用`simpleVethPod`作为Pod的实现。比如：

```go
func (f *flannelPlugin) CreatePod(pod *k8s.Pod) (model.NetNodeAction, error) {
    return newSimpleVEthPod(pod, f.ipCache, f.podMTU, "eth0")
}
```

对于Node的实现，你可能需要判断网络端点的类型（Pod、Node、Service还是External）。通常来说，你可以直接使用`BasePluginNode`作为`NetNodeAction`的实现，并且实现`SimplePluginNode`接口。

```go
type SimplePluginNode interface {
    ToPod(upstream *model.Link, dst model.Endpoint, protocol model.Protocol, pod *v1.Pod) ([]model.Transmission, error)
    ToHost(upstream *model.Link, dst model.Endpoint, protocol model.Protocol, node *v1.Node) ([]model.Transmission, error)
    ToService(upstream *model.Link, dst model.Endpoint, protocol model.Protocol, service *v1.Service) ([]model.Transmission, error)
    ToExternal(upstream *model.Link, dst model.Endpoint, protocol model.Protocol) ([]model.Transmission, error)
    Serve(upstream *model.Link, dst model.Endpoint, protocol model.Protocol) ([]model.Transmission, error)
}
```

`SimplePluginNode`已经根据端点类型对动作进行了分类。以Flannel插件的实现举例：

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

在实现过程中，你可能会用到`IPCache`或`NetsatckAssertion`等工具来帮助你获得某个资源的信息，或是检查网络配置是否正确。关于此的详细信息，你可以参考Flannel插件的的实现，位于`pkg/skoop/plugin/flannel.go`。

如果你需要为你的插件添加命令行参数，你需要实现`ConfigBinder`，并将其注册到程序中。

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

## 实现 `Network`

`Network` 位于`pkg/skoop/network`中。

```go
type Network interface {
    Diagnose(ctx *ctx.Context, src model.Endpoint, dst model.Endpoint) ([]model.Suspicion, *model.PacketPath, error)
}
```

- `Diagnose()`: 接受`*ctx.Context`、`*model.Endpoint`类型的源和目的地址，返回 `[]model.Suspicion` 和`*model.PacketPath`作为返回值。

`Network`是云提供商特定的，特定的实现位于`pkg/skoop/network/<提供商名称>/`.

如果你的插件支持该提供商，你就需要为其添加`Network`的实现。网络类型`generic`代表任意云提供商，所以你至少为这个网络类型提供你的插件的`Network`实现。

`Plugin`、`NetNodeManager`、`NetworkPolicy`、`service.Processor`和`Diagnostor`会在`Network`创建时被配置好。如：

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

## 添加新的插件类型并在`Provider`中创建

插件类型的定义在`pkg/skoop/context/cluster.go`中。你应当在这里添加一个新的类型。

```go
const (
    NetworkPluginFlannel  = "flannel"
    NetworkPluginCalico   = "calico"
    NetworkPluginTerway   = "terway"
    // 在这里添加新的插件类型
)
```

在这之后，你还需要为所支持的云提供商创建你的插件，文件位于`pkg/skoop/provider/<提供商名称>.go`。示例如下：

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

现在，你可以在命令行参数中指定`--network plugin <插件名>`来使用你的插件。

## 添加插件自动探测

你可以在`pkg/utils/k8s.go`的`DetectNetworkPlugin()`文件中，通过遍历集群中的DaemonSet的方式来添加插件类型的自动探测。

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

## 添加e2e测试

最后，你应当在`test/skoop/e2e/testcase/plugins.go`中添加插件相关的测试用例，并且将你的插件添加到`test/skoop/e2e/testcase/testcases.go`文件中。
