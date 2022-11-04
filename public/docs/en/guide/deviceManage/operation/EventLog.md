# Event Logs

This document introduces the event logs. Event logs record the history of events reported by the device.  

## **Prerequisites**

● A product has been created.<br />
● The product has been developed and debugged.<br />
● An event has been reported by the device.

## **Steps**

After logging in to Developer Center, click "Device Management"→ "Operation and Maintenance” in the left navigation bar to display the list of devices. Find the device and click "View" in the Action column to enter the detail page of the device. Then click "Event Logs" tab.

<a data-fancybox title="img" href="/en/guide/image2022-3-9_15-12-59.png?version=1&modificationDate=1646809396000&api=v2">![img](/en/guide/image2022-3-9_15-12-59.png?version=1&modificationDate=1646809396000&api=v2)</a>



Parameters

| **Parameter**      | **Description**                                                       |
| :-------- | :----------------------------------------------------------- |
| DeviceKey | Device identifier.                                                     |
| Creation Date  | The time when the event log is stored.                                           |
| Event Type  |**Device Online**: Each time the device  connects to Developer Center, an event is recorded. **Device Offline**: If the device actively disconnects the connection, or the device does not communicate with Developer Center (including going online, sending uplink data and downlink data) for a long time, Developer Center forces the device to log off.  **Back Online**: When the device registers and accesses to Developer Center, it disconnects from Developer Center and then connects to Developer Center and gets back online again. It occurs when a sub-device is connected to different gateways which are dynamically switched. **Device Reset**: The device actively restores the factory settings, a key for device connection is reissued, and the topology relationship between the gateway and the sub-device and the binding relationship between the end user and the device are released. **Message**: Only the messages defined in TSL model. **Alert**:  Only the alerts defined in TSL model. **Fault**:  Only the faults defined in TSL model. |
| Output Parameter  | Specific output parameters are only carried in TSL events.                         |                                                            |

