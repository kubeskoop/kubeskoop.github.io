# Probes, Metrics and Events

This documentation will introduce probes supported by KubeSkoop, with their metrics and events.

## Probes

Probes supported by KubeSkoop are listed below.

| Probe Name     | Description                                               | Probe Type      | Data Source | Overhead |
|----------------|-----------------------------------------------------------|-----------------|-------------|----------|
| conntrack      | Statistics of conntrack                                   | Metrics         | netlink     | Low      |
| qdisc          | Statistics of tc qdisc                                    | Metrics         | netlink     | Low      |
| fd             | Statistics of file and socket descriptor                  | Metrics         | procfs      | Medium   |
| io             | Statistics of process IO                                  | Metrics         | procfs      | Low      |
| ipvs           | Statistics of IPVS                                        | Metrics         | procfs      | Low      |
| netdev         | Statistics of network device                              | Metrics         | procfs      | Low      |
| tcpext         | Statistics of the TCPExt                                  | Metrics         | procfs      | Low      |
| tcp            | Statistics of TCP from snmp                               | Metrics         | profcs      | Low      |
| udp            | Statistics of UDP                                         | Metrics         | profcs      | Low      |
| ip             | Statistics of IP                                          | Metrics         | profcs      | Low      |
| sock           | Statistics of socket                                      | Metrics         | procfs      | Low      |
| softnet        | Statistics of packet sent and dropped from network device | Metrics         | procfs      | Low      |
| tcpsummary     | Statistics of TCP queue and connection status             | Metrics         | procfs      | Medium   |
| flow           | Statistics of connection flow                             | Metrics         | eBPF        | Medium   |
| netiftxlatency | Trace network delay during transmission                   | Metrics, Events | eBPF        | High     |
| biolatency     | Trace delay during block IO                               | Metrics, Events | eBPF        | Medium   |
| kernellatency  | Trace latency in kernel                                   | Metrics, Events | eBPF        | High     |
| packetloss     | Trace packet loss                                         | Metrics, Events | eBPF        | Medium   |
| socketlatency  | Trace latency in socket                                   | Metrics, Events | eBPF        | High     |
| tcpreset       | Trace TCP reset                                           | Events          | eBPF        | Low      |
| virtcmdlatency | Trace latency in virtio device                            | Metrics, Events | eBPF        | High     |
| net_softirq    | Trace latency in software interrupt                       | Metrics, Events | eBPF        | High     |
| tcpretrans     | Trace TCP packet retransmission                           | Metrics, Events | eBPF        | Low      |

## Metrics

### Metric Labels

Theses labels are present on all metrics.

| Label Name       | Description                    |
|------------------|--------------------------------|
| target_pod       | Pod name or "hostNetwork"      |
| target_namespace | Pod namespace or "hostNetwork" |
| target_node      | Node name                      |

### Metric List

