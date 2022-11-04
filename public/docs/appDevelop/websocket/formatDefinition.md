# WebSocket消息格式定义


- [WebSocket消息格式定义](#websocket消息格式定义)
  - [**协议版本**](#协议版本)
  - [**消息格式定义**](#消息格式定义)
    - [**登录**](#登录)
    - [**登录响应**](#登录响应)
    - [**订阅**](#订阅)
    - [**订阅响应**](#订阅响应)
    - [**消息**](#消息)
      - [**设备上下线信息**](#设备上下线信息)
      - [**设备和模组状态信息**](#设备和模组状态信息)
      - [**透传产品-设备上行信息**](#透传产品-设备上行信息)
      - [**物模型产品-设备上报属性信息**](#物模型产品-设备上报属性信息)
      - [**物模型产品-设备事件-信息-告警-故障**](#物模型产品-设备事件-信息-告警-故障)
      - [**设备定位信息上报**](#设备定位信息上报)
      - [**终端用户设备权限变更信息**](#终端用户设备权限变更信息)
    - [**发送指令**](#发送指令)
    - [**发送指令响应**](#发送指令响应)
    - [**错误信息**](#错误信息)
    - [**取消订阅**](#取消订阅)
    - [**取消订阅响应**](#取消订阅响应)
    - [**心跳**](#心跳)
  - [**错误码定义**](#错误码定义)

## **协议版本**

v1.0.0

## **消息格式定义**

WebSocket协议消息类型列表：

**客户端 -> 服务端：**

● 登录 login<br />
● 订阅 subscribe<br />
● 发送指令 send<br />
● 取消订阅 unsubscribe<br />
● 心跳pong（浏览器自动响应）

**服务端 -> 客户端：**

● 登录响应 login_resp<br />
● 订阅响应 subscribe_resp<br />
● 取消订阅响应 unsubscribe_resp<br />
● 错误信息 error<br />
● 设备消息 message<br />
● 发送指令响应 send_ack

### **登录**

<font color=#ff6600>client => server</font>

**数据格式**：

| **字段** | **类型** | **说明**        |
| :------- | :------- | :-------------- |
| cmd      | String   | login           |
| data     | JSON     | 包含token字符串 |

data数据结构

| **字段** | **类型** | **说明**                                                 |
| :------- | :------- | :------------------------------------------------------- |
| token    | String   | 终端用户系统token，用户在登录终端用户系统后会产生该token |

**数据示例：**

```
{
    "cmd": "login",
    "data": {
        "token": "xxxxxxxxxxxxxxxxxxxxxx"
    }
}
```

### **登录响应**

<font color=#ff6600>server => client</font>

**数据格式：**

| **字段** | **类型** | **说明**   |
| :------- | :------- | :--------- |
| cmd      | String   | login_resp |
| data     | JSON     | 返回信息   |

data数据结构

| **字段** | **类型** | **说明**                    |
| :------- | :------- | :-------------------------- |
| code     | Integer  | 返回码，1成功，其他为异常码 |
| msg      | String   | 返回信息                    |

**数据示例：**

```
{
    "cmd": "login_resp",
    "data": {
        "code": 1,
        "msg": "succ"
    }
}
```

**错误码：**

| **错误码** | **错误信息**            | **说明**      |
| :--------- | :---------------------- | :------------ |
| 4008       | token validation failed | token验证失败 |
| 4016       | request failed          | 请求失败      |

### **订阅**

client => server

**数据格式：**

| **字段** | **类型**   | **说明**  |
| :------- | :--------- | :-------- |
| cmd      | String     | subscribe |
| data     | JSON Array | JSON数组  |

data数据结构

| **字段**    | **类型** | **说明**                                                     |
| :---------- | :------- | :----------------------------------------------------------- |
| productKey  | String   | 产品ProductKey                                               |
| deviceKey   | String   | 设备DeviceKey                                                |
| messageType | Array    | 消息类型，<br /> ● [ONLINE](#设备上下线信息)设备上下线信息<br /> ● [STATUS ](#设备和模组状态信息)设备和模组状态信息<br /> ● [RAW-UPLINK](#透传产品-设备上行信息)透传产品-设备上行信息<br /> ● [MATTR-REPORT](#物模型产品-设备上报属性信息)物模型产品-设备上报属性信息<br /> ● [MEVENT-INFO](#物模型产品-设备事件-信息-告警-故障)物模型产品-设备事件信息<br /> ● [MEVENT-WARN](#物模型产品-设备事件-信息-告警-故障)物模型产品-设备事件告警<br /> ● [MEVENT-ERROR](#物模型产品-设备事件-信息-告警-故障)物模型产品-设备事件故障<br /> ● [LOCATION-INFO-KV](#设备定位信息上报)  设备定位信息上报 |

**数据示例：**

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

### **订阅响应**

<font color=#ff6600>server => client</font>

**数据格式：**

| **字段** | **类型**  | **说明**       |
| :------- | :-------- | :------------- |
| cmd      | String    | subscribe_resp |
| data     | JSONArray | 订阅设备结果   |

data数据结构

| **字段**   | **类型** | **说明**                 |
| :--------- | :------- | :----------------------- |
| productKey | String   | 产品PK                   |
| deviceKey  | String   | 设备DK                   |
| code       | Integer  | code，1成功 其他为异常码 |
| msg        | String   | 返回信息                 |

**数据示例：**

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

**错误码：**

| **错误码** | **错误信息**                         | **说明**             |
| :--------- | :----------------------------------- | :------------------- |
| 4006       | data format is incorrect             | data数据格式不正确   |
| 4011       | device is not bound                  | 设备未绑定           |
| 4012       | subscription type is not supported   | 订阅类型不支持       |
| 4021       | product key is empty                 | productKey为空       |
| 4022       | product key is incorrectly formatted | productKey格式不正确 |
| 4023       | device key is empty                  | deviceKey为空        |
| 4024       | device key is incorrectly formatted  | deviceKey格式不正确  |
| 4025       | message type is empty                | 消息类型为空         |

### **消息**

<font color=#ff6600>server => client</font>

**数据格式：**

| **字段** | **类型** | **说明** |
| :------- | :------- | :------- |
| cmd      | String   | message  |
| data     | JSON     | 消息内容 |

data中消息包含 设备上下线信息，设备和模组状态，设备上行信息（透传产品），设备上报属性信息（物模型产品），物模型事件信息，设备定位信息，终端用户设备权限变更信息

#### **设备上下线信息**

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
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
<td>ONLINE</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>消息生成的时间戳，整型，单位毫秒</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>网关信息，仅产品整合网关子设备存在</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>网关产品 productKey</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>网关设备 deviceKey</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>value</td>
<td>Integer</td>
<td>0 - 下线(offline)， 1 - 上线(online)，2 - 重新连接(reonline)</td>
</tr>
</table>
</td>
</tr>
</table>

数据示例：

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

#### **设备和模组状态信息**

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
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
<td>消息生成的时间戳，整型，单位毫秒</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
</tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
    </tr>
    <tr>
      <td colspan="3">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>网关产品productKey</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>网关设备deviceKey</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>上下行数据包Id</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>具体变动的状态属性<br />(battery,voltage,signal_strength,memory_free,rsrp,rsrq,snr,type,version,mcu_version,cell_id,icc_id,mcc,mnc,lac,phone_num,sim_num)
</td>
</tr>
</table>
</td>
</tr>
</table>

数据示例：

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

#### **透传产品-设备上行信息**

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
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
<td>消息生成的时间戳，整型，单位毫秒</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>网关信息，仅产品整合网关子设备存在</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>网关产品 productKey</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>网关设备 deviceKey</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>上下行数据包Id</td>
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

数据示例：

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

#### **物模型产品-设备上报属性信息**

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
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
<td>消息生成的时间戳，整型，单位毫秒</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>网关信息，仅产品整合网关子设备存在</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>网关产品 productKey</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>网关设备 deviceKey</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>extData</td>
<td>JSON Object</td>
<td>预留功能信息，键值对格式，使用预留功能时存在</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>包Id</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>属性键值对</td>
</tr>
</table>
</td>
</tr>
</table>

数据示例：

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

#### **物模型产品-设备事件-信息-告警-故障**

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
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
<td>INFO - 信息 WARN - 告警 ERROR - 故障</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>消息生成的时间戳，整型，单位毫秒</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
</tr>
<tr>
<td>gateway</td>
<td>JSON Object</td>
<td>网关信息，仅产品整合网关子设备存在</td>
</tr>
<tr>
<td colspan="3">
<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>网关产品 productKey</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>网关设备 deviceKey</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>extData</td>
<td>JSON Object</td>
<td>预留功能信息，键值对格式，使用预留功能时存在</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>包Id</td>
</tr>
<tr>
<td>code</td>
<td>String</td>
<td>消息标识符</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>键值对</td>
</tr>
</table>
</td>
</tr>
</table>

数据示例：

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

#### **设备定位信息上报**

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
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
<td>INFO-KV 定位信息</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>消息生成的时间戳，整型，单位毫秒</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>packetId</td>
<td>Integer</td>
<td>包Id</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>定位类型，GP/GL/GA/GN/BD/PQ/LBS</td>
</tr>
<tr>
<td>subType</td>
<td>String</td>
<td>定位子类型，BD(GGA/GSA/GSV...中国)/GL（俄国）/GP（美国）/GA（欧洲）/GN(GP+BD联合)/PQ,LBS</td>
</tr>
<tr>
<td>kv</td>
<td>JSON Object</td>
<td>	
解析后的定位信息，默认坐标系: wgs84<br /> 
lat:纬度ddmm.mmmm(度分)格式, 单位：分<br />
lng:经度dddmm.mmmm(度分)格式 单位：分<br />
hdop:水平精度：0.5~99.9<br />
latType:N或S(北纬或南纬)<br />
lngType:E或W(东经或西经)
</td>
</tr>
</table>
</td>
</tr>
</table>

数据示例：

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
                "satellites": 1,             //当前卫星数
                "lat": 1222.1231,            //纬度(分为单位)
                "lng": 12346.6241,           //经度(分为单位)
                "wgs_84": {
                    "lat": 12.221231,        //纬度(度为单位)
                    "lng": 123.466241,       //经度(度为单位)
                },
                "gcj_02": {
                    "lat": 12.221231,        //纬度(度为单位)
                    "lng": 123.466241,       //经度(度为单位)
                },
                "bd_09": {
                    "lat": 12.221231,        //纬度(度为单位)
                    "lng": 123.466241,       //经度(度为单位)
                },
                "latType": "N/S",            //纬度半球
                "lngType": "W/E",            //经度半球
                "hdop": "0.99",              //水平精度因子，gps数据独有
                "accuracy": "550",           //精度，lbs数据独有
                "locateTime": 1609316592000  //定位时间(UTC时间)
            }
        }
    }
}
```

#### **终端用户设备权限变更信息**
当订阅的设备权限变更（被删除/分享无效时）时会推送该信息

<table>
<tr>
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>productKey</td>
<td>String</td>
<td>产品PK</td>
</tr>
<tr>
<td>deviceKey</td>
<td>String</td>
<td>设备DK</td>
</tr>
<tr>
<td>deviceName</td>
<td>String</td>
<td>设备名称，非必填</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>固定为ENDUSER</td>
</tr>
<tr>
<td>subtype</td>
<td>String</td>
<td>固定为USER-BIND</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>消息识别码</td>
</tr>
<tr>
<td>createdAt</td>
<td>Long</td>
<td>操作时间戳,ms</td>
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
<th>字段</th>
<th>类型</th>
<th>备注</th>
</tr>
<tr>
<td>endUserId</td>
<td>String</td>
<td>终端用户ID</td>
</tr>
<tr>
<td>endUserDomain</td>
<td>String</td>
<td>终端用户域</td>
</tr>
<tr>
<td>value</td>
<td>Integer</td>
<td>
0-删除设备（解绑、用户注销、分享人删除、被分享人删除、设备组成员设备删除）<br />
1-添加设备（绑定、分享、设备组成员设备添加）<br />
2-设备失效（设备重置）
</td>
</tr>
<tr>
<td>authStatus</td>
<td>Integer</td>
<td>	
认证状态 - 1真绑定 2伪绑定
</td>
</tr>
<tr>
<td>authLevel</td>
<td>Integer</td>
<td>	
权限级别 - 1拥有者 2分享者
</td>
</tr>
<tr>
<td>invalidCause</td>
<td>Integer</td>
<td>	
删除/失效原因<br />
1 设备解绑<br />
2 设备重置<br />
3 分享过期<br />
4 取消分享<br />
5 覆盖分享<br />
6 用户注销<br />
7 从设备组中移出
</td>
</tr>
</table>
</td>
</tr>
</table>

数据示例：

```
{
    "cmd": "message",
    "data": "{\"type\": \"ENDUSER\",\"subtype\": \"USER-BIND\",\"deviceKey\": \"132456\",\"productKey\": \"p11376\",\"createdAt\": 1616375484482,\"deviceName\": \"某设备\",\"ticket\": \"23924d171977c121325ad1bf\",\"data\": {\"endUserId\": \"11376\",\"endUserDomain\": \"C.DM.5715.1\",\"value\":1}}"
}
```

### **发送指令**

<font color=#ff6600>client => server</font>

**数据格式：**

| **字段**     | **类型**  | **说明** |
|:-----------|:--------| :------- |
| cmd        | String  | send     |
| version    | Number  | 1或2，不填或非2时默认为1 |
| data       | JSON    | 下发数据 |

data数据结构

| **字段**     | **类型** | **说明**                                                                           |
|:-----------| :------- |:---------------------------------------------------------------------------------|
| productKey | String   | 产品ProductKey                                                                     |
| deviceKey  | String   | 设备DeviceKey                                                                      |
| type       | String   | READ-ATTR 物模型属性-读,<br />WRITE-ATTR 物模型属性-写,<br />EXE-SERV 调用物模型服务,<br />RAW 透传命令 |
| dataFormat | String   | 非必填，默认为Text，type为RAW数据格式可为Hex/Text/Base64                                        |
| raw        | String   | 透传下发数据，透传时有效且必填，为物模型时无效非必填                                                       |
| kv         | String   | 物模型下发数据，非透传产品必填，透传时无效非必填                                                         |
| isCache    | Boolean  | 透传产品下发指令是否缓存，非必填                                                                 |
| cacheTime  | Long     | 透传产品下发指令缓存时间，非必填，单位秒                                                             |
| msgId      | Number   | 消息ID，非必填，最大长度20，用来标识客户端下发指令的消息ID，对应send_ack的msgId                                |
| QoS        | Number   | 服务质量级别，0-至多一次 1-至少一次，非必填，默认为1                                                    |

**数据示例：**

透传

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

物模型

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

### **发送指令响应**

<font color=#ff6600>server => client</font>

**数据格式：**

| **字段** | **类型** | **说明** |
| :------- | :------- | :------- |
| cmd      | String   | send_ack |
| data     | JSON     | 响应信息 |

data数据结构

| **字段**   | **类型** | **说明**                                                     |
| :--------- | :------- | :----------------------------------------------------------- |
| ticket     | String   | 消息识别码                                                   |
| msgId      | Number   | 下发指令时携带的消息ID，用来对应下发的指令，如果下发时未传该值，则send_ack信息中该值为0 |
| productKey | String   | 产品ProductKey                                               |
| deviceKey  | String   | 设备DeviceKey                                                |
| createdAt  | Long     | 下发指令时间（即websocket服务端接收到下发指令的时间）        |
| sentAt     | Long     | 开发者中心南向给设备下发命令的时间                                  |
| ackAt      | Long     | 设备确认收到命令时间，如果失败则该值为南向确认失败的时间     |
| status     | String   | 状态，succ - 成功，fail - 失败                |

**数据示例**

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

### **错误信息**

<font color=#ff6600>server => client</font>

**数据格式：**

| **字段** | **类型** | **说明** |
| :------- | :------- | :------- |
| cmd      | String   | error    |
| data     | JSON     | 错误信息 |

data数据结构

| **字段** | **类型** | **说明**                                                     |
| :------- | :------- | :----------------------------------------------------------- |
| reqMsg   | String   | 请求信息                                                     |
| code     | String   | 错误码code，不是合法json、消息格式不正确（比如缺少cmd字段）、不支持得cmd，（开发完成后需要给出具体的枚举列表） |
| msg      | String   | 错误信息                                                     |

**数据示例：**

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

**错误码：**

| **错误码** | **错误信息**                                                 | **说明**               |
| :--------- | :----------------------------------------------------------- | :--------------------- |
| 4001       | server internal exception                                    | 服务异常               |
| 4002       | the JSON data is incorrectly formatted                       | JSON数据格式不正确     |
| 4003       | command is empty                                             | cmd为空                |
| 4004       | command is not supported                                     | cmd不支持              |
| 4005       | data is empty                                                | data为空               |
| 4006       | data format is incorrect                                     | data数据格式不正确     |
| 4007       | token is empty                                               | token为空              |
| 4009       | user cannot login repeatedly                                 | 用户不能重复登录       |
| 4010       | user not logged in                                           | 用户未登录             |
| 4011       | device is not bound                                          | 设备未绑定             |
| 4013       | not subscribed                                               | 无订阅信息             |
| 4015       | operation type is not supported                              | 操作类型不支持         |
| 4016       | request failed                                               | 请求失败               |
| 4017       | failed to send data                                          | 发送数据失败           |
| 4018       | device is not certified                                      | 设备未认证             |
| 4019       | the frequency of device messages sent is limited             | 设备消息限流           |
| 4020       | product type and parameter type do not match                 | 产品类型和参数不匹配   |
| 4021       | product key is empty                                         | productKey为空         |
| 4022       | product key is incorrectly formatted                         | productKey格式不正确   |
| 4023       | device key is empty                                          | deviceKey为空          |
| 4024       | device key is incorrectly formatted                          | deviceKey格式不正确    |
| 4026       | operation type is empty                                      | 操作类型为空           |
| 4027       | device message upper limit                                   | 设备达到消息上限       |
| 4028       | validation of downstream data format of physical model is abnormal | 物模型下行数据格式错误 |
| 4029       | the message id is incorrectly formatted                      | msgId格式不正确        |
| 4030       | device offline                                               | 设备离线               |

### **取消订阅**

<font color=#ff6600>client => server</font>

**数据格式：**

| **字段** | **类型** | **说明**    |
| :------- | :------- | :---------- |
| cmd      | String   | unsubscribe |
| data     | JSON     | JSON数组    |

data数据结构

| **字段**   | **类型** | **说明**       |
| :--------- | :------- | :------------- |
| productKey | String   | 产品ProductKey |
| deviceKey  | String   | 设备DeviceKey  |

**数据示例：**

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

### **取消订阅响应**

<font color=#ff6600>server => client</font>

**数据格式：**

| **字段** | **类型** | **说明**                             |
| :------- | :------- | :----------------------------------- |
| cmd      | String   | unsubscribe_resp                     |
| data     | JSON     | 订阅成功和失败的设备列表，结构见示例 |

data数据结构

| **字段**   | **类型** | **说明**                 |
| :--------- | :------- | :----------------------- |
| productKey | String   | 产品PK                   |
| deviceKey  | String   | 设备DK                   |
| code       | Integer  | code，1成功 其他为异常码 |
| msg        | String   | 返回信息                 |

**数据示例：**

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

**错误码：**

| **错误码** | **错误信息**                         | **说明**             |
| :--------- | :----------------------------------- | :------------------- |
| 4006       | data format is incorrect             | data数据格式不正确   |
| 4014       | device is not subscribed             | 设备未订阅           |
| 4021       | product key is empty                 | productKey为空       |
| 4022       | product key is incorrectly formatted | productKey格式不正确 |
| 4023       | device key is empty                  | deviceKey为空        |
| 4024       | device key is incorrectly formatted  | deviceKey格式不正确  |

### **心跳**

<font color=#ff6600>client => server</font>

cmd：pong

server使用websocket协议的心跳和client保持连接，一般的浏览器可以自动响应ws心跳的ping/pong维持连接；

如果client不支持自动响应ws心跳，则需要发送命令去维持连接，比如定时（每40s）发送cmd pong提醒server该连接还在，

pong命令如下示例，发送间隔应小于超时时间

**备注**：该命令不同于websocket协议中的ping/pong，是通过消息生成的命令

**数据示例：**

```
{
    "cmd": "pong"
}
```

心跳间隔：40s，超时时间130s

## **错误码定义**

正确响应code=1，msg=succ

| **错误码** | **错误信息**                                                 | **说明**               |
| :--------- | :----------------------------------------------------------- | :--------------------- |
| 4001       | server internal exception                                    | 服务异常               |
| 4002       | the JSON data is incorrectly formatted                       | JSON数据格式不正确     |
| 4003       | command is empty                                             | cmd为空                |
| 4004       | command is not supported                                     | cmd不支持              |
| 4005       | data is empty                                                | data为空               |
| 4006       | data format is incorrect                                     | data数据格式不正确     |
| 4007       | token is empty                                               | token为空              |
| 4008       | token validation failed                                      | token验证失败          |
| 4009       | user cannot login repeatedly                                 | 用户不能重复登录       |
| 4010       | user not logged in                                           | 用户未登录             |
| 4011       | device is not bound                                          | 设备未绑定             |
| 4012       | subscription type is not supported                           | 订阅类型不支持         |
| 4013       | not subscribed                                               | 无订阅信息             |
| 4014       | device is not subscribed                                     | 设备未订阅             |
| 4015       | operation type is not supported                              | 操作类型不支持         |
| 4016       | request failed                                               | 请求失败               |
| 4017       | failed to send data                                          | 发送数据失败           |
| 4018       | device is not certified                                      | 设备未认证             |
| 4019       | the frequency of device messages sent is limited             | 设备消息限流           |
| 4020       | product type and parameter type do not match                 | 产品类型和参数不匹配   |
| 4021       | product key is empty                                         | productKey为空         |
| 4022       | product key is incorrectly formatted                         | productKey格式不正确   |
| 4023       | device key is empty                                          | deviceKey为空          |
| 4024       | device key is incorrectly formatted                          | deviceKey格式不正确    |
| 4025       | message type is empty                                        | 消息类型为空           |
| 4026       | operation type is empty                                      | 操作类型为空           |
| 4027       | device message upper limit                                   | 设备达到消息上限       |
| 4028       | validation of downstream data format of physical model is abnormal | 物模型下行数据格式错误 |
| 4029       | the message id is incorrectly formatted                      | msgId格式不正确        |
| 4030       | device offline                                               | 设备离线               |
