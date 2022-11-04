# Events Related to Interaction Between the Device and Developer Center

##  __Event Callback Format__

> __+QIOTEVT: \<event_type\>,\<event_code\> [,\<data\>]__

##  __Callback Event Description__


 * __`<event_type>`__ : Integer type. Event identifier.
  * __`1`__: Bootstrap Authentication Event
  * __`2`__: Access Event
  * __`3`__:  Subscription Event
  * __`4`__:  Data Sending Event
  * __`5`__:  Data Receiving Event
  * __`6`__: De-registration Event
  * __`7`__: OTA Event
  * __`8`__: Developer Center Event
* __`<event_code>`__: Integer type. Event return code.


##  __Event return code: <event_type><event_code>__

## __1: Bootstrap Authentication Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   1,10200   |              Successful device authentication.               |
|   1,10404   |             Error occurs when Developer Center calls the API.             |
|   1,10422   |       The device is authenticated (Connection failed).       |
|   1,10423   | Failed to query the product information (Connection failed). |
|   1,10424   |        Failed to decode PAYLOAD (Connection failed).         |
|   1,10425   |      Signature verification failed (Connection failed).      |
|   1,10427   |     The hash information is illegal (Connection failed).     |
|   1,10431   |              DK is illegal (Connection failed).              |
|   1,10433   |                       Flag is illegal.                       |
|   1,10434   | ClientID is not matched with password (password contains ClientID related information). |
|   1,10450   |          Device internal error (Connection failed).          |
|   1,10500   | The device authentication to Developer Center failed (Unknown error in system). |
|   1,10300   |                        Other errors.                         |

## __2: Access Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   2,10200   |                    Register successfully.                    |
|   2,10404   |             Error occurs when Developer Center calls the API.             |
|   2,10430   |        The DeviceSecret is wrong (Connection failed).        |
|   2,10431   |         The device is disabled (Connection failed).          |
|   2,10433   |                       Flag is illegal.                       |
|   2,10450   |          Device internal error (Connection failed).          |
|   2,10471   | The implementation version is not supported (Connection failed). |
|   2,10473   |         Access heartbeat error (Connection timeout).         |
|   2,10474   |             Network error (Connection timeout).              |
|   2,10475   |                       Server changed.                        |
|   2,10476   |                     AP connection error.                     |
|   2,10500   |        Registration failed (Unknown error in system).        |

 ## __3:  Subscription Event__

| Return Code |       Description        |
| :---------: | :----------------------: |
|   3,10200   | Successful subscription. |
|   3,10300   |   Failed subscription.   |

 ## __4:  Data Sending Event__

| Return Code |                         Description                          |                   Remarks                   |
| :---------: | :----------------------------------------------------------: | :-----------------------------------------: |
|   4,10200   | Send transparent transmission data [,\<txid\>] successfully. | txid is returned once txid_mode is enabled. |
|   4,10210   |           Send TSL data [,\<txid\>] successfully.            | txid is returned once txid_mode is enabled. |
|   4,10220   |       Send positioning data [,\<txid\>] successfully.        | txid is returned once txid_mode is enabled. |
|   4,10300   |  Failed to send transparent transmission data [,\<txid\>].   | txid is returned once txid_mode is enabled. |
|   4,10310   |             Failed to send TSL data [,\<txid\>].             | txid is returned once txid_mode is enabled. |
|   4,10320   |         Failed to send positioning data [,\<txid\>].         | txid is returned once txid_mode is enabled. |

## __5:  Data Receiving Event__ 

| Return Code |                         Description                          |                           Remarks                            |
| :---------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   5,10200   | URC is followed by [,\<length>\<\r\n>\<data>] to display the transparent transmission data issued by Developer Center. | The received downlink data is issued directly if buffer mode is disabled. |
|   5,10210   | URC is followed by [,\<length>\<\r\n>\<data>] to display the TSL data issued by Developer Center. | The received downlink data is issued directly if buffer mode is disabled. |
|   5,10211   | URC is followed by \<pkgId>,\<ID1>[,\<ID2>...] to indicate that TSL read command issued by Developer Center is received.<br/>\<pkgId>	Request Package ID issued by Developer Center.<br/>\<ID>	TSL ID. |                                                              |
|   5,10473   | Failed to receive data whose length exceeds the device cache limit. |                                                              |
|   5,10428   |      Traffic limiting caused by excessive device cache.      |                                                              |

##   __6: De-registration Event__

| Return Code |                      Description                       |
| :---------: | :----------------------------------------------------: |
|   6,10200   | Successful de-registration (successful disconnection). |

##   __7: OTA Event__

| Return Code | Description    |Parameter
|:--------:| :-------------:| :-------------:|
|7,10700|	URC is followed by ,\<componentNo>,\<sourceVersion>,\<targetVersion>,\<batteryLimit>,\<minSignalIntensity>,\<useSpace> to inform the upgrade task.|  \<componentNo>				Component identifier.<br/>\<sourceVersion>			Source version.<br/>\<targetVersion>				Target version.<br/>\<batteryLimit>				Minimum power required for OTA upgrade.<br/>\<minSignalIntensity>		Minimum signal strength in OTA upgrade.<br/>\<useSpace>					Disk space required for OTA upgrade.|
|7,10701|	URC is followed by [,"\<componentNo>",\<length>,"\<MD5>",\<CRC>] to indicate that the device starts downloading firmware package.|\<componentNo>		Component identifier.<br/>\<length>			Size the firmware package in OTA upgrade.<br/>\<MD5>				md5 value of firmware package in OTA upgrade.
|7,10702|	Firmware is downloaded in progress.|
|7,10703|	URC is followed by [,"\<componentNo>",\<length>,\<startaddr>,\<piece_length>] to indicate that the firmware package is downloaded.|\<componentNo>		Component identifier.<br/>\<length>			Size the firmware package in OTA upgrade.<br/>\<startaddr>			Start address of the current downloaded block in the OTA upgrade package.<br/>\<piece_length>		Size of the current file block.<br/>
|7,10704|	Firmware is being upgraded.||
|7,10705|	Firmware is upgraded successfully.||
|7,10706|	Failed to upgrade the firmware.||
|7,10707|	Advertisement of the first device operation result.||

##  __8: Developer Center Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   8,10428   | Traffic limiting caused by high-frequency messages on the device. |
|   8,10429   | Traffic limiting caused by excessive number of single device activations or daily requests. |