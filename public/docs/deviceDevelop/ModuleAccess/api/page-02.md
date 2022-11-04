# AT命令封装模块相关API

QuecThing SDK已实现对AT命令的封装，头文件ql_iotAt.h为QuecThing SDK对外提供AT指令的API，用户如需使用AT命令，则可以根据所在硬件平台的AT命令解析引擎，对API进行二次封装使用。有关AT命令详情请参考[AT指令概览](/deviceDevelop/cellular/AT/API/cellular-at-02.md)。


>表2：AT命令解析函数概览  

|AT命令	|函数	|说明
|---|---|---
|AT+QIOTREG	        |[Ql_iotAtQIOTREG()](#Qhal_atCmdIotAtQIOTREG)        |配置平台连接模式
|AT+QIOTSTATE	    |[Ql_iotAtQIOTSTATE()](#Qhal_atCmdIotAtQIOTSTATE)	    |查询当前设备与平台之间的连接状态
|AT+QIOTSEND	    |[Ql_iotAtQIOTTransTx()](#Qhal_atCmdIotAtQIOTTransTx)	|发送透传数据至平台
|AT+QIOTRD	        |[Ql_iotAtQIOTTransRx()](#Qhal_atCmdIotAtQIOTTransRx)	|读取平台下发的透传数据
|AT+QIOTMODELTD	    |[Ql_iotAtQIOTModelTx()](#Qhal_atCmdIotAtQIOTModelTx)	|发送物模型数据至平台
|AT+QIOTMODELRD	    |[Ql_iotAtQIOTModelRx()](#Qhal_atCmdIotAtQIOTModelRx)	|读取平台下发的物模型数据
|AT+QIOTCFG	        |[Ql_iotAtQIOTCFG()](#Qhal_atCmdIotAtQIOTCFG)	    |配置可选参数
|AT+QIOTMCUVER	    |[Ql_iotAtQIOTMCUVER()](#Qhal_atCmdIotAtQIOTMCUVER)	    |配置MCU版本号
|AT+QIOTUPDATE	    |[Ql_iotAtQIOTUPDATE()](#Qhal_atCmdIotAtQIOTUPDATE)	    |配置OTA升级行为
|AT+QIOTINFO	    |[Ql_iotAtQIOTINFO()](#Qhal_atCmdIotAtQIOTINFO)	    |请求QuecThing上报设备信息
|AT+QIOTOTARD	    |[Ql_iotAtQIOTOTARD()](#Qhal_atCmdIotAtQIOTOTARD)	    |分片读取SOTA数据
|AT+QIOTLOCIN	    |[Ql_iotAtQIOTLOCIN()](#Qhal_atCmdIotAtQIOTLOCIN)	    |获取/上报设备内置定位功能的定位数据
|AT+QIOTLOCEXT	    |[Ql_iotAtQIOTLOCEXT()](#Qhal_atCmdIotAtQIOTLOCEXT)	    |上报设备外置定位功能的定位数据
|AT+QIOTOTAREQ	    |[Ql_iotAtQIOTOTARequest()](#Qhal_atCmdIotAtQIOTOTARequest)	|请求OTA升级计划
|AT+QIOTBINDCODE    |[Ql_iotAtQIOTBindcode()](#Qhal_atCmdIotAtQIOTBindcode)	|上报设备绑定信息
|AT+QIOTRST	        |[Ql_iotAtQIOTRST()](#Qhal_atCmdIotAtQIOTRST)	    |重置设备信息
|AT+QHOTAREQ	    |[Ql_iotAtQIOTHOTAREQ()](#Qhal_atCmdIotAtQIOTHOTAREQ)	|触发HTTP OTA请求
|AT+QIOTSUBCONN	    |[Ql_iotAtQIOTSUBCONN()](#Qhal_atCmdIotAtQIOTSUBCONN)	|连接子设备至网关
|AT+QIOTSUBDISCONN	|[Ql_iotAtQIOTSUBDISCONN()](#Qhal_atCmdIotAtQIOTSUBDISCONN)	|断开/注销子设备与网关的连接
|AT+QIOTSUBSEND	    |[Ql_iotAtQIOTSUBSEND()](#Qhal_atCmdIotAtQIOTSUBSEND)	|发送子设备透传数据至平台
|AT+QIOTSUBRD	    |[Ql_iotAtQIOTSUBRD()](#Qhal_atCmdIotAtQIOTSUBRD)	    |读取平台下发的透传数据
|AT+QIOTSUBTSLTD	|[Ql_iotAtQIOTSUBTSLTD()](#Qhal_atCmdIotAtQIOTSUBTSLTD)	|发送子设备物模型数据至平台
|AT+QIOTSUBTSLRD	|[Ql_iotAtQIOTSUBTSLRD()](#Qhal_atCmdIotAtQIOTSUBTSLRD)	|读取平台下发的物模型数据
|AT+QIOTSUBHTB	    |[Ql_iotAtQIOTSUBHTB()](#Qhal_atCmdIotAtQIOTSUBHTB)	    |发送心跳包
|AT+QIOTSUBSVR	    |[Ql_iotAtQIOTSUBSVR()](#Qhal_atCmdIotAtQIOTSUBSVR)	    |开启/关闭监听子设备连接


<span id="Qhal_atCmdIotAtQIOTREG">  </span>  

* __配置平台连接模式AT指令适配示例__
```c
/**
 * 功能 @brief 连接平台控制AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTREG(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 联网控制设置命令仅有一个参数且为整型，在此处判断是否仅有一个参数，以及参数是否为整型，否则为错误AT指令 */
        if (cmd->param_count != 1 || cmd->params[0].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTREG(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTREG(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTSTATE">  </span>  

* __查询当前设备与平台之间的连接状态AT指令适配示例__
```c
/**
 * 功能 @brief 查询设备联网状态 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSTATE(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_READ:
        ret = Ql_iotAtQIOTSTATE(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        break;
    case QIOT_AT_ACTION_WRITE:
    case QIOT_AT_ACTION_TEST:
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTTransTx">  </span>  

* __发送透传数据至平台AT指令适配示例__
```c
/**
 * 功能 @brief 发送透传数据AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTTransTx(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 透传命令有三个参数，第一个和第二个参数均为整型，第三个参数可以为ASCII字符串，或者为hex数据 */
        if (cmd->param_count != 3 || cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT || (cmd->params[2].type == QHAL_AT_TYPE_INT || cmd->params[2].type == QHAL_AT_TYPE_RAW))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        if (cmd->params[2].type == QHAL_AT_TYPE_STRING && cmd->params[2].len > QUEC_IOT_SEND_MAX_LEN)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        if (cmd->params[2].len != HAL_ATOI((const char *)cmd->params[1].val))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTTransTx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTTransTx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            cmdTestSocketSend(cmd->sockFd, (const quint8_t *)buf, ret);
            cmdTestSocketSend(cmd->sockFd, (const quint8_t *)"\r\n\r\nOK\r\n", HAL_STRLEN("\r\n\r\nOK\r\n"));
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTTransRx">  </span>  

* __读取平台下发的透传数据AT指令适配示例__
```c
/**
 * 功能 @brief 读取透传数据AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTTransRx(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 透传数据读取AT命令仅一个参数且为整型 */
        if (cmd->param_count != 1 || cmd->params[0].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTTransRx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTTransRx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTModelTx">  </span>  

* __发送物模型数据至平台AT指令适配示例__
```c
/**
 * 功能 @brief 发送物模型数据AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTModelTx(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 物模型有三个参数时前两个为整型，第三个参数在收到模组响应后才会发送，数据类型为Hex数据 */
        if (cmd->param_count == 3 && (cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT || cmd->params[2].type != QHAL_AT_TYPE_PASS))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        /* 物模型有四个参数时前三个为整型，第四个参数在收到模组响应后才会发送，数据类型为Hex数据 */
        else if (cmd->param_count == 4 && (cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT || cmd->params[2].type != QHAL_AT_TYPE_INT || cmd->params[3].type != QHAL_AT_TYPE_PASS))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        else if (cmd->param_count < 3 || cmd->param_count > 4)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTModelTx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTModelTx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTModelRx">  </span>  

* __读取平台下发的物模型数据AT指令适配示例__
```c
/**
 * 功能 @brief 读取物模型数据AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTModelRx(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        if (cmd->param_count != 1 || cmd->params[0].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTModelRx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTModelRx(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTCFG">  </span>  

* __配置可选参数AT指令适配示例__
```c
/**
 * 功能 @brief 配置QuecThing参数AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTCFG(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 配置AT较为特殊：故在此仅校验参数个数至少为1个，且第一个参数必须为ASCII字符串；若仅有一个参数表示查询该配置项 */
        if (cmd->param_count < 1 || cmd->params[0].type != QHAL_AT_TYPE_STRING)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        /* 所有配置项均需要进行参数类型校验，因为QuecThing获取不到参数类型 */
        if (0 == HAL_STRCMP(tempPtr[0], "productinfo"))
        {
            int i;
            for (i = 1; i < 3 && i < cmd->param_count; i++)
            {
                if (cmd->params[i].type != QHAL_AT_TYPE_STRING)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "server"))
        {
            if (cmd->param_count > 2)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_INT || cmd->params[2].type != QHAL_AT_TYPE_STRING)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "lifetime"))
        {
            if (cmd->param_count > 1)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_INT)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "buffer"))
        {
            if (cmd->param_count > 1)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_INT)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "act"))
        {
            if (cmd->param_count > 1)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_INT)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "session_mode"))
        {
            if (cmd->param_count > 1)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_INT)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "tsl"))
        {
            if (cmd->param_count > 1)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_INT)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "dk_ds"))
        {
            if (cmd->param_count > 2)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_STRING || cmd->params[2].type != QHAL_AT_TYPE_STRING)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
            if (cmd->param_count > 1)
            {
                if (cmd->params[1].type != QHAL_AT_TYPE_STRING)
                {
                    Qhal_atCmdRespError(cmd->sockFd);
                    return;
                }
            }
        }
        else if (0 == HAL_STRCMP(tempPtr[0], "txid_mode"))
        {
            if (cmd->param_count > 1 && cmd->params[1].type != QHAL_AT_TYPE_INT)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        #ifdef QUEC_ENABLE_GATEWAY
        else if (0 == HAL_STRCMP(tempPtr[0], "gw_mode"))
        {
            if (cmd->param_count > 1 && cmd->params[1].type != QHAL_AT_TYPE_INT)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        #endif
        ret = Ql_iotAtQIOTCFG(QIOT_AT_ACTION_WRITE, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTCFG(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTMCUVER">  </span>  

* __配置MCU版本号AT指令适配示例__
```c
/**
 * 功能 @brief 设置、查询MCU版本与标识AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTMCUVER(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    int i;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 设备MCU版本号时，仅有两个参数，且全部为ASCII字符串类型 */
        for (i = 0; i < 2 && i < cmd->param_count; i++)
        {
            if (cmd->params[i].type != QHAL_AT_TYPE_STRING)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        ret = Ql_iotAtQIOTMCUVER(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTMCUVER(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTUPDATE">  </span>  

* __配置OTA升级行为AT指令适配示例__
```c
/**
 * 功能 @brief OTA升级控制
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTUPDATE(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 仅有一个参数，为整型 */
        if (cmd->param_count != 1 || cmd->params[0].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTUPDATE(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTUPDATE(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTINFO">  </span>  

* __请求QuecThing上报设备信息AT指令适配示例__
```c
/**
 * 功能 @brief 上报或查询设备信息以及设备状态 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTINFO(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 仅有一个参数，且为ASCII字符串 */
        if (cmd->param_count != 1 || cmd->params[0].type != QHAL_AT_TYPE_STRING)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTINFO(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTINFO(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTOTARD">  </span>  

* __分片读取SOTA数据AT指令适配示例__
```c
/**
 * 功能 @brief 读取SOTA升级固件数据 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTOTARD(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 仅两个参数，均为整型 */
        if (cmd->param_count != 2 || cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTOTARD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTOTARD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTLOCIN">  </span>  

* __获取/上报设备内置定位功能的定位数据AT指令适配示例__
```c
/**
 * 功能 @brief 上报或查询设备内置定位信息 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTLOCIN(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    int i;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* 参数个数至少为2个，第一个参数为整型，之后全部为ASCII字符串 */
        if (cmd->param_count < 2 || cmd->params[0].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        for (i = 1; i < cmd->param_count; i++)
        {
            if (cmd->params[i].type != QHAL_AT_TYPE_STRING)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        ret = Ql_iotAtQIOTLOCIN(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTLOCIN(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTLOCEXT">  </span>  

* __上报设备外置定位功能的定位数据AT指令适配示例__
```c
/**
 * 功能 @brief 上报MCU挂载的定位模块信息 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTLOCEXT(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    int i;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        for (i = 0; i < cmd->param_count; i++)
        {
            if (cmd->params[i].type != QHAL_AT_TYPE_STRING)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        ret = Ql_iotAtQIOTLOCEXT(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTLOCEXT(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTOTARequest">  </span>  

* __请求OTA升级计划AT指令适配示例__
```c
/**
 * 功能 @brief 查询OTA升级计划AT命令(MCU,模组升级查询均用该AT命令)
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTOTARequest(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
    case QIOT_AT_ACTION_EXEC:
        /* 仅有一个参数，整型 */
        if (cmd->param_count > 1 || (cmd->param_count == 1 && cmd->params[0].type != QHAL_AT_TYPE_INT ))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            break;
        }
        ret = Ql_iotAtQIOTOTARequest(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            if (0 == HAL_STRLEN(buf))
                ret = 0;
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTOTARequest(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTBindcode">  </span>  

* __上报设备绑定信息AT指令适配示例__
```c
/**
 * 功能 @brief 设置、查询BindCode AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTBindcode(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /*  */
        if (cmd->param_count != 1 || cmd->params[0].type != QHAL_AT_TYPE_STRING )
        {
            Qhal_atCmdRespError(cmd->sockFd);
            break;
        }
        ret = Ql_iotAtQIOTBindcode(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            if (0 == HAL_STRLEN(buf))
                ret = 0;
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTBindcode(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTRST">  </span>  

* __重置设备信息AT指令适配示例__
```c
/**
 * 功能 @brief QuecThing重置 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTRST(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_TEST:
    case QIOT_AT_ACTION_EXEC:
        ret = Ql_iotAtQIOTRST(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTHOTAREQ">  </span>  

* __触发HTTP OTA请求AT指令适配示例__
```c
/**
 * 功能 @brief HTTP OTA查询升级计划 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTHOTAREQ(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd, tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        /* http ota 查询升级计划指令第5个参数服务器地址可以省略；不省略为ASCII字符串类型；第 一、二参数为整型，第三、四参数为ASCII字符串类型 */
        if ((5 == cmd->param_count && cmd->params[4].type != QHAL_AT_TYPE_STRING) || 
        4 > cmd->param_count || (cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT || cmd->params[2].type != QHAL_AT_TYPE_STRING || cmd->params[3].type != QHAL_AT_TYPE_STRING))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTHOTAREQ(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTHOTAREQ(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if (ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd, buf, ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }
}
```

<span id="Qhal_atCmdIotAtQIOTSUBCONN">  </span>  

* __连接子设备至网关AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备连接 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBCONN(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    int i;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        if (cmd->param_count < 5 || cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        for (i=2;i<cmd->param_count;i++)
        {
            if(cmd->params[i].type != QHAL_AT_TYPE_STRING)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        ret = Ql_iotAtQIOTSUBCONN(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBCONN(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBDISCONN">  </span>  

* __断开子设备与网关的连接AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备断开连接 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBDISCONN(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    int i;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        for (i=0;i<cmd->param_count;i++)
        {
            if(cmd->params[i].type != QHAL_AT_TYPE_STRING)
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        ret = Ql_iotAtQIOTSUBDISCONN(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBDISCONN(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBSEND">  </span>  

* __发送子设备透传数据至平台AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备透传数据发送 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBSEND(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        if (cmd->param_count < 4 || cmd->params[2].type != QHAL_AT_TYPE_INT || cmd->params[0].type != QHAL_AT_TYPE_STRING ||
        cmd->params[1].type != QHAL_AT_TYPE_STRING || !(cmd->params[3].type == QHAL_AT_TYPE_PASS || cmd->params[3].type == QHAL_AT_TYPE_STRING))
        {
            Qhal_atCmdRespError(cmd->sockFd);
             return;
        }
        if(cmd->params[3].type == QHAL_AT_TYPE_STRING && cmd->params[3].len > QUEC_IOT_SEND_MAX_LEN)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        if(cmd->params[3].len != HAL_ATOI((const char *)cmd->params[2].val))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTSUBSEND(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBSEND(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBRD">  </span>  

* __读取平台下发的子设备透传数据AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备读取缓存透传数据 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBRD(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    int i;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        for (i=0;i<cmd->param_count;i++)
        {
            if((cmd->param_count == 2 && cmd->params[i].type != QHAL_AT_TYPE_STRING))
            {
                Qhal_atCmdRespError(cmd->sockFd);
                return;
            }
        }
        ret = Ql_iotAtQIOTSUBRD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBRD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBTSLTD">  </span>  

* __发送子设备物模型数据至平台AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备物模型数据发送 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBTSLTD(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        if(cmd->param_count == 4 && (cmd->params[0].type != QHAL_AT_TYPE_STRING || cmd->params[1].type != QHAL_AT_TYPE_STRING
        || cmd->params[2].type != QHAL_AT_TYPE_INT || cmd->params[3].type != QHAL_AT_TYPE_PASS))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        else if(cmd->param_count == 5 && (cmd->params[0].type != QHAL_AT_TYPE_STRING || cmd->params[1].type != QHAL_AT_TYPE_STRING
        || cmd->params[2].type != QHAL_AT_TYPE_INT || cmd->params[3].type != QHAL_AT_TYPE_INT || cmd->params[4].type != QHAL_AT_TYPE_PASS))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        ret = Ql_iotAtQIOTSUBTSLTD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBTSLTD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBTSLRD">  </span>  

* __读取平台下发的子设备物模型数据AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备缓存物模型读取 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBTSLRD(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        ret = Ql_iotAtQIOTSUBTSLRD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBTSLRD(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBHTB">  </span>  

* __发送心跳包AT指令适配示例__
```c
/**
 * 功能 @brief 网关子设备心跳 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBHTB(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        ret = Ql_iotAtQIOTSUBHTB(cmd->action, NULL, 0, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBHTB(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```

<span id="Qhal_atCmdIotAtQIOTSUBSVR">  </span>  

* __开启/关闭监听子设备连接AT指令适配示例__
```c
/**
 * 功能 @brief 无线子设备通信监听 AT命令
 * 输入 @param cmd AT命令参数
 * 输出 @retval 无
 * 备注 @remark 用户可根据实际情况进行处理，本处仅为参考示例
 */
void FUNCTION_ATTR_ROM Qhal_atCmdIotAtQIOTSUBSVR(qhal_atcmd_t *cmd)
{
    char buf[QUEC_ATCMD_BUF_MAX_LEN] = {0};
    char *tempPtr[cmd->param_count];
    qhal_atParamTransition(cmd,tempPtr);
    int ret;
    switch (cmd->action)
    {
    case QIOT_AT_ACTION_WRITE:
        ret = Ql_iotAtQIOTSUBSVR(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    case QIOT_AT_ACTION_READ:
    case QIOT_AT_ACTION_TEST:
        ret = Ql_iotAtQIOTSUBSVR(cmd->action, buf, QUEC_ATCMD_BUF_MAX_LEN, cmd->param_count, tempPtr);
        if(ret >= 0)
        {
            Qhal_atCmdRespOK(cmd->sockFd,buf,ret);
        }
        else
        {
            Qhal_atCmdRespError(cmd->sockFd);
        }
        break;
    default:
        Qhal_atCmdRespError(cmd->sockFd);
        break;
    }   
}
```


