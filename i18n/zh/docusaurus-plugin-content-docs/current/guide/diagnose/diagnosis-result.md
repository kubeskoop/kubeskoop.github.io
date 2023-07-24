---
sidebar_position: 4
---

# 展示/保存诊断结果

KubeSkoop连通性诊断支持多种诊断结果输出格式，同时也提供了Web UI来交互式查看诊断结果。

当诊断结束后，程序默认会将简单链路信息和诊断结果输出到标准输出。你可以通过指定`--http`或`--format`参数来使用Web UI浏览诊断结果，或将结果以指定的格式保存。

# Web UI

Web UI可用于交互式地查看诊断结果，可以通过在诊断时加入`--http`参数来启用Web UI。在诊断完成后，会在指定地址上启动HTTP服务器接受请求。可以通过`--http-address`参数指定地址，默认为`127.0.0.1:8080`。

```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # 执行诊断命令，指定来源目的，通过--http来让诊断结果通过本地web服务提供
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # 诊断完成会输出诊断结果链接
```

通过浏览器打开`http://127.0.0.1:8080`后，可以看到诊断结果：

![diagnose_web](/img/doc/intro_diagnose_web.jpg)


## 输出格式

当前支持`d2`、`svg`、`json`输出格式，在诊断时加入`--format`参数指定使用哪种格式输出结果。使用`--output`来指定输出文件名，可以指定为`-`表示输出到标准输出。

若没有指定任何格式，诊断结束后，将会在标准输出中输出简单链路信息和诊断结果。

### d2

输出格式为`d2`。关于`d2`语法格式的更多说明，请见[文档](https://d2lang.com/tour/intro)。

该输出格式仅包含生成的链路信息，不携带诊断结果。

### svg

输出格式为`svg`，通过`d2`文件生成。

该输出格式仅包含生成的链路信息，不携带诊断结果。

### json

输出格式为`json`。`json`中包含链路图中的节点和边的详细信息，以及节点上的诊断结果。
