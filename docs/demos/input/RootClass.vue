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
</style>
