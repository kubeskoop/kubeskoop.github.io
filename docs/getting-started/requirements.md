---
sidebar_position: 0
---

# Requirements

## Connectivity Diagnosis

Connectivity Diagnosis relies on the network plugin you are using has already been implemented, and you can see a list of currently supported network plugins [here] (.../reference/connectivity-diagnosis/network-plugins.md) to see a list of currently supported network plugins.

To also perform diagnostics for configurations on the cloud, you can find a list of currently supported network plugins at [here](... /reference/connectivity-diagnosis/cloud-providers.md) to find the list of implemented cloud providers.

## System Kernel requirements

KubeSkoop leverages [eBPF technology](https://ebpf.io/) as the core implementation of the observation capability. Therefore, when using the network monitoring capabilities of KubeSkoop, it is required that the kernel version of the Kubernetes cluster nodes should be ***4.9.17 and above***.
