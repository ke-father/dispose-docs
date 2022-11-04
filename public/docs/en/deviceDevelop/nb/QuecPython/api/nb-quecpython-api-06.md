# Events Related to Interaction Between the Device and Developer Center

## __Bootstrap Authentication Event__

| Event ID, Event Code | Carried Data | Description                                                  |
| :------------------- | :----------- | :----------------------------------------------------------- |
| 1,10200              | NULL         | Successful device authentication.                            |
| 1,10404              | NULL         | Error occurs when Developer Center calls the API.                         |
| 1,10422              | NULL         | The device is authenticated (Connection failed).             |
| 1,10423              | NULL         | Failed to query the product information (Connection failed). |
| 1,10424              | NULL         | Failed to decode PAYLOAD (Connection failed).                |
| 1,10425              | NULL         | Signature verification failed (Connection failed).           |
| 1,10427              | NULL         | The hash information is illegal (Connection failed).         |
| 1,10431              | NULL         | DK is illegal (Connection failed).                           |
| 1,10433              | NULL         | Flag is illegal.                                             |
| 1,10434              | NULL         | ClientID is not matched with password (password contains ClientID related information). |
| 1,10450              | NULL         | Device internal error (Connection failed).                   |
| 1,10500              | NULL         | The device authentication to Developer Center failed (Unknown error in system). |
| 1,10300              | NULL         | Other errors.                                                |


## __Access Event__

| Event ID, Event Code | Carried Data | Description                                                  |
| :------------------- | :----------- | :----------------------------------------------------------- |
| 2,10200              | NULL         | Register successfully.                                       |
| 2,10404              | NULL         | Error occurs when Developer Center calls the API.                         |
| 2,10430              | NULL         | The DeviceSecret is wrong (Connection failed).               |
| 2,10431              | NULL         | The device is disabled (Connection failed).                  |
| 2,10433              | NULL         | Flag is illegal.                                             |
| 2,10434              | NULL         | ClientID is not matched with password (password contains ClientID related information). |
| 2,10450              | NULL         | Device internal error (Connection failed).                   |
| 2,10471              | NULL         | The implementation version is not supported (Connection failed). |
| 2,10473              | NULL         | Access heartbeat error (Connection timeout).                 |
| 2,10474              | NULL         | Network error (Connection timeout).                          |
| 2,10475              | NULL         | Server changed.                                              |
| 2,10476              | NULL         | AP connection error.                                         |
| 2,10500              | NULL         | Registration failed (Unknown error in system).               |


## __Subscription Event__ 

| Event ID, Event Code | Carried Data | Description              |
| :------------------- | :----------- | :----------------------- |
| 3,10200              | NULL         | Successful subscription. |
| 3,10300              | NULL         | Failed subscription.     |

## __Data Sending Event__ 

| Event ID, Event Code | Carried Data        | Description                                      |
| :------------------- | :------------------ | :----------------------------------------------- |
| 4,10200              | NULL/qint32_t* type | Send transparent transmission data successfully. |
| 4,10210              | NULL/qint32_t* type | Send TSL data successfully.                      |
| 4,10220              | NULL/qint32_t* type | Send location data successfully.                 |
| 4,10300              | NULL/qint32_t* type | Failed to send transparent transmission data     |
| 4,10310              | NULL/qint32_t* type | Failed to send TSL data.                         |
| 4,10320              | NULL/qint32_t* type | Failed to send location data.                    |

##   __Data Receiving Event__ 

| Event ID, Event Code | Carried Data                                         | Description                                                  |
| :------------------- | :--------------------------------------------------- | :----------------------------------------------------------- |
| 5,10200              | uint8_t* t type                                      | Received the transparent transmission data issued by Developer Center.    |
| 5,10210              | ttlv pointer type                                    | Received the TSL data issued by Developer Center.                         |
| 5,10211              | uint16_t array type. Format: \<pkgId>,\<ID1>,\<ID2>… | Receive the querying of TSL model from Developer Center<br/>\<pkgId\>	Request package ID issued by Developer Center.<br/>\<ID\>	TSL ID. |

##   __De-registration Event__

| Event ID, Event Code | Carried Data | Description                                            |
| :------------------- | :----------- | :----------------------------------------------------- |
| 6,10200              | NULL         | Successful de-registration (successful disconnection). |

##  __OTA Event__ 

| Event ID, Event Code | Carried Data                                                 | Description                                                  |
| :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 7,10700              | String type. Format: "\<componentNo\>","\<sourceVersion\>","\<targetVersion\>",<br/><batteryLimit\>,\<minSignalIntensity\>,\<useSpace\> | There is an upgrade task.<br/>\<componentNo\>: 	Component identifier.<br/>\<sourceVersion\>: Source version.<br/>\<targetVersion\>: Target version.<br/>\<batteryLimit\>: Minimum power required for OTA upgrade. \<minSignalIntensity\>: Minimum signal strength in OTA upgrade.      \<useSpace\>: Disk space required for OTA upgrade. |
| 7,10701              | String type. Format: "\<componentNo\>",\<length\>,"\<MD5\>"  | The device starts downloading firmware package.<br/>\<componentNo\>: Component identifier.<br/>\<length\>: Size the firmware package in OTA upgrade.<br/>\<MD5\>: md5 value of firmware package in OTA upgrade. |
| 7,10702              | NULL                                                         | Firmware is downloaded in progress.                          |
| 7,10703              | String type. Format: "\<componentNo\>",\<length\>,"\<startaddr\>","\<piece_length\>" | The firmware package is downloaded successfully.<br/>\<componentNo>: Component identifier. <br/>\<length>: Size the firmware package in OTA upgrade.<br/>\<startaddr>: Start address of the current downloaded block in the OTA upgrade package. |
| 7,10704              | NULL                                                         | Firmware is upgrading.                                       |
| 7,10705              | NULL                                                         | Firmware is upgraded successfully.                           |
| 7,10706              | NULL                                                         | Failed to upgrade the firmware.                              |
| 7,10707              | NULL                                                         | Advertisement of the first device operation result.          |

##  __Developer Center Event__

| Event ID, Event Code | Carried Data | Description                                                  |
| :------------------- | :----------- | :----------------------------------------------------------- |
| 8,10428              | NULL         | Traffic limiting caused by high-frequency messages on the device. |
| 8,10429              | NULL         | Traffic limiting caused by excessive number of single device activations or daily requests |

## __Wake-up Event__

| Event ID, Event Code | Carried Data | Description                              |
| :------------------- | :----------- | :--------------------------------------- |
| 9,10200              | NULL         | Device is woken up from deep sleep mode. |