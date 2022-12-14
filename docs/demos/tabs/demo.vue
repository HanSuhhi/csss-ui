<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, total, panels } = useCsssTabs();
</script>

<template>
  <CTabs ref="Tabs">
    <template #list="{ listTotal, active }">
      <span>tab 1</span>
      <span>tab 2</span>
      <span data-disabled>disabled</span>
      <span>tab 4</span>
    </template>
    <template v-for="(panel, index) in panels" :key="panel" #[panel]>
      <p>{{ index }}</p>
    </template>
  </CTabs>
</template>
