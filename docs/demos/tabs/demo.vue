<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, total, panels } = useCsssTabs();
</script>

<template>
  <CTabs ref="Tabs">
    <template #list="{ listTotal, active }">
      <p>tab 1</p>
      <p>tab 2</p>
      <p data-disabled>disabled</p>
      <p>tab 4</p>
    </template>
    <template v-for="(panel, index) in panels" :key="panel" #[panel]>
      <p>{{ index }}</p>
    </template>
  </CTabs>
</template>
