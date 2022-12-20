<script setup lang="ts">
import { useCsssTabs } from "@/index";

const { COMP: Tabs } = useCsssTabs({
  state: {
    active: 1,
  },
  style: {
    classList: {
      tabs: ["", "row"],
      list: ["", "column"],
      listItem: ["list-item"],
    },
  },
});
</script>

<template>
  <CTabs ref="Tabs">
    <template #list>
      <button class="list-item">1</button>
      <button class="list-item">2</button>
    </template>

    <template #panel-0> 111 </template>
    <template #panel-1> 222 </template>

    <!-- <template v-for="panel in read?.panels" :key="panel" #[panel]>
      <p>{{ panel }}</p>
    </template> -->
  </CTabs>
</template>

<style scoped>
.row {
  flex-direction: row;
  height: 100%;
}

.row :deep(.column) {
  flex-flow: column wrap;
  height: 100%;
  border-right: 1px solid red;
}

.list-item {
  padding: var(--large);
}
</style>
