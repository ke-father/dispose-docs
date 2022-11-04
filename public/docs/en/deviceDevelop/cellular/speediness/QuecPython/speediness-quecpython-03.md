# Presentation

## **1. Device Online**

At this time, the module equipped with the program has started to run, and you can view the program on __REPL__ page. REPL is used to communicate with the device at the PC end and issue commands to make the device work according to the developer's idea. At the same time, the device can return information to the PC, and the user can see the internal operation of the device in the interaction interface. When __event：(3,10200)__ is displayed on interaction interface, it indicates the module has connected with Developer Center. The interaction interface of QPYcom is shown as follows.


<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-09.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-09.png)</a>


At this time, you can see the device is online from Developer Center. The presentation of Developer Center interface is shown below:

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-15.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-15.png)</a>

## __2. Debug Device Online__

<font color=#999AAA >Note: Device debugging online helps developers to debug device features, including property debug and some service debug. Ensure the device works online during device debugging.</font>

__1) View Data Logs__

From the communication logs, you can see that the device reports the remaining content of essential oil to Developer Center every 30 seconds.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-10.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-10.png)</a>


__2) Read the Current Property Value__

Click single property to __Read__, and then Developer Center will send the querying command to the device. You can also read Communication Logs in real time to check the situation of data sent and reported by the device.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-11.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-11.png)</a>

__3) Call Service__

According to __Device Debug__ > __Service Calls__ defined by TSL feature, you can simulate the condition of remotely issuing command. In "Device Debug" page, select __Set Working Mode__ , set parameter to __Working Mode 2__ and click __"Send Command"__, then you can see that the device has received the service issued by Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-12.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-12.png)</a>


At this time, the device has received the callback event and service data. The interaction interface of QPYcom is shown as follows:


<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-13.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-13.png)</a>


__4) Alert Event Logs__

By viewing __Event Logs__, you can see that the device automatically reports the alert event to Developer Center once an alert is generated.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-14.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-14.png)</a>

## **Device Routine Demo**

The complete sample code of main.py is shown below:

```py
import quecIot
import _thread
import utime

key = "pxxxxn"  # Input ProductKey
src = "MWZzxxxxxxxxDlt"  # Input ProductSecret

class Quecthing:
    def __init__(self):
        # ''' Initialize QuecThing SDK. '''
        quecIot.init()
        # ''' Register event callback function. '''
        quecIot.setEventCB(self.eventCB)
        # ''' Configure product information.'''
        quecIot.setProductinfo(key, src)
        # ''' Enable to connect to Developer Center. '''
        quecIot.setConnmode(1)
        return

    @staticmethod
    def eventCB(data):
        print("event:", data)
        event = data[0]
        errcode = data[1]
        if len(data) > 2:
            data = data[2]

        if event == 1:  # Send data.
            if errcode == 10200:
                print('The device is successfully authenticated to Developer Center.')
            elif errcode == 10422:
                print('The device is authenticated  (Failed Connection).')
        elif event == 2:  # Connection
            if errcode == 10200:
                print('Access successfully.')
        elif event == 3:  # Send data.
            if errcode == 10200:
                print('Describe successfully.')
        elif event == 4:  # Send data.
            if errcode == 10200:
                print('Send data successfully.')
        elif event == 5:  # Receive data event, based on which developers can implement the downlink business logic.
           if errcode == 10200: # Receive transparent transmission data.
                print('Receive transparent transmission data:')
                print(data)
                # quecIot.passTransSend(1, 'OilsCurrentML: 180.65')
           elif errcode == 10210:   # Receive the data issued by Developer Center.
               print('Receive data.')
               model = data
               model_keys = list(model.keys())
               for cmdId in model_keys:
                   value = model.get(cmdId)
                   if 2 == cmdId:    #Issue the frequency of regular reporting.
                           #code
                           print("Ctemporal frequency："+ str(value)) 
                   elif 3 == cmdId:    #Issue on/off status.
                        if  False == value:   #Close
                           #code
                           print("Turn off the aromatherapy machine") 
                        elif True == value:   #Open
                           #code
                           print("Turn on the aromatherapy machine") 
                   elif 5 == cmdId:    # Call service.                     
                        if  1 == value[6]:   #Working Mode 1.
                           #code
                           print("Model 1") 
                        elif 2 == value[6]:   #Working Mode 2.
                           #code
                           print("Model 2") 
                        elif 3 == value[6]:   #Working Mode 3.
                           #code
                           print("Model 3") 
                   else :
                       pass
           elif errcode == 10211:   # Receive the request of data from Developer Center.
               print('Developer Center reads data.')
               if [1] == data[1]:
                   quecIot.phymodelReport(1, {1: 180.25})
               elif [2] == data[1]:
                   quecIot.phymodelReport(1, {2: 30})  
               elif [3] == data[1]:
                   quecIot.phymodelReport(1, {3: True})
               else :
                   pass
        elif event == 6:  # Access.
            if errcode == 10200:
                print('De-register successfully (Successful Disconnection).')
        elif event == 7:  # OTA
            if errcode == 10700:
                print('OTA upgrade task: information configuration.')

def QuecIot_passTransSend():
    while True:
        # The first argument is QoS, and when it is equel or greater than 1, there will be event callback response.
        quecIot.phymodelReport(1, {1: 180.25})   #User main task: reporting the remaining content of essential oil every 30 seconds.
        utime.sleep(30)
        print('QuecIot_passTransSend')

if __name__ == '__main__':
    Quecthing()
    _thread.start_new_thread(QuecIot_passTransSend, ())
```