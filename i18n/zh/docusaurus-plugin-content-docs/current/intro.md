---
sidebar_position: 0
---

# 简介

KubeSkoop是一个**专为Kubernetes设计的网络诊断和监控套件**，能够兼容多种CNI插件以及不同云服务提供商。

KubeSkoop旨在帮助用户快速诊断和排查容器网络疑难问题，并提供历史网络事件的定位和追踪能力。

针对不同的网络插件和IaaS提供商，KubeSkoop能够自动构建Kubernetes集群中的网络链路图，结合eBPF对内核关键路径的深度监控，来分析常见的Kubernetes集群网络问题。

通过对链路配置的分析和历史网络异常的回溯，能够极大简化Kubernetes网络问题的诊断难度和消耗时间。

![overview](/img/kubeskoop_features.jpg)

您可以从此文档[快速开始](quick-start.md)并上手体验KubeSkoop的功能。或参考[安装](getting-started/installation.md)来部署生产可用的KubeSkoop实例。

## 关键特性

### 一键诊断网络链路

- 诊断kubernetes集群中各种网络访问方式和链路：Pod,Service,Node and Ingress/Egress Traffic.
- 覆盖完整的Linux协议栈的配置错误场景: Socket,Bridge,Veth,Netfilter,sysctls…
- 支持诊断多种云供应商的IaaS层网络错误配置

### 深度网络监控

- 通过eBPF实现无侵入的Kernel Monitor
- 通过BTF在各种版本的Kernel上直接运行
- 通过标准的Prometheus接口暴露深度监控Metrics

### 网络异常事件识别

- 几十种网络异常场景自动分析识别
- 通过Web Console或Grafana Loki展示网络异常事件

### 用户友好的Web控制台

- 集成KubeSkoop所有能力，提供网络诊断、异常事件监控、抓包、延迟探测等功能。

## 参与贡献

欢迎[提交issue](https://github.com/alibaba/kubeskoop/issues/new)和PR来共建此项目！
如果你想参与到KubeSkoop的开发中来，可以参考[扩展KubeSkoop](contribute/extend-kubeskoop.md)。

## 联系

- 钉钉群号（26720020148）

## License

Most source code in KubeSkoop which running on userspace are licensed under the [Apache License, Version 2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/LICENSE.md).
The BPF code in `/bpf` directory are licensed under the [GPL v2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/bpf/COPYING) to compact with Linux kernel helper functions.
