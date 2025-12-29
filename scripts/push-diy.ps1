# Push diy branch to two remote repositories
# Usage: .\scripts\push-diy.ps1

git push astro-theme-pure diy
if ($LASTEXITCODE -eq 0) {
    git push origin diy:master --force
} else {
    Write-Host "Failed to push to astro-theme-pure, stopping" -ForegroundColor Red
    exit 1
}

