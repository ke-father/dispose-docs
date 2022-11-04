# OTA Upgrade API

## **OTA Upgrade API Overview**

| Function                                  | Description                               |
| :---------------------------------------- | :---------------------------------------- |
| [quecIot.otaRequest()](#otaRequest)       | Requests OTA upgrade plan from Developer Center.       |
| [quecIot.otaAction()](#otaAction)         | Configures OTA upgrade operations.        |
| [quecIot.mcuFWDataRead()](#mcuFWDataRead) | Reads firmware data stored in the device. |

## **API Description**

<span id="otaRequest">  </span>

## <font color=#A52A1A  >__quecIot.otaRequest__</font>

This function requests OTA upgrade plan from Developer Center.

__Prototype__

```py
quecIot.otaRequest(mp_mode)
```

__Parameter__

 * __`mp_mode`__:  Whether extra file verification SHA256 information is needed.
   * __`0`__: Not needed
    * __`1`__: Needed

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.8.2 and above.

__Example__

```py
ret = quecIot.otaRequest(0)
```

---

<span id="otaAction">  </span>

## <font color=#A52A1A  >__quecIot.otaAction__</font>

This function configures OTA upgrade operations when the device receives the upgrade task issued by Developer Center.

__Prototype__

```py
quecIot.otaAction(action)
```

__Parameter__

 * __`action`__: Integer type. OTA upgrade operation.
  * __`0`__: Refuse the upgrade
  * __`1`__: Confirm the upgrade
  * __`2`__: MCU requests downloading the next firmware data package
  * __`3`__: MCU reports the upgrading status

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ret = quecIot.otaAction(1)
```

---

<span id="mcuFWDataRead">  </span>

## <font color=#A52A1A  >__quecIot.mcuFWDataRead__</font>

This function reads firmware data stored in the device.

__Prototype__

```py
quecIot.mcuFWDataRead(addr,len)
```

__Parameter__

 * __`addr`__: Start address of reading data. Unit: byte.
 * __`len`__: Length of data to be read.


__Return Value__

* Successful execution returns the read data.
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ret = quecIot.mcuFWDataRead(0,1024)
```

---

