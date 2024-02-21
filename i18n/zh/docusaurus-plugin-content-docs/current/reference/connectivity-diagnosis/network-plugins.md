---
sidebar_position: 2
---

# 网络插件

KubeSkoop连通性诊断目前支持以下网络插件。

## Flannel

支持`host-gw`和`vxlan`模式的连通性诊断，会在运行时自动检测所使用的类型。

## Calico

支持`BGP`以及`IPIP`模式的连通性诊断，会在运行时自动检测所使用的类型。

:::tip
Calico诊断将会优先使用projectcalico.org/v3。**Calico API Server**组件。更多信息，可见[Calico文档](https://projectcalico.docs.tigera.io/maintenance/install-apiserver)。
:::
