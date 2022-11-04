# 物模型概述

## **什么是物模型**

物模型是物理空间中的实体（如传感器、车载装置、楼宇、工厂等）在云端的数字化表示。也可以理解为是设备一组功能定义的集合。它是为了解决实际场景中复杂的设备建模，不同产品下的设备可以进行不同的功能定义，且互相不影响。

通过物模型TSL文件导入导出，也可以比较轻松的实现物模型定义的复制和扩展。

## **物模型功能类型**

通过属性、服务和事件三个维度，分别描述了该实体是什么、能做什么、可以对外提供哪些信息。

| 名词 | 概述                                                         |
| :--- | :----------------------------------------------------------- |
| 属性 | 设备可读取和设置的能力。一般用于描述设备运行时的状态，如温度、湿度、电量、电压、坐标等。支持GET和SET请求方式。应用系统可发起对属性的读取和设置请求。 |
| 事件 | 设备运行时，主动上报给云端的事件。事件分为信息、告警、故障，应用系统根据场景进行自定义设置，事件可以被订阅。 |
| 服务 | 设备可被外部调用的能力或方法，可设置输入参数和输出参数。主要用于一条指令实现复杂的业务逻辑的任务。 |

## **物模型支持的数据类型**

您在开发者中心定义物模型功能时，可使用以下已支持的数据类型。

| 数据类型 | 描述                                                         | 示例                                            |
| :------- | :----------------------------------------------------------- | :---------------------------------------------- |
| BOOL     | 布尔类型，采用0（false）或1（true）来定义布尔值。            | true代表开，false代表关。                       |
| INT      | 32位整型。                                                   | 10                                              |
| FLOAT    | 单精度浮点型。                                               | 1.1                                             |
| DOUBLE   | 双精度浮点型。                                               | 1.23                                            |
| ENUM     | 枚举类型。定义枚举项的参数值和参数描述，参数值必须为整数。   | 整数0表示冷风，整数1表示热风，整数2表示自然风。 |
| TEXT     | 文本型。字符串，对应的数据长度不能超过10240字节。            | "Hello,world"                                   |
| DATE     | 时间戳。格式为String类型的UTC时间戳，单位：毫秒。            | "1635839462000"                                 |
| STRUCT   | 结构体类型。复杂类型的封装。定义一个JSON结构体，结构体内参数类型支持BOOL,INT,FLOAT,DOUBLE,ENUM,TEXT,DATE。不支持STRUCT嵌套。 | { "name":"Tom", "age":20 }                      |
| ARRAY    | 数组。需声明数组内的元素类型、数组元素个数。元素类型支持INT,FLOAT,DOUBLE,TEXT,STRUCT，需确保同一个数组元素类型相同。元素个数限制为1~100个。 | [1, 2, 3, 4, 5, 6]                              |

## **TSL文件说明**


