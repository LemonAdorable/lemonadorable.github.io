# Push diy branch to astro-theme-pure repository
# GitHub Actions will automatically sync to lemonadorable.github.io
# Usage: .\scripts\push-diy.ps1 [-sync]
#   -sync: Sync from upstream before push

param(
    [switch]$sync
)

Write-Host "=== DIY Branch Push Tool ===" -ForegroundColor Cyan

# Sync from upstream if -sync flag is set
if ($sync) {
    Write-Host "`n[1/3] Fetching from upstream..." -ForegroundColor Yellow
    git fetch upstream
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to fetch upstream" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "[2/3] Merging upstream/main..." -ForegroundColor Yellow
    git merge upstream/main -m "chore: sync upstream updates"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Merge failed, please resolve conflicts manually" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "[3/3] Pushing to astro-theme-pure..." -ForegroundColor Yellow
}
else {
    Write-Host "`nSkipping upstream sync (use -sync flag to enable)" -ForegroundColor Gray
    Write-Host "`n[1/1] Pushing to astro-theme-pure..." -ForegroundColor Yellow
}

git push astro-theme-pure diy
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Done ===" -ForegroundColor Cyan
Write-Host "[OK] Pushed to astro-theme-pure/diy" -ForegroundColor Green
Write-Host "[OK] GitHub Actions will auto-sync to lemonadorable.github.io" -ForegroundColor Green
Write-Host ""
Write-Host "- Template: https://github.com/LemonAdorable/astro-theme-pure/tree/diy"
Write-Host "- Actions:  https://github.com/LemonAdorable/astro-theme-pure/actions"
Write-Host "- Blog:     https://lemonadorable.github.io"
