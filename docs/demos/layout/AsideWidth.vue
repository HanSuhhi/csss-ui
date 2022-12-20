<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Large } = useCsssLayout({
  style: {
    asideWidthSize: "large",
  },
});
const { COMP: Small } = useCsssLayout({
  style: {
    asideWidthSize: "small",
  },
});
const { COMP: Self } = useCsssLayout({
  style: {
    asideWidthSize: 20,
  },
});
</script>

<template>
  <CLayout ref="Large" class="demo-layout">
    main
    <template #aside>large</template>
  </CLayout>
  <hr>
  <CLayout ref="Small" class="demo-layout">
    main
    <template #aside>small</template>
  </CLayout>
  <hr>
  <CLayout ref="Self" class="demo-layout">
    main
    <template #aside>self</template>
  </CLayout>
</template>
