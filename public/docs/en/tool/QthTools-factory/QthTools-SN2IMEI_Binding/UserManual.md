# User Manual

## **Introduction**

This document introduces how to use Quectel QthTools-SN2IMEI Binding tool to bind the IMEI of the Quectel module to the SN of Developer Center. After binding, the corresponding csv file is generated and imported to Developer Center.


## **Process**

### **Open the Program**

 After the user opens the program, the program will automatically load the records that you have before you close the tool last time, and a prompt box will pop up, prompting that the input box of the scan code will appear only after clicking the first three columns. The last column is the device name, which is not currently set.

<font color=#999AAA >Note: Currently thetool displays a page with 2000 lines, and the total number of pages is limited to 25 pages. When the program starts, historical data will to be loaded. If the data is too large, the program will prolong the loading time.</font>


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-1.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-1.png"></a>



### **Input Code**

Double-click the first 3 columns to pop up a message box. If you click on the first column, the message will be "请扫描模组二维码(Please scan QR code of the module)". If you click the second or third column and the first column is not empty, the message will be "请扫描设备二维码(Please scan QR code of the device)"; if you click the second or third column and the first column is empty, the message will be "请先点击设备DeviceKey列进行扫描(Please first Click the device DeviceKey column to scan)". If currently no input is required, you can click the "**退出(Exit)**" button to exit.


<font color=#999AAA >Note: When you need to scan the code, please make sure that the input box is displayed in an editable state (that is, the cursor is flashing).</font>


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-2.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-2.png"></a>


If the input is wrong or the scan code is wrong:


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-3.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-3.png"></a>



### **File Operation - Import**

When the file is imported, the data is not specifically detected, but its overall format is detected.

**Step 1：** 

Click "**文件(File)**" in the upper left corner, and then click "**导入(Import)**".

<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-4.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-4.png"></a>



**Step 2：**

If the current record is not empty, a pop-up window will prompt whether to cover the current record; otherwise, skip to ***Step 3***.


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-5.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-5.png"></a>


**Step 3：**

A pop-up window will display the .csv file under Windows, please select and import.


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-6.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-6.png"></a>



**Step 4：**

When the file verification is 100% successful, the progress bar of writing the file can reach 100%.


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-8.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-8.png"></a>




### **File Operation - Export**


Click "**文件(File)**" in the upper left corner, and then click "导出(Export)".    Enter the exported file name, and then click the save button.

<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-9.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-9.png"></a>

If the pop-up window as shown in the following figure is displayed, which indicates that the file is saved successfully.


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-10.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-10.png"></a>




### **File Operation - Clear**


After clicking "**文件(File)**" in the upper left corner, click "清除(Clear)".

<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-11.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-11.png"></a>

If the currently selected data is not empty, as shown in the following figure. If you click "**Yes**", all current data will be cleared, and if you click "**No**" or close the window, the operation of clearing all the data will be canceled.

<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-12.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-12.png"></a>




### **Delete Data**

Select the table row to be deleted (multiple selections are supported), right-click to pop up a menu bar, and then click "**删除行“Delete**" to delete the data.


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-13.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-13.png"></a>




### **Help**

Click "**帮助(Help)**" in the upper left corner, the user manual will pop up.


<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-14.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-14.png"></a>

<a data-fancybox title="img" href="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-15.png"><img src="/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-15.png"></a>