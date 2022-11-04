# What is Developer Center

## **What is Developer Center**

Developer Center is an IoT platform that enables quick connection between devices and the enterprise system and secure data communication to help users connect massive devices to Developer Center. The end-to-end solution of "end + connectivity + platform + application" is provided to facilitate device management. The platform supports feature definition, message subscription, OTA upgrade and remote debugging, monitoring, operation and maintenance and other services, to help enterprises to reduce costs, increase efficiency, improve quality, quickly build front-end applications, and easily manage devices.

<ALink imgurl="/en/productIntroduce/image10001.png" imgenurl="/en/productIntroduce/image10001_en.png" />

## **Features**

### **Device Access**

<span v-if="isEu">

Developer Center supports different connection solutions for the cellular (2G/3G/4G/5G/Cat1), Wi-Fi, Bluetooth and other network devices to meet the requirement of connecting and managing different devices., It also supports multi-protocol access based on MQTT to ensure a quick connection between Developer Center and massive devices.

</span>
<span  v-else>

Developer Center supports different connection solutions for the cellular (2G/3G/4G/5G/Cat1), NB-IoT, Wi-Fi, Bluetooth and other network devices to meet the requirement of connecting and managing different devices., It also supports multi-protocol access based on MQTT, LwM2M, etc., to ensure a quick connection between Developer Center and massive devices.

</span>

  

### **Device Management**

Developer Center provides abundant features to manage device lifecycle, such as device registration, activation, authentication, deletion, etc.,, the capabilities of storing data, manages the storage and query of device properties, services, events, which simplifies the complexity of massive device management and to improve management efficiency.

### **TSL Model**

On Developer Center, you can define features for the product, including device property, service and event, which simplifies the development of upper-layer application.

### **Message Subscription**

Developer Center provides multiple communication methods, such as communication based on TSL model (attribute, service and event) , sending command to configure device, and pushing the subscribed message, and supports server-end subscription. The data forwarding feature of the Platform allows you to forward the specific device data to a specific server. The message queue service provided by Developer Center is a message middleware with high performance and high availability that facilitates application on server-end.

### **OTA Upgrade**

Developer Center integrates the capabilities of firmware upgrade and management. You can upgrade your device in real-time on Developer Center. FOTA and SOTA are supported to perform software or firmware upgrade of the terminal device remotely.

### **Security**

Developer Center protects device data in various methods. Unique-certificate-per-product authentication mechanism is supported to guarantee the security and uniqueness of devices. TSL data transmission channel is supported to guarantee data security. Device permission control is supported to ensure communication security between Developer Center and devices. All these methods guarantee the security between the device-end and application-end.

### **Data Buffering**

Developer Center supports buffering offline messages, and integrates the capabilities of offline storage of device messages (reported and issued) and supports adjusting cache storage duration based on actual needs.

### **OpenAPI**

Developer Center provides products, device and service related OpenAPIs that are complied with REST interface standard to facilitate application development and meet the scenario business needs.