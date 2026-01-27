<template>
  <span :class="$style.component">
    <input
      :id="inputId"
      v-model="model"
      :class="$style.input"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :inputmode="inputmode"
      :pattern="pattern"
      :placeholder="placeholder"
      :required="required"
      :type="type"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
    >

    <label
      :for="inputId"
      :class="[$style.label, { withValue: hasValue }]"
    >
      {{ label }}
    </label>
  </span>
</template>

<script lang="ts" setup>
  import { computed, useId, type InputHTMLAttributes } from 'vue'

  interface Props {
    readonly label: string;
    readonly id?: string;
    readonly autocomplete?: InputHTMLAttributes['autocomplete'];
    readonly autofocus?: InputHTMLAttributes['autofocus'];
    readonly inputmode?: InputHTMLAttributes['inputmode'];
    readonly pattern?: InputHTMLAttributes['pattern'];
    readonly placeholder?: InputHTMLAttributes['placeholder'];
    readonly required?: InputHTMLAttributes['required'];
    readonly type?: InputHTMLAttributes['type'];
    readonly disabled?: InputHTMLAttributes['disabled'];
  }

  type Emits = (event: 'focus' | 'blur') => void

  const props = defineProps<Props>()
  const emit = defineEmits<Emits>()

  const model = defineModel<string>({
    default: ''
  })

  const hasValue = computed(() => model.value !== '')
  // @ts-expect-error InputHTMLAttributes['autocomplete'] causes issues for vue-tsc https://github.com/vuejs/language-tools/issues/594
  const inputId = computed(() => props.id ?? useId())

  function onFocus() {
    emit('focus')
  }

  function onBlur() {
    emit('blur')
  }

  export type {
    Props as TextInputProps
  }
</script>

<style module>
  .component {
    --horizontal-padding: var(--spacing-16);
    --padding-top: 12px;

    display: inline-block;
    width: 100%;
    position: relative;
    height: var(--input-height);
    background-color: var(--color-input-background);
    border-radius: var(--border-radius-16);
    overflow: hidden;
    border: 1px solid var(--color-input-border);
    transition:
      border-color var(--easing-duration-short4) var(--easing-standard),
      box-shadow var(--easing-duration-short4) var(--easing-standard);

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
    position: absolute;
    inset: 0;
    padding: var(--padding-top) var(--horizontal-padding) 0;
    border: none;
    outline: none;
    background: none;

    &::placeholder {
      color: transparent;
      user-select: none;
      transition: color var(--easing-duration-short4) var(--easing-standard);
    }

    &:focus::placeholder {
      color: var(--color-input-placeholder);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .label {
    position: absolute;
    inset: 0;
    left: var(--horizontal-padding);
    align-content: center;
    pointer-events: none;
    user-select: none;
    color: var(--color-text-secondary);
    transform-origin: top left;
    transition:
      translate var(--easing-duration-short3) linear,
      scale var(--easing-duration-short3) linear;

    &:global(.withValue),
    .component:focus-within > & {
      translate: 0 -5px;
      scale: 0.7;
    }
  }
</style>
