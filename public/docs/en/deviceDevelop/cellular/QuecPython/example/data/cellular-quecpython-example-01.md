# Example of TSL Data Interaction


## __Introduction__

This chapter introduces how to send and receive TSL data in QuecPython solution. 

## __Related API__


| Function                    | Description                                   |
| :-------------------------- | :-------------------------------------------- |
| quecIot.phymodelReport()    | Sends transparent transmission data to Developer Center.   |
| quecIot.phymodelReport_ex() | Sends transparent transmission data to Developer Center.   |
| quecIot.phymodelAck()       | Replies to the querying of TSL data from Developer Center. |

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-03.md) for details.</font>



## __Procedure__

### __Operation on Developer Center__

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

#### **3. Create a Product**

The prerequisite for TSL-format data interaction is selecting __TSL__  as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-01.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-01.png)</a>

#### **4. Define TSL Feature**

Note: Because the product category must be selected when you create a product, the system has automatically created the TSL features for that category. You can modify the TSL features based on actual project requirements.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-02.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-02.png)</a>

Product TSL model is shown as follows:

|Feature ID | Feature Type  |Feature Name   |Data Format    |Data Definition  |Description  |
|:--------:|:-------------|:-------------|:-------------|:-------------|:-------------|
| 1 |Property | The remaining content of essential oil | FLOAT |Range: 0–300 |Report the remaining content of essential oil regularly
| 2 |Property | Frequency of regular reporting | INT |Range: 1–2678400 |Set and query the frequency of regular reporting of the remaining content of essential oil|
| 3 |Property | On/Off status | BOOL |Boolean values: <br>true - On<br>false - Off |Turn on/off the aromatherapy diffuser|
| 4 |Event | Alert to lack of essential oil | - |Event type: Alert <br>Output parameter ID: 1 |Report lack of essential oil to Developer Center|
| 5 |Service | Set working mode   | - |Calling method: asynchronous.<br>Input Parameter ID: 6 |Set working mode of the aromatherapy diffuser|

## __Operation on Device__

### __TSL Data Interaction__

TSL is a data model established by Developer Center for physical entity device, which is used to describe product feature to facilitate data parsing. You can configure TSL data to make the device interact with Developer Center after the device successfully connects to Developer Center.

#### __Example 1 (The device sends TSL data)__

The device can adopt certain strategies to detect and process the properties based on the requirements of business scenarios. For example, after reading the remaining content of essential oil from the sensor, the device reports the remaining content of essential oil, frequency of regular reporting and on/off status to Developer Center.

* Sample code

  ```python
  # float type
  quecIot.phymodelReport(100, {1: 218.53})
  # integer type
  quecIot.phymodelReport(100, {2: 30})
  # bool type
  quecIot.phymodelReport(100, {3: True})
  ```


#### __Example 2 (The device replies to the querying of TSL data from Developer Center.)__

__1. Developer Center bulk reads TSL real-time data__

In __Device Debug__ of __Device Details__ page, click __Read Data in Batches__ to bulk read TSL property data.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-03.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-03.png)</a>

__2. The module receives data from Developer Center and enters callback event__

When the device receives querying of TSL model from Developer Center, the registered event callback function returns the data in list type. The first element is pkgId (request package ID), the second element is id list (requested TLS feature ID list).

* Sample code

  ```python
  5.10211,[8, [2, 3]]
  ```

__3. The module replies to the querying of TSL data from Developer Center__

After the device connected the Developer Center, you can replies the queried TSL data through __quecIot.phymodelReport()__. TSL data is in dict type, key indicates feature ID generated when the TSL model data is created; value indicates the data corresponding to the feature ID.

* Sample code

  ```py
    @staticmethod
    def eventCB(data):
        if 5 == data[0] and 10211 == data[1]:
  		quecIot.phymodelAck(1, 1, {1: 218.53,2: 30,3: True})
  ```

  <font color=#999AAA >Note: True is returned after the device sent data successfully. If the mode is set to 1 or above, the event callback function will be called to pass 4,10210. If the the mode is set to 0, there is no event notification.</font>

#### __Example 3 (The device reports TSL alert event)__

This example simulates the event that the device reports the alert of lack of essential oils to Developer Center. The event contains output parameter: __The remaining content of  essential oil__. The output parameter __ID: 1,value: 30.60__ are included in the alarm event to form a structure and sent to Developer Center.

* Sample code

  ```python
  quecIot.phymodelReport(1, {4:{1: 30.60}})
  ```

<font color=#999AAA >Note: True is returned after the device sent data successfully. If the mode is set to 1 or above, the event callback function will be called to pass 4,10210. If the mode is set to 0, there is no event notification.</font>

#### __Example 4 (The device reads TSL data issued by Developer Center)__

__1. Developer Center issues TSL data__

 Open __Device Debug__ page, click __Service Calls__, then select the service to be issued, and finally click __Send Command__ in the lower left corner.
<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-04.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/data/Physical_model/Example-04.png)</a>

__2. The device receives the data and enters callback__

When the device receives querying of TSL model from Developer Center, the registered event callback function returns the data in list type. The first element is pkgId (request package ID), the second element is id list (requested TLS feature ID list).

* Sample code

  ```python
  5.10210,[5, 2]
  ```

**3. The device receives service data**

The TSL server data issued by Developer Center will be reported to application layer through event callback function when the device receives the data. Developers only need to determine and extract the data based on the event ID.

* Sample code

  ```python
    @staticmethod
    def eventCB(data):
        print("event:", data)
        event = data[0]
        errcode = data[1]
        if len(data) > 2:
            data = data[2]
        if event == 5:  # Received data event. Developers can implements downlink business logic based on this event.
           if errcode == 10210:   # Received donwlink data
               print('Receiving data operation')
               model = data
               model_keys = list(model.keys())
               for cmdId in model_keys:
                   value = model.get(cmdId)
                   if 5 == cmdId:    #Service command ID                     
                        if  1 == value[6]:   #Model 1
                           #code
                           print("Model 1") 
                        elif 2 == value[6]:   #Model 2
                           #code
                           print("Model 2") 
                        elif 3 == value[6]:   #Model 3
                           #code
                           print("Model 3") 
                   else :
                       pass                
  ```

  

