---
sidebar_position: 0
---

# Configuration

KubeSkoop stores the configuration in `yaml` format and is loaded when the Agent starts.

In the provided installation methods, the configuration file is stored in the ConfigMap `kubeskoop-config` and mounted into the container.

Here's an example configuration:

```yaml
debugmode: true
port: 9102
enableController: true
metrics:
  probes:
  - name: info
  - name: netdev
  - name: io
  - name: socketlatency
  - name: packetloss
  - name: sock
  - name: tcpsummary
  - name: tcp
  - name: tcpext
  - name: udp
  - name: flow
event:
  probes:
  - name: packetloss
  - name: tcpreset
  sinks:
  - name: stderr
  - name: loki
    args:
      addr: loki-service
```

- `debugmode` controls whether debug mode is enabled. In debug mode, you will gain detailed logs.
- `port` is the port that KubeSkoop exposes to the outside world to provide metrics information collection.
- `enableController` controls whether to enable and connect to the controller.
- `metrics` section is about the metrics configuration, defining the metrics probes and parameters that should be enabled.
- `event` is the event configuration, defining the metrics probes and parameters that should be turned on, as well as the event receivers.

## Configuration Hot Reload

KubeSkoop agent supports hot reloading of configurations, when configuration file changes, KubeSkoop will automatically reloads it.
