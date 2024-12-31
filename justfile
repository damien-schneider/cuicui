# default recipe to display help information
default:
  @just --list --list-heading $'\n-------------------------------------------\n\n---   Here are the available commands   ---\n\n-------------------------------------------\n\n'

# Display all the dependencies in the mono-repo, including the dependencies of the dependencies
[group('Simple scripts')]
check-dependencies:
  pnpm ls --depth=Infinity -r > dependencies_list.txt

# Remove .next & node_modules & pnpm-lock.yaml & .turbo
[group('Simple scripts')]
clean:
  turbo clean && ./scripts/cleanup-repo.sh

# Reset pnpm-lock.yaml in the root directory and all the sub-folders
[group('Simple scripts')]
reset-pnpm:
  pnpm recursive install --force

# Run turbo build with the --graph option to generate a graph of the build process
[group('Build')]
build-graph:
  turbo run build --graph=turbo-graph.jpg

# Run turbo build
[group('Build')]
build:
  turbo build

# Run turbo build for /packages/**/* only
[group('Build')]
build-packages:
  turbo build --filter='./packages/**/*'

# This is a command to build the UI package
[group('build'), working-directory('packages/ui')]
build-ui:
  pnpm build

# Check all
[group('Format & Lint')]
biome-check:
  pnpm biome check

# Check errors only
[group('Format & Lint')]
biome-check-error:
  pnpm biome check --diagnostic-level=error

# Apply all suggestions
[group('Format & Lint')]
biome-write:
  pnpm biome check --write

# Apply all suggestions even unsafe ones
[group('Format & Lint')]
biome-write-unsafe:
  pnpm biome check --write --unsafe

