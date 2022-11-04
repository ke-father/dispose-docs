# BLE Communication Protocol

This document introduces how APP access the QuecThing for BLE.


## __Communication Parameters__

● BLE communication service UUID: 0x180A<br />
● Binary protocol communication characteristic UUID: 0x9C40. (APP side adopts "Write Request" to transmit, and the device side adopts "Indicate" to transmit.) <br />
● Log transmission characteristic  UUID: 0x9C41 （The device side adopts "Notify" to transmit.）


## __Data Packet Format__

The protocol data is in binary data packet format, and the protocol components are as follows.

| Field Name                             | Length | Content                                                      |
| :------------------------------------- | :----- | :----------------------------------------------------------- |
| Protocol header / Version number (Ver) | 2 B    | Fixed to 0xAAAA.                                             |
| Data field length (Len)                | 2 B    | The number of bytes from the checksum to the data field. Range: 5-65535. The length is the actual data length, that is, the length before data conversion. |
| Checksum (Sum)                         | 1 B    | Sum the number of bytes from the packet ID to the data field. High-order overflow. |
| Packet ID (Packet Id)                  | 2 B    | 0x0000 and 0xFFFF are reserved. If the packet has a reserved value, it is considered as an illegal packet. |
| Command word (Cmd)                     | 2 B    | 0x0000 and 0xFFFF are reserved. If the packet has a reserved value, it is considered as an illegal packet. |
| Data field (Data)                      | N B    | Determined by the command word. It can be empty, if not, the content is generally in the TTLV format mentioned below. |

### __Protocol Header/Version Number__

1. To prevent the data content from including the data with protocol header style and affecting the judgment of the receiver, it is necessary to convert the data content except the protocol header. For the sender, when 0xAAAA is encountered, it is converted to 0xAA55AA; when 0xAA55AA is encountered, it is converted to 0xAA5555AA. For the receiver, when 0xAA is encountered, the 55 after 0xAA is discarded. (That is, for the sender, when 0xAAAA or 0xAA55 is encountered, insert 0x55 in the middle; for the receiver, when 0xAA is encountered, delete the 0x55 after.) 

2. The checksum calculation should be done prior to the Point 1 above.

3. When the receiver encounters data with the protocol header style, it considers this data as the beginning of a new packet, and the incomplete packet data before the protocol header is discarded.

4. Version number iteration rules: Starting from the far right and incrementing from A to F, that is, the new version numbers are 0xAAAB, 0xAAAC, 0xAAAD, 0xAAAE, 0xAAAF, 0xAABA, 0xAABB, etc.

### __Packet ID__

Each sender maintains its own packet ID. But for the response, the package ID should be the request package ID sent by the other party.

### __Command Words Division__

| Range           | Application Area                             |
| :-------------- | :------------------------------------------- |
| 0x0000          | Reserved.                                    |
| 0x0001 - 0x0FFF | The communication between QuecThing and Developer Center. |
| 0x1000 - 0x6FFF | Reserved.                                    |
| 0x7000 - 0x7FFF | The communication between QuecThing and APP. |
| 0x8000 - 0x8FFF | Customer project.                            |
| 0x9000 - 0xFFFF | Reserved.                                    |

### __TTLV Format__

The components of TTLV format are as follows.

| Field Name            | Length | Content                                                      |
| :-------------------- | :----- | :----------------------------------------------------------- |
| Data identifier（id） | 13 bit | Range: 1-8191. Unique among different command word. (Such as TSL model, device status, device information) |
| Data type（type）     | 3 bit  | Range: 0-7. See the table below for details.                 |
| Data length（length)  |        | See the table below for details                              |
| Data value（value）   |        | See the table below for details                              |

