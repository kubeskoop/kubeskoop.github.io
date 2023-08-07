# Running KubeSkoop exporter in sidecar mode

For some reasons, you may want to only collect metrics from a certain subset of pods in the cluster, or when using secure containers such as [Kata Container](https://katacontainers.io/), which is not possible to directly collect pod metrics on node.

In these cases, you can enable **sidecar mode** for KubeSkoop exporter. You need to:

- Add exporter to target pod as a sidecar container.
- Add `--sidecar` flag to command.
- Pass Pod and Node information via environment variables.

By adding `--sidecar` to command flags, you can run KubeSkoop exporter in sidecar mode, which will only collect network info in current namespace.

In this case, KubeSkoop exporter will fetch metric labels(pod name/namespace, node name) from environment variables. You should pass the correct values to them via [Downward API](https://kubernetes.io/docs/concepts/workloads/pods/downward-api/).

| Environment Variable Name | Description |
| ---  | ----------- |
| INSPECTOR_NODENAME |  Node name |
| INSPECTOR_PODNAME | Pod name |
| INSPECTOR_PODNAMESPACE | Pod namespace |

## Example

This example shows how to run an nginx deployment with KubeSkoop exporter sidecar.

Save the yaml manifests below and apply to your Kubernetes cluster.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-with-exporter
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx-with-exporter
  template:
    metadata:
      labels:
        app: nginx-with-exporter
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
      # add KubeSkoop exporter sidecar container
      - name: exporter
        image: kubeskoop/kubeskoop:latest
        imagePullPolicy: Always
        command:
          - /bin/inspector
          - server
          # enable sidecar mode
          - --sidecar
        volumeMounts:
          - name: config-volume
            mountPath: /etc/config
        env:
          # set node name, pod name/namespace from env
          - name: INSPECTOR_NODENAME
            valueFrom:
              fieldRef:
                apiVersion: v1
                fieldPath: spec.nodeName
          - name: INSPECTOR_PODNAME
            valueFrom:
              fieldRef:
                apiVersion: v1
                fieldPath: metadata.name
          - name: INSPECTOR_PODNAMESPACE
            valueFrom:
              fieldRef:
                apiVersion: v1
                fieldPath: metadata.namespace
        ports:
        - containerPort: 9012
      volumes:
        - configMap:
            defaultMode: 420
            name: kubeskoop-config
          name: config-volume
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: kubeskoop-config
data:
  config.yaml: |-
    debugmode: true
    metric_config:
      interval: 15
      port: 9102
      probes:
      - netdev
      - io
      - sock
      - tcpsummary
      - tcp
      - tcpext
      - udp
    event_config:
      port: 19102
      loki_enable: false
      loki_address: loki-service
```

This will create a Deployment `nginx-with-exporter` in your `default` namespace, along with ConfigMap `kubeskoop-config`.

When pod started, you can get metrics from pod via `kubectl`.

```shell
kubectl get --raw /api/v1/namespaces/default/pods/{{kubeskoop-exporter pod name}}:9102/proxy/metrics
```

The output should be like:

```plaintext
# HELP inspector_pod_ioioreadbytes io ioioreadbytes count in netns/pod
# TYPE inspector_pod_ioioreadbytes gauge
inspector_pod_ioioreadbytes{namespace="default",node="node1",pod="nginx-with-exporter-66fb94cbfc-4bxf5",target_namespace="default",target_node="node1",target_pod="nginx-with-exporter-66fb94cbfc-4bxf5"} 4096
# HELP inspector_pod_ioioreadsyscall io ioioreadsyscall count in netns/pod
# TYPE inspector_pod_ioioreadsyscall gauge
inspector_pod_ioioreadsyscall{namespace="default",node="node1",pod="nginx-with-exporter-66fb94cbfc-4bxf5",target_namespace="default",target_node="node1",target_pod="nginx-with-exporter-66fb94cbfc-4bxf5"} 3765
# HELP inspector_pod_ioiowritebytes io ioiowritebytes count in netns/pod
# TYPE inspector_pod_ioiowritebytes gauge
inspector_pod_ioiowritebytes{namespace="default",node="node1",pod="nginx-with-exporter-66fb94cbfc-4bxf5",target_namespace="default",target_node="node1",target_pod="nginx-with-exporter-66fb94cbfc-4bxf5"} 4096
# HELP inspector_pod_ioiowritesyscall io ioiowritesyscall count in netns/pod
# TYPE inspector_pod_ioiowritesyscall gauge
inspector_pod_ioiowritesyscall{namespace="default",node="node1",pod="nginx-with-exporter-66fb94cbfc-4bxf5",target_namespace="default",target_node="node1",target_pod="nginx-with-exporter-66fb94cbfc-4bxf5"} 26578
# HELP inspector_pod_netdevrxbytes netdev netdevrxbytes count in netns/pod
# TYPE inspector_pod_netdevrxbytes gauge
inspector_pod_netdevrxbytes{namespace="default",node="node1",pod="nginx-with-exporter-66fb94cbfc-4bxf5",target_namespace="default",target_node="node1",target_pod="nginx-with-exporter-66fb94cbfc-4bxf5"} 2139
# HELP inspector_pod_netdevrxdropped netdev netdevrxdropped count in netns/pod
# TYPE inspector_pod_netdevrxdropped gauge
inspector_pod_netdevrxdropped{namespace="default",node="node1",pod="nginx-with-exporter-66fb94cbfc-4bxf5",target_namespace="default",target_node="node1",target_pod="nginx-with-exporter-66fb94cbfc-4bxf5"} 0
# ...and more
```

## Limitations

For now, probes base on eBPF are not supported in sidecar mode.
