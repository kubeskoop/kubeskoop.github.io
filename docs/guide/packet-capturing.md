---
sidebar_position: 5
---
# Packet Capturing

:::tip
You need to use this feature in [Web Console](./web-console.md).
:::

KubeSkoop provides distributed packet capturing feature. Via KubeSkoop Agent deployed on your nodes, it allows you to capture packets for multiple Pods/Nodes at the same time.

![Packet Capturing](/img/packet_capturing.jpg)

## Perform a packet capture

To start a packet capturing task, you need to provide the target, filter expression, and packet capturing duration, and click the `Submit Task` button.

### Add Targets

By clicking the `Add` button of `Targets`, you can add packet capturing targets via the target selector.

![Add Targets](/img/packet-capturing-add-targets.jpg)

In the `Add Target` window, you can add Node or Pod as the target. You can add single Pod/Node by its namespace & name,
or add multiple targets by label selector.

When selecting Pod as target(s), by checking `Also capture node packets`, the Node where the Pod is running on will be added to the packet capturing target at the same time.

### Filtering Packets

In `Filter`, you can add filter expressions to filter packet capturing results. Filter expressions are in the same form as `tcpdump` to use the [Pcap filter](https://www.tcpdump.org/manpages/pcap-filter.7.html) syntax. For example, if you want to capture traffic to and from IP address `10.0.1.0`, you can write the expression as:

```text
host 10.0.10.0
```

If there is no need to filter packets, you can leave the `Filter` field empty.

## Download Task Result

When task is completed, you can download the result to your local computer by clicking the `Download` button in the `Result` column of `History`.
You can view the packet capturing file using network analysis tools such as [Wireshark](https://www.wireshark.org/).
