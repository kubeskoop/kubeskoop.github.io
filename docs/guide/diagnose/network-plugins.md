---
sidebar_position: 2
---

# Network Plugins

The following network plugins are implemented by KubeSkoop connectivity diagnose.


## Flannel

Type `host-gw` and `vxlan` are supported for Flannel cluster, and will auto detect which type should be used in diagnose.

## Calico

`BGP` and `IPIP` mode are supported for Flannel cluster, and will auto detect which type should be used in diagnose.

Note: **Calico API Server** should be installed in cluster to run connectivity diagnoses. For more information please see [Calico documentation](https://projectcalico.docs.tigera.io/maintenance/install-apiserver).