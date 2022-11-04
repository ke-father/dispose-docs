# FAQ

> __1. What kind of device can use ModBus DTU to access Developer Center?__<br>As long as the Modbus sub-device meets the Modbus standard communication protocol, ModBus DTU can be used to access the Developer Center.

> __2. What function codes does ModBus DTU support？__ <br>
> Currently ModBus DTU supports 0X01\0X03\0X04\0X05\0X06\0X10 function codes, which can read and write the coils, holding registers and input registers of ModBus sub-devices.

> __3. How many sub-device can the ModBus DTU support to connect？__ <br>
> According to ModBus protocol, each serial port supports a maximum of 247 sub-devices. The number of sub-device that each DTU support varies according to the number of serial ports on different communication modules.

> __4. What is the difference between "All Report" and "Only Report change" in "Reporting Method"?__ <br>When "All Report" is selected, all sub-device data read by DTU is reported directly to the Developer Center.  When "Only Report change" is selected, DTU compares the sub-device data with the last data, and only report the changed register data to Developer Center, thus saving communication traffic.

> __5. What is the difference between "Directly connected devices" and "Gateway sub-devices" in "Device type"？__ <br>When "Directly connected devices" is selected, the feature information and data of all sub-devices are aggregated into one device, only one gateway device will be displayed on Developer Center, but the sub-device information will be displayed in a tree structure. When "Gateway sub-devices" is selected, it is necessary to create corresponding product information for each sub-device on Developer Center. After the gateway is successfully connected to the network, it will register and go online for each sub-device on the cloud platform. The subsequent uplink and downlink data of sub-devices can be displayed on the corresponding sub-device interface.  

> __6. How to burn the configuration file to the communication module？__ <br>
> The configuration file can be burned to the corresponding file system through the module burning tool or configured download serial port.

