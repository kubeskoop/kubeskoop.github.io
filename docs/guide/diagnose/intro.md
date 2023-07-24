---
sidebar_position: 1
---

# Intro

A brief introduction to KubeSkoop connectivity diagnosis.

KubeSkoop connectivity diagnosis provides one-shot diagnose for persistent network failure. It can detect network misconfiguration(**network device status, iptables rules, VM security group rules, and more**) for various endpoint types and links(Pod, Service, Node, Ingress/Egress traffic) in Kubernetes cluster. It also supports detecting IaaS misconfiguration for various cloud providers.

## Quick Start

### Install KubeSkoop command
Through `go install` to install KubeSkoop CLI：
```
go install github.com/alibaba/kubeskoop/cmd/skoop@main
```

### One-Shot Diagnose
```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output
```
And then, you can open `http://127.0.0.1:8080` to view the diagnosis result through browser.

## How it works

When run KubeSkoop connectivity diagnosis, it generates traffic graph from source address to destination address by the network plugin and cloud provider of your cluster. Then, it collects network stack information (iptables rules, network device info, sysctls, etc.) on nodes.

When build traffic links, it will evaluate links and edges in the graph to check whether it works as expected. If not, it will be considered as a misconfiguration.

## Limitations

KubeSkoop connectivity diagnosis now only supports diagnosis for implemented network plugins. For more information, please see [Network plugins](network-plugins.md)
