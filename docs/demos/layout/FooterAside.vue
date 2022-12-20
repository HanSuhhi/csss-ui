<script lang="ts" setup>
import { useCsssLayout } from "csss-ui/csss-ui.es.js";

const { COMP: Layout } = useCsssLayout({
  style: {
    layoutType: "footer-aside",
  },
});
</script>

<template>
  <CLayout ref="Layout" class="demo-layout">
    main
    <template #header>header</template>
    <template #aside>aside</template>
    <template #footer>footer</template>
  </CLayout>
</template>
