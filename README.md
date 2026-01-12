# UI 🎨

A monorepo of Vue 3 UI component packages for various projects ✨

## Stack 🔧

- Vue 3
- TypeScript
- Vite (Rolldown)
- pnpm workspaces
- Reka UI
- Inter Variable font

## Component Packages 📦

- **`@perd-ui/check-box`** - Checkbox component with Reka UI
- **`@perd-ui/collapsible-panel`** - Collapsible panel with smooth animations
- **`@perd-ui/text-input`** - Text input with floating label pattern

Each component is a standalone package that can be imported separately.

## Usage 📖

### Installing Components

```bash
# Required packages
pnpm add @perd-ui/theme @fontsource-variable/inter

# Components
pnpm add @perd-ui/check-box @perd-ui/collapsible-panel @perd-ui/text-input

# Peer dependencies
pnpm add vue @iconify/vue reka-ui
```

### Setup

Import theme once in `main.ts`:

```typescript
import { createApp } from 'vue'
import '@perd-ui/theme' // Design tokens, fonts, base styles
import App from './App.vue'

createApp(App).mount('#app')
```

Import components with their styles:

```vue
<script setup lang="ts">
  import CheckBox from '@perd-ui/check-box'
  import '@perd-ui/check-box/style.css'
</script>
```

## Icons 🖼️

Components use `@iconify/vue` for icons:

```vue
<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon icon="tabler:check" />
</template>
```

## Styling 🎨

- CSS custom properties
- Design tokens for colors, spacing, transitions, sizes, typography
- Material Design 3 inspired transitions
- Support for light/dark themes

## Linting 🧹

- ESLint (greenpie config)
- Oxlint
- Stylelint

## Commands 💻

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run build:packages` | Build all component packages |
| `pnpm run preview` | Preview production build |
| `pnpm run update:all` | Update all dependencies to latest |
| `pnpm run lint:eslint` | Run ESLint |
| `pnpm run lint:oxlint` | Run Oxlint |
| `pnpm run lint:styles` | Run Stylelint on Vue and CSS files |
| `pnpm run release:publish` | Build and publish packages to npm |

## Release Workflow 🚀

This project uses [Release Please](https://github.com/googleapis/release-please) for automated version management and CHANGELOG generation based on [Conventional Commits](https://www.conventionalcommits.org/).

### For Contributors

1. **Make changes** to components in `packages/*`
2. **Write conventional commits**:

   ```bash
   git commit -m "feat(check-box): add indeterminate state"
   git commit -m "fix(text-input): improve floating label accessibility"
   git commit -m "docs(theme): update color token examples"
   ```

   **Commit types:**
   - `feat:` - New feature (bumps minor version)
   - `fix:` - Bug fix (bumps patch version)
   - `feat!:` or `fix!:` - Breaking change (bumps major version)
   - `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:` - Other changes

3. **Push changes** to `master` branch

### Automated Release Process

1. **GitHub Action triggers** on push to `master`
2. **Release Please analyzes** conventional commits since last release
3. **Release PR is created/updated** automatically with:
   - Updated package versions in `package.json`
   - Generated `CHANGELOG.md` entries for each affected package
   - Updated internal dependency versions via `node-workspace` plugin

### For Maintainers

When ready to release:

1. **Review the Release PR** created by Release Please
   - Check generated CHANGELOGs
   - Verify version bumps are correct

2. **Merge the Release PR**
   - Release Please will automatically create GitHub Releases with tags

3. **Publish to npm** (manual step):

   ```bash
   git pull origin master
   pnpm run release:publish
   ```

   This builds all packages and publishes them to npm registry.

**Note:** Each package maintains independent versioning. The `node-workspace` plugin automatically handles internal dependency updates.
