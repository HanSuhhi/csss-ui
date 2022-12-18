<script setup lang="ts">
import { useCsssTabs } from "csss-ui/csss-ui.es.js";

const { COMP: Tabs, style, read } = useCsssTabs({
  style: {
    classList: {
      list: ["", "pointless"]
    }
  }
});

const toggle = () => {
  style.value.classList.list = style.value.classList.list.length === 1 ? ["", "pointless"] : ["pointless"];
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
