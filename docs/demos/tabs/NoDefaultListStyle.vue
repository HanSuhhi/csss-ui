<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, panels } = useCsssTabs({
  needDefaultListStyle: [false],
  setActive: [1],
});
</script>

<template>
  <c-tabs ref="Tabs">
    <template #list>
      <span v-for="index in 3" :key="index" class="list"> tab {{ index }} </span>
      <span data-disabled class="list">tab 4</span>
    </template>
    <template v-for="panel in panels" :key="panel" #[panel]> this is the {{ panel }} </template>
  </c-tabs>
</template>

<style scoped>
.list {
  margin: var(--small);
  padding: var(--mini) var(--small) 0;
  border: 1px solid var(--gray);
  transition: background-color var(--moment);
}

.list[data-active] {
  background-color: var(--red);
}

.list[data-disabled] {
  background-color: var(--gray-bright-2);
}

.list:hover {
  cursor: pointer;
}
</style>
