# Data Format Overview

You can subscribe message in different type through AMQP subscription on Developer Center. Each message type has a fixed data format. Developers can refer to this section to implement message listening and parsing.

List of Message Type

| Message Type                                    | Description                                                                                                    |
| :---------------------------------------------- |:---------------------------------------------------------------------------------------------------------------|
| Online/Offline Event                            | Device status, including online, offline and re-online.                                                        |
| Device and Module Status                        | Device status and module status, such as battery, voltage, signal strength, firmware version and ICCID.        |
| Device Response                                 | Status of command issued to the device, including successful sending, failed sending.                          |
| Device Information Change                       | Operations on device, including addition, modification, deletion, reset.                                       |
| Device Binding Information Change               | Data triggered by the changes of device binding information sent by terminal user.                             |
| Transparent Transmission - Device Uplink Data   | Data reported by the device of the product that transparent  transmission data format is selected.             |
| Transparent Transmission - Device Downlink Data | Command issued to the device of the product that transparent  transmission data format is selected.            |
| TSL - Property                                  | Data reported by the device of the product that TSL data format is selected.                                   |
| TSL - Event - Message                           | Event reported by the device of the product that TSL data format is selected. The level is defined to INFO.    |
| TSL - Event - Alert                             | Event reported by the device of the product that TSL data format is selected. The level is defined to WARN.    |
| TSL - Event - Fault                             | Event reported by the device of the product that TSL data format is selected. The level is defined to ERROR.   |
| TSL - Service - Calling Logs                    | Service data reported by the device of the product that TSL data format is selected.                           |
| Device Positioning - Query Positioning Data     | Device positioning data sent to the device.                                                                    |
| Device Positioning - Original Data              | NMEA protocol-based positioning data reported by the device.                                                   |
| Device Positioning Data                         | NMEA protocol-based positioning data reported by the device. The data is parsed by Developer Center.           |
| Product Information Change                      | Changes in product information, including addition, modification, deletion. |
| Product Authorization Information               | Changes in product authorization information, including product authorization and authorization cancellation.  |
| TSL Model Release Information Change            | Newly released TSL model.                                                                                      |
| Terminal User Information Change                | Changes in terminal user information, including creation, modification and deletion.                           |


>Note: GPS and LBS are supported by device positioning feature. GPS data only is pushed by default. If LBS data is required, please contact Quectel. 

<p>To subscribe the changes in product information or TSL model release informaiton, you should <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEnterpriseSubscribeUsingPOST')" class="external-link">create enterprise subscription</a> with OpenAPI. To subscribe the changes in terminal user information, you should <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST')"  class="external-link">create terminal user subscription</a> with OpenAPI.</p>


  