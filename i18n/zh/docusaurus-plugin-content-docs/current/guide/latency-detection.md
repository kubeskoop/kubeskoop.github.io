---
sidebar_position: 6
---

# 延迟探测

:::tip
你需要在[Web控制台](./web-console.md)中使用该功能。
:::

KubeSkoop提供了延迟探测(PingMesh)功能，可以测试当前时间集群内的两个或多个Pod/Node间的连接状态。

![Ping Mesh](/img/ping_mesh.jpg)

## 发起延迟探测

### 添加目标

通过点击`Targets`的`Add`按钮，可以通过选择器添加抓包目标。

![Add Targets](/img/latency-detection-add-target.jpg)

在`Add Target`窗口中，你可以添加节点或者Pod作为抓包目标。你可以根据命名空间&名称选择单个Pod/Node，或是根据标签同时选择多个。

### 查看结果

延迟探测任务运行结束后，将会在`Result`中展示链路图。

![Detection Result](/img/latency-detection-result.jpg)

链路图中，你可以通过节点之间连线的颜色来判断节点间的连接状态，连线上也会展示节点间的平均延迟。你也可以将鼠标悬停在连接上，查看连接的详细信息。
