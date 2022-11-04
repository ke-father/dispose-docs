# Product Configuration API

## **Product Configuration API Overview**

| Function                                      | Description                                                  |
| :-------------------------------------------- | :----------------------------------------------------------- |
| [quecIot.init()](#init)                       | Initializes configurations and enables QuecThing.            |
| [quecIot.setConnmode()](#setConnmode)         | Configures the connection mode between the device and Developer Center.   |
| [quecIot.getConnmode()](#getConnmode)         | Gets the connection mode between the device and Developer Center.         |
| [quecIot.getWorkState()](#getWorkState)       | Gets the connection status between the device and Developer Center.       |
| [quecIot.setEventCB()](#setEventCB)           | Sets callback function for the device and Developer Center interaction event. |
| [quecIot.setProductinfo()](#setProductinfo)   | Sets product information.                                    |
| [quecIot.getProductinfo()](#getProductinfo)   | Gets product information.                                    |
| [quecIot.setServer()](#setServer)             | Sets server information.                                     |
| [quecIot.getServer()](#getServer)             | Gets server information.                                     |
| [quecIot.setLifetime()](#setLifetime)         | Configures the device lifetime.                              |
| [quecIot.getLifetime()](#getLifetime)         | Gets the device lifetime.                                    |
| [quecIot.setPdpContextId()](#setPdpContextId) | Configures PDP context ID used by device to connect Developer Center.     |
| [quecIot.getPdpContextId()](#getPdpContextId) | Gets the PDP context ID used by device to connect Developer Center.       |
| [quecIot.setSessionFlag()](#setSessionFlag)   | Enables or disables encryption mode for the connection between the device and Developer Center. |
| [quecIot.getSessionFlag()](#getSessionFlag)   | Queries whether the encryption mode of the connection between the device and Developer Center is enabled. |
| [quecIot.setSoftVersion()](#setSoftVersion)   | Sets software version ID of the device.                      |
| [quecIot.getSoftVersion()](#getSoftVersion)   | Gets software version ID of the device.                      |
| [quecIot.setMcuVersion()](#setMcuVersion)     | Sets MCU ID and the corresponding version number.            |
| [quecIot.getMcuVersion()](#getMcuVersion)     | Gets MCU ID and the corresponding version number.            |
| [quecIot.setDkDs()](#setDkDs)                 | Customizes DeviceKey and DeviceSecret.                       |
| [quecIot.getDkDs()](#getDkDs)                 | Gets the customized DeviceKey and DeviceSecret.              |

## **API Description**

<span id="init"> </span>

## <font color=#A52A1A  >__quecIot.init__</font>

This function initializes configurations and enables QuecThing.

__Prototype__

```py
quecIot.init()
```

__Parameter__

None

__Return__

* __`True`__:&nbsp;Successful execution
* __`False`__:&nbsp;Failed execution

__NOTE__

This function is supported in SDK version 2.3.3 and above.
This function can only be called once to initialize configurations before using QuecThing.

__Example__

```py
ret = quecIot.init()
```

---

<span id="setConnmode">  </span>

## <font color=#A52A1A  >__quecIot.setConnmode__</font>

This function configures the connection mode between the device and Developer Center. You can configure the connection mode before enabling QuecThing or when QuecThing is running.

__Prototype__

```py
quecIot.setConnmode(mode)
```

__Parameter__

* __`mode`__: Integer type. Connection mode.
  * __`0`__: Exit from or do not connect to Developer Center
  * __`1`__: Connect to Developer Center

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK version 2.3.3 and above.

__Example__

```py
ret = quecIot.setConnmode(1)
```

---

<span id="getConnmode">  </span>

## <font color=#A52A1A  >__quecIot.getConnmode__</font>

This function gets the connection mode between the device and Developer Center.

__Prototype__

```py
quecIot.getConnmode()
```

__Parameter__

None

__Return Value__

* Integer type. Connection mode.
  * __`0`__: Connection is not initiated
  * __`1`__: Connection is initiated
  * __`Other values`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
status = quecIot.getConnmode()
```

---

<span id="getWorkState"> </span>

## <font color=#A52A1A  >__quecIot.getWorkState__ </font>

This function gets the connection status between the device and Developer Center.

__Prototype__

```py
quecIot.getWorkState()
```

__Parameter__

None

__Return Value__

* Integer type. Connection status.
  * __`0`__: Uninitialized
  * __`1`__: Initialized
  * __`2`__: Authenticating
  * __`3`__: Authenticated 
  * __`4`__: Authentication failed 
  * __`5`__: Registering
  * __`6`__: Registered and is waiting for subscribing
  * __`7`__: Registration failed
  * __`8`__: Subscribed and data can be sent
  * __`9`__: Subscription failed
  * __`10`__: De-registering
  * __`11`__: De-registered
  * __`12`__: De-registration failed
  * __`Other values`__: Failed execution

__Example__

```py
status = quecIot.getWorkState()
```

---

<span id="setEventCB">  </span>

## <font color=#A52A1A  >__quecIot.setEventCB__</font>

This function sets callback function for the device and Developer Center interaction event (The callback function should be registered before you connecting the device to Developer Center).

__Prototype__

```py
quecIot.setEventCB(eventCb)
```

__Parameter__

* __Passed callback function__

  * __`eventCb`__: Callback function for the device and Developer Center interaction event.

    * __Prototype__

      ```py
      eventCb(data_list)
      ```

      * __Parameter__
        * __`data_list`__: Formal parameter in sequence type.

          * __`data_list[0]`__: Integer type. Event identifier. See [Device and Platform Interaction Event](/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-09.md) for details.
          * __`data_list[1]`__: Integer type. Error code.  See [Device and Platform Interaction Event](/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-09.md) for details.
          * __`data_list[2]`__: Carried data.  See [Device and Platform Interaction Event](/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-09.md) for details.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK version 2.3.3 and above. 

---

<span id="setProductinfo">  </span>

## <font color=#A52A1A  >__quecIot.setProductinfo__</font>

This function sets product information. The product information contains ProductKey and ProductSecret, which are generated when you create the product in Developer Center.

__Prototype__

```py
quecIot.setProductinfo(product_key,product_secret)
```

__Parameter__

* __`product_key`__: String type. ProductKey generated when you create the product on Developer Center.
* __`product_secret`__: String type. ProductSecret generated when you create the product on Developer Center.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK version 2.3.3 and above. 

__Example__

```py
ret = quecIot.setProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh")
```

---

<span id="getProductinfo">  </span>

## <font color=#A52A1A  >__quecIot.getProductinfo__</font>

This function gets product information.

__Prototype__

```py
quecIot.getProductinfo()
```

__Parameter__

None

__Return Value__

* Successful execution returns product information.
  * __`index 0`__: String type. ProductKey generated when you create the product on Developer Center. 
  * __`index 1`__: String type. ProductSecret generated when you create the product on Developer Center.
  * __`index 2`__: String type. Protocol version used during the device authentication process.
* Failed execution returns null.

__NOTE__

This function is supported in SDK version 2.3.3 and above.

__Example__

```py
ret = quecIot.getProductinfo()
```

---

<span id="setServer">  </span>

## <font color=#A52A1A  >__quecIot.setServer__</font>

This function sets server information.

__Prototype__

```py
quecIot.setServer(type,server)
```

__Parameter__

* __`type`__: Integer type. Protocol type. Optional parameter. Default value 1 is used if this parameter is omitted. 
  * __`1`__: MQTT
* __`server`__: String type. Server address (domain name and port of Developer Center). Optional parameter. Default value "iot-south.quectel.com:1883" is used if this parameter is omitted.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK version 2.3.3 and above.

__Example__

```py
ret = quecIot.setServer(1,"iot-south.quectel.com:1883")
```

---

<span id="getServer">  </span>

## <font color=#A52A1A  >__quecIot.getServer__</font>

This function gets server information.

__Prototype__

```py
quecIot.getServer()
```

__Parameter__

None

__Return Value__

* Successful execution returns protocol type and server address.
  * __`index 0`__: Integer type. Protocol type. 
  * __`index 1`__: String type. Server address. 
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ret = quecIot.getServer()
```

---

<span id="setLifetime">  </span>

## <font color=#A52A1A  >__quecIot.setLifetime__</font>

This function configures the device lifetime.

__Prototype__

```py
quecIot.setLifetime(life_time)
```

__Parameter__

* __`life_time`__: Integer type. Device lifetime. Range: 1–65535; Default: 120; Unit: second. Optional parameter. Default value is used if this parameter is omitted.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__备注__

This function is supported in SDK version 2.3.3 and above.
The API does not check the validity of the input value.

__Example__

```py
ret = quecIot.setLifetime(120)
```

---

<span id="getLifetime"> </span>

## <font color=#A52A1A  >__quecIot.getLifetime__</font>

This function gets the device lifetime.

__Prototype__

```py
quecIot.getLifetime()
```

__Parameter__

None

__Return Value__

* Successful execution returns device lifetime.
* Failed execution returns null.

__NOTE__

This function is supported in SDK version 2.3.3 and above.

__Example__

```py
lifetime = quecIot.getLifetime()
```

---

<span id="setPdpContextId">  </span>

## <font color=#A52A1A  >__quecIot.setPdpContextId__</font>

This function configures PDP context ID used by device to connect Developer Center.

__Prototype__

```py
quecIot.setPdpContextId(contextID)
```

__Parameter__

* __`contextID`__: PDP context ID. Only 1 is supported currently. Optional parameter. Default value 1 is used if this parameter is omitted.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK version 2.3.3 and above.

__Example__

```py
ret = quecIot.setPdpContextId(1)
```

---

<span id="getPdpContextId">  </span>

## <font color=#A52A1A  >__quecIot.getPdpContextId__</font>

This function gets the PDP context ID used by device to connect Developer Center.

__Prototype__

```py
quecIot.getPdpContextId()
```

__Parameter__

None

__Return Value__

* Successful execution returns the PDP context ID used by device to connect Developer Center.
* Failed execution returns null.

__NOTE__

This function is supported in SDK version 2.3.3 and above.

__Example__

```py
contextid = quecIot.getPdpContextId()
```

---

<span id="setSessionFlag">  </span>

## <font color=#A52A1A  >__quecIot.setSessionFlag__</font>

This function enables or disables encryption mode for the connection between the device and Developer Center.

__Prototype__

```py
quecIot.setSessionFlag(sessionFlag)
```

__Parameter__

* __`sessionFlag`__: Enable or disable encryption mode of the session between the device and Developer Center. Optional parameter. Default value is used if this parameter is omitted.
  * __`FALSE`__: Disable (Default)
  * __`TRUE`__: Enable

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution


__NOTE__

This function is supported in SDK version 2.7.2 and above.

__Example__

```py
ret = quecIot.setSessionFlag(1)
```

---

<span id="getSessionFlag"> </span>

## <font color=#A52A1A  > __quecIot.getSessionFlag__ </font>

This function queries whether the encryption mode of the connection between the device and Developer Center is enabled.

__Prototype__

```py
quecIot.getSessionFlag()
```

__Parameter__

None

__Return Value__

* Successful execution returns the configurations.
* Failed execution returns null.

__NOTE__

This function is supported in SDK version 2.7.2 and above.

__Example__

```py
ret = quecIot.getSessionFlag()
```

---

<span id="setSoftVersion"> </span>

## <font color=#A52A1A  >__quecIot.setSoftVersion__</font>

This function sets software version ID of the device.

__Prototype__

```py
quecIot.setSoftVersion(appVer)
```

__Parameter__

* __`appVer`__: String type. Software version ID of the device.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.8.1 and above.

__Example__

```py
ret = quecIot.setSoftVersion("app")
```

---

<span id="getSoftVersion">  </span>

## <font color=#A52A1A  >__quecIot.getSoftVersion__</font>

This function gets software version ID of the device.

__Prototype__

```py
quecIot.getSoftVersion()
```

__Parameter__

None

__Return Value__

* Successful execution returns device software version ID.
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ver = quecIot.getSoftVersion()
```

---

<span id="setMcuVersion">  </span>

## <font color=#A52A1A  >__quecIot.setMcuVersion__</font>

This function sets MCU ID and the corresponding version number, which should be configured by the external MCU.

__Prototype__

```py
quecIot.setMcuVersion(compno,version)
```

__Parameter__

* __`compno`__: String type. MCU ID. Maximum length: 32 bytes.
* __`version`__: String type. Version number corresponding to the MCU ID. Maximum length: 64 bytes.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ret = quecIot.setMcuVersion("MCU","1_0_0")
```

---

<span id="getMcuVersion"> </span>

## <font color=#A52A1A  >__quecIot.getMcuVersion__</font>

This function gets MCU ID and the corresponding version number.

__Prototype__

```py
quecIot.getMcuVersion()
```

__Parameter__

None

__Return Value__

* Successful execution returns MCU ID and the corresponding version number.
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ret = quecIot.getMcuVersion()
```

---

<span id="setDkDs">  </span>

## <font color=#A52A1A  >__quecIot.setDkDs__</font>

This function customizes DeviceKey and DeviceSecret.

__Prototype__

```py
quecIot.setDkDs(dk,ds)
```

__Parameter Value__

* __`dk`__: String type. Devicekey, that is, customized unique identifier of the device. Cellular module defaults IMEI and wireless module, such as Wi-Fi module, defaults MAC address. Maximum length: 16 bytes. If this parameter is set to an empty string, this function deletes the customized DK and DS. Then the default configurations are used and the device needs to be authenticated again in Developer Center.
* __`ds`__: String type. DeviceSecret generated after device authentication. The length is fixed to 32 bytes. Only  when DK is customized, can DS be configured.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.8.1 and above.

__Example__

```py
ret = quecIot.setDkDs("B07xxxxxx2A3","VnhyXXXXXXSTFh")
```

---

<span id="getDkDs">  </span>

## <font color=#A52A1A  >__quecIot.getDkDs__</font>

This function gets the customized DeviceKey and DeviceSecret. This function only queries the DeviceKey customized by quecIot.setDkDs().

__Prototype__

```py
quecIot.getDkDs()
```

__Parameter__

None

__Return Value__

* Successful execution returns customized DeviceKey and DeviceSecret.
  * __`dk`__: String type. Customized DK.
  * __`ds`__: String type. Customized DS.
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.8.1 and above.
This function can be used only after you sets non-default DeviceKey and DeviceSecret.

__Example__

```py
ret = quecIot.getDkDs()
```

<br>

---