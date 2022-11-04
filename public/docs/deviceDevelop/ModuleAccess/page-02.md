# SDK架构

本章节将重点介绍 QuecThing SDK 目录中的 cloud、driverLayer、kernel、thirdLib 四个目录，其他目录无需关注。

* **cloud**  
    该目录存放用于实现接入平台的相关代码，包括 MQTT 接入方式和模块与平台通信协议实现。QuecThing SDK 同时提供 API 用于封装 AT 命令实现 AT 命令方案接入平台。详情请参考[AT命令封装模块相关API](/deviceDevelop/ModuleAccess/api/page-02.md)。

* **driverLayer**  
    该目录存放用于实现模块适配的相关代码。该目录下所有的 API 仅定义了统一接口格式，需开发者根据实际模块进行适配，详情请参考[适配层API说明](/deviceDevelop/ModuleAccess/api/page-01.md)。

* **kernel**  
    QuecThing SDK 基础库，该目录下的文件属于中间件，模块适配时，开发者请勿修改该目录下的文件。

* **thirdLib**  
    该目录存放稳定的第三方库，原则上不得对其做修改。在移植 QuecThing SDK 的过程中，若模块本身已自带第三方库，则无需引入该目录以节省代码量；若模块自带的第三方库缺漏部分 API 时，须在driverLayer 下合入 patch，不可直接对模块原有代码进行修改。