# Example of TSL Data Interaction


## __Introduction__

This chapter introduces how to send and receive TSL data in QuecOpen solution. 

## __Related API__


|            Function             | Description                                   |
| :-----------------------------: | :-------------------------------------------- |
|  Ql_iotCmdBusPhymodelReport()   | Sends transparent transmission data to Developer Center.   |
| Ql_iotCmdBusPhymodelReport_ex() | Sends transparent transmission data to Developer Center.   |
|    Ql_iotCmdBusPhymodelAck()    | Replies to the querying of TSL data from Developer Center. |



<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-03.md) for details.</font>


## __TTLV Data API__

|         Function          |                   Description                    |
| :-----------------------: | :----------------------------------------------: |
|   Ql_iotTtlvCountGet()    |   Gets the number of nodes in the data table.    |
|    Ql_iotTtlvNodeGet()    |     Extracts data nodes from the data table.     |
|     Ql_iotTtlvFree()      |          Releases data table resources.          |
|  Ql_iotTtlvNodeGetType()  |               Gets data node type.               |
|  Ql_iotTtlvNodeGetBool()  |         Gets the node data in bool type.         |
|  Ql_iotTtlvNodeGetInt()   |       Gets the node data in integer type.        |
| Ql_iotTtlvNodeGetFloat()  |        Gets the node data in float type.         |
| Ql_iotTtlvNodeGetString() |        Gets the node data in string type.        |
|  Ql_iotTtlvNodeGetByte()  |         Gets the node data in byte type.         |
| Ql_iotTtlvNodeGetStruct() |        Gets the node data in struct type.        |
|   Ql_iotTtlvIdGetType()   | Gets the type of data for the specified ID node. |
|   Ql_iotTtlvIdGetBool()   |  Gets the specified ID node data in bool type.   |
|   Ql_iotTtlvIdGetInt()    | Gets the specified ID node data in integer type. |
|  Ql_iotTtlvIdGetFloat()   |  Gets the specified ID node data in float type.  |
|  Ql_iotTtlvIdGetString()  | Gets the specified ID node data in string type.  |
|   Ql_iotTtlvIdGetByte()   |  Gets the specified ID node data in byte type.   |
|  Ql_iotTtlvIdGetStruct()  | Gets the specified ID node data in struct type.  |
|   Ql_iotTtlvIdAddBool()   |         Adds the node data in bool type.         |
|   Ql_iotTtlvIdAddInt()    |       Adds the node data in integer type.        |
|  Ql_iotTtlvIdAddFloat()   |        Adds the node data in float type.         |
|   Ql_iotTtlvIdAddByte()   |         Adds the node data in byte type.         |
|  Ql_iotTtlvIdAddStruct()  |        Adds the node data in struct type.        |

<font color=#999AAA >Note: See [TTLV Data API](/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-04.md) for details.</font>
	

## __Procedure__

### __Operation on Developer Center__

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

#### **3. Create a Product**

The prerequisite for TSL-format data interaction is selecting __TSL__  as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-01.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-01.png)</a>

#### **4. Define TSL Feature**

Note: Because the product category must be selected when you create a product, the system has automatically created the TSL features for that category. You can modify the TSL features based on actual project requirements.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-02.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-02.png)</a>

Product TSL model is shown as follows:

|Feature ID | Feature Type  |Feature Name   |Data Format    |Data Definition  |Description  |
|:--------:|:-------------|:-------------|:-------------|:-------------|:-------------|
| 1 |Property | The remaining content of essential oil | FLOAT |Range: 0–300 |Report the remaining content of essential oil regularly
| 2 |Property | Frequency of regular reporting | INT |Range: 1–2678400 |Set and query the frequency of regular reporting of the remaining content of essential oil|
| 3 |Property | On/Off status | BOOL |Boolean values: <br>true - On；<br>false - Off； |Turn on/off the aromatherapy diffuser|
| 4 |Event | Alert to lack of essential oil | - |Event type: Alert <br>Output parameter ID: 1 |Report lack of essential oil to Developer Center|
| 5 |Service | Set working mode   | - |Calling method: asynchronous.<br>Input Parameter ID：6 |Set working mode of the aromatherapy diffuser|

## __Operation on Device__

### __TSL Data Interaction__

TSL is a data model established by Developer Center for physical entity device, which is used to describe product feature to facilitate data parsing. You can configure TSL data to make the device interact with Developer Center after the device successfully connects to Developer Center.

<font color=#999AAA >Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after  sending data successfully.</font>

#### __Example 1 (Send TSL data)__

The device can adopt certain strategies to detect and process the properties based on the requirements of business scenarios. For example, after reading the remaining content of essential oil from the sensor, the device reports the remaining content of essential oil, frequency of regular reporting and on/off status to Developer Center.

* Sample code

  ```c
    /*Report the remaining content of essential oil every 30 seconds*/ 
    void *ttlvHead = NULL;   	     
    Ql_iotTtlvIdAddFloat(&ttlvHead, 1, 288.12);  /*The remaining content of  essential oil. Unit: ML.*/    
    Ql_iotTtlvIdAddInt(&ttlvHead, 2, 30);        /*Frequency of regular reporting. Unit: s.*/        
    Ql_iotTtlvIdAddBool(&ttlvHead, 3, TRUE);     /*On/Off status.TRUE: On; FALSE: Off.*/ 	    
    Ql_iotCmdBusPhymodelReport(1, ttlvHead);     /*Send TSL data to Developer Center.*/
    Ql_iotTtlvFree(&ttlvHead);
  ```

  <font color=#999AAA >Note: Call Ql_iotTtlvFree() to release the resource after adding TSL model node and getting the information. Ql_iotTtlvFree()  releases a memory block pointed to by the pointer, thus avoiding problems such as memory leakage.</font>


