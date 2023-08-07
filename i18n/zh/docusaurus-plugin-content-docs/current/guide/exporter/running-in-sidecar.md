# 使用sidecar模式运行KubeSkoop exporter

出于需要，你可能只想监控集群中某一部分Pod的网络指标。并且在使用像[Kata Container](https://katacontainers.io/)等安全容器时，在节点上无法直接采集到pod中的指标。

这种情况下，你可以开启KubeSkoop exporter的**sidecar模式**，你需要：

- 将exporter放入目标Pod中，作为一个sidecar容器运行。
- 在启动命令中添加`--sidecar`参数。
- 在环境变量中传入Pod和Node的相关信息。

可以在启动命令中添加`--sidecar`参数来让KubeSkoop exporter使用sidecar模式运行。在这个模式下，只会采集当前命名空间下的网络指标。

在sidecar模式下，KubeSkoop exporter会从环境变量中获得metric所使用的标签（Pod名称/命名空间，Node名称）。你需要通过[Downward API](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/downward-api/)将正确的值传入环境变量中。

| 环境变量名称 | 说明 |
| ---  | ----------- |
| INSPECTOR_NODENAME |  Node名称 |
| INSPECTOR_PODNAME | Pod名称 |
| INSPECTOR_PODNAMESPACE | Pod命名空间 |

## 示例

接下来的示例会演示如何在一个nginx deployment中运行KubeSkoop exporter的sidecar容器。

保存以下yaml文件，并将其apply到你的Kubernetes集群中。

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

这个文件将会在`default`命名空间下创建名为`nginx-with-exporter`的Deployment，以及ConfigMap`kubeskoop-config`用于配置。

当Pod启动后，你便可以通过`kubectl`来获得Pod中的metrics。

```shell
kubectl get --raw /api/v1/namespaces/default/pods/{{kubeskoop-exporter pod name}}:9102/proxy/metrics
```

示例输出如下：

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

## 限制

当前sidecar模式暂不支持基于eBPF的探针。
