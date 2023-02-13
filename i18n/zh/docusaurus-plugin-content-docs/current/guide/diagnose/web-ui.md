---
sidebar_position: 5
---

# Web UI

使用Web UI交互式查看诊断结果。

KubeSkoop连通性诊断提供了Web UI，交互式地查看诊断结果。在诊断时加入`--http`参数，启用Web UI。在诊断完成后，会在指定地址上启动HTTP服务器接受请求。可以通过`--http-address`参数指定地址，默认为`127.0.0.1:8080`。

```shell
$ kubeskoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # 执行诊断命令，指定来源目的，通过--http来让诊断结果通过本地web服务提供
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # 诊断完成会输出诊断结果链接
```

通过浏览器打开`http://127.0.0.1:8080`后，可以看到诊断结果：

![diagnose_web](/img/doc/intro_diagnose_web.jpg)
