---
sidebar_position: 3
---

# 添加新云提供商

本节阐述了如何为Kubeskoop诊断添加新的云提供商。

## 实现`InfraShim`

`InfraShim`用于对底层基础设施网络进行配置检查。

```go
type InfraShim interface {
    NodeToNode(src *v1.Node, oif string, dst *v1.Node, packet *model.Packet) ([]model.Suspicion, error)
    NodeToExternal(src *v1.Node, oif string, packet *model.Packet) ([]model.Suspicion, error)
}
```

- `NodeToNode()`: 在两个节点之间进行数据传输。接受Kubernetes `*v1.Node` 用于源和目的、出网络接口名称以及`*model.Pakcet`作为参数，返回`[]model.Suspicion`作为结果。

- `NodeToExternal()` : 在节点和外部网络（如互联网）之间进行数据传输。接受Kubernetes `*v1.Node`用于源、出网络接口名称以及`*model.Packet`作为参数，返回`[]model.Suspicions`作为结果。

`InfraShim`需要检查数据包是否能够在底层网络中到达其目的地址。如一个内网但是在集群外的地址应当检查路由或安全组配置；一个公网地址应当检查NAT是否配置正确。

`InfraShim`实现应当放在`pkg/skoop/network/<提供商名称>`下。

## 实现`Network`

`Network`也位于`pkg/skoop/network/<提供商名称>`下。它的实现也是云提供商以及插件特定的，所以你需要为你支持的插件实现自己的`Network`。

```go
type Network interface {
    Diagnose(ctx *ctx.Context, src model.Endpoint, dst model.Endpoint) ([]model.Suspicion, *model.PacketPath, error)
}
```

- `Diagnose()`: 接受 `*ctx.Context`，`*model.Endpoint`类型的源和目的地址作为参数，返回`[]model.Suspicion`和`*model.PacketPath`作为结果。

`Network`应当对诊断过程中所需需要的所有资源进行配置，包括`Plugin`、`Diagnostor`、`InfraShim`等。

## 添加新的`Provider`

`Provider`位于`pkg/skoop/provider`。

```go
type Provider interface {
    CreateNetwork(ctx *ctx.Context) (network.Network, error)
}
```

- `CreateNetwork()`: 接受 `*ctx.Context`作为参数，返回`network.Network`。

`Provider`的实现过程很简单：检查网络插件类型，并为其创建对应的`Network`。

```go
type genericProvider struct {
}

func (g genericProvider) CreateNetwork(ctx *context.Context) (network.Network, error) {
    switch ctx.ClusterConfig().NetworkPlugin {
    case context.NetworkPluginFlannel:
        return generic.NewFlannelNetwork(ctx)
    case context.NetworkPluginCalico:
        return generic.NewCalicoNetwork(ctx)
    default:
        return nil, fmt.Errorf("not support cni type %q", ctx.ClusterConfig().NetworkPlugin)
    }
}
```

你需要在`pkg/skoop/provider/<提供商名称>.go`中实现你的`Provider`。

之后，需要为新的提供商类型添加一个常量，位于`pkg/skoop/provider/provider.go`。

```go
const (
    providerNameGeneric = "generic"
    providerNameAliyun  = "aliyun"
    // 在此处添加新的提供商名称
)
```

这个常量的值也会在命令行参数中被使用。

最后，把你的实现添加到`providers`中。

```go
var providers = map[string]Provider{
    providerNameGeneric: genericProvider{},
    providerNameAliyun:  aliyunProvider{},
    // 添加新的提供商
}
```

## 云提供商所使用的其它组件

云提供商相关的组件放在`pkg/skoop/infra/<提供商名称>`下，比如配置或是云客户端。

如果你想为你的插件添加命令行参数，你应当实现`ConfigBinder`接口并将其注册到程序中。如`pkg/skoop/infra/aliyun/config.go`中的实现：

```go
type ProviderConfig struct {
    AccessKeyID     string
    AccessKeySecret string
    SecurityToken   string
}

var Config = &ProviderConfig{}

func init() {
    context.RegisterConfigBinder("Aliyun provider", Config)
}

func (pc *ProviderConfig) BindFlags(fs *pflag.FlagSet) {
    fs.StringVarP(&pc.AccessKeyID, "aliyun-access-key-id", "", "", "Aliyun access key.")
    fs.StringVarP(&pc.AccessKeySecret, "aliyun-access-key-secret", "", "", "Aliyun access secret.")
    fs.StringVarP(&pc.SecurityToken, "aliyun-security-token", "", "", "Aliyun security token (optional).")
}

func (pc *ProviderConfig) Validate() error {
    return nil
}
```
