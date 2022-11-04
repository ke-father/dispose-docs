# Overview of App Data Communication 

## Background

After your device access to Developer Center, the App can perform message communication through the functionalities of Websocket and OpenAPI. The flow chart of message communication is as follows.

<ALink imgurl="/en/quickStart/image2022-3-22_10-39-54.png" imgenurl="/en/quickStart/image2022-3-22_10-39-54_en.png" />

The App can use the SDK provided by the Platform, or call the Platform's OpenAPI to realize remote control of your device(s) See [OpenAPI User Guide](/en/appDevelop/OpenAPI.md) for detailed API.

Through WebSocket, the App interacts with the device(s) in real time and can obtain the message reported by the device(s), control the parameters of the device(s) and realize other functionalities. For the specific message format, see [WebSocket Message Format Definition](/en/appDevelop/websocket/formatDefinition.md).

