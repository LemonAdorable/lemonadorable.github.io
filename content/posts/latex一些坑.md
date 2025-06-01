---
title:
  "{ title }": 
date: 2025-06-02T05:33:30+08:00
slug: 
tags:
  - Latex
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

# 编辑器
[在线LaTeX公式编辑器-编辑器](https://www.latexlive.com/)
[overleaf/overleaf: A web-based collaborative LaTeX editor](https://github.com/overleaf/overleaf)
[miktex](https://miktex.org/)
[AxSoft - 方程式编辑器和图表制作器](https://www.axsoft.co/)付费编辑器
自动更新方便
[安装 ·James-Yu/LaTeX-Workshop 维基](https://github.com/James-Yu/LaTeX-Workshop/wiki/Install)[iamhyc/Overleaf-Workshop: Open Overleaf/ShareLaTex projects in vscode, with full collaboration support.](https://github.com/iamhyc/Overleaf-Workshop)
vscode插件

# 简介
[jdleesmiller/latex-course: An interactive introduction to LaTeX using Overleaf.](https://github.com/jdleesmiller/latex-course?tab=readme-ov-file)

# 模板
[hantang/latex-templates: A collection of awesome LaTeX Thesis/Dissertation templates and beyond! //（LaTeX / Word / Typst / Markdown 格式的学位论文、演示文稿、报告、项目申请书、简历、书籍等模板收藏）](https://github.com/hantang/latex-templates)
[posquit0/Awesome-CV: :page_facing_up: Awesome CV is LaTeX template for your outstanding job application](https://github.com/posquit0/Awesome-CV)
# 坑
使用cjk包时，需要gbk编码，如果导言区有中文的引用也要加标签（例如页眉页脚的中文引用）。建议直接换UTF编码
几种公式环境和编号换行[Latex中书写公式 - 知乎](https://zhuanlan.zhihu.com/p/480184909)
文件目录全英文
每次编译清理辅助文件，否则有概率编译失败
模板编译错误时，检查是否安装模板所需的包。miktex会自动安装，只需检查网络环境
# 编译结构
可编译的文件：
dtx为代码说明文档一体的结构，可编译为宏包说明文档
tex编译为正常文档
ins通过docstrip分解dtx为cls,sty和bbx,cbx,bst
bbx,cbx,bst为参考文献相关样式，一般不包含在dtx，而是单独列出
xetex先通过ins生成模板，也就是生成分解dtx后的文件
之后可以使用各种配方编译文档，配方使用xelatex,lualatex等latex引擎
配方可以由自动化构建工具生成，如很多工具使用build.lua，latexmk使用latexmkrc，gnu-make使用makefile分别配置编译过程
[tuna/thuthesis: LaTeX Thesis Template for Tsinghua University](https://github.com/tuna/thuthesis
MD文档可以直接嵌入latex文档，<font color="#ff0000">怎么嵌入</font>