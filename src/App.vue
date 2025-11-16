<template>
  <main>
    <section :class="$style.section">
      <h2>SimpleCheckbox</h2>

      <div :class="$style.checkboxes">
        <SimpleCheckbox />
        <SimpleCheckbox :model-value="true" />
        <SimpleCheckbox disabled />
        <SimpleCheckbox disabled :model-value="true" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import SimpleCheckbox from './components/SimpleCheckbox.vue'
</script>

<style module>
  .section {
    display: grid;
    row-gap: var(--spacing-16);
  }

  .checkboxes {
    display: flex;
    column-gap: var(--spacing-8);
  }
</style>
