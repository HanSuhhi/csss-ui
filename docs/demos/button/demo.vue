<script setup lang="ts">
import { useCsssButton } from "csss-ui/csss-ui.es.js";

const { COMP: Button } = useCsssButton({
  style: {
    property: {
      "--font-size": "1.3rem",
    },
  },
});
</script>

<template>
  <c-button ref="Button">click me!</c-button>
  <c-button color="blue">click me!</c-button>
  <c-button color="yellow">click me!</c-button>
  <c-button color="red">click me!</c-button>
</template>

<style scoped>
button {
  display: block;
  margin-bottom: 0.4rem;
}
</style>
