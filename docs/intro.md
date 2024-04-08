---
sidebar_position: 0
---

# Intro

KubeSkoop is a **network diagnosis and monitoring suite for Kubernetes**, and supports multiple CNI plugins and IaaS cloud providers.

It is designed to help users quickly diagnose and troubleshoot container network problems, and provide the ability to locate and track network events.

For different network plugins and IaaS providers, KubeSkoop automatically builds network links in Kubernetes clusters, combined with eBPF's in-depth monitoring of the kernel's critical paths, to analyze common Kubernetes cluster network problems.

By analyzing link configurations and backtracking historical network anomalies, it can significantly simplify the difficulty and time consuming of diagnosing Kubernetes network problems.

![overview](/img/kubeskoop_features.jpg)

You can view [Quick Start](getting-started/quick-start.md) to get started with KubeSkoop, or [Installation](getting-started/installation.md) to deploy a production-ready KubeSkoop instance.

## Key Features

### One-Shot Diagnose For Network Broken

- Diagnose in-cluster traffic between Pod,Service,Node and Ingress/Egress Traffic.
- Cover whole linux network stack: Socket,Bridge,Veth,Netfilter,sysctls…
- Support IaaS network probe for cloud providers.

### In-Depth Kernel Monitor

- eBPF seamless kernel monitor
- CO-RE scripts on series kernel by BTF
- export metrics to standard Prometheus metric API

### Network Anomaly Event

- support dozens of anomy scenes recognition
- export anomy event to Grafana Loki or Web Console

### User-friendly Web Console

- Integrating all capabilities of KubeSkoop, provides network diagnosis, event monitoring, packet capturing, latency detection, etc.

## Contributing

Feel free to open issues and pull requests. Any feedback is much appreciated!

## Contact

- DingTalk Group ID(26720020148)

## License

Most source code in KubeSkoop which running on userspace are licensed under the [Apache License, Version 2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/LICENSE.md).
The BPF code in `/bpf` directory are licensed under the [GPL v2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/bpf/COPYING) to compact with Linux kernel helper functions.
