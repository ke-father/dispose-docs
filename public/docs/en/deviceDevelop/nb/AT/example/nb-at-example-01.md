# Example of Product Configuration and Quick Access

## **Introduction**

This chapter introduces how to configure a product and quickly access Developer Center by AT command.

## **Related AT Commands**

|  AT Command  |          Description          |
| :----------: | :---------------------------: |
|  AT+QIOTCFG  | Configure optional parameters |
|  AT+QIOTREG  |   Configure connection mode   |
| AT+QIOTSTATE |    Query connection status    |

<font color=#999AAA >Note: See [Product Configuration Command](/en/deviceDevelop/nb/AT/API/nb-at-03.md) for details.</font>



## **Procedure**

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### **2. Create a Project**

<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/01-1.png">![img](/en/deviceDevelop/nb/AT/resource/01-1.png)</a>

#### **3. Create a Product**

<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/01-2.png">![img](/en/deviceDevelop/nb/AT/resource/01-2.png)</a>

<font color=#999AAA >Note: PK and PS should be in safekeeping, because they will be used for device authentification and product deletion.</font>

### **Operation on Device**

#### **1. Configure Product Information (in the First Connection)**

After a product is created on Developer Center, Developer Center will send you ProductKey and ProductSecret by e-mail. All devices under the same product can download the same ProductKey and ProductSecret. When a device sends a bootstrap authentication operation, Developer Center authenticates ProductKey and ProductSecret carried by the device and then the device passes the authentication. For the first time to connect the device to Developer Center, configure product information by __AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]__. Download ProductKey and ProductSecret to the device and perform the bootstrap authentication. The authenticated device will be automatically added  to the product.

 ```c
[TX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

OK
 ```

#### **2. Access Developer Center**


MCU can configure connection mode by __AT+QIOTREG=\<reg_mode\>__. ProductKey and ProductSecret must be configured before a device access Developer Center, otherwise ERROR will be returned.

   ```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

OK
   ```

#### **3. Query Connection Status**

To further confirm whether the device has connected to Developer Center, you can query the connection status by __AT+QIOTSTATE?__. If __+QIOTSTATE: 8__ is returned, the device has connected to Developer Center and data can be sent.

```c
[TX]AT+QIOTSTATE?

[RX]AT+QIOTSTATE?

+QIOTSTATE: 8

OK
```

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

 