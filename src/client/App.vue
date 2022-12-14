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
} = useCsssTabs({
  setActive: [2],
  setTabsClasses: [["layout"]],
  // needDefaultListStyle: [false],
  // needDefaultPanelStyle: [false],
});
</script>

<template>
  <CLayout ref="Layout">
    <CTabs ref="Tabs">
      <template #list>
        <span v-for="index in 3" :key="index" class="tab">tab{{ index }}</span>
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

<style scoped>
.tab {
  margin: 0 4px;
}

.layout {
  flex-direction: column-reverse;
}
</style>
