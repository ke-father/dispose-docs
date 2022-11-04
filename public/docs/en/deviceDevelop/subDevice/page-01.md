# Gateway Sub-device Overview

## Gateway Introduction：

After the gateway device is powered on, the first task is to connect to Developer Center (hereinafter referred to as Developer Center) through cellular mobile or other networking means, and at the same time the gateway device responds to the messages of searching the gateway device broadcast by the sub-device. When the gateway device successfully logs in to Developer Center, it sends a connection status broadcast packet. After it successfully connects to Developer Center, it starts to forward messages from the sub-devices to Developer Center. Before that, all messages received from the sub-devices are discarded and not saved. After receiving the messages sent by Developer Center to the sub-device, the gateway device forwards the message to the corresponding sub-device (including but not limited to sub-device logout messages); when the gateway device receives its own logout message, it notifies all sub-devices to go offline.


## Sub-device Introduction：

Due to the limitations of the environment and device resources, Device A cannot be directly connected to Developer Center, and they needs to be indirectly connected to Developer Center through a Device B that can directly connect to Developer Center; therefore, Device A is named as a sub-device. The biggest difference between a sub-device and an ordinary device is that the sub-device cannot be directly connected to Developer Center, but the rest of the features are the same as a ordinary device.

