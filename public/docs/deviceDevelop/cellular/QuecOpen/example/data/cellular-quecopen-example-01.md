# 物模型格式数据业务交互示例


## __场景描述__
本章节指导用户通过 QuecOpen 接入方案连接上开发者中心并进行物模型数据格式的业务交互。

## __涉及指令__


| 函数 | 说明  |
|:--------:| :-------------|
| Ql_iotCmdBusPhymodelReport() | 发送物模型数据至平台 |
| Ql_iotCmdBusPhymodelReport_ex() | 根据PkgID响应物模型数据至平台 |
| Ql_iotCmdBusPhymodelAck() | 应答物模型数据|



<font color=#999AAA >提示：详情请参考[数据交互相关 相关接口](/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-03.md)。</font>


## __TTLV 相关 API__

| 函数 | 说明  |
|:--------:| :-------------:|
| Ql_iotTtlvCountGet() | 获取数据表的节点数量 |
| Ql_iotTtlvNodeGet() | 从数据表中提取数据节点| 
| Ql_iotTtlvFree() | 释放数据表资源 |
| Ql_iotTtlvNodeGetType() | 获取节点数据的类型 |
| Ql_iotTtlvNodeGetBool() | 获取节点数据-Bool 类型 |
| Ql_iotTtlvNodeGetInt() | 获取节点数据-Int 类型 |
| Ql_iotTtlvNodeGetFloat() | 获取节点数据-浮点 类型 |
| Ql_iotTtlvNodeGetString() | 获取节点数据-String 类型 |
| Ql_iotTtlvNodeGetByte() | 获取节点数据-Byte类型 |
| Ql_iotTtlvNodeGetStruct() | 获取节点数据-Struct 类型 |
| Ql_iotTtlvIdGetType() | 获取指定ID节点数据的类型 |
| Ql_iotTtlvIdGetBool() | 获取指定 ID 节点数据-Bool 类型 |
| Ql_iotTtlvIdGetInt() | 获取指定 ID 节点数据-Int 类型 |
| Ql_iotTtlvIdGetFloat() | 获取指定 ID 节点数据-浮点 类型 |
| Ql_iotTtlvIdGetString()| 获取指定 ID 节点数据-String 类型 |
| Ql_iotTtlvIdGetByte() | 获取指定 ID 节点数据-Byte 类型 |
| Ql_iotTtlvIdGetStruct() | 获取指定 ID 节点数据-Struct 类型 |
| Ql_iotTtlvIdAddBool() | 添加节点数据-Bool 类型 |
| Ql_iotTtlvIdAddInt() | 添加节点数据-Int 类型 |
| Ql_iotTtlvIdAddFloat() |  添加节点数据-浮点 类型 |
| Ql_iotTtlvIdAddByte() | 添加节点数据-Byte 类型 |
| Ql_iotTtlvIdAddStruct() | 添加节点数据-Struct 类型 |

<font color=#999AAA >提示：详情TTLV数据相关API接口请参考[TTLV数据相关API](/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-04.md)</font>。
	
## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
#### __二、创建项目__
项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。
#### __三、创建产品__
物模型数据业务的交互需要在创建产品时选择 __物模型__ 协议。

<a data-fancybox title="img" href="/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-01.png">![img](/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-01.png)</a>


#### __四、物模型功能定义__
 提示：由于在创建产品时已选择了产品品类，系统已为您自动创建该品类的所有物模型功能。您可根据实际项目需求修改物模型功能。

<a data-fancybox title="img" href="/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-02.png">![img](/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-02.png)</a>


 产品物模型结构规划如下表所示。

| 功能ID | 功能类型    |功能名称   |数据类型    |数据定义  |功能描述  |
|:--------:|:-------------|:-------------|:-------------|:-------------|:-------------|
| 1 |属性 | 精油当前容量 | FLOAT |取值范围：0~300 |定时上报精油当前容量
| 2 |属性 | 定时上报频率 | INT |取值范围：1 ~ 2678400 |设置与查询精油当前容量定时上报频率|
| 3 |属性 | 开关状态 | BOOL |布尔值：<br>true - 开启；<br>false - 关闭； |控制香薰机开关|
| 4 |事件 | 精油不足告警 | - |事件类型：告警 <br>输出参数功能ID：1 |精油不足时主动上告给云端|
| 5 |服务 | 设置工作模式 | - |调用方法：异步<br>输入参数功能ID：6 |设置香薰机工作模式|

## __设备侧__
### __物模型数据交互__

物模型是开发者中心针对物理实体设备在云端建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。设备成功接入平台后，通过构建物模型数据来实现与开发者中心的数据交互。

<font color=#999AAA >提示：若QoS级别为1或以上，模块成功发送数据后将响应OK并上报+QIOTEVT: 4,10210；若QoS级别为0，模块成功发送数据后将响应OK且不上报事件。</font>

#### __示例一(主动发送物模型数据)__

设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端读取香薰机传感器精油剩余容量值等数据后，设备则将读取到的精油剩余容量值、定时上报频率、开关状态上传到开发者中心。

