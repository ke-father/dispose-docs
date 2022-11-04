# 用户说明

## **程序介绍**
### **引言**
MCU仿真工具是一款模拟主控MCU与移远模组间通讯的仿真助手，拥有连接云平台、AT指令交互、物模型数据交互、透传数据交互、OTA交互以及网关子设备数据交互等强大功能。调试日志功能和日志分析功能能有效地提高用户对模组或APP的功能认知，方便了用户对模组或APP能力的验证与调试从而提高了对整体方案的开发验收效率。
### **整体框架介绍**
当前工具名称为移远MCU仿真工具，版本号为2.0.0。
* **输出界面**  
日志输出界面为工具连接上SDK或模组后，输出的日志并显示在界面上，以便用户查看相关的信息。   
日志分析界面是对日志输出界面中的AT指令进行解析，以帮助用户快速理解指令的格式与意义。  
日志输出设置目前存在Hex和关闭窗口显示两个功能。Hex按钮主要作用为输出日志中16进制格式的数据；
* **功能栏**  
功能栏目前提供调试、配置、物模型、透传、OTA、信息、局域网与网关子设备八项功能。
* **状态栏**  
状态栏可显示用户部分操作及操作结果的信息显示，主要为不影响程序整体运行的操作信息，若为重要信息，则会通过弹窗提示。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-1.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-1.png"></a>


## **调试功能界面简介**
切换到“调试”页面。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-2.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-2.png"></a>


### **日志窗口**
在使用过程中如需查看更多，可在方框底部往下拉控件则可拉伸显示。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-3.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-3.png"></a>


#### **日志显示**

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-4.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-4.png"></a>


**\<TX>：** 串口工具发送的数据。  
**\<RX>：** 串口工具接收到的数据。  
**时间戳显示：** 可通过“设备调试”界面中的“时间戳显示”进行打开或者关闭。  
**Hex：** 可将接收消息的16进制部分显示出来  
**关闭窗口显示：** 可关闭窗口显示，如sota操作等无需关注时，可使用此功能使得之前的命令不被覆盖，目前窗口只显示最近1000行的记录

#### **日志解析**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-5.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-5.png"></a>


通过在日志显示窗口点击对应的日志，会解析该日志AT指令的数据。
目前仅支持连接云平台相关的AT指令进行解析，其他AT指令不作处理。

#### **特别提示**
若调试途中需要了解日志显示窗口的内容，可将鼠标移至日志显示窗口的下边框，按住鼠标左键往下拉，恢复则往上拉。

### **串口配置**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-6.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-6.png"></a>


选择对应的串口端口、波特率、数据位、停止位等参数。

**打开串口：** 串口被打开后，将无法修改串口配置，需要修改请先关闭串口。  
**关闭串口：** 若当前处于连接开发者中心的状态时，将会断开连接。

### **TCP配置**
#### **选择对应的远程IP和端口号以及本地的IP和端口号**
限制远程IP的输入，仅可输入数字和’.’，同时需要符合IP格式，可点击右侧的’x’删除IP。
#### **打开TCP**
**重连：** 该功能被选中后，若tcp连接不成功，则会重新尝试连接3次。

#### **关闭TCP**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-7.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-7.png"></a>


### **运行配置**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-8.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-8.png"></a>


#### **连接模式**
选择启动模组云平台功能的连接模式。
**手动注册：** 手动发起连接IOT。
**自动注册：** 联网后主动连接IOT。
#### **当前状态**
云平当前的连接状态：
* 未初始化
* 已初始化
* 正在认证
* 认证成功
* 认证失败
* 正在注册
* 注册成功
* 等待订阅
* 注册失败
* 已订阅
* 数据可发送
* 订阅失败
* 正在注销
* 注销成功
* 注销失败

**启动连接：** 需要先打开串口，将使用选中的产品配置信息连接云平台。  
**停止连接：** 需要先打开串口，将断开云平台连接。

### **日志配置**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-9.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-9.png"></a>


