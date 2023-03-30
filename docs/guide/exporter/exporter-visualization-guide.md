
# KubeSkoop exporter 可视化配置

## 使用 Prometheus & Grafana 进行指标的可视化

KubeSkoop exporter提供了标准的Prometheus格式的指标输出服务，您可以快速将KubeSkoop exporter的监控信息集成到已有的监控系统中，请参考 **配置** 。

如果没有就绪的监控服务，请参考 **安装** 搭建可视化的监控服务。

### 安装

参考 **[Prometheus 的安装](https://prometheus.io/docs/prometheus/latest/installation/)** 完成Prometheus的部署安装。

参考 **[Grafana 的安装](https://prometheus.io/docs/visualization/grafana/)** 完成Grafana的安装并配置与Prometheus的连接。

### 配置KubeSkoop exporter指标监控

KubeSkoop exporter支持运行在kubernetes中的prometheus的服务发现功能，在安装完成prometheus之后，可以通过**Status->Targets**页面，在搜索栏中输入`skoop-exporter`，查看已经就绪的实例:

![prometheus-exporter-targets](/img/prometheus-targets.png)

在KubeSkoop exporter实例被prometheus正常捕获后，可以通过以下步骤完成指标的可视化操作：

1. 进入Grafana的控制台，点击**Configuration->Data sources->Add data source**后选择Prometheus，将已经就绪的prometheus实例的地址添加到Grafana的数据源订阅中:
![grafana-prometheus-datasource](/img/datasource-prometheus.png)
2. 新建一个大盘，或者在已有大盘中选择新建一个面板，在面板的配置中选取数据源为**1**中配置的数据源，并在Metric browser中输入`inspector`，即可看到联想后的KubeSkoop exporter指标，选取其中需要的信息，以`inspector_pod_netdevrxbytes`为例，输入完成后，可以在面板中看到获取到的数据。
![grafana-prometheus-panel](/img/panel-prometheus.png)
3. 在指标的可视化中，可以根据需要设置指标的图例和单位等信息，其中，图例支持配置Pod的Namespace，ip，label等信息，在面板的**Legend**中可以配置这些支持的图例。

### 导入预定义默认大盘

KubeSkoop exporter提供跟随版本更新的默认Grafana大盘配置文件:

```shell
curl https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/resource/kubeskoop-exporter-dashboard.json -o dashboard.json
```

登陆Grafana控制台后，点击**Dashboards->Import->Upload JSON file**，选择保存好的文件上传后，选取prometheus作为数据源，点击**Import**导入，即可查看到默认大盘。通过选取不同的面板组，可以查看到不同类别的监控指标信息:

![default_dashboard](/img/default_dashboard.png)

## 使用 Grafana & Loki 查看可视化的网络事件

### 安装 Grafana Loki

按照官方文档进行不同场景下的 **[Grafana Loki的安装](https://grafana.com/docs/loki/latest/installation/helm/)**。

安装完成后，可以通过以下方式检查Grafana Loki的可用性:

```shell
curl http://[Grafana Loki实例的地址]:3100/ready
```

### 配置KubeSkoop exporter事件流

#### 通过Grafana

通过Grafana可以将KubeSkoop exporter推送到Grafana Loki的事件进行可视化，通过以下步骤可以实现实现可视化操作：

1. 点击**Configuration->Data sources->Add data source**后选择Loki，将Grafana Loki服务的地址添加到Grafana的数据源订阅中，可以是ip地址和域名，默认端口为3100：
![grafana-loki-datasource](/img/datasource-loki.png)
2. 新建一个大盘，或者在已有大盘中选择新建一个面板，在面板的配置中选取数据源为**1**中配置的数据源，并在Label browser中过滤需要的事件信息：
![grafana-loki-panel](/img/panel-loki.png)
3. 在事件面板中，可以通过**[LogQL](https://grafana.com/docs/loki/latest/logql/log_queries/)**查询特定的事件，点击事件后，可以看到详细的现场信息:
![grafana-loki-detail](/img/loki-event-detail.png)