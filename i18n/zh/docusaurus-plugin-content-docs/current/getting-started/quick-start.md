---
sidebar_position: 1
---

# 快速上手

你可以通过[skoopbundle.yaml](deploy/skoopbundle.yaml)文件快速部署KubeSkoop、Prometheus、Grafana和Loki至你的集群。并通过Web控制台使用KubeSkoop的功能。

```bash
kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml
```

:::tip
`skoopbundle.yaml`以最小副本和默认配置启动，不适用于生产环境。在生产环境中安装KubeSkoop，请参考[安装](installation.md)。
:::

在安装完成并启动后，你可以通过`webconsole`服务来访问KubeSkoop Web控制台。

```bash
kubectl get svc -n kubeskoop webconsole
```

你可能需要将`webconsole`服务更改为`NodePort` 或`LoadBalancer`类型，以便从集群外访问。

控制台的默认用户为`admin`，密码为`kubeskoop`。

![Web Console](/img/web_console.jpg)

恭喜！你已经成功安装了KubeSkoop。关于控制台的更多功能，请见[Web控制台](../guide/web-console.md)。
