---
sidebar_position: 0
---

# 简介

## 概述

KubeSkoop网络监控提供了以下能力：

- 针对Pod级别的网络监控，包括流量，应用层连接信息，socket内存分配状态等
- 针对Pod级别的网络异常状态的指标监控，例如Pod内进程对socket进行读写操作的等待时间超过100ms的次数，Pod发出TCP rst报文的次数等
- 针对Pod级别的网络异常事件的现场，提供事件发生的详细信息的观测，例如内核网络软中断调度等待过久，UDP出现socket内存不足导致的溢出等

与常见的Kubernetes监控和可观测性工具的主要区别如下：

| 功能选项          | Prometheus Node exporter     | cAdvisor/Metric API   | KubeSkoop |
|------------------|------------------------------|-----------------------|-------------------|
|  按照Pod区分      | No                            | Yes                   | Yes               |
|  网络状态监控      | Yes                          | No                    |Yes                |
|  异常事件的现场捕获 | No                           | No                    | Yes               |
|  内核网络高阶信息   | No                           | Yes                   | Yes               |

## 核心原理

### 架构

![kubeskoop-monitoring-structure](/img/kubeskoop-arch.jpg)

### 信息采集

KubeSkoop提供了适配于Kubernetes网络监控功能，在节点上，KubeSkoop采集并归类了网络相关的大量数据，实现这些功能的核心原理包括:

- 通过CRI接口和`Linux /proc/`获取节点内的网络隔离状态及其与Pod的关联信息
- 通过`Linux /proc/`，`Linux netlink`和eBPF获取网络监控信息
- 通过eBPF获取操作系统内核在网络异常事件发生时的上下文状态

### 聚合分析

KubeSkoop采集的数据可以通过多种方式获取，包括:

- 通过Prometheus获取监控信息，并使用Grafana进行可视化操作
- 通过配置Grafana Loki接收KubeSkoop的事件推送，并使用Grafana进行可视化操作
- 使用kubeskoop inspector命令行工具观察监控信息

关于如何将监控数据进行可视化，请参考**[可视化配置](visualization.md)**

## 指标

KubeSkoop提供Pod级别的指标信息，反应实例运行过程中的环境变化，通过Prometheus metrics暴露。

## 异常事件

KubeSkoop提供节点上发生的网络相关的异常事件，根据在长期处理网络问题中的经验，我们归纳了几种常见的网络疑难问题，他们往往在集群中以无法复现，偶然发生的方式干扰正常的业务，缺乏有效的定位手段，其中部分如下：

1. 网络数据报文被丢弃引发的连接失败，响应超时等问题。
2. 网络数据处理耗时久引发的偶发性能问题。
3. TCP，conntrack等状态机制异常引发的业务异常问题。

针对无法快速复现和难以获取现场的网络问题，KubeSkoop提供了基于eBPF的操作系统内核上下文观测能力，在问题发生的现场捕获操作系统的实时状态，以事件日志的方式输出。

在事件日志的信息中，可以查看到事件现场的相关信息，以**tcp_reset**探针为例，当出现有Pod收到了一个访问为止端口的正常报文时，KubeSkoop会捕获以下事件信息:

```text
type=TCPRESET_NOSOCK pod=storage-monitor-5775dfdc77-fj767 namespace=kube-system protocol=TCP saddr=100.103.42.233 sport=443 daddr=10.1.17.188 dport=33488
```

事件中的信息如下：

1. type表明出现了一次TCPRESET_NOSOCK类型的事件，这是**tcpreset**探针捕获的一种事件，他表明有访问为止端口的报文被本地发送RST报文拒绝，拒绝的原因是没有根据报文找到相应的socket，通常在NAT失效，如ipvs定时器超时等原因发生后，会伴随这个事件。
2. pod/namespace是KubeSkoop根据发送报文的网络命名空间，ip地址和网络设备序号进行匹配后关联给事件的Pod元信息。
3. saddr/sport/daddr/dport是KubeSkoop在内核获取到的异常报文的信息，随着事件的不同，这部分信息也会有差异，例如**net_softirq**探针的事件信息中没有ip地址，取而代之的是中断发生的CPU序号，产生的延迟时长等。

对于需要有效的操作系统内核堆栈信息的事件，可以通过配置开关来额外获取操作系统内核的协议栈信息，这会增加一定的消耗，从而获取到更加精准的现象，例如：

```text
type=PACKETLOSS pod=hostNetwork namespace=hostNetwork protocol=TCP saddr=10.1.17.172 sport=6443 daddr=10.1.17.176 dport=43018  stacktrace:skb_release_data+0xA3 __kfree_skb+0xE tcp_recvmsg+0x61D inet_recvmsg+0x58 sock_read_iter+0x92 new_sync_read+0xE8 vfs_read+0x89 ksys_read+0x5A
```

:::info
关于支持的探针、指标和事件的列表，请见[探针，指标和事件](../../reference/monitoring/probes-metrics-events.md)。
:::tip