#### **时间戳显示**
打开显示后，串口收发日志中会添加时间戳显示。
#### **清空日志**
点击按钮后将清空当前日志显示窗口的日志。
#### **自动保存日志**
先点击“选择文件”按钮，再打开“自动保存”选项，后续日志显示窗口的数据都会自动保存到选择的文件中。
#### **调试的等级设置**
等级设置为debug、info、warning、errno和dump五类，完成对debug日志输出控制。dmp文件为每次启动程序新建或覆盖，不保存前面的记录。
#### **清空调试日志**
点击按钮后将清空debug日志。
### **AT指令发送**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-10.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-10.png"></a>


用于发送AT指令。  
AT输入框存在历史记录。  
可通过输入部分通过提示框补全。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-11.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-11.png"></a>


## **配置功能界面简介**
切换到“配置”页面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-12.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-12.png"></a>


### **添加产品配置信息**

切换到配置页面，点击按钮“+”
#### **在弹出的新窗口中按需要输入产品配置信息**
产品配置信息页面，数据类型为透传数据


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-13.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-13.png"></a>


<font color=#999AAA >提示：配置相应的PK和PS。</font>
产品配置信息页面，数据类型为物模型数据


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-14.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-14.png"></a>

<font color=#999AAA >提示：导入dmp或自定义的json文件，如json文件超过1M或者不合法，会出现错误。</font>
点击按钮“OK”，保存产品配置信息，并如下图所示，显示在产品信息中。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-15.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-15.png"></a>


### **删除产品配置信息**
1. 切换到配置页面，通过光标选中需要删除的配置选项
2. 点击按钮“-”，删除选中的配置选项
3. 弹出弹窗提示：“是否确定删除配置文件” 


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-16.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-16.png"></a>


4. 点击yes 删除，点击no则取消

### **切换产品配置信息**
切换到配置页面，通过光标选中需要使用的配置选项


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-17.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-17.png"></a>

**连接服务器支持两种协议：** MQTT协议和lwM2M协议   
**服务器环境：** 生产环境（mqtt）只支持 mqtt ; 生产环境（coap）只支持 mqtt ; 生产环境（http）只支持 http ; 其他请通过自定义添加  
**lifeTime：** 范围为（1 - 65535）  
**contextId：** 范围为（0 - 99）  
**物模型格式 ：** TTLV和JSON。  
**加密模式：** 是否在MQTT或HTTP基础上增加TLS加密服务。  
**DKDS:** 更改设备IMEI和设备密钥。  


## **物模型功能界面简介**
切换到“物模型”页面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-18.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-18.png"></a>


### **物模型列表**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-19.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-19.png"></a>


1. 物模型列表中包含3个大类，属性类、服务类以及事件类。
2. 根据用户输入的产品配置信息生成对应的物模型列表，如果选择的数据通信方式是透传或者导入的json文件异常，则列表为空
### **发送**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-20.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-20.png"></a>



#### **模式**
* 0(发送一次)
* 1(发送多次，保证服务器至多收到一次)
* 2(发送多次，保证服务器至少收到一次)
#### **发送物模型数据**
通过选择右侧物模型列表中数据进行物模型数据发送，支持单选/多选/全选。可点击最右上角的按钮选择“直接发送”/“透传发送”。
* **单选：** 直接通过光标选中单个物模型ID
* **多选：** 按住键盘“CRTL”+需要发送的多个物模型ID
* **全选：** 按住键盘“CRTL”+“A”  


#### **发送应答数据**
通过选择右侧物模型列表中数据进行应答数据发送，支持单选/多选/全选。  
* **PkgID：** 云平台读取物模型ID的最新PkgID，也可以手动修改输入
* **单选：** 直接通过光标选中单个物模型ID
* **多选：** 按住键盘“CRTL”+需要发送的多个物模型ID
* **全选：** 按住键盘“CRTL”+“A”
#### **自动应答**
打开该选项后，云平台读取物模型ID后，会自动应答对应的物模型ID到云平台
### **读取**
仅当产品配置信息中缓存模式选择为“开启缓存模式”时有效，选择为“关闭缓存模式”时，接收到云平台数据会自动更新到右侧物模型列表。可点击最右上角的按钮选择“读取物模型数据”/“获取读取的最大值”。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-21.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-21.png"></a>


