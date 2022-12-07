<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";

const { COMP: Layout } = useCsssLayout({
  setAsideWidthSize: ["small"],
  setStyleValue: [{ "--header-height": 10 }],
  setLayoutType: ["header-aside"],
});
</script>

<template>
  <CLayout ref="Layout">
    <template #header>header</template>
    <template #aside>aside</template>
    <template #default>main </template>
    <template #footer>footer</template>
  </CLayout>
</template>
