# Device Authorization Command

## **Device Authorization Command Overview**

|         AT Command          |            Description             |
| :-------------------------: | :--------------------------------: |
| [AT+QIOTBINDCODE](#AT+QIOTBINDCODE) | Report the device binding information. |
|  [AT+QIOTRST](#AT+QIOTRST)  |     Reset device information.      |

## **AT Command Description**

<span id="AT+QIOTBINDCODE">  </span>

## <font color=#A52A2A  >__AT+QIOTBINDCODE (Report the device binding information)__</font>

* __Description__: This command reports device binding information.
* __Maximum Response Time__: 300 ms.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTBINDCODE=?
  ```

* __Response__

  Return the parameter range supported to be set.

  ```c
  +QIOTBINDCODE: <timeout>,<bindcode>
  
  OK
  ```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTBINDCODE?
  ```

* __Response__

  Return the current setting

  ```c
  +QIOTBINDCODE: <timeout>,<bindCode>
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTBINDCODE=<timeout>[,<bindCode>]
  ```

* __Response__

  * If the command is executed successfully:

    ```c
    OK
    ```

  * If there is any error:

    ```c
    ERROR
    ```

***


__Parameter__

 * __`<timeout>`__: Integer type. Maximum allowable biding time.  Range: 0-4294967295 ,Unit: second. When this parameter is 0, it indicates the binding is canceled.
 * __`<bindCode>`__: String type. String type. Bind code of the device. The length is fixed to 16 bytes. Range: 0–9, A–F.



__NOTE__

This function is supported in SDK versions 2.10.3 and above.

#### **Example**

__Example 1 (Query the maximum allowable binding time and bind code of the value)__  

```c
[TX]AT+QIOTBINDCODE?

[RX]+QIOTBINDCODE:  105,"7F369C6E6CE6BC9C"

[RX]OK
```

<font color=#999AAA >Note: If you send Read Command when the device is in the unbound state, ERROR will be returned.</font>

__Example 2 (Set the maximum allowable binding time)__  

```c
[TX]AT+QIOTBINDCODE=120

[RX]OK
```

__Example 3 (Disable the allowable  binding time and to set the bind code value)__  

```c
[TX]AT+QIOTBINDCODE=0,"0123456789ABCDEF"

[RX]OK

```

***

<span id="AT+QIOTRST">  </span>

## <font color=#A52A2A  >__AT+QIOTRST (Reset device information)__</font>

* __Description__: This command resets device information, including DeviceSecret and device bind code.
* __Maximum Response Time__: 300 ms.


### Test Command

* __Issue__

  ```c
  AT+QIOTRST=?
  ```

* __Response__

  Return whether the command is valid.

  ```c
  OK
  ```

### **Execution Command**

* __Issue__

  ```c
  AT+QIOTRST
  ```

* __Response__

  * If the command is executed successfully:

    ```c
    OK
    ```

  * If there is any error:

    ```c
    ERROR
    ```

***



__NOTE__

This function is supported in SDK versions 2.10.0 and above.

#### **Example**

__Example 1 (Reset DeviceSecret and device bind code)__  

```c
[TX]AT+QIOTRST

[RX]OK

```

***