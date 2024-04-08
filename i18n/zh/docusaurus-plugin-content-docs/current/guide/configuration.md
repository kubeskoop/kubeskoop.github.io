---
sidebar_position: 0
---

# 配置

KubeSkoop以`yaml`格式存储配置，并在Agent启动时被加载。

在提供的安装方式中，配置文件被存储在ConfigMap`kubeskoop-config`中，并通过卷挂载到容器中。

以下是示例配置：

```yaml
debugmode: true
port: 9102
enableController: true
metrics:
  probes:
  - name: info
  - name: netdev
  - name: io
  - name: socketlatency
  - name: packetloss
  - name: sock
  - name: tcpsummary
  - name: tcp
  - name: tcpext
  - name: udp
  - name: flow
event:
  probes:
  - name: packetloss
  - name: tcpreset
  sinks:
  - name: stderr
  - name: loki
    args:
      addr: loki-service
```

- `debugmode`控制是否开启调试模式。在调试模式下，会获得更加详细的日志输出。
- `port`为KubeSkoop对外暴露的端口，用于提供指标信息采集。
- `enableController`控制是否启用并连接到控制器。
- `metrics`部分是关于指标的配置，定义了应当开启的指标探针和参数。
- `event`部分是关于事件的配置，定义了应当开启的指标探针和参数，以及事件的接收器。

## 配置热加载

KubeSkoop agent支持配置热加载，即在配置发生变更时，KubeSkoop会自动重新加载配置。
