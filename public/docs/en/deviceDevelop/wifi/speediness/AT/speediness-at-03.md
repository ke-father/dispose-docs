# Quick Access to Developer Center

##  __1. Test Communication__

Send __“AT”__ to the module with __QthTools-MCU Simulator__ to test whether the function of AT commands is normal.  If QthTools-MCU Simulator prints __“OK”__  as the return value, it indicates that your device has communicated with the PC successfully. The interaction example of QthTools-MCU Simulator is shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-04.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-04.png)</a>

## __2. Enable BLE__

You need to enable BLE before network provisioning.
| AT Command |    Function    |Response|
|:--------:|:-------------:|:-------------:|
|AT+QBTDEBUG|Enable or disable BLE|OK or ERROR|

as shown below:

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-051.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-051.png)</a>

<font color=#999AAA >Note: Wi-Fi station mode is enabled by default. </font>

## __3. Initialization (Optional)__

You need to initialize some configurations for the first time you access Developer Center.

__QuecThing Configuration AT Commands__


|               AT Command               |                           Function                           | Description                                                  |
| :------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| AT+QIOTCFG="productinfo"[,\<pk>,\<ps>] |                       Configure PK/PS                        | \<pk>ProductKey generated when you create a product;<br> \<ps>ProductSecret generated when you create a product; |


<font color=#999AAA >Note: See [Product Configuration Command](/en/deviceDevelop/wifi/AT/API/wifi-at-03.md) for details.</font>


__1) Export TSL file__

Enter __Developer Center__ and click __Export__  in __"Define Feature"__ page to export  __TSL file in JSON format__ to the local PC.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-06.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-06.png)</a>

__2) Configure PK and PS__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-07.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-07.png)</a>

__3) Add product information__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-08.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-08.png)</a>

* __ProductKey__: ProductKey generated when a product is created.
* __ProductSecret__: ProductSecret generated when a product is created.
* __Data Format__: __TSL__ or __Custom__.  Select the data format corresponding to the product.
* __Feature Definition File__: Click __"Import"__  and select the __TSL file__ exported in 1). <font color=#999AAA >Note: This step is skipped if the data format is Custom.</font>


__4) Send product configuration AT command__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-09.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-09.png)</a>

<font color=#999AAA >Unless otherwise specified, there is no need to modify other configurations.</font>



## __4. Access Developer Center__

__1) AT command__

|      AT Command       |            Function            | Description                                                  |
| :-------------------: | :----------------------------: | :----------------------------------------------------------- |
| AT+QIOTREG=<reg_mode> | Configure Developer Center  connection mode | __0__: De-register and disable QuecThing <br>__1__: Manually enable QuecThing; If PK/PS/domain name and port is not configured, ERROR will be returned.<br>__2__: Automatically enable QuecThing; In this mode, the device is connected to Developer Center automatically after booting and ERROR will be returned if PK/PS/domain name and port is not configured. |

<font color=#999AAA >Note: See [Product Configuration Command](/en/deviceDevelop/wifi/AT/API/wifi-at-03.md) for details.</font>


__2) Start to access__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-10.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-10.png)</a>

__3) Response to successful access__
When QthTools-MCU Simulator prints the return values in the following figure, it indicates that your device has successfully access Developer Center and can communicate with Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-11.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-11.png)</a>



## __5. QuecOne Network Provisioning__

### Precondition：
Download QuecOne and register an account.
### Procedure:
1. Log in to QuecOne with your account and turn on the Bluetooth and Wi-Fi of your mobile phone. On the "Home" page, click “⊕” in the upper right corner.
   
   <br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-28.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-28.png" style="width: 30%" /></a>

2. Select "Search device nearby" in the pop-up window and enter the "Search for Device" page. Then QuecOne will automatically search for nearby devices, and the searched devices will be displayed in the current page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-29.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-29.png" style="width: 30%" /></a>

3. Click the searched device, QUEC_BLE_xxxx, and enter the "Network Configuration" page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-30.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-30.png" style="width: 30%" /></a>

4. Enter the Wi-Fi name and password of the current network environment to configure the network (Only 2.4 GHz Wi-Fi band is supported).

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-31.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-31.png" style="width: 30%" /></a>

5. In the "Bind Device" page, QuecOne will automatically recognize and fill in the MAC address. You need to manually enter the device name (In this example, the device is named smart aromatherapy diffuser), and then click "Bind".

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-32.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-32.png" style="width: 30%" /></a>

6. So far, the smart aromatherapy diffuser is successfully added, and it is displayed in the "Device List" on the QuecOne "Home" page .

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-33.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-33.png" style="width: 30%" /></a>

   At this time, you can see that this device is already online in Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png)</a>
