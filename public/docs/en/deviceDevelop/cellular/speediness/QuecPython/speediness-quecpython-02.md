# Write Python Script

## **Write Script**

QuecPython supports __autimatically executing__ user codes after the module is booted. After the Quectel module is booted, QuecPython will look for a program file named __main.py__ under the user partition and __automatically execute__ the file. If you suppose QuecPython to run your codes automatically, you need to name the program __main.py__ and download it into the module together with its dependent files. Then let's start writing an example script of __main.py__.


## __1. Initialize Configuration__

Before connecting the module to Developer Center, you need to initialize the project configuration.
<font color=#999AAA >Note: See [Product Configuration API](/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-02.md) for details.</font>


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

## __3. Develop Application Logic__

__main.py__, a data template example, has implemented a general processing framework for data sending and receiving and event response.  Developers can develop business data logic according to the example and project requirements. 

<font color=#999AAA >Note: See [Data Interaction API](/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-03.md) for details.</font>

### __Implementation of Uplink Business Logic__

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

### __Implementation of Downlink Business Logic__

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

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-07.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-07.png)</a>

__①__ Click __File__ tag to enter the file page and select __main.py__ file. <font color=#999AAA >Note: The files displayed on the left are local files of the PC and on the right are files on module.</font> <br>
__②__  Drag __main.py__ file to the root node of the __usr__ directory on the right and release the left mouse button to automatically download the file to the module.

<font color=#999AAA >Note: The file download progress is displayed in the status bar at the bottom of QPYcom. If the download progress reaches 100%, the file is downloaded successfully.</font>


## __5. Run the Script__

Choose __main.py__ in the module file on the right and click __triangle__ above the files to automatically run the codes.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-08.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-08.png)</a>

<font color=#999AAA >Note: Automatic or circularly output scripts can not be stopped by  Ctrl+C. The only way to stop the script is to re-burn the firmware package.</font>