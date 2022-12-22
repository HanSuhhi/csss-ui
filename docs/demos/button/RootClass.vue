<script setup lang="ts">
import { useCsssButton } from "csss-ui/csss-ui.es.js";

const { COMP: Button } = useCsssButton({
  style: {
    classList: {
      button: ["", "diy-button"],
    },
  },
});
</script>

<template>
  <c-button ref="Button">click me!</c-button>
</template>

<style scoped>
.diy-button {
  text-transform: uppercase;
}
</style>
