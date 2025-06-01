---
title:
  "{ title }": 
date: 2025-06-02T05:33:30+08:00
slug: 
tags:
  - Word
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
# 必要功能
ALT +F9 显示域代码
CTRL +F9 创建域括号{}，域代码与域括号间要有1个空格
CTRL+ALT+ENTER 样式分隔符（抽取下一行的回车将其转变为样式分隔符，要提前预留下一行的回车，或者说意思就是如何在一行插入多个回车）（样式分隔符与回车都是某一部分样式的标志，所以改变这个符号的样式就是改变整个部分的样式，同样的这个符号也是引用、编号、域的界限与标志）
CTRL+* 显示隐藏编辑标记（方便看不显示的符号）
ALT+= 转换为公式
CTRL+P 打印预览（作用为刷新全局域）
# 公式相关
mathtype等插件很难批量自定义格式
用word自带公式
latex公式要转换为专业格式
推荐公式#+enter编号
&对齐，\\\\换行等基本操作都与latex语法一致
编号加域来交叉引用，方便后面批量编辑编号格式
多用格式刷解决复杂的格式问题
[Word中公式自动编号及交叉引用的解决方案 - 知乎](https://zhuanlan.zhihu.com/p/109212246)
公式换行/操作方形公式框，右键新建行删除行
[Word多行公式的换行、对齐与编号 - 知乎](https://zhuanlan.zhihu.com/p/439988361)
# 自定义标号相关
下面第一种适用于不想更新原来的编号方式，因为做了太多引用的情况
否则建议统一用第二种方式
## 类似于(1-1)的编号
多级列表设置1级和2级编号的样式，2级为实际想要的标号，1级是为了分辨章节
在listnum多级列表设置完毕后
在新的一行添加一个样式为(1-0)编号，如下，并刷白
```
{LISTNUM  Equation \l 2 \s 0 } 
```
每一章标题后设置样式为1的一级标号，如下，并刷白
{ LISTNUM Equation \l 1 }
其他部分正常编号即可。
交叉引用对应编号即可
## 定理编号以及引用
如果章节编号为中文大写，那么直接插入题注会是“一.1”，需要格式为“1.1”
每章标题后插入如下域
```
{ SEQ seq \h }
```
新建的题注改为如下样式
```
引理 { SEQ seq \c }{ SEQ 引理 \* ARABIC \s 1}
```
交叉引用使用整项题注，在不需要引用的内容前插入样式分隔符
## 引用编号类似于\[3,5,9\]

```
{ REF _Refxxxxxxxxx \r \h \#"[0"  \* MERGEFORMAT },{ REF _Refxxxxxxxxx \r \h \#"0"  \* MERGEFORMAT },{ REF _Refxxxxxxxxx \r \h \#"0]"  \* MERGEFORMAT }

\#"[0"
\#"0"
\#"0]"
```


# 域相关
[Word 中的域代码列表 - Microsoft 支持](https://support.microsoft.com/zh-cn/office/word-%E4%B8%AD%E7%9A%84%E5%9F%9F%E4%BB%A3%E7%A0%81%E5%88%97%E8%A1%A8-1ad6d91a-55a7-4a8d-b535-cf7888659a51)
[一篇文章教会你使用word域代码（seq field code ）_word文档域的使用 seq-CSDN博客](https://blog.csdn.net/songchuwang1868/article/details/104816016)
# 引用排序
可以用zotero等进行文献管理
[GitHub - Casxt/SortReference: Sort the bibliography by citation order.](https://github.com/Casxt/SortReference)
[检查word里参考文献引用依出现先后顺序排列（半自动化）_word参考文献按照引用顺序排序-CSDN博客](https://blog.csdn.net/Zjhao666/article/details/123494160)
可惜上面的方法需要手动排序，且如果参考文献列表为编号形式，那么不会修改这些编号（可能是因为编号会自动更新不必刷新域）
上面更新逻辑为先计算好再全部替换更新，即
``` PYTHON
count = {}
new_id = {}
for ref in ref_order:
    if ref in count:
        count[ref] += 1
    else:
        count[ref] = 1
        new_id[ref] = str(len(count))
```

如果你的引用方法，使用上面的排序方法会造成引用丢失或者乱套，可以用下面方法
``` PYTHON
def simulate_adjusted_renumbering(refs):
    """
    输入：
      refs: 原始引用编号列表，例如 [20, 24, 21]
    输出：
      一个列表，每项对应一条替换记录，
      格式为 (old, adjusted, new)：
        old      = 原始编号
        adjusted = 实施完成前面所有步骤后并刷新域后的编号，称为调整后编号
        new      = i+1（第 i 个引用的新编号,调整后的编号应该插入的位置）
    """
    steps = []
    for i, old in enumerate(refs):
        # 计算之前出现的，且原编号 > 当前 old 的数量
        count = sum(1 for prev in refs[:i] if prev > old)
        adjusted = old + count
        new = i + 1
        steps.append((old, adjusted, new))
    return steps

# 示例：
refs = [20, 24, 21,7,2,45,3,23]
for old, adjusted, new in simulate_adjusted_renumbering(refs):
    print(f"[{old}-{adjusted}-{new}]")

#输出[20-20-1][24-24-2][21-22-3][7-10-4][2-6-5][45-45-6][3-8-7][23-25-8]

```
更新逻辑为每替换一个（将原本编号的引用移动到新的编号位置）后刷新域重排编号再重复
自动保证不出错误的流程应该为：
先查具体格式，替换格式（不要选中最后的空格以及回车），替换到正确的编号所在的文献之前（复制包含回车的项，复制到正确位置文献的第一个字前），刷新编号的域。找到下一个编号，首先刷新编号的域，然后重复上面的过程
<font color="#ff0000">暂未封装，可参考上面github处理word的逻辑</font>
# 坑
不建议用书签等方式，建议全部用域，方便自动化与批量操作
更新编号方式，原来的引用会失效
在复制新的word文档或一些奇怪的操作后，自定义的多级列表，编号格式，题注等有可能被删掉，删掉之后再想插入，就复制域代码即可
遇到奇怪的对齐问题，优先看下段落缩进
对于数学类文章，word排版比起latex困难很多