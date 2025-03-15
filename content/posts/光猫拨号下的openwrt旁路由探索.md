---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: "{{ Date }}"
tags:
  - 网络
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

光猫固件闭源不能刷机无法安装openwrt
手里的路由器只有百兆网口，而且还不能刷机
[三分钟搞定OpenWrt网关(旁路由)模式设置 小白必备教程 适用于N1及所有旁路由设备-斐讯无线路由器以及其它斐迅网络设备-恩山无线论坛](https://www.right.com.cn/FORUM/thread-4181997-1-1.html)
树莓派安装官方openwrt
luci-i18n-base-zh 官方页面汉化
ttyd 网页终端默认端口7681
istore 集成化软件商店[介绍 | 易有云产品中心](https://doc.linkease.com/zh/guide/istore/)
安装openclash前置失败
[无法安装问题 · Issue #923 · vernesong/OpenClash](https://github.com/vernesong/OpenClash/issues/923)

```bash
opkg remove dnsmasq && opkg install dnsmasq-full
```
首先，dnsmasq和full版本安装卸载要同时进行
opkg为该系统包管理器
[OpenWrt安装OpenClash - Forever Young](https://www.luxiyue.com/openwrt/openwrt%e5%ae%89%e8%a3%85openclash/)

> [!NOTE] 引用
> 旧版本基于iptables的Firewall3防火墙
> 新版本基于nftables的Firewall4防火墙

只需要4装就行
smartdns与dnsmasq冲突，禁用本地dns劫持
不知道为什么无线整没了，可能是插件装太多了
也可能是超我设的2G分区大小了，下次记得备份固件
[【openwrt折腾日记】解决openwrt系统 设备未激活，无线用不了的情况_openwrt 无线未关联-CSDN博客](https://blog.csdn.net/u010560236/article/details/136715420)
有线也打不开了，只能回PINN引导重新修理了
看到两个集成化固件
[【2024-6-1最新更新】 OpenWrt ipv6/docker/大全版/极致版/旁路由/应用商店/养老版-OPENWRT专版-恩山无线论坛](https://www.right.com.cn/forum/thread-4387071-1-3.html)
[iStoreOS易有云网络科技开发的路由存储系统](https://site.istoreos.com/)
[ImmortalWrt Firmware Selector](https://firmware-selector.immortalwrt.org/)
刷个istoreOS先看看
istoreOS 默认账密root password
由于我没有千兆路由器，只能用光猫拨号了，然后关闭光猫的所有DHCP服务即可
目前先配置NAT restricted cone，后面需要full cone再说
自己又配置了下，总是时不时断掉一会，然后还有DNS泄露
先按下面的配置解决问题
配置旁路由需要运营商的DNS时全部填主路由地址
openclash基本配置
[1分钟完美配置 OpenClash 旁路由，无DNS污染，无DNS泄露，自动选择、负载均衡，丝滑切换节点，永不断网，全网最强配置模版免费送！完美网络11](https://www.youtube.com/watch?v=0vVJYvV-nwE)
IPV6配置
[硬路由 + 旁路由OpenWRT + OpenClash + IPv6 完美配置 ，无DNS污染，无DNS泄露，人人都有公网IP，公网远程访问，完美网络17](https://www.youtube.com/watch?v=gBSVl_BqptQ)
主路由配置
[OpenClash 设置方案 · Aethersailor/Custom_OpenClash_Rules Wiki](https://github.com/Aethersailor/Custom_OpenClash_Rules/wiki/OpenClash-%E8%AE%BE%E7%BD%AE%E6%96%B9%E6%A1%88#%E7%A1%AE%E4%BF%9D-openwrt-%E5%8F%AF%E4%BB%A5%E6%AD%A3%E5%B8%B8%E8%AE%BF%E9%97%AE-github)
docker部署订阅链接解析
docker run --name=SubConverter -d --restart=always -p 25500:25500 asdlokj1qpi23/subconverter:latest
测试地址http://192.168.1.100:25500/sub
[1分钟完美配置 openClash 主路由，Sun-Pannel推荐，解决订阅模板失败，Docker部署订阅转换服务器，完美网络10](https://www.youtube.com/watch?v=Hm47TyJqVdc)
DNS泄露
[DNS Leak Test - BrowserLeaks](https://browserleaks.com/dns)
[IP/DNS Detect - What is your IP, what is your DNS, what informations you send to websites.](https://ipleak.net/)
IPV6
ipw.cn
test-ipv6.com
nj-uss-ipv6.vultr.com
ipaddress.com/dns-lookup 粘贴上面没有A记录
potplayer播放ipv6资源
备份istore配置
之后的一切修改都在沙箱,istoredup,docker，没问题再迁移

光猫设置路由器DMZ后，整个网络的所有设备全部开启了DMZ
关路由器DMZ
光猫为特定设备设置IPV4与IPV6虚拟服务器作为DMZ

为服务设置特定的内网网址
使用dnsmasq设置
优化排错维护
[OpenClash 终极优化！订阅转换100%成功！Google Play 正常下载！排错、域名维护，问题解决方法论，完美网络18](https://www.youtube.com/watch?v=QxOLvyCdVLU)

[固件缺少依赖的软件包 libopenssl3，导致很多插件无法安装 · Issue #1057 · istoreos/istoreos](https://github.com/istoreos/istoreos/issues/1057)

[(11) 30分钟精通 IPv6 下 Lucky 完美配置，公网域名DDNS + SSL + Https + 端口转发 访问NAS应用，完美网络19 - YouTube](https://www.youtube.com/watch?v=85TNLGVoJEA)

[完全版！从0开始，旁路由 OpenClash + 双 AdGuard Home 教程，手把手喂饭教程，完美网络23](https://www.youtube.com/watch?v=0kCSJL_lSyw)

[(11) OpenClash 终极优化！订阅转换100%成功！Google Play 正常下载！排错、域名维护，问题解决方法论，完美网络18 - YouTube](https://www.youtube.com/watch?v=QxOLvyCdVLU)
whatmydns.me dns主机名映射

是否使用代理上网
[代理/VPN 检测](https://proxy.888005.xyz/)
[Live Proxy/VPN Detection](https://proxy.incolumitas.com/proxy_detect.html)
[【代理检测】盘点解决各种代理检测手段的方法，防止账号被风控，拒绝裸奔，tiktok运营、跨境电商小白用户必看｜IP黑名单检测｜延迟检测｜IP泄漏检测｜TCP/IP指纹检测](https://www.youtube.com/watch?v=_EoccSHSiAU)

