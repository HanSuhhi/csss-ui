<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Large } = useCsssLayout({
  style: {
    footerHeightSize: "large",
  },
});
const { COMP: Small } = useCsssLayout({
  style: {
    footerHeightSize: "small",
  },
});
const { COMP: Self } = useCsssLayout({
  style: {
    footerHeightSize: 8,
  },
});
</script>

<template>
  <CLayout ref="Large" class="demo-layout">
    main
    <template #footer>large</template>
  </CLayout>
  <hr>
  <CLayout ref="Small" class="demo-layout">
    main
    <template #footer>small</template>
  </CLayout>
  <hr>
  <CLayout ref="Self" class="demo-layout">
    main
    <template #footer>self</template>
  </CLayout>
</template>
