# Example of Transparent Transmission Data Interaction

 ## __Introduction__

Transparent transmission data can be used according to actual scenario. If you do not need Developer Center to parse the data but only transparently transmit data, you can call __Ql_iotCmdBusPassTransSend()__ and __Ql_iotCmdBusPassTransSend_ex()__ to make the device interact with Developer Center after the device successfully connected to Developer Center. Any type of data can be transparently transmitted. This chapter introduces how to send and receive transparent transmission data in QuecOpen solution. 



## __Related API__

|            Function            |                         Description                          |
| :----------------------------: | :----------------------------------------------------------: |
|  Ql_iotCmdBusPassTransSend()   |         Sends transparent transmission data to Developer Center.          |
| Ql_iotCmdBusPassTransSend_ex() | Sends transparent transmission data to Developer Center (only valid in SDK versions 2.10.0 and above). |

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-03.md) for details.</font>


## __Procedure__

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### **2. Create a Project** 

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

#### **3. Create a Product** 

The prerequisite for TSL-format data interaction is selecting __Custom__ as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecOpen/resource/data/SeriaNet/Example-01.png">![img](/en/deviceDevelop/wifi/QuecOpen/resource/data/SeriaNet/Example-01.png)</a>

### **Transparent Transmission Data Interaction**

In transparent transmission mode, if QoS = 1 or 2, the device will call the event callback function __Ql_iotEventCB()__ and report event  __+QIOTEVT: 4,10200__ after sending data successfully; If QoS = 0, the device will not call the event callback function __Ql_iotEventCB()__ and report no event after sending data successfully.

#### __Example 1 (Send transparent transmission data)__

The device can call __Ql_iotCmdBusPassTransSend()__ to send transparent transmission data. Send data as a string of 12 bytes "ABCabc123456" with QoS equal to 1.

Sample code:

```c
Ql_iotCmdBusPassTransSend(1,(unsigned char *)"ABCabc123456",12);
```

#### __Example 2 (Read transparent transmission data issued by Developer Center)__

__1. Developer Center issues transparent transmission data__

Open __Device Details__ page, click __Device Debug__ to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecOpen/resource/data/SeriaNet/Example-02.png">![img](/en/deviceDevelop/wifi/QuecOpen/resource/data/SeriaNet/Example-02.png)</a>

__2. The device receives the transparent transmission data issued by Developer Center__

After receiving the data, the device will automatically enter the event callback function __Ql_iotEventCB__. You can respond and process the event according to the actual condition.

```c
void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
   switch (event)
   {  
   		/* Receive downlink event  */
 	  case QIOT_ATEVENT_TYPE_RECV:
 		/* Receive the transparent transmission data issued by Developer Center */
        if(10200 == errcode)
        {
            printf("pass data:%.*s\r\n",valLen,(char *)value);
            /*Code*/
        }    
      default: break;
    }
}
```



  

