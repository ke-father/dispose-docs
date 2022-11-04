# WebSocket Access Guide

## **WebSocket Access Process**

1. Establish a WebSocket connection (service address: wss://iot-ws.quectelcn.com/ws/v1; data frame size limit: 64 KB) . Send heartbeat data after a successful connection <br />
2. Log in with token (returned after you log in successfully )<br />
3. Subscribe to a device<br />
4. Monitor data report<br />
5. Control the device

## **Access Example on Android**

```c
// Implement
implementation 'com.neovisionaries:nv-websocket-client:2.14'
 
// Initialize the connection
if (ws==null) {
    try {
        ws = new WebSocketFactory().createSocket(myUrl, CONNECT_TIMEOUT)
                .setFrameQueueSize(FRAME_QUEUE_SIZE)
                .setMissingCloseFrameAllowed(false)
                .addListener(mListener = new WsListener())
                .connectAsynchronously();
        setStatus(WsStatus.CONNECTING);
    } catch (IOException e) {
        e.printStackTrace();
    }
}
//Access to WebSocket 
String currentToken = QuecCommonManager.getInstance().getToken();  
loginCmd.setToken(currentToken);
send.setCmd(WebSocketConfig.CMD_LOGIN);
send.setData(loginCmd);
String msg =  new Gson().toJson(send);
sendMessage(msg);
```

## **Access Example on iOS**

```c
// Integrate with pod
pod 'SocketRocket', '~> 0.6.0'
  
// Initialize the connection
SRWebSocket *webSocket = [[SRWebSocket alloc] initWithURLRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"wss://iot-ws.quectel.com/ws/v1"]]];
webSocket.delegate = self;
  
// Send heartbeat data packet
NSDictionary *heartDictonary = @{@"cmd": @"pong"};
NSData *jsonData = [NSJSONSerialization dataWithJSONObject:heartDictonary options:0 error:0];
NSString *dataStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
NSError *error;
[_webSocket sendString:dataStr error:&error];
   
// Send the token value
NSDictionary *tokenDictonary = @{@"cmd": @"login",@"data": @{@"token": @""}};
NSData *jsonData = [NSJSONSerialization dataWithJSONObject: tokenDictonary options:0 error:0];
NSString *dataStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
NSError *error;
[_webSocket sendString:dataStr error:&error];
```

**[For other message types, see WebSocket message format definitions.](/en/appDevelop/websocket/formatDefinition.md)**

