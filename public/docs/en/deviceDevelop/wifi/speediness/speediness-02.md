# Define Feature

In the process of product development, the first step to develop a TSL-format product is to define a TSL model. The features are divided into two type:  __Standard__  and __Self-defined__.


* Standard Feature , that is, Developer Center has defined the TSL model for the product category.
  <br/>
* Self-defined Feature, that is, you can define the feature according to the specific usage scenario of the current product, which is not related to the product category but only apply to the current product.

<font color=#999AAA >Note: Only after you select TSL format when creating a product can you define features. There is no need to define the feature of a Custom-format data.</font>


## __1. Add Self-defined Feature__


__Product Development__ >__"Quectel International Hotel"__ > __“Smart Aromatherapy Diffuser”__  and click __Define Feature__ to the  corresponding interface, and the click __Draft Mode__ > __Add Self-defined Feature__.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-04.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-04.png)</a>

Draw up TSL-format features according to the actual project requirements of the smart aromatherapy diffuser. The pre-additive TSL is shown in the following table.

| Feature Type |              Feature Name               | Data Format | Read/Write Type |                             Unit                             |
| :----------: | :-------------------------------------: | :---------: | :-------------: | :----------------------------------------------------------: |
|   Property   | The remaining content of  essential oil |    FLOAT    |    Read-Only    |                              ML                              |
|   Property   |     Frequency of regular reporting      |     INT     |   Read-Write    |                              Second                              |
|   Property   |              On/Off status              |    BOOL     |    Read-Only    |                  true: On；<br>false: Off；                  |
|    Event     |     Alert to lack of essential oil      |    BOOL     |       --        |        true: Alert； <br> false: Alert restoration；         |
|   Service    |            Set working mode             |    ENUM     |       --        | 1: Working Mode 1;<br> 2: Working Mode 2;<br>3: Working Mode 3;<br>... |

<br/>

## __2. Add Property__ 

__1) Add the properties of "The remaining content of  essential oil", "Frequency of regular reporting" and "On/Off status"__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-05.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-05.png)</a>

 __Feature Type__: Select "Property", which is generally the running status of a device, such as the remaining content of the essential oil.<br/>
 __Feature Name__: Name of the feature.<br/>
 __Identifier__: Unique ID to define your feature.<br/>
 __Data Type__: Select the corresponding type based on characteristics of different properties. There are 9 types of data: BOOL, INT, FLOAT, DOUBLE, ENUM, TEXT, DATE, STRUCT and ARRAY.<br/>
 __Range__: The range of an unknown value is from its maximum to maximum value.<br/>
 __Step Size__: Increment value distributed by the property.<br/>
 __Unit__: The name of a standard quantity for measuring things.<br/>
 __Read/Write Type__: There are three types: Read-Only (R), Write-Only (W) and Read-Write (RW). Select one of them based on different properties. For example, the remaining content of  essential oil is read by a sensor and cannot be written, so Read-Only (R) is selected.<br/>
 __Description__: Describe the feature (equivalent to note) to help yourself or others better understand the feature.<br/>
	


__2) Property definition on Developer Center is shown below__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-06.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-06.png)</a>

<br/>

## __3. Add Event__ 

__1) Add the event of "Alert to lack of essential oil"__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-07.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-07.png)</a>

__Feature Type__: Select "Event",  which is reported to Developer Center when the device is running.<br>
__Feature Name__: Name of the feature.<br>
__Identifier__: Unique ID to define your feature.<br>
__Data Type__: Message, Alert and Fault. Data type can be flexibly defined based on actual scenario.<br>
__Output Parameter__: The parameter is reported to Developer Center with the event, which is equivalent to the Return Value. Click  __+ Add a Parameter__ on the right to add an output parameter. (Optional)<br>
	

__2) Add an event output parameter (optional)__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-08.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-08.png)</a>

__a.__ When adding a TSL Event, click __+ Add a Parameter__ on the right of Output Parameter to add an output  parameter. <br>
__b.__ Click __Create a Property or Parameter__ to add a new property or parameter to the current event, for example, report the event "Alert to lack of essential oil" with the remaining content of  essential oil to Developer Center, so that Developer Center can get the details of the alert event.<br>

__3) Event definition on Developer Center is shown below__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-09.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-09.png)</a>


## __4. Add Service__ 

__1) Add the service of "Set working mode"__
	
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-10.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-10.png)</a>

__Feature Type__: Select "Service", which refers to a capability or method that a device can call externally.<br/>
__Feature Name__: Name of the feature.<br/>
__Identifier__: Unique ID to define your feature.<br/>
__Calling Method__: Currently, only the asynchronous calling is supported, and Developer Center does not need to wait for the terminal to return the result. When the service is called more than once, a first-in, first-out response rule is applied.<br/>
__Input Parameter__: The parameter is issued to the terminal with the service, which is equivalent to argument. Click __+ Add a Parameter__ on the right to add an input parameter. (Optional)<br/>
__Output Parameter__: The parameter is sent to Developer Center with the service, which is equivalent to return value. Click __+ Add a Parameter__ on the right to add an output parameter. (Optional)<br/>
		


__2) Add a service output parameter (optional)__

<font color=#999AAA >Note: Property indicates that the output parameter created is the feature type of a property that can be referenced by other events or services; Parameter indicates that the created output parameter is a parameter type property and cannot be referenced by other events or services。</font>

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-11.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-11.png)</a>


__Steps to create a property or parameter__

__a.__ Click __+ Add a Parameter__ to add an output parameter of the event.<br>
__b.__ Click __Create a Property or Parameter__ to add a new property or parameter to the current service, for example, the inputted argument will be issued to the device with the service.
<br/>

__3） Service definition on Developer Center is shown below__

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-12.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-12.png)</a>

## __5. Save Changes__ 

Having added TSL feature, click __Save Changes__ in the lower right corner to apply to the added TSL model to device development.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-13.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-13.png)</a>


## __6. Develop Device__

Having defined the feature, click __"Next: Develop Device"__ or click __Develop Device__ on progress bar to go to "Develop Device" page. Select corresponding __access solution__ and __Quectel module model to be used__ to get documents and resources.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/platform/platform-14.png">![img](/en/deviceDevelop/wifi/speediness/resource/platform/platform-14.png)</a>