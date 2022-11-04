# SDK Description

## __1. Introduction to QuecThing SDK__

QuecThing SDK provides a unified API definition for module adaptation layer, and carries out secondary abstraction on chip basic SDK, shielding complex module technical details, which is convenient for you to get started quickly. Developers only need to implement specific business features according to module capabilities. After compilation and download, you can run QuecThing SDK on the module and connect the device to Developer Center to realize the intellectualization of the device. At the same time, in order to speed up the development efficiency, QuecThing SDK provides built-in and unified communication protocol and APIs for the module application layer to call, so developers can directly use and develop specific features without paying too much attention to the module model.


## __2. Logic Structure Diagram__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-04.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-04.png)</a>

## __3. Introduction to Some Main APIs__

QuecOpen is an open-source embedded development platform based on Linux system, which is intended to simplify the design and development of IoT applications and provide convenient API to help developers quick develop applications and meet the business needs of different scenarios.


* Product Configuration API

  |           Function           | Description                                                  |
  | :--------------------------: | :----------------------------------------------------------- |
  |         Ql_iotInit()         | Initializes QuecThing, such as server IP and lifetime.       |
  |   Ql_iotConfigSetEventCB()   | Registers event callback function by which all events generated during the running of QuecThing are notified. |
  | Ql_iotConfigSetProductinfo() | Configures PK/PS.                                            |
  |  Ql_iotConfigSetConnmode()   | Configure the connection mode for the device to connect to Developer Center. |

  <font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-02.md) for details.</font>


* TTLV Data API 

  <font color=#999AAA >Note: XXX is data type, such as bool and int.</font>

  |        Function        | Description                                                  |
  | :--------------------: | :----------------------------------------------------------- |
  |  Ql_iotTtlvCountGet()  | Gets the number of nodes in the data table.                  |
  |  Ql_iotTtlvNodeGet()   | Extracts data nodes from the data table.                     |
  |    Ql_iotTtlvFree()    | Releases data table resources after creating TTLV data table or adding TTLV nodes. |
  |  Ql_iotTtlvIdAddXXX()  | Adds the node data in XXX type. For example, Ql_iotTtlvIdAddBool(). |
  |  Ql_iotTtlvIdGetXXX()  | Gets the specified ID node data in XXX type.                 |
  | Ql_iotTtlvNodeGetXXX() | Gets the node data in XXX type.                              |

  <font color=#999AAA >Note: See [TTLV Data API](/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-04.md) for details.</font>


* Data Interaction API

  |           Function           | Description                                                  |
  | :--------------------------: | :----------------------------------------------------------- |
  | Ql_iotCmdBusPhymodelReport() | Sends TSL data to Developer Center.                                       |
  |  Ql_iotCmdBusPhymodelAck()   | Replies to the querying of TSL data from Developer Center.                |
  | Ql_iotCmdSysDevInfoReport()  | Reports module information to Developer Center, such as module model and SIM card number. |

  <font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-03.md) for details.</font>