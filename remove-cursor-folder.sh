#!/bin/bash

# Create a temporary branch
git checkout --orphan temp_branch

# Add all files except .cursor
git add --all -- ':!.cursor'

# Commit changes
git commit -m "Remove .cursor folder"

# Delete the main branch
git branch -D main

# Rename temp branch to main
git branch -m main

# Force push to GitHub
git push -f origin main

echo "The .cursor folder has been removed from GitHub." 