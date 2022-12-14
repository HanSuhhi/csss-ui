<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, panels } = useCsssTabs({
  needDefaultPanelStyle: [false],
  setActive: [1],
});
</script>

<template>
  <c-tabs ref="Tabs">
    <template #list>
      <span v-for="index in 3" :key="index" class="list"> tab {{ index }} </span>
      <span data-disabled class="list">tab 4</span>
    </template>
    <template v-for="panel in panels" :key="panel" #[panel]>
      <p :class="panel">this is the {{ panel }}</p>
    </template>
  </c-tabs>
</template>

<style scoped>
.panel-0 {
  background-color: var(--red-bright-2);
}

.panel-1 {
  background-color: var(--blue-deep-1);
}

.panel-2 {
  background-color: var(--yellow-deep-1);
}
</style>
