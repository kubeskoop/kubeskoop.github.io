# 探针，指标和事件

本篇文档将会介绍KubeSkoop所支持的探针，以及它们的指标和事件。

## 探针

以下是KubeSkoop所支持的探针。

| 探针名称       | 说明                     | 探针类型  | 数据源  | 开销 |
|----------------|------------------------|---------|---------|-----|
| virtcmdlatency | virtio设备延迟追踪       | 指标、事件 | eBPF    | 高   |
| udp            | UDP统计                  | 指标      | profcs  | 低   |
| tcpsummary     | TCP队列和连接状态统计    | 指标      | procfs  | 中   |
| tcpreset       | TCP reset追踪            | 事件      | eBPF    | 低   |
| tcpext         | TCPExt统计               | 指标      | procfs  | 低   |
| tcp            | snmp中的TCP统计          | 指标      | profcs  | 低   |
| softnet        | 网络设备发包和丢包数统计 | 指标      | procfs  | 低   |
| socketlatency  | socket延迟追踪           | 指标、事件 | eBPF    | 高   |
| sock           | socket统计               | 指标      | procfs  | 低   |
| qdisc          | tc qdisc统计             | 指标      | netlink | 低   |
| flow           | 连接流量统计             | 指标      | eBPF    | 中   |
| packetloss     | 丢包事件追踪             | 指标、事件 | eBPF    | 中   |
| netiftxlatency | 发包网络延迟跟踪         | 指标、事件 | eBPF    | 高   |
| netdev         | 网络设备统计             | 指标      | procfs  | 低   |
| net_softirq    | 软中断延迟追踪           | 指标、事件 | eBPF    | 高   |
| kernellatency  | 内核延迟跟踪             | 指标、事件 | eBPF    | 高   |
| ipvs           | IPVS统计                 | 指标      | procfs  | 低   |
| ip             | IP统计                   | 指标      | profcs  | 低   |
| io             | 进程IO统计               | 指标      | procfs  | 低   |
| fd             | 文件与socket描述符统计   | 指标      | procfs  | 中   |
| conntrack      | conntrack统计            | 指标      | netlink | 低   |
| biolatency     | Block IO延迟跟踪         | 事件      | eBPF    | 中   |
| tcpretrans     | TCP包重传追踪            | 指标、事件 | eBPF    | 低   |


## 指标

### 标签

在所有的指标上都存在以下标签。

| 标签名称      | 说明                      |
|---------------|-------------------------|
| k8s_namespace | Pod命名空间，或hostNetwork |
| k8s_pod       | Pod名称，或hostNetwork     |
| k8s_node      | Node名称                  |

### 指标列表

