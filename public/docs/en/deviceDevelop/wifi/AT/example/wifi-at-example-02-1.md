# Example of TSL Data Interaction

## **Introduction**

This chapter introduces how to send and receive TSL data by AT command. 

## **Related AT Commands**

|   AT Command   |          Description          |
| :------------: | :---------------------------: |
|   AT+QIOTCFG   | Configure optional parameters |
| AT+QIOTMODELTD |  Send TSL model data to Developer Center   |
| AT+QIOTMODELRD |  Read TSL data issued by Developer Center  |

<font color=#999AAA >Note: See [Data Interaction Command](/en/deviceDevelop/wifi/AT/API/wifi-at-04.md) for details.</font>


​	

## **Procedure**

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

#### **3. Create a Product**

The prerequisite for TSL-format data interaction is selecting __TSL__  as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/AT/resource/02-1-1.png">![img](/en/deviceDevelop/wifi/AT/resource/02-1-1.png)</a>


#### **4. Define TSL Feature**

Note: Because the product category must be selected when you create a product, the system has automatically created the TSL features for that category. You can modify the TSL features based on actual project requirements.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/AT/resource/02-1-2.png">![img](/en/deviceDevelop/wifi/AT/resource/02-1-2.png)</a>



Product TSL model is shown as follows:

|Feature ID | Feature Type  |Feature Name   |Data Format    |Data Definition  |Description  |
|:--------:|:-------------|:-------------|:-------------|:-------------|:-------------|
| 1 |Property | The remaining content of essential oil | FLOAT |Range: 0–300 |Report the remaining content of essential oil regularly
| 2 |Property | Frequency of regular reporting | INT |Range: 1–2678400 |Set and query the frequency of regular reporting of the remaining content of essential oil|
| 3 |Property | On/Off status | BOOL |Boolean values: <br>true - On；<br>false - Off； |Turn on/off the aromatherapy diffuser|
| 4 |Event | Alert to lack of essential oil | - |Event type: Alert <br>Output parameter ID: 1 |Report lack of essential oil to Developer Center|
| 5 |Service | Set working mode   | - |Calling method: asynchronous.<br>Input Parameter ID：6 |Set working mode of the aromatherapy diffuser|




### **Operation on Device**

#### **TSL Data Interaction**

TSL is a data model established by Developer Center for physical entity device, which is used to describe product feature to facilitate data parsing. You can execute __AT+QIOTMODELTD__ and __AT+QIOTMODELRD__  to make the device interact with Developer Center after the device successfully connects to Developer Center.


#### **Example 1 (Send TSL data in TTLV format)**

TTLV data is parsed in actual code engineering by TTLV libraries or scripts provided by QuecCloud. To get the script, contact QuecCloud service software AE.

__a. Set data format to TTLV__ 

MCU can configure TSL data format by __AT+QIOTCFG="tsl"[,\<tsl_mode>]__ . If the optional parameter is not set, the data format defaults to  __`0`__: TTLV.

```c
[TX]AT+QIOTCFG="tsl",0

[RX]AT+QIOTCFG="tsl",0

OK
```

__b. Define TSL data type in MCU Demo__

```c
typedef struct
{
	/*Simulated data type, which is written according to actual project requirments in development.*/
	qbool bool_1;			
	qbool bool_2;			
	quint32_t num_1;		
	float num_2;			
 	quint8_t byte_1[9+1];	
}ql_modelInfo_t;
static ql_modelInfo_t ql_modelInfo;

quos_modelList_t ql_modelList[] =
{
    /* TSL ID       TSL Type   			Data Pointer                Data Length */
	{	1       ,QIOT_DPDATA_TYPE_BOOL    ,&ql_modelInfo.bool_1      ,sizeof(ql_modelInfo.bool_1)},	
	{	2       ,QIOT_DPDATA_TYPE_BOOL    ,&ql_modelInfo.bool_2      ,sizeof(ql_modelInfo.bool_2)},		
    {	3   	,QIOT_DPDATA_TYPE_NUM     ,&ql_modelInfo.num_1  	 ,sizeof(ql_modelInfo.num_1)},
    {	4       ,QIOT_DPDATA_TYPE_NUM     ,&ql_modelInfo.num_2       ,sizeof(ql_modelInfo.num_2)},
    {	5       ,QIOT_DPDATA_TYPE_BYTE    ,&ql_modelInfo.byte_1      ,sizeof(ql_modelInfo.byte_1)},
		
};
```

__c. Set and send TSL data__

```c	
quint16_t modelIds[] = {
	1,2,3,4,5,																
};
	/*Set TSL data*/
	Quos_modelSet_bool(1,TRUE);
	Quos_modelSet_bool(2,TRUE);
	Quos_modelSet_num(3,30);
	Quos_modelSet_num(4,200.56);
	Quos_modelSet_structString(5,0,(quint8_t *)"ABCabc123");

	/*Send TSL data*/
	Quos_modelSend(0,modelIds,sizeof(modelIds)/sizeof(modelIds[0]));

```