| Data Type               | Byte encoding (Binary 3 bit) | Data Length                                                  | Data Value   |
| :---------------------- | :--------------------------- | :----------------------------------------------------------- | :----------- |
| Boolean-false           | 000                          | NA                                                           | NA           |
| Boolean-true            | 001                          | NA                                                           | NA           |
| Enumerations and values | 010                          | Flag bit: 1 bit. (0 is positive; 1 is negative.) <br />Attenuation to the nth power of 10: 4 bit. <br />The number of the data byte: 3 bit. (The bytes number of data field minus 1.） |              |
| Binary data             | 011                          | The number of the data byte: 2 B.                            | Data Content |
| Structure               | 100                          | The number of the element: 2 B.                              |              |
| Reserved field          | 101-111                      |                                                              |              |

## __Flow Description__

### __1. Introduction__

1) Device Unbound State: Bound the device and the first APP to be authenticated and bound is as the administrator. After binding, the device restarts and enters the bound state. <br />2) Device Bound State: APP access requires authentication to ensure the service communication encryption.

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-10.png">![img](/en/deviceDevelop/ble/resource/platform-10.png)</a>

#### __Related Command__

| Command Name                                      | Byte Format | Type           | Direction                          | Description                                                  | Security                                                     |
| :------------------------------------------------ | :---------- | :------------- | :--------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Account authentication                            | 0x8011      | Write          | APP—>Device                        | After the mobile phone is connected to the BLE, the APP needs to send the account to the BLE, and the service communication is allowed only after the authentication is passed.<br />Argument ID: 1, 3 (Optional) |                                                              |
| Account authentication-Response                   | 0x801c      | Write Response | Device—>APP (Response in 0x8011)   | Argument ID: 3, 6                                            | Packet ID is pkgID in 0x8011.                                |
| Account query                                     | 0x8012      | Read           | APP—>Device                        | It can only be operated after authentication. And only the administrator operation is valid. | It can only be operated after authentication. And only the administrator operation is valid. |
| Account query-Response                            | 0x8013      | Read Response  | Device—>APP (Response in 0x8012）  | Authkey list                                                 | Packet ID is pkgID in 0x8012.                                |
| Account Authorization / De-authorization          | 0x8014      | Write          | APP—>Device                        | Argument ID: 1, 2                                            | It can only be operated after authentication. And only the administrator operation is valid. |
| Account Authorization / De-authorization-Response | 0x801d      | Write Response | Device—>APP ( Response in 0x8014） | Argument ID: 5                                               | Packet ID is pkgID in 0x8014.                                |

#### __Argument Field Definition__

| Name         | Type      | Argument ID（13 bit） | Note                                                         |
| :----------- | :-------- | :-------------------- | :----------------------------------------------------------- |
| authkey      | Binary    | 1                     | The account to end-user. 16 bytes.                           |
| auth_account | Boolean   | 2                     | TRUE: Account authorization <br/>FALSE: Cancel Account Authorization |
| pinCode      | Numerical | 3                     | 100000-999999.                                               |
| Random       | Binary    | 4                     | 16 bytes.                                                    |
| result       | Boolean   | 5                     | TRUE: Success<br>FALSE: Failure                              |
| pairMode     | Numerical | 6                     | 1: Numeric Comparison<br>2: Just Works <br>3: Passkey Entry <br>4: Out of Band |

### __2. Binding__

1) When the device is in the unbound status, BLE pairing is set to without entering a PIN code (or with the default PIN code). 

2) Turn on the specific broadcast, and the manufacturer filed contains the device MAC (6 bytes) + product PK (6 bytes).  (If the device is in the bound state, the broadcast packet will no longer contain the product PK, which to prevent other APPs from being affected when they bind other devices. The APP can filter out broadcast packets that are not in the binding process by whether the manufacturer field contains the product PK.)
<font color=#999AAA >Note:  The MAC is included in the broadcast packet because the APP needs the MAC to perform the connection operation. For example, if the mobile phone which APP connects to is changed and APP needs to reconnect with the new mobile phone, the connection object is confirmed according to the MAC in the broadcast packet. Android  OS can obtain the MAC through the MAC field, but IOS has a privacy shield to the MAC field, so MAC is obtained from the manufacturer-defined field. </font>

3) Select the device for pairing and connection in APP.

4) APP generates the random AuthKey (16 bytes) and PIN (100000-999999), and sends them to the device. 

5) The device saves the received AuthKey and PIN, then resets to set the pairing connection to encryption status and set the PIN code as the one received from APP, the device enters the bound state. 

