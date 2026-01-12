# @perd-ui/check-box

Accessible checkbox component built on top of Reka UI with customizable styling.

## Installation

Install the package and its peer dependencies:

```bash
pnpm add @perd-ui/check-box @perd-ui/theme reka-ui @iconify/vue vue
```

### Peer Dependencies

- `vue` - Vue 3 framework
- `reka-ui` - Headless UI component library providing accessibility features
- `@iconify/vue` - Icon component library
- `@perd-ui/theme` - Required for component styling

## Usage

```vue
<template>
  <CheckBox v-model="checked" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import '@perd-ui/check-box/style.css'
  import CheckBox from '@perd-ui/check-box'

  const checked = ref(false)
</script>
```

## Props

The component inherits all props from [Reka UI's CheckboxRoot](https://reka-ui.com/components/checkbox.html).

## Styling

The component uses CSS variables from `@perd-ui/theme`.

## License

UNLICENSED
