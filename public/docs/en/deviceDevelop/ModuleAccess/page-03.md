# QuecThing SDK Porting Procedure


<a data-fancybox title="img" href="/en/deviceDevelop/ModuleAccess/resource/picture-01.png">![img](/en/deviceDevelop/ModuleAccess/resource/picture-01.png)</a>

* **Step 1：** Create a folder named QuecSDK in the project source code of the module, and copy the four directories and their files described in [SDK Directory](/en/deviceDevelop/ModuleAccess/page-02.md) to the QuecSDK folder.
* **Step 2：** Import the QuecThing SDK to the project source code by following the pattern of adding new files to modules. If the third-party library already exists in the module, you do not need to import it again to reduce the amount of code.
* **Step 3：** Create a new task and call __Ql_iotInit()__ to initialize QuecThing SDK.
* **Step 4：** According to adaptation layer API description, implement the API defined by the adaptation layer by using the existing features of the module. See [Adaption Layer API Description](/en/deviceDevelop/ModuleAccess/api/page-01.md) for details.
* **Step 5：** For the AT command solution, bind the AT commands and corresponding API in cloud\at file according to the AT command architecture of the module when porting SDK. See [AT Command Parsing API](/en/deviceDevelop/ModuleAccess/api/page-02.md) for details.
* **Step 6：** When the development is finished, a strict and detailed self-test is required.