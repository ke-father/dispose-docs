# Data Interaction

<font color=#999AAA >Note: The prerequisite for TSL-format data interaction is selecting __TSL__  as the data format when a product is created.</font>

## **TSL-format Data Interaction**

TSL is a data model established by Developer Center for physical entity device, which is used to describe product feature to  facilitate data parsing. You can execute __AT+QIOTMODELTD__ and __AT+QIOTMODELRD__  to make the device interact with Developer Center after the device successfully connected to Developer Center.

<font color=#999AAA >Note: See [Data Interaction Command](/en/deviceDevelop/wifi/AT/API/wifi-at-04.md) for details.</font>



## __1. Uplink TSL Data__

### __Uplink TSL Data AT Command__

|                   AT Command                   |   Function    | Description                                                  |
| :--------------------------------------------: | :-----------: | :----------------------------------------------------------- |
| AT+QIOTMODELTD=\<mode\>,\<length\>[,\<pkgID\>] | Send TSL data | \<mode\> Sending mode.<br>\<length\> Length of the data to be sent.<br>[\<pkgID\>] Package ID, which is only required when the device needs to reply to data request from Developer Center. |

__1) Reply to response data__ 

* #### __Developer Center reads TSL data__

  In __Device Debug__ of __Device Details__ page, click __Read Data in Batches__ to bulk read TSL property data.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-12.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-12.png)</a>
  	


* #### __Device replies to TSL data to Developer Center__

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-13.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-13.png)</a>

  __①__ Select the Package ID (PkgID) to be sent.<br>
  __②__ Click __Send Response Data__ to reply to the TSL data to Developer Center.

<br>

* ####   __Parse the event callback__

  * __+QIOTEVT: 5,10211,4,1,3,2__<br>
    __5__ : Receive the downlink business event.<br>
    __10211__ : Receive the event code of Developer Center reading TSL property.<br>
    __4__ : Package ID (PkgID), which is only valid when the module receives and replies to TSL data.<br>
    __1,3,2__ : ID of TSL property to be read, which is 1, 3 and 2 respectively.

  <br>

* #### __Example__

```c
AT+QIOTMODELTD=0,27,4
>
{"1":189.5,"2":30,"3":true}
OK
```



__2) Send TSL property data__

The device sends the TSL properties __The remaining content of  essential oil__ , __Frequency of regular reporting__ and __On/Off status__ to Developer Center.

* __Device sends TSL property__

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-14.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-14.png)</a>

  __①__ Select the TSL properties to be sent.<br>
  __②__ Click __Send TSL Data__ to send TSL property to Developer Center.

  <br>

  __Example__

  ```c
  AT+QIOTMODELTD=0,27
  >
  {"1":189.5,"2":30,"3":true}
  OK
  ```


* __Information displayed on Developer Center__

  When the device sent TSL data to Developer Center, you can click __Device Debug__ of __Device Details__ page to view the  __Real-time Data__ and TSL data in __JSON__ format uploaded in real time.  At this time, Developer Center has received the remaining content of  essential oil __(189.5)__ , frequency of regular reporting __(30)__ and on/off status __(true)__ reported by the device, as shown below.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-15.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-15.png)</a>


__3) Send TSL alert event__

Send __Alert to lack of essential oil__ to Developer Center, in which the event ID is __4__ and the output parameter ID is __1__. 

* __Device send TSL event__

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-16.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-16.png)</a>

  __①__ Select the TSL event to be sent.<br>
  __②__ Click __Send TSL Data__ to send TSL event to Developer Center.
  <br>

  __Example__

  ```c
  AT+QIOTMODELTD=0,18
  >
  {"4":{"1":200.85}}
  OK
  ```

* __Information displayed on Developer Center__

  You can view the event data records in the __Event Logs__ of __Device Details__ page.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-17.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-17.png)</a>

## __2. Downlink TSL Data__

__Downlink TSL Data AT Command__

