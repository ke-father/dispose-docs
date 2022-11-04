# TSL Overview

## **What is a TSL Model?**

A TSL (Thing Specification Language) model digitizes a physical entity (such as a sensor, vehicle-mounted device, building or factory) in the cloud. It can also be considered as a set of device feature definitions. It is designed for complex device modeling in real scenarios. The devices under different products can be defined with different features without affecting each other. 

You can copy and extend the definition of TSL model by importing and exporting the TSL files.

## **Feature Type**

You can define the TSL features of a product from the dimensions of properties, services and events,  which respectively describe what the entity is, what the entity can do and what information the entity can provide.

| **Type** | **Description**                                                         |
| :--- | :----------------------------------------------------------- |
| Property | Defines the capabilities of devices that can be read and set. Properties are used to describe the running status of a device, such as the temperature, humidity, power, voltage and coordinate. Properties support the GET and SET request methods. Applications can send requests to retrieve and set properties.|
| Event | Defines the events that devices actively report to Developer Center when the devices are running. Events are classified into messages, alerts and faults. The events can be customized for application systems based on the scenarios. You can subscribe to events. |
| Service| Defines the capabilities or methods of devices that can be called by applications. You can set the input and output parameters. Services can be called by using a command to implement complex business logic. |

## **Supported Data Types**

When you define TSL features for a product on Developer Center, you can use these data types.

| **Data Type** | **Description**                                                         | **Example**                                          |
| :------- | :----------------------------------------------------------- | :---------------------------------------------- |
| BOOL     | Boolean. Boolean values include 0 (false) or 1 (true).             | true: on; false: off                       |
| INT      | 32-bit integer.                                                   | 10                                              |
| FLOAT    | Single-precision floating-point.                                               | 1.1                                             |
| DOUBLE   | Double-precision floating point.                                               | 1.23                                            |
| ENUM     | Enumeration. When you define a value and description for an enumeration member, make sure that the value is an integer.   | The integer 0 indicates cold wind, the integer 1 indicates hot air, and the integer 2 indicates natural wind. |
| TEXT     | Text. String. The data cannot exceed 10,240 bytes in length.           | "Hello,world"                                   |
| DATE     | Timestamp. A UTC timestamp in string format. Unit: milliseconds.            | "1635839462000"                                 |
| STRUCT   | Structure. Complex encapsulation. When you define a JSON structure, parameters in the structure support BOOL, INT, FLOAT, DOUBLE, ENUM, TEXT and DATE data types. Nesting of structures is not supported. | { "name":"Tom", "age":20 }                      |
| ARRAY    | Array. You must specify the element type and number of elements in an array. Elements support INT,FLOAT,DOUBLE,TEXT and STRUCT data types. Make sure that the elements in an array are of the same type. The number of elements must be 1 to 100. | [1, 2, 3, 4, 5, 6]                              |

## **TSL File**

