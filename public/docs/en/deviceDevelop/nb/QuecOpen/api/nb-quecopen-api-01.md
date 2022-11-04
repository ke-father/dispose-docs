# API Overview

## **Product Configuration API**

|           Function            |                         Description                          |
| :---------------------------: | :----------------------------------------------------------: |
|         Ql_iotInit()          |      Initializes configurations and enables QuecThing.       |
|   Ql_iotConfigSetEventCB()    | Sets callback function for the device and Developer Center interaction event. |
|   Ql_iotConfigSetConnmode()   |  Configures the connection mode between the device and Developer Center.  |
|   Ql_iotConfigGetConnmode()   |     Gets the connection mode between the device and Developer Center.     |
|     Ql_iotGetWorkState()      |    Gets the connection status between the device and Developer Center.    |
| Ql_iotConfigSetPdpContextId() |   Configures PDP context ID used by device to connect Developer Center.   |
| Ql_iotConfigGetPdpContextId() |    Gets the PDP context ID used by device to connect Developer Center.    |
|    Ql_iotConfigSetServer()    |                   Sets server information.                   |
|    Ql_iotConfigGetServer()    |                   Gets server information.                   |
|   Ql_iotConfigSetLifetime()   |               Configures the device lifetime.                |
|   Ql_iotConfigGetLifetime()   |                  Gets the device lifetime.                   |
| Ql_iotConfigSetProductinfo()  |                  Sets product information.                   |
| Ql_iotConfigGetProductinfo()  |                  Gets product information.                   |
|  Ql_iotConfigSetMcuVersion()  |      Sets MCU ID and the corresponding version number.       |
|  Ql_iotConfigGetMcuVersion()  |      Gets MCU ID and the corresponding version number.       |
|  Ql_iotConfigSetAppVersion()  |           Sets software version ID of the device.            |
| Ql_iotConfigGetSoftVersion()  |           Gets software version ID of the device.            |
|     Ql_iotConfigSetDkDs()     |            Customizes DeviceKey and DeviceSecret.            |
|     Ql_iotConfigGetDkDs()     |       Gets the customized DeviceKey and DeviceSecret.        |
|     Ql_iotConfigSetPsk()      |                       Sets device PSK.                       |
|     Ql_iotConfigGetPsk()      |                       Gets device PSK.                       |

<font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-02.md) for details.</font>

<br>


## **Data Interaction API**

|            Function             |                  Description                  |
| :-----------------------------: | :-------------------------------------------: |
|   Ql_iotCmdBusPassTransSend()   |  Sends transparent transmission data to Developer Center.  |
| Ql_iotCmdBusPassTransSend_ex()  |  Sends transparent transmission data to Developer Center.  |
|  Ql_iotCmdBusPhymodelReport()   |            Sends TSL data to Developer Center.             |
| Ql_iotCmdBusPhymodelReport_ex() |            Sends TSL data to Developer Center.             |
|    Ql_iotCmdBusPhymodelAck()    | Replies to the querying of TSL data from Developer Center. |
|   Ql_iotCmdSysStatusReport()    |            Reports device status.             |
|     Ql_iotSysGetDevStatus()     |              Gets device status.              |
|   Ql_iotCmdSysDevInfoReport()   |   Reports the specified device information.   |
|      Ql_iotSysGetDevInfo()      |    Gets the specified device information.     |

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-03.md) for details.</font>

<br>


## **TTLV Data API**

|         Function          |                   Description                    |
| :-----------------------: | :----------------------------------------------: |
|   Ql_iotTtlvCountGet()    |   Gets the number of nodes in the data table.    |
|    Ql_iotTtlvNodeGet()    |     Extracts data nodes from the data table.     |
|     Ql_iotTtlvFree()      |          Releases data table resources.          |
|  Ql_iotTtlvNodeGetType()  |               Gets data node type.               |
|  Ql_iotTtlvNodeGetBool()  |         Gets the node data in bool type.         |
|  Ql_iotTtlvNodeGetInt()   |       Gets the node data in integer type.        |
| Ql_iotTtlvNodeGetFloat()  |        Gets the node data in float type.         |
| Ql_iotTtlvNodeGetString() |        Gets the node data in string type.        |
|  Ql_iotTtlvNodeGetByte()  |         Gets the node data in byte type.         |
| Ql_iotTtlvNodeGetStruct() |        Gets the node data in struct type.        |
|   Ql_iotTtlvIdGetType()   | Gets the type of data for the specified ID node. |
|   Ql_iotTtlvIdGetBool()   |  Gets the specified ID node data in bool type.   |
|   Ql_iotTtlvIdGetInt()    | Gets the specified ID node data in integer type. |
|  Ql_iotTtlvIdGetFloat()   |  Gets the specified ID node data in float type.  |
|  Ql_iotTtlvIdGetString()  | Gets the specified ID node data in string type.  |
|   Ql_iotTtlvIdGetByte()   |  Gets the specified ID node data in byte type.   |
|  Ql_iotTtlvIdGetStruct()  | Gets the specified ID node data in struct type.  |
|   Ql_iotTtlvIdAddBool()   |         Adds the node data in bool type.         |
|   Ql_iotTtlvIdAddInt()    |       Adds the node data in integer type.        |
|  Ql_iotTtlvIdAddFloat()   |        Adds the node data in float type.         |
|   Ql_iotTtlvIdAddByte()   |         Adds the node data in byte type.         |
|  Ql_iotTtlvIdAddStruct()  |        Adds the node data in struct type.        |

<font color=#999AAA >Note: See [TTLV Data API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-04.md) for details.</font>

<br>


## **OTA Upgrade API**

|          Function           |                Description                |
| :-------------------------: | :---------------------------------------: |
|    Ql_iotCmdOtaRequest()    |    Requests OTA upgrade plan from Developer Center.    |
|    Ql_iotCmdOtaAction()     |    Configures OTA upgrade operations.     |
| Ql_iotCmdOtaMcuFWDataRead() | Reads firmware data stored in the device. |

<font color=#999AAA >Note: See [OTA Upgrade API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-05.md) for details.</font>

<br>

## **GNSS&LBS Positioning API**

|            Function            |                         Description                          |
| :----------------------------: | :----------------------------------------------------------: |
|     Ql_iotLocGetSupList()      | Obtains NMEA sentences type of the built-in positioning feature of the module. |
|       Ql_iotLocGetData()       | Obtains location data of the built-in positioning feature of the module. |
| Ql_iotCmdBusLocReportInside()  | Reports the location data of the built-in positioning feature of the device. |
| Ql_iotCmdBusLocReportOutside() |  Reports location data obtained from external GNSS module.   |

<font color=#999AAA >Note: See [GNSS&LBS Positioning API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-07.md) for details.</font>

<br>