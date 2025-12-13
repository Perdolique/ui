<template>
  <main>
    <CollapsiblePanel title="CheckBox">
      <div class="checkboxes">
        <CheckBox />
        <CheckBox model-value />
        <CheckBox disabled />

        <CheckBox
          disabled
          model-value
        />
      </div>
    </CollapsiblePanel>
  </main>
</template>

<script setup lang="ts">
  import CheckBox from './components/CheckBox.vue'
  import CollapsiblePanel from './components/CollapsiblePanel.vue'
</script>

<style scoped>
  .checkboxes {
    display: flex;
    column-gap: var(--spacing-8);
  }
</style>
