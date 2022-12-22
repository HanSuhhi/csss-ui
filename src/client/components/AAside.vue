<script setup lang="ts">
import { useCsssButton, useCsssTabs } from "@/index";

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
    property: {},
  },
});

const { COMP: Button } = useCsssButton({
  style: {
    classList: {},
    property: {
      "--font-size": "12rem",
    },
  },
});
</script>

<template>
  <CTabs ref="Tabs">
    <template #list>
      <c-button ref="Button" color="green" class="list-item">1</c-button>
    </template>

    <template #panel-0> 111 </template>
    <template #panel-1> 222 </template>
    <template #panel-2> 333 </template>
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

/* .list-item {
  padding: var(--large);
} */
</style>
