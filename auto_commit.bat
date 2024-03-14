@echo off

:monitor_loop
REM Add all changes
git add .
REM Commit changes with a message
git commit -m "Auto-commit: Changes made on save"
REM Push changes to the remote repository
git push origin main

REM Wait for a short duration before checking for changes again
timeout /t 10 /nobreak >nul

REM Repeat the loop to continuously monitor for changes
goto monitor_loop
