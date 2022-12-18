<script setup lang="ts">
import { useCsssLayout } from "../packages/layout/composables/csssLayout";
import { useCsssTabs } from "../packages/tabs/composables/csssTabs";
import { onMounted } from 'vue';
import { read } from 'fs';

const { COMP: Layout } = useCsssLayout({
  setAsideWidthSize: ["small"],
  setStyleValue: [{ "--header-height": 10 }],
  setFooterHeightSize: ["large"],
  setLayoutType: ["header-aside"],
});

const {
  COMP: Tabs,
  read
} = useCsssTabs({
  state: {
    active: 1,
  },
  style: {
    needTransition: false,
    classList: {
      tabs: ["", "hello"]
    },
  }
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
