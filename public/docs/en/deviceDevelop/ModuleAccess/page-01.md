# Introduction

QuecThing SDK provides a unified API definition for module adaptation layer, and developers realize specific business features by the API provided in the SDK according to module capabilities. After compilation and download, you can run the QuecThing on the module and access Developer Center (hereinafter referred to as Developer Center). At the same time, to speed up the development efficiency, QuecThing SDK builds in and provides a unified communication protocol, API and AT commands for the module application layer to call, so developers can directly use and develop specific business features without paying too much attention to the module model.

QuecThing SDK communicates with the server (southbound), mobile application and module application through MQTT/UDP(DTLS)/TCP(TLS). The work policy and protocols are unified and fixed, and there is no need to change them during development.

This document describes how to port the QuecThing SDK into the communication module and how to use the API provided in the SDK, taking the Quectel module (hereinafter referred to as the module) as an example.

##  __QuecThing SDK Version__

This document introduces how to port QuecThing SDK 2.10.0 to a communication module and use the API provided in the SDK.

Table 1: QuecThing SDK  Version History
|SDK Version	|Release Data	|Description
|---|---|---
|2.7.2	|2021-07-05 |Added the feature of positioning.
|2.8.2	|2021-09-17	|Supported JSON format for TSL.
|2.8.3  |2021-10-01 |Added HTTP OTA service.
|2.9.0  |2021-11-17 |Supported sub-device to access and communicate with Developer Center.
|2.9.2  |2021-12-28 |Unified feature description.
|2.9.3  |2022-03-03 |Added the feature of network registration before HTTP OTA upgrade request.
|2.10.0 |2022-04-15 |1. Supported the feature of wireless gateway.<br>2. Supported ModBus communication protocol.<br>3. Supported  resetting device information.  <br>4.  Supported returning a PkgId to identify the uplink data after the uplink data is sent out.   <br>5. Added the feature related to ModBus sub-device.
|2.10.3 |2022-05-18 |1. Updated the feature of device resetting.<br>2. Updated the feature of device binding.<br>3. Fixed Developer Center OTA potential defect. <br>4. Fixed the bug when HTTP OTA SDK is ported to the module.<br>5. Fixed the memory leakage of TSL model in JSON format in AT command solution.