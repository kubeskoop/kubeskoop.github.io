---
sidebar_position: 3
---

# Installation

## Install via Helm

You can install production-ready KubeSkoop instance by Helm.

Execute the following command to add the KubeSkoop repository to Helm and install KubeSkoop:

```shell
# Add kubeskoop repo
helm repo add kubeskoop https://kubeskoop.io/kubeskoop/
# Upgrade helm repo
helm repo update
# Install kubeskoop
helm install -n kubeskoop kubeskoop kubeskoop/kubeskoop
```

The command will install `KubeSkoop` into the `kubeskoop` namespace and turn on the agent, controller and webconsole components of `KubeSkoop` by default.

## Customize Configuration

You can view the values that can be configured by executing the following command.

```shell
helm show values kubeskoop/kubeskoop
```

You can save the values to the `values.yaml` file, make changes to the parameters you need, and then install KubeSkoop with theses values.

```shell
# If you have already installed KubeSkoop, you can upgrade it with `helm upgrade`.
helm install -f values.yaml -n kubeskoop kubeskoop kubeskoop/kubeskoop
```

You can also use the `--set` parameter to customize the configuration.

```shell
helm install --set controller.config.prometheusEndpoint=http://prometheus -n kubeskoop kubeskoop kubeskoop/kubeskoop
```

## Configure Probes

In the `config` section of the values, you can configure the metrics/event probes that need to be turned on.

The default configuration is as follows:

```yaml
config:
  metricProbes:
    - name: conntrack
    - name: qdisc
    - name: netdev
    - name: io
    - name: sock
    - name: tcpsummary
    - name: tcp
    - name: tcpext
    - name: udp
    - name: kernellatency
    - name: packetloss
    - name: flow
      args:
        enablePortInLabel: false
    - name: tcpretrans
  eventProbes:
    - name: biolatency
    - name: kernellatency
    - name: packetloss
      args:
        enableStack: false
    - name: tcpreset
    - name: tcpretrans
  eventSinks:
    - name: stderr
```

For more information about the probes, please see [the documentation](../reference/monitoring/probes-metrics-events.md).

## Configure Prometheus and Loki Endpoint

Some features (e.g., network graph, anomaly events) of [Web Console](.../guide/web-console.md) relies on Prometheus and Loki.
You need to provide the endpoint for the Prometheus and Loki services during installation.

:::tip
If there is no ready-to-use Prometheus or Loki instances, you can refer to theses documentations:

- Refer to **[Prometheus Installation](https://prometheus.io/docs/prometheus/latest/installation/)** to complete the deployment and installation of Prometheus.
- Refer to **[Install Grafana Loki with Helm](https://grafana.com/docs/loki/latest/setup/install/helm/)** to complete the deployment and installation of Loki.

:::

Configure `prometheusEndpoint` and `lokiEndpoint` in the `controller.config` section.

Assuming that prometheus and loki are installed in the `monitoring` namespace,
 and the service names are `prometheus` and `loki`, a sample configuration is as follows:

 ```yaml
 controller:
  enabled: true
  config:
    # configure endpoint address for prometheus.
    prometheusEndpoint: 'http://prometheus.monitoring:9090'
    # configure endpoint address for loki.
    lokiEndpoint: 'http://loki.monitoring:3100'
```

At the same time, the event sinks needs to be configured in `config.eventSink` so that events can be collected via Loki.

```yaml
config:
  # ...some probe configurations
  eventSinks:
    - name: stderr
    # configure loki event sink and specify the address as the service address of loki.
    - name: loki
      args:
        addr: 'http://loki.monitoring:3100'
```

Finally, install/update KubeSkoop via `helm install` or `helm upgrade`.
