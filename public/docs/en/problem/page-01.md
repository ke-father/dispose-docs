# FAQs About Product Usage

## **Normal Questions**

**1. Is Developer Center only available to enterprise users？**

Both B-end manufacturers and C-end individuals can register and log in to Developer Center.



**2. Can I add or delete devices in batches on Developer Center?**

You can add devices in batchces by importing an EXCEL file or by configuring product information and server information. You cannot delete devices in batches.



**3. Can I delete an online device?**

Yes, only the activated devices can not be deleted.



**4. How many devices can be created under a product?**

There is no limit on the number of devices that you can create. But if you want to activate the device for normal use, you need to purchase the corresponding cloud connection license activation code.



**5. Can I restore a product or device which is accidentally deleted from Developer Center?**

If a product or device is deleted from Developer Center, the data cannot be restored.



**6. Does Developer Center provide App, Wechat Mini-program or other relevant services?**

At present, Developer Center only provides services in the device dimension. You can choose to develop your own App, WeChat Mini-program and other services, or contact our sales team to provide customized development solutions for your company.



**7. How does Developer Center handle users' data? Can the data be transfered to other platforms or users' server through API?**

The data can be transmitted transparently and pushed to users' server through API. Besides, it can also be quickly accessed and handled through the TSL model defined by Developer Center.



**8.** **When I use a feature on Developer Center, if ERROR is returned when I send an AT command, how can I determine whether this module supports the feature or not?**

1) You can execute **AT+QIOTREG=?** to test whether the firmware version of the module supports this feature. If the module supports the feature, **+QIOTREG: (0,1) OK** is returned; Otherwise, **ERROR** is returned.

2) For the positioning feature, you can execute **AT+QLBS=?** to test whether the firmware version of the module supports this function. If the module supports the function, **OK** is returned; otherwise **ERROR** is returned.

In addition, you can view the Release Note of each module firmware version to determine whether the firmware version supports the feature on Developer Center. If **ERROR** is returned when you use a feature of Developer Center, it is generally because the firmware version of the module does not support this feature. You can use AT command to query the current firmware version and contact the local FAE to provide you with the supported firmware version.



## **Device Connection**

**1. What is the southbound server address and port that the MQTT protocol device accesses?**

For Chinese domestic:

- mqtt://iot-south.quectelcn.com:1883
- mqtts://iot-south.quectelcn.com:8883

For overseas:

- mqtt://iot-south.quecteleu.com:1883
- mqtts://iot-south.quecteleu.com:8883

**2. How can I get QuecThing SDK?**

If you need to port the SDK (integrated with QuecThing feature) which is used to connect the device to Developer Center, contact Quectel QuecCloud Service software AE to obtain the SDK.



**3. What are the access solutions supported by Developer Center?**

AT command, QuecOpen API and QuecPython API.



**4. Why is a device on Developer Center always in "inactive" state and how can I activate the device?**

The device is automatically activated when the number of the communication messages between the device and Developer Center reaches the certain activation threshold and there are remaining licenses available.

<span v-if="!isEu">

**5. Is the length of DeviceKey fixed?**

The length of a DeviceKey varies for different products. The DeviceKey for regular products is a combination of English and alphanumeric characters ranging from 4 to 32 bits; while the DeviceKey for Telecom IoT as Bridge products is fixed to 15 digits.

</span>

## **Push Notification**

**1. Is there a re-push mechanism for the messages subscription of Developer Center**

Yes.



**2. Does Developer Center have an interface to get real-time results? Or, the message can only be acquired asynchronously?**

The Developer Center message can only be acquired asynchronously currently.



**3. After the device is powered off, the SaaS application fails sending data to a device. How do I handle the data after the device is powered on again?**

You can handle the data through the buffer interface. After the device is powered on again, the data will be resent to the device.


#

<span v-if="!isEu">

## **IoT as Bridge**

**1. Can I use Developer Center with the Telecom NB-IoT SIM card I purchased?**

Yes, you can.



**2. What type of the module needs to use IoT as Bridge?**

