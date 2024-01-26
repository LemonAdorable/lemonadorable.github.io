---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
# weight: 1
# aliases: ["/first"]
# hugo new --kind post posts/hello-world.md
tags: ["first"]
author: "Ling"
# author: ["Me", "You"] # multiple authors
math: true
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
description: "Desc Text."
canonicalURL: "https://lemonadorable.github.io/to/page"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/LemonAdorable/lemonadorable.github.io/tree/master/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---