#### **Example 2 (Send TSL data in JSON format)**

__a. Set data format to JSON__

MCU can configure TSL data format by __AT+QIOTCFG="tsl"[,\<tsl_mode>]__ . If the optional parameter is not set, the data format defaults to  __`0`__: TTLV.

```c
[TX]AT+QIOTCFG="tsl",1

[RX]AT+QIOTCFG="tsl",1

OK
```

__b. Send TSL data in JSON format__

Send 28-byte TSL data __{"1":268.51,"2":30,"3":true}__. If QoS = 1, execute __AT+QIOTMODELTD=1,28__. After __>__ is returned, MCU sends TSL data.

```c
[TX]AT+QIOTMODELTD=1,28
[RX]>
[TX]{"1":268.51,"2":30,"3":true}
[RX]OK

+QIOTEVT: 4,10210
```

<font color=#999AAA >Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after  sending data successfully.</font>

#### **Example 3 (Reply the querying of TSL data from Developer Center)**

__a. Developer Center bulk reads TSL real-time data__

In __Device Debug__ of __Device Details__ page, click __Read Data in Batches__ to bulk read TSL property data.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/AT/resource/02-1-4.png">![img](/en/deviceDevelop/wifi/AT/resource/02-1-4.png)</a>


__b. The module receives Read Command and prints callback event to MCU__

* Parse the callback event: __+QIOTEVT: 5,10211,7,1,2,3__

  __5__: Receive the downlink business event.

  __10211__: Receive the event code of Developer Center reading TSL property.

  __7__: Package ID (pkgid), which is only valid when the module receives and replies to TSL data.

  __1,2,3__: ID numbers of TSL property to be read are 1, 2 and 3 respectively.

__c. MCU determines the returned pkgID and the real-time data of TSL ID according to the callback event__

```c
[TX]AT+QIOTMODELTD=1,28,7
[RX]>
[TX]{"1":268.51,"2":30,"3":true}
[RX]OK

+QIOTEVT: 4,10210
```

<font color=#999AAA >Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after  sending data successfully.</font>

#### **Example 4 (Report TSL Alert Event)**

This example simulates the event that the device report the alert of lack of essential oils to Developer Center. The event contains output parameter: __The remaining content of  essential oil__ and sends the output parameter __{"1":32.89}__ with the alert event ID to Developer Center, totally 17 bytes __{"4":{"1":32.89}}__. If QoS = 2, execute __AT+QIOTMODELTD=2,17__. After __>__ is returned, MCU sends TSL data.

```c
[TX]AT+QIOTMODELTD=2,17
[RX]>
[TX]{"4":{"1":32.89}}
[RX]OK

+QIOTEVT: 4,10210
```

<font color=#999AAA >Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after  sending data successfully.</font>

#### **Example 5 (Read TSL data issued by Developer Center in unbuffered mode)**

The mode defaults to __`0`__ (Disable buffer mode).
__a. Developer Center issues TSL service__

Open __Device Debug__ page, click __Service Calls__, then select the service to be issued, and finally click __Send Command__ in the lower left corner.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/AT/resource/02-1-5.png">![img](/en/deviceDevelop/wifi/AT/resource/02-1-5.png)</a>



__b. The module receives the issued command and prints callback event and data to MCU__

When the device receives TSL data, the device will print event __+QIOTEVT: 5,10210,13__ and the issued TSL service data __{"5":{"6":1}}__ to MCU.

```c
[RX]+QIOTEVT: 5,10210,13
{"5":{"6":1}}
```

#### **Example 6 (Read TSL data issued by Developer Center in buffer mode)**

__a. Enable buffer mode for downlink data__

MCU can configure the buffer mode for downlink data by __AT+QIOTCFG="buffer"[,<buffer_mode>]__.

```c
[TX]AT+QIOTCFG="buffer",1

[RX]AT+QIOTCFG="buffer",1

OK
```

__b. Developer Center issues TSL service__

Open __Device Debug__ page, click __Service Calls__, then select the service to be issued, and finally click __Send Command__ in the lower left corner.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/AT/resource/02-1-6.png">![img](/en/deviceDevelop/wifi/AT/resource/02-1-6.png)</a>


__c. The module receives the issued command and prints callback event to MCU__

* Parse the callback event：__+QIOTEVT: 5,10210__

  __5__ : Event type indicating that the downlink data is received.

  __10210__: Receive the event code of Developer Center reading TSL service.

__d. MCU queries the service according to callback event__

```c
[TX]AT+QIOTMODELRD=512

[RX]AT+QIOTMODELRD=512

+QIOTMODELRD: 13,0,0
{"5":{"6":1}}
OK
```


 