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
>* Fixed the memory leakage of TSL model in JSON format in AT command solution.

### __Version 2.10.0__

>* Supported ModBus communication protocol.
>* Supported the feature of wireless gateway.
>* Supported resetting DS.
>* Supported returning a PkgId to identify the uplink data after the uplink data is sent out.
>* Added the feature related to ModBus sub-device.

### __Version 2.9.2__

>* Supported reporting BindCode.
>* Supported adaptation layer in configuring the length of data read and sent by the AT command.
>* Modified HTTP OTA upgrade command.
>* Fixed the asynchronous problem of OTA upgrade thread.
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

>* Modified the location reporting command and supported reporting external GPS data.
>* Added APIs for obtaining device information and status.
>* Added encrypted storage of users configuration data with AES128 ECB pcks#7.
>* Added the feature of positioning.  
>* Added the condition that ERROR is returned when the transparent transmission data or TSL data is null.
>* Changed the limit of quos_socket sending data from the number of nodes to the total number of bytes sent (Default: 50 K bytes. Determined by actual chip RAM.)  


### __Version 2.3.4__

>* Changed the default MQTT heartbeat interval to 5 seconds. 
>* Supported transparently transmitting AT commands. 


### __Version 2.3.3__

>* Changed the result notification of sending a TSL model; Successful sending (4,10210) and sending failure (4,10310).  
>* Restored SDK version number to 2.3.3.

