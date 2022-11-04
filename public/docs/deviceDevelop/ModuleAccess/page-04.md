# 功能开关

以下宏开关位于kernel\quos_config.h，控制是否使用QuecThing SDK中的服务，0表示不使用，1表示启用该QuecThing SDK服务。  

|SDK服务宏名称 |SDK服务宏说明  
|---|---
|SDK_ENABLE_TLS         |TLS链路加解密功能  
|SDK_ENABLE_HTTP         |HTTP连接功能 
|SDK_ENABLE_SHA1        |Sha128加解密功能  
|SDK_ENABLE_SHA256         |Sha256加解密功能  
|SDK_ENABLE_MD5         |MD5加解密功能  
|SDK_ENABLE_BASE64         |BASE64加解密  
|SDK_ENABLE_AES         |AES加解密  
|SDK_ENABLE_EVENT         |系统事件管理功能  
|SDK_ENABLE_SIGNAL         |系统信号管理功能  
|SDK_ENABLE_TIMER       |系统定时器功能   
|SDK_ENABLE_DATASAFE         |掉电保存数据安全功能  
|SDK_ENABLE_JSON         |JSON功能  
|SDK_ENABLE_TWLL         |链表管理功能