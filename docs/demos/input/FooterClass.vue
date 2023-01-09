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
      footer: ["", "footer"],
    },
  },
});
</script>

<template>
  <c-input ref="Input">
    <template #footer>—— I gave up after writing 300 words. </template>
  </c-input>
</template>

<style scoped>
.input-box {
  padding: var(--normal);
}

.input-box :deep(.footer) {
  margin-left: var(--normal);
  color: var(--red);
}
</style>
