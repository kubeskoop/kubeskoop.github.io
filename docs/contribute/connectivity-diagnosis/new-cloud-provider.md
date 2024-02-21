---
sidebar_position: 3
---

# Add a new cloud provider

This section explains how to add a new cloud provider to KubeSkoop diagnose.

## Implement `InfraShim`

`InfraShim` is used for checking configuration of the underlying infra network.

```go
type InfraShim interface {
    NodeToNode(src *v1.Node, oif string, dst *v1.Node, packet *model.Packet) ([]model.Suspicion, error)
    NodeToExternal(src *v1.Node, oif string, packet *model.Packet) ([]model.Suspicion, error)
}
```

- `NodeToNode()`: Transmission between two nodes. Accepts kubernetes `*v1.Node` for source and destination, output interface name, and `*model.Packet`. Returns `[]model.Suspicions` as result.

- `NodeToExternal()` : Transmission from node to external network (eg. internet). Accepts kubernetes `*v1.Node` for source, output interface name and `*model.Packet`. Returns `[]model.Suspicions` as result.

`InfraShim` is responsible to check whether the packet can reach its destination in the underlying network, for example, an address in intranet but outside of the cluster should check routes and security groups rules, or an address in internet should check NAT entries.

`InfraShim` should be implemented in `pkg/skoop/network/<provider name>`.

## Implement `Network`

`Network` are also located in `pkg/skoop/network/<provider name>`.They are both cloud provider specified and plugin specified, so you should implement your own `Network` for supported plugins.

```go
type Network interface {
    Diagnose(ctx *ctx.Context, src model.Endpoint, dst model.Endpoint) ([]model.Suspicion, *model.PacketPath, error)
}
```

- `Diagnose()`: accepts `*ctx.Context`, source and destination as `*model.Endpoint`. Returns `[]model.Suspicion` and `*model.PacketPath`.

A `Network` should configure all resources that a diagnosis progress needs, including `Plugin`, `Diagnostor`, `InfraShim`, etc.

## Add new `Provider`

`Provider` are located  in `pkg/skoop/provider`.

```go
type Provider interface {
    CreateNetwork(ctx *ctx.Context) (network.Network, error)
}
```

- `CreateNetwork()`: accepts `*ctx.Context` and returns `network.Network`.

The implementation of `Provider` is simple: check the plugin type, and create corresponding `Network`.

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

You should implement your `Provider` in `pkg/skoop/provider/<provider name>.go`.

Then, a new provider type constant need to be added in `pkg/skoop/provider/provider.go`.

```go
const (
    providerNameGeneric = "generic"
    providerNameAliyun  = "aliyun"
    // add new provider name here
)
```

This constant value will be used in the command line arguments

At last, add your implementation to `providers`.

```go
var providers = map[string]Provider{
    providerNameGeneric: genericProvider{},
    providerNameAliyun:  aliyunProvider{},
    // add new provider
}
```

## Components used by cloud providers

Cloud provider related components are located in `pkg/skoop/infra/<provider name>`. Such as config, or cloud client.

If you want to add any flags for your plugin, you should implement `ConfigBinder`, and register it. For example in `pkg/skoop/infra/aliyun/config.go`.

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
