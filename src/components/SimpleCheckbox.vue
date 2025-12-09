<template>
  <CheckboxRoot class="component">
    <CheckboxIndicator
      width="20"
      :as="Icon"
      icon="tabler:check"
    />
  </CheckboxRoot>
</template>

<script lang="ts" setup>
  import { Icon } from '@iconify/vue'
  import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
</script>

<style scoped>
  .component {
    width: 24px;
    height: 24px;
    display: inline flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: var(--border-radius-8);
    cursor: pointer;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-input-border);
    transition-property: border-color, background-color, box-shadow;
    transition-duration: var(--easing-duration-short4);
    transition-timing-function: var(--easing-standard);
    outline: none;
    color: var(--color-input-icon);
  }

  .component[data-state="checked"] {
    background-color: var(--color-input-background-active);
    border-color: var(--color-input-border-active);
  }

  .component[data-state="checked"]:hover:not(:disabled) {
    background-color: var(--color-input-background-active-hover);
    border-color: var(--color-input-border-active-hover);
  }

  .component:focus-visible {
    box-shadow: var(--shadow-focus-ring);
  }

  .component:disabled {
    opacity: var(--color-input-disabled-opacity);
    cursor: not-allowed;
  }

  .component:hover:not(:disabled) {
    background-color: var(--color-input-background-hover);
    border-color: var(--color-input-border-hover);
  }
</style>
