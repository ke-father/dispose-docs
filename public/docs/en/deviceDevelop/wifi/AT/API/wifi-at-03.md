# Product Configuration Command

## **Product Configuration Command Overview**

|           AT Command            |          Description          |
| :-----------------------------: | :---------------------------: |
|    [AT+QIOTCFG](#AT+QIOTCFG)    | Configure optional parameters |
|    [AT+QIOTREG](#AT+QIOTREG)    |   Configure connection mode   |
|  [AT+QIOTSTATE](#AT+QIOTSTATE)  |    Query connection status    |
| [AT+QIOTMCUVER](#AT+QIOTMCUVER) | Configure MCU version number  |

## **AT Command Description**

<span id="AT+QIOTCFG">  </span>

## <font color=#A52A2A  >__AT+QIOTCFG (Configure optional parameters)__</font><br>

* __Description__: This command configures optional parameters.
* __Maximum Response Time__: 300 ms.
* __Characteristics__:   The command takes effect immediately. The configurations are saved automatically.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTCFG=?
  ```

* __Response__

  ```c
  +QIOTCFG: "productinfo",<pk>,<ps>
  +QIOTCFG: "server",(list of supported <server_type>s),<server_URL>
  +QIOTCFG: "lifetime",(range of supproted <lifetime>s)
  +QIOTCFG: "buffer",(list of supported <buffer_mode>s)
  +QIOTCFG: "act",(range of supported <contextID>s)
  +QIOTCFG: "session_mode",(list of supported <session_mode>s)
  +QIOTCFG: "tsl",(list of supported <tsl_mode>s)
  +QIOTCFG: "dk_ds",<dk>[,<ds>]
  +QIOTCFG: "txid_mode",(list of supported <txid_mode>s)
  +QIOTCFG: "gw_mode",(list of supported <gw_mode>s)[,<gw_key>]
  OK
  ```

* __NOTE__

  | Parameters in AT+QIOTCFG | Supported in QuecThing SDK Versions |
  | :----------------------: | :---------------------------------: |
  |       productinfo        |           2.3.3 and above           |
  |          server          |           2.3.3 and above           |
  |         lifetime         |           2.3.3 and above           |
  |          buffer          |           2.3.3 and above           |
  |           act            |           2.3.3 and above           |
  |       session_mode       |           2.7.2 and above           |
  |           tsl            |           2.8.0 and above           |
  |          dk_ds           |           2.8.2 and above           |
  |        txid_mode         |          2.10.0 and above           |
  |         gw_mode          |          2.10.0 and above           |

* __Example (Query the configurable information and range)__


  After the module is powered up, if no parameter is configured, execute __AT+QIOTCFG=?__ to query the configurable information and range.

  ```c
  [TX]AT+QIOTCFG=?
  
  [RX]+QIOTCFG: "productinfo",<pk>,<ps>
  +QIOTCFG: "server",1,<server_URL>
  +QIOTCFG: "lifetime",(1-65535)
  +QIOTCFG: "buffer",(0,1)
  +QIOTCFG: "act",(1-15)
  +QIOTCFG: "session_mode",(0,1)
  +QIOTCFG: "tsl",(0,1)
  +QIOTCFG: "dk_ds",<dk>,<ds>
  +QIOTCFG: "txid_mode",(0,1)
  +QIOTCFG: "gw_mode",<gw_mode>,<gw_key>
  [RX]
  
  OK
  ```

###  **Write Command**

* __Query/Configure product information__

  * __Issue__		

    ```c
    AT+QIOTCFG="productinfo"[,<pk>,<ps>]
    ```

  * __Response__

    If the optional parameters are omitted, query the current setting:

    ```c
    +QIOTCFG: "productinfo",<pk>,<ps>,<ver> 
    
    OK
    ```

    If the optional parameters are specified, configure the product information:

    ```c
    OK
    ```

      If  there is any error:  

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<pk>`__ ：String type. ProductKey generated when a product is created.
    * __`<ps>`__ ：String type. ProductSecret generated when a product is created.
    * __`<ver>`__ ：String type. Protocol version used during the device authentication process.

  * __NOTE__

    This command is supported in SDK versions 2.3.3 and above.

  * __Example (Initialize product information.)___


  	```c
  	AT+QIOTCFG="productinfo","p****n","RMW**********Dlt"
  	
  	OK
  	```

* __Query/Configure the server information__

  * __Issue__

    ```c
    AT+QIOTCFG="server"[,<server_type>,<server_URL>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG:"server",<server_type>,<server_URL>
    
    OK
    ```

    If the optional parameter is specified, configure the server information:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<server_type>`__： Integer type. The supported protocol type.

      1     MQTT 

    * __`<server_URL>`__ ：String type. Server address (domain name and port of Developer Center). Default: "iot-south.quectel.com:1883".

  * __NOTE__

    This command is supported in SDK versions 2.3.3 and above.

* __Example (Configure the server information.)__

  	```c
  	AT+QIOTCFG="server",1,"iot-south.quectelcn.com:1883"
  	
  	OK

* __Query/Configure the lifetime of device__

  * __Issue__

    ```c
    AT+QIOTCFG="lifetime"[,<lifetime>] 
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "lifetime",<lifetime>
    
    OK
    ```

    If the optional parameter is specified, configure the lifetime of the device:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<lifetime>`__ ：Integer type. Device lifetime. Range: 1–65535. Default: 120. Unit: second.	 

  * __NOTE__

    This command is supported in SDK versions 2.3.3 and above.

* __Example (Configure the lifetime of device.)__

  	```c
  	AT+QIOTCFG="lifetime",120
  	
  	OK
  	
  	```

* __Query/Configure the buffer mode of downlink data__

  * __Issue__

  ```c
  AT+QIOTCFG="buffer"[,<buffer_mode>]
  ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "buffer",<buffer_mode>
    
    OK
    ```

    If the optional parameter is specified, configure the buffer mode of downlink data:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<buffer_mode>`__：Integer type. Enable or disable buffer mode for downlink data.

      0     Disable

      1     Enable

  * __NOTE__

    This command is supported in SDK versions 2.3.3 and above.

  * __Example (Enable the buffer mode of downlink data.)__



		AT+QIOTCFG="buffer",1
		
		OK

* __Query/Configure PDP context ID__

- __Issue__

  	```c
  	AT+QIOTCFG="act"[,<contextID>]
  	```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "act",<contextID>
    
    OK
    ```

    If the optional parameter is specified, configure the PDP context ID used for device connecting to Developer Center:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<contextID>`__ Integer type. PDP context ID. Range: 1–15. The actual range is subject to the specific module model.

  * __NOTE__

    This command is supported in SDK versions 2.3.3 and above.

  * __Example (Configure the PDP context ID used for device connecting to Developer Center.)__

    ```c
    AT+QIOTCFG="act",1
    
    OK
    ```

* __Query/Configure encryption mode of the connection between the device and Developer Center__

  * __Issue__

    ```c
    AT+QIOTCFG="session_mode"[,<session_mode>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "session_mode",<session_mode>[,<session_mode>]
    
    OK
    ```

    If the optional parameter is specified, Configure encryption mode of the connection between the device and Developer Center:

    ```c
    OK
    ```

   	If there is any error:
   	```c
   	ERROR
   	```

  * __Parameter__

    * __`<session_mode>`__ Integer type. Enable or disable encryption mode of the connection between the device and Developer Center.

      0     Disable

      1     Enable 

  * __NOTE__

    This command is supported in SDK versions 2.7.2 and above.

  * __Example (Enable encryption mode of the connection between the device and Developer Center.)__

    ```c
    AT+QIOTCFG="session_mode",1
    
    OK
    ```

* __Query/Configure TSL data format__

  * __Issue__

    ```c
    AT+QIOTCFG="tsl"[,<tsl_mode>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "tsl",<tsl_mode>
    
    OK
    ```

    If the optional parameter is specified, configure TSL data format:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<tsl_mode>`__ Integer type. TSL data format.

      0     TTLV 

      1     JSON 

  * __NOTE__

    This command is supported in SDK versions 2.8.0 and above.

  * __Example (Set TSL data format to JSON)__


		AT+QIOTCFG="tsl",1
		
		OK


* __Query/Configure custom DeviceKey and DeviceSecret__

  * __Issue__

    ```c
    AT+QIOTCFG="dk_ds",[<dk>[,<ds>]]
    ```

  * __Response__

    If the optional parameter is omitted, query the custom DeviceKey and DeviceSecret (only the DeviceKey and DeviceSecret customized by this command are available to be queried):

    ```c
    +QIOTCFG:"dk_ds",<dk>,<ds>
    
    OK
    ```

    If only \<dk\> is specified and is as an empty string, delete the customized \<dk\> and \<ds\>, and default configuration is used:

    ```c
    OK
    ```

    If only \<dk\> is specified and is not empty, customize the DeviceKey (then the device starts authentication process):

    ```c
    OK
    ```

    If the optional parameters are specified and are not empty, customize the DeviceKey and DeviceSecret:

    ```c
    OK
    ```

    If the optional parameters are specified and are empty strings, remove the customized DeviceKey and DeviceSecret:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<dk>`__ String type. Devicekey, that is customized unique identifier of the device. Cellular module defaults IMEI and wireless module, such as Wi-Fi module, defaults MAC address.
    * __`<ds>`__ String type. DeviceSecret generated after device authentication. 

  * __NOTE__

    This command is supported in SDK versions 2.8.2 and above.

  * __Example (Configure custom DeviceKey.)__


  	```c
  	AT+QIOTCFG="dk_ds",12345678
  	
  	OK
  	```


* __Query/Configure whether to return \<txID\> after sending uplink data__

  * __Issue__

    ```c
    AT+QIOTCFG="txid_mode"[,<txid_mode>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "txid_mode",<txid_mode>
    
    OK
    ```

    If the optional parameter is specified, configure whether to return <txID\> after sending uplink data:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__
    	* __`<txid_mode>`__ Integer type. Whether to return \<txID\> after sending uplink data.
    	

    	0     Not return
    	
    	1     Return
    	
    	* __`<txID>`__ Integer type. Uplink data ID.
    	
    	If QoS = 0, this value is 0.
    	
    	If QoS = 1 or 2, this range is 1–65535.

  * __NOTE__

    This command is supported in SDK versions 2.10.0 and above. 

  * __Example (Configure uplink data)__

    ```c
    [TX]AT+QIOTCFG="txid_mode",1
    
    [RX]OK
    ```


* __Query/Configure gateway authentication mode__

  * __Issue__

    ```c
    AT+QIOTCFG="gw_mode",[<gw_mode>[,<gw_key>]]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG:"gw_mode",<gw_mode>[,<gw_key>]
    
    OK
    ```

    If the optional parameter is specified, configure gateway authentication mode

     ```c
    OK
     ```

    If there is any error:

    ```c
    ERROR
    ```

  * __Parameter__

    * __`<gw_mode>`__ Integer type. Sub-device authentication mode used by gateway.

    0     No authentication

    1     Authenticate sub-device with ProductKey generated by Developer Center

    2     Authenticate sub-device with the customized ProjectKey

    * __`<gw_key>`__ String type. Authentication key. Valid only when <gw_mode>=1 or 2 . Range: 1–32. Unit: byte.

   	1. If \<gw_mode\>=1, this parameter is sub-device’s ProductKey generated on Developer Center.
   	2. If \<gw_mode\>=2, this parameter is customized projectKey. 

  * __NOTE__

    This command is supported in SDK versions 2.10.0 and above. 

  * __Example (Configure gateway authentication mode)__

    ```c
    [TX]AT+QIOTCFG="gw_mode",1,1
    
    [RX]OK
    ```

<span id="AT+QIOTREG">  </span>

## <font color=#A52A2A  >__AT+QIOTREG (Configure connection mode)__</font>

* __Description__: This command configures the connection mode.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately. The configuration is saved automatically.



### **Test Command**

* __Issue__

  ```c
  AT+QIOTREG=?
  ```

* __Response__

  Return the range of supported connection mode.

  ```c
  +QIOTREG: (range of supported <reg_mode>s)
  
  OK
  ```


### **Read Command**

* __Issue__

  ```c
  AT+QIOTREG?
  ```

* __Response__

  Return the range of supported connection mode.

  ```c
  +QIOTREG: <reg_mode>
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTREG=<reg_mode>
  ```

* __Response__

  If the command is executed successfully:

  ```c
  OK
  ```

  If there is any error:

   ```c
  ERROR
   ```

***


__Parameter__

 * __`<reg_mode>`__ Integer type. Connection mode.
   * __`0`__ ：De-register Developer Center and disable QuecThing.
    * __`1`__ ：Enable QuecThing manually. ERROR is returned if ProductKey, ProductSecret  and domain name and port of Developer Center are not configured.
    * __`2`__ ：Enable QuecThing automatically. The device connects to Developer Center   automatically after being powered on. ERROR is returned if ProductKey,  ProductSecret and domain name and port of Developer Center are not configured.

__NOTE__

This command is supported in SDK versions 2.3.3 and above.

#### **Example**

__Example 1 (Query connection mode.)__
Response __0__ : De-register Developer Center and disable QuecThing.

```c
AT+QIOTREG?

+QIOTREG: 0

OK
```

__Example 2 (Enable QuecThing manually.)__

```c
AT+QIOTREG=1

OK
```

***

<span id="AT+QIOTSTATE">  </span>

## <font color=#A52A2A  >__AT+QIOTSTATE (Query connection status)__</font>

* __Description__: This command queries the status of the connection between the device and Developer Center.
* __Maximum Response Time__: 300 ms.




### **Read Command**

* __Issue__

  ```c
  AT+QIOTSTATE?
  ```

* __Response__

  Return the status of the connection between the device and Developer Center.

  ```c
  +QIOTSTATE: <state>
  
  OK
  ```

***

__Parameter__

 * __`<state>`__ Integer type. Connection status.
   * __`0`__：  Uninitialized
   * __`1`__：  Initialized
   * __`2`__：  Authenticating
   * __`3`__：  Authenticated
   * __`4`__：  Authentication failed
   * __`5`__：  Registering
   * __`6`__：  Registered and is waiting for subscribing 
   * __`7`__：  Registration failed
   * __`8`__：  Subscribed and data can be sent 
   * __`9`__：  Subscription failed
   * __`10`__： De-registering
   * __`11`__： De-registered 
   * __`12`__： De-registration failed

__NOTE__

This command is supported in SDK versions 2.3.3 and above.

#### **Example**

__Example 1 (Query connection status)__
Return __8__: The device has connected to Developer Center and can communicate with Developer Center.

```c
AT+QIOTSTATE?

+QIOTSTATE: 8

OK
```

***

<span id="AT+QIOTMCUVER">  </span>

## <font color=#A52A2A  >__AT+QIOTMCUVER (Configure MCU version number)__</font>

* __Description__: This command configures MCU version.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately. The configurations are saved automatically.


***

### **Test Command**

* __Issue__

  ```c
  AT+QIOTMCUVER=?
  ```

* __Response__

  Return whether the command is supported.

  ```c
  +QIOTMCUVER: <MCU_number>,<MCU_version>
  
  OK
  ```


### **Read Command**

* __Issue__

  ```c
  AT+QIOTMCUVER?
  ```

* __Response__

  Return the configured MCU ID and corresponding version:

  ```c
  +QIOTMCUVER: <MCU_number1>,<MCU_version1> 
  [+QIOTMCUVER: <MCU_number2>,<MCU_version2>] […]
  
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTMCUVER=<MCU_number>[, <MCU_number_version>]
  ```

* __Response__

  If the optional parameter is omitted, query the current setting:

  ```c
  +QIOTMCUVER: <MCU_number>,<MCU_version> 
  
  OK
  ```

  If the optional parameter is specified, configure MCU version number:

  ```c
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __<MCU_numberN>__：String type. MCU ID.
* __<MCU_versionN>__： String type. MCU version.

__NOTE__

This command is supported in SDK versions 2.3.3 and above.

#### **Example**

__Example 1 (Query the current MCU ID)__
Response: MCU ID: __MCU1__; MCU version number: __1.0.0__.

```c
AT+QIOTMCUVER?

+QIOTMCUVER: "MCU1","1.0.0"

OK
```

__Example 2 (Configure MCU ID and version number)__

Set the current MCU ID to MCU1 and MCU1 version number to 1.0.1.

```c
AT+QIOTMCUVER="MCU1","1.0.1"

OK
```