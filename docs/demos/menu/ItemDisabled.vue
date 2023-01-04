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
            disabled: true,
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
      <div class="disabled" @click="toggle">{{ title }}</div>
    </template>
    <template #item-2="{ sub }">
      <span>{{ sub }}</span>
    </template>
  </c-menu>
</template>

<style scoped>
.csss-menu :deep(.menu-item:hover) {
  background-color: rgb(0 0 0 / 0%);
}

.disabled[data-disabled] {
  background-color: grey;
}

.disabled[data-disabled]:hover {
  background-color: none;
}
</style>
