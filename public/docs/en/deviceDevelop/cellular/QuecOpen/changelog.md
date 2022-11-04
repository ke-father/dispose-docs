# Revision History


### Version 2.11.0
>* Changed the OTA process mechanism from event-triggered to automatic.
>* Added the feature of the platform replying to uplink messages.
>* Optimized the feature that a device filters duplicative packages automatically when receiving data.
>* Adjusted the messages to be unpacked and packed into DP layer.

### Version 2.10.4
>* Updated device binding demand (BindSecret can be updated when ProductKey, ProductSecret, DeviceKey or DeviceSecret changes.)
>* DeviceSecret is not cleared any longer when the IP address of the local device server is configured.

### __Version 2.10.3__

>* Updated the feature of device resetting.
>* Updated the feature of device binding.
>* Fixed Developer Center OTA potential defect.
>* Fixed the bug when HTTP OTA SDK is ported to the module.

### __Version 2.10.0__

>* Supported ModBus communication protocol.
>* Supported the feature of wireless gateway.
>* Supported resetting DS.
>* Supported returning a pkgId to identify the uplink data after the uplink data is sent out.
>* Added the feature related to ModBus sub-device.

### __Version 2.9.2__

>* Supported reporting BindCode.
>* Supported adaptation layer in configuring the length of data read and sent by API.
>* Modified HTTP OTA upgrade command.
>* Fixed the asynchronous problem of OTA upgrade thread.
>* Fixed the OTA upgrade asynchronous confirmation bug of OpenC and the problem of incorrect format of data uploaded in the callback function when setting sub-device TSL model.
>* Optimized error code processing mechanism (deleted unused error code and added error codes issued by Developer Center).
>* Added the scenario distinctions of Developer Center issuing error codes.
>* Added the repeated communication package filtering mechanism.

### __Version 2.9.0__

>* Supported sub-device accessing and communicating with Developer Center.
>* Optimized the device data sending and receiving logic.
>* Added HTTP OTA support for multi-firmware plans.

### __Version 2.8.3__

>* Supported  HTTP OTA solution.
>* Added DNS optimization processing.  
>* Added OTA support for multiple components and multiple firmware.
>* Optimized resource locking of socket management in kernel layer.

### __Version 2.8.2__

>* Added the event notification of 2,10476 when the network connection is abnormal after device initiates access to M2M.
>* Added an interface for application to configure DK and DS.
>* Added the penalty mechanism for M2M access exceptions.  
>* Supported JSON-format data in TSL AT command solution. 
>* Supported forcible conversion of HTTP domain names in production environments.
>* Added IP cache after DNS, and use IP connection directly next time, unless IP fails and then reuse DNS.

### __Version 2.7.2__

>* Supported LAN UDP discovering device, only for LAN device.
>* Supported server domain name switching and PK/PS switching by connecting to a new MQTT broker.
>* Supported optional encryption of M2M communication data.

### __Version 2.6.1__

>* Modified the location data reporting command and supported reporting data of external GPS.
>* Added APIs for obtaining device information and status.
>* Added encrypted storage of users configuration data with AES128 ECB pcks#7.
>* Optimized network management to re-connect network after (QIOT_CONN_NET_ERRTIME_MAX+1)/2 network failures and to restart the module after QIOT_CONN_NET_ERRTIME_MAX network failures. 
>* Added the feature of positioning. 
>* Divided the TTLV numeric data interface into two data types: integer and float.   
>
>>(1) Added QIOT_DPDATA_TYPE_INT and QIOT_DPDATA_TYPE_FLOAT to the enumeration QIot_dpDataType_e.  
>>(2) Interfaces corresponding to TTLV numeric data are modified as below:  
>
>>>  qbool Ql_iotTtlvNodeGetInt(const void *ttlvNode, qint64_t *value);  
>>>  qbool Ql_iotTtlvNodeGetFloat(const void *ttlvNode, double *value);  
>>>  qbool Ql_iotTtlvIdGetInt(const void *ttlvHead, quint16_t id, qint64_t *value);  
>>>  qbool Ql_iotTtlvIdGetFloat(const void *ttlvHead, quint16_t id, double *value);  
>>>  qbool Ql_iotTtlvIdAddInt(void **ttlvHead, quint16_t id, qint64_t num);  
>>>  qbool Ql_iotTtlvIdAddFloat(void **ttlvHead, quint16_t id, double num);  
>
>>>  * Returns failure when sending an transparent transmission or TSL data with empty content.  
>>>  * Changes the limit of data sent by quos_socket to the limit of total sending bytes (default value is 50 Kb. Specific value depends on RAM resource) from number limit of nodes.
>>>  * Stopped supporting QIOT_CONNMODE_AUTO mode of Ql_iotConfigSetConnmode() in OpenC/Python. 

### __Version 2.3.4__

>* Changed the default MQTT heartbeat interval to 5 seconds. 
>* Changed the value type of parameter (QIOT_RECV_SUCC_PHYMODEL_REQ) used to obtain TSL status in event callback function to array pointer in uint16 format from string type.
>* Supported transparently transmitting AT commands. 
>* Updated CJSON library version (https://github.com/DaveGamble/cJSON/releases/tag/v1.7.14).

### __Version 2.3.3__

>* Changed the result notification of sending a TSL model; Successful sending (4,10210) and sending failure (4,10310).  
>* Restored SDK version number to 2.3.3.