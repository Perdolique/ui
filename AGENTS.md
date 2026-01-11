# Guidelines for LLM agents

## Agent workflow requirements

**IMPORTANT**: After making significant changes to the project (adding features, changing architecture, updating build process, etc.), you MUST:

1. Update this `AGENTS.md` file if the changes affect how agents should work with the project
2. Update `README.md` if the changes affect how users should use the project
3. These updates should be part of your work, not a separate manual task for the user

## General instructions

- Always use English in code or any other files.
- Try to update README.md file if needed to keep it up to date.

## Project structure

This is a pnpm monorepo workspace with:

- Root app in `/src` - development playground
- Component packages in `/packages` - publishable UI components
- Theme package in `/packages/theme` - CSS design tokens

### Component packages pattern

Each component package follows this structure:

```text
packages/{component-name}/
├── package.json   # Name: @perd-ui/{component-name}, peerDependencies only
├── index.ts       # Export default Component
├── vite.config.ts # Library build with CSS modules scoped naming
├── tsconfig.json  # Extends @vue/tsconfig/tsconfig.dom.json
└── src/
    └── {ComponentName}.vue # Single component with CSS modules
```

**Key conventions:**

- Package name: `@perd-ui/{component-name}` (kebab-case)
- Use `peerDependencies` only (no regular dependencies)
- External deps: `catalog:` reference (from pnpm-workspace.yaml)
- Internal deps: `workspace:` reference (e.g., `@perd-ui/theme`)
- Always externalize peerDependencies in vite.config.ts rollupOptions
- CSS modules with scoped naming: `{baseName}_{className}_{hash}`

**Icon handling:**

- In packages: Use `@iconify/vue` component (peerDependency)

  ```vue
  import { Icon } from '@iconify/vue'
  <Icon icon="tabler:check" />
  ```

- In root app: Use `unplugin-icons` auto-import

  ```vue
  import IconName from '~icons/collection/icon-name'
  ```

**Theme integration:**

- All components rely on CSS variables from `@perd-ui/theme`
- No need to import theme in components - provided by root app
- Use semantic tokens: `--color-*`, `--spacing-*`, `--easing-*`, etc.

### Build and publish configuration

Each component package is configured for npm publishing:

**package.json required fields:**

```json
{
  "main": "./dist/{component-name}.js",
  "module": "./dist/{component-name}.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/{component-name}.js"
    },
    "./style.css": "./dist/{component-name}.css"
  },
  "files": ["dist"]
}
```

**Build output** (in `dist/` folder):

- `{component-name}.js` - ES module bundle
- `{component-name}.css` - Extracted CSS with scoped class names
- `index.d.ts` - TypeScript entry point
- `src/{ComponentName}.d.ts` - Component type declarations

**TypeScript declarations:**

- Generated via `unplugin-dts` with Vue processor
- Configured with `processor: 'vue'`, `insertTypesEntry: true`, `cleanVueFileName: true`

**CSS handling:**

- CSS is extracted to separate `.css` files (NOT injected into JS)
- Users must import CSS separately: `import '@perd-ui/{component}/style.css'`
- This approach provides better performance, caching, and SSR support

## Commands

- Build packages: `pnpm build:packages` - Build all component packages for publishing
- Linters can be run with the following commands:
  - `pnpm lint:eslint` - Run ESLint
  - `pnpm lint:oxlint` - Run Oxlint
  - `pnpm lint:styles` - Run Stylelint on Vue and CSS files