|          AT Command           |                  Function                  |                         Description                          |
| :---------------------------: | :----------------------------------------: | :----------------------------------------------------------: |
|        AT+QIOTMODELRD?        | Query the number of remaining data packets | +QIOTMODELRD: \<remain_pieces\>: Integer type. The number of remaining data packets. |
| AT+QIOTMODELRD=\<req_length\> |               Query TSL data               | \<req_length\>: Integer type. Length of the data queried. The length range is based on the actual value returned by the Test Command. |

__Developer Center issues service__

Open __Device Debug__ > __Service Calls__ in "Device Details" page to simulate the scenario of remotely issuing control commands. In "Device Service" , select __Service Calls__ > __Select Service__ , select __Working Mode 2__ in "Set Parameter", and finally click __Send Command__.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-18.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-18.png)</a>

* __Unbuffered Mode__ 

  In __Unbuffered Mode__ , when the device receives the data sent by Developer Center, it will print the data on __MCU__. For example, if Developer Center issues the service, the results displayed on QthTools-MCU Simulator are shown as follows.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-19.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-19.png)</a>

  __Interaction Data Description__	

  * __+QIOTEVT: 5,10210,13__ : The event notification that the device sent to MCU after receiving the TSL data from Developer Center.<br>
    __5__ : Event type indicating that the downlink data is received.<br>
    __10210__ : Event code indicating the issued TSL data is received.<br>
    __13__ : The length of the data received.<br>

  * __{"5":{"6":2}}__ : TSL service data in JSON format received from Developer Center.

  <br>

* __Buffer Mode__

  When the device receives TSL data, the device will print event __+QIOTEVT: 5,10210__ to __MCU__. The event indicates the device has received the TSL data issued by Developer Center. If you want to view the content, MCU needs to send __AT+QIOTMODELRD=\<req_length\>__.

  Click __"Read TSL data"__ to read the buffered TSL data, as shown below.
  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-20.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-20.png)</a>

  __Interaction Data Description__

  * __+QIOTEVT: 5,10210__ : The event notification that the device sent to MCU after receiving the TSL data from Developer Center.<br>
    __5__ : Event type indicating that the downlink data is received.<br>
    __10210__: Event code indicating the issued TSL data is received.<br>

  * __+QIOTMODELRD: 13,0,0__ : Response of querying TSL data.<br>
    __13__ : The length of the data received.<br>
    __0__ : The remaining length of the current data packet.<br>
    __0__ : Number of remaining data packets.<br>

  * __{"5":{"6":2}}__ : TSL service data in JSON format received from Developer Center.


<br>

## __Transparent Transmission Data Interaction__

<font color=#999AAA >Note: The prerequisite for transparent transmission data interaction is selecting __Custom__  as the data format when a product is created.</font>

Transparent transmission data can be used according to actual scenario. If you do not need Developer Center to parse the data but only transparently transmit data, you can execute __AT+QIOTMODELTD__ and __AT+QIOTMODELRD__  to make the device interact with Developer Center after the device successfully connects to Developer Center. Any type of data can be transparently transmitted.

<font color=#999AAA >Note: See [Data Interaction Command](/en/deviceDevelop/wifi/AT/API/wifi-at-04.md) for details.</font>

## __1. Uplink Transparent Transmission Data__

Send the remaining content of essential oil in transparent transmission format to Developer Center.

__Uplink Transparent Transmission Data AT Command__

|                 AT Command                 |              Function              |                         Description                          |
| :----------------------------------------: | :--------------------------------: | :----------------------------------------------------------: |
| AT+QIOTSEND=\<mode\>,\<length\>[,\<data\>] | Send transparent transmission data | \<mode\>Sending mode<br>\<length\>Length of the data to be sent.<br>\<data\>Data to be sent. |