* **读取物模型数据：** 根据设置的读取字节数进行物模型数据读取，并把读取到的数据更新到右侧的物模型列表。
* **剩余字节数：** 当前数据组剩下的字节数。
* **剩余数据组数：** 剩下的缓存数据组数。


### **定时上报**
开启该选项后，工具将按照设定的上报频率，和右侧物模型ID列表中选中的ID进行定时上报。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-22.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-22.png"></a>


* **定时上报频率：** 单位毫秒，最小上报间隔：1ms，最大为600 s
## **透传功能界面简介**
切换到“透传”页面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-23.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-23.png"></a>


### **发送**
鼠标移动到输入框，提示最大只可输入4096个字节，同时内部也限制最大为4096字节输入。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-24.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-24.png"></a>


* **HEX发送：** 该选项可以选择是上报字符串还是16进制字节流。
* **模式（Qos）：** 默认为0，更多可选择1、2。
* **发送方式：** 可通过右下角的“﹀”选择“透传发送”/“直接发送”。

### **读取**
仅当产品配置信息中缓存模式选择为“开启缓存模式”时有效，选择为“关闭缓存模式”时，接收到云平台数据会自动更新到透传数据显示窗口。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-25.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-25.png"></a>

 
* **读取字节数：** 根据设置的读取字节数进行透传数据读取，并把读取到的数据更新到上方的透传数据显示窗口。
* **剩余字节数：** 当前数据组剩下的字节数。
* **剩余数据组数：** 剩下的缓存数据组数。
* **发送方式：** 可通过右下角的“﹀”选择“读取数据”/“获取读取数据的最大值”。
## **OTA功能界面简介**
切换到“OTA”功能界面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-26.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-26.png"></a>


### **MQTT**
#### **OTA交互**
在接收到云平台下发的升级任务时用于MQTT-OTA确认。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-27.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-27.png"></a>



1. OTA请求  
点击OTA请求，可获取当前平台匹配的计划。<font color=#999AAA >提示：点击前面的“额外信息请求”的复选框则可在OTA请求时附带sha256的固件校验信息。</font>
2. 拒绝升级  
拒绝当前下发的升级任务。
3. 确认升级  
接收当前下发的升级任务。
4. 下载下一块数据  
在MQTT-SOTA时，MQTT-SOTA固件过大被分包下载时，当前分包接收完成后命令模组开始下载下一包数据。
5. 上报updating状态  
在MQTT-SOTA时。固件下载完成并校验成功，进行固件更新状态时上报云平台更新状态。
6. MQTT-SOTA分片数据读取  


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-28.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-28.png"></a>


* **起始地址：** 读取的文件偏移地址。
* **读取长度：** 读取的文件长度。
* **存放路径：** 用于选择SOTA固件读取数据中的存放路径。
* **自动：** 该选项被打开后，只需要点击一次“读取数据”，后续将自动完成下载流程并校验MD5。
#### **OTA状态**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-29.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-29.png"></a>


* **状态：** 当前MQTT-OTA状态。
* **当前块地址：** 模组当前下载的固件块起始地址。
* **当前块大小：** 模组当前下载的固件块大小。
* **文件大小：** 模组当前下载的文件大小。
* **MD5：** 模组当前下载的文件MD5。
### **HTTP-OTA**
OTA请求需要配置电量、通信版本当前为默认，URL和产品信息，再点击OTA请求。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-31.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-31.png"></a>



### **配置MCU版本号**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-32.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-32.png"></a>


1. **获取列表**  
获取模组当前保存的所有MCU编号及版本号，并更新到下方列表中。
2. **获取版本号**  
需要通过光标选中下方的MCU编号，再点击“获取版本号”，会获取到的版本号更新到下方的列表中。
3. **设置版本号**  
需要通过光标选中下方的MCU编号，并修改列表中对应的MCU版本号，在点击“设置版本号”，会把选中的MCU编号和版本号更新到模组中。
4. **增加MCU**  
点击按钮“+”，可以在列表中新增一个MCU编号和MCU版本号，并编辑。
5. **删除MCU**  
在列表中选中一个MCU，并点击按钮“-”，可以把选中的MCU从列表中删除，同时也删除了模组内部对应的MCU。
## **信息功能界面简介**
切换到“信息”功能界面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-33.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-33.png"></a>