```json
{
  "profile": {
    "tslVersion": "1.1.0",
    "productKey": "p114Ne",
    "version": "20220324140709694"
  },
  //Service
  "services": [
    {
      // The ouput parameter of the service
      "outputData": [
        {
          "$ref": "#/properties/id/9"
        }
      ],
      // The input parameter of the service
      "inputData": [
        {
          "$ref": "#/properties/id/7"
        }
      ],
      //Identifier
      "code": "server",
      //The name of the feature
      "name": "service",
      //The call type of the service. ASYNC-asynchronous call
      "subType": "ASYNC",
      //Feature ID
      "id": 11,
      //Number
      "sort": 2,
      //Feature type PROPERTY EVENT SERVICE
      "type": "SERVICE",
      //Description
      "desc": ""
    }
  ],
  //Property
  "properties": [
    {
      "specs": [
        {
          "dataType": "BOOL",
          //BOOL TRUE
          "name": "on",
          "value": "true"
        },
        {
          "dataType": "BOOL",
          //BOOL FALSE
          "name": "off",
          "value": "false"
        }
      ],
      "code": "event_param",
      //Data type
      "dataType": "BOOL",
      "name": "event parameter",
      //Read/Write type RW-read and write R-read only W-write only
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
                //Description of enumerated property 
                "name": "enumeration1",
                //Property value
                "value": "1"
              },
              {
                "dataType": "ENUM",
                "name": "enumeration2",
                "value": "2"
              }
            ],
            "code": "param1",
            "dataType": "ENUM",
            "name": "parameter1",
            "id": 1
          },
          {
            "specs": {
              //Unit
              "unit": "nF",
              //Minimum value
              "min": "10",
              //Maximum value
              "max": "20",
              //Step length
              "step": "5"
            },
            "code": "param2",
            "dataType": "INT",
            "name": "parameter2",
            "id": 2
          }
        ],
        "size": "10",
        "dataType": "STRUCT"
      },
      "code": "arr_cust",
      "dataType": "ARRAY",
      "name": "array structure",
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
                "name": "enumeration1",
                "value": "1"
              },
              {
                "dataType": "ENUM",
                "name": "enumeration2",
                "value": "2"
              }
            ],
            "code": "param1",
            "dataType": "ENUM",
            "name": "parameter1",
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
            "name": "parameter2",
            "id": 2
          }
        ],
        "size": "10",
        "dataType": "STRUCT"
      },
      "code": "arr_cust",
      "dataType": "ARRAY",
      "name": "array structure",
      "subType": "RW",
      "id": 7,
      //Number
      "sort": 0,
      //Feature type PROPERTY EVENT SERVICE
      "type": "PROPERTY",
      "desc": ""
    }
  ],
  //Event
  "events": [
    {
      //The output parameter of the event
      "outputData": [
        {
          "$ref": "#/properties/id/9"
        }
      ],
      "code": "event",
      "name": "event",
      //Event type INFO-message WARN-alert ERROR-fault
      "subType": "INFO",
      "id": 10,
      "sort": 1,
      //Feature type PROPERTY EVENT SERVICE
      "type": "EVENT",
      "desc": ""
    }
  ]
}
```

## **TSL Definition**

| **Parameter**       | **Description**                                                        |
| :--------- | :----------------------------------------------------------- |                                                    
| id         | Feature ID                                                 |
| code       | The identifier of the feature, which corresponds to the feature ID. It is used for the application to exchange the key fields with the device. The identifiers of properties, events, and services in each TSL model are unique. |
| name       | The name of the feature, which corresponds to the feature ID.  It is used for the presentation of features.         |
| type       | Feature type with fixed value.<br /> ● PROPERTY<br /> ● EVENT<br /> ● SERVICE |
| subType    | Subtype of the feature type.<br /><br /> When type=PROPERTY, subType is Read/Write type.<br /> ● R: read only<br /> ● W: write only<br /> ● RW: read and write<br /><br />When type=EVENT, subType is event type.<br /> ●  INFO: message<br /> ● WARN: alert<br /> ● ERROR: fault<br /><br /> When type=SERVICE, subType is call type.<br /> ● ASYNC: asynchronous call<br />  |
| sort       | The number of feature. It is used to sort the features.                         |
| desc       | Feature description, which helps users to understand the meaning and function of the feature clearly.     |
| dataType   | Data type.<br />INT, FLOAT, DOUBLE, ENUM, TEXT, DATE, STRUCT, ARRAY, BOOL. See [Supported Data Types](#supported-data-types).|
| specs  | It is used to limit the structure of type when a feature is defined as a property. When dataType=INT/FLOAT/DOUBLE, specs contains the following fields: step (step length),  min (minimum value), max (maximum value)  and unit. Its value can be empty. When dataType=ENUM, specs contains the following fields: name and value. When dataType=TEXT, specs contains the following fields: length of TSL data.|
| inputData  | Input parameter. This field is available only when type=SERVICE. inputData can contain references to properties or newly created parameters. |
| outputData | Output parameter. When type=SERVICE or EVENT, outputData can contain references to properties or newly created parameters. |
