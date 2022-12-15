<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, panels } = useCsssTabs({
  setTabsClasses: [["layout"]],
  setPanelClasses: [["panel-layout"]],
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
.layout :deep(.panel-layout) {
  padding: var(--large);
  background-color: var(--green-bright-1);
}
</style>
