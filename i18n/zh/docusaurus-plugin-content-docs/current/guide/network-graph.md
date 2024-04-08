---
sidebar_position: 4
---

# 网络链路图

:::tip
你需要在[Web控制台](./web-console.md)中使用该功能。

该能力基础功能依赖`flow`探针开启，丢包和TCP重传统计依赖`packetloss`和`tcpretrans`探针。
:::

KubeSkoop提供了网络链路图功能，可以查看集群中某个时间段内的网络连接统计。页面默认会显示最近15分钟内的网络统计信息。
你可以在Web控制台的首页或者`Monitoring - Network Graph`页面查看网络链路图。

![Network Graph](/img/network-graph.jpg)

端点在图中将会以deployment/daemonset/node/external等形式分组。没有连接的端点将会默认隐藏，你可以通过启用`Show Endpoints Without Link`来显示。

链路信息只会在进入页面时加载一次，你可以点击`Refresh`按钮来刷新链路信息。

鼠标悬停在某个节点或连接上，会显示它的详细信息，包括节点/连接名称，节点类型，以及其上的连接统计信息。

![Hovering](/img/network-graph-hovering.jpg)

## 展示历史时间的链路图

通过`Time`时间选择器，可以查询某个特定时间点15分钟范围内的链路信息。

## 根据命名空间筛选端点

你可以通过`Namespaces`下拉菜单来根据命名空间名称筛选端点。若不进行选择，则默认显示所有命名空间下的端点。

## 展开和收起节点

你可以通过点击节点来展开并显示该组内的所有节点。你也可以通过再次点击已展开的节点来收起它。

## 查看详细链路信息

通过切换`ViewMode`为`Table`模式，可以以表格形式查看详细的链路信息。除了源和目的节点之外，还会显示IP、端口、连接流量等详细信息。

![Network Graph Table](/img/network_graph_table.jpg)
