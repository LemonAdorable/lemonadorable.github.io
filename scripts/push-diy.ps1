# Push diy branch to two remote repositories
# Usage: .\scripts\push-diy.ps1 [-sync]
#   -sync: 先从上游同步更新再推送

param(
    [switch]$sync
)

Write-Host "=== DIY 分支推送工具 ===" -ForegroundColor Cyan

# 如果指定了 -sync 参数，先从上游同步
if ($sync) {
    Write-Host "`n[1/4] 从上游获取更新..." -ForegroundColor Yellow
    git fetch upstream
    if ($LASTEXITCODE -ne 0) {
        Write-Host "获取上游更新失败" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "[2/4] 合并上游 main 分支..." -ForegroundColor Yellow
    git merge upstream/main -m "chore: 同步上游更新"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "合并失败，请手动解决冲突后重新运行" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "`n跳过上游同步 (使用 -sync 参数启用)" -ForegroundColor Gray
}

# 推送到魔改版仓库
$step = if ($sync) { "3/4" } else { "1/2" }
Write-Host "`n[$step] 推送到 astro-theme-pure (魔改版模板)..." -ForegroundColor Yellow
git push astro-theme-pure diy
if ($LASTEXITCODE -ne 0) {
    Write-Host "推送到 astro-theme-pure 失败" -ForegroundColor Red
    exit 1
}
Write-Host "✓ 魔改版已更新" -ForegroundColor Green

# 推送到博客仓库（部署）
$step = if ($sync) { "4/4" } else { "2/2" }
Write-Host "`n[$step] 推送到 lemonadorable.github.io (部署博客)..." -ForegroundColor Yellow
git push origin diy:master
if ($LASTEXITCODE -ne 0) {
    Write-Host "推送到 origin 失败" -ForegroundColor Red
    exit 1
}
Write-Host "✓ 博客部署已触发" -ForegroundColor Green

Write-Host "`n=== 完成 ===" -ForegroundColor Cyan
Write-Host "- 魔改版: https://github.com/LemonAdorable/astro-theme-pure/tree/diy"
Write-Host "- 博客: https://lemonadorable.github.io"