| 指标名称                                  | 探针名称       | 说明                                                  |
|-------------------------------------------|----------------|-----------------------------------------------------|
| kubeskoop_conntrack_found                 | conntrack      | conntrack统计计数"found"                              |
| kubeskoop_conntrack_invalid               | conntrack      | conntrack统计计数"invalid"                            |
| kubeskoop_conntrack_ignore                | conntrack      | conntrack统计计数"ignore"                             |
| kubeskoop_conntrack_insert                | conntrack      | conntrack统计计数"insert"                             |
| kubeskoop_conntrack_insertfailed          | conntrack      | conntrack统计计数"insert_failed"                      |
| kubeskoop_conntrack_drop                  | conntrack      | conntrack统计计数"drop"                               |
| kubeskoop_conntrack_earlydrop             | conntrack      | conntrack统计计数"early_drop"                         |
| kubeskoop_conntrack_error                 | conntrack      | conntrack统计计数"error"                              |
| kubeskoop_conntrack_searchrestart         | conntrack      | conntrack统计计数"search_restart"                     |
| kubeskoop_conntrack_entries               | conntrack      | conntrack全局计数"entries"                            |
| kubeskoop_conntrack_maxentries            | conntrack      | conntrack全局计数"max_entries"                        |
| kubeskoop_qdisc_bytes                     | qdisc          | tc qdisc统计计数"bytes"                               |
| kubeskoop_qdisc_packets                   | qdisc          | tc qdisc统计计数"packets"                             |
| kubeskoop_qdisc_drops                     | qdisc          | tc qdisc统计计数"drops"                               |
| kubeskoop_qdisc_qlen                      | qdisc          | tc qdisc统计计数"qlen"                                |
| kubeskoop_qdisc_backlog                   | qdisc          | tc qdisc统计计数"backlog"                             |
| kubeskoop_qdisc_overlimits                | qdisc          | tc qdisc统计计数"overlimits"                          |
| kubeskoop_fdopenfd                        | fd             | pod中打开fd数                                         |
| kubeskoop_fd_opensocket                   | fd             | pod中打开socket数                                     |
| kubeskoop_io_ioreadsyscall                | io             | pod中读系统调用数                                     |
| kubeskoop_io_iowritesyscall               | io             | pod中写系统调用数                                     |
| kubeskoop_io_ioreadbytes                  | io             | pod中读字节数                                         |
| kubeskoop_io_iowritebytes                 | io             | pod中写字节数                                         |
| kubeskoop_ipvs_connections                | ipvs           | pod中IPVS连接数                                       |
| kubeskoop_ipvs_incomingpackets            | ipvs           | pod中IPVS入数据包数                                   |
| kubeskoop_ipvs_outgoingbytes              | ipvs           | pod中IPVS出数据包数                                   |
| kubeskoop_ipvs_incomingbytes              | ipvs           | pod中IPVS入字节数                                     |
| kubeskoop_ipvs_outgoingpackets            | ipvs           | pod中IPVS出字节数                                     |
| kubeskoop_netdev_rxbytes                  | netdev         | pod中所有网络设备的接收字节数                         |
| kubeskoop_netdev_rxerrors                 | netdev         | pod中所有网络设备的接收错误数                         |
| kubeskoop_netdev_txbytes                  | netdev         | pod中所有网络设备的发送字节数                         |
| kubeskoop_netdev_txerrors                 | netdev         | pod中所有网络设备的发送错误数                         |
| kubeskoop_netdev_rxpackets                | netdev         | pod中所有网络设备的接收数据包数                       |
| kubeskoop_netdev_rxdropped                | netdev         | pod中所有网络设备的接收丢弃数据包数                   |
| kubeskoop_netdev_txpackets                | netdev         | pod中所有网络设备的发送数据包数                       |
| kubeskoop_netdev_txdropped                | netdev         | pod中所有网络设备的发送丢弃数据包数                   |
| kubeskoop_tcpext_listendrops              | tcpext         | TCPExt中的ListenDrops                                 |
| kubeskoop_tcpext_listenoverflows          | tcpext         | TCPExt中的ListenOverflow                              |
| kubeskoop_tcpext_tcpsynretrans            | tcpext         | TCPExt中的TCPSynRetrans                               |
| kubeskoop_tcpext_tcpfastretrans           | tcpext         | TCPExt中的TCPFastRetrans                              |
| kubeskoop_tcpext_tcpretransfail           | tcpext         | TCPExt中的TCPRetransFail                              |
| kubeskoop_tcpext_tcptimeouts              | tcpext         | TCPExt中的TCPTimeouts                                 |
| kubeskoop_tcpext_tcpabortonclose          | tcpext         | TCPExt中的TCPAbortOnClose                             |
| kubeskoop_tcpext_tcpabortonmemory         | tcpext         | TCPExt中的TCPAbortOnMemory                            |
| kubeskoop_tcpext_tcpabortontimeout        | tcpext         | TCPExt中的TCPAbortOnTimeout                           |
| kubeskoop_tcpext_tcpabortonlinger         | tcpext         | TCPExt中的TCPAbortOnLinger                            |
| kubeskoop_tcpext_tcpabortondata           | tcpext         | TCPExt中的TCPAbortOnData                              |
| kubeskoop_tcpext_tcpabortfailed           | tcpext         | TCPExt中的TCPAbortFailed                              |
| kubeskoop_tcpext_tcpackskippedsynrecv     | tcpext         | TCPExt中的TCPACKSkippedSynRecv                        |
| kubeskoop_tcpext_tcpackskippedpaws        | tcpext         | TCPExt中的TCPACKSkippedPAWS                           |
| kubeskoop_tcpext_tcpackskippedseq         | tcpext         | TCPExt中的TCPACKSkippedSeq                            |
| kubeskoop_tcpext_tcpackskippedfinwait2    | tcpext         | TCPExt中的TCPACKSkippedFinWait2                       |
| kubeskoop_tcpext_tcpackskippedtimewait    | tcpext         | TCPExt中的TCPACKSkippedTimeWait                       |
| kubeskoop_tcpext_tcpackskippedchallenge   | tcpext         | TCPExt中的TCPACKSkippedChallenge                      |
| kubeskoop_tcpext_tcprcvqdrop              | tcpext         | TCPExt中的TCPRcvQDrop                                 |
| kubeskoop_tcpext_tcpmemorypressures       | tcpext         | TCPExt中的TCPMemoryPressures                          |
| kubeskoop_tcpext_tcpmemorypressureschrono | tcpext         | TCPExt中的TCPMemoryPressuresChrono                    |
| kubeskoop_tcpext_pawsactive               | tcpext         | TCPExt中的PAWSActive                                  |
| kubeskoop_tcpext_pawsestab                | tcpext         | TCPExt中的PAWSEstab                                   |
| kubeskoop_tcpext_embryonicrsts            | tcpext         | TCPExt中的EmbryonicRsts                               |
| kubeskoop_tcpext_tcpwinprobe              | tcpext         | TCPExt中的TCPWinProbe                                 |
| kubeskoop_tcpext_tcpkeepalive             | tcpext         | TCPExt中的TCPKeepAlive                                |
| kubeskoop_tcpext_tcpmtupfail              | tcpext         | TCPExt中的TCPMTUPFail                                 |
| kubeskoop_tcpext_tcpmtupsuccess           | tcpext         | TCPExt中的TCPMTUPSuccess                              |
| kubeskoop_tcpext_tcpzerowindowdrop        | tcpext         | TCPExt中的TCPZeroWindowDrop                           |
| kubeskoop_tcpext_tcpbacklogdrop           | tcpext         | TCPExt中的TCPBacklogDrop                              |
| kubeskoop_tcpext_pfmemallocdrop           | tcpext         | TCPExt中的PFMemallocDrop                              |
| kubeskoop_tcpext_tcpwqueuetoobig          | tcpext         | TCPExt中的TCPWqueueTooBig                             |
| kubeskoop_tcp_activeopens                 | tcp            | TCP中的ActiveOpens                                    |
| kubeskoop_tcp_passiveopens                | tcp            | TCP中的PassiveOpens                                   |
| kubeskoop_tcp_retranssegs                 | tcp            | TCP中的RetransSegs                                    |
| kubeskoop_tcp_attemptfails                | tcp            | TCP中的AttemptFails                                   |
| kubeskoop_tcp_estabresets                 | tcp            | TCP中的EstabResets                                    |
| kubeskoop_tcp_currestab                   | tcp            | TCP中的CurrEstab                                      |
| kubeskoop_tcp_insegs                      | tcp            | TCP中的InSegs                                         |
| kubeskoop_tcp_outsegs                     | tcp            | TCP中的OutSegs                                        |
| kubeskoop_tcp_inerrs                      | tcp            | TCP中的InErrs                                         |
| kubeskoop_tcp_outrsts                     | tcp            | TCP中的OutRsts                                        |
| kubeskoop_udp_indatagrams                 | udp            | UDP中的InDatagrams                                    |
| kubeskoop_udp_noports                     | udp            | UDP中的NoPorts                                        |
| kubeskoop_udp_inerrors                    | udp            | UDP中的InErrors                                       |
| kubeskoop_udp_outdatagrams                | udp            | UDP中的OutDatagrams                                   |
| kubeskoop_udp_rcvbuferrors                | udp            | UDP中的RcvbufErrors                                   |
| kubeskoop_udp_sndbuferrors                | udp            | UDP中的SndbufErrors                                   |
| kubeskoop_udp_incsumerrors                | udp            | UDP中的InCsumErrors                                   |
| kubeskoop_udp_ignoredmulti                | udp            | UDP中的IgnoredMulti                                   |
| kubeskoop_ip_innoroutes                   | ip             | IP中的InNoRoutes                                      |
| kubeskoop_ip_intruncatedpkts              | ip             | IP中的InTruncatedPkts                                 |
| kubeskoop_sock_inuse                      | sock           | sock中的Inuse                                         |
| kubeskoop_sock_orphan                     | sock           | sock中的Orphan                                        |
| kubeskoop_sock_tw                         | sock           | sock中的TW                                            |
| kubeskoop_sock_alloc                      | sock           | sock中的Alloc                                         |
| kubeskoop_sock_mem                        | sock           | sock中的Mem                                           |
| kubeskoop_softnet_processed               | softnet        | softnet中的Processed                                  |
| kubeskoop_softnet_dropped                 | softnet        | softnet中的Dropped                                    |
| kubeskoop_tcpsummary_tcpestablishedconn   | tcpsummary     | ESTABLISHED状态连接数                                 |
| kubeskoop_tcpsummary_tcptimewaitconn      | tcpsummary     | TIME_WAIT状态连接数                                   |
| kubeskoop_tcpsummary_tcptxqueue           | tcpsummary     | 所有TCP连接的tx队列长度                               |
| kubeskoop_tcpsummary_tcprxqueue           | tcpsummary     | 所有TCP连接的rx队列长度                               |
| kubeskoop_netiftxlat_qdiscslow100ms       | netiftxlatency | qdisc传输延迟超过100ms                                |
| kubeskoop_netiftxlat_netdevslow100ms      | netiftxlatency | netdev传输延迟超过100ms                               |
| kubeskoop_kernellatency_rxslow            | kernellatency  | 内核收包慢                                            |
| kubeskoop_kernellatency_rxslow100ms       | kernellatency  | 内核收包延迟超过100ms                                 |
| kubeskoop_kernellatency_txslow            | kernellatency  | 内核发包慢                                            |
| kubeskoop_kernellatency_txslow100ms       | kernellatency  | 内核发包延迟超过100ms                                 |
| kubeskoop_packetloss_tcphandle            | packetloss     | 在`tcp_v4_do_rcv()`中的丢包数                         |
| kubeskoop_packetloss_tcprcv               | packetloss     | 在`tcp_rcv()`中的丢包数                               |
| kubeskoop_packetloss_abnormal             | packetloss     | 在其它函数中的丢包数                                  |
| kubeskoop_packetloss_total                | packetloss     | 丢包总数                                              |
| kubeskoop_packetloss_netfilter            | packetloss     | 在`nf_hook_slow()`中的丢包数                          |
| kubeskoop_packetloss_tcpstatm             | packetloss     | 在`tcp_rcv_state_process()`中的丢包数                 |
| kubeskoop_socketlatency_read100ms         | socketlatency  | Socket读延迟超过100ms                                 |
| kubeskoop_socketlatency_read1ms           | socketlatency  | Socket读延迟超过1ms                                   |
| kubeskoop_socketlatency_write100ms        | socketlatency  | Socket写延迟超过100ms                                 |
| kubeskoop_socketlatency_write1ms          | socketlatency  | Socket写延迟超过1ms                                   |
| kubeskoop_virtcmdlatency_latency100ms     | virtcmdlatency | Virtio发送命令延迟超过100ms                           |
| kubeskoop_virtcmdlatency_latency          | virtcmdlatency | Virtio发送命令慢                                      |
| kubeskoop_softirq_schedslow               | net_softirq    | Softirq调度慢(从`softirq_raise()`到`softirq_entry()`) |
| kubeskoop_softirq_schedslow100ms          | net_softirq    | Softirq调度延迟超过100ms                              |
| kubeskoop_softirq_excuteslow              | net_softirq    | Softirq执行慢(从`softirq_entry()`到`softirq_exit()`)  |
| kubeskoop_softirq_excuteslow100ms         | net_softirq    | Softirq执行延迟超过100ms                              |
| kubeskoop_flow_bytes                      | flow           | 连接发送字节数                                        |
| kubeskoop_flow_packets                    | flow           | 连接发送包数                                          |

