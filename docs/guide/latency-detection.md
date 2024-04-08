---
sidebar_position: 6
---

# Latency Detection

:::tip
You need to use this feature in [Web Console](./web-console.md).
:::

KubeSkoop provides latency detection (PingMesh) feature,
which allows you to test the connection status between two or multiple Pods/Nodes.

![Ping Mesh](/img/ping_mesh.jpg)

## Start Latency Detection Task

### Add Targets

By clicking the `Add` button of `Targets`, you can add packet capturing targets via the target selector.

![Add Targets](/img/latency-detection-add-target.jpg)

In the `Add Target` window, you can add Node or Pod as the target. You can add single Pod/Node by its namespace & name,
or add multiple targets by label selector.

### View Result

After the latency detection task is finished, you can view the link graph in `Result`.

![Detection Result](/img/latency-detection-result.jpg)

In the link graph, you can see the connection status between nodes by the color of the connecting lines between nodes, and the average latency between nodes is also displayed on the connecting lines.

You can also hover your mouse over the connection to view the connection details.
