---
sidebar_position: 3
---

# Cloud Providers

Cloud provider can be specified via `--cloud-provider` argument before execution of KubeSkoop diagnose.

After setting cloud provider of the cluster, connectivity diagnose will your configuration on the cloud, like VM security group, route tables, NAT, etc.

# Aliyun(Alibaba Cloud)

Specify `--cloud-provider aliyun` to use Alibaba Cloud as the cloud provider.

Except this, you should also use arguments below:

| Argument | Description |
| --- | --- |
| `--aliyun-access-key-id`        | access key for aliyun provider            |
| `--aliyun-access-key-secret`    | access secret for aliyun provider         |
| `--aliyun-security-token`       | security token for aliyun provider        |
