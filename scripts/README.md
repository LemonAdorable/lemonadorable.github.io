# 推送脚本说明

## push-diy.ps1

用于将 `diy` 分支同时推送到两个远程仓库：
- `astro-theme-pure/diy` - 魔改版模板仓库（供他人使用）
- `origin/master` - 博客部署仓库（lemonadorable.github.io）

### 仓库配置

```
origin          → LemonAdorable/lemonadorable.github.io  (博客部署)
astro-theme-pure → LemonAdorable/astro-theme-pure        (魔改版模板)
upstream        → cworld1/astro-theme-pure              (上游主题)
```

### 使用方法

**日常推送（只推送，不同步上游）：**
```powershell
.\scripts\push-diy.ps1
```

**同步上游并推送：**
```powershell
.\scripts\push-diy.ps1 -sync
```

**手动命令：**
```bash
# 同步上游
git fetch upstream
git merge upstream/main

# 推送到两个仓库
git push astro-theme-pure diy      # 更新魔改版
git push origin diy:master         # 部署博客
```

### 工作流程

1. 日常在 `diy` 分支开发和修改
2. 提交更改：`git add . && git commit -m "描述"`
3. 运行推送脚本：`.\scripts\push-diy.ps1`
4. 如需同步上游更新：`.\scripts\push-diy.ps1 -sync`
