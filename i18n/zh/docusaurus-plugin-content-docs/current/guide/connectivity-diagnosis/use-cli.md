---
sidebar_position: 4
---

# 使用命令行诊断

KubeSkoop连通性诊断提供了通过命令行的运行方式，可以在本地发起对集群的诊断。

当诊断结束后，程序默认会将简单链路信息和诊断结果输出到标准输出。你可以通过指定`--http`或`--format`参数来使用Web UI浏览诊断结果，或将结果以指定的格式保存。

## 安装

你可以通过`go install`安装KubeSkoop连通性诊断工具。

```shell
go install github.com/alibaba/kubeskoop/cmd/skoop@main
```

安装完成后，可以通过输入`skoop --help`来确认是否安装成功。
:::tip
若在`go install`安装完成后仍无法执行`skoop`命令，请检查`PATH`环境变量中是否包含了`go install`安装的路径（一般为`$GOPATH/bin`或`$HOME/go/bin`）。
:::

你也可以使用Docker镜像，直接运行`skoop`诊断程序。

```shell
docker run --rm -it kubeskoop/kubeskoop:latest skoop --help
```

## 发起诊断

执行以下命令，发起从`172.18.0.4`到`10.96.0.10`，80端口，TCP协议（默认）的连通性诊断。

```shell
skoop -s 172.18.0.4 -d 10.96.0.10 -p 80
```

诊断完成后，本次诊断的链路以及发现的问题将会输出到屏幕上。

```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53
Packet path:
"default/netshoot-6bddd57fb7-49q9s" -> "node1" [label="type=veth,level=0,trans=service,oif=eth0,iif=cni0,src=172.18.0.4,dst=10.96.0.10,dport=53"]
"node1" -> "kube-system/coredns-547b98dbcc-dxmnl" [label="type=veth,level=1,trans=serve,oif=cni0,iif=eth0,src=172.18.0.4,dst=172.18.0.2,dport=53",arrowhead="dot"]
"node1" -> "node2" [label="type=infra,level=1,trans=forward,oif=eth0,iif=eth0,src=172.18.0.4,dst=172.18.0.69,dport=53"]
"node2" -> "kube-system/coredns-547b98dbcc-zr2zl" [label="type=veth,level=2,trans=serve,oif=cni0,iif=eth0,src=172.18.0.4,dst=172.18.0.69,dport=53",arrowhead="dot"]


Suspicions on node "kube-system/coredns-547b98dbcc-zr2zl"
[FATAL] no process listening on 0.0.0.0:80 or 172.18.0.69:80 protocol tcp
```

## 通过Web查看诊断结果

可以通过在诊断时加入`--http`参数来启用HTTP服务器，用于交互式地查看诊断结果。

当使用`--http`参数时，在诊断完成后，会在指定地址上启动HTTP服务器接受请求，你可以通过打开该地址来查看本次诊断的链路图以及最终结果。

```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080
```

服务器默认在`127.0.0.1:8080`上启动，你也可以通过`--http-address`参数指定地址。
:::tip
若您在Docker或远程服务器上运行诊断，您可能需要将`--http-address`设置为`0.0.0.0:8080`以便远程地址访问。以Docker为例：

```shell
docker run -p 8080:8080 -v ~/.kube:/root/.kube kubeskoop/kubeskoop:latest skoop -s 172.18.0.4 -d 10.96.0.10 -p 80 --http --http-address=0.0.0.0:8080
```

:::

通过浏览器打开`http://127.0.0.1:8080`后，可以看到诊断结果：

![diagnose_web](/img/doc/intro_diagnose_web.jpg)

## 输出格式

你可以通过`--format`参数来指定输出格式。
若没有指定任何格式，诊断结束后，默认将会在标准输出中输出简单链路信息和诊断结果。

当前支持`d2`、`svg`、`json`输出。

除此之外，你也可以使用`--output`来指定输出文件名（默认为result.d2/svg/json），可以指定为`-`表示输出到标准输出。

### d2

输出格式为`d2`。关于`d2`语法格式的更多说明，请见[文档](https://d2lang.com/tour/intro)。

该输出格式仅包含生成的链路信息，不携带诊断结果。

### svg

输出格式为`svg`，通过`d2`文件生成。

该输出格式仅包含生成的链路信息，不携带诊断结果。

### json

输出格式为`json`。`json`中包含链路图中的节点和边的详细信息，以及集群中的诊断结果。

## 指定云供应商

KubeSkoop支持在诊断时指定云供应商，以提供云上资源配置的校验。

通过`--cloud-provider`参数指定云供应商后。连通性诊断将会对云上资源配置进行校验，如VM安全组、路由表、NAT等。

支持的云供应商以及需要的额外参数，请参见[文档](../../reference/connectivity-diagnosis/cloud-providers.md)

## 更多命令行参数

你可以使用`--help`参数来查看其余参数和它们的用法，或见[文档](../../reference/connectivity-diagnosis/command-line-arguments.md)。
