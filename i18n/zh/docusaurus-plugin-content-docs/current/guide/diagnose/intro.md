---
sidebar_position: 1
---

# 简介

KubeSkoop连通性诊断功能简介。

KubeSkoop连通性检查提供了对于持续性网络问题的一键诊断功能。它能够诊断Kubernetes集群中各种网络访问方式和链路(如**Pod,Service,Node,Ingress/Egress流量**)，覆盖完整的Linux协议栈的配置错误场景(如**Socket,Bridge,Veth,Netfilter,Egress**)，同时也支持诊断多种云供应商的IaaS层网络错误配置。


## 工作原理

KubeSkoop连通性诊断根据集群中所使用的插件和所使用的云供应商，构造从源地址到目的地址的链路图，并且对节点进行网络信息的采集（如iptables规则、网络设备信息、sysctls等）。

在构造链路的过程中，会对图中的节点和边的信息进行校验和模拟。若预期情况与实际情况不符，则认为网络配置错误。

## 使用限制

KubeSkoop网络诊断只支持对已实现的网络插件进行诊断，详细信息请见[网络插件](network-plugins.md)。