### __3. Authentication__

1) Authentication for the first binding: APP sends AuthKey, PK and PIN to the device.<br />
● AuthKey: Authentication key. When the device is in the unbound status, the first AuthKey received is saved and as a key for future authentication.  <br />
● PK: Product Key. The product key is used by the device to determine which product the accessed APP belongs to. If the PK is empty, the APP is a super APP.<br />
● PIN: BLE pairing password. PIN is only carried in the authentication for the first binding.<br />
● The AuthKey obtained from the first authentication is identified as an administrator.

2) After the device receives the authentication command from the APP, it returns Random and ifUsePin. <br />
● Random: Random code used for the future communication encryption. 16 bytes.<br />
● ifUsePin: Determine whether the pairing connection requires a PIN code.  FALSE indicates PIN code is not required for the pairing connection. TRUE means that PIN code carried in the first authentication is used for subsequent pairing connection. 

### __4. Authorization/De-authorization__

● Authorization/De-authorization: It means that the APP adds the authentication AuthKey in the device through the authorization command, so that other APPs can log in with the new AuthKey authentication. (Only the administrator operation is valid.)<br />
● Note: If the administrator de-authorizes itself, the device resets and resumes initialization.

### __5. Service Communication__

● After authentication, the APP obtains Random. And all subsequent communications need to be encrypted.<br />
● Service communication encryption rules: aes128_cbc(PKCS5Padding(payload),key=!!MAC!!,iv=random).

#### __1) Transparent Transmission__

##### __Command__

| Command Name                             | Byte Format | Type  | Direction   | Description                                                  | Security                                   |
| :--------------------------------------- | :---------- | :---- | :---------- | :----------------------------------------------------------- | :----------------------------------------- |
| Send the transparent transmission data   | 0x0023      | Write | APP—>Device | -APP sends transparent transmission data.  <br>-Command followed by byte data. | Reliable and guaranteed by BLE - Indicate. |
| Report the transparent transmission data | 0x0024      | Event | Device—>APP | -The device reports transparent transmission data.<br> -Command followed by byte data. | Reliable and guaranteed by BLE - Indicate. |

#### __2) TSL Model__

##### __Command__

| Command Name                      | Byte Format | Type          | Direction                        | Description                                                  | Security                      |
| :-------------------------------- | :---------- | :------------ | :------------------------------- | :----------------------------------------------------------- | :---------------------------- |
| Query TSL model state             | 0x0011      | Read          | APP—>Device                      | -APP gets the specified TSL data properties.<br>-If the data field is empty, that is to query all TSL data of the device.<br>-If the data field is not empty, that is to query the specified TSL data of the device. The format of the data field is a Byte array, and 2 bytes represent a TSL ID. |                               |
| Report TSL model state - Response | 0x0012      | Read Response | Device—>APP (Response in 0x0011) | The response is returned when the device receives the request from Developer Center to obtain the TSL data. | Packet ID is pkgID in 0x0011. |
| Send TSL data                     | 0x0013      | Write         | APP—>Device                      | -APP calls the device and sets the properties of TSL model. <br>-Multiple TTLV formats. <br>-Asynchronous response. The change of device is reported by TSL data report command. |                               |
| Report TSL data                   | 0x0014      | Event         | Device—>APP                      | -Including the TSL data reported by the device, the triggering of events and the response after the service is called. |                               |

#### __3) OTA__

● Universal file transfer protocol is adopted.

##### __Universal File Transfer Protocol__

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-11.png">![img](/en/deviceDevelop/ble/resource/platform-11.png)</a>

__File Transfer Command__

