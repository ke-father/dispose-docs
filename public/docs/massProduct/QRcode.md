# 设备二维码

若是蜂窝类产品，且有配套的App给终端消费者使用，需要生成设备二维码用于绑定设备。

开发者中心为产线批量生产和管理设备设备二维码提供了便捷的管理流程，主要包括三个步骤：二维码生成、二维码与设备绑定、绑定信息导入。

## **使用移远格式设备二维码**

使用移远解决方案App时，请使用移远格式设备二维码。

### **二维码生成**

在“产品开发→设备调试” 或 “设备管理->设备运维”页面中，您可以通过“生成SN”功能。批量获取由开发者中心颁发的SN与设备二维码。

<a data-fancybox title="img" href="/massProduct/image2022-3-14_15-17-35.png?version=1&modificationDate=1647241633000&api=v2">![img](/massProduct/image2022-3-14_15-17-35.png?version=1&modificationDate=1647241633000&api=v2)</a>

点击 “**生成SN**” ，页面将弹出批量生成SN弹窗，您可以按照实际需要填写SN数量，如下图所示：

<a data-fancybox title="img" href="/massProduct/image2022-3-14_15-17-59.png?version=1&modificationDate=1647241656000&api=v2">![img](/massProduct/image2022-3-14_15-17-59.png?version=1&modificationDate=1647241656000&api=v2)</a>

平台生成后，将把SN列表与设备二维码图片，以压缩包的方式供用户下载，该设备二维码与模组IMEI完成绑定后，App用户即可通过该设备二维码绑定控制设备。

<a data-fancybox title="img" href="/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2">![img](/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2)</a>

### **二维码与设备绑定**

二维码生成后，提供给生产部门，产线生产时可通过移远SN&IMEI绑定工具，使用扫码枪扫模组上的IMEI（DK）与设备二维码（PK+SN）进行绑定，记录模组IMEI（DK）与设备二维码（SN）的关联关系，生成并导出关系文件。

<a data-fancybox title="img" href="/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2">![img](/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2)</a>

### **绑定信息导入**

通过“添加设备->批量导入”功能把模组IMEI与设备二维码关系文件上传到云平台，云平台将记录该关联关系，如下图所示:

<a data-fancybox title="img" href="/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

导入成功后，App用户可通过扫描设备二维码对设备进行绑定操作。

## **使用自定义格式设备二维码**

当自主研发App时，可自定义设备二维码数据格式，但同样需要把模组IMEI与设备二维码（SN）关系上传到云端。

### **二维码生成**

设备生产商可按实际使用场景需要制作设备二维码，二维码中需带有PK与SN信息，用于App绑定设备使用。

### **二维码与设备绑定**

设备在产线生产时，需记录模组IMEI（DK）与设备二维码（SN）的关联关系，并按设备导入模板整理关系文件。

设备导入模板可在“添加设备→模板下载”中获取，如下图所示：

<a data-fancybox title="img" href="/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2">![img](/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2)</a>

### **绑定信息导入**

通过“添加设备->批量导入”功能把模组IMEI与设备二维码关系文件上传到云平台，云平台将记录该关联关系，如下图所示:

<a data-fancybox title="img" href="/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

导入成功后，App用户可通过扫描设备二维码对设备进行绑定操作。

