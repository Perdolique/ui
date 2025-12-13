<template>
  <details>
    <summary>
      {{ title }}

      <ChevronDownIcon class="arrow" />
    </summary>

    <div class="content">
      <slot />
    </div>
  </details>
</template>

<script lang="ts" setup>
  import ChevronDownIcon from '~icons/tabler/chevron-down'

  interface Props {
    title: string;
  }

  defineProps<Props>()
</script>

<style scoped>
  details {
    --padding: var(--spacing-16);
    --transition-duration: var(--easing-duration-medium2);

    position: relative;
    background-color: var(--color-panel-background);
    border: 1px solid var(--color-panel-border);
    border-radius: var(--border-radius-16);

    &::details-content {
      interpolate-size: allow-keywords;
      overflow: hidden;
      block-size: 0;
      transition:
        block-size var(--transition-duration) var(--easing-standard),
        content-visibility var(--transition-duration) var(--easing-standard) allow-discrete;
    }

    &[open]::details-content {
      block-size: auto;
    }
  }

  summary {
    list-style: none;
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
    cursor: pointer;

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

    summary:hover & {
      color: var(--color-text);
    }

    details[open] & {
      transform: rotate(180deg);
    }
  }

  .content {
    padding: var(--padding);
  }
</style>
