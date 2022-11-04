# 数据储存相关API

## **数据存储**
数据存储对应的API头文件为qhal_Flashopt.h。  

针对文件操作，本文档所示函数均需实现。因为QuecThing SDK需要分配内存，才能实现对模块的运行状态、系统信息以及OTA固件等的保存功能。  
### **数据存储函数概览**
> 表4：数据存储函数概览  

|函数	|说明  
|---|---  
|[Qhal_fileOpen()](#Qhal_fileOpen)	    |打开文件
|[Qhal_fileWrite()](#Qhal_fileWrite)	    |写文件
|[Qhal_fileRead()](#Qhal_fileRead)	    |读取文件
|[Qhal_fileClose()](#Qhal_fileClose)	    |关闭文件
|[Qhal_fileErase()](#Qhal_fileErase)	    |删除文件

<span id="Qhal_fileOpen">  </span>
### <font color=#A52A2A  >__Qhal_fileOpen__</font>  
该函数用于打开文件。

__函数原型__  
```c
pointer_t Qhal_fileOpen(const char *filename, qbool onlyRead);
```  
* __输入参数__

    * __const char *__ __`filename`__ : 文件名，包涵文件所在路径。
    * __qbool__ __`onlyRead`__ : 文件打开模式
                            </br>TRUE	只读模式。
                            </br>FALSE	可读可写模式。
    
* __返回值__  

    * 文件操作句柄。		 函数执行成功  
    * SOCKET_FD_INVALID(-1) 函数执行失败  

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 打开文件
 * 输入 @param filename 文件路径以及文件名称
 * 输入 @param onlyRead 文件打开方式；TRUE：只读方式打开，FALSE：以读写方式打开
 * 输出 @retval 文件打开句柄；打开失败返回-1
 * 备注 @remark 必须实现
 */
pointer_t FUNCTION_ATTR_ROM Qhal_fileOpen(const char *filename, qbool onlyRead)
{
    FILE *fp;
    if(NULL == filename || 0 == HAL_STRLEN(filename))
    {
        Quos_logPrintf(HAL_FLASH,LL_ERR,"filename invalid");
        return SOCKET_FD_INVALID;
    }
    if(onlyRead)
    {
        fp = fopen((const char*)filename,"rb");
        if(fp == NULL)
        {
            Quos_logPrintf(HAL_FLASH,LL_ERR,"open %s",filename);
            return SOCKET_FD_INVALID;
        }
    }
    else
    {
        fp = fopen((const char*)filename,"rb+");
        if(fp == NULL)
        {
            fp = fopen((const char*)filename,"wb+");
            if(fp == NULL)
            {
                Quos_logPrintf(HAL_FLASH,LL_ERR,"open %s fail",filename);
                return SOCKET_FD_INVALID;
            }
        }
    }
    return (pointer_t)fp;
}
```

<span id="Qhal_fileWrite">  </span>
### <font color=#A52A2A  >__Qhal_fileWrite__</font>   
该函数用于写文件。  

__函数原型__  
```c
qbool Qhal_fileWrite(pointer_t sockFd, quint32_t offset, void *buf, quint32_t bufLen);
```  
* __输入参数__  

    * __pointer_t__ __`sockFd`__ : 文件句柄。
    * __quint32_t__ __`offset`__ : 写文件起始偏移量。
    * __void *__ __`buf`__ : 待写入数据的字节长度。
    * __quint32_t__ __`bufLen`__ : 待写入数据的字节长度。
   
* __返回值__  

    * TRUE	函数执行成功  
    * FALSE	函数执行失败  

__实现要求__  
必须实现。由于部分平台使用lseek功能比较耗时，做文件偏移时先判断当前位置，不一致再调用lseek相关接口。  

__适配示例代码__

```c
/**
 * 功能 @brief 写数据到文件中
 * 输入 @param sockFd 文件句柄
 * 输入 @param offset 相对于文件开始偏移位置(可先判断文件指针位置是否与offset相同，若不相同则再移动文件指针)
 * 输入 @param buf 待写入数据内容
 * 输入 @param bufLen 数据长度
 * 输出 @retval 函数是否执行成功(是否将所有数据写到文件中)
 * 备注 @remark 必须实现
 */
qbool FUNCTION_ATTR_ROM Qhal_fileWrite(pointer_t sockFd, quint32_t offset, void *buf, quint32_t bufLen)
{
    FILE *fp = (FILE *)sockFd;
    if((quint32_t)ftell(fp)!=offset)
    {
        fseek(fp,offset,SEEK_SET);
    }
    
    if(bufLen != fwrite(buf,1,bufLen,fp))
    {
        Quos_logPrintf(HAL_FLASH,LL_ERR,"len is err");
        return FALSE;
    }
    Quos_logPrintf(HAL_FLASH,LL_DBG,"success");    
    return TRUE;
}
```

<span id="Qhal_fileRead">  </span>
### <font color=#A52A2A  >__Qhal_fileRead__</font>  
该函数用于读取文件。 

__函数原型__  
```c
quint32_t Qhal_fileRead(pointer_t sockFd, quint32_t offset, void *buf, quint32_t bufLen);
```  
* __输入参数__  

    * __pointer_t__ __`sockFd`__ : 文件句柄。
    * __quint32_t__ __`offset`__ : 读文件起始偏移量。
    * __quint32_t__ __`bufLen`__ : 待读取数据的字节长度。

* __输出参数__ 

    * __void *__ __`buf`__ : 待读取数据的存放缓存区。

* __返回值__  
    * 实际读取到的文件数据长度。  

__实现要求__  
必须实现。由于部分平台使用lseek功能比较耗时，做文件偏移时先判断当前位置，不一致再调用lseek相关接口。 

__适配示例代码__

```c
/**
 * 功能 @brief 从文件中读取数据
 * 输入 @param sockFd 文件句柄
 * 输入 @param offset 相对于文件开始偏移位置(可先判断文件指针位置是否与offset相同，若不相同则再移动文件指针)
 * 输入 @param buf 读取数据存放缓冲区
 * 输入 @param bufLen 缓冲区长度
 * 输出 @retval 实际从文件中读取到数据大小
 * 备注 @remark 必须实现
 */
quint32_t FUNCTION_ATTR_ROM Qhal_fileRead(pointer_t sockFd, quint32_t offset, void *buf, quint32_t bufLen)
{
    FILE *fp = (FILE *)sockFd;
    if((quint32_t)ftell(fp)!=offset)
    {
        fseek(fp,offset,SEEK_SET);
    }
    quint32_t rLen =  fread(buf,1,bufLen,fp);  
    if(rLen <=0)
    {
        Quos_logPrintf(HAL_FLASH,LL_ERR,"len is err");
        return 0;
    }
    else
    {
        Quos_logHexDump(HAL_FLASH,LL_DUMP,"buf",buf,rLen);
        return rLen;
    }
}
```

<span id="Qhal_fileClose">  </span>
### <font color=#A52A2A  >__Qhal_fileClose__</font>  
该函数用于关闭文件。  

__函数原型__  
```c
void Qhal_fileClose(pointer_t sockFd);
```  
* __输入参数__  

    * __pointer_t__ __`sockFd`__ : 文件句柄。
       
* __返回值__  

    * TRUE	函数执行成功  
    * FALSE	函数执行失败  

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 关闭文件
 * 输入 @param sockFd 文件句柄
 * 输出 @retval 无
 * 备注 @remark 必须实现
 */
void FUNCTION_ATTR_ROM Qhal_fileClose(pointer_t sockFd)
{
    if(SOCKET_FD_INVALID == sockFd)
    {
        return;
    }
    fclose((FILE *)sockFd);
}
```

<span id="Qhal_fileErase">  </span>
### <font color=#A52A2A  >__Qhal_fileErase__</font> 
该函数用于删除文件。  

__函数原型__  
```c
qbool Qhal_fileErase(const char *filename);
```  
* __输入参数__

    * __const char *__ __`filename`__ : 文件名，包涵文件所在路径。 
      
* __返回值__  
    * TRUE	函数执行成功  
    * FALSE	函数执行失败  

__实现要求__  
必须实现。只要文件删除成功或已不存在，都返回TURE。  

__适配示例代码__

```c
/**
 * 功能 @brief 文件删除
 * 输入 @param filename 文件路径以及文件名称
 * 输出 @retval 文件删除结果
 * 备注 @remark 必须实现。若文件不存在也认为删除成功
 */
qbool FUNCTION_ATTR_ROM Qhal_fileErase(const char *filename)
{
    if(NULL == filename || 0 == HAL_STRLEN(filename))
    {
        Quos_logPrintf(HAL_FLASH,LL_ERR,"filename invalid");
        return FALSE;
    }
    Quos_logPrintf(HAL_FLASH,LL_DBG,"filename:%s",filename);
    remove(filename);
    return TRUE;
}
```
