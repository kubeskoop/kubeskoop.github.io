---
sidebar_position: 0
---

# 安装要求

## 网络连通性诊断

网络连通性诊断功能依赖于该网络插件已被实现，你可以在[这里](../reference/connectivity-diagnosis/network-plugins.md)查看到目前所支持的网络插件列表。

若要同时进行云上配置的诊断，你可以在[这里](../reference/connectivity-diagnosis/cloud-providers.md)找到已实现的云提供商列表。

## 内核版本需求

KubeSkoop使用[eBPF技术](https://ebpf.io/)作为观测能力的核心实现。因此，在使用KubeSkoop的网络监控能力时，要求Kubernetes集群节点的内核版本应为***4.9.17及以上***。
