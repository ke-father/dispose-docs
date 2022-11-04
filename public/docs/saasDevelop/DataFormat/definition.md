# 数据格式定义

本文针对概述中定义的消息类型，详细描述每种消息类型的数据格式。<br />
当前版本 v1.0.0。

  - [上下线事件](#上下线事件)
  - [设备和模组状态](#设备和模组状态)
  - [设备命令响应数据](#设备命令响应数据)
  - [设备信息变更](#设备信息变更)
  - [设备绑定信息变更](#设备绑定信息变更)
  - [透传-设备上行数据](#透传-设备上行数据)
  - [透传-设备下行数据](#透传-设备下行数据)
  - [物模型-物模型属性信息](#物模型-物模型属性信息)
    - [MATTR - READ：物模型-读下发](#mattr-read-物模型-读下发)
    - [MATTR - READRESP：物模型-读响应](#mattr-readresp-物模型-读响应)
    - [MATTR - WRITE：物模型-写下发](#mattr-write-物模型-写下发)
    - [MATTR - REPORT：物模型-上报](#mattr-report-物模型-上报)
  - [物模型-物模型事件上报-信息](#物模型-物模型事件上报-信息)
  - [物模型-物模型事件上报-告警](#物模型-物模型事件上报-告警)
  - [物模型-物模型事件上报-故障](#物模型-物模型事件上报-故障)
  - [物模型-物模型服务调用日志](#物模型-物模型服务调用日志)
  - [设备定位-查询定位信息](#设备定位-查询定位信息)
  - [设备定位-原始数据](#设备定位-原始数据)
  - [设备定位信息](#设备定位信息)
  - [产品信息变更](#产品信息变更)
  - [产品授权信息](#产品授权信息)
  - [物模型发布信息变更](#物模型发布信息变更)
  - [终端用户信息变更](#终端用户信息变更)

## **上下线事件**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>ONLINE</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>value</td>
            <td>Integer</td>
            <td>
              0 - 下线(offline)， 1 - 上线(online)，2 - 重新连接(reonline)
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
    "productKey": "p12345",
    "deviceKey": "1234567890",
    "type": "ONLINE",
    "createdAt": 1609316592000,
    "ticket": "5f9924d171977c33bc5ad1b1",
    "gateway": {
        "productKey": "p12344",
        "deviceKey": "1234567891"
    },
    "data": {
        "value": 1
    }
}
```

## **设备和模组状态**

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
            <td>
            具体变动的状态属性<br />
            (battery,voltage,signal_strength,memory_free,rsrp,rsrq,snr,type,version,mcu_version,cell_id,icc_id,mcc,mnc,lac,phone_num,sim_num)<br />
            见设备状态和模组状态字段，上报的字段数量不固定
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
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
```

状态字段列表

<table>
    <tr>
      <th>类别</th>
      <th>Name</th>
      <th>Key</th>
    </tr>
    <tr>
      <td rowspan="7">设备状态</td>
      <td>电量</td>
      <td>battery</td>
    </tr>
    <tr>
      <td>电压</td>
      <td>voltage</td>
    </tr>
    <tr>
      <td>信号强度</td>
      <td>signal_strength</td>
    </tr>
    <tr>
      <td>剩余空间</td>
      <td>memory_free</td>
    </tr>
    <tr>
      <td>参考信号接收功率</td>
      <td>rsrp</td>
    </tr>
    <tr>
      <td>LTE参考信号接收质量</td>
      <td>rsrq</td>
    </tr>
    <tr>
      <td>信号与干扰加噪声比</td>
      <td>snr</td>
    </tr>
    <tr>
      <td rowspan="12">模组状态</td>
      <td>模组型号</td>
      <td>type</td>
    </tr>
    <tr>
      <td>模组版本</td>
      <td>version</td>
    </tr>
    <tr>
      <td>MCU版本</td>
      <td>mcu_version</td>
    </tr>
    <tr>
      <td>基站id</td>
      <td>cell_id</td>
    </tr>
    <tr>
      <td>ICCID号</td>
      <td>icc_id</td>
    </tr>
    <tr>
      <td>移动国家代码</td>
      <td>mcc</td>
    </tr>
    <tr>
      <td>移动网络代码</td>
      <td>mnc</td>
    </tr>
    <tr>
      <td>位置区代码</td>
      <td>lac</td>
    </tr>
    <tr>
      <td>phone号</td>
      <td>phone_num</td>
    </tr>
    <tr>
      <td>SIM号</td>
      <td>sim_num</td>
    </tr>
    <tr>
      <td>SDK版本</td>
      <td>sdk_ver</td>
    </tr>
    <tr>
      <td>定位支持功能</td>
      <td>locator</td>
    </tr>
  </table>


## **设备命令响应数据**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>REQACK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码（雪花算法生成）</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>sentAt</td>
            <td>Long</td>
            <td>
              发送给设备的时间戳，整型，单位毫秒
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>Enum</td>
            <td>
              succ - 成功，fail - 失败
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
    "productKey": "p12345",
    "deviceKey": "1234567890",
    "type": "REQACK",
    "createdAt": 1609316592000,
    "ticket": "23924d171977c121325ad1bf",
    "gateway": {
        "productKey":"p12344"  ,
        "deviceKey":"1234567891"
    },
    "data": {
        "sentAt": "1609316592000",
        "status": "succ"
    }
}
```

## **设备信息变更**

<table>
    <tr>
      <th>字段</th>
      <th>名称</th>
      <th>字段类型</th>
      <th>是否必填</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>type</td>
      <td>事件类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为: META_EVENT</td>
    </tr>
    <tr>
    <td>ticket</td>
    <td>消息识别码</td>
    <td>String</td>
    <td>否</td>
    <td>当操作类型是激活、认证、注销时，必填，否则，不必填</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>操作对象类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为DEVICE，表示对设备的操作</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>操作</td>
      <td>String</td>
      <td>是</td>
      <td>
      ADD: 添加<br />
      UPDATE: 修改<br />
      DELETE: 删除<br />
      RESET: 重置<br />
      AUTH: 认证<br />
      ACTIVE: 激活<br />
      LOGOFF: 注销<br />
      </td>
    </tr>
    <tr>
      <td>productKey</td>
      <td>产品PK</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>设备唯一码</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>操作时间戳</td>
      <td>Long</td>
      <td>是</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>网关信息</td>
      <td>JSON Object</td>
      <td>否</td>
      <td>产品整合网关子设备，重置/认证/注销等操作时会存在网关信息</td>
    </tr>
    <tr>
      <td colspan="5">
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
      <td></td>
      <td>JSON Object</td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        设备 添加/删除/激活/认证/注销
        <table>
          <tr>
            <th>字段</th>
            <th>字段类型</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>deviceName</td>
            <td>String</td>
            <td>设备名称</td>
          </tr>
          <tr>
            <td>deviceStatus</td>
            <td>Integer</td>
            <td>设备状态</td>
          </tr>
          <tr>
            <td>isActived</td>
            <td>Integer</td>
            <td>是否激活0-未激活 1-激活</td>
          </tr>
          <tr>
            <td>isVerified</td>
            <td>Integer</td>
            <td>是否允许二次认证 0-否 1-是</td>
          </tr>
          <tr>
            <td>firstConnTime</td>
            <td>Long</td>
            <td>第一次连接时间，单位毫秒</td>
          </tr>
          <tr>
            <td>lastConnTime</td>
            <td>Long</td>
            <td>最近在线时间，单位毫秒</td>
          </tr>
          <tr>
            <td>protocol</td>
            <td>Integer</td>
            <td>
              1 -- MQTT<br />
              <span v-if="!isEu">
              2 -- LWM2M/CoAP
              </span>
            </td>
          </tr>
          <tr>
            <td>createTime</td>
            <td>Long</td>
            <td>创建时间，单位毫秒</td>
          </tr>
          <tr>
            <td>updateTime</td>
            <td>Long</td>
            <td>修改时间，单位毫秒</td>
          </tr>
          <tr>
            <td>sn</td>
            <td>String</td>
            <td>SN</td>
          </tr>
        </table>
           修改
        <table>
            <tr>
                <th>字段</th>
                <th>类型</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>deviceName</td>
                <td>JSON Object</td>
                <td>设备名称修改信息</td>
            </tr>
            <tr>
                <td colspan="3">
                    <table>
                        <tr>
                            <th>字段</th>
                            <th>类型</th>
                            <th>说明</th>
                        </tr>
                        <tr>
                            <td>old</td>
                            <td>String</td>
                            <td>修改前设备名称</td>
                        </tr>
                        <tr>
                            <td>new</td>
                            <td>String</td>
                            <td>修改后设备名称</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>sn</td>
                <td>JSON Object</td>
                <td>设备名称修改信息</td>
            </tr>
            <tr>
                <td colspan="3">
                    <table>
                        <tr>
                            <th>字段</th>
                            <th>类型</th>
                            <th>说明</th>
                        </tr>
                        <tr>
                            <td>new</td>
                            <td>String</td>
                            <td>修改后的SN名称</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </td>
    </tr>
  </table>


添加/删除 设备消息格式样例：

```json

{
    "productKey": "p11376",
    "deviceKey": "132456",    
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "operation": "ADD",
    "createdAt": 1616375484482,
    "data": {
        "deviceName": "123789",
        "deviceStatus": 0,
        "isActived": 0,
        "isVerified": 0,
        "firstConnTime": 1615795423000,
        "lastConnTime": null,
        "protocol": 1,
        "createTime": 1615795423000,
        "updateTime": 1615796888000,
        "sn": null
    }
}
```

激活/认证/注销 设备消息格式样例：

```json

{
    "productKey": "p11376",
    "deviceKey": "132456",    
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "ticket": "1032330579905388544",
    "operation": "AUTH",
    "createdAt": 1616375484482,
    "data": {
        "deviceName": "123789",
        "deviceStatus": 0,
        "isActived": 0,
        "isVerified": 0,
        "firstConnTime": 1615795423000,
        "lastConnTime": null,
        "protocol": 1,
        "createTime": 1615795423000,
        "updateTime": 1615796888000,
        "sn": null
    }
}
```

修改设备消息格式样例：

```json
{
    "productKey": "p11376",
    "deviceKey": "132456",
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "operation": "UPDATE",
    "createdAt": 1616375484482,
    "data": {
        "deviceName": {
            "old": "修改前设备名称",
            "new": "修改后设备名称"
        },
        "sn": {
            "new": "修改后的SN"
        }
    }
}
```

设备重置消息格式样例：

```json
{
    "productKey": "p11376",
    "deviceKey": "132456",
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "operation": "RESET",
    "createdAt": 1616375484482,
    "data": null,
    "gateway": {
        "productKey": "p11371",
        "deviceKey": "112456"
    }
}
```
## **设备绑定信息变更**

<table>
    <tr>
      <th>字段</th>
      <th>名称</th>
      <th>字段类型</th>
      <th>是否必填</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>产品PK</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>设备DK</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceName</td>
      <td>设备名称</td>
      <td>String</td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为ENDUSER</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>子类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为USER-BIND</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>消息识别码</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>创建时间</td>
      <td>Long</td>
      <td>是</td>
      <td>操作时间戳，ms</td>
    </tr>
    <tr>
      <td>data </td>
      <td></td>
      <td>JSON Object</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
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
            <td>认证状态 - 1真绑定 2伪绑定</td>
          </tr>
          <tr>
            <td>authLevel</td>
            <td>Integer</td>
            <td>权限级别 - 1拥有者 2分享者</td>
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
                7 从设备组中移出设备<br />
                8 设备从真绑定变为伪绑定<br />
                9 设备从伪绑定变为真绑定<br />
                10 子设备从网关断开<br />
                11 子设备连接网关
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
    "type": "ENDUSER",
    "subtype": "USER-BIND",
    "deviceKey": "132456",
    "productKey": "p11376",
    "createdAt": 1616375484482,
    "deviceName": "某设备",
    "ticket": "23924d171977c121325ad1bf"
    "data": {
        "endUserId": "11376",
        "endUserDomain": "C.DM.5715.1",
        "value":1
    }
}
```

## **透传-设备上行数据**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>RAW</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>UPLINK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              上下行数据包Id
            </td>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              base64 encoded string
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
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
```

## **透传-设备下行数据**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>RAW</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>DOWNLINK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              base64 encoded string
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "RAW",
    "subtype": "DOWNLINK",
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
```

## **物模型-物模型属性信息**

### **MATTR - READ：物模型-读下发**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>READ</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>keys</td>
            <td>array</td>
            <td>
              功能id集合
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "MATTR",
    "subtype": "READ",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey":"abcdefs",
        "deviceKey":"2345678901234"
    },
    "data": {
        "packetId": 3,
        "keys": ["code1", "code2"]
    }
}
```

### **MATTR – READRESP：物模型-读响应**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>READRESP</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              属性键值对
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：
```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "MATTR",
    "subtype": "READRESP",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey":"abcdefs",
        "deviceKey":"2345678901234"
    },
    "data": {
        "packetId": 3,
        "kv": {"k1": "v1", "k2": "v2"}
    }
}
```

### **MATTR - WRITE：物模型-写下发**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>WRITE</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              属性键值对
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：
```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "MATTR",
    "subtype": "WRITE",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey":"abcdefs",
        "deviceKey":"2345678901234"
    },
    "data": {
        "packetId": 3,
        "kv": {"code1":"1", "code2":"3"}
    }
}
```

### **MATTR – REPORT：物模型-上报**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>REPORT</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>extData</td>
      <td>JSON Object</td>
      <td>预留功能信息，键值对格式</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>
              预留字段，记录模组发生时间；时间戳格式字符串
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              属性键值对
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
样例：

```json
{
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
    "extData":{
      "occurredAt":"1652433712899"
    },
    "data": {
        "packetId": 5,
        "kv": {"k1": "v1", "k2": "v2"}
    }
}
```

## **物模型-物模型事件上报-信息**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MEVENT</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INFO</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>extData</td>
      <td>JSON Object</td>
      <td>预留功能信息，键值对格式</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>预留字段，记录模组发生时间；时间戳格式字符串</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              消息标识符
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              键值对
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：

```json
{
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
      "occurredAt": 1652433712899
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

## **物模型-物模型事件上报-告警**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MEVENT</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>WARN</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>extData</td>
      <td>JSON Object</td>
      <td>预留功能信息，键值对格式</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>预留字段，记录模组发生时间；时间戳格式字符串</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              消息标识符
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              键值对
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "MEVENT",
    "subtype": "WARN",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey":"abcdefs",
        "deviceKey":"2345678901234"
    },
    "extData": {
      "occurredAt": 1652433712899
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

## **物模型-物模型事件上报-故障**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MEVENT</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>ERROR</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>extData</td>
      <td>JSON Object</td>
      <td>预留功能信息，键值对格式</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>预留字段，记录模组发生时间；时间戳格式字符串</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              消息标识符
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              键值对
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "MEVENT",
    "subtype": "ERROR",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey": "abcdefs",
        "deviceKey":" 2345678901234"
    },
    "extData": {
      "occurredAt": 1652433712899
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

## **物模型-物模型服务调用日志**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>是</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MSERV</td>
      <td>是</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INPUT/OUTPUT</td>
      <td>是</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td>是</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td>是</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td>extData</td>
      <td>JSON Object</td>
      <td>预留功能信息，键值对格式</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>预留字段，记录模组发生时间；时间戳格式字符串</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>是</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              服务标识符
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              输入参数
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "MSERV",
    "subtype": "INPUT",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey": "abcdefs",
        "deviceKey": "2345678901234"
    },
    "extData": {
      "occurredAt": 1652433712899
    },
    "data": {
        "packetId": 3,
        "code": "serv_code",
        "kv": {
            "param1":"1", 
            "param2":"3"
        }
    }
}
```

## **设备定位-查询定位信息**

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
      <td>QUERY</td>
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
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>keys</td>
            <td>Array</td>
            <td>
              设置模式的集合，可以为空
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "LOCATION",
    "subtype": "QUERY",
    "createdAt": 1609316592000,
    "data": {
        "packetId": 1,
        "keys": []
    }
}
```

## **设备定位-原始数据**

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>LOCATION</td>
      <td></td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INFO-RAW</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td></td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td></td>
    </tr>
        <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td></td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              定位的原始数据，
              GNSS信息格式参考<a href="https://baike.baidu.com/item/NMEA-0183">NMEA-0183</a>协议语句，LBS为自定义：<br />
              $LBS,<1>,<2>,<3>,<4>,<5>,<6>*hh<\CR><\LF><br />
              <1>：基站mcc<br />
              <2>：基站mnc<br />
              <3>：基站lac<br />
              <4>：基站cellid<br />
              <5>：基站RxLev<br />
              <6>：备用
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


样例：
```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "LOCATION",
    "subtype": "INFO-RAW",
    "createdAt": 1609316592000,
    "gateway": {
      "productKey": "p12344",
      "deviceKey": "1234567891"
    },
    "data": {
        "packetId": 5,
        "raw": [
            "$GNGGA,095528.000,2318.1133,N,11319.7210,E,1,06,3.7,55.1,M,-5.4,M,,0000*69",
            "$BDGGA,062938.00,3110.4700719,N,12123.2657056,E,1,25,0.6,58.9666,M,0.000,M,99,AAAA*4"
        ]
    }
}
```

## **设备定位信息**

如果返回为数组，则以多条INFO-KV发送

<table>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>备注</th>
      <th>是否必选</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>LOCATION</td>
      <td></td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INFO-KV 上报原始/非原始</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>消息生成的时间戳，整型，单位毫秒</td>
      <td></td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>消息识别码</td>
      <td></td>
    </tr>
        <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>网关信息，仅产品整合网关子设备存在</td>
      <td>否</td>
    </tr>
    <tr>
      <td colspan="4">
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
      <td></td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>字段</th>
            <th>类型</th>
            <th>备注</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              包Id
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>
              定位类型，GP/GL/GA/GN/BD/PQ/LBS
            </td>
          </tr>
          <tr>
            <td>subType</td>
            <td>String</td>
            <td>
              定位子类型，BD(GGA/GSA/GSV...中国)/GL（俄国）/GP（美国）/GA（欧洲）/GN(GP+BD联合)/PQ,LBS
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              解析后的定位信息，默认坐标系: wgs84<br />
              lat:纬度ddmm.mmmm(度分)格式，单位：分<br />
              lng:经度dddmm.mmmm(度分)格式，单位：分<br />
              hdop:水平精度：0.5~99.9<br />
              latType:N或S(北纬或南纬)<br />
              lngType:E或W(东经或西经)<br/>
              height:海拔高度，单位：米
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

样例：

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "abcdefg",
    "deviceKey": "1234567890123",
    "type": "LOCATION",
    "subtype": "INFO-KV",
    "createdAt": 1609316592000,
    "gateway": {
        "productKey": "p12344",
        "deviceKey": "1234567891"
    },
    "data": {
        "packetId": 5,
        "type": "GP/LBS",
        "subType": "BD(GGA)/LBS",
        "kv": {
            "satellites": 1,            //当前卫星数
            "lat": 1222.1231,           //纬度(分为单位)
            "lng": 12346.6241,          //经度(分为单位)
            "wgs_84": {
                "lat": 12.221231,       //纬度(度为单位)
                "lng": 123.466241,      //经度(度为单位)
            },
            "gcj_02": {
                "lat": 12.221231,       //纬度(度为单位)
                "lng": 123.466241,      //经度(度为单位)
            },
            "bd_09": {
                "lat": 12.221231,       //纬度(度为单位)
                "lng": 123.466241,      //经度(度为单位)
            },
            "latType": "N/S",            //纬度半球
            "lngType": "W/E",            //经度半球
            "hdop": "0.99",              //水平精度因子，gps数据独有
            "accuracy": "550",           //精度，lbs数据独有
            "locateTime": 1609316592000,  //定位时间(UTC时间)
            "height":"-87.4"             //海拔高度(米为单位)
        }
    }
}
```

## **产品信息变更**

<table>
    <tr>
      <th>字段</th>
      <th>名称</th>
      <th>字段类型</th>
      <th>是否必填</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>type</td>
      <td>事件类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为: META_EVENT</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>操作对象类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为: PRODUCT，表示对产品的操作</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>操作</td>
      <td>String</td>
      <td>是</td>
      <td>
        ADD: 添加<br />
        UPDATE: 修改<br />
        DELETE: 删除<br />
      </td>
    </tr>
    <tr>
      <td>productKey</td>
      <td>产品PK</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>操作时间戳</td>
      <td>Long</td>
      <td>是</td>
      <td>操作时间戳（单位: 毫秒）</td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>是</td>
      <td>产品详细信息</td>
    </tr>
    <tr>
      <td colspan="5">
        产品 添加/删除
        <table>
          <tr>
            <th>字段</th>
            <th>字段类型</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>productName</td>
            <td>String</td>
            <td>产品名称</td>
          </tr>
          <tr>
            <td>productType</td>
            <td>Integer</td>
            <td>0-小批量 1-大批量</td>
          </tr>
          <tr>
            <td>accessType</td>
            <td>Integer</td>
            <td>接入类型0-设备 1-网关</td>
          </tr>
          <tr>
            <td>dataFmt</td>
            <td>Integer</td>
            <td>
              0 --透传/自定义<br />
              3 --json(标准数据格式)
            </td>
          </tr>
          <tr>
            <td>protocol</td>
            <td>Integer</td>
            <td>
              1 -- MQTT<br />
              <span v-if="!isEu">
              2 -- LWM2M/CoAP
              </span>
            </td>
          </tr>
          <tr>
            <td>logoPath</td>
            <td>String</td>
            <td>logo下载地址</td>
          </tr>
          <tr>
            <td>moduleType</td>
            <td>String</td>
            <td>模组类型</td>
          </tr>
          <tr>
            <td>moduleName</td>
            <td>String</td>
            <td>模组名称</td>
          </tr>
          <tr>
            <td>moduleId</td>
            <td>Long</td>
            <td>模组信息id</td>
          </tr>
          <tr>
            <td>allowedLimit</td>
            <td>Integer</td>
            <td>激活码数</td>
          </tr>
          <tr>
            <td>productStatus</td>
            <td>Integer</td>
            <td>项目状态，0-进行中， 3-已发布， 9-出错</td>
          </tr>
          <tr>
            <td>projectId</td>
            <td>Long</td>
            <td>
              项目id
            </td>
          </tr>
          <tr>
            <td>createTime</td>
            <td>Long</td>
            <td>
              创建时间，时间戳，单位毫秒
            </td>
          </tr>
          <tr>
            <td>updateTime</td>
            <td>Long</td>
            <td>修改时间，时间戳，单位毫秒</td>
          </tr>
          <tr>
            <td>itemCode</td>
            <td>String</td>
            <td>关联产品品类id(通过 产品品类查询接口获得)</td>
          </tr>
        </table>
           产品名称修改
        <table>
            <tr>
                <th>字段</th>
                <th>类型</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>productName</td>
                <td>JSON Object</td>
                <td>产品名称修改信息</td>
            </tr>
            <tr>
                <td colspan="3">
                    <table>
                        <tr>
                            <th>字段</th>
                            <th>类型</th>
                            <th>说明</th>
                        </tr>
                        <tr>
                            <td>old</td>
                            <td>String</td>
                            <td>修改前产品名称</td>
                        </tr>
                        <tr>
                            <td>new</td>
                            <td>String</td>
                            <td>修改后产品名称</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </td>
    </tr>
  </table>

新增产品 样例：

```json
{
    "type": "META_EVENT",
    "subtype": "PRODUCT",
    "operation": "ADD",
    "createdAt": 1616375484482,
    "operator": 1,
    "operatorType": 1,
    "productKey": "p00001",
    "data": {
        "productName": "产品样例",
        "productType": 0,
        "accessType": 1,
        "netWay": "1",
        "dataFmt": 1,
        "protocol": 1,
        "logoPath": "https://xxxx.com/abcdfg.jpeg",
        "moduleType": null,
        "moduleName": null,
        "moduleId": null,
        "allowedLimit": 3,
        "productStatus": 0,
        "projectId": 1,
        "createTime": 1615787274000,
        "updateTime": 1615789235000,
        "itemCode": "anfang"
    }
}
```

修改产品 样例：

```json
{
    "type": "META_EVENT",
    "subtype": "PRODUCT",
    "operation": "UPDATE",
    "createdAt": 1616375484482,
    "operator": 1,
    "operatorType": 1,
    "productKey": "p00001",
    "data": {
        "productName": {
            "old": "修改前产品名称",
            "new": "修改后产品名称"
        }
    }
}
```

## **产品授权信息**

<table>
    <tr>
      <th>字段</th>
      <th>名称</th>
      <th>字段类型</th>
      <th>是否必填</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>type</td>
      <td>事件类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为: META_EVENT</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>操作对象类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为: GRANT_AUTHORIZED，表示对产品授权相关的操作</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>操作</td>
      <td>String</td>
      <td>是</td>
      <td>
        AUTH: 授权<br />
        CANCEL_AUTH: 取消授权
      </td>
    </tr>
    <tr>
      <td>productKey</td>
      <td>产品PK</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>操作时间戳</td>
      <td>Long</td>
      <td>是</td>
      <td>操作时间戳（单位: 毫秒）</td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>是</td>
      <td>产品授权信息</td>
    </tr>
    <tr>
      <td colspan="5">
        产品 授权/取消授权
        <table>
          <tr>
            <th>字段</th>
            <th>字段类型</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>productName</td>
            <td>String</td>
            <td>产品名称</td>
          </tr>
          <tr>
            <td>productType</td>
            <td>Integer</td>
            <td>0-小批量 1-大批量</td>
          </tr>
          <tr>
            <td>accessType</td>
            <td>Integer</td>
            <td>接入类型0-设备 1-网关</td>
          </tr>
          <tr>
            <td>dataFmt</td>
            <td>Integer</td>
            <td>
              0 --透传/自定义<br />
              3 --json(标准数据格式)
            </td>
          </tr>
          <tr>
            <td>protocol</td>
            <td>Integer</td>
            <td>
              1 -- MQTT<br />
              <span v-if="!isEu">
              2 -- LWM2M/CoAP
              </span>
            </td>
          </tr>
          <tr>
            <td>logoPath</td>
            <td>String</td>
            <td>logo下载地址</td>
          </tr>
          <tr>
            <td>moduleType</td>
            <td>String</td>
            <td>模组类型</td>
          </tr>
          <tr>
            <td>moduleName</td>
            <td>String</td>
            <td>模组名称</td>
          </tr>
          <tr>
            <td>moduleId</td>
            <td>Long</td>
            <td>模组信息id</td>
          </tr>
          <tr>
            <td>allowedLimit</td>
            <td>Integer</td>
            <td>激活码数</td>
          </tr>
          <tr>
            <td>productStatus</td>
            <td>Integer</td>
            <td>项目状态，0-进行中， 3-已发布， 9-出错</td>
          </tr>
          <tr>
            <td>projectId</td>
            <td>Long</td>
            <td>
              项目id
            </td>
          </tr>
          <tr>
            <td>createTime</td>
            <td>Long</td>
            <td>
              创建时间，时间戳，单位毫秒
            </td>
          </tr>
          <tr>
            <td>updateTime</td>
            <td>Long</td>
            <td>修改时间，时间戳，单位毫秒</td>
          </tr>
          <tr>
            <td>itemCode</td>
            <td>String</td>
            <td>关联产品品类id(通过 产品品类查询接口获得)</td>
          </tr>
          <tr>
            <td>netWay</td>
            <td>String</td>
            <td>联网方式， 1-wifi， 2-蜂窝， 3-NB， 5-蓝牙</td>
          </tr>
        </table>
      </td> 
    </tr>
</table>
        
产品授权样例：

 ```json
{
	"createdAt": 1665280943221,
	"data": {
		"moduleType": null,
		"dataFmt": 3,
		"itemCode": "socket",
		"logoPath": null,
		"moduleName": null,
		"netWay": "2",
		"productStatus": 0,
		"allowedLimit": 100,
		"updateTime": 1665286595000,
		"productName": "插座",
		"accessType": 0,
		"protocol": null,
		"createTime": 1665285584000,
		"moduleId": null,
		"projectId": 11338,
		"productType": 0
	},
	"operation": "AUTH",
	"productKey": "p119Cx",
	"subtype": "GRANT_AUTHORIZED",
	"type": "META_EVENT"
}
```

## **物模型发布信息变更**

<table>
    <tr>
      <th>字段</th>
      <th>名称</th>
      <th>字段类型</th>
      <th>是否必填</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>subtype</td>
      <td>操作对象类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为THING_MODEL，表示对物模型相关的操作</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>操作类型</td>
      <td>String</td>
      <td>是</td>
      <td>RELEASE:发布</td>
    </tr>
    <tr>
      <td>productKey</td>
      <td>产品PK</td>
      <td>String</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>操作时间戳</td>
      <td>Long</td>
      <td>是</td>
      <td>操作时间戳，单位毫秒</td>
    </tr>
    <tr>
      <td>type</td>
      <td>事件类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为: META_EVENT</td>
    </tr>
    <tr>
      <td>data </td>
      <td></td>
      <td>JSON Object</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>字段</th>
            <th>字段类型</th>
            <th>说明</th>
          </tr>
          <tr>
            <td>tslJson</td>
            <td>JSON Object</td>
            <td>物模型发布后json数据</td>
          </tr>
        </table>
      </td>
    </tr>
</table>

样例：

```json
{
    "type": "META_EVENT",
    "subtype": "THING_MODEL",
    "operation": "RELEASE",
    "productKey": "p11374",
    "operator": 26984,
    "operatorType": 1,
    "createdAt": 1616375484482,
    "data": {
        "tslJson": {
            "profile": {
              "version": "20210406093313373",
                "productKey": "p1137H"
            },
            "properties": [
                {
                    "code": "202104011545",
                    "dataType": "BOOL",
                    "desc": "",
                    "id": 1,
                    "name": "202104011545",
                    "specs": [
                        {
                            "dataType": "BOOL",
                            "name": "TRUE",
                            "value": "true"
                        },
                        {
                            "dataType": "BOOL",
                            "name": "FALSE",
                            "value": "false"
                        }
                    ],
                    "subType": "RW",
                    "type": "PROPERTY"
                },
                {
                    "code": "202104011700",
                    "dataType": "DOUBLE",
                    "desc": "",
                    "id": 2,
                    "name": "202104011700",
                    "specs": {
                        "max": "2",
                        "min": "1",
                        "step": "1",
                        "unit": "°"
                    },
                    "subType": "RW",
                    "type": "PROPERTY"
                },
                {
                    "code": "202104011501",
                    "dataType": "TEXT",
                    "desc": "",
                    "id": 3,
                    "name": "202104011501",
                    "specs": {
                        "length": 123
                    },
                    "subType": "RW",
                    "type": "PROPERTY"
                }
            ]
        }
    }
}
```

## **终端用户信息变更**

<table>
    <tr>
      <th>字段</th>
      <th>名称</th>
      <th>字段类型</th>
      <th>是否必填</th>
      <th>备注</th>
    </tr>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>String</td>
      <td>是</td>
      <td>固定为ENDUSER</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>子类型</td>
      <td>String</td>
      <td>是</td>
      <td>
        USER-ADD: 添加 <br />
        USER-UPDATE: 修改 <br />
        USER-DELETE: 删除
      </td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>消息识别码</td>
      <td>String</td>
      <td>是</td>
      <td>消息唯一识别码</td>
    </tr>
      <td>createdAt</td>
      <td>创建时间</td>
      <td>Long</td>
      <td>是</td>
      <td>操作时间戳，单位毫秒</td>
    </tr>
    <tr>
      <td>data </td>
      <td></td>
      <td>JSON Object</td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>字段</th>
            <th>字段类型</th>
            <th>说明</th>
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
        </table>
      </td>
    </tr>
</table>

样例：

```json
{
    "ticket": "b18be821-5045-4467-801d-ca68c302dc3d",
    "type": "ENDUSER",
    "subtype": "USER-DELETE",
    "createdAt": 1642471712433,
    "data": {
        "endUserId": "C1",
        "endUserDomain": "C.DM.1.15"
    }
}
```



  
