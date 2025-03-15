---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: "{ .Date }"
tags:
  - 虚拟机
categories: 
keywords: 
series: 
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

只能将空节点加入到非空节点
可以先备份虚拟机，备份文件可以在local中找到
然后删除虚拟机再加入集群
同时不同节点的名称不能相同
[重命名 PVE 节点 - Proxmox VE](https://pve.proxmox.com/wiki/Renaming_a_PVE_node)
添加集群后无法迁移节点
[[已解决] - 无法从一个节点迁移到另一个节点 |Proxmox 支持论坛](https://forum.proxmox.com/threads/cannot-migrate-from-one-node-to-another.60431/)

> [!NOTE] 当有机器不是常用机经常下线时
> Quorum仲裁机制为了防止脑裂集群要求半数以上机器在线
> - 临时方案：
> 设置集群期望的节点数为 1（即使实际有多个节点）
> pvecm expected 1
> 重启集群服务使配置生效
> systemctl restart pve-cluster corosync
> - 双节点集群 + QDevice 可容忍 1 节点下线，同时避免脑裂
> - 为关键的机器分配更高的票数，防止这台机器下线同时允许其他机器下线
> Corosync 的配置文件位于 `/etc/pve/corosync.conf`
> 合理分配quorum_votes之后重启systemctl restart corosync
> corosync-quorumtool -s查询