### **获取信息**
点击“获取信息”按钮后，会把获取到的模组信息在右侧“模组信息”列表中显示。
### **上报平台**
点击“上报平台”按钮后，会命令模组把当前模组信息上报到云平台。
### **定位信息**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-34.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-34.png"></a>

#### **测试模块内置的定位指令**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-35.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-35.png"></a>


调试窗口显示信息
#### **查询模块内置的定位类型**
获取内置定位信息栏将显示可支持的定位类型。

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-36.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-36.png"></a>



#### **获取模块内置的定位数据**
点击类型中的项，再点击获取模块内置的定位数据，则数据列将显示相应信息


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-37.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-37.png"></a>


再点击数据栏，将弹出下面的窗口，显示具体内容。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-38.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-38.png"></a>


#### **上报模块内置的定位数据**
点击类型中的项，再点击“上报模块内置的定位数据”按钮完成上报。

#### **测试模块外置的定位指令**
#### **+**
点击+，将在 获取外置定位信息栏新增一栏，并点击类型栏进行编辑


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-39.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-39.png"></a>



#### **-**
选中一到多栏待删除类型，再点击-，类型栏将删除相应栏。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-40.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-40.png"></a>


#### **设置模块外置的定位类型**
点击类型，再点击设置模块外置的定位类型，将发送信息给开发者中心，需已连接开发者中心。
## **局域网功能界面简介**
切换到“局域网”功能界面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-41.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-41.png"></a>


### **功能选择**
可选择 关联IP/WIFI配置/清除默认设置/bindcode/SDK平台信息配置重置

<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-42.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-42.png"></a>



### **关联AP**
功能选择选择“关联AP”，信息设置填写AP名称和密钥，再点击确认进行连接。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-43.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-43.png"></a>


### **WIFI配置**
功能选择选择“WIFI配置”，信息设置填写WIFI名称和密钥，再点击确认进行连接。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-44.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-44.png"></a>


### **清除默认设置**
功能选择选择“清除默认设置”，再点击确认即可发送命令。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-45.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-45.png"></a>



### **蓝牙功能**
点击“蓝牙功能”前的复选框，即可发送蓝牙连接，再点击则为关闭。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-46.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-46.png"></a>


## **网关子设备功能界面简介**
切换到“网关子设备”功能界面。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-47.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-47.png"></a>


### **添加设备**
首次添加子设备时，若子设备未拥有DS，DS项可为空。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-48.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-48.png"></a>


### **删除设备**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-49.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-49.png"></a>


### **搜索设备**


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-50.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-50.png"></a>


### **连接网关**
正确连接网关后，如图所示的结果，心跳开关和状态都将置为true。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-51.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-51.png"></a>


### **设备交互**
子设备交互界面包含三类信息：子设备信息：子设备PK、子设备DK以及子设备状态；子设备透传数据交互；子设备物模型数据交互。子设备透传数据和物模型数据交互界面与第四-五章节保持一致。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-52.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-52.png"></a>



## **用户简易使用教程**
步骤一：本教程将以TCP连接为例，用户首次打开程序时，如图所示，点击端口配置中的TCP选项，根据本机实际情况选择IP和端口号配置，配置完成后点击“打开TCP”按钮。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-53.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-53.png"></a>


若连接成功则“打开TCP”按钮的文本将改变为“关闭TCP”。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-54.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-54.png"></a>


步骤二：点击配置界面，如图所示，点击功能配置界面的右上角的“+”按钮添加产品信息。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-55.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-55.png"></a>


后续添加产品的操作请参考第二章产品配置的操作说明。<br>

步骤三：如图所示，点击产品后点击右侧的设置，日志输出窗口将输出“OK”的结果。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-56.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-56.png"></a>


步骤四：返回调试功能界面，点击启动连接，即可出现如下图所示的结果。


<a data-fancybox title="img" href="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-57.png"><img src="/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-57.png"></a>

步骤五：当前设备已正常连接至平台，后续操作如：物模型交互、透传数据交互、AT指令交互、定位信息及产品信息交互均可通过相应的配置界面进行使用。
