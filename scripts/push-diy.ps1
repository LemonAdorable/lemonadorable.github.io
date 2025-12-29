# 推送 diy 分支到两个远程仓库
# 使用方法: .\scripts\push-diy.ps1

git push astro-theme-pure diy
if ($LASTEXITCODE -eq 0) {
    git push origin diy:master
} else {
    Write-Host "推送到 astro-theme-pure 失败，停止推送" -ForegroundColor Red
    exit 1
}

