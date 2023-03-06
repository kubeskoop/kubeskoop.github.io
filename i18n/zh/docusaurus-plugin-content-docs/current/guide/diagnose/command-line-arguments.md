---
sidebar_position: 99
---

# 命令行参数

`kubeskoop`命令目前提供以下命令行参数。

| 参数                                       | 说明                                                                                |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| `-p, --dport uint16`                     | 网络诊断的端口                                                                           |
| `-d, --dst string`                       | 网络诊断的目的地址                                                                         |
| `--protocol string`                      | 网络诊断的协议（默认`tcp`）                                                                  |
| `-s, --src string`                       | 网络诊断的源地址                                                                          |
| `--cloud-provider string`                | 云厂商名称（默认`generic`）                                                                |
| `--cluster-cidr string`                  | 集群Pod CIDR。若没有指定，将会尝试自动探测。                                                        |
| `--kube-config string`                   | 集群kubeconfig路径（默认`~/.kube/config`）                                                |
| `--network-plugin string`                | 集群网络插件。若没有指定，将会尝试自动探测                                                             |
| `--proxy-mode string`                    | kube-proxy模式。若没有指定，将会尝试自动探测                                                       |
| `--format string`                        | 结果输出格式，支持dot/svg/json。若没有指定，只会在控制台打印简单链路信息                                        |
| `--http`                                 | 启动HTTP服务器来展示诊断结果                                                                  |
| `--http-address string`                  | HTTP服务器监听地址（默认`127.0.0.1:8080`）                                                   |
| `--output string`                        | 输出结果保存文件路径，默认为当前目录下的output.dot/svg/json                                           |
| `--aliyun-access-key-id string`          | 阿里云access key                                                                     |
| `--aliyun-access-key-secret string`      | 阿里云access secret                                                                  |
| `--aliyun-security-token string`         | 阿里云security token（可选）                                                             |
| `--collector-image string`               | collector所使用的镜像地址（默认`registry.cn-hangzhou.aliyuncs.com/kubeskoop/kubeskoop:<版本>`） |
| `--collector-namespace string`           | collector pod所在命名空间 （默认`skoop`）                                                   |
| `--collector-pod-wait-interval duration` | collector pod运行检测时间间隔（默认2s）                                                       |
| `--collector-pod-wait-timeout duration`  | collector pod运行检测超时时间（默认2m0s）                                                     |
| `--calico-host-interface string`         | Calico插件所使用的主机网络接口（默认`eth0`）                                                      |
| `--calico-ipip-pod-mtu int`              | Calico插件所使用的Pod MTU，IPIP模式（默认1480）                                                |
| `--calico-pod-mtu int`                   | Calico插件所使用的Pod MTU，BGP模式（默认1500）                                                 |
| `--flannel-backend-type string`          | Flannel插件的模式，支持host-gw,vxlan,alloc。若没有指定，将会尝试从Flannel配置中自动探测                      |
| `--flannel-bridge string`                | Flannel插件的bridge设备名称（默认`cni0`）                                                    |
| `--flannel-host-interface string`        | Flannel插件所使用的主机网络接口（默认`eth0`）                                                     |
| `--flannel-ip-masq`                      | Flannel插件，是否进行IP masquerade（默认true）                                               |
| `--flannel-pod-mtu int`                  | Flannel插件所使用的Pod MTU。若没有指定，将会根据模式自动设定（vxlan默认1450, 其它模式1500）                      |
