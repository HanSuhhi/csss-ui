<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";
import { useCsssTabs } from "../packages/tabs/composables/csssTabs";

const { COMP: Layout } = useCsssLayout({
  setAsideWidthSize: ["small"],
  setStyleValue: [{ "--header-height": 10 }],
  setFooterHeightSize: ["large"],
  setLayoutType: ["header-aside"],
});

const {
  COMP: Tabs,
  total,
  panels,
  active,
} = useCsssTabs({
  active: 1,
});
</script>

<template>
  <CLayout ref="Layout">
    <CTabs ref="Tabs">
      <template #list>
        <p v-for="index in 3" :key="index">tab{{ index }}</p>
        <p>
          <span>tab 1</span>
          {{ active }}
        </p>
      </template>
      <template v-for="panel in panels" :key="panel" #[panel]>
        <p>{{ panel }}</p>
      </template>
    </CTabs>

    <template #header> {{ total }}</template>

    <template #aside />
    <template #footer>footer</template>
  </CLayout>
</template>
