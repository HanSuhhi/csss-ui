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
    <template #footer>⭐</template>
  </c-input>
</template>
