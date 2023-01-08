<script setup lang="ts">
import { useCsssMenu } from "csss-ui/csss-ui.es.js";

const { COMP: Menu } = useCsssMenu({
  state: {
    menuList: [
      {
        name: "plant",
        children: [
          {
            title: "fruit",
            children: [
              {
                sub: "apple 🍎",
              },
              {
                sub: "orange 🍊",
              },
              {
                sub: "banana 🍌",
              },
            ],
          },
        ],
      },
    ],
  },
  style: {
    classList: {
      items: {
        0: ["details"],
        1: ["details"],
        2: ["details"],
      },
    },
  },
});
</script>

<template>
  <c-menu ref="Menu">
    <template #item-0="{ toggle, name }">
      <div @click="toggle">
        {{ name }}
      </div>
    </template>
    <template #item-1="{ title, toggle }">
      <div @click="toggle">{{ title }}</div>
    </template>
    <template #item-2="{ sub }">
      <span>{{ sub }}</span>
    </template>
  </c-menu>
</template>

<style scoped>
.csss-menu :deep(.details[data-active]) {
  background-color: var(--yellow);
}
</style>
