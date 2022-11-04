# Write Python Script

## **Write Script**

QuecPython supports __autimatically executing__ user codes after the module is booted. After the Quectel module is booted, QuecPython will look for a program file named __main.py__ under the user partition and __automatically execute__ the file. If you suppose QuecPython to run your codes automatically, you need to name the program __main.py__ and download it into the module together with its dependent files. Then let's start writing an example script of __main.py__.


## __1. Initialize Configuration__

Before connecting the module to Developer Center, you need to initialize the project configuration.
<font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-02.md) for details.</font>


* Initialize the QuecThing component after the device is powered on.

  ```py
  quecIot.init()
  ```

* Register __event callback function__, based on which you can determine the connection status between the device and Developer Center.

  ```py
  quecIot.setEventCB(queciot_even_cb)
  ```

* The device authentication method supports __unique-certificate-per-product authentication__. When configuring device information, you only need to write the __PK and PS__ generated when you created the  product to the argument.

  ```py
  quecIot.setProductinfo("pxxxxy", "OFZCxxxxxxxxUdn")
  ```


* Sample Code

  ```py
  """ Initialize QuecThing SDK. """
      quecIot.init()
  """ Register event callback function. """
      quecIot.setEventCB(self.eventCB)
  """ Configure product information."""
      quecIot.setProductinfo("pxxxxy", "OFZCxxxxxxxxUdn")
  ```

## __2. Access Developer Center__

QuecPython support __one-click connection__ for a device to access Developer Center. Once a device connects to Developer Center, the device can communicate with Developer Center safely and steadily, and Developer Center can manage, monitor and control the device. 

* Sample Code

  ```py
  """ Enable to connect to Developer Center."""
      quecIot.setConnmode(1)
  ```


<font color=#999AAA >Note: Wi-Fi station mode is enabled by default. </font>

## __3. Develop Application Logic__

### __1). Enable BLE__

You need to enable BLE before network provisioning.

* Sample Code
    ```py
    """ Open the BLE """
        def ble_gatt_open():
            ret = ble.gattStart()
            if ret != 0:
                print('ble_gatt_open failed.')
                return -1
            print('ble_gatt_open success.')
            return 0
    ```


### __2).Implementation of Uplink Business Logic__

__main.py__, a data template example, has implemented a general processing framework for data sending and receiving and event response.  Developers can develop business data logic according to the example and project requirements. 

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-03.md) for details.</font>


The device can adopt certain strategies to detect and process data property based on business scenarios. The module needs to report the remaining content of essential oil to Developer Center.

* Sample Code

  ```py
  def QuecIot_passTransSend():
      while True:
          # The first argument is QoS, and when it is equel or greater than 1, there will be event callback response.
          quecIot.phymodelReport(1, {1: 180.25})   #User task: reporting the remaining content of essential oil to Developer Center every 30 second.       
          print('QuecIot_passTransSend')
          utime.sleep(30)
  
  if __name__ == '__main__':
      Quecthing()
      _thread.start_new_thread(QuecIot_passTransSend, ())
  ```

### __3).Implementation of Downlink Business Logic__

For the downlink data of the server, __QuecThing SDK__ has parsed TTLV data according to the data template protocol, so developers only need to develop downlink business logic according to different events. TSL is a template structure generated according to the product data template defined in Developer Center, and the defined properties constitute member variables. Enter the property data pointed to by the parameter value. In the downlink data from the server, __QuecThing SDK__  has parsed property data according to the data template protocol. Developers can directly use the parsed data to add business logic in the downlink logic processing function.


* Sample Code

  ```py
  @staticmethod
      def eventCB(data):
          print("event:", data)
          event = data[0]
          errcode = data[1]
          if len(data) > 2:
              data = data[2]
              
          if event == 5:  # Receive event, based on which developers can implement downlink business logic.
          if errcode == 10200: # Receive transparent transmission data.
                  print('Receive transparent transmission data:')
                  print(data)
                  # quecIot.passTransSend(1, 'OilsCurrentML: 180.65')
          elif errcode == 10210:   # Receive the data issued by Developer Center.
              print('Receive data operations')
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
  ```

## __4. Download QuecPython Script__

Python codes do not need compiling and developers can directly burn __main.py__ file into the module with __QPYcom__. 

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-07.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-07.png)</a>

__①__ Click __File__ tag to enter the file page and select __main.py__ file. <font color=#999AAA >Note: The files displayed on the left are local files of the PC and on the right are files on module.</font> <br>
__②__  Drag __main.py__ file to the root node of the __usr__ directory on the right and release the left mouse button to automatically download the file to the module.

<font color=#999AAA >Note: The file download progress is displayed in the status bar at the bottom of QPYcom. If the download progress reaches 100%, the file is downloaded successfully.</font>


## __5. Run the Script__

Choose __main.py__ in the module file on the right and click __triangle__ above the files to automatically run the codes.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-08.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-08.png)</a>

<font color=#999AAA >Note: Automatic or circularly output scripts can not be stopped by  Ctrl+C. The only way to stop the script is to re-burn the firmware package.</font>



## __6. QuecOne Network Provisioning__

### Precondition：
Download QuecOne and register an account.
### Procedure:
1. Log in to QuecOne with your account and turn on the Bluetooth and Wi-Fi of your mobile phone. On the "Home" page, click “⊕” in the upper right corner.
   
   <br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-28.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-28.png" style="width: 30%" /></a>

2. Select "Search device nearby" in the pop-up window and enter the "Search for Device" page. Then QuecOne will automatically search for nearby devices, and the searched devices will be displayed in the current page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-29.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-29.png" style="width: 30%" /></a>

3. Click the searched device, QUEC_BLE_xxxx, and enter the "Network Configuration" page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-30.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-30.png" style="width: 30%" /></a>

4. Enter the Wi-Fi name and password of the current network environment to configure the network (Only 2.4 GHz Wi-Fi band is supported).

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-31.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-31.png" style="width: 30%" /></a>

5. In the "Bind Device" page, QuecOne will automatically recognize and fill in the MAC address. You need to manually enter the device name (In this example, the device is named smart aromatherapy diffuser), and then click "Bind".

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-32.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-32.png" style="width: 30%" /></a>

6. So far, the smart aromatherapy diffuser is successfully added, and it is displayed in the "Device List" on the QuecOne "Home" page .

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-33.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-AT-33.png" style="width: 30%" /></a>

   At this time, you can see that this device is already online in Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-15.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-15.png)</a>
