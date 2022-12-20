<script setup lang="ts">
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Layout } = useCsssLayout({
  style: {
    asideWidthSize: "small",
    headerHeightSize: 8,
    layoutType: "header-aside",
    property: {
      "--footer-height": "80px",
    },
  },
});
</script>

<template>
  <CLayout ref="Layout" class="demo-layout">
    <template #header>header</template>
    <template #aside>aside</template>
    <template #default>main </template>
    <template #footer>footer</template>
  </CLayout>
</template>
