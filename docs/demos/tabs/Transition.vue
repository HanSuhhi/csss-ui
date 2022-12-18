<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, style, read } = useCsssTabs({
  style: {
    needTransition: false
  }
});

const toggleTransition = () => {
  style.value.needTransition = !style.value.needTransition;
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
