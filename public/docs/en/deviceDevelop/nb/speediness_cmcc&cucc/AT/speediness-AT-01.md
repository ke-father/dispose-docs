# AT Command

## __AT Command Solution__ 

In AT command solution, MCU can perform corresponding operations to the module by AT commands through the serial port. All Quectel AT command are encapsulated as QuecCloud IoT AT commands. 

## AT Command Communication Principle

The physical layer of AT command is based on serial port and consists of  __ASCII text__ . AT command is one of the mainstream solution of __external MCU__ , which is applied to the connection and communication between __the module__ and __external MCU__ application. AT command has lower development costs and has been converted to simple serial programming. The communication principle of general modules in AT command solution is shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-27.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-27.png)</a>


## __AT Command Character__


| Character |           Name            |                           Function                           |
| :-------: | :-----------------------: | :----------------------------------------------------------: |
|  \<CR\>   | Carriage return character | End a command line and is issued together with \<LF\>. Hexadecimal format: 0x0D. |
|  \<LF\>   |    Line feed character    | End a command line and is issued together with \<CR\>. Hexadecimal format: 0x0A. |
|   \<…\>   |      Angle brackets       | Parameter name; <font color=#999AAA >Angle brackets <> do not appear on the command line.</font> |
|   \[…\]   |      Square brackets      | Optional parameter; <font color=#999AAA > Square brackets [ ] do not appear on the command line.</font></font> |


## __AT Command Syntax__

All command lines must start with __AT__ or __at__ . AT commands are divided into four types: __Test Command__, __Read Command__, __Write Command__, __Execution Command__ , as shown in the following table.

|           Syntax            |   Command Type    |                         Description                          |
| :-------------------------: | :---------------: | :----------------------------------------------------------: |
|       AT+ < CMD > =?        |   Test Command    | Test the existence of corresponding Write Command and return information about the type, value, or range of its parameter. |
|        AT+ < CMD >?         |   Read Command    | Check the current parameter value of a corresponding Write Command. |
| AT+ < CMD >=p1[,p2[,p3[…]]] |   Write Command   |             Set user-definable parameter value.              |
|         AT+ < CMD >         | Execution Command | Return a specific information parameter or perform a specific action. |

## __AT Command Response__

When a module has executed a command, __OK__, __ERROR__ or__+CME ERROR: \<err\>__ is returned, which indicates the module is ready to receive a new command. Usually, a command is followed by a response in <CR\>\<LF\>\<response\>\<CR\>\<LF\>  format. If an error occurs and __+CME ERROR: \<err\>__ is returned when you executed a command, you can look up the corresponding  __\<err\> error code__ in Summary of __\<err\>__ to quickly figure out the error cause.

The format of AT command response is divided into the following two types:

*	 \<CR\>\<LF\>+CMD: \<Parameter\>\<CR\>\<LF\>\<CR\>\<LF\>OK\<CR\>\<LF\>

*	 \<CR\>\<LF\>\<Parameter\>\<CR\>\<LF\>\<CR\>\<LF\>OK\<CR\>\<LF\>