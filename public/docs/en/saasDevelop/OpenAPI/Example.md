# OpenAPI Example

This section gives an example of OpenAPI in SaaS SDK.



## **Preconditions**

● A SaaS application is created and you have gotten the AccessKey/AccessSecret.



## **Development Environment Preparation**

The development environment of the example is shown below:

● Operation system: Windows10<br />
● JDK version: [JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)<br />
● Integrated development environment: [IntelliJ IDEA Community](https://www.jetbrains.com/idea/)



## **SDK Version History**

| SDK Name             | Version       |
| :------------------- | :------------ |
| quecloud-sdk-dev-mgr | 1.1.8.RELEASE |
| quecloud-sdk-dev-msg | 1.1.7.RELEASE |



## **SDK Feature List**

### **quecloud-sdk-dev-mgr:**

| Method                        | Description                                        |
| :---------------------------- |:---------------------------------------------------|
| getProjectList                | Gets project list.                                 |
| getProjectDetail              | Gets project details.                              |
| getProductItems               | Gets product category.                             |
| getProductDetail              | Gets product details.                              |
| getProductList                | Gets product list.                                 |
| getDeviceList                 | Gets device list.                                  |
| getDeviceDetail               | Gets device details.                               |
| getDeviceDataHistory          | Gets history uplink and downlink data of a device. |
| getDeviceEventData            | Gets event data of a device.                       |
| getDeviceLocationLatest       | Gets positioning data of a device.                 |
| getTslJson                    | Gets TSL data.                                     |
| generateSn                    | Gets SN.                                           |
| createSnBindDevice            | Binds SN with device.                              |
| delSnBindDevice               | Unbinds SN and device.                             |
| createQuece                   | Creates a message queue.                           |
| getQueceDetail                | Gets queue details.                                |
| createSubscribe               | Creates a common subscription.                     |
| createEnterpriseUserSubscribe | Creates an enterprise subscription.                |
|createSaasUserSubscribe           | Create a SaaS application user subscription.                     |
| createEndUserSubscribe        | Creates an terminal user subscription.             |
| getSubscribeDetail            | Gets subscription details.                         |
| startSubscribe                | Starts subscription.                               |
| stopSubscribe                 | Stops subscription.                                |

### **quecloud-sdk-dev-msg:**

| Method              | Description                     |
| :------------------ | :------------------------------ |
| sendDeviceData      | Sends downlink data.            |
| batchSendDeviceData | Sends downlink data in batches. |
| start               | Subscribes.                     |



## **Example**

1. ###### The central repository cites jar package.

```java
a) Product and device management

<dependency>
  <groupId>com.quectel.aiot</groupId>
  <artifactId>quecloud-sdk-dev-mgr</artifactId>
  <version>1.1.8.RELEASE</version>
</dependency>

b) Device uplink and downlink data management

<dependency>
  <groupId>com.quectel.aiot</groupId>
  <artifactId>quecloud-sdk-dev-msg</artifactId>
  <version>1.1.7.RELEASE</version>
</dependency>
```

2. ###### Initialize SDK

a) Create a subject InitClientProfile to store data, such as accessKey, accessSecret, endpoint (a link, the domestic production environment address is  iot-api.quectelcn.com).

b) Create a subject Client.  Product and device management initializes MgrClient subject and device uplink and downlink data management initializes MsgClient subject.

3. ###### Calling steps

SaaS SDK encapsulates two classes for each API, that are the request parameter class (Request) and the request response class (Response).

a) Complete SDK initialization and obtain subjects of MgrClient Client/MsgClient Client.

b) Create a parameter object corresponding to the API request method.

c) Set request parameter values required by API for the parameter object using set method .

d) Get response subject by directly calling the method of the subject with the obtained Client subject. Each response subject contains success (success flag), msg (returned message), errorMsg (error message. If success flag is false, error message is returned), body (body is an object which carries return value of each API)

e) Handle exceptions with catch() method.


<p>For API list and the corresponding Request and Response subjects, see <a target="_blank" :href="toUrlnew('/swagger-ui.html')" class="external-link">
<font v-if="isEu">https://iot-api.quecteleu.com/swagger-ui.html</font>
<font v-else>https://iot-api.quectelcn.com/swagger-ui.html</font>
</a></p>

1. ###### Write code (taking SaaS application sending data as an example)

```java
public static void main(String[] args) {
        try{
            //accessKey and accessSecret are generated on Developer Center.
            InitClientProfile initClientProfile = new InitClientProfile(
                    "${accessKey}",
                    "${accessSecret}",
                    "${endpoint}");
            //Get MgrClient subject. It is recommended to use singleton pattern. This subject contains SDK methods of sending data to device.
            MsgClient msgClient = new MsgClient(initClientProfile);
 
            // PASSTHROUGH: Transparent transmission PROPERTY: Property SERVICE: Service
            String type="PASSTHROUGH|PROPERTY|SERVICE";
            // GET: Report DOWN: Issue
            String operate="GET|DOWN";
 
            //Send TSL property data to a single device from SaaS application
            /**
             * Send donwlink data to device. data is the content of downlink data to be sent. operate=GET, data format is "[“key1","key2",…]"(key is TSL ID). operate=DOWN, data format is "[{key1:value1},{key2:value2}]"(key is TSL ID).
             * Example:
             * Property bool/int/float/double/enum/date/text
             * "[{\"key\":\"value\"}]"
             * Property array
             * "[{\"key\":[{\"id\":\"value1\"},{\"id\":\"value2\"}]}]"（id为0）
             * Property struct
             * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"}]}]"
             * Property array contains struct
             * "[{\"key\":[{\"id\":[{\"key1\":\"value1\"}]},{\"id\":[{\"key2\":\"value2\"}]}]}]"（id为0）
             * Service calls bool/int/float/double/enum/date/text
             * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]"
             * Service calls array
             * "[{\"key\":[{\"key1\":[{\"id\":\"value1\"},{\"id\":\"value1\"}]}]}]"（id为0）
             * Service calls struct
             * "[{\"key\":[{\"key1\":[{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]}]"
             * Service calls array and array contains a struct
             * "[{\"key\":[{\"key1\":[{\"id\":[{\"key2\":\"value2\"}]},{\"id\":[{\"key3\":\"value3\"}]}]}]}]"(id is fixed to 0)
             */
 
            type = "PROPERTY";
            operate = "DOWN";
            DeviceSendDataRequest deviceSendTslDataRequest = new DeviceSendDataRequest("${productKey}","${deviceKey}","${data}",type,operate);
            DeviceSendDataResponse tslResult = msgClient.sendDeviceData(deviceSendTslDataRequest);
            log.info("Return value after single device sends TSL data:{}", JSONObject.toJSONString(tslResult));
        }catch(Exception e){
            log.info("Error occurred when single device sends TSL property data",e);
        }
    }

```

For demo code, see the following github address:

Product and device management (quecloud-sdk-dev-mgr)

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-mgr-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-mgr-demonstration.git)

Device uplink and downlink data (quecloud-sdk-dev-msg)

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git)



## **Error Code**

See [Error Code Summary](/en/saasDevelop/errorCode.md)


  