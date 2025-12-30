# Astro Theme Pure

English | [简体中文](./README-zh-CN.md)

---

## 🎨 自定义说明

本项目基于 [astro-theme-pure](https://github.com/cworld1/astro-theme-pure) 进行了自定义修改。

### 主要修改内容

- 头像与友链的交互动画
- giscus评论
- 全屏主页以及动画效果
- 颜色背景等细微修改
- 反向链接与反向定位引用
- 双向链接与参考文献

### todolist

 - 其他页的淡紫色
 - 类似quartz的搜索以及其他功能的移植，以及starlightobsidian的一些功能移植
 - 英文支持，首页简历，项目页更改，gpg签名


### 仓库结构

推送到 `astro-theme-pure` 仓库，GitHub Actions 会自动同步到博客仓库并部署。
```
原作者仓库 (cworld1/astro-theme-pure)
  └── main 分支
      ↓ (同步)
模板仓库 (LemonAdorable/astro-theme-pure)
  ├── main 分支 (跟踪原作者更新)
  └── diy 分支 (默认分支，自定义模板 = main + 自定义修改)
      ↓ (GitHub Actions 自动同步)
部署仓库 (LemonAdorable/lemonadorable.github.io)
  └── master 分支 (用于 GitHub Pages 部署)
```

---

## 📖 原项目说明

A simple, fast and powerful blog & document theme built by Astro.

[![GitHub deployments](https://img.shields.io/github/deployments/cworld1/astro-theme-pure/production?style=flat&logo=vercel&label=vercel)](https://astro-pure.js.org/)
[![NPM Version](https://img.shields.io/npm/v/astro-pure?logo=npm&style=flat)](https://www.npmjs.com/package/astro-pure)
[![GitHub Release](https://img.shields.io/github/v/release/cworld1/astro-theme-pure?include_prereleases&style=flat&label=template)](https://github.com/cworld1/astro-theme-pure/releases)
[![GitHub License](https://img.shields.io/github/license/cworld1/astro-theme-pure?style=flat)](https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE)

![image](./.github/assets/header.webp)
![image](./.github/assets/body.webp)

> [!NOTE]
> Known issues: 1. Header & customize options is still under development (template exposed still). 2. Theme template v4.0.5^ UnoCSS preset changed to PresetMini. If there's any problem, please report as issue.

## Introduction

Checkout [Demo Site →](https://astro-pure.js.org/)

### :fire: Features

- [x] :rocket: Fast & high performance
- [x] :star: Simple & clean design
- [x] :iphone: Responsive design
- [x] :mag: Full-site search built with [pagefind](https://pagefind.app/)
- [x] :world_map: Sitemap & RSS feed
- [x] :spider_web: SEO-friendly
- [x] :book: TOC (table of contents)
- [x] :framed_picture: Dynamic open graph generation for posts
- [x] :framed_picture: Mediumzoom lightbox for images

### :package: Components

Theme includes a lot of components, which can not only be used in the theme, but also in other astro projects.

> For other astro projects, UnoCSS is required. See [Package README](https://github.com/cworld1/astro-theme-pure/blob/main/packages/pure/README.md#use-with-common-astro-project) for more details.

- Basic components: `Aside`, `Tabs`, `Timeline`, `Steps`, `Spoiler`...
- Advanced components: `GithubCard`, `LinkPreview`, `Quote`, `QRCode`...

### :white_check_mark: Lighthouse score

[![lighthouse-score](./.github/assets/lighthouse-score.png)](https://pagespeed.web.dev/analysis/https-cworld-top/o229zrt5o4?form_factor=mobile&hl=en)

## Documentation

[Docs](https://astro-pure.js.org/docs) | [Showcase](https://github.com/cworld1/astro-theme-pure/issues/10)

## Package

See [astro-theme-pure](https://www.npmjs.com/package/astro-pure) on npm.

## Local development

Environment requirements:

- [Nodejs](https://nodejs.org/): 18.0.0+

Clone the repository:

```shell
git clone https://github.com/cworld1/astro-theme-pure.git
cd astro-theme-pure
```

Useful commands:

```shell
# install dependencies
bun install

# start the dev server
bun dev

# build the project
bun run build

# preview (after the build)
bun preview

# create a new post
bun new
```

## Contributions

To spend more time coding and less time fiddling with whitespace, this project uses code conventions and styles to encourage consistency. Code with a consistent style is easier (and less error-prone!) to review, maintain, and understand.

## Thanks

- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [Astro Resume](https://github.com/srleom/astro-theme-resume)
- [Starlight](https://github.com/withastro/starlight)

Other third party references are on [Docs#Contributions](https://astro-pure.js.org/docs/advanced/thanks). Appreciate for all open source libraries.

## License

This project is licensed under the Apache 2.0 License.

[![Star History Chart](https://api.star-history.com/svg?repos=cworld1/astro-theme-pure&type=Date)](https://star-history.com/#cworld1/astro-theme-pure&Date)
