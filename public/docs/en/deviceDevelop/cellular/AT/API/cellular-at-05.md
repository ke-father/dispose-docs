 # OTA Upgrade Command

## **OTA Upgrade Command Overview**

These AT commands realize the features of configuring OTA upgrade and reading OTA upgrade data.

|           AT Command            |           Description            |
| :-----------------------------: | :------------------------------: |
| [AT+QIOTOTAREQ](#AT+QIOTOTAREQ) |     Request OTA upgrade plan     |
| [AT+QIOTUPDATE](#AT+QIOTUPDATE) | Configure OTA upgrade operations |
|  [AT+QIOTOTARD](#AT+QIOTOTARD)  |     Read SOTA data by blocks     |

## **AT Command Description**

<span id="AT+QIOTOTAREQ">  </span>

## <font color=#A52A2A  >__AT+QIOTOTAREQ (Request OTA upgrade plan)__</font>

* __Description__: This command requests an OTA upgrade plan from Developer Center.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.



### **Test Command**

* __Issue__

  ```c
  AT+QIOTOTAREQ=?
  ```

* __Response__

  Return the parameter range supported to be set.

  ```c
  +QIOTOTAREQ: <info>
  
  OK
  ```

### **Write/Execution Command**

* __Issue__

  ```c
  AT+QIOTOTAREQ[=<info>]
  ```

* __Response__

  Successful execution. Any upgrade plan will be reported by event +QIOTEVT: 7.

  ```c
  OK
  ```


  If there is any error:

  ```c
  ERROR
  ```


__Parameter__

 * __`<info>`__： Integer type. Whether SHA256 is needed to verify the file.
   * __`0`__: No
    * __`1`__: Yes


__NOTE__

This command is supported in SDK versions 2.8.2 and above.

#### **Example**

 <font color=#999AAA >Note: This command is valid only when the OTA upgarde plan has been initiated on Developer Center.</font>

__Example 1 (Initiate OTA upgrade plan request)__

__i.__ Configure and enable SHA256 to verify the file.

__ii.__ Initiate OTA upgrade plan request.

```c
AT+QIOTOTAREQ=1

OK
AT+QIOTOTAREQ

OK
```


<span id="AT+QIOTUPDATE">  </span>

## <font color=#A52A2A  >__AT+QIOTUPDATE (Configure OTA upgrade operations)__</font>

* __Description__: This command configures OTA upgrade operations.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.




### **Test Command**

* __Issue__

  ```c
  AT+QIOTUPDATE=?
  ```

* __Response__

  Return the parameter range supported to be configured.

  ```c
  +QIOTUPDATE: (range of supported <update_action>s)
  
  OK
  ```


### **Write Command**

* __Issue__

  ```c
  AT+QIOTUPDATE=<update_action>
  ```

* __Response__

  If OTA upgrade operations are configured successfully:

  ```c
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<update_action>`__ Integer type. OTA upgrade operations.
   * __`0`__ : Refuse the upgrade
    * __`1`__ : Confirm the upgrade
    * __`2`__ : MCU requests downloading the next firmware data package
    * __`3`__: MCU reports the upgrade status

__NOTE__

This command is supported in SDK versions 2.3.3 and above.

#### **Example**

<font color=#999AAA >Note: This command is valid only when the OTA upgarde plan has been activated on Developer Center.</font>

__Example 1 (Respond to the OTA upgrade plan and confirm the upgrade.)__

```c
AT+QIOTUPDATE=1

OK
```

***

<span id="AT+QIOTOTARD">  </span>

## <font color=#A52A2A  >__AT+QIOTOTARD (Read SOTA data by blocks)__</font>

* __Description__: This command reads SOTA data by blocks.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTOTARD=?
  ```

* __Response__

  Return the parameter range supported to be configured.

  ```c
  +QIOTOTARD: <start>,(range of supported <max_length>s)
  
  OK
  ```


### **Write Command**

* __Issue__

  ```c
  AT+QIOTOTARD=<start>,<length>
  ```

* __Response__

  If the command is executed successfully:

  ```c
  +QIOTOTARD: <start>,<length>
  <data>
  
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

__Parameter__

 * __`<start>`__: Integer type. Start position of reading data. Unit: byte.
 * __`<max_length>`__: Integer type. The maximum length of data to be read. Length range is subject to the value returned by Test Command.
 * __`<length>`__: Integer type. Length of data actually returned.
 * __`<data>`__: Byte stream type. Firmware data.


__NOTE__

This command is supported in SDK versions 2.3.3 and above.

#### **Example**

 <font color=#999AAA >Note: This command is valid only when the OTA upgarde plan has been initiated on Developer Center.</font>

__Example 1 (Read SOTA data by blocks)__
SOTA data is read by blocks until it is completely read.

```c
AT+QIOTOTARD=1,1024
data...

OK
AT+QIOTOTARD=1024,1024
data...

OK
AT+QIOTOTARD=2048,1024
data...

OK
......
```

***