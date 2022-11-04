# Data Storage API

## **Data Storage**

The header file corresponding to data storage is qhal_Flashopt.h.  

For file operations, all API described in this document are required, because QuecThing SDK needs to allocate memory to save the running status, system information and OTA firmware of modules.  

### **Data Storage API Overview**

> Table 4: Data Storage API Overview  

|Function	|Description  
|---|---  
|[Qhal_fileOpen()](#Qhal_fileOpen)	    |Opens a file.
|[Qhal_fileWrite()](#Qhal_fileWrite)	    |Writes a file.
|[Qhal_fileRead()](#Qhal_fileRead)	    |Reads a file.
|[Qhal_fileClose()](#Qhal_fileClose)	    |Closes a file.
|[Qhal_fileErase()](#Qhal_fileErase)	    |Deletes a file.

<span id="Qhal_fileOpen">  </span>

### <font color=#A52A2A  >__Qhal_fileOpen__</font>  

This function opens a file.

__Prototype__  

```c
pointer_t Qhal_fileOpen(const char *filename, qbool onlyRead);
```

* __Input Parameter__

  * __const char *__ __`filename`__ : Filename, including the file path.
  * __qbool__ __`onlyRead`__ : Modes for opening a file.
        </br>TRUE	Open a file in read mode.
        </br>FALSE	Open a file in both read and write mode.

* __Return Value__  

  * File handle		 Successful execution  
  * SOCKET_FD_INVALID(-1) Failed execution   

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Open a file.
 * Input    @param filename File path and name.
 * Input    @param onlyRead Modes for opening a file; TRUE: Open a file in read mode. FALSE: Open a file in both read and write mode.
 * Output   @retval File handle; -1 is returned if opening the file failed.
 * Note     @remark Required.
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

This function writes a file.  

__Prototype__  

```c
qbool Qhal_fileWrite(pointer_t sockFd, quint32_t offset, void *buf, quint32_t bufLen);
```

* __Input Parameter__  

  * __pointer_t__ __`sockFd`__ : File handle.
  * __quint32_t__ __`offset`__ : Starting offset of the file to be written.
  * __void *__ __`buf`__ : Data to be written.
  * __quint32_t__ __`bufLen`__ : Length of the data to be written.

* __Return Value__  

  * TRUE	Successful execution  
  * FALSE	Failed execution   

__Required or Optional__  
Required. Because it is time-consuming for some platforms to use lseek, you should judge the current position of the file before setting the file offset, and then call the lseek API if the file offset is inconsistent.  

__Sample Code__

```c
/**
 * Function @brief Write data to a file.
 * Input    @param sockFd File handle.
 * Input    @param offset Starting offset of the file to be written.(You can first judge whether the position of the file pointer is the same as that of offset, and then move the file pointer if they are not the same.)
 * Input    @param buf Data to be written.
 * Input    @param bufLen Length of the data to be written.
 * Output   @retval Whether the function is executed successfully. (Whether all the data is written into the file.)
 * Note     @remark Required.
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

This function reads a file. 

__Prototype__  

```c
quint32_t Qhal_fileRead(pointer_t sockFd, quint32_t offset, void *buf, quint32_t bufLen);
```

* __Input Parameter__  

  * __pointer_t__ __`sockFd`__ : File handle.
  * __quint32_t__ __`offset`__ : Starting offset of the file to be read.
  * __quint32_t__ __`bufLen`__ : Length of the data to be read.

* __Output Parameter__ 

  * __void *__ __`buf`__ : The buffer where data to be read is stored.

* __Return Value__  
  * The length of the file data read.  

__Required or Optional__  
Required. Because it is time-consuming for some platforms to use lseek, you should judge the current position of the file before setting the file offset, and then call the lseek API if the file offset is inconsistent. 

__Sample Code__

```c
/**
 * Function @brief Read data from a file.
 * Input    @param sockFd File handle.
 * Input    @param offset Starting offset of the file to be written.(You can first judge whether the position of the file pointer is the same as that of offset, and then move the file pointer if they are not the same.)
 * Input    @param buf The buffer where data to be read is stored.
 * Input    @param bufLen Buffer length.
 * Output   @retval Size of the file data read.
 * Note     @remark Required.
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

This function closes a file.  

__Prototype__  

```c
void Qhal_fileClose(pointer_t sockFd);
```

* __Input Parameter__  

  * __pointer_t__ __`sockFd`__ : File handle.

* __Return Value__  

  * TRUE	Successful execution  
  * FALSE	Failed execution  

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Close a file.
 * Input    @param sockFd File handle.
 * Output   @retval None
 * Note     @remark Required.
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

This function deletes a file.  

__Prototype__  

```c
qbool Qhal_fileErase(const char *filename);
```

* __Input Parameter__

  * __const char *__ __`filename`__ : Filename, including file path. 

* __Return Value__  
  * TRUE	Successful execution  
  * FALSE	Failed execution    

__Required or Optional__  
Required. TURE is returned as long as the file does not exist, no matter whether it is deleted successfully or it does not exist at first.  

__Sample Code__

```c
/**
 * Function @brief Delete a file.
 * Input    @param filename File path and name.
 * Output   @retval The result of deleting the file.
 * Note     @remark Required. The deleting is successful as long as the file does not exist.
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