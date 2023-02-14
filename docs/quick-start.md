---
sidebar_position: 2
---

# Quick Start
How to diagnose your kubernetes cluster by KubeSkoop?

## Kind of kubernetes network issues:
* Persistent network failure  
  Most of persistent network failure issue are misconfig of network stack, e.g. error iptables rule, misconfig of VM security group.  
  KubeSkoop generates a traffic graph by analyzing the link of `src->dst`, and then performs rule verification and simulation on the nodes and edges on the graph to locate the network misconfiguration.

* Occasional network jitter
  Occasional packet delays, losses, and retransmissions in network links often lead to application jitter problems. Because they are sporadic, it is difficult to trace back and locate the root cause of the problem.  
  KubeSkoop monitors the key path of the protocol stack in the kernel through eBPF in-depth, integrates multiple indicators to correlate typical jitter scenarios, and records and traces back to the root cause of network anomalies.

* Network performance bottlenecks  
  Application network dependencies are usually associated with many network links, such as upstream and downstream services, DNS resolution, etc., and it is difficult to analyze the root cause when the performance cannot improve.  
  KubeSkoop finds out key links that affect performance by analyzing application-related links and application-layer bottlenecks.

## One-Shot diagnose persistent network failure
### Install KubeSkoop command
Through `go install` to install KubeSkoop cli：
```
go install github.com/alibaba/kubeskoop/cmd/skoop
```
### One-Shot Diagnose
```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output
```
Open the diagnosis result `http://127.0.0.1:8080` through browser：
![diagnose_web](/img/doc/intro_diagnose_web.jpg)

## Monitor network jitter and bottlenecks
### Install monitor components
The Skoop exporter bundles with Prometheus, Grafana, and Loki
can be quickly deployed in a Kubernetes cluster by following these steps:
```shell
kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml
```
Confirm that the installation is complete and obtain access through the following steps：
```shell
# View the status of Skoop exporter
kubectl get pod -n kubeskoop -l app=skoop-exporter -o wide
# View the status of Probe collection probes
kubectl get --raw /api/v1/namespaces/kubeskoop/pods/skoop-exporter-t4d9m:9102/proxy/status |jq .
# Obtain the entrance of Prometheus service, which is exposed by NodePort by default
kubectl get service -n kubeskoop prometheus-service -o wide
# Obtain the access entry of the Grafana console, which is exposed by NodePort by default
kubectl get service -n kubeskoop grafana -o wide
```
***Note: skoopbundle.yaml starts with a minimal copy, not suitable for production environments***

### network performance analysis
Open the NodePort Service of grafana on web browser, open the network monitoring page,
and check the water level of each monitor item corresponding to the time point of the performance problem. For example：  
![grafana_performance](/img/dashboard.png)  
***具体指标说明参考文档: [Kubeskoop exporter 功能简介](guide/exporter/exporter-description.md) ***

### network jitter & anomy event analysis
Open the NodePort Service of grafana on web browser, open the Loki page,
check the events corresponding to the time point of network jitter and the water level corresponding to the network monitoring page.
![grafana_performance](/img/loki_tracing.png)  
***具体指标说明参考文档: [Kubeskoop exporter 功能简介](guide/exporter/exporter-description.md) ***
