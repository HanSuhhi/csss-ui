<script setup lang="ts">
import { useCsssInput } from "csss-ui/csss-ui.es.js";

const { COMP: Input, state } = useCsssInput({
  state: {
    model: "I dreamed be a writer.",
    active: true,
  },
});
</script>

<template>
  <c-input ref="Input">
    <template #header>
      <span class="words">words to the past:</span>
    </template>
  </c-input>
</template>

<style scoped>
.words {
  margin-right: var(--normal);
  color: var(--green);
}
</style>
