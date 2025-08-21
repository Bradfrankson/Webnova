@echo off
echo Starting Webnova auto-push...
powershell -ExecutionPolicy Bypass -File "auto-push.ps1" %*
pause