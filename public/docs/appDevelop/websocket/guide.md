# WebSocket接入指导

## **WebSocket接入流程**

1.建立WebSocket连接 (服务地址：wss://iot-ws.quectelcn.com/ws/v1；数据帧大小限制：64K)，连接成功后发送心跳数据<br />
2.通过token(用户登录成功后返回)进行登录<br />
3.订阅设备<br />
4.监听数据上报<br />
5.控制设备

## **Android接入示例**

```c
// 集成
implementation 'com.neovisionaries:nv-websocket-client:2.14'
 
// 初始化连接
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
// websocket登录
String currentToken = QuecCommonManager.getInstance().getToken();  
loginCmd.setToken(currentToken);
send.setCmd(WebSocketConfig.CMD_LOGIN);
send.setData(loginCmd);
String msg =  new Gson().toJson(send);
sendMessage(msg);
```

## **iOS接入示例**

```c
// pod 集成
pod 'SocketRocket', '~> 0.6.0'
  
// 初始化连接
SRWebSocket *webSocket = [[SRWebSocket alloc] initWithURLRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"wss://iot-ws.quectel.com/ws/v1"]]];
webSocket.delegate = self;
  
// 发送心跳
NSDictionary *heartDictonary = @{@"cmd": @"pong"};
NSData *jsonData = [NSJSONSerialization dataWithJSONObject:heartDictonary options:0 error:0];
NSString *dataStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
NSError *error;
[_webSocket sendString:dataStr error:&error];
   
// 发送token
NSDictionary *tokenDictonary = @{@"cmd": @"login",@"data": @{@"token": @""}};
NSData *jsonData = [NSJSONSerialization dataWithJSONObject: tokenDictonary options:0 error:0];
NSString *dataStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
NSError *error;
[_webSocket sendString:dataStr error:&error];
```

**[其余消息类型可参考下列消息格式定义](/appDevelop/websocket/formatDefinition.md)**

