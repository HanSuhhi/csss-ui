<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, state, read } = useCsssTabs({
  state: {
    active: 1
  }
});

const changeActive = () => {
  if (state.value.active === read.value.total - 1) {
    state.value.active = 0;
  } else {
    state.value.active++;
  }
};

</script>

<template>
  <button @click="changeActive">change active</button>
  <c-tabs ref="Tabs">
    <template #list>
      <span v-for="index in 3" :key="index"> tab {{ index }} </span>
    </template>
    <template v-for="panel in read?.panels" :key="panel" #[panel]> this is the {{ panel }} </template>
  </c-tabs>
</template>
