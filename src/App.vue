<template>
  <main :class="$style.main">
    <CollapsiblePanel title="CheckBox">
      <div :class="$style.checkboxes">
        <CheckBox />
        <CheckBox model-value />
        <CheckBox disabled />

        <CheckBox
          disabled
          model-value
        />
      </div>
    </CollapsiblePanel>

    <CollapsiblePanel title="TextInput">
      <div :class="$style.textInputs">
        <TextInput label="Just with label" />

        <TextInput
          label="With placeholder"
          placeholder="Enter text here..."
        />

        <TextInput
          label="Disabled"
          placeholder="Can't type here"
          disabled
        />

        <TextInput
          label="Disabled with value"
          placeholder="Can't type here"
          value="Some text"
          disabled
        />
      </div>
    </CollapsiblePanel>
  </main>
</template>

<script setup lang="ts">
  import CheckBox from '@ui/check-box'
  import '@ui/check-box/style.css'
  import CollapsiblePanel from '@ui/collapsible-panel'
  import '@ui/collapsible-panel/style.css'
  import TextInput from '@ui/text-input'
  import '@ui/text-input/style.css'
</script>

<style module>
  .main {
    display: grid;
    row-gap: var(--spacing-8);
  }

  .checkboxes {
    display: flex;
    column-gap: var(--spacing-8);
  }

  .textInputs {
    width: max-content;
    display: grid;
    row-gap: var(--spacing-8);
  }
</style>
