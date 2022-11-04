# Android SDK使用指导
## **IoT Android SDK描述**

开发者中心的Android SDK（以下简称SDK）封装了手机App与智能硬件以及云端的通讯过程。主要包括用户注册、用户登录、设备配网、设备绑定、设备状态读取、设备控制、设备分组等功能。

使用SDK可以帮助开发者快速完成APP开发，开发者只需关注UI呈现效果，无需处理复杂的底层协议解析与组装。

## **集成准备**

### **1. 注册账号**

在使用SDK前，您需要注册平台账号，详细请看“[平台注册](/quickStart/register.html)”。

### **2. 获取userDomain和userDomainSecret**

在开发者中心上创建一个App，获取userDomain和userDomainSecret。

详细请看“[App开发](/guide/app/dev.html)”。

### **3. 导入SDK,添加依赖**

将 android_iot_sdk.jar 放入app下面的libs文件夹中，配置app下面的build.gradle

<a data-fancybox title="img" href="/appDevelop/sdk_pic1.png">![img](/appDevelop/sdk_pic1.png)</a>

### **4. 添加日志记录功能**

将 quec-log.aar 放入app下面的libs文件夹中

<a data-fancybox title="img" href="/appDevelop/ttpic.png">![img](/appDevelop/ttpic.png)</a>

### **开启日志和关闭日志功能**

1. 在一进入应用的 Application onCreate方法里面或在进入App应用的主页面如 **MainActivity**的onCreate方法调用**LogService.get(ILogService.class).startLog(this)**。
   

2. 在退出APP应用，比如应用主页面 **MainActivity** 的 onDestroy 中调用 **LogService.get(ILogService.class).closeLog();**

### **5. 添加依赖，配置权限**

项目project的build.gradle下添加依赖:

```text
repositories {
        google()
        mavenCentral()
        maven { url 'https://www.jitpack.io' }
        maven { url "https://oss.sonatype.org/content/repositories/snapshots" }
    }
```

app 下的build.gradle的 dependencies中添加依赖:

```text
api 'com.google.code.gson:gson:2.8.6'
    api "com.squareup.okhttp3:okhttp:4.9.3"
    api "com.polidea.rxandroidble2:rxandroidble:1.12.1"
    api 'io.reactivex.rxjava2:rxjava:2.2.19'
    api 'io.reactivex.rxjava2:rxandroid:2.1.1'
    api  'com.jakewharton.rx2:replaying-share:2.2.0'
    api 'org.greenrobot:eventbus:3.0.0'
    api 'com.neovisionaries:nv-websocket-client:2.14'
```

Androidmanifest.xml 中 配置网络、蓝牙、位置、文件读写权限:

```text
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```
## **IoT SDK流程简介**

<a data-fancybox title="img" href="/appDevelop/picture_3.png">![img](/appDevelop/picture_3.png)</a>

## **IoT Android SDK API简介**

具体API用法可以参考 [demo](https://github.com/thridparty-cloud2/quecloud-iot-android-sdk-demo)。
