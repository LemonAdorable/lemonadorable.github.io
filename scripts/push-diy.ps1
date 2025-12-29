# Push diy branch to two remote repositories
# Usage: .\scripts\push-diy.ps1 [-sync]
#   -sync: Sync from upstream before push

param(
    [switch]$sync
)

Write-Host "=== DIY Branch Push Tool ===" -ForegroundColor Cyan

# Sync from upstream if -sync flag is set
if ($sync) {
    Write-Host "`n[1/4] Fetching from upstream..." -ForegroundColor Yellow
    git fetch upstream
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to fetch upstream" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "[2/4] Merging upstream/main..." -ForegroundColor Yellow
    git merge upstream/main -m "chore: sync upstream updates"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Merge failed, please resolve conflicts manually" -ForegroundColor Red
        exit 1
    }
}
else {
    Write-Host "`nSkipping upstream sync (use -sync flag to enable)" -ForegroundColor Gray
}

# Push to template repo
$step = if ($sync) { "3/4" } else { "1/2" }
Write-Host "`n[$step] Pushing to astro-theme-pure (template)..." -ForegroundColor Yellow
git push astro-theme-pure diy
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push to astro-theme-pure" -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Template updated" -ForegroundColor Green

# Push to blog repo (deploy)
$step = if ($sync) { "4/4" } else { "2/2" }
Write-Host "`n[$step] Pushing to lemonadorable.github.io (deploy)..." -ForegroundColor Yellow
git push origin diy:master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push to origin" -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Blog deployment triggered" -ForegroundColor Green

Write-Host "`n=== Done ===" -ForegroundColor Cyan
Write-Host "- Template: https://github.com/LemonAdorable/astro-theme-pure/tree/diy"
Write-Host "- Blog: https://lemonadorable.github.io"
