# Device Authorization API


## **Device Authorization API Overview**

| Function                              | Description                         |
| :------------------------------------ | :---------------------------------- |
| [quecIot.bindcodeSet()](#bindcodeSet) | Reports device binding information. |
| [quecIot.bindcodeGet()](#bindcodeGet) | Gets bind code of the device.       |
| [quecIot.rst()](#rst)                 | Resets device information.          |

## **API Description**

<span id="bindcodeSet">  </span>

## <font color=#A52A2A  >__quecIot.bindcodeSet__</font>

This function reports the binding information of the device. This function is valid only when the device is bound to App through short range network (including TCP/IP local area network and BLE). The device should report the bindcode same with that in App to Developer Center to actually bind the device.

__Prototype__

```c
quecIot.bindcodeSet(bindcode)
```

__Parameter__

__`bindcode`__: String type. Bind code of the device. The length is fixed to 16 bytes. Range: 0–9, A–F.

__`timeout`__: Maximum allowable biding time.  Range: 0-4294967295 ,Unit: second. When this parameter is 0, it indicates the binding is canceled.




__Return Value__

* __`True:`__ Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.3 and above.

__Example__

```python
quecIot.bindcodeSet("1234567890123456",120)
```

---

<span id="bindcodeGet">  </span>

## <font color=#A52A2A  >__quecIot.bindcodeGet__</font>

This function gets bind code of the device.

__Prototype__

```c
quecIot.bindcodeGet()
```

__Parameter__

None

__Return Value__

Successful execution returns the list of bindcode and timeout value. For example, [bindcode,120].

Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.10.3 and above.

__Example__

```python
ret = quecIot.bindcodeGet()
```

---

<span id="rst">  </span>

## <font color=#A52A2A  >__quecIot.rst__</font>

This function resets device information, including DeviceSecret and device bind code.

__Prototype__

```c
quecIot.rst()
```

__Parameter__

None

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```c
ret = quecIot.rst()
```

---