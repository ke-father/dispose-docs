# AT Command Overview

## **1. Product Configuration Command**

|  AT Command   |          Description          |
| :-----------: | :---------------------------: |
|  AT+QIOTCFG   | Configure optional parameters |
|  AT+QIOTREG   |   Configure connection mode   |
| AT+QIOTSTATE  |    Query connection status    |
| AT+QIOTMCUVER | Configure MCU version number  |

<font color=#999AAA >Note: See [Product Configuration Command](/en/deviceDevelop/wifi/AT/API/wifi-at-03.md) for details.</font>

<br>

## **2. Data Interaction Command**

|   AT Command   |                   Description                    |
| :------------: | :----------------------------------------------: |
|  AT+QIOTSEND   |    Send transparent transmission data to Developer Center     |
|   AT+QIOTRD    | Read transparent transmission data issued by Developer Center |
| AT+QIOTMODELTD |               Send TSL data to Developer Center               |
| AT+QIOTMODELRD |           Read TSL data issued by Developer Center            |
|  AT+QIOTINFO   |  Request QuecThing to report device information  |

<font color=#999AAA >Note: See [Data Interaction Command](/en/deviceDevelop/wifi/AT/API/wifi-at-04.md) for details.</font>

<br>

## **3. OTA Upgrade Command**

|  AT Command   |           Description            |
| :-----------: | :------------------------------: |
| AT+QIOTOTAREQ |     Request OTA upgrade plan     |
| AT+QIOTUPDATE | Configure OTA upgrade operations |
| AT+QIOTOTARD  |     Read SOTA data by blocks     |

<font color=#999AAA >Note: See [OTA Upgrade Command](/en/deviceDevelop/wifi/AT/API/wifi-at-05.md) for details.</font>

<br>



## **4. GNSS&LBS Positioning Command**

|  AT Command   |                         Description                          |
| :-----------: | :----------------------------------------------------------: |
| AT+QIOTLOCIN  | Obtain/Report location data of the built-in positioning feature of the module |
| AT+QIOTLOCEXT |   Report location data obtained from external GNSS module    |

<font color=#999AAA >Note: [GNSS&LBS Positioning Command](/en/deviceDevelop/wifi/AT/API/wifi-at-07.md) for details.</font>

<br>

## **5. Device Authorization Command**

| AT Command  |            Description            |
| :---------: | :-------------------------------: |
| AT+QIOTBINDCODE | Report the device binding information |
| AT+QIOTRST  |     Reset device information      |

<font color=#999AAA >Note: See [Device Authorization Command](/en/deviceDevelop/wifi/AT/API/wifi-at-08.md) for details.</font>

<br>