First you need to determine whether it is Quectel module and whether it is NB type module. Different types of modules use different network modes, and different network modes apply different communication protocols. Generally speaking, you can directly connect a non-NB module to Developer Center, and do not need to forward data through the Telecom CTWing platform.



**3. What is the communication protocol used by the device to access Developer Center through IoT as Bridge function? MQTT or LwM2M?**

Generally, limited by the network nature of NB-IoT network mode, LwM2M protocol is used as the communication protocol.

</span>



## **OTA Upgrade**

**1. What are the classifications of OTA?**

Quectel Module Firmware Upgrade (FOTA, Firmware Over the Air) and MCU Application Upgrade (SOTA, Software Over the Air).



**2. How to use OTA?**

Connect the module that QuecThing is supported to Developer Center, then you can perform OTA upgrade.



**3. What is the difference between FullFOTA and DFOTA upgrade?**

The biggest difference is the way of generating a upgrade package. The firmware package of the original version is not required when generating a full package. You can upgrade the firmware with the base package directly. So, the full package is generally used to upgrade the entire firmware [∞ -> B], while the delta package is generally used to upgrade some specific points [A->B].



**4. How to get the upgrade package?**

Contact Quectel Technical Supports.



**5. What is upgrade plan?**

An upgrade plan contains the information of the device to be upgraded, upgrade time, component configuration for upgrade and other information. You need to create a new upgrade plan or select an existing upgrade plan before upgrading a device.



**6. What is upgrade model?**

An upgrade model is a user-created collection of one or more components which is used to select and plan product components to be upgraded when an upgrade plan is created. The model is unique under the current project; Component names are unique under the same model.



**7. Why can some upgrade plans be deleted and some upgrade plans cannot be deleted?**

You can click "Activate Plan" or "Save" when creating a new upgrade plan. The activated upgrade plan cannot be deleted and the saved but inactivated upgrade plan can be deleted.





**8. Why can't the upgrade plan end after it starts?**

For a device, whether it consists of a single component or multiple components, when the upgrade is confirmed, the upgrade plan cannot be ended（whether the scheduled time for upgrade expires or the upgrade is forcibly terminated）until the upgrade is completed or fails.

<span v-if="!isEu">

**9. What is the difference between using MQTT and LwM2M to connect a device to Developer Center for OTA upgrade?**

After the upgrade is confirmed, the upgrade plan using MQTT will not end until the planned upgrade fails (the number of upgrades is used up) or the upgrade is successful, while the upgrade plan using LwM2M will automatically end if the upgrade duration exceeds 48 hours.


</span>


## **LTE Module**

**1. How to check the network registration status of a module?**

You can execute **AT+CREG?; +CGREG?; +CEREG?; +CSQ; +QNWINFO** to check the network registration status of a module.

![img](/problem/image999.png)



**2. How to configure APN?**

You can execute **AT+CGDCONT=`<cid>,<PDP_type>,<APN>`** to change the APN based on the operators and SIM cards in use.



| Operator      | APN                             |
| :------------ | :------------------------------ |
| China Mobile  | cmiot、china mobile、cment      |
| China Telecom | ctnet、chn-unicom、ctnb         |
| China Unicom  | unim2m.njm2mapn                 |
| ARM           | stream.co.uk                    |
| Orange        | orange.item.spc、orange.m2m.spc |




<span v-if="!isEu">


## **NB-IoT Module**

**1. How to check the signal strength of a module?**

You can use **AT+NUESTATS** to check the signal strength of regional operators.



**2. How to check the network registration status of a module?**

You can execute **AT+CEREG?** to query the EPS network registration status and **+CEREG:`<n>,<stat>`** is returned to display the result.



| stat | **EPS Registration Status**                                  |
| :--- | :----------------------------------------------------------- |
| 0    | Not registered. UE is not currently searching an operator to register to |
| 1    | Registered, home network                                     |
| 2    | Not registered, but UE is currently trying to attach or searching an operator to register to |
| 3    | Registration denied                                          |
| 4    | Unknown (For example, it is not in the E-UTRAN range)        |
| 5    | Registered, roaming                                          |

</span>

## **LBS Positioning**

