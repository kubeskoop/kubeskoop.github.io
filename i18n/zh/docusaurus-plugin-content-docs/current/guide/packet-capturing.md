---
sidebar_position: 5
---

# 抓包

:::tip
你需要在[Web控制台](./web-console.md)中使用该功能。
:::

KubeSkoop提供了分布式抓包功能，通过部署在每个节点上的KubeSkoop Agent实例，可以同时对多个Pod/Node进行抓包。

![Packet Capturing](/img/packet_capturing.jpg)

## 发起抓包任务

发起抓包任务，需要填写抓包的目标、过滤表达式、抓包时间信息。在填写好相应的信息后，点击`Submit Task`按钮，发起抓包任务。

### 添加目标

通过点击`Targets`的`Add`按钮，可以通过选择器添加抓包目标。

![Add Targets](/img/packet-capturing-add-targets.jpg)

在`Add Target`窗口中，你可以添加节点或者Pod作为抓包目标。你可以根据命名空间&名称选择单个Pod/Node，或是根据标签同时选择多个。

在选择Pod作为目标时，通过勾选`Also capture node packets`，会同时将Pod所在的Node添加至抓包目标中。

### 过滤包

在`Filter`中，你可以添加过滤表达式，对抓包结果进行过滤。过滤表达式与`tcpdump`一致，使用[Pcap filter](https://www.tcpdump.org/manpages/pcap-filter.7.html)语法。例如，想要抓取与IP地址`10.0.1.0`之间的通信流量，可以将表达式写为：

```text
host 10.0.1.0
```

若无需过滤，请将表达式留空。

## 下载抓包结果

在抓包运行结束后，通过点击`History`中`Result`列的`Download`按钮，下载抓包结果至本地，并使用[Wireshark](https://www.wireshark.org/)等网络分析工具进行查看。
