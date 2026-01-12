# @perd-ui/collapsible-panel

Collapsible panel component with smooth animations, built on native HTML `<details>` element.

## Installation

Install the package and its peer dependencies:

```bash
pnpm add @perd-ui/collapsible-panel @perd-ui/theme @iconify/vue vue
```

### Peer Dependencies

- `vue` - Vue 3 framework
- `@iconify/vue` - Icon component library
- `@perd-ui/theme` - Required for component styling

## Usage

```vue
<template>
  <CollapsiblePanel title="Panel Title">
    <p>Your collapsible content goes here.</p>
  </CollapsiblePanel>
</template>

<script setup lang="ts">
  import CollapsiblePanel from '@perd-ui/collapsible-panel'
  import '@perd-ui/collapsible-panel/style.css'
</script>
```

## Props

- `title: string` (required) - The text displayed in the panel header

## Slots

- **default** - The content to display inside the collapsible panel

```vue
<CollapsiblePanel title="Details">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</CollapsiblePanel>
```

## Events

The component uses native HTML `<details>` element, so it supports standard DOM events.

## Styling

The component uses CSS variables from `@perd-ui/theme`.

## Accessibility

The component leverages the native `<details>` element.

## License

UNLICENSED
