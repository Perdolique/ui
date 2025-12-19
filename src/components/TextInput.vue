<template>
  <span :class="$style.component">
    <input
      v-bind="$attrs"
      :id="inputId"
      :class="$style.input"
      :placeholder="placeholder"
    >

    <label
      :for="inputId"
      :class="$style.label"
    >
      {{ label }}
    </label>
  </span>
</template>

<script lang="ts" setup>
  import { computed, useId } from 'vue'

  interface Props {
    label: string;
    id?: string;
    placeholder?: string;
  }

  const { placeholder = '', id } = defineProps<Props>()
  const inputId = computed(() => id ?? useId())

  defineOptions({
    inheritAttrs: false
  })
</script>

<style module>
  .component {
    --horizontal-padding: 24px;
    --padding-top: 12px;

    display: inline-block;
    position: relative;
    height: var(--input-height);
    background-color: var(--color-input-background);
    border-radius: var(--input-height);
    overflow: hidden;
    border: 1px solid var(--color-input-border);
    transition-property: border-color, box-shadow;
    transition-duration: var(--easing-duration-short4);
    transition-timing-function: var(--easing-standard);

    &:focus-within {
      border-color: transparent;
      box-shadow: var(--shadow-focus-ring);
    }

    &:has(.input:disabled) {
      opacity: var(--color-input-disabled-opacity);
      cursor: not-allowed;
    }
  }

  .input {
    appearance: none;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: calc(var(--padding-top) + 8px) var(--horizontal-padding) 0;
    border: none;
    outline: none;
    background: none;

    &::placeholder {
      color: var(--color-text-secondary);
      opacity: 0;
      transition: opacity var(--easing-duration-short4) var(--easing-standard);
    }

    &:focus {
      &::placeholder {
        opacity: 0.7;
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .label {
    position: absolute;
    inset: 0;
    pointer-events: none;
    padding: 0 var(--horizontal-padding);
    align-content: center;
    transform-origin: left top;
    transition-property: translate, font-size;
    transition-duration: var(--easing-duration-short4);
    transition-timing-function: var(--easing-standard);
    color: var(--color-text-secondary);

    .component:focus-within > &,
    .component:has(.input:not(:placeholder-shown)) & {
      translate: 0 calc(-1 * var(--padding-top));
      font-size: 0.8rem;
    }
  }
</style>
