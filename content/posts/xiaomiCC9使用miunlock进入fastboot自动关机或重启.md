---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: "{{ Date }}"
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

开发者选项绑定并开USB调试
启动到fastboot后使用小米unlock自动关机或重启
先开机，使用小米unlock，显示正在连接
无法连接上，不断线重启至fastboot
可以解锁
找不到开发版线刷包
进入rec卡刷开发版
[小米 9 Lite/CC9 pyxis 官方 ROM 下载 | XiaomiROM.com](https://xiaomirom.com/series/pyxis/)
rfccnx/
fastboos与recovery模式无法连接小米助手
系统更新界面下载系统更新包
使用开发版本包替换此电脑\MI CC 9\内部存储设备\Download\downloaded_rom中的包
点重启立即更新
失败，应该是版本太高
下载ADB
重启至fastboot刷入twrp
[Xiaomi Mi 9 Lite/CC9](https://twrp.me/xiaomi/xiaomimi9lite.html)
[下载适用于 pyxis 的 TWRP](https://dl.twrp.me/pyxis/)

``` shell
adb reboot fastboot
fastboot flash recovery twrp-3.7.0_9-0-pyxis.img
fastboot boot twrp.img
```

刷入nethunter
[获取 Kali |卡利 Linux](https://www.kali.org/get-kali/#kali-mobile)
刷之前不小心把所有twrp显示的分区都删了
不清楚具体是删哪个分区导致的，再研究
导致无法使用MTP，无法用数据线导入包了
回xiaomirom随便找个线刷包刷入重来一下
进fastboot,用flash_all.bat
[下载官方小米刷机工具 MiFlash，含小米刷机教程步骤 | XiaomiROM.com](https://xiaomirom.com/download-xiaomi-flash-tool-miflash/)
无法刷入nethunter,显示成功实际没有刷入
刷入los相关的所有包
[LineageOS Downloads](https://download.lineageos.org/devices/pyxis/builds)
无法刷入
看了下lineage官方的安装步骤
[在 pyxis 上安装 LineageOS |LineageOS 维基](https://wiki.lineageos.org/devices/pyxis/install/variant1/#checking-the-correct-firmware)
尝试了一下，发现必须使用他的rec然后sideload,twrp不行
这里不知道为什么，后面研究下
成功安装los之后刷twrp装nethunter
MTP开启也无法导入
使用los的rec进行sideload，失败
提示要用magisk刷入
同样的方式刷入magisk
开机从magisk刷nethunter
更新系统后需要重刷magisk与nethunter
从日志看kali在chroot容器中
不知道这个用termux装chroot容器有没有区别
改天试试whyred的魔趣能不能刷这个[RedmiNote5刷nethunter]({{< relref "RedmiNote5%E5%88%B7nethunter.md" >}})
后面再看看