Execute __AT+QIOTSEND__ to send transparent transmission data to Developer Center. First, set the number of bytes of data to be sent. After waiting for the module to return __>__ , input the data to be sent. If the sent data exceeds the set N bytes, only the first N bytes will be sent, and the latter data will be considered as invalid data and will not be sent.

* __QthTools-MCU Simulator Operating Steps__

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-21.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-21.png)</a>

  __①__ Input the transparent transmission data to be sent in the "Send" box.<br>
  __②__ Click __"Transparently Transmit"__ to send transparent transmission data to Developer Center.

  <br>

  __Example__

  ```c
  AT+QIOTSEND=0,20
  >
  OilsCurrentML:180.65
  OK
  ```

* __Information displayed on Developer Center__
  After the device sends transparent transmission data, click __Data Logs__ in __Device Details__ page to view real-time data and long-period storage service data. Select one piece of data and click __View__ to select the data format, as shown in the following figure.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-22.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-22.png)</a>

  The data format is the rule stored in the data log, which can be __Text__、__Hex__ or __Base64__. Select the uplink data format of the device. At this time, Developer Center has received the remaining content of essential oil reported by the device (180.65), as shown in the following figure.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-23.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-23.png)</a>

## __2. Downlink Transparent Transmission Data__

Issue transparent transmission data.

__Downlink Transparent Transmission Data AT Command__

|        AT Command        |                  Function                  |                         Description                          |
| :----------------------: | :----------------------------------------: | :----------------------------------------------------------: |
|        AT+QIOTRD?        | Query the number of remaining data packets |              Response: +QIOTRD: <remain_pieces>              |
| AT+QIOTRD=\<req_length\> |    Query transparent transmission data     | \<req_length\>: Length of the data queried. The length range is based on the actual value returned by the Test Command. |

__Operation on Developer Center__

Click __Device Debug__ in __Device Details__ page to perform transparent transmission data interaction.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-24.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-24.png)</a>

① Select __Data Format__ (Hex or Text) . __Hex__: Convert the data or byte array to a hexadecimal string. __Text__: It is displayed in a certain encoding format, which defaults to UTF-8.<br>
② Input __“Power:1”__ in __Content__ as the command to turn on the smart aromatherapy diffuser. The content contains a maximum of 4096 characters.<br>	
③ Click __Send Command__, and Developer Center can issue the inputted content to the device.

<br>

* __Unbuffered Mode__

  In __Unbuffered Mode__ , when the device receives the data issued by Developer Center, it will print the data on MCU. For example, after the Developer Center issues __“Power:1”__, the results displayed on QthTools-MCU Simulator are shown as follows.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-25.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-25.png)</a>


	* __+QIOTEVT: 5,10200,7__ : The event notification that the device sends to MCU after receiving the transparent transmission data from Developer Center.<br>
		__5__: Event type indicating that the downlink data is received.<br>
		__10200__: Event code indicating the received data is in transparent transmission format.<br>
		__7__: The length of the data received.<br>
	
	*  __Power:1__: The transparent transmission data received from Developer Center.

<br>

* __Buffer Mode__ 

  When the device receives transparent transmission data, the device will print event __+QIOTEVT: 5,10200__ to MCU. The event indicates the device has received the transparent transmission data issued by Developer Center. If you want to view the content, MCU needs to send __AT+QIOTRD=\<req_length\>__.

  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-26.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-26.png)</a>

  __Interaction Data Description__

  * __+QIOTEVT: 5,10200__: The event notification that the device sends to MCU after receiving the transparent transmission data from Developer Center.<br>
    __5__: Event type indicating that the downlink data is received.<br>
    __10200__ Event code indicating the received data is in transparent transmission format.<br>

  * __+QIOTRD: 7,0,0__: Response of querying transparent transmission data.<br>
    __7__ : The length of the data received.<br>
    __0__ : The remaining length of the current data packet.<br>
    __0__ : Number of remaining data packets.<br>
    __Power:1__: The transparent transmission data received from Developer Center.<br>