## 事件

### 事件列表

以下是KubeSkoop所支持的事件。

| 事件名称                | 探针名称    | 描述                                                    | 事件内容                                              |
|-------------------------|-------------|-------------------------------------------------------|-----------------------------------------------------|
| TXLAT_QDISC_100MS       | netiftx延迟 | qdisc传输延迟超过100ms                                  | 5元组(协议、源地址&端口、目的地址&端口), 延迟           |
| TXLAT_NETDEV_100MS      | netiftx延迟 | netdev传输延迟超过100ms                                 | 5元组(协议、源地址&端口、目的地址&端口), 延迟           |
| BIOLAT_10MS             | bio延迟     | Block IO延迟超过10ms                                    | 进程名, pid, 延迟                                     |
| BIOLAT_100MS            | bio延迟     | Block IO延迟超过100ms                                   | 进程名, pid, 延迟                                     |
| RXKERNEL_SLOW           | kernel延迟  | 内核接受包延迟超过100ms                                 | 5元组(协议、源地址&端口、目的地址&端口), 不同位置的延迟 |
| TXKERNEL_SLOW           | kernel延迟  | 内核发送包延迟超过100ms                                 | 5元组(协议、源地址&端口、目的地址&端口), 不同位置的延迟 |
| PacketLoss              | packetloss  | 包被丢弃                                                | 5元组(协议、源地址&端口、目的地址&端口), 栈追踪         |
| SOCKETLAT_READSLOW      | socket延迟  | Socket读取慢                                            | 5元组(协议、源地址&端口、目的地址&端口), 延迟           |
| SOCKETLAT_SENDSLOW      | socket延迟  | Socket发送慢                                            | 5元组(协议、源地址&端口、目的地址&端口), 延迟           |
| TCPRESET_NOSOCK         | tcpreset    | 因为没有socket导致TCP发送RST报文                        | 5元组(协议、源地址&端口、目的地址&端口), socket状态     |
| TCPRESET_ACTIVE         | tcpreset    | 因为close()系统调用或linger等原因，TCP发送active RST报文 | 5元组(协议、源地址&端口、目的地址&端口), socket状态     |
| TCPRESET_PROCESS        | tcpreset    | 因为握手时出现问题等原因，TCP发送RST报文                 | 5元组(协议、源地址&端口、目的地址&端口), socket状态     |
| TCPRESET_RECEIVE        | tcpreset    | TCP连接收到RST报文                                      | 5元组(协议、源地址&端口、目的地址&端口), socket状态     |
| VIRTCMDEXCUTE           | virtcmd延迟 | Virtio发送命令执行慢                                    | cpu, pid, 延迟                                        |
| NETSOFTIRQ_SCHED_SLOW   | net_softirq | Softirq调度慢 (从`softirq_raise()`到`softirq_entry()`)  | cpu, pid, 延迟                                        |
| NETSOFTIRQ_SCHED_100MS  | net_softirq | Softirq调度延迟超过100ms                                | cpu, pid, 延迟                                        |
| NETSOFTIRQ_EXCUTE_SLOW  | net_softirq | Softirq执行慢(从`softirq_entry()`到`softirq_exit()`)    | cpu, pid, 延迟                                        |
| NETSOFTIRQ_EXCUTE_100MS | net_softirq | Softirq执行延迟超过100ms                                | cpu, pid, 延迟                                        |
| TCPRetrans              | tcpretrans  | TCP 发生重传                                            | 栈追踪                                                |
