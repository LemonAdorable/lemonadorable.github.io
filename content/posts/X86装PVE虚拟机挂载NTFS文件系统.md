---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: "{{ .Date }}"
tags:
  - 刷机
  - 虚拟机
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

升级ventoy版本
BIOS关闭安全快速启动，切换为其他系统模式，开启虚拟化VT
安装PVE，断网安装后面配置很麻烦
默认用户名root
[PVE下三软路由之第二个旁路由iStoreOS安装（五） - 知乎](https://zhuanlan.zhihu.com/p/693976462)
[iStoreOS 固件 | 易有云产品中心](https://doc.linkease.com/zh/guide/istoreos/)

``` shell
qm importdisk 100 /var/lib/vz/template/iso/istoreos-22.03.7-2024122712-x86-64-squashfs-combined-efi.img local-lvm
```

记不得上传地址可以在任务日志中找复制数据
装win10需要装virtio驱动包，硬盘驱动选amd64下的，x86的装不了，可能这里不是我理解的意思，后面再看看
alpine跑docker 默认账号root密码lxc的密码
[pve 用lxc容器运行docker最小化部署，以及lxc所有问题汇总！](https://dev.leiyanhui.com/pve/docker-mini/)
挂载NTFS文件系统
ntfs挂载为只读，用ntfs3挂载即可进行读写
挂载失败
安装ntfs-3g，其中包含ntfsfix
[[已解决]通过 ntfs3 挂载 ntfs 分区失败 / 新手园地 / Arch Linux 论坛](https://bbs.archlinux.org/viewtopic.php?id=271650)

> [!NOTE] 引用
> Check your dmesg for errors with ntfs3. Chances are the volume is still marked dirty, and ntfs3 will not mount a partition where that is the case without the force option. ntfsfix without any arguments will actively set the dirty bit, so that a chkdsk from Windows can do a real check/analysis. If you don't have that handy and want to clear the dirty bit despite ntfsfix not being entirely a good checking tool you can pass the -d argument to ntfsfix.
> Thanks! You are right! Just need to enter the follow comands:

```shell
sudo ntfsfix -d /dev/sdb1
sudo mount -t ntfs3 /dev/sdb1 /mnt/Data
```
在存储中添加目录，内容选所有
可以共享目录，也可以在win虚拟机添加磁盘
端口映射，光猫处给虚拟机开DMZ就行