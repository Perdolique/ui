<template>
  <CollapsibleRoot class="component">
    <CollapsibleTrigger class="trigger">
      {{ title }}

      <ChevronDownIcon class="arrow" />
    </CollapsibleTrigger>

    <CollapsibleContent class="content">
      <div class="body">
        <slot />
      </div>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<script lang="ts" setup>
  import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
  import ChevronDownIcon from '~icons/tabler/chevron-down'

  interface Props {
    title: string;
  }

  defineProps<Props>()
</script>

<style scoped>
  @keyframes expand {
    from { height: 0; }
    to { height: var(--reka-collapsible-content-height); }
  }

  @keyframes collapse {
    from { height: var(--reka-collapsible-content-height); }
    to { height: 0; }
  }

  .component {
    --padding: var(--spacing-16);
    --transition-duration: var(--easing-duration-medium2);

    position: relative;
    background-color: var(--color-panel-background);
    border: 1px solid var(--color-panel-border);
    border-radius: var(--border-radius-16);
  }

  .trigger {
    height: var(--input-height);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0 var(--padding);
    text-align: left;
    font-size: var(--font-size-20);
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition:
      box-shadow var(--easing-duration-short4) var(--easing-standard),
      border-color var(--transition-duration) var(--easing-standard),
      background-color var(--easing-duration-short4) var(--easing-standard);
    outline: none;
    border-radius: var(--border-radius-16);

    &:hover {
      background-color: var(--color-button-background);
    }

    &:focus-visible {
      box-shadow: var(--shadow-focus-ring);
    }
  }

  .arrow {
    width: 24px;
    height: 24px;
    color: var(--color-text-secondary);
    transition:
      transform var(--transition-duration) var(--easing-standard),
      color var(--easing-duration-short4) var(--easing-standard);

    .trigger:hover & {
      color: var(--color-text);
    }

    .component[data-state="open"] & {
      transform: rotate(180deg);
    }
  }

  .content {
    overflow: hidden;

    &[data-state="open"] {
      animation: expand var(--transition-duration) var(--easing-standard);
    }

    &[data-state="closed"] {
      animation: collapse var(--transition-duration) var(--easing-standard);
    }
  }

  .body {
    padding: var(--padding);
  }
</style>
