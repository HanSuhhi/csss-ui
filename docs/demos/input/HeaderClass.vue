<script setup lang="ts">
import { useCsssInput } from "csss-ui/csss-ui.es.js";

const { COMP: Input } = useCsssInput({
  state: {
    model: "I dreamed be a writer.",
    active: true,
  },
  style: {
    classList: {
      input: ["", "input-box"],
      header: ["", "header"],
    },
  },
});
</script>

<template>
  <c-input ref="Input">
    <template #header> words to the past: </template>
  </c-input>
</template>

<style scoped>
.input-box {
  padding: var(--normal);
}

.input-box :deep(.header) {
  margin-right: var(--normal);
  color: var(--green);
}
</style>
