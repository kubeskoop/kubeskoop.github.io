---
sidebar_position: 2
---

# 安装

## 通过Helm安装

你可以通过Helm来安装生产可用的KubeSkoop实例。

```shell
# 添加skoop charts repo
helm repo add kubeskoop https://github.com/alibaba/kubeskoop/charts

# 首次执行时，需要更新helm repo缓存
helm repo update

# 安装KubeSkoop
helm install kubeskoop kubeskoop/skoop-exporter
```

也可以将仓库拉取到本地进行安装。

```shell
# 获取kubeskoop代码仓库
git clone https://github.com/alibaba/kubeskoop.git

# 进行本地安装
helm install --set namespace=kubeskoop skoop-exporter ./kubeskoop/deploy/skoop-exporter-0.1.0.tgz
```

Skoop-exporter以DaemonSet方式部署在集群中，可以通过以下方式验证是否正常工作：

```shell
# 查看Skoop exporter的运行状态
kubectl get pod -n kubeskoop -l app=kubeskoop-exporter -o wide

# 获取到pod的信息后，可以通过apiserver查看Probe采集探针的运行状态
kubectl get --raw /api/v1/namespaces/{{skoop-exporter的pod namespace}}/pods/{{skoop-exporter的pod name}}:9102/proxy/status |jq .

# 如果可以直接访问skoop-exporter实例，也可以直接查看Probe的运行状态
curl {{skoop-exporter的pod ip}}:9102/status |jq .
```

### Helm配置

通过helm安装KubeSkoop exporter时，可以配置的参数如下：

| 配置项                            | 配置说明                                                                                                          | 默认配置                            |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------|
| name                               | KubeSkoop exporter的组件名称                           | `skoop-exporter`                   |
| namespace                          | KubeSkoop exporter的命名空间   | `kubeskoop`                            |
| debugmode                          | 调试模式的开关，打开调试模式后，可以获得更详细的日志以及开启pprof和gops接口 | `false`              |
| config.enableEventServer           | 事件采集服务的开关  | `false`                            |
| config.enableMetricServer          | 监控指标服务的开关 | `true`                             |
| config.remoteLokiAddress           | 开启事件采集服务后，通过这个选项配置需要推送事件的Grafana Loki服务地址  | ``              |
| config.metricLabelVerbose          | 获取更加详细的监控指标标签，包括Pod的app标签，ip地址等 | `false`                            |
| config.metricServerPort            | 监控指标服务的端口，提供http服务 | 9102                               |
| config.eventServerPort             | KubeSkoop exporter的GRPC服务端口，提供事件流服务| 19102                              |
| config.metricProbes                | 配置开启的监控指标探针|            |
| config.eventProbes                 | 配置开启的事件采集探针                      |            |
| config.metricCacheInterval         | 监控指标的采集缓存周期，单位为秒  | 15                                 |

### 安装完成校验

通过helm方式完成KubeSkoop exporter的安装后，可以通过以下方式验证是否正常运行:

```shell
# 查看Probe采集探针的运行状态
kubectl get --raw /api/v1/namespaces/{{KubeSkoop exporter的pod namespace}}/pods/{{KubeSkoop exporter的pod name}}:9102/proxy/status | jq .
```
