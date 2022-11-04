# Example of Transparent Transmission Data Interaction

 ## __Introduction__

Transparent transmission data can be used according to actual scenario. If you do not need Developer Center to parse the data but only transparently transmit data, you can call __quecIot.passTransSend()__ to make the device interact with Developer Center after the device successfully connected to Developer Center. Any type of data can be transparently transmitted. This chapter introduces how to send and receive transparent transmission data in QuecPython solution. 



## __Related API__

| Function                | Description                                 |
| :---------------------- | :------------------------------------------ |
| quecIot.passTransSend() | Sends transparent transmission data to Developer Center. |

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-03.md) for details.</font>


## __Procedure__

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### **2. Create a Project** 

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

#### **3. Create a Product** 

The prerequisite for TSL-format data interaction is selecting __Custom__ as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecPython/resource/data/SeriaNet/Example-01.png">![img](/en/deviceDevelop/nb/QuecPython/resource/data/SeriaNet/Example-01.png)</a>

### **Transparent Transmission Data Interaction**

True is returned after the device sent data successfully. If the sent data is CON data, the event callback function will be called to pass 4,10210. If the sent data is NON data, there is no event notification.

#### __Example 1 (The device sends transparent transmission data)__

The device can call __quecIot.passTransSend()__ to send transparent transmission data. Send data as a string of 12 bytes "ABCabc123456", the message type is CON.

Sample code:

```c
quecIot.passTransSend(12,"ABCabc123456")
```

#### __Example 2 (The device reads transparent transmission data issued by Developer Center)__

__1. Developer Center issues transparent transmission data__

Open __Device Details__ page, click __Device Debug__ to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecPython/resource/data/SeriaNet/Example-02.png">![img](/en/deviceDevelop/nb/QuecPython/resource/data/SeriaNet/Example-02.png)</a>

__2. The device receives the transparent transmission data issued by Developer Center__

After receiving the data, the device will automatically enter the event callback function. Developers only need to determine and extract the data based on the event ID.

```c
@staticmethod
def eventCB(data):
    print("event:", data)
    event = data[0]
    errcode = data[1]
    if len(data) > 2:
        data = data[2]
    elif event == 5:  # Received data event. Developers can implements downlink business logic based on this event.
        if errcode == 10200: # Received donwlink data
            print('Receiving data operation')
            print(data)  # Transparent transmission data issued by Developer Center
```



 

