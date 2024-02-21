---
sidebar_position: 1
---

# Quick Start

You can quickly deploy KubeSkoop, Prometheus, Grafana and Loki to your cluster via [skoopbundle.yaml](deploy/skoopbundle.yaml).

```bash
kubectl apply -f https://raw.githubusercontent.com/alibaba/kubeskoop/main/deploy/skoopbundle.yaml
```

:::tip
`skoopbundle.yaml` starts with the minimum number of replicas and default configurations, which is not suitable for production environments.
:::

When installation is done, you can access the KubeSkoop Web Console by service `webconsole`.

```bash
kubectl get svc -n kubeskoop webconsole
```

You may need a `Nodeport` or `LoadBalancer` to acess from outside of the cluster.

Default username is `admin`, and password is `kubeskoop`.

![Web Console](/img/web_console.jpg)

Congratulations! You have successfully installed KubeSkoop. For more features of the console, see [Web Console](../guide/web-console.md).
