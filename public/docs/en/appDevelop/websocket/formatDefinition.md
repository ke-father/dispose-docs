# WebSocket Message Format Definition

- [WebSocket Message Format Definition](#websocket-message-format-definition)
  - [**Protocol Version**](#protocol-version)
  - [**Message Format Definition**](#message-format-definition)
    - [**Login**](#login)
    - [**Login Response**](#login-response)
    - [**Subscription**](#subscription)
    - [**Subscription Response**](#subscription-response)
    - [**Message**](#message)
      - [**Device Online And Offline Info**](#device-online-and-offline-info)
      - [**Status Info of Device and Module**](#status-info-of-device-and-module)
      - [**Transparent Transmission-Product Device Uplink Info**](#transparent-transmission-product-device-uplink-info)
      - [**TSL Product-Property Info Reported by Device**](#tsl-product-property-info-reported-by-device)
      - [**TSL Product-Device Event Info Warning Error**](#tsl-product-device-event-info-warning-error)
      - [**Device Positioning Info Report**](#device-positioning-info-report)
      - [**End User Device Permission Change Info**](#end-user-device-permission-change-info)
    - [**Send Command**](#send-command)
    - [**Command Sending Response**](#command-sending-response)
    - [**Error Info**](#error-info)
    - [**Unsubscription**](#unsubscription)
    - [**Unsubscription Response**](#unsubscription-response)
    - [**Heartbeat**](#heartbeat)
  - [**Error Code Description**](#error-code-description)

## **Protocol Version**

v1.0.0

## **Message Format Definition**

WebSocket Message Type List:

**Client-> Server:**

● Login login<br />
● Subcription subscribe<br />
● Command sending send<br />
● Unsubscription  unsubscribe<br />
● Heartbeat pong (Browser automatically responds)

**Server -> Client:**

● Login response login_resp<br />
● Subscription response subscribe_resp<br />
● Unsubscription response unsubscribe_resp<br />
● Error info error<br />
● Device message  message<br />
● Command sending response send_ack

### **Login**

<font color=#ff6600>client => server</font>

**Data Format**：

| Field | **Type** | **Description**     |
| :---- | :------- | :------------------- |
| cmd   | String   | Log in               |
| data  | JSON     | Include token string |

Data Format of data

| **Field** | **Type** | **Description**                                              |
| :-------- | :------- | :----------------------------------------------------------- |
| token     | String   | Token of the end-user system. It will be generated after the user logs in to the end-user system |

**Example:**

```
{
    "cmd": "login",
    "data": {
        "token": "xxxxxxxxxxxxxxxxxxxxxx"
    }
}
```

### **Login Response**

<font color=#ff6600>server => client</font>

**Data Format:**

| **Field** | **Type** | **Description**          |
| :-------- | :------- | :----------------------- |
| cmd       | String   | login_resp               |
| data      | JSON     | The returned information |

Data Structure of data

| **Field** | **Type** | **Description**                                              |
| :-------- | :------- | :----------------------------------------------------------- |
| code      | Integer  | The result code. 1 indicates a successful execution; any other value indicates a failed execution |
| msg       | String   | The returned information                                     |

**Example:**

```
{
    "cmd": "login_resp",
    "data": {
        "code": 1,
        "msg": "succ"
    }
}
```

**Error Code:**

| **Error Code** | Error Info              | Description             |
| :------------- | :---------------------- | :---------------------- |
| 4008           | token validation failed | Token validation failed |
| 4016           | request failed          | Request failed          |

### **Subscription**

client => server

**Data Format:**

| **Field** | **Type**   | **Description** |
| :-------- | :--------- | :-------------- |
| cmd       | String     | subscribe       |
| data      | JSON Array | JSON array      |

Data Structure of data

| **Field**   | **Type** | **Description**                                              |
| :---------- | :------- | :----------------------------------------------------------- |
| productKey  | String   | Product key of the product                                   |
| deviceKey   | String   | Device key of the device                                     |
| messageType | Array    | Message type:<br /> ● [ONLINE](#device-online-and-offline-info) Device online and offline info<br /> ● [STATUS ](#status-info-of-device-and-module) Status info of device and module<br /> ● [RAW-UPLINK](#transparent-transmission-product-device-uplink-info)    Transparent Transmission-Product Device Uplink Info<br /> ● [MATTR-REPORT](#tsl-product-property-info-reported-by-device) TSL Product-Property Info Reported by Device<br /> ● [MEVENT-INFO](#tsl-product-device-event-info-warning-error) TSL Product-Device Event Info<br /> ● [MEVENT-WARN](#tsl-product-device-event-info-warning-error) TSL Product-Device Event Warning<br /> ● [MEVENT-ERROR](#tsl-product-device-event-info-warning-error) TSL Product-Device Event Error<br /> ● [LOCATION-INFO-KV](#device-positioning-info-report)  Device Positioning Info Report |


**Example:**

```
{
    "cmd": "subscribe",
    "data": [
        {
            "deviceKey": "1234567890",
            "messageType": [
                "ONLINE"
            ],
            "productKey": "p12345"
        },
        {
            "deviceKey": "1234567890",
            "messageType": [
                "ONLINE",
                "STATUS"
            ],
            "productKey": "p12345"
        }
    ]
}
```

### **Subscription Response**

<font color=#ff6600>server => client</font>

**Data Format:**

| **Field** | **Type**  | Description                |
| :-------- | :-------- | :------------------------- |
| cmd       | String    | subscribe_resp             |
| data      | JSONArray | Device subscription result |

Data Structure of data

| **Field**  | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| productKey | String   | Product key of the product                                   |
| deviceKey  | String   | Device key of the device                                     |
| code       | Integer  | The result code. 1 indicates a successful execution; any other value indicates a failed execution |
| msg        | String   | The returned information                                     |

**Example:**

```
{
    "cmd": "subscribe_resp",
    "data": [
        {
            "code": 1,
            "deviceKey": "1234567890",
            "msg": "succ",
            "productKey": "p12345"
        },
        {
            "code": 4011,
            "deviceKey": "1234567892",
            "msg": "device is not bound",
            "productKey": "p12345"
        }
    ]
}
```

**Error Code:**

| Error Code | **Error Info**                       | **Description**                        |
| :--------- | :----------------------------------- | :------------------------------------- |
| 4006       | data format is incorrect             | The data format is incorrect           |
| 4011       | device is not bound                  | The device is not bound                |
| 4012       | subscription type is not supported   | The subscription type is not supported |
| 4021       | product key is empty                 | ProductKey is empty                    |
| 4022       | product key is incorrectly formatted | ProductKey is incorrectly formatted    |
| 4023       | device key is empty                  | DeviceKey is empty                     |
| 4024       | device key is incorrectly formatted  | DeviceKey is incorrectly formatted     |
| 4025       | message type is empty                | The message type is empty              |

### **Message**

<font color=#ff6600>server => client</font>

**Data Format:**

| **Field** | **Type** | **Description** |
| :-------- | :------- | :-------------- |
| cmd       | String   | The message     |
| data      | JSON     | Message content |

In data, the message content includes device online/offline info, status info of device and module, device uplink info (transparent transmission products), property info (TSL product) reported by the device ,  TSL event info, device positioning info report , end user device permission change info.

#### **Device Online And Offline Info**

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>Product key</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>Device key</td>
</tr>
<tr>
<td>type</td>
<td>Enum</td>
<td>ONLINE</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Timestamp that the message generated, integer, in milliseconds</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>Gateway info, only for sub-device and those whose gateway access mode is product integration</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>Product key of the gateway device</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>Device key of the gateway device</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>value</td>
<td>Integer</td>
<td>0 - Offline; 1 - Online; 2 -Reonline</td>
</tr>
</table>
</td>
</tr>
</table>



Example:

```
{
    "cmd": "message",
    "data": {
        "createdAt": 1609316592000,
        "data": {
            "value": 1
        },
        "deviceKey": "866123456789015",
        "productKey": "123456",
        "ticket": "5f9924d171977c33bc5ad1b1",
        "type": "ONLINE"
    }
}
```

#### **Status Info of Device and Module**

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>PK</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>DK</td>
</tr>
<tr>
<td>type</td>
<td>Enum</td>
<td>STATUS</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Timestamp that the message generated, integer, in milliseconds</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
 <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details. Only available to the sub-device of product integration.</td>
    </tr>
    <tr>
      <td colspan="3">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product.</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device.</td>
          </tr>
        </table>
      </td>
    </tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>Uplink and downlink data packet ID</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>The status property of a specific change<br />(battery,voltage,signal_strength,memory_free,rsrp,rsrq,snr,type,version,mcu_version,cell_id,icc_id,mcc,mnc,lac,phone_num,sim_num)
</td>
</tr>
</table>
</td>
</tr>
</table>



Example:

```
{
    "cmd": "message",
    "data": {
        "productKey": "p12345",
        "deviceKey": "1234567890",
        "type": "STATUS",
        "createdAt": 1609316592000,
        "ticket": "5f9924d171977c33bc5ad1b1",
        "data": {
            "packetId": 3,
            "kv": {"battery": "20", "voltage": "4"}
        }
    }
}
```

#### **Transparent Transmission-Product Device Uplink Info**

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>PK</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>DK</td>
</tr>
<tr>
<td>type</td>
<td>Enum</td>
<td>RAW</td>
</tr>
<tr>
<td>subtype</td>
<td>Enum</td>
<td>UPLINK</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Timestamp that the message generated, integer, in milliseconds</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>Gateway info, only for sub-device and those whose gateway access mode is product integration</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>Product key of the gateway product</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>Device key of the gateway product</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>Uplink and downlink data packet ID</td>
</tr>
<tr>
<td>raw</td>
<td>String</td>
<td>base64 encoded string</td>
</tr>
</table>
</td>
</tr>
</table>



Example:

```
{
    "cmd": "message",
    "data": {
        "ticket": "5f9924d171977c33bc5ad1b1",
        "productKey": "abcdefg",
        "deviceKey": "1234567890123",
        "type": "RAW",
        "subtype": "UPLINK",
        "createdAt": 1609316592000,
        "gateway": {
            "productKey":"abcdefs",
            "deviceKey":"2345678901234"
        },
        "data": {
            "packetId": 3,
            "raw": "YSBtZXNzYWdl"
        }
    }
}
```

#### **TSL Product-Property Info Reported by Device**

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Remarks</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>PK</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>DK</td>
</tr>
<tr>
<td>type</td>
<td>Enum</td>
<td>MATTR</td>
</tr>
<tr>
<td>subtype</td>
<td>Enum</td>
<td>REPORT</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Timestamp that the message generated, integer, in milliseconds</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>Gateway info, only for sub-device and those whose gateway access mode is product integration</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Remarks</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>Product key of the gateway product</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>Device key of the gateway product</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>extData</td>
<td>JSON Object</td>
<td>Reserved. Format: Key value pair.</td>
</tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Remarks</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>Packet ID</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>Property key value pair</td>
</tr>
</table>
</td>
</tr>
</table>



Example:

```
{
    "cmd": "message",
    "data": {
        "productKey": "abcdefg",
        "deviceKey": "1234567890123",
        "type": "MATTR",
        "subtype": "REPORT",
        "createdAt": 1609316592000,
        "ticket": "5f9924d171977c33bc5ad1b1",
        "gateway":{
            "productKey":"abcdefs",
            "deviceKey":"2345678901234"
        },
        "extData": {
            "code1": "value1"
        },
        "data": {
            "packetId": 5,
            "kv": {"k1": "v1", "k2": "v2"}
        }
    }
}
```

#### **TSL Product-Device Event Info Warning Error**

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>PK</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>DK</td>
</tr>
<tr>
<td>type</td>
<td>Enum</td>
<td>MEVENT</td>
</tr>
<tr>
<td>subtype</td>
<td>Enum</td>
<td>INFO - Information WARN - Warning ERROR - Error</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Timestamp that the message generated, integer, in milliseconds</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>Gateway info, only for sub-device and those whose gateway access mode is product integration</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>Product key of the gateway product</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>Device key of the gateway product</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>extData</td>
<td>JSON Object</td>
<td>Reserved. Format: Key value pair.</td>
</tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>Packet ID</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>Key value pair</td>
</tr>
</table>
</td>
</tr>
</table>



Example:

```
{
    "cmd": "message",
    "data": {
        "ticket": "5f9924d171977c33bc5ad1b1",
        "productKey": "abcdefg",
        "deviceKey": "1234567890123",
        "type": "MEVENT",
        "subtype": "INFO",
        "createdAt": 1609316592000,
        "gateway": {
            "productKey":"abcdefs",
            "deviceKey":"2345678901234"
        },
        "extData": {
            "code1": "value1"
        },
        "data": {
            "packetId": 3,
            "code": "event_code3",
            "kv": {
                "param1":"1",
                "param2":"3"
        }
    }
}
```

#### **Device Positioning Info Report**

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>PK</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>DK</td>
</tr>
<tr>
<td>type</td>
<td>Enum</td>
<td>LOCATION</td>
</tr>
<tr>
<td>subtype</td>
<td>Enum</td>
<td>INFO-KV positioning information</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Timestamp that the message generated, integer, in milliseconds</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>Packet ID</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Positioning type, GP/GL/GA/GN/BD/PQ/LBS</td>
</tr>
<tr>
<td>subType</td>
<td>String</td>
<td>Positioning sub-type,BD(GGA/GSA/GSV...China)/GL (Russia)/GP (America)/GA(Europe)/GN(GP+BD combined)/PQ, LBS</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>	
The parsed positioning information. The default coordinate system: wgs84<br /> 
lat: latitude ddmm.mmmm(degree and minute) format, unit: minute<br />
lng: longitude dddmm.mmmm(degree and minute)format, Unit: minute<br />
hdop:Horizontal accuracy: 0.5~99.9<br />
latType:N (North latitude) or S (South latitude) <br />
lngType:E (East longitude) or W (West longitude)
</td>
</tr>
</table>
</td>
</tr>
</table>



Example：

```
{
    "cmd": "message",
    "data": {
        "ticket": "5f9924d171977c33bc5ad1b1",
        "productKey": "abcdefg",
        "deviceKey": "1234567890123",
        "type": "LOCATION",
        "subtype": "INFO-KV",
        "createdAt": 1609316592000,
        "data": {
            "packetId": 5,
            "type": "GP/LBS",
            "subType": "BD(GGA)/LBS",
            "kv": {
                "satellites": 1,             //Current satellite number
                "lat": 1222.1231,            //Latitude(Unit: Minute)
                "lng": 12346.6241,           //Longitude(Unit: Minute)
                "wgs_84": {
                    "lat": 12.221231,        //Latitude(Unit: Minute)
                    "lng": 123.466241,       //Longitude(Unit: Minute)
                },
                "gcj_02": {
                    "lat": 12.221231,        //Latitude(Unit: Minute)
                    "lng": 123.466241,       //Longitude(Unit: Minute)
                },
                "bd_09": {
                    "lat": 12.221231,        //Latitude(Unit: Minute)
                    "lng": 123.466241,       //Longitude(Unit: Minute)
                },
                "latType": "N/S",            //Hemisphere in latitude
                "lngType": "W/E",            //Hemisphere in Longitude
                "hdop": "0.99",              //Horizontal precision factor which is unique to GPS data
                "accuracy": "550",           //Accuracy which is unique to LBS data
                "locateTime": 1609316592000  //Poeitioning time (UTC)
            }
        }
    }
}
```

#### **End User Device Permission Change Info**
This information will be pushed when the subscribed device permissions are changed (deleted/shared invalid)

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>Product key of the product</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>Device key of the device</td>
</tr>
<tr>
<td>deviceName</td>
<td>String</td>
<td>Device name. Optional</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Fixed to ENDUSER</td>
</tr>
<tr>
<td>subtype</td>
<td>String</td>
<td>Fixed to USER-BIND</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>Message identifier</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>Operation timestamp in milliseconds</td>
</tr>
<tr>
<td>data</td>
<td>JSON Object</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>endUserId</td>
<td>String</td>
<td>End user ID</td>
</tr>
<tr>
<td>endUserDomain</td>
<td>String</td>
<td>End user domain</td>
</tr>
<tr>
<td>value</td>
<td>Integer</td>
<td>
0-Delete a device (Unbinding, user logout, sharer deletion, shared person deletion, device group member device deletion)<br />
1-Add a device (Binding, sharing, adding a device group member device)<br />
2-Invalid Device (device reset)
</td>
</tr>
<tr>
<td>authStatus</td>
<td>Integer</td>
<td>	
Authentication status - 1 True Binding, 2 Pseudo Binding
</td>
</tr>
<tr>
<td>authLevel</td>
<td>Integer</td>
<td>	
Authentication level - 1 Owner 2 Sharer
</td>
</tr>
<tr>
<td>invalidCause</td>
<td>Integer</td>
<td>	
Deletion/Invalidation Reason<br />
1 The device is unbound<br />
2 The device is reset<br />
3 Share expired<br />
4 Share cancelled<br />
5 The share is overwritten<br />
6 User logout<br />
7 Remove from the device group
</td>
</tr>
</table>
</td>
</tr>
</table>



Example:

```
{
    "cmd": "message",
    "data": "{\"type\": \"ENDUSER\",\"subtype\": \"USER-BIND\",\"deviceKey\": \"132456\",\"productKey\": \"p11376\",\"createdAt\": 1616375484482,\"deviceName\": \"某设备\",\"ticket\": \"23924d171977c121325ad1bf\",\"data\": {\"endUserId\": \"11376\",\"endUserDomain\": \"C.DM.5715.1\",\"value\":1}}"
}
```

### **Send Command**

<font color=#ff6600>client => server</font>

**Data Format:**

| **Field** | **Type**  | **Description**                                        |
|:----------|:----------|:-------------------------------------------------------|
| cmd       | String    | send                                                   |
| version   | Number    | version. Optional. Valid range: 1, 2. Default value: 1 |
| data      | JSON      | Data issued                                            |

Data structure of data

| **Field**  | **Type** | **Description**                                                                                                                                                    |
| :--------- | :------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| productKey | String   | Product key of the product                                                                                                                                         |
| deviceKey  | String   | Device key of the device                                                                                                                                           |
| type       | String   | READ-ATTR: TSL property - Read; <br />WRITE-ATTR: TSL property - Write; <br />EXE-SERV: Execute the TSL service; <br />RAW: Transparent transmission command       |
| dataFormat | String   | Optional. Default value: Text. When type is RAW, the data format can be in Hex/Text/Base64                                                                         |
| raw        | String   | The raw data issued on the transparent transmission product. Required in transparent transmission product and optional on TSL.                                     |
| kv         | String   | The data issued on TSL. Required on non-transparent transmission products and optional on transparent transmission products.                                       |
| isCache    | Boolean  | Whether the commands issued on transparent transmission products are cached. Optional                                                                              |
| cacheTime  | Long     | Cache time for commands issued on transparent transmission products. Unit: Second. Optional.                                                                       |
| msgId      | Number   | Message ID. Optional. Maximum length: 20 bytes. It is used to identify the message ID of the command issued by the client and is corresponds to msgId of send_ack. |
| QoS        | Number   | Quality of service (QoS). Optional. Valid range: 0, 1. Default value: 1.                                                                                           |

**Example:**

Transparent Transmission

```
{
    "cmd": "send",
    "data": {
        "cacheTime": 3600,
        "dataFormat": "Text",
        "deviceKey": "866123456789015",
        "isCache": true,
        "productKey": "p12345",
        "raw": "123456",
        "type": "RAW"
    }
}
```

TSL

```
{
    "cmd": "send",
    "data": {
        "deviceKey": "1234567890",
        "kv": "[{\"id\":5,\"name\":\"openapi\",\"type\":\"BOOL\",\"value\":\"true\"}]",
        "productKey": "p12345",
        "type": "WRITE-ATTR"
    }
}
```

### **Command Sending Response**

<font color=#ff6600>server => client</font>

**Data Format:**

| **Field** | **Type** | **Description**      |
| :-------- | :------- | :------------------- |
| cmd       | String   | send_ack             |
| data      | JSON     | Response information |

Data Structure of data

| **Field**  | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| ticket     | String   | Message identifier                                           |
| msgId      | Number   | The message ID carried when a command is issued to correspond to the issued command. If the message ID is not inputted, the value is 0 in send_ack |
| productKey | String   | Product key of the product                                   |
| deviceKey  | String   | Device key of the device                                     |
| createdAt  | Long     | The time that  the command is issued (That is, the time when the WebSocket server receives the issued command) |
| sentAt     | Long     | The time when Developer Center sends commands to the device southbound    |
| ackAt      | Long     | The time that the device confirms to receive the command. If it fails, the value is the time when the southbound confirmation fails. |
| status     | String   | Status<br />succ: Succeeded<br />fail: Failed |

**Example**

```
{
    "cmd": "send_ack",
    "data": {
        "msgId": 1,
        "ticket": "12345678",
        "productKey":"123456",
        "deviceKey":"4567890001",
        "createdAt": 1609316591000,
        "sentAt": 1609316592000,
        "ackAt": 1609316592000,
        "status": "succ"
    }
}
```

### **Error Info**

<font color=#ff6600>server => client</font>

**Data Format:**

| **Field** | **Type** | **Description**   |
| :-------- | :------- | :---------------- |
| cmd       | String   | error             |
| data      | JSON     | Error information |

Data Structure of data

| **Field** | **Type** | **Description**                                              |
| :-------- | :------- | :----------------------------------------------------------- |
| reqMsg    | String   | Request message                                              |
| code      | String   | Error code. Invalid json, incorrect message format (such as missing cmd field),  unsupported cmd, (After the development is completed, a specific enumeration list needs to be given) |
| msg       | String   | Error Information                                            |

**Example:**

```
{
    "cmd": "error",
    "data": {
        "code": 4001,
        "msg": "server internal exception",
        "reqMsg": "{\"cmd\": \"login\",\"data\": {\"token\": \"xxxxxxxxxxxxxxxxxxxxxx\"}}"
    }
}
```

**Error Code:**

| **Error Code** | **Error Info**                                               | **Description**                                       |
| :------------- | :----------------------------------------------------------- | :---------------------------------------------------- |
| 4001           | server internal exception                                    | Server internal exception occurs                      |
| 4002           | the JSON data is incorrectly formatted                       | The JSON data is incorrectly formatted                |
| 4003           | command is empty                                             | The command is empty.                                 |
| 4004           | command is not supported                                     | The command is not supported.                         |
| 4005           | data is empty                                                | The data is empty.                                    |
| 4006           | data format is incorrect                                     | The data format is incorrect.                         |
| 4007           | token is empty                                               | The token is empty.                                   |
| 4009           | user cannot login repeatedly                                 | You cannot log in repeatedly.                         |
| 4010           | user not logged in                                           | You haven't logged in.                                |
| 4011           | device is not bound                                          | The device is not bound.                              |
| 4013           | not subscribed                                               | No subscribed information.                            |
| 4015           | operation type is not supported                              | The operation type is not supported.                  |
| 4016           | request failed                                               | The request failed.                                   |
| 4017           | failed to send data                                          | Fail to send data.                                    |
| 4018           | device is not certified                                      | The device is not certified.                          |
| 4019           | the frequency of device messages sent is limited             | The frequency of the device messages sent is limited. |
| 4020           | product type and parameter type do not match                 | The product type and parameter type are not matched.  |
| 4021           | product key is empty                                         | ProductKey is empty.                                  |
| 4022           | product key is incorrectly formatted                         | ProductKey is incorrectly formatted.                  |
| 4023           | device key is empty                                          | DeviceKey is empty.                                   |
| 4024           | device key is incorrectly formatted                          | DeviceKey is incorrectly formatted.                   |
| 4026           | operation type is empty                                      | The operation type is empty.                          |
| 4027           | device message upper limit                                   | The device messages reach the upper limit.            |
| 4028           | validation of downstream data format of physical model is abnormal | TSL downlink data format is incorrect.                |
| 4029           | the message id is incorrectly formatted                      | The message ID is incorrectly formatted.              |
| 4030           | device offline                                               | The device is offline.                                |

### **Unsubscription**

<font color=#ff6600>client => server</font>

**Data Format:**

| **Field** | **Type** | **Description** |
| :-------- | :------- | :-------------- |
| cmd       | String   | Unsubscribe     |
| data      | JSON     | JSON array      |

Data structure of data

| **Field**  | **Type** | **Description**          |
| :--------- | :------- | :----------------------- |
| productKey | String   | Product key of product   |
| deviceKey  | String   | Device key of the device |

**Example:**

```
{
    "cmd": "unsubscribe",
    "data": [
        {
            "deviceKey": "1234567890",
            "productKey": "p12345"
        },
        {
            "deviceKey": "1234567890",
            "productKey": "p12345"
        }
    ]
}
```

### **Unsubscription Response**

<font color=#ff6600>server => client</font>

**Data Format:**

| **Field** | **Type** | **Description**                                              |
| :-------- | :------- | :----------------------------------------------------------- |
| cmd       | String   | unsubscribe_resp                                             |
| data      | JSON     | List of devices that have successfully subscribed and failed to subscribe. See the example for the structure. |

Data Structure of data

| **Field**  | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| productKey | String   | Product key of the product                                   |
| deviceKey  | String   | Device key of the device                                     |
| code       | Integer  | The result code. 1 indicates a successful execution; any other value indicates a failed execution |
| msg        | String   | Returned information                                         |

**Example:**

```
{
    "cmd": "unsubscribe_resp",
    "data": [
        {
            "code": 1,
            "deviceKey": "1234567890",
            "msg": "succ",
            "productKey": "p12345"
        },
        {
            "code": 4014,
            "deviceKey": "1234567892",
            "msg": "device is not subscribed",
            "productKey": "p12345"
        }
    ]
}
```

**Error Code:**

| **Error Code** | **Error Info**                       | **Description**                      |
| :------------- | :----------------------------------- | :----------------------------------- |
| 4006           | data format is incorrect             | Data format is incorrect.            |
| 4014           | device is not subscribed             | The device is not subscribed.        |
| 4021           | product key is empty                 | ProductKey is empty.                 |
| 4022           | product key is incorrectly formatted | ProductKey is incorrectly formatted. |
| 4023           | device key is empty                  | DeviceKey is empty.                  |
| 4024           | device key is incorrectly formatted  | DeviceKey is incorrectly formatted.  |

### **Heartbeat**

<font color=#ff6600>client => server</font>

Command: **pong**

The server uses the heartbeat of the WebSocket protocol to maintain the connection with the client, and a common browser can automatically respond to  **ping**/**pong** of the WebSocket heartbeat to maintain the connection;

If the client does not support automatic response to the WebSocket heartbeat, you need to send commands to maintain the connection, such as sending command **pong** regularly (every 40 s) to remind the server that the connection still exits.

The example of **pong** is as follows, the sending interval should be less than the timeout time.

Note: This command is different from **ping**/**pong** in the websocket protocol. It is a command generated by a message.

**Example:**

```
{
    "cmd": "pong"
}
```

Heartbeat interval: 40 s, Timeout time 130 s

## **Error Code Description**

If it is a successful execution, code=1, msg=succ

| Error Code | **Error Info**                                               | **Description**                                       |
| :--------- | :----------------------------------------------------------- | :---------------------------------------------------- |
| 4001       | server internal exception                                    | Server internal exception occurs                      |
| 4002       | the JSON data is incorrectly formatted                       | The JSON data is incorrectly formatted                |
| 4003       | command is empty                                             | The command is empty.                                 |
| 4004       | command is not supported                                     | The command is not supported.                         |
| 4005       | data is empty                                                | The data is empty.                                    |
| 4006       | data format is incorrect                                     | The data format is incorrect.                         |
| 4007       | token is empty                                               | The token is empty.                                   |
| 4008       | token validation failed                                      | The token validation failed                           |
| 4009       | user cannot login repeatedly                                 | You cannot log in repeatedly.                         |
| 4010       | user not logged in                                           | You haven't logged in.                                |
| 4011       | device is not bound                                          | The device is not bound.                              |
| 4012       | subscription type is not supported                           | The subscription type is not supported                |
| 4013       | not subscribed                                               | No subscribed information.                            |
| 4014       | device is not subscribed                                     | The device is not subscribed.                         |
| 4015       | operation type is not supported                              | The operation type is not supported                   |
| 4016       | request failed                                               | The request failed.                                   |
| 4017       | failed to send data                                          | Fail to send data.                                    |
| 4018       | device is not certified                                      | The device is not certified.                          |
| 4019       | the frequency of device messages sent is limited             | The frequency of the device messages sent is limited. |
| 4020       | product type and parameter type do not match                 | The product type and parameter type are not matched.  |
| 4021       | product key is empty                                         | ProductKey is empty.                                  |
| 4022       | product key is incorrectly formatted                         | ProductKey is incorrectly formatted.                  |
| 4023       | device key is empty                                          | DeviceKey is empty.                                   |
| 4024       | device key is incorrectly formatted                          | DeviceKey is incorrectly formatted.                   |
| 4025       | message type is empty                                        | The message type is empty.                            |
| 4026       | operation type is empty                                      | The operation type is empty.                          |
| 4027       | device message upper limit                                   | The device messages reach the upper limit.            |
| 4028       | validation of downstream data format of physical model is abnormal | TSL downlink data format is incorrect.                |
| 4029       | the message id is incorrectly formatted                      | The message ID is incorrectly formatted.              |
| 4030       | device offline                                               | The device is offline.                                |