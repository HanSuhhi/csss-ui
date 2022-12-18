<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, state, read } = useCsssTabs({
  state: {
    panelClassList: ["", "pointless"]
  }
});

const toggle = () => {
  state.value.panelClassList = state.value.panelClassList.length === 1 ? ["", "pointless"] : ["pointless"];
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

