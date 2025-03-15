---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: "{{ .Date }}"
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

解BL锁
[申请解锁小米手机](https://www.miui.com/unlock/index.html)
开发版刷机包
[红米 Note 5 / Note 5 Pro (whyred) 全球版 Fastboot 线刷包 & Recovery 卡刷包 ROM | XiaomiROM.com](https://xiaomirom.com/rom/redmi-note-5-note-5-pro-whyred-global-fastboot-recovery-rom/)
刷机工具
[下载官方小米刷机工具 MiFlash，含小米刷机教程步骤 | XiaomiROM.com](https://xiaomirom.com/download-xiaomi-flash-tool-miflash/)
刷入开发版
设置中搜root,解锁root权限
手机下载twrp应用与magisk应用
twrp中搜索型号whyred
[twrp.me](https://twrp.me/)
[TeamWin/android_device_xiaomi_whyred](https://github.com/TeamWin/android_device_xiaomi_whyred)
[topjohnwu/Magisk: The Magic Mask for Android](https://github.com/topjohnwu/Magisk)
twrp自动刷入或magisk刷入twrp
获取root权限的官方网站年久失修了
下载ADB
[SDK 平台工具版本说明  |  Android Studio  |  Android Developers](https://developer.android.com/tools/releases/platform-tools?hl=zh-cn)
[通用 ADB 驱动程序](https://adb.clockworkmod.com/)
下载twrp镜像
[Download twrp-3.7.0_9-0-whyred.img](https://dl.twrp.me/whyred/twrp-3.7.0_9-0-whyred.img.html)
用magisk补全刚刚线刷包中的boot.img
adb刷入

``` shell
adb reboot bootloader
fastboot flash boot magiskboot.img
fastboot flash recovery twrp.img
fastboot reboot
```

长按开机和音量加
音量加坏了
重启系统后进入twrp应用，reboot to rec
下载通用包
[Index of /nethunter-images/current/](https://kali.download/nethunter-images/current/)
内核
[Release Team420 Nethunter RAD x5.4 EAS Whyred v3.4 · Team-420/Nethunter-Whyred-Eas](https://github.com/Team-420/Nethunter-Whyred-Eas/releases/tag/Nethunter-v3.4)

> [!NOTE] 引用
> INSTALL INSTRUCTIONS:
> 
> 1. Reboot into Recovery (e.g. TWRP)
> 2. Flash official nethunter arm64 generic zip: [https://images.kali.org/nethunter/nethunter-2020.3-generic-arm64-kalifs-full.zip](https://images.kali.org/nethunter/nethunter-2020.3-generic-arm64-kalifs-full.zip)
> 3. Flash the kernel zip attached in this post.
> 4. Flash latest Magisk zip.
> 5. Reboot. Install the Nethunter App and NH Terminal via Nethunter Store ([https://store.nethunter.com/](https://store.nethunter.com/)) if they didnt get installed already.
> 6. Give nethunter app and terminal all permissions it asks for. Open Nethunter app and navigate to "Kali Chroot Manager" and make sure kali chroot is getting set up and started correctly.
> 7. Profit

> [!NOTE] 按键坏掉时的处理办法
> whyred长按电源键开关机，长按电源+音量减bootloader，长按电源+音量加recovery
> - 电源键坏的情况
> 能开机则adb reboot bootloader或adb reboot recovery
> 不能开机只能维修
> - 音量减坏情况
> 进recovery开机再用adb
> - 音量加坏的情况
> 法一fastboot线刷完整包开机
> 法二fastboot reboot recovery
> 如果上面命令导致重复启动
> 回到fastboot刷入twrp开机fastboot boot twrp.img

刷rootfs包提示成功实际失败
提示必须要完成安卓向导
没找到lineageOS官方编译好的包
先刷入魔趣并完成向导
[删库跑路 - 马丁龙猪的博客](https://blog.mokeedev.com/2023/01/1437/)
[MoKee Open Source Project - Browse Files at SourceForge.net](https://sourceforge.net/projects/mokee/files/)
刷kalifs包full版本失败，提示内存不足
刷mini版本，成功
包中安装的kali应用即使给所有权限也提示权限不足
可能通用包有些地方不匹配
后面再研究[xiaomiCC9使用miunlock进入fastboot自动关机或重启]({{< relref "{{< relref "xiaomiCC9%E4%BD%BF%E7%94%A8miunlock%E8%BF%9B%E5%85%A5fastboot%E8%87%AA%E5%8A%A8%E5%85%B3%E6%9C%BA%E6%88%96%E9%87%8D%E5%90%AF.md" >}}" >}})

[RedmiNote5无法进入fastboot屏幕无输出救砖]({{< relref "{{< relref "RedmiNote5%E6%97%A0%E6%B3%95%E8%BF%9B%E5%85%A5fastboot%E5%B1%8F%E5%B9%95%E6%97%A0%E8%BE%93%E5%87%BA%E6%95%91%E7%A0%96.md" >}}" >}})