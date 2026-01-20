# Development Container Configuration

This directory contains the configuration for GitHub Codespaces and Dev Containers.

## What's Included

- **Node.js 20** - JavaScript runtime
- **Angular CLI** - Angular development tools
- **Git & GitHub CLI** - Version control tools
- **VS Code Extensions**:
  - Angular Language Service
  - Prettier (code formatting)
  - ESLint (linting)
  - Docker support
  - Spell checker

## How to Use

### GitHub Codespaces
1. Go to your GitHub repository
2. Click `Code` → `Codespaces` → `Create codespace on master`
3. Wait for the environment to be set up (~2-3 minutes)
4. Angular dev server will start automatically on port 4200

### Local Dev Container
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [VS Code Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open the project in VS Code
4. Click `>< Dev Container: Reopen in Container`

## Features

- ✓ Auto-install dependencies (`npm install`)
- ✓ Pre-build project on startup
- ✓ Auto-start dev server (port 4200)
- ✓ Prettier auto-formatting
- ✓ ESLint integration
- ✓ Full Git support
