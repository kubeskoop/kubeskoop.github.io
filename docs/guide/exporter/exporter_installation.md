# Install KubeSkoop exporter

## Dependencies

* Linux kernel >= 4.9.17 （Some functions can be supported on lower versions of the kernel.）
* Containers runtime based on Docker/Containerd/Pouch.

## Quick Installation

### Quickly experience

KubeSkoop exporter provides a quick deployment configuration that includes the following components:

* KubeSkoop exporter.
* Single-instance Prometheus and Grafana components, Grafana Loki component.
* NodePort services of Prometheus and Grafana.

The following steps show how to quickly deploy KubeSkoop exporter and its observability combination with Prometheus, Grafana, and Loki in a Kubernetes cluster:

```shell
kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml
```

Follow the steps below to confirm the installation is complete and obtain the access entry:

```shell
# Check the running status of kubeskoop exporter.
kubectl get pod -n kubeskoop -l app=kubeskoop-exporter -o wide

# Check the running status of the Probe collector.
kubectl get --raw /api/v1/namespaces/kubeskoop/pods/{{kubeskoop-exporter pod name}}:9102/proxy/status |jq .

# Obtain the entry for the Prometheus service.
kubectl get service -n kubeskoop prometheus-service -o wide

# Obtain the access entry for the Grafana console.
kubectl get service -n kubeskoop grafana -o wide
```

### Install only KubeSkoop exporter

## Install using Helm

```shell
# Add KubeSkoop charts repo
helm repo add kubeskoop https://kubeskoop.github.io

# You need to update helm repo info for the first time.
helm repo update

# Install KubeSkoop exporter.
helm install kubeskoop-exporter kubeskoop/skoop-exporter
```

If you need to debug Helm Charts information, you can install it locally:

```shell
# Clone KubeSkoop to local disk.
git clone https://github.com/alibaba/kubeskoop.git

# Install the helm chart locally.
helm install --set namespace=kube-system skoop-exporter ./kubeskoop/deploy/skoop-exporter-0.2.0.tgz --debug
```

KubeSkoop exporter is deployed in the cluster as a DaemonSet and can be verified if it is working properly in the following ways:

```shell
# Get pod running status of KubeSkoop exporter
kubectl get pod -n kubeskoop -l app=kubeskoop-exporter -o wide

# After pods are runing, you can get running status of probes through API server.
kubectl get --raw /api/v1/namespaces/kubeskoop/pods/{{kubeskoop-exporter pod name}}:9102/proxy/status |jq .


# You can also curl it if you have direct access to the pod IP.
curl {{kubeskoop-exporter pod ip}}:9102/status |jq .
```

### Helm Configuration

The parameters that can be configured when installing KubeSkoop exporter through Helm are as follows:

| Setting                       | Description                                                  | Default                                         |
| ----------------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| name                          | DaemonSet name of KubeSkoop exporter.                        | `kubeskoop-exporter`                            |
| debugmode                     | Enable `debugmode` for kubeskoop-exporter, with debug interface, debug log level and pprof support. | `false`                                         |
| appName                       | Pod `app` label.                                             | `kubeskoop-exporter`                            |
| runtimeEndpoint               | CRI runtime endpoint socket, you can use  `crictl info | awk -F":" '/containerdEndpoint/ {print $2'` to obtain it. | `/run/containerd/containerd.sock`               |
| image.repository              | Image repository for KubeSkoop exporter container.           | `kubeskoop/kubeskoop`                           |
| image.tag                     | Image tag for KubeSkoop exporter container.                  | `latest`                                        |
| image.imagePullPolicy         | `imagePullPolicy` for KubeSkoop exporter container.          | `Always`                                        |
| initContainer.enabled         | Enable `btfhack` as initContainer to automate discover btf file when kernel does not carry btf information itself. | `true`                                          |
| initContainer.repository      | Image repository for `btfhack` container.                    | `registry.cn-hangzhou.aliyuncs.com/acs/btfhack` |
| initContainer.tag             | Image tag for `btfhack` container.                           | `latest`                                        |
| initContainer.imagePullPolicy | `imagePullPolicy` for `btfhack` container.                   | `Always`                                        |
| config.enableEventServer      | Enable the event server and loki.                            | `false`                                         |
| config.enableMetricServer     | Enable the metric server.                                    | `true`                                          |
| config.remoteLokiAddress      | Set the remote grafana loki endpoint to push events.         | `registry.cn-hangzhou.aliyuncs.com/acs/btfhack` |
| config.metricLabelVerbose     | Deliever the detail information of pod in metric label, such as app label, ip | `false`                                         |
| config.metricServerPort       | Metric server port, provide HTTP service.                    | 9102                                            |
| config.eventServerPort        | Event sever port, provide GRPC service.                      | 19102                                           |
| config.metricProbes           | Metric probes to enable.                                     | Refer to the probe guide.                       |
| config.eventProbes            | Event probes to enable.                                      | Refer to the probe guide.                       |
| config.metricCacheInterval    | Metric cache interval.                                       | 15                                              |
| expose_labels                 | Extra labels to be exposed.                                  | See `values.yaml`.                              |



### Verification after installation completion

After completing the installation of KubeSkoop exporter using Helm, you can verify if it is running correctly in the following ways:

```shell
# Check the running status of the Probe collector.
kubectl get --raw /api/v1/namespaces/kubeskoop/pods/{{kubeskoop-exporter pod name}}:9102/proxy/status |jq .
```

## Configuration

The configuration of KubeSkoop exporter is managed by the ConfigMap object 'inspector-config' by default in the same namespace as the workload. The following methods can be used to modify it:

```shell
# Change the namespace to the actual effective namespace.
kubectl edit cm -n kubeskoop inspector-config
```

The configuration items supported by KubeSkoop exporter are as follows:

| Configuration item                            | Configuration function             | Default value                            |
|------------------------------------|-----------------|------------------------------------|
| debugmode                     | Debug mode switch. After turning on debug mode, you can obtain more detailed logs and enable pprof and gops interfaces.  | `false`    |
| event_config.loki_enable      | The switch to push event collection service to Grafana Loki.  | `false`                            |
| event_config.loki_address          | After enabling the event collection service, configure the Grafana Loki service address where the events need to be pushed through this option.  | ``     |
| event_config.probes                | Configure the enabled event collection probes.  |            |
| event_config.port                  | The GRPC server port of KubeSkoop exporter provides event streaming service.| 19102                              |
| metric_config.verbose              | Get more detailed monitoring metric labels, including the app label and IP address of the Pod. | `false`                            |
| metric_config.port                 |The port of the monitoring metric service that provides HTTP service.   | 9102                               |
| metric_config.probes               | Configure the enabled monitoring metric probes.   |           |
| metric_config.interval             | The caching period for collecting monitoring metrics, measured in seconds.   | 15                                 |

Reference information for the selectable probe configuration can be found at**[KubeSkoop exporter Introduction](exporter-description.md)**
