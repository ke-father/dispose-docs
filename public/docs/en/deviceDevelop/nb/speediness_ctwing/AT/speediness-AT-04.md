# Data Interaction

<font color=#999AAA >Note: The prerequisite for TSL-format data interaction is selecting __TSL__  as the data format when a product is created.</font>

TSL is a data model established by Developer Center for physical entity device, which is used to describe product feature to  facilitate data parsing. You can execute __AT+QIOTMODELTD__ and __AT+QIOTMODELRD__  to make the device interact with Developer Center after the device successfully connected to Developer Center.

<font color=#999AAA >Note: See [Data Interaction Command](/en/deviceDevelop/nb/AT/API/nb-at-04.md) for details.</font>


## **Uplink TSL Data**

__Uplink TSL Data AT Command__

|                   AT Command                   |   Function    |                         Description                          |
| :--------------------------------------------: | :-----------: | :----------------------------------------------------------: |
| AT+QIOTMODELTD=\<mode\>,\<length\>[,\<pkgID\>] | Send TSL data | \<mode\> Sending mode.<br/>\<length\> Length of the data to be sent.<br/>[\<pkgID\>] Package ID, which is only required when the device needs to reply to data request from Developer Center. |

__1) Reply response data__ 

* __Developer Center reads TSL data__

  In __Device Debug__ of __Device Details__ page, click __Read Data in Batches__ to bulk read TSL property data.

  

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-20.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-20.png"></a>


* __Device calls event callback__	
  The device will automatically reports the event code to MCU after receiving the data issued by Developer Center, facilitating MCU to read device status.

  __Parse the response to event callback__

  * __+QIOTEVT: 5,10211,13,1,2,3,4,5,6,7__ <br>
    __5__ : Downlink business event.<br>
    __10211__: Event code of Developer Center reading TSL property.<br>
    __13__: Package ID (PkgID), which is only valid when the module receives and replies to TSL data.<br>
    __1,2,3,4,5,6,7__: ID of TSL property to be read, which is 1, 3 and 2 respectively.<br>

* __Device replies to TSL data to Developer Center__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-21.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-21.png"></a>

__①__ Select the Package ID (PkgID) to be sent.<br>
__②__ Click __Send Response Data__ to reply to the TSL data to Developer Center.



__2) Send TSL property data__

The device actively sends the TSL properties data to Developer Center.

* __Steps of Sending TSL property data__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-22.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-22.png"></a>

__①__ Select the TSL properties to be sent.<br>
__②__ Click __Send TSL Data__ to send TSL property to Developer Center.



* __Information displayed on Developer Center__

  When the device sent TSL data to Developer Center, you can click __Device Debug__ of __Device Details__ page to view the  __Real-time Data__ and TSL data in __JSON__ format uploaded in real time, as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-23.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-23.png"></a>




__Send TSL alert event__


* __Steps of sending TSL alert event__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-24.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-24.png"></a>

__①__ Select the TSL event to be sent.<br>
__②__ Click __Send TSL Data__ to send TSL event to Developer Center.


* __Information displayed on Developer Center__

  You can view the event data records in the __Event Logs__ of __Device Details__ page.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-25.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-25.png"></a>



## **Downlink TSL Data**

__Downlink TSL Data AT Command__

|          AT Command           |                  Function                  |                         Description                          |
| :---------------------------: | :----------------------------------------: | :----------------------------------------------------------: |
|        AT+QIOTMODELRD?        | Query the number of remaining data packets |         +QIOTMODELRD: \<remain_pieces\> is returned.         |
| AT+QIOTMODELRD=\<req_length\> |               Query TSL data               | \<req_length\>: Integer type. Length of the data queried. The length range is based on the actual value returned by the Test Command. |

__Developer Center issues commands__

Open __Device Debug__ in "Device Details" page to simulate the scenario of remotely issuing control commands. In __Device Debug__ , select the required properties, and finally click __Send Command__ to issue the properties to device.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-26.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-26.png"></a>



__Unbuffered Mode__ 

In __Unbuffered Mode__ , when the device receives the data sent by Developer Center, it will print the data on __MCU__. For example, if Developer Center issues the service, the results displayed on QthTools-MCU Simulator are shown as follows.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-27.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-27.png"></a>



* __+QIOTEVT: 5,10210,10__: The event notification that the device sent to MCU after receiving the TSL data from Developer Center.<br>
  __5__: Event type indicating that the downlink data is received.<br>
  __10210__: Event code indicating the issued TSL data is received.<br>
  __10__ : The length of the data received.<br>

* __{"4":true}__: TSL service data in  Json format received from Developer Center.

__Buffer Mode__

When the device receives TSL data, the device will print event __+QIOTEVT: 5,10210__ to __MCU__. The event indicates the device has received the TSL data issued by Developer Center. If you want to view the content, MCU needs to send __AT+QIOTMODELRD=\<req_length\>__.

Click __"Read TSL data"__ to read the buffered TSL data, as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-28.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-28.png"></a>


__Interaction Data Description__

* __+QIOTEVT: 5,10210__: The event notification that the device sent to MCU after receiving the TSL data from Developer Center.<br>
  __5__: Event type indicating that the downlink data is received.<br>
  __10210__: Event code indicating the issued TSL data is received.<br>

* __+QIOTMODELRD: 10,0,0__: Response of querying TSL data.<br>
  __10__: The length of the data received.<br>
  __0__: The remaining length of the current data packet.<br>
  __0__: Number of remaining data packets.<br>

* __{"4":true}__: TSL service data in  Json format received from Developer Center.