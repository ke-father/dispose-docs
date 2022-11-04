# Device Positioning

This documents introduces device location. If location positioning is supported for the current device, the reported positioning data will be parsed and displayed. Currently, Developer Center can parse GPS (Global Positioning System) positioning data and LBS (Location Based Service) positioning data and WIFI (A location tracking system based on wireless router signal) positioning data.

## **Prerequisites**

● A product has been created.<br />
● A device that supports positioning feature has been connected to Developer Center successfully.<br />
● A positioning data has been reported.

## **Steps**

After logging in to Developer Center, click "Device Management"→ "Operation and Maintenance” in the left navigation bar to display the list of devices. Find the device and click "View" in the Action column to enter "Device Information" page, and then click "Location" tab.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_14-11-40.png?version=1&modificationDate=1646892109000&api=v2">![img](/en/guide/image2022-3-10_14-11-40.png?version=1&modificationDate=1646892109000&api=v2)</a>

Parameters

| **Parameter**       | **Description**                                                        |
| :--------- | :----------------------------------------------------------- |
| Positioning Time  | The most recent time when the positioning data was reported                                 |
| Number of Satellites | When the positioning data is GPS, the number of satellites for positioning may be reported          |
| Positioning Status   | **Differential Positioning**: There is a receiver (Satellite Ground Station) at fixed position to receive satellite signals. Due to the fixed position of the receiver, the positioning error of the satellite can be calculated. The coordinates is calculated based on the satellite signals received by the handheld receiver, and then it can be corrected by synthesizing the positioning error provided by the ground station for better accuracy. **Non-differential Positioning**: a single receiver is used for positioning to get the absolute coordinates of the receiver antenna. **Valid Positioning**: A positioning method that can accurately obtain information such as latitude and longitude. **Invalid Positioning**: Information such as latitude and longitude is not obtained or the information obtained such as latitude and longitude, speed and direction is invalid. **Estimating**: indicates an  approximate estimate of the current location information and positioning status. |
| Positioning Method   | GNSS: Global Navigation Satellite System; GPS: Global Position System (United States); GL: GLONASS (Russia); GA: Galileo (European Union); BD/PQ: China Navigation Satellite System; LBS: Location Based Services;WIFI: A location tracking system based on wireless router signal |
| Coordinate | The latitude and longitude reported based on WGS-84 coordinate system                       |

