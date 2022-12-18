<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, state, read } = useCsssTabs({
  state: {
    tabsClassList: ["", "reverse"]
  }
});

const toggle = () => {
  state.value.tabsClassList = state.value.tabsClassList.length === 1 ? ["", "reverse"] : ["reverse"];
};

</script>

<template>
  <button @click="toggle">toggle root class</button>
  <c-tabs ref="Tabs">
    <template #list>
      <span v-for="index in 3" :key="index"> tab {{ index }} </span>
    </template>
    <template v-for="panel in read?.panels" :key="panel" #[panel]> this is the {{ panel }} </template>
  </c-tabs>
</template>

<style scoped>
.reverse {
  flex-direction: column-reverse;
}
</style>