| Command Name                     | Byte Format | Type           | Direction         | Required Argument ID | Optional Argument ID | Description                                                  |
| :------------------------------- | :---------- | :------------- | :---------------- | :------------------- | :------------------- | :----------------------------------------------------------- |
| File query                       | 0x7020      | Read           | Receiver->Sender  | 1, 4                 | 2, 3                 |                                                              |
| File query-Response              | 0x7021      | Read Response  | Sender->Receiver  | None                 | 1, 2, 3, 4, 5, 6, 12 |                                                              |
| File Notification                | 0x7022      | Event          | Sender->Receiver  | 1, 4, 5, 6           | 2, 3, 12             |                                                              |
| File transfer control            | 0x7023      | Write          | Sender<->Receiver | 7                    | 8, 11                | 1. If the control action is Pause (val=3), the argument with ID 8 must be carried to inform the peer the timeout time.<br>2. If the control action is Receive (val=2), the argument with ID 11 must be carried to inform the peer the maximum packet length. |
| File transfer control-Response   | 0x7024      | Write Response | Sender<->Receiver | None                 | None                 |                                                              |
| Send file packet                 | 0x7025      | Write          | Sender->Receiver  | 9, 10                | None                 |                                                              |
| Send file packet send - Response | 0x7026      | Write Response | Receiver->Sender  | 9                    | None                 |                                                              |

__Argument Field Definition__

| Field Name            | Type      | Argument ID（13 bit） | Note                                                         |
| :-------------------- | :-------- | :-------------------- | :----------------------------------------------------------- |
| File Type             | Numerical | 1                     |                                                              |
| URL Path              | Binary    | 2                     | Receiver -> Sender: The path for downloading the file. <br>Sender -> Receiver: The path for saving the file. |
| File Name             | Binary    | 3                     |                                                              |
| Check Algorithm       | Numerical | 4                     | 0: MD5<br>1: CRC32<br>2: SHA256                              |
| Check Code            | Binary    | 5                     |                                                              |
| File Size             | Numerical | 6                     |                                                              |
| Control Action        | Numerical | 7                     | 1: Decline<br>2: Receive<br>3: Pause<br>4: Proceed<br>5: Cancel<br>6: Receiving completed and success<br>7: Receiving completed but failed |
| Delay Duration        | Numerical | 8                     | Unit: s. Within this delay duration, no control actions (proceed, pause, etc.) is performed. If time out, triggering the peer to send the Cancel control action to cancel the transmission. |
| Start Address         | Numerical | 9                     |                                                              |
| Packet Data           | Binary    | 10                    |                                                              |
| Maximum Packet Length | Numerical | 11                    |                                                              |
| Version Number        | Binary    | 12                    |                                                              |

##### __Specific Process__

- OTA Process

__a)__ The following arguments are passed in for the file notification command (APP->Decive). 

__i.__ File type, which is as the upgrade type identification. (1: Indicates the FOTA firmware).

__ii.__ File size.

__iii.__ File check algorithm.

__iv.__ File check code.

__v.__ Version number.

__b)__ The following arguments are passed in for the file transfer control command (Device->APP).

__i.__ Control action: Receive/Decline

__ii.__ Maximum packet length（This argument must be passed in if the control action is Receive.)

>* (Optional) File transfer control -Response (APP->Device).

__c)__ The following arguments are passed in for the file packet sending (APP -> Device).

__i.__ Start address (that is, offset.)

__ii.__ Packet data

__d)__ File packet sending - Response (Device -> APP)

>* (Optional) The following arguments are passed in for the file transfer control command (APP -> Device).
>
>__i.__ Control action: Pause.
>
>__ii.__ Delay duration (When pause, the pause duration should be informed to the device).
>
>*  File transfer control - Response (Device -> APP).

>* (Optional) The following arguments are passed in for the file transfer control command (APP -> Device).
>
>__i.__ Control action: Proceed.
>
>*  File transfer control - Response (Device -> APP).

__e)__ The following arguments are passed in for the file transfer control command (Device ->APP). 

__i.__ Control action: Receiving completed and success/Receiving completed but failed.

 >* Note<br />
 >  1. The device supports the timeout judgment, if there is no correct parsable data within 15 s, the device sends the command *File transfer control (Control action: Cancel)*. <br />
 >  2. After receiving the Pause control action, if the device does not receive the file transfer control command with *Proceed control action* within the specified delay duration, sends the file transfer control command with *Cancel control action*. <br />
 >  3. Only one APP is allowed to trigger the OTA upgrade on the device side. When an APP is on OTA upgrade, the upgrade plans on other APPs will be declined by the device.<br />

