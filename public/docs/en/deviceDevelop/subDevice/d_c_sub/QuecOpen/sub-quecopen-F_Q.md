# FAQs

## <font color=#A52A2A  >__FAQs on Gateway and Sub-device__</font>

> __1. What is a gateway?__ <br>The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway.

> __2. What is a gateway?__ <br>Sub-devices are devices that do not have networking capabilities and can communicate with the cloud after connecting to the gateway .

> __3. What is the sub-device heartbeat?__ <br>The heartbeat of the sub-device refers to the period during which the gateway needs to periodically detect whether the sub-device is disconnected.<br>
>
> * If the sub-device sends heartbeat information to the gateway within the specified heartbeat period, the gateway will refresh the detection cycle of the sub-device;<br>
> * If the sub-device does not send heartbeat information to the gateway within the specified heartbeat period, the gateway will consider the sub-device disconnected, and the gateway will close the interface.<br>

> __4. What is the difference between directly connected devices and Gateway and sub-devices?__ <br>
>
> * Directly connected devices refer to products that do not associate with a gateway or sub-device.<br>
> * Gateway and sub-devices refer to products that have the ability to become gateways or sub-devices<br>