```json
{
  "profile": {
    "tslVersion": "1.1.0",
    "productKey": "p114Ne",
    "version": "20220324140709694"
  },
  //服务
  "services": [
    {
      // 服务输出参数
      "outputData": [
        {
          "$ref": "#/properties/id/9"
        }
      ],
      // 服务输入参数
      "inputData": [
        {
          "$ref": "#/properties/id/7"
        }
      ],
      //标识符
      "code": "server",
      //功能名称
      "name": "服务",
      //服务调用方法 ASYNC-异步
      "subType": "ASYNC",
      //功能id
      "id": 11,
      //排序号
      "sort": 2,
      //服务功能类型 PROPERTY-属性 EVENT-事件 SERVICE-服务
      "type": "SERVICE",
      //描述
      "desc": ""
    }
  ],
  //属性
  "properties": [
    {
      "specs": [
        {
          "dataType": "BOOL",
          //布尔值 TRUE名称
          "name": "开",
          "value": "true"
        },
        {
          "dataType": "BOOL",
          //布尔值 FALSE名称
          "name": "关",
          "value": "false"
        }
      ],
      "code": "event_param",
      //数据类型
      "dataType": "BOOL",
      "name": "事件参数",
      //属性读写类型 RW-读写 R-只读 W-只写
      "subType": "RW",
      "id": 9,
      "type": "PROPERTY",
      "desc": ""
    },
    {
      "specs": {
        "specs": [
          {
            "specs": [
              {
                "dataType": "ENUM",
                //枚举属性描述
                "name": "枚举1",
                //枚举属性值
                "value": "1"
              },
              {
                "dataType": "ENUM",
                "name": "枚举2",
                "value": "2"
              }
            ],
            "code": "param1",
            "dataType": "ENUM",
            "name": "参数1",
            "id": 1
          },
          {
            "specs": {
              //单位
              "unit": "nF",
              //最小值
              "min": "10",
              //最大值
              "max": "20",
              //步长
              "step": "5"
            },
            "code": "param2",
            "dataType": "INT",
            "name": "参数2",
            "id": 2
          }
        ],
        "size": "10",
        "dataType": "STRUCT"
      },
      "code": "arr_cust",
      "dataType": "ARRAY",
      "name": "数组结构体",
      "subType": "W",
      "id": 7,
      "sort": 0,
      "type": "PROPERTY",
      "desc": ""
    },
    {
      "specs": {
        "specs": [
          {
            "specs": [
              {
                "dataType": "ENUM",
                "name": "枚举1",
                "value": "1"
              },
              {
                "dataType": "ENUM",
                "name": "枚举2",
                "value": "2"
              }
            ],
            "code": "param1",
            "dataType": "ENUM",
            "name": "参数1",
            "id": 1
          },
          {
            "specs": {
              "unit": "nF",
              "min": "10",
              "max": "20",
              "step": "5"
            },
            "code": "param2",
            "dataType": "INT",
            "name": "参数2",
            "id": 2
          }
        ],
        "size": "10",
        "dataType": "STRUCT"
      },
      "code": "arr_cust",
      "dataType": "ARRAY",
      "name": "数组结构体",
      "subType": "RW",
      "id": 7,
      //排序号
      "sort": 0,
      //功能类型 PROPERTY-属性 EVENT-事件 SERVICE-服务
      "type": "PROPERTY",
      "desc": ""
    }
  ],
  //事件
  "events": [
    {
      //事件输出参数
      "outputData": [
        {
          "$ref": "#/properties/id/9"
        }
      ],
      "code": "event",
      "name": "事件",
      //事件类型 INFO-信息 WARN-告警 ERROR-故障
      "subType": "INFO",
      "id": 10,
      "sort": 1,
      //功能类型 PROPERTY-属性 EVENT-事件 SERVICE-服务
      "type": "EVENT",
      "desc": ""
    }
  ]
}
```

## **TSL定义说明**

| 参数       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| id         | 功能定义Id                                                   |
| code       | 功能定义标识符，与id一一对应，用于应用侧与设备交互关键字段。每个物模型版本下属性、事件、服务唯一。 |
| name       | 功能定义名称，与标识符一一对应，便于功能定义的展示。         |
| type       | 功能定义的类型,固定值。<br /> ● 属性：PROPERTY<br /> ● 事件：EVENT<br /> ● 服务：SERVICE |
| subType    | 功能定义类型的子类型。<br /><br /> 当type=PROPERTY时，subType为读写类型。<br /> ● R:只读<br /> ● W:可写<br /> ● RW:可读可写<br /><br />当type=EVENT时，subType为事件类型。<br /> ● INFO:信息<br /> ● WARN:告警<br /> ● ERROR：故障<br /><br /> 当type=SERVICE时，subType为调用方式。<br /> ● ASYNC:异步调用<br />  |
| sort       | 排序号，用于功能定义的数据排序                               |
| desc       | 功能定义描述，便于更清晰的理解此功能定义的意义及作用。       |
| dataType   | 数据类型。<br />INT,FLOAT,DOUBLE,ENUM,TEXT,DATE,STRUCT,ARRAY,BOOL.[具体详细见物模型支持的数据类型](#物模型支持的数据类型) |
| specs  | 当功能定义为属性时，specs用于对当前type的结构约束。当dataType=INT/FLOAT/DOUBLE时，specs包含以下字段：step:步长min:最小值max:最大值unit:单位。可以为空。当dataType=ENUM时，specs包含以下字段：name:名称value:值当dataType=TEXT时，specs包含以下字段：length:长度 |
| inputData  | 输入参数。只有当type=SERVICE时，才会有此字段，inputData可以包含属性的引用或者新建的参数。 |
| outputData | 输出参数。当type=SERVICE或EVENT时，outputData可以包含属性的引用或者新建的参数。 |
