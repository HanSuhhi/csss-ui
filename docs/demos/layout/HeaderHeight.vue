<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Large } = useCsssLayout({
  style: {
    headerHeightSize: "large",
  },
});
const { COMP: Small } = useCsssLayout({
  style: {
    headerHeightSize: "small",
  },
});
const { COMP: Self } = useCsssLayout({
  style: {
    headerHeightSize: 8,
  },
});
</script>

<template>
  <CLayout ref="Large" class="demo-layout">
    main
    <template #header>large</template>
  </CLayout>
  <hr />
  <CLayout ref="Small" class="demo-layout">
    main
    <template #header>small</template>
  </CLayout>
  <hr />
  <CLayout ref="Self" class="demo-layout">
    main
    <template #header>self</template>
  </CLayout>
</template>
