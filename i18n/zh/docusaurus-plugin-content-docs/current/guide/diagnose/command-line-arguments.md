---
sidebar_position: 99
---

# 命令行参数

`kubeskoop`命令目前提供以下命令行参数。

| 参数 | 说明 |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| `-s, --src`                     | 网络诊断的源地址                                                                            |
| `-d, --dst`                     | 网络诊断的目的地址                                                                           |
| `-p, --dport`                   | 网络诊断的端口                                                                             |
| `--protocol`                    | 网络诊断的协议(默认`tcp`)                                                                    |
| `--cloud-provider`              | 云厂商(默认`generic`)                                                                    |
| `--collector-image`             | collector所使用的镜像地址(默认`registry.cn-hangzhou.aliyuncs.com/kubeskoop/kubeskoop:<版本>`) |
| `--collector-namespace`         | collector pod所使用的命名空间 (默认`kubeskoop`)                                               |
| `--collector-pod-wait-interval` | collector pod运行检测时间间隔(默认2s)                                                         |
| `--collector-pod-wait-timeout`  | collector pod运行检测超时时间(默认2m0s)                                                       |
| `--format`                      | 结果输出格式，目前支持dot/svg。若没有指定，只会在控制台打印简单链路信息。                                            |
| `--output`                      | 输出结果文件格式，默认为当前目录下的output.dot/svg。                                                   |
| `--kube-config`                 | 集群kubeconfig文件名(默认`~/.kube/config`)                                                 |
| `--http`                        | 启动HTTP服务器来展示诊断结果                                                                    |
| `--http-address`                | HTTP服务器监听地址(默认`127.0.0.1:8080`)                                                     |
| `--aliyun-access-key-id`        | 阿里云access key                                                                       |
| `--aliyun-access-key-secret`    | 阿里云access secret                                                                    |
| `--aliyun-security-token`       | (可选)阿里云security token                                                                   |
