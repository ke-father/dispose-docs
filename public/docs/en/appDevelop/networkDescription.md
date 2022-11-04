# Device Network Provisioning Process

## **Device Network Provisioning Introduction**

The device network provisioning focuses on products with WiFi+Bluetooth modules, which requires the cooperation of the App to send SSID and password of the wireless router to the module through the Bluetooth channel, so that the hardware device can access to Developer Center through the router.

## **Process of Network Provisioning with Wi-Fi+Bluetooth**

<a data-fancybox title="img" href="/en/appDevelop/image2022-3-21_17-40-25.png?version=1&modificationDate=1647854947000&api=v2">![img](/en/appDevelop/image2022-3-21_17-40-25.png?version=1&modificationDate=1647854947000&api=v2)</a>

### **Process Description is as follows:**

1.After the device is powered on, it is not recommended to enter network provisioning mode by default. It is recommended to enter network provisioning mode by manually triggering the hardware (that is, to turn on Bluetooth and make it  discoverable). The operation of entering network provisioning mode is determined by the actual use scenario of the device. For example, the tri-color light body has no buttons, so you can enter the mode  bySwitch on and off the light for three times consecutively.<br />
2.The App searches for Bluetooth devices through Bluetooth and provides users with options;<br />
3.The App obtains the Wi-Fi information (SSID) currently connected to the mobile phone, and prompts the user to enter the Wi-Fi password, which is then sent to the module through Bluetooth<br />
4.After the module receives the target Wi-Fi information (SSID+password) through Bluetooth, it actively tries to connect to the router. After the connection is successful, the successful connection information will be returned through Bluetooth, and at the same time the module completes the authentication and login processes to the cloud;<br />
5.After the successful authentication, the App can bind the device and perform uplink and downlink data communication.

