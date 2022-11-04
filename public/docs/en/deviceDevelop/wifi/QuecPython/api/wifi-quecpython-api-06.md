# GNSS&LBS Positioning API

## **GNSS&LBS Positioning API Overview**

| Function                                              | Description                                                  |
| :---------------------------------------------------- | :----------------------------------------------------------- |
| [quecIot.getLocSupList()](#getLocSupList)             | Obtains NMEA sentences type of the built-in positioning feature of the module. |
| [quecIot.getLocData()](#getLocData)                   | Obtains location data of the built-in positioning feature of the module. |
| [quecIot.locReportInside()](#locReportInside)         | Reports the location data of the built-in positioning feature of the device. |
| [quecIot.locReportInside_ex()](#locReportInside_ex)   | Reports the location data of the built-in positioning feature of the device. |
| [quecIot.locReportOutside()](#locReportOutside)       | Reports location data obtained from external GNSS module.    |
| [quecIot.locReportOutside_ex()](#locReportOutside_ex) | Reports location data obtained from external GNSS module.    |

## **API Description**

<span id="getLocSupList"> </span>

## <font color=#A52A1A  >__quecIot.getLocSupList__</font>

This function obtains NMEA sentences type of the built-in positioning feature of the module.

__Prototype__

```py
quecIot.getLocSupList()
```

__Parameter__

None

__Return Value__

* Successful execution returns the list of NMEA sentences type supported by the built-in positioning function of the device. See [NMEA Sentences Type](#loc).
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.8.0 and above.

__Example__

```py
ret = quecIot.getLocSupList()
```

---

<span id="getLocData">  </span>

## <font color=#A52A1A  >__quecIot.getLocData__</font>

This function obtains location data of the built-in positioning feature of the module.

__Prototype__

```py
quecIot.getLocData(types)
```

__Parameter__

* __`types`__: List of NMEA sentence type to be got. See [NMEA Sentences Type](#loc).

__Return Value__

* Successful execution returns the NMEA sentences of specific type.
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.8.0 and above.

__Example__

```py
ret = quecIot.getLocData(["GPS","GGA"])
```

---

<span id="locReportInside"> </span>

## <font color=#A52A1A  >__quecIot.locReportInside__</font>

This function reports the location information of the built-in positioning function of the device. (It is recommended to call quecIot.locReportInside_ex() to report the location data. Uplink data ID is returned after the location data is reported).

__Prototype__

```py
quecIot.locReportInside(types)
```

__Parameter__

* __`types`__: List of location information to be reported. See [NMEA Sentences Type](#loc).

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.6.1 and above.

__Example__

```py
ret = quecIot.locReportInside(["LBS"])
```

---

<span id="locReportInside_ex"> </span>

## <font color=#A52A1A  >__quecIot.locReportInside_ex__</font>

This function reports the location data of the built-in positioning feature of the device.

__Prototype__

```py
quecIot.locReportInside_ex(types)
```

__Parameter__

* __`types`__: List type.  List of NMEA sentence type to be reported. See [NMEA Sentences Type](#loc)

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.locReportInside_ex(["GGA"])
```

---

<span id="locReportOutside"> </span>

## <font color=#A52A1A  >__quecIot.locReportOutside__</font>

This function reports location data obtained from an external GNSS module. (It is recommended to call quecIot.locReportOutside_ex() to report the location data. Uplink data ID is returned after the location data is reported).

__Prototype__

```py
quecIot.locReportOutside(nmea_data)
```

__Parameter__

* __`nmea_data`__: List of location information to be reported.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.6.1 and above.

__Example__

```py
ret = quecIot.locReportOutside(["$GPRMC,042523.0,A,3413.610533,N,10854.063257,E,0.0,245.9,190716,0.0,E,A*0F"])
```

---

<span id="locReportOutside_ex">  </span>

## <font color=#A52A1A  >__quecIot.locReportOutside_ex__</font>

This function reports location data obtained from an external GNSS module.

__Prototype__

```py
quecIot.locReportOutside_ex(nmea_data)
```

__Example__

* __`nmea_data`__: List of location information to be reported.

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__ 

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.locReportOutside_ex(["$GPRMC,042523.0,A,3413.610533,N,10854.063257,E,0.0,245.9,190716,0.0,E,A*0F"])
```

---

<span id="loc"> </span>

## **NMEA Sentences Type**

| NMEA Sentence Type | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| NONE               | Disable all NMEA sentences                                   |
| AUTO               | Report the corresponding NMEA sentences automatically after location signal is updated |
| LBS                | Base station positioning                                     |
| GGA                | GGA sentence of any satellite system                         |
| RMC                | RMC sentence of any satellite system                         |
| GSV                | GSV sentence of any satellite system                         |
| GSA                | GSA sentence of any satellite system                         |
| VTG                | VTG sentence of any satellite system                         |
| GPGGA              | GGA sentence of GPS                                          |
| GPRMC              | RMC sentence of GPS                                          |
| GPGSV              | GSV sentence of GPS                                          |
| GPGSA              | GSA sentence of GPS                                          |
| GPVTG              | VTG sentence of GPS                                          |
| BDGGA              | GGA sentence of BDS                                          |
| BDRMC              | RMC sentence of BDS                                          |
| BDGSV              | GSV sentence of BDS                                          |
| BDGSA              | GSA sentence of BDS                                          |
| BDVTG              | VTG sentence of BDS                                          |
| GLGGA              | GGA sentence of GLONASS                                      |
| GGA                | RMC sentence of GLONASS                                      |
| GLGSV              | GSV sentence of GLONASS                                      |
| GLGSA              | GSA sentence of GLONASS                                      |
| GLVTG              | VTG sentence of GLONASS                                      |
| GAGGA              | GGA sentence of Galileo                                      |
| GARMC              | RMC sentence of Galileo                                      |
| GAGSV              | GSV sentence of Galileo                                      |
| GAGSA              | GSA sentence of Galileo                                      |
| GAVTG              | VTG sentence of Galileo                                      |
| GNGGA              | GGA sentence of GNSS                                         |
| GNRMC              | RMC sentence of GNSS                                         |
| GNGSV              | GSV sentence of GNSS                                         |
| GNGSA              | GSA sentence of GNSS                                         |
| GNVTG              | VTG sentence of GNSS                                         |