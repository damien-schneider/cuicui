#!/bin/bash
# command to allow the script to be executed: chmod +x ./scripts/cleanup-repo.sh
# Set the base directory to the current directory
DIRECTORY_BASE="$(pwd)"

# Find and delete all node_modules directories
find "$DIRECTORY_BASE" -type d -name "node_modules" -prune -exec rm -rf '{}' +

# Find and delete all bun.lock and bun.lockb files
find "$DIRECTORY_BASE" -type f \( -name "bun.lock" -o -name "bun.lockb" \) -exec rm -f '{}' +

# Find and delete all .next directories
find "$DIRECTORY_BASE" -type d -name ".next" -prune -exec rm -rf '{}' +
# Find and delete all .turbo directories

find "$DIRECTORY_BASE" -type d -name ".turbo" -prune -exec rm -rf '{}' +

echo "All node_modules directories, bun.lock/bun.lockb files, .next and .turbo directories have been deleted in $DIRECTORY_BASE and its subdirectories."