@echo off
setlocal
cd /d "%~dp0"
title Guru POS v12 Local Server

echo ============================================================
echo  GURU POS BUILD 12.0.0 - STARTING FROM THIS EXACT FOLDER
echo ============================================================
echo Project folder: %CD%
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not available in PATH.
  echo Install Node.js, then run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\sql.js" (
  echo Installing required packages...
  call npm.cmd install
  if errorlevel 1 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
  )
)

set PORT=8091
echo.
echo The browser will open at http://localhost:8091
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:8091/reset-local-cache.html'"
call npm.cmd run dev
pause
