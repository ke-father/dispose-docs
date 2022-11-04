# TTLV Data API


## **TTLV Data API Overview**

|                       Function                        |                   Description                    |
| :---------------------------------------------------: | :----------------------------------------------: |
|      [Ql_iotTtlvCountGet()](#Ql_iotTtlvCountGet)      |   Gets the number of nodes in the data table.    |
|       [Ql_iotTtlvNodeGet()](#Ql_iotTtlvNodeGet)       |     Extracts data nodes from the data table.     |
|          [Ql_iotTtlvFree()](#Ql_iotTtlvFree)          |          Releases data table resources.          |
|   [Ql_iotTtlvNodeGetType()](#Ql_iotTtlvNodeGetType)   |               Gets data node type.               |
|   [Ql_iotTtlvNodeGetBool()](#Ql_iotTtlvNodeGetBool)   |         Gets the node data in bool type.         |
|    [Ql_iotTtlvNodeGetInt()](#Ql_iotTtlvNodeGetInt)    |       Gets the node data in integer type.        |
|  [Ql_iotTtlvNodeGetFloat()](#Ql_iotTtlvNodeGetFloat)  |        Gets the node data in float type.         |
| [Ql_iotTtlvNodeGetString()](#Ql_iotTtlvNodeGetString) |        Gets the node data in string type.        |
|   [Ql_iotTtlvNodeGetByte()](#Ql_iotTtlvNodeGetByte)   |         Gets the node data in byte type.         |
| [Ql_iotTtlvNodeGetStruct()](#Ql_iotTtlvNodeGetStruct) |        Gets the node data in struct type.        |
|     [Ql_iotTtlvIdGetType()](#Ql_iotTtlvIdGetType)     | Gets the type of data for the specified ID node. |
|     [Ql_iotTtlvIdGetBool()](#Ql_iotTtlvIdGetBool)     |  Gets the specified ID node data in bool type.   |
|      [Ql_iotTtlvIdGetInt()](#Ql_iotTtlvIdGetInt)      | Gets the specified ID node data in integer type. |
|    [Ql_iotTtlvIdGetFloat()](#Ql_iotTtlvIdGetFloat)    |  Gets the specified ID node data in float type.  |
|   [Ql_iotTtlvIdGetString()](#Ql_iotTtlvIdGetString)   | Gets the specified ID node data in string type.  |
|     [Ql_iotTtlvIdGetByte()](#Ql_iotTtlvIdGetByte)     |  Gets the specified ID node data in byte type.   |
|   [Ql_iotTtlvIdGetStruct()](#Ql_iotTtlvIdGetStruct)   | Gets the specified ID node data in struct type.  |
|     [Ql_iotTtlvIdAddBool()](#Ql_iotTtlvIdAddBool)     |         Adds the node data in bool type.         |
|      [Ql_iotTtlvIdAddInt()](#Ql_iotTtlvIdAddInt)      |       Adds the node data in integer type.        |
|    [Ql_iotTtlvIdAddFloat()](#Ql_iotTtlvIdAddFloat)    |        Adds the node data in float type.         |
|    [Ql_iotTtlvIdAddString()](#Ql_iotTtlvIdAddString)  |        Adds the node data in String type.        |
|     [Ql_iotTtlvIdAddByte()](#Ql_iotTtlvIdAddByte)     |         Adds the node data in byte type.         |
|   [Ql_iotTtlvIdAddStruct()](#Ql_iotTtlvIdAddStruct)   |        Adds the node data in struct type.        |

## **API Description**

<span id="Ql_iotTtlvCountGet">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvCountGet__</font>

This function gets the number of nodes in the data table.

__Prototype__

```c
quint32_t Ql_iotTtlvCountGet(const void *ttlvHead)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.


__Return Value__

The number of nodes in the data table.

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
```

---

<span id="Ql_iotTtlvNodeGet">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGet__</font>

This function extracts data nodes from the data table.

__Prototype__

```c
void *Ql_iotTtlvNodeGet(const void *ttlvHead, quint16_t index, quint16_t *id, QIot_dpDataType_e 
*type)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__  __`index`__: Data node index.

* __Output__
  * __quint16_t *__  __`id`__: Data node ID.

  * __QIot_dpDataType_e *__  __`type`__: Data node type. See [Data Node Type](#QIot_dpDataType_e) for details.

__Return Value__

Data node pointer; If the value is NULL, the acquisition fails.

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
quint32_t i;
for(i=0;i<count;i++)
{
    uint16_t id;
    QIot_dpDataType_e type;
    void *node = Ql_iotTtlvNodeGet(ttlvHead, i, &id, &type);
    if(node)
    {
        switch (id)
        {               
            case 1:
            {             
                /*Code*/
                break;
            }
                case 2:
            {             
                /*Code*/
                break;
            }
            default:break;
        }
    }
}
```

---

<span id="Ql_iotTtlvFree">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvFree__</font>

This function releases data table resources. After creating TTLV tables or adding TTLV nodes, you need to call this function to release table resources.

__Prototype__

```c
void Ql_iotTtlvFree(void **ttlvHead)
```

__Parameter__

* __Input__
  * __void **__  __`ttlvHead`__: Data table.


__Return Value__

None

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvHead = NULL;     
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
Ql_iotCmdBusPhymodelReport(1, ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //Release pointer.
```

---

<span id="Ql_iotTtlvNodeGetType">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetType__</font>

This function gets data node type.

__Prototype__

```c
qbool Ql_iotTtlvNodeGetType(const void *ttlvNode, QIot_dpDataType_e *type)
```

__Parameter__

* __Input__
  * __const void *__      __`ttlvNode`__: Data node.

* __Output__
  * __QIot_dpDataType_e *__  __`type`__: Data node type. See [Data Node Type](#QIot_dpDataType_e) for details.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvNode = NULL; 
QIot_dpDataType_e type;
qbool ret = Ql_iotTtlvNodeGetType(&ttlvNode,&type);
```

---

<span id="Ql_iotTtlvNodeGetBool">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetBool__</font>

This function gets the node data in bool type.

__Prototype__

```c
qbool Ql_iotTtlvNodeGetBool(const void *ttlvNode, qbool *value)
```

__Parameter__

* __Input__

  * __const void *__  __`ttlvNode`__: Data node.

* __Output__
  * __qbool *__     __`value`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Getting Node Data](#TTLV_Node_Get) for details.

---

<span id="Ql_iotTtlvNodeGetInt">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetInt__</font>

This function gets the node data in integer type.

__Prototype__

```c
qbool Ql_iotTtlvNodeGetInt(const void *ttlvNode, int *value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvNode`__: Data node.

* __Output__
  * __int *__        __`value`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Getting Node Data](#TTLV_Node_Get) for details.

---

<span id="Ql_iotTtlvNodeGetFloat">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetFloat__</font>

This function gets the node data in float type.

__Prototype__

```c
qbool Ql_iotTtlvNodeGetFloat(const void *ttlvNode, double *value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvNode`__: Data node.

* __Output__
  * __double *__     __`value`__: Node data.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.6.1 and above.

__Example__

See [Example of Getting Node Data](#TTLV_Node_Get) for details.

---

<span id="Ql_iotTtlvNodeGetString">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetString__</font>

This function gets the node data in string type.

__Prototype__

```c
char *Ql_iotTtlvNodeGetString(const void *ttlvNode)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvNode`__: Data node.

__Return Value__

* __`NULL`__: Failed execution
* __`Others`__: Node data

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Getting Node Data](#TTLV_Node_Get) for details.

---

<span id="Ql_iotTtlvNodeGetByte">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetByte__</font>

This function gets the node data in byte type.

__Prototype__

```c
quint32_t Ql_iotTtlvNodeGetByte(const void *ttlvNode, quint8_t **value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvNode`__: Data node.

* __Output__
  * __quint8_t **__    __`value`__: Node data.


__Return Value__

* __`0`__: Failed execution
* __`> 0`__: Length of node data actually read

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Getting Node Data](#TTLV_Node_Get) for details.

---

<span id="Ql_iotTtlvNodeGetStruct">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvNodeGetStruct__</font>

This function gets the node data in struct type. 

__Prototype__

```c
void *Ql_iotTtlvNodeGetStruct(const void *ttlvNode)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvNode`__: Data node.

__Return Value__

Pointer of the data table.

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Getting Node Data](#TTLV_Node_Get) for details.

---

<span id="Ql_iotTtlvIdGetType">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetType__</font>

This function gets the type of data for the specified ID node.

__Prototype__

```c
qbool Ql_iotTtlvIdGetType(const void *ttlvHead, quint16_t id, QIot_dpDataType_e *type)
```

__Parameter__

* __Input__
  * __const void *__     __`ttlvHead`__: Data table.

  * __quint16_t__       __`id`__: Data node ID.

* __Output__
  * __QIot_dpDataType_e *__   __`type`__: Node data type. See [Data Node Type](#QIot_dpDataType_e) for details.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
QIot_dpDataType_e type;
qbool ret = Ql_iotTtlvIdGetType(ttlvHead, 1, &type);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetBool">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetBool__</font>

This function gets the specified ID node data in bool type.

__Prototype__

```c
qbool Ql_iotTtlvIdGetBool(const void *ttlvHead, quint16_t id, qbool *value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__    __`id`__: Data node ID.

* __Output__
  * __qbool *__      __`value`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qbool reauth_flag = FALSE;
qbool ret = Ql_iotTtlvIdGetBool(ttlvHead, 1, &reauth_flag);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetInt">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetInt__</font>

This function gets the specified ID node data in integer type.

__Prototype__

```c
qbool Ql_iotTtlvIdGetInt(const void *ttlvHead, quint16_t id, int *value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__    __`id`__: Data node ID.

* __Output__
  * __int *__        __`value`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__


```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
double increment;
Ql_iotTtlvIdGetFloat(modelInfoHead, 1,&increment);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetFloat">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetFloat__</font>

This function gets the specified ID node data in float type.

__Prototype__

```c
Qbool Ql_iotTtlvIdGetFloat(const void *ttlvHead, quint16_t id, double *value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__    __`id`__: Data node ID.

* __Output__
  * __double *__     __`value`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.6.1 and above.

__Example__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qint64_t componentType;
char *cfgData = Ql_iotTtlvIdGetString(ttlvHead, 1);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetString">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetString__</font>

This function gets the specified ID node data in string type.

__Prototype__

```c
char *Ql_iotTtlvIdGetString(const void *ttlvHead, quint16_t id)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__    __`id`__: Data node ID.


__Return Value__


* __`NULL`__: Failed execution
* __`Others`__: Node data

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
quint8_t *encryData = NULL;
quint32_t encryLen = Ql_iotTtlvIdGetByte(ttlvHead, 1,&encryData); 
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetByte">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetByte__</font>

This function gets the specified ID node data in byte type.

__Prototype__

```c
quint32_t Ql_iotTtlvIdGetByte(const void *ttlvHead, quint16_t id, quint8_t **value)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__    __`id`__: Data node ID.

* __Output__
  * __quint8_t **__    __`value`__: Node data.



__Return Value__


* __`0`__: Failed execution
* __`> 0`__: Length of node data actually read


__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qint64_t componentType;
void *dnsInfo = Ql_iotTtlvIdGetStruct(ttlvHead, 1);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetStruct">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdGetStruct__</font>

This function gets the specified ID node data in struct type.

__Prototype__

```c
void *Ql_iotTtlvIdGetStruct(const void *ttlvHead, quint16_t id)
```

__Parameter__

* __Input__
  * __const void *__  __`ttlvHead`__: Data table.

  * __quint16_t__    __`id`__: Data node ID.


__Return Value__

Pointer of the data table.

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qint64_t componentType;
void *dnsInfo = Ql_iotTtlvIdGetStruct(ttlvHead, 1);
Ql_iotTtlvFree(&ttlvHead);
```


---

<span id="Ql_iotTtlvIdAddBool">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdAddBool__</font>

This function adds the node data in bool type.

__Prototype__

```c
qbool Ql_iotTtlvIdAddBool(void **ttlvHead, quint16_t id, qbool value)
```

__Parameter__

* __Input__
  * __void **__     __`ttlvHead`__: Data table.

  * __quint16_t__   __`id`__: Data node ID.

  * __qbool__     __`value`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__Example__

See [Example of Adding Node Data](#TTLV_ID_SET) for details.

---

<span id="Ql_iotTtlvIdAddInt">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdAddInt__</font>

This function adds the node data in integer type.

__Prototype__

```c
qbool Ql_iotTtlvIdAddInt(void **ttlvHead, quint16_t id, qint64_t num)
```

__Parameter__

* __Input__
  * __void **__     __`ttlvHead`__: Data table.

  * __quint16_t__   __`id`__: Data node ID.

  * __qint64_t__   __`num`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.6.1 and above.

__Example__

See [Example of Adding Node Data](#TTLV_ID_SET) for details.

---

<span id="Ql_iotTtlvIdAddFloat">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdAddFloat__</font>

This function adds the node data in float type.

__Prototype__

```c
qbool Ql_iotTtlvIdAddFloat(void **ttlvHead, quint16_t id, double num)
```

__Parameter__

* __Input__
  * __void **__     __`ttlvHead`__: Data table.

  * __quint16_t__   __`id`__: Data node ID.

  * __double__     __`num`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.6.1 and above.

__Example__

See [Example of Adding Node Data](#TTLV_ID_SET) for details.


---

<span id="Ql_iotTtlvIdAddString">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdAddString__</font>

This function adds the node data in String type.

__Prototype__

```c
qbool Ql_iotTtlvIdAddString(void **ttlvHead, quint16_t id, const char *data)
```

__Parameter__

* __Input__
  * __void **__     __`ttlvHead`__: Data table.

  * __quint16_t__   __`id`__: Data node ID.

  * __quint8_t *__   __`data`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Adding Node Data](#TTLV_ID_SET) for details.


---

<span id="Ql_iotTtlvIdAddByte">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdAddByte__</font>

This function adds the node data in byte type.

__Prototype__

```c
qbool Ql_iotTtlvIdAddByte(void **ttlvHead, quint16_t id, quint8_t *data, quint32_t len)
```

__Parameter__

* __Input__
  * __void **__     __`ttlvHead`__: Data table.

  * __quint16_t__   __`id`__: Data node ID.

  * __quint8_t *__   __`data`__: Node data.

  * __quint32_t__    __`len`__: Length of node data.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Adding Node Data](#TTLV_ID_SET) for details.

---

<span id="Ql_iotTtlvIdAddStruct">  </span>

## <font color=#A52A2A  >__Ql_iotTtlvIdAddStruct__</font>

This function adds the node data in struct type.

__Prototype__

```c
qbool Ql_iotTtlvIdAddStruct(void **ttlvHead, quint16_t id, void *vStruct)
```

__Parameter__

* __Input__
  * __void **__     __`ttlvHead`__: Data table.

  * __quint16_t__   __`id`__: Data node ID.

  * __void *__    __`vStruct`__: Node data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 

This function is supported in SDK versions 2.3.3 and above.

__Example__

See [Example of Adding Node Data](#TTLV_ID_SET) for details.

---


<span id="QIot_dpDataType_e">  </span>

* __Data Node Type__ 

  __Enumeration Definition__

    ```c
    typedef enum { 
        QIOT_DPDATA_TYPE_BOOL = 0, 
        QIOT_DPDATA_TYPE_NUM, 
        QIOT_DPDATA_TYPE_BYTE, 
        QIOT_DPDATA_TYPE_STRUCT, 
    } QIot_dpDataType_e;
    ```

  __Member__

  | Member                  | Description |
  | :---------------------- | :---------: |
  | QIOT_DPDATA_TYPE_BOOL   |    Bool     |
  | QIOT_DPDATA_TYPE_NUM    |   Number    |
  | QIOT_DPDATA_TYPE_BYTE   | Byte stream |
  | QIOT_DPDATA_TYPE_STRUCT |  Structure  |

<span id="TTLV_Node_Get">  </span>

## **Example of Getting Node Data**

```c
void Ql_iotTtlvHandle(const void *ttlvHead)
{
    quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
    quint32_t i;
    for(i=0;i<count;i++)
    {
        uint16_t id;
        QIot_dpDataType_e type;
        void *node = Ql_iotTtlvNodeGet(ttlvHead, i, &id, &type);
        if(node)
        {
            switch (type)
            {
            case QIOT_DPDATA_TYPE_BOOL:
            {
                qbool value;
                Ql_iotTtlvNodeGetBool(node, &value);
                printf("model id:%d data:%s\r\n",id,value?"TRUE":"FALSE");
                break;
            }
            case QIOT_DPDATA_TYPE_INT:
            {
                qint64_t num;
                Ql_iotTtlvNodeGetInt(node, &num);
                printf("model id:%d data:"PRINTF_S64"\r\n",id,num);
                break;
            }  
            case QIOT_DPDATA_TYPE_FLOAT:
            {
                double num;
                Ql_iotTtlvNodeGetFloat(node, &num);
                printf("model id:%d data:%lg\r\n",id,num);
                break;
            }               
            case QIOT_DPDATA_TYPE_BYTE:
            {
                quint8_t *value;
                quint32_t len = Ql_iotTtlvNodeGetByte(node, &value);
                printf("model id:%d data:%.*s\r\n",id,len,value);
                break;
            }
            case QIOT_DPDATA_TYPE_STRUCT:
                Ql_iotTtlvHandle(Ql_iotTtlvNodeGetStruct(node));
                break;
            default:
                break;
            }
        }
    }
}
```

<span id="TTLV_ID_SET">  </span>

## **Example of Adding Node Data**

```c
/**************************************************************************
** Function   @brief: Event callback.
** Input      @param : 
** Output     @retval: 
***************************************************************************/
void Ql_iotSubEventCB(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk, const void *value, quint32_t valLen)
{
    printf("subPk[%s] subDk[%s] valLen[%d]\r\n", subPk, subDk, valLen);
    switch (event)
    {
    /* Receive data */
    case QIOT_ATEVENT_TYPE_RECV:
        printf("data recv event,code:%d\r\n",errcode);
        /* Receive the request of TSL from Developer Center */
        if(QIOT_RECV_SUCC_PHYMODEL_REQ == errcode && value)
        {
            quint16_t pkgId = *(quint16_t *)value;
            quint16_t *ids = (quint16_t *)((quint8_t*)value+sizeof(quint16_t));
            void *ttlvHead = NULL;
            printf("model read event,pkgid:%d\r\n",pkgId);
            quint32_t i;
            for(i=0;i<valLen;i++)
            {
                quint16_t modelId = ids[i];
                printf("modelId:%d\r\n",modelId);
                /* id1:bool id2:int id3:string id4:int array id5:string array*/
                switch (modelId)
                {
                case 1:
                    Ql_iotTtlvIdAddBool(&ttlvHead, modelId, TRUE);
                    break;
                case 2:
                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, 1);
                    break;
                case 3:
                    Ql_iotTtlvIdAddString(&ttlvHead, modelId, "hello world");
                    break;
                case 4:
                    {
                        void *ttlvArrayHead = NULL;
                        Ql_iotTtlvIdAddInt(&ttlvArrayHead, 1, 1);
                        Ql_iotTtlvIdAddInt(&ttlvArrayHead, 2, 2);
                        Ql_iotTtlvIdAddInt(&ttlvArrayHead, 3, 3);
                        Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, ttlvArrayHead);
                    }
                    break;
                case 5:
                    {
                        void *ttlvArrayHead = NULL;
                        Ql_iotTtlvIdAddString(&ttlvArrayHead, 1, "hello a");
                        Ql_iotTtlvIdAddString(&ttlvArrayHead, 2, "hello b");
                        Ql_iotTtlvIdAddString(&ttlvArrayHead, 3, "hello c");
                        Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, ttlvArrayHead);
                    }
                    break;
                default:
                    break;
                }
            }
            Ql_iotSubDevTslAck(subPk, subDk, pkgId, ttlvHead);
            Ql_iotTtlvFree(&ttlvHead);
        }
        break;
    default:
        break;
    }
}
```