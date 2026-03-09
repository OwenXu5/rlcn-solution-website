---
title: 火箭联盟连不上服务器的解决方案汇总
description: 连接不上游戏服务器的多种解决方案
---

# 火箭联盟连不上服务器的解决方案汇总

## [返回主页](/)

---
## 如果你不知道该如何改 Host
改 host 工具下载链接：[Usbeam Host Editor](https://www.dogfight360.com/blog/475/)
- 点击左下角**手柄**图标
- 选择**Reverse Proxy - 反代加速（游戏相关）**
- 选择**火箭联盟 解决大陆地区无法连接**
- 点击**检测延迟**
- 选择一个连通的服务器（推荐日本/美国）
- 点击**应用选中**

![改 host 示意图 1](/pics/connection/usb1.jpg)

![改 host 示意图 2](/pics/connection/usb2.jpg)
---
## 针对无法连接游戏服务器的解决方案

以下方法可**按顺序**尝试：

1. 更改 host 服务器和加速器节点

    如上，在 usbeam host editor 中**更换 host 服务器**，并尝试加速器的**不同节点**或**不同加速器**。

2. 尝试删除游戏的本地网络缓存

    删除位于如下路径下的**所有内容**

    **我的文档\My Games\Rocket League\TAGame\Cache**

    ![缓存](/pics/connection/cache.png)
3. 更换 DNS
    - 改 DNS 教程

    [改 DNS 教程（Win10）](https://blog.csdn.net/itnerd/article/details/106764904)

    [改 DNS 教程（Win11）](https://blog.csdn.net/qq_44628595/article/details/121989853)

    - 推荐 DNS 列表

        |服务商|DNS 服务器 | 备用 DNS 服务器 |
        |:----:|:----:|:----:|
        |**114**|114.114.114.114|115.115.115.115|
        |**阿里 AliDNS**|223.5.5.5|223.6.6.6|
        |**百度 BaiduDNS**|180.76.76.76|无|
        |**Google DNS**|8.8.8.8|8.8.4.4|


4. 清除 DNS 缓存
- 打开 CMD
    按下<kbd>Ctrl</kbd>+<kbd>R</kbd>呼起运行，输入 CMD 并<kbd>Enter</kbd>
- 在 CMD 中输入如下命令并执行
    >ipconfig /flushdns

    ![flushdns](/pics/connection/flushdns.jpg)

5. ***重置 Winsock（慎用）***
- 打开 CMD  
    按下<kbd>Ctrl</kbd>+<kbd>R</kbd>呼起运行，输入 CMD 并<kbd>Enter</kbd>
- 在 CMD 中输入如下命令并执行
    >netsh reset winsock

    注意，虽然使用此命令可以恢复各种网络连接问题，但也应谨慎使用，当执行完此命令重启计算机后，需要对 IP 重新配置，并有可能需要重新安装 LSP (layered service provider) 分层服务提供商，在以前版本的 Windows XP 中，删除不正确的 LSP 可能会导致注册表中的 Winsock 目录损坏，潜在的导致所有网络连接的丢失。LSP 是 TCP/IP 等协议的接口。LSP 用在正途上可以方便程序员们编写监视系统网络通讯情况的 Sniffer，可是现在常见的 LSP 都被用于浏览器劫持。

## [返回主页](/)
