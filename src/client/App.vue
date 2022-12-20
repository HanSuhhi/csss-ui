<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";
import AAside from "./components/AAside.vue";

const { COMP: Layout } = useCsssLayout({
  style: {
    headerHeightSize: "large",
    asideWidthSize: "large",
    layoutType: "header-aside",
  },
});
</script>

<template>
  <CLayout ref="Layout">
    main
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
