# AT Commands Parsing API

QuecThing SDK has encapsulated AT commands, and the header file ql_iotAt.h provides the API of AT commands for QuecThing SDK. If you need to use AT commands, you can encapsulate the API for the second time based on the AT command parsing engine of the hardware platform. See [AT Command Overview](/en/deviceDevelop/cellular/AT/API/cellular-at-02.md) for details about AT commands.


>Table 2: Description of AT Commands and Corresponding Functions 

|AT Command	|Function	|Description
|---|---|---
|AT+QIOTREG	        |[Ql_iotAtQIOTREG()](#Qhal_atCmdIotAtQIOTREG)        |Configure connection mode
|AT+QIOTSTATE	    |[Ql_iotAtQIOTSTATE()](#Qhal_atCmdIotAtQIOTSTATE)	    |Query connection status
|AT+QIOTSEND	    |[Ql_iotAtQIOTTransTx()](#Qhal_atCmdIotAtQIOTTransTx)	|Send transparent transmission data to Developer Center
|AT+QIOTRD	        |[Ql_iotAtQIOTTransRx()](#Qhal_atCmdIotAtQIOTTransRx)	|Read transparent transmission data issued by Developer Center
|AT+QIOTMODELTD	    |[Ql_iotAtQIOTModelTx()](#Qhal_atCmdIotAtQIOTModelTx)	|Send TSL model data to Developer Center
|AT+QIOTMODELRD	    |[Ql_iotAtQIOTModelRx()](#Qhal_atCmdIotAtQIOTModelRx)	|Read TSL model data issued by Developer Center
|AT+QIOTCFG	        |[Ql_iotAtQIOTCFG()](#Qhal_atCmdIotAtQIOTCFG)	    |Configure optional parameters
|AT+QIOTMCUVER	    |[Ql_iotAtQIOTMCUVER()](#Qhal_atCmdIotAtQIOTMCUVER)	    |Configure MCU version number
|AT+QIOTUPDATE	    |[Ql_iotAtQIOTUPDATE()](#Qhal_atCmdIotAtQIOTUPDATE)	    |Configure OTA upgrade operations
|AT+QIOTINFO	    |[Ql_iotAtQIOTINFO()](#Qhal_atCmdIotAtQIOTINFO)	    |Request QuecThing to report device information
|AT+QIOTOTARD	    |[Ql_iotAtQIOTOTARD()](#Qhal_atCmdIotAtQIOTOTARD)	    |Read SOTA data by blocks
|AT+QIOTLOCIN	    |[Ql_iotAtQIOTLOCIN()](#Qhal_atCmdIotAtQIOTLOCIN)	    |Query/Report device built-in location information
|AT+QIOTLOCEXT	    |[Ql_iotAtQIOTLOCEXT()](#Qhal_atCmdIotAtQIOTLOCEXT)	    |Report device external location informatio
|AT+QIOTOTAREQ	    |[Ql_iotAtQIOTOTARequest()](#Qhal_atCmdIotAtQIOTOTARequest)	|Request OTA upgrade plan
|AT+QIOTBINDCODE    |[Ql_iotAtQIOTBindcode()](#Qhal_atCmdIotAtQIOTBindcode)	|Report device binding information
|AT+QIOTRST	        |[Ql_iotAtQIOTRST()](#Qhal_atCmdIotAtQIOTRST)	    |Reset device information
|AT+QHOTAREQ	    |[Ql_iotAtQIOTHOTAREQ()](#Qhal_atCmdIotAtQIOTHOTAREQ)	|Trigger HTTP OTA upgrade request
|AT+QIOTSUBCONN	    |[Ql_iotAtQIOTSUBCONN()](#Qhal_atCmdIotAtQIOTSUBCONN)	|Connect sub-device to gateway
|AT+QIOTSUBDISCONN	|[Ql_iotAtQIOTSUBDISCONN()](#Qhal_atCmdIotAtQIOTSUBDISCONN)	|Disconnect/De-register sub-device from gateway
|AT+QIOTSUBSEND	    |[Ql_iotAtQIOTSUBSEND()](#Qhal_atCmdIotAtQIOTSUBSEND)	|Send sub-device transparent transmission data to Developer Center
|AT+QIOTSUBRD	    |[Ql_iotAtQIOTSUBRD()](#Qhal_atCmdIotAtQIOTSUBRD)	    |Read transparent transmission data issued by Developer Center
|AT+QIOTSUBTSLTD	|[Ql_iotAtQIOTSUBTSLTD()](#Qhal_atCmdIotAtQIOTSUBTSLTD)	|Send sub-device TSL model data to Developer Center
|AT+QIOTSUBTSLRD	|[Ql_iotAtQIOTSUBTSLRD()](#Qhal_atCmdIotAtQIOTSUBTSLRD)	|Read TSL model data issued by Developer Center
|AT+QIOTSUBHTB	    |[Ql_iotAtQIOTSUBHTB()](#Qhal_atCmdIotAtQIOTSUBHTB)	    |Send heartbeat package
|AT+QIOTSUBSVR	    |[Ql_iotAtQIOTSUBSVR()](#Qhal_atCmdIotAtQIOTSUBSVR)	    |Enable/Disable to monitor sub-device connection


<span id="Qhal_atCmdIotAtQIOTREG">  </span>  

* __AT Command Adaptation Example of Configuring Connection Mode__

```c
/**
 * Function @brief An AT command of connecting SDK to Developer Center 
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* The Write Command of network connection has only one parameter and is an integer. You need to check whether there is only one parameter and whether the parameter is an integer. Otherwise, it is an incorrect AT command. */
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

* __AT Command Adaptation Example of Querying Connection Status__

```c
/**
 * Function @brief An AT command of querying device connection status
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Sending Transparent Transmission Data to Developer Center__

```c
/**
 * Function @brief An AT command of sending transparent transmission data 
 * Input    @param cmd AT command parameter
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There are three paramaters in the AT command. The first and second parameters are integers, and the third one is an ASCII string or hexadecimal value. */
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

* __AT Command Adaptation Example of Reading Transparent Transmission Data Issued by Developer Center__

```c
/**
 * Function @brief An AT command of reading transparent transmission data
 * Input    @param cmd AT command parameter
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There is only one parameter in this command and it is an integer. */
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

* __AT Command Adaptation Example of Sending TSL Model to Developer Center__

```c
/**
 * Function @brief An AT command of sending TSL model
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* If the TSL model has three parameters, the first two parameters are integers, and the third one in hexidecimal will be sent only after Developer Center receives the response from the module. */
        if (cmd->param_count == 3 && (cmd->params[0].type != QHAL_AT_TYPE_INT || cmd->params[1].type != QHAL_AT_TYPE_INT || cmd->params[2].type != QHAL_AT_TYPE_PASS))
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        /* If the TSL model has four parameters, the first three parameters are integers, and the fourth one in hexidecimal will be sent only after Developer Center receives the response from the module. */
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

* __AT Command Adaptation Example of Reading TSL Model Data Issued by Developer Center__

```c
/**
 * Function @brief An AT command of reading TSL model data issued by Developer Center
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Configuring Optional Parameters__

```c
/**
 * Function @brief An AT command of configuring the QuecThing parameter
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* It is special to configure the AT command so the number of verification parameters here is at least 1, and the first parameter must be an ASCII string; If there is only one parameter, it indicates that this AT command only queries the configuration. */
        if (cmd->param_count < 1 || cmd->params[0].type != QHAL_AT_TYPE_STRING)
        {
            Qhal_atCmdRespError(cmd->sockFd);
            return;
        }
        /* Parameter type verification is required for all configuration items, because QuecThing cannot obtain the parameter type. */
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

* __AT Command Adaptation Example of Configuring MCU Version Number__

```c
/**
 * Function @brief An AT command of configuring and querying MCU version and flag.
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* Theare are only two parameters when the MCU version number is configured and both of them are ASCII strings. */
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

* __AT Command Adaptation Example of Configuring OTA Upgrade Operations__

```c
/**
 * Function @brief An AT command of OTA upgrade
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There is only one integer parameter. */
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

* __AT Command Adaptation Example of Requesting QuecThing to Report Device Information__

```c
/**
 * Function @brief An AT command of reporting or querying device information and device status
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There is only one parameter and it is an ASCII string. */
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

* __AT Command Adaptation Example of Reading SOTA Data by Blocks__

```c
/**
 * Function @brief An AT comamnd of reading SOTA upgrade data
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There are only two parameters and both of them are integers. */
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

* __AT Command Adaptation Example of Querying/Reporting Device Built-in Location Information__

```c
/**
 * Function @brief An AT command of reporting or querying device built-in location information
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There are at least two parameters. The first one is an integer and all subsequent parameters are ASCII strings. */
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

* __AT Command Adaptation Example of Reporting Device External Location Information__

```c
/**
 * Function @brief An AT command of reporting the MCU external location information
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Requesting OTA Upgrade Plan__

```c
/**
 * Function @brief An AT command of requesting OTA Upgrade plan, which is used in MCU and module upgrade.
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* There is only one parameter in this command and it is an integer. */
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

* __AT Command Adaptation Example of Reporting Device Binding Information__

```c
/**
 * Function @brief An AT command of configuring and querying BindCode
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Resetting Device Information__

```c
/**
 * Function @brief An AT command of resetting QuecThing
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Triggering HTTP OTA Upgrade Request__

```c
/**
 * Function @brief An AT command of querying HTTP OTA upgrade plan
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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
        /* The fifth parameter in this command, the server address, can be omitted, otherwise it is an ASCII string. The first and second parameters are integers, and the third and fourth parameters are ASCII strings. */
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

* __AT Command Adaptation Example of Connecting the Sub-device to the Gateway__

```c
/**
 * Function @brief An AT command of connecting the sub-device to the gateway
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Disconnecting the Sub-device from Gateway__

```c
/**
 * Function @brief An AT command of disconnecting the sub-device from the gateway
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Sending Sub-device Transparent Transmission Data to Developer Center__

```c
/**
 * Function @brief An AT command of sending sub-device transparent transmission data to Developer Center
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Reading Transparent Transmission Data Issued by Developer Center__

```c
/**
 * Function @brief An AT command of reading cache transparent transmission data
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Sending Sub-device TSL Model to Developer Center__

```c
/**
 * Function @brief An AT command of sending sub-device TSL model to Developer Center
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Reading the TSL Model Issued by Developer Center__

```c
/**
 * Function @brief An AT command of reading sub-device cache TSL model
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Sending Heartbeat Package__

```c
/**
 * Function @brief An AT command of sending sub-device heartbeat package
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

* __AT Command Adaptation Example of Enable/Disable to Monitor Sub-device Connection__

```c
/**
 * Function @brief An AT command of monitoring sub-device communication
 * Input    @param cmd AT command
 * Output   @retval None
 * Note     @remark You can process it based on the module actually used. This example is for reference only.
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