* 示例代码如下所示：
	```c
    /*每隔30秒上报一次精油当前容量*/ 
    void *ttlvHead = NULL;   	     
    Ql_iotTtlvIdAddFloat(&ttlvHead, 1, 288.12);  /*精油当前容量值，单位：ML*/    
    Ql_iotTtlvIdAddInt(&ttlvHead, 2, 30);        /*上传时间频率，单位：秒*/        
    Ql_iotTtlvIdAddBool(&ttlvHead, 3, TRUE);     /*香薰机喷洒开关状态，TRUE：已开启；FALSE：已关闭*/ 	    
    Ql_iotCmdBusPhymodelReport(1, ttlvHead);     /*发送物模型数据至平台*/
    Ql_iotTtlvFree(&ttlvHead);
	```
<font color=#999AAA >注意：在添加物模型节点且调用完后，开发者请调用 Ql_iotTtlvFree() 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</font>


#### __示例二(响应平台读取数据)__
__1、开发者中心批量读取物模型实时数据__

在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 按钮可一键批量读取物模型属性数值。

<a data-fancybox title="img" href="/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-03.png">![img](/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-03.png)</a>
__2、模组收到查询指令处理__

当模组接收到物模型请求数据后，则会自动进入 __Ql_iotEventCB__ 事件处理回调函数，您可根据相对应的事件进行数据响应处理。

* 事件回调处理示例代码如下所示：
	```c
	void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
	{
	   switch (event)
	   {  
	   		/* 接收数据操作 */
	 	  case QIOT_ATEVENT_TYPE_RECV:
	 		/* 收到物模型请求数据 */
			if(10211 == errcode && value)
			{
			    quint16_t PkgID = *(quint16_t *)value;
			    quint16_t *ids = (quint16_t *)((quint8_t*)value+sizeof(quint16_t));
			    void *ttlvHead = NULL;
			    printf("model read event,PkgID:%d\r\n",PkgID);
			    quint32_t i;
			    for(i=0;i<valLen;i++)
			    {
			        quint16_t modelId = ids[i];
			        printf("modelId:%d\r\n",modelId);
			        switch (modelId)
			        {
			        case 1:
			            /* 若已收到物模型精油剩余容量请求数据 */
			            Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, 218.53);
			            break;
			        case 2:
			            /* 若收到物模型上传频率请求数据 */
			            Ql_iotTtlvIdAddInt(&ttlvHead, modelId, 30);
			            break;
			        case 3:
			            /* 若已收到物模型开关状态请求数据 */
			            Ql_iotTtlvIdAddBool(&ttlvHead, modelId, TRUE);
			            break;
			        default: break;
			        }
			    }
			    Ql_iotCmdBusPhymodelAck(0, PkgID,ttlvHead);
			    Ql_iotTtlvFree(&ttlvHead);	
				break;	
		  } 	     
	      default: break;
	    }
	}
	```
<font color=#999AAA >提示：若QoS级别为1或以上，模块成功发送数据后将响应OK并上报+QIOTEVT: 4,10210；若QoS级别为0，模块成功发送数据后将响应OK，不上报事件。</font>

#### __示例三(主动上报物模型告警事件)__
模拟精油不足时主动上告给云端，该事件包含输出参数：__精油当前容量__，将输出参数 __ID：1,value：30.60__ 包含进告警事件内组成结构体一并发送到开发者中心。

* 示例代码如下所示：
	```c
	void *ttlvHead = NULL;
	void *ttlvArrayHead = NULL;
	Ql_iotTtlvIdAddFloat(&ttlvArrayHead, 1, 30.60);
	Ql_iotTtlvIdAddStruct(&ttlvHead, 4, ttlvArrayHead);
	Ql_iotCmdBusPhymodelReport(1, ttlvHead);     /*发送物模型数据至平台*/
	Ql_iotTtlvFree(&ttlvHead);
	```

#### __示例四(读取平台下发的物模型数据)__

__1、开发者中心下发物模型服务__

 在开发者中心 __设备调试__ 页面，第一步点击 __服务调用__，第二步选择要下发的物模型服务，第三步点击左下角的 __发送指令__ 即可下发物模型服务给终端。
<a data-fancybox title="img" href="/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-04.png">![img](/deviceDevelop/cellular/QuecOpen/resource/data/Physical_model/Example-04.png)</a>
__2、设备接收到数据__

当模组接收到物模型数据后，则会自动进入 __Ql_iotEventCB__ 事件处理回调函数，您可根据相对应的事件进行数据响应处理。

* 事件回调处理示例代码如下所示：
	```c
	void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
	{
	   switch (event)
	   {  
	   		/* 接收下行数据事件  */
	 	  case QIOT_ATEVENT_TYPE_RECV:
	 		/* 收到物模型下发数据 */
	        if(10210 == errcode)
	        {
	            /* 物模型数据解析 */
	            Ql_iotTtlvHandle(value);
	        }	     
	      default: break;
	    }
	}
	```

* 物模型处理函数示例代码如下所示：
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
	                    /*如果是结构体在遍历一次*/ 
	                    Ql_iotTtlvHandle(Ql_iotTtlvNodeGetStruct(node));
	                    break;
	                }
	                 case 6:
	                { 
	                    qint64_t num;
	                    Ql_iotTtlvNodeGetInt(node, &num);
	                    switch (num)
	                    {               
	                        case 1:/*模式一*/ 
	                        {                                         
	                            /*Code*/ 
	                            break;
	                        }
	                        case 2:/*模式二*/ 
	                        { 
	                            /*Code*/ 
	                            break;
	                        }
	                        case 3:/*模式三*/ 
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


 

