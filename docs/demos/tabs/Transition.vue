<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, state, read } = useCsssTabs({
  state: {
    needTransition: false
  }
});

const toggleTransition = () => {
  state.value.needTransition = !state.value.needTransition;
};

</script>

<template>
  <button @click="toggleTransition">toggle</button>
  <c-tabs ref="Tabs">
    <template #list>
      <span v-for="index in 3" :key="index"> tab {{ index }} </span>
    </template>
    <template v-for="panel in read?.panels" :key="panel" #[panel]> this is the {{ panel }} </template>
  </c-tabs>
</template>
