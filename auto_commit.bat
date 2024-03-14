@echo off
:: Add all changes
git add .
echo "Changes added to staging area."
:: Commit changes with a message
git commit -m "Auto-commit: Changes made on save"
echo "Running the commits now"
:: Push changes to the remote repository
git push origin main
echo "Pushing the code"
