---
sidebar_position: 2
---

# 快速上手
如何使用KubeSkoop诊断Kubernetes网络问题

## 网络问题分类
* 持续的网络不通  
  大部分的网络持续不通问题都是网络链路中的错误配置导致的，比如 iptables规则、VM的安全组条目缺失等。  
  KubeSkoop通过分析 `src->dst` 的链路生成出流量的图，然后对图上的节点和边做规则的校验和模拟来实现网络错误配置的定位。

* 偶发的网络抖动  
  网络链路中的偶发的包延迟、丢失、重传等经常会导致业务的抖动问题，由于是偶发的，导致问题很难回溯和定位根因。  
  KubeSkoop通过eBPF深度监控内核中协议栈关键路径，综合多指标关联出典型抖动场景，记录和回溯网络的异常根因。

* 网络性能瓶颈   
  应用网络依赖通常关联链路很多，例如上下游服务、DNS解析等，性能上不去时很难分析根因。  
  KubeSkoop通过对应用关联链路和应用层瓶颈分析，找出影响性能的关键链路。

## 诊断网络不通问题
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
通过浏览器打来`http://127.0.0.1:8080`后可以看到诊断结果：
![diagnose_web](/img/doc/intro_diagnose_web.jpg)

## 诊断网络抖动和网络性能问题

### 安装网络监控组件

通过以下步骤，可以在Kubernetes集群中快速部署Skoop exporter及其与Prometheus，Grafana和Loki构成的可观测性组合：

```shell
kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml
```

通过以下步骤，确认安装完成以及获取访问入口：

```shell
# 查看Skoop exporter的运行状态
kubectl get pod -n kubeskoop -l app=skoop-exporter -o wide
# 查看Probe采集探针的运行状态
kubectl get --raw /api/v1/namespaces/kubeskoop/pods/skoop-exporter-t4d9m:9102/proxy/status |jq .
# 获取Prometheus服务的入口
kubectl get service -n kubeskoop prometheus-service -o wide
# 获取Grafana控制台的访问入口
kubectl get service -n kubeskoop grafana -o wide
```

***备注: skoopbundle.yaml以最小副本方式启动，不适用于生产环境***

### 查看网络抖动和性能分析
#### 网络性能分析
打开grafana的Service访问入口，打开网络监控的页面，查看对应性能问题时间点的各深度指标的水位情况。例如：  
![grafana_performance](/img/dashboard.png)  
***具体指标说明参考文档: [Kubeskoop exporter 功能简介](guide/exporter/exporter-description.md) ***
#### 网络抖动事件
打开grafana的Service访问入口，打开Loki的页面，查看对应网络抖动时间点对应的事件，以及网络监控页面对应的水位情况。  
![grafana_performance](/img/loki_tracing.png)  
***具体指标和事件说明参考文档：[Kubeskoop exporter 功能简介](guide/exporter/exporter-description.md) ***
