#!/bin/bash

set -e

echo "Building assets..."
npm run build

echo "Deploying to GitHub Pages..."
cd dist

# Initialize a new git repository in the build directory
git init
git add -A
git commit -m 'deploy'

# Force push the contents of the build directory to the gh-pages branch
git push -f git@github.com:<USERNAME>/<REPOSITORY>.git master:gh-pages

cd -
