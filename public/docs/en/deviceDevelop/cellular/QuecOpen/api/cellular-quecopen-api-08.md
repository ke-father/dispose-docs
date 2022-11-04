# Device Authorization API


## **Device Authorization API Overview**

|                  Function                   |             Description             |
| :-----------------------------------------: | :---------------------------------: |
| [Ql_iotDBindcodeSet()](#Ql_iotDBindcodeSet) | Reports device binding information. |
| [Ql_iotDBindcodeGet()](#Ql_iotDBindcodeGet) |    Gets bind code of the device.    |
|          [Ql_iotRst()](#Ql_iotRst)          |     Resets device information.      |

## **API Description**

<span id="Ql_iotDBindcodeSet">  </span>

## <font color=#A52A2A  >__Ql_iotDBindcodeSet__</font>

This function reports the binding information of the device. This function is valid only when the device is bound to App through short range network (including TCP/IP local area network and BLE). The device should report the bindcode same with that in App to Developer Center to actually bind the device.

__Prototype__

```c
qbool Ql_iotDBindcodeSet(const char *bindcode, quint32_t timeout)
```

__Parameter__

* __Input__
  * __quint8_t *__  __`bindcode`__: String type. Bind code of the device. The length is fixed to 16 bytes. Range: 0–9, A–F.
  * __quint32_t__ __`timeout`__: Maximum allowable biding time.  Range: 0-4294967295 ,Unit: second. When this parameter is 0, it indicates the binding is canceled.


__Return Value__

* __`True:`__ Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.3 and above.

__Example__

```c
qbool ret = Ql_iotDBindcodeSet("1234567891234567", 120);
```

---

<span id="Ql_iotDBindcodeGet">  </span>

## <font color=#A52A2A  >__Ql_iotDBindcodeGet__</font>

This function gets bind code of the device.

__Prototype__

```c
quint32_t Ql_iotDBindcodeGet(char **bindcode)
```

__Parameter__

* __Input__
  * __quint8_t **__  __`bindcode`__: Bind code of the device.

__Return Value__

Remaining time for binding the device.

__NOTE__

This function is supported in SDK versions 2.10.3 and above.

__Example__

```c
quint8_t *bindcode = NULL;
quint32_t timeout = Ql_iotDBindcodeGet(&bindcode);
```

---

<span id="Ql_iotRst">  </span>

## <font color=#A52A2A  >__Ql_iotRst__</font>

 This funtion resets device information, including DeviceSecret and device bind code.

__Prototype__

```c
void Ql_iotRst(void)
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
qbool ret = Ql_iotRst();
```

---