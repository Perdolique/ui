# @perd-ui/text-input

Text input component with floating label pattern and built-in accessibility features.

## Installation

Install the package and its peer dependencies:

```bash
pnpm add @perd-ui/text-input @perd-ui/theme vue
```

### Peer Dependencies

- `vue` - Vue 3 framework
- `@perd-ui/theme` - Required for component styling

## Usage

```vue
<template>
  <TextInput
    v-model="email"
    label="Email"
    type="email"
    placeholder="Enter your email"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import TextInput from '@perd-ui/text-input'
  import '@perd-ui/text-input/style.css'

  const email = ref('')
</script>
```

## License

UNLICENSED
