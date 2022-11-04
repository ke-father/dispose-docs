# Quick Access to Developer Center

##  __1. Test Communication__

Send __“AT”__ to the module with __QthTools-MCU Simulator__ to test whether the function of AT commands is normal.  If QthTools-MCU Simulator prints __“OK”__  as the return value, it indicates that your device has communicated with the PC successfully. The interaction example of QthTools-MCU Simulator is shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-04.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-04.png)</a>




##  **2. Initialization**

You need to initialize some configurations for the first time the device accesses Developer Center.

__QuecThing Configuration AT Commands__


|               AT Command               |                  Function                  |                         Description                          |
| :------------------------------------: | :----------------------------------------: | :----------------------------------------------------------: |
| AT+QIOTCFG="productinfo"[,\<pk>,\<ps>] |              Configure PK/PS               | \<pk> is ProductKey generated when you create the product.<br/> \<ps> is ProductSecret generated when you create the product. |
|       AT+QIOTCFG="psk"[,\<psk\>]       | Configure pre-shared key of NB-IoT module. | \<psk> is the pre-shared key you set when add the device on Developer Center. <font color=#999AAA >Default value: disable</font> |

<font color=#999AAA >Note: See [Product Configuration Command](/en/deviceDevelop/nb/AT/API/nb-at-03.md) for details.</font>


__1) Export TSL file__

Enter __Developer Center__ and click __Export__  in __"Define Feature"__ page to export  __TSL file in JSON format__ to the local PC.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-13.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-13.png"></a>



__2) Configure PK and PS__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-14.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-14.png"></a>


__3) Add product information__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-15.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-15.png"></a>

* __ProductKey__: ProductKey generated when a product is created.
* __ProductSecret__: ProductSecret generated when a product is created.
* __Data Format__: __TSL__ or __Custom__.  Select the data format corresponding to the product.
* __Feature Definition File__: Click __"Import"__  and select the __TSL file__ exported in 1).

<font color=#999AAA >Note: This step is skipped if the data format is Custom.</font>

<br>

__4) Configure product information__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-16.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-16.png"></a>

<font color=#999AAA >Please do not change other configurations if there is no special requirements. </font>

**5) Configure PSK**

If DTLS is selected for data encryption method when you create the product, you have to configure the PSK. If the data encryption method is Plain Text, there is no need to configure PSK.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-17.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-17.png"></a>

<font color=#999AAA >Note: PSK is the key you set when add the device on Developer Center. You can enter module IMEI number if no key is set for the device.</font>




## **3. Access Developer Center**

__Developer Center Connection AT Command__

|      AT Command       |            Function            | Description                                                  |
| :-------------------: | :----------------------------: | :----------------------------------------------------------- |
| AT+QIOTREG=<reg_mode> | Configure Developer Center  connection mode | __0__: De-register and disable QuecThing<br>__1__: Manually enable QuecThing<br>__2__: Automatically enable QuecThing; In this mode, the device is connected to Developer Center automatically after booting and ERROR will be returned if PK/PS/domain name and port is not configured.<br/> |

<font color=#999AAA >Note: See [Product Configuration Command](/en/deviceDevelop/nb/AT/API/nb-at-03.md)</font>.


__Example__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-18.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-18.png"></a>


When QthTools-MCU Simulator prints the return values in the following figure, it indicates that your device has successfully access Developer Center and can communicate with Developer Center.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-19.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-19.png"></a>