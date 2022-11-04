# DTU-Modbus API

## **DTU-Modbus API Overview**

| Function                              | Description                                                  |
| :------------------------------------ | :----------------------------------------------------------- |
| [quecIot.MBInit()](#MBInit)           | Initializes Modbus components.                               |
| [quecIot.MBCloudRecv()](#MBCloudRecv) | Transfers the format of the TSL data issued by Developer Center to Modbus format and sends the data to Modbus sub-device. |
| [quecIot.MBDeinit()](#MBDeinit)       | De-initializes Modbus components.                            |
| [quecIot.MBLocalRecv()](#MBLocalRecv) | Forwards Modbus data received by the serial port to Modbus components and processes the Modbus data. |

## **API Description**

<span id="MBInit">  </span>

## <font color=#A52A1A  >__quecIot.MBInit__</font>

This function initializes Modbus components. This function also configures the serial ports list used to burn configuration file (including device information, QuecThing configurations and serial port configurations; The file is generated by the tool provided by Quectel. Contact Quectel Technical Supports for details), registers callback functions used to send data to serial port and initializes QuecThing respectively.

__Prototype__

```py
quecIot.MBInit(uartList, sendFunc, initCb)
```

__Parameter__

* __Input Parameter__ 

  * __`uartList`__: List of serial ports used to burn configuration file. You should open the corresponding serial ports.

* __Input Callback Function__

  * __`sendFunc`__：Callback function of sending data to the serial port.  The serial port sending ability should be implemented in this callback function. 

    * __Prototype__

      ```py
      sendFunc(data_list)
      ```

    * __Parameter__

      * __`data_list`__: List type. Formal parameter of event information.

    * __Return Value__

      * __`data_list[0]`__: Integer type. Serial port ID.
      * __`data_list[1]`__: Byte array. Data to be sent out.

   * __`initCb`__: After ModBus components are initialized, the device information contained in the configuration file are passed in the callback function. You should implement the operations of serial port sending and receiving, and device connecting to Developer Center.

     * __Prototype__

       ```py
       initCb(data_dict)
       ```

     * __Parameter__

       * __`data_dict`__: Formal parameter in dict type.

     * __Return Value__

       * __`data_dict["product"]`__: Ditc type.
         * __`product_dict["pk"]`__: String type. ProductKey generated in Developer Center.
         * __`product_dict["ps"]`__: String type. ProductSecret generated in Developer Center.
       * __`data_dict["uart"]`__: List type.
         * __`uart_list[0]`__: Integer type. Serial port ID.
         * __`uart_list[1]`__: Integer type. Baudrate.
         * __`uart_list[2]`__: Integer type. Data bit.
           * __`0`__: Data bit is 5
           * __`1`__: Data bit is 6
           * __`2`__: Data bit is 7
           * __`3`__: Data bit is 8
         * __`uart_list[3]`__: Integer type. Parity bit.
           * __`0`__: None
           * __`1`__: Even parity
           * __`2`__: Odd parity
           * __`3`__: Always 1
           * __`4`__: Always 0
         * __`uart_list[4]`__: Integer type. Stop bit.
           * __`0`__: Stop bit is 1
           * __`1`__: Stop bit is 1.5
           * __`2`__: Stop bit is 2

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
portList[] = [0,1,2,3,4,5,6,7,8,9]
ret = quecIot.MBInit(portList,modbusUartSend,modbusInitCb)
```

---


<span id="MBCloudRecv">  </span>

## <font color=#A52A1A  >__quecIot.MBCloudRecv__</font>

This function transfers the format of the TSL data issued by Developer Center to Modbus format and sends the data to Modbus sub-device.

__Prototype__

```py
quecIot.MBCloudRecv(data)
```

__Parameter__

 * __`data`__: Dict type. Data to be sent out.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.MBCloudRecv(data)
```

---

<span id="MBLocalRecv">  </span>

## <font color=#A52A1A  >__quecIot.MBLocalRecv__</font>

This function forwards Modbus data received by the serial port to Modbus components and processes the Modbus data.

__Prototype__

```py
quecIot.MBLocalRecv(port, data)
```

__Parameter__

 * __`port`__: Integer type. Serial port ID.
 * __`data`__: Byte array. ModBus data received by the serial port.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.MBLocalRecv(1,data)
```

---

<span id="MBDeinit">  </span>

## <font color=#A52A1A  >__quecIot.MBDeinit__</font>

This function de-initializes Modbus components.

__Prototype__

```py
quecIot.MBDeinit()
```

__Parameter__

None

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.MBDeinit()
```

---