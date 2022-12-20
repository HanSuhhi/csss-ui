<script setup lang="ts">
import { useCsssLayout } from "csss-ui/csss-ui.es.js";
import { ref } from "vue";

const { COMP: Layout, style } = useCsssLayout();

const v = ref(true);
const toggle = () => {
  style.value.classList.header = v.value ? ["no-element"] : [""];
  v.value = !v.value;
};
</script>

<template>
  <button @click="toggle">toggle root class</button>
  <c-layout ref="Layout" class="demo-layout">
    main
    <template #header>header</template>
    <template #aside>aside</template>
    <template #footer>footer</template>
  </c-layout>
</template>
