<template>
  <main>
    <CollapsiblePanel title="SimpleCheckbox">
      <div class="checkboxes">
        <SimpleCheckbox />
        <SimpleCheckbox model-value />
        <SimpleCheckbox disabled />

        <SimpleCheckbox
          disabled
          model-value
        />
      </div>
    </CollapsiblePanel>
  </main>
</template>

<script setup lang="ts">
  import SimpleCheckbox from './components/SimpleCheckbox.vue'
  import CollapsiblePanel from './components/CollapsiblePanel.vue'
</script>

<style scoped>
  .checkboxes {
    display: flex;
    column-gap: var(--spacing-8);
  }
</style>
