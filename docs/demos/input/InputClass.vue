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
      inputMain: ["", "input"],
    },
  },
});
</script>

<template>
  <c-input ref="Input">
    <template #footer>⭐</template>
  </c-input>
</template>

<style scoped>
.input-box {
  padding: var(--normal);
}

.input-box :deep(.input) {
  color: var(--green);
}
</style>
