# Android SDK User Guide

## **IoT Android SDK Description**

The Android SDK (hereinafter referred to as SDK) of Developer Center encapsulates the communication process between the mobile App, the smart hardware and the cloud. It includes features such as user registration, user login, device network provisioning, device binding, device status reading, device control, and device grouping.

The SDK can help developers quickly complete App development so that developers only need to pay attention to the UI without analyzing and assembling complex underlying protocols.

## **Integration Preparation**

### **1. Register an Account**

Before using the SDK, you need to register an account on Developer Center. See “[Developer Center Registration](/en/quickStart/register.html)” for details.

### **2. Obtain userDomain and userDomainSecret**

Create an App on Developer Center to obtain userDomain and userDomainSecret.

See “[App Development](/en/guide/app/dev.html)” for details.

### **3. Import SDK and Add Dependencies**

Save android_iot_sdk.jar to the libs folder under the app folder, and configure build.gradle under the app folder. 

<a data-fancybox title="img" href="/en/appDevelop/sdk_pic1.png">![img](/en/appDevelop/sdk_pic1.png)</a>

### **4. Add Logging Feature**

Save quec-log.aar to the libs folder under the app folder.

<a data-fancybox title="img" href="/en/appDevelop/ttpic.png">![img](/en/appDevelop/ttpic.png)</a>

### **Enable and Disable Logging Feature**

1. Call **LogService.get(ILogService.class).startLog(this)** in the Application onCreate method after entering the App or in the homepage of the App, such as the onCreate method of **MainActivity**.

2. Call **LogService.get(ILogService.class).closeLog();** in onDestroy of **MainActivity** when exiting the App, such as the homepage of the App.

### **5. Add Dependencies and Configure Permissions**

Add dependencies under build.gradle of project:

```text
repositories {
        google()
        mavenCentral()
        maven { url 'https://www.jitpack.io' }
        maven { url "https://oss.sonatype.org/content/repositories/snapshots" }
    }
```

Add dependencies in dependencies of build.gradle under the app folder:

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

Configure network, bluetooth, location, file read and write permissions in Androidmanifest.xml:

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

## **IoT SDK Process Introduction**

<a data-fancybox title="img" href="/en/appDevelop/picture_3.png">![img](/en/appDevelop/picture_3.png)</a>

## **IoT Android SDK API Introduction**

See AndroidSDKDemo [example](https://github.com/thridparty-cloud2/quecloud-iot-android-sdk-demo) for specific API usage, 

