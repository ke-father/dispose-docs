# SDK Directory

This chapter focuses on \cloud, \driverLayer, \kernel, and \thirdLib directories in QuecThing SDK. You do not need to pay attention to other directories.

* **cloud**  
  This directory stores the codes used for realizing accessing Developer Center, including MQTT access method and communication protocol. The QuecThing SDK also provides API for encapsulating AT commands to realize the solution of accessing to and communicating with Developer Center with AT commands. See [AT Command Parsing API](/en/deviceDevelop/ModuleAccess/api/page-02.md) for details.

* **driverLayer**  
  This directory stores relevant codes for realizing module adaptation. All APIs in this directory are only defined in a unified interface format, which requires developers to adapt according to actual modules. See [Adaption Layer API Description](/en/deviceDevelop/ModuleAccess/api/page-01.md) for details.

* **kernel**  
  QuecThing SDK Basic Library, in which the files are middleware. During module adaptation, developers cannot modify the files in this directory.

* **thirdLib**  
  This directory stores a stable third-party library, which cannot be modified in principle. In the process of porting QuecThing SDK, if the module has its own third-party library, it is not necessary to import this directory to save the memory size of the specific module; If the third-party library owned by the module cannot cover all APIs, add this directory to the \driverLayer directory as patch and do not directly modify the original codes of the module.