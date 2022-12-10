<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";

const { COMP: Layout } = useCsssLayout({
  setAsideWidthSize: ["small"],
  setStyleValue: [{ "--header-height": 10 }],
  setFooterHeightSize: ["large"],
  setLayoutType: ["header-aside"],
});
</script>

<template>
  <CLayout ref="Layout">
    <CTabs>
      <template #list="{ num }">
        <p>tab 1{{ num }}</p>
        <p>tab 2</p>
      </template>
      <template #panel0>
        <p>1</p>
      </template>
      <template #panel1>
        <h1>2</h1>
      </template>
    </CTabs>

    <template #header> 1 </template>

    <template #aside />
    <template #footer>footer</template>
  </CLayout>
</template>
