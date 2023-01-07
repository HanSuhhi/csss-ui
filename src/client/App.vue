<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";
import AAside from "./components/AAside.vue";
import { useCsssTabs } from "@/index";

const { COMP: Layout } = useCsssLayout({
  style: {
    headerHeightSize: "large",
    asideWidthSize: "large",
    layoutType: "header-aside",
  },
});

const { COMP } = useCsssTabs({
  style: {
    classList: {},
  },
});
</script>

<template>
  <CLayout ref="Layout">
    <c-tabs ref="COMP">
      <template #list>
        <span v-if="true">1</span>
        <span v-show="true">1</span>
        <span v-for="index in 2" :key="index"> tab {{ index }} </span>
        <b>tab 3</b>
      </template>
    </c-tabs>
    <template #header> header </template>
    <template #aside>
      <a-aside />
    </template>
  </CLayout>
</template>

<style scoped>
.tab {
  margin: 0 4px;
}
</style>
