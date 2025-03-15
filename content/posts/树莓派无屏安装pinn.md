---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: "{{ .Date }}"
tags:
  - 刷机
  - 引导
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

刷入pinn
联网断电重启
查所有局域网设备
```bash
arp -a
```
根目录下新建recovery.cmdline配置(recovery.cmdline被cmdline.txt替换掉了)
连不上网，看了下感觉应该是后面的github仓库更新打不开，命令直接放最开头就好了，不过后面要用这个连接加载列表。所以可能是其他原因
[headless setup, impossible: recovery.cmdline not found at all, autoboot.txt not working · Issue #843 · procount/pinn](https://github.com/procount/pinn/issues/843)

```plaintext
vncinstall forcetrigger
```
可能会用的参数vncshare与ssh
VNC登录，默认账密无，端口5900
选几个系统安装
先装个小的，选openwrt额外给1G
去掉forcetrigger配置
树莓派网线连电脑，重启
openwrt默认账密root,password
network选项卡开启openwrt wireless
树莓派接光猫，电脑连openwrt
# 暂未探索：
- pinn自动安装
# 一些问题：
- pinn有自己的vnc，那我怎么无缝登录启动后的系统的vnc
- 怎么在启动后的树莓派切换物理机上的系统
