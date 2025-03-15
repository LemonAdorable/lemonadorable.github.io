---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: 2025-03-15T22:19:29+08:00
tags:
  - 刷机
keywords: 
series: ""
author: Ling
math: true
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
description: 
canonicalURL: https://lemonadorable.github.io/to/page
disableHLJS: false
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: false
cover:
  image: <image path/url>
  alt: <alt text>
  caption: <text>
  relative: false
  hidden: false
editPost:
  URL: https://github.com/LemonAdorable/lemonadorable.github.io/tree/master/content
  Text: Suggest Changes
  appendFilePath: true
share: true
dir: posts
---

手机需要刷回miui
用miflash在fastboot模式下不识别设备
进入twrp刷入低版本卡刷包,忘记进行双清之类的操作
变砖
[为了写这个教程，我特意刷坏了一部手机（手机变砖无法进入fastboot模式，9008免授权刷机） - 搞七捻三 - LINUX DO](https://linux.do/t/topic/199716)
miflash安装驱动，连接USB识别到9008
进高通工具箱刷入引导失败

> [!NOTE] 用下面的方法判断是否进入9008模式
> 打开此电脑管理
> 长按关机键直到设备消失
> 长按音量+-以及关机直到识别

进高通工具箱刷入引导成功
刷XML时读取设备信息失败，日志提示在sahara下
每次失败都需要重进9008
使用miflash刷官方包，提示需要授权sig
但无法登录授权
找免验证包
[主页 | 萤火虫资源站](https://www.yhcres.top/)
使用高通工具箱刷机，失败
[红米note5强解bl和救砖教程 来自 修罗1122 - 酷安](https://www.coolapk.com/feed/57961121?shareKey=YjJiNmMzNTkzZmJlNjdiNDYyNjI~&shareUid=4369962&shareFrom=com.coolapk.market_14.5.3)
使用miko可以读取设备信息，但无法刷入镜像
重新尝试高通工具箱
看到写入的引导log里写入了660的CPU引导
尝试把636的引导名字改为660，报错
使用低版本高通工具箱，成功
进入fastbootd提示按任意键重启
重启提示加密中
无法进入系统，但是能进入小米rec
重起到fastboot提示按任意键退出
查到可能时USB接口版本问题
换一个USB2.0电脑接口重试
不再提示退出
刷入与启动twrp命令失败，发现有个名为？？？的设备
指定设备刷入
fastboot -s 设备号 boot twrp-3.7.0_9-0-whyred.img
打开miflash发现识别不到设备
桌面角标弹出安卓

``` shell
adb kill-server
adb start-server
fastboot devices
```

未知设备消失且可用miflash刷机
不小心选了flash&lock脚本
重解BL锁
重新刷入
折腾结束




留下的疑问
persist镜像作用
AB分区
sig的计算
tee工具