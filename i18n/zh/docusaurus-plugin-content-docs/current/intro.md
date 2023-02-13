---
sidebar_position: 1
---

# 简介
## 总览
![overview](/img/kubeskoop_features.png)
KubeSkoop 是一个Kubernetes网络诊断工具.
针对不同的网络插件和IaaS提供商自动构建Kubernetes集群中Pod的网络访问图，结合eBPF对内核关键路径的深度监控和分析，来分析常见的Kubernetes集群网络问题。
显著地简化了Kubernetes网络问题的诊断难度。

## 关键特性
### 一键诊断网络链路
* 诊断kubernetes集群中各种网络访问方式和链路：Pod,Service,Node and Ingress/Egress Traffic.
* 覆盖完整的Linux协议栈的配置错误场景: Socket,Bridge,Veth,Netfilter,sysctls…
* 支持诊断多种云供应商的IAAS层网络错误配置
### 深度网络监控
* 通过eBPF实现无侵入的Kernel Montor
* 通过BTF在各种版本的Kernel上直接运行
* 通过标准的Prometheus接口暴露深度监控Metrics
### 网络异常事件识别
* 几十种网络异常场景自动分析识别
* 通过 Grafana Loki 展示网络异常事件

# Contributing

Feel free to open issues and pull requests. Any feedback is much appreciated!

# Contact
* DingTalk Group ID(26720020148)

# License
Most source code in KubeSkoop which running on userspace are licensed under the [Apache License, Version 2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/LICENSE.md).
The BPF code in `/bpf` directory are licensed under the [GPL v2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/bpf/COPYING) to compat with Linux kernel helper functions.  

