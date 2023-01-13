---
sidebar_position: 3
---

# 云供应商

KubeSkoop支持在诊断时指定云供应商。

通过`--cloud-provider`参数指定云供应商后。连通性诊断将会对云上资源配置进行校验，如VM安全组、路由表、NAT等。

## 阿里云

指定`--cloud-provider aliyun`以使用阿里云作为云提供商。

除了指定云提供商外，使用阿里云作为云提供商还需要提供以下参数：

| 参数 | 说明 |
| --- | --- |
| `--aliyun-access-key-id`        | 阿里云access key                                                                       |
| `--aliyun-access-key-secret`    | 阿里云access secret                                                                    |
| `--aliyun-security-token`       | (可选)阿里云security token                                                                   |