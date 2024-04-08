---
sidebar_position: 3
---

# Command line arguments

The following command line arguments are provided by kubeskoop cli.

| Argument                                 | Description                                                                                                          |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `-p, --dport uint16`                     | Destination port for the network problem.                                                                            |
| `-d, --dst string`                       | Destination address for the network problem.                                                                         |
| `--protocol string`                      | Protocol for the network problem. (default `tcp`)                                                                    |
| `-s, --src string`                       | Source address for the network problem.                                                                              |
| `--cloud-provider string`                | Cloud provider of cluster. (default `generic`)                                                                       |
| `--cluster-cidr string`                  | Cluster pod CIDR. If not set, will try to detect it automatically.                                                   |
| `--kube-config string`                   | Cluster kubeconfig file. (default `~/.kube/config`)                                                                  |
| `--network-plugin string`                | Network plugin used in cluster. If not set, will try to auto detect it.                                              |
| `--proxy-mode string`                    | Proxy mode for kube-proxy. If not set, will try to detect it automatically.                                          |
| `--format string`                        | Output format of diagnose result, support d2/svg/json. If not set, only print simple path info on console.          |
| `--http`                                 | Enable an http server to show diagnose result.                                                                       |
| `--http-address string`                  | Listen address for http server. (default `127.0.0.1:8080`)                                                           |
| `--output string`                        | Output file name, default is output.d2/svg/json in current work directory.                                          |
| `--aliyun-access-key-id string`          | Aliyun access key.                                                                                                   |
| `--aliyun-access-key-secret string`      | Aliyun access secret.                                                                                                |
| `--aliyun-security-token string`         | Aliyun security token (optional).                                                                                    |
| `--collector-image string`               | Image used for collector. (default `kubeskoop/kubeskoop:<version>`)                                                  |
| `--collector-namespace string`           | Namespace where collector pods in. (default `skoop`)                                                                 |
| `--collector-pod-wait-interval duration` | Collector pod running check interval. (default 2s)                                                                   |
| `--collector-pod-wait-timeout duration`  | Collector pod running check timeout. (default 2m0s)                                                                  |
| `--calico-host-interface string`         | Host interface for calico plugin. (default `eth0`)                                                                   |
| `--calico-ipip-pod-mtu int`              | Pod MTU for calico plugin. Pod interface MTU in IPIP mode. (default 1480)                                            |
| `--calico-pod-mtu int`                   | Pod MTU for calico plugin. Pod interface MTU in BGP mode. (default 1500)                                             |
| `--flannel-backend-type string`          | Backend type for flannel plugin, support host-gw,vxlan,alloc. If not set, it will auto detect from flannel config.   |
| `--flannel-bridge string`                | Bridge name for flannel plugin. (default `cni0`)                                                                     |
| `--flannel-host-interface string`        | Host interface for flannel plugin. (default `eth0`)                                                                  |
| `--flannel-ip-masq`                      | Should do IP masquerade for flannel plugin. (default true)                                                           |
| `--flannel-pod-mtu int`                  | Pod MTU for flannel plugin. If not set, it will auto detect from flannel cni mode (1450 for vxlan, 1500 for others). |
