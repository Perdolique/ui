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
pnpm add @perd-ui/check-box @perd-ui/collapsible-panel @perd-ui/text-input
```

### Importing Components

**Important:** You must import both the component and its styles:

```typescript
// Import component
import CheckBox from '@perd-ui/check-box'
import CollapsiblePanel from '@perd-ui/collapsible-panel'
import TextInput from '@perd-ui/text-input'

// Import styles (required!)
import '@perd-ui/check-box/style.css'
import '@perd-ui/collapsible-panel/style.css'
import '@perd-ui/text-input/style.css'
```

**Why separate CSS imports?**

- Better performance (parallel loading)
- Improved caching
- SSR compatibility
- Tree-shaking support
- Zero runtime overhead

## Icons 🖼️

- `@iconify/vue` - Iconify integration for component packages
- `@iconify-json/tabler` - Tabler icons collection
- `@iconify-json/streamline` - Streamline icons collection
- `unplugin-icons` - Auto-import icons in root app

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
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm build:packages` | Build all component packages |
| `pnpm preview` | Preview production build |
| `pnpm update:all` | Update all dependencies to latest |
| `pnpm lint:eslint` | Run ESLint |
| `pnpm lint:oxlint` | Run Oxlint |
| `pnpm lint:styles` | Run Stylelint on Vue and CSS files |
