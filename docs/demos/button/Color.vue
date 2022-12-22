<script setup lang="ts">
import { useCsssButton } from "csss-ui/csss-ui.es.js";

const { COMP: Button } = useCsssButton({
  style: {
    property: {
      "--bg-color-main": "var(--purple)",
      "--bg-color-sub": "var(--yellow)",
    },
  },
});
</script>

<template>
  <c-button>click me!</c-button>
  <c-button color="blue">click me!</c-button>
  <c-button color="yellow">click me!</c-button>
  <c-button color="red">click me!</c-button>
  <c-button ref="Button">click me!</c-button>
  <c-button class="self-button">click me!</c-button>
</template>

<style scoped>
button {
  display: block;
  margin-bottom: 0.4rem;
}

.self-button {
  --bg-color-main: var(--orange);
  --bg-color-sub: var(--blue-bright-2);
}
</style>
