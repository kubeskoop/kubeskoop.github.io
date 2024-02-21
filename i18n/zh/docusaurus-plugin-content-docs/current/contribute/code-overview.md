---
sidebar_position: 2
---

# 代码概览

本节是对KubeSkoop目录结构的大致介绍。

## 整体概览

### bpf

KubeSkoop所使用的eBPF程序源码。

### cmd

CLI程序。

### deploy

用于部署KubeSkoop的Helm chart和资源文件。

### docs

文档。

### pkg

go包代码。

### rpc

Exporter所使用的gRPC定义。

### test

E2E测试。

## KubeSkoop diagnosis

### cmd/skoop

`skoop`命令实现.

### cmd/collector

`collector`命令实现.

### pkg/skoop/cmd

`skoop`命令的主要程序逻辑。

### pkg/skoop/assertions

断言的类型定义，以及常用的断言实现，包括`kubernetes`和`netstack`。

### pkg/skoop/collector

`collector`命令和`CollectorManager` 的定义与实现。

### pkg/skoop/context

程序的运行时上下文，提供了诊断所需的集群或诊断任务的信息。同时，它也提供了命令行参数的解析，并允许其它模块将自己所需要的参数注册过来。

### pkg/skoop/infra

云厂商相关代码的实现。

### pkg/skoop/k8s

与Kubernetes集群相关的定义，以及实用工具。

### pkg/skoop/model

与诊断相关的模型定义，包括`Packet`、`Link`、`Action`等。

### pkg/skoop/netstack

与Linux网路栈相关的定义以及解析工具，如路由、IPVS，以及iptables模拟。

### pkg/skoop/network

`Network` 的实现。

### pkg/skoop/nodemanager

`NetNodeManager`的实现。

### pkg/skoop/plugin

`Plugin`的实现，包括`flannel`, `calico`等。

### pkg/skoop/provider

`Provider`的实现，包括`generic`, `aliyun`等。

### pkg/skoop/service

`ServiceProcessor`的实现，包括`kube-proxy`。

### pkg/skoop/skoop

`Diagnostor`的实现。

### pkg/skoop/ui

格式化输出以及Web UI。

### pkg/skoop/utils

实用工具。
