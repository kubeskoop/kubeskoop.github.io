---
sidebar_position: 2
---

# Code Overview

Here's an overview for KubeSkoop's code architecture, including code directory structure of KubeSkoop diagnosis & KubeSkoop exporter.

## High level

### bpf

The eBPF code and headers used by exporter.

### cmd

CLI programs.

### deploy

Helm charts and manifests for deploying KubeSkoop.

### docs

Documentation.

### pkg

Common go packages.

### rpc

gRPC definitions used by exporter.

### test

E2E tests.

## KubeSkoop diagnosis

### cmd/skoop

`skoop` command.

### cmd/collector

`collector` command.

### pkg/skoop/cmd

Main logic of `skoop` CLI command.

### pkg/skoop/assertions

Assertion type definitions and common assertion utils, including `kubernetes` and `netstack`.

### pkg/skoop/collector

Definitions and implementation of `collector` command and `CollectorManager` .

### pkg/skoop/context

Runtime context of the program, providing cluster or task information for the diagnosis. It also provides command flags parsing, and allow other package to register their flags.

### pkg/skoop/infra

Implementation of cloud providers.

### pkg/skoop/k8s

Definitions and utilities for components of Kubernetes cluster.

### pkg/skoop/model

Definitions of models used for diagnosis, including `Packet`, `Link`, `Action`, etc.

### pkg/skoop/netstack

Definitions and parser of Linux network stack, like route, IPVS, and iptables simulation.

### pkg/skoop/network

Implementations of `Network` .

### pkg/skoop/nodemanager

Implementation of `NetNodeManager`

### pkg/skoop/plugin

Implementations of `Plugin`, including `flannel`, `calico`, etc.

### pkg/skoop/provider

Implementations of `Provider`, including `generic`, `aliyun`, etc.

### pkg/skoop/service

Implementations of `ServiceProcessor`, including `kube-proxy`.

### pkg/skoop/skoop

Implementations of `Diagnostor`.

### pkg/skoop/ui

Output formatter and Web UI.

### pkg/skoop/utils

Utilities.
