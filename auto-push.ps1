# Auto-push script for Webnova project
# This script automatically adds, commits, and pushes changes to Git

param(
    [string]$CommitMessage = "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

Write-Host "Starting auto-push for Webnova..." -ForegroundColor Green

# Change to project directory
Set-Location "c:\Users\BradF\OneDrive\Desktop\Webnova"

# Check if there are any changes
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    exit 0
}

Write-Host "Changes detected. Adding files..." -ForegroundColor Cyan
git add .

Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m $CommitMessage

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "Failed to push to GitHub." -ForegroundColor Red
    exit 1
}

Write-Host "Auto-push completed!" -ForegroundColor Green