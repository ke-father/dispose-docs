# Example of Product Configuration and Quick Access


## __Introduction__

This chapter introduces how to configure a product and quickly access Developer Center in QuecPython solution.

## __Related API__

| Function                 | Description                                                  |
| :----------------------- | :----------------------------------------------------------- |
| quecIot.init()           | Initializes configurations and enables QuecThing.            |
| quecIot.setEventCB()     | Sets callback function for the device and Developer Center interaction event. |
| quecIot.setProductinfo() | Sets product information.                                    |
| quecIot.setConnmode()    | Configures the connection mode between the device and Developer Center.   |
| quecIot.getConnmode()    | Gets the connection mode between the device and Developer Center.         |
| quecIot.getWorkState()   | Gets the connection status between the device and Developer Center.       |

<font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-02.md) for details.</font>


## __Procedure__

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

  

#### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecOpen/resource/Connect_cloud/Example-01.png">![img](/en/deviceDevelop/wifi/QuecOpen/resource/Connect_cloud/Example-01.png)</a>

#### 3. Create a Product

Creating a product is the first step in the product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product: "Smart Aromatherapy Diffuser".

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/Connect_cloud/Example-02.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/Connect_cloud/Example-02.png)</a>

<font color=#999AAA >Note: PK and PS should be in safekeeping, because they will be used for device authentification and product deletion.</font>

## __Operation on Device__

### __1. Initialize Configuration__

Before development, you should initialize QuecThing components of the project. This function must be called before you use the network service. Initialization refers to the process of importing **quecIot**  after the module is powered on, and then executing the initialization function.

```c
import quecIot
""" Initialize QuecThing SDK """
quecIot.init()
```

### __2. Callback Function__

Callback function refers to adding a listening task to a event source (component). When the device triggers a event, the developer only need to process the corresponding event under the event callback function, and the listening task will handle the event. 

```c
/* Register event callback function */
quecIot.setEventCB(self.eventCB)
```

### __3. Configure Product Information (in the First Connection)__

The QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be adapted according to actual conditions. When a device sends a bootstrap authentication operation, Developer Center authenticates ProductKey and ProductSecret carried by the device. If the device passes the authentication, Developer Center issues the required information for connection. Finally, the device carries the information to access Developer Center.

```c
/* Configure product information*/
quecIot.setProductinfo("pxxxxn", "MWZxxxxxxxxxxDlt")
```


### __4. Access Developer Center__

The device accesses Developer Center and establishes a safe and stable communication between the device and Developer Center to realize device management, monitoring and control.

 ```c
/* Access Developer Center */
quecIot.setConnmode(1)
 ```

### __5. Query Connection Status__

To further confirm whether the device has connected to Developer Center, you can query the connection status by calling quecIot.getWorkState() . If the device has connected to Developer Center successfully, they can communicate with each other.

```c
State = quecIot.getWorkState()
```

<br>

Connection statuses:

| Response Value | Description                               |
| :------------: | :---------------------------------------- |
|       0        | Uninitialized                             |
|       1        | Initialized                               |
|       2        | Authenticating                            |
|       3        | Authenticated                             |
|       4        | Authentication failed                     |
|       5        | Registering                               |
|       6        | Registered and is waiting for subscribing |
|       7        | Registration failed                       |
|       8        | Subscribed and data can be sent           |
|       9        | Subscription failed                       |
|       10       | De-registering                            |
|       11       | De-registered                             |
|       12       | De-registration failed                    |

​      

