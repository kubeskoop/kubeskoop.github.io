---
sidebar_position: 1
---

# 简介

KubeSkoop连通性诊断提供了对于持续性网络问题的一键诊断功能。

它能够诊断Kubernetes集群中各种网络访问方式和链路(如**Pod,Service,Node,Ingress/Egress流量**)，覆盖完整的Linux协议栈的配置错误场景(如**Socket,Bridge,Veth,Netfilter,Egress**)，同时也支持诊断多种云供应商的IaaS层网络错误配置。

## 工作原理

KubeSkoop连通性诊断根据集群中所使用的插件和所使用的云供应商，构造从源地址到目的地址的链路图，并且对节点进行网络信息的采集（如iptables规则、网络设备信息、sysctls等）。

在构造链路的过程中，会对图中的节点和边的信息进行校验和模拟。若预期情况与实际情况不符，则认为网络配置错误。

## 使用连通性诊断

### 通过Web控制台

可以通过Web控制台对集群内网络发起连通性诊断。

![Diagnosis](/img/diagnose.jpg)

在 Diagnosis - Connectivity Diagnosis 下输入诊断的源地址、目的地址、端口和协议，点击`Diagnose` 发起诊断。诊断完成后，可以在列表中看到诊断结果。

![Diagnosis Result](/img/diagnosis_result.jpg)

在诊断链路图中，你可以通过点击节点和边来查看详细信息和发现的问题。

![Diagnosis Result Detail](/img/diagnosis-result-detail.jpg)

### 通过命令行

请见[通过命令行诊断](./use-cli.md)。

## 使用限制

网络连通性诊断功能依赖于该网络插件已被实现，你可以在[这里](../../reference/connectivity-diagnosis/network-plugins.md)查看到目前所支持的网络插件列表。

若要同时进行云上配置的诊断，你可以在[这里](../../reference/connectivity-diagnosis/cloud-providers.md)找到已实现的云提供商列表。
