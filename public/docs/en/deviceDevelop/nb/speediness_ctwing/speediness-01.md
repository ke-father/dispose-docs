# Overview

## **Introduction**

<font color=#999AAA >This section helps developers to better understand and implement the quick access to __Quectel Device Manage Platform__ (hereinafter referred to as Developer Center) for the NB-IoT module (hereinafter referred to as the device) that is already accessed to **China Telecom AEP**,  and the data interaction. </font>




## **IoT as Bridge**

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-1.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-1.png"></a>

In terms of the NB-IoT module with **China Telecom IoT SIM card** being inserted, developers must manage devices and perform data interaction through China Telecom AEP. Developer Center supports establish connections between the devices on China Telecom AEP and Developer Center, achieving managing the devices on Developer Center to simplify operations and lower development cost. When developers send commands on Developer Center, Developer Center synchronously calls the corresponding interface of China Telecom AEP to send the command to China Telecom AEP, then China Telecom AEP send the command to the device over **LwM2M**.

## **Scenario**

__Smart Door Sensor__ can monitor and detect the open/closed status of doors and windows 24 hours a day. Once the door and window are opened, the smart door sensor actively pushes an alert signal to __Quectel Developer Center__, and the relevant personnel arrives at the scene to deal with it. Real-time query of alert history records provides necessary reference, which is suitable for residential communities, nursing homes, industrial parks, schools and the security and anti-theft management places.