---
sidebar_position: 1
---

# 简介

KubeSkoop连通性诊断功能简介。

KubeSkoop连通性检查提供了对于持续性网络问题的一键诊断功能。它能够诊断Kubernetes集群中各种网络访问方式和链路(如**Pod,Service,Node,Ingress/Egress流量**)，覆盖完整的Linux协议栈的配置错误场景(如**Socket,Bridge,Veth,Netfilter,Egress**)，同时也支持诊断多种云供应商的IaaS层网络错误配置。

## 快速开始
### 诊断命令安装
通过go install来安装KubeSkoop的诊断客户端：
```
go install github.com/alibaba/kubeskoop/cmd/skoop
```

### 一键诊断
```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # 执行诊断命令，指定来源目的，通过--http来让诊断结果通过本地web服务提供
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # 诊断完成会输出诊断结果链接
```

之后，通过浏览器打开`http://127.0.0.1:8080`查看诊断结果。

## 工作原理

KubeSkoop连通性诊断根据集群中所使用的插件和所使用的云供应商，构造从源地址到目的地址的链路图，并且对节点进行网络信息的采集（如iptables规则、网络设备信息、sysctls等）。

在构造链路的过程中，会对图中的节点和边的信息进行校验和模拟。若预期情况与实际情况不符，则认为网络配置错误。

## 使用限制

KubeSkoop网络诊断只支持对已实现的网络插件进行诊断，详细信息请见[网络插件](network-plugins.md)。