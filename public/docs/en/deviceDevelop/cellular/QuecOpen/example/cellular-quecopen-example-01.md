# Example of Product Configuration and Quick Access


## __Introduction__

This chapter introduces how to configure a product and quickly access Developer Center in QuecOpen solution.

## __Related APIs__

|           Function           | Description                                                  |
| :--------------------------: | :----------------------------------------------------------- |
|         Ql_iotInit()         | Initializes configurations and enables QuecThing.            |
|   Ql_iotConfigSetEventCB()   | Sets callback function for the device and Developer Center interaction event. |
| Ql_iotConfigSetProductinfo() | Sets product information.                                    |
|  Ql_iotConfigSetConnmode()   | Configures the connection mode between the device and Developer Center.   |
|     Ql_iotGetWorkState()     | Gets the connection mode between the device and Developer Center.         |

<font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-02.md) for details.</font>


## __Procedure__

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.


  

#### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/Connect_cloud/Example-01.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/Connect_cloud/Example-01.png)</a>


#### 3. Create a Product

Creating a product is the first step in the product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product: "Smart Aromatherapy Diffuser".

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/Connect_cloud/Example-02.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/Connect_cloud/Example-02.png)</a>

<font color=#999AAA >Note: PK and PS should be in safekeeping, because they will be used for device authentification and product deletion.</font>

## __Operation on Device__

### __1. Initialize Configuration__

Before development, you should initialize the project in QuecOpen solution. This function must be called before you use the network service. Initialization refers to the process of completing the basic configuration of a module after the module is powered on, so as to enable the module to connect to network and Developer Center and report the status.

```c
/* Initialize QuecThing SDK */
Ql_iotInit();
```

### __2. Callback Function__

Callback function refers to adding a listening task Ql_iotEventCB() to a event source (component). When the device triggers come event, the developer only need to process the corresponding event under Ql_iotEventCB(), and the listening task will handle the event. 

```c
/* Register event callback function */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

### __3. Configure Product Information (in the First Connection)__

The QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be adapted according to actual conditions. When a device sends a bootstrap authentication operation, Developer Center authenticates ProductKey and ProductSecret carried by the device. If the device passes the authentication, Developer Center issues the required information for connection. Finally, the device carries the information to access Developer Center.

```c
/* Configure product information*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
```


### __4. Access Developer Center__

The device accesses Developer Center and establishes a safe and stable communication between the device and Developer Center to realize device management, monitoring and control.

 ```c
/* Access Developer Center */
Ql_iotConfigSetConnmode(1);
 ```

### __5. Query Connection Status__

To further confirm whether the device has connected to Developer Center, you can query the connection status by calling Ql_iotGetWorkState(). If the device has connected to Developer Center successfully, they can communicate with each other.

```c
/* Get the current connection status */
QIot_state_e status = Ql_iotGetWorkState();
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

