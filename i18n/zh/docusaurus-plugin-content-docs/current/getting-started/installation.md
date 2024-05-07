---
sidebar_position: 2
---

# 安装

## 通过Helm安装

你可以通过Helm来安装生产可用的KubeSkoop实例。

执行以下命令，将KubeSkoop仓库添加到Helm中并安装KubeSkoop：

```shell
# 添加kubeskoop repo
helm repo add kubeskoop https://kubeskoop.io/
# 更新helm repo
helm repo update
# 安装kubeskoop
helm install -n kubeskoop kubeskoop kubeskoop/kubeskoop
```

该命令将会将`KubeSkoop`安装至`kubeskoop`命名空间，并默认开启`KubeSkoop`的agent、controller和webconsole组件。

## 自定义配置

你可以执行以下命令查看helm chart中可以配置的值。

```shell
helm show values kubeskoop/kubeskoop
```

你可以将值保存至`values.yaml`文件中，对你需要的参数进行修改，然后进行KubeSkoop的安装。

```shell
# 若你已经安装了KubeSkoop，你可以通过`helm upgrade`命令对其进行更新。
helm install -f values.yaml -n kubeskoop kubeskoop kubeskoop/kubeskoop
```

你也可以使用`--set`来进行简单的配置。

```shell
helm install --set controller.config.prometheusEndpoint=http://prometheus -n kubeskoop kubeskoop kubeskoop/kubeskoop
```

## 配置探针

在配置中的`config`一节，可以对所需开启的指标/事件探针进行配置。默认配置如下：

```yaml
config:
  metricProbes:
    - name: conntrack
    - name: qdisc
    - name: netdev
    - name: io
    - name: sock
    - name: tcpsummary
    - name: tcp
    - name: tcpext
    - name: udp
    - name: kernellatency
    - name: packetloss
    - name: flow
      args:
        enablePortInLabel: false
    - name: tcpretrans
  eventProbes:
    - name: biolatency
    - name: kernellatency
    - name: packetloss
      args:
        enableStack: false
    - name: tcpreset
    - name: tcpretrans
  eventSinks:
    - name: stderr
```

关于探针的更多信息，请见[文档](../reference/monitoring/probes-metrics-events.md)。

## 配置Prometheus和Loki端点地址

[Web控制台](../guide/web-console.md)的部分功能（如网络链路图、异常事件）依赖Prometheus和Loki。你需要在Helm安装时提供Prometheus和Loki服务的端点地址。

:::tip
若没有已经就绪的Prometheus或Loki实例，可以参考以下文档：

- 参考 **[Prometheus的安装](https://prometheus.io/docs/prometheus/latest/installation/)** 完成Prometheus的部署安装。
- 参考 **[使用Helm安装Loki](https://grafana.com/docs/loki/latest/setup/install/helm/)** 完成Loki的部署安装。

:::

在`controller.config`一节中配置`prometheusEndpoint`和`lokiEndpoint`。

假设Prometheus和Loki安装在`monitoring`命名空间，并且service名称分别为`prometheus`和`loki`，示例配置如下：

```yaml
controller:
  enabled: true
  config:
    # 配置prometheus的端点地址。
    prometheusEndpoint: 'http://prometheus.monitoring:9090'
    # 配置loki的端点地址。
    lokiEndpoint: 'http://loki.monitoring:3100'
```

同时，需要在`config.eventSink`中配置事件收集器，使事件能够通过Loki收集。

```yaml
config:
  # ...其它探针配置
  eventSinks:
    - name: stderr
    # 配置loki事件收集器，并指定地址为loki的service地址。
    - name: loki
      args:
        addr: 'http://loki.monitoring:3100'
```

最后，通过`helm install`或者`helm upgrade`对KubeSkoop进行安装/更新。
