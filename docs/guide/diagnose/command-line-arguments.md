---
sidebar_position: 99
---

# Command line arguments

The following command line arguments are provided by kubeskoop cli.

| Argument                        | Description                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `-s, --src`                     | source address for the network problem                                                             |
| `-d, --dst`                     | destination address for the network problem                                                        |
| `-p, --dport`                   | destination port for the network problem                                                           |
| `--protocol`                    | protocol for the network problem (default `tcp`)                                                   |
| `--cloud-provider`              | cloud provider of cluster (default `generic`)                                                      |
| `--collector-image`             | image used for collector. (default `registry.cn-hangzhou.aliyuncs.com/kubeskoop/kubeskoop:<version>`) |
| `--collector-namespace`         | namespace where collector pods in. (default `kubeskoop`)                                           |
| `--collector-pod-wait-interval` | pod running check interval (default 2s)                                                            |
| `--collector-pod-wait-timeout`  | pod running check timeout (default 2m0s)                                                           |
| `--format`                      | graph output format, support dot/svg. If not set, only print simple path info on console.          |
| `--output`                      | output file name, default is output.dot/svg in current work directory.                             |
| `--kube-config`                 | cluster kubeconfig file (default `~/.kube/config`)                                                 |
| `--http`                        | enable an http server to show diagnose result.                                                     |
| `--http-address`                | listen address for http server. (default `127.0.0.1:8080`)                                         |
| `--aliyun-access-key-id`        | access key for aliyun provider                                                                     |
| `--aliyun-access-key-secret`    | access secret for aliyun provider                                                                  |
| `--aliyun-security-token`       | security token for aliyun provider                                                                 |