| Metric Name                               | Probe Name     | Description                                                       |
|-------------------------------------------|----------------|-------------------------------------------------------------------|
| kubeskoop_conntrack_found                 | conntrack      | conntrack statistics "found"                                      |
| kubeskoop_conntrack_invalid               | conntrack      | conntrack statistics "invalid"                                    |
| kubeskoop_conntrack_ignore                | conntrack      | conntrack statistics "ignore"                                     |
| kubeskoop_conntrack_insert                | conntrack      | conntrack statistics "insert"                                     |
| kubeskoop_conntrack_insertfailed          | conntrack      | conntrack statistics "insert_failed"                              |
| kubeskoop_conntrack_drop                  | conntrack      | conntrack statistics "drop"                                       |
| kubeskoop_conntrack_earlydrop             | conntrack      | conntrack statistics "early_drop"                                 |
| kubeskoop_conntrack_error                 | conntrack      | conntrack statistics "error"                                      |
| kubeskoop_conntrack_searchrestart         | conntrack      | conntrack statistics "search_restart"                             |
| kubeskoop_conntrack_entries               | conntrack      | conntrack global statistics "entries"                             |
| kubeskoop_conntrack_maxentries            | conntrack      | conntrack global statistics "max_entries"                         |
| kubeskoop_qdisc_bytes                     | qdisc          | tc qdisc statistics "bytes"                                       |
| kubeskoop_qdisc_packets                   | qdisc          | tc qdisc statistics "packets"                                     |
| kubeskoop_qdisc_drops                     | qdisc          | tc qdisc statistics "drops"                                       |
| kubeskoop_qdisc_qlen                      | qdisc          | tc qdisc statistics "qlen"                                        |
| kubeskoop_qdisc_backlog                   | qdisc          | tc qdisc statistics "backlog"                                     |
| kubeskoop_qdisc_overlimits                | qdisc          | tc qdisc statistics "overlimits"                                  |
| kubeskoop_fd_openfd                       | fd             | opened fd in pod                                                  |
| kubeskoop_fd_opensocket                   | fd             | opened socket in pod                                              |
| kubeskoop_io_ioreadsyscall                | io             | io read syscalls count in pod                                     |
| kubeskoop_io_iowritesyscall               | io             | io write syscalls count in pod                                    |
| kubeskoop_io_ioreadbytes                  | io             | io read bytes in pod                                              |
| kubeskoop_io_iowritebytes                 | io             | io write bytes in pod                                             |
| kubeskoop_ipvs_connections                | ipvs           | connections of IPVS in pod                                        |
| kubeskoop_ipvs_incomingpackets            | ipvs           | incoming packets of IPVS in pod                                   |
| kubeskoop_ipvs_outgoingbytes              | ipvs           | outgoing bytes of IPVS in pod                                     |
| kubeskoop_ipvs_incomingbytes              | ipvs           | incoming bytes of IPVS in pod                                     |
| kubeskoop_ipvs_outgoingpackets            | ipvs           | outgoing packets of IPVS in pod                                   |
| kubeskoop_netdev_rxbytes                  | netdev         | rx bytes of all network devices in pod                            |
| kubeskoop_netdev_rxerrors                 | netdev         | rx errors of all network devices in pod                           |
| kubeskoop_netdev_txbytes                  | netdev         | tx bytes of all network devices in pod                            |
| kubeskoop_netdev_txerrors                 | netdev         | tx error of all network devices in pod                            |
| kubeskoop_netdev_rxpackets                | netdev         | rx packets of all network devices in pod                          |
| kubeskoop_netdev_rxdropped                | netdev         | rx dropped packets of all network devices in pod                  |
| kubeskoop_netdev_txpackets                | netdev         | tx packets of all network devices in pod                          |
| kubeskoop_netdev_txdropped                | netdev         | tx dropped packets of all network devices in pod                  |
| kubeskoop_tcpext_listendrops              | tcpext         | ListenDrops of TCPExt                                             |
| kubeskoop_tcpext_listenoverflows          | tcpext         | ListenOverflow of TCPExt                                          |
| kubeskoop_tcpext_tcpsynretrans            | tcpext         | TCPSynRetrans of TCPExt                                           |
| kubeskoop_tcpext_tcpfastretrans           | tcpext         | TCPFastRetrans of TCPExt                                          |
| kubeskoop_tcpext_tcpretransfail           | tcpext         | TCPRetransFail of TCPExt                                          |
| kubeskoop_tcpext_tcptimeouts              | tcpext         | TCPTimeouts of TCPExt                                             |
| kubeskoop_tcpext_tcpabortonclose          | tcpext         | TCPAbortOnClose of TCPExt                                         |
| kubeskoop_tcpext_tcpabortonmemory         | tcpext         | TCPAbortOnMemory of TCPExt                                        |
| kubeskoop_tcpext_tcpabortontimeout        | tcpext         | TCPAbortOnTimeout of TCPExt                                       |
| kubeskoop_tcpext_tcpabortonlinger         | tcpext         | TCPAbortOnLinger of TCPExt                                        |
| kubeskoop_tcpext_tcpabortondata           | tcpext         | TCPAbortOnData of TCPExt                                          |
| kubeskoop_tcpext_tcpabortfailed           | tcpext         | TCPAbortFailed of TCPExt                                          |
| kubeskoop_tcpext_tcpackskippedsynrecv     | tcpext         | TCPACKSkippedSynRecv of TCPExt                                    |
| kubeskoop_tcpext_tcpackskippedpaws        | tcpext         | TCPACKSkippedPAWS of TCPExt                                       |
| kubeskoop_tcpext_tcpackskippedseq         | tcpext         | TCPACKSkippedSeq of TCPExt                                        |
| kubeskoop_tcpext_tcpackskippedfinwait2    | tcpext         | TCPACKSkippedFinWait2 of TCPExt                                   |
| kubeskoop_tcpext_tcpackskippedtimewait    | tcpext         | TCPACKSkippedTimeWait of TCPExt                                   |
| kubeskoop_tcpext_tcpackskippedchallenge   | tcpext         | TCPACKSkippedChallenge of TCPExt                                  |
| kubeskoop_tcpext_tcprcvqdrop              | tcpext         | TCPRcvQDrop of TCPExt                                             |
| kubeskoop_tcpext_tcpmemorypressures       | tcpext         | TCPMemoryPressures of TCPExt                                      |
| kubeskoop_tcpext_tcpmemorypressureschrono | tcpext         | TCPMemoryPressuresChrono of TCPExt                                |
| kubeskoop_tcpext_pawsactive               | tcpext         | PAWSActive of TCPExt                                              |
| kubeskoop_tcpext_pawsestab                | tcpext         | PAWSEstab of TCPExt                                               |
| kubeskoop_tcpext_embryonicrsts            | tcpext         | EmbryonicRsts of TCPExt                                           |
| kubeskoop_tcpext_tcpwinprobe              | tcpext         | TCPWinProbe of TCPExt                                             |
| kubeskoop_tcpext_tcpkeepalive             | tcpext         | TCPKeepAlive of TCPExt                                            |
| kubeskoop_tcpext_tcpmtupfail              | tcpext         | TCPMTUPFail of TCPExt                                             |
| kubeskoop_tcpext_tcpmtupsuccess           | tcpext         | TCPMTUPSuccess of TCPExt                                          |
| kubeskoop_tcpext_tcpzerowindowdrop        | tcpext         | TCPZeroWindowDrop of TCPExt                                       |
| kubeskoop_tcpext_tcpbacklogdrop           | tcpext         | TCPBacklogDrop of TCPExt                                          |
| kubeskoop_tcpext_pfmemallocdrop           | tcpext         | PFMemallocDrop of TCPExt                                          |
| kubeskoop_tcpext_tcpwqueuetoobig          | tcpext         | TCPWqueueTooBig of TCPExt                                         |
| kubeskoop_tcp_activeopens                 | tcp            | ActiveOpens of TCP                                                |
| kubeskoop_tcp_passiveopens                | tcp            | PassiveOpens of TCP                                               |
| kubeskoop_tcp_retranssegs                 | tcp            | RetransSegs of TCP                                                |
| kubeskoop_tcp_attemptfails                | tcp            | AttemptFails of TCP                                               |
| kubeskoop_tcp_estabresets                 | tcp            | EstabResets of TCP                                                |
| kubeskoop_tcp_currestab                   | tcp            | CurrEstab of TCP                                                  |
| kubeskoop_tcp_insegs                      | tcp            | InSegs of TCP                                                     |
| kubeskoop_tcp_outsegs                     | tcp            | OutSegs of TCP                                                    |
| kubeskoop_tcp_inerrs                      | tcp            | InErrs of TCP                                                     |
| kubeskoop_tcp_outrsts                     | tcp            | OutRsts of TCP                                                    |
| kubeskoop_udp_indatagrams                 | udp            | InDatagrams of UDP                                                |
| kubeskoop_udp_noports                     | udp            | NoPorts of UDP                                                    |
| kubeskoop_udp_inerrors                    | udp            | InErrors of UDP                                                   |
| kubeskoop_udp_outdatagrams                | udp            | OutDatagrams of UDP                                               |
| kubeskoop_udp_rcvbuferrors                | udp            | RcvbufErrors of UDP                                               |
| kubeskoop_udp_sndbuferrors                | udp            | SndbufErrors of UDP                                               |
| kubeskoop_udp_incsumerrors                | udp            | InCsumErrors of UDP                                               |
| kubeskoop_udp_ignoredmulti                | udp            | IgnoredMulti of UDP                                               |
| kubeskoop_ip_innoroutes                   | ip             | InNoRoutes of IP                                                  |
| kubeskoop_ip_intruncatedpkts              | ip             | InTruncatedPkts of IP                                             |
| kubeskoop_sock_inuse                      | sock           | Inuse of sock                                                     |
| kubeskoop_sock_orphan                     | sock           | Orphan of sock                                                    |
| kubeskoop_sock_tw                         | sock           | TW of sock                                                        |
| kubeskoop_sock_alloc                      | sock           | Alloc of sock                                                     |
| kubeskoop_sock_mem                        | sock           | Mem of sock                                                       |
| kubeskoop_softnet_processed               | softnet        | Processed of softnet                                              |
| kubeskoop_softnet_dropped                 | softnet        | Dropped of softnet                                                |
| kubeskoop_tcpsummary_tcpestablishedconn   | tcpsummary     | ESTABLISHED connection count                                      |
| kubeskoop_tcpsummary_tcptimewaitconn      | tcpsummary     | TIME_WAIT connection count                                        |
| kubeskoop_tcpsummary_tcptxqueue           | tcpsummary     | tx queue length of all TCP connections                            |
| kubeskoop_tcpsummary_tcprxqueue           | tcpsummary     | rx queue length of all TCP connections                            |
| kubeskoop_netiftxlat_qdiscslow100ms       | netiftxlatency | qdisc latency exceeds 100ms during transmission                   |
| kubeskoop_netiftxlat_netdevslow100ms      | netiftxlatency | netdev transmit latency exceeds 100ms during transmission         |
| kubeskoop_kernellatency_rxslow            | kernellatency  | Kernel packet receiving slow                                      |
| kubeskoop_kernellatency_rxslow100ms       | kernellatency  | Kernel packet receiving latency exceeds 100ms                     |
| kubeskoop_kernellatency_txslow            | kernellatency  | Kernel packet transmitting slow                                   |
| kubeskoop_kernellatency_txslow100ms       | kernellatency  | Kernel packet transmitting latency exceeds 100ms                  |
| kubeskoop_packetloss_total                | packetloss     | Packet dropped total count                                        |
| kubeskoop_packetloss_netfilter            | packetloss     | Packet dropped in `nf_hook_slow()`                                |
| kubeskoop_socketlatency_read100ms         | socketlatency  | Socket read latency exceeds 100ms                                 |
| kubeskoop_socketlatency_read1ms           | socketlatency  | Socket read latency exceeds 1ms                                   |
| kubeskoop_socketlatency_write100ms        | socketlatency  | Socket write latency exceeds 100ms                                |
| kubeskoop_socketlatency_write1ms          | socketlatency  | Socket write latency exceeds 1ms                                  |
| kubeskoop_virtcmdlatency_latency100ms     | virtcmdlatency | Virtio send command latency exceeds 100ms                         |
| kubeskoop_virtcmdlatency_latency          | virtcmdlatency | Virtio send command slow                                          |
| kubeskoop_softirq_schedslow               | net_softirq    | Softirq sched slow (from `softirq_raise()` to `softirq_entry()`)  |
| kubeskoop_softirq_schedslow100ms          | net_softirq    | Softirq sched latency exceeds 100ms                               |
| kubeskoop_softirq_excuteslow              | net_softirq    | Softirq execute slow (from `softirq_entry()` to `softirq_exit()`) |
| kubeskoop_softirq_excuteslow100ms         | net_softirq    | Softirq execute latency exceeds 100ms                             |
| kubeskoop_flow_bytes                      | flow           | Bytes sent connection flow                                        |
| kubeskoop_flow_packets                    | flow           | Packets sent of connection flow                                   |

