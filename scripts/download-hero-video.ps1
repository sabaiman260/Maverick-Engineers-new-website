# Download a small sample MP4 into `public/videos/hero.mp4`
# Usage (run from repo root PowerShell):
#   powershell -ExecutionPolicy Bypass -File .\scripts\download-hero-video.ps1

$sampleUrl = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"

# Determine repository root (assumes script is in repoRoot\scripts)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$repoRoot = Split-Path -Parent $scriptDir
$videosDir = Join-Path $repoRoot "public\videos"

if (-not (Test-Path $videosDir)) {
    New-Item -ItemType Directory -Path $videosDir -Force | Out-Null
}

$dest = Join-Path $videosDir "hero.mp4"

Write-Host "Downloading sample MP4 from:`n  $sampleUrl`nTo:`n  $dest`n" -ForegroundColor Yellow

try {
    Invoke-WebRequest -Uri $sampleUrl -OutFile $dest -UseBasicParsing -ErrorAction Stop
    Write-Host "Download completed: $dest" -ForegroundColor Green
} catch {
    Write-Host "Download failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "You can also manually download a small MP4 and place it at 'public/videos/hero.mp4'" -ForegroundColor Yellow
}
