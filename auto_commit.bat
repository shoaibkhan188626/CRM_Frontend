@echo off
:: Add all changes
echo "Changes added to staging area."
git add .
:: Commit changes with a message
echo "Running the commits now"
git commit -m "Auto-commit: Changes made on save"
:: Push changes to the remote repository
echo "Pushing the changes"
git push origin main