**1. What time is the positioning time?**

When the reported positioning method is LBS, the positioning time is the time after calling base station to parse positioning information. When the reported positioning method is GGA or RMC，the positioning time is the time in the positioning message pushed by AMQP. Howerver the time in the push notification is UTC time instead of the time of East 8 District, so 8 hours should be added to the pushed time.



**2. After the positioning information is reported, including positioning time and method, but longitude and latitude are not displayed. Is the device location not displayed on the positioning map?**

Yes, the device location in the positioning map is traced based on the latitude and longitude information. If the latitude and longitude information are null, the device location will not be displayed on the positioning map.



**3. What map is used to display the device location on Developer Center?**

Amap is used on Developer Center in Chinese. Google map is used on Developer Center in English.





## **TSL Model and Transparent Transmission**

**1. What is TSL model? What is the difference between the TSL model and transparent transmission?**

__TSL model__  refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud, which is divided into three dimensions: __Property__ , __Service__, __Event__. After the TSL is saved, the TSL-format product is defined. Transparent transmission means that after the device is connected to Developer Center, no matter what business content Transparent transmission data means that Developer Center pushes the device data to the Saas application, and does not parse or process the data.



**2. Why is the TSL model data received by the module displayed as a hex string? How to convert it to JSONS format?**



The TTLV definition of TSL model is shown in the table below. You can convert the data according to the specifications in the table.



| **Field**   | **Length** | **Content**                                                  |
| :---------- | :--------- | :----------------------------------------------------------- |
| Data ID     | 13 bits    | Range: 1–8191，Unique in different commands (such as TSL model, device status and module information) |
| Data Type   | 3 bits     | Range: 0–7, see the table below for details.                 |
| Data Length |            | See the table below for details.                             |
| Data Value  |            | See the table below for details.                             |





| **Data type**         | Byte Encoding（Binary 3 bits） | **Data Length**                                              | **Data Value** |
| :-------------------- | :----------------------------- | :----------------------------------------------------------- | :------------- |
| Boolean-false         | 000                            | None                                                         | None           |
| Boolean-truee         | 001                            | None                                                         | None           |
| Enumeration and Value | 010                            | Bit Identifier: 1 bit (0 positive; 1 negative); Decay by 10 to the N: 4 bits; Data Bytes: 3 bits (the number of bytes in the data field-1). |                |
| Binary Data           | 011                            | Data Bytes 2B                                                | Data Content   |
| Structure             | 100                            | Number of Elements 2B                                        |                |
| Reserved Field        | 101-111                        |                                                              |                |



**3. How does the module send TSL model data in JSON format to Developer Center?**

The conversion mode is the same as that in Q2. The completed MCU Demo, TSL model related protocol documents and codes are available to be referred to.

**4. If multiple input/output parameters are defined in a TSL model service. Do I have to pass all the input parameters when calling the TSL model service? Does the device need to report all the defined output parameters when reporting the TSL model service data?**



No. When sending data of a TSL model service, you can send some of the defined parameters according to actual requirements.

**5. Can a device reports multiple messages at once when the device reports properties of a TSL model? If the device reports multiple TSL properties with the same feature ID at the same time, can all the data be reported successfully?**



The device can reports multiple TSL model properties at once. But Developer Center has a de-duplication feature. If all the properties in the TSL model data reported at one time have the same feature ID, for example, [{“id”:2,”type”:”int”,”value”:9},{“id”:2,”type”:”int”,”value”:11}], Developer Center will automatically remove the duplicate data, and the data log will be displayed in JSON format, and only the last property will be displayed, that is [{“id”:2,”type”:”int”,”value”:11}]. But when the data log is displayed in other formats, all the data will be displayed. Only the last property data will be displayed on the running status page.

**6. When reporting a TSL property, if the defined property feature ID is 1 and the defined data type is integer, but the reported data is of float type, can the float data be reported to Developer Center successfully？**

Yes. The data can be reported successfully. Developer Center adopts an inclusive processing method for the TSL  data reported by the device. If the reported TSL model data is different from the defined content, it can also be reported successfully.




  