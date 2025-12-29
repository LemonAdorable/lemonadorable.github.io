# 推送脚本说明

## push-diy.ps1

用于将 `diy` 分支同时推送到两个远程仓库：
- `astro-theme-pure/diy` - 模板仓库
- `origin/master` - 部署仓库

### 使用方法

**Windows (PowerShell):**
```powershell
.\scripts\push-diy.ps1
```

**Linux/Mac (需要 PowerShell Core):**
```bash
pwsh scripts/push-diy.ps1
```

或者直接使用 Git 命令：
```bash
git push astro-theme-pure diy && git push origin diy:master
```

