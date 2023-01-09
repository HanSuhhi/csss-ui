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
    <template #footer>
      <span class="words"> —— I gave up after writing 300 words. </span>
    </template>
  </c-input>
</template>

<style scoped>
.words {
  margin-left: var(--normal);
  color: var(--red);
}
</style>
