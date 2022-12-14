# 概述

移远通信 QuecThing SDK 对模块适配层提供统一 API 接口定义，由开发者根据模块能力实现具体业务功能。完成编译烧录后，即可在模块上运行 QuecThing 功能并实现开发者中心（以下简称“平台”）接入。同时为加快开发效率，QuecThing SDK 内置并提供了统一的通信协议和 API、AT 命令供模块应用层调用，开发者无需过多关注模块型号即可直接使用并开发具体业务功能。

QuecThing SDK 内部通过 MQTT/UDP(DTLS)/TCP(TLS)实现与服务器端（南向）、移动应用端、模块应用端的功能通信。工作策略和协议内容都是统一固定，产品开发时无需更改。

本文档以移远通信模块（以下简称“模块”）为例介绍如何移植 QuecThing SDK 至通信模块中，以及如何使用 SDK 中提供的 API。

##  __QuecThing SDK 版本__

本文档介绍如何移植 QuecThing SDK 2.10.0 版本至通信模块中及如何使用 SDK 中提供的 API。

表1：QuecThing SDK 版本历史
|SDK 版本	|发布日期	|变更说明
|---|---|---
|2.7.2	|2021-07-05 |增加定位功能
|2.8.2	|2021-09-17	|物模型支持 JSON 数据格式
|2.8.3  |2021-10-01 |增加 HTTP OTA 服务
|2.9.0  |2021-11-17 |支持子设备的连接与交互
|2.9.2  |2022-01-04 |统一功能描述
|2.9.3  |2022-03-03 |增加HTTP OTA请求升级前注网操作
|2.10.0 |2022-04-15 |1. 增加无线网关功能；<br>2. 支持 ModBus 通讯协议；<br>3. 支持重置设备信息；<br>4. 支持上行数据发送后返回指示上行数据； <br>5. 增加 ModBus 子设备相关功能；
|2.10.3 |2022-05-18 |1. 更新设备重置功能；<br>2. 更新设备绑定功能；<br>3. 修复开发者中心 OTA潜在缺陷；<br>4. 修复HTTP OTA合入模组问题； <br>5. 修复AT方案中物模型JSON格式内存泄漏问题；

