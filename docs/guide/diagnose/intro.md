---
sidebar_position: 1
---

# Intro

A brief introduction to KubeSkoop connectivity diagnose.

KubeSkoop connectivity diagnose provides one-shot diagnose for persistent network failure. It can detect network misconfiguration(**network device status, iptables rules, VM security group rules, and more**) for various endpoint types and links(Pod, Service, Node, Ingress/Egress traffic) in Kubernetes cluster. It also supports detecting IaaS misconfiguration for various cloud providers.


## How it works

When run KubeSkoop connectivity diagnose, it generates traffic graph from source address to destination address by the network plugin and cloud provider of your cluster. Then, it collects network stack information (iptables rules, network device info, sysctls, etc.) on nodes.

When build traffic links, it will evaluate links and edges in the graph to check whether it works as expceted. If not, it will be consiered as a misconfiguration.

## Limitations

KubeSkoop connectivity diagnose now only supports diagnose for implemented network plugins. For more information, please see [Network plugins](network-plugins.md)