#### __Example 2 (Reply to the querying of TSL data from Developer Center)__

__1. Developer Center bulk reads TSL real-time data__

In __Device Debug__ of __Device Details__ page, click __Read Data in Batches__ to bulk read TSL property data.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-03.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-03.png)</a>
__2. The module receives the querying of TSL data from Developer Center and prints callback event__

When the device receives querying of TSL model from Developer Center, it will call the event callback function  __Ql_iotEventCB__ and report the event. You can respond and process the event according to the actual condition.

* Sample code

  ```c
  void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
     switch (event)
     {  
     		/* Receive TSL data */
   	  case QIOT_ATEVENT_TYPE_RECV:
   		/* Receive the querying of TSL model */
  		if(10211 == errcode && value)
  		{
  		    quint16_t pkgId = *(quint16_t *)value;
  		    quint16_t *ids = (quint16_t *)((quint8_t*)value+sizeof(quint16_t));
  		    void *ttlvHead = NULL;
  		    printf("model read event,pkgid:%d\r\n",pkgId);
  		    quint32_t i;
  		    for(i=0;i<valLen;i++)
  		    {
  		        quint16_t modelId = ids[i];
  		        printf("modelId:%d\r\n",modelId);
  		        switch (modelId)
  		        {
  		        case 1:
  		            /* If the querying of the remaining content of  essential oil is received */
  		            Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, 218.53);
  		            break;
  		        case 2:
  		            /* If the querying of frequency of regular reporting is received */
  		            Ql_iotTtlvIdAddInt(&ttlvHead, modelId, 30);
  		            break;
  		        case 3:
  		            /* If the querying of on/off status is received*/
  		            Ql_iotTtlvIdAddBool(&ttlvHead, modelId, TRUE);
  		            break;
  		        default: break;
  		        }
  		    }
  		    Ql_iotCmdBusPhymodelAck(0, pkgId,ttlvHead);
  		    Ql_iotTtlvFree(&ttlvHead);	
  			break;	
  	  } 	     
        default: break;
      }
  }
  ```

  <font color=#999AAA >Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after  sending data successfully.</font>

#### __Example 3 (Report TSL Alert Event)__

This example simulates the event that the device reports the alert of lack of essential oils to Developer Center. The event contains output parameter: __The remaining content of  essential oil__. The output parameter __ID: 1,value: 30.60__ are included in the alarm event to form a structure and sent to Developer Center.

* Sample code

  ```c
  void *ttlvHead = NULL;
  void *ttlvArrayHead = NULL;
  Ql_iotTtlvIdAddFloat(&ttlvArrayHead, 1, 30.60);
  Ql_iotTtlvIdAddStruct(&ttlvHead, 4, ttlvArrayHead);
  Ql_iotCmdBusPhymodelReport(1, ttlvHead);     /*Report TSL data to Developer Center*/
  Ql_iotTtlvFree(&ttlvHead);
  ```

#### __Example 4 (Read TSL data issued by Developer Center)__

__1. Developer Center issues TSL data__

 Open __Device Debug__ page, click __Service Calls__, then select the service to be issued, and finally click __Send Command__ in the lower left corner.
<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-04.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-04.png)</a>
__2. The device receives the data__

When the device receives TSL data, the device will automatically enter the event callback function __Ql_iotEventCB__. You can respond and process the event according to the actual condition.

* Sample code of processing event callback function

  ```c
  void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
     switch (event)
     {  
     		/* Receive downlink event  */
   	  case QIOT_ATEVENT_TYPE_RECV:
   		/* Receive the data issued by Developer Center */
          if(10210 == errcode)
          {
              /* Parse TSL data */
              Ql_iotTtlvHandle(value);
          }	     
        default: break;
      }
  }
  ```

* Sample code of processing TSL model

  ```c
  void Ql_iotTtlvHandle(const void *ttlvHead)
  {
      quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
      quint32_t i;
      for(i=0;i<count;i++)
      {
          uint16_t id;
          QIot_dpDataType_e type;
          void *node = Ql_iotTtlvNodeGet(ttlvHead, i, &id, &type);
          if(node)
          {
              switch (id)
              {               
                  case 5:
                  {             
                      /*Traverse the process again if the type is struct*/ 
                      Ql_iotTtlvHandle(Ql_iotTtlvNodeGetStruct(node));
                      break;
                  }
                   case 6:
                  { 
                      qint64_t num;
                      Ql_iotTtlvNodeGetInt(node, &num);
                      switch (num)
                      {               
                          case 1:/*Mode 1*/ 
                          {                                         
                              /*Code*/ 
                              break;
                          }
                          case 2:/*Mode 2*/ 
                          { 
                              /*Code*/ 
                              break;
                          }
                          case 3:/*Mode 3*/ 
                          { 
                              /*Code*/  
                              break;
                          }
                          default:break;
                      }
                      break;
                  }
               default:break;
              }
          }
      }
  }
  ```

  

