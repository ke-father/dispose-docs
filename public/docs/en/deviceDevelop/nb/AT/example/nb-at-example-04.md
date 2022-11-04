# GNSS&LBS Positioning Example

## **Introduction**

Currently, Developer Center location service supports __GNSS positioning__ and __LBS positioning__ to determine the specific location of the device. This chapter introduces how to obtain location data and report it to Developer Center.

* __GNSS Positioning__ 
  The module connects with an external GNSS module to realize satellite positioning.
* __LBS Positioning__ 
  LBS Positioning is based on station positioning system of communication operators.

## **Related AT Commands**


|  AT Command   |                         Description                          |
| :-----------: | :----------------------------------------------------------: |
| AT+QIOTLOCIN  | Obtain/Report location data of the built-in positioning feature of the module |
| AT+QIOTLOCEXT |   Report location data obtained from external GNSS module    |

<font color=#999AAA >Note: See [GNSS&LBS Positioning Command](/en/deviceDevelop/nb/AT/API/nb-at-07.md) for details.</font>


## **Procedure**

### **Operation on Developer Center**

### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

### **3. Create a Product** 

Creating a product is the first step in the product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with NB-IoT networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product: "Smart Aromatherapy Diffuser".

### **Example 1 (Obtain location data of the built-in positioning feature of the module)**

1. Obtain NMEA sentences type of the built-in positioning feature of the module.

```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

2. Obtain NMEA sentences data of the built-in positioning feature of the module.

```c
[TX]AT+QIOTLOCIN=1,"LBS"

[RX]+QIOTLOCIN: "$LBS,460,02,0,455,-113,0*71"
[RX]+QIOTLOCIN: "$LBS,460,01,0,456,-100,0*69"


[RX]OK
```

### **Example 2 (Report location data of the built-in positioning feature of the module)**

1. Query the type of the built-in positioning feature of the module.

```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

2. Report location data of the built-in positioning feature of the module to Developer Center.

```c
[TX]AT+QIOTLOCIN=0,"LBS"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

### **Example 3 (Report location data obtained from external GNSS module)**

1. Obtain the location data from an external GNSS module
By connecting MCU with external GNSS module, GNSS module will print NMEA data to MCU after receiving the positioning data. For example, the NMEA data obtained by GNSS module is __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ .

2. Report the obtained positioning data to Developer Center.

Execute __AT+QIOTLOCEXT__ to report the NMEA data obtained from the external GNSS module to Developer Center.

```c
[TX]AT+QIOTLOCEXT="$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

3. View the device location on Developer Center.
Open __Device Details__ page, and click __Location__ page to view the location data.

 <a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/04-1.png">![img](/en/deviceDevelop/nb/AT/resource/04-1.png)</a>

  