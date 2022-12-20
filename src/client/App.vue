<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";
import { useCsssTabs } from "../packages/tabs/composables/csssTabs";

const { COMP: Layout } = useCsssLayout({
  style: {
    headerHeightSize: "small",
    asideWidthSize: "large",
    layoutType: "aside",
  },
});
const {
  COMP: Tabs,
  style,
  state,
  read,
} = useCsssTabs({
  state: {
    active: 1,
  },
  style: {
    classList: {
      tabs: ["", "hello"],
    },
  },
});
</script>

<template>
  <CLayout ref="Layout">
    <CTabs ref="Tabs">
      <template #list>
        <span v-for="index in 3" :key="index" class="tab">tab{{ index }}</span>
      </template>

      <template v-for="panel in read?.panels" :key="panel" #[panel]>
        <p>{{ panel }}</p>
      </template>
    </CTabs>
    <template #header>
      {{ read?.total }}
    </template>

    <template #aside />
    <template #footer>footer</template>
  </CLayout>
</template>

<style scoped>
.tab {
  margin: 0 4px;
}
</style>
