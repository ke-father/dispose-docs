# 移植步骤


<a data-fancybox title="img" href="/deviceDevelop/ModuleAccess/resource/picture-01.png">![img](/deviceDevelop/ModuleAccess/resource/picture-01.png)</a>

* **步骤一：** 在模块稳定版本的工程源码中，新建文件夹QuecSDK，然后将[SDK架构](/deviceDevelop/ModuleAccess/page-02.md)描述的所有文件夹及文件拷贝至该QuecSDK文件夹下。
* **步骤二：** 按照模块添加新文件的模式将QuecThing SDK引入工程源码中。对于第三方库，若在模块中已经存在，可不再引入，以减少代码量。
* **步骤三：** 创建新Task，调用 __Ql_iotInit()__ 完成QuecThing SDK的初始化。
* **步骤四：** 根据适配层API说明要求，利用模块已有功能实现适配层定义的API，详情请参考[适配层API说明](/deviceDevelop/ModuleAccess/api/page-01.md)。
* **步骤五：** 对于AT标准方案，移植时需要根据模块自身的AT命令架构，实现AT命令与cloud\at文件里对应的API做绑定关系。详情请参考[AT命令封装模块相关API](/deviceDevelop/ModuleAccess/api/page-02.md)。
* **步骤六：** 开发工作完成，需进行严格及详细的自测。