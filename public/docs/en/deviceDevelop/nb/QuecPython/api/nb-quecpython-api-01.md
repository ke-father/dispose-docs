# API Overview

## __Product Configuration API__

| Function                  | Description                                                  |
| :------------------------ | :----------------------------------------------------------- |
| quecIot.init()            | Initializes configurations and enables QuecThing.            |
| quecIot.setConnmode()     | Configures the connection mode between the device and Developer Center.   |
| quecIot.getConnmode()     | Gets the connection mode between the device and Developer Center.         |
| quecIot.getWorkState()    | Gets the connection status between the device and Developer Center.       |
| quecIot.setEventCB()      | Sets callback function for the device and Developer Center interaction event. |
| quecIot.setProductinfo()  | Sets product information.                                    |
| quecIot.getProductinfo()  | Gets product information.                                    |
| quecIot.setServer()       | Sets server information.                                     |
| quecIot.getServer()       | Gets server information.                                     |
| quecIot.setLifetime()     | Configures the device lifetime.                              |
| quecIot.getLifetime()     | Gets the device lifetime.                                    |
| quecIot.setPdpContextId() | Configures PDP context ID used by device to connect Developer Center.     |
| quecIot.getPdpContextId() | Gets the PDP context ID used by device to connect Developer Center.       |
| quecIot.setSoftVersion()  | Sets software version ID of the device.                      |
| quecIot.getSoftVersion()  | Gets software version ID of the device.                      |
| quecIot.setMcuVersion()   | Sets MCU ID and the corresponding version number.            |
| quecIot.getMcuVersion()   | Gets MCU ID and the corresponding version number.            |
| quecIot.setDkDs()         | Customizes DeviceKey and DeviceSecret.                       |
| quecIot.getDkDs()         | Gets the customized DeviceKey and DeviceSecret.              |
| quecIot.setPsk()          | Sets device PSK.                                             |
| quecIot.getPsk()          | Gets device PSK.                                             |

<font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-02.md) for details.</font>

<br>

 

 ## __Data Interaction API__

| Function                 | Description                                   |
| :----------------------- | :-------------------------------------------- |
| quecIot.passTransSend()  | Sends transparent transmission data to Developer Center.   |
| quecIot.phymodelReport() | Sends TSL data to Developer Center.                        |
| quecIot.phymodelAck()    | Replies to the querying of TSL data from Developer Center. |
| quecIot.statusReport()   | Reports device status.                        |
| quecIot.devInfoReport()  | Reports the specified device information.     |
| quecIot.getDevStatus()   | Gets device status.                           |
| quecIot.getDevInfo()     | Gets the specified device information.        |

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-03.md) for details.</font>

<br>

## __OTA Upgrade API__

| Function                | Description                               |
| :---------------------- | :---------------------------------------- |
| quecIot.otaRequest()    | Requests OTA upgrade plan from Developer Center.       |
| quecIot.otaAction()     | Configures OTA upgrade operations.        |
| quecIot.mcuFWDataRead() | Reads firmware data stored in the device. |

<font color=#999AAA >Note: See [OTA Upgrade API](/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-04.md) for details.</font>

<br>

## __GNSS&LBS Positioning API__

| Function                   | Description                                                  |
| :------------------------- | :----------------------------------------------------------- |
| quecIot.getLocSupList()    | Obtains NMEA sentences type of the built-in positioning feature of the module. |
| quecIot.getLocData()       | Obtains location information of the built-in positioning feature of the module. |
| quecIot.locReportInside()  | Reports the location information of the built-in positioning feature of the device. |
| quecIot.locReportOutside() | Reports location data obtained from external GNSS module.    |

<font color=#999AAA >Note: See [GNSS&LBS Positioning API](/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-05.md) for details.</font>

<br>