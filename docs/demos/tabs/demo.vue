<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, read } = useCsssTabs();
</script>

<template>
  <CTabs ref="Tabs">
    <template #list>
      <span>tab 1</span>
      <span>tab 2</span>
      <span data-disabled>disabled</span>
      <span>tab 4</span>
    </template>
    <template v-for="(panel, index) in read?.panels" :key="panel" #[panel]>
      <p>{{ index }}</p>
    </template>
  </CTabs>
</template>
