# 推送脚本说明

## push-diy.ps1

只需推送到 `astro-theme-pure` 仓库，GitHub Actions 会自动同步到博客仓库并部署。

### 工作流程

```
推送 diy 分支
     ↓
astro-theme-pure 仓库
     ↓ (GitHub Actions 自动同步)
lemonadorable.github.io 仓库
     ↓ (GitHub Actions 自动部署)
博客上线
```

### 仓库配置

```
upstream         → cworld1/astro-theme-pure              (上游主题)
astro-theme-pure → LemonAdorable/astro-theme-pure        (魔改版模板)
                   ↓ (自动同步)
                   LemonAdorable/lemonadorable.github.io (博客部署)
```

### 使用方法

**日常推送：**
```powershell
.\scripts\push-diy.ps1
```

**同步上游并推送：**
```powershell
.\scripts\push-diy.ps1 -sync
```

### 首次配置

需要在 `astro-theme-pure` 仓库设置 Secret：

1. 创建 Personal Access Token (PAT)：
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并复制 token

2. 添加 Secret：
   - 访问 https://github.com/LemonAdorable/astro-theme-pure/settings/secrets/actions
   - 点击 "New repository secret"
   - Name: `BLOG_DEPLOY_TOKEN`
   - Value: 粘贴刚才的 token
