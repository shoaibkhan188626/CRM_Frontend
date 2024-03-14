@echo off
:: Add all changes
git add .
:: Commit changes with a message
git commit -m "Auto-commit: Changes made on save"
:: Push changes to the remote repository
git push origin main
