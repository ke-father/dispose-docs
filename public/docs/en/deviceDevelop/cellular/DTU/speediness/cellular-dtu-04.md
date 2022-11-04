# Presentation

## __1. Device Online__

After burning the firmware into the DTU device, that device is automatically accessed to Developer Center. After that, device is added to the corresponding product list and certificated automatically.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-20.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-20.png)</a>


## __2. Check Data Logs__

On the "Device Details" > "Data Logs" page, you can view that the terminal device regularly obtains the latest data from the sub-device every 60 seconds and sends it to Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-21.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-21.png)</a>


On the "Device Debug" > "Communication Logs" defined by the TSL function, the uploaded temperature value: 25.68, humidity value: 65.13 can be clearly viewed.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-23.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-23.png)</a>


## __3. Send Command__

Send commands to the DTU-Modbus device from Developer Center, the DTU device enters the callback function for processing and converts it into the Modbus protocol through the serial port and sends it to the temperature and humidity sensor. Then, the temperature and humidity sensor receives the time stamp and switch command issued by the Developer Center through the DTU device.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-22.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-22.png)</a>



