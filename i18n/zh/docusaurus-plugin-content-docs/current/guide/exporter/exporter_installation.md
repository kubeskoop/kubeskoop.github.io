# 安装 KubeSkoop exporter

## 安装依赖

* Linux kernel >= 4.9.17 （在低版本内核上可以支持部分功能）
* 基于Docker/Containerd/Pouch的容器运行时

## 快速安装

### 快速体验KubeSkoop exporter功能

KubeSkoop exporter提供了一个可以快速部署的配置，包含以下组件：

* KubeSkoop exporter组件。
* 单副本的Prometheus组件与Grafana组件，Grafana Loki组件。
* Prometheus和Grafana的NodePort服务。

通过以下步骤，可以在Kubernetes集群中快速部署KubeSkoop exporter及其与Prometheus，Grafana和Loki构成的可观测性组合：

```shell
kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml
```

通过以下步骤，确认安装完成以及获取访问入口：

```shell
# 查看Skoop exporter的运行状态
kubectl get pod -n kubeskoop -l app=kubeskoop-exporter -o wide

# 查看Probe采集探针的运行状态
kubectl get --raw /api/v1/namespaces/{{skoop-exporter的pod namespace}}/pods/{{skoop-exporter的pod name}}:9102/proxy/status |jq .

# 获取Prometheus服务的入口
kubectl get service -n kubeskoop prometheus-service -o wide

# 获取Grafana控制台的访问入口
kubectl get service -n kubeskoop grafana -o wide
```

### 仅安装KubeSkoop exporter

通过以下步骤，可以在Kubernetes集群中快速部署KubeSkoop exporter：

```shell
kubectl apply -f https://github.com/alibaba/kubeskoop/deploy/kubeskoopexporter.yaml
```

## 使用Helm安装

```shell
# 添加skoop charts repo
helm repo add kubeskoop https://github.com/alibaba/kubeskoop/charts

# 首次执行时，需要更新helm repo缓存
helm repo update

# 安装skoop exporter
helm install skoop-exporter kubeskoop/skoop-exporter
```

如果需要调试Helm Charts信息，可以通过本地安装：

```shell
# 获取skoop exporter代码仓库
git clone https://github.com/alibaba/kubeskoop.git

# 进行本地安装
helm install --set namespace=kube-system skoop-exporter ./kubeskoop/deploy/skoop-exporter-0.1.0.tgz --debug
```

Skoop-exporter以DaemonSet方式部署在集群中，可以通过以下方式验证是否正常工作：

```shell
# 查看Skoop exporter的运行状态
kubectl get pod -n skoop -l app=kubeskoop-exporter -o wide

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
kubectl get --raw /api/v1/namespaces/{{KubeSkoop exporter的pod namespace}}/pods/{{KubeSkoop exporter的pod name}}:9102/proxy/status |jq .
```

## 配置

KubeSkoop exporter的配置是默认由与workload相同命名空间下的ConfigMap对象inspector-config进行管理，通过以下方式可以进行修改：

```shell
# 修改命名空间为实际生效的命名空间
kubectl edit cm -n kubeskoop inspector-config
```

KubeSkoop exporter支持的配置项如下:

| 配置项                            | 配置功能             | 默认值                            |
|------------------------------------|-----------------|------------------------------------|
| debugmode                     | 调试模式的开关，打开调试模式后，可以获得更详细的日志以及开启pprof和gops接口  | `false`    |
| event_config.loki_enable      | 事件采集服务推向给Grafana Loki的开关  | `false`                            |
| event_config.loki_address          | 开启事件采集服务后，通过这个选项配置需要推送事件的Grafana Loki服务地址  | ``     |
| event_config.probes                | 配置开启的事件采集探针  |            |
| event_config.port                  | KubeSkoop exporter的GRPC服务端口，提供事件流服务| 19102                              |
| metric_config.verbose              | 获取更加详细的监控指标标签，包括Pod的app标签，ip地址等 | `false`                            |
| metric_config.port                 |监控指标服务的端口，提供http服务   | 9102                               |
| metric_config.probes               | 配置开启的监控指标探针   |           |
| metric_config.interval             | 监控指标的采集缓存周期，单位为秒   | 15                                 |

可以选择配置的探针信息可以参考**[KubeSkoop exporter 功能简介
](exporter-description.md)**