## Events

### Event List

Event supported by KubeSkoop exporter are listed below.

| Event Name              | Probe Name     | Description                                                                    | Event Body                                                                    |
|-------------------------|----------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| TXLAT_QDISC_100MS       | netiftxlatency | qdisc latency exceeds 100ms during transmission                                | 5-tuple(protocol, saddr, sport, daddr, dport), latency                        |
| TXLAT_NETDEV_100MS      | netiftxlatency | netdev transmit latency exceeds 100ms during transmission                      | 5-tuple(protocol, saddr, sport, daddr, dport), latency                        |
| BIOLAT_10MS             | biolatency     | Block IO latency exceeds 10ms                                                  | process name, pid, latency                                                    |
| BIOLAT_100MS            | biolatency     | Block IO latency exceeds 100ms                                                 | process name, pid, latency                                                    |
| RXKERNEL_SLOW           | kernellatency  | Kernel packet receiving latency exceeds 100ms                                  | 5-tuple(protocol, saddr, sport, daddr, dport), latency in different locations |
| TXKERNEL_SLOW           | kernellatency  | Kernel packet transmitting latency exceeds 100ms                               | 5-tuple(protocol, saddr, sport, daddr, dport), latency in different locations |
| PacketLoss              | packetloss     | Packet dropped                                                                 | 5-tuple(protocol, saddr, sport, daddr, dport), stacktrace                     |
| SOCKETLAT_READSLOW      | socketlatency  | Socket read slow                                                               | 5-tuple(protocol, saddr, sport, daddr, dport), latency                        |
| SOCKETLAT_SENDSLOW      | socketlatency  | Socket send slow                                                               | 5-tuple(protocol, saddr, sport, daddr, dport), latency                        |
| TCPRESET_NOSOCK         | tcpreset       | TCP connection sent RST because of no socket                                   | 5-tuple(protocol, saddr, sport, daddr, dport), socket state                   |
| TCPRESET_ACTIVE         | tcpreset       | TCP connection sent active RST because of close() syscall or linger, etc.      | 5-tuple(protocol, saddr, sport, daddr, dport), socket state                   |
| TCPRESET_PROCESS        | tcpreset       | TCP connection sent RST because of no socket or exception in handshaking, etc. | 5-tuple(protocol, saddr, sport, daddr, dport), socket state                   |
| TCPRESET_RECEIVE        | tcpreset       | TCP connection received RST                                                    | 5-tuple(protocol, saddr, sport, daddr, dport), socket state                   |
| VIRTCMDEXCUTE           | virtcmdlatency | Virtio send command slow                                                       | cpu, pid, latency                                                             |
| NETSOFTIRQ_SCHED_SLOW   | net_softirq    | Softirq sched slow (from `softirq_raise()` to `softirq_entry()`)               | cpu, pid, latency                                                             |
| NETSOFTIRQ_SCHED_100MS  | net_softirq    | Softirq sched latency exceeds 100ms                                            | cpu, pid, latency                                                             |
| NETSOFTIRQ_EXCUTE_SLOW  | net_softirq    | Softirq execute slow (from `softirq_entry()` to `softirq_exit()`)              | cpu, pid, latency                                                             |
| NETSOFTIRQ_EXCUTE_100MS | net_softirq    | Softirq execute latency exceeds 100ms                                          | cpu, pid, latency                                                             |
| TCPRetrans              | tcpretrans     | TCP retransmission                                                             | stacktrace                                                                    |
