<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, panels } = useCsssTabs({
  setActive: [1],
});
</script>

<template>
  <c-tabs ref="Tabs">
    <template #list>
      <span v-for="index in 3" :key="index"> tab {{ index }} </span>
    </template>
    <template v-for="panel in panels" :key="panel" #[panel]> this is the {{ panel }} </template>
  </c-tabs